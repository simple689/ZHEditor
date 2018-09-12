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
    structServer._funcComplete(structServer);
}

// [demo] getDirFiles
// ModuleFileSystem.getDirFiles(readPath, function(err, files) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     files.forEach(function (file) {
//         var filePath = readPath + '/' + file;
//     });
// });
ModuleFileSystem.getDirFiles = function(readPath, callback) {
    return ModuleFileSystem.getDirFilesFromRoot(ModuleFileSystem._runPath + readPath, callback);
}
ModuleFileSystem.getDirFilesFromRoot = function(readPath, callback) {
    var normalizePath = path.normalize(readPath);
    fs.readdir(normalizePath, function (err, files) {
        callback(err, files);
    });
}
ModuleFileSystem.getDirFilesSync = function(readPath) {
    return ModuleFileSystem.getDirFilesFromRootSync(ModuleFileSystem._runPath + readPath);
}
ModuleFileSystem.getDirFilesFromRootSync = function(readPath) {
    var normalizePath = path.normalize(readPath);
    return fs.readdirSync(normalizePath);
}
ModuleFileSystem.getStat = function(readPath) {
    return ModuleFileSystem.getStatFromRoot(ModuleFileSystem._runPath + readPath);
}
ModuleFileSystem.getStatFromRoot = function(readPath) {
    var normalizePath = path.normalize(readPath);
    return stat = fs.statSync(normalizePath);
}
ModuleFileSystem.isDir = function(stat) {
    return stat.isDirectory();
}
ModuleFileSystem.isFile = function(stat) {
    return stat.isFile();
}