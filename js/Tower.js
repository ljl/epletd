function Tower(x, y, config) {
    this.fireInterval = config.fireInterval;
    this.lastShot = new Date().getTime();


    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.update = function() {
        // Test if fire is off cooldown.
        var currentTime = new Date().getTime();
        if ((currentTime - this.lastShot) >= this.fireInterval) {
            this.fire();
            this.lastShot = currentTime;
        }
    }

    this.fire = function() {
        // Find closest enemy
        var enemies = TD.io.getGroup('enemies');
        enemies.forEach(function(enemy, index) {
                        
        });
        new Projectile(this.x, this.y, this.config.projectile, targetEnemy);
    };
}