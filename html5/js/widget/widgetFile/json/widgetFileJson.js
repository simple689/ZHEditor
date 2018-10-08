function WidgetFileJson() {
    WidgetFileBase.call(this);
}

WidgetFileJson.prototype = new WidgetFileBase();
WidgetFileJson.prototype.constructor = WidgetFileJson;

WidgetFileJson._enumInitMouldType = {
    _tab: 0,
    _file: 1,
    _json: 2
}

WidgetFileJson.prototype.initRoot = function () {
    this._rootFoldItem = WidgetFileBase.prototype.initRoot.apply(this, arguments);

    var jsonMouldName = null;
    if (this._jsonObj) {
        jsonMouldName = this._jsonObj[APIData._jsonMould];
    } else {
        this._jsonObj = {};
    }
    this._widgetFileJsonMould = new WidgetFileJsonMould();
    this.initMould(jsonMouldName, WidgetFileJson.callbackInitMould);
}
WidgetFileJson.prototype.initMould = function (jsonMouldName, callback) {
    if (jsonMouldName) { // 打开已存在的模版
        this._jsonObj[APIData._jsonMould] = jsonMouldName;
        if (this._widgetFileJsonMould.getMouldFromWidgetTab(jsonMouldName)) { // 从tab找到
            callback(WidgetFileJson._enumInitMouldType._tab);
        } else if (this._widgetFileJsonMould.getMouldFromFile(jsonMouldName)) { // 从file找到
            callback(WidgetFileJson._enumInitMouldType._file);
        } else { // 没有找到
            this.initMould(null, callback);
        }
    } else {
        // 弹框：选择模版 or 生成模版
        var widgetDialog = new WidgetDialog();
        widgetDialog._exec = this;
        var choiceList = new Array();
        choiceList.push(new ChoiceListItem("选择模版", WidgetFileJson.openMould));
        choiceList.push(new ChoiceListItem("生成模版", WidgetFileJson.creatMould));
        widgetDialog.createDialogChoiceList(document.body, "json模版", "查找关联模版失败，请选择下列操作：", choiceList, callback);
    }
}
WidgetFileJson.openMould = function () { // 弹文件选择框
    var exec = WidgetFileUtil.getExec(this);
    if (!exec) {
        return;
    }
    var widgetDialog = new WidgetDialog();
    widgetDialog._exec = exec;
    widgetDialog.createDialogFileBrowser(document.body, "打开json模版", null, WidgetDialog._enumFileBrowserType._open, WidgetFileJson.callbackOpenMould);
}
WidgetFileJson.callbackOpenMould = function (ok, value) {
    if (ok) {
        var widgetDialog = this._exec;
        var widgetFileJson = widgetDialog._exec;
        widgetFileJson._jsonObj[APIData._jsonMould] = value;
        if (widgetDialog._callback) {
            widgetDialog._callback(WidgetFileJson._enumInitMouldType._file);
        }
        widgetDialog.close();
    }
}
WidgetFileJson.creatMould = function () {
    var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(this);
    if (!jsonObjCtrl) {
        return;
    }
    var exec = jsonObjCtrl._exec;
    if (!exec) {
        return;
    }
    var widgetFileJson = exec._exec;
    var jsonMouldName = widgetFileJson._elementTabContent._elementTabTitle._title;
    jsonMouldName = removeFileExtend(jsonMouldName);
    jsonMouldName += "【配套生成】";
    jsonMouldName += APIData._extendJsonMd;
    widgetFileJson._jsonObj[APIData._jsonMould] = jsonMouldName;
    if (exec._callback) {
        exec._callback(WidgetFileJson._enumInitMouldType._json);
    }
    exec.close();
}
WidgetFileJson.callbackInitMould = function (initMouldType) {
    // 从tab获取，直接取值，通过jsonMd创建json
    // 从文件打开，附加到tab，通过jsonMd创建json
    // 从json创建，通过json创建jsonMd，附加到tab，通过jsonMd创建json
    var widgetFileJson = this._exec;
    if (initMouldType == WidgetFileJson._enumInitMouldType._tab) {

    } else {
        if (initMouldType == WidgetFileJson._enumInitMouldType._file) {

        } else if (initMouldType == WidgetFileJson._enumInitMouldType._json) {
            if (widgetFileJson._widgetFileJsonMould.getMouldFromJson(widgetFileJson._jsonObj)) { // 通过json创建jsonMd
                // 附加到tab
                var elementTabTitle = gPanelFileMould._widgetTab.addTitle(widgetFileJson._jsonObj[APIData._jsonMould]);
                gPanelFileMould._widgetTab.addContent(elementTabTitle, widgetFileJson._widgetFileJsonMould._jsonMouldObj, WidgetTab._enumAddContentType.fileJsonObj);
            }
        }
    }
    // 通过jsonMd创建json
    // this.readObject(this._jsonObj, "root", foldItem, false);
    widgetFileJson.readMouldObject(widgetFileJson._widgetFileJsonMould._jsonMouldObj[WidgetKey._file], widgetFileJson._jsonObj, "root", widgetFileJson._rootFoldItem, false);
}

// WidgetFileJson.prototype.readObject = function (jsonObj, keyParent, elementParent, isListParent) {
//     for (var o in jsonObj) {
//         var key = o;
//         var isIgnore = this._widgetFileJsonMould.isMouldIgnore(key);
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
//             var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl, true);
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
//                 WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._textString);
//             } else if (typeof(value) == WidgetKey._number) {
//                 WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._textNumber);
//             } else if (typeof(value) == WidgetKey._boolean) {
//                 WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._enumInputType._checkbox);
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
    var foldDdItem = elementParent;
    for (var keyMd in jsonObjMd) {
        var valueMd = jsonObjMd[keyMd];
        if (typeof(valueMd) == WidgetKey._object) {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += keyMd;
            keyChild += "->";
            foldDdItem = this.readMouldObjectKey(valueMd, jsonObj, keyChild, foldDdItem, isListParent, keyMd);
        }
    }
}
WidgetFileJson.prototype.readObjectList = function (jsonObjMd, jsonObjMdParent, jsonObj, keyParent, elementParent, isListParent) {
    for (var key in jsonObj) {
        // todo 加节点
        var value = jsonObj[key];
        var jsonObjCtrl = new JsonObjCtrl(this, value, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMdParent[WidgetKey._showTitle];
        if (isListParent) {
            jsonObjCtrl._keyShow += "_";
            var keyShow = parseInt(key) + 1;
            jsonObjCtrl._keyShow += keyShow;
        }
        var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl, true);

        jsonObjCtrl = new JsonObjCtrl(this, value, false, key);
        jsonObjCtrl._value = "删除该成员";
        jsonObjCtrl._objMd = jsonObjMd;
        jsonObjCtrl._onClick = WidgetFileOnClick.onClickListToolDel;
        WidgetHtml.addInput(foldItem._dt._divTool, jsonObjCtrl, WidgetHtml._enumInputType._button);

        var keyChild = keyParent;
        keyChild += "->";
        keyChild += key;
        keyChild += "->";

        var foldDdItem = foldItem;
        for (var keyMd in jsonObjMd) {
            foldDdItem = this.readMouldObjectKey(jsonObjMd[keyMd], value, keyChild, foldDdItem, isListParent, keyMd);
        }
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
        return this.readMouldObjectKeyTypeOther(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    }
    return elementParent;
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
    var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl, true);

    var foldDdItem = foldItem;
    for (var keyMd in valueMd) {
        var valueItemMd = valueMd[keyMd];
        foldDdItem = this.readMouldObjectKey(valueItemMd, value, keyParent, foldDdItem, false, keyMd);
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
    var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl, true);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
    jsonObjCtrl._value = "添加列表成员";
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onClick = WidgetFileOnClick.onClickListToolAdd;
    WidgetHtml.addInput(foldItem._dt._divTool, jsonObjCtrl, WidgetHtml._enumInputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
    jsonObjCtrl._value = "清空列表成员";
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onClick = WidgetFileOnClick.onClickListToolClear;
    WidgetHtml.addInput(foldItem._dt._divTool, jsonObjCtrl, WidgetHtml._enumInputType._button);

    // for (var keyMd in valueMd) {
    //     var valueItemMd = valueMd[keyMd];
    //     this.readObjectList(valueItemMd, value, keyParent, foldItem, true);
    //     break;
    // }
    this.readObjectList(valueMd, jsonObjMd, value, keyParent, foldItem, true);
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
    var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl, true);

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
    var foldDdItem = foldItem;
    if (jsonEnumParamList) {
        for (var oItemMd in jsonEnumParamList) {
            var valueItemMd = jsonEnumParamList[oItemMd];
            foldDdItem = this.readMouldObjectKey(valueItemMd, value[WidgetKey._enumParamList], keyParent, foldDdItem, false, oItemMd);
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
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._textString);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._value = "链接";
    jsonObjCtrl._objMd = valueMd;
    jsonObjCtrl._onClick = WidgetFileOnClick.onClickLink;
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._button);

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

    var foldDdItem = elementParent;
    if (!WidgetHtml.classContains(foldDdItem, "widgetMenuFoldDdItem")) {
        foldDdItem = WidgetHtml.addDiv(elementParent);
        WidgetHtml.classAdd(foldDdItem, "widgetMenuFoldDdItem");

        foldDdItem._elementContent = WidgetHtml.addSpan(foldDdItem);

        foldDdItem._elementTool = WidgetHtml.addSpan(foldDdItem);
        WidgetHtml.classAdd(foldDdItem._elementTool, "widgetMenuFoldDdItemTool");
    }

    var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
    jsonObjCtrl._objMd = jsonObjMd;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuLabel;
    WidgetHtml.addLabel(foldDdItem._elementContent, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
    jsonObjCtrl._value = value;
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuInput;
    jsonObjCtrl._onChange = WidgetFileOnChange.onChangeInput;
    if (valueTypeMd == WidgetKey._string) {
        WidgetHtml.addInput(foldDdItem._elementContent, jsonObjCtrl, WidgetHtml._enumInputType._textString);
    } else if (valueTypeMd == WidgetKey._number) {
        WidgetHtml.addInput(foldDdItem._elementContent, jsonObjCtrl, WidgetHtml._enumInputType._textNumber);
    } else if (valueTypeMd == WidgetKey._boolean) {
        WidgetHtml.addInput(foldDdItem._elementContent, jsonObj, WidgetHtml._enumInputType._checkbox);
    } else {
        // WidgetLog.log("[" + valueTypeMd + "]" + keyParent + "->" + key + " = " + value);
    }

    jsonObjCtrl = new JsonObjCtrl(this, value, false, key);
    jsonObjCtrl._value = "复制Key：";
    jsonObjCtrl._objMd = valueMd;
    jsonObjCtrl._onClick = WidgetFileOnClick.onClickListToolDel;
    WidgetHtml.addInput(foldDdItem._elementTool, jsonObjCtrl, WidgetHtml._enumInputType._button);


    if (WidgetFileUtil.isAddBr(key)) {
        // WidgetHtml.addBr(elementParent);
        return elementParent;
    }
    return foldDdItem;
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
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._enumAddContentType.fileJsonObj);
}
