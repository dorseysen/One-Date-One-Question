export const solution_201907 = {

    init() {
        console.log("==================== start 2019-07 =============================");

        for (let i in this) {

            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    "2019-07-01" () {
        // 2019-07-01：实现函数柯里化，如 add(1)(2)(3)(4) = 10
        const add = num => {

            let sum = num;
        
            let _add = function (nums) {
                return add(sum + nums);
            }
        
            _add.valueOf = function () {
                return num;
            }
            _add.toString = function () {
                return num;
            }
            return _add;
        }
        return add(1)(2)(3)(4);
    },
    "2019-07-02" () {

        // 2019-07-02：求某一范围内的所有完数。完数的定义 —— 该数的所有因子之和等于该数，比如：28 = 1 + 2 + 4 + 7 + 14 = 28

        class perfectNumber {

            constructor (min, max) {

                this.min = min;
                this.max = max;
                this.res = [];
                this.arr = [];
                this.init();
            }
            init () {

                for(let i = this.min; i <= this.max; i ++) {

                    this.isPerfectNumber(i) && this.res.push(i);
                }
            }
            isPerfectNumber (num) {

                let res = 0, arr = [];

                for(let i = 1; i < num; i ++) {

                    num % i === 0 && ( arr.push(i), res += i );
                }

                return res === num ? (this.arr.push(arr), true) : false;
            }
        }
        return new perfectNumber(1, 2000);
    },
    "2019-07-03" () {

        //  2019-07-03：统计从 1、2、3...一直到 n，这个过程中所有出现 0 的总数。
        //  比如说 n 的值为 11，此时从 1、2...到 11这列数只有 10 有一个 0，故而 0 的总数为 1个。注意 100 是 2个零， 1000 是 3 个零

        const zeroNums = n => {

            let res = 0;

            while( n > 0) {

                res += Math.floor( n / 10 );
                n /= 10;
            }
            return res;
        }
        return zeroNums(101);
    },
    "2019-07-04" () {

        // 2019-07-04：数组去重，且该数组已排序，不能用Set集合，且不能新开内存，只能原引用做操作

        const removeDuplicatesArray = nums => {

            for(let i = 1; i < nums.length; i ++) {
        
                if(nums[i] === nums[i - 1]) {
                    nums.splice(i, 1);
                    i --;
                }
            }
            return nums;
        }
        return removeDuplicatesArray([1, 1, 2]);
    },
    "2019-07-05" () {

        // 2019-07-05：输入某个大于0的整数，输出从1开始的连续奇数乘积，

        // 当乘积结果刚好大于或等于输入值时，输出这条式子

        const oddMultiply = num => {

            let i = 1, multiply = 1, res = [1];

            while(multiply < num) {

                multiply *= i += 2;

                res.push(i);
            }

            res = res.join(' × ') + ' = ' + multiply;

            multiply > num ? res += ' > ' + num : res += ' = ' + num;

            return res;
        }

        return oddMultiply(1000);  
    },
    "2019-07-06" () {
        //  2019-07-06：写一个函数，用于输出未来三个月的时间范围。

        //  比如今天是2019-07-08 则输出： 

        // {
        //     beginTime: '2019-07-08 09:26:14',
        //     endTime: '2019-10-08 09:26:14'
        // }

        //  需注意隔年问题

        class futureMonths {

            constructor (num, format) {

                this.format = format;

                this.res = [];

                this.init( num );

            }
            init ( num ) {

                let date = new Date();

                this.res.push( this.dateFormat(date) );

                //  核心代码 —— 未来几个月

                let month = date.getMonth() + 1 + num % 12,
                    year = date.getFullYear() + Math.floor( num / 12 );

                month = month > 12 ? ( year ++, month % 12 ) : month;

                this.res.push( this.dateFormat(date, [year, month]) );
            }

            dateFormat ( time, partTime ) {

                return this.format.replace('yyyy', partTime ? partTime[0] : time.getFullYear())
                                .replace('MM', this.fullFormat(partTime ? partTime[1] : time.getMonth() + 1))
                                .replace('dd', this.fullFormat(time.getDate()))
                                .replace('HH', this.fullFormat(time.getHours()))
                                .replace('mm', this.fullFormat(time.getMinutes()))
                                .replace('ss', this.fullFormat(time.getSeconds()));
            }
            fullFormat ( num ) {

                return num >= 10 ? num : '0' + num;
            }
        }
        return new futureMonths(3, 'yyyy-MM-dd HH:mm:ss');
    },
    "2019-07-07" () {

        //  2019-07-07：移动 0，一个数组里面有若干个 0，将这些 0 移至数组的开头，并保持其他值的相对位置不变。

        //  the first solution —— 出现数组或映射
        
        const moveZero0 = arr => arr.filter(item => item === 0).concat(arr.filter(item => item !== 0));
        
        console.log( moveZero0([1, 0, 2, 7, 0, 8, 0, '12']) );
        
        //  the second solution —— 未做数组拷贝或映射

        const moveZero = arr => {

            for(let i = 0; i < arr.length; i ++) {

                if(arr[i] === 0) {

                    arr.unshift(...arr.splice(i, 1));
                }
            }
            return arr;
        }

        return moveZero([1, 0, 2, 7, 0, 8, 0, '12']);
    },
    "2019-07-08" () {

        //  2019-07-08：leetcode 原题第一题，数组两数之和等于目标值，返回两数的位置

        //  如输入[1, 4, 5, 8, 7] 和 8，则由于 1 + 7 = 8,输出 1 和 7的下标[0, 4]

        //  the first solution

        const twoSum0 = (arr, target) => {

            for(let i = 0; i < arr.length - 1; i ++) {

                for(let j = i + 1; j < arr.length; j ++) {

                    if( arr[i] + arr[j] === target ) {

                        return [i, j];
                    }
                }
            }
        }
        console.log(twoSum0([1, 4, 5, 8, 7], 8));

        // the second solution

        const twoSum1 = (arr, target) => {

            let map = {}, res;

            arr.map((item, index) => {

                'undefined' !== typeof map[target - item] ? res = [map[target - item], index] : map[item] = index;
            });

            return res;
        }
        console.log(twoSum1([1, 4, 5, 8, 7], 8));

        // the third solution 出现第一个时直接return出去，性能更好

        const twoSum = ( arr, target ) => {

            let map = {}, res;

            for(let i = 0; i < arr.length; i ++) {

                if( 'undefined' !== typeof map[target - arr[i]] ) {

                    return [ map[target - arr[i]], i ];
                }
                map[ arr[i] ] = i;
            }
        }

        return twoSum([1, 4, 5, 8, 7], 8);
    },
    "2019-07-09" () {

        //  2019-07-09：打印某个范围内的对称数，比如 121 1221

        //  the first solution

        const symmetry0 = (min, max) => {

            let res = [];

            for(let i = min; i <= max; i ++) {

                if(i.toString().length > 1 && i.toString().split('').reverse().join('') === i.toString()) {

                    res.push(i);
                }
            }

            return res;
        }
        console.log(symmetry0(1, 10000));

        //  the second solution
        const symmetry = (min, max) => {

            let arr = Array.from({length: max - min + 1}, (item, index) => index += min);

            return arr.filter(item => item.toString().split('').reverse().join('') === item.toString());
            
        }
        return symmetry(1, 10000);
    },
    "2019-07-10" () {

        // 2019-07-10：旋转数组——输入一个数组和旋转值，输出旋转后的数组，数组旋转方向为向右
        // 如[1, 2, 3, 4, 5, 6]和 1，输出[6, 1, 2, 3, 4, 5];

        //  the first solution，利用映射
        const rotateArray0 = (arr, size) => arr.map((item, index) => arr[ (index - size + arr.length ) % arr.length]);

        console.log(rotateArray0([1, 2, 3, 4, 5, 6], 3));

        //  the second solution 利用splice

        const rotateArray = (arr, size) => [...arr.splice(size % arr.length), ...arr];
        
        return rotateArray([1, 2, 3, 4, 5, 6], 3);

    },
    "2019-07-11" () {

        //  2019-07-11：字符串查找，查找某个字符串是否存在于另一个字符串中，若存在返回所在位置

        //  考查indexOf
        const includeString = (parent, child) => parent.indexOf(child);

        return includeString('hello, my name is dorsey', 'dorsey');
    },
    "2019-07-12" () {

        //  2019-07-12：大小写取反

        //  the first solution —— 利用 toLowerCase 和 toUpperCase

        const reverseLetter0 = str => str.split('').map(item => item !== item.toLowerCase() ? item.toLowerCase() : item.toUpperCase()).join(''); 

        console.log(reverseLetter0('Dorsey Hello'));

        //  the second solution —— 利用unicode码值
        const reverseLetter = str => {

            let res = '';

            for(let i = 0; i < str.length; i ++) {

                res += str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90 ? 
                    
                String.fromCharCode(str[i].charCodeAt() + 32) : 
                String.fromCharCode(str[i].charCodeAt() - 32);
            }
            return res;
        }
        console.log(reverseLetter0('AbC'));

        return reverseLetter('Dorsey Hello');
    },
    "2019-07-13" () {

        //  2019-07-13：生成一个长度指定的数组，成员为随机整数，并按规定的格式输出
        //  格式输出如下，比如生成的数组为 [1, 2, 4, 5, 11, 8, 21, 12], 则输出[[1, 2, 4, 5, 8], [11, 12], [21]];

        const createTargetArray = len => {

            //  100000改成100比较明显
            let arr = Array.from({length: len}, item => Math.floor(Math.random() * 100));

            arr.sort();
            console.log(arr);
            let res = [], map = {}, index = 0;

            for(let i = 0; i < arr.length; i ++) {

                let key = Math.floor(arr[i] / 10);

                'undefined' !== typeof map[key] ? res[map[key]].push(arr[i]) : (map[key] = index ++, res.push([arr[i]]));
            }
            return res;
        }
        return createTargetArray(10);
    },
    "2019-07-14" () {

        //  2019-07-14：输出两个数组的交集
        //  比如输入[1, 2, '你好']和[2, 3, '你好']则输出[2, '你好']
        //  注意需要可能出现重复的情况

        // the first solution

        const intersection = (arr0, arr1) => {

            let res = [], map = {};
            
            arr0.forEach(item => {

                'undefined' !== typeof map[item] ? map[item] ++ : map[item] = 1;
            });

            arr1.forEach(item => {

                if( 'undefined' !== typeof map[item] ) {

                    res.push(item);
                    map[item] === 1 ? delete map[item] : map[item] --;
                }
            });

            return res;
        }
        return intersection([1, 2, '你好', '你好'], [13, 2, '你好', '你好']);
    },
    "2019-07-15" () {
        // 2019-07-15：json补全，有以下数据结构，要求补全当月，没有的数据补0
        // let data = {
        //     time: ['2019-07-15', '2019-07-19'],
        //     value: ['30','28']
        // }

        class fillJson {

            constructor (data) {

                this.data = this.tranJSON(data);
                console.log(JSON.stringify(this.data));
            }
            tranJSON (data) {

                let _self = this;
                let time = new Date(data.time[0]),
                    timeStr = data.time[0].replace(/\d+$/g, '');
                let timeArr =  Array.from({length: _self.getDaysOfMonth(time)}, (item, index) => timeStr + _self.numFormat(index + 1));
                
                let valueArr = timeArr.map(item => {
                    let index = data.time.indexOf(item);
                    return index > -1 ? data.value[index] : '0';
                })
                return {
                    time: timeArr,
                    value: valueArr
                }
            }
            numFormat (num) {

                return num >= 10 ? num : '0' + num;
            }
            getDaysOfMonth (date) {

                let dateArr = [31, 28 + this.isLeapYear(date), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                
                return dateArr[date.getMonth()];
            }
            isLeapYear (date) {
                let year = date.getFullYear();
                return (year % 4 === 0 && year % 100) || (year % 400 === 0) ? 1 : 0;
            }

        }
        return new fillJson({
            time: ['2019-07-15', '2019-07-19'],
            value: ['30','28']
        });
    },
    "2019-07-16" () {
        //  2019-07-16：请写一个简单的前端节流函数
        
        let time = new Date().getTime();

        // document.querySelector('.throttle').addEventListener('click', e => {

        //     if(new Date().getTime() < time + 1000) return;

        //     time = new Date().getTime();
            
        //     console.log(e.target);
        // });
        return '2019-07-16 简单节流函数';
    },
    "2019-07-17" () {
        //  2019-07-17：写一个简单的洗牌算法
        //  简单的理解就是将一个数组或集合重新打乱顺序
        
        const shuffle = arr => {

            let i = arr.length, j;
                
            while(i) {

                j = Math.floor(Math.random() * i --);

                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
            return arr;
        }
        return shuffle([1,2,3,4,5]);
    },
    "2019-07-18" () {
        
        //  2019-07-18：判断一个数是否为质数，是返回true，否返回false。

        const isPrimeNumber = num => {

            for(let i = 2; i <= Math.floor(num / 2); i ++) {

                if(num % i === 0) return false;
            }
            return true;
        }

        return isPrimeNumber(17);
    },
    "2019-07-19" () {

        //  2019-07-19：给定字符串str，检查其是否存在连续3个升序数字。
        //  如果有，返回第一个出现的连续3个数字（或者最后一次出现的连续三个数字）
        //  如果没有，返回不存在

        const hasContinueNumber = str => {

            let arr = str.match(/\d{3,}/g),

                flag = [],
                
                res = '不存在';

            arr.length && arr.forEach(item => {

                for(let i = 0; i < item.length; i ++) {
                    
                    flag.length < 1 || (flag.length > 0 && Number(item[i]) === (flag[flag.length - 1] + 1)) ? 

                    flag.push(Number(item[i])) : flag = [Number(item[i])];

                    if(flag.length >= 3) {
                        res = str.indexOf(flag.join(''));
                        return;
                    }
                }
            });
            return res;
        }

        return hasContinueNumber('dhaio3219031snsajdap1234ssjdaopd12ad');

    },
    "2019-07-20" () {
        //  2019-07-20：输入的大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
        //  如输入[[1,2,3], [4,5,6], [7,8], [9,10,11]]，输出[3, 6, 8, 11]

        const arrChange = arr => arr.map(item => Math.max.apply(-Infinity, item));

        return arrChange([[1,2,3], [4,5,6], [7,8], [9,10,11]]);
    },
    "2019-07-21" () {

        //  2019-07-21：实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
        //  如输入[1,2,3,4,5,6,7,8,9] 和 2, 5, 8， 输出 [1,3,4,6,7,9]


        function destroyer () {

            let argu = Array.from(arguments);

            argu.splice(0, 1);

            return arguments[0].filter(item => argu.indexOf(item) === -1);
        }

        return destroyer([1,2,3,4,5,6,7,8,9,8,5,2,2,4,5,6], 2, 5, 8);

    },
    "2019-07-22" () {
        //  2019-07-22：模拟抽奖，抽奖的号码为员工号，抽过的员工不能再次出现在抽奖号码中

        class lottery {

            constructor (arr, times) {

                this.arr = arr;
                this.times = times;
                this.luckyPerson = [];
                this.init();
            }
            init () {

                while(this.times --) {

                    this.luckyPerson.push(...this.lotteryUnit());
                }
            }

            lotteryUnit () {

                let index = this.createRandomIndex(0, this.arr.length);

                return this.arr.splice(index, 1);
            }
            createRandomIndex (min, max) {

                return Math.floor(Math.random() * (max - min) + min);
            }
        }

        return new lottery([1,2,3,4,5,6,7,8,9,10], 3);
    },
    "2019-07-23" () {
        
        //  2019-07-23：获取URL参数，并以json的格式输出。
        //  如输入：http://www.baidu.com/item.html#hello?pageNo=1&pageSize=30&keyword=hello
        //  输出：{
        //      pageNo: '1',
        //      pageSize: '30',
        //      keyword: 'hello'
        //  }

        const getUrlParams = url => {

            let arr = url.match(/(?<=[\?&]).*?(?=(&|$))/g),
                res = {};

            arr && arr.length && arr.map(item => res[item.split('=')[0]] = item.split('=')[1]);

            return res;
        }
        
        console.log(getUrlParams('http://www.baidu.com'));

        return getUrlParams('http://www.baidu.com/item.html#hello?pageNo=1&pageSize=30&keyword=hello');
    },
    "2019-07-24" () {
        // 2019-07-24：实现一个lazyman函数 
        //  需具备的功能细节如下：
        /**   
            实现一个LazyMan，可以按照以下方式调用:
            LazyMan(“Hank”)输出:
            Hi! This is Hank!

            LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
            Hi! This is Hank!
            //等待10秒..
            Wake up after 10
            Eat dinner~

            LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
            Hi This is Hank!
            Eat dinner~
            Eat supper~

            LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
            //等待5秒
            Wake up after 5
            Hi This is Hank!
            Eat supper

            以此类推。
        */
       //  这里的核心其实就是实现一个简单的任务消费队列

        class _LazyMan {

            constructor (personName) {

                this.personName = personName;
                this.task = [];
                this.init();
            }
            init () {

                let _self = this;

                let fn = function () {
                    console.log('Hi! This is ' + _self.personName + '!');
                    _self.next();
                }
                _self.task.push(fn);

                setTimeout(() => _self.next(), 0);
            }
            //  队列指针往右位移一位并删除队列指针前面的已完成任务。
            next () {
                let fn = this.task.shift();
                fn && fn();
            }
            eat (meal) {
                
                let _self = this;
                let fn = function () {
                    console.log('Eat ' + meal + '~');
                    _self.next();
                }
                this.task.push(fn);
                return this;
            }
            sleep (time) {

                let _self = this;
                let fn = function () {
                    // console.log('sleep ing...');
                    setTimeout(() => {
                        console.log('sleep completed, Wake up after ' + time + ' second');
                        _self.next();
                    }, time * 1000);
                }
                this.task.push(fn);
                return this;
            }
            sleepFirst (time) {

                let _self = this;
                let fn = function () {
                    // console.log('sleepFirst ing...');
                    setTimeout(() => {
                        console.log('sleepFirst completed, Wake up after ' + time + ' second');
                        _self.next();
                    }, time * 1000);
                }
                this.task.unshift(fn);
                return this;
            }
        }

        function LazyMan (personName) {

            return new _LazyMan(personName);
        }
        // LazyMan('Hank').sleep(10);
        // LazyMan("Hank").sleep(5).eat("dinner");
        LazyMan("dorsey").eat("breakfirst").sleep(2).eat("lunch").sleep(2).eat("dinner").sleepFirst(2);
    },
    "2019-07-25" () {
        // 2019-07-25：返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。

        const cutArr = (arr, num) => arr.splice(num);

        return cutArr([1,2,3,4,5], 3);
    },
    "2019-07-26" () {
        //  2019-07-26：计算任意一个数（Number)各个位数之和

        const sumOfDigits = num => {
            let res = 0;
            while(num) {
                res += num % 10;
                num = Math.floor(num / 10);
            }
            return res;
        }
        return sumOfDigits(2123456);
    },
    "2019-07-27" () {

        //  2019-07-27：计算字符串中某个字符的次数

        const chatNum = (string, chat) => string.match(new RegExp(chat, 'gm')).length;

        return chatNum('abcdefgabcdab', 'b');
    },
    "2019-07-28" () {
        // 2019-07-28：求一个数组的最大奇数和最小偶数

        //  the first solution
        const maxOddAndminEven0 = arr => {

            let maxOdd = - Infinity, minEven = Infinity;

            arr.forEach(item => {
                item % 2 ? (maxOdd = maxOdd > item ? maxOdd : item) : (minEven = minEven < item ? minEven : item);
            });

            return [maxOdd, minEven];
        }
        console.log(maxOddAndminEven0([1,2,3,4,5,6,7,8,9,8,12]));


        //  the second solution
        const maxOddAndminEven = arr => {

            let arrOdd = arr.filter(item => item % 2),
                arrEven = arr.filter(item => item % 2 === 0);
            
            return [Math.max.apply(-Infinity, arrOdd), Math.min.apply(Infinity, arrEven)];
        }
        return maxOddAndminEven([1,2,3,4,5,6,7,8,9,8,12]);
    },
    "2019-07-29" () {

        //  2019-07-29：获取某一时间范围内的闰年，比如1000年到2020年的闰年，以数组的形式输出

        class leapYear {

            constructor (minYear, maxYear) {

                this.minYear = minYear;
                this.maxYear = maxYear;
                this.res = [];
                this.init();
            }
            init () {

                for(let i = this.minYear; i <= this.maxYear; i ++) {

                    this.isLeapYear(i) && this.res.push(i);
                }
            }
            isLeapYear(year) {
                return year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 )
            }
        }

        return new leapYear(1000, 2020);
    },
    "2019-07-30" () {

        //  2019-07-30：打印1000以内能被7整除的数

        const exactDivision = () => {

            let arr = Array.from({length: 1000}, (item, index) => index + 1);
            return arr.filter(item => !(item % 7));
        }
        return exactDivision();
    },
    "2019-07-31" () {
        // 2019-07-31：随机数法求解π

        //  具体的思路是，向一个有内切圆的正方形中扔点，如果落在圆内则计数，落在圆外则不计数

        const getPI = () => {

            //  这里抛点100000次
            //  中心点与x,与y的距离的平方和小于r的值，则点在圆内

            //  随机生成x,y坐标，这里的r假设为10
            let res = 0,
                all = 100000;
            while(all --) {
                let x = Math.random() * 20,
                    y = Math.random() * 20;
                (Math.abs( 10 - x ) ** 2 + Math.abs(10 - y) ** 2) < 10 ** 2 && res ++
            }
            return res / 100000 * 4;
        }
        return getPI();
    }
}