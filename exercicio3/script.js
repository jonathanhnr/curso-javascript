function verificar(){
    var data = new Date()
    var hora = data.getHours()
    var text = document.getElementById("text")
    var msg = document.getElementById("msg")
    var imgContainer = document.getElementById("img")

   msg.innerHTML = `agora sao ${hora}`
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(hora >= 0 && hora < 10){
        text.innerHTML = `agora esta na hora de tomar cafe da manha `
        img.src = "cafedamanha.png"
    }else if (hora <= 14){
        text.innerHTML = `agora esta na hora do almoço`
        img.src = "almoco.png"
    }else if (hora <= 18){
        text.innerHTML = "agora esta na hora de tomar cafe da tarde"
        img.src = "tarde.png"
    }else {
        text.innerHTML = "ta na hora da janta "
        img.src = "janta.png"
    }

    imgContainer.appendChild(img)
}

window.addEventListener('load', () => {
    verificar()
})