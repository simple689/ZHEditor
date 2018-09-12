const APIServer = require('../API/APIServer.js');

const ModuleMysql = require('../module/moduleMysql.js');
const ModuleFileSystem = require('../module/moduleFileSystem.js');
const ModuleFormData = require('../module/moduleFormData.js');
const ModuleFileBrowser = require('../module/moduleFileBrowser.js');

module.exports = ModuleRouter;

function ModuleRouter() {
}

ModuleRouter.init = function(server) {
    ModuleMysql.init(server);
    ModuleFileBrowser.init(server);
}

ModuleRouter.handle = function(structServer) {
    var jsonClientStr = JSON.stringify(structServer._jsonClient);
    console.log('[server]jsonClient : ', jsonClientStr);
    if (structServer._jsonClient.module) {
        structServer._jsonServer.module = structServer._jsonClient.module;
    }
    var router = null;
    if (structServer._jsonClient.module === APIServer._module._mysql) {
        router = new ModuleMysql();
    } else if (structServer._jsonClient.module === APIServer._module._fileSystem) {
        router = new ModuleFileSystem();
    } else if (structServer._jsonClient.module === APIServer._module._formData) { // 暂时不用
        router = new ModuleFormData();
    } else if (structServer._jsonClient.module === APIServer._module._fileBrowser) {
        router = new ModuleFileBrowser();
    } else {
        structServer._funcComplete(structServer);
    }
    if (router) {
        router.handle(structServer);
    }
}

ModuleRouter.test = function() {
    // ModuleFileSystem.readDir('/res/fileBrowser');
}