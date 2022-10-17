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
function deleteDigit(number) {
  let result = 0;
  const array = number.toString().split('');
  for (let i = 0; i < array.length; i++) {
    let current = array.slice(0);
    current.splice(i, 1);
    current = +current.join('');
    if (current > result) {
      result = current;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
