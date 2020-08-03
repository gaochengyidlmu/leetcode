'use strict';

var maxArea = function(height) {
  
}


// 最简单的，双重遍历
var maxAreaSimple = function(height) {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      if (area > max) max = area;
    }
  }
  return max;
};

console.log(maxAreaSimple([1, 8, 6, 2, 5, 4, 8, 3, 7]));
