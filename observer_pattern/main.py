class Event:
  def __init__(self):
    self.client_list = {}
  
  def listen(self, key, fn):
    if key not in self.client_list:
      self.client_list[key] = []
    self.client_list[key].append(fn)
  
  def trigger(self, *args, **kwargs):
    fns = self.client_list[args[0]]

    length = len(fns)
    if not fns or length == 0:
      return False
    
    for fn in fns:
      fn(*args[1:], **kwargs)
    
    return False

  def remove(self, key, fn):
    if key not in self.client_list or not fn:
      return False
    
    fns = self.client_list[key]
    length = len(fns)

    for _fn in fns:
      if _fn == fn:
        fns.remove(_fn)
    
    return True

# 借助继承为对象安装 发布-订阅 功能
class SalesOffice(Event):
  def __init__(self):
    super().__init__()
  

def handle_event(event_name):
  def _handle_event(*args, **kwargs):
    print("Price is", *args, "at", event_name)
  
  return _handle_event


if __name__ == "__main__":
  fn1 = handle_event("event01")
  fn2 = handle_event("event02")

  sales_office = SalesOffice()

  sales_office.listen("event01", fn1)
  sales_office.listen("event02", fn2)

  sales_office.trigger("event01", 1000)
  sales_office.trigger("event02", 2000)

  sales_office.remove("event01", fn1)

  print(sales_office.trigger("event01", 1000))