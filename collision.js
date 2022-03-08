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

    if (bombX < bulletX + bulletW &&
        bombX + bombW > bulletX &&
        bombY < bulletY + bulletH &&
        bombH + bombY >bulletY) {
        // collision detected!
        console.log('collision detected')
        bomb.style.visibility="hidden"
        bullet.style.visibility="hidden"



        
    } else {
        // no collision
        console.log('no collision detected')
    }
}
