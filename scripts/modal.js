/* Desenvolva sua lógica aqui */
function modalOpen(){
    
let modalContainer = document.createElement('section')
modalContainer.classList.add('modalContainer')

let modalBox = document.createElement('section')
modalBox.classList.add('modalBox')

let headerModal = document.createElement('header')
headerModal.classList.add('modalHeader')

let modalMain = document.createElement('main')
modalMain.classList.add('modalMain')    

/* Header sections */ 

let modalTitleDiv = document.createElement('div')
modalTitleDiv.classList.add('modalTitle')

let headerTitleParag = document.createElement('p')
    headerTitleParag.innerText = 'Registro de valor'

let modalCloseDiv = document.createElement('div')
modalCloseDiv.classList.add('modalClose')

let closeButton = document.createElement('button')
    closeButton.classList.add('closeBttn')
    closeButton.innerText = 'X'

/* close event */
closeButton.addEventListener('click', () => {
    modalContainer.remove()
})

modalCloseDiv.append(closeButton)
modalTitleDiv.append(headerTitleParag)

headerModal.append(modalTitleDiv, modalCloseDiv)


/* Main sections */

let descriptionSection = document.createElement('section')
descriptionSection.classList.add('modalDescription')

let descriptParag = document.createElement('p')
    descriptParag.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'


let valueSection = document.createElement('section')
valueSection.classList.add('modalValue')

let labelValue = document.createElement('label')
    labelValue.for = 'modalValue'
    labelValue.innerText = 'Valor'

let inputValue = document.createElement('input')
    inputValue.type = 'number'
    inputValue.name = 'modalValue'
    inputValue.id = 'newValue'
    inputValue.required = 'true'

let moedaParag = document.createElement('p')
    moedaParag.classList.add('moeda')
    moedaParag.innerText = 'R$'


let categorySection = document.createElement('section')
categorySection.classList.add('modalCategory')

let titleDiv = document.createElement('div')
    titleDiv.classList.add('categoryTitle')

    let titleParag = document.createElement('p')
        titleParag.innerText = 'Tipo de valor'

let buttondsDiv = document.createElement('div')
    buttondsDiv.classList.add('categoryButtons')

    let entradaBttn = document.createElement('button')
        entradaBttn.classList.add('bttnEntrada')
        entradaBttn.type = 'submit'
        entradaBttn.innerText = 'Entrada'

    let saidaBttn = document.createElement('button')
        saidaBttn.classList.add('bttnSaida')
        saidaBttn.type = 'submit'
        saidaBttn.innerText = 'Saída'


let buttonsSection = document.createElement('section')
buttonsSection.classList.add('modalButtons')

let cancelBttn = document.createElement('button')
    cancelBttn.classList.add('bttnCancelar')
    cancelBttn.type = 'submit'
    cancelBttn.innerText = 'Cancelar'

/* cancel event */
cancelBttn.addEventListener('click', () => {
    modalContainer.remove()
})
   
let insertBttn = document.createElement('button')
    insertBttn.classList.add('bttnInserir')
    insertBttn.type = 'submit'
    insertBttn.innerText = 'Inserir valor' 

/* Appends */
buttonsSection.append(cancelBttn, insertBttn)

buttondsDiv.append(entradaBttn, saidaBttn)
titleDiv.append(titleParag)
categorySection.append(titleDiv, buttondsDiv)

valueSection.append(labelValue, inputValue, moedaParag)

descriptionSection.append(descriptParag)

modalMain.append(descriptionSection, valueSection, categorySection, buttonsSection)

/* Parent appends */
modalBox.append(headerModal, modalMain)
modalContainer.append(modalBox)

body.append(modalContainer)

/* -------------------------- ADD VALUE CONFIG--------------- */

//CONFIG ENTRADA & SAIDA BUTTONS

let index = insertedValues.length

entradaBttn.addEventListener('click', () => {
    if(inputValue.value.length > 0){

        insertedValues.push({
            id: index,
            value: inputValue.value,
            categoryID: 1
        })  
    }
})

saidaBttn.addEventListener('click', () => {
    if(inputValue.value.length > 0){

        insertedValues.push({
            id: index,
            value: inputValue.value,
            categoryID: 2
        })
    }
})

function categoryCheck(){

    let index = insertedValues.length-1

    if(insertedValues[index].categoryID == 2){
        return 'Saída'
    }else{
        return 'Entrada'
    }
}       

insertBttn.addEventListener('click', () => {
    let financeUl = document.querySelector('.financeUl')

if(inputValue.value.length > 0){
let financeLi = document.createElement('li')
    financeLi.classList.add('financeLi')
    financeLi.id = `${insertedValues[index].categoryID}`

    let itemInfosDiv = document.createElement('div')
        itemInfosDiv.classList.add('itemInfos')

        let itemPrice = document.createElement('p')
            itemPrice.classList.add('itemPrice')
            itemPrice.innerHTML = `R$ ${insertedValues[index].value}`

        let catDiv = document.createElement('div')
            catDiv.classList.add('itemCategory')

            let catParag = document.createElement('p')
                catParag.innerHTML = `${
                    categoryCheck()
                }`
    
    let itemBttnDiv = document.createElement('div')
        itemBttnDiv.classList.add('itemButtons')

        let bttnRemove = document.createElement('button')
            bttnRemove.classList.add('itemRemove')
            
            let removeImg = document.createElement('img')
                removeImg.src = '/assets/trash.svg'
                removeImg.alt = 'Remover item'

/* bttn remove event */
bttnRemove.addEventListener('click', () => {
    financeLi.remove()
})

/* LI APPENDS */
bttnRemove.append(removeImg)
itemBttnDiv.append(bttnRemove)

catDiv.append(catParag)

itemInfosDiv.append(itemPrice, catDiv)

financeLi.append(itemInfosDiv, itemBttnDiv)
financeUl.append(financeLi)

/* ATT TOTAL SUM */


/* fechar modal */

modalContainer.remove()
}

})



}


