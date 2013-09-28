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