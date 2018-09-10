function ModuleFileBrowser() {
}
module.exports = ModuleFileBrowser;

ModuleFileBrowser.prototype.handle = function(structServer) {
    var jsonObj = {
        "module": "mismatch"
    };
    structServer.funcSuccess(structServer, jsonObj);
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

// ModuleFileBrowser.getFileBrowser = function () {
//     // todo 从数据库获取
//     var item = WidgetHistory.getItem(WidgetKey._panelFileBrowser);
//     var jsonObj = JSON.parse('{}');
//     if (item) {
//         jsonObj = JSON.parse(item); // 通过parse获取json对应键值
//     } else {
//         WidgetHistory.addFileBrowserFolder(jsonObj, WidgetKey._jsonShow);
//         WidgetHistory.addFileBrowserFolder(jsonObj, WidgetKey._jsonMouldShow);
//         WidgetHistory.addFileBrowserFolder(jsonObj, WidgetKey._personalFoldShow);

//         WidgetHistory.addFileBrowserFolderList(jsonObj[WidgetKey._personalFoldShow], WidgetKey._jsonShow);
//         WidgetHistory.addFileBrowserFolderList(jsonObj[WidgetKey._personalFoldShow], WidgetKey._jsonMouldShow);

//         WidgetHistory.addFileBrowserFileList(jsonObj[WidgetKey._jsonShow], "demo", WidgetKey._extendJson);
//         WidgetHistory.addFileBrowserFileList(jsonObj[WidgetKey._jsonMouldShow], "demo", WidgetKey._extendJsonMd);

//         WidgetHistory.setFileBrowser(jsonObj);
//     }
//     return jsonObj;
// }