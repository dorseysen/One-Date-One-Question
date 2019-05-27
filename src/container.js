
import * as Common from './base';

import * as _2019 from './2019';

// import { questionConfig } from './base/config.js';

// import { solution_201905 } from './2019/2019-05.js';

export const container = {

    init() {
        
        this.traverse();

    },
    traverse() {

        // _2019.solution_201905.init();

        for (let i in _2019) {
            
            _2019[i].init();
        }

        // for (let i in Common.questionConfig) {

        //     for (let j in Common.questionConfig[i]) {

        //         for (let k in Common.questionConfig[i][j]) {
                    
        //             console.log(Common.questionConfig[i][j][k]);
        //         }
        //     }
        // }
        



        // for (let i in questionConfig) {

        //     for (let j in questionConfig[i]) {

        //         for (let k in questionConfig[i][j]) {
                    
        //             // console.log(questionConfig[i][j][k]);

        //             solution_201905
        //         }
        //     }
        // }

    }
}