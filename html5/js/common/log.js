function LogController() {
};
LogController.log = function (...args) {
    console.log(...args);
};
LogController.debug = function (...args) {
    console.debug(...args);
};
LogController.info = function (...args) {
    console.info(...args);
};
LogController.warn = function (...args) {
    console.warn(...args);
};
LogController.error = function (...args) {
    console.error(...args);
};
LogController.func = function () {
    // LogController.log(arguments.callee.caller);
    // var regular = /function\s*(\w*)/i;
    // var matches = regular.exec(str);
    // if (matches[1].length) {
    //     console.debug(matches[1]);
    // } else {
    //     console.debug(str);
    // }
};
