function WidgetHistory() {
}

WidgetHistory._localStorage = null;

WidgetHistory.init = function () {
    WidgetHistory._localStorage = window.localStorage;
    if (WidgetHistory._localStorage) {
        // Log.log('This browser supports localStorage');
    } else {
        Log.log('This browser does NOT support localStorage');
    }
    // localStorage.pageLoadCount = parseInt(localStorage.getItem("pageLoadCount")) + 1;//必须格式转换
    // if(window.addEventListener){
    //     window.addEventListener("localStorage", handle_storage, false);
    // }else if(window.attachEvent){
    //     window.attachEvent("onstorage", handle_storage);
    // }
    // function handle_storage(e){
    //     if(!e){e=window.event;}
    //     for (var i = 0; i < localStorage.length; i++) {
    //         //key(i)获得相应的键，再用getItem()方法获得对应的值
    //         document.write(localStorage.key(i)+ " : " + localStorage.getItem(localStorage.key(i)) + "<br>");
    //     }
    // }
}
WidgetHistory.clear = function () {
    // WidgetHistory._localStorage.clear();
    WidgetHistory._localStorage.removeItem(WidgetKey._panelFileEditor);//清除值
    WidgetHistory._localStorage.removeItem(WidgetKey._panelFileTemplate);
    WidgetHistory._localStorage.removeItem(WidgetKey._panelFileBrowser);
    WidgetHistory._localStorage.removeItem(WidgetKey._widgetFileJsonTemplate);
    alert("清空历史记录完毕！");
}
WidgetHistory.setItem = function (key, value) {
    WidgetHistory._localStorage.setItem(key, value);
}
WidgetHistory.getItem = function (key) {
    return WidgetHistory._localStorage.getItem(key);
}
WidgetHistory.addFile = function (fileName, fileContent, contentType, historyItemFile) {
    var fileEditItem = WidgetHistory._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        fileEditItem = '{"' + WidgetKey._fileList + '":[{"' + WidgetKey._fileName + '":"首页","' + WidgetKey._fileContent + '":"首页内容"}]}';
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetKey._fileList];
    var isExist = false;
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetKey._fileName] == fileName) {
            isExist = true;
            var fileStr = fileContent;
            if (contentType == WidgetTab._addContentType.fileJsonObj) {
                fileStr = JSON.stringify(fileContent);
            }
            fileList[key][WidgetKey._fileContent] = fileStr;
            break;
        }
    }
    if (!isExist) {
        var newFileJson = '{"' + WidgetKey._fileName + '":"' + fileName + '","' + WidgetKey._fileContent + '":""}';
        fileList.push(JSON.parse(newFileJson));
        var len = fileList.length;
        fileList[len - 1][WidgetKey._fileContent] = fileContent;
    }
    WidgetHistory.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistory.delFile = function (elementTabTitle, historyItemFile) {
    var fileName = elementTabTitle.innerHTML;
    var fileEditItem = WidgetHistory._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        return;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetKey._fileList];
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetKey._fileName] == fileName) {
            fileList.splice(key, 1);
            break;
        }
    }
    WidgetHistory.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistory.getFile = function (historyItemFile) {
    var fileEditItem = WidgetHistory._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        return null;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetKey._fileList];
    return fileList;
}
WidgetHistory.getFileBrowser = function () {
    var item = WidgetHistory.getItem(WidgetKey._panelFileBrowser);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    } else {
        WidgetHistory.addFileBrowserRootFolder(jsonObj, WidgetKey._json, "json");
        WidgetHistory.addFileBrowserRootFolder(jsonObj, WidgetKey._jsonTemplate, "json模版");
        WidgetHistory.addFileBrowserRootFolder(jsonObj, WidgetKey._personal, "个人文件夹");

        WidgetHistory.addFileBrowserFolder(jsonObj[WidgetKey._personal], "json");
        WidgetHistory.addFileBrowserFolder(jsonObj[WidgetKey._personal], "json模版");

        WidgetHistory.addFileBrowserFile(jsonObj[WidgetKey._json], "demo", WidgetFile._extendJson);
        WidgetHistory.addFileBrowserFile(jsonObj[WidgetKey._jsonTemplate], "demo", WidgetFile._extendJsonConf);

        WidgetHistory.setFileBrowser(jsonObj);
    }
    return jsonObj;
}
WidgetHistory.setFileBrowser = function (jsonObj) {
    var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    WidgetHistory.setItem(WidgetKey._panelFileBrowser, jsonStr);
}
WidgetHistory.addFileBrowserRootFolder = function (jsonObj, key, title) {
    jsonObj[key] = {};
    var obj = jsonObj[key];
    obj[WidgetKey._type] = WidgetKey._folder;
    obj[WidgetKey._title] = title
    obj[WidgetKey._folderList] = new Array();
    obj[WidgetKey._fileList] = new Array();
}
WidgetHistory.addFileBrowserFolder = function (jsonObj, title) {
    var list = jsonObj[WidgetKey._folderList];
    list.push({});
    var index = list.length - 1;
    list[index][WidgetKey._type] = WidgetKey._folder;
    list[index][WidgetKey._title] = title;
    list[index][WidgetKey._folderList] = new Array();
    list[index][WidgetKey._fileList] = new Array();
}
WidgetHistory.existFileBrowserFile = function (jsonObj, title, extend) {
    var list = jsonObj[WidgetKey._fileList];
    for (var i in list) {
        var obj = list[i];
        if (obj[WidgetKey._title] == title && obj[WidgetKey._extend] == extend) {
            return true;
        }
    }
    return false;
}
WidgetHistory.addFileBrowserFile = function (jsonObj, title, extend) {
    var list = jsonObj[WidgetKey._fileList];
    list.push({});
    var index = list.length - 1;
    list[index][WidgetKey._title] = title;
    list[index][WidgetKey._extend] = extend;
}
WidgetHistory.getFileJsonTemplate = function (fileName) {
    var item = WidgetHistory.getItem(WidgetKey._widgetFileJsonTemplate);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    }
    return jsonObj[fileName];
}
WidgetHistory.setFileJsonTemplate = function (fileName, jsonTemplateObj) {
    var item = WidgetHistory.getItem(WidgetKey._widgetFileJsonTemplate);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    }
    jsonObj[fileName] = jsonTemplateObj;
    var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    WidgetHistory.setItem(WidgetKey._widgetFileJsonTemplate, jsonStr);
}
