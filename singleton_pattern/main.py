class Singleton:
  # 将实例作为静态变量
  __instance = None

  @staticmethod
  def get_instance():
    if Singleton.__instance == None:
      # 如果没有初始化实例，则调用初始化函数
      # 为Singleton生成 instance 实例
      Singleton() 
    return Singleton.__instance
  
  def __init__(self):
    if Singleton.__instance != None:
      raise Exception("请通过get_instance()获得实例")
    else:
      # 为Singleton生成 instance 实例
      Singleton.__instance = self

if __name__ == "__main__":

  s1 = Singleton.get_instance()
  s2 = Singleton.get_instance()

  # 查看内存地址是否相同
  print(id(s1) == id(s2)) 