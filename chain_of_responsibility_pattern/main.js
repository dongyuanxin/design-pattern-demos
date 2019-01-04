/**
 * 核心就是请求者不必知道是谁哪个节点对象处理的请求；
 * 如果当前不符合终止条件，那么把请求转发给下一个节点处理。
 * 参考链接
 * 1. https://www.cnblogs.com/editor/p/5679552.html
 */

class Handler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
  }
}

class LogHandler extends Handler {
  constructor(...props) {
    super(...props);
    this.name = "log";
  }

  handle(level, msg) {
    if (level === this.name) {
      console.log(`LOG: ${msg}`);
      return;
    }
    this.next && this.next.handle(...arguments);
  }
}

class WarnHandler extends Handler {
  constructor(...props) {
    super(...props);
    this.name = "warn";
  }

  handle(level, msg) {
    if (level === this.name) {
      console.log(`WARN: ${msg}`);
      return;
    }
    this.next && this.next.handle(...arguments);
  }
}

class ErrorHandler extends Handler {
  constructor(...props) {
    super(...props);
    this.name = "error";
  }

  handle(level, msg) {
    if (level === this.name) {
      console.log(`ERROR: ${msg}`);
      return;
    }
    this.next && this.next.handle(...arguments);
  }
}

/******************以下是测试代码******************/

let logHandler = new LogHandler();
let warnHandler = new WarnHandler();
let errorHandler = new ErrorHandler();

// 设置下一个处理的节点
logHandler.setNext(warnHandler);
warnHandler.setNext(errorHandler);

logHandler.handle("error", "Some error occur");
