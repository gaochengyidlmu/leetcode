// 1. 调用函数时加载函数内容
// 2. 调用函数时，同时执行函数内容
const type = 3;

function lazyLoad() {
  if (type === 1) {
    lazyLoad = function() {
      console.log(1)
    }
  } else if (type === 2) {
    lazyLoad = function() {
      console.log(2)
    }
  } else if (type === 3) {
    console.log('执行')
    lazyLoad = function() {
      console.log(3)
    }
  }
  lazyLoad(...arguments);
}

lazyLoad();
lazyLoad();
lazyLoad();



