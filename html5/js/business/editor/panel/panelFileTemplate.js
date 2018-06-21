function PanelFileTemplate() {
    this._widgetTab = new WidgetTab();
}

PanelFileTemplate.prototype.init = function () {
    var rootElement = document.getElementById("panelFileTemplate");
    var dropElement = WidgetDrop.addDrop(rootElement, this);
    this._historyItemFile = WidgetKey._fileTemplate;
    this._widgetTab.init(dropElement, this, "../../editor/home/homeFileTemplate.html", null);
    // this._widgetTab.init(dropElement, this, "../../editor/home/homeFileTemplate.html", this._historyItemFile);

    this._menuRightTitle = new WidgetMenu();
    this._menuRightContent = new WidgetMenu();
    this._menuRightTitle.createMenu(document.body, "../../editor/menu/menuFileTemplateTitle.html");
    this._menuRightContent.createMenu(document.body, "../../editor/menu/menuFileTemplateContent.html");
}
PanelFileTemplate.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTab.addTab(file);
    }
}
PanelFileTemplate.prototype.loadedHtml = function (htmlRoot) {
}
PanelFileTemplate.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
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
PanelFileTemplate.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = panelFileBrowser._jsonFileBrowser[WidgetKey._jsonTemplate];

    var title = getFileTitle(fileName);
    var extend = getFileExtend(fileName);
    if (!WidgetHistory.existFileBrowserFile(obj, title, extend)) {
        WidgetHistory.addFileBrowserFile(obj, title, extend);
        WidgetHistory.setFileBrowser(panelFileBrowser._jsonFileBrowser);
    }
    panelFileBrowser.refreshBottomRight(obj);
}
