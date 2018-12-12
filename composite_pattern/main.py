class File:  # 文件类
    def __init__(self, name):
        self.name = name

    def add(self):
        raise NotImplementedError()

    def scan(self):
        print('扫描文件：' + self.name)


class Folder:  # 文件夹类
    def __init__(self, name):
        self.name = name
        self.files = []

    def add(self, file):
        self.files.append(file)

    def scan(self):
        print('扫描文件夹: ' + self.name)
        for item in self.files:
            item.scan()


if __name__ == '__main__':

    home = Folder("用户根目录")

    folder1 = Folder("第一个文件夹")
    folder2 = Folder("第二个文件夹")

    file1 = File("1号文件")
    file2 = File("2号文件")
    file3 = File("3号文件")

    # 将文件添加到对应文件夹中
    folder1.add(file1)

    folder2.add(file2)
    folder2.add(file3)

    # 将文件夹添加到更高级的目录文件夹中
    home.add(folder1)
    home.add(folder2)

    # 扫描目录文件夹
    home.scan()
