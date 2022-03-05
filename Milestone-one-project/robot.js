const robotChar = newImage('Assets/Robot_Character.png')

function robot(x, y) {
    
    robotChar.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            robotChar.src = `Assets/Robot_Character.png`
        }
        if (direction === 'west') {
            robotChar.src = `Assets/Robot_Character.png`
        }
      
        if (direction === 'east') {
            robotChar.src = `Assets/Robot_Character.png`
        }
      
    }

    move(robotChar).withArrowKeys(x, y, handleDirectionChange)

    return {
        robotChar: robotChar
    }
}