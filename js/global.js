//addLoadEvent
function addLoadEvent(){
	var oldonload = window.oldonload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}


//insertAfter

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNod;
	if (parent,lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}



//addClass
function addClass (element,value) {
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName += "";
		newClassName +=value;
		element.className = newClassName;
	}
}