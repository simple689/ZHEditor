function WidgetLog() {
}
WidgetLog.init = function () {
}
WidgetLog.log = function (args) {
    console.log(args);
}
WidgetLog.debug = function (args) {
    console.debug(args);
}
WidgetLog.info = function (args) {
    console.info(args);
}
WidgetLog.warn = function (args) {
    console.warn(args);
}
WidgetLog.error = function (args) {
    console.error(args);
}
// WidgetLog.log = function (...args) {
//     console.log(...args);
// }
// WidgetLog.debug = function (...args) {
//     console.debug(...args);
// }
// WidgetLog.info = function (...args) {
//     console.info(...args);
// }
// WidgetLog.warn = function (...args) {
//     console.warn(...args);
// }
// WidgetLog.error = function (...args) {
//     console.error(...args);
// }
WidgetLog.func = function () {
    // WidgetLog.log(arguments.callee.caller);
    // var regular = /function\s*(\w*)/i;
    // var matches = regular.exec(str);
    // if (matches[1].length) {
    //     console.debug(matches[1]);
    // } else {
    //     console.debug(str);
    // }
}
