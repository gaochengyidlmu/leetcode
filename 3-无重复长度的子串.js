'use strict';

var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let max = 0;
  const map = new Map();
  for (let begin = 0, end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      begin = Math.max(begin, map.get(s[end]) + 1);
    }
    max = Math.max(max, end - begin + 1);
    map.set(s[end], end);
  }
  return max;
};
