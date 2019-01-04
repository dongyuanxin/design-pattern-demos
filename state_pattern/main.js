const FSM = (() => {
  let currenState = "download";
  return {
    download: {
      click: () => {
        console.log("暂停下载");
        currenState = "pause";
      },
      del: () => {
        console.log("先暂停, 再删除");
      }
    },
    pause: {
      click: () => {
        console.log("继续下载");
        currenState = "download";
      },
      del: () => {
        console.log("删除任务");
        currenState = "deleted";
      }
    },
    deleted: {
      click: () => {
        console.log("任务已删除, 请重新开始");
      },
      del: () => {
        console.log("任务已删除");
      }
    },
    getState: () => currenState
  };
})();

class Download {
  constructor(fsm) {
    this.fsm = fsm;
  }

  handleClick() {
    const { fsm } = this;
    fsm[fsm.getState()].click();
  }

  hanldeDel() {
    const { fsm } = this;
    fsm[fsm.getState()].del();
  }
}

// 开始下载
let download = new Download(FSM);

download.handleClick(); // 暂停下载
download.handleClick(); // 继续下载
download.hanldeDel(); // 下载中，无法执行删除操作
download.handleClick(); // 暂停下载
download.hanldeDel(); // 删除任务
