function Wall(config) {
    this.type = 'wall';
    this.name = config.name;
    this.body = TD.createBox2DBody(config.startX, config.startY, config);
    this.body.parent = this;
}
