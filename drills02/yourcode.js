// - countOccurences: 
// 	- given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
// 	- input ['dog','cat','dog','pig','canary','cat','dog'], 'dog' 
// 	- returns 3

function countOccurences(array,search){
    var count = 0;
    for(var i=0; i< array.length; i++){
        if(search === array[i]){
            count++;
        }
    }
    return count;
}

// - wordLengths: 
// 	- given an array of words, return an array of numbers representing the length of each word For example: 
// 	- input ['canary','silly','dog','a','mellow']) 
// 	- return [6,5,3,1,6]

function wordLengths(array){
    var newArray=[];
    for(var i = 0; i< array.length; i++){
        newArray.push(array[i].length);
    }
    return newArray;
}


// - getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
// 	- input [3,1,9,12,4] 
// 	- return: {min: 1, max: 12, mean: 25.8}
function getMinMaxMean(array){
    var obj = {
        min:array[0],
        max:array[0],
        mean:''
    }
    var sum = 0;
    for (var i = 0; i<array.length; i++){
        if(obj.min>array[i]){
            obj.min=array[i]
        }
        if(obj.max<array[i]){
            obj.max=array[i]
        }
        sum += array[i];
        var average = sum/(array.length);
        obj.mean = average;
    }
    return obj;
}


// - findMode: Given an array of numbers, find the number that occurs the most often for example: 
// 	- input [5,2,7,18,2,42,5,2] 
// 	- returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
function findMode(array){
    var currentCount = 0;
    var currentHigh = 0;
    for(var i=0;i<array.length;i++){
        var count =0;
        array.forEach(function(item){
            if(array[i]===item){
                count++;
            }
        })
        if(count>currentCount){
            currentCount=count;
            currentHigh=array[i];
        }
        if(count===currentCount){
            currentHigh=array[i];
        }
    }
    return currentHigh;
}
