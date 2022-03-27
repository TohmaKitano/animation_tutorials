import  '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
  // Get DOM Element
  let titEffect    = document.querySelector('.titEffect');
  let isTitVisible = titEffect.classList.contains('titEffect-visible');
    
  creareNewTitEffectContent(isTitVisible, titEffect);
  animateNewTitEffectContent(isTitVisible, titEffect);

  // Create New DOM Content
  function creareNewTitEffectContent(bool, el) {
    if (bool) {
      el.classList.add('titEffect-animated');
      el.find('.titEffect__clone').remove();
      el.find('.titEffect__cover').remove();
    }
    else {
      let titEffectContent     = el.textContent,
          titEffectClone       = '<span class="titEffect__clone">'.concat(titEffectContent, '</span>'),
          titEffectCover       = '<span class="titEffect__cover">'.concat(titEffectContent, '</span>'),
          titEffectDuplication = '<span class="titEffect__detail">'.concat(titEffectContent, '</span>');
      el.innerHTML = titEffectDuplication.concat(titEffectClone).concat(titEffectCover);
    }
  }

  // Animate New DOM Content
  function animateNewTitEffectContent (bool, el) {
    if (!bool) {
      let newTitEffectClone = document.querySelector('.titEffect__clone'),
          newTitEffectCover = document.querySelector('.titEffect__cover');
      let elemHeight = el.offsetHeight,
          elemWidth  = el.offsetWidth;
      let initialCloneRect  = 'rect(0px 0px '.concat(elemHeight, 'px 0px)'),
          archivedCloneRect = 'rect(0px '.concat(elemWidth, 'px ').concat(elemHeight, 'px 0px)'),
          initialCoverRect  = 'rect(0px '.concat(elemWidth, 'px ').concat(elemHeight, 'px 0px)'),
          archivedCoverRect = 'rect(0px '.concat(elemWidth, 'px ').concat(elemHeight, 'px ').concat(elemWidth, "px)");
      newTitEffectClone.style.clip = initialCloneRect;
      newTitEffectCover.style.clip = initialCoverRect;
      titEffect.classList.add('titEffect-visible');
      gsap.to(newTitEffectClone, 1.5, {
        clip: archivedCloneRect,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: titEffect,
          start: 'top center'
        }
      })
      gsap.to(newTitEffectCover, 1.5, {
        clip: archivedCoverRect,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: titEffect,
          start: 'top center'
        },
        onComplete:function() {
          titEffect.classList.add('titEffect-animated'),
          newTitEffectClone.remove(),
          newTitEffectCover.remove()
        }
      })
    }
  }

}, false)