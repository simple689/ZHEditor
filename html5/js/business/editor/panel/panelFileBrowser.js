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
    jsonObj.folderList = new Array();
    jsonObj.folderList.push({"Json":"/json"});
    jsonObj.folderList.push({"Json模版":"/jsonTemplate"});
    jsonObj.folderList.push({"文档":"/document"});
    jsonObj.folderList.push({"图片":"/picture"});
    jsonObj.folderList.push({"音乐":"/music"});
    jsonObj.folderList.push({"视频":"/video"});
    jsonObj.folderList.push({"其他":"/other"});
    // var jsonStr = JSON.stringify(jsonObj); // 将字符串对象转换为JSON对象
    this.readFileBrowser(jsonObj, "", foldItem);
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
PanelFileBrowserController.create = function () {
    WidgetMenuController.showMenu(this._panelFileBrowserController._menuLeftCreate, null, this._panelFileBrowserController);
}
PanelFileBrowserController.prototype.readFileBrowser = function (jsonObj, keyParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;
        var isStart = key.indexOf("$");
        if (isStart == 0) {
            continue;
        }
        var value = jsonObj[key];
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            var foldItem = this._menuFoldController.addFold(elementParent, key);
            this.readFileBrowser(value, keyChild, foldItem);
        } else if (typeof(value) == "string") {
            WidgetHtmlControl.addLabel(elementParent, key);
            WidgetHtmlControl.addLabel(elementParent, value);
        } else if (typeof(value) == "number") {
            WidgetHtmlControl.addLabel(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputType.textNumber);
        } else if (typeof(value) == "boolean") {
            WidgetHtmlControl.addLabel(elementParent, key);
            WidgetHtmlControl.addInput(elementParent, value, WidgetHtmlControl._inputType.checkbox);
        } else {
            var strType = typeof(value);
            LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
