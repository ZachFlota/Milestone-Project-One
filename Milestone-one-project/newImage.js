function newImage(url){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    document.body.append(object)
    return object
}


