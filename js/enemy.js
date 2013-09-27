function Enemy() {
    this.name;
    this.shapeObject;
    this.color;
    this.reward;
    this.penalty;
    this.density;
    this.torque;
    this.gravity;
    this.damping;
    this.friction;
    this.restitution;
    this.health;
}

function createEnemy(enemyType) {
    var enemy;
    var config;

    switch (enemyType) {
        case 'normal':
            config = EnemyConfig.normal;
            break;
    }

    // If we don't have a valid enemy type throw error
    if (!config) {
        console.log('Enemy type not valid. Enemy not created. *sadface*');
    }

    // Load all config
    enemy = new Enemy();
    enemy.name = config.name;
    enemy.color = config.color;
    enemy.reward = config.reward;
    enemy.penalty = config.penalty;
    enemy.torque = config.torque;
    enemy.gravity = config.gravity;
    enemy.damping = config.damping;
    enemy.friction = config.friction;
    enemy.restitution = config.restitution;
    enemy.health = config.health;

    // Create shape
    switch (config.shape) {
        case 'circle':
            enemy.shapeObject = new iio.Circle();
            enemy.shapeObject.parent = enemy;
            break;
    }

    // Return that shit mothafucka!
    return enemy;
}