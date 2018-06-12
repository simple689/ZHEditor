function PanelFileBrowser() {
    this._WidgetSearch = new WidgetSearch();
    this._menuFoldCtrl = new WidgetMenuFold();
    this._flexCtrl = new WidgetFlex();
}

PanelFileBrowser.prototype.init = function () {
    this.initTop();
    this.initBottom();
    this.initBottomLeft();
    this.initBottomRight();
}
PanelFileBrowser.prototype.initTop = function () {
    this._menuLeftCreate = WidgetMenu.createMenu(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._PanelFileBrowser = this;
    $(createBtn).on("click", PanelFileBrowser.onClickCreateBtn);

    this._WidgetSearch.createSearch(this, createBtn);
}
PanelFileBrowser.prototype.initBottom = function () {
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
PanelFileBrowser.prototype.initBottomLeft = function () {
    var left = document.getElementById("left");
    var foldItem = this._menuFoldCtrl.createMenuFold(left, '全部文件');

    this._jsonFileBrowser = WidgetHistory.getFileBrowser();
    // Log.log(JSON.stringify(jsonObj, null, 2));
    this.readFileBrowser(this._jsonFileBrowser, "/", foldItem);
};
PanelFileBrowser.prototype.initBottomRight = function () {
    var right = document.getElementById("right");
    this._flexCtrl.createFlex(right, '全部文件');
};
PanelFileBrowser.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    for (var o in jsonObj) {
        var value = jsonObj[o];
        if (typeof(value) == "object") {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[WidgetKey._type];
            var name = value[WidgetKey._name];

            var folderList = value[WidgetKey._folderList];
            if (type == WidgetKey._folder) {
                pathChild += name;
                pathChild += "/";
                value["path"] = pathChild;

                var isHasChild = false
                if (folderList && folderList.length > 0) {
                    isHasChild = true;
                    fold = this._menuFoldCtrl.addFold(elementParent, null);
                }
                var element = WidgetHtml.addLabel(fold, this, name, PanelFileBrowser.onClickFolderName, null);
                element._panel = this;
                element._jsonObj = value;
                element.classList.add("folderName");
                // element = WidgetHtml.addLabel(fold, this, pathChild, PanelFileBrowser.onClickFolderPath, null);
                // element.classList.add("folderPath");
                WidgetHtml.addBr(fold);
                if (isHasChild) {
                    fold = this._menuFoldCtrl.addFoldItem(fold._dl);
                }
            }
            this.readFileBrowser(value, pathChild, fold);
        }
    }
}
PanelFileBrowser.prototype.refreshBottomRight = function (jsonObj) {
    this._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == "object") {
        var path = jsonObj["path"];

        var folderList = jsonObj[WidgetKey._folderList];
        var fileList = jsonObj[WidgetKey._fileList];
        for (var o in fileList) {
            var value = fileList[o];
            if (typeof(value) == "object") {
                var name = value[WidgetKey._name];
                var extend = value[WidgetKey._extend];
                var rightContent = document.createElement("div");
                rightContent.innerHTML = path + name + extend;
                var flexItem = this._flexCtrl.addFlexItem(rightContent);
                flexItem.classList.add("rightContent");
            }
        }
    }
};
PanelFileBrowser.onClickCreateBtn = function () {
    WidgetMenu.showMenu(this._PanelFileBrowser._menuLeftCreate, null, this._PanelFileBrowser);
}
PanelFileBrowser.onClickFolderName = function () {
    this._panel.refreshBottomRight(this._jsonObj);
}
PanelFileBrowser.onClickFolderPath = function () {
    this._panel.refreshBottomRight(this._jsonObj);
}
