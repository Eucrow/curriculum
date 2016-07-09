/*SMOOTH SCROLL*/
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function(evt){
        this.classList.add('active');
		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');

        if(sectionToGo.length > 1) {
            evt.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function getElementByIdAndScroll(elementToGo){
    var elem;
    if (elementToGo == '') {
        elem = document.getElementsByClassName('header')[0];
    } else {
        elem = document.getElementById(elementToGo);
    }

    scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");

	} else {
		element.lastJump = null;
	}
}

//CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	var top = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 50;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 50;
var offsetEstudios = cumulativeOffset(document.getElementById('estudios')) - 50;
var offsetSobreMi = cumulativeOffset(document.getElementById('sobre-mi')) - 50;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
		if(!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}
		// navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href$="inicio"]').parentNode.classList.add("active");
	} else if (window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetExperiencia){
		if(!previous) {
			previous = 2;
		} else if (previous == 2) {
			return false;
		}
		// navbar.style.backgroundColor = '#A4A4A4';
		deleteActiveClass()
		document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active");
	} else if (window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetEstudios){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		// navbar.style.backgroundColor = '#F7F7F7';
		deleteActiveClass();
		document.querySelector('a[href$="experiencia"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetSobreMi){
        if(!previous) {
            previous = 4;
        } else if (previous == 4) {
            return false;
        }
        // navbar.style.backgroundColor = '#F7F7F7';
        deleteActiveClass();
        document.querySelector('a[href$="estudios"]').parentNode.classList.add("active");
    } else if (window.pageYOffset >= offsetSobreMi){
        if(!previous) {
            previous = 5;
        } else if (previous == 5) {
            return false;
        }
        // navbar.style.backgroundColor = '#F7F7F7';
        deleteActiveClass();
        document.querySelector('a[href$="sobre-mi"]').parentNode.classList.add("active");
    }
}

    function deleteActiveClass() {
    	for(var i = 0; i < navbarItems.length; i++){
    		navbarItems[i].classList.remove('active');
    		navbarItems[i].classList.remove('active-reverse');
    	}
    }
