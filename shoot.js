let bullet = newImage('Assets/bullet.png')


document.addEventListener('keyup', event => {
    if(event.code === 'Space') {
        bullet.style.visibility="visible"
        let x = getCoords(robotChar)
        let y = 250
        bullet.style.zIndex = 1;
        bullet.style.left = (x + 18) + 'px'
        bullet.style.position = 'fixed'

    

        function shoot() {
            if(y < 860) {
                 y++;
                bullet.style.bottom = y + 'px';
                            
            } 
        }
        
        setInterval(shoot, 0)

    }
})

function getCoords(element) {
    let coords = element.getBoundingClientRect();
    let x = coords.left
    return coords.left
}


 
   