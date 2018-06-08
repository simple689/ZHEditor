function WidgetHistoryController() {
}

WidgetHistoryController._localStorage = null;

WidgetHistoryController._itemFileEditor = "fileEditor";
WidgetHistoryController._itemFileTemplate = "fileTemplate";
WidgetHistoryController._itemFileBrowser = "fileBrowser";

WidgetHistoryController._keyFileList = "fileList";
WidgetHistoryController._keyFileName = "fileName";
WidgetHistoryController._keyFileContent = "fileContent";

WidgetHistoryController.init = function () {
    WidgetHistoryController._localStorage = window.localStorage;
    if (WidgetHistoryController._localStorage) {
        // LogController.log('This browser supports localStorage');
    } else {
        LogController.log('This browser does NOT support localStorage');
    }
    // WidgetHistoryController._localStorage.clear();
    // alert(WidgetHistoryController._localStorage);

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
WidgetHistoryController.setItem = function (key, value) {
    WidgetHistoryController._localStorage.setItem(key, value);
}
WidgetHistoryController.getItem = function (key) {
    return WidgetHistoryController._localStorage.getItem(key);
}
WidgetHistoryController.addFile = function (fileName, fileContent, historyItemFile) {
    var fileEditItem = WidgetHistoryController._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        fileEditItem = '{"' + WidgetHistoryController._keyFileList + '":[{"' + WidgetHistoryController._keyFileName + '":"首页","' + WidgetHistoryController._keyFileContent + '":"首页内容"}]}';
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryController._keyFileList];
    var isExist = false;
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetHistoryController._keyFileName] == fileName) {
            isExist = true;
            fileList[key][WidgetHistoryController._keyFileContent] = fileContent;
            break;
        }
    }
    if (!isExist) {
        var newFileJson = '{"' + WidgetHistoryController._keyFileName + '":"' + fileName + '","' + WidgetHistoryController._keyFileContent + '":""}';
        fileList.push(JSON.parse(newFileJson));
        var len = fileList.length;
        fileList[len - 1][WidgetHistoryController._keyFileContent] = fileContent;
    }
    WidgetHistoryController._localStorage.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistoryController.delFile = function (elementTabTitle, historyItemFile) {
    var fileName = elementTabTitle.innerHTML;
    var fileEditItem = WidgetHistoryController._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        return;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryController._keyFileList];
    for (var o in fileList) {
        var key = o;
        if (fileList[key][WidgetHistoryController._keyFileName] == fileName) {
            fileList.splice(key, 1);
            break;
        }
    }
    WidgetHistoryController._localStorage.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistoryController.getFile = function (historyItemFile) {
    var fileEditItem = WidgetHistoryController._localStorage.getItem(historyItemFile);
    if (!fileEditItem) {
        return null;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryController._keyFileList];
    return fileList;
}
WidgetHistoryController.getFileBrowser = function () {
    var item = WidgetHistoryController.getItem(WidgetHistoryController._itemFileBrowser);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    } else {
        var obj, list, index;

        jsonObj["json"] = {};
        obj = jsonObj["json"];
        obj["type"] = "folder";
        obj["name"] = "json"
        obj["folderList"] = new Array();
        obj["fileList"] = new Array();

        jsonObj["jsonTemplate"] = {};
        obj = jsonObj["jsonTemplate"];
        obj["type"] = "folder";
        obj["name"] = "json模版";
        obj["folderList"] = new Array();
        obj["fileList"] = new Array();

        jsonObj["personal"] = {};
        obj = jsonObj["personal"];
        obj["type"] = "folder";
        obj["name"] = "个人文件夹";
        obj["folderList"] = new Array();
        obj["fileList"] = new Array();

        list = jsonObj["personal"]["folderList"];

        list.push({});
        index = list.length - 1;
        list[index]["type"] = "folder";
        list[index]["name"] = "json";

        list.push({});
        index = list.length - 1;
        list[index]["type"] = "folder";
        list[index]["name"] = "json模版";

        list = jsonObj["json"]["fileList"];

        list.push({});
        index = list.length - 1;
        list[index]["type"] = "file";
        list[index]["name"] = "demo";
        list[index]["extend"] = ".json";

        list = jsonObj["jsonTemplate"]["fileList"];

        list.push({});
        index = list.length - 1;
        list[index]["type"] = "file";
        list[index]["name"] = "demo";
        list[index]["extend"] = ".jsonConf";

        WidgetHistoryController.setFileBrowser(jsonObj);
    }
    return jsonObj;
}
WidgetHistoryController.setFileBrowser = function (jsonObj) {
    var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    WidgetHistoryController.setItem(WidgetHistoryController._itemFileBrowser, jsonStr);
}
