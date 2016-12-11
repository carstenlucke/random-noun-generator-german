var dict = require('../assets/de_DE.js');

module.exports = function() {
  var rndIdx = randomIntInc(0, dict.length - 1)
  return dict[rndIdx];
}

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}