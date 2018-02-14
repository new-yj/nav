function removeClass(domObj, className) {
	var curClass = domObj.getAttribute('class').split(' '),
		newClass = '';
	for (var i=0; i<curClass.length; i++) {
		if (curClass[i]!=className) {
			newClass += curClass[i] + ' ';
		}
	}
	domObj.setAttribute('class', newClass.trim(' '));
}

function addClass(domObj, className) {
	var newClass = domObj.getAttribute('class') + ' ' + className;
	domObj.setAttribute('class', newClass);
}

function getWindowSize() {
	if (window.innerWidth !== undefined) {
		return {width: window.innerWidth, height: window.innerHeight};
	} else {
		return {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight};
	}
}

document.body.onclick = function () {
	removeClass(document.querySelector('.nav-list'), 'open');
}

document.getElementsByClassName('nav-menu')[0].onclick = function (e) {
	addClass(document.querySelector('.nav-list'), 'open');
	e.stopPropagation();
}
