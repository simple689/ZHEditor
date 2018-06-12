function WidgetFileCtrl() {
}

WidgetFileCtrl.readFileContent = function (fileContent, elementTabTitle) {
    var elementFileRoot = document.createElement("div");
    elementTabTitle._elementTabContent.appendChild(elementFileRoot);
    elementTabTitle._elementFileRoot = elementFileRoot;
    elementFileRoot.classList.add("widgetFileRoot");

    elementTabTitle._fileJsonCtrl = new WidgetFileJsonCtrl();
    elementTabTitle._fileJsonCtrl.init(elementTabTitle, fileContent);
    WidgetHistoryCtrl.addFile(elementTabTitle.innerHTML, fileContent, elementTabTitle._widgetTabCtrl._panel._historyItemFile);
}
WidgetFileCtrl.readFile = function (file, elementTabTitle) {
    var fileNameAry = file.name.split(".");
    var extendIndex = fileNameAry.length - 1;
    var extend = "";
    if (extendIndex >= 0) {
        extend = fileNameAry[extendIndex];
        extend = extend.toLowerCase();
    }

    var reader = new FileReader();
    reader._elementTabTitle = elementTabTitle;

    if (file.type.match("application/json") || extend.match("json")) {
        reader.onload = WidgetFileCtrl.loadedJson;
        reader.readAsText(file);
    } else if (file.type.match(/image*/)) {
        reader.onload = WidgetFileCtrl.loadedImg;
        reader.readAsDataURL(file);
    } else {
        reader.onload = WidgetFileCtrl.loadedFile;
        reader.readAsText(file);
    }
}
WidgetFileCtrl.loadedJson = function () {
    WidgetFileCtrl.createFileJsonCtrl(this);
    this._elementTabTitle._widgetTabCtrl._panel.loadedJson(this);
}
WidgetFileCtrl.loadedImg = function () {
    // var img = document.createElement("img");
    // img.classList.add("obj");
    // img.file = file;
    // console.log(reader.result);
    // img.src = reader.result;
}
WidgetFileCtrl.loadedFile = function (e) {
    if (WidgetFileCtrl.isJson(this.result)) {
        WidgetFileCtrl.createFileJsonCtrl(this);
    }
}
WidgetFileCtrl.createFileJsonCtrl = function (fileReader) {
    // LogCtrl.log(fileReader.result);
    WidgetFileCtrl.readFileContent(fileReader.result, fileReader._elementTabTitle);
}
WidgetFileCtrl.isJson = function (fileStr) {
    var isjson = false;
    try {
        var jsonObj = JSON.parse(fileStr);
        isjson = typeof(jsonObj) == "object" && Object.prototype.toString.call(jsonObj).toLowerCase() == "[object object]" && fileStr.length > 0;
    } catch (exception) {
        isjson = false;
    }
    LogCtrl.log("isjson = " + isjson);
    return isjson;
}
