export const solution_201906 = {

    init() {
        console.log("==================== start 2019-06 =============================");

        for (let i in solution_201906) {
            
            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    "2019-06-01"() {
        //  2019-06-01
        //  今天是六一儿童节，老师带领班上的小朋友表演节目，但小朋友们需要鼓励，所以老师准备了很多块巧克力来作为奖品，巧克力有大有小，小朋友
        //  愿意上台表演的最小鼓励也是有高有低，而且巧克力既不可以多块给同一人，也不能掰开分给多个小朋友。已知巧克力数和小朋友数目一致，请问如何让尽可能多的小朋友上台表演的前提下，分出去尽可能多（总重量最大）的巧克力？
        //  比如说，有重量为[1, 1.2, 1.2, 1.3, 1, 1.5, 2.5, 1.4, 1.6, 2]的巧克力和要求为[1.3, 1.1, 1.2, 1, 2, 1.4, 1.6, 1.7, 1.3, 1.5]的小朋友

        const childrenDay = (arrChocolate, arrChildren) => {
            
            let children = Object.assign(arrChildren).sort((a, b) => b - a),
                chocolate = Object.assign(arrChocolate).sort((a, b) => b - a),
                res = {
                    'children': [],
                    'chocolate': []
                }
            
            //  过滤掉要求比最重的那块巧克力还高
            children = children.filter(item => item <= chocolate[0]);
            chocolate = chocolate.filter(item => item >= children[children.length - 1]);

            let p = 0;

            for (let i = 0; i < children.length; i ++ ) {

                for (let j = p; j < chocolate.length; j++) {
                    
                    if (chocolate[j] >= children[i]) {
                        res.children.push(children[i]);
                        res.chocolate.push(chocolate[j]);
                        p = j + 1;
                        break;
                    }
                    
                }

            }
            return res;
        }
        return childrenDay([1, 1.2, 1.2, 1.3, 1, 1.5, 2.5, 1.4, 1.6, 2], [1.3, 1.1, 1.2, 1.4, 2, 1.4, 1.6, 1.7, 1.3, 1.5]);
    },
    "2019-06-02"() {

        //  2019-06-02：约瑟夫环问题
        //  编号为1到100的一百个人围成一圈，以123123的方式进行报数，数到3的人自动退出圈子，剩下的人继续报数，问最后剩下的人编号为几？
        //  如果1000个人，10000个人呢？

        const JosephRing = (totalNumbers, key) => {

            //  生成编号
            let nums = Array.from({ length: totalNumbers }, (item, index) => index + 1),
                
            //  初始指针
                k = key;
            
            while (nums.length > 1) {
                    
                k > nums.length ? k %= nums.length : null;

                k === 0 ? key < nums.length ? k = 1 : k = nums.length : null;

                nums = [...nums.slice(0, k - 1), ...(nums.slice(k, nums.length))];

                console.log(nums);

                k += key - 1;
            }
            return nums;
        }
        return JosephRing(10, 4);
    },
    "2019-06-03"() {
        //  2019-06-03：打印接下来的N个闰年，若今年即为闰年则从今年开始打印
        class leapYear {

            constructor(n) {
                this.init();
                this.run(n);
            }
            init() {
                this.nowYear = new Date().getFullYear();
                this.year = this.nowYear;
                this.leapYear = this.isLeapYear(this.nowYear) ? [this.nowYear] : [];
            }
            isLeapYear(year) {
                return year % 4 === 0 ? year % 100 !== 0 ? true : year % 400 === 0 ? true : false : false;
            }
            run(n) {
                while (this.leapYear.length < n) {
                    this.year++;
                    this.isLeapYear(this.year) && this.leapYear.push(this.year);
                }
            }
        }
        return new leapYear(20);
    },
    "2019-06-04"() {
        //  2019-05-30：sku算法———多维属性状态判断
        //  算法简化：假设只有3种状态：1、颜色：红蓝灰。2、尺码、大中小。型号、ABC。
        //  此时库存只有以下数据源：
        // [
        //     { "颜色": "红", "尺码": "大", "型号": "A", "skuId": "3158054" },
        //     { "颜色": "白", "尺码": "中", "型号": "B", "skuId": "3133859" },
        //     { "颜色": "蓝", "尺码": "小", "型号": "C", "skuId": "3516833" }
        //  ]
        // 数据源不可选时将选项按钮置灰并禁用点击，请写出该SKU算法。
    }
}