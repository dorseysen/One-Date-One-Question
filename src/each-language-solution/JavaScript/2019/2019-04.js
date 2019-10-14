export const solution_201904 = {

    init() {

        console.log("==================== start 2019-04 =============================");

        for (let i in this) {
            
            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    "2019-04-28"() {
        
        // 2019-04-28：[1, 2, 3, 50, 88, 65, 4, 89, 1111]，输出[88, 89, 1111]。 （大于80的所有数），至少两种解法。

        // the first solution
        console.log([1, 2, 3, 50, 88, 65, 4, 89, 1111].filter(item => item > 80));

        //  the second solution
        let res = [];
        [1, 2, 3, 50, 88, 65, 4, 89, 1111].forEach(item => {
            if(item > 80) {
                res.push(item);
            }
        });

        //  this third solution is similar to the first one does not use the filter.
        const handle20190429 = ( arr, condition ) => {

            let res = [];
            arr.forEach(item => {
                if(condition(item)) {
                    res.push(item);
                }
            });
            return res;
        }
        console.log(handle20190429([1, 2, 3, 50, 88, 65, 4, 89, 1111], item => item > 80));

        return res;
    },
    "2019-04-29"() {

        //  2019-04-29： 不通过sort方法，对任意数组（成员都是整数）进行排序，如[9, -2, 200, 35]，输出：[-2, 9, 35, 200];

        //  冒泡排序

        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

        const sort20190429 = arr => {

            for(let i = 0; i < arr.length - 1; i ++) {

                for(let j = arr.length; j > i; j --) {
                    
                    if(arr[j - 1] > arr[j]) {

                        swap(arr, j - 1, j);
                    }
                }
            }
            return arr;
        }
        console.log('冒泡排序');
        console.log(sort20190429([1, 2, 3, 50, -88, 65, -4, 89, 1111]));

        //  快排
        const quickSort20190429 = arr => {

            const quickUnit = (arr, left, right) => {

                let i = left,
                    j = right,
                    reference = arr[left];
                    if(i >= j) return;      //当左右指针碰撞时直接跳出执行逻辑
                    while (i < j) {

                        while (i < j && arr[j] >= reference) j --;

                        while (i < j && arr[i] <= reference) i ++;

                        if(arr[i] > arr[j]) swap(arr, i, j);

                    }
                    swap(arr, left, i);
                    quickUnit(arr, left, i - 1);
                    quickUnit(arr, i + 1, right);
            }
            quickUnit(arr, 0, arr.length - 1);
            return arr;
        }

        return quickSort20190429([1, 2, 3, 50, -88, 65, -4, 89, 1111]);
    },
    "2019-04-30"() {
        //  2019-04-30： 有数组：[1, 2, 100, 80, 33, 90] 和 [-8, 77, 90, 34, 56, 1179]，求中位数。

        //  基本思路是合并数组，排序再取中间值，该方法性能不足，但较为直观。
        const median20190430 = ( arr0, arr1 ) => {

            let arr = arr0.concat( arr1 );

            arr.sort( ( a, b ) => a - b );

            return arr.length % 2 ? arr[( arr.length - 1 ) / 2] : ( arr[( arr.length / 2 ) - 1] + arr[ arr.length / 2] ) / 2;
        }
        // console.log(median20190430([1, 2], [-8, -2]));
        return median20190430([1, 2], [-8, -2]);
    }
}