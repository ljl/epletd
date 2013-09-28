var b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2World = Box2D.Dynamics.b2World
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;


//Global vars/functions
var TD = {
    io: {},
    world: {},
    map: {},
    createBox2DBody: function (x, y, config, filter) {
        var fixDef = new b2FixtureDef;
        fixDef.density = config.density;
        fixDef.friction = config.friction;
        fixDef.restitution = config.restitution;
        fixDef.mass = config.mass;
        if (filter) {
            fixDef.filter.categoryBits = filter.cat;
            fixDef.filter.maskBits = filter.mask;
        }



        switch (config.shape) {
        case 'circle':
            fixDef.shape = new b2CircleShape(toMeters(config.size));
            break;
        case 'square':
            fixDef.shape = new b2PolygonShape;
            fixDef.shape.SetAsBox(toMeters(config.size), toMeters(config.size));
            break;
        }

        var bodyDef;
        bodyDef = new b2BodyDef;
        switch (config.type) {
        case 'static':
            bodyDef.type = b2Body.b2_staticBody;
            break;
        case 'dynamic':
            bodyDef.type = b2Body.b2_dynamicBody;
            break;
        case 'kinematic':
            bodyDef.type = b2Body.b2_kinematicBody;
            break;
        }

        bodyDef.position.Set(toMeters(x), toMeters(y));

        var body = TD.world.CreateBody(bodyDef);

        var fixture = body.CreateFixture(fixDef);
        fixture.GetShape()
            .prepGraphics(TD.io.b2Scale)
            .setFillStyle(config.color);

        return body;
    }
};

function toMeters(val) {
    return val / 30;
}

function toPixels(val) {
    return val * 30;
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getNormalizedVector(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var xyratio = dx / dy;
    var angle = Math.atan2(dy, dx);
    return {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
}
