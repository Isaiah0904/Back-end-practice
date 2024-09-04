let toggleMenu = document.getElementById("navLinks")
function showMenu() {
  toggleMenu.style.top = "0"
}
function hideMenu() {
  toggleMenu.style.top = "-100vh"
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}