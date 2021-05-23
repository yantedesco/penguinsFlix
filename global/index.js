//jshint esversion: 6

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
	this.scrollY > 20
		? navbar.classList.add("sticky")
		: navbar.classList.remove("sticky");
};

// Get the modal
var modal = document.querySelectorAll(".modal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
	btn[i].onclick = (e) => {
		e.preventDefault();
		modal = document.querySelector(e.target.getAttribute("href"));
		modal.style.display = "block";
	};
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < span.length; i++) {
	span[i].onclick = () => {
		for (var index in modal) {
			console.log(typeof modal[index].style);
			if (typeof modal[index].style !== "undefined")
				modal[index].style.display = "none";
		}
	};
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target.classList.contains("modal")) {
		for (var index in modal) {
			if (typeof modal[index].style !== "undefined")
				modal[index].style.display = "none";
		}
	}
};
