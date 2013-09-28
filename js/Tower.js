function Tower(x, y, world, io, config) {
    this.config = config;
    this.shape = new iio.Circle(vector, config.size);
    this.shape.setFillStyle(config.color);

    this.fire = function(target) {
        new Projectile(this.config.projectile);
    }

    EpleTD.createShape();
}