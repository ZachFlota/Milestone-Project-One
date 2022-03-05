document.addEventListener('keyup', event => {
    if(event.code === 'Space') {
        let x = 300
        let y = 250
        bullet = newImage('Assets/bullet.png')
        bullet.style.zIndex = 1;
        bullet.style.left = x + 'px'
        bullet.style.position = 'relative'

        function shoot() {
            if(y < 860) {
                 y++;
                bullet.style.bottom = y + 'px';
            } 
        }
        setInterval(shoot, 1)
    }
})

function getCoords() {
    let coords = robotChar.getBoundingClientRect();
    let x = coords.left
    return coords.left
}

    
 
   