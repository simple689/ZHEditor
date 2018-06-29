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

    var jsonObjCtrl = new JsonObjCtrl(this, this._jsonObj, false, "root");
    jsonObjCtrl._keyShow = "文件根节点";
    jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, jsonObjCtrl);

    this.readObject(this._jsonObj, "", foldItem, false);
}
WidgetFileJsonTemplate.prototype.readObject = function (jsonObj, keyParent, elementParent, isArrayParent) {
    for (var o in jsonObj) {
        var key = o;
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
                WidgetLog.log(value);
                isArray = true;
                jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuArray;
            } else {
                jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuObject;
            }

            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
            this.readObject(value, keyChild, foldItem, isArray);
        } else {
            var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._keyShow = keyShow;
            jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuLabel;
            WidgetHtml.addLabel(elementParent, jsonObjCtrl);
            jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._value = value;
            jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuInput;
            jsonObjCtrl._onChange = WidgetFileJsonTemplate.onChangeInput;

            if (key == WidgetKey._valueType) {
                jsonObjCtrl._valueList = JsonObjCtrl._valueTypeList;
                jsonObjCtrl._onContextMenu = WidgetFileJsonTemplate.onContextMenuSelect;
                jsonObjCtrl._onChange = WidgetFileJsonTemplate.onChangeSelect;

                if (value == WidgetKey._object) {
                    jsonObjCtrl._selectIndex = 0;
                } else if (value == WidgetKey._array) {
                    jsonObjCtrl._selectIndex = 1;
                } else if (value == WidgetKey._string) {
                    jsonObjCtrl._selectIndex = 2;
                } else if (value == WidgetKey._number) {
                    jsonObjCtrl._selectIndex = 3;
                } else if (value == WidgetKey._boolean) {
                    jsonObjCtrl._selectIndex = 4;
                }

                WidgetHtml.addSelect(elementParent, jsonObjCtrl);
            } else {
                if (typeof(value) == WidgetKey._string) {
                    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType.textString);
                } else if (typeof(value) == WidgetKey._number) {
                    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType.textNumber);
                } else if (typeof(value) == WidgetKey._boolean) {
                    WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._inputType.checkbox);
                } else {
                    var strType = typeof(value);
                    WidgetLog.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
                }
            }

            if (this.isAddBr(key)) {
                WidgetHtml.addBr(elementParent);
            }
        }
    }
}
WidgetFileJsonTemplate.prototype.getKeyShow = function (key) {
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
    } else if (key == "value") {
        keyShow = "值";
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
    if (this._jsonObjCtrl._key == WidgetKey._ignore) {
        li = menu.addLi(ul, "暂无功能", null);
    } else {
        li = menu.addLi(ul, "添加节点", WidgetFileJsonTemplate.onClickAddObject);
        li = menu.addLi(ul, "删除节点", WidgetFileJsonTemplate.onClickDelObject);
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
    var li = null;
    if (this._jsonObjCtrl._isArrayParent) {
        li = menu.addLi(ul, "数组中删除此对象", WidgetFileJsonTemplate.onClickArrayDel);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuInput = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isArrayParent) {
        li = menu.addLi(ul, "数组中删除此对象", WidgetFileJsonTemplate.onClickArrayDel);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onContextMenuSelect = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonTemplate.onClickRefresh = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonTemplate.onClickSave = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var title = jsonObjCtrl._exec._elementTabTitle.innerHTML;
    WidgetHistory.setFileJsonTemplate(title, jsonObjCtrl._obj);
}
WidgetFileJsonTemplate.onClickArrayAdd = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._value;
    jsonObj[jsonObj.length] = "";
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonTemplate.onClickArrayDel = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    jsonObj.splice(jsonObjCtrl._key, 1);
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonTemplate.onClickArrayClear = function (e) {
    if (!confirm("确定要 “数组中清空对象” 吗？")) { //利用对话框返回的值 （true 或者 false）
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._value;
    jsonObj.splice(0, jsonObj.length);
    jsonObjCtrl._exec.refreshContent();
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
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonTemplate.onChangeSelect = function (e) {
    var jsonObjCtrl = this;
    var jsonObj = jsonObjCtrl._obj;
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonTemplate.onClickAddObject = function (e) {
    var keyNew = prompt("请输入添加的 Key ：");
    if (!keyNew) {
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj[jsonObjCtrl._key];
    var valueType = jsonObj[WidgetKey._valueType];
    var jsonObjValue = null;
    if (valueType) {
        if (valueType != WidgetKey._object) {
            if (!confirm("当前 Key 的值类型不是对象，如果继续添加，值类型会变成对象，确定执行操作吗？")) { //利用对话框返回的值 （true 或者 false）
                return;
            }
            jsonObj[WidgetKey._valueType] = WidgetKey._object;
            jsonObj[WidgetKey._value] = {};
        }
        jsonObjValue = jsonObj[WidgetKey._value];
    } else {
        jsonObjValue = jsonObj;
    }

    jsonObjValue[keyNew] = {};
    jsonObjValue[keyNew][WidgetKey._showTitle] = keyNew;
    jsonObjValue[keyNew][WidgetKey._valueType] = WidgetKey._object;
    jsonObjValue[keyNew][WidgetKey._value] = {};
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonTemplate.onClickDelObject = function (e) {
    if (!confirm("确定要 “删除节点” 吗？")) { //利用对话框返回的值 （true 或者 false）
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    delete jsonObj[jsonObjCtrl._key];
    jsonObjCtrl._exec.refreshContent();
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
    // WidgetLog.log("========================================");
    // WidgetLog.log(JSON.stringify(this._jsonTemplateObj, null, 2));
    // WidgetLog.log("========================================");
}
WidgetFileJsonTemplate.prototype.initTemplate = function (jsonObj) {
    this._jsonTemplateObj = {};
    this._jsonTemplateObj[WidgetKey._ignore] = {};
    this._jsonTemplateObj[WidgetKey._ignore][WidgetKey._beginList] = new Array();
    this._jsonTemplateObj[WidgetKey._ignore][WidgetKey._beginList].push("$");

    this._jsonTemplateObj[WidgetKey._file] = {};
    this.createTemplate(jsonObj, this._jsonTemplateObj, "", this._jsonTemplateObj[WidgetKey._file]);
}
WidgetFileJsonTemplate.prototype.createTemplate = function (jsonObj, jsonTemplateObj, keyParent, jsonObjParent, isArrayParent) {
    for (var o in jsonObj) {
        var key = o;

        var isIgnore = false;
        for (var ignoreIndex in jsonTemplateObj[WidgetKey._ignore][WidgetKey._beginList]) {
            var ignoreValue = jsonTemplateObj[WidgetKey._ignore][WidgetKey._beginList][ignoreIndex];
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
        // WidgetLog.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";

            jsonObjParent[key] = {};
            jsonObjParent[key][WidgetKey._showTitle] = key;

            var isArray = false;
            if (Array.isArray(value)) {
                WidgetLog.log(value);
                isArray = true;
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._array;
                jsonObjParent[key][WidgetKey._value] = new Array();
            } else {
                jsonObjParent[key][WidgetKey._valueType] = "object";
                jsonObjParent[key][WidgetKey._value] = {};
            }

            this.createTemplate(value, jsonTemplateObj, keyChild, jsonObjParent[key][WidgetKey._value], isArray);
        } else {
            jsonObjParent[key] = {};
            jsonObjParent[key][WidgetKey._showTitle] = key;
            if (typeof(value) == WidgetKey._string) {
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._string;
            } else if (typeof(value) == WidgetKey._number) {
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._number;
            } else if (typeof(value) == WidgetKey._boolean) {
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._boolean;
            } else {
                var strType = typeof(value);
                jsonObjParent[key][WidgetKey._valueType] = strType;
                WidgetLog.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
            }
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
