function Enemy(x, y, config) {
    this.type = 'enemy';
    this.name        = config.name;
    this.reward      = config.reward;
    this.penalty     = config.penalty;
    this.health      = config.health;

    this.body = TD.createBox2DBody(x, y, config.box2d, {cat:2, mask:3});
    this.body.parent = this;

    this.applyDamage = function(damage) {
        this.health -= damage;
    }

    this.update = function() {

    }

    this.cleanup = function() {
        if (this.health <= 0) {
            TD.world.DestroyBody(this.body);
            TD.io.rmvObj(this.body);
        }
    }
}