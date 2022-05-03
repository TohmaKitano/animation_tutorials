import  '../scss/style.scss';

let parentEl = document.querySelector('.p-top-join__links');
let elements = Array.from(parentEl.querySelectorAll('.item:not(.is-visible)'));

gsap.to(elements, {
  ease: Power3.easeOut,
  stagger: {
    amount: 0.3,
    onComplete: function() {
      this.targets()[0].classList.add('is-visible')
    }
  }
});
