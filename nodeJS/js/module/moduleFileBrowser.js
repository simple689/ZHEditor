const APIClient = require('../API/APIClient.js');
const APIData = require('../API/APIData.js');
const APIServer = require('../API/APIServer.js');
const APIUtil = require('../API/APIUtil.js');
const Util = require('../base/util.js');

const ModuleFileSystem = require('./moduleFileSystem.js');

module.exports = ModuleFileBrowser;

function ModuleFileBrowser() {
}

ModuleFileBrowser._jsonStore = null;
ModuleFileBrowser._jsonPersonal = null;

ModuleFileBrowser.init = function(server) {
    ModuleFileBrowser._jsonStore = {};
    ModuleFileBrowser.initDir(server._conf._pathResStore, ModuleFileBrowser._jsonStore);

    ModuleFileBrowser._jsonPersonal = {};
    // APIUtil.fileBrowser.addFolder(ModuleFileBrowser._jsonPersonal, APIData._personalShow);
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
            var jsonObjFold = APIUtil.fileBrowser.addFolder(jsonObj, file);
            ModuleFileBrowser.initDir(filePath, jsonObjFold);
        } else if (ModuleFileSystem.isFile(stat)) {
            if (file === ".DS_Store") {
                return;
            }
            var extend = Util.getFileExtend(file);
            APIUtil.fileBrowser.addFile(jsonObj, file, extend);
        }
    });
}

ModuleFileBrowser.prototype.handle = function(structServer) {
    structServer._jsonServer[APIData._data] = {};

    var func = structServer._jsonClient[APIData._func];
    if (func === APIServer._fileBroser._all) {
        structServer._jsonServer[APIData._data][APIData._storeShow] = ModuleFileBrowser._jsonStore;
        structServer._jsonServer[APIData._data][APIData._personalShow] = ModuleFileBrowser._jsonPersonal;
    } else if (func === APIServer._fileBroser._store) {
        structServer._jsonServer[APIData._data][APIData._storeShow] = ModuleFileBrowser._jsonStore;
    } else if (func === APIServer._fileBroser._personal) {
        structServer._jsonServer[APIData._data][APIData._personalShow] = ModuleFileBrowser._jsonPersonal;
    }
    
    structServer._funcComplete(structServer);
}