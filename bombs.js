let bomb = newImage('Assets/bomb.png')

function createBomb() {
   bomb.style.visibility="visible"
   let x = Math.floor(Math.random() * 1300) -50;
   let y = 860
   bomb.style.zIndex = 1;
   bomb.style.left = x + 'px'
   bomb.style.position = 'fixed'
   

   function dropBomb() {
      if(y > 15) {
         y--;
         bomb.style.bottom = y + 'px';
      } 
   }
   
   setInterval(dropBomb, 5)
   
}







