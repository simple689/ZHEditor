module.exports = ModuleFileSystem;

var fs = require('fs');
var path = require('path') 

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

ModuleFileSystem.a = function(readPath) {
    files.forEach(function (file) {
        var filePath = path.normalize(ModuleFileSystem._runPath + readPath + '/' + file);
    });
}