function robot(x, y) {
    const element = newImage('Assets/Robot_Character.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `Assets/Robot_Character.png`
        }
        if (direction === 'west') {
            element.src = `Assets/Robot_Character.png`
        }
      
        if (direction === 'east') {
            element.src = `Assets/Robot_Character.png`
        }
      
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}