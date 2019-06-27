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

        //  the first solution —— 出现数组拷贝与拆分
        
        const moveZero0 = arr => arr.filter(item => item === 0).concat(arr.filter(item => item !== 0));
        
        console.log( moveZero0([1, 0, 2, 7, 0, 8, 0, '12']) );
        
        //  the second solution

        const moveZero = arr => {

            let j = 0;

            for(let i = 0; i < arr.length; i ++) {

                
            }
        }

        return "2019-07-07";
    }

}