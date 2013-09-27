function Tower(config) {
    this.config = config;

    this.fire = function(target) {
        new Projectile(this.config.projectile);
    }
}