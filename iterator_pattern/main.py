def my_iter():
  yield 0, "first"
  yield 1, "second"
  yield 2, "third"

if __name__ == "__main__":
  # 方法1: Iterator可以用for循环
  for (index, item) in my_iter():
    print("At", index , "is", item)
  
  # 方法2: Iterator可以用next()来计算
  # 需要借助 StopIteration 来终止循环
  _iter = iter(my_iter())
  while True:
    try:
      index,item = next(_iter)
      print("At", index , "is", item)
    except StopIteration:
      break