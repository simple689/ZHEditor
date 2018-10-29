const fs = require('fs')

console.log('hello world! aaa')
module.exports = EditorFileSystem;

function EditorFileSystem() {
}

// 创建目录结构
EditorFileSystem.mkdirs = function(pathDir, callback) {
  var dirAry = pathDir.split('/');
  fs.exists(pathDir, function(exists) {
    if (exists) {
      console.log('文件夹已存在！');
      callback();
    } else {
      EditorFileSystem.mkdir(0, dirAry, function() {
        console.log('文件夹创建完毕！');
        callback();
      });
    }
  });
}
// 创建文件夹
EditorFileSystem.mkdir = function(index, dirAry, callback) {
  var len = dirAry.length;
  console.log(len);
  if (index >= len || index > 10) {
    callback();
    return;
  }
  var currentDir = '';
  for (var i = 0; i <= index; i++) {
    if (i != 0) {
      currentDir += '/';
    }
    currentDir += dirAry[i];
  }
  if (currentDir.length == 0) {
    EditorFileSystem.mkdir(index + 1, dirAry, callback);
  }
  fs.exists(currentDir, function(exists) {
    if (exists) {
      console.log(currentDir + '文件夹已存在！');
      EditorFileSystem.mkdir(index + 1, dirAry, callback);
    } else {
      fs.mkdir(currentDir, function(err) {
        if (err) {
          console.log('创建文件夹出错！');
        } else {
          console.log(currentDir + '文件夹创建成功！');
          EditorFileSystem.mkdir(index + 1, dirAry, callback);
        }
      });
    }
  });
}

EditorFileSystem.readFile = function(pathFile, callback) {
  fs.readFile(pathFile, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    callback(err, data);
  });
}

EditorFileSystem.writeFile = function(pathFile, data, callback) {
  fs.writeFile(pathFile, data, function (err) {
    if (err) {
      console.log(err);
    }
    callback(err);
  });
}
