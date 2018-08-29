function PanelMenu() {
}

PanelMenu.prototype.init = function () {
    // var panelMenu = document.getElementById("panelMenu");
    switch (WidgetUser._client) {
        case WidgetUser._clientType.appPc:
        case WidgetUser._clientType.appMobile: {
            this._menuFileExitSpan = document.getElementById("menuFileExitSpan");
            this._menuFileExit = document.getElementById("menuFileExit");

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
    var widgetTab = null;
    if (fileExtend == WidgetKey._extendJson) {
        widgetTab = panelFileEditor._widgetTab;
    } else if (fileExtend == WidgetKey._extendJsonMd) {
        widgetTab = panelFileMould._widgetTab;
    }
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
    widgetTab.addTabWithFileJsonObj(name, jsonObjCtrl);
}
PanelMenu.onClickOpenFile = function (fileExtend) {
    var name = "新建文件_" + PanelMenu.createFileNum + fileExtend;
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, name);
    PanelFileBrowser.open(jsonObjCtrl);
}
PanelMenu.onClickSave = function (panel) {
}
PanelMenu.onClickSaveAll = function () {
}
PanelMenu.onClickSaveAsJson = function (jsonObjCtrl) {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(jsonObjCtrl, document.body, null, PanelMenuCallback.loadedHtmlSaveAs);
}
PanelMenu.onClickDownload = function (panel) {
}
PanelMenu.onClickDownloadJson = function (jsonObjCtrl) {
    var name = jsonObjCtrl._exec._elementTabTitle.innerHTML;
    var jsonStr = JSON.stringify(jsonObjCtrl._obj, null, 2); // 将字符串对象转换为JSON对象
    var element = document.createElement("a");
    element.setAttribute('href', 'data:text/text; base64,' + '77u/' + base64encode(utf16to8(jsonStr)));
    element.setAttribute('download', name);
    element.click();
}
PanelMenu.onClickSetting = function () {
}
PanelMenu.onClickExit = function () {
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
}
PanelMenu.onClickHistoryClearAll = function () {
    WidgetHistory.clearAll();
}
PanelMenu.onClickHistoryClear = function (item) {
}
PanelMenu.onClickHelp = function () {
}
