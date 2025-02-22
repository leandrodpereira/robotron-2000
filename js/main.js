// const robotron = document.querySelector("#robotron")

// robotron.addEventListener("click", (evento)=> {
//     console.log(evento)
// })

// function dizOi(nome){
//     console.log("Oi " + nome)
// }

// dizOi("Leandro")
//Para saber mais sobre "Hoisting"
//https://www.alura.com.br/artigos/hoisting-no-javascript

//const somar = document.querySelector("#somar")
//const subtrair = document.querySelector("#subtrair")
//const braco = document.querySelector("#braco")

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const robo = document.querySelector('.robo')

const coresArray = ['amarelo', 'azul', 'branco', 'preto', 'rosa', 'vermelho']

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



//https://www.alura.com.br/artigos/javascript-para-que-serve-array

// somar.addEventListener("click", (evento)=> {
//     braco.value = parseInt(braco.value) + 1
// })

// subtrair.addEventListener("click", (evento)=> {
//     braco.value = parseInt(braco.value) - 1
// })

// somar.addEventListener("click", (evento)=> {manipulaDados("somar")})
// subtrair.addEventListener("click", (evento)=> {manipulaDados("subtrair")})

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) 
        manipulaEstatistica(evento.target.dataset.peca)       
    })
})


function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}

function manipulaEstatistica(peca){
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}


let i = 0;

robo.src = 'img/robotron-'+coresArray[i]+'.png'

function mudaCorRobo() {
    if (i >= coresArray.length-1){
        i = 0
    } else{
        i++         
    } 
    robo.src = 'img/robotron-'+coresArray[i]+'.png' 
}

robo.addEventListener("click", () => {           
    mudaCorRobo()
})