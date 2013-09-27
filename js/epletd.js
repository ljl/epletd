EpleTD = function(io) {
    var map = new Map(MapConfig);
    io.addObj(map.grid);

    io.canvas.addEventListener('mousedown', function(event){
        console.log(io.getEventPosition(event));
    });

};

iio.start(EpleTD);