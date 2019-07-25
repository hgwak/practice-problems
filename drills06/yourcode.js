

function removeClassFromElement(someClass, someOtherClass){
    $(someClass).removeClass(someOtherClass)
}

function toggleClassOnElement(someElement,addClass){
	$(someElement).toggleClass(addClass)
}

function hideElements(someElement, hideClass ){
    if(hideClass === 'hide'){
        $(someElement).hide();
    }
    if(hideClass==='removeChildren'){
        $(`${someElement} > *`).remove();
    }
    if(hideClass==="removeSelf"){
        $(someElement).remove();
    }
	
}

function addAttributeToElement(first, second, third ){
    $(first).attr(second, third)
}

function putPosInElement(someClass){
    let coordinates = $(someClass).position();
    let newCoordinates = {
        x:coordinates.top,
        y:coordinates.left
    }
    $(someClass).html("x: "+newCoordinates.x + 'px' + "<br>" + "y: "+newCoordinates.y + 'px');
    return newCoordinates;
}


