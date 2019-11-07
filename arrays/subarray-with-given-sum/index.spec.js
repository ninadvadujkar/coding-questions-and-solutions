const { assert } = require('chai');

const subArrayWithGivenSum = require('./index');

describe('subArrayWithGivenSum()', () => {
  it('should return return start and end index of first continuous sub-array that equals to the sum (1)', () => {
    assert.deepEqual(subArrayWithGivenSum([1, 2, 3, 7, 5], 12), [1, 3]);
  });
  it('should return return start and end index of first continuous sub-array that equals to the sum (2)', () => {
    assert.deepEqual(subArrayWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), [0, 4]);
  });
});