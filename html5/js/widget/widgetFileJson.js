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

    this._isLoadTemplate = true;
    var extend = getFileExtend(this._elementTabTitle.innerHTML);
    if (extend == WidgetFile._extendJsonConf) {
        this._isLoadTemplate = false;
    }
    if (this._isLoadTemplate) {
        var jsonTemplateName = this._jsonObj[WidgetKey._jsonTemplate];
        if (!jsonTemplateName) {
            jsonTemplateName = this._elementTabTitle.innerHTML;
            jsonTemplateName = changeFileExtend(jsonTemplateName, WidgetFile._extendJsonConf);
        }
        this._fileJsonTemplateCtrl = new WidgetFileJsonTemplate();
        this._fileJsonTemplateCtrl.init(this, jsonTemplateName);
    }
    this.readObject(this._jsonObj, "", foldItem);
    if (this._isLoadTemplate) {
        var templatePanel = this._elementTabTitle._widgetTab._panel._fileTemplatePanel;
        var elementTabTitle = templatePanel._widgetTab.addTitle(this._elementTabTitle.innerHTML + ".jsonConf");
        var jsonTemplateStr = JSON.stringify(this._fileJsonTemplateCtrl._jsonTemplateObj);
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

        if (this._isLoadTemplate) {
            var isIgnore = this._fileJsonTemplateCtrl.isTemplateIgnore(key);
            if (isIgnore) {
                continue;
            }
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
