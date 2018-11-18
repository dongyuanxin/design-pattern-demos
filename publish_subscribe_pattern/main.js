const Event = {
  clientList: {},

  // 绑定事件监听
  listen(key, fn){
    if(! this.clientList[key]){
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
    return true;
  },

  // 触发对应事件
  trigger(){
    const key = Array.prototype.shift.apply(arguments),
      fns = this.clientList[key];
    
      if(!fns || fns.length === 0){
        return false;
      }

      for(let fn of fns){
        fn.apply(null, arguments);
      }

      return true;
  },

  // 移除相关事件
  remove(key, fn){
    let fns = this.clientList[key];

    // 如果之前没有绑定事件
    // 或者没有指明要移除的事件
    // 直接返回
    if(!fns || !fn){
      return false;
    }
    
    // 反向遍历移除置指定事件函数
    for(let l = fns.length - 1; l >= 0; l--){
      let _fn = fns[l];
      if(_fn === fn){
        fns.splice(l, 1);
      }
    }

    return true;
  }
}

// 为对象动态安装 发布-订阅 功能
const installEvent = (obj) => {
  for(let key in Event){
    obj[key] = Event[key];
  }
}

let salesOffices = {};
installEvent(salesOffices);

salesOffices.listen("event01", fn1 = (price) => {
  console.log("Price is", price, "at event01");
})

salesOffices.listen("event02", fn2 = (price) => {
  console.log("Price is", price, "at event02");
})

salesOffices.trigger("event01", 1000);
salesOffices.trigger("event02", 2000);

salesOffices.remove("event01", fn1);

// 输出: false
// 说明删除成功
console.log(salesOffices.trigger("event01", 1000));