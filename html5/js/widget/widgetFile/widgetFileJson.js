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

    var jsonMouldName = this._jsonObj[WidgetKey._jsonMould];
    if (!jsonMouldName) {
        jsonMouldName = this._elementTabTitle.innerHTML;
        jsonMouldName = changeFileExtend(jsonMouldName, WidgetFile._extendJsonMd);
    }
    this._fileJsonMouldCtrl = new WidgetFileJsonMould();
    var isNew = this._fileJsonMouldCtrl.getMould(jsonMouldName, this._jsonObj);
    if (isNew) {
        //     this.readObject(this._jsonObj, "", foldItem, false);
    } else {
        this.readObjectMould(this._fileJsonMouldCtrl._jsonMouldObj[WidgetKey._file], this._jsonObj, "", foldItem, false);
    }

    var mouldPanel = this._elementTabTitle._widgetTab._panel._fileMouldPanel;
    var elementTabTitle = mouldPanel._widgetTab.addTitle(jsonMouldName);
    mouldPanel._widgetTab.addContent(elementTabTitle, this._fileJsonMouldCtrl._jsonMouldObj, WidgetTab._addContentType.fileJsonObj);
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
//         if (typeof(value) == WidgetKey._object) {
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
//             WidgetLog.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
//         }
//     }
// }
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
//                 WidgetLog.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
//             }
//             if (WidgetFileUtil.isAddBr(key)) {
//                 WidgetHtml.addBr(elementParent);
//             }
//         }
//     }
// }
WidgetFileJson.prototype.readObjectMould = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent) {
    for (var oMd in jsonObjMd) {
        var keyMd = oMd;
        var valueMd = jsonObjMd[keyMd];
        if (typeof(valueMd) == WidgetKey._object) {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += keyMd;
            keyChild += "->";
            this.readObjectMouldKey(valueMd, jsonObj, keyChild, elementParent, isListParent, keyMd);
        }
    }
}
WidgetFileJson.prototype.readObjectMouldKey = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key) {
    var valueTypeMd = jsonObjMd[WidgetKey._valueType];
    var valueMd = jsonObjMd[WidgetKey._value];
    var value = jsonObj[key];
    if (!value) {
        value = "";
    }
    var isList = false;
    if (valueTypeMd == WidgetKey._object) {
        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        if (isListParent) {
            jsonObjCtrl._keyShow += "_";
            jsonObjCtrl._keyShow += key;
        }
        jsonObjCtrl._value = value;
        jsonObjCtrl._objMd = jsonObjMd;
        var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
        for (var oItemMd in valueMd) {
            var valueItemMd = valueMd[oItemMd];
            this.readObjectMouldKey(valueItemMd, value, keyParent, foldItem, isList, oItemMd);
        }
    } else if (valueTypeMd == WidgetKey._array) {
        isList = true;
        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        jsonObjCtrl._value = value;
        jsonObjCtrl._objMd = jsonObjMd;
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuList;
        var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);
        jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
        jsonObjCtrl._keyShow = "列表工具";
        jsonObjCtrl._objMd = jsonObjMd;
        WidgetHtml.addLabel(foldItem, jsonObjCtrl);
        jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
        jsonObjCtrl._value = "添加成员";
        jsonObjCtrl._objMd = jsonObjMd;
        jsonObjCtrl._onClick = WidgetFileJson.onClickListToolAdd;
        WidgetHtml.addInput(foldItem, jsonObjCtrl, WidgetHtml._inputType._button);
        for (var oItemMd in valueMd) {
            var valueItemMd = valueMd[oItemMd];
            this.readObjectMouldList(valueItemMd, value, keyParent, foldItem, isList);
            break;
        }
    } else if (valueTypeMd == WidgetKey._enum) {
        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        jsonObjCtrl._value = value;
        jsonObjCtrl._objMd = jsonObjMd;
        var foldItem = this._menuFoldCtrl.addFoldAndItem(elementParent, jsonObjCtrl);

        jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuLabel;
        WidgetHtml.addLabel(foldItem, jsonObjCtrl);

        jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        jsonObjCtrl._objMd = jsonObjMd;

        var enumValue = value[WidgetKey._value];
        if ((enumValue && enumValue.length <= 0) || !enumValue) {
            enumValue = valueMd[WidgetKey._enumDefault];
        }
        jsonObjCtrl._value = enumValue;

        var jsonListCtrl = new JsonListCtrl(0);
        var enumList = valueMd[WidgetKey._enumList];
        for (var oItemMd in enumList) {
            var valueItemMd = enumList[oItemMd];
            var item = new JsonListItem(oItemMd,valueItemMd[WidgetKey._showTitle]);
            item._paramList = valueItemMd[WidgetKey._enumParamList];
            jsonListCtrl.insertItem(item);
        }
        jsonObjCtrl._valueList = jsonListCtrl.getList();
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuSelect;
        jsonObjCtrl._onChange = WidgetFileJson.onChangeSelect;
        WidgetHtml.addSelect(foldItem, jsonObjCtrl);

        WidgetHtml.addBr(foldItem);

        var jsonEnumParamList = enumList[enumValue][WidgetKey._enumParamList];
        if (jsonEnumParamList) {
            for (var oItemMd in jsonEnumParamList) {
                var valueItemMd = jsonEnumParamList[oItemMd];
                this.readObjectMouldKey(valueItemMd, value[WidgetKey._enumParamList], keyParent, foldItem, isList, oItemMd);
            }
        }
    } else if (valueTypeMd == WidgetKey._link) {
        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        jsonObjCtrl._objMd = jsonObjMd;
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuLabel;
        WidgetHtml.addLabel(elementParent, jsonObjCtrl);

        jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._value = value;
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuInput;
        jsonObjCtrl._onChange = WidgetFileJson.onChangeInput;
        WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textString);

        WidgetHtml.addBr(elementParent);
    } else {
        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._keyShow = jsonObjMd[WidgetKey._showTitle];
        jsonObjCtrl._objMd = jsonObjMd;
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuLabel;
        WidgetHtml.addLabel(elementParent, jsonObjCtrl);

        jsonObjCtrl = new JsonObjCtrl(this, jsonObj, isListParent, key);
        jsonObjCtrl._value = value;
        jsonObjCtrl._onContextMenu = WidgetFileJson.onContextMenuInput;
        jsonObjCtrl._onChange = WidgetFileJson.onChangeInput;
        if (valueTypeMd == WidgetKey._string) {
            WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textString);
        } else if (valueTypeMd == WidgetKey._number) {
            WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._inputType._textNumber);
        } else if (valueTypeMd == WidgetKey._boolean) {
            WidgetHtml.addInput(elementParent, jsonObj, WidgetHtml._inputType._checkbox);
        } else {
            WidgetLog.log("[" + valueTypeMd + "]" + keyParent + key + " = " + value);
        }
        if (WidgetFileUtil.isAddBr(key)) {
            WidgetHtml.addBr(elementParent);
        }
    }
}
WidgetFileJson.prototype.readObjectMouldList = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent) {
    for (var o in jsonObj) {
        var key = o;
        this.readObjectMouldKey(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    }
}
WidgetFileJson.prototype.readObjectMouldEnum = function (jsonObjMd, jsonObj, keyParent, elementParent, isListParent) {
    for (var o in jsonObj) {
        var key = o;
        // this.readObjectMouldKey(jsonObjMd, jsonObj, keyParent, elementParent, isListParent, key);
    }
}
WidgetFileJson.onContextMenuObject = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._key == WidgetKey._ignore) {
        li = menu.addLi(ul, "暂无功能", null);
    } else if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "添加对象", WidgetFileJsonMould.onClickAddObject);
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileJsonMould.onClickListDel);
    } else {
        li = menu.addLi(ul, "重命名Key", WidgetFileJsonMould.onClickRenameKey);
        li = menu.addLi(ul, "添加对象", WidgetFileJsonMould.onClickAddObject);
        li = menu.addLi(ul, "删除对象", WidgetFileJsonMould.onClickDelObject);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileJson.onContextMenuList = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "列表中添加对象", WidgetFileJson.onClickListAdd);
    li = menu.addLi(ul, "列表中清空对象", WidgetFileJsonMould.onClickListClear);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
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
    return false; // 取消右键点击的默认事件
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
    return false; // 取消右键点击的默认事件
}
WidgetFileJson.onClickListAdd = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    WidgetFileJson.listAdd(jsonObjCtrl);
}
WidgetFileJson.onClickListToolAdd = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;
    WidgetFileJson.listAdd(jsonObjCtrl);
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
        var enumDefaultMd = valueMd[WidgetKey._enumDefault];
        var enumListMd = valueMd[WidgetKey._enumList];

        var enumItemMd = enumListMd[enumDefaultMd];
        if (enumListMd) {
            var jsonObjEnum = jsonObj[key];
            jsonObjEnum[WidgetKey._value] = enumDefaultMd;
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
WidgetFileJson.onChangeSelect = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;
    var jsonObj = jsonObjCtrl._obj;
    var key = jsonObjCtrl._key;
    var enumObj = jsonObj[key];

    var value = this.value;
    enumObj[WidgetKey._value] = value;
    enumObj[WidgetKey._enumParamList] = {};

    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJson.prototype.refreshContent = function () {
    var widgetTab = this._elementTabTitle._widgetTab;
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._addContentType.fileJsonObj);
}
