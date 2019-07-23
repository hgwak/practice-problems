

function getPath(string){
    let newString = string.split("/")
    return newString;
}

function getPathParts(string){
    let newArray = string.split(':');
    let thisObject = {};
    newArray.forEach((item,index)=>{
        if(!index){
            thisObject.protocol = item
        }
        if(index === 1){
            thisObject.host = item.slice(2, item.length)
        }
        if(index === newArray.length-1){
            let thisItem = item.split('/');
            thisItem.forEach((subItem, subIndex) => {
                if (!isNaN(subItem)) {
                    thisObject.port = parseInt(subItem);
                    return;
                }
                if (subIndex !== thisItem.length-1) {
                    if(thisObject.path === undefined){
                        thisObject.path = subItem;
                    }else{
                        thisObject.path += '/' + subItem;
                    }
                } else {
                    thisObject.file = subItem;
                }
            })
        }
    })
    return thisObject;
}

function getCapitalCount(array){
    let count = 0;
    array.forEach((item)=>{
        if(item[0]===item[0].toUpperCase()){
            count++;
        }
    })
    return count;
}

function correctCalcChecker(array){
    let correctCalcs = [];
    array.forEach((item)=>{
        let {num1, num2, op, result} = item;
        let result2 = 0;
        switch(op){
            case '+':
               result2 = num1 + num2;
               break;
            case '-':
                result2 = num1 - num2;
                break;
            case '*':
                result2 = num1 * num2;
                break;
            case '/':
                result2 = num1 / num2;
                break;
        }
        if(result2 === result){
            correctCalcs.push(item);
        }
    })
    return correctCalcs;
}

function doMath(){

}
