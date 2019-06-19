export const solution_201907 = {

    init() {
        console.log("==================== start 2019-06 =============================");

        for (let i in solution_201906) {

            if (i !== 'init') {
                console.log(this[i]());
            }
        }
    },
    "2019-07-01" () {
        //  2019-06-18：统计从 1、2、3...一直到 n，这个过程中所有出现 0 的总数。
        //  比如说 n 的值为 11，此时从 1、2...到 11这列数只有 10 有一个 0，故而 0 的总数为 1个。注意 100 是 2个零， 1000 是 3 个零

        class zeroNums {

            constructor (n) {
                this.zero = 0;
                this.n = n;
                this.everyBitZero = [];
                this.res = 0;

                this.init();    
            }
            init () {

                if(this.n < 100) {

                    this.zero = Math.floor( this.n / 10 );
                }
                else{
                    console.log(this.unit(3));
                    let n = this.n,
                        len = this.len(n) - 1;
                    
                    while( n ) {



                        this.everyBitZero.push(val);
                        this.zero += val;
                    }
                }
            }
            //  返回某个数的首位数字
            firstNum (number) {
                return Number( number.toString()[0] );
            }
            //  获取某个number的长度
            len (number) {
                return number.toString().length;
            }
            //  每一个位数单元的所有零的数目，比如10000这个数是5位，而会输出以1开头的（bit此时是4）所有五位数出现零的总数
            unit (bit) {

                let val = 0;
                for(let i = 1; i <= bit; i ++) {

                    val += this.pac( bit, i ) * ( 9 ** ( bit - i ) ) * i;
                }
                return val;
            }
            //  排列组合
            pac (all, unit) {

                let res = 1, divisor = 1;

                while(unit --) {

                    res *= all -- / divisor ++;
                }
                return res;
            }
        }
        return new zeroNums(999);
    },
    "2019-07-02" () {
        
        /*  2019-06-19: 子数组最大和
            比如输入：[1, 2, 3, 4, -5, 6, -7, 8],由于：1 + 2 + 3 + 4 + (-5) + 6 + (-7) + 8 = 12是最大的和。
            故而输出：[12, [1, 2, 3, 4, -5, 6, -7, 8]]
            子数组泛指一切由该输入数组任意连续成员所组成的数组，比如[1, 2, 3, 4]是一个子数组，[3, 4, -5]也是子数组, [-7]也是子数组
            甚至输入数组本身也可以作为它的子数组 */
        const maximumSum = arr => {

            let median = 0, res;

            for( let i = 0; i < arr.length; i ++ ) {

                
            }
        }
    },
    "2019-07-03" () {

        /*实现一个LazyMan，可以按照以下方式调用:
        
        LazyMan(“Hank”)输出:
        Hi! This is Hank!

        LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
        Hi! This is Hank!
        等待10秒..
        Wake up after 10
        Eat dinner~

        LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
        Hi This is Hank!
        Eat dinner~
        Eat supper~

        LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
        等待5秒
        Wake up after 5
        Hi This is Hank!
        Eat supper

        以此类推。*/
    }
}