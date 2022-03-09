let firetruck = newImage('Assets/firetruck.png')

function createFiretruck() {
    firetruck.style.visibility="visible"
    let x = 1600
    let y = 20
    firetruck.style.zIndex = 1;
    firetruck.style.bottom = y + 'px'
    firetruck.style.position = 'fixed'
    
 
    function driveFiretruck() {
       if(x < 1700) {
          x--;
          firetruck.style.left = x + 'px';
       } 

    }
    
    setInterval(driveFiretruck, 7)
    
 }