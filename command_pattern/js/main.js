// 接受到命令，执行相关操作
const MenuBar = {
  refresh(){
    console.log("刷新菜单页面");
  }
};

// 命令对象，execute方法就是执行相关命令
const RefreshMenuBarCommand = receiver => {
  return {
    execute(){
      receiver.refresh();
    }
  }
};

// 为按钮对象指定对应的 对象 
const setCommand = (button, command) => {
  button.onclick = () => {
    command.execute();
  }
};

let refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
let button = document.querySelector("button");
setCommand(button, refreshMenuBarCommand);