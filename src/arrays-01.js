/* eslint-disable no-unused-vars */
/*
 * arrays-01.js
 * Language: javascript
 * Test: tests/arrays-01.test.js
 * Path: src/arrays-01.js
 *
 * Description: Basic array operations.
 *
 * Concepts:
 *  - Arrays are zero-indexed, mutable, and iterable.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Returns the first element of an array.
 * @param {Array} arr - The array.
 * @returns {*} The first element.
 */
function getFirstValue(arr) {
  // TODO: implement code
  return arr[0];
}

/**
 * Returns an array composed of the four provided values.
 * @param {*} a - First element.
 * @param {*} b - Second element.
 * @param {*} c - Third element.
 * @param {*} d - Fourth element.
 * @returns {Array} An array with the four elements.
 */
function makeArray(a, b, c, d) {
  // TODO: implement code
  return [a, b, c, d];
}

/**
 * Creates a new array of the first five prime numbers.
 * @returns {Array<number>} [2, 3, 5, 7, 11]
 */
function createFirstFivePrimes() {
  // TODO: implement code
  return [2, 3, 5, 7, 11];
}

/**
 * Creates an array of sequential numbers from 0 up to size - 1.
 * @param {number} size - The size of the array.
 * @returns {Array<number>} The new array.
 */
function createSizedArray(size) {
  // TODO: implement code
  // HINT: Use a for loop and push numbers from 0 to size - 1 into an array.
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(i);
  }
  return result;
}

/**
 * Modifies an array by adding the number 1 at both the beginning and the end.
 * Works on a shallow copy.
 * @param {Array} arr - The original array.
 * @returns {Array} The modified array.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
function modifyArrayByAdding(arr) {
  // TODO: implement code
  // HINT: Create a shallow copy and then use unshift() and push().
  let copy = [...arr];
  copy.unshift(1);
  copy.push(1);
  return copy;
}

/**
 * Modifies an array by removing the first and last elements.
 * Works on a shallow copy.
 * @param {Array} arr - The array to modify.
 * @returns {Array} The modified array.
 */
function modifyArrayByDeleting(arr) {
  // TODO: implement code
  // HINT: Create a shallow copy and use shift() and pop() if the array is not empty.
  let copy = [...arr];
  if (copy.length > 0) {
    copy.shift();
  }
  if (copy.length > 0) {
    copy.pop();
  }
  return copy;
}

/**
 * Returns the element at a specified index.
 * @param {Array} arr - The array.
 * @param {number} index - The index.
 * @returns {*} The element at the given index.
 */
function findElementAtIndex(arr, index) {
  // TODO: implement code
  return arr[index];
}

/**
 * Finds the index of the first occurrence of a given value.
 * Returns -1 if not found.
 * @param {Array} arr - The array.
 * @param {*} value - The value to find.
 * @returns {number} The index or -1 if not found.
 */
function findElementByValue(arr, value) {
  // TODO: implement code
  return arr.indexOf(value);
}

/**
 * Replaces the element at a specific index with a new value.
 * Note: This function modifies the original array.
 * @param {Array} arr - The array.
 * @param {number} index - The index to modify.
 * @param {*} value - The new value.
 * @returns {Array} The modified array.
 */
function changeElementAtIndex(arr, index, value) {
  // TODO: implement code
  arr[index] = value;
  return arr;
}

/**
 * Joins all elements of an array into a string without any separator.
 * @param {Array} arr - The array of elements.
 * @returns {string} The joined string.
 */
function makeStringFromArray(arr) {
  // TODO: implement code
  return arr.join('');
}

/**
 * Creates a shallow copy of an array using the spread operator.
 * @param {Array} arr - The array.
 * @returns {Array} A new array with the same elements.
 */
function createShallowCopy(arr) {
  // TODO: implement code
  return [...arr];
}

module.exports = {
  getFirstValue,
  makeArray,
  createFirstFivePrimes,
  createSizedArray,
  modifyArrayByAdding,
  modifyArrayByDeleting,
  findElementAtIndex,
  findElementByValue,
  changeElementAtIndex,
  makeStringFromArray,
  createShallowCopy,
};