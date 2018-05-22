function WidgetFileJsonController() {
};
WidgetFileJsonController.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initControl();
};
WidgetFileJsonController.prototype.initControl = function () {
    var jsonObj = eval('(' + this._fileStr + ')');
    // LogController.log(jsonObj);
    var nodeRoot = this._elementTabTitle._elementContent;
    var isShowDemo = false;
    if (isShowDemo) {
        widgetHtmlControlTable.addTitleTitle(nodeRoot, "demo", "demo");
        widgetHtmlControlTable.addTitleInput(nodeRoot, "demo", "demo");
    }
    this.readObject(jsonObj, "", nodeRoot);
};
WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent, elementParent) {
    var nodeTable = widgetHtmlControl.addTable(elementParent);
    for (var o in jsonObj) {
        var key = o;
        var value = jsonObj[key]
        LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            var nodeRow = widgetHtmlControlRow.addTitle(nodeTable, key);
            var nodeCell = nodeRow.insertCell();
            this.readObject(value, keyChild, nodeCell);
        } else if (typeof(value) == "string") {
            widgetHtmlControlRow.addTitleInput(nodeTable, key, value);
        }
    }
};
