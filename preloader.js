// Preloader

window.addEventListener("load", () => {
	let loader = document.querySelector(".loader");
	console.log(loader);

	loader.classList.add("loader-hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild(loader);

	});
});