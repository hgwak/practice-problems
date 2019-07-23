

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

function findMode(){

}
