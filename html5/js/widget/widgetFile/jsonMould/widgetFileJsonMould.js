function WidgetFileJsonMould() {
    WidgetFileBase.call(this);
}
WidgetFileJsonMould.prototype = new WidgetFileBase();
WidgetFileJsonMould.prototype.constructor = WidgetFileJsonMould;

WidgetFileJsonMould.prototype.initRoot = function () {
    var foldItem = WidgetFileBase.prototype.initRoot.apply(this, arguments);
    this.readObject(this._jsonObj, "root", foldItem, false);
}
WidgetFileJsonMould.prototype.readObject = function (jsonObj, keyParent, elementParent, isListParent) {
    // WidgetLog.log(keyParent);
    for (var o in jsonObj) {
        var key = o;
        var keyShow = WidgetFileUtil.getKeyShow(key);
        var value = jsonObj[key];
        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = keyShow;
        if (typeof(value) == WidgetKey._object) {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;

            jsonObjCtrl._value = value;
            var isList = false;
            if (Array.isArray(value)) {
                isList = true;
                jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuList;
            } else {
                jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuObject;
            }

            var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
            this.readObject(value, keyChild, foldItem, isList);
        } else {
            jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuLabel;
            WidgetHtml.addLabel(elementParent, jsonObjCtrl);
            jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
            jsonObjCtrl._value = value;
            jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuInput;
            jsonObjCtrl._onChange = WidgetFileOnChange.onChangeInput;

            if (key == WidgetKey._valueType) {
                jsonObjCtrl._value = value;
                jsonObjCtrl._valueList = JsonObjCtrl._valueTypeList;
                jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuSelect;
                jsonObjCtrl._onChange = WidgetFileOnChange.onChangeSelect;

                WidgetHtml.addSelect(elementParent, jsonObjCtrl);
            } else if (key == WidgetKey._enumDefault) {
                var enumDefault = jsonObj[WidgetKey._enumDefault];
                var enumList = jsonObj[WidgetKey._enumList];
                var jsonListCtrl = new JsonListCtrl(0);
                for (var oEnum in enumList) {
                    if (enumDefault && enumDefault.length <= 0 || !enumDefault) {
                        jsonObj[WidgetKey._enumDefault] = oEnum;
                        enumDefault = jsonObj[WidgetKey._enumDefault];
                    }
                    var valueItemMd = enumList[oEnum];
                    var item = new JsonListItem(oEnum,valueItemMd[WidgetKey._showTitle]);
                    jsonListCtrl.insertItem(item);
                }
                jsonObjCtrl._value = enumDefault;
                jsonObjCtrl._valueList = jsonListCtrl.getList();
                jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuSelect;
                jsonObjCtrl._onChange = WidgetFileOnChange.onChangeSelect;

                WidgetHtml.addSelect(elementParent, jsonObjCtrl);
            } else {
                if (typeof(value) == WidgetKey._string) {
                    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textString);
                } else if (typeof(value) == WidgetKey._number) {
                    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textNumber);
                } else if (typeof(value) == WidgetKey._boolean) {
                    WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._inputType._checkbox);
                } else {
                    var strType = typeof(value);
                    WidgetLog.log("[" + typeof(value) + "]" + keyParent + "->" + key + " = " + value);
                }
            }

            if (WidgetFileUtil.isAddBr(key)) {
                WidgetHtml.addBr(elementParent);
            }
        }
    }
}
WidgetFileJsonMould.changeSelectValueType = function (element) {
    var jsonObjCtrl = element._jsonObjCtrl;
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
    var value = element.value;
    jsonObj[WidgetKey._valueType] = value;
    var jsonObjValueType = jsonObj[WidgetKey._valueType];
    if (jsonObjValueType == WidgetKey._object || jsonObjValueType == WidgetKey._array) {
        jsonObj[WidgetKey._value] = {};
    } else if (jsonObjValueType == WidgetKey._enum) {
        jsonObj[WidgetKey._value] = {};
        jsonObj[WidgetKey._value][WidgetKey._enumDefault] = "";
        jsonObj[WidgetKey._value][WidgetKey._enumList] = {};
    } else if (jsonObjValueType == WidgetKey._link) {
        jsonObj[WidgetKey._value] = {};
        jsonObjValue = jsonObj[WidgetKey._value];
        jsonObjValue[WidgetKey._file] = "";
        jsonObjValue[WidgetKey._key] = "";
    } else {
        delete jsonObj[WidgetKey._value];
    }
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.changeSelectEnumDefault = function (element) {
    var jsonObjCtrl = element._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    var value = element.value;
    jsonObj[WidgetKey._enumDefault] = value;
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.prototype.refreshContent = function () {
    var widgetTab = this._elementTabTitle._widgetTab;
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._addContentType.fileJsonObj);
}
WidgetFileJsonMould.prototype.getMould = function (fileName, jsonObj) {
    var isNew = false;
    this._fileName = fileName;
    this._jsonMouldObj = WidgetHistory.getFileJsonMould(this._fileName);
    if (!this._jsonMouldObj) {
        this.initMould(jsonObj);
        isNew = true;
    }
    WidgetHistory.setFileJsonMould(this._fileName, this._jsonMouldObj);
    // WidgetLog.log("========================================");
    // WidgetLog.log(JSON.stringify(this._jsonMouldObj, null, 2));
    // WidgetLog.log("========================================");
    return isNew;
}
WidgetFileJsonMould.prototype.initMould = function (jsonObj) {
    this._jsonMouldObj = {};
    this._jsonMouldObj[WidgetKey._ignore] = {};
    this._jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList] = new Array();
    this._jsonMouldObj[WidgetKey._ignore][WidgetKey._beginList].push("$");

    this._jsonMouldObj[WidgetKey._file] = {};
    this.createMould(jsonObj, this._jsonMouldObj, "", this._jsonMouldObj[WidgetKey._file]);
}
WidgetFileJsonMould.prototype.createMould = function (jsonObj, jsonMouldObj, keyParent, jsonObjParent, isListParent) {
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
        // WidgetLog.log("[" + typeof(value) + "]" + keyParent + "->" + key + " = " + value);
        jsonObjParent[key] = {};
        jsonObjParent[key][WidgetKey._showTitle] = key;
        if (typeof(value) == WidgetKey._object) {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";

            var isList = false;
            if (Array.isArray(value)) {
                isList = true;
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._array;
                jsonObjParent[key][WidgetKey._value] = new Array();
            } else {
                jsonObjParent[key][WidgetKey._valueType] = WidgetKey._object;
                jsonObjParent[key][WidgetKey._value] = {};
            }

            this.createMould(value, jsonMouldObj, keyChild, jsonObjParent[key][WidgetKey._value], isList);
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
                WidgetLog.log("[" + typeof(value) + "]" + keyParent + "->" + key + " = " + value);
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
