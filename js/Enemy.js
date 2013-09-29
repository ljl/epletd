function Enemy(x, y, config) {
    this.type        = 'enemy';
    this.name        = config.name;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.health      = config.health;
    this.spawnTime   = new Date().getTime();
    this.explosionTime = config.explosionTime;
    this.explosionRadius = config.explosionRadius;

    this.body = TD.createBox2DBody(x, y, config.box2d, {cat:2, mask:3});
    this.body.parent = this;

    this.applyDamage = function(damage) {
        this.health -= damage;
    }

    this.update = function() {
        var currentTime = new Date().getTime();
        var diff = currentTime - this.spawnTime;
        if (diff > this.explosionTime) {
            this.explode();
        }
    }

    this.explode = function() {
        var x = toPixels(this.body.GetPosition().x);
        var y = toPixels(this.body.GetPosition().y);


        var towers = TD.io.getGroup('towers');
        for (var i = 0; i < towers.length; i++) {
            var tx = toPixels(towers[i].GetPosition().x);
            var ty = toPixels(towers[i].GetPosition().y);
            var distance = getDistance(x, y, tx, ty);
            if (distance <= this.explosionRadius) {
                // BOOM
                towers[i].parent.kill();
                this.applyDamage(25061986);
            }
        }
    }

    this.cleanup = function() {
        if (this.health <= 0) {
            TD.world.DestroyBody(this.body);
            TD.io.rmvObj(this.body);
        }
    }
}