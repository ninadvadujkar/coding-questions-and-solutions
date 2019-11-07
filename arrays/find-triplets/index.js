/**
 * Task is to count all the triplets such that sum of two elements equals the third element.
 * @param {Number[]} arr
 * @return {Number} Count of triplets
 */
function findTriplets(arr) {
  const triplets = [];
  arr.sort((a, b) => a - b);

  const map = {};
  arr.forEach(item => map[item] = item);

  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i] + arr[i + 1];
    // triplet found
    if (sum === map[sum]) {
      triplets.push([arr[i], arr[i+1], sum]);
    }
  }
  return triplets;
}

module.exports = findTriplets;