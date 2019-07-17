
function sumArray(array){
    let sumOfArray = 0;
	for(let i = 0; i < array.length; i++){
        sumOfArray += array[i]
    }
    return sumOfArray;
}

function fitWithinVal(array, someNumber){
    let sumOfArray = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i]>someNumber){
            continue;
        }
        sumOfArray += array[i]
        if(sumOfArray > someNumber){
            sumOfArray -= array[i];
            continue;
        }
        newArray.push(array[i])
        if(sumOfArray === someNumber){
            break;
        }
    }
    return newArray;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
