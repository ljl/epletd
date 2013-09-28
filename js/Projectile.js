function Projectile(x, y, config, targetEnemy) {
    this.config = config;
    this.targetEnemy = targetEnemy;
    this.speed = config.speed;

    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.update = function() {
        var x = this.body.GetPosition().x;
        var y = this.body.GetPosition().y;
        var targetX = this.targetEnemy.body.GetPosition().x;
        var targetY = this.targetEnemy.body.GetPosition().y;
        var direction = getNormalizedVector(x, y, targetX, targetY);
        var velocity = b2Vec2.Make(direction.x, direction.y);
        velocity.Multiply(this.speed);
        this.body.SetLinearVelocity(velocity);
    };
}