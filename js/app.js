// Creating the Enemy Class 

class Enemy {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.sprite = 'images/enemy-bug.png';
    }
    
    update(dt) {
        
    
        // check that the position of enemy on canvas and speed of enemies
   if (this.posX < 505) {
        if (this.posY < 100) {
            this.posX += 300 * dt;
        }
        if (this.posY < 200) {
            this.posX += 250 * dt;
        }
        if (this.posY > 200) {
            this.posX += 150 * dt;
        }
   }
   else {
    this.posX = 0;
   }
        
        // check collisions
        
        if (player.posX < this.posX + 20 && player.posX + 30 > this.posX &&
        player.posY < this.posY + 20 && 30 + player.posY > this.posY) {
        player.posX = 200;
        player.posY = 400;
    }
    };
    
    // drawing the enmey on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
      };
}


// Creating the player class

class Player {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.sprite = 'images/char-boy.png';
    }
    
     update(dt) {
         
    // Check that player on the canvas
    if (this.posY > 400) {
        this.posY = 400;
    }

    if (this.posX > 400) {
        this.posX = 400;
    }

    if (this.posX < 0) {
        this.posX = 0;
    }

    // Check when the player win the game
    if (this.posY <= 0) {
        this.posX = 200;
        this.posY = 400;
    }
};

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
};
    
    // player movement
    
    handleInput(keyPress) {
        switch (keyPress) {

            case 'up':
                this.posY -= 80;
                break;
            case 'down':
                this.posY += 80;
                break;
            case 'right':
                this.posX += 90;
                break;
            case 'left':
                this.posX -= 90;
                break;

 };
};
};

let allEnemies = [];
let enemy;



// positions of enemy and player

const enemyPos = [65, 150 , 230];
let player = new Player(200, 400);


enemyPos.forEach(function(posY){
    enemy = new Enemy(0, posY);
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
