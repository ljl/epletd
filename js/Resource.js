function Resource() {
    this.worth = MapConfig.startingGold;
    this.text = TD.io.addToGroup('GUI', new iio.Text('0 dollars', (MapConfig.cell.x * MapConfig.cols), 200)
            .setFont('30px Consolas')
            .setFillStyle('black'));
    this.update = function(amount) {
        this.worth += amount;
        this.text.setText(this.worth + ' dollars');
    }
}