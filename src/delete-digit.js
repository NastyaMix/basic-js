const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let nStr = `${n}`;
  let max=0;
  let str;
  for(let i=0; i< nStr.length;i++){
     str = nStr.replace(nStr[i],'');
     if(max < +str){
      max = +str;
     }
  }
  return max
}

module.exports = {
  deleteDigit
};
