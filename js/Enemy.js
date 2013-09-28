function Enemy(config) {
    this.name        = config.name;
    this.color       = config.color;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.density     = config.density;
    this.gravity     = config.gravity;
    this.damping     = config.damping;
    this.friction    = config.friction;
    this.restitution = config.restitution;
    this.health      = config.health;

    this.shapeObject;

    // Create shape
    this.fixDef = new b2FixtureDef;
    this.fixDef.parent = this; // Circle reference bitch
    this.fixDef.torque = config.torque;
    this.fixDef.density = config.density;
    this.fixDef.friction = config.friction;
    this.fixDef.restitution = config.restitution;

    switch (config.shape) {
        case 'circle':
            this.fixDef.shape = new b2CircleShape;
            break;
    }
}