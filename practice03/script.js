function sortArray(arrayOfAnything){
    var newArray=[[],[],[]];
    debugger;
    for (var i = 0; i < arrayOfAnything.length; i++){
      if(typeof arrayOfAnything[i]==='string'){
            newArray[0].push(arrayOfAnything[i]);
        }
      else if(typeof arrayOfAnything[i]==='number'){
            newArray[1].push(arrayOfAnything[i]);
        }
      else{
            newArray[2].push(arrayOfAnything[i]);
        }
    }
    return console.log(newArray);
}
var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];