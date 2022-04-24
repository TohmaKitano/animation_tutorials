import  '../scss/style.scss';

window.addEventListener('DOMContentLoaded', (e) => {
  let options = {
    depth: 1.1,
    fadeIn: 3000,
    freezeActive: true,
    freezeDecel: true,
    initial: [0.3, -0.1],
    maxSpeed: 0.06,
    noSelect: true,
    shuffleTags: true,
    shape: 'sphere',
    textColour: '#000000',
    textFont: null,
    zoom: 0.8,
    pinchZoom: true,
    wheelZoom: false,
  }
  TagCanvas.Start('myCanvas', '', options);
}, false);