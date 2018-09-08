var http = require('http');
var querystring = require("querystring");
// var mysql = require('mysql');
// var fs = require('fs');
// var url = require('url');   

const ModuleRouter = require('./moduleRouter.js');

function ModuleServer() {
}
module.exports = ModuleServer;

ModuleServer.prototype.create = function(httpCom, httpPort) {
    var httpObj = http.createServer(function(req, res) {
        console.log('[Server]req.url : ' + req.url);
        var urlList = req.url.split('?');
        var qs = querystring.parse(urlList[1]);
        var structServer = {
            "server": this,
            "req": req,
            "res": res,
            "qs": qs,
            "funcSuccess": ModuleServer.routerHandleSuccess
        };
        ModuleRouter.handle(structServer);
    });
    httpObj.listen(httpPort, httpCom, function() {
        console.log('[Server]running : http://' + httpCom + ':' + httpPort);
    })
}
ModuleServer.routerHandleSuccess = function(structServer, jsonObj) {
    var jsonStr = JSON.stringify(jsonObj);
    if (structServer.qs.jsonpCallback) { // 请求为携带jsonp方法的http请求
        structServer.res.writeHead(200, {'Content-Type':'application/json;charset=utf-8'});
        var callback = structServer.qs.jsonpCallback + '(' + jsonStr + ');';
        structServer.res.end(callback);
    } else {
        structServer.res.setHeader('Access-Control-Allow-Origin', '*');
        structServer.res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        structServer.res.end(jsonStr);    
    } 
}
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