/**
 * @description Given an unsorted array `arr` of non-negative integers,
 *              find a continuous sub-array which adds to a given number `sum`.
 * @param {Number[]>} arr
 * @param {Number} sum
 * @return {Number[]} Array containing start index and end index of the sub-array
 */
function subArrayWithGivenSum(arr, sum) {
  for (let indexStart = 0; indexStart < arr.length; indexStart += 1) {
    const response = [];
    arr.slice(indexStart, arr.length).reduce((acc, curr, indexEnd) => {
      if (acc + curr === sum) {
        response.push(indexStart, (indexStart + indexEnd));
      }
      return acc + curr;
    });
    if (response.length > 0) {
      return response;
    }
  }
  return [];
}

module.exports = subArrayWithGivenSum;
