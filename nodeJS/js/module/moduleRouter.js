const ModuleMysql = require('./moduleMysql.js');
const ModuleFileSystem = require('./moduleFileSystem.js');
const ModuleFormData = require('./moduleFormData.js');
const ModuleFileBrowser = require('./moduleFileBrowser.js');

function ModuleRouter() {
}
module.exports = ModuleRouter;

ModuleRouter.handle = function(structServer) {
    structServer._jsonServer._module = structServer._jsonClient._module;
    var router = null;
    if (structServer._jsonClient.module === "Mysql") {
        router = new ModuleMysql();
    } else if (structServer._jsonClient.module === "FileSystem") {
        router = new ModuleFileSystem();
    } else if (structServer._jsonClient.module === "FormData") { // 暂时不用
        router = new ModuleFormData();
    } else if (structServer._jsonClient.module === "FileBrowser") {
        router = new ModuleFileBrowser();
    } else {
        structServer._funcSuccess(structServer);
    }
    if (router) {
        router.handle(structServer);
    }
}