
let todosBttn = document.querySelector('.bttnTodos')
let entradasBttn = document.querySelector('.bttnEntradas')
let saidasBttn = document.querySelector('.bttnSaidas')

let financesListSection = document.querySelector('.financesListSection')


todosBttn.addEventListener('click', () => {
    if(financesListSection.childElementCount != 0){
        let financeUl = document.querySelector('.financeUl')
        financeUl.remove()
    }

    let financeUlNew = document.createElement('ul')
    financeUlNew.classList.add('financeUl')

    insertedValues.forEach((element)=>{

        function categoryCheck (){
            if(element.categoryID == 1){
                return 'Entrada'
            }else{
                return 'Saída'
            }
        }

        let price = element.value
        let category = categoryCheck()


        let financeLi = document.createElement('li')
            financeLi.classList.add('financeLi')
            
            let divInfos = document.createElement('div')
                divInfos.classList.add('itemInfos')

                let paragPrice = document.createElement('p')
                    paragPrice.classList.add('itemPrice')
                    paragPrice.innerHTML = `R$ ${price}`
                
                let categDiv = document.createElement('div')
                    categDiv.classList.add('itemCategory')

                    let paragCateg = document.createElement('p')
                        paragCateg.classList.add('itemCategory')
                        paragCateg.innerText = category

            let divButtons = document.createElement('div')
                divButtons.classList.add('itemButtons')

                let removeBttn = document.createElement('button')
                    removeBttn.classList.add('itemRemove')

                    let imgRemove = document.createElement('img')
                        imgRemove.src = '/assets/trash.svg'

                removeBttn.addEventListener('click', ()=>{
                    financeLi.remove()
                })

        //APPENDS
        removeBttn.append(imgRemove)
        divButtons.append(removeBttn)

        categDiv.append(paragCateg)
        divInfos.append(paragPrice, categDiv)

        financeLi.append(divInfos, divButtons)


        financeUlNew.append(financeLi)

    })

    //ITEM SUM
    let totalBox = document.querySelector('.totalBox')

    if(totalBox.childElementCount != 0){
    let totalSumOld = document.querySelector('.totalSum')
        totalSumOld.remove()
    }
    let totalSumNew = document.createElement('p')
        totalSumNew.classList.add('totalSum')
        totalSumNew.innerHTML = `R$ ${totalSum()},00`
            
    totalBox.append(totalSumNew)

    financesListSection.append(financeUlNew)

})



entradasBttn.addEventListener('click', ()=>{

    if(financesListSection.childElementCount != 0){
        let financeUl = document.querySelector('.financeUl')
            financeUl.remove()
    }

    let financeUlNew = document.createElement('ul')
    financeUlNew.classList.add('financeUl')

    insertedValues.forEach((element) => {
        if(element.categoryID == 1){
            let arrEntradas = []
            arrEntradas.push(element)

            
        function categoryCheck (){
            if(element.categoryID == 1){
                return 'Entrada'
            }else{
                return 'Saída'
            }
        }

        let price = element.value
        let category = categoryCheck()


        let financeLi = document.createElement('li')
            financeLi.classList.add('financeLi')
            
            let divInfos = document.createElement('div')
                divInfos.classList.add('itemInfos')

                let paragPrice = document.createElement('p')
                    paragPrice.classList.add('itemPrice')
                    paragPrice.innerHTML = `R$ ${price}`
                
                let categDiv = document.createElement('div')
                    categDiv.classList.add('itemCategory')

                    let paragCateg = document.createElement('p')
                        paragCateg.classList.add('itemCategory')
                        paragCateg.innerText = category

            let divButtons = document.createElement('div')
                divButtons.classList.add('itemButtons')

                let removeBttn = document.createElement('button')
                    removeBttn.classList.add('itemRemove')

                    let imgRemove = document.createElement('img')
                        imgRemove.src = '/assets/trash.svg'

                removeBttn.addEventListener('click', ()=>{
                    financeLi.remove()
                })
        //APPENDS
        removeBttn.append(imgRemove)
        divButtons.append(removeBttn)

        categDiv.append(paragCateg)
        divInfos.append(paragPrice, categDiv)

        financeLi.append(divInfos, divButtons)


        financeUlNew.append(financeLi)
        }

    })

    //ITEM SUM
    let totalBox = document.querySelector('.totalBox')

    if(totalBox.childElementCount != 0){
    let totalSumOld = document.querySelector('.totalSum')
        totalSumOld.remove()
    }
    let totalSumNew = document.createElement('p')
        totalSumNew.classList.add('totalSum')
        totalSumNew.innerHTML = `R$ ${entradasSum()},00`
        
    totalBox.append(totalSumNew)

    financesListSection.append(financeUlNew)

})

saidasBttn.addEventListener('click', ()=>{

    if(financesListSection.childElementCount != 0){
        let financeUl = document.querySelector('.financeUl')
            financeUl.remove()
    }

    let financeUlNew = document.createElement('ul')
    financeUlNew.classList.add('financeUl')

    insertedValues.forEach((element) => {
        if(element.categoryID == 2){
            let arrSaidas = []
            arrSaidas.push(element)
            
        function categoryCheck (){
            if(element.categoryID == 1){
                return 'Entrada'
            }else{
                return 'Saída'
            }
        }

        let price = element.value
        let category = categoryCheck()


        let financeLi = document.createElement('li')
            financeLi.classList.add('financeLi')
            
            let divInfos = document.createElement('div')
                divInfos.classList.add('itemInfos')

                let paragPrice = document.createElement('p')
                    paragPrice.classList.add('itemPrice')
                    paragPrice.innerHTML = `R$ ${price}`
                
                let categDiv = document.createElement('div')
                    categDiv.classList.add('itemCategory')

                    let paragCateg = document.createElement('p')
                        paragCateg.classList.add('itemCategory')
                        paragCateg.innerText = category

            let divButtons = document.createElement('div')
                divButtons.classList.add('itemButtons')

                let removeBttn = document.createElement('button')
                    removeBttn.classList.add('itemRemove')

                    let imgRemove = document.createElement('img')
                        imgRemove.src = '/assets/trash.svg'
                    
                removeBttn.addEventListener('click', ()=>{
                     financeLi.remove()
                })
            
        //APPENDS
        removeBttn.append(imgRemove)
        divButtons.append(removeBttn)

        categDiv.append(paragCateg)
        divInfos.append(paragPrice, categDiv)

        financeLi.append(divInfos, divButtons)


        financeUlNew.append(financeLi)
        }

    })

    //ITEM SUM
    let totalBox = document.querySelector('.totalBox')

    if(totalBox.childElementCount != 0){
    let totalSumOld = document.querySelector('.totalSum')
        totalSumOld.remove()
    }
    let totalSumNew = document.createElement('p')
        totalSumNew.classList.add('totalSum')
        totalSumNew.innerHTML = `R$ ${saidasSum()},00`
            
    totalBox.append(totalSumNew)
    
    financesListSection.append(financeUlNew)
})

