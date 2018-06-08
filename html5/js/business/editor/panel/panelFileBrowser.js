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
    $(createBtn).on("click", PanelFileBrowserController.create);

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
    this._fileBrowserStr = '{}';
    var jsonObj = JSON.parse(this._fileBrowserStr, null); // 通过parse获取json对应键值
    jsonObj["json"] = {};
    jsonObj["json"]["type"] = "folder";
    jsonObj["json"]["name"] = "json";
    jsonObj["json"]["path"] = "/";
    jsonObj["jsonTemplate"] = {};
    jsonObj["jsonTemplate"]["type"] = "folder";
    jsonObj["jsonTemplate"]["name"] = "json模版";
    jsonObj["jsonTemplate"]["path"] = "/";
    jsonObj["personal"] = {};
    jsonObj["personal"]["type"] = "folder";
    jsonObj["personal"]["name"] = "个人文件夹";
    jsonObj["personal"]["path"] = "/";
    jsonObj["personal"]["list"] = new Array();

    var jsonList = jsonObj["personal"]["list"];
    jsonList.push({});
    var index = jsonList.length - 1;
    jsonList[index]["type"] = "folder";
    jsonList[index]["name"] = "json";
    jsonList[index]["path"] = "/";

    jsonList.push({});
    index = jsonList.length - 1;
    jsonList[index]["type"] = "folder";
    jsonList[index]["name"] = "json模版";
    jsonList[index]["path"] = "/";

    // jsonObj.folderList.push({"文档":"/document"});
    // jsonObj.folderList.push({"图片":"/picture"});
    // jsonObj.folderList.push({"音乐":"/music"});
    // jsonObj.folderList.push({"视频":"/video"});
    // jsonObj.folderList.push({"其他":"/other"});

    // var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    // LogController.log(JSON.stringify(jsonObj, null, 2));
    this.readFileBrowser(jsonObj, foldItem);
};
PanelFileBrowserController.prototype.initBottomRight = function () {
    var right = document.getElementById("right");
    this._flexController.createFlex(right, '全部文件');

    for (var i = 0; i < 10; i++) {
        var rightContent = document.createElement("div");
        rightContent.innerHTML = "文件 : " + i;
        var flexItem = this._flexController.addFlexItem(rightContent);
        flexItem.classList.add("rightContent");

        var rightContentNew = document.createElement("div");
        rightContentNew.innerHTML = "新文件 : " + i;
        flexItem.removeChild(flexItem.childNodes[0]);
        flexItem.appendChild(rightContentNew);
    }
};
PanelFileBrowserController.prototype.readFileBrowser = function (jsonObj, elementParent) {
    for (var o in jsonObj) {
        var value = jsonObj[o];
        if (typeof(value) == "object") {
            var fold = elementParent;
            var type = value["type"];
            var name = value["name"];
            var path = value["path"];
            var list = value["list"];
            if (type == "folder") {
                var isHasChild = false
                if (list && list.length > 0) {
                    isHasChild = true;
                    fold = this._menuFoldController.addFold(elementParent);
                }
                WidgetHtmlControl.addLabel(fold, this, name, PanelFileBrowserController.clickFolderName, null);
                var element = WidgetHtmlControl.addLabel(fold, this, path + name, PanelFileBrowserController.clickFolderPath, null);
                element.classList.add("folderPath");
                WidgetHtmlControl.addBr(fold);
                if (isHasChild) {
                    fold = this._menuFoldController.addFoldItem(fold._dl);
                }
            }
            this.readFileBrowser(value, fold);
        }
    }
}
PanelFileBrowserController.create = function () {
    WidgetMenuController.showMenu(this._panelFileBrowserController._menuLeftCreate, null, this._panelFileBrowserController);
}
PanelFileBrowserController.clickFolderName = function () {
}
PanelFileBrowserController.clickFolderPath = function () {
}
