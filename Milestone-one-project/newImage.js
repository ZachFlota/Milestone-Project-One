function newImage(url){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'relative'
    document.body.append(object)
    return object
}


