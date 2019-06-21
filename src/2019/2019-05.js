
export const solution_201905 = {

    init() {

        console.log("==================== start 2019-05 =============================");

        for (let i in this) {
            
            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    
    "2019-05-05": function () {
        
        //  2019-05-05： 请写一个函数，用于判断类型。比如[1]返回array，1返回number，'1'返回string。
        //  the first solution

        const getType_20190505_0 = obj => {

            let typeStr = Object.prototype.toString.call(obj);

            return typeStr.split(' ')[1].split(']')[0].toLowerCase();

        }
        //  the second solution
        const getType_20190505 = obj => Object.prototype.toString.call(obj).match(/(?<=\s).*?(?=\])/g)[0].toLowerCase();
        
        return getType_20190505('1');
    },
    "2019-05-06" () {
        // 2019-05-06： 有JSON数据如下：
        let arr = [
            {
                TIME: '2019-03-02 23:16:08',
                records: 'xiaoming'
            },
            {
                TIME: '2019-06-05 20:16:08',
                records: 'xiaohua'
            },
            {
                TIME: '2019-03-02 23:16:10',
                records: 'xiaohong'
            },
        ]
        const sortJSON = arr => {
            let median = {},
            sortArr = [];
    
            arr.map(item => {
                let time = new Date(item.TIME);
                sortArr.push(time);
                median[time] = item;
            });
        
            sortArr.sort((a, b) => a - b);
        
            return sortArr.map(item => {
                return median[item];
            });
        }
        return sortJSON(arr);
    },
    //  2019-05-07:  当a的值在什么的情况下，可以使下列式子打印出1：
    // if (a == 1 && a == 2 && a == 3) {
    //     console.log(1);
    // }
    "2019-05-07"() {
        let a = {
            val: 1,
            valueOf: function () {
                return a.val ++;
            }
        }
        if (a == 1 && a == 2 && a == 3) {
            console.log(1);
            return '成功'
        }
        return '失败'
    },
    "2019-05-08"() {
        //  2019-05-08： 有字符串'dhaoshdaoidhadia'，打印出最长不重复的字符串片段。

        // the first solution
        const longestStr_20190508_00 = str => {

            let res = '', medianArr = [];

            for (let i = 0; i < str.length; i++) {

                if (medianArr.indexOf(str[i]) > -1) {
                    
                    res = res.length > medianArr.length ? res : medianArr.join('');
                    i -= (medianArr.length - 1);

                    medianArr = [];
                    
                } else {
                    medianArr.push(str[i]);
                }
            }
            return res;
        }
        console.log(longestStr_20190508_00('wawawawadorseyhahaha'));

        // the second solution
        const longestStr_20190508_01 = str => {

            let res = '', median = '';

            for (let i = 0; i < str.length; i++) {
                
                let index = median.indexOf(str[i]);

                index > -1 ? median = median.substr(- index) : median += str[i];
                
                res = res.length < median.length ? median : res;
            }
            return res;
        }
        return longestStr_20190508_01('wawawawadorseyhahaha');
    },
    "2019-05-09"() {
        //  2019-05-09：请写一个获取url参数的函数，将所有参数转化成key-value键值对
        const getUrl_20190509 = () => {

            let url = window.location.href,
                res = {},
                arrUrl = url.match(/(?<=[\?&]).*?(?=[&]|$)/g);
            
            arrUrl && arrUrl.map(item => {
                res[item.split('=')[0]] = item.split('=')[1];
            });
            return res;
        }

        return getUrl_20190509();
    },
    "2019-05-10"() {
        //  2019-05-10：写一个数组去重函数

        const removeRepeat_20190510 = arr => Array.from(new Set(arr));

        return removeRepeat_20190510([1, 3, 25, 3, 45]);
    },
    "2019-05-11"() {

        //  2019-05-11：统计一个字符串中出现最多的字母（注意是字母），并输出这个次数

        const theMostLetter_20190511 = str => {

            let map = {},
                res = 0;

            for ( let i = 0; i < str.length; i++ ) {

                /[a-zA-Z]/.test(str[i]) && ( map[str[i]] = 'undefined' !== typeof map[str[i]] ? map[str[i]] + 1 : 1 );
            }

            for ( let i in map ) {
                
                res = res > map[i] ? res : map[i];
            }
            return res;
        }

        return theMostLetter_20190511('daishddao123456');

    },
    "2019-05-12"() {
        //  2019-05-12：不借助临时变量，进行两个数的交换

        const swapData_20190512 = (a, b) => {

            a = a + b;
            b = a - b;
            a = a - b;

            return [a, b];
        }
        return swapData_20190512(24, 5);
    },
    "2019-05-13"() {
        //  2019-05-13：找出某个数组最大的差值，比如[1, 2, 8, 23, 4]，最大的差值为23 - 1 = 22

        const maxDiff_20190513 = arr => {

            let max, min;

            arr.forEach(item => {
                max = max > item ? max : item;
                min = min < item ? min : item;
            });

            return max - min;
        }
        return maxDiff_20190513([1, 2]);
    },
    "2019-05-14"() {
        //  2019-05-14：输出某个范围内的素数

        const getPrimeNumber_20190514 = (min, max) => {

            let res = [];

            for ( let i = min; i <= max; i ++ ) {
                
                for ( var k = 2; k <= Math.floor(i / 2); k ++ ) {
                    
                    if ( i % k === 0 ) break;
                }

                k === ( Math.floor(i / 2) + 1 ) && res.push( i );
            }
            return res;
        }
        return getPrimeNumber_20190514(1, 20);
    },
    "2019-05-15"() {
        //  2019-05-15：把一个数组arr按照指定的数组大小size分割成若干个数组块,比如输入是[1,2,3,5,4]和2，输出[[1,2],[3,5],[4]]
        const sliceArr_20190515 = (arr, size) => {

            // console.log(arr.slice(2, 10));
            let res = [],
                i = 0;
            while (i < arr.length) {
                res.push(arr.slice(i, i + size));
                i += size;
            }
            return res;
        }
        return sliceArr_20190515([2, 3, 4, 5, 6, 7, 8, 9, 0, 10], 3);
    },
    "2019-05-16"() {
        //  2019-05-16：判断一个字符串是否是回文字符串

        const palindromeString_20190516 = str => str.split('').reverse().join('') === str;

        return palindromeString_20190516('aba');
    },
    "2019-05-17"() {
        //  2019-05-17：写一个简单的数据深拷贝，纯数据

        const deepCopy_20190517 = obj => JSON.parse(JSON.stringify(obj));

        return deepCopy_20190517({ name: 'dorsey', age: '25' });
    },
    "2019-05-18"() {
        //  2019-05-18：解释一下什么是短路、断路操作符

        // 短路断路操作符其实就是利用 &&/||/! 等逻辑运算符的熔断机制，达到相应的判断目的。这是一个较好的替代if/else机制的方案。
        // 如：

        const shortout_20190518 = res => res && res.length && res.map( (item, index) => { index: item } );

        return shortout_20190518();
        //  这里就是运用短路操作符做判空处理，避免报空指针错误。
    },
    "2019-05-19"() {
        //  2019-05-19：JavaScript写一个获取某范围内随机整数的函数，可随意改变这个范围

        const randomInt_20190519 = (min, max) => Math.floor(Math.random() * (max - min) + min);

        return randomInt_20190519(100, 200);
    },
    "2019-05-20"() {
        //  2019-05-20：今天是520，随意说说用JavaScript表达爱意的一种方式，最好是贴出你的代码。

        console.log('你问我爱你有多深 我爱你有几分 我的情也真 我的爱也真 月亮代表我的心');

        console.log('You ask how deep I love you I love you how much my love is true my love is true the moon stands for my heart')

        const loveYou_20190520 = () => {

            let theMoon, myLove;

            const youAskMe = 'how deep I love you';
            
            const thenYouAskMe = 'how much I love you';

            myLove = true;
            myLove === true;

            theMoon = 'my heart';

            return 'forever';
        }
        return loveYou_20190520();
    },
    "2019-05-21"() {
        //  2019-05-21：手写一个生成UUID字符串的函数

        const getUUID_20190521 = () => new Date().getTime().toString(32) + Math.floor((Math.random() * 999999)).toString(32);

        return getUUID_20190521();
    },
    "2019-05-22"() {
        //  2019-05-22：求一个数组中，最大与最小数之差

        const differenceVal_20190522 = arr => Math.max.apply(Math, arr) - Math.min.apply(Math, arr);

        return differenceVal_20190522([1, 2, 56, 88, 12, 4, -1, -21, -24.1, 56.4]);
    },
    "2019-05-23"() {
        //  2019-05-23：输入：abcd123efg 输出 efg123abcd
        const changeBlockLocation_20190523 = str => str.replace(/(^[a-zA-Z]+)(\d+)([a-zA-Z]+$)/g, '$3$2$1');

        return changeBlockLocation_20190523('abcd123efg');
    },
    "2019-05-24"() {
        //  2019-05-24：输入yyyy-MM-dd，输出当前时间的年月日，格式根据输入来，假如输入换成yyyy年MM月dd日，输出得自然更改格式

        const dateFormat_20190524 = (reg) => {

            let date = new Date();

            return reg.replace('yyyy', date.getFullYear())
                .replace('MM', numFormat_20190524( date.getMonth() + 1 ))
                .replace('dd', date.getDate());
        }
        const numFormat_20190524 = num => num < 10 ? '0' + num : num;

        return dateFormat_20190524('yyyy-MM-dd');
    },
    "2019-05-25"() {
        //  2019-05-25：hello-my-name-is-dorsey-sen变为驼峰式的：helloMyNameIsDorseySen

        const toCamel_20190525 = str => {

            let reg = /-/g, res = str;

            while (reg.test(res)) {
                res = res.replace(/(-[a-zA-z])/, res[reg.lastIndex].toUpperCase());
            }
            return res;
        }
        return toCamel_20190525('hello-my-name-is-dorsey-sen');
    },
    "2019-05-26"() {
        //  2019-05-26：多个数组合并，并扁平化，同时去重

        let arr = [].concat([1, 2], [1, 11, 22, 33, [44]], [1, 111, 222, [333, [444]]]).flat(Infinity);

        return Array.from(new Set(arr));
    },
    "2019-05-27"() {
        //  2019-05-27：计算一个正整数的阶乘，比如输入：4，则输出：1*2*3*4 = 24。

        const factorial = num => {
            
            let res = 1;
            while ( num ) {
                res *= num --;
            }
            return res;
        }

        return factorial(4);
    },
    "2019-05-28"() {
        //  2019-05-28：斐波那契数列。即：1、1、2、3、5、8、13、21...求第N个数，输入正整数，如输入是8，输出是21，并打印该完整数列

        // the first solution
        //  简单版递归
        const Fibonacci_0 = index => {

            if (index <= 2) return 1;

            return Fibonacci_0(index - 1) + Fibonacci_0(index - 2);
        }
        console.log(Fibonacci_0(8));
        //  the second solution
        //  指针偏移
        const Fibonacci = index => {

            if (index <= 0 || index !== Math.floor(index)) { throw "请输入正整数"; }
            
            if (index <= 2) {

                return index === 1 ? { res: 1, sequence: [1] } : { res: 1, sequence: [1, 1] }
            }

            let res = 0, i = 1, j = 1, p = 2, sequence = [1, 1];

            while( ++ p <= index) {
                res = i + j;
                sequence.push(res);
                i = j;
                j = res;
            }
            return { res: res, sequence: sequence };
        }

        return Fibonacci(8);
    },
    "2019-05-29"() {
        //  2019-05-29：随机生成指定长度字符串。如输入8，则随意输出abc12dfe，字符范围限制在字母与数字。

        //  the first solution
        const createFixLengthString_0 = len => {

            let res = '';
            while ( len -- ) {

                res += Math.floor(Math.random() * 36).toString(36);
            } 
            return res;
        }
        console.log(createFixLengthString_0(8));
        
        // 假如此时需要在原有的基础上使输出有大写的字母，也就是差不多是一个base64码，此时需要几个JavaScript原生轮子配合使用。
        //  the second solution
        const createFixLengthString = len => {

            let res = '', random;

            while (len--) {
                random = Math.floor(Math.random() * 62);
                res += random >= 36 ? (random - 26).toString(36).toUpperCase() : random.toString(36);
            }
            return res;
        }
        return createFixLengthString(16);
    },
    "2019-05-30"() {
        //  2019-05-30：统计一个字符串中出现最多的字符，并返回该字符的次数，同时返回剔除掉该字符后的字符串。
        //  如：输入'dhaosdhaincapdnaaaaa'，输出：[8, 'dhosdhincpdn']
        
        //  the first solution
        const frequentString_0 = str => {
            
            let res = [0, ''],
                map = {};

            for (let i = 0; i < str.length; i ++) {
                
                map[str[i]] = 'undefined' === typeof map[str[i]] ? 1 : map[str[i]] + 1;              
            }

            for (let i in map) {
                
                res = res[0] > map[i] ? res : [map[i], i];
            }

            res[1] = str.replace(new RegExp(res[1], 'gm'), '');

            return res;
        }

        return frequentString_0('dhaosdhaincapdnaaaaa');

        //  the second solution

        // const frequentString = str => str.split('').filter((item, index) => {
        //     console.log(item)
        //     console.log(index)
        // })

        // return frequentString('dhaosdhaincapdnaaaaa');
    },
    "2019-05-31"() {
        //  2019-05-31：实现在10 ~ 100这个范围内随机取10个数，存入数组，并做排序
        //  需要注意可能会出现重复的情况
        class getNums {

            constructor(min, max) {
                this.map = {};
                this.res = [];
                this.index = 1;
                this.run(min, max);
            }
            init(min, max) {
                
                let random = this.createRandom(min, max);

                'undefined' === typeof this.map[random] && (this.res.push(random), this.map[random] = this.index ++);
            }
            createRandom(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            run(min, max) {

                while (this.res.length < 10) {
                    this.init(min, max);
                }
                this.res.sort((a, b) => a - b);
            }
        }

        return new getNums(10, 100).res;
    }
}
