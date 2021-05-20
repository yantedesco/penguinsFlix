//jshint esversion: 6

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
	this.scrollY > 20
		? navbar.classList.add("sticky")
		: navbar.classList.remove("sticky");
};
