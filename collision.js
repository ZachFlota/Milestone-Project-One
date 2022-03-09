let score = document.querySelector('#score');
let totalScore = 0;

let health = document.querySelector('#health');
let totalHealth = 100;

function collision() {
    let bombPosition = bomb.getBoundingClientRect();
    let bombX = bombPosition.left;
    let bombY = bombPosition.top;
    let bombH = bombPosition.height;
    let bombW = bombPosition.width;
 
    let bulletPosition = bullet.getBoundingClientRect();
    let bulletX = bulletPosition.left;
    let bulletY = bulletPosition.top;
    let bulletH = bulletPosition.height;
    let bulletW = bulletPosition.width;

    let missilePosition = missile.getBoundingClientRect();
    let missileX = missilePosition.left;
    let missileY = missilePosition.top;
    let missileH = missilePosition.height;
    let missileW = missilePosition.width;

    let carPosition = car.getBoundingClientRect();
    let carX = carPosition.left;
    let carY = carPosition.top;
    let carH = carPosition.height;
    let carW = carPosition.width;

    let truckPosition = firetruck.getBoundingClientRect();
    let truckX = truckPosition.left;
    let truckY = truckPosition.top;
    let truckH = truckPosition.height;
    let truckW = truckPosition.width;
    
    

    if (bombX < bulletX + bulletW &&
        bombX + bombW > bulletX &&
        bombY < bulletY + bulletH &&
        bombH + bombY >bulletY) {
        // collision detected!
        console.log('collision detected')
        bomb.style.visibility="hidden"
        bullet.style.visibility="hidden"
        updateScore()

    }
        
        
    else if (missileX < bulletX + bulletW &&
        missileX + missileW > bulletX &&
        missileY < bulletY + bulletH &&
        missileH + missileY >bulletY) {

        console.log('colission detected')
        missile.style.visibility="hidden"
        bullet.style.visibility="hidden"
        updateScore()
    }

    else if(carX < bombX + bombW &&
        carX + carW > bombX &&
        carY < bombY + bombH &&
        carH + carY >bombY) {
        bomb.style.visibility="hidden"
        car.style.visibility="hidden"
        updateHealth()

    }

    else if(carX < missileX + missileW &&
        carX + carW > missileX &&
        carY < missileY + missileH &&
        carH + carY >missileY) {
        missile.style.visibility="hidden"
        car.style.visibility="hidden"
        updateHealth()
    }

    else if(truckX < bombX + bombW &&
        truckX + truckW > bombX &&
        truckY < bombY + bombH &&
        truckH + truckY >bombY) {
        bomb.style.visibility="hidden"
        firetruck.style.visibility="hidden"
        updateHealth()
    }

    else if(truckX < missileX + missileW &&
        truckX + truckW > missileX &&
        truckY < missileY + missileH &&
        truckH + truckY >missileY) {
        missile.style.visibility="hidden"
        firetruck.style.visibility="hidden"
        updateHealth()
    }
        
    else {
        // no collision
        console.log('no collision detected')
    }
}

function updateScore() {
    totalScore +=1
    score.innerText = totalScore
      

}

function updateHealth() {
    totalHealth--
    health.innterText = totalHealth
}