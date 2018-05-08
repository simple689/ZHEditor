function WidgetHistoryController() {
};
WidgetHistoryController.prototype.init = function () {
    alert("aa");
    this._fileSystem = new ActiveXObject("Scripting.FileSystemObject");
    LogController.log("a");
    // var f1 = this._fileSystem.createtextfile("c:\\myjstest.txt",true");
    // var file = this._fileSystem.Get;
    // GetFile("c:\\myjstest.txt");
    // alert("File last modified: " + f1.DateLastModified);

};
