var app = angular.module("myApp", ['ngRoute','ui.bootstrap']);

function closeMenu() {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
  }

  window.onscroll = function() {
    
    scrollFunction()};
  
  function scrollFunction() {

    var navPrincipal = document.getElementById("navBarra");
    if (document.body.scrollTop > 768 || document.documentElement.scrollTop > 768) {
      navPrincipal.classList.remove("navDark");
    } else {
      navPrincipal.classList.add("navDark");
    }
  }