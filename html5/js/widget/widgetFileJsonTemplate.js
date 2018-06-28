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
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, this, "root", "文件根节点", this._jsonObj, WidgetFileJsonTemplate.onContextMenuRoot);

    this.readObject(this._jsonObj, "", foldItem);
}
WidgetFileJsonTemplate.prototype.readObject = function (jsonObj, keyParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;
        var keyShow = key;
        var onContextMenuFunc = null;
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

        var value = jsonObj[key];
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            if (Array.isArray(value)) {
                Log.log(value);
                onContextMenuFunc = WidgetFileJsonTemplate.onContextMenuArray;
            } else {
                onContextMenuFunc = WidgetFileJsonTemplate.onContextMenuObject;
            }

            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, this, key, keyShow, value, onContextMenuFunc);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtml.addLabel(elementParent, this, key, keyShow, null, WidgetFileJsonTemplate.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textString, null, WidgetFileJsonTemplate.onContextMenuInput, WidgetFileJsonTemplate.onChangeInput);
            WidgetHtml.addBr(elementParent);
        } else if (typeof(value) == "number") {
            WidgetHtml.addLabel(elementParent, this, key, keyShow, null, WidgetFileJsonTemplate.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textNumber, null, WidgetFileJsonTemplate.onContextMenuInput, WidgetFileJsonTemplate.onChangeInput);
            if (!(key == 'x' || key == 'y' || key == 'z')) {
                WidgetHtml.addBr(elementParent);
            }
        } else if (typeof(value) == "boolean") {
            WidgetHtml.addLabel(elementParent, this, key, keyShow, null, WidgetFileJsonTemplate.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.checkbox, null, WidgetFileJsonTemplate.onContextMenuInput, WidgetFileJsonTemplate.onChangeInput);
            WidgetHtml.addBr(elementParent);
        } else {
            var strType = typeof(value);
            Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
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
    var widgetFileJsonTemplate = this._menu._exec._fileCtrl;
    widgetFileJsonTemplate.refreshContent();
}
WidgetFileJsonTemplate.onClickSave = function (e) {
    var widgetFileJsonTemplate = this._menu._exec._fileCtrl;
    var title = widgetFileJsonTemplate._elementTabTitle.innerHTML;
    WidgetHistory.setFileJsonTemplate(title, widgetFileJsonTemplate._jsonObj);
}
WidgetFileJsonTemplate.onClickArrayAdd = function (e) {
    var dt = this._menu._exec;
    var jsonObj = dt._value;
    jsonObj[jsonObj.length] = "";
    var widgetFileJsonTemplate = this._menu._exec._fileCtrl;
    widgetFileJsonTemplate.refreshContent();
}
WidgetFileJsonTemplate.onClickArrayClear = function (e) {
    var dt = this._menu._exec;
    var jsonObj = dt._value;
    jsonObj.splice(0, jsonObj.length);
    var widgetFileJsonTemplate = this._menu._exec._fileCtrl;
    widgetFileJsonTemplate.refreshContent();
}
WidgetFileJsonTemplate.onChangeInput = function (e) {
    var inputType = this._inputType;
    var value = this.value;
    switch (inputType) {
        case WidgetHtml._inputType.checkbox :
        case WidgetHtml._inputType.radio : {
            value = this.checked;
            break;
        }
    }
    var jsonObj = this._value;
    jsonObj = value;
    var widgetFileJsonTemplate = this._menu._exec._fileCtrl;
    widgetFileJsonTemplate.refreshContent();
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
