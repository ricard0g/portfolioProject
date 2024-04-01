// // Buttons animation

const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
	btn.addEventListener("click", function(e) {
		let x = e.target.clientX - e.target.offsetLeft;
		let y = e.target.clientY - e.target.offsetTop;
		let ripples = document.createElement("span");
		ripples.style.left = x + "px";
		ripples.style.top = y + "px";
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove();
		}, 750);
	});
});
// Toggle animation and then the elements part of the toggle animation

const toggle = document.querySelector(".toggle");

let topLine = document.querySelector(".top_line");
let middleLine = document.querySelector(".middle_line");
let bottomLine = document.querySelector(".bottom_line");
let sectionSlide = document.querySelector(".links-mobile-tablet");
let bannerSection = document.querySelector(".banner");

let animOn = false;

const toggleOn = () => {
	animOn = true;

	//Slide on
	sectionSlide.style.right = "2vw";
	sectionSlide.style.opacity = "1";
	sectionSlide.style.zIndex = "10";
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
	sectionSlide.style.zIndex = "0"; // --> This might not be needed. If needed also check if it's needed to determine the z-index in CSS to default to zero
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

let aboutMeSection = document.querySelector(".about-me");
console.log(aboutMeSection);

const intersectionCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("up");
			entry.isIntersecting ? observer.unobserve(entry.target) : null;
		}
	});
};

const observer = new IntersectionObserver(intersectionCallback, {
	threshold: 0.5,
});

observer.observe(aboutMeSection);

// Timeline Animation

function qs(selector, all = false){
	return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs(".time-line-project", true);
const timeline = qs(".time-line");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e){
	const { scrollY } = window;
	up = scrollY < prevScrollY;
	down = !up;
	const timelineRect = timeline.getBoundingClientRect();
	const lineRect = line.getBoundingClientRect();

	const dist = targetY - timelineRect.top;

	if(down && !full){
		set = Math.max(set, dist);
		line.style.bottom = `calc(100% - ${set}px)`;
	}
	if(dist > timeline.offsetHeight + 50 && !full){
		full = true;
		line.style.bottom = `-50px`;
	}

	sections.forEach((item) => {
		const rect = item.getBoundingClientRect();

		if (rect.top + item.offsetHeight / 5 < targetY) {
			item.classList.add("show-me");
		}
	});
	prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);