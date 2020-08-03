function reverse(x) {
  const isNagative = x < 0;

  const arr = [];
  let rest = isNagative ? -x : x;

  while (rest > 0) {
    const remain = rest % 10;
    rest = parseInt(rest / 10);
    let isHead = true;
    if (!isHead || remain !== 0) {
      arr.unshift(remain);
      isHead = false;
    }
  }
  let result = 0;
  arr.forEach((item, i) => {
    result += item * Math.pow(10, i);
  });

  return isNagative ? -result : result;
}

console.log('x: ', reverse(123));
console.log('x: ', reverse(1200));
console.log('x: ', reverse(-1200));
