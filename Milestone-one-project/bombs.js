function createBomb(x, y) {
   element = newImage('Assets/bomb.png')
   element.style.zIndex = 1;
   element.style.left = x + 'px'
   element.style.bottom = y + 'px'
   element.style.bottom = y + 'px'
   element.style.position = 'relative'


}

function drop() {
   let x = Math.floor(Math.random() * 1300) -50;
   let y = 860
   createBomb(x, y)
   

   
}





