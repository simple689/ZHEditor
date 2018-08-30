function WidgetFile() {
}

WidgetFile.readFile = function (file, elementTabTitle) {
    var fileNameList = file.name.split(".");
    var extendIndex = fileNameList.length - 1;
    var extend = "";
    if (extendIndex >= 0) {
        extend = fileNameList[extendIndex];
        extend = extend.toLowerCase();
    }

    var reader = new FileReader();
    reader._elementTabTitle = elementTabTitle;

    if (file.type.match("application/json") || extend.match("json")) {
        reader.onload = WidgetFile.loadedJson;
        reader.readAsText(file);
    } else if (file.type.match(/image*/)) {
        reader.onload = WidgetFile.loadedImg;
        reader.readAsDataURL(file);
    } else {
        reader.onload = WidgetFile.loadedFile;
        reader.readAsText(file);
    }
}
WidgetFile.readFileContent = function (fileContent, elementTabTitle, contentType) {
    var elementFileRoot = document.createElement("div");
    elementTabTitle._elementTabContent.appendChild(elementFileRoot);
    elementTabTitle._elementFileRoot = elementFileRoot;
    elementFileRoot.classList.add("widgetFileRoot");

    var extend = getFileExtend(elementTabTitle.innerHTML);
    if (extend == WidgetKey._extendJson) {
        elementTabTitle._fileCtrl = new WidgetFileJson();
    } else if (extend == WidgetKey._extendJsonMd) {
        elementTabTitle._fileCtrl = new WidgetFileJsonMould();
    }
    elementTabTitle._fileCtrl.init(elementTabTitle, fileContent, contentType);
    WidgetHistory.addFile(elementTabTitle.innerHTML, fileContent, contentType, elementTabTitle._widgetTab._panel._historyItem);
}
WidgetFile.loadedJson = function () {
    WidgetFile.createFileJsonCtrl(this);
    this._elementTabTitle._widgetTab._panel.loadedJson(this);
}
WidgetFile.loadedImg = function () {
    // var img = document.createElement("img");
    // img.classList.add("obj");
    // img.file = file;
    // console.log(reader.result);
    // img.src = reader.result;
}
WidgetFile.loadedFile = function (e) {
    if (WidgetFile.isJson(this.result)) {
        WidgetFile.createFileJsonCtrl(this);
    }
}
WidgetFile.createFileJsonCtrl = function (fileReader) {
    // WidgetLog.log(fileReader.result);
    WidgetFile.readFileContent(fileReader.result, fileReader._elementTabTitle, WidgetTab._addContentType.fileContent);
}
WidgetFile.isJson = function (fileStr) {
    var isjson = false;
    try {
        var jsonObj = JSON.parse(fileStr);
        isjson = typeof(jsonObj) == "object" && Object.prototype.toString.call(jsonObj).toLowerCase() == "[object object]" && fileStr.length > 0;
    } catch (exception) {
        isjson = false;
    }
    // WidgetLog.log("isjson = " + isjson);
    return isjson;
}
