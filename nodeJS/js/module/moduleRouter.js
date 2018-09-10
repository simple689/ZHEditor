const ModuleMysql = require('./moduleMysql.js');
const ModuleFileSystem = require('./moduleFileSystem.js');
const ModuleFormData = require('./moduleFormData.js');
const ModuleFileBrowser = require('./moduleFileBrowser.js');

function ModuleRouter() {
}
module.exports = ModuleRouter;

ModuleRouter.handle = function(structServer) {
    var router = null;
    if (structServer.params.module === "Mysql") {
        router = new ModuleMysql();
    } else if (structServer.params.module === "FileSystem") {
        router = new ModuleFileSystem();
    } else if (structServer.params.module === "FormData") { // 暂时不用
        router = new ModuleFormData();
    } else if (structServer.params.module === "FileBrowser") {
        router = new ModuleFileBrowser();
    } else {
        var jsonObj = {
            "module": "mismatch"
        };
        structServer.funcSuccess(structServer, jsonObj);
    }
    if (router) {
        router.handle(structServer);
    }
}


// var mysql = require('mysql');
// var fs = require('fs');
// // 从数据库拿数据
// console.log('进来了！');
// db.query('select * from news', function(err, data) {
//     if (!err) {
//         // res.writeHead(200, {'Content-Type':'text/plain'});
//         // res.end('hello nodeJS 1');
//         res.write(JSON.stringify(data));
//         res.end();
//     }
// });
// // 从文件拿数据
// fs.readFile('www' + req.url, function(err, data) {
//     console.log('www' + req.url);
//     if (!err) {
//         res.write(data);
//         res.end();
//     } else {
//         res.write('404');
//         res.end();
//     }
// });