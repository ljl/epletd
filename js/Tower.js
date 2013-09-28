function Tower(x, y, config) {
    this.config = config;
    this.fireInterval = config.fireInterval;
    this.lastShot = new Date().getTime();


    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.update = function() {
        // Test if fire is off cooldown.
        var currentTime = new Date().getTime();
        if ((currentTime - this.lastShot) >= this.fireInterval) {
            console.log('We can fire!');
            this.fire();
            this.lastShot = currentTime;
        }
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
        if (closestEnemy) {
            var projectile = new Projectile(x, y, this.config.projectile, closestEnemy);
            TD.io.addToGroup('projectiles', projectile.body);
            console.log('OHOY, SHOTS FIRED!');
        }
    };
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}