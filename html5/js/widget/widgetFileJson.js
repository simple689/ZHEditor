function WidgetFileJson() {
    this._menuFoldCtrl = new WidgetMenuFold();
}

WidgetFileJson.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._jsonObj = JSON.parse(fileStr);
    this.initCtrl();
}
WidgetFileJson.prototype.initCtrl = function () {
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, '');

    var isLoadTemplate = true;
    var extend = getFileExtend(this._elementTabTitle.innerHTML);
    if (extend == WidgetFile._extendJsonConf) {
        isLoadTemplate = false;
    }
    if (isLoadTemplate) {
        var jsonTemlateName = this._jsonObj[WidgetKey._jsonTemplate];
        if (!jsonTemlateName) {
            jsonTemlateName = this._elementTabTitle.innerHTML;
            jsonTemlateName = changeFileExtend(jsonTemlateName, WidgetFile._extendJsonConf);
        }
        this._jsonTemplateObj = WidgetHistory.getFileJsonTemplate(jsonTemlateName);
        if (!this._jsonTemplateObj) {
            this.initFileTemplate();
        }
        WidgetHistory.setFileJsonTemplate(jsonTemlateName, this._jsonTemplateObj);
        // Log.log("========================================");
        // Log.log(JSON.stringify(this._jsonTemplateObj, null, 2));
        // Log.log("========================================");
    }

    this.readObject(this._jsonObj, "", foldItem);

    if (isLoadTemplate) {
        var templatePanel = this._elementTabTitle._widgetTab._panel._fileTemplatePanel;
        var elementTabTitle = templatePanel._widgetTab.addTitle(this._elementTabTitle.innerHTML + ".jsonConf");
        var jsonTemplateStr = JSON.stringify(this._jsonTemplateObj);
        templatePanel._widgetTab.addContent(elementTabTitle, jsonTemplateStr, WidgetTab._addContentType.fileContent);
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
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJson.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textString, null, WidgetFileJson.onContextMenuInput);
            WidgetHtml.addBr(elementParent);
        } else if (typeof(value) == "number") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJson.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textNumber, null, WidgetFileJson.onContextMenuInput);
            if (!(key == 'x' || key == 'y' || key == 'z')) {
                WidgetHtml.addBr(elementParent);
            }
        } else if (typeof(value) == "boolean") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJson.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.checkbox, null, WidgetFileJson.onContextMenuInput);
            WidgetHtml.addBr(elementParent);
        } else {
            var strType = typeof(value);
            Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
WidgetFileJson.onContextMenuLabel = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "原始Key:");
    li = menu.addLi(ul, "复制原始Key");
    li = menu.addLi(ul, "编辑显示Key");
    li = menu.addLi(ul, "下一个键值对不换行");
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJson.onContextMenuInput = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "原始Key:");
    li = menu.addLi(ul, "复制原始Key");
    li = menu.addLi(ul, "编辑显示Key");
    li = menu.addLi(ul, "值类型");

    var ul_0 = menu.addUl(li);
    li = menu.addLi(ul_0, "字符串");
    li = menu.addLi(ul_0, "数字");
    var ul_0_0 = menu.addUl(li);
    li = menu.addLi(ul_0_0, "整数");
    li = menu.addLi(ul_0_0, "小数");

    li = menu.addLi(ul_0, "按钮");
    li = menu.addLi(ul_0, "真假");
    li = menu.addLi(ul_0, "单选");
    li = menu.addLi(ul_0, "文件");
    li = menu.addLi(ul_0, "颜色");

    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJson.prototype.initFileTemplate = function () {
    this._jsonTemplateObj = {};
    this._jsonTemplateObj["ignore"] = {};
    this._jsonTemplateObj["ignore"]["beginList"] = new Array();
    this._jsonTemplateObj["ignore"]["beginList"].push("$");

    this._jsonTemplateObj["file"] = {};
    this.createFileTemplate(this._jsonObj, this._jsonTemplateObj, "", this._jsonTemplateObj["file"]);
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
