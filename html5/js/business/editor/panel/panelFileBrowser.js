function PanelFileBrowserCtrl() {
    this._widgetSearchCtrl = new WidgetSearchCtrl();
    this._menuFoldCtrl = new WidgetMenuFoldCtrl();
    this._flexCtrl = new WidgetFlexCtrl();
}

PanelFileBrowserCtrl.prototype.init = function () {
    this.initTop();
    this.initBottom();
    this.initBottomLeft();
    this.initBottomRight();
}
PanelFileBrowserCtrl.prototype.initTop = function () {
    this._menuLeftCreate = WidgetMenuCtrl.createMenu(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._panelFileBrowserCtrl = this;
    $(createBtn).on("click", PanelFileBrowserCtrl.onClickCreateBtn);

    this._widgetSearchCtrl.createSearch(this, createBtn);
}
PanelFileBrowserCtrl.prototype.initBottom = function () {
    var left = document.getElementById("left");
    var middle = document.getElementById("middle");

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
};
PanelFileBrowserCtrl.prototype.initBottomLeft = function () {
    var left = document.getElementById("left");
    var foldItem = this._menuFoldCtrl.createMenuFold(left, '全部文件');

    this._jsonFileBrowser = WidgetHistoryCtrl.getFileBrowser();
    // LogCtrl.log(JSON.stringify(jsonObj, null, 2));
    this.readFileBrowser(this._jsonFileBrowser, "/", foldItem);
};
PanelFileBrowserCtrl.prototype.initBottomRight = function () {
    var right = document.getElementById("right");
    this._flexCtrl.createFlex(right, '全部文件');

    // for (var i = 0; i < 10; i++) {
    //     var rightContent = document.createElement("div");
    //     rightContent.innerHTML = "文件 : " + i;
    //     var flexItem = this._flexCtrl.addFlexItem(rightContent);
    //     flexItem.classList.add("rightContent");
    //
    //     var rightContentNew = document.createElement("div");
    //     rightContentNew.innerHTML = "新文件 : " + i;
    //     flexItem.removeChild(flexItem.childNodes[0]);
    //     flexItem.appendChild(rightContentNew);
    // }
};
PanelFileBrowserCtrl.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    for (var o in jsonObj) {
        var value = jsonObj[o];
        if (typeof(value) == "object") {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[WidgetHistoryCtrl._keyType];
            var name = value[WidgetHistoryCtrl._keyName];

            var folderList = value["folderList"];
            if (type == WidgetHistoryCtrl._keyFolder) {
                pathChild += name;
                pathChild += "/";
                value["path"] = pathChild;

                var isHasChild = false
                if (folderList && folderList.length > 0) {
                    isHasChild = true;
                    fold = this._menuFoldCtrl.addFold(elementParent, null);
                }
                var element = WidgetHtmlCtrl.addLabel(fold, this, name, PanelFileBrowserCtrl.onClickFolderName, null);
                element._panel = this;
                element._jsonObj = value;
                element.classList.add("folderName");
                // element = WidgetHtmlCtrl.addLabel(fold, this, pathChild, PanelFileBrowserCtrl.onClickFolderPath, null);
                // element.classList.add("folderPath");
                WidgetHtmlCtrl.addBr(fold);
                if (isHasChild) {
                    fold = this._menuFoldCtrl.addFoldItem(fold._dl);
                }
            }
            this.readFileBrowser(value, pathChild, fold);
        }
    }
}
PanelFileBrowserCtrl.prototype.refreshBottomRight = function (jsonObj) {
    this._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == "object") {
        var path = jsonObj["path"];

        var folderList = jsonObj["folderList"];
        var fileList = jsonObj["fileList"];
        for (var o in fileList) {
            var value = fileList[o];
            if (typeof(value) == "object") {
                var type = value[WidgetHistoryCtrl._keyType];
                var name = value[WidgetHistoryCtrl._keyName];
                var extend = value["extend"];
                if (type == WidgetHistoryCtrl._keyFile) {
                    var rightContent = document.createElement("div");
                    rightContent.innerHTML = name + extend;
                    var flexItem = this._flexCtrl.addFlexItem(rightContent);
                    flexItem.classList.add("rightContent");
                }
            }
        }
    }
};
PanelFileBrowserCtrl.onClickCreateBtn = function () {
    WidgetMenuCtrl.showMenu(this._panelFileBrowserCtrl._menuLeftCreate, null, this._panelFileBrowserCtrl);
}
PanelFileBrowserCtrl.onClickFolderName = function () {
    this._panel.refreshBottomRight(this._jsonObj);
}
PanelFileBrowserCtrl.onClickFolderPath = function () {
    this._panel.refreshBottomRight(this._jsonObj);
}
