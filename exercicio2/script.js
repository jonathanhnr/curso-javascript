function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[erro]verifique os dados e tente de novo")
    }else {
       var sex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = "homem"
            if(idade >= 0 && idade < 5){
                img.setAttribute("src", "bebeguri.png")
            }else if(idade <= 15){
                img.src = "criancaguri.png"
            }else if(idade <= 23){
                img.src = "jovemguri.png"
            }else if(idade <= 50){
                img.src = "adultoguri.png"
            }else{
                img.src = "velho.png"
            }
        }else if(sex[1].checked){
            genero = "feminino"
            if(idade >= 0 && idade < 5){
                img.src = "bebe.png"
            }else if (idade <= 15 ){
                img.src = "crianca.png"
            }else if(idade <= 23){
                img.src = "jovem.png"
            }else if (idade <= 50){
                img.src = "adulto.png"
            }else{
                img.src = "velha.png"
            }
        }
    }
    if(genero === undefined){
        console.log("deu errado")
    }else{
    res.innerHTML = `detectamos uma pessoa do genero ${genero} com ${idade} anos`

    }
     return res.appendChild(img)
}