function contar (){
    let inicio = document.getElementById("inicio")
    let ini = Number(inicio.value)
    let fim = document.getElementById("fim")
    let final = Number(fim.value)
    let passo = document.getElementById("passo")
    let pas = Number(passo.value)
    let res = document.getElementById("res")
    res.innerHTML = "contando"

    if(inicio.value.length == 0 || fim.value.length == 0 ){
        res.innerHTML = "Não é possivel contar"
    }else {
        if(pas <= 0){
            window.alert("Passo invalido! consideraos Passo 1")
            pas = 1
        } if(ini < final){
            for( let c = ini; c <= final ; c += pas ){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else{
            for ( let c = ini; c >= final; c -= pas){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}