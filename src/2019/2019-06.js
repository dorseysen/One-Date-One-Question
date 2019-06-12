export const solution_201906 = {

    init() {
        console.log("==================== start 2019-06 =============================");

        for (let i in solution_201906) {

            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    "2019-06-01" () {
        //  2019-06-01
        //  今天是六一儿童节，老师带领班上的小朋友表演节目，但小朋友们需要鼓励，所以老师准备了很多块巧克力来作为奖品，巧克力有大有小，小朋友
        //  愿意上台表演的最小鼓励也是有高有低，而且巧克力既不可以多块给同一人，也不能掰开分给多个小朋友。已知巧克力数和小朋友数目一致，请问如何让尽可能多的小朋友上台表演的前提下，分出去尽可能多（总重量最大）的巧克力？
        //  比如说，有重量为[1, 1.2, 1.2, 1.3, 1, 1.5, 2.5, 1.4, 1.6, 2]的巧克力和要求为[1.3, 1.1, 1.2, 1, 2, 1.4, 1.6, 1.7, 1.3, 1.5]的小朋友

        const childrenDay = (arrChocolate, arrChildren) => {

            let children = Object.assign(arrChildren).sort((a, b) => b - a),
                chocolate = Object.assign(arrChocolate).sort((a, b) => b - a),
                res = {
                    'children': [],
                    'chocolate': []
                }

            //  过滤掉要求比最重的那块巧克力还高
            children = children.filter(item => item <= chocolate[0]);
            chocolate = chocolate.filter(item => item >= children[children.length - 1]);

            let p = 0;

            for (let i = 0; i < children.length; i++) {

                for (let j = p; j < chocolate.length; j++) {

                    if (chocolate[j] >= children[i]) {
                        res.children.push(children[i]);
                        res.chocolate.push(chocolate[j]);
                        p = j + 1;
                        break;
                    }

                }

            }
            return res;
        }
        return childrenDay([1, 1.2, 1.2, 1.3, 1, 1.5, 2.5, 1.4, 1.6, 2], [1.3, 1.1, 1.2, 1.4, 2, 1.4, 1.6, 1.7, 1.3, 1.5]);
    },
    "2019-06-02" () {

        //  2019-06-02：约瑟夫环问题
        //  编号为1到100的一百个人围成一圈，以123123的方式进行报数，数到3的人自动退出圈子，剩下的人继续报数，问最后剩下的人编号为几？
        //  如果1000个人，10000个人呢？

        const JosephRing = (totalNumbers, key) => {

            //  生成编号
            let nums = Array.from({ length: totalNumbers }, (item, index) => index + 1),

                //  初始指针
                k = key;

            while (nums.length > 1) {

                k > nums.length ? k %= nums.length : null;

                k === 0 ? key < nums.length ? k = 1 : k = nums.length : null;

                nums = [...nums.slice(0, k - 1), ...(nums.slice(k, nums.length))];

                console.log(nums);

                k += key - 1;
            }
            return nums;
        }
        return JosephRing(10, 4);
    },
    "2019-06-03" () {
        //  2019-06-03：打印接下来的N个闰年，若今年即为闰年则从今年开始打印
        class leapYear {

            constructor(n) {
                this.init();
                this.run(n);
            }
            init() {
                this.nowYear = new Date().getFullYear();
                this.year = this.nowYear;
                this.leapYear = this.isLeapYear(this.nowYear) ? [this.nowYear] : [];
            }
            isLeapYear(year) {
                return year % 4 === 0 ? year % 100 !== 0 ? true : year % 400 === 0 ? true : false : false;
            }
            run(n) {
                while (this.leapYear.length < n) {
                    this.year++;
                    this.isLeapYear(this.year) && this.leapYear.push(this.year);
                }
            }
        }
        return new leapYear(20);
    },
    "2019-06-04" () {
        //  2019-06-04： 找到一个英文句子中最长的单词，并输出这个单词和单词长度，当有多个最长单词时允许只输出其中一个。
        //  如输入：I am a boy with a dream, who want to make some achievements in software industry, little but clinging.
        //  输出：['achievements', 12]

        //  the first solution
        const theLongestWord_0 = string => {
            return Math.max.apply(-Infinity, string.replace(/[\,\.\:\'\"]/g, '').split(' ').map(item => item.length));
        }
        console.log(theLongestWord_0('I am a boy with a dream, who want to make some achievements in software industry, little but clinging.'));

        //  the second solution
        //  export one of results. of course all results can be export by remove the "[0]"
        const theLongestWord = string => {

            let arr = string.replace(/[\,\.\:\'\"]/g, '').split(' ').map(item => [item, item.length]),
                times = Math.max.apply(-Infinity, arr.map(item => item[1]));

            return arr.filter(item => item[1] === times)[0];
        }

        return theLongestWord('I am a boy with a dream, who want to make some achievements in software industry, little but clinging.');
    },
    "2019-06-05" () {
        //  2019-06-05：写一个函数，用于计算在当下时间前几个月是什么时候。
        const dateFormat = num => num < 10 ? '0' + num : num;

        const preMonth = num => {

            let date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                flag = 0;

            month = month > num % 12 ? month - num % 12 : (flag = 1, month + 12 - num % 12);
            year = year - Math.floor(num / 12) - flag;

            return year + '-' + dateFormat(month) + '-' + dateFormat(date.getDate());
        }
        return preMonth(39);
    },
    "2019-06-06" () {
        //  2019-06-06：求某一范围内的水仙花数，水仙花数的定义是：某数数位的立方和等于它本身，如：1³ + 5³ + 3³ = 153，153就是水仙花数

        class narcissisticNum{

            constructor ( min, max ) {

                this.min = min;
                this.max = max;
                this.narcissisticNum = [];
                this.init();

            }
            init () {
                for(let i = this.min; i <= this.max; i ++) {
                    this.isNarcissisticNum(i) && this.narcissisticNum.push(i);
                }
            }
            isNarcissisticNum ( num ) {

                let numBit = this.intoBits( num ),
                    sum = 0;

                numBit.forEach(item => {
                    sum += item ** 3;
                    return item;
                });

                return sum === num;
            }
            intoBits ( num ) {

                let res = [];
                while( num / 10 > 0 ) {

                    res.unshift(num % 10);

                    num = Math.floor( num / 10 );
                }
                return res;
            }

        }
        return new narcissisticNum(100, 500);
    },
    "2019-06-07" () {
        //  2019-06-07：恺撒密码
        // 其实就是一种简单的偏移加密技术，比如说偏移量为 1，此时字符串中的 a 变 b，b 变 c... z 变 a
        // 大写字母就是：A 变 B，B 变 C
        // 这里仅仅是做大小写字母与数字的加密，注意的是 9 变 0。
        // 大写仍变大写，小写仍变小写，数字仍变数字
        
        const kaiSaPassword = (str, offset) => {

            offset = 'string' === typeof offset ? Number(offset) : offset;

            if( offset < 0 || Math.floor( offset ) !== offset ) throw '偏移量必须是正整数';

            if( str.match(/[a-zA-Z\d]/g).length !== str.length ) throw '输入的字符串只能是大小写字母或数字';

            let res = '';

            for( let i = 0; i < str.length; i ++ ) {

                let index = str[i].charCodeAt();

                if(index >= 65 && index <= 90) {

                    index = ( index + offset ) > 90 ? ( index + offset - 65) % 26 + 10 : index + offset - 55;
                    res += index.toString(36).toUpperCase();

                }else {

                    if(index >= 97 && index <= 122) {

                        index = ( index + offset ) > 122 ? ( index + offset - 97) % 26 + 10 : index + offset - 87;
                    }
                    else if ( index >= 48 && index <= 57 ) {

                        index = ( index + offset ) > 57 ? ( index + offset - 48) % 10 : index + offset - 48;
                    }
                    res += index.toString(36);
                }
            }
            return res;
        }
        return kaiSaPassword('dorsey', 1);

    },
    "2019-06-08" () {

        //  2019-06-08：删除数组中所有假值，如：null、undefined、''、false、0、NaN

        const deleteNeg = arr => arr.filter(item => Boolean(item));

        return deleteNeg([1, 0, false, undefined, null, NaN, '', 'undefined']);
    },
    "2019-06-09" () {

        //  2019-06-09：写一个深拷贝，不可以是纯数据的，这时候的拷贝体可能有function

        const deepCopy = obj => Object.assign(obj);

        return deepCopy({
            name: 'dorsey',
            callback: function () {
                console.log(this.name);
            }
        });
    },
    "2019-06-10" () {
        //  2019-06-10：踩地雷
        // 一队兵，排成一排，通过某个雷区，雷区间隔一定距离埋入地雷，假如间隔刚好5个人，问此时能安全通过雷区的还剩下谁。
        // 比如：1-30号的士兵，此时从1号开始间隔5个人站位有地雷，此时：1-5号都是安全的，但6号会被炸，7-11号也是安全的，12号被炸

        const mine = ( num, offset ) => {

            let arr = Array.from({ length: num }, (item, index) => index + 1);

            return arr.filter((item, index) => ( index + 1 ) % offset !== 0);
        }
        return mine(30, 6);
    },
    "2019-06-11" () {

        // 2019-06-11：输入两个数组，返回两个数组中独有的值。如：[1, 2, 3] 和 [2, 3, 4, 5]。
        // 返回 [1] 及 [4, 5]，因为其中2和3不是独有的，去除掉

        // the first solution
        const uniqueArray = ( arr0, arr1 ) => {

            let median = arr0, res = {};

            arr1.forEach(ele => {
                median = median.filter(item => item !== ele);
            });
            res.first = median;
            median = arr1;
            arr0.forEach(ele => {
                median = median.filter(item => item !== ele);
            });
            res.second = median;
            return res;
        }

        //  the second solution
        const uniqueArray_0 = ( arr0, arr1 ) => {

            let filt = new Set();

            for( let i = 0; i < arr0.length; i ++ ) {

                for( let j = 0; j < arr1.length; j ++ ) {

                    if( arr0[i] === arr1[j] ) {
                        filt.add(arr0[i]);
                        break;
                    }
                }
            }
            Array.from(filt).forEach(ele => {
                arr0 = arr0.filter(item => item !== ele);
                arr1 = arr1.filter(item => item !== ele);
            });
            
            return {
                first: arr0,
                second: arr1
            };
        }

        console.log(uniqueArray_0([1, 2, 3, 3], [2, 3, 3, 4, 5]));

        return uniqueArray([1, 2, 3, 3], [2, 3, 3, 4, 5]);
    },
    "2019-06-12" () {
        //  2019-06-12：截断一个字符串！
        // 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
        // 值得注意的是，插入到字符串尾部的三个点号也会计入字符串的长度。
        // 如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
        

        return "2019-06-12";
    },
    "2019-06-13" () {
        //  2019-07-30：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        // [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
        // 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
        return "2019-06-13";
    },
    "2019-06-14" () {

        //  2019-06-14：杨辉三角

        return "2019-06-14";
    },
    "2019-06-15" () {
        /*  2019-06-12: 子数组最大和
            比如输入：[1, 2, 3, 4, -5, 6, -7, 8],由于：1 + 2 + 3 + 4 + (-5) + 6 + (-7) + 8 = 12是最大的和。
            故而输出：[12, [1, 2, 3, 4, -5, 6, -7, 8]]
            子数组泛指一切由该输入数组任意连续成员所组成的数组，比如[1, 2, 3, 4]是一个子数组，[3, 4, -5]也是子数组, [-7]也是子数组
            甚至输入数组本身也可以作为它的子数组 */
        const maximumSum = arr => {

            let median = 0, res;

            for( let i = 0; i < arr.length; i ++ ) {

                
            }
        }
        return "2019-06-15";
    }
}