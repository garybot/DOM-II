// Your code goes here

// round images on mouseenter, revert on mouseleave, rotate on click

const images = document.querySelectorAll('img');
let turn = 0.25
images.forEach(img => {
	img.addEventListener('mouseenter', event => {
		img.style.borderRadius = "50%";
	});
	img.addEventListener('mouseleave', event => {
		img.style.borderRadius = "10px";
	});
	img.addEventListener('click', event => {
		event.stopPropagation();
		event.target.style.transform = `rotate(${turn}turn)`;
		turn += 0.25
	})
});

// switch direction of content rows on click.

const sections = document.querySelectorAll('.content-section');

sections.forEach(section => {
	section.addEventListener('click', event => {
		console.log(event);
		if (section.style.flexDirection ==="row-reverse") {
			section.style.flexDirection = "row";
		} else {
			section.style.flexDirection = "row-reverse";
		}
	});
});

// grow destination buttons on mouseover

const dstBtns = document.querySelectorAll('.btn');

dstBtns.forEach(btn => {
	btn.addEventListener('mouseover', event => {
		event.target.style.transform = 'scale(1.2)';
	});
});

// switch intro text on copy

const introText = document.querySelector(".intro p");

introText.addEventListener('copy', event => {
	event.target.textContent = "Tunguska event as a patch of light white dwarf star stuff harvesting star light shores of the cosmic ocean Apollonius of Perga. From which we spring courage of our questions dream of the mind's eye the sky calls to us the ash of stellar alchemy courage of our questions? Vastness is bearable only through love a very small stage in a vast cosmic arena descended from astronomers vanquish the impossible the only home we've ever known permanence of the stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.";
});

// remove .intro elemeents on auxclick

document.querySelector('.intro').addEventListener('auxclick', event => {
	event.target.style.display = "none";
});

// change text colors while the mouse is moving over them.

function colorPicker() {
	const red = Math.floor(Math.random()*(256));
	const green = Math.floor(Math.random()*(256));
	const blue = Math.floor(Math.random()*(256));
	return `rgb(${red}, ${blue}, ${green})`;
}

const text = document.querySelectorAll('p');
text.forEach(p => {
	p.addEventListener('mousemove', event => {
		p.style.color = colorPicker(); 
	});
});

// start flashing header on page load

window.addEventListener('load', event => {
	const flash = window.setInterval(() => {
		return document.querySelector('header').style.backgroundColor = colorPicker();
	}, 200);
	document.querySelector('header').addEventListener('click', event => {
		clearInterval(flash);
	});
});

