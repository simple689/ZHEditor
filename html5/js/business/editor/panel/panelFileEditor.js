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
    var isShowDemo = false;
    if (isShowDemo) {
        WidgetHtmlControl.addLabel(elementFileRoot, this, "demo", null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.textString, null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, 689, WidgetHtmlControl._inputType.textNumber, null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.button, null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, false, WidgetHtmlControl._inputType.checkbox, null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, false, WidgetHtmlControl._inputType.radio, null, null);
        // WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.file, null, null);
        // WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.image, null, null);
        // WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.password, null, null);
        // WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.submit, null, null);
        // WidgetHtmlControl.addInput(elementFileRoot, this, "demo", WidgetHtmlControl._inputType.reset, null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, "#336699", WidgetHtmlControl._inputType.color, null, null);
        WidgetHtmlControl.addInput(elementFileRoot, this, "rgba(0, 255, 0, 0.6)", WidgetHtmlControl._inputType.color, null, null);
        WidgetHtmlControl.addSelect(elementFileRoot, this, "0123456", 6, null, null);
    }
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
