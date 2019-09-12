export const solution_201909 = {

    init () {
		
		console.log("==================== start 2019-09 =============================");

		this.task = Object.keys(solution_201909).filter(item => item !== 'init');
		
        this.task.forEach(item => console.log(this[item]()));
    },
    "2019-09-01" () {

		//  2019-09-01：输入一个正整数，输出从1到这个数的所有整数，当整数中存在刚好能被7整除的数时，该该整数替换成 sen
		//  难度 ★☆
		//	如输入8，输出[1,2,3,4,5,6,'sen',8];

		const printInt = num => {

			let arr = Array.from({length: num}, (item, index) => index + 1);
			
			return arr.map(item => (item % 7 === 0 ? 'sen' : item ));
		}

		return printInt(8);
	},
	"2019-09-02" () {

		//	2019-09-02：给定一个数字组成的数组, 计算这些数的平均值, 中位数和Mode(出现次数最多的数字)。
		//  难度 ★★☆

		class getDataInfo {

			constructor (arr) {

				this.arr = arr;
				this.average = this.averageFn();
				this.median = this.medianFn();
				this.mode = this.modeFn();
			}
			averageFn () {

				return this.arr.reduce((acc, cur) => acc + cur) / this.arr.length;
			}
			medianFn () {
				let arr = JSON.parse(JSON.stringify(this.arr)),
					len = arr.length;

				arr.sort((a, b) => a - b);

				return len % 2 ? arr[Math.floor(len / 2)] : (arr[len / 2 - 1] + arr[len / 2]) / 2;
			}
			modeFn () {
				let map = {},
					num = 0,
					res;

				this.arr.forEach(item => {
					map[item] ? ( map[item] += 1 ) : map[item] = 1;
				});
				
				for(let i in map) {
					num < map[i] && (num = map[i], res = i)
				}
				return [Number(res), num];
			}
		}

		return new getDataInfo([1,2,23,4,5,6,7,8,8,19])
	},
	"2019-09-03" () {

		// 	2019-09-03：输入一段时间内的股票波动曲线，输出利益最大化时的买入与卖出价格
		// 	难度 ★☆
		//  以一个数组表示股票的价格，如[7, 7.6, 8.0, 7.7, 7.9, 8.2, 9.1, 7.8]

		//  the first solution
		const maxBenefit0 = arr => {

			arr.sort((a, b) => a - b);

			return [arr[0], arr[arr.length - 1]];
		}
		console.log(maxBenefit0([7, 7.6, 8.0, 7.7, 7.9, 8.2, 9.1, 7.8]));

		//  the second solution
		const maxBenefit = arr => [Math.min.call(Infinity, ...arr), Math.max.call(-Infinity, ...arr)];

		return maxBenefit([7, 7.6, 8.0, 7.7, 7.9, 8.2, 9.1, 7.8]);
	},
	"2019-09-04" () {
		// 2019-09-04：队列合并
		// 难度 ★★
		// 有两个队列，队列中的任务有其对应的开始执行时间，要求按照队列中任务的执行时间做一个升序的排序

		class queue {

			constructor (task0, task1) {

				this.task0 = task0;
				this.task1 = task1;

				this.task = [...this.task0, ...this.task1];

				this.queueMerge();
			}
			queueMerge () {
				this.task.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime() > 0 ? 1 : -1);
			}
		}

		let task0 = [{
			time: '2019-09-04 08:10:11',
			taskID: 'dapdkp1231dasd'
		},{
			time: '2019-09-05 09:10:11',
			taskID: 'dapdkp4561dasd'
		},{
			time: '2019-09-07 22:10:11',
			taskID: 'dapdkp1351dasd'
		},{
			time: '2019-09-08 18:10:11',
			taskID: 'dapdkp2461dasd'
		}],
		task1 = [{
			time: '2019-09-04 18:10:11',
			taskID: 'dapdkp7171dasd'
		},{
			time: '2019-09-06 08:11:11',
			taskID: 'dapdkp4841dasd'
		},{
			time: '2019-09-05 18:10:11',
			taskID: 'dapdkp8141dasd'
		},{
			time: '2019-09-04 22:10:11',
			taskID: 'dapdkp9021dasd'
		}]

		return new queue(task0, task1);
	},
	"2019-09-05" () {

		//	2019-09-05：使用JavaScript实现AOP - 先做简单的切入
		//	难度 ★★★☆

		const container = {

			init () {

				this.testFn('dorsey');							//	旧方法

				this.testFnWithNotice('你好啊', 'hello');		//	新方法可以自定义加入一些日志，校验等等

				this.testFn();									//  旧方法没有任何变动
				
				return '============ AOP end =========';
			},
			//	constructor - 构造器
			constructor (fn, _before, _after) {

				return function () {

					_before && _before.apply(this, arguments[0]);		//	前置通知

					fn.apply(this, arguments);							//	

					_after && _after.apply(this, arguments[0]);			//	后置通知
				}
			},
			//	testFn - 测试方法
			testFn () {

				console.log('测试函数testFn');
			},
			_before () {

				console.log('我是前置通知，你可以在这里做一些拦截器或权限控制');
			},
			_after () {

				console.log('我是后置通知，你可以在这里做一些其他的补充比如打印日志，如testFn的变量a=' + [...arguments]);
				console.log([...arguments]);
			},
			testFnWithNotice () {

				return this.constructor(this.testFn, this._before, this._after)(arguments);
			}
		}

		return container.init();
	},
	"2019-09-06" () {
		//	2019-09-06：使用JavaScript实现AOP - 真正能用于业务上而非demo
		//	难度 ★★★★☆

		// AOP工厂
		class AopFactory {

			constructor () {

				this.proxy = this.createProxy();
			}
			init () {

				function _fnConstructor () {


				}
			}
			createProxy () {

				return {

					add(reg, fn) {


					}
				}
			}

		}
		return '2019-09-06';
	},
	"2019-09-07" () {

		//	2019-09-07：给一个字符串用空格分隔
		//	难度 ☆
		const splitStr = str => str.split('').join(' ');

		return splitStr('hello');
	},
	"2019-09-08" () {

		// 2019-09-08：有一个数组是这样的：['abc', 'bc', 'adef', 'opq', 'a', 'acd']，给其做排序
		// 难度 ☆
		// 排序的规则如下：
		// 1、顺序由a - z。
		// 2、如果都以某个字母开头，则继续比对第二个字母，直到分出前后。
		// 3、假如某两个字符串的前面所有字符片段都一致，则长度越短的排序越前，如[a, ab, abc]
		const arrSort = arr => arr.sort();

		return arrSort(['abc', 'bc', 'adef', 'opq', 'a', 'acd']);
	},
	"2019-09-09" () {

		// 2019-09-09：正则应用 - 找出一串字符串中所有<>中间的字符片段，字符片段既不能为空，也不能包含<>。
		// 难度 ★★
		// 如<123><>789<456><<1024> => ['123', '456', '1024']

		const getTargetStr = str => str.match(/(?<=\<)((?!\<).)+?(?=\>)/g);

		return getTargetStr('<123><>789<456><<1024>');
	},
	"2019-09-10" () {
		//	2019-09-10：9月10日是教师节，也是马云告别阿里的日子。
		//  请写一个函数，返回距当下时间最近的节日，注意是将来。
		//	难度 ★★☆

		//	比如今天是教师节9月10日，则输出'教师节'
		//	假如是7月2号，则输出将来最近的节日，即'建军节'
		//	日历字典如下：

		
		var festival = {
            "0101" : "元旦节",
            "0214" : "情人节",
            "0305" : "学雷锋纪念日",
            "0308" : "妇女节",
            "0312" : "植树节",
            "0401" : "愚人节",
            "0501" : "劳动节",
            "0504" : "青年节",
            "0601" : "国际儿童节",
            "0701" : "中国GD诞辰",
            "0801" : "建军节",
            "0910" : "教师节",
            "1001" : "国庆节",
            "1224" : "平安夜",
            "1225" : "圣诞节"
		};
		
		class getRecentFestival {

			constructor (festival) {

				this.festival = festival;

				this.festivalMap = Object.keys(this.festival);

				this.festivalMap.sort();

				this.init();
			}
			init () {

				let date = this.format(new Date());

				let arr = this.festivalMap.filter(item => item >= date);

				this.res = arr.length > 0 ? this.festival[arr[0]] : this.festival[this.festivalMap[0]];

			}

			format (date) {
				
				return this.fill(date.getMonth() + 1) + this.fill(date.getDate());
			}
			fill (date) {

				return date >= 10 ? date : '0' + date;
			}
		}

		return new getRecentFestival(festival);
	},
	"2019-09-11" () {

		// 2019-09-11：正则应用 - 必须包含字母和数字，且位数要在8~20位之间，是返回true，不是返回false
		// 难度 ★

		const regVerify = str => /^(?![a-zA-Z]+$)(?!\d+$)[a-zA-Z\d]{8,20}$/g.test(str);

		return regVerify('11a1111111');
	},
	"2019-09-12" () {

		// 2019-09-12：随机数应用 - 生成一串唯一且不重复的UUID
		// 难度 ★
		const createUUID = () => new Date().getTime().toString(32) + Math.floor(Math.random() * 999999).toString(32);

		return createUUID();
	},
	"2019-09-13" () {
		// 2019-09-13：中秋节日题目自由发挥 - 今天是中秋节，请写一段代码表达你的情感，也许是游子的思乡，也许是团圆的快乐，请自由发挥
		// 难度 ※

	},
	"2019-09-28" () {
		//  2019-08-31：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        //  [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
		// 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
		
		return "2019-09-28";
	},
	"2019-09-29" () {

		// 2019-09-29：动态规划 —— 找零钱

		return "2019-09-29"
	},
	"2019-09-30" () {

		//  2019-09-30：金额平均分配问题
        //  相比于上方的负载均衡，这里的金额分配显得更加接地气一些，问题具体如下：
        //  某外卖商场某时刻接收到的订单有若干单，每单的金额不等，单子的金额越大，所需要做的事情越多，
        //  因而需要根据单子的金额大小尽可能平均分配给对应的下属加盟连锁店，如何分配？

        //  假设某一时刻的订单列表详情为 [{amount: 156, id: 1}, {amount: 23.5, id: 2}, {amount: 19, id: 3}...]

        // const averageAmount = (amounts, horseMan) => {

        //     amounts.reduce((acc, cur) => acc.amounts + cur.amounts);
		// }
		return "2019-09-30"
	}
}