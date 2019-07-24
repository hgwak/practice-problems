

function changeElements(htmlClass){
    let newElement = $(htmlClass);
    for(let i = 0; i < newElement.length; i++){
        let wordNumber = newElement[i].innerHTML;
        switch(wordNumber){
            case "one":
                newElement[i].innerHTML = 1;
                break;
            case "two":
                newElement[i].innerHTML = 2;
                break;
            case "three":
                newElement[i].innerHTML = 3;
                break;
            case "four":
                newElement[i].innerHTML = 4;
                break;
            case "five":
                newElement[i].innerHTML = 5;
                break;
            case "six":
                newElement[i].innerHTML = 6;
                break;
            case "seven":
                newElement[i].innerHTML = 7;
                break;
            case "eight":
                newElement[i].innerHTML = 8;
                break;
            case "nine":
                newElement[i].innerHTML = 9;
                break;
            default:
                break;
        }
    }  
}

function appendTextToElement(htmlClass, someWord){
    let objectOfElements = $(htmlClass);
    for(let i = 0; i < objectOfElements.length; i++){
        objectOfElements[i].innerHTML += someWord;
    }
}


function addClass(htmlClass, someWord){
    let arrayOfHTML = $(htmlClass);
    $(htmlClass).addClass(someWord);
    return arrayOfHTML.length;
}

function removeElements(htmlClass){
    $(htmlClass).remove();
}

