import os
import codecs

import sys

import requests

import _thread      # thread与threading有冲突，python3在原有的基础上增加了一个_私有前缀，不影响使用
import threading    # threading更高级，也可以代替旧的thread，我们日常用threading就可以啦。

import time
import datetime
import calendar

import json

import pymysql

class _os(object):

    def init(self):
        # print('init')
        # self.test()
        # self.test_os()
        # self.test_sys()
        # self.test_requests()
        # self.test_threading()
        # self.test_time()
        self.test_json()
    
    def test(self):
        print('test')

    def test_os(self):
        print('os_start')
        print('当前绝对路径为：' + os.path.abspath('./'))
        path = os.path.abspath('./')

        if not os.path.exists(path + '/hello'):     # 判断路径是否存在
            os.mkdir(path + '/hello')               # 建路径
        
        # 类似JavaScript中的try catch，异常捕获
        try:
            # 建文件，这种方式是默认的建文件方式，如txt是gbk的编码格式，若需要储存成另外编码格式的，可以通过codecs模块来创建文件
            # f = open(path + '/hello/test.txt', 'w')

            f = codecs.open(path + '/hello/test.txt', 'w', 'utf-8') # 建文件
            f.write('hello world, 你好啊, \n')
            f.close()

        except Exception as error:
            print('创建并写入文件时报错：' + str(error))

        print('当前工作目录为：' + os.getcwd())

        # 文件重命名 —— rename / renames
        if os.path.exists(path + '/hello/test.txt') and not os.path.exists(path + '/hello/hello.txt'):
            os.rename(path + '/hello/test.txt', path + '/hello/hello.txt')  # 将之前的test.txt文件重命名为hello.txt文件

        print('os_end')

    def test_sys(self):

        # print(sys.argv)                 # 获取命令行的参数，就比如我们刚刚执行了python ./package.py，这里就会在结果list里面返回，[程序名,argv0,1,2,...]
        
        # print(sys.modules)              # 当前引入的模块信息
        # print(sys.platform)             # 操作平台信息
        print(sys.version)              # python版本信息
        # print(sys.copyright)            # python的版权信息

        # print(sys.getswitchinterval())  # 线程切换间隔
        # print(sys.thread_info)          # 当前线程信息

        # print(sys.stdin)                # 输入相关
        # print(sys.stdout)               # 输出相关
        # print(sys.stderr)               # 错误相关

    def test_requests(self):

        def getData():
            resp = requests.get('https://www.imooc.com/article/getarticlelist?marking=fe&page=4')
            return resp.content

        def requestData():
            resp = requests.request('GET', 'https://www.imooc.com/article/getarticlelist?marking=fe&page=4')
            return resp.content
            
        # requests.get
        # requests.post
        # requests.put
        # requests.delete
        # requests.request

        # 此外它还有，不常用的，可暂不理会
        # requests.head
        # requests.patch

        print(getData())
        print(requestData())

    def test_threading (self):

        # 开多条线程

        def run():
            print('当前执行的线程为：' + str(threading.current_thread()))
            time.sleep(2)

        thread_list = []
        i = 5
        while i > 0:
            t = threading.Thread(target=run)
            thread_list.append(t)
            i -= 1
        
        for t in thread_list:
            t.start()
    
    def test_time(self):

        print(time.time())                                              # 时间戳 
        print(time.localtime())                                         # 当地时间
        print(time.strftime("%a %b %d %H:%M:%S %Y", time.localtime()))  # 当地时间，格式化成带星期几格式
        print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))     # 当地时间，并做格式化成2019-11-27 20:00:00

        print(datetime.date.today())                # 年月日
        print(datetime.date(2019, 11, 27))          # 年月日

        print(calendar.month(2019, 11))             # 生成日历页
        print(calendar.isleap(2020))                # 判断传入的年份是否为闰年
        print(calendar.month(2019, 11, w=3, l=2))   # 修改日历行列间距，这里是3字符和2字符
        print('\ntime和datetime')

    def test_json(self):

        obj = {
            'a': 1,
            'b': 2
        }
        objStr = json.dumps(obj)    # JavaScript里的JSON.stringify —— 序列化
        print(objStr)
        print(json.loads(objStr))   # JavaScript里的JSON.parse —— 解析

dorseyOS = _os()

dorseyOS.init()