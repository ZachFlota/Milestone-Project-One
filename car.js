let car = newImage('Assets/car.png')

function createCar() {
    car.style.visibility="visible"
    let x = 0
    let y = 50
    car.style.zIndex = 1;
    car.style.bottom = y + 'px'
    car.style.position = 'fixed'
    
 
    function driveCar() {
       if(x < 1600) {
          x++;
          car.style.left = x + 'px';
       } 

    }
    
    setInterval(driveCar, 5)
    
 }