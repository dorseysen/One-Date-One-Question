# 新增python版，后续会逐步将原JavaScript版的解法加入python

import math
import numpy
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

    def is_even(n):
        return n % 2 == 0

    def is_odd(n):
        return n % 2

    def sum(sumRange):
        # arr = [i + sumRange[0] for i in range(sumRange[1] - sumRange[0] + 1)]
        arr = list(range(sumRange[0], sumRange[1]))
        oddArr = list(filter(is_odd, arr))
        evenArr = list(filter(is_even, arr))
        return {
            'odd': '+'.join(str(i) for i in oddArr) + '=' + str(numpy.sum(oddArr)),
            'even': '+'.join(str(i) for i in evenArr) + '=' + str(numpy.sum(evenArr))
        }
    return sum([1, 41])

