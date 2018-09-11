var fs = require('fs');
var path = require('path') 

module.exports = ModuleFileSystem;

function ModuleFileSystem() {
}

ModuleFileSystem._runPath = process.cwd();

ModuleFileSystem.prototype.handle = function(structServer) {
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
    structServer._funcSuccess(structServer);
}

ModuleFileSystem.getDirFiles = function(readPath) {
    return ModuleFileSystem.getDirFilesFromRoot(ModuleFileSystem._runPath + readPath);
}
ModuleFileSystem.getDirFilesFromRoot = function(readPath) {
    fs.readdir(readPath, function (err, files) {
        if (err) {
            console.error(err);
            return null;
        }
        return files;
    });
}

ModuleFileSystem.isDir = function(readPath) {
    files.forEach(function (file) {
        var filePath = path.normalize(ModuleFileSystem._runPath + readPath + '/' + file);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            console.log(filePath + ' is: ' + 'file');
        }
        if (stat.isDirectory()) {
            console.log(filePath + ' is: ' + 'dir');
        }
    });
}