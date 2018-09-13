(function () {
    var root = typeof window === 'object' ? window : {};
    var js_node = typeof process === 'object' && process.versions && process.versions.node;
    if (js_node) {
        root = global;
    }

    var js_require = typeof require === 'function';
    if (js_require) {
        root.APIKey = require('../API/APIKey.js');
    }

    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        module.exports = APIData;
    }
})();

function APIData() {
}

APIData.fileBrowser = {};

// fileBrowser
APIData.fileBrowser.addFolder = function (jsonObj, key) {
    var list = jsonObj[APIKey._folderList];
    if (!list) {
        jsonObj[APIKey._folderList] = {}
        list = jsonObj[APIKey._folderList];
    }
    list[key] = {};
    var obj = list[key];
    obj[APIKey._type] = APIKey._folder;
    return obj;
}
APIData.fileBrowser.addFile = function (jsonObj, key, extend) {
    var list = jsonObj[APIKey._fileList];
    if (!list) {
        jsonObj[APIKey._fileList] = {}
        list = jsonObj[APIKey._fileList];
    }
    list[key] = {};
    var obj = list[key];
    obj[APIKey._extend] = extend;
}