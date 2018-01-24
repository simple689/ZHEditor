var logController = {
    logFunc: function(str) {
        var regular = /function\s*(\w*)/i;
        var matches = regular.exec(str);
        if (matches[1].length) {
            console.debug(matches[1]);
        } else {
            console.debug(str);
        }
    },
    log: function(...args) {
        console.log(...args);
    },
    logDebug: function(...args) {
        console.debug(...args);
    },
    logInfo: function(...args) {
        console.info(...args);
    },
    logWarn: function(...args) {
        console.warn(...args);
    },
    logError: function(...args) {
        console.error(...args);
    },
};

// exe
//========
$(function() {
});
