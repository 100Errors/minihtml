import gen from './utils/gen_code';
import file from './utils/file.js';
var init = () => {/*
    document.getElementById('open_data_text_html').addEventListener('click', () => {
        var url = gen.data();
        console.log(url);
      //  window.open(url, '_blank');
        Object.assign(document.createElement('a'), { target: '_blank', href: url}).click();

        // TODO: redirect?
    });*/

    // Toggle Boxes
    document.getElementById('toggle_html').addEventListener('click', () => {
        document.getElementById('html_box').classList.toggle('hidden');
    });
    document.getElementById('toggle_css').addEventListener('click', () => {
        document.getElementById('css_box').classList.toggle('hidden');
    });
    document.getElementById('toggle_js').addEventListener('click', () => {
        document.getElementById('js_box').classList.toggle('hidden');
    });
    // File
    var file_el = document.getElementById('file');
    file_el.addEventListener('click', () => {
        file_el.parentElement.classList.toggle('active');
    });
    document.getElementById('file_import').addEventListener('click', () => {
        file.file_import();
    });
    document.getElementById('file_export').addEventListener('click', () => {
        file.file_export();
    });
}
export default {init}