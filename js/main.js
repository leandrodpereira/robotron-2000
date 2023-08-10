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
