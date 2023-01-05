function tabuada(){
    let num = document.getElementById("num")
    let numero = Number(num.value)
    let tab = document.getElementById("seltab")
    tab.innerHTML = ""

    if(num.value.length == 0 ){
        window.alert("Por favor, digite um numero")
    }else {
        let c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
            c++
        }
    }
}