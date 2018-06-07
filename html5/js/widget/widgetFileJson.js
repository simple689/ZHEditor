function WidgetFileJsonController() {
    this._menuFoldController = new WidgetMenuFoldController();
}

WidgetFileJsonController.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initControl();
    this._menuLabel = WidgetMenuController.createMenu(document.body, "../../../widget/widgetFileJson/menuJsonLabel.html");
    this._menuInput = WidgetMenuController.createMenu(document.body, "../../../widget/widgetFileJson/menuJsonInput.html");
}
WidgetFileJsonController.prototype.initControl = function () {
    var jsonObj = eval('(' + this._fileStr + ')');
    // LogController.log(jsonObj);
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    var isShowDemo = false;
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

    if (this._elementTabTitle._widgetTabController._panel._fileTemplatePanel) {
        this.initFileTemplate(jsonObj);
    }
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
            if (Array.isArray(value)) {
                LogController.log(value);
            }
            var foldItem = this._menuFoldController.addFold(elementParent, key);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtmlControl.addLabel(elementParent, this, WidgetFileJsonController.elementLabelOnContextMenu, key);
            WidgetHtmlControl.addInput(elementParent, this, WidgetFileJsonController.elementInputOnContextMenu, value, WidgetHtmlControl._inputType.textString);
        } else if (typeof(value) == "number") {
            WidgetHtmlControl.addLabel(elementParent, this, WidgetFileJsonController.elementLabelOnContextMenu, key);
            WidgetHtmlControl.addInput(elementParent, this, WidgetFileJsonController.elementInputOnContextMenu, value, WidgetHtmlControl._inputType.textNumber);
        } else if (typeof(value) == "boolean") {
            WidgetHtmlControl.addLabel(elementParent, this, WidgetFileJsonController.elementLabelOnContextMenu, key);
            WidgetHtmlControl.addInput(elementParent, this, WidgetFileJsonController.elementInputOnContextMenu, value, WidgetHtmlControl._inputType.checkbox);
        } else {
            var strType = typeof(value);
            LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
WidgetFileJsonController.elementLabelOnContextMenu = function (e) {
    WidgetMenuController.showMenu(this._fileController._menuLabel, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonController.elementInputOnContextMenu = function (e) {
    WidgetMenuController.showMenu(this._fileController._menuInput, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonController.prototype.initFileTemplate = function (jsonObj) {
    this._jsonTemplateStr = '{}';
    var jsonTemplateObj = JSON.parse(this._jsonTemplateStr, null); // 通过parse获取json对应键值

    jsonTemplateObj["ignore"] = {};
    jsonTemplateObj["ignore"]["beginList"] = new Array();
    jsonTemplateObj["ignore"]["beginList"].push("$");

    jsonTemplateObj["file"] = {};
    this.createFileTemplate(jsonObj, jsonTemplateObj, "", jsonTemplateObj["file"]);

    this._jsonTemplateStr = JSON.stringify(jsonTemplateObj); // 将字符串对象转换为JSON对象
    // LogController.log("========================================");
    // LogController.log(JSON.stringify(jsonTemplateObj, null, 2));
    // LogController.log("========================================");

    var templatePanel = this._elementTabTitle._widgetTabController._panel._fileTemplatePanel;
    var elementTabTitle = templatePanel._widgetTabController.addTitle(this._elementTabTitle.innerHTML + ".jsonConf");
    templatePanel._widgetTabController.addContent(elementTabTitle, this._jsonTemplateStr, WidgetTabController._addContentType.fileContent);
}
WidgetFileJsonController.prototype.createFileTemplate = function (jsonObj, jsonTemplateObj, keyParent, jsonObjParent) {
    for (var o in jsonObj) {
        var key = o;

        var isIgnore = false;
        for (var ignoreIndex in jsonTemplateObj["ignore"]["beginList"]) {
            var ignoreValue = jsonTemplateObj["ignore"]["beginList"][ignoreIndex];
            var isStart = key.indexOf(ignoreValue);
            if (isStart == 0) {
                isIgnore = true;
                break;
            }
        }
        if (isIgnore) {
            continue;
        }

        var value = jsonObj[key];
        // LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            jsonObjParent[key] = {};
            this.createFileTemplate(value, jsonTemplateObj, keyChild, jsonObjParent[key]);
        } else if (typeof(value) == "string") {
            jsonObjParent[key] = {"showTitle": key, "valueType": "string"};
        } else if (typeof(value) == "number") {
            jsonObjParent[key] = {"showTitle": key, "valueType": "number"};
        } else if (typeof(value) == "boolean") {
            jsonObjParent[key] = {"showTitle": key, "valueType": "boolean"};
        } else {
            var strType = typeof(value);
            jsonObjParent[key] = {"showTitle": key, "valueType": strType};
            LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
