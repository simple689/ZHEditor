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
    // WidgetHistory._localStorage.clear();
    // alert(WidgetHistory._localStorage);

    // localStorage.removeItem("b");//清除b的值
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
WidgetHistory.setItem = function (key, value) {
    WidgetHistory._localStorage.setItem(key, value);
}
WidgetHistory.getItem = function (key) {
    return WidgetHistory._localStorage.getItem(key);
}
WidgetHistory.addFile = function (fileName, fileContent, historyItemFile) {
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
            fileList[key][WidgetKey._fileContent] = fileContent;
            break;
        }
    }
    if (!isExist) {
        var newFileJson = '{"' + WidgetKey._fileName + '":"' + fileName + '","' + WidgetKey._fileContent + '":""}';
        fileList.push(JSON.parse(newFileJson));
        var len = fileList.length;
        fileList[len - 1][WidgetKey._fileContent] = fileContent;
    }
    WidgetHistory._localStorage.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
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
    WidgetHistory._localStorage.setItem(historyItemFile, JSON.stringify(fileEditJson)); //转变为字符串存储
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
    var item = WidgetHistory.getItem(WidgetKey._fileBrowser);
    var jsonObj = JSON.parse('{}');
    if (item) {
        jsonObj = JSON.parse(item); // 通过parse获取json对应键值
    } else {
        var obj, list, index;

        jsonObj[WidgetKey._json] = {};
        obj = jsonObj[WidgetKey._json];
        obj[WidgetKey._type] = WidgetKey._folder;
        obj[WidgetKey._name] = "json"
        obj[WidgetKey._folderList] = new Array();
        obj[WidgetKey._fileList] = new Array();

        jsonObj[WidgetKey._jsonTemplate] = {};
        obj = jsonObj[WidgetKey._jsonTemplate];
        obj[WidgetKey._type] = WidgetKey._folder;
        obj[WidgetKey._name] = "json模版";
        obj[WidgetKey._folderList] = new Array();
        obj[WidgetKey._fileList] = new Array();

        jsonObj[WidgetKey._personal] = {};
        obj = jsonObj[WidgetKey._personal];
        obj[WidgetKey._type] = WidgetKey._folder;
        obj[WidgetKey._name] = "个人文件夹";
        obj[WidgetKey._folderList] = new Array();
        obj[WidgetKey._fileList] = new Array();

        list = jsonObj[WidgetKey._personal][WidgetKey._folderList];

        list.push({});
        index = list.length - 1;
        list[index][WidgetKey._type] = WidgetKey._folder;
        list[index][WidgetKey._name] = "json";

        list.push({});
        index = list.length - 1;
        list[index][WidgetKey._type] = WidgetKey._folder;
        list[index][WidgetKey._name] = "json模版";

        list = jsonObj[WidgetKey._json][WidgetKey._fileList];

        list.push({});
        index = list.length - 1;
        list[index][WidgetKey._type] = WidgetKey._file;
        list[index][WidgetKey._name] = "demo";
        list[index][WidgetKey._extend] = ".json";

        list = jsonObj[WidgetKey._jsonTemplate][WidgetKey._fileList];

        list.push({});
        index = list.length - 1;
        list[index][WidgetKey._type] = WidgetKey._file;
        list[index][WidgetKey._name] = "demo";
        list[index][WidgetKey._extend] = ".jsonConf";

        WidgetKey.setFileBrowser(jsonObj);
    }
    return jsonObj;
}
WidgetHistory.setFileBrowser = function (jsonObj) {
    var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    WidgetHistory.setItem(WidgetKey._fileBrowser, jsonStr);
}
