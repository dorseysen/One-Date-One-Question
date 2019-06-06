export const common = {

    append() {
        
        parser=new DOMParser();
        htmlDoc=parser.parseFromString(txt,"text/html");
     //alert('FMO');
        return htmlDoc;
    }
}