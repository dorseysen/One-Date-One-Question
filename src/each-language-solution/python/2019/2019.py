import importlib    # 非python规定标识符的文件或模块导入
import re           # 正则

__solution201910 = importlib.import_module('2019.2019-10')

def questionFilter (ele):
    return re.match(r'_\d+$', ele) is not None

print("函数队列：" + str(list(filter(questionFilter, dir(__solution201910)))))

print("=================== start 2019-10 ==========================")
def _201910():
    for ele in dir(__solution201910):
        if re.match(r'_\d+$', ele) is not None:
            print(getattr(__solution201910, ele)())

