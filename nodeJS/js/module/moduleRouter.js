const APIServer = require('../API/APIServer.js');

const ModuleMysql = require('./moduleMysql.js');
const ModuleFileSystem = require('./moduleFileSystem.js');
const ModuleFormData = require('./moduleFormData.js');
const ModuleFileBrowser = require('./moduleFileBrowser.js');

module.exports = ModuleRouter;

function ModuleRouter() {
}

ModuleRouter.init = function(server) {
    ModuleMysql.init(server);
}

ModuleRouter.handle = function(structServer) {
    var jsonClientStr = JSON.stringify(structServer._jsonClient);
    console.log('[Server]jsonClient : ', jsonClientStr);
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
        structServer._funcSuccess(structServer);
    }
    if (router) {
        router.handle(structServer);
    }
}