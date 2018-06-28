function WidgetFileJson() {
    this._menuFoldCtrl = new WidgetMenuFold();
}

WidgetFileJson.prototype.init = function (elementTabTitle, fileContent, contentType) {
    this._elementTabTitle = elementTabTitle;
    if (contentType == WidgetTab._addContentType.fileContent) {
        this._jsonObj = JSON.parse(fileContent);
    } else if (contentType == WidgetTab._addContentType.fileJsonObj) {
        this._jsonObj = fileContent;
    }
    this.initCtrl();
}
WidgetFileJson.prototype.initCtrl = function () {
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, this, "root", "文件根节点", this._jsonObj, null);

    var jsonTemplateName = this._jsonObj[WidgetKey._jsonTemplate];
    if (!jsonTemplateName) {
        jsonTemplateName = this._elementTabTitle.innerHTML;
        jsonTemplateName = changeFileExtend(jsonTemplateName, WidgetFile._extendJsonConf);
    }
    this._fileJsonTemplateCtrl = new WidgetFileJsonTemplate();
    this._fileJsonTemplateCtrl.getTemplate(jsonTemplateName, this._jsonObj);

    this.readObject(this._jsonObj, "", foldItem);

    var templatePanel = this._elementTabTitle._widgetTab._panel._fileTemplatePanel;
    var elementTabTitle = templatePanel._widgetTab.addTitle(jsonTemplateName);
    templatePanel._widgetTab.addContent(elementTabTitle, this._fileJsonTemplateCtrl._jsonTemplateObj, WidgetTab._addContentType.fileJsonObj);
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
//             var nodeRow = WidgetTableRow.addLabel(nodeTable, key, keyShow);
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
        var keyShow = key;

        var isIgnore = this._fileJsonTemplateCtrl.isTemplateIgnore(key);
        if (isIgnore) {
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
            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, this, key, keyShow, value, null);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtml.addLabel(elementParent, this, key, keyShow, null, WidgetFileJson.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textString, null, WidgetFileJson.onContextMenuInput);
            WidgetHtml.addBr(elementParent);
        } else if (typeof(value) == "number") {
            WidgetHtml.addLabel(elementParent, this, key, keyShow, null, WidgetFileJson.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textNumber, null, WidgetFileJson.onContextMenuInput);
            if (!(key == 'x' || key == 'y' || key == 'z')) {
                WidgetHtml.addBr(elementParent);
            }
        } else if (typeof(value) == "boolean") {
            WidgetHtml.addLabel(elementParent, this, key, keyShow, null, WidgetFileJson.onContextMenuLabel);
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
    var li = menu.addLi(ul, "原始Key:", null);
    li = menu.addLi(ul, "复制原始Key", null);
    li = menu.addLi(ul, "编辑显示Key", null);
    li = menu.addLi(ul, "下一个键值对不换行", null);
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJson.onContextMenuInput = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "原始Key:", null);
    li = menu.addLi(ul, "复制原始Key", null);
    li = menu.addLi(ul, "编辑显示Key", null);
    li = menu.addLi(ul, "值类型", null);

    var ul_0 = menu.addUl(li);
    li = menu.addLi(ul_0, "字符串", null);
    li = menu.addLi(ul_0, "数字", null);
    var ul_0_0 = menu.addUl(li);
    li = menu.addLi(ul_0_0, "整数", null);
    li = menu.addLi(ul_0_0, "小数", null);

    li = menu.addLi(ul_0, "按钮", null);
    li = menu.addLi(ul_0, "真假", null);
    li = menu.addLi(ul_0, "单选", null);
    li = menu.addLi(ul_0, "文件", null);
    li = menu.addLi(ul_0, "颜色", null);

    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
