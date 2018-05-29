function WidgetFileJsonController() {
    this._menuFoldController = new WidgetMenuFoldController();
}
WidgetFileJsonController.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initControl();
}
WidgetFileJsonController.prototype.initControl = function () {
    var jsonObj = eval('(' + this._fileStr + ')');
    // LogController.log(jsonObj);
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    // var isShowDemo = false;
    // if (isShowDemo) {
    //     WidgetTableControl.addTitleTitle(fileContent, "demo", "demo");
    //     WidgetTableControl.addTitleInput(fileContent, "demo", "demo");
    // }
    var foldItem = this._menuFoldController.createMenuFold(elementFileRoot);
    this.readObject(jsonObj, "", foldItem);
}
// WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent, elementParent) {
//     var nodeTable = WidgetTableControlHtml.addTable(elementParent);
//     for (var o in jsonObj) {
//         var key = o;
//         var isStart = key.indexOf("$");
//         if (isStart == 0) {
//             continue;
//         }
//         var value = jsonObj[key];
//         if (typeof(value) == "object") {
//             var keyChild = keyParent;
//             keyChild += "->";
//             keyChild += key;
//             keyChild += "->";
//             var nodeRow = WidgetTableControlRow.addTitle(nodeTable, key);
//             var nodeCell = nodeRow.insertCell();
//             this.readObject(value, keyChild, nodeCell);
//         } else if (typeof(value) == "string") {
//             WidgetTableControlRow.addTitleInput(nodeTable, key, value, WidgetTableControlHtml._inputValueType.string);
//         } else if (typeof(value) == "number") {
//             WidgetTableControlRow.addTitleInput(nodeTable, key, value, WidgetTableControlHtml._inputValueType.number);
//         } else if (typeof(value) == "boolean") {
//             WidgetTableControlRow.addTitleInput(nodeTable, key, value, WidgetTableControlHtml._inputValueType.bool);
//         } else {
//             var strType = typeof(value);
//             LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
//         }
//     }
// }
WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent, elementParent) {
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
            var foldItem = this._menuFoldController.addFold(elementParent, key);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtmlControl.addTitle(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputValueType.string);
        } else if (typeof(value) == "number") {
            WidgetHtmlControl.addTitle(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputValueType.number);
        } else if (typeof(value) == "boolean") {
            WidgetHtmlControl.addTitle(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputValueType.bool);
        } else {
            var strType = typeof(value);
            LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
