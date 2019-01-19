def log_without_args(func):
    def inner(*args, **kw):
        print("args are %s, %s" % (args, kw))
        return func(*args, **kw)
    return inner

def log_with_args(text):
    def decorator(func):
        def wrapper(*args, **kw):
            print("decorator's arg is %s" % text)
            print("args are %s, %s" % (args, kw))
            return func(*args, **kw)
        return wrapper
    return decorator

@log_without_args
def now1():
    print('call function now without args')

@log_with_args('execute')
def now2():
    print('call function now2 with args')

if __name__ == '__main__':
    now1()
    now2()

    # now_without_args = log_without_args(now1)
    # now_without_args()
    