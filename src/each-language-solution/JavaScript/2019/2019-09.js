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
		// 2019-09-13：中秋节日题目自由发挥 - 今天是中秋节。
		// 请写一段代码表达你的情感，也许是游子的思乡，也许是团圆的快乐，请自由发挥
		// 难度 ※
		const minMoon = () => {

			return `
				明月几时有
				把酒问青天
				不知天上宫阙
				今夕是何年
				
				我欲乘风归去
				又恐琼楼玉宇
				高处不胜寒
				起舞弄清影
				何似在人间

				转朱阁、低绮户、照无眠
				不应有恨
				何事长向别时圆
				人有悲欢离合
				月有阴晴圆缺
				此事古难全
				但愿人长久
				千里共婵娟`
		}

		return minMoon();
	},
	"2019-09-14" () {

		// 2019-09-14：字符串最短距离 - 初阶
		// 难度 ★
		// 给定一个只包含小写字母a-z的字符串以及一个字符（字符只会出现a-z），输出字符串中各个字符与指定字符串之间的距离。
		// 距离的定义是 a与b相差1位，则为1，而a与e中间还有c,d，再加上e本身，则相差了3，所以为3
		// 如输出'abcdefg' 和 'f' 则输出[5,4,3,2,1,0,1];

		const shortestDistance = (str, char) => str.split("").map(item => Math.abs(item.charCodeAt() - char.charCodeAt()));

		return shortestDistance('abcdefg', 'f');
	},
	"2019-09-15" () {

		// 2019-09-15：字符串最短距离 - 中阶
		// 难度 ★★★

		// 给定字符串与一个字符串中存在的字符(这个字符已知是一定存在于字符串中的)，
		// 输出字符串中每一个字符与该字符的距离
		// 如输入'dasoidj12' 和 'i'，则输出[4,3,2,1,0,1,2,3,4];
		// 值得注意的是字符串可能有多个，比如输入：'dasoidj12' 和 'd'，
		// 则输出[0,1,2,2,1,0,1,2,3]

		class minDistance {

			constructor(str, char) {

				this.str = str;
				this.char = char;
				this.res = [];

				this.init();
			}
			init () {

				let arr = this.getIndex();

				if(arr.length > 1) {

					for(let i = 0, j = 0, k = 1; i < this.str.length; i ++) {

						if( Math.abs(i - arr[j]) > Math.abs(i - arr[k]) ) {

							k + 1 <= arr.length && (j = k, k += 1);
						}

						this.res.push(Math.abs(i - arr[j]));
					}

				}else{
					this.res = this.str.split('').map((item, index) => Math.abs(index - arr[0]));
				}
			}
			getIndex () {

				let arr = [],
					_self = this;

				_self.str.split('').map((item, index) => {
					if(item === _self.char) {
						arr.push(index);
					}
				});
				return arr;
			}

		}
		return new minDistance('dasoidj12ddasbdkaioldhaoi', 'd');
	},
	"2019-09-16" () {
		// 2019-09-16：日期函数应用 - 当下时间日期格式化
		// 难度 ★☆
		// 返回某一时间的对应格式。
		// 例子1、输入 yyyy-MM-dd HH:mm:ss，输出：2019-09-16 10:00:00
		// 例子2、输入 yyyy年MM月dd日 HH时mm分ss秒，输出：2019年09月16日 10时00分00秒

		const fill = num => num >= 10 ? num : ('0' + num);

		const format = (date, formatStr) => {

			return formatStr.replace('yyyy', date.getFullYear())
			.replace('MM', fill(date.getMonth() + 1))
			.replace('dd', fill(date.getDate()))
			.replace('HH', fill(date.getHours()))
			.replace('mm', fill(date.getMinutes()))
			.replace('ss', fill(date.getSeconds()));
		}

		console.log(format(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒'));

		return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
	},
	"2019-09-17" () {
		// 2019-09-17：日期函数应用 - 输入n，输出n个月后的时间
		// 难度 ★☆
		// 如，返回3个月后的时间。如输入 3, 输出：2019-12-17 10:00:00

		//	the first solution
		const fill = num => num >= 10 ? num : ('0' + num);

		const fewMonthsLater_0 = n => {

			let date = new Date(),
				month = date.getMonth() + 1, 
				year = date.getFullYear();

			let flag = n % 12 + month > 12 ? true : false;

			flag ? (month = month + n % 12 - 12, year = year + 1 + Math.floor(n / 12)) : 
				   (month = month + n % 12, year = year + Math.floor(n / 12));
			
			return year + '-' + fill(month) + '-' + fill(date.getDate()) + ' ' + fill(date.getHours()) + ':' + fill(date.getMinutes()) + ':' + fill(date.getSeconds());
		}
		console.log(fewMonthsLater_0(25));
		//	the second solution
		const format = (date, formatStr) => {

			return formatStr.replace('yyyy', date.getFullYear())
			.replace('MM', fill(date.getMonth() + 1))
			.replace('dd', fill(date.getDate()))
			.replace('HH', fill(date.getHours()))
			.replace('mm', fill(date.getMinutes()))
			.replace('ss', fill(date.getSeconds()));
		}

		const fewMonthsLater = n => {

			var date = new Date();

			return format(new Date(date.getFullYear(), date.getMonth() + n, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()), 'yyyy-MM-dd HH:mm:ss');
		}

		return fewMonthsLater(25);
	},
	"2019-09-18" () {
		// 2019-09-18：日期函数应用 - 日期综合应用
		// 难度 ★★★☆
		// 请写一个函数 getDateTime，且可输入的参数有 today、yesterday、tomorrow、thisWeek、nearWeek、thisMonth、nearMonth、nearThreeMonth、thisYear
		// 如：getDataTime('today', 'yyyy-MM-dd HH:mm:ss')，输出{beginTime: '2019-09-17 00:00:00', endTime: '2019-09-17 23:59:59'}
		// getDataTime('thisYear', 'yyyy-MM-dd HH:mm:ss')，输出{beginTime: '2019-01-01 00:00:00', endTime: '2019-09-17 23:59:59'}
		// getDataTime('tomorrow', 'yyyy-MM-dd HH:mm:ss')，输出{beginTime: '2019-09-18 00:00:00', endTime: '2019-09-18 23:59:59'}
		// 且函数代码耦合度低，容易维护与拓展

		const GetDataTime = {

			init () {

				let _self = this;

				_self.now = new Date();
				
				return function (key, format) {

					format = format || 'yyyy-MM-dd HH:mm:ss';

					let {beginTime, endTime} = _self[key](format);

					return {
						beginTime,
						endTime,
						key
					}
				};
			},
			//	今天
			today (format) {

				let date = new Date();

				return {
					beginTime: this.format(new Date(this.format(date, 'yyyy-MM-dd') + ' 00:00:00'), format),
					endTime: this.format(new Date(this.format(date, 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	昨天
			yesterday(format) {
				let date = new Date(),
				yesterday = new Date(date.setDate(date.getDate() - 1));

				return {
					beginTime: this.format(new Date(this.format(yesterday, 'yyyy-MM-dd') + ' 00:00:00'), format),
					endTime: this.format(new Date(this.format(yesterday, 'yyyy-MM-dd') + ' 23:59:59'), format)
				}
			},
			//	明天
			tomorrow (format) {

				let date = new Date(),
					tomorrow = new Date(date.setDate(date.getDate() + 1));

				return {
					beginTime: this.format(new Date(this.format(tomorrow, 'yyyy-MM-dd') + ' 00:00:00'), format),
					endTime: this.format(new Date(this.format(tomorrow, 'yyyy-MM-dd') + ' 23:59:59'), format)
				}
			},
			//	本周
			thisWeek (format) {
				let date = new Date(),
					thisweek = new Date(date.setDate(date.getDate() - (date.getDay() - 1)));

				return {
					beginTime: this.format(new Date(this.format(thisweek, 'yyyy-MM-dd') + ' 00:00:00'), format),
					endTime: this.format(new Date(this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	本月
			thisMonth (format) {
				let date = new Date(),
					thisMonth = new Date(date.setDate(1));

				return {
					beginTime: this.format(new Date(this.format(thisMonth, 'yyyy-MM-dd') + ' 00:00:00'), format),
					endTime: this.format(new Date(this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	本年
			thisYear (format) {

				let date = new Date();
				return {
					beginTime: this.format(new Date(this.format(date, 'yyyy') + '-01-01 00:00:00'), format),
					endTime: this.format(new Date(this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	近七天
			nearWeek (format) {
				
				let date = new Date(),
					nearWeek = new Date(date.setDate(date.getDate() - 7));
				return {
					beginTime: this.format(new Date(this.format(nearWeek, 'yyyy-MM-dd HH:mm:ss')), format),
					endTime: this.format(new Date(this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	近一个月
			nearMonth (format) {
				
				let date = new Date(),
					nearMonth = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
				return {
					beginTime: this.format(new Date(this.format(nearMonth, 'yyyy-MM-dd HH:mm:ss')), format),
					endTime: this.format(new Date(this.format(date, 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	近三个月
			nearThreeMonth (format) {
				
				let date = new Date(),
					nearMonth = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
				return {
					beginTime: this.format(new Date(this.format(nearMonth, 'yyyy-MM-dd HH:mm:ss')), format),
					endTime: this.format(new Date(this.format(date, 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	近一年
			nearThreeMonth (format) {
				
				let date = new Date(),
					nearMonth = new Date(date.getFullYear(), date.getMonth() - 12, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
				return {
					beginTime: this.format(new Date(this.format(nearMonth, 'yyyy-MM-dd HH:mm:ss')), format),
					endTime: this.format(new Date(this.format(date, 'yyyy-MM-dd HH:mm:ss')), format)
				}
			},
			//	日期格式化
			format (date, formatStr) {

				return formatStr.replace('yyyy', date.getFullYear())
				.replace('MM', this.fill(date.getMonth() + 1))
				.replace('dd', this.fill(date.getDate()))
				.replace('HH', this.fill(date.getHours()))
				.replace('mm', this.fill(date.getMinutes()))
				.replace('ss', this.fill(date.getSeconds()));
			},
			fill (num){
				return num >= 10 ? num : ('0' + num);
			}
		}

		const getDataTime = GetDataTime.init();
		
		console.log(getDataTime('today'));
		console.log(getDataTime('yesterday'));
		console.log(getDataTime('tomorrow'));
		console.log(getDataTime('thisWeek'));
		console.log(getDataTime('thisMonth', 'yyyy年MM月dd日 HH时mm分ss秒'));
		console.log(getDataTime('thisYear', 'yyyy年MM月dd日 HH时mm分ss秒'));
		console.log(getDataTime('nearWeek'));
		console.log(getDataTime('nearMonth'));
		console.log(getDataTime('nearThreeMonth'));
		return getDataTime('today', 'yyyy年MM月dd日 HH时mm分ss秒');
	},
	"2019-09-19" () {
		// 2019-09-19：二维数组的全排列组合 - （阿里）
		// 难度 ★★☆
		// 如输入：[[1,2],[3,4],[5,6]]。
		// 输出：[ [ 1, 3, 5 ], [ 1, 3, 6 ], [ 1, 4, 5 ], [ 1, 4, 6 ], [ 2, 3, 5 ], [ 2, 3, 6 ], [ 2, 4, 5 ], [ 2, 4, 6 ] ]

		const fullPermutation = arr => {

			return arr.reduce((acc, cur) => {

				let res = [];

				acc.forEach(ele => {

					cur.forEach(item => {

						res.push([ele, item]);
					});
				});

				return res.map(item => item.flat(1));;

			}, arr.shift());
		}

		console.log(fullPermutation([[1,2],[3,4],[5,6]]));

		return fullPermutation([ [1, 2], [3], [5, 6], [7, 8, 9] ]);
	},
	"2019-09-20" () {

		// 2019-09-20：数组次多成员
		// 难度 ★★☆
		// 求一个数组出现次数第二多的成员，允许只打印其中一个成员。
		// 若该数组所有成员都仅仅只出现一次，则打印该数组没有第二多成员。
		// 如输入：[1,2,3,4,5,3,3,100,100]。 输出：100

		const secondTime = arr => {

			if(new Set(arr).size === arr.length) return '该数组没有第二多成员';

			let map = {};

			arr.forEach(item => map[item] = !!map[item] ? map[item] + 1 : 1);

			let mapArr = Array.from(new Set(Array.from(new Set(arr)).map(item => map[item])));

			mapArr.sort((a, b) => b - a);

			return Object.keys(map)[Object.values(map).indexOf(mapArr[1])];
		}

		console.log(secondTime([1,2,3,4,5,6,7,8,9,0]));

		return secondTime([1,2,3,4,5,3,3,100,100]);
	},
	"2019-09-21" () {
		// 2019-09-21：位数乘积，多次拆分相乘
		// 难度 ★★☆
		// 输入某一个正整数，输出将该正整数拆分成各个位数之积。且乘积结果若可以继续拆分，则继续拆分相乘，但最多只能拆分3次。
		// 并将产生的所有中间结果式子输出。数据格式如下：
		// 如输入：39: 输出：{ formula: [ '3*9=27', '2*7=14', '1*4=4' ], res: 4 }
		// 如输入：18: 输出：{ formula: [ '1*8=8' ], res: 8 }
		// 如输入: 159: 输出：{ formula: [ '1*5*9=45', '4*5=20', '2*0=0' ], res: 0 }
		// 如输入：120: 输出：{ formula: [ '1*2*0=0' ], res: 0 }

		const digitMultiply = num => {

			let map = {
				formula: [],
				res: num
			}
			let index = 3;

			while(map.res >= 10 && index > 0) {

				let res = map.res.toString().split('').map(item => Number(item));

				map.res = res.reduce((acc, cur) => acc * cur);

				map.formula.push(res.join('*') + '=' + map.res);

				index --;
			}
			return map;
		}
		return digitMultiply(159);
	},
	"2019-09-22" () {
		// 2019-09-22：从一串只由空格和数字型字符组成的字符串里求出最大数和最小数
		// 难度 ★

		const getMaxAndMin = str => {

			let arr = str.split(' ').map(item => Number(item));

			return [Math.min.apply(Infinity, arr), Math.max.apply(-Infinity, arr)];
		}

		return getMaxAndMin('34 56 666 89.1 2 3 4 51 1478.6');
	},
	"2019-09-23" () {
		// 2019-09-23：实现一个flat函数，即数组扁平化，允许传入一个参数num，表示扁平化几层
		// 难度 ★★

		const isNeedSplit = arr => {

			let flag = false;

			arr.forEach(item => Array.isArray(item) && (flag = true));

			return flag;
		}

		const flat = (arr, num) => {

			while(num-- && isNeedSplit(arr)) {

				let mapArr = [];

				arr.forEach(item => {
					Array.isArray(item) ? mapArr.push(...item) : mapArr.push(item);
				});
				arr = mapArr;
			}
			return arr;
		}

		return flat([1,2,3,[1,2,[5,6,7]]], 1);
	},
	"2019-09-24" () {

		// 2019-09-24：数据处理 - 按要求作答 （阿里）
		// 难度 ★★☆
		// 有数据结构如下：

		var arr = [

			{name:'小米1', value: 1,  type: 2, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'锤子T1', value: 1, type: 2, date: '2018-06-07T08:10:01.589Z' },
		 
			{name:'小米2', value: 1, type: 4, date: '2018-06-07T20:00:01.589Z' },
		 
			{name:'小米2', value: 4, type: 4, date: '2018-06-07T20:10:21.189Z' },
		 
			{name:'小米4', value: 1, type: 4, date: '2018-06-07T08:00:01.560Z' },
		 
			{name:'小米4', value: 2, type: 4, date: '2018-06-07T08:10:31.584Z' },
		 
			{name:'小米6', value: 1, type: 3, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'小米5s',value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'锤子T2', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'锤子T1', value: 4, type: 4, date: '2018-06-07T08:06:01.589Z' },
		 
			{name:'魅蓝note5', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'魅蓝note2', value: 5, type: 4, date: '2018-06-02T08:07:01.589Z' },
		 
			{name:'魅蓝note2', value: 6, type: 4, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'魅蓝note3', value: 1, type: 4, date: '2018-06-05T08:00:01.589Z' },
		 
			{name:'魅蓝note', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
		 
			{name:'oppor9', value: 7, type: 4, date: '2018-06-04T08:04:01.588Z' },
		 
			{name:'华为p9', value: 1, type: 4, date: '2018-06-02T08:00:01.577Z' },
		 
			{name:'华为p9', value: 2, type: 4, date: '2018-06-07T08:00:01.110Z' },
		 
			{name:'华为p10', value: 1, type: 1, date: '2018-06-07T08:00:01.534Z' }
		 
		];
		 
		/**

		* 请用您认为最优化的方式，将arr中的type为4的数据过滤出来，
		
		* 然后按相同的 name + date（按天）合并value（value累加），
		
		* 然后按 value 降序(从大到小)排序，
		
		* 最后每行按照 "${name},${本地日期},售出${sum(value)}部" 的格式，如："小米2,2017年06月08日,售出5部", 打印(console.log)出来。
		
		* 可以使用第三方js库，可以使用es6。
		
		* 请在半小时内完成。
		*/

		const format = (date, format) => {
			
			return format.replace('yyyy', date.getFullYear())
						.replace('MM', date.getMonth() + 1)
						.replace('dd', date.getDate());
		}

		const tranData = arr => {

			let newArr = arr.filter(item => item.type === 4);
			
			let map = {};

			newArr.forEach(item => {

				let key = item.name + format(new Date(item.date), 'yyyy年MM月dd日');

				map[key] ? map[key].value += item.value : map[key] = item;
			});

			let val = Object.values(map).sort((a, b) => a.value > b.value ? -1 : 1);

			return val.map(item => {

				var date = format(new Date(item.date), 'yyyy年MM月dd日');

				return `${item.name},${date},售出${item.value}部`;
			});
		}

		return tranData(arr);
	},
	"2019-09-25" () {
		// 2019-09-25：不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标 （阿里）
		// 难度 ★

		// the first solution

		const createArr0 = () => new Array(100).join(',').split(',').map((item, index) => index);

		console.log(createArr0());

		// the second solution

		const createArr = () => Array.from({length: 100}, (item, index) => index);

		return createArr();
	},
	"2019-09-26" () {

		// 2019-09-26：实现数组乱序 （阿里）
		// 难度 ★

		const disorder = arr => arr.sort(() => Math.random() - 0.5);

		return disorder([1,2,3,4,5,6,7,8,9,10]);
	},
	"2019-09-27" () {

		// 2019-09-27：数组缺失成员 - 综合 （腾讯）
		// 难度 ★★★☆

		// 有一组数字，从1到n（假设n=10000），从中任意删除了3个数，顺序也被打乱，剩余数字放在一个n-3的数组里，请找出丢失的数字，要求算法比较快。

		const handle = n => {

			//	创建原数组
			let arr = Array.from({length: n}, (item, index) => index + 1);

			//	随机删除3个成员
			let defectArr = arr.map(item => item).sort(() => Math.random() - 0.5).splice(0, n - 3);
			
			//	找出丢失的数字

			console.time('2019-09-27 算法题时间测试');

			let map = {};

			defectArr.forEach(item => map[item] = 1);
			
			console.log(arr.filter(item => map[item] !== 1));

			console.timeEnd('2019-09-27 算法题时间测试');

			return '2019-09-27 算法题时间测试';
		}
		return handle(100000);
	},
	"2019-09-28" () {
		// 2019-09-28：有一个长度为100的数组，请以优雅的方式求出该数组的前10个元素之和 （阿里）
		// 难度 ★

		const getSum = arr => arr.splice(0, 10).reduce((acc, cur) => acc + cur);

		return getSum([12,3,4,5,6,1,3,4,6,88,123,90,31,43]);
	},
	"2019-09-29" () {
		// 2019-09-29：正则应用 - 匹配二级域名 （阿里）
		// 难度 ★

		// 请写个正则表达式匹配所有二级域名是9game.cn和其目录下的网址，比如：http://abc.9game.cn/sname/view/
		// 如果这个非常重要的话，怎么保护他呢？

		const domainMatch = domain => /.*(.9game.cn).*/g.test(domain);

		console.log(domainMatch('http://abc.9game.cn/sname/view/'));

		return `
			\n	域名保护：可以从两种不同的维度来讲：
			\n	其一是安全：域名是靠注册的，所以其实是有被盗取的风险的，所以除了实名认证之外还需要有其他的保护措施，比如相关的域名证书，对于企业来说，域名的需求其实不算少，而假如都需要实名认证，单纯老板或股东可能还不够，而且老板和股东身份可能更加重要，所以可以委托信得过的下属实名注册加以保护。
			\n	其二则是品牌：这个域名对于公司或企业其实也是一种品牌，比如taobao.com，而当公司品牌效应打出去之后，往往这个域名甚至相关相似名字的域名就很重要了比如tooboo.com，淘淘等等，而假如这些域名被其他公司或其他人注册了之后，并以此做推广，而这些公司或个人除了靠品牌效应迅速获得利益之外，很难保证其会对这个品牌负责，而长久来说这对本公司该品牌是一种损害，这也是为什么市场常见到的域名抢注，域名回购等情况。而对于此一个最有效的措施就是先将这个域名相似的域名也一并抢注下来，尽量减免被人利用，影响公司品牌的推广。
			`;
	},
	"2019-09-30" () {
		// 2019-09-30：伪类基础 - 简单继承
		// 难度 ☆
		class Parent {

			methodA () {
				
				console.log('parent-123');
			}
		}

		class Children extends Parent {

			methodA () {

				super.methodA();
				console.log('children-123');
			}
		}

		let c1 = new Children();

		c1.methodA();
		
		return "2019-09-30 伪类基础";
	}
}