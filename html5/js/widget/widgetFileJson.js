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
        WidgetHtmlControlTable.addTitleTitle(nodeRoot, "demo", "demo");
        WidgetHtmlControlTable.addTitleInput(nodeRoot, "demo", "demo");
    }
    this.readObject(jsonObj, "", nodeRoot);
};
WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent, elementParent) {
    var nodeTable = WidgetHtmlControl.addTable(elementParent);
    for (var o in jsonObj) {
        var key = o;
        var isStart = key.indexOf("$");
        if (isStart == 0) {
            continue;
        }
        var value = jsonObj[key];
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            var nodeRow = WidgetHtmlControlRow.addTitle(nodeTable, key);
            var nodeCell = nodeRow.insertCell();
            this.readObject(value, keyChild, nodeCell);
        } else if (typeof(value) == "string") {
            WidgetHtmlControlRow.addTitleInput(nodeTable, key, value, WidgetHtmlControl._inputValueType.string);
        } else if (typeof(value) == "number") {
            WidgetHtmlControlRow.addTitleInput(nodeTable, key, value, WidgetHtmlControl._inputValueType.number);
        } else {
            var strType = typeof(value);
            LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
};
