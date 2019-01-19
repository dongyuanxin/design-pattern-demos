const fetchData = (() => {
  // 备忘录 / 缓存
  const cache = {};

  return page =>
    new Promise(resolve => {
      // 如果页面数据已经被缓存, 直接取出
      if (page in cache) {
        return resolve(cache[page]);
      }
      // 否则, 异步请求页面数据
      // 此处, 仅仅是模拟异步请求
      setTimeout(() => {
        cache[page] = `内容是${page}`;
        resolve(cache[page]);
      }, 1000);
    });
})();

// 以下是测试代码
const run = async () => {
  let start = new Date().getTime(),
    now;
  // 第一次: 没有缓存
  await fetchData(1);
  now = new Date().getTime();
  console.log(`没有缓存, 耗时${now - start}ms`);

  // 第二次: 有缓存 / 备忘录有记录
  start = now;
  await fetchData(1);
  now = new Date().getTime();
  console.log(`有缓存, 耗时${now - start}ms`);
};

run();
