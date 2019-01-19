# 负责状态转化
class StateTransform:
  def __init__(self):
    self.__state = 'download'
    self.__states = ['download', 'pause', 'deleted']
  
  def change(self, to_state):
    if (not to_state) or (to_state not in self.__states) : 
      raise Exception('state is unvalid')
    self.__state = to_state

  def get_state(self):
    return self.__state

# 以下是三个状态类

class DownloadState: 
  def __init__(self, transfomer):
    self.__state = 'download'
    self.__transfomer = transfomer
  
  def click(self):
    print('暂停下载')
    self.__transfomer.change('pause')

  def delete(self):
    print('先暂停, 再删除')
  
class PauseState:
  def __init__(self, transfomer):
    self.__state = 'pause'
    self.__transfomer = transfomer
  
  def click(self):
    print('继续下载')
    self.__transfomer.change('download')

  def delete(self):
    print('删除任务')
    self.__transfomer.change('deleted')

class DeletedState:
  def __init__(self, transfomer):
    self.__state = 'deleted'
    self.__transfomer = transfomer
  
  def click(self):
    print('任务已删除, 请重新开始')

  def delete(self):
    print('任务已删除')

# 业务代码
class Download:
  def __init__(self):
    self.state_transformer = StateTransform()
    self.state_map = {
      'download': DownloadState(self.state_transformer),
      'pause': PauseState(self.state_transformer),
      'deleted': DeletedState(self.state_transformer)
    }

  def handle_click(self):
    state = self.state_transformer.get_state()
    self.state_map[state].click()
  
  def handle_del(self):
    state = self.state_transformer.get_state()
    self.state_map[state].delete()

if __name__ == '__main__':
  download = Download()
  download.handle_click(); # 暂停下载
  download.handle_click(); # 继续下载
  download.handle_del(); # 下载中，无法执行删除操作
  download.handle_click(); # 暂停下载
  download.handle_del(); # 删除任务