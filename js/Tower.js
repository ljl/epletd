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
        var x = toPixels(this.body.GetPosition().x);
        var y = toPixels(this.body.GetPosition().y);
        // Find closest enemy
        var enemies = TD.io.getGroup('enemies');
        var closestEnemy = null;
        var closestDistance = 10000;
        enemies.forEach(function(enemy, index) {
            var distance = getDistance(x, y, toPixels(enemy.GetPosition().x), toPixels(enemy.GetPosition().y));
            if (distance < closestDistance) {
                closestDistance = distance;
                closestEnemy = enemy;
            }
        });
        new Projectile(x, y, this.config.projectile, closestEnemy);
    };
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}