const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE ANYTHING BELOW.
const arr = prompt(
  'Enter a list of number separated by a comma. For example: 1,2,3: '
)
  .split(',')
  .map((x) => parseInt(x));
const elements = prompt(
  'Enter a list of number separated by a comma to remove from the list above: '
)
  .split(',')
  .map((x) => parseInt(x));

/**
 * TODO: Create a new array after removing all of the given elements
 * from the given array.
 * For example: if arr = [1, 2, 3] and elements = [1, 3], it
 * should return [2].
 */
const result = undefined;

console.log(result);

module.exports = {
  result,
};
