function PanelFileEditorController() {
    this._widgetTabController = new WidgetTabController();
}

PanelFileEditorController.prototype.init = function (fileTemplatePanel) {
    // var rootElement = document.getElementById("panelFileEditor");
    var rootElement = document.getElementById("panelCenter");
    var dropElement = WidgetDropController.addDrop(rootElement, this);

    this._fileTemplatePanel = fileTemplatePanel;

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
    var homeFileEditor = document.getElementById("homeFileEditor");
    var elementFileRoot = homeFileEditor;
    WidgetHtmlControl.addLabel(elementFileRoot, "demo");
    WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.textString);
    WidgetHtmlControl.addInput(elementFileRoot, 689, WidgetHtmlControl._inputType.textNumber);
    WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.button);
    WidgetHtmlControl.addInput(elementFileRoot, false, WidgetHtmlControl._inputType.checkbox);
    WidgetHtmlControl.addInput(elementFileRoot, false, WidgetHtmlControl._inputType.radio);
    // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.file);
    // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.image);
    // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.password);
    // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.submit);
    // WidgetHtmlControl.addInput(elementFileRoot, "demo", WidgetHtmlControl._inputType.reset);
    WidgetHtmlControl.addInput(elementFileRoot, "#336699", WidgetHtmlControl._inputType.color);
    WidgetHtmlControl.addInput(elementFileRoot, "rgba(0, 255, 0, 0.6)", WidgetHtmlControl._inputType.color);
    WidgetHtmlControl.addSelect(elementFileRoot, "0123456", 6);
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
