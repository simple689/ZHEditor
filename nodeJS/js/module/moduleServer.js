var http = require('http');
var url = require('url');

const ModuleRouter = require('./moduleRouter.js');

function ModuleServer() {
}
module.exports = ModuleServer;

ModuleServer.prototype.create = function(httpCom, httpPort) {
    var httpObj = http.createServer(function(req, res) {
        console.log('[Server]req.url : ' + req.url);
        // var urls = req.url.split('?');
        var structServer = {
            "server": this,
            "req": req,
            "res": res,
            "params": null,
            "funcSuccess": ModuleServer.routerHandleSuccess
        };
        if (req.method === "GET") {
            var params = url.parse(req.url, true).query;
            structServer.params = params;
            ModuleRouter.handle(structServer);
        } else if (req.method === "POST") {
            var jsonStr = ""; // 暂存请求体信息
            req.on('data', function(chunk) { // 每当接收到请求体数据，累加到post中
                jsonStr += chunk;  // 一定要使用+=
                // console.log("chunk : ", chunk);
            });
            req.on('end', function() {
                console.log("[Server]post jsonStr : ", jsonStr);
                var jsonObj = JSON.parse(jsonStr); // 解析参数
                structServer.params = jsonObj;
                ModuleRouter.handle(structServer);
            });
        }
    });
    httpObj.listen(httpPort, httpCom, function() {
        console.log('[Server]running : http://' + httpCom + ':' + httpPort);
    })
}
ModuleServer.routerHandleSuccess = function(structServer, jsonObj) {
    var jsonStr = JSON.stringify(jsonObj);
    if (structServer.params.jsonpCallback) { // 请求为携带jsonp方法的http请求
        structServer.res.writeHead(200, {'Content-Type':'application/json;charset=utf-8'});
        var callback = structServer.params.jsonpCallback + '(' + jsonStr + ');';
        structServer.res.end(callback);
    } else {
        console.log('[Server]header : Access-Control-Allow-Origin');
        structServer.res.setHeader('Access-Control-Allow-Origin', '*');
        structServer.res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        structServer.res.end(jsonStr);    
    } 
}