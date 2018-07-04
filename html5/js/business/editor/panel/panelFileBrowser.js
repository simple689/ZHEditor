function PanelFileBrowser() {
    this._WidgetSearch = new WidgetSearch();
}
PanelFileBrowser._menuFoldCtrl = new WidgetMenuFold();
PanelFileBrowser._flexCtrl = new WidgetFlex();

PanelFileBrowser.prototype.init = function () {
    this.initTool();

    var left = document.getElementById("left");
    var middle = document.getElementById("middle");
    var right = document.getElementById("right");
    PanelFileBrowser.initFileBrowser(left, middle, right);
}
PanelFileBrowser.prototype.initTool = function () {
    this._menuLeftCreate = new WidgetMenu();
    this._menuLeftCreate.createMenuWithHtml(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._PanelFileBrowser = this;
    $(createBtn).on("click", PanelFileBrowser.onClickCreateBtn);

    this._WidgetSearch.createSearch(this, createBtn);
}
PanelFileBrowser.initFileBrowser = function (left, middle, right) {
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

    PanelFileBrowser.initFileBrowserLeft(left);
    PanelFileBrowser.initFileBrowserRight(right);
};
PanelFileBrowser.initFileBrowserLeft = function (left) {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, "root");
    jsonObjCtrl._keyShow = "全部文件";
    jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuRoot;
    var foldItem = PanelFileBrowser._menuFoldCtrl.createMenuFold(left, jsonObjCtrl);

    PanelFileBrowser._jsonFileBrowser = WidgetHistory.getFileBrowser();
    // WidgetLog.log(JSON.stringify(jsonObj, null, 2));
    PanelFileBrowser.readFileBrowser(PanelFileBrowser._jsonFileBrowser, "/", foldItem);
};
PanelFileBrowser.initFileBrowserRight = function (right) {
    PanelFileBrowser._flexCtrl.createFlex(right, '全部文件');
};
PanelFileBrowser.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;
        var value = jsonObj[key];
        if (typeof(value) == WidgetKey._object) {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[WidgetKey._type];
            var title = value[WidgetKey._title];

            var folderList = value[WidgetKey._folderList];
            if (type == WidgetKey._folder) {
                pathChild += title;
                pathChild += "/";
                value["path"] = pathChild;

                var isHasChild = false
                if (folderList && folderList.length > 0) {
                    isHasChild = true;
                    fold = PanelFileBrowser._menuFoldCtrl.addFold(elementParent, null);
                }

                var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
                jsonObjCtrl._keyShow = title;
                jsonObjCtrl._onClick = PanelFileBrowser.onClickFolderName;

                var element = WidgetHtml.addLabel(fold, jsonObjCtrl);
                element._panel = this;
                element._jsonObj = value;
                element.classList.add("folderName");
                // element = WidgetHtml.addLabel(fold, this, pathChild, pathChild, PanelFileBrowser.onClickFolderPath, null);
                // element.classList.add("folderPath");
                WidgetHtml.addBr(fold);
                if (isHasChild) {
                    fold = PanelFileBrowser._menuFoldCtrl.addFoldItem(fold._dl);
                }
            }
            PanelFileBrowser.readFileBrowser(value, pathChild, fold);
        }
    }
}
PanelFileBrowser.refreshFileBrowserRight = function (jsonObj) {
    PanelFileBrowser._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == WidgetKey._object) {
        var path = jsonObj["path"];

        var fileList = jsonObj[WidgetKey._fileList];
        for (var o in fileList) {
            var value = fileList[o];
            if (typeof(value) == WidgetKey._object) {
                var title = value[WidgetKey._title];
                var extend = value[WidgetKey._extend];
                var rightContent = document.createElement("div");
                // rightContent.innerHTML = path + title + extend;
                rightContent.innerHTML = title + extend;
                var flexItem = PanelFileBrowser._flexCtrl.addFlexItem(rightContent);
                flexItem.classList.add("rightContent");
            }
        }
    }
};
PanelFileBrowser.onClickCreateBtn = function () {
    WidgetMenu.showMenu(this._PanelFileBrowser._menuLeftCreate, null, this._PanelFileBrowser);
}
PanelFileBrowser.onClickFolderName = function () {
    PanelFileBrowser.refreshFileBrowserRight(this._jsonObj);
    if (PanelFileBrowser._nowFolder) {
        PanelFileBrowser._nowFolder.value = this._jsonObj["path"];
    }
}
PanelFileBrowser.onClickFolderPath = function () {
    PanelFileBrowser.refreshFileBrowserRight(this._jsonObj);
}
PanelFileBrowser.saveAs = function (title, jsonObj) {
    if (false) {
        WidgetHistory.setFileJsonMould(title, jsonObj);
    }
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(document.body, "../../editor/dialog/dialogSaveAs.html", PanelFileBrowser.saveAsHtmlLoaded);
};
PanelFileBrowser.saveAsHtmlLoaded = function (widgetDialog) {
    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "另存为";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFolder");
    jsonObjCtrl._value = "/";
    var input =  WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType.textString);
    PanelFileBrowser._nowFolder = input;
    widgetDialog._inputFolder = input;
    input.style.width = "500px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    var divFileBrowser = WidgetHtml.addDiv(widgetDialog._elementDialogContent);
    divFileBrowser.classList.add("fileBrowser");
    divFileBrowser.style.height = "300px";
    divFileBrowser.style.width = "600px";
    var left = WidgetHtml.addDiv(divFileBrowser);
    left.classList.add("fileBrowserLeft");
    left.style.width = "200px";
    var middle = WidgetHtml.addDiv(divFileBrowser);
    middle.classList.add("fileBrowserMiddle");
    var right = WidgetHtml.addDiv(divFileBrowser);
    right.classList.add("fileBrowserRight");

    PanelFileBrowser.initFileBrowser(left, middle, right);

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileName");
    jsonObjCtrl._keyShow = "文件名：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileName");
    jsonObjCtrl._value = "inputFileName";
    input =  WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType.textString);
    widgetDialog._inputFileName = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelSaveType");
    jsonObjCtrl._keyShow = "保存类型：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputSaveType");
    jsonObjCtrl._value = "inputSaveType";
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType.textString);
    widgetDialog._inputSaveType = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    var divButton = WidgetHtml.addDiv(widgetDialog._elementDialogContent);
    divButton.style.float = "right";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonSave");
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._onClick = PanelFileBrowser.onClickSaveAsButtonSave;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType.button);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonCancel");
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = PanelFileBrowser.onClickSaveAsButtonCancel;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType.button);
};
PanelFileBrowser.onClickSaveAsButtonSave = function () {
    var widgetDialog = this._jsonObjCtrl._exec;
    var folder = widgetDialog._inputFolder.value;
    var fileName = widgetDialog._inputFileName.value;
    var saveType = widgetDialog._inputSaveType.value;

    var folderList = folder.split("/");
    var jsonObjFolder = PanelFileBrowser.getJsonObjFolder(folderList, PanelFileBrowser._jsonFileBrowser, PanelFileBrowser._jsonFileBrowser);
    WidgetHistory.addFileBrowserFile(jsonObjFolder, fileName, WidgetFile._extendJsonMd);
    WidgetHistory.setFileBrowser(PanelFileBrowser._jsonFileBrowser);

    widgetDialog.close();
}
PanelFileBrowser.onClickSaveAsButtonCancel = function () {
    this._jsonObjCtrl._exec.close();
}
PanelFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
    for (var i = 0; i < folderList.length; i++) {
        var item = folderList[i];
        if (item.length > 0) {
            for (var o in jsonObj) {
                var key = o;
                var value = jsonObj[key];
                var keyShow = value[WidgetKey._title];
                if (item == keyShow) {
                    var folderListNew = folderList.slice(i + 1, folderList.length + 1);
                    var jsonObjNew = value[WidgetKey._folderList];
                    return PanelFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
                }
            }
        }
        if (i == folderList.length - 1) {
            return jsonObjOrg;
        }
    }
    return null;
}
