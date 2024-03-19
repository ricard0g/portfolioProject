// // Preloader and Navbar Links animation
// let li1 = document.getElementById("li1-desktop");
// console.log(typeof li1);
// let li2 = document.getElementById("li2-desktop");
// let li3 = document.getElementById("li3-desktop");

window.addEventListener("load", () => {
	let loader = document.querySelector(".loader");
	console.log(loader);

	loader.classList.add("loader-hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild(loader);

		// // Little animation when windows load for the links in navbar in desktop
		// li1.classList.add("up");
		// li2.classList.add("up");
		// li3.classList.add("up");
	});
});
