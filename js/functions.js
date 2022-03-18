

function closeMenu() {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
}


function scrollFunction() {

  var navPrincipal = document.getElementById("navBarra");
  if (document.body.scrollTop > 768 || document.documentElement.scrollTop > 768) {
    navPrincipal.classList.remove("navDark");
  } else {
    navPrincipal.classList.add("navDark");
  }
}

window.onscroll = function() {
    scrollFunction()
  };
