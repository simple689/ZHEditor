function WidgetFileBrowser() {
    this._menuFoldCtrl = new WidgetMenuFold();
    this._flexCtrl = new WidgetFlex();
    this._nowFolder = "/";
}

WidgetFileBrowser._jsonFileBrowser = null;

WidgetFileBrowser.prototype.createFileBrowser = function (elementParent) {
    WidgetFileBrowser._jsonFileBrowser = WidgetHistory.getFileBrowser();
    // WidgetLog.log(JSON.stringify(jsonObj, null, 2));

    this._divFileBrowser = WidgetHtml.addDiv(elementParent);
    this._divFileBrowser.classList.add("widgetFileBrowser");

    this._divLeft = WidgetHtml.addDiv(this._divFileBrowser);
    this._divLeft.classList.add("widgetFileBrowserLeft");

    this._divMiddle = WidgetHtml.addDiv(this._divFileBrowser);
    this._divMiddle.classList.add("widgetFileBrowserMiddle");

    this._divRight = WidgetHtml.addDiv(this._divFileBrowser);
    this._divRight.classList.add("widgetFileBrowserRight");

    this.initFileBrowser(this._divLeft, this._divMiddle, this._divRight);
}

WidgetFileBrowser.prototype.initFileBrowser = function (left, middle, right) {
    middle.onmousedown = function (e) {
        var x = (e || event).clientX;
        middle.left = middle.offsetLeft;
        document.onmousemove = function (e) {
            var iT = middle.left + ((e || event).clientX - x);
            var maxT = document.body.clientWidth;
            iT < 30 && (iT = 30);
            iT > maxT && (iT = maxT);
            middle.style.left = left.style.width = iT + "px";
            return false
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            middle.releaseCapture && middle.releaseCapture()
        };
        middle.setCapture && middle.setCapture();
        return false
    };

    this.initFileBrowserLeft(left);
    this.initFileBrowserRight(right);
};
WidgetFileBrowser.prototype.initFileBrowserLeft = function (left) {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, "root");
    jsonObjCtrl._keyShow = "全部文件";
    jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(left, jsonObjCtrl);

    this.readFileBrowser(WidgetFileBrowser._jsonFileBrowser, "/", foldItem);
};
WidgetFileBrowser.prototype.initFileBrowserRight = function (right) {
    this._flexCtrl.createFlex(right, '全部文件');
};
WidgetFileBrowser.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;
        var value = jsonObj[key];
        if (typeof(value) == WidgetKey._object) {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[WidgetKey._type];
            var folderList = value[WidgetKey._folderList];
            var isHasChild = false;

            if (type == WidgetKey._folder) {
                pathChild += key;
                pathChild += "/";
                value["path"] = pathChild;

                if (folderList) {
                    for (var i in folderList) {
                        isHasChild = true;
                        fold = this._menuFoldCtrl.addFold(elementParent, null);
                        break;
                    }
                }

                var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
                jsonObjCtrl._keyShow = key;
                jsonObjCtrl._onClick = WidgetFileBrowser.onClickFolderName;

                var element = WidgetHtml.addLabel(fold, jsonObjCtrl);
                element._jsonObj = value;
                element.classList.add("fileBrowserLeftFolderName");
                // element = WidgetHtml.addLabel(fold, this, pathChild, pathChild, WidgetFileBrowser.onClickFolderPath, null);
                // element.classList.add("fileBrowserLeftFolderPath");
                WidgetHtml.addBr(fold);
                if (isHasChild) {
                    fold = this._menuFoldCtrl.addFoldItem(fold._dl);
                }
            }
            if (isHasChild) {
                this.readFileBrowser(folderList, pathChild, fold);
            }
        }
    }
}
WidgetFileBrowser.prototype.refreshFileBrowserLeft = function () {
    removeElementChild(this._divLeft);
    this.initFileBrowserLeft(this._divLeft);

    var folderList = this._nowFolder.split("/");
    var jsonObjFolder = WidgetFileBrowser.getJsonObjFolder(folderList, WidgetFileBrowser._jsonFileBrowser, WidgetFileBrowser._jsonFileBrowser);
    this.refreshFileBrowserRight(jsonObjFolder); // 记住当前选中文件夹，刷新
};
WidgetFileBrowser.prototype.refreshFileBrowserRight = function (jsonObj) {
    this._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == WidgetKey._object) {
        var path = jsonObj["path"];

        var fileList = jsonObj[WidgetKey._fileList];
        for (var o in fileList) {
            var key = o;
            var value = fileList[o];
            if (typeof(value) == WidgetKey._object) {
                var extend = value[WidgetKey._extend];
                var rightContent = document.createElement("div");
                // rightContent.innerHTML = path + key + extend;
                rightContent.innerHTML = key + extend;
                var flexItem = this._flexCtrl.addFlexItem(rightContent);
                flexItem.classList.add("fileBrowserRightContent");
            }
        }
    }
};
WidgetFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
    for (var i = 0; i < folderList.length; i++) {
        var item = folderList[i];
        if (item.length > 0) {
            var value = jsonObj[item];
            if (value) {
                var folderListNew = folderList.slice(i + 1, folderList.length + 1);
                var jsonObjNew = value[WidgetKey._folderList];
                return WidgetFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
            }
        }
        if (i == folderList.length - 1) {
            return jsonObjOrg;
        }
    }
    return null;
}
// WidgetFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
//     for (var i = 0; i < folderList.length; i++) {
//         var item = folderList[i];
//         if (item.length > 0) {
//             for (var o in jsonObj) {
//                 var key = o;
//                 var value = jsonObj[key];
//                 var keyShow = value[WidgetKey._title];
//                 if (item == keyShow) {
//                     var folderListNew = folderList.slice(i + 1, folderList.length + 1);
//                     var jsonObjNew = value[WidgetKey._folderList];
//                     return WidgetFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
//                 }
//             }
//         }
//         if (i == folderList.length - 1) {
//             return jsonObjOrg;
//         }
//     }
//     return null;
// }
WidgetFileBrowser.onClickFolderName = function () {
    var widgetFileBrowser = this._jsonObjCtrl._exec;
    widgetFileBrowser._nowFolder = this._jsonObj["path"];
    widgetFileBrowser.refreshFileBrowserRight(this._jsonObj);
    if (widgetFileBrowser._nowFolderElement) {
        widgetFileBrowser._nowFolderElement.value = widgetFileBrowser._nowFolder;
    }
}
WidgetFileBrowser.onClickFolderPath = function () {
    var widgetFileBrowser = this._jsonObjCtrl._exec;
    widgetFileBrowser.refreshFileBrowserRight(this._jsonObj);
}
