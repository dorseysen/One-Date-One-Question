
import * as _2019 from './2019';

export class OneDateOneQuestion {

    constructor(options) {

        this._init(options);

        Object.keys(_2019).forEach(item => _2019[item].init());
    }
    _init (options) {

        window.$state = options.state;
    }
    test() {
        // document.querySelector('.container').appendChild(Common.render.renderCoreDetail());
        // document.querySelector('.container').appendChild(Common.render.renderHtml());
    }
}
