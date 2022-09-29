function itensSum(){

    let total = 0

    insertedValues.forEach( (element) => {
        total += element.value
    });

    return total
}