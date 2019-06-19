

export const render = {

    append(string) {
        let dom = document.createElement('div');
        dom.innerHTML = string.trim();
        return dom.childNodes[0];
    },

    renderHtml() {
        
        let question = `2019-05-25：hello-my-name-is-dorsey-sen变为驼峰式的：helloMyNameIsDorseySen`;
        let html = `
        <div class='card-container'>
            <div class='card'>
                ${ question }
            </div>
        </div>`;

        return this.append(html);
    },
    renderCoreDetail() {
        let html = `
        <div class='core-detail coreDetail animated zoomIn'>
            <div class='close-btn closeBtn'> × </div>
            <pre>
                const factorial = num => {
        
                    let res = 1;
                    while ( num ) {
                        res *= num --;
                    }
                    return res;
                }
                return factorial(4);
            </pre>
        </div>
        `
        return this.append(html);
    }
}
