function closeMenu() {
    var element = document.getElementById("collapsibleNavbar");
    element.classList.remove("show");
}


window.onscroll = function() {
    scrollNav();
    scrollFunction();
};

var carH = document.getElementById("imgAlto").height;
let carI = 100;
var h = carH - carI;

function scrollNav() {
    var navPrincipal = document.getElementById("navBarra");
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        navPrincipal.classList.remove("navDark");
    } else {
        navPrincipal.classList.add("navDark");
    }
}


function scrollFunction() {
    var topbutton = document.getElementById("topBtn");
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// Cuando se de click en el boton nos lleva al tope
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

/*  Efectos onscroll    */
window.addEventListener('scroll', function() {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }

    }
});