
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

function getAllNamesShorterThan(arrayOfNames, nameLength){
    let shorterNames = [];
    for(let i = 0; i < arrayOfNames.length; i++){
        if(arrayOfNames[i].length < nameLength){
            shorterNames.push(arrayOfNames[i]);
        }
    }
    return shorterNames;
}

function makeLabel(address){
    let returnLabel;
    let {familyName, givenName, greeting} = address;
    let {streetNumber, streetName, state, zip, city} = address['home address'];
    return returnLabel = greeting + " " + givenName + " " + familyName + "\n" + streetNumber + " " + streetName + "\n" + city + ", " + state + " " + zip;
}
