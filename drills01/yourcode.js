

function sumArray(a){
    var sum = 0;
    for (var i =0; i<a.length;i++){
        sum+=a[i];
    }
    return sum;
}

function fitWithinVal(array, val){
 var newArray=[];
 var newArraySum=0;
 for (var i=0;i<array.length;i++){
    newArraySum+=array[i];
     if(newArraySum>=val){
        array.splice(i);
     }
 }
 return array;
}

function getAllNamesShorterThan(a, len){
}

function makeLabel(d){

}
