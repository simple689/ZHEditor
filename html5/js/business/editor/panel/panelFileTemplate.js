function PanelFileTemplateCtrl() {
    this._widgetTabCtrl = new WidgetTabCtrl();
}

PanelFileTemplateCtrl.prototype.init = function () {
    var rootElement = document.getElementById("panelFileTemplate");
    var dropElement = WidgetDropCtrl.addDrop(rootElement, this);
    this._historyItemFile = WidgetHistoryCtrl._itemFileTemplate;
    this._widgetTabCtrl.init(dropElement, this, "../../editor/home/homeFileTemplate.html", this._historyItemFile);

    this._menuRightTitle = WidgetMenuCtrl.createMenu(document.body, "../../editor/menu/menuFileTemplateTitle.html");
    this._menuRightContent = WidgetMenuCtrl.createMenu(document.body, "../../editor/menu/menuFileTemplateContent.html");
}
PanelFileTemplateCtrl.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabCtrl.addTab(file);
    }
}
PanelFileTemplateCtrl.prototype.loadedHtml = function (htmlRoot) {
}
PanelFileTemplateCtrl.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
    switch (onContextMenuType) {
        case WidgetTabCtrl._onContextMenuType.tabTitle : {
            WidgetMenuCtrl.showMenu(this._menuRightTitle, e, ele);
            break;
        }
        case WidgetTabCtrl._onContextMenuType.tabTitle : {
            WidgetMenuCtrl.showMenu(this._menuRightContent, e, ele);
            break;
        }
    }
}
PanelFileTemplateCtrl.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = panelFileBrowser._jsonFileBrowser[WidgetHistoryCtrl._keyJsonTemplate];
    panelFileBrowser.refreshBottomRight();
}
