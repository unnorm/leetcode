#! /usr/bin/env node

/**
 * twoSum 哈希记忆法求两数之和为目标数
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const memory = new Map();

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (memory.has(target - num)) {
            return [memory.get(target - num), i];
        }
        memory.set(num, i);
    }

    throw new Error('No solution');
};

exports.twoSum = twoSum;
