var fs = require('fs');

function ModuleFileSystem() {
}
module.exports = ModuleFileSystem;

ModuleFileSystem.prototype.handle = function(structServer) {
    structServer._funcSuccess(structServer);
}

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