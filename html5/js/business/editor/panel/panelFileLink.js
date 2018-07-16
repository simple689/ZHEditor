function PanelFileLink() {
    this._widgetTab = new WidgetTab();
}

PanelFileLink.prototype.init = function () {
    var rootElement = document.getElementById("panelFileLink");
    var dropElement = WidgetDrop.addDrop(rootElement, this);

    this._historyItem = WidgetKey._panelFileLink;
    this._widgetTab.init(dropElement, this, "../../editor/home/homeFileLink.html", this._historyItem);

    this._menuRightTitle = new WidgetMenu();
    this._menuRightContent = new WidgetMenu();
    this._menuRightTitle.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldTitle.html");
    this._menuRightContent.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldContent.html");
}
PanelFileLink.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTab.addTab(file);
    }
}
PanelFileLink.prototype.loadedHtml = function (htmlRoot) {
}
PanelFileLink.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
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
PanelFileLink.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
}
