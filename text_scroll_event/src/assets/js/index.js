import  '../scss/style.scss';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.blockSecondary', //アニメーションが始まるトリガーとなる要素
  start: 'top center',
  end: 'bottom center', 
  toggleClass: {targets: ".headingSecondary", className: "heading-visible"}, //クラスをつけたり、外したりできる
  once: true
});