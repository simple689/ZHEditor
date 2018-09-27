(function () {
    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        module.exports = APIData;
    }
})();

function APIData() {
}

APIData._module = "module";
APIData._func = "func";

APIData._type = "type";
APIData._data = "data";
// WidgetKey._title = "title";
APIData._extend = "extend";

APIData._fileList = "fileList";
APIData._folderList = "folderList";

APIData._folder = "folder";
// WidgetKey._file = "file";

// WidgetKey._fileName = "fileName";
// WidgetKey._fileContent = "fileContent";

// WidgetKey._json = "json";
APIData._jsonShow = "json";
// WidgetKey._jsonMould = "jsonMould";
APIData._jsonMouldShow = "json模版";

APIData._extendJson = ".json";
APIData._extendJsonMd = ".jsonMd";

APIData._userName = "userName";
APIData._userPWD = "userPWD";

APIData._store = "store";
APIData._personal = "personal";