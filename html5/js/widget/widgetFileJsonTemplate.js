function WidgetFileJsonTemplate() {
    this._menuFoldCtrl = new WidgetMenuFold();
}

WidgetFileJsonTemplate.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._jsonObj = JSON.parse(fileStr);
    this.initCtrl();
}
WidgetFileJsonTemplate.prototype.initCtrl = function () {
    var elementFileRoot = this._elementTabTitle._elementFileRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, this, '文件根节点', WidgetFileJsonTemplate.onContextMenuRoot);

    this.readObject(this._jsonObj, "", foldItem);
}
WidgetFileJsonTemplate.prototype.readObject = function (jsonObj, keyParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;

        var value = jsonObj[key];
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            var onContextMenuFunc = WidgetFileJsonTemplate.onContextMenuObject;
            if (Array.isArray(value)) {
                Log.log(value);
                onContextMenuFunc = WidgetFileJsonTemplate.onContextMenuArray;
            }
            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, this, key, onContextMenuFunc);
            this.readObject(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJsonTemplate.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textString, null, WidgetFileJsonTemplate.onContextMenuInput);
            WidgetHtml.addBr(elementParent);
        } else if (typeof(value) == "number") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJsonTemplate.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.textNumber, null, WidgetFileJsonTemplate.onContextMenuInput);
            if (!(key == 'x' || key == 'y' || key == 'z')) {
                WidgetHtml.addBr(elementParent);
            }
        } else if (typeof(value) == "boolean") {
            WidgetHtml.addLabel(elementParent, this, key, null, WidgetFileJsonTemplate.onContextMenuLabel);
            WidgetHtml.addInput(elementParent, this, value, WidgetHtml._inputType.checkbox, null, WidgetFileJsonTemplate.onContextMenuInput);
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
    var li = menu.addLi(ul, "刷新");
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuObject = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "添加对象");
    li = menu.addLi(ul, "添加数组");
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuArray = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "数组中添加对象");
    li = menu.addLi(ul, "数组中清空对象");
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuLabel = function (e) {
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
WidgetFileJsonTemplate.onContextMenuInput = function (e) {
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
