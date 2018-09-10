var fs = require('fs');

function ModuleFileSystem() {
}
module.exports = ModuleFileSystem;

ModuleFileSystem.prototype.handle = function(structServer) {
    var jsonObj = {
        "module": "mismatch"
    };
    structServer.funcSuccess(structServer, jsonObj);
}