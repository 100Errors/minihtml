import code from '../current_code.js';
//console.log(code);
var html = () => {
    // set viewport?!
    // TODO: What *IF* user types `</style>` in CSS?
    // TODO: WHat *IF* user types `</script>` in JS?
    var code_html = code.getCurrentHTML();
    if(code_html == null) {
        code_html = '';
    }
   // console.log(code.getCurrentHTML());
    var code_css = code.getCurrentCSS();
    if(code_css == null) {
        code_css = '';
    }
    var code_js = code.getCurrentJS();
   // console.log(js_code);
    if(code_js == null) {
        code_js = '';
    }
    var return_html = `
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
    ${code_html}
    </body>
    </html>
    `;
    return {
        html: return_html,
        css: code_css,
        js: code_js
    };
}
var readyHTML = () => {
    // set viewport?!
    // TODO: What *IF* user types `</style>` in CSS?
    // TODO: WHat *IF* user types `</script>` in JS?
    var code_html = code.getCurrentHTML();
    if(code_html == null) {
        code_html = '';
    }
   // console.log(code.getCurrentHTML());
    var code_css = code.getCurrentCSS();
    if(code_css == null) {
        code_css = '';
    }
    var code_js = code.getCurrentJS();
   // console.log(js_code);
    if(code_js == null) {
        code_js = '';
    }
    var return_html = 
    `<!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <style id="site_style">${code_css}</style>
        <script id="site_script">${code_js}\</script>
    </head>
    <body>
    ${code_html}
    </body>
    </html>`;
    return return_html;
}
var data = () => {
    return 'data:text/html, ' + encodeURI(readyHTML());
}
export default {html, readyHTML, data}