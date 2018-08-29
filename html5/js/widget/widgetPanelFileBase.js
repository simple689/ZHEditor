function WidgetPanelFileBase() {
}

WidgetPanelFileBase.prototype.init = function (elementRoot) {
    this._dropElement = WidgetDrop.addDrop(elementRoot, this);

    this._historyItem = WidgetKey._panelFileMould;
    this._widgetTab = new WidgetTab();

    this._menuRightTitle = new WidgetMenu();
    this._menuRightContent = new WidgetMenu();
}
WidgetPanelFileBase.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTab.addTabWithFile(file);
    }
}
WidgetPanelFileBase.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
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
WidgetPanelFileBase.prototype.loadedHtml = function (htmlRoot) {
}
WidgetPanelFileBase.prototype.loadedJson = function (fileReader) {
}
