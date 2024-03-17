// Toggle animation

const toggle = document.querySelector(".toggle");
console.log(toggle);

// A good idea is to create two functions, one when the element hasn't been clicked (animation would run), and another when animation has been clicked (animation returns to normal). Saving if the animation ran or not in a boolean variable like "let clicked = false".

toggle.onclick = () => {
	let topLine = document.querySelector(".top_line");
	let middleLine = document.querySelector(".middle_line");
	let bottomLine = document.querySelector(".bottom_line");
	let clicked = true;

	// Top line rotation
	topLine.style.left = "2px";
	topLine.style.top = "14px";
	topLine.style.width = "25px";
	topLine.style.transform = "rotate(45deg)";
	// Bottom Line rotation
	bottomLine.style.left = "2px";
	bottomLine.style.top = "14px";
	bottomLine.style.width = "25px";
	bottomLine.style.transform = "rotate(-45deg)";
	// Middle Line translation in the main axis
	middleLine.style.opacity = "0";
	middleLine.style.transform = "translateX(20px)";

	if (clicked) {
		toggle.onclick = () => {
			// Top line rotation
			topLine.style.left = "50%";
			topLine.style.top = "30%";
			topLine.style.width = "20px";
			topLine.style.transform = "translate(-50%, -50%)";
			// Bottom Line rotation
			bottomLine.style.left = "50%";
			bottomLine.style.top = "70%";
			bottomLine.style.width = "20px";
			bottomLine.style.transform = "translate(-50%, -50%)";
			// Middle Line translation in the main axis
			middleLine.style.left = "50%";
			middleLine.style.top = "50%";
			middleLine.style.opacity = "1";
			middleLine.style.transform = "translate(-50%, -50%)";
		};
	} else {
		toggle.onclick = () => {
			// Top line rotation
			topLine.style.left = "2px";
			topLine.style.top = "14px";
			topLine.style.width = "25px";
			topLine.style.transform = "rotate(45deg)";
			// Bottom Line rotation
			bottomLine.style.left = "2px";
			bottomLine.style.top = "14px";
			bottomLine.style.width = "25px";
			bottomLine.style.transform = "rotate(-45deg)";
			// Middle Line translation in the main axis
			middleLine.style.opacity = "0";
			middleLine.style.transform = "translateX(20px)";
		};
	}
};

// Init Particles

window.onload = function () {
	// Normal options Desktop
	Particles.init({
		selector: ".background-banner",
		maxParticles: 200,
		color: "#565656",
		connectParticles: true,

		// Responsive Options
		responsive: [
			{
				breakpoint: 1024,
				options: {
					maxParticles: 150,
				},
			},
			{
				breakpoint: 768,
				options: {
					maxParticles: 110,
				},
			},
			{
				breakpoint: 500,
				options: {
					maxParticles: 70,
				},
			},
			{
				breakpoint: 375,
				options: {
					maxParticles: 55,
				},
			},
		],
	});
};
