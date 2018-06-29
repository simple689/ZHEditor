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

    var jsonObjCtrl = new JsonObjCtrl(this, this._jsonObj, false, "root");
    jsonObjCtrl._keyShow = "文件根节点";
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, jsonObjCtrl);

    var jsonTemplateName = this._jsonObj[WidgetKey._jsonTemplate];
    if (!jsonTemplateName) {
        jsonTemplateName = this._elementTabTitle.innerHTML;
        jsonTemplateName = changeFileExtend(jsonTemplateName, WidgetFile._extendJsonConf);
    }
    this._fileJsonTemplateCtrl = new WidgetFileJsonTemplate();
    this._fileJsonTemplateCtrl.getTemplate(jsonTemplateName, this._jsonObj);

    this.readObject(this._jsonObj, "", foldItem, false);

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
//         } else if (typeof(value) == WidgetKey._string) {
//             WidgetTableRow.addLabelInput(nodeTable, key, value, WidgetTableHtml._inputType.textString);
//         } else if (typeof(value) == WidgetKey._number) {
//             WidgetTableRow.addLabelInput(nodeTable, key, value, WidgetTableHtml._inputType.textNumber);
//         } else if (typeof(value) == WidgetKey._boolean) {
//             WidgetTableRow.addLabelInput(nodeTable, key, value, WidgetTableHtml._inputType.checkbox);
//         } else {
//             var strType = typeof(value);
//             Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
//         }
//     }
// }
WidgetFileJson.prototype.readObject = function (jsonObj, keyParent, elementParent, isArrayParent) {
    for (var o in jsonObj) {
        var key = o;
        var isIgnore = this._fileJsonTemplateCtrl.isTemplateIgnore(key);
        if (isIgnore) {
            continue;
        }
        var keyShow = this.getKeyShow(key);
        var value = jsonObj[key];
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";

            var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._keyShow = keyShow;
            jsonObjCtrl._value = value;
            var isArray = false;
            if (Array.isArray(value)) {
                Log.log(value);
                isArray = true;
                // jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuArray;
            } else {
                // jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuObject;
            }

            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
            this.readObject(value, keyChild, foldItem, isArray);
        } else {
            var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._keyShow = keyShow;
            jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuLabel;
            WidgetHtml.addLabel(elementParent, jsonObjCtrl);
            jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._value = value;
            jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuInput;
            jsonObjCtrl._onChange = WidgetFileJson.onChangeInput;
            if (typeof(value) == WidgetKey._string) {
                WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType.textString);
            } else if (typeof(value) == WidgetKey._number) {
                WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType.textNumber);
            } else if (typeof(value) == WidgetKey._boolean) {
                WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._inputType.checkbox);
            } else {
                var strType = typeof(value);
                Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
            }
            if (this.isAddBr(key)) {
                WidgetHtml.addBr(elementParent);
            }
        }
    }
}
WidgetFileJson.prototype.getKeyShow = function (key) {
    var keyShow = key;
    if (key == WidgetKey._ignore) {
        keyShow = "忽略";
    } else if (key == WidgetKey._beginList) {
        keyShow = "开头字符串列表";
    } else if (key == WidgetKey._file) {
        keyShow = "文件";
    } else if (key == "showTitle") {
        keyShow = "显示名字";
    } else if (key == "valueType") {
        keyShow = "值类型";
    }
    return keyShow;
}
WidgetFileJson.prototype.isAddBr = function (key) {
    var isAdd = true;
    if (key == 'x' || key == 'y' || key == 'z') {
        isAdd = false;
    }
    return isAdd;
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
