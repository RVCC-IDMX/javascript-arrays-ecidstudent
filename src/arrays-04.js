/* eslint-disable no-unused-vars */
/*
 * arrays-04.js
 * Language: javascript
 * Test: tests/arrays-04.test.js
 * Path: src/arrays-04.js
 *
 * Description: Advanced array challenges.
 *
 * Concepts:
 *  - Uses Math.abs, splice, join, and the spread operator.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/**
 * Returns the sum of the absolute values of numbers in an array.
 * @param {Array<number>} nums - The array of numbers.
 * @returns {number} The sum.
 */
function getAbsoluteSum(nums) {
  // TODO: implement code
  // HINT: Use a loop and Math.abs() to add the absolute values.
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.abs(nums[i]);
  }
  return sum;
}

/**
 * Creates a new array excluding any string elements.
 * @param {Array} arr - The array containing various data types.
 * @returns {Array} A new array with only non-string elements.
 */
function removeStrings(arr) {
  // TODO: implement code
  // HINT: Use filter() and check that typeof item is not 'string'.
  return arr.filter(function (item) {
    return typeof item !== 'string';
  });
}

/**
 * Finds and returns the minimum and maximum values in an array.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {Array<number>} An array [min, max] or [] if empty.
 */
function findMinMax(arr) {
  // TODO: implement code
  // HINT: If the array is not empty, use Math.min and Math.max with spread syntax.
  if (arr.length === 0) {
    return [];
  }
  return [Math.min(...arr), Math.max(...arr)];
}

/**
 * Formats an array of 10 digits into a telephone number string.
 * Format: (123) 456-7890
 * @param {Array<number>} numbers - An array with 10 digits.
 * @returns {string} The formatted telephone number.
 */
function getTelNo(numbers) {
  // TODO: implement code
  // HINT: Make a shallow copy, then use array methods (like splice and join) to format.
  const arr = [...numbers];
  arr.splice(0, 0, "(");
  arr.splice(4, 0, ")");
  arr.splice(5, 0, " ");
  arr.splice(9, 0, "-");
  return arr.join('');
}

module.exports = {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
};