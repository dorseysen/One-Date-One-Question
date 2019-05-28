

export const render = {


    renderHtml() {
        
        let question = `2019-05-25：hello-my-name-is-dorsey-sen变为驼峰式的：helloMyNameIsDorseySen`;

        let core = `const getType_20190505_0 = obj => { 

            let typeStr = Object.prototype.toString.call(obj);
        
            return typeStr.split(' ')[1].split(']')[0].toLowerCase();
        }`;
        let html = `
        <div class='card'>
        <div class='question'>
            ${ question }
        </div>
        <div class='solution'>
                <div class='result'>
                    <span>输出结果：</span>
                    <pre class='core-result'>
                        ${ core }
                    </pre>
                </div>
            </div>
        </div>`;
        return html;
    }
}
