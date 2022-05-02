import  '../scss/style.scss';

// {key:"links",
//   value:function(){
//     var e = $(".p-top-join__links").find(".item:not(.is-visible)"),
//         t = document.querySelector(".p-top-join__links"),
//         i = new IntersectionObserver(
//         (function(n){
//           n.forEach((function(n){
//             n.isIntersecting&&(i.unobserve(t),
//             _.each(e,(function(e,t){
//             TweenMax.delayedCall(t*app.Config.duration/3,(function(){
//               $(e).addClass("is-visible")
//             }))
//           })))
//         }))
//       }),
//       {rootMargin:"0px 0px -20% 0px"}
//     );
//     i.observe(t)
//   }
// }

let parentEl = document.querySelector('.p-top-join__links');
let elements = Array.from(parentEl.querySelectorAll('.item:not(.is-visible)'));
console.log(elements);

const options = {rootMargin: "0px 0px -20% 0px"};

// const observer = new IntersectionObserver(showElement, options);

const observer = new IntersectionObserver(showElement, options);

observer.observe(parentEl);

function showElement(){
  elements.forEach(el => {
    gsap.delayedCall(1,(function(){
      el.classList.add('is-visible')
    }))
    // gsap.to(el, {
    //     // ease: Power3.easeOut,
    //     duration: 1,
    //     onComplete: () => {
    //       el.classList.add('is-visible')
    //     }
    //   }
    // )
  })
};

function addClass(el) {
  el.classList.add('is-visible');
}