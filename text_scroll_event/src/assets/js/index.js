import  '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
  let $elem = document.querySelector('.titleeffect');
  let isVisible = $elem.classList.contains('titleeffect-visible');
  console.log(isVisible);

  // domを生成
  if (isVisible) {
    $elem.classList.add('titleeffect-animated');
    $elem.find(".titleeffect__clone").remove();
    $elem.find(".titleeffect__cover").remove();
  }
  else {
    let text = $elem.textContent;
    let clone = '<span class="titleeffect__clone">'.concat(text, '</span>');
    let cover = '<span class="titleeffect__cover">'.concat(text, '</span>');
    let copy = '<span class="titleeffect__df">'.concat(text, '</span>');
    $elem.innerHTML = copy.concat(clone).concat(cover);
  }
  console.log($elem);

  if (!isVisible) {
    let $clone = document.querySelector('.titleeffect__clone');
    let $cover = document.querySelector('.titleeffect__cover');
    console.log($clone);
    let elemHeight = $elem.offsetHeight;
    let elemWidth = $elem.offsetWidth;
    let n = "rect(0px 0px ".concat(elemHeight, "px 0px)");
    let r = "rect(0px ".concat(elemWidth, "px ").concat(elemHeight, "px 0px)");
    let o = "rect(0px ".concat(elemWidth, "px ").concat(elemHeight, "px 0px)");
    let s = "rect(0px ".concat(elemWidth, "px ").concat(elemHeight, "px ").concat(elemWidth, "px)");
    $clone.style.clip = n;
    $cover.style.clip = o;
    $elem.classList.add('titleeffect-visible');
    gsap.to($clone, 1.5, {
      clip: r,
      ease: Power3.easeOut
    })
    gsap.to($cover, 1.5, {
      clip: s,
      ease: Power3.easeOut,
      onComplete:function(){
        $elem.classList.add('titleeffect-animated'),
        $clone.remove(),
        $cover.remove()
      }
    })
  }

}, false)