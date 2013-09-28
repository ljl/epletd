function Projectile(x, y, config, targetEnemy) {
    this.config = config;
    this.targetEnemy = targetEnemy;

    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;
}