(function () {
    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        module.exports = APIKey;
    }
})();

function APIKey() {
}

APIKey._module = "module";
APIKey._func = "func";

APIKey._fileList = "fileList";
APIKey._folderList = "folderList";
// WidgetKey._fileName = "fileName";
// WidgetKey._fileContent = "fileContent";

// WidgetKey._json = "json";
APIKey._jsonShow = "json";
// WidgetKey._jsonMould = "jsonMould";
APIKey._jsonMouldShow = "json模版";
// WidgetKey._personalFolder = "personalFolder";
APIKey._personalFoldShow = "个人文件夹";

APIKey._extendJson = ".json";
APIKey._extendJsonMd = ".jsonMd";

APIKey._type = "type";
APIKey._data = "data";
// WidgetKey._title = "title";
APIKey._extend = "extend";

APIKey._folder = "folder";
// WidgetKey._file = "file";
