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
    document.body.scrollTop = 10; // For Safari
    document.documentElement.scrollTop = 10; // Para Chrome, Firefox, IE y Opera
}