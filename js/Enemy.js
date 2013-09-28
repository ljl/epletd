function Enemy(x, y, config) {
    this.type = 'enemy';
    this.name        = config.name;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.health      = config.health;

    this.body = TD.createBox2DBody(x, y, config.box2d);
    this.body.parent = this;

    this.applyDamage = function(damage) {
        this.health -= damage;
    }
}