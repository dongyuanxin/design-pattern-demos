class Stragegy():
  # 子类必须实现 interface 方法
  def interface(self):
    raise NotImplementedError()

# 策略A
class StragegyA():
  def interface(self):
    print("This is stragegy A")

# 策略B
class StragegyB():
  def interface(self):
    print("This is stragegy B")

# 环境类：根据用户传来的不同的策略进行实例化，并调用相关算法
class Context():
  def __init__(self, stragegy):
    self.__stragegy = stragegy()
  
  # 更新策略
  def update_stragegy(self, stragegy):
    self.__stragegy = stragegy()
  
  # 调用算法
  def interface(self):
    return self.__stragegy.interface()


if __name__ == "__main__":
  # 使用策略A的算法
  cxt = Context( StragegyA )
  cxt.interface()

  # 使用策略B的算法
  cxt.update_stragegy( StragegyB )
  cxt.interface()