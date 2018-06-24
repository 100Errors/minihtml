import info_modal from './info_modal.js';
import listeners from './event_listeners.js';
import CodeFlask from 'codeflask';
import code from './current_code.js';
var main = window.main = function() {
   // var currentHTML = null;
    //var currentCSS = null;
  //  var currentJS = null;
    var output_box = document.getElementById('output_box');

    var html_box_editor = new CodeFlask('#html_box', {
        language: 'html'
    });
    var css_box_editor = new CodeFlask('#css_box', {
        language: 'css'
    });
    var js_box_editor = new CodeFlask('#js_box', {  
        language: 'javascript'
    });
    js_box_editor.onUpdate((js) => {
        console.log(js);
        code.setCurrentJS(js);
    });
    html_box_editor.onUpdate((html) => {
        code.setCurrentHTML(html);
    });
    css_box_editor.onUpdate((css) => {
        code.setCurrentCSS(css);
    });
    
    /*
    js_box_editor.onUpdate((js) => {
        code.setCurrentJS(js);
    });*/   
   // setPlaceholders([html_box_editor, css_box_editor, js_box_editor]);
    setPlaceholders();
    var boxes = document.getElementById('boxes');
    var nav_bar = document.getElementById('nav_bar');
    calculate_height();
  
    listeners.init();
    info_modal.init();
}
var setPlaceholders = function(){
    var areas = document.querySelectorAll('.codeflask__textarea');
//    console.log(areas);
    var type = null;
    for(var i = 0; i < areas.length; i++) {
    //    console.log('HIER');
        type = getDataAttrByParent(areas[i]);
        switch(type) {
            case 'html':
                areas[i].placeholder = 'HTML:';
                break;
            case 'css':
                areas[i].placeholder = 'CSS:';
                break;
            case 'js':
                areas[i].placeholder = 'JS:';
                break;
            default:
                console.log(type);
                break;
        }
    }
}
var getDataAttrByParent = function(el) {
 //   console.log(el);
    while(el.parentNode) {
        el = el.parentNode; 
        if(el.dataset && 'type' in el.dataset) {
     //       console.log(el.dataset.type);
            return el.dataset.type;
        }
    }
    return null;
}
var calculate_height = function() {
    var nav_bar_height = window.getComputedStyle(nav_bar, null).getPropertyValue('height');
    nav_bar_height = nav_bar_height.replace('px', '');
    nav_bar_height = parseInt(nav_bar_height);

    var boxes_height = window.getComputedStyle(boxes, null).getPropertyValue('height');
    boxes_height = boxes_height.replace('px', '');
    boxes_height = parseInt(boxes_height);
    var used_height = nav_bar_height + boxes_height;
    var document_height = window.innerHeight;

    var output_box_height = document_height - used_height
    output_box.style.height = output_box_height + 'px';
}