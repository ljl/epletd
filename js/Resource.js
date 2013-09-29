function Resource() {
    this.money = MapConfig.startingGold;
    this.text = TD.io.addToGroup('GUI', new iio.Text('0 dollars', (MapConfig.cell.x * MapConfig.cols), 200)
            .setFont('30px Consolas')
            .setFillStyle('black'));
    
    this.update = function(amount) {
        this.money += amount;
        this.text.setText(this.money + ' dollars');
    }
}