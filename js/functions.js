function closeMenu() {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
}


window.onscroll = function() {
  scrollNav();
  scrollFunction();
};

function scrollNav() {

  var navPrincipal = document.getElementById("navBarra");
  if (document.body.scrollTop > 768 || document.documentElement.scrollTop > 768) {
    navPrincipal.classList.remove("navDark");
  } else {
    navPrincipal.classList.add("navDark");
  }
}

  
 function scrollFunction() {
    var topbutton = document.getElementById("topBtn");

    if (document.body.scrollTop > 768 || document.documentElement.scrollTop > 768) {
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
  

// var app = angular.module('todoApp', ['ngRoute']);

// app.config(function($routeProvider){
// 	$routeProvider
// 	.when('/', {
// 		// templateUrl: 'sites/login.html',
// 		controller: 'mailCtrl'
// 	})
// 	.otherwise({
// 		redirectTo: '/'
// 	});
// });
