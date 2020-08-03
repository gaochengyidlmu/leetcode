'use strict';
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(parseInt(Math.random() * 1000));
}
const target = arr[342] + arr[293];

function twoSumFor(arr, value) {
  // 保存遍历过的数据
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const rest = value - arr[i];
    if (map[rest] !== undefined) {
      return [i, map[rest]];
    }
    map[arr[i]] = i;
  }
}

function twoSumWhile(arr, value) {
  // 保存遍历过的数据
  const map = {};
  let i = 0;
  while (i < arr.length) {
    const rest = value - arr[i];
    if (map[rest] !== undefined) {
      return [i, map[rest]];
    }
    map[arr[i]] = i;
    i++;
  }
}

// add tests
suite
  .add('twoSumFor', function() {
    twoSumFor(arr, target);
  })
  .add('twoSumWhile', function() {
    twoSumWhile(arr, target);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
