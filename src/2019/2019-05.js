
export const solution_201905 = {

    init() {

        console.log("==================== start 2019-05 =============================");

        for (let i in solution_201905) {
            
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

                if ( k === ( Math.floor(i / 2) + 1 ) ) res.push( i );
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
        //  2019-05-26：合并多个数组，并去重
        return "2019-05-26";
    },
    "2019-05-27"() {
        //  2019-05-27：计算一个数的阶乘，比如输入：4，则输出：1*2*3*4 = 24。
        return "2019-05-27";
    },
    "2019-05-28"() {
        //  2019-05-28：斐波那契数列。即：1、1、2、3、5、8、13、21...求第N个数，如输入是8，输出是21，并打印该完整数列
        return "2019-05-28";
    },
    "2019-05-29"() {
        //  2019-05-29：随机生成指定长度字符串。如输入8，则随意输出abc12Dfe，字符范围限制在字母与数字。
        return "2019-05-29";
    },
    "2019-05-30"() {
        //  2019-05-30：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        // [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
        // 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
        return "2019-05-30";
    },
    "2019-05-31"() {
        
        //  2019-05-31：统计一个字符串中出现最多的字符，并返回该字符的次数，同时返回剔除掉该字符后的字符串。
        //  如：输入'dhaosdhaincapdnaaaaa'，输出：[8, 'dhosdhincpdn']
        return "2019-05-31";
    }
}
