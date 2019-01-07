class Handler():
    def __init__(self):
        self.next = None

    def set_next(self, handler):
        self.next = handler


class LogHandler(Handler):
    def __init__(self):
        super().__init__()
        self.__name = "log"

    def handle(self, level, msg):
        if level == self.__name:
            print('LOG: ', msg)
            return

        if self.next != None:
            self.next.handle(level, msg)


class WarnHandler(Handler):
    def __init__(self):
        super().__init__()
        self.__name = "warn"

    def handle(self, level, msg):
        if level == self.__name:
            print('WARN: ', msg)
            return

        if self.next != None:
            self.next.handle(level, msg)


class ErrorHandler(Handler):
    def __init__(self):
        super().__init__()
        self.__name = "error"

    def handle(self, level, msg):
        if level == self.__name:
            print('ERROR: ', msg)
            return

        if self.next != None:
            self.next.handle(level, msg)


# 以下是测试代码
log_handler = LogHandler()
warn_handler = WarnHandler()
error_handler = ErrorHandler()

# 设置下一个处理的节点
log_handler.set_next(warn_handler)
warn_handler.set_next(error_handler)

log_handler.handle("error", "Some error occur")
