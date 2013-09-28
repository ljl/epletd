var b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2World = Box2D.Dynamics.b2World
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;

var TD = {
    io: {},
    world: {},
    map: {},
    createBox2DBody: function (x, y, config) {
        var fixDef = new b2FixtureDef;
        fixDef.density = config.density;
        fixDef.friction = config.friction;
        fixDef.restitution = config.restitution;

        switch (config.shape) {
        case 'circle':
            fixDef.shape = new b2CircleShape(toMeters(16));
            break;
        case 'square':
            fixDef.shape = new b2PolygonShape;
            fixDef.shape.SetAsBox(toMeters(16), toMeters(16));
            break;
        }

        var bodyDef;
        bodyDef = new b2BodyDef;
        bodyDef.type = b2Body.b2_dynamicBody;
        bodyDef.position.Set(toMeters(x), toMeters(y));

        var body = TD.world.CreateBody(bodyDef);

        var fixture = body.CreateFixture(fixDef);
        fixture.GetShape()
            .prepGraphics(TD.io.b2Scale)
            .setFillStyle(config.color);

        return body;
    }
};

EpleTD = function (io) {
    // Make io accessible to all classes
    TD.io = io;

    // Create map and add to canvas
    var map = TD.map = new Map(MapConfig);
    io.addObj(map.grid);

    // Create box2d world
    var world = TD.world = new b2World(new b2Vec2(0, 3), true);
    io.addB2World(world);


    io.setB2Framerate(60, function () {
        //code called 60x a second
    });

    createStatics(io, world, 32 * 5 - 15, 32 * 5 - 15);
    createStatics(io, world, 32 * 6 - 15, 32 * 6 - 15);
    createStatics(io, world, 32 * 7 - 15, 32 * 7 - 15);
    createStatics(io, world, 32 * 8 - 15, 32 * 8 - 15);

    io.canvas.addEventListener('mousedown', function (event) {
        var pos = map.getCellCenter(io.getEventPosition(event));

        var enemy = new Enemy(pos.x, pos.y, world, io, EnemyConfig.normal);
        io.addObj(enemy.body);
    });
};


function createStatics(io, world, x, y) {
    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.1;
    fixDef.restitution = 0.5;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(toMeters(16), toMeters(16));

    //Define a body
    var bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.Set(toMeters(x), toMeters(y));

    //Create the body
    var body = world.CreateBody(bodyDef);

    //Create the fixture
    var fixture = body.CreateFixture(fixDef);
    fixture.GetShape()
        .prepGraphics(io.b2Scale)
        .setFillStyle('blue');

    io.addObj(body);
}

function toMeters(val) {
    return val / 30;
}

function toPixels(val) {
    return val * 30;
}

iio.start(EpleTD);