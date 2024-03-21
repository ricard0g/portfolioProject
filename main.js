// Init Particles

window.onload = function () {
	// Normal options Desktop
	Particles.init({
		selector: ".background-banner",
		maxParticles: 200,
		color: "#565656",
		connectParticles: false,

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
// Toggle animation and then the elements part of the toggle animation

const toggle = document.querySelector(".toggle");

let topLine = document.querySelector(".top_line");
let middleLine = document.querySelector(".middle_line");
let bottomLine = document.querySelector(".bottom_line");
let sectionSlide = document.querySelector(".links-mobile-tablet");
let bannerSection = document.querySelector(".banner");

// A good idea is to create two functions, one when the element hasn't been clicked (animation would run), and another when animation has been clicked (animation returns to normal). Saving if the animation ran or not in a boolean variable like "let clicked = false".
let animOn = false;

const toggleOn = () => {
	animOn = true;
	
	//Slide on
	sectionSlide.style.right = "2vw";
	sectionSlide.style.opacity = "1";
	//When sidebar is on, .banner goes to the back
	bannerSection.style.zIndex = "-1";
	// Top line rotation
	topLine.style.left = "14.68px";
	topLine.style.top = "23px";
	topLine.style.width = "19px";
	topLine.style.transform = "rotate(45deg)";
	// Bottom Line rotation
	bottomLine.style.left = "14.68px";
	bottomLine.style.top = "23px";
	bottomLine.style.width = "19px";
	bottomLine.style.transform = "rotate(-45deg)";
	// Middle Line translation in the main axis
	middleLine.style.opacity = "0";
	middleLine.style.transform = "translateX(14px)";
};

const toggleOff = () => {
	animOn = false;

	// Slide off
	sectionSlide.style.right = "0%";
	sectionSlide.style.opacity = "0";
	//When sidebar is off, .banner goes to the front
	bannerSection.style.zIndex = "0";
	// Top line rotation
	topLine.style.left = "50%";
	topLine.style.top = "35%";
	topLine.style.width = "14px";
	topLine.style.transform = "translate(-50%, -50%)";
	// Bottom Line rotation
	bottomLine.style.left = "50%";
	bottomLine.style.top = "65%";
	bottomLine.style.width = "14px";
	bottomLine.style.transform = "translate(-50%, -50%)";
	// Middle Line translation in the main axis
	middleLine.style.left = "50%";
	middleLine.style.top = "50%";
	middleLine.style.width = "14px";
	middleLine.style.opacity = "1";
	middleLine.style.transform = "translate(-50%, -50%)";
};

toggle.addEventListener("click", () => {
	if (animOn) {
		toggleOff();
	} else {
		toggleOn();
	}
});


// About Me animation

// let aboutMeSection = document.querySelector(".about-me");
// console.log(aboutMeSection);
// const observer = new IntersectionObserver(() => {
// 	aboutMeSection.classList.add("up");
// 	console.log(`It executed!`);
// }, {
// 	root: null,
// 	thresholds: 1.0,
// })

// observer.observe(aboutMeSection);