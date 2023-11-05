//Burger menu

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("closeBtn");
let menu = document.querySelectorAll("#mySidenav ul li a");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
menu.forEach(value => {
    value.addEventListener("click", closeNav)
})

function openNav() {
sidenav.classList.add("active");
}
function closeNav() {
sidenav.classList.remove("active");
}


		
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 2;
let next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);
const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
	}
	if (next == 3) next = 0;
	if (prev == -1) prev = 2;
	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}

setInterval((gotoPrev,gotoNext),5000);


const accordion = document.getElementsByClassName('accordion');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('accordion_active')
  })
}
