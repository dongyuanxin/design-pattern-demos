class Image:
  def __init__(self, filename):
    self.filename = filename
  
  def load_img(self):
    print("finish load " + self.filename)

  def display(self):
    print("display " + self.filename)

# 借助继承来实现代理模式
class ImageProxy(Image):
  def __init__(self, filename):
    super().__init__(filename)
    self.loaded = False
  
  def load_img(self):
    if self.loaded == False:
      super().load_img()
    self.loaded = True
    
  def display(self):
    return super().display()


if __name__ == "__main__":
  proxyImg = ImageProxy("./js/image.png")

  # 只加载一次，其它均被代理拦截
  # 达到节省资源的目的
  for i in range(0,10):
    proxyImg.load_img()

  proxyImg.display()
  