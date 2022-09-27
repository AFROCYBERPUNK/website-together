let slides = document.querySelectorAll('.list-item');
let container = document.querySelector('.container');
let list = document.querySelector('.list');
let animatedSlides = [...slides];
let positions = [];
let timeline;
let circleLength;
let time = 0;

const RADIUS = 300;
const START_ANGLE = Math.PI / 2;
const MIN_SLIDES = 8;

// Slider Data
let currentIndex = 0;

const tweenObject = {
  angle: START_ANGLE,
}


function setup() {
  if (slides.length < MIN_SLIDES) {
    cloneSlides();
  }

  setupPosition();
  setupTween();
}

function cloneSlides() {
  while (animatedSlides.length < MIN_SLIDES) {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const clone = slide.cloneNode(true);
      list.appendChild(clone);
      animatedSlides.push(clone);
    }
  }
}

function setupPosition() {
  const width = animatedSlides[0].getBoundingClientRect().width;
  const padding = 100;
  circleLength = (width + padding) * animatedSlides.length;
  const radius = circleLength / (Math.PI * 2);

  for (let i = 0; i < animatedSlides.length; i++) {
    const slide = animatedSlides[i];

    const value = i / animatedSlides.length;
    const angle = value * Math.PI * 2;

    const x = Math.cos(angle - tweenObject.angle) * radius;
    const y = Math.sin(angle - tweenObject.angle) * radius + radius;
    gsap.set(slide, { x, y });
  }
}

function setupTween() {
  window.addEventListener('click', clickHandler);
}

function clickHandler() {
  currentIndex += 1;

  gsap.to(tweenObject, 1, {
    angle: START_ANGLE + (currentIndex / animatedSlides.length) * (Math.PI * 2),
    onUpdate: () => {
      setupPosition();
    }
  });

  console.log('current index : ' + currentIndex);
  console.log('active slide : ', slides[currentIndex]);
}


setup();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});