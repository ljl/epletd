function Tower(x, y, config) {
    this.config = config;

    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.fire = function(target) {
        new Projectile(this.config.projectile);
    };
}