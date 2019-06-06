
import * as Common from './base';

import * as _2019 from './2019';

export const container = {

    init() {
        
        this.all();

    },
    all() {

        for (let i in _2019) {
            
            _2019[i].init();
        }

        // document.querySelector('.container').appendChild(Common.render.renderCoreDetail());
        // document.querySelector('.container').appendChild(Common.render.renderHtml());
    }
}