function WidgetHistoryController() {
}
WidgetHistoryController._localStorage = null;

WidgetHistoryController._keyFileEdit = "fileEdit";
WidgetHistoryController._keyFileList = "fileList";
WidgetHistoryController._keyFileName = "fileName";
WidgetHistoryController._keyFileContent = "fileContent";

WidgetHistoryController.prototype.init = function () {
    WidgetHistoryController._localStorage = window.localStorage;
    if (WidgetHistoryController._localStorage) {
        LogController.log('This browser supports localStorage');
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
WidgetHistoryController.addFile = function (fileName, fileContent) {
    var fileEditItem = WidgetHistoryController._localStorage.getItem(WidgetHistoryController._keyFileEdit);
    if (!fileEditItem) {
        fileEditItem = '{"'+WidgetHistoryController._keyFileList+'":[{"'+WidgetHistoryController._keyFileName+'":"首页","'+WidgetHistoryController._keyFileContent+'":"首页内容"}]}';
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
        var newFileJson='{"'+WidgetHistoryController._keyFileName+'":"'+ fileName +'","'+WidgetHistoryController._keyFileContent+'":""}';
        fileList.push(JSON.parse(newFileJson));
        var len = fileList.length;
        fileList[len - 1][WidgetHistoryController._keyFileContent] = fileContent;
    }
    WidgetHistoryController._localStorage.setItem(WidgetHistoryController._keyFileEdit, JSON.stringify(fileEditJson)); //转变为字符串存储
}
WidgetHistoryController.getFile = function () {
    var fileEditItem = WidgetHistoryController._localStorage.getItem(WidgetHistoryController._keyFileEdit);
    if (!fileEditItem) {
        return null;
    }
    var fileEditJson = JSON.parse(fileEditItem);
    var fileList = fileEditJson[WidgetHistoryController._keyFileList];
    return fileList;
}
