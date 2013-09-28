function Enemy(x, y, world, io, config) {
    this.name        = config.name;
    this.color       = config.color;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.damping     = config.damping;
    this.health      = config.health;

    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;
}