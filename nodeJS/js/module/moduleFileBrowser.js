const API = require('../API/API.js');
const APIData = require('../API/APIData.js');
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

    var funcStr = structServer._jsonClient[APIData._func];
    if (funcStr === API._func._fileBrowser._query) {
        this.query(structServer);
    } else if (funcStr === API._func._fileBrowser._up) {
        this.up(structServer);
    }

    structServer._funcComplete(structServer);
}
ModuleFileBrowser.prototype.query = function(structServer) {
    var typeStr = structServer._jsonClient[APIData._type];

    if (typeStr === API._fileBrowser._type._all) {
        structServer._jsonServer[APIData._data][APIData._storeShow] = ModuleFileBrowser._jsonStore;
        structServer._jsonServer[APIData._data][APIData._personalShow] = ModuleFileBrowser._jsonPersonal;
    } else if (typeStr === API._fileBrowser._type._store) {
        structServer._jsonServer[APIData._data][APIData._storeShow] = ModuleFileBrowser._jsonStore;
    } else if (typeStr === API._fileBrowser._type._personal) {
        structServer._jsonServer[APIData._data][APIData._personalShow] = ModuleFileBrowser._jsonPersonal;
    }
}
ModuleFileBrowser.prototype.up = function(structServer) {
    var typeStr = structServer._jsonClient[APIData._type];

    if (typeStr === API._fileBrowser._type._all) {
        ModuleFileBrowser._jsonStore = structServer._jsonClient[APIData._data][APIData._storeShow];
        ModuleFileBrowser._jsonPersonal = structServer._jsonClient[APIData._data][APIData._personalShow];
    } else if (typeStr === API._fileBrowser._type._store) {
        ModuleFileBrowser._jsonStore = structServer._jsonClient[APIData._data];
    } else if (typeStr === API._fileBrowser._type._personal) {
        ModuleFileBrowser._jsonPersonal = structServer._jsonClient[APIData._data];
    }
    // todo 存入数据库
    
}