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
        //  2019-06-18：统计从 1、2、3...一直到 n，这个过程中所有出现 0 的总数。
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
    "2019-07-02" () {
        
        /*  2019-06-19: 子数组最大和
            比如输入：[1, 2, 3, 4, -5, 6, -7, 8],由于：1 + 2 + 3 + 4 + (-5) + 6 + (-7) + 8 = 12是最大的和。
            故而输出：[12, [1, 2, 3, 4, -5, 6, -7, 8]]
            子数组泛指一切由该输入数组任意连续成员所组成的数组，比如[1, 2, 3, 4]是一个子数组，[3, 4, -5]也是子数组, [-7]也是子数组
            甚至输入数组本身也可以作为它的子数组 */
        const maximumSum = arr => {

            let median = 0, res;

            for( let i = 0; i < arr.length; i ++ ) {

                
            }
        }
    },
    "2019-07-03" () {

        /*实现一个LazyMan，可以按照以下方式调用:
        
        LazyMan(“Hank”)输出:
        Hi! This is Hank!

        LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
        Hi! This is Hank!
        等待10秒..
        Wake up after 10
        Eat dinner~

        LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
        Hi This is Hank!
        Eat dinner~
        Eat supper~

        LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
        等待5秒
        Wake up after 5
        Hi This is Hank!
        Eat supper

        以此类推。*/

        return "2019-07-03";
    },
    "2019-07-04" () {

        //  BFS
        return "2019-07-04";
    },
    "2019-07-05" () {

        //  DFS

        return "2019-07-05";  
    },
    "2019-07-06" () {

        //  2019-07-30：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        // [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
        // 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。

        return "2019-07-06";
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

        //  2019-07-10：字符串查找，查找某个字符串是否存在于另一个字符串中，若存在返回所在位置

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

        // 2019-07-15：
        

    }

}