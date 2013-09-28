TowerConfig = {
    "basic": {
        "fireInterval": 2000,
        "box2d": {
            "size": 10,
            "density": 0.5,
            "damping": 0.1,
            "friction": 0.1,
            "restitution": 0.1,
            "shape": "square",
            "color": "red",
            "type": "static"
        },
        "projectile": {
            "damage": 10,
            "size": 2,
            "color": "black",
            "box2d": {
                "size": 2,
                "density": 0.5,
                "damping": 0.1,
                "friction": 0.1,
                "restitution": 0.1,
                "shape": "circle",
                "color": "black",
                "type": "kinematic"
            }

        }
    }
}