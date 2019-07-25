

function populateRecords(arrayOfObjects){
    let newObj = {
        charge:0,
        "cash advance":0
    }
    let newElement = $('<div>').addClass('.testOutput').appendTo('#testArea');
    arrayOfObjects.forEach((item)=>{
        $('<div>').appendTo(newElement).text(item.type);
        $('<div>').appendTo(newElement).text(item.source);
        $('<div>').appendTo(newElement).text(item.amount);
        if(item.type === 'charge'){
            newObj.charge += parseFloat(item.amount);
        }
        if(item.type === 'cash advance'){
            newObj['cash advance'] += parseFloat(item.amount);
        }
    })
    return newObj;
}


