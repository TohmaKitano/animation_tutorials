import  '../scss/style.scss';

let parentEl = document.querySelector('.item-wrapper');
let elements = Array.from(parentEl.querySelectorAll('.item:not(.is-visible)'));

// Set Image Effect Content
function setImageEffectContent(arr) {
  gsap.to(arr, {
    ease: Power3.easeOut,
    stagger: {
      amount: 0.3,
      onComplete: function() {
        this.targets()[0].classList.add('is-visible')
      }
    }
  });
}

setImageEffectContent(elements);
