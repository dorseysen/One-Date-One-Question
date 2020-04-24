export const solution_201910 = {

    init () {
		
		console.log("==================== start 2019-10 =============================");

		this.task = Object.keys(solution_201910).filter(item => item !== 'init');
		
        this.task.forEach(item => console.log(this[item]()));
	},
	"2019-10-01" () {

		// 2019-10-01：10月1号是国庆节，今天来写一个倒计时，期盼我们国庆节的到来
		// 难度 ※ 

		const nationalDayCountDown = {

			conf () {
				return {
					'国庆节': '10-01',
					'元旦': '01-01'
				}
			},
			timeContainer: {},

			init (festival, dom) {

				let _self = this;

				_self.config = _self.conf();

				let day = _self.config[festival];

				this.timeContainer[festival] = setInterval(function () {

					let option = Object.assign({}, {fes: festival}, _self.dataHandle(Number(day.split('-')[0]) - 1, day.split('-')[1]));

					dom.innerHTML = _self.tmpl(option);

				}, 1000);
			},

			dataHandle (month, date) {

				let dateTime = new Date(),
					year = dateTime.getFullYear(),
					festival = new Date(year, month, date),
					diff = festival.getTime() - dateTime.getTime();

				if(diff < 0){

					diff += this.isLeapYear( festival.getMonth() > 2 ? year : (year + 1) ) ? 366 * 24 * 60 * 60 * 1000 : 365 * 24 * 60 * 60 * 1000
				}

				return {

					date: Math.floor( diff / (24 * 60 * 60 * 1000) ),
					hour: Math.floor( (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000) ),
					minute: Math.floor( (diff % (60 * 60 * 1000)) / (60 * 1000) ),
					second: Math.floor( (diff % (60 * 1000)) / 1000 )
				}
			},

			isLeapYear (year) {

				return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
			},

			tmpl (option) {

				return `<p>${option.fes}倒计时： ${option.date} 天 ${option.hour} 时 ${option.minute} 分 ${option.second} 秒</p>`
			},
			stop (target) {

				clearInterval(this.timeContainer[target]);
			}

		}

		window.nationalDayCountDown = nationalDayCountDown;

		nationalDayCountDown.init('国庆节', document.querySelector('.container'));
		nationalDayCountDown.init('元旦', document.querySelector('.container1'));

		// nationalDayCountDown.stop('元旦');
		
		return "2019-10-01";
	},
	"2019-10-02" () {
		
		// 2019-10-02：给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。 （腾讯）
		// 难度 ★★

		const arr = [1,2,3,4,5,5,6,6,7,7,8,9,9,10,10,11,11,11];
		// const arr = [1];

		// the first solution
		const uniqueArray_0 = arr => Array.from(new Set(arr)).length;

		console.log(uniqueArray_0(arr));

		const uniqueArray = arr => {

			if(arr.length <= 1) return arr.length;

			let i = 1;

			for(let j = 1; j < arr.length; j ++) {

				if(arr[j] !== arr[j - 1]) {

					i ++;
				}
			}
			return i;
		}

		return uniqueArray(arr);
	},
	"2019-10-03" () {
		
		// 2019-10-03：报7游戏，返回安全数
		// 难度 ☆

		// 一群人在玩游戏，人数是100，从1~100编号，并从头到尾1、2、3...7这样循环报数。报到7的那个人会消失，求劫后余生的数
		const safeNums = ( arr, danger ) => arr.filter(item => item !== danger);

		return safeNums($state.arr100, 7);
		
	},
	"2019-10-04" () {
		
		// 2019-10-04：计算平均值
		// 难度 ★

		// 一个班的学生，乘积参差不齐，求其成绩的平均数。数据来源：$state.score

		const averageScore = arr => new Function ('return ' + arr.map(item => item.score).join('+'))() / arr.length;

		return averageScore($state.score);
	},
	"2019-10-05" () {
		
		// 2019-10-05：转换颜色 —— rgb(255, 255, 255) => #ffffff
		// 难度 ★
		const tranColor = colorStr => {

			let arr = colorStr.match(/(?<=^rgb\().*?(?=\))/g)[0].split(',').map(item => Number(item.trim()).toString(16));

			return '#' + arr.join('');
		}
		return tranColor('rgb(255, 255, 255)');
	},
	"2019-10-06" () {

		// 2019-10-06：字符串统计，统计字符串中每个字符的出现频率，返回object，key为统计的字符，value为频率
		// 难度 ★

		const frequentStatistic = str => {

			let res = {};

			for(let i = 0; i < str.length; i ++) {

				res[str[i]] = 'undefined' !== typeof res[str[i]] ? res[str[i]] + 1 : 1;
			}
			return res;
		}

		return frequentStatistic('my name is dorsey!! $$##@@**&&^^[]()<>');
	},
	"2019-10-07" () {

		// 2019-10-07：将输入的一个数字，拆分为其因子的乘积。
		// 难度 ★★

		// 如输入：12，输出：2 * 2 * 3 = 12，
		// 输入：120，输出：2 * 2 * 2 * 3 * 5 = 120。

		const factorNums = num => {

			let res = [],
				product = num,
				i = 2;

			while(i <= num) {

				if(num % i === 0) {
					
					res.push(i);
					if(i === num) break;
					num /= i;
					i = 2;

				}else{
					i ++;
				}
			}

			return res.join(' * ') + ' = ' + product;
		}

		return factorNums(120);
	},
	"2019-10-08" () {
		// 2019-10-08：单词原位反转
		// 难度 ★
		// 'I am dorsey' => 'I ma yesrod'

		// the first solution 较为直观但性能较差
		const situReverse_0 = str => str.split(' ').map(item => item.split('').reverse().join('')).join(' ');

		console.log(situReverse_0('I am dorsey'));
		
		// the second solution 较为巧妙且性能更好
		const situReverse = str => str.split(' ').reverse().join(' ').split('').reverse().join('');

		return situReverse('I am dorsey');
	},
	"2019-10-09" () {
		// 2019-10-09：判断对象是否为空对象{}
		// 难度 ★

		// the first solution - 模拟JQuery的$.isEmptyObject实现
		const isEmptyObject_0 = object => {

			for(let key in object) {
				return false;
			}
			return true;
		}
		console.log(isEmptyObject_0({}));
		
		// the second solution 利用ES6新特性
		const isEmptyObject = object => Object.keys(object).length === 0;

		return isEmptyObject({});
	},
	"2019-10-10" () {
		// 2019-10-10：将一个任意长的数，拆分成都好隔开。
		// 难度 ★

		// 如输入：12345678.12345，输出： 12,345,678.12345;

		// the first solution  -  传统法
		
		const tranNumber_0 = num => {

			let arr = num.toString().split('.');

			let con = arr[0].split('');

			let integerPart = con.map((item, index) => index % 3 === con.length % 3 && (con.length - 1 - index) !== 0 ? ',' + item : item).join('');
			
			return arr.length > 1 ? integerPart + '.' + arr[1] : integerPart;

		}
		console.log(tranNumber_0(12345678.123));
		// the second solution  -  正则替换
		const tranNumber = num => {

			let arr = num.toString().split('.');

			let integerPart = arr[0].replace(/\d(?=(\d{3})+$)/g, '$&,');

			return arr.length > 1 ? integerPart + '.' + arr[1] : integerPart;
		}

		return tranNumber(12345678.123);
	},
	"2019-10-11" () {
		// 2019-10-11：实现document.querySelector
		// 难度 ★★

		// document.querySelector(ele) 简单实现，
		// 不同于querySelectorAll，querySelector仅仅只能选择一个选择器，故而即使传入的参数存在“,”，则只会选择最后一个

		const document1 = {

			querySelector (str) {

				let arr = str.split(','),
					select = arr[arr.length - 1].trim(),
					reg = /[.#\[]/.exec(select);

				if( reg ) {

					let caseList = {
						'[' : this.getElementbyAttributeVal(select)[0],
						'.' : document.getElementsByClassName(select.replace('.', ''))[0],
						'#' : document.getElementById(select.replace('#', ''))
					};

					return caseList[reg[0]];

				}else{

					return document.getElementsByTagName(select)[0];
				}
			},
			getElementbyAttributeVal (select) {

				let key = select.split(/[\[\]=]/g);

				return Array.from(document.getElementsByTagName(key[0])).filter(item => item.getAttribute(key[1]) === key[2]);
			}
		}
		return document1.querySelector('div[class=container]');
	},
	"2019-10-12" () {
		// 2019-10-12：与固定值之和为完全平方数
		// 难度 ★
		// 求0-10000的区间是否存在一个整数，这个整数加上100后它是一个完全平方数，加上268后又是一个完全平方数。求该数为多少，若存在多个则一并列出

		const integerTarget = () => {

			let res = [];

			for(let i = 0; i < 10000; i ++) {

				if( Math.floor(Math.sqrt( i + 100 )) === Math.sqrt( i + 100 ) && Math.floor(Math.sqrt( i + 268 )) === Math.sqrt( i + 268 ) ) {

					res.push(i);
				}
			}

			return res;
		}
		
		return integerTarget();
	},
	"2019-10-13" () {
		// 2019-10-13：数字大小比较
		// 难度 ★
		// 输入三个数字，从小到大输出
		// 如输入：67,892,112，输出：17,112,892

		// the first solution
		const compareSize_0 = (n1, n2, n3) => [n1, n2, n3].sort((a, b) => a - b).join(',')
		
		console.log(compareSize_0(67, 892, 112));

		// the second solution
		const compareSize = (n1, n2, n3) => {

			n1 > n2 && ([n1, n2] = [n2, n1]);
			n2 > n3 && ([n2, n3] = [n3, n2]);
			n1 > n3 && ([n1, n3] = [n3, n1]);

			return n1 + ',' + n2 + ',' + n3;
		}

		return compareSize(67, 892, 112);
	},
	"2019-10-14" () {
		// 2019-10-14：求40以内偶数之和与奇数之和
		// 难度 ★

		const sumRange = range => {

			let arr = Array.from({length: range[1] - range[0] + 1}, (item, index) => index + range[0]);

			const sumUnit = (arr, type) => {

				let arrFilter = [];

				switch(type) {

					case 'even': arrFilter = arr.filter(item => item % 2 === 0); break;
					case 'odd': arrFilter = arr.filter(item => item % 2); break;
				}
				return arrFilter.join('+') + '=' + arrFilter.reduce((acc, cur) => acc + cur);
			}
			
			return {
				'even': sumUnit(arr, 'even'),
				'odd': sumUnit(arr, 'odd')
			}
		}
		return sumRange([1, 40]);
	},
	"2019-10-15" () {
		// 2019-10-15：数据结构调整，数据来源$state.temp
		// 难度 ★
		// 将数据中id为0的数据的checked转为false。

		const tranData = data => data.map(item => item.id === 0 ? (item.checked = true, item) : item );

		return tranData(JSON.parse(JSON.stringify($state.temp)))
	},
	"2019-10-16" () {
		// 2019-10-16：三角面积计算
		// 难度 ★★
		// 已知三角形的三个点（一定能组成三角形，可不做判断，当然判断也不难），求三角形的面积
		// 如输入[[0, 0], [8, 0], [8, 8]]， 输出 32

		const triangleArea = (trianglePoint) => {

			let [[x1, y1], [x2, y2], [x3, y3]] = trianglePoint;
			
			let base = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2),

				k = (y2 - y1) / (x2 - x1); //	kx - y + y1 - kx1 = 0

			return base * Math.abs((k * x3 - y3 + y1 - k * x1) / Math.sqrt(k ** 2 + 1)) / 2
		}
		return triangleArea([[0, 0], [9, 0], [8, 8]]);
	},
	"2019-10-17" () {
		// 2019-10-17：三数之和
		// 难度 ★
		// 给定一个数组，若数组中任意三个不同的数（数可以相同，但数在数组的下标不能一致）之和为0，则输出这组数
		const sum = arr => {

			let res = [];

			for(let i = 0; i < arr.length - 2; i ++) {

				for(let j = i + 1; j < arr.length - 1; j ++) {

					for(let k = j + 1; k < arr.length; k ++) {

						if( arr[i] + arr[j] + arr[k] === 0) {

							res.push([arr[i], arr[j], arr[k]]);
						}
					}
				}
			}
			return res;
		}
		return sum([1,1,2,3,4,5,-1,-2,-3,-4,-5]);
	},
	"2019-10-18" () {
		// 2019-10-18：一个大数组中，包含若干个小数组，取各个小数组最大的数，返回一个最大数组成的新数组。
		// 难度 ★
		const largestNumArr = arr => arr.map(item => Math.max.apply(-Infinity, item));

		return largestNumArr([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
	},
	"2019-10-19" () {
		// 2019-10-19：字符串压缩
		// 难度 ★★
		// 如：xxxyyyyyyz => 3x6yz
		// 如: xyzyxyzyxyz => xyzyxyzyxyz

		const compressStr = str => str.replace(/(.)\1+/g, (s, n) => s.length + n);

		return compressStr('xxxyyyyyyz')
	},
	"2019-10-20" () {
		// 2019-10-20：简单抽奖 —— 生成n个输入范围在a ~ b内的不同随机整数。
		// 难度 ★★
		// 函数接收3个数字，分别为a, b, n。

		// the first solution —— 传统法

		const randomNums_0 = (a, b, n) => {

			if(n <= 0 || Math.floor(n) !== n) throw 'n需要为正整数';

			//	建一个数组
			let res = [];
		
			//	生成 a~b 的随机号码
			const createRandom = (a, b) => Math.floor(Math.random() * (b - a) + a);
		
			while(n) {
		
				let val = createRandom(a, b);
				if(res.indexOf(val) === -1) {	//	如果这个随机的号码在幸运者的队列中不存在
					res.push(val);	//	则将这个号码添加进去
					n --;		//	这里的n是幸运者的人数，当队列中多了一个幸运者，n就减一
				}				//	否则重新生成随机数
			}
			return res;
		}
		console.log(randomNums_0(1, 100, 5));

		// the second solution —— 利用数组机制
		const randomNums = (a, b, n) => {

			let arrList = Array.from({length: b - a}, (item, index) => index + a),
				res = [];

			while(n --) {

				let i = Math.floor(Math.random() * arrList.length);
				res.push(arrList[i]);

				arrList.splice(i, 1);
			}
			return res;
		}
		return randomNums(1, 100, 5);
	},
	"2019-10-21" () {
		// 2019-10-21：Fizz Buzz
		// 难度 ★★
		// 给定一个 数字 作为输入值, 打印出从 1 到给定数字的所有整数。 
		// 但是，当整数可以被 2 整除时，打印出“Fizz”; 当它可以被3整除时，打印出“Buzz”; 
		// 当它可以同时被2和3整除时，打印出“Fizz Buzz”。
		// 为了方便，可以将结果先合并成一个数组一起输出

		const fizzBuzz = num => {

			let arr = Array.from({length: num}, (item, index) => index + 1);

			return arr.map(item => item % 2 === 0 ? 'Fizz' : item % 3 === 0 ? 'Buzz' : item);
		}
		return fizzBuzz(20);
	},
	"2019-10-22" () {
		// 2019-10-22：完美数
		// 难度 ★
		// 如果一个数恰好等于除了它本身之外的约数之和，则称该数为“完美数”。
		// 请写一个函数，输出某个范围内的“完美数”。
		// 约数：一个数能被另一个数整除，这个数就是它的约数。比如
		// 4的约数是：1,2,4
		// 6的约数是：1,2,3,6
		// 这里定义是排除掉它本身，也就是说：6 = 1 + 2 + 3，实际上6就是一个完美数

		const perfectNums = (min, max) => {

			let res = [];

			for(let i = min; i <= max; i ++) {

				let sum = 0,
					arr = [];

				for(let j = 1; j < i; j ++) {

					i % j === 0 && ( sum += j, arr.push(j) );
				}

				i === sum && res.push(arr.join('+') + '=' + i);
			}
			return res;
		}
		return perfectNums(1, 10000);
	},
	"2019-10-23" () {
		// 2019-10-23：输入三个点，判断这三个点的连线是否一定能组成一个三角形，如果是，返回true，否则返回false
		// 难度 ★
		// 输入的形式为：[[1, 2], [2, 3], [3, 4]]

		const iSCanBeTriangle = pointList => {

			let [[x1, y1], [x2, y2], [x3, y3]] = pointList;

			return (y2 - y1) / (x2 - x1) !== (y3 - y2) / (x3 - x2)
		}
		
		return iSCanBeTriangle([[1, 2], [2, 3], [-4, -3]])
	},
	"2019-10-24" () {
		// 2019-10-24：程序员节，自由发挥
		// 难度 ※

		// 写一首程序员打油诗吧

		const poem = () => {

			return `
					十年编程两茫茫
					工期短，需求长
					千行代码，Bug何处藏
					纵使上线又如何，新版本，继续忙
					黑白颠倒没商量，睡地铺，吃食堂
					夜半梦醒，无人在身旁
					最怕灯火阑珊时，手机响，心里慌

					1024咫尺旁
					纵欢欣，无慌乱
					开发测试，恪守如日常
					996加007，举头望，明月还
					世上安得两全法，苦归苦，心坦荡
					转眼余年，秃顶无人管
					中年何处是归途？问苍天，眼茫然
				`
		}
		return poem();
	},
	"2019-10-25" () {
		// 2019-10-25：母牛生母牛问题
		// 难度 ★★
		// 母牛每年生一只母牛，新出生的母牛成长三年后也能每年生一只母牛，假设不会死。
		// 现在已知第一年的时候母牛的数量为10头，求第N年时，母牛的数量。
		
		// 问题可以简化为第N年出生的母牛数量 + 第N - 1年原有的母牛数量之和
		const cowProduceCalf = (originVal, n) => {

			const cowUnit = n => {

				if(n < 1) return;

				let count = 0;

				if(n > 4) {

					count = cowUnit(n - 1) + cowUnit(n - 3);
				}else{
					count = n;
				}
				return count;
			}

			return originVal * cowUnit(n);
		}
		return cowProduceCalf(10, 5);
	},
	"2019-10-26" () {

		// 2019-10-26：长途车问题
		// 难度 ★★★☆

		// 小明开车跑一段2000公里长的路，车每次加满油可以走300公里，车要加油，路边有加油站，加油站的间隔不是固定的。
		// 加油站的序号为：1、2、3、4、5、6...
		// 加油站之间的距离遵循这样的循环间： [51, 48, 65, 38, 66, 90, 74, 47, 23...]。
		// 即第1个加油站和第2个加油站间隔51公里，第2个和第3个间隔48公里，以此类推，
		// 第9个和第10个加油站间隔23，为了简化，接下来第10个加油站和第11个加油站的距离又重新变回51...

		// 1、求小明这段路上他最少要加几次油，分别在哪些加油站加过油。

		// 2、小华的车比小明的车更加省油，他的车加满油可以走350公里，则他需要加几次油并且在哪些加油站加油。

		class coach {

			constructor (travelDistance, actionRadius) {

				this.travelDistance = travelDistance;	//	车子路程
				
				this.actionRadius = actionRadius;		//	车子满油半径

				this.gasListUnit= [51, 48, 65, 38, 66, 90, 74, 47, 23];		//	加油站间隔数组单元

				this.gasList = this.gasListUnit;	//	加油站间隔数组，实际的应用则是直接读取某条路上加油站的数据，无需这样生成

				this.distance = 0;

				this.res = [];	//	记录车子停靠加油的加油站

				this.init();
			}

			init () {

				this.createGasList();

				this.puttingGas();

				this.outputResult();
			}
			//	创建加油站数组
			createGasList () {

				while(this.gasList.reduce((acc, cur) => acc + cur) < this.travelDistance) {
					this.gasList = [...this.gasList, ...this.gasListUnit];
				}
			}
			//	记录旅途中车子停靠加油的油站站点。
			puttingGas () {

				this.gasList.reduce((acc, cur, index) => {

					this.distance += cur;

					acc > this.actionRadius && this.distance < this.travelDistance && (acc = 0, this.res.push(index + 1));

					return acc + cur;
				});
			}
			outputResult () {

				console.log('车子在旅途中，分别在第' + this.res.join('、') + '号加油站加过油, 总计加油' + this.res.length + '次');
			}
		}
		console.log('小明：');
		new coach(2000, 300);
		console.log('小华：');
		return new coach(2000, 350);
	},
	"2019-10-27" () {
		// 2019-10-27：不改变原数组 arr，在数组 arr 末尾添加元素 item。返回新的数组
		// 难度 ☆

		// the first solution	concat
		const add_0 = ( arr, item ) => arr.concat(item);

		console.log(add_0( [1,2,3,4,5], 6 ));

		// the second solution	和concat差不多，换汤不换药
		const add = (arr, item) => [...arr, item];

		return add( [1,2,3,4,5], 6 );
	},
	"2019-10-28" () {
		// 2019-10-28：统计数组中的值为item的个数
		// 难度 ☆

		const statisNum = (arr, item) => arr.filter(el => el === item).length;

		return statisNum([1,2,3,4,5,1,2,3,4,1,2,3,1,2], 2);
	},
	"2019-10-29" () {
		
		// 2019-10-29：为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
		// 难度 ☆

		const squareArr = arr => arr.map(item => item ** 2);

		return squareArr([1,2,3,4,5,6,7]);
	},
	"2019-10-30" () {
		
		// 2019-10-30：在数组 arr 中，查找值与 item 相等的元素出现的位置
		// 难度 ☆

		const targetIndex = (arr, item) => arr.map( (item, index) => { return { key: item, value: index } } )
											.filter(item => item.key === item)
											.map(item => item.value);

		return targetIndex([1,2,3,4,5,1,2,3,4,1,2,3,1,2], 2);
	},
	"2019-10-31" () {
		
		// 2019-10-31：
	}
}
