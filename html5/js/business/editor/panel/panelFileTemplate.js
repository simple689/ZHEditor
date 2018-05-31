function PanelFileTemplateController() {
    this._widgetTabController = new WidgetTabController();
}

PanelFileTemplateController.prototype.init = function () {
    var rootElement = document.getElementById("panelFileTemplate");
    var dropElement = WidgetDropController.addDrop(rootElement, this);
    this._historyItemFile = WidgetHistoryController._itemFileTemplate;
    this._widgetTabController.init(dropElement, this, "../../editor/home/homeFileTemplate.html", this._historyItemFile);

    this._menuRightTitle = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileTemplateTitle.html");
    this._menuRightContent = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileTemplateContent.html");
}
PanelFileTemplateController.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabController.addTab(file);
    }
}
PanelFileTemplateController.prototype.loadedHtml = function (htmlRoot) {
    console.log("PanelFileTemplateController");
    console.log(htmlRoot);
}
PanelFileTemplateController.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
    switch (onContextMenuType) {
        case WidgetTabController._onContextMenuType.tabTitle : {
            WidgetMenuController.showMenu(this._menuRightTitle, e, ele);
            break;
        }
        case WidgetTabController._onContextMenuType.tabTitle : {
            WidgetMenuController.showMenu(this._menuRightContent, e, ele);
            break;
        }
    }
}
