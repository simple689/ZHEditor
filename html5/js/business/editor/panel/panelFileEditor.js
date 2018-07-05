function PanelFileEditor() {
    this._widgetTab = new WidgetTab();
}

PanelFileEditor.prototype.init = function (fileMouldPanel) {
    // var rootElement = document.getElementById("panelFileEditor");
    var rootElement = document.getElementById("panelCenter");
    var dropElement = WidgetDrop.addDrop(rootElement, this);

    this._fileMouldPanel = fileMouldPanel;

    this._historyItem = WidgetKey._panelFileEditor;
    this._widgetTab.init(dropElement, this, "../../editor/home/homeFileEditor.html", this._historyItem);

    this._menuRightTitle = new WidgetMenu();
    this._menuRightContent = new WidgetMenu();
    this._menuRightTitle.createMenuWithHtml(document.body, "../../editor/menu/menuFileEditorTitle.html");
    this._menuRightContent.createMenuWithHtml(document.body, "../../editor/menu/menuFileEditorContent.html");
}
PanelFileEditor.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTab.addTab(file);
    }
}
PanelFileEditor.prototype.loadedHtml = function (htmlRoot) {
    var homeFileEditor = document.getElementById("homeFileEditor");
    var elementFileRoot = homeFileEditor;
    var isShowDemo = false;
    if (isShowDemo) {
        WidgetHtml.addLabel(elementFileRoot, this, "demo", "demo", null, null);
        WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._textString, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, 689, WidgetHtml._inputType._textNumber, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._button, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, false, WidgetHtml._inputType._checkbox, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, false, WidgetHtml._inputType._radio, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._file, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._image, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._password, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._submit, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType._reset, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "#336699", WidgetHtml._inputType._color, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "rgba(0, 255, 0, 0.6)", WidgetHtml._inputType._color, null, null, null);
        WidgetHtml.addSelect(elementFileRoot, this, "0123456", 6, null, null);
    }
}
PanelFileEditor.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
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
PanelFileEditor.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = WidgetFileBrowser._jsonFileBrowser[WidgetKey._json];

    var title = getFileTitle(fileName);
    var extend = getFileExtend(fileName);
    if (!WidgetHistory.existFileBrowserFile(obj, title, extend)) {
        WidgetHistory.addFileBrowserFileList(obj, title, extend);
        WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonFileBrowser);
    }
    panelFileBrowser.refreshFileBrowserRight(obj);
}
