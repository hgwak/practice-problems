function sortArray(arrayOfAnything){
    var newArray=[[],[],[]];
    for (var i = 0; i < arrayOfAnything.length; i++){
        if(typeof arrayOfAnything[i]==='string'){
            newArray[0][i]=arrayOfAnything[i];
        }else if(typeof arrayOfAnything[i]==='number'){
            newArray[1][i]=arrayOfAnything[i];
        }else{
            newArray[2][i]=arrayOfAnything[i];
        }
    }
    return console.log(newArray);
}