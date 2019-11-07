const { assert } = require('chai');

const findTriplets = require('./index');

describe('findTriplets()', () => {
  it('should return triplets', () => {
    assert.deepEqual(findTriplets([1, 5, 3, 2]), [[1, 2, 3], [2, 3, 5]]);
  });
  it('should return empty array if triplets not found', () => {
    assert.deepEqual(findTriplets([3, 2, 7]), []);
  });
});