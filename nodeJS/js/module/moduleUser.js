const APIUtil = require('../API/APIUtil.js');
const APIData = require('../API/APIData.js');

const ModuleMysql = require('./moduleMysql.js');
const Util = require('../base/util.js');

module.exports = ModuleUser;

function ModuleUser() {
}

ModuleUser.init = function(server) {
}

ModuleUser.prototype.handle = function(structServer) {
    var func = structServer._jsonClient[APIData._func];
    if (func === APIServer._user._login) {
        this.login(structServer);
    } else if (func === APIServer._user._forgetPWD) {
        this.forgetPWD(structServer);
    } else if (func === APIServer._user._register) {
        this.register(structServer);
    }
}
ModuleUser.prototype.login = function(structServer) {
    var jsonObj = structServer._jsonClient;
    var userName = jsonObj[APIData._userName];
    var userPWD = jsonObj[APIData._userPWD];
    // todo 读取数据库 未来加token
    structServer._jsonServer[APIData._data] = {};
    structServer._funcComplete(structServer);
}
ModuleUser.prototype.forgetPWD = function(structServer) {
}
ModuleUser.prototype.register = function(structServer) {
}