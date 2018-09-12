const APIData = require('../API/APIData.js');
const APIKey = require('../API/APIKey.js');

const ModuleFileSystem = require('./moduleFileSystem.js');
const Util = require('../base/util.js');

module.exports = ModuleFileBrowser;

function ModuleFileBrowser() {
}

ModuleFileBrowser._jsonFileBroser = null;

ModuleFileBrowser.init = function(server) {
    var jsonObj = {};
    ModuleFileBrowser.initDir(server._conf._pathResFileBrowser, jsonObj);
    APIData.fileBrowser.addFolder(jsonObj, APIKey._personalFoldShow);
    ModuleFileBrowser._jsonFileBroser = jsonObj;
}
ModuleFileBrowser.initDir = function(readPath, jsonObj) {
    var files = ModuleFileSystem.getDirFilesSync(readPath);
    if (!files) {
        return;
    }
    files.forEach(function (file) {
        var filePath = readPath + '/' + file;
        var stat = ModuleFileSystem.getStat(filePath);
        if (ModuleFileSystem.isDir(stat)) {
            var jsonObjFold = APIData.fileBrowser.addFolder(jsonObj, file);
            ModuleFileBrowser.initDir(filePath, jsonObjFold);
        } else if (ModuleFileSystem.isFile(stat)) {
            var extend = Util.getFileExtend(file);
            APIData.fileBrowser.addFile(jsonObj, file, extend);
        }
    });
}

ModuleFileBrowser.prototype.handle = function(structServer) {
    structServer._funcSuccess(structServer);
}