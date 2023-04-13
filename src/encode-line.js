const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let count = 0;
  let result = '';
  if (str.length === 0) {
    return '';
  }
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
      if (str[i] !== str[i - 1]) {
        result += count === 1 ? str[i - 1] : count + str[i - 1];
        count = 1;
      } else {
        count += 1;
      }
    } else if (i === 0) {
      count = 1;
    }
  }
  result += count === 1 ? str[str.length - 1] : count + str[str.length - 1];
  return result;
}

module.exports = {
  encodeLine
};
