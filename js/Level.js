function Level(config) {
    this.level = config.level;
    this.levelTime = config.levelTime;
    this.spawnTime = config.spawnTime;
    this.enemyConfig = config.enemyConfig;
    this.text = TD.io.addToGroup('GUI', new iio.Text('Level ' + this.level, (MapConfig.cell.x * MapConfig.cols), 100))
        .setFont('30px Consolas')
        .setFillStyle('black');
    this.levelIntervalId;


    this.start = function () {
        var me = this;
        this.text.setText('Level ' + this.level);
        this.levelIntervalId = setInterval(function () {
            var enemy = new Enemy((MapConfig.cell.x * MapConfig.cols / 2), MapConfig.cell.y, me.enemyConfig);
            TD.io.addToGroup('enemies', enemy.body);
        }, this.spawnTime);

        setTimeout(function () {
            console.log("cleared interval");
            clearInterval(me.levelIntervalId);
            TD.io.rmvFromGroup(me.text, 'GUI');
        }, this.levelTime);

        return this;
    };

    this.complete = function (lastLevel) {
        var showTimer = lastLevel ? 100000 : 3000;
        var levelCompleteText = new iio.Text('Level ' + this.level + ' complete',
            (MapConfig.cell.x * MapConfig.cols) / 3, 100)
            .setFont('30px Consolas')
            .setFillStyle('black');

        TD.io.addToGroup('GUI', levelCompleteText);
        setTimeout(function () {
            console.log("removing levelcomplete text");
            TD.io.rmvFromGroup(levelCompleteText, 'GUI');
        }, showTimer);

    }
}