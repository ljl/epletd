function Tower(vector, config) {
    this.config = config;
    this.shape = new iio.Circle(vector, config.size);
    this.shape.setFillStyle(config.color);

    this.fire = function(target) {
        new Projectile(this.config.projectile);
    }
}

function placeTower() {

}