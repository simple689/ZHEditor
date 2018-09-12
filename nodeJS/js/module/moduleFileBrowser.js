module.exports = ModuleFileBrowser;

const APIData = require('../API/APIData.js');
const APIKey = require('../API/APIKey.js');

function ModuleFileBrowser() {
}

ModuleFileBrowser._jsonFileBroser = null;

ModuleFileBrowser.init = function(server) {
    var jsonObj = {};
    APIData.fileBrowser.addFolder(jsonObj, APIKey._jsonShow);
    APIData.fileBrowser.addFolder(jsonObj, APIKey._jsonMouldShow);
    APIData.fileBrowser.addFolder(jsonObj, APIKey._personalFoldShow);

    APIData.fileBrowser.addFolderList(jsonObj[APIKey._personalFoldShow], APIKey._jsonShow);
    APIData.fileBrowser.addFolderList(jsonObj[APIKey._personalFoldShow], APIKey._jsonMouldShow);

    APIData.fileBrowser.addFileList(jsonObj[APIKey._jsonShow], "demo", APIKey._extendJson);
    APIData.fileBrowser.addFileList(jsonObj[APIKey._jsonMouldShow], "demo", APIKey._extendJsonMd);

    ModuleFileBrowser._jsonFileBroser = jsonObj;
}

ModuleFileBrowser.prototype.handle = function(structServer) {
    structServer._funcSuccess(structServer);
}