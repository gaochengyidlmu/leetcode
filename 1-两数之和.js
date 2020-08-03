'use strict';

function twoSum(arr, value) {
  // 保存遍历过的数据
  const map = {};
  let rest;
  for (let i = 0; i < arr.length; i++) {
    rest = value - arr[i];
    if (map[rest] !== undefined) {
      return [i, map[rest]];
    }
    map[arr[i]] = i;
  }
}
// console.log(twoSum([1, 3, 4, 2], 6));
module.exports = twoSum;
