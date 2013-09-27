function Tower(vector, config) {
    this.config = config;

    this.fire = function(target) {
        new Projectile(this.config.projectile);
    }
}

function placeTower() {

}