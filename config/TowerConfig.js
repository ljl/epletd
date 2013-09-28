TowerConfig = {
    "basic": {
        "fireInterval": 500,
        "range": 200,
        "box2d": {
            "size": 16,
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
            "speed": 20,
            "box2d": {
                "mass": 0.1,
                "size": 2,
                "density": 0.5,
                "damping": 0.1,
                "friction": 0.1,
                "restitution": 0.1,
                "shape": "circle",
                "color": "black",
                "type": "dynamic"
            }

        }
    },
    "sniper": {
        "fireInterval": 1200,
        "range": 500,
        "box2d": {
            "size": 16,
            "density": 0.5,
            "damping": 0.1,
            "friction": 0.1,
            "restitution": 0.1,
            "shape": "square",
            "color": "blue",
            "type": "static"
        },
        "projectile": {
            "damage": 50,
            "size": 2,
            "color": "red",
            "speed": 20,
            "box2d": {
                "mass": 0.1,
                "size": 2,
                "density": 0.5,
                "damping": 0.1,
                "friction": 0.1,
                "restitution": 0.1,
                "shape": "circle",
                "color": "black",
                "type": "dynamic"
            }

        }
    }
}