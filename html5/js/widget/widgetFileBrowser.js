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
    var jsonData = {};
    jsonData[APIData._module] = APIServer._module._fileBrowser;
    WidgetHttpAJAX.createPost(null, jsonData, this, WidgetFileBrowser.ajaxCompleteJsonFileBrowser);
    // WidgetHttpAJAX.createGetJsonp(url, jsonData, this, WidgetFileBrowser.ajaxCompleteJsonFileBrowser);
}
WidgetFileBrowser.ajaxCompleteJsonFileBrowser = function (widgetFileBrowser, error, jsonData) {
    if (error) {
        WidgetFileBrowser._jsonFileBrowser = WidgetHistory.getFileBrowser();
    } else {
        if (jsonData[APIData._data]) {
            WidgetFileBrowser._jsonFileBrowser = jsonData[APIData._data];
        }
    }
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
}
WidgetFileBrowser.prototype.initLeft = function (left) {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, "root");
    jsonObjCtrl._keyShow = "全部文件";
    jsonObjCtrl._onContextMenu = WidgetFileBrowser.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(left, jsonObjCtrl);

    this.readFileBrowser(WidgetFileBrowser._jsonFileBrowser, "/", foldItem);
}
WidgetFileBrowser.prototype.initRight = function (right) {
    this._flexCtrl.createFlex(right, '全部文件');
}
WidgetFileBrowser.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    var jsonObjFolderList = jsonObj[APIData._folderList];
    if (!jsonObjFolderList) {
        return;
    }
    for (var key in jsonObjFolderList) {
        var value = jsonObjFolderList[key];

        if (typeof(value) == WidgetKey._object) {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[APIData._type];

            if (type == APIData._folder) {
                pathChild += key;
                pathChild += "/";
                value["path"] = pathChild;

                var jsonObjCtrl = new JsonObjCtrl(this, value, false, key);
                fold = this._menuFoldCtrl.addFold(elementParent, jsonObjCtrl);

                jsonObjCtrl = new JsonObjCtrl(this, value, false, key);
                jsonObjCtrl._keyShow = key;
                jsonObjCtrl._onClick = WidgetFileBrowser.onClickFolderName;
                jsonObjCtrl._onContextMenu = WidgetFileBrowser.onContextMenuObject;
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
}
WidgetFileBrowser.prototype.refreshFileBrowserRight = function (jsonObj) {
    this._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == WidgetKey._object) {
        var path = jsonObj["path"];

        var folderList = jsonObj[APIData._folderList];
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

        var fileList = jsonObj[APIData._fileList];
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
}
WidgetFileBrowser.prototype.refreshFileBrowserRightPath = function (path) {
    this._nowFolder = path;
    var jsonObj = WidgetFileBrowser.getJsonObjPath(path);
    this.refreshFileBrowserRight(jsonObj);
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
//                     var jsonObjNew = value[APIData._folderList];
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
                var jsonObjNew = value[APIData._folderList];
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
WidgetFileBrowser.onClickRefreshDir = function () {
    // todo
    var widgetFileBrowser = this._jsonObjCtrl._exec;
}
WidgetFileBrowser.onClickCreateDir = function () {
    var widgetFileBrowser = WidgetFileUtil.getJsonObjCtrl(this)._exec;
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogOneInput("新建文件夹", "请输入文件夹名字：", document.body, WidgetFileBrowser.funcCompleteCreateDir);
}
WidgetFileBrowser.funcCompleteCreateDir = function () {
    var a = 0;
}
WidgetFileBrowser.onContextMenuRoot = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    li = menu.addLi(ul, "刷新", WidgetFileBrowser.onClickRefreshDir, null);
    var func = WidgetFileUtil.getExec(this).onContextMenuRoot;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileBrowser.onContextMenuObject = function (e) {
    var path = this._jsonObjCtrl._obj.path;
    var isPersonal = path.indexOf(APIData._personalFoldShow);

    if (isPersonal != -1) {
        var menu = WidgetFileOnContextMenu.createMenu();
        var ul = menu.addUl(menu._elementRoot);
        var li = null;
        li = menu.addLi(ul, "新建文件夹", WidgetFileBrowser.onClickCreateDir, null);

        var func = WidgetFileUtil.getExec(this).onContextMenuObject;
        if (func) func(menu, ul);
        WidgetMenu.showMenu(menu, e, this);
        return false; // 取消右键点击的默认事件
    } else {
    }
}
