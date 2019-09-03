export class _201909 {

    constructor () {

        this.task = Object.getOwnPropertyNames(_201909.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    "2019-09-01" () {
		// 设置localStorage过期时间
        // const localStorageMock = (function() {
		// 	let store = {}
		// 	return {
		// 		getItem: function(key) { return store[key] || null },
		// 		setItem: function(key, value, time) { // time 是毫秒级别,过时时间必须大于0ms
		// 			time = Number(time)?time:0;
		// 			store[key] = value.toString()
		// 			if(time>0){this.timeOut(key,time)}
		// 		},
		// 		timeOut:function(key,time){
		// 			let that = this;
		// 			let timer = setTimeout(function(){ that.removeItem(key);clearTimeout(timer);},time)
		// 		},
		// 		removeItem: function(key) { delete store[key] },
		// 		clear: function() { store = {} },
		// 	}
		// })()

		// Object.defineProperty(window, 'localStorage2', {
		// 	value: localStorageMock
		// })
		
		// localStorage2.setItem('test',"test",3000)
		// console.log(localStorage2.getItem("test"))  //test
		
		// setTimeout(function(){
		// 	console.log(localStorage2.getItem("test"))  //null
        // },4000);
	}
	"2019-09-28" () {
		//  2019-08-31：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        // [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
        // 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
	}
	"2019-09-29" () {
		// 2019-09-29：动态规划 —— 找零钱
	}
	"2019-09-30" () {

		//  2019-09-30：金额平均分配问题
        //  相比于上方的负载均衡，这里的金额分配显得更加接地气一些，问题具体如下：
        //  某外卖商场某时刻接收到的订单有若干单，每单的金额不等，单子的金额越大，所需要做的事情越多，
        //  因而需要根据单子的金额大小尽可能平均分配给对应的下属加盟连锁店，如何分配？

        //  假设某一时刻的订单列表详情为 [{amount: 156, id: 1}, {amount: 23.5, id: 2}, {amount: 19, id: 3}...]

        // const averageAmount = (amounts, horseMan) => {

        //     amounts.reduce((acc, cur) => acc.amounts + cur.amounts);
        // }
	}
}