# 新增python版，后续会逐步将原JavaScript版的解法加入python

import math
import numpy
import re
import random
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

    def regChange (s):
        unit = s.group(0)
        return str(len(unit)) + unit[0]

    def compressStr (string):
        return re.sub(r'(.)\1+', regChange, string)
        
    return compressStr('xxxyyyyyyz')


# 2019-10-20：简单抽奖 —— 生成n个输入范围在a ~ b内的不同随机整数。
# 难度 ★★
# 函数接收3个数字，分别为a, b, n。

def _20191020():

    # the first solution
    def randomNums_0 (a, b, n):
        res = []
        while n:
            num = math.floor(random.random() * (b - a) + a)
            if num not in res:
                res.append(num)
                n -= 1
        return res
    
    print(randomNums_0(1, 100, 5))
    
    # the second solution
    def randomNums(a, b, n):
        all = list(range(a, b))
        res = []

        while n:
            index = math.floor(random.random() * len(all))
            res.append(all[index])
            del all[index]
            n -= 1
        return res

    return randomNums(1, 100, 5)

# 2019-10-21：Fizz Buzz
# 难度 ★★
# 给定一个 数字 作为输入值, 打印出从 1 到给定数字的所有整数。 
# 但是，当整数可以被 2 整除时，打印出“Fizz”; 当它可以被3整除时，打印出“Buzz”; 
# 当它可以同时被2和3整除时，打印出“Fizz Buzz”。
# 为了方便，可以将结果先合并成一个数组一起输出

def _20191021():
    
    def mapRes (item):
        return 'Fizz' if item % 2 == 0 else 'Buzz' if item % 3 == 0 else item

    def fizzBuzz(n):
        all = list(range(1, n + 1))
        return list(map(mapRes, all))

    return fizzBuzz(20)


# 2019-10-22：完美数
# 难度 ★
# 如果一个数恰好等于除了它本身之外的约数之和，则称该数为“完美数”。
# 请写一个函数，输出某个范围内的“完美数”。
# 约数：一个数能被另一个数整除，这个数就是它的约数。比如
# 4的约数是：1,2,4
# 6的约数是：1,2,3,6
# 这里定义是排除掉它本身，也就是说：6 = 1 + 2 + 3，实际上6就是一个完美数

def _20191022():
    
    def perfectNums(min, max):
        res = []
        _str = '+'
        for i in range(min, max):
            arr = []
            sum = 0
            for j in range(1, i):
                if i % j == 0:
                    sum += j
                    arr.append(str(j))
            i == sum and res.append('+'.join(tuple(arr)) + '=' + str(i))
        return res
    
    return perfectNums(1, 10000)


# 2019-10-23：输入三个点，判断这三个点的连线是否一定能组成一个三角形，如果是，返回True，否则返回False
# 难度 ★
# 输入的形式为：[[1, 2], [2, 3], [3, 4]]

def _20191023():
    
    def iSCanBeTriangle(pointList):
        x1, y1, x2, y2, x3, y3 = pointList
        return (y2 - y1) / (x2 - x1) != (y3 - y2) / (x3 - x2)

    return iSCanBeTriangle((0, 0, 1, 1, 2, 2))


# 2019-10-24：程序员节，自由发挥
# 难度 ※

# 写一首程序员打油诗吧

def _20191024():
    
    def poem():
        return ('十年编程两茫茫 \n'
                '工期短，需求长 \n'
                '千行代码，Bug何处藏 \n'
                '纵使上线又如何，新版本，继续忙 \n'
                '黑白颠倒没商量，睡地铺，吃食堂 \n'
                '夜半梦醒，无人在身旁 \n'
                '最怕灯火阑珊时，手机响，心里慌 \n'

                '1024咫尺旁 \n'
                '纵欢欣，无慌乱 \n'
                '开发测试，恪守如日常 \n'
                '996加007，举头望，明月还 \n'
                '世上安得两全法，苦归苦，心坦荡 \n'
                '转眼余年，秃顶无人管 \n'
                '中年何处是归途？问苍天，眼茫然')
    return poem()
