function Tower(x, y, config) {
    this.config = config;
    this.fireInterval = config.fireInterval;
    this.range = config.range;
    this.lastShot = new Date().getTime();
    this.dead = false;


    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.update = function() {
        // Test if fire is off cooldown.
        var currentTime = new Date().getTime();
        if ((currentTime - this.lastShot) >= this.fireInterval) {
            this.fire();
        }
    }

    this.kill = function() {
        this.dead = true;
        // *sadface*
    }

    this.fire = function() {
        var x = toPixels(this.body.GetPosition().x);
        var y = toPixels(this.body.GetPosition().y);
        
        // Find closest enemy
        var enemies = TD.io.getGroup('enemies');
        var closestEnemy = null;
        var closestDistance = 10000;
        enemies.forEach(function(enemy) {
            var distance = getDistance(x, y, toPixels(enemy.GetPosition().x), toPixels(enemy.GetPosition().y));
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEnemy = enemy;
            }
        });

        // Did we even find an enemy?
        if (closestEnemy && closestDistance <= this.range) {
            var projectile = new Projectile(x, y, this.config.projectile, closestEnemy.parent);
            TD.io.addToGroup('projectiles', projectile.body);
        }

        // Set timer for last shot
        this.lastShot = new Date().getTime();
    }

    this.cleanup = function() {
        if (this.dead) {
            TD.world.DestroyBody(this.body);
            TD.io.rmvObj(this.body);
        }
    }
}