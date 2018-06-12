function WidgetFileJson() {
    this._menuFoldCtrl = new WidgetMenuFold();
}

WidgetFileJson.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initCtrl();
    this._menuLabel = WidgetMenu.createMenu(document.body, "../../../widget/widgetFileJson/menuJsonLabel.html");
    this._menuInput = WidgetMenu.createMenu(document.body, "../../../widget/widgetFileJson/menuJsonInput.html");
}
WidgetFileJson.prototype.initCtrl = function () {
    var jsonObj = JSON.parse(this._fileStr);
    // Log.log(jsonObj);
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, '');
    this.readObject(jsonObj, "", foldItem);

    if (this._elementTabTitle._WidgetTab._panel._fileTemplatePanel) {
        this.initFileTemplate(jsonObj);
    }
}
// WidgetFileJson.prototype.readObject = function (jsonObj, keyParent, elementParent) {
//     var nodeTable = WidgetTableHtml.addTable(elementParent);
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
//             var nodeRow = WidgetTableRow.addLabel(nodeTable, key);
//             var nodeCell = nodeRow.insertCell();
//             this.readObject(value, keyChild, nodeCell);
//         } else if (typeof(value) == "string") {
//             WidgetTableRow.addLabelInput(nodeTable, key, value, WidgetTableHtml._inputType.textString);
//         } else if (typeof(value) == "number") {
//             WidgetTableRow.addLabelInput(nodeTable, key, value, WidgetTableHtml._inputType.textNumber);
//         } else if (typeof(value) == "boolean") {
//             WidgetTableRow.addLabelInput(nodeTable, key, value, WidgetTableHtml._inputType.checkbox);
//         } else {
//             var strType = typeof(value);
//             Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
//         }
//     }
// }
WidgetFileJson.prototype.readObject = function (jsonObj, keyParent, elementParent) {
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
                // Log.log(value);
            }
            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, key);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJson.elementLabelOnContextMenu);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textString, null, WidgetFileJson.contextMenuInput);
            WidgetHtml.addBr(elementParent);
        } else if (typeof(value) == "number") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJson.elementLabelOnContextMenu);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textNumber, null, WidgetFileJson.contextMenuInput);
            if (!(key == 'x' || key == 'y' || key == 'z')) {
                WidgetHtml.addBr(elementParent);
            }
        } else if (typeof(value) == "boolean") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJson.elementLabelOnContextMenu);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.checkbox, null, WidgetFileJson.contextMenuInput);
            WidgetHtml.addBr(elementParent);
        } else {
            var strType = typeof(value);
            Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
WidgetFileJson.elementLabelOnContextMenu = function (e) {
    WidgetMenu.showMenu(this._fileCtrl._menuLabel, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJson.contextMenuInput = function (e) {
    WidgetMenu.showMenu(this._fileCtrl._menuInput, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJson.prototype.initFileTemplate = function (jsonObj) {
    this._jsonTemplateStr = '{}';
    var jsonTemplateObj = JSON.parse(this._jsonTemplateStr, null); // 通过parse获取json对应键值

    jsonTemplateObj["ignore"] = {};
    jsonTemplateObj["ignore"]["beginList"] = new Array();
    jsonTemplateObj["ignore"]["beginList"].push("$");

    jsonTemplateObj["file"] = {};
    this.createFileTemplate(jsonObj, jsonTemplateObj, "", jsonTemplateObj["file"]);

    this._jsonTemplateStr = JSON.stringify(jsonTemplateObj); // 将字符串对象转换为JSON对象
    // Log.log("========================================");
    // Log.log(JSON.stringify(jsonTemplateObj, null, 2));
    // Log.log("========================================");

    var templatePanel = this._elementTabTitle._WidgetTab._panel._fileTemplatePanel;
    var elementTabTitle = templatePanel._WidgetTab.addTitle(this._elementTabTitle.innerHTML + ".jsonConf");
    templatePanel._WidgetTab.addContent(elementTabTitle, this._jsonTemplateStr, WidgetTab._addContentType.fileContent);
}
WidgetFileJson.prototype.createFileTemplate = function (jsonObj, jsonTemplateObj, keyParent, jsonObjParent) {
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
        // Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
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
            Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
