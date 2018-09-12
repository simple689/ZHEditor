module.exports = APIData;

function APIData() {
}

APIData.fileBrowser = {};

// fileBrowser
APIData.fileBrowser.addFolder = function (jsonObj, key) {
    jsonObj[key] = {};
    var obj = jsonObj[key];
    obj[APIKey._type] = APIKey._folder;
    obj[APIKey._folderList] = {};
    obj[APIKey._fileList] = {};
}
APIData.fileBrowser.addFolderList = function (jsonObj, key) {
    var list = jsonObj[APIKey._folderList];
    APIData.fileBrowser.addFolder(list, key);
}
APIData.fileBrowser.addFile = function (jsonObj, key, extend) {
    jsonObj[key] = {};
    var obj = jsonObj[key];
    obj[APIKey._extend] = extend;
}
APIData.fileBrowser.addFileList = function (jsonObj, key, extend) {
    var list = jsonObj[APIKey._fileList];
    APIData.fileBrowser.addFile(list, key, extend);
}
