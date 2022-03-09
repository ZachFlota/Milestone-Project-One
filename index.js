//create Robot
const playRobot = robot(700, 100);

//drop bomb
window.setInterval(createBomb, 6000);

//drop missile
window.setInterval(createMissile, 7500)


//check collision
window.setInterval(collision, 1)

//create Firetruck
window.setInterval(createFiretruck, 18000)

//create Car
window.setInterval(createCar, 15000)

