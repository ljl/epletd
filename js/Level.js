function Level(config) {
    this.level = config.level;
    this.levelTime = config.levelTime;
    this.spawnTime = config.spawnTime;
    this.text = TD.io.addToGroup('GUI',new iio.Text('Level ' + this.level, (MapConfig.cell.x * MapConfig.cols), 100))
        .setFont('30px Consolas')
        .setFillStyle('black');
    this.levelIntervalId;


    this.start = function () {
        var me = this;
        this.text.setText('Level ' + this.level);
        this.levelIntervalId = setInterval(function () {
            var enemy = new Enemy((MapConfig.cell.x * MapConfig.cols / 3), MapConfig.cell.y, EnemyConfig.normal);
            TD.io.addToGroup('enemies', enemy.body);
        }, this.spawnTime);

        setTimeout(function() {
            console.log("cleared interval");
            clearInterval(me.levelIntervalId);
            TD.io.rmvFromGroup(me.text, 'GUI');
        },this.levelTime)
    }
}