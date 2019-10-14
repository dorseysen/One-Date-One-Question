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

        //  请写一个简单的广度优先搜索（BFS）实现过程

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

        //  请写一个简单的深度优先搜索（DFS）实现过程（与上题BFS一样实现对同一Tree的搜索）
        
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
    "2019-08-18" () {

        // 2019-08-18：操作单词
        // 给出两个单词word1和word2，计算出将word1 转换为word2的最少操作次数。

        // 你总共三种操作方法：
        // 1、插入一个字符
        // 2、删除一个字符
        // 3、替换一个字符

        class operaWords {

            constructor (fw, sw) {

                this.opera = [];

                this.count = 0;

                this.fw = fw;

                this.ew = fw;

                this.sw = sw;

                for(let i = 0; i < this.ew.length; i ++) {

                    if( this.sw[i] && this.ew[i] !== this.sw[i] ) {

                        if(this.ew[i] === this.sw[i + 1]) {

                            this.ew = this.insert(this.ew, i, this.sw[i]);
                            continue;
                        }
                        if(this.ew[i + 1] === this.sw[i]){

                            this.ew = this.remove(this.ew, i, this.sw[i]);
                            continue;
                        }

                        this.ew = this.replace(this.ew, i, this.sw[i])
                    }
                }
                let flag = this.ew.length >= this.sw.length ? true : false;

                if(flag) {

                    for(let j = this.sw.length; j < this.ew.length; j ++) {

                        this.ew = this.remove(this.ew, j, this.sw[j]);
                    }
                }else{

                    for(let j = this.ew.length; j < this.sw.length; j ++) {

                        this.ew = this.insert(this.ew, j, this.sw[j]);
                    }
                }
            }
            //  插入字符
            insert (str, pos, chat) {
                
                this.opera.push(str + ': 插入字符：' + chat + ',插入位置：' + pos);

                this.count ++;

                return str.substr(0, pos) + chat + str.substr(pos);
            }
            //  替换字符
            replace (str, pos, chat) {

                this.opera.push(str + ': 替换字符：' + chat + ',替换位置：' + pos);

                this.count ++;

                return str.substr(0, pos) + chat + str.substr(pos + 1);
            }
            //  移除字符
            remove (str, pos) {

                this.opera.push(str + ': 移除字符：' + str[pos]);

                this.count ++;

                return str.substr(0, pos) + str.substr(pos + 1);
            }
        }
        return new operaWords('abdvcghhhh', 'hijklmn');
    },
    "2019-08-19" () {
        // 2019-08-19：排列组合
        // 给定一个数组，如：[['1','2'], ['1','2','3'], ['1','3'], ['4','5']];
        // 要求输出：[ '1,1,1,4','1,1,1,5','1,1,3,4','1,1,3,5','1,2,1,4','1,2,1,5','1,2,3,4','1,2,3,5',
        // '1,3,1,4','1,3,1,5','1,3,3,4','1,3,3,5','2,1,1,4','2,1,1,5','2,1,3,4','2,1,3,5','2,2,1,4',
        // '2,2,1,5','2,2,3,4','2,2,3,5','2,3,1,4','2,3,1,5','2,3,3,4','2,3,3,5' ]
        // 即将数组中各个子数组当做一个小集合，在这些小集合中分别取出一个字符并用逗号隔开组成一个新的字符串，
        // 输出所有可能出现的字符串，字符串中字符顺序需与原集合在数组中的顺序一致

        const combination = arr => {

            return arr.reduce((acc, cur) => {

                let temp = [];
                acc.forEach(em => {

                    cur.forEach(m => {

                        temp.push(em + ',' + m);
                    })
                })

                return temp;
            }, arr.shift());
        }
        return combination([['1','2'], ['1','2','3'], ['1','3'], ['4','5']]);
    },
    "2019-08-20" () {
        // 2019-08-20：多维数组降维
        // 类似于Array.prototype.flat

        const _flat = (arr, dim) => {

            let temp = arr;

            while(dim--) {

                let arr0 = [];
                temp.forEach(item => {

                    if(Object.prototype.toString.call(item) === '[object Array]') {

                        arr0.push(...item);

                    }else{
                        arr0.push(item);
                    }
                });
                temp = arr0;
            }
            return temp;
        }
        return _flat([1,2,['1','2',[12, 34, ['12', '34']]]], 2);
    },
    "2019-08-21" () {
        // 2019-08-21：手动实现一个jsonp
        
        // https://www.sina.com.cn/api/hotword.json

        // fetch('https://www.sina.com.cn/api/hotword.json', function (resp) {

        //     console.log(resp);
        // });

        class dorseyJsonp {

            constructor (url, callback) {

                let id = this.createRandomId();

                window[id] = function (result) {

                    if(callback){
                        callback(result);
                    }

                    let scriptID = document.querySelector('#' + id);
                    scriptID.parentNode.removeChild(scriptID);
                    window[scriptID] = null;
                }
                let script = document.createElement('script');

                script.src = url;
                script.id = id;
                script.type = 'text/javascript';

                document.body.appendChild(script);
            }
            createRandomId () {

                return 'query' + Math.floor(Math.random() * 10000).toString(32) + new Date().getTime().toString(32);
            }
        }
        // new dorseyJsonp('http://172.25.20.21:9080/efacecloud/rest/v6/device/favorite/getData', function (resp) {

        //     console.log(resp);
        // });
    },
    "2019-08-22" () {

        //  2019-08-22：多种方式转换一维对象为数组，对象的key为1,2,3,4

        //  the first solution
        const objToArr0 = obj => {

            let res = [];

            for(let i in obj) {

                res.push(obj[i]);
            }
            return res;
        }
        //  the second solution
        const objToArr1 = obj => Object.values(obj);
        
        //  the third solution
        const objToArr2 = obj => {
            obj.length = Object.keys(obj).length;
            return Array.from(obj);
        }

        //  the fourth solution
        const objToArr3 = obj => {
            obj.length = Object.keys(obj).length - 1;
            return [].slice.call(obj);
        }

        const testObj = {
            0: 'go',
            1: 'dorsey',
            2: 'sen',
            3: 'hello'
        }

        console.log(objToArr0(testObj));
        console.log(objToArr1(testObj));
        console.log(objToArr2(testObj));
        return objToArr3(testObj);

    },
    "2019-08-23" () {
        // 2019-08-23：红绿灯
        
        // 绿灯亮3秒，然后红灯亮3秒，然后黄灯再亮3秒。灯亮过程可以用console表示。

        class led {

            constructor () {

                this.colorList = ['红', '绿', '蓝'];
                this.index = 0;
                this.light(this.index);
            }
            light (color) {
                console.log(color);
                this.delay();
            }
            delay () {

                let _self = this;
                this.index ++;
                this.index = this.index % 3;
                setTimeout(() => { _self.light(_self.colorList[_self.index]) }, 3000);
            }
        }
        return "2019-08-23红绿灯问题";
    },
    "2019-08-24" () {

        //  2019-08-24：将一个非数字的数组进行排序，如：

        // 输入：['红', '橙', '红', '黄', '黄', '绿', '青', '蓝', '紫', '绿', '青', '蓝', '紫', '橙', '红']

        // 输出：["红", "红", "红", "橙", "橙", "黄", "黄", "绿", "绿", "青", "青", "蓝", "蓝", "紫", "紫"]

        const sortArr = arr => {

            const map = {
                '红': 0,
                '橙': 1,
                '黄': 2,
                '绿': 3,
                '青': 4,
                '蓝': 5,
                '紫': 6
            }
            arr.sort((a, b) => map[a] - map[b]);
            return arr;
        }

        return sortArr(['红', '橙', '红', '黄', '黄', '绿', '青', '蓝', '紫', '绿', '青', '蓝', '紫', '橙', '红']);
    },
    "2019-08-25" () {
        //  2019-08-25：负载均衡问题，左侧是源源不断的负载与请求，右侧则是永不停息的消费与服务。
        //  假设某一时刻均衡总线收到的消息包如下:
        //  [{data: 'data1'}, {data: 'data2'}, ...]，此时又有若干个消费者协助处理这些请求包。比如3个消费者。如何分配？

        const balance = (message, consumers) => {

            let len = Math.floor(message.length / consumers),
                res = [];

            for(let i = 0, j = message.length % consumers; i < consumers; i ++) {

                i !== consumers - 1 ? res.push(message.splice(0, j <= 0 ? len : len + 1)) : res.push(message);
                j --;
            }
            return res;
        }
        return balance([{data: 'data1'}, {data: 'data2'}, {data: 'data3'}, {data: 'data4'}, {data: 'data5'}, {data: 'data6'}, {data: 'data7'}, {data: 'data8'}], 3);
    },
    "2019-08-26" () {
        
        // 2019-08-26：数组元素求平方。
        // 难度 ★
        // 输入一个数组，数组元素均为Number类型，输出数组所有元素均做平方变换之后的数组
        // 如输入[1,2,3,4] => [1,4,9,16];

        const squareNums = arr => arr.map(item => item ** 2);

        return squareNums([1,2,3,4,5,6,7]);
    },
    "2019-08-27" () {
        // 2019-08-27：复合数组排序
        // 难度 ★★
        // 一个数组 par 中存放有多个人员的信息，每个人员的信息由年龄 age 和姓名 name 组成，如{age: 2, name: 'xx'}。
        // 请写一段 JS 程序，对这个数组按年龄从小到大进行排序。

        // the first solution
        const objArrSort0 = arr => {

            let map = {};
            let arrSort = arr.map((item, index) => {

                'undefined' === typeof map[item.age] ? map[item.age] = [item] : map[item.age].push(item);
                return item.age;
            });

            arrSort = Array.from(new Set(arrSort));
            arrSort.sort((a, b) => a - b);

            let res = arrSort.map(item => map[item]);

            return res.flat(1);
        }
        console.log(objArrSort0([
            {age: 18,name: 'dorsey'},
            {age: 21,name: 'sen'},
            {age: 11,name: 'hello'},
            {age: 18,name: 'ming'}
        ]));

        //  the second solution
        const objArrSort = arr => arr.sort((a, b) => a.age > b.age ? 1 : -1);

        return objArrSort([
            {age: 18,name: 'dorsey'},
            {age: 21,name: 'sen'},
            {age: 11,name: 'hello'},
            {age: 18,name: 'ming'}
        ]);
    },
    "2019-08-28" () {

        // 2019-08-28：正则应用 - 字符串变换
        // 难度 ★★
        // 有字符串 str = 'abc345efgabcab'，请写出 3 条 JS 语句分别实现如下 3 个功能：
        // removeABC：去掉字符串中的a、b、c 字符，形成结果：'345efg'
        // putInBrackets：将字符串中的数字用中括号括起来，形成结果：'abc[345]efgabcab'
        // doubleNum：将字符串中的每个数字的值分别乘以 2，形成结果：'abc6810efgabcab'
        
        class strTran {
            constructor (str) {

                this.str = str;
                this.firstStr = this.removeABC();   
                this.secondStr = this.putInBrackets();
                this.thirdStr = this.doubleNum();
            }
            removeABC () {

                return this.str.replace(/[abc]/g, '');
            }
            putInBrackets() {
                return this.str.replace(/(\d+)/g, '[$1]');
            }
            doubleNum () {
                return this.str.replace(/(\d+)/g, $1 => $1.split('').map(item => Number(item) * 2).join(''));
            }
        }
        return new strTran('abc345efgabc123ab');
    },
    "2019-08-29" () {

        //  2019-08-29：正则应用 - 提取url的协议、IP以及端口，并输出成一个对象
        //  难度 ★★
        const extract = url => {

            let urlArr = url.match(/(?<=^)\w+(?=:)|(\d+\.\d+\.\d+\.\d+)|(?<=:)\d+(?=\/)/g);

            return {
                protocol: urlArr[0],
                ip: urlArr[1],
                port: urlArr[2]
            }
        }
        return extract('http://127.0.0.1:8080/index.html');
    },
    "2019-08-30" () {
        // 2019-08-30：奇偶数分离
        // 难度：★
        // 将数组中的所有数字按偶数一组，奇数一组分。如：[1,2,3,4,5,6,7] => [[1,3,5,7], [2,4,6]]
        const oddEvenSeparate = arr => {

            let res = [];

            res.push(arr.filter(item => item % 2));
            res.push(arr.filter(item => !(item % 2)));

            return res;
        }

        return oddEvenSeparate([1,2,3,4,5,6,7]);
    },
    '2019-08-31' () {
        //  2019-08-31：实现trim方法
        //  难度：★☆
        const trim = str => str.replace(/(^\s+)|(\s+$)/g, "");

        return trim('   hello, my name is dorsey!  ');
    }
}