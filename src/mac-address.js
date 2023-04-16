const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given ning inputning
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputning
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  const reg = n.match(/[0-9A-F][0-9A-F]/gi).join('-');
  return reg.length < n.length ? false : true;
}

module.exports = {
  isMAC48Address
};
