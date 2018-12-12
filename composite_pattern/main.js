// 文件类
class File {
  constructor(name) {
    this.name = name || "File";
  }

  add() {
    throw new Error("文件夹下面不能添加文件");
  }

  scan() {
    console.log("扫描文件: " + this.name);
  }
}

// 文件夹类
class Folder {
  constructor(name) {
    this.name = name || "Folder";
    this.files = [];
  }

  add(file) {
    this.files.push(file);
  }

  scan() {
    console.log("扫描文件夹: " + this.name);
    for (let file of this.files) {
      file.scan();
    }
  }
}

let home = new Folder("用户根目录");

let folder1 = new Folder("第一个文件夹"),
  folder2 = new Folder("第二个文件夹");

let file1 = new File("1号文件"),
  file2 = new File("2号文件"),
  file3 = new File("3号文件");

// 将文件添加到对应文件夹中
folder1.add(file1);

folder2.add(file2);
folder2.add(file3);

// 将文件夹添加到更高级的目录文件夹中
home.add(folder1);
home.add(folder2);

// 扫描目录文件夹
home.scan();
