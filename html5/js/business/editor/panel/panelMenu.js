function PanelMenu() {
    WidgetPanelBase.call(this);
}

PanelMenu.prototype = new WidgetPanelBase();
PanelMenu.prototype.constructor = PanelMenu;

PanelMenu.prototype.init = function (elementRootID) {
    WidgetPanelBase.prototype.init.apply(this, arguments);

    var elementRoot = getElementById(this._elementRootID);

    var widgetUserRoot = WidgetHtml.addDiv(elementRoot);
    WidgetHtml.classAdd(widgetUserRoot, "widgetUser");
    WidgetUser.init(widgetUserRoot);

    // 根据用户使用设备调整按钮的可见性
    switch (WidgetUser._client) {
        case WidgetUser._enumClientType.appPc:
        case WidgetUser._enumClientType.appMobile: {
            this._fileExitSpan = getElementById("panelMenuExitSpan");
            this._fileExit = getElementById("panelMenuExit");

            WidgetHtml.classRemove(this._fileExitSpan, "widgetMenuHide");
            WidgetHtml.classRemove(this._fileExit, "widgetMenuHide");
            break;
        }
    }
    // 是否选中设置
    this._panelFileBrowserCheckbox = getElementById("panelMenuPanelFileBrowserCheckbox");
    this._panelFileMouldCheckbox = getElementById("panelMenuPanelFileMouldCheckbox");
    this._panelFileLinkCheckbox = getElementById("panelMenuPanelFileLinkCheckbox");

    var isVisible = getDockPanelVisible(gDock._panelFileBrowser);
    this._panelFileBrowserCheckbox.checked = isVisible;
    isVisible = getDockPanelVisible(gDock._panelFileMould);
    this._panelFileMouldCheckbox.checked = isVisible;
    isVisible = getDockPanelVisible(gDock._panelFileLink);
    this._panelFileLinkCheckbox.checked = isVisible;
}

// onClickCreateFile
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

// onClickOpenFile
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

// onClickSaveFile
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

// onClickDownloadFile
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

// onClickSetting
PanelMenu.onClickSetting = function () {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(null, document.body, null, PanelMenu.showDialogSetting);
}
PanelMenu.showDialogSetting = function (widgetDialog) {
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, null);
    jsonObjCtrl._keyShow = "设置";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";
};

// onClickExit
PanelMenu.onClickExit = function () {
    // todo
}

// onClickUndo
PanelMenu.onClickUndo = function () {
}

// onClickRedo
PanelMenu.onClickRedo = function () {
}

// onClickCut
PanelMenu.onClickCut = function () {
}

// onClickCopy
PanelMenu.onClickCopy = function () {
}

// onClickPaste
PanelMenu.onClickPaste = function () {
}

// onClickFind
PanelMenu.onClickFind = function () {
}

// onClickVisiblePanel
PanelMenu.onClickVisiblePanel = function (panel) {
    var isVisible = true;
    if (panel == confPanelToolBar) {
    } else if (panel == confPanelState) {
    } else if (panel == confPanelFileEditor) {
    } else if (panel == confPanelFileMould) {
        isVisible = changeDockPanelVisible(gDock._panelFileMould);
        gPanelMenu._panelFileMouldCheckbox.checked = isVisible;
    } else if (panel == confPanelFileLink) {
        isVisible = changeDockPanelVisible(gDock._panelFileLink);
        gPanelMenu._panelFileLinkCheckbox.checked = isVisible;
    } else if (panel == confPanelFileBrowser) {
        isVisible = changeDockPanelVisible(gDock._panelFileBrowser);
        gPanelMenu._panelFileBrowserCheckbox.checked = isVisible;
    }
}

// onClickHistoryClear
PanelMenu.onClickHistoryClearAll = function () {
    WidgetHistory.clearAll();
}
PanelMenu.onClickHistoryClear = function (key) {
    var element = window.event.target;
    WidgetHistory.clear(key, element.innerHTML);
}

// onClickHelp
PanelMenu.onClickHelp = function () {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(null, document.body, null, PanelMenu.showDialogHelp);
}
PanelMenu.showDialogHelp = function (widgetDialog) {
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, null);
    jsonObjCtrl._keyShow = "帮助";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    var widgetMarkedDoc = new WidgetMarkedDoc();
    widgetDialog._widgetMarkedDoc = widgetMarkedDoc;
    widgetMarkedDoc.create(widgetDialog._elementDialogContent, confProjectRoot + '/doc/', '/README.md');
    widgetMarkedDoc._divMain.style.height = bodyH * 0.8 + "px";
    widgetMarkedDoc._divMain.style.width = bodyW * 0.8 + "px";
    widgetMarkedDoc._divLeft.style.width = bodyW * 0.2 + "px";
};
