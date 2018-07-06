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
//         var keyShow = this.getKeyShow(key);
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
//             if (this.isAddBr(key)) {
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
        for (var oItemMd in valueMd) {
            var valueItemMd = valueMd[oItemMd];
            this.readObjectMouldEnum(valueItemMd, value, keyParent, foldItem, isList);
        }
    } else if (valueTypeMd == WidgetKey._link) {
        var a = 0;
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
        if (this.isAddBr(key)) {
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
WidgetFileJson.onClickListToolAdd = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;
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
    // var jsonObjValue = jsonObjCtrl._value;
    // if (jsonObjKey == WidgetKey._enumParamList) {
    //     jsonObjValue[jsonObjValue.length] = {};
    //     var jsonItem = jsonObjValue[jsonObjValue.length - 1];
    //
    //     var keyNew = prompt("请输入 Key 的新名字 ：");
    //     if (!keyNew) {
    //         return;
    //     }
    //     jsonItem[keyNew] = {};
    //     jsonItem[keyNew][WidgetKey._enumParamShow] = "";
    //     jsonItem[keyNew][WidgetKey._valueType] = WidgetKey._string;
    // } else {
    //     var jsonObjValueType = jsonObjCtrl._obj[WidgetKey._valueType];
    //     if (jsonObjValueType == WidgetKey._enum) {
    //         jsonObjValue[jsonObjValue.length] = {};
    //         var jsonItem = jsonObjValue[jsonObjValue.length - 1];
    //         jsonItem[WidgetKey._enumKey] = "";
    //         jsonItem[WidgetKey._enumKeyShow] = "";
    //         jsonItem[WidgetKey._enumParamList] = new Array();
    //     } else {
    //         jsonObjValue[jsonObjValue.length] = "";
    //     }
    // }
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
        var index = 0;
        var enumDefaultIndexMd = jsonObjMd[WidgetKey._enumIndex];
        if (enumDefaultIndexMd) {
            index = enumDefaultIndexMd;
        }
        if (valueMd.length > index) {
            var valueItemMd = valueMd[index];

            var jsonObjEnum = jsonObj[key];
            jsonObjEnum[WidgetKey._enumKey] = valueItemMd[WidgetKey._enumKey];
            jsonObjEnum[WidgetKey._enumParamList] = new Array();

            for (var oItemMd in valueItemMd[WidgetKey._enumParamList]) {
                var valueItemMd = valueItemMd[WidgetKey._enumParamList][oItemMd];
                WidgetFileJson.a(valueItemMd, jsonObjEnum, oItemMd);
            }
        }
    } else {
        jsonObj[key] = "";
    }
}
WidgetFileJson.prototype.refreshContent = function () {
    var widgetTab = this._elementTabTitle._widgetTab;
    widgetTab.refreshContent(this._elementTabTitle, this._jsonObj, WidgetTab._addContentType.fileJsonObj);
}
