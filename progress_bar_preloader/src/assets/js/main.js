'use strict';

const tl = gsap.timeline({
  paused: 'true'
});

tl.to('#js-percent, #js-bar', {
  duration: .2,
  opacity: 0,
  zIndex: -1
});
tl.to('#js-preloader', {
  duration: .8,
  width: '0%'
});
tl.from('#js-container', {
  duration: 1.6,
  y: '-750%'
}, '-= .2');
tl.to('#js-title', {
  opacity: 1,
  textShadow: '4px 8px rgba(255, 255, 255, 0.23)',
  skewY: 10,
  y: '10%',
  stagger: {
    amount: .4
  }
});

let width = 1;
let percent = document.getElementById('js-percent');
let bar = document.getElementById('js-baramount');
let id;

function move() {
  id = setInterval(frame, 10);
}
function frame() {
  if (width >= 100) {
    clearInterval(id);
    tl.play();
  } else {
    width ++;
    bar.style.width = width + '%';
    percent.innerHTML = width + '%';
  }
}
