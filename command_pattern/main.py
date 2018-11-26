__author__ = 'godbmw.com'

# 接受到命令，执行具体操作
class Receiver(object):
  def action(self):
    print("按钮按下，执行操作")

# 命令对象
class Command:
  def __init__(self, receiver):
    self.receiver = receiver
  
  def execute(self):
    self.receiver.action()

# 具体业务类
class Button:
  def __init__(self):
    self.command = None
  
  # 设置命令对戏那个
  def set_command(self, command):
    self.command = command
  
  # 按下按钮，交给命令对象调用相关函数
  def down(self):
    if not self.command:
      return 
    self.command.execute()

if __name__ == "__main__":

  receiver = Receiver()
  
  command = Command(receiver)
  
  button = Button()
  button.set_command(command)
  button.down()
