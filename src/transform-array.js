const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let transArr = [];
  let array = arr.slice(0);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--double-next') {
      if (array[i] !== array[array.length - 1]) {
        array[i] = array[i + 1];
        transArr.push(array[i]);
      }
    } else if (array[i] === '--double-prev') {
      if (array[i - 2] !== '--discard-next' && array[0] !== '--double-prev') {
        array[i] = array[i - 1]
        transArr.push(array[i]);
      }
    } else if (array[i] === '--discard-next') {
      i++
    } else if (array[i] === '--discard-prev') {
      if (array[i - 2] !== '--discard-next') {
        transArr.pop();
      }
    } else {
      transArr.push(array[i]);
    }
  }
  return transArr;
}


module.exports = {
  transform
};
