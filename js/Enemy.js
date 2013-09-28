function Enemy(x, y, world, io, config) {
    this.name        = config.name;
    this.color       = config.color;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.damping     = config.damping;
    this.health      = config.health;
    this.body;

    this.createBox2DBody = function(x, y, world, io, config) {
        var fixDef = new b2FixtureDef;
        fixDef.density = config.density;
        fixDef.friction = config.friction;
        fixDef.restitution = config.restitution;
        
        switch(config.shape) {
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

        var body = world.CreateBody(bodyDef);

        var fixture = body.CreateFixture(fixDef);
        fixture.GetShape()
            .prepGraphics(io.b2Scale)
            .setFillStyle(config.color);

        return body;
    }

    this.body = this.createBox2DBody(x, y, world, io, config);
    this.body.parent = this;
}