function PanelFileBrowserController() {
    this._widgetSearchController = new WidgetSearchController();
    this._menuFoldController = new WidgetMenuFoldController();
    this._flexController = new WidgetFlexController();
}

PanelFileBrowserController.prototype.init = function () {
    this.initTop();
    this.initBottom();
    this.initBottomLeft();
    this.initBottomRight();
}
PanelFileBrowserController.prototype.initTop = function () {
    this._menuLeftCreate = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._panelFileBrowserController = this;
    $(createBtn).on("click", PanelFileBrowserController.onClickCreateBtn);

    this._widgetSearchController.createSearch(this, createBtn);
}
PanelFileBrowserController.prototype.initBottom = function () {
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
PanelFileBrowserController.prototype.initBottomLeft = function () {
    var left = document.getElementById("left");
    var foldItem = this._menuFoldController.createMenuFold(left, '全部文件');

    this._jsonFileBrowser = WidgetHistoryController.getFileBrowser();
    // LogController.log(JSON.stringify(jsonObj, null, 2));
    this.readFileBrowser(this._jsonFileBrowser, "/", foldItem);
};
PanelFileBrowserController.prototype.initBottomRight = function () {
    var right = document.getElementById("right");
    this._flexController.createFlex(right, '全部文件');

    // for (var i = 0; i < 10; i++) {
    //     var rightContent = document.createElement("div");
    //     rightContent.innerHTML = "文件 : " + i;
    //     var flexItem = this._flexController.addFlexItem(rightContent);
    //     flexItem.classList.add("rightContent");
    //
    //     var rightContentNew = document.createElement("div");
    //     rightContentNew.innerHTML = "新文件 : " + i;
    //     flexItem.removeChild(flexItem.childNodes[0]);
    //     flexItem.appendChild(rightContentNew);
    // }
};
PanelFileBrowserController.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    for (var o in jsonObj) {
        var value = jsonObj[o];
        if (typeof(value) == "object") {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value["type"];
            var name = value["name"];

            var folderList = value["folderList"];
            if (type == "folder") {
                pathChild += name;
                pathChild += "/";
                value["path"] = pathChild;

                var isHasChild = false
                if (folderList && folderList.length > 0) {
                    isHasChild = true;
                    fold = this._menuFoldController.addFold(elementParent, null);
                }
                var element = WidgetHtmlControl.addLabel(fold, this, name, PanelFileBrowserController.onClickFolderName, null);
                element._panel = this;
                element._jsonObj = value;
                element.classList.add("folderName");
                // element = WidgetHtmlControl.addLabel(fold, this, pathChild, PanelFileBrowserController.onClickFolderPath, null);
                // element.classList.add("folderPath");
                WidgetHtmlControl.addBr(fold);
                if (isHasChild) {
                    fold = this._menuFoldController.addFoldItem(fold._dl);
                }
            }
            this.readFileBrowser(value, pathChild, fold);
        }
    }
}
PanelFileBrowserController.prototype.refreshBottomRight = function (jsonObj) {
    this._flexController.clearFlexItem();

    if (typeof(jsonObj) == "object") {
        var path = jsonObj["path"];

        var folderList = jsonObj["folderList"];
        var fileList = jsonObj["fileList"];
        for (var o in fileList) {
            var value = fileList[o];
            if (typeof(value) == "object") {
                var type = value["type"];
                var name = value["name"];
                var extend = value["extend"];
                if (type == "file") {
                    var rightContent = document.createElement("div");
                    rightContent.innerHTML = name + extend;
                    var flexItem = this._flexController.addFlexItem(rightContent);
                    flexItem.classList.add("rightContent");
                }
            }
        }
    }
};
PanelFileBrowserController.onClickCreateBtn = function () {
    WidgetMenuController.showMenu(this._panelFileBrowserController._menuLeftCreate, null, this._panelFileBrowserController);
}
PanelFileBrowserController.onClickFolderName = function () {
    this._panel.refreshBottomRight(this._jsonObj);
}
PanelFileBrowserController.onClickFolderPath = function () {
    this._panel.refreshBottomRight(this._jsonObj);
}
