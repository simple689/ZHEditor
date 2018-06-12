function LogCtrl() {
}
LogCtrl.init = function () {
}
LogCtrl.log = function (...args) {
    console.log(...args);
}
LogCtrl.debug = function (...args) {
    console.debug(...args);
}
LogCtrl.info = function (...args) {
    console.info(...args);
}
LogCtrl.warn = function (...args) {
    console.warn(...args);
}
LogCtrl.error = function (...args) {
    console.error(...args);
}
LogCtrl.func = function () {
    // LogCtrl.log(arguments.callee.caller);
    // var regular = /function\s*(\w*)/i;
    // var matches = regular.exec(str);
    // if (matches[1].length) {
    //     console.debug(matches[1]);
    // } else {
    //     console.debug(str);
    // }
}
