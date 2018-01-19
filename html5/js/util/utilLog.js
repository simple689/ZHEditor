var utilLogController = {
    logFunc: function(str) {
        var regular = /function\s*(\w*)/i;
        var matches = regular.exec(str);
        if (matches[1].length) {
            console.debug(matches[1]);
        } else {
            console.debug(str);
        }
    },
    log: function(str) {
        console.log(str);
    },
    logDebug: function(str) {
        console.debug(str);
    },
    logInfo: function(str) {
        console.info(str);
    },
    logWarn: function(str) {
        console.warn(str);
    },
    logError: function(str) {
        console.error(str);
    },
};

// exe
//========
$(function() {
});
