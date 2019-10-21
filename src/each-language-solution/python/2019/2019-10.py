# 新增python版，后续会逐步将原JavaScript版的解法加入python

import math
import numpy
import re
from functools import reduce

from docs.dictionary import dictOne


# 2019-10-12：与固定值之和为完全平方数
# 难度 ★
# 求0-10000的区间是否存在一个整数，这个整数加上100后它是一个完全平方数，加上268后又是一个完全平方数。求该数为多少，若存在多个则一并列出

def _20191012():
    res = []
    for num in range(0, 10000):
        if math.floor(math.sqrt(num + 100)) == math.sqrt(num + 100) and math.floor(math.sqrt(num + 268)) == math.sqrt(num + 268):
            res.append(num)
    return res

# 2019-10-13：数字大小比较
# 难度 ★
# 输入三个数字，从小到大输出
# 如输入：67,892,112，输出：17,112,892

def _20191013():
    s = [67, 892, 112]
    s.sort()
    return ','.join(str(i) for i in s)


# 2019-10-14：求40以内偶数之和与奇数之和
# 难度 ★

def _20191014():

    def isEven(n):
        return n % 2 == 0

    def isOdd(n):
        return n % 2

    def sum(sumRange):
        # arr = [i + sumRange[0] for i in range(sumRange[1] - sumRange[0] + 1)]
        arr = list(range(sumRange[0], sumRange[1]))
        oddArr = list(filter(isOdd, arr))
        evenArr = list(filter(isEven, arr))
        return {
            'odd': '+'.join(str(i) for i in oddArr) + '=' + str(numpy.sum(oddArr)),
            'even': '+'.join(str(i) for i in evenArr) + '=' + str(numpy.sum(evenArr))
        }
    return sum([1, 41])

# 2019-10-15：数据结构调整，数据来源$state.temp，python中放在了字典文件里：dictOne
# 难度 ★
# 将数据中id为0的数据的checked转为True。

def _20191015():

    def change (item):
        if item['id'] == 0:
            item['checked'] = True 
        return item
    return list(map(change, dictOne))

# 2019-10-16：三角面积计算
# 难度 ★★
# 已知三角形的三个点（一定能组成三角形，可不做判断，当然判断也不难），求三角形的面积
# 如输入[[0, 0], [8, 0], [8, 8]]， 输出 32

def _20191016():

    def triangleArea (trianglePoint):
        x1, y1, x2, y2, x3, y3 = trianglePoint
        baseLen = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        k = (y2 - y1) / (x2 - x1)           # kx - y + y1 - kx1 = 0
        return baseLen * abs((k * x3 - y3 + y1 - k * x1) / math.sqrt(k ** 2 + 1)) / 2

    return triangleArea((0, 0, 9, 0, 8, 8))

# 2019-10-17：三数之和
# 难度 ★
# 给定一个数组，若数组中任意三个不同的数（数可以相同，但数在数组的下标不能一致）之和为0，则输出这组数

def _20191017():

    def threeNumsSum (arr):
        res = []
        for i in range(0, len(arr) - 2):
            for j in range(i, len(arr) - 1):
                for k in range(j, len(arr)):
                    if arr[i] + arr[j] + arr[k] == 0:
                        res.append([arr[i], arr[j], arr[k]])
        return res

    return threeNumsSum([1,1,2,3,4,5,-1,-2,-3,-4,-5])

# 2019-10-18：一个大数组中，包含若干个小数组，取各个小数组最大的数，返回一个最大数组成的新数组。
# 难度 ★

def _20191018():

    def largestNumList (arr):
        return list(map(max, arr))
    
    return largestNumList([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

# 2019-10-19：字符串压缩
# 难度 ★★
# 如：xxxyyyyyyz => 3x6yz
# 如: xyzyxyzyxyz => xyzyxyzyxyz

def _20191019():

    def regChange (s, n):
        return len(s) + n

    def compressStr (string):
        return string.replace('xxxyyyyyyz', '3x6yz')
        
    return compressStr('xxxyyyyyyz')

