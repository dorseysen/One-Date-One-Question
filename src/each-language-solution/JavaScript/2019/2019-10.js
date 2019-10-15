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
	"2019-10-29" () {
		
		// 2019-10-29：动态规划 —— 找零钱

		return "2019-10-29";
	},
    "2019-10-30" () {

        // 2019-09-31：sku算法———多维属性状态判断
		// 难度 ★★★☆
        // 算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        // 此时库存只有以下数据源：
		// [
		// 	{ "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
		// 	{ "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
		// 	{ "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
		// ]
		// 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
		return "2019-10-30";
	},
	"2019-10-31" () {

		//  2019-10-31：金额平均分配问题
        //  问题具体如下：
        //  某外卖商场某时刻接收到的订单有若干单，每单的金额不等，单子的金额越大，提成越高，但所需要做的事情也越多，
        //  故而需要根据单子的金额大小尽可能平均分配给对应的下属加盟连锁店，如何分配？

        //  假设某一时刻的订单列表详情为 [{amount: 156, id: 1}, {amount: 23.5, id: 2}, {amount: 19, id: 3}...]

        // const averageAmount = (amounts, horseMan) => {

        //     amounts.reduce((acc, cur) => acc.amounts + cur.amounts);
		// }
		return "2019-10-31"
	}
}


