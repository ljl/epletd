function Projectile(x, y, config, targetEnemy) {
    this.type = "projectile";
    this.config = config;
    this.targetEnemy = targetEnemy;
    this.speed = config.speed;
    this.damage = config.damage;
    this.dead = false;

    this.body = TD.createBox2DBody(x, y, config.box2d, {cat: 1, mask: 2});
    this.body.parent = this;

    this.update = function() {
        // Lets remove ourselves if enemy is dead.
        if (this.targetEnemy.health <= 0) {
            TD.io.rmvObj(this.body);
        }

        // Update position based on target enemy
        var x = this.body.GetPosition().x;
        var y = this.body.GetPosition().y;
        var targetX = this.targetEnemy.body.GetPosition().x;
        var targetY = this.targetEnemy.body.GetPosition().y;
        var direction = getNormalizedVector(x, y, targetX, targetY);
        var velocity = b2Vec2.Make(direction.x, direction.y);
        velocity.Multiply(this.speed);
        this.body.SetLinearVelocity(velocity);
    };

    this.cleanup = function() {
        if (this.dead) {
            TD.world.DestroyBody(this.body);
            TD.io.rmvObj(this.body);
        }
    }

    this.hit = function(enemy) {
        var pos = this.body.GetPosition();
        var ePos = enemy.body.GetPosition();

        if (getDistance(toPixels(pos.x), toPixels(pos.y), toPixels(ePos.x), toPixels(ePos.y)) < 20) {
            enemy.applyDamage(this.damage);
            this.dead = true;
        }
    }
}