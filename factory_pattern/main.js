class Football {
  constructor() {
    this.name = "football";
  }

  getPrice() {
    return `${this.name} price is 50 RMB`;
  }
}

class Basketball {
  constructor() {
    this.name = "basketball";
  }

  getPrice() {
    return `${this.name} price is 200 RMB`;
  }
}

class BallFactory {
  constructor(name) {
    switch (name) {
      case "basketball":
        return new Basketball();
      case "football":
        return new Football();
    }
    return Object.create(null);
  }
}

/********* 以下为测试代码 ********/
let basketball = new BallFactory("basketball");
console.log(basketball.getPrice());

let football = new BallFactory("football");
console.log(football.getPrice());
