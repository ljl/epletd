EnemyConfig = {
    "normal": {
        "name": "Normal",
        "reward": 5,
        "penalty": 5,
        "health": 100,
        "explosionTime": 1000 * 10,
        "explosionRadius": 80,
        "box2d": {
            "ySpeed": 2,
            "mass": 200,
            "size": 12,
            "density": 0.5,
            "damping": 0.1,
            "friction": 0.1,
            "restitution": 0.8,
            "shape": "square",
            "color": "blue",
            "type": "dynamic"
        }
    },
    "bouncy": {
        "name": "Bouncy",
        "reward": 2,
        "penalty": 1,
        "health": 50,
        "explosionTime": 1000 * 10,
        "explosionRadius": 80,
        "box2d": {
            "ySpeed": 5,
            "mass": 300,
            "size": 10,
            "density": 0.5,
            "damping": 0.1,
            "friction": 0.1,
            "restitution": 0.99,
            "shape": "circle",
            "color": "green",
            "type": "dynamic"
        }
    }
}