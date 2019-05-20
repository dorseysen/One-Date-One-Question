//  2019-05-05： 请写一个函数，用于判断类型。比如[1]返回array，1返回number，'1'返回string。

//  the first solution

const getType_20190505_0 = obj => {

    let typeStr = Object.prototype.toString.call(obj);

    return typeStr.split(' ')[1].split(']')[0].toLowerCase();

}
console.log(getType_20190505_0([1]));
console.log(getType_20190505_0(1));
console.log(getType_20190505_0('1'));

//  the second solution
const getType_20190505 = obj => Object.prototype.toString.call(obj).match(/(?<=\s).*?(?=\])/g)[0].toLowerCase();

console.log(getType_20190505([1]));
console.log(getType_20190505(1));
console.log(getType_20190505('1'));

// 2019-05-06： 有JSON数据如下：
// [
//     {
//         TIME: '2019-03-02 23:16:08',
//         records: 'xiaoming'
//     },
//     {
//         TIME: '2019-06-05 20:16:08',
//         records: 'xiaohua'
//     },
//     {
//         TIME: '2019-03-02 23:16:10',
//         records: 'xiaohong'
//     },
// ]
// 请对该数组按时间进行排序。

let arr20190506 = [
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
    }
];
const arrSort20190506 = arr => {

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
    })
}
console.log(arrSort20190506(arr20190506));

//  2019-05-07:  当a的值在什么的情况下，可以使下列式子打印出1：
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// }
let a = {
    val: 1,
    valueOf: function () {
        return a.val ++;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}

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
console.log(longestStr_20190508_01('wawawawadorseyhahaha'));

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

console.log(getUrl_20190509());

//  2019-05-10：写一个数组去重函数

const removeRepeat_20190510 = arr => {

    return Array.from(new Set(arr));
}

console.log(removeRepeat_20190510([1, 3, 25, 3, 45]));

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

console.log(theMostLetter_20190511('daishddao123456'));

//  2019-05-12：不借助临时变量，进行两个数的交换

const swapData_20190512 = (a, b) => {

    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
}
console.log(swapData_20190512(24, 5));

//  2019-05-13：找出某个数组最大的差值，比如[1, 2, 8, 23, 4]，最大的差值为23 - 1 = 22

const maxDiff_20190513 = arr => {

    let max, min;

    arr.forEach(item => {
        max = max > item ? max : item;
        min = min < item ? min : item;
    });

    return max - min;
}
console.log(maxDiff_20190513([1, 2]));

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
console.log(getPrimeNumber_20190514(1, 20));

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
console.log(sliceArr_20190515([2, 3, 4, 5, 6, 7, 8, 9, 0, 10], 3));

//  2019-05-16：判断一个字符串是否是回文字符串

const palindromeString_20190516 = str => str.split('').reverse().join('') === str;

console.log(palindromeString_20190516('aba'));

//  2019-05-17：写一个简单的数据深拷贝，纯数据

const deepCopy_20190517 = obj => JSON.parse(JSON.stringify(obj));

console.log(deepCopy_20190517({ name: 'dorsey', age: '25' }));

//  2019-05-18：解释一下什么是短路、断路操作符

// 短路断路操作符其实就是利用 &&/||/! 等逻辑运算符的熔断机制，达到相应的判断目的。这是一个较好的替代if/else机制的方案。
// 如：

const shortout_20190518 = res => res && res.length && res.map( (item, index) => { index: item } );

//  这里就是运用短路操作符做判空处理，避免报空指针错误。

//  2019-05-19：JavaScript写一个获取某范围内随机整数的函数，可随意改变这个范围

const randomInt_20190519 = (min, max) => Math.floor(Math.random() * (max - min) + min);

//  2019-05-20：今天是520，随意说说用JavaScript表达爱意的一种方式，最好是贴出你的代码。


