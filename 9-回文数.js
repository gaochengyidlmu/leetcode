const isPalindrome = function(x) {
  if (x < 0) return false;
  let t = x;
  let r = 0; // x的反转
  while (t) {
    const rmd = t % 10;
    r = r * 10 + rmd;
    t = (t - rmd) / 10;
    console.log('rmd: ' + rmd + '; r: ' + r + '; t: ' + t);
  }
  return r === x;
};

console.log(isPalindrome(132));
