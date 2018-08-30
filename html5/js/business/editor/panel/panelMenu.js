function PanelMenu() {
}

PanelMenu.prototype.init = function () {
    // var panelMenu = document.getElementById("panelMenu");
    // 根据用户使用设备调整按钮的可见性
    switch (WidgetUser._client) {
        case WidgetUser._clientType.appPc:
        case WidgetUser._clientType.appMobile: {
            this._menuFileExitSpan = document.getElementById("menuExitSpan");
            this._menuFileExit = document.getElementById("menuExit");

            this._menuFileExitSpan.classList.remove("widgetMenuHide");
            this._menuFileExit.classList.remove("widgetMenuHide");
            break;
        }
    }
}
PanelMenu.onClickCreateFile = function (fileExtend) {
    var createFileStr = "新建文件_";
    var createFileNum = 0;
    // 获取打开了哪些文件，重新赋值createFileNum
    var widgetTab = getFileWidgetTab(fileExtend);
    if (!widgetTab) {
        return;
    }
    var tabList = widgetTab._elementTabList;
    for (var i in tabList) {
        var item = tabList[i];
        var title = item.innerHTML;
        var index = title.indexOf(createFileStr);
        if (index == 0) { //以''开头
            var titleList = title.split(createFileStr);
            if (titleList.length > 1) {
                var str = titleList[1];
                if (str.length > 1) {
                    var num = parseInt(str[0]);
                    if (createFileNum <= num) {
                        createFileNum = num + 1;
                    }
                }
            }
        }
    }
    var name = createFileStr + createFileNum + fileExtend;
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, name);
    widgetTab.addTabWithFileJsonObj(name, jsonObjCtrl._obj);
}
PanelMenu.onClickOpenFile = function (fileExtend) {
    openFile(fileExtend, PanelMenu.openedFile);
}
PanelMenu.openedFile = function (e) {
    var fileExtend = this._fileExtend;
    var widgetTab = getFileWidgetTab(fileExtend);
    if (!widgetTab) {
        return;
    }
    //e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
    var fileList = e.currentTarget.files;
    for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        widgetTab.addTabWithFile(file);
    }
}
PanelMenu.onClickSaveFileNow = function (fileExtend) {
    var widgetTab = getFileWidgetTab(fileExtend);
    if (!widgetTab) {
        return;
    }
    // todo
    // var widgetDialog = new WidgetDialog();
    // widgetDialog.createDialogWithHtml(jsonObjCtrl, document.body, null, PanelMenuCallback.loadedHtmlSaveAs);
}
PanelMenu.onClickSaveFileNowAll = function () {
    // todo
}
PanelMenu.onClickSaveFileAll = function () {
    // todo
}
PanelMenu.onClickDownloadFileNow = function (fileExtend) {
    var widgetTab = getFileWidgetTab(fileExtend);
    if (!widgetTab) {
        return;
    }
    // todo
    // var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(e);
    // if (e._menu) {
    //     return e._menu._exec._jsonObjCtrl;
    // }
    // return e._jsonObjCtrl;
    // downloadFileJson(jsonObjCtrl);
}
PanelMenu.onClickSetting = function () {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(null, document.body, null, PanelMenu.setting);
}
PanelMenu.setting = function (widgetDialog) {
    return;
    var name = widgetDialog._jsonObjCtrl._key;
    var elementTabTitle = widgetDialog._jsonObjCtrl._exec._elementTabTitle;
    if (elementTabTitle) {
        name = elementTabTitle.innerHTML;
    }
    var title = getFileTitle(name)
    var extend = getFileExtend(name);
    var widgetFileBrowser = new WidgetFileBrowser();

    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "另存为";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFolder");
    var path = "/" + WidgetKey._personalFoldShow + "/";
    if (extend.length > 0) {
        if (extend == WidgetKey._extendJson) {
            path += WidgetKey._jsonShow;
        } else if (extend == WidgetKey._extendJsonMd) {
            path += WidgetKey._jsonMouldShow;
        }
        path += "/";
    }
    jsonObjCtrl._value = path;
    var input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetFileBrowser._nowFolderElement = input;
    widgetDialog._inputFolder = input;
    input.style.width = "500px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    widgetFileBrowser.createFileBrowser(widgetDialog._elementDialogContent);
    widgetDialog._widgetFileBrowser = widgetFileBrowser;
    widgetFileBrowser._divFileBrowser.style.height = "300px";
    widgetFileBrowser._divFileBrowser.style.width = "600px";
    widgetFileBrowser._divLeft.style.width = "200px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileName");
    jsonObjCtrl._keyShow = "文件名：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileName");
    jsonObjCtrl._value = title;
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFileName = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileExtend");
    jsonObjCtrl._keyShow = "保存类型：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileExtend");
    jsonObjCtrl._value = extend;
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFileExtend = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    var divButton = WidgetHtml.addDiv(widgetDialog._elementDialogContent);
    divButton.style.float = "right";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonSave");
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._onClick = PanelMenuCallback.onClickSaveAsButtonSave;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType._button);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonCancel");
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = PanelMenuCallback.onClickSaveAsButtonCancel;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType._button);

    widgetFileBrowser.refreshFileBrowserRightPath(path);
};
PanelMenu.onClickExit = function () {
    // todo
}
PanelMenu.onClickUndo = function () {
}
PanelMenu.onClickRedo = function () {
}
PanelMenu.onClickCut = function () {
}
PanelMenu.onClickCopy = function () {
}
PanelMenu.onClickPaste = function () {
}
PanelMenu.onClickFind = function () {
}
PanelMenu.onClickVisiblePanel = function (panel) {
    if (panel == WidgetKey._panelToolBar) {
    } else if (panel == WidgetKey._panelState) {
    } else if (panel == WidgetKey._panelFileEditor) {
    } else if (panel == WidgetKey._panelFileMould) {
        changeVisible(dockPanelFileMould);
    } else if (panel == WidgetKey._panelFileLink) {
        changeVisible(dockPanelFileLink);
    } else if (panel == WidgetKey._panelFileBrowser) {
        changeVisible(dockPanelFileBrowser);
    }
}
PanelMenu.onClickHistoryClearAll = function () {
    WidgetHistory.clearAll();
}
PanelMenu.onClickHistoryClear = function (item) {
}
PanelMenu.onClickHelp = function () {
}
