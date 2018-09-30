function WidgetHistory() {
}

WidgetHistory._localStorage = null;

WidgetHistory.init = function () {
    WidgetHistory._localStorage = window.localStorage;
    if (!WidgetHistory._localStorage) {
        WidgetLog.log('This browser does not support localStorage');
    }
    // WidgetHistory.clearAll();
}
WidgetHistory.clearAll = function () {
    WidgetHistory._localStorage.clear();
    alert("清空历史记录完毕！");
}
WidgetHistory.clear = function (key, keyShow) {
    WidgetHistory._localStorage.removeItem(key);//清除值
    alert("清空【" + keyShow + "】的历史记录完毕！");
}
WidgetHistory.setItem = function (key, value) {
    WidgetHistory._localStorage.setItem(key, value);
}
WidgetHistory.getItem = function (key) {
    return WidgetHistory._localStorage.getItem(key);
}

WidgetHistory.addFile = function (fileName, fileContent, contentType, historyItemFile) {
    var fileEditItem = WidgetHistory.getItem(historyItemFile);
    if (!fileEditItem) {
        fileEditItem = '{"' + APIData._fileList + '":[{"' + WidgetKey._fileName + '":"首页","' + WidgetKey._fileContent + '":"首页内容"}]}';
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[APIData._fileList];
    var isExist = false;
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetKey._fileName] == fileName) {
            isExist = true;
            var fileStr = fileContent;
            if (contentType == WidgetTab._enumAddContentType.fileJsonObj) {
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
    var fileEditItem = WidgetHistory.getItem(historyItemFile);
    if (!fileEditItem) {
        return;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[APIData._fileList];
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
    var fileEditItem = WidgetHistory.getItem(historyItemFile);
    if (!fileEditItem) {
        return null;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[APIData._fileList];
    return fileList;
}
WidgetHistory.getFileBrowser = function () {
    var item = WidgetHistory.getItem(confPanelFileBrowser);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    } else {
        // todo 修正
        APIUtil.fileBrowser.addFolder(jsonObj, APIData._jsonShow);
        APIUtil.fileBrowser.addFolder(jsonObj, APIData._jsonMouldShow);
        APIUtil.fileBrowser.addFolder(jsonObj, APIData._personalShowFoldShow);

        var jsonObjFolderList = jsonObj[APIData._folderList];
        APIUtil.fileBrowser.addFolder(jsonObjFolderList[APIData._personalShowFoldShow], APIData._jsonShow);
        APIUtil.fileBrowser.addFolder(jsonObjFolderList[APIData._personalShowFoldShow], APIData._jsonMouldShow);

        APIUtil.fileBrowser.addFile(jsonObjFolderList[APIData._jsonShow], "demo.json", APIData._extendJson);
        APIUtil.fileBrowser.addFile(jsonObjFolderList[APIData._jsonMouldShow], "demo.jsonMd", APIData._extendJsonMd);

        WidgetHistory.setFileBrowser(jsonObj);
    }
    return jsonObj;
}
WidgetHistory.setFileBrowser = function (jsonObj) {
    var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    WidgetHistory.setItem(confPanelFileBrowser, jsonStr);
}

WidgetHistory.existFileBrowserFile = function (jsonObj, key, extend) {
    var list = jsonObj[APIData._fileList];
    for (var i in list) {
        var obj = list[i];
        if (obj[WidgetKey._key] == key && obj[APIData._extend] == extend) {
            return true;
        }
    }
    return false;
}
WidgetHistory.getFileJsonMould = function (fileName) {
    // todo
    var a = 0;
    // var item = WidgetHistory.getItem(WidgetKey._widgetFileJsonMould);
    // var jsonObj = JSON.parse('{}');
    // if (item) {
    //     jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    // }
    // return jsonObj[fileName];
}
WidgetHistory.setFileJsonMould = function (fileName, jsonMouldObj) {
    // todo
    var a = 0;
    // var item = WidgetHistory.getItem(WidgetKey._widgetFileJsonMould);
    // var jsonObj = JSON.parse('{}');
    // if (item) {
    //     jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    // }
    // jsonObj[fileName] = jsonMouldObj;
    // var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    // WidgetHistory.setItem(WidgetKey._widgetFileJsonMould, jsonStr);
}
