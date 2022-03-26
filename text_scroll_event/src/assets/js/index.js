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

}, false)