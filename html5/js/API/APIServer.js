// module.exports = APIServer;

function APIServer() {
}

APIServer._module = {};
APIServer._mysql = {};

// 模块 module
APIServer._module._mysql = "mysql";
APIServer._module._fileSystem = "fileSystem";
APIServer._module._formData = "formData";
APIServer._module._fileBrowser = "fileBrowser";

// 功能 mysql
APIServer._mysql._add = "add";
APIServer._mysql._del = "del";
APIServer._mysql._up = "up";
APIServer._mysql._query = "query";
