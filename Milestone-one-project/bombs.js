function createBomb() {
   let x = Math.floor(Math.random() * 1300) -50;
   let y = 860
   bomb = newImage('Assets/bomb.png')
   bomb.style.zIndex = 1;
   bomb.style.left = x + 'px'
   bomb.style.position = 'relative'
   

   function dropBomb() {
      if(y > 200) {
         y--;
         bomb.style.bottom = y + 'px';
      } 
     
   }

   setInterval(dropBomb, 3)

}







