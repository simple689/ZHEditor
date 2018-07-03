function PanelFileMould() {
    this._widgetTab = new WidgetTab();
}

PanelFileMould.prototype.init = function () {
    var rootElement = document.getElementById("panelFileMould");
    var dropElement = WidgetDrop.addDrop(rootElement, this);
    this._historyItem = WidgetKey._panelFileMould;
    this._widgetTab.init(dropElement, this, "../../editor/home/homeFileMould.html", null);
    // this._widgetTab.init(dropElement, this, "../../editor/home/homeFileMould.html", this._historyItem);

    this._menuRightTitle = new WidgetMenu();
    this._menuRightContent = new WidgetMenu();
    this._menuRightTitle.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldTitle.html");
    this._menuRightContent.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldContent.html");
}
PanelFileMould.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTab.addTab(file);
    }
}
PanelFileMould.prototype.loadedHtml = function (htmlRoot) {
}
PanelFileMould.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
    switch (onContextMenuType) {
        case WidgetTab._onContextMenuType.tabTitle : {
            WidgetMenu.showMenu(this._menuRightTitle, e, ele);
            break;
        }
        case WidgetTab._onContextMenuType.tabTitle : {
            WidgetMenu.showMenu(this._menuRightContent, e, ele);
            break;
        }
    }
}
PanelFileMould.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = panelFileBrowser._jsonFileBrowser[WidgetKey._jsonMould];

    var title = getFileTitle(fileName);
    var extend = getFileExtend(fileName);
    if (!WidgetHistory.existFileBrowserFile(obj, title, extend)) {
        WidgetHistory.addFileBrowserFile(obj, title, extend);
        WidgetHistory.setFileBrowser(panelFileBrowser._jsonFileBrowser);
    }
    panelFileBrowser.refreshBottomRight(obj);
}
