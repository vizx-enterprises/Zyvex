class zyvex {
	
   getEl(id) {
   	return document.getElementId(id);
	}
	createEl(tag,id,parent,text = false) {
		var el = document.createElement(tag)
		el.id = id
		if (text != false) {
			var node = document.createTextNode(node);
			el.appendChild(node);
		}
		var par = document.getElementById(parent)
		par.append(el)
	}
	deleteEl(parent,id) {
		var par = document.getElementById(parent);
		var id = document.getElementById(id);
		par.removeChild(id);
	}
	replaceEl(parent,newNode,oldNode) {
		var par = document.getElementById(parent);
		var nN = document.getElementById(newNode);
		var oN = document.getElementById(oldNode);
		par.replaceChild(nN,oN);
	}
	
	editEl(id,obj) {
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
	contentEl(id,value) {
		var el = getElementById(id);
		el.innerHTML = value
	}
	onLoad(func) {
		window.onload = func();
	}
	onUnload(func) {
		window.onunload = func();
	}
	onClick(id,func) {
		var el = document.getElementById(id);
		el.onclick = func();
	}
	onEvent(id,func,event,bubbling=false) {
		var el = getElementById(id);
		el.addEventListener(event,func(),bubbling);
	}
}