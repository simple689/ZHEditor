function WidgetHistoryCtrl() {
}

WidgetHistoryCtrl._localStorage = null;

WidgetHistoryCtrl._itemFileEditor = "fileEditor";
WidgetHistoryCtrl._itemFileTemplate = "fileTemplate";
WidgetHistoryCtrl._itemFileBrowser = "fileBrowser";

WidgetHistoryCtrl._keyFileList = "fileList";
WidgetHistoryCtrl._keyFileName = "fileName";
WidgetHistoryCtrl._keyFileContent = "fileContent";

WidgetHistoryCtrl._keyJson = "json";
WidgetHistoryCtrl._keyJsonTemplate = "jsonTemplate";

WidgetHistoryCtrl._keyType = "type";
WidgetHistoryCtrl._keyName = "name";
WidgetHistoryCtrl._keyFolder = "folder";
WidgetHistoryCtrl._keyFile = "file";

WidgetHistoryCtrl.init = function () {
    WidgetHistoryCtrl._localStorage = window.localStorage;
    if (WidgetHistoryCtrl._localStorage) {
        // LogCtrl.log('This browser supports localStorage');
    } else {
        LogCtrl.log('This browser does NOT support localStorage');
    }
    // WidgetHistoryCtrl._localStorage.clear();
    // alert(WidgetHistoryCtrl._localStorage);

    // localStorage.setItem("b","isaac");//设置b为"isaac"
    // var b = localStorage.getItem("b");//获取b的值
    // localStorage.removeItem("b");//清除b的值
    // localStorage.clear();
    //
    // if (!localStorage.getItem("pageLoadCount")) {
    //     localStorage.setItem("pageLoadCount",0);
    // }
    // localStorage.pageLoadCount = parseInt(localStorage.getItem("pageLoadCount")) + 1;//必须格式转换
    //
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
WidgetHistoryCtrl.setItem = function (key, value) {
    WidgetHistoryCtrl._localStorage.setItem(key, value);
}
WidgetHistoryCtrl.getItem = function (key) {
    return WidgetHistoryCtrl._localStorage.getItem(key);
}
WidgetHistoryCtrl.addFile = function (fileName, fileContent, historyItemFile) {
    var fileEditItem = WidgetHistoryCtrl._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        fileEditItem = '{"' + WidgetHistoryCtrl._keyFileList + '":[{"' + WidgetHistoryCtrl._keyFileName + '":"首页","' + WidgetHistoryCtrl._keyFileContent + '":"首页内容"}]}';
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryCtrl._keyFileList];
    var isExist = false;
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetHistoryCtrl._keyFileName] == fileName) {
            isExist = true;
            fileList[key][WidgetHistoryCtrl._keyFileContent] = fileContent;
            break;
        }
    }
    if (!isExist) {
        var newFileJson = '{"' + WidgetHistoryCtrl._keyFileName + '":"' + fileName + '","' + WidgetHistoryCtrl._keyFileContent + '":""}';
        fileList.push(JSON.parse(newFileJson));
        var len = fileList.length;
        fileList[len - 1][WidgetHistoryCtrl._keyFileContent] = fileContent;
    }
    WidgetHistoryCtrl._localStorage.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistoryCtrl.delFile = function (elementTabTitle, historyItemFile) {
    var fileName = elementTabTitle.innerHTML;
    var fileEditItem = WidgetHistoryCtrl._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        return;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryCtrl._keyFileList];
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetHistoryCtrl._keyFileName] == fileName) {
            fileList.splice(key, 1);
            break;
        }
    }
    WidgetHistoryCtrl._localStorage.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistoryCtrl.getFile = function (historyItemFile) {
    var fileEditItem = WidgetHistoryCtrl._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        return null;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryCtrl._keyFileList];
    return fileList;
}
WidgetHistoryCtrl.getFileBrowser = function () {
    var item = WidgetHistoryCtrl.getItem(WidgetHistoryCtrl._itemFileBrowser);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    } else {
        var obj, list, index;

        jsonObj[WidgetHistoryCtrl._keyJson] = {};
        obj = jsonObj[WidgetHistoryCtrl._keyJson];
        obj[WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFolder;
        obj[WidgetHistoryCtrl._keyName] = "json"
        obj["folderList"] = new Array();
        obj["fileList"] = new Array();

        jsonObj[WidgetHistoryCtrl._keyJsonTemplate] = {};
        obj = jsonObj[WidgetHistoryCtrl._keyJsonTemplate];
        obj[WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFolder;
        obj[WidgetHistoryCtrl._keyName] = "json模版";
        obj["folderList"] = new Array();
        obj["fileList"] = new Array();

        jsonObj["personal"] = {};
        obj = jsonObj["personal"];
        obj[WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFolder;
        obj[WidgetHistoryCtrl._keyName] = "个人文件夹";
        obj["folderList"] = new Array();
        obj["fileList"] = new Array();

        list = jsonObj["personal"]["folderList"];

        list.push({});
        index = list.length - 1;
        list[index][WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFolder;
        list[index][WidgetHistoryCtrl._keyName] = "json";

        list.push({});
        index = list.length - 1;
        list[index][WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFolder;
        list[index][WidgetHistoryCtrl._keyName] = "json模版";

        list = jsonObj[WidgetHistoryCtrl._keyJson]["fileList"];

        list.push({});
        index = list.length - 1;
        list[index][WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFile;
        list[index][WidgetHistoryCtrl._keyName] = "demo";
        list[index]["extend"] = ".json";

        list = jsonObj[WidgetHistoryCtrl._keyJsonTemplate]["fileList"];

        list.push({});
        index = list.length - 1;
        list[index][WidgetHistoryCtrl._keyType] = WidgetHistoryCtrl._keyFile;
        list[index][WidgetHistoryCtrl._keyName] = "demo";
        list[index]["extend"] = ".jsonConf";

        WidgetHistoryCtrl.setFileBrowser(jsonObj);
    }
    return jsonObj;
}
WidgetHistoryCtrl.setFileBrowser = function (jsonObj) {
    var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    WidgetHistoryCtrl.setItem(WidgetHistoryCtrl._itemFileBrowser, jsonStr);
}
