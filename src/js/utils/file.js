import gen from './gen_code.js';
var file_import = () => {
    alert('Not implemented yet :(');
}

var file_export = () => {
    var code = gen.readyHTML();
    var el = document.createElement('a');
    el.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(code));
    el.setAttribute('download', 'code.html');
    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}
//export {file_import as import,file_export as export}
export default {file_import ,file_export}