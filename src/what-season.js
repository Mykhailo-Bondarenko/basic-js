const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!date.getTime) {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let result = '';
  const month = date.getMonth();
  if (month >= 2 && month < 5) {
    result = 'spring';
  } else if (month >= 5 && month < 8) {
    result = 'summer';
  } else if (month >= 8 && month < 11) {
    result = 'fall';
  } else if ((month > -1) && (month < 2) || (month > 10) && (month < 12)) {
    result = 'winter';
  }
  return result;
}

module.exports = {
  getSeason
};
