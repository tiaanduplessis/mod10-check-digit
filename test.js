/* eslint-env jest */
'use strict'

const mod10CheckDigit = require('./')

test('mod10-check-digit', () => {
  expect(mod10CheckDigit('9202204720082')).toBe(2)
  expect(mod10CheckDigit('7992739871')).toBe(3)
  expect(mod10CheckDigit('7240157335352')).toBe(4)
})
