

function countOccurences(arrayOfWords, word){
    let count = 0;
    arrayOfWords.forEach((someWord)=>{
        if(someWord === word){
            count++;
        }
    })
    return count;
}

function wordLengths(arrayOfWords){
    let newArray = arrayOfWords.map((word)=>{
        return word.length
    })
    return newArray;
}

function getMinMaxMean(array){
    let minMaxMean = {
        min:0,
        max:0,
        mean:0
    };
    array.forEach((number, index)=>{
        if (!index) {
            minMaxMean.min = number;
        }
        if(number < minMaxMean.min){
            minMaxMean.min = number;
        }
        if(number > minMaxMean.max){
            minMaxMean.max = number;
        }
        minMaxMean.mean += number;
    })
    minMaxMean.mean /= array.length;
    return minMaxMean;
}

function findMode(array){
    let highestCount = 0;
    let currentMode = 0;
    for(let i = 0; i < array.length; i++){
        let count = 0;
        for(let j = 0; j < array.length; j++){
            if(j === i){
                continue;
            }
            if(array[i]===array[j]){
                count++;
            }
            if(count >= highestCount){
                highestCount = count;
                currentMode = array[i]
            }
        }
    }
    return currentMode;
}
