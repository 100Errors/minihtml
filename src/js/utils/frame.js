//console.log('setting variables');
var frame_box = null;
var frame = null;
var inited = false;
var init = () => {
   // console.log('initing');
    inited = true;
    document.getElementById('no_preview').style.display = 'none';
    frame_box = document.getElementById('output_box');
    frame = document.createElement('iframe');

  //  frame.src = 'data:text/html;charset=utf-8, ' + encodeURI('<body>Hello, World!</body>'); // TODO: default-text
  //  console.log('fframe.contentWindow =', frame.contentWindow);
  //  console.log('1');
    frame_box.appendChild(frame);
     console.log(frame.contentWindow);
    frame.contentWindow.document.open();
    frame.contentWindow.document.write();
    frame.contentWindow.document.close();
}
var update = (code) => {
    //console.log('ja');
    if(!inited) {
      //  console.log('do: init');
        init();
    }
   // console.log('now the game');
   frame.contentWindow.document.open();
  // console.log('opened-write:');
 //  console.log(frame);
   frame.contentWindow.document.write(code.html);
  // console.log('written-close:');
   frame.contentWindow.document.close();
  // console.log('closed-return!');
   setCSS(code.css);
   setJS(code.js);
}
var setCSS = (css) => {
    // delete element if exists -- TODO: really needed?
    var site_style = frame.contentWindow.document.getElementById('site_style')
    if(site_style != null) {
        site_style.outerHTML = '';
    }
    var style = document.createElement('style');
    var styleSheet = style.styleSheet;
    if(styleSheet) {
        styleSheet.cssText = css;
    }
    else {
        style.appendChild(frame.contentWindow.document.createTextNode(css));
    }
    style.id = 'site_style';
    frame.contentWindow.document.head.appendChild(style);
}
var setJS = (js) => {
    // delete element if exists -- TODO: really needed?
    var site_js = frame.contentWindow.document.getElementById('site_js');
    if(site_js != null) {
        site_js.outerHTML = '';
    }
    var js_el = frame.contentWindow.document.createElement('script');
    
    js_el.innerHTML = js;
    js_el.id = 'site_js';
    frame.contentWindow.document.head.appendChild(js_el);
  //  frame.contentWindow.document.write('<scr'+'ipt>'+js+'</scr'+'ipt>');
}
/*

function createStyleSheet(content) {
    var style = document.createElement('style');
    var styleSheet = style.styleSheet;
    if (styleSheet) {
        styleSheet.cssText = content;
    }
    else {
        style.appendChild(document.createTextNode(content));
    }
    style.type = 'text/css';
    return style;
}*/
export default {init, update}