function WidgetFileJson() {
    WidgetFileBase.call(this);
}

WidgetFileJson.prototype = new WidgetFileBase();
WidgetFileJson.prototype.constructor = WidgetFileJson;

WidgetFileJson.prototype.initRoot = function () {
    var foldItem = WidgetFileBase.prototype.initRoot.apply(this, arguments);

    var jsonMouldName = null;
    if (this._jsonObj) {
        jsonMouldName = this._jsonObj[WidgetKey._jsonMould];
    } else {
        this._jsonObj = {};
    }
    if (!jsonMouldName) {
        jsonMouldName = this._elementTabTitle.innerHTML;
        jsonMouldName = removeFileExtend(jsonMouldName);
        jsonMouldName += "【配套生成】";
        jsonMouldName += WidgetKey._extendJsonMd;
        this._jsonObj[WidgetKey._jsonMould] = jsonMouldName;
    }
    this._fileJsonMouldCtrl = new WidgetFileJsonMould();
    var isNew = this._fileJsonMouldCtrl.getMould(jsonMouldName, this._jsonObj);
    if (isNew) { // 不存在模版
        // todo
        //     this.readObject(this._jsonObj, "root", foldItem, false);
    } else { // 存在模版
        this.readMouldObject(this._fileJsonMouldCtrl._jsonMouldObj[WidgetKey._file], this._jsonObj, "root", foldItem, false);
    }

    var elementTabTitle = panelFileMould._widgetTab.addTitle(jsonMouldName);
    panelFileMould._widgetTab.addContent(elementTabTitle, this._fileJsonMouldCtrl._jsonMouldObj, WidgetTab._addContentType.fileJsonObj);
}
// WidgetFileJson.prototype.readObject = function (jsonObj, keyParent, elementParent, isListParent) {
//     for (var o in jsonObj) {
//         var key = o;
//         var isIgnore = this._fileJsonMouldCtrl.isMouldIgnore(key);
//         if (isIgnore) {
//             continue;
//         }
//         var keyShow = WidgetFileUtil.getKeyShow(key);
//         var value = jsonObj[key];
//         if (typeof(value) == WidgetKey._object) {
//             var keyChild = keyParent;
//             keyChild += "->";
//             keyChild += key;
//             keyChild += "->";
//
//             var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
//             jsonObjCtrl._keyShow = keyShow;
//             jsonObjCtrl._value = value;
//             var isList = false;
//             if (Array.isArray(value)) {
//                 // WidgetLog.log(value);
//                 isList = true;
//                 // jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuList;
//             } else {
//                 // jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuObject;
//             }
//
//             var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
//             this.readObject(value, keyChild, foldItem, isList);
//         } else {
//             var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
//             jsonObjCtrl._keyShow = keyShow;
//             jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuLabel;
//             WidgetHtml.addLabel(elementParent, jsonObjCtrl);
//             jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
//             jsonObjCtrl._value = value;
//             jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuInput;
//             jsonObjCtrl._onChange = WidgetFileJson.onChangeInput;
//             if (typeof(value) == WidgetKey._string) {
//                 WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textString);
//             } else if (typeof(value) == WidgetKey._number) {
//                 WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textNumber);
//             } else if (typeof(value) == WidgetKey._boolean) {
//                 WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._inputType._checkbox);
//             } else {
//                 var strType = typeof(value);
//                 WidgetLog.log("[" + typeof(value) + "]" + keyParent + "->" + key + " = " + value);
//             }
//             if (WidgetFileUtil.isAddBr(key)) {
//                 WidgetHtml.addBr(elementParent);
//             }
//         }
//     }
// }
WidgetFileJson.prototype.readMouldObject = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent) {
    for (var keyMd in jsonObjMd) {
        var valueMd = jsonObjMd[keyMd];
        if (typeof(valueMd) == WidgetKey._object) {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += keyMd;
            keyChild += "->";
            this.readMouldObjectKey(valueMd, jsonObj, keyChild, elementParent, isListParent, keyMd);
        }
    }
}
WidgetFileJson.prototype.readObjectList = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent) {
    for (var key in jsonObj) {
        this.readMouldObjectKey(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    }
}
WidgetFileJson.prototype.readMouldObjectKey = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueTypeMd = jsonObjMd[WidgetKey._valueType];
    if (valueTypeMd == WidgetKey._object) {
        this.readMouldObjectKeyTypeObject(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    } else if (valueTypeMd == WidgetKey._array) {
        this.readMouldObjectKeyTypeArray(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    } else if (valueTypeMd == WidgetKey._enum) {
        this.readMouldObjectKeyTypeEnum(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    } else if (valueTypeMd == WidgetKey._link) {
        this.readMouldObjectKeyTypeLink(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    } else {
        this.readMouldObjectKeyTypeOther(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    }
}
WidgetFileJson.prototype.readMouldObjectKeyTypeObject = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueMd = jsonObjMd[WidgetKey._value];
    var value = jsonObj[key];
    if (!value) {
        jsonObj[key] = {};
        value = jsonObj[key];
    }
    var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    if (isListParent) {
        jsonObjCtrl._keyShow += "_";
        var keyShow = parseInt(key) + 1;
        jsonObjCtrl._keyShow += keyShow;
    }
    jsonObjCtrl._value = value;
    jsonObjCtrl._objMd = jsonObjMd;
    var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);

    for (var keyMd in valueMd) {
        var valueItemMd = valueMd[keyMd];
        this.readMouldObjectKey(valueItemMd, value, keyParent, foldItem, false, keyMd);
    }
}
WidgetFileJson.prototype.readMouldObjectKeyTypeArray = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueMd = jsonObjMd[WidgetKey._value];
    var value = jsonObj[key];
    if (!value) {
        jsonObj[key] = new Array();
        value = jsonObj[key];
    }
    var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._value = value;
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuList;
    var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);

    // jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
    // jsonObjCtrl._keyShow = "列表工具";
    // jsonObjCtrl._objMd = jsonObjMd;
    // WidgetHtml.addLabel(foldItem, jsonObjCtrl);
    //
    // jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
    // jsonObjCtrl._value = "添加成员";
    // jsonObjCtrl._objMd = jsonObjMd;
    // jsonObjCtrl._onClick = WidgetFileOnClick.onClickListToolAdd;
    // WidgetHtml.addInput(foldItem, jsonObjCtrl, WidgetHtml._inputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
    jsonObjCtrl._value = "添加成员";
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onClick = WidgetFileOnClick.onClickListToolAdd;
    WidgetHtml.addInput(foldItem._dt._div, jsonObjCtrl, WidgetHtml._inputType._button);

    for (var keyMd in valueMd) {
        var valueItemMd = valueMd[keyMd];
        this.readObjectList(valueItemMd, value, keyParent, foldItem, true);
        break;
    }
}
WidgetFileJson.prototype.readMouldObjectKeyTypeEnum = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueMd = jsonObjMd[WidgetKey._value];
    var value = jsonObj[key];
    if (!value) {
        jsonObj[key] = {};
        value = jsonObj[key];
    }
    var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._value = value;
    jsonObjCtrl._objMd = jsonObjMd;
    var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuLabel;
    WidgetHtml.addLabel(foldItem, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._objMd = jsonObjMd;

    var enumType = value[WidgetKey._enumType];
    if ((enumType && enumType.length <= 0) || !enumType) {
        value[WidgetKey._enumType] = valueMd[WidgetKey._enumTypeDefault];
        enumType = value[WidgetKey._enumType];
    }
    jsonObjCtrl._value = enumType;

    var jsonListCtrl = new JsonListCtrl(0);
    var enumList = valueMd[WidgetKey._enumList];
    for (var oItemMd in enumList) {
        var valueItemMd = enumList[oItemMd];
        var item = new JsonListItem(oItemMd, valueItemMd[WidgetKey._showTitle]);
        item._paramList = valueItemMd[WidgetKey._enumParamList];
        jsonListCtrl.insertItem(item);
    }
    jsonObjCtrl._valueList = jsonListCtrl.getList();
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuSelect;
    jsonObjCtrl._onChange = WidgetFileOnChange.onChangeSelect;
    WidgetHtml.addSelect(foldItem, jsonObjCtrl);

    WidgetHtml.addBr(foldItem);

    var jsonEnumParamList = enumList[enumType][WidgetKey._enumParamList];
    if (jsonEnumParamList) {
        for (var oItemMd in jsonEnumParamList) {
            var valueItemMd = jsonEnumParamList[oItemMd];
            this.readMouldObjectKey(valueItemMd, value[WidgetKey._enumParamList], keyParent, foldItem, false, oItemMd);
        }
    }
}
WidgetFileJson.prototype.readMouldObjectKeyTypeLink = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueMd = jsonObjMd[WidgetKey._value];
    var value = jsonObj[key];
    if (!value) {
        jsonObj[key] = "";
        value = jsonObj[key];
    }
    var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuLabel;
    WidgetHtml.addLabel(elementParent, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._value = value;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuInput;
    jsonObjCtrl._onChange = WidgetFileOnChange.onChangeInput;
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textString);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._value = "链接";
    jsonObjCtrl._objMd = valueMd;
    jsonObjCtrl._onClick = WidgetFileOnClick.onClickLink;
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._button);

    WidgetHtml.addBr(elementParent);
}
WidgetFileJson.prototype.readMouldObjectKeyTypeOther = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueTypeMd = jsonObjMd[WidgetKey._valueType];
    var valueMd = jsonObjMd[WidgetKey._value];
    var value = jsonObj[key];
    if (!value) {
        jsonObj[key] = "";
        value = jsonObj[key];
    }
    var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuLabel;
    WidgetHtml.addLabel(elementParent, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._value = value;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuInput;
    jsonObjCtrl._onChange = WidgetFileOnChange.onChangeInput;
    if (valueTypeMd == WidgetKey._string) {
        WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textString);
    } else if (valueTypeMd == WidgetKey._number) {
        WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textNumber);
    } else if (valueTypeMd == WidgetKey._boolean) {
        WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._inputType._checkbox);
    } else {
        // WidgetLog.log("[" + valueTypeMd + "]" + keyParent + "->" + key + " = " + value);
    }
    if (WidgetFileUtil.isAddBr(key)) {
        WidgetHtml.addBr(elementParent);
    }
}



WidgetFileJson.listAdd = function (jsonObjCtrl) {
    var jsonObj = jsonObjCtrl._obj;
    var jsonObjKey = jsonObjCtrl._key;
    var list = jsonObj[jsonObjKey];
    if (!list) {
        jsonObj[jsonObjKey] = new Array();
        list = jsonObj[jsonObjKey];
    }
    for (var oItemMd in jsonObjCtrl._objMd[WidgetKey._value]) {
        var valueItemMd = jsonObjCtrl._objMd[WidgetKey._value][oItemMd];
        list.push("");
        WidgetFileJson.a(valueItemMd, list, list.length - 1);
        break;
    }
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJson.a = function (jsonObjMd, jsonObj, key) {
    var valueTypeMd = jsonObjMd[WidgetKey._valueType];
    var valueMd = jsonObjMd[WidgetKey._value];
    if (valueTypeMd == WidgetKey._object) {
        jsonObj[key] = {};
        for (var oItemMd in valueMd) {
            var valueItemMd = valueMd[oItemMd];
            WidgetFileJson.a(valueItemMd, jsonObj[key], oItemMd);
        }
    } else if (valueTypeMd == WidgetKey._array) {
        jsonObj[key] = new Array();
        for (var oItemMd in valueMd) {
            var valueItemMd = valueMd[oItemMd];
            WidgetFileJson.a(valueItemMd, jsonObj[key], oItemMd);
            break;
        }
    } else if (valueTypeMd == WidgetKey._enum) {
        jsonObj[key] = {}
        var enumTypeDefaultMd = valueMd[WidgetKey._enumTypeDefault];
        var enumListMd = valueMd[WidgetKey._enumList];

        var enumItemMd = enumListMd[enumTypeDefaultMd];
        if (enumListMd) {
            var jsonObjEnum = jsonObj[key];
            jsonObjEnum[WidgetKey._enumType] = enumTypeDefaultMd;
            jsonObjEnum[WidgetKey._enumParamList] = {};
            for (var oItemMd in enumItemMd[WidgetKey._enumParamList]) {
                var valueItemMd = enumItemMd[WidgetKey._enumParamList][oItemMd];
                WidgetFileJson.a(valueItemMd, jsonObjEnum[WidgetKey._enumParamList], oItemMd);
            }
        }
    } else if (valueTypeMd == WidgetKey._link) {
        jsonObj[key] = "";
    } else {
        jsonObj[key] = "";
    }
}
WidgetFileJson.prototype.refreshContent = function () {
    var widgetTab = this._elementTabTitle._widgetTab;
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._addContentType.fileJsonObj);
}
