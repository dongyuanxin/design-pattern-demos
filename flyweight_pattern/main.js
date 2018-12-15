// 对象池
class ObjectPool {
  constructor() {
    this._pool = []; //
  }

  // 创建对象
  create(Obj) {
    return this._pool.length === 0
      ? new Obj(this) // 对象池中没有空闲对象，那么调用createFn，创建一个新的对象
      : this._pool.shift(); // 对象池中有空闲对象，直接取出，无需再次创建
  }

  // 对象回收
  recover(obj) {
    return this._pool.push(obj);
  }

  // 对象池大小
  size() {
    return this._pool.length;
  }
}

// 模拟文件对象
class File {
  constructor(pool) {
    this.pool = pool;
  }

  // 模拟下载操作
  download() {
    console.log(`+ 从 ${this.src} 开始下载 ${this.name}`);
    setTimeout(() => {
      console.log(`- ${this.name} 下载完毕`); // 下载完毕后, 将对象重新放入对象池
      this.pool.recover(this);
    }, 100);
  }
}

/****************** 以下是测试函数 **********************/

let objPool = new ObjectPool();

let file1 = objPool.create(File);
file1.name = "文件1";
file1.src = "https://download1.com";
file1.download();

let file2 = objPool.create(File);
file2.name = "文件2";
file2.src = "https://download2.com";
file2.download();

setTimeout(() => {
  let file3 = objPool.create(File);
  file3.name = "文件3";
  file3.src = "https://download3.com";
  file3.download();
}, 200);

setTimeout(
  () =>
    console.log(
      `${"*".repeat(50)}\n下载了3个文件，但其实只创建了${objPool.size()}个对象`
    ),
  1000
);
