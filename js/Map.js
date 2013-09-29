function Map(config) {
    this.grid = new iio.Grid(0,0,config.cols, config.rows, config.cell.x, config.cell.y);
    this.grid.setStrokeStyle('rgba(0,0,0,0.05)');

    this.getCellCenter = function(pos) {
        return this.grid.getCellCenter(this.grid.getCellAt(pos));
    }
}