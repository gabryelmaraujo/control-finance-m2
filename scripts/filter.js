
let todosBttn = document.querySelector('.bttnTodos')
let entradasBttn = document.querySelector('.bttnEntradas')
let saidasBttn = document.querySelector('.bttnSaidas')

let financesListSection = document.querySelector('.financesListSection')

todosBttn.addEventListener('click', () => {

    let financeUl = document.querySelector('.financeUl')
        financeUl.remove()

    let financeUlNew = document.createElement('ul')
    financeUlNew.classList.add('financeUl')
    financesListSection.append(financeUlNew)

    insertedValues.forEach((element)=>{
        let financeLi = document.createElement('li')
            financeLi.classList.add('financeLi')
            
            let pTest = document.createElement('p')
                pTest.innerHTML = element.value

        financeUl.append(financeLi)
    })
})

entradasBttn.addEventListener('click', ()=>{
    let financeUl = document.querySelector('.financeUl')
        financeUl.remove()

    let financeUlNew = document.createElement('ul')
    financeUlNew.classList.add('financeUl')
    financesListSection.append(financeUlNew)
})

saidasBttn.addEventListener('click', ()=>{
    let financeUl = document.querySelector('.financeUl')
        financeUl.remove()

    let financeUlNew = document.createElement('ul')
    financeUlNew.classList.add('financeUl')
    financesListSection.append(financeUlNew)
})