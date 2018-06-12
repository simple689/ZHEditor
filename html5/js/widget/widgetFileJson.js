function WidgetFileJsonCtrl() {
    this._menuFoldCtrl = new WidgetMenuFoldCtrl();
}

WidgetFileJsonCtrl.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initCtrl();
    this._menuLabel = WidgetMenuCtrl.createMenu(document.body, "../../../widget/widgetFileJson/menuJsonLabel.html");
    this._menuInput = WidgetMenuCtrl.createMenu(document.body, "../../../widget/widgetFileJson/menuJsonInput.html");
}
WidgetFileJsonCtrl.prototype.initCtrl = function () {
    var jsonObj = JSON.parse(this._fileStr);
    // LogCtrl.log(jsonObj);
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, '');
    this.readObject(jsonObj, "", foldItem);

    if (this._elementTabTitle._widgetTabCtrl._panel._fileTemplatePanel) {
        this.initFileTemplate(jsonObj);
    }
}
// WidgetFileJsonCtrl.prototype.readObject = function (jsonObj, keyParent, elementParent) {
//     var nodeTable = WidgetTableCtrlHtml.addTable(elementParent);
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
//             var nodeRow = WidgetTableCtrlRow.addLabel(nodeTable, key);
//             var nodeCell = nodeRow.insertCell();
//             this.readObject(value, keyChild, nodeCell);
//         } else if (typeof(value) == "string") {
//             WidgetTableCtrlRow.addLabelInput(nodeTable, key, value, WidgetTableCtrlHtml._inputType.textString);
//         } else if (typeof(value) == "number") {
//             WidgetTableCtrlRow.addLabelInput(nodeTable, key, value, WidgetTableCtrlHtml._inputType.textNumber);
//         } else if (typeof(value) == "boolean") {
//             WidgetTableCtrlRow.addLabelInput(nodeTable, key, value, WidgetTableCtrlHtml._inputType.checkbox);
//         } else {
//             var strType = typeof(value);
//             LogCtrl.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
//         }
//     }
// }
WidgetFileJsonCtrl.prototype.readObject = function (jsonObj, keyParent, elementParent) {
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
                // LogCtrl.log(value);
            }
            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, key);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtmlCtrl.addLabel(elementParent, this, key, null, WidgetFileJsonCtrl.elementLabelOnContextMenu);
            WidgetHtmlCtrl.addInput(elementParent, this, value, WidgetHtmlCtrl._inputType.textString, null, WidgetFileJsonCtrl.contextMenuInput);
            WidgetHtmlCtrl.addBr(elementParent);
        } else if (typeof(value) == "number") {
            WidgetHtmlCtrl.addLabel(elementParent, this, key, null, WidgetFileJsonCtrl.elementLabelOnContextMenu);
            WidgetHtmlCtrl.addInput(elementParent, this, value, WidgetHtmlCtrl._inputType.textNumber, null, WidgetFileJsonCtrl.contextMenuInput);
            if (!(key == 'x' || key == 'y' || key == 'z')) {
                WidgetHtmlCtrl.addBr(elementParent);
            }
        } else if (typeof(value) == "boolean") {
            WidgetHtmlCtrl.addLabel(elementParent, this, key, null, WidgetFileJsonCtrl.elementLabelOnContextMenu);
            WidgetHtmlCtrl.addInput(elementParent, this, value, WidgetHtmlCtrl._inputType.checkbox, null, WidgetFileJsonCtrl.contextMenuInput);
            WidgetHtmlCtrl.addBr(elementParent);
        } else {
            var strType = typeof(value);
            LogCtrl.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
WidgetFileJsonCtrl.elementLabelOnContextMenu = function (e) {
    WidgetMenuCtrl.showMenu(this._fileCtrl._menuLabel, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonCtrl.contextMenuInput = function (e) {
    WidgetMenuCtrl.showMenu(this._fileCtrl._menuInput, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonCtrl.prototype.initFileTemplate = function (jsonObj) {
    this._jsonTemplateStr = '{}';
    var jsonTemplateObj = JSON.parse(this._jsonTemplateStr, null); // 通过parse获取json对应键值

    jsonTemplateObj["ignore"] = {};
    jsonTemplateObj["ignore"]["beginList"] = new Array();
    jsonTemplateObj["ignore"]["beginList"].push("$");

    jsonTemplateObj["file"] = {};
    this.createFileTemplate(jsonObj, jsonTemplateObj, "", jsonTemplateObj["file"]);

    this._jsonTemplateStr = JSON.stringify(jsonTemplateObj); // 将字符串对象转换为JSON对象
    // LogCtrl.log("========================================");
    // LogCtrl.log(JSON.stringify(jsonTemplateObj, null, 2));
    // LogCtrl.log("========================================");

    var templatePanel = this._elementTabTitle._widgetTabCtrl._panel._fileTemplatePanel;
    var elementTabTitle = templatePanel._widgetTabCtrl.addTitle(this._elementTabTitle.innerHTML + ".jsonConf");
    templatePanel._widgetTabCtrl.addContent(elementTabTitle, this._jsonTemplateStr, WidgetTabCtrl._addContentType.fileContent);
}
WidgetFileJsonCtrl.prototype.createFileTemplate = function (jsonObj, jsonTemplateObj, keyParent, jsonObjParent) {
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
        // LogCtrl.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
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
            LogCtrl.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
