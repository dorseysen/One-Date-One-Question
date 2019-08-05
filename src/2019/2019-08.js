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

        //  2019-08-01  球的路径
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
        // 2019-08-02 任务管理
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
        //  2019-08-03  找到某个字符串中指定的字符的所有index索引（下标）

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

        //  2019-08-04  若干天后是星期几
        //  已知今天是星期一，求100天后是星期几
        //  能拓展到今天是星期几不限，未来几天也不限更好

        const futureDay = (today, future) => {

            let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

            return week[( future % 7 + week.indexOf(today) ) % 7];
        }

        return futureDay('星期一', '13');
    },
    '2019-08-05' () {

        // 2019-08-05  合并多个有序数组并去重，合并数组从小到大排序

        const packedArray = arr => {
            
            let packedArr = arr.reduce((acc, cur) => [...acc, ...cur]);

            return Array.from(new Set(packedArr)).sort((a, b) => a - b);
        };

        return packedArray([[1, 2], [0, 3, 5], [-1, 4]]);
    },
    '2019-08-06' () {

        return '2019-08-06';
    },
    '2019-08-07' () {

        return '2019-08-07';
    },
    '2019-08-08' () {

        return '2019-08-08';
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
        console.log(2);
    }
        //  DFS
        //  BFS
}