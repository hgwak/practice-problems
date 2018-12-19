function do_math(num1, num2, operator){
    if(operator === '+'){
        return num1+num2;
    }else if(operator === '-'){
        return num1-num2;
    }else if(operator === '*'){
        return num1*num2;
    }else if(operator === '/'){
        return num1/num2;
    }
};

function changeCase(sentence, caseSelect){
    if (caseSelect === 'uppercase'){
        var caps = sentence.toUpperCase();
        return caps;
    }
};
var changedSentence = changeCase('I am crazy', 'uppercase');
console.log(changeSentence);



function trimAndRepeat(word, trimCount, repeatCount){
    var newWord = word.slice(trimCount);
    var newString = newWord.repeat(repeatCount);
    return console.log(newString);
};