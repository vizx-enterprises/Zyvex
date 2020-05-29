function StructX(object) {
	if (typeof(object) == 'object') {
		for (i in object) {
			this[i] = object[i];
		}
	}
}
function getEl(id) {
    return document.getElementId(id);
}
function createEl(tag,id,parent,text = false) {
    var el = document.createElement(tag)
	el.id = id
    if (text != false) {
		var node = document.createTextNode(node);
		el.appendChild(node);
	}
	var par = document.getElementById(parent)
	par.append(el)
}
function deleteEl(parent,id) {
	var par = document.getElementById(parent);
	var id = document.getElementById(id);
	par.removeChild(id);
}
function replaceEl(parent,newNode,oldNode) {
	var par = document.getElementById(parent);
	var nN = document.getElementById(newNode);
	var oN = document.getElementById(oldNode);
	par.replaceChild(nN,oN);
}
	
function editEl(id,obj) {
	var el = document.getElementById(id);
	for (i in obj) {
		if (typeof(i) == 'object') {
			for (v in i) {
				el[i][v] = obj[i][v]
			}
		} else {
			el[i] = obj[i]
		}
	}
}
function contentEl(id,value) {
	var el = getElementById(id);
	el.innerHTML = value
}
function classEl(id,value) {
	var el = getElementById(id);
	el.class = value;
}
function onLoad(func) {
	window.onload = func();
}
function onUnload(func) {
	window.onunload = func();
}
function onClick(id,func) {
	var el = document.getElementById(id);
	el.onclick = func();
}
function onEvent(id,func,event,bubbling=false) {
	var el = getElementById(id);
	el.addEventListener(event,func(),bubbling);
}

var package = {
	getEl : getEl,
	createEl : createEl,
	deleteEl : deleteEl,
	replaceEl : replaceEl,
	editEl : editEl,
	contentEl : contentEl,
	onLoad : onLoad,
	onUnload : onUnload,
	onClick : onClick,
	onEvent : onEvent,
}

var Zyvex = new StructX(package);