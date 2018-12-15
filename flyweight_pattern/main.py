from time import sleep


class ObjectPool:  # 通用对象池
    def __init__(self):
        self.__pool = []

    # 创建对象
    def create(self, Obj):
        # 对象池中没有空闲对象，则创建一个新的对象
        # 对象池中有空闲对象，直接取出，无需再次创建
        return self.__pool.pop() if len(self.__pool) > 0 else Obj(self)

    # 对象回收
    def recover(self, obj):
        return self.__pool.append(obj)

    # 对象池大小
    def size(self):
        return len(self.__pool)


class File:  # 模拟文件对象
    def __init__(self, pool):
        self.__pool = pool

    def download(self):  # 模拟下载操作
        print('+ 从', self.src, '开始下载', self.name)
        sleep(0.1)
        print('-', self.name, '下载完成')
        # 下载完毕后，将对象重新放入对象池
        self.__pool.recover(self)


if __name__ == '__main__':
    obj_pool = ObjectPool()

    file1 = obj_pool.create(File)
    file1.name = '文件1'
    file1.src = 'https://download1.com'
    file1.download()

    file2 = obj_pool.create(File)
    file2.name = '文件2'
    file2.src = 'https://download2.com'
    file2.download()

    file3 = obj_pool.create(File)
    file3.name = '文件3'
    file3.src = 'https://download3.com'
    file3.download()

    print('*' * 20)
    print('下载了3个文件, 但其实只创建了', obj_pool.size(), '个对象')
