function PanelFileEditorController() {
    this._widgetTabController = new WidgetTabController();
}
PanelFileEditorController.prototype.init = function () {
    // var rootElement = document.getElementById("panelFileEditor");
    var rootElement = document.getElementById("panelCenter");
    var dropElement = WidgetDropController.addDrop(rootElement, this);
    this._historyItemFile = WidgetHistoryController._itemFileEditor;
    this._widgetTabController.init(dropElement, this, "../../editor/home/homeFileEditor.html", this._historyItemFile);


    this._menuRightTitle = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileEditorTitle.html");
    this._menuRightContent = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileEditorContent.html");
}
PanelFileEditorController.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabController.addTab(file);
    }
}
PanelFileEditorController.prototype.loadedHtml = function (htmlRoot) {
    console.log("PanelFileEditorController");
    console.log(htmlRoot);
}
PanelFileEditorController.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
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
