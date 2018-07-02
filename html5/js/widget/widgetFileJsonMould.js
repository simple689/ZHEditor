function WidgetFileJsonMould() {
    this._menuFoldCtrl = new WidgetMenuFold();
}

WidgetFileJsonMould.prototype.init = function (elementTabTitle, fileContent, contentType) {
    this._elementTabTitle = elementTabTitle;
    if (contentType == WidgetTab._addContentType.fileContent) {
        this._jsonObj = JSON.parse(fileContent);
    } else if (contentType == WidgetTab._addContentType.fileJsonObj) {
        this._jsonObj = fileContent;
    }
    this.initCtrl();
}
WidgetFileJsonMould.prototype.initCtrl = function () {
    var elementFileRoot = this._elementTabTitle._elementFileRoot;

    var jsonObjCtrl = new JsonObjCtrl(this, this._jsonObj, false, "root");
    jsonObjCtrl._keyShow = "文件根节点";
    jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, jsonObjCtrl);

    this.readObject(this._jsonObj, "", foldItem, false);
}
WidgetFileJsonMould.prototype.readObject = function (jsonObj, keyParent, elementParent, isArrayParent) {
    for (var o in jsonObj) {
        var key = o;
        var keyShow = this.getKeyShow(key);
        var value = jsonObj[key];
        if (typeof(value) == WidgetKey._object) {
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
                jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuArray;
            } else {
                jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuObject;
            }

            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
            this.readObject(value, keyChild, foldItem, isArray);
        } else {
            var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._keyShow = keyShow;
            jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuLabel;
            WidgetHtml.addLabel(elementParent, jsonObjCtrl);
            jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isArrayParent, key);
            jsonObjCtrl._value = value;
            jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuInput;
            jsonObjCtrl._onChange = WidgetFileJsonMould.onChangeInput;

            if (key == WidgetKey._valueType) {
                jsonObjCtrl._value = value;
                jsonObjCtrl._valueList = JsonObjCtrl._valueTypeList;
                jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuSelect;
                jsonObjCtrl._onChange = WidgetFileJsonMould.onChangeSelect;

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
WidgetFileJsonMould.prototype.getKeyShow = function (key) {
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
WidgetFileJsonMould.prototype.isAddBr = function (key) {
    var isAdd = true;
    if (key == 'x' || key == 'y' || key == 'z') {
        isAdd = false;
    }
    return isAdd;
}
WidgetFileJsonMould.onContextMenuRoot = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "刷新", WidgetFileJsonMould.onClickRefresh);
    li = menu.addLi(ul, "保存", WidgetFileJsonMould.onClickSave);
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonMould.onContextMenuObject = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._key == WidgetKey._ignore) {
        li = menu.addLi(ul, "暂无功能", null);
    } else {
        li = menu.addLi(ul, "添加节点", WidgetFileJsonMould.onClickAddObject);
        li = menu.addLi(ul, "删除节点", WidgetFileJsonMould.onClickDelObject);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonMould.onContextMenuArray = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "数组中添加对象", WidgetFileJsonMould.onClickArrayAdd);
    li = menu.addLi(ul, "数组中清空对象", WidgetFileJsonMould.onClickArrayClear);
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonMould.onContextMenuLabel = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isArrayParent) {
        li = menu.addLi(ul, "数组中删除此对象", WidgetFileJsonMould.onClickArrayDel);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonMould.onContextMenuInput = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isArrayParent) {
        li = menu.addLi(ul, "数组中删除此对象", WidgetFileJsonMould.onClickArrayDel);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonMould.onContextMenuSelect = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    WidgetMenu.showMenu(menu, e, this);
    return false; //取消右键点击的默认事件
}
WidgetFileJsonMould.onClickRefresh = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onClickSave = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var title = jsonObjCtrl._exec._elementTabTitle.innerHTML;
    WidgetHistory.setFileJsonMould(title, jsonObjCtrl._obj);
}
WidgetFileJsonMould.onClickArrayAdd = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._value;
    jsonObj[jsonObj.length] = "";
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onClickArrayDel = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    jsonObj.splice(jsonObjCtrl._key, 1);
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onClickArrayClear = function (e) {
    if (!confirm("确定要 “数组中清空对象” 吗？")) { //利用对话框返回的值 （true 或者 false）
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._value;
    jsonObj.splice(0, jsonObj.length);
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onChangeInput = function (e) {
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
WidgetFileJsonMould.onChangeSelect = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    var jsonObjValue = jsonObj[WidgetKey._value];
    var isHasObj = false;
    if (jsonObjValue) {
        for (var i in jsonObjValue) {
            isHasObj = true;
            break;
        }
    }
    if (isHasObj) {
        if (!confirm("当前 Key 存在值，如果继续改变，值会被清空，确定执行操作吗？")) { //利用对话框返回的值 （true 或者 false）
            return;
        }
    }
    var value = this.value;
    jsonObj[WidgetKey._valueType] = value;
    if (jsonObj[WidgetKey._valueType] == WidgetKey._object || jsonObj[WidgetKey._valueType] == WidgetKey._array) {
        jsonObj[WidgetKey._value] = {};
    } else {
        delete jsonObj[WidgetKey._value];
    }
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onClickAddObject = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    var valueType = jsonObj[WidgetKey._valueType];
    if (valueType) {

    } else {
        jsonObj = jsonObjCtrl._obj[jsonObjCtrl._key];
        valueType = jsonObj[WidgetKey._valueType];
    }

    var jsonObjValue = jsonObj;
    if (valueType) {
        if (valueType == WidgetKey._object) {
            if (!jsonObj[WidgetKey._value]) {
                jsonObj[WidgetKey._value] = {};
            }
        } else if (valueType == WidgetKey._array) {
            var jsonObjValue = jsonObj[WidgetKey._value];
            var isHasObj = false;
            if (jsonObjValue) {
                for (var i in jsonObjValue) {
                    isHasObj = true;
                    break;
                }
            } else {
                jsonObj[WidgetKey._value] = {};
            }
            if (isHasObj) {
                alert("当前 值类型 为 数组，只能存在一个节点作为此数组的模版！");
                return;
            }
        } else {
            if (!confirm("当前 Key 的值类型不是对象，如果继续添加，值类型会变成对象，确定执行操作吗？")) { //利用对话框返回的值 （true 或者 false）
                return;
            }
            jsonObj[WidgetKey._valueType] = WidgetKey._object;
            jsonObj[WidgetKey._value] = {};
        }

        jsonObjValue = jsonObj[WidgetKey._value];
    }

    var keyNew = prompt("请输入添加的 Key ：");
    if (!keyNew) {
        return;
    }

    jsonObjValue[keyNew] = {};
    jsonObjValue[keyNew][WidgetKey._showTitle] = keyNew;
    jsonObjValue[keyNew][WidgetKey._valueType] = WidgetKey._object;
    jsonObjValue[keyNew][WidgetKey._value] = {};
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onClickDelObject = function (e) {
    if (!confirm("确定要 “删除节点” 吗？")) { //利用对话框返回的值 （true 或者 false）
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    delete jsonObj[jsonObjCtrl._key];
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.prototype.refreshContent = function () {
    var widgetTab = this._elementTabTitle._widgetTab;
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._addContentType.fileJsonObj);
}
WidgetFileJsonMould.prototype.getMould = function (fileName, jsonObj) {
    this._fileName = fileName;
    this._jsonMouldObj = WidgetHistory.getFileJsonMould(this._fileName);
    if (!this._jsonMouldObj) {
        this.initMould(jsonObj);
    }
    WidgetHistory.setFileJsonMould(this._fileName, this._jsonMouldObj);
    // WidgetLog.log("========================================");
    // WidgetLog.log(JSON.stringify(this._jsonMouldObj, null, 2));
    // WidgetLog.log("========================================");
}
WidgetFileJsonMould.prototype.initMould = function (jsonObj) {
    this._jsonMouldObj = {};
    this._jsonMouldObj[WidgetKey._ignore] = {};
    this._jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList] = new Array();
    this._jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList].push("$");

    this._jsonMouldObj[WidgetKey._file] = {};
    this.createMould(jsonObj, this._jsonMouldObj, "", this._jsonMouldObj[WidgetKey._file]);
}
WidgetFileJsonMould.prototype.createMould = function (jsonObj, jsonMouldObj, keyParent, jsonObjParent, isArrayParent) {
    for (var o in jsonObj) {
        var key = o;

        var isIgnore = false;
        for (var ignoreIndex in jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList]) {
            var ignoreValue = jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList][ignoreIndex];
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
        jsonObjParent[key] = {};
        jsonObjParent[key][WidgetKey._showTitle] = key;
        if (typeof(value) == WidgetKey._object) {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";

            var isArray = false;
            if (Array.isArray(value)) {
                WidgetLog.log(value);
                isArray = true;
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._array;
                jsonObjParent[key][WidgetKey._value] = new Array();
            } else {
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._object;
                jsonObjParent[key][WidgetKey._value] = {};
            }

            this.createMould(value, jsonMouldObj, keyChild, jsonObjParent[key][WidgetKey._value], isArray);
        } else {
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
WidgetFileJsonMould.prototype.isMouldIgnore = function (key) {
    for (var i in this._jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList]) {
        var isStart = key[i].indexOf("$");
        if (isStart == 0) {
            return true;
        }
    }
    return false;
}
