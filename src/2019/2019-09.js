export class _201909 {

    constructor () {

        this.task = Object.getOwnPropertyNames(_201909.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    "2019-09-01" () {

        const localStorageMock = (function() {
			let store = {}
			return {
				getItem: function(key) { return store[key] || null },
				setItem: function(key, value, time) { // time 是毫秒级别,过时时间必须大于0ms
					time = Number(time)?time:0;
					store[key] = value.toString()
					if(time>0){this.timeOut(key,time)}
				},
				timeOut:function(key,time){
					let that = this;
					let timer = setTimeout(function(){ that.removeItem(key);clearTimeout(timer);},time)
				},
				removeItem: function(key) { delete store[key] },
				clear: function() { store = {} },
			}
		})()

		Object.defineProperty(window, 'localStorage2', {
			value: localStorageMock
		})
		
		localStorage2.setItem('test',"test",3000)
		console.log(localStorage2.getItem("test"))  //test
		
		setTimeout(function(){
			console.log(localStorage2.getItem("test"))  //null
        },4000);
    }
}