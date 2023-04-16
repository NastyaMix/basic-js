const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating str based on the given parameters
 *  
 * @param {str} str str to repeat
 * @param {Object} options options object 
 * @return {str} repeating str
 * 
 *
 * @example
 * 
 * repeater('str', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'strPLUS00PLUS00PLUS**strPLUS00PLUS00PLUS**strPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let addition = String(options.addition);
  let result = '';

  addition = addition === 'undefined' ? '' : addition;

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;

      if (j !== additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
