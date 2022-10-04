function totalSum(){
    let sum = 0
    insertedValues.forEach((element)=>{
        sum += element.value
    })
    return sum
}

function entradasSum(){
    let sum = 0
    insertedValues.forEach((element)=>{
        if(element.categoryID == 1){
            sum += element.value
        }
    })
    return sum
}

function saidasSum(){
    let sum = 0
    insertedValues.forEach((element)=>{
        if(element.categoryID == 2){
            sum += element.value
        }
    })
    return sum
}