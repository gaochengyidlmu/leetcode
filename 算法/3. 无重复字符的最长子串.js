/**
 * 给定一个字符串，找出不含有重复字符的 最长子串 的长度。

 示例：

 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。
 *
 *
 *
 */

/**
 * 1. 定义起始、终止两个索引值
 * 2. 起始值不动，终止值不断 + 1
 * 3. 发现有重复值，则从重复值的下一位开始重新奇数
 * 4. 在过程中记录最长 length
 *
 */
const lengthOfLongestSubstring = function(s) {
  if (!s) return 0

  let
    substringMaxLength = 1,
    startIndex = 0,
    endIndex = 1,
    currentSubstring = s[0]

  while(endIndex < s.length) {
    let index = currentSubstring.indexOf(s[endIndex])

    if (index !== -1) {
      startIndex += index + 1
    }
    endIndex++

    currentSubstring = s.slice(startIndex, endIndex)

    if (currentSubstring.length > substringMaxLength) substringMaxLength = currentSubstring.length
  }

  return substringMaxLength
};

console.log(lengthOfLongestSubstring('qweq'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))

let a = ''

console.time('非空')
if (!a) console.log('111')
console.timeEnd('非空')


console.time('空字符串')
if (a === '') console.log('222')
console.timeEnd('空字符串')