const forEach = (arr, callback) => {
  if (!Array.isArray(arr)) return;

  const length = arr.length;
  for (let i = 0; i < length; ++i) {
    callback(arr[i], i);
  }
};

// 以下是测试代码
let arr = ["a", "b"];
forEach(arr, (el, index) => console.log("元素是", el, "位于", index));
