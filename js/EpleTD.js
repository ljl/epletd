var b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2World = Box2D.Dynamics.b2World
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;

EpleTD = function (io) {
    // Make io accessible to all classes
    TD.io = io;

    // Create map and add to canvas
    var map = TD.map = new Map(MapConfig);
    io.addObj(map.grid);

    // Create box2d world
    var world = TD.world = new b2World(new b2Vec2(0, MapConfig.gravity), true);
    io.addB2World(world);

    // Add groups
    io.addGroup('enemies', 1);
    io.addGroup('towers', 2);
    io.addGroup('projectiles', 3);
    io.addGroup('walls', 3);
    io.addGroup('GUI', 5);

    // Create resource text
    initResources();

    // Create walls
    createWalls();

    // Loop
    io.setB2Framerate(60, function () {
        //code called 60x a second
        var towers = TD.io.getGroup('towers');
        towers.forEach(function (tower) {
            tower.parent.update();
        });

        var projectiles = TD.io.getGroup('projectiles');
        projectiles.forEach(function (projectile) {
            projectile.parent.update();
        });

        var enemies = TD.io.getGroup('enemies');
        enemies.forEach(function (enemy) {
            enemy.parent.update();
        });
    });

    setInterval(function () {
        var projectiles = TD.io.getGroup('projectiles');
        projectiles.forEach(function (projectile) {
            projectile.parent.cleanup();
        });

        var enemies = TD.io.getGroup('enemies');
        enemies.forEach(function (enemy) {
            enemy.parent.cleanup();
        });

        var towers = TD.io.getGroup('towers');
        towers.forEach(function (tower) {
            tower.parent.cleanup();
        });
    }, 17);

    // Spawn enemies


    setInterval(function () {
        var enemy = new Enemy((MapConfig.cell.x * MapConfig.cols / 3), MapConfig.cell.y, EnemyConfig.normal);
        io.addToGroup('enemies', enemy.body);
    }, 700);


    // Contact listener
    var listener = new Box2D.Dynamics.b2ContactListener;
    listener.BeginContact = function (contact) {
        //console.log(contact.GetFixtureB().GetBody().parent);
        var fixA = contact.GetFixtureA();
        var fixB = contact.GetFixtureB();
        var classA = fixA.GetBody().parent;
        var classB = fixB.GetBody().parent;
        var enemy = (classA.type == 'enemy' ? classA : (classB.type == 'enemy' ? classB : null));
        var projectile = (classA.type == 'projectile' ? classA : (classB.type == 'projectile' ? classB : null));
        var wall = (classA.type == 'wall' ? classA : (classB.type == 'wall' ? classB : null));

        if (enemy && projectile) {
            projectile.hit(enemy);
        }

        if (wall && enemy) {
            if (wall.name == 'bottom') {
                enemy.completed();
            }
        }
    };

    world.SetContactListener(listener);

    window.addEventListener('keydown', function (event) {
        if (iio.keyCodeIs('1', event)) {
            TD.placingTower = true;
            TD.currentTower = TowerConfig.basic;
        }
        if (iio.keyCodeIs('2', event)) {
            TD.placingTower = true;
            TD.currentTower = TowerConfig.sniper;
        }
    });

    io.canvas.addEventListener('mousedown', function (event) {
        var cell = map.grid.getCellAt(io.getEventPosition(event));

        if (TD.placingTower && !map.grid.cells[cell.x][cell.y].hasBuilding) {
            if (TD.resource.money >= TD.currentTower.price) {
                var pos = map.getCellCenter(io.getEventPosition(event));
                var tower = new Tower(pos.x, pos.y, TD.currentTower);
                io.addToGroup('towers', tower.body);
                map.grid.cells[cell.x][cell.y].hasBuilding = true;
                TD.resource.update(-TD.currentTower.price);
            }
        }
    });

    io.canvas.addEventListener('mousemove', function (event) {
        if (TD.placingTower) {
            var pos = map.getCellCenter(io.getEventPosition(event));
            TD.towerIndicator.setPos(pos);
        }
    });
};

function createWalls() {
    WallConfig.forEach(function (wallConf) {
        var w = new Wall(wallConf);
        TD.io.addToGroup('walls', w.body);
    });
}

function initResources() {
    TD.resource = new Resource();
    TD.resource.update(0);

    TD.towerIndicator = new iio.Rect(50, 50, 32, 32).setFillStyle('rgba(0,0,0,0.1)');
    TD.io.addToGroup('GUI', TD.towerIndicator);
}


iio.start(EpleTD);