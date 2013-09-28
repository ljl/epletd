function Tower(x, y, config) {
    this.config = config;
    this.x = x;
    this.y = y;


    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.fire = function(targetEnemy) {
        new Projectile(this.x, this.y, this.config.projectile, targetEnemy);
    };
}