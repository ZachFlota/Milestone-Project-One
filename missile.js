let missile = newImage('Assets/missile.png')

function createMissile() {
   missile.style.visibility="visible"
   let x = Math.floor(Math.random() * 1400) +100;
   let y = 860
   missile.style.zIndex = 1;
   missile.style.left = x + 'px'
   missile.style.position = 'fixed'
   

   function dropMissile() {
      if(y > -70) {
         y--;
         missile.style.bottom = y + 'px';
      } 
   }
   
   setInterval(dropMissile, 5)
   
}