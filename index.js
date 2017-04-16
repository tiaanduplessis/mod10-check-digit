'use strict'

/**
 * Calculate check digit
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 * @param {Number|String} numbers
 */
module.exports = function mod10CheckDigit (numbers) {
  if (typeof numbers !== 'string') {
    throw new Error('Invalid number provided')
  }

  const doubledSum = numbers.split('')
    .map((val, index) => {
      if ((index + numbers.length) % 2 !== 0) {
        const double = Number.parseInt(val) * 2
        return double > 9 ? double - 9 : double
      }

      return val
    })
    .reduce((acc, curr) => Number.parseInt(acc) + Number.parseInt(curr))

  return (doubledSum * 9) % 10
}
