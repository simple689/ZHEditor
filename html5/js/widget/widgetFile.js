function WidgetFileController() {
}

WidgetFileController.readFileContent = function (fileContent, elementTabTitle) {
    var elementFileRoot = document.createElement("div");
    elementTabTitle._elementTabContent.appendChild(elementFileRoot);
    elementTabTitle._elementFileRoot = elementFileRoot;
    elementFileRoot.classList.add("widgetFileRoot");

    elementTabTitle._fileJsonController = new WidgetFileJsonController();
    elementTabTitle._fileJsonController.init(elementTabTitle, fileContent);
    WidgetHistoryController.addFile(elementTabTitle.innerHTML, fileContent, elementTabTitle._widgetTabController._panel._historyItemFile);
}
WidgetFileController.readFile = function (file, elementTabTitle) {
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
        reader.onload = WidgetFileController.loadJson;
        reader.readAsText(file);
    } else if (file.type.match(/image*/)) {
        reader.onload = WidgetFileController.loadImg;
        reader.readAsDataURL(file);
    } else {
        reader.onload = WidgetFileController.load;
        reader.readAsText(file);
    }
}
WidgetFileController.loadJson = function () {
    WidgetFileController.createFileJsonController(this);
}
WidgetFileController.loadImg = function () {
    // var img = document.createElement("img");
    // img.classList.add("obj");
    // img.file = file;
    // console.log(reader.result);
    // img.src = reader.result;
}
WidgetFileController.load = function (e) {
    if (WidgetFileController.isJson(this.result)) {
        WidgetFileController.createFileJsonController(this);
    }
}
WidgetFileController.createFileJsonController = function (fileReader) {
    // LogController.log(fileReader.result);
    WidgetFileController.readFileContent(fileReader.result, fileReader._elementTabTitle);
}
WidgetFileController.isJson = function (fileStr) {
    var isjson = false;
    try {
        var jsonObj = eval('(' + fileStr + ')');
        isjson = typeof(jsonObj) == "object" && Object.prototype.toString.call(jsonObj).toLowerCase() == "[object object]" && fileStr.length > 0;
    } catch (exception) {
        isjson = false;
    }
    LogController.log("isjson = " + isjson);
    return isjson;
}
