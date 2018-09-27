(function () {
    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        module.exports = APIServer;
    }
})();

function APIServer() {
}

APIServer._module = {};
APIServer._mysql = {};
APIServer._user = {};
APIServer._fileBroser = {};

// 模块 module
APIServer._module._mysql = "mysql";
APIServer._module._fileSystem = "fileSystem";
APIServer._module._formData = "formData";
APIServer._module._user = "user";
APIServer._module._fileBrowser = "fileBrowser";

// 功能 mysql
APIServer._mysql._add = "add";
APIServer._mysql._del = "del";
APIServer._mysql._up = "up";
APIServer._mysql._query = "query";

// 功能 user
APIServer._user._login = "login";
APIServer._user._forgetPWD = "forgetPWD";
APIServer._user._register = "register";

// 功能 fileBroser
APIServer._fileBroser._all = "all";
APIServer._fileBroser._store = "store";
APIServer._fileBroser._personal = "personal";
