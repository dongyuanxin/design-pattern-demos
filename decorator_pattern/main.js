/**
 * 参考链接：
 * 1. https://www.sitepoint.com/javascript-decorators-what-they-are/
 */
const addDecorator = (fn, before, after) => {
  let isFn = fn => typeof fn === "function";

  if (!isFn(fn)) {
    return () => {};
  }

  return (...args) => {
    // 保存返回函数结果
    let result;
    // 按照顺序执行“装饰函数”
    isFn(before) && before(...args);
    isFn(fn) && (result = fn(...args));
    isFn(after) && after(...args);
    // 最后返回结果
    return result;
  };
};

/******************以下是测试代码******************/

const beforeHello = (...args) => {
  console.log(`Before Hello, args are ${args}`);
};

const hello = (name = "user") => {
  console.log(`Hello, ${name}`);
  return name;
};

const afterHello = (...args) => {
  console.log(`After Hello, args are ${args}`);
};

const wrappedHello = addDecorator(hello, beforeHello, afterHello);

let result = wrappedHello("godbmw.com");
console.log(result);
