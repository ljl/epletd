function Enemy(config) {
    this.name        = config.name;
    this.color       = config.color;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.density     = config.density;
    this.torque      = config.torque;
    this.gravity     = config.gravity;
    this.damping     = config.damping;
    this.friction    = config.friction;
    this.restitution = config.restitution;
    this.health      = config.health;

    this.shapeObject;

    // Create shape
    switch (config.shape) {
        case 'circle':
            this.shapeObject = new iio.Circle();
            this.shapeObject.parent = this;
            break;
    }
}