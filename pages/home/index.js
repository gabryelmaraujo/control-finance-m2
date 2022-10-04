/* Desenvolva sua lógica aqui */

/* Register new value button */

let body = document.querySelector('body')

let navBttnSection = document.querySelector(".navButtonSection")
let modalSection = document.querySelector(".modalContainer")

let registerBttn = document.createElement('button')
    registerBttn.classList.add('addNewValue')
    registerBttn.type = 'submit'
    registerBttn.innerText = 'Registrar novo valor'

navBttnSection.append(registerBttn)

registerBttn.addEventListener('click', modalOpen)

// let totalBoxDiv = document.querySelector('.totalBox')
//     let totalSum = document.createElement('p')
//         totalSum.classList.add('totalSum')
//         totalSum.innerHTML = `R$ ${itensSum()}`

// totalBoxDiv.append(totalSum)
