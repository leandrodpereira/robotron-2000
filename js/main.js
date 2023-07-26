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

const controle = document.querySelectorAll(".controle-ajuste")
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
        manipulaDados(evento.target.textContent, evento.target.parentNode)        
    })
})


function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}
