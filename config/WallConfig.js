var WallConfig =
    [
        {
            "name": "left",
            "startX": MapConfig.cell.x / 2,
            "startY": 0,
            "shape": "wall",
            "type": "static",
            "width": MapConfig.cell.x / 2,
            "height": MapConfig.cell.y * MapConfig.rows,
            "color": "grey"
        },
        {
            "name": "right",
            "startX": (MapConfig.cell.x * MapConfig.cols) - MapConfig.cell.x / 2,
            "startY": 0,
            "shape": "wall",
            "type": "static",
            "width": MapConfig.cell.x / 2,
            "height": MapConfig.cell.y * MapConfig.rows,
            "color": "grey"
        },
        {
            "name": "bottom",
            "startX": 0,
            "startY": (MapConfig.cell.y * MapConfig.rows / 1.7),
            "shape": "wall",
            "type": "static",
            "width": (MapConfig.cell.x * MapConfig.cols),
            "height": MapConfig.cell.y / 2,
            "color": "grey"

        },
        {
            "name": "topleft",
            "startX": 0,
            "startY": MapConfig.cell.y * 2,
            "shape": "wall",
            "type": "static",
            "width": (MapConfig.cell.x * MapConfig.cols / 2) - (MapConfig.cell.x * 2),
            "height": MapConfig.cell.y * 2,
            "color": "grey"
        },
        {
            "name": "topright",
            "startX": (MapConfig.cell.x * MapConfig.cols) - (MapConfig.cell.x * 5),
            "startY": MapConfig.cell.y * 2,
            "shape": "wall",
            "type": "static",
            "width": (MapConfig.cell.x * MapConfig.cols / 2) - (MapConfig.cell.x * 5),
            "height": MapConfig.cell.y * 2,
            "color": "red"
        }
    ];
