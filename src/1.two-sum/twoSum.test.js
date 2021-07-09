#! /usr/bin/env node

const assert = require('assert');
const { twoSum } = require('../../src/1.two-sum/twoSum');

function testTwoSum() {
    const taget = 6;
    const nums = [3,2,4];

    const result = twoSum(nums, taget);
    assert.strictEqual(
        result.map(v => nums[v]).reduce((p, c) => p + c),
        taget,
    );
}

testTwoSum();
