const myImage = document.querySelector("img")
myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/imagem1.png"){
        myImage.setAttribute("src", "images/imagem2.png")
    }else{
        myImage.setAttribute("src", "images/imagem1.png")
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName (){
    const myName = prompt("Por favor, digite seu nome")
    if (!myName){
        setUserName()
    }else{
        localStorage.setItem("name", myName)
        myHeading.textContent=`${myName}`

    }
    if (!localStorage.getItem("name")){
    setUserName()
    }else{
    const storedName= localStorage.getItem("name")
        myHeading.textContent = `isso aqui e muito legal ${storedName}`
    }
}
function criarParagrafo() {
    let para = document.createElement('p');
    const myParagrafo = prompt("digite um paragarfo")
    para.textContent = `${myParagrafo}`;
    document.body.appendChild(para);
}

var vendas = "Toyota";

function tipoCarro(nome) {
    if (nome == "Fiat") {
        return nome;
    } else {
        return "Desculpa, não vendemos carros " + nome + ".";
    }
}

var carro = { meuCarro: "Punto", getCarro: tipoCarro("Fiat"), especial: vendas };
console.log(carro.meuCarro);
console.log(carro.getCarro)
console.log(carro.especial);

function verifiqueDados() {
    if (document.form1.tresCaracteres.value.length == 3) {
        return true;
    } else {
        alert("Informe exatamente três caracteres. " +
            document.form1.tresCaracteres.value + " não é válido.");
        return false;
    }
}

let tipofruta = "melancia"
switch (tipofruta) {
    case "Laranja":
        console.log("O quilo da laranja está R$0,59.<br>");
        break;
    case "Maçã":
        console.log("O quilo da maçã está R$0,32.<br>");
        break;
    case "Banana":
        console.log("O quilo da banana está R$0,48.<br>");
        break;
    case "Cereja":
        console.log("O quilo da cereja está R$3,00.<br>");
        break;
    case "Manga":
        console.log("O quilo da manga está R$0,56.<br>");
        break;
    case "Mamão":
        console.log("O quilo do mamão está R$2,23.<br>");
        break;
    default:
        console.log("Desculpe, não temos " + tipofruta + ".<br>");
}
console.log("Gostaria de mais alguma coisa?<br>");
