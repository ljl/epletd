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
            "startY": (MapConfig.cell.y * MapConfig.rows / 1.6),
            "shape": "wall",
            "type": "static",
            "width": (MapConfig.cell.x * MapConfig.cols),
            "height": MapConfig.cell.y,
            "color": "grey"

        },
        {
            "name": "top",
            "startX": 0,
            "startY": - MapConfig.cell.y / 2 + 32,
            "shape": "wall",
            "type": "static",
            "width": (MapConfig.cell.x * MapConfig.cols),
            "height": MapConfig.cell.y / 2,
            "color": "grey"
        }
    ];
