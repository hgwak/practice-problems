var arrayOfAnything = ['hello',45,'Bob','what', 23];
function invertArray(arrayOfAnything){
    var newArray=[];
    for(var i = 0; i < arrayOfAnything.length; i++){
        newArray[i]=arrayOfAnything[(arrayOfAnything.length-1)-i];
    }
    console.log(newArray);
}