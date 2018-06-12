function Log() {
}
Log.init = function () {
}
Log.log = function (...args) {
    console.log(...args);
}
Log.debug = function (...args) {
    console.debug(...args);
}
Log.info = function (...args) {
    console.info(...args);
}
Log.warn = function (...args) {
    console.warn(...args);
}
Log.error = function (...args) {
    console.error(...args);
}
Log.func = function () {
    // Log.log(arguments.callee.caller);
    // var regular = /function\s*(\w*)/i;
    // var matches = regular.exec(str);
    // if (matches[1].length) {
    //     console.debug(matches[1]);
    // } else {
    //     console.debug(str);
    // }
}
