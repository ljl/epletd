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
    var world = TD.world = new b2World(new b2Vec2(0, 3), true);
    io.addB2World(world);

    // Add groups
    io.addGroup('enemies', 1);
    io.addGroup('towers', 2);
    io.addGroup('projectiles', 3);


    io.setB2Framerate(60, function () {
        //code called 60x a second
        var towers = TD.io.getGroup('towers');
        towers.forEach(function(tower){
            tower.parent.update();
        });

        var projectiles = TD.io.getGroup('projectiles');
        projectiles.forEach(function(projectile){
            projectile.parent.update();
        });
    });

    var t = new Tower(32 * 5 - 15, 32 * 5 - 15, TowerConfig.basic);
    io.addToGroup('towers', t.body);
    t = new Tower(32 * 6 - 15, 32 * 6 - 15, TowerConfig.basic);
    io.addToGroup('towers', t.body);
    t = new Tower(32 * 7 - 15, 32 * 7 - 15, TowerConfig.basic);
    io.addToGroup('towers', t.body);
    t = new Tower(32 * 8 - 15, 32 * 8 - 15, TowerConfig.basic);
    io.addToGroup('towers', t.body);


    // Contact listener
    var listener = new Box2D.Dynamics.b2ContactListener;
    listener.BeginContact = function(contact) {
        //console.log(contact.GetFixtureB().GetBody().parent);
    };

    world.SetContactListener(listener);


    io.canvas.addEventListener('mousedown', function (event) {
        var pos = map.getCellCenter(io.getEventPosition(event));

        var enemy = new Enemy(pos.x, pos.y, EnemyConfig.normal);
        io.addToGroup('enemies', enemy.body);
    });
};



iio.start(EpleTD);