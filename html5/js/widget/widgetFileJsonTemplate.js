function WidgetFileJsonTemplate() {
    this._menuFoldCtrl = new WidgetMenuFold();
}

WidgetFileJsonTemplate.prototype.init = function (elementTabTitle, fileContent, contentType) {
    this._elementTabTitle = elementTabTitle;
    if (contentType == WidgetTab._addContentType.fileContent) {
        this._jsonObj = JSON.parse(fileContent);
    } else if (contentType == WidgetTab._addContentType.fileJsonObj) {
        this._jsonObj = fileContent;
    }
    this.initCtrl();
}
WidgetFileJsonTemplate.prototype.initCtrl = function () {
    var elementFileRoot = this._elementTabTitle._elementFileRoot;

    var jsonObjCtrl = new JsonObjCtrl();
    jsonObjCtrl._ctrl = this;
    jsonObjCtrl._obj = this._jsonObj;
    jsonObjCtrl._key = "root";
    jsonObjCtrl._keyShow = "文件根节点";
    jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, jsonObjCtrl);

    this.readObject(this._jsonObj, "", foldItem);
}
WidgetFileJsonTemplate.prototype.readObject = function (jsonObj, keyParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;
        var keyShow = this.getKeyShow(key);
        var value = jsonObj[key];
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";

            var jsonObjCtrl = new JsonObjCtrl();
            jsonObjCtrl._ctrl = this;
            jsonObjCtrl._key = key;
            jsonObjCtrl._keyShow = keyShow;
            jsonObjCtrl._value = value;
            if (Array.isArray(value)) {
                Log.log(value);
                jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuArray;
            } else {
                jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuObject;
            }

            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
            this.readObject(value, keyChild, foldItem);
        } else {
            var jsonObjCtrl = new JsonObjCtrl();
            jsonObjCtrl._ctrl = this;
            jsonObjCtrl._key = key;
            jsonObjCtrl._keyShow = keyShow;
            jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuLabel;
            WidgetHtml.addLabel(elementParent, jsonObjCtrl);
            jsonObjCtrl = new JsonObjCtrl();
            jsonObjCtrl._ctrl = this;
            jsonObjCtrl._obj = jsonObj;
            jsonObjCtrl._key = key;
            jsonObjCtrl._value = value;
            jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuInput;
            jsonObjCtrl._onChange = WidgetFileJsonTemplate.onChangeInput;
            if (typeof(value) == "string") {
                WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType.textString);
            } else if (typeof(value) == "number") {
                WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType.textNumber);
            } else if (typeof(value) == "boolean") {
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
WidgetFileJsonTemplate.prototype.getKeyShow = function (key) {
    var keyShow = key;
    if (key == "ignore") {
        keyShow = "忽略";
    } else if (key == "beginList") {
        keyShow = "开头字符串列表";
    } else if (key == "file") {
        keyShow = "文件";
    } else if (key == "showTitle") {
        keyShow = "显示名字";
    } else if (key == "valueType") {
        keyShow = "值类型";
    }
    return keyShow;
}
WidgetFileJsonTemplate.prototype.isAddBr = function (key) {
    var isAdd = true;
    if (key == 'x' || key == 'y' || key == 'z') {
        isAdd = false;
    }
    return isAdd;
}
WidgetFileJsonTemplate.onContextMenuRoot = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "刷新", WidgetFileJsonTemplate.onClickRefresh);
    li = menu.addLi(ul, "保存", WidgetFileJsonTemplate.onClickSave);
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuObject = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._key == "ignore") {
        li = menu.addLi(ul, "暂无功能", null);
    } else {
        li = menu.addLi(ul, "添加对象", null);
        li = menu.addLi(ul, "添加数组", null);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuArray = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "数组中添加对象", WidgetFileJsonTemplate.onClickArrayAdd);
    li = menu.addLi(ul, "数组中清空对象", WidgetFileJsonTemplate.onClickArrayClear);
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuLabel = function (e) {
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
WidgetFileJsonTemplate.onContextMenuInput = function (e) {
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
WidgetFileJsonTemplate.onClickRefresh = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._ctrl.refreshContent();
}
WidgetFileJsonTemplate.onClickSave = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var title = jsonObjCtrl._ctrl._elementTabTitle.innerHTML;
    WidgetHistory.setFileJsonTemplate(title, jsonObjCtrl._obj);
}
WidgetFileJsonTemplate.onClickArrayAdd = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._value;
    jsonObj[jsonObj.length] = "";
    jsonObjCtrl._ctrl.refreshContent();
}
WidgetFileJsonTemplate.onClickArrayClear = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._value;
    jsonObj.splice(0, jsonObj.length);
    jsonObjCtrl._ctrl.refreshContent();
}
WidgetFileJsonTemplate.onChangeInput = function (e) {
    var inputType = e._inputType;
    var value = e.value;
    switch (inputType) {
        case WidgetHtml._inputType.checkbox :
        case WidgetHtml._inputType.radio : {
            value = e.checked;
            break;
        }
    }
    var jsonObjCtrl = this;
    var jsonObj = jsonObjCtrl._obj;
    jsonObj[jsonObjCtrl._key] = value;
    jsonObjCtrl._ctrl.refreshContent();
}
WidgetFileJsonTemplate.prototype.refreshContent = function () {
    var widgetTab = this._elementTabTitle._widgetTab;
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._addContentType.fileJsonObj);
}
WidgetFileJsonTemplate.prototype.getTemplate = function (fileName, jsonObj) {
    this._fileName = fileName;
    this._jsonTemplateObj = WidgetHistory.getFileJsonTemplate(this._fileName);
    if (!this._jsonTemplateObj) {
        this.initTemplate(jsonObj);
    }
    WidgetHistory.setFileJsonTemplate(this._fileName, this._jsonTemplateObj);
    // Log.log("========================================");
    // Log.log(JSON.stringify(this._jsonTemplateObj, null, 2));
    // Log.log("========================================");
}
WidgetFileJsonTemplate.prototype.initTemplate = function (jsonObj) {
    this._jsonTemplateObj = {};
    this._jsonTemplateObj["ignore"] = {};
    this._jsonTemplateObj["ignore"]["beginList"] = new Array();
    this._jsonTemplateObj["ignore"]["beginList"].push("$");

    this._jsonTemplateObj["file"] = {};
    this.createTemplate(jsonObj, this._jsonTemplateObj, "", this._jsonTemplateObj["file"]);
}
WidgetFileJsonTemplate.prototype.createTemplate = function (jsonObj, jsonTemplateObj, keyParent, jsonObjParent) {
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
            this.createTemplate(value, jsonTemplateObj, keyChild, jsonObjParent[key]);
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
WidgetFileJsonTemplate.prototype.isTemplateIgnore = function (key) {
    for (var i in this._jsonTemplateObj.ignore.beginList) {
        var isStart = key[i].indexOf("$");
        if (isStart == 0) {
            return true;
        }
    }
    return false;
}
