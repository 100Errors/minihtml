import frame from './utils/frame.js';
import gen from './utils/gen_code.js';
var currentHTML = null;
var currentCSS = null;
var currentJS = null;
// set = update :-/
var setCurrentHTML = (html) => {
    currentHTML = html;
    console.log(gen.html());
    frame.update(gen.html());
}
var setCurrentCSS = (css) => {
    currentCSS = css;
    console.log(gen.html());
    frame.update(gen.html());
}
var setCurrentJS = (js) => {
    currentJS = js;
    console.log(gen.html());
    frame.update(gen.html());
}
var getCurrentHTML = () => {
    return currentHTML;
}
var getCurrentCSS = () => {
    return currentCSS;
}
var getCurrentJS = () => {
    return currentJS;
}

export default {
    setCurrentHTML,
    setCurrentCSS,
    setCurrentJS,
    getCurrentHTML,
    getCurrentCSS,
    getCurrentJS
}