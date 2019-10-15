import importlib    # 非python规定标识符的文件或模块导入
import re           # 正则

solution2019 = importlib.import_module('2019.2019')

def _2019():
    for ele in dir(solution2019):
        if re.match(r'_\d+$', ele) is not None:
            getattr(solution2019, ele)()

_2019()
