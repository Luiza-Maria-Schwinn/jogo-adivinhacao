//Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
//uma função(handleTryClick) é passada como argumento da outra função(addEventListener)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', Enter)

// funções callback: chamar de volta
//funções
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")
if(inputNumber.value == "") {
    alert("Ops, você não digitou nenhum número, por favor digite um número entre 0 e 10")
    preventDefault(xAttempts++) // não roda o xAttempts++
} 

    if(inputNumber.value > 10) {
    alert("Por favor digite um número entre 0 e 10")
} else if(inputNumber.value < 0) {
    alert("Por favor digite um número entre 0 e 10")
}

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        if(xAttempts == 1) {
            screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativa`
        } else {
            screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
        }
    }
    
    inputNumber.value = ""
    xAttempts++
}



function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    //isso em cima é uma callback
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function Enter(e) {
    if(e.key == Enter && screen1.classList.contains('hide')) {
        // console.log(e.key) pra ver se a tecla é mesmo Enter
        handleResetClick()
    }
}