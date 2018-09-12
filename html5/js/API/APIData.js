// const APIKey = require('../API/APIKey.js');
//
// module.exports = APIData;

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
    obj[APIKey._folderList] = {};
    obj[APIKey._fileList] = {};
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
