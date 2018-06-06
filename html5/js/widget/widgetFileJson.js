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
    var isShowDemo = true;
    if (isShowDemo) {
        WidgetHtmlControl.addLabel(elementFileRoot, "demo");
        WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.textString);
        WidgetHtmlControl.addInput(elementFileRoot, 689, WidgetHtmlControl._inputType.textNumber);
        WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.button);
        WidgetHtmlControl.addInput(elementFileRoot, false, WidgetHtmlControl._inputType.checkbox);
        WidgetHtmlControl.addInput(elementFileRoot, false, WidgetHtmlControl._inputType.radio);
        // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.file);
        // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.image);
        // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.password);
        // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.submit);
        // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.reset);
        WidgetHtmlControl.addInput(elementFileRoot, "#336699", WidgetHtmlControl._inputType.color);
        WidgetHtmlControl.addInput(elementFileRoot, "rgba(0, 255, 0, 0.6)", WidgetHtmlControl._inputType.color);
        WidgetHtmlControl.addSelect(elementFileRoot, "0123456", 6);
    }
    var foldItem = this._menuFoldController.createMenuFold(elementFileRoot, '');
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
//             var nodeRow = WidgetTableControlRow.addLabel(nodeTable, key);
//             var nodeCell = nodeRow.insertCell();
//             this.readObject(value, keyChild, nodeCell);
//         } else if (typeof(value) == "string") {
//             WidgetTableControlRow.addLabelInput(nodeTable, key, value, WidgetTableControlHtml._inputType.textString);
//         } else if (typeof(value) == "number") {
//             WidgetTableControlRow.addLabelInput(nodeTable, key, value, WidgetTableControlHtml._inputType.textNumber);
//         } else if (typeof(value) == "boolean") {
//             WidgetTableControlRow.addLabelInput(nodeTable, key, value, WidgetTableControlHtml._inputType.checkbox);
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
            WidgetHtmlControl.addLabel(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputType.textString);
        } else if (typeof(value) == "number") {
            WidgetHtmlControl.addLabel(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputType.textNumber);
        } else if (typeof(value) == "boolean") {
            WidgetHtmlControl.addLabel(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputType.checkbox);
        } else {
            var strType = typeof(value);
            LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
