"use strict";

const randambackgroundPosition = () => {
  const BG_SAND = document.getElementById('js-bg-sand');
  let count = Math.ceil(80 * Math.random());
  BG_SAND.style.backgroundPosition = `${count}% ${count}%`;
}
setInterval(randambackgroundPosition, 100);
