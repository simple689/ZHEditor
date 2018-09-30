function PanelMenu() {
}

PanelMenu.prototype.init = function () {
    // var panelMenu = document.getElementById("panelMenu");
    var panelMenuWidgetUser = document.getElementById("panelMenuWidgetUser");
    WidgetUser.init(panelMenuWidgetUser);
    // 根据用户使用设备调整按钮的可见性
    switch (WidgetUser._client) {
        case WidgetUser._enumClientType.appPc:
        case WidgetUser._enumClientType.appMobile: {
            this._menuFileExitSpan = document.getElementById("menuExitSpan");
            this._menuFileExit = document.getElementById("menuExit");

            WidgetHtml.classRemove(this._menuFileExitSpan, "widgetMenuHide");
            WidgetHtml.classRemove(this._menuFileExit, "widgetMenuHide");
            break;
        }
    }
    // 是否选中设置
    this._menuPanelFileMouldCheckbox = document.getElementById("menuPanelFileMouldCheckbox");
    this._menuPanelFileLinkCheckbox = document.getElementById("menuPanelFileLinkCheckbox");
    this._menuPanelFileBrowserCheckbox = document.getElementById("menuPanelFileBrowserCheckbox");

    var isVisible = getDockPanelVisible(gDock._panelFileMould);
    this._menuPanelFileMouldCheckbox.checked = isVisible;
    isVisible = getDockPanelVisible(gDock._panelFileLink);
    this._menuPanelFileLinkCheckbox.checked = isVisible;
    isVisible = getDockPanelVisible(gDock._panelFileBrowser);
    this._menuPanelFileBrowserCheckbox.checked = isVisible;
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
    var isVisible = true;
    if (panel == WidgetKey._panelToolBar) {
    } else if (panel == WidgetKey._panelState) {
    } else if (panel == WidgetKey._panelFileEditor) {
    } else if (panel == WidgetKey._panelFileMould) {
        isVisible = changeDockPanelVisible(gDock._panelFileMould);
        gPanelMenu._menuPanelFileMouldCheckbox.checked = isVisible;
    } else if (panel == WidgetKey._panelFileLink) {
        isVisible = changeDockPanelVisible(gDock._panelFileLink);
        gPanelMenu._menuPanelFileLinkCheckbox.checked = isVisible;
    } else if (panel == WidgetKey._panelFileBrowser) {
        isVisible = changeDockPanelVisible(gDock._panelFileBrowser);
        gPanelMenu._menuPanelFileBrowserCheckbox.checked = isVisible;
    }
}
PanelMenu.onClickHistoryClearAll = function () {
    WidgetHistory.clearAll();
}
PanelMenu.onClickHistoryClear = function (key) {
    var element = window.event.target;
    WidgetHistory.clear(key, element.innerHTML);
}
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
