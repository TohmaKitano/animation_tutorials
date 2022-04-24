import  '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
  // Get DOM Element
  // let titEffect    = document.querySelector('.titEffect');
  // let isTitVisible = titEffect.classList.contains('titEffect-visible');

  let titEffects = document.getElementsByClassName('titEffect');
  for (const titEffect of titEffects) {
    let isTitVisible = titEffect.classList.contains('titEffect-visible');
    ScrollTrigger.create({
      trigger: titEffect,
      start: 'top 90%',
      markers: true,
      onEnter: () => creareNewTitEffectContent(isTitVisible, titEffect),
      once: true,
    });
  }

  // Create New DOM Content
  function creareNewTitEffectContent(bool, el) {
    if (bool) {
      el.classList.add('titEffect-animated');
      el.find('.titEffect__clone').remove();
      el.find('.titEffect__cover').remove();
    }
    else {
      let titEffectClone       = `<span class="titEffect__clone">${el.textContent}</span>`,
          titEffectCover       = `<span class="titEffect__cover">${el.textContent}</span>`,
          titEffectDuplication = `<span class="titEffect__detail">${el.textContent}</span>`;
      el.innerHTML = `${titEffectDuplication}${titEffectClone}${titEffectCover}`;
      animateNewTitEffectContent(bool, el);
    }
  }

  // Animate New DOM Content
  function animateNewTitEffectContent(bool, el) {
    if (!bool) {
      let newTitEffectClone = document.querySelector('.titEffect__clone'),
          newTitEffectCover = document.querySelector('.titEffect__cover');
      let elemHeight = el.offsetHeight,
          elemWidth  = el.offsetWidth;
      let initialCloneRect  = `rect(0px 0px ${elemHeight}px 0px)`,
          archivedCloneRect = `rect(0px ${elemWidth}px ${elemHeight}px 0px`,
          initialCoverRect  = `rect(0px ${elemWidth}px ${elemHeight}px 0px`,
          archivedCoverRect = `rect(0px ${elemWidth}px ${elemHeight}px ${elemWidth}px`;
      newTitEffectClone.style.clip = initialCloneRect;
      newTitEffectCover.style.clip = initialCoverRect;
      el.classList.add('titEffect-visible');
      gsap.to(newTitEffectClone, 1.5, {
        clip: archivedCloneRect,
        ease: Power3.easeOut,
      })
      gsap.to(newTitEffectCover, 1.5, {
        clip: archivedCoverRect,
        ease: Power3.easeOut,
        onComplete: () => {
          el.classList.add('titEffect-animated'),
          newTitEffectClone.remove(),
          newTitEffectCover.remove()
        }
      })
    }
  }

}, false)