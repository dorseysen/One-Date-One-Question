// import { Tree } from './tree';

export const solution_201908 = {

    init() {
        console.log("==================== start 2019-08 =============================");

        for (let i in this) {

            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    '2019-08-01' () {

        //  2019-08-01：球的路径
        //  一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下。
        //  求它在 第n次落地时，共经过多少米？第n次反弹多高？

        //  如输入2，则为共经过 100 + 50 + 50米， 第2次的反弹为25米高，输出[200, 25]

        const rebound = num => {

            let height = 100,
                distance = 0;

            if(num <= 0 || num !== Math.floor(num)) throw '请输入正整数';

            for(let i = 1; i <= num; i ++) {

                height /= 2;
                distance += 2 * height;
            }
            return [distance, height];
        }
        return rebound(3);
    },
    '2019-08-02' () {
        // 2019-08-02：任务管理
        // 一个任务队列中，有任务优先级为高中低三种任务，按高中低的优先级在数组中排序。

        // 后续插入的任务也有高中低，需要将后续插入的任务放到对应的级别末尾，并且不能混乱到该任务队列。

        // 队列的结构如下：

        let arr = [
            {
                rank: '高',
                taskID: '6b8ca06e'
            },
            {
                rank: '高',
                taskID: '7dac2d24'
            },
            {
                rank: '中',
                taskID: '668a451a'
            },
            {
                rank: '低',
                taskID: '6ad40d38'
            }
        ]
        const taskManage = (arr, newTask) => {
        
            let rank = ['高', '中', '低'];
        
            let rankIndex = rank.indexOf(newTask.rank);
            
            let newArr = arr.filter(item => {
                for(let i = 0; i <= rankIndex; i ++) {
                    if(item.rank === rank[i]) {
                        return item.rank;
                    }
                }
            });
            arr = [...newArr, newTask, ...arr.splice(newArr.length)];
            return arr;
        }
        
        return taskManage(arr, {
            rank: '高',
            taskID: '128a451a'
        });
    },
    '2019-08-03' () {
        //  2019-08-03：找到某个字符串中指定的字符的所有index索引（下标）

        const getChatIndex = (str, chat) => {

            let res = [];

            str.split('').map((item, index) => {
                if(item === chat) {
                    res.push(index);
                }
            });
            return res;
        }
        return getChatIndex('abcdefga', 'a');
    },
    '2019-08-04' () {

        //  2019-08-04：若干天后是星期几
        //  已知今天是星期一，求100天后是星期几
        //  能拓展到今天是星期几不限，未来几天也不限更好

        const futureDay = (today, future) => {

            return $state.Date.week[( future % 7 + $state.Date.week.indexOf(today) ) % 7];
        }

        return futureDay('星期一', '13');
    },
    '2019-08-05' () {

        // 2019-08-05：合并多个有序数组并去重，合并数组从小到大排序

        const packedArray = arr => {
            
            let packedArr = arr.reduce((acc, cur) => [...acc, ...cur]);

            return Array.from(new Set(packedArr)).sort((a, b) => a - b);
        };

        return packedArray([[1, 2], [0, 3, 5], [-1, 4]]);
    },
    '2019-08-06' () {
        //  2019-08-06  判断2的指数，是2的指数则返回true，不是则返回false，利用二进制的位与运算

        const judgeIndex = num => (num & (num - 1)) === 0;

        return judgeIndex(64);
    },
    '2019-08-07' () {
        //  2019-08-07: 找出整型数组中乘积最大的三个数

        const largestMultiply = arr => {

            let len = arr.length;

            arr.sort((a, b) => a - b);
           
            return (arr[0] * arr[1] * arr[2]) > (arr[len - 1] * arr[len - 2] * arr[len -3]) ? 
            
            [arr[0], arr[1], arr[2]] : [arr[len-1], arr[len-2], arr[len-3]];
        }

        return largestMultiply([22, 44, -66, 37, 19, -88]);
    },
    '2019-08-08' () {

        //  2019-08-08: 寻找无序连续数组中的缺失数，如返回1-9中缺失的那个数

        const lostNum = (arr, min, max) => ( min + max ) * (max - min + 1) / 2 - arr.reduce((acc, cur) => acc + cur);
        
        return lostNum([3,2,1,4,9,8,7,5], 1, 9);
    },
    "2019-08-09" () {
        
        // 2019-08-09: 统计 1 的次数
        // 忽略掉1这一个数的话，每一个位（bit）上出现1的数目为
        //          个  十  ...   最后把1这个数补上，即 + 1
        // 66       6 + 10 + 1
        // 76       7 + 10 + 1
        // 666      66 + 10 * (6 + 1) + 100 + 1
        // 6666     666 + 10 * (66 + 1) + 100 * (6 + 1) + 1000 + 1
        // 7777     777 + 10 * (77 + 1) + 100 * (7 + 1) + 1000 + 1
        // 22232    2223 + 10 * (222 + 1) + 100 * (22 + 1) + 1000 * (2 + 1) + 10000 + 1

        // 其实就是简单概括起来就是 (n / bit) * (n % bit + 1)

        // 此时某一位bit出现小于或等于1的数需要特殊处理
        // 如果是0:  则需把 n / bit取下限并减1。
        // 如果是1:  则在0的基础上加上该bit所在后面的余数，比如说114，百位的数字是1，这时候，百位存在的就不会加上100，而是加上它取余100的结果再+1，即14 + 1
        // 20002    2000 + 10 * (199 + 1) + 100 * (19 + 1) + 1000 * (1 + 1) + 10000 + 1
        // 20202    2020 + 10 * (201 + 1) + 100 * (20 + 1) + 1000 * (1 + 1) + 10000 + 1
        // 20212    2021 + (10 * (201 + 1) + 3) + 100 * (20 + 1) + 1000 * (1 + 1) + 10000 + 1

        // 10101    1010 + 10 * (100 + 1) + (100 * (9 + 1) + 2) + 1000 * (0 + 1) + (101 + 1) + 1
        // 10314    1031 + (10 * (102 + 1) + 4 + 1) + 100 * (10 + 1) + 1000 * (0 + 1) + (314 + 1) + 1
        const oneNums = n => {

            let multiple = 1,
                count = 10,
                res = 0;
            
            while(n >= multiple) {

                let bitVal = Math.floor(n / multiple) % 10;

                if(bitVal > 1) {
                    res += (Math.floor(n / count) + 1) * multiple;
                }
                //  bitVal小于1时特殊处理
                else{
                    if(bitVal === 0){
                        res += Math.floor(n / count) * multiple;
                    }else{
                        res += Math.floor(n / count) * multiple + n % multiple + 1;
                    }
                }
                multiple *= 10;
                count *= 10;
            }
            return res;
        }
        return (oneNums(100));
    },
    "2019-08-10" () {

        //  2019-08-10: 求两个数组的交集    如输入：[1,2,2,4] 和 [2,2,5], 输出： [2,2];
        const intersection = (arr0, arr1) => {

            let res = [];

            arr0.forEach(item => {
                
                let index = arr1.indexOf(item)
                index > -1 && (res.push(item), arr1.splice(index, 1));
            });
            return res;
        }
        return intersection([1,2,2,4], [2,2,5]);
    },
    "2019-08-11" () {
        //  2019-08-11：找出一个英文句子中最长的英文单词,只需找到其中一个

        const getLongestWord = sentence => {

            let arrWord = sentence.replace(/[,.!?:\"]/g, '').split(' '),
                map = {};

            arrWord.map(item => map[item.length] = item);

            return map[Math.max.apply(-Infinity, arrWord.map(item => item.length))];
        }
        return getLongestWord('my name is dorsey, I from china. dady say: "hello, how are you!"');
    },
    "2019-08-12" () {

        //  2019-08-12：对一个只会出现英文字母且不重复的字符串，求其缺失的字母，忽略大小写

        const getLostLetter = str => {

            let arr = Array.from({length: 26}, (item, index) => String.fromCharCode(index + 97));

            str = str.toLowerCase();

            return arr.filter(item => str.indexOf(item) === -1); 
        }

        return getLostLetter('Abcdefgijklopqrstxyz');
    },
    "2019-08-13" () {
        //  2019-08-13：求小于等于给定数值的质数之和。

        class sumPrimes {

            constructor (num) {

                this.sum = 0;
                this.num = num;
                this.primeArr = [];

                this.init();
            }
            init () {

                for(let i = 2; i <= this.num; i ++) {

                    this.isPrime(i) && ( this.primeArr.push(i), this.sum += i );
                }
            }
            isPrime (num) {

                for(let i = 2; i <= Math.floor(num / 2); i ++) {
                    if(num % i === 0) {
                        return false;
                    }
                }
                return true;
            }
        }
        return new sumPrimes(20);
    },
    "2019-08-14" () {
        //  2019-08-14：小明家必须要过一座桥。小明过桥最快要1秒，小明的弟弟最快要3秒，

        //  小明的爸爸最快要6秒，小明的妈妈最快要8秒，小明的爷爷最快要12秒。每次此桥最多可过两人，

        //  而过桥的速度依过桥最慢者而定。过桥时候是黑夜，所以必须有手电筒，小明家只有一个手电筒，而且手电筒的电池只剩30秒就将耗尽。
        
        //  小明一家该如何过桥，请写出详细过程。

        return `
        1、小明和他弟弟一起过桥，小明回来：3 + 1 \n
        2、小明和他爸爸一起过桥，小明回来：6 + 1 \n
        3、小明妈妈和他爷爷一起过桥，小明的弟弟回来：12 + 3 \n
        4、小明和他弟弟一起过桥：3 \n
        总计耗时：3 + 1 + 6 + 1 + 12 + 3 + 3 = 29秒，小明一家安全过河`;
    },
    "2019-08-15" () {

        //  2019-08-15：BFS

        //  请写一个简单的深度优先搜索（BFS）实现过程

        console.log(" ============== BFS =================== ");
        
        class BFS {

            constructor (tree, target) {
        
                this.tree = tree;
        
                this.flag = true;
        
                this.count = 0;
        
                this.init(target);
            }
        
            init (target) {
        
                this.flag && this.breathFirst(this.tree, target);
        
                // console.log("this.count = " + this.count);
            }
        
            breathFirst (nodeList, target) {
        
                let nextNodeList = [];
        
                for(let item of nodeList) {
        
                    this.count ++;
        
                    if(item.id === target) {
        
                        // console.log(item.name);

                        this.name = item.name;
        
                        this.flag = false;
        
                        return;
                    }
        
                    if( !!item.children && item.children.length) {
        
                        nextNodeList.push(...item.children);
                    }
                }
                
                this.flag && nextNodeList.length && this.breathFirst(nextNodeList, target);
            }
        }
        return new BFS(JSON.parse(JSON.stringify($state.Tree)), '1111').name;
    },
    "2019-08-16" () {

        //  2019-08-16：DFS
        console.log(" ============== DFS =================== ");

        class DFS {

            constructor (tree, target) {
        
                this.tree = tree;
        
                this.count = 0;
        
                this.flag = true;
        
                this.init(target);
            }
        
            init (target) {
        
                this.tree.forEach(item => {
        
                    // 可以尝试一下这里的目标id传入11112跟12的区别，可以很简单的看出11112的this.count更小，深度优先
                    // this.flag && this.deepFirst(item, "11112");
        
                    this.flag && this.deepFirst(item, target);
                });
        
                // console.log("this.count = " + this.count);
            }
        
            deepFirst (node, target) {
        
                this.count ++;
        
                if(node.id === target) {
        
                    // console.log(node.name);
                    this.name = node.name;
        
                    this.flag = false;
        
                    return;
                }
        
                if( !!node.children && !!node.children.length ) {
        
                    node.children.forEach(item => this.flag && this.deepFirst(item, target));
                }
            }
        }
        return new DFS(JSON.parse(JSON.stringify($state.Tree)), '1111').name;
    },
    '2019-08-17' () {

        // 2019-08-17：计算出某年某月某日是星期几

        const getDay = date => $state.Date.week[new Date(date).getDay()];

        return getDay('2019-08-17');
    },
    '2019-08-31' () {
        //  2019-08-31：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        // [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
        // 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
        return "2019-08-31";
    }
}