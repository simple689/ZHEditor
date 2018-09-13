function WidgetFileBrowser() {
    this._menuFoldCtrl = new WidgetMenuFold();
    this._flexCtrl = new WidgetFlex();
    this._nowFolder = "/";
}

WidgetFileBrowser._jsonFileBrowser = null;

WidgetFileBrowser.prototype.create = function (elementParent) {
    this._divMain = WidgetHtml.addDiv(elementParent);
    WidgetHtml.classAdd(this._divMain, "widgetFileBrowserMain");

    this._divLeft = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divLeft, "widgetFileBrowserLeft");

    this._divMiddle = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divMiddle, "widgetFileBrowserMiddle");

    this._divRight = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divRight, "widgetFileBrowserRight");

    // 从服务器获取数据，如果失败，从历史获取数据
    var url = confHttpRoot;
    var jsonData = {
        "module": APIServer._module._fileBrowser,
    };
    WidgetHttpAJAX.createPost(url, jsonData, this,
        WidgetFileBrowser.ajaxSuccessJsonFileBrowser, WidgetFileBrowser.ajaxErrorJsonFileBrowser);
    // WidgetHttpAJAX.createGetJsonp(url, jsonData, this,
    //     WidgetFileBrowser.ajaxSuccessJsonFileBrowser, WidgetFileBrowser.ajaxErrorJsonFileBrowser);
}
WidgetFileBrowser.ajaxSuccessJsonFileBrowser = function (widgetFileBrowser, data) {
    if (data[APIKey._data]) {
        WidgetFileBrowser._jsonFileBrowser = data[APIKey._data];
    }
    widgetFileBrowser.initDefault();
}
WidgetFileBrowser.ajaxErrorJsonFileBrowser = function (widgetFileBrowser, error, e) {
    WidgetFileBrowser._jsonFileBrowser = WidgetHistory.getFileBrowser();
    widgetFileBrowser.initDefault();
}
WidgetFileBrowser.prototype.initDefault = function () {
    this.init(this._divLeft, this._divMiddle, this._divRight);
}
WidgetFileBrowser.prototype.init = function (left, middle, right) {
    // WidgetLog.log(JSON.stringify(WidgetFileBrowser._jsonFileBrowser, null, 2));
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

    this.initLeft(left);
    this.initRight(right);
};
WidgetFileBrowser.prototype.initLeft = function (left) {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, "root");
    jsonObjCtrl._keyShow = "全部文件";
    jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(left, jsonObjCtrl);

    this.readFileBrowser(WidgetFileBrowser._jsonFileBrowser, "/", foldItem);
};
WidgetFileBrowser.prototype.initRight = function (right) {
    this._flexCtrl.createFlex(right, '全部文件');
};
WidgetFileBrowser.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    var jsonObjFolderList = jsonObj[APIKey._folderList];
    if (!jsonObjFolderList) {
        return;
    }
    for (var key in jsonObjFolderList) {
        var value = jsonObjFolderList[key];

        if (typeof(value) == WidgetKey._object) {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[APIKey._type];

            if (type == APIKey._folder) {
                pathChild += key;
                pathChild += "/";
                value["path"] = pathChild;

                var jsonObjCtrl = new JsonObjCtrl(this, value, false, key);
                fold = this._menuFoldCtrl.addFold(elementParent, jsonObjCtrl);

                jsonObjCtrl = new JsonObjCtrl(this, value, false, key);
                jsonObjCtrl._keyShow = key;
                jsonObjCtrl._onClick = WidgetFileBrowser.onClickFolderName;
                var element = WidgetHtml.addLabel(fold, jsonObjCtrl);
                WidgetHtml.classAdd(element, "widgetFileBrowserLeftFolderName");
                // element = WidgetHtml.addLabel(fold, this, pathChild, pathChild, WidgetFileBrowser.onClickFolderPath, null);
                // WidgetHtml.classAdd(element, "widgetFileBrowserLeftFolderPath");
                WidgetHtml.addBr(fold);
                fold = this._menuFoldCtrl.addFoldItem(fold);
            }
            this.readFileBrowser(value, pathChild, fold);
        }
    }
}
WidgetFileBrowser.prototype.refreshFileBrowserLeft = function () {
    removeElementChild(this._divLeft);
    this.initLeft(this._divLeft);

    var jsonObjFolder = WidgetFileBrowser.getJsonObjPath(this._nowFolder);
    this.refreshFileBrowserRight(jsonObjFolder); // 记住当前选中文件夹，刷新
};
WidgetFileBrowser.prototype.refreshFileBrowserRight = function (jsonObj) {
    this._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == WidgetKey._object) {
        var path = jsonObj["path"];

        var folderList = jsonObj[APIKey._folderList];
        for (var o in folderList) {
            var key = o;
            var value = folderList[o];
            if (typeof(value) == WidgetKey._object) {
                var rightContent = WidgetHtml.createElement("div");
                // rightContent.innerHTML = path + key;
                rightContent.innerHTML = key;
                var flexItem = this._flexCtrl.addFlexItem(rightContent);
                WidgetHtml.classAdd(flexItem, "widgetFileBrowserRightContent");
            }
        }

        var fileList = jsonObj[APIKey._fileList];
        for (var o in fileList) {
            var key = o;
            var value = fileList[o];
            if (typeof(value) == WidgetKey._object) {
                var rightContent = WidgetHtml.createElement("div");
                // rightContent.innerHTML = path + key;
                rightContent.innerHTML = key;
                var flexItem = this._flexCtrl.addFlexItem(rightContent);
                WidgetHtml.classAdd(flexItem, "widgetFileBrowserRightContent");
            }
        }
    }
};
WidgetFileBrowser.prototype.refreshFileBrowserRightPath = function (path) {
    this._nowFolder = path;
    var jsonObj = WidgetFileBrowser.getJsonObjPath(path);
    this.refreshFileBrowserRight(jsonObj);
};
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
//                     var jsonObjNew = value[APIKey._folderList];
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

WidgetFileBrowser.getJsonObjPath = function (folder) {
    var folderList = folder.split("/");
    return WidgetFileBrowser.getJsonObjFolder(folderList, WidgetFileBrowser._jsonFileBrowser, WidgetFileBrowser._jsonFileBrowser);
}
WidgetFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
    for (var i = 0; i < folderList.length; i++) {
        var item = folderList[i];
        if (item.length > 0) {
            var value = jsonObj[item];
            if (value) {
                var folderListNew = folderList.slice(i + 1, folderList.length + 1);
                var jsonObjNew = value[APIKey._folderList];
                return WidgetFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
            }
        }
        if (i == folderList.length - 1) {
            return jsonObjOrg;
        }
    }
    return null;
}
WidgetFileBrowser.onClickFolderName = function () {
    var widgetFileBrowser = this._jsonObjCtrl._exec;
    widgetFileBrowser._nowFolder = this._jsonObjCtrl._obj["path"];
    widgetFileBrowser.refreshFileBrowserRight(this._jsonObjCtrl._obj);
    if (widgetFileBrowser._nowFolderElement) {
        widgetFileBrowser._nowFolderElement.value = widgetFileBrowser._nowFolder;
    }
}
WidgetFileBrowser.onClickFolderPath = function () {
    var widgetFileBrowser = this._jsonObjCtrl._exec;
    widgetFileBrowser.refreshFileBrowserRight(this._jsonObjCtrl._obj);
}
