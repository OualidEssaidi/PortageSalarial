//Burger menu

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("open-menu");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
sidenav.classList.add("active");
}
function closeNav() {
sidenav.classList.remove("active");
}

