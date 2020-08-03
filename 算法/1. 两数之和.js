/**
 * 给定一个整数数列，找出其中和为特定值的那两个数。

 你可以假设每个输入都只会有一种答案，同样的元素不能被重用。

 示例:

 给定 nums = [2, 7, 11, 15], target = 9

 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i]
    if (map[otherNum] === undefined) map[nums[i]] = i
    else return [map[otherNum], i]
  }
  return []
};

let a = {}
console.log(a.ewrew === undefined)

let
  nums = [2, 7, 11, 15],
  target = 9

console.log(twoSum(nums, target))
