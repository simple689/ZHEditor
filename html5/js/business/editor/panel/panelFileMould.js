function PanelFileMould() {
    WidgetPanelFileBase.call(this);
}

PanelFileMould.prototype = new WidgetPanelFileBase();
PanelFileMould.prototype.constructor = PanelFileMould;

PanelFileMould.prototype.init = function (elementRoot) {
    WidgetPanelFileBase.prototype.init.apply(this, arguments);

    this._historyItem = WidgetKey._panelFileMould;
    this._widgetTab.init(this._dropElement, this, "../../editor/home/homeFileMould.html", this._historyItem);

    this._menuRightTitle.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldTitle.html");
    this._menuRightContent.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldContent.html");
}
PanelFileMould.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = WidgetFileBrowser._jsonFileBrowser[WidgetKey._jsonMould];

    var extend = getFileExtend(fileName);
    if (!WidgetHistory.existFileBrowserFile(obj, fileName, extend)) {
        APIUtil.fileBrowser.addFile(obj, fileName, extend);
        WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonFileBrowser);
    }
    panelFileBrowser.refreshFileBrowserRight(obj);
}
