const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
    } else {
      let min = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] === -1) {
        } else {
          if (arr[j] < arr[min]) {
            min = j;
          }
        }
      }
      if (min !== i) {
        let sort = arr[i];
        arr[i] = arr[min];
        arr[min] = sort;
      }
    }
  }
  return arr;

}

module.exports = {
  sortByHeight
};
