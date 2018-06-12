function PanelFileEditorCtrl() {
    this._widgetTabCtrl = new WidgetTabCtrl();
}

PanelFileEditorCtrl.prototype.init = function (fileTemplatePanel) {
    // var rootElement = document.getElementById("panelFileEditor");
    var rootElement = document.getElementById("panelCenter");
    var dropElement = WidgetDropCtrl.addDrop(rootElement, this);

    this._fileTemplatePanel = fileTemplatePanel;

    this._historyItemFile = WidgetHistoryCtrl._itemFileEditor;
    this._widgetTabCtrl.init(dropElement, this, "../../editor/home/homeFileEditor.html", this._historyItemFile);

    this._menuRightTitle = WidgetMenuCtrl.createMenu(document.body, "../../editor/menu/menuFileEditorTitle.html");
    this._menuRightContent = WidgetMenuCtrl.createMenu(document.body, "../../editor/menu/menuFileEditorContent.html");
}
PanelFileEditorCtrl.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabCtrl.addTab(file);
    }
}
PanelFileEditorCtrl.prototype.loadedHtml = function (htmlRoot) {
    var homeFileEditor = document.getElementById("homeFileEditor");
    var elementFileRoot = homeFileEditor;
    var isShowDemo = false;
    if (isShowDemo) {
        WidgetHtmlCtrl.addLabel(elementFileRoot, this, "demo", null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.textString, null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, 689, WidgetHtmlCtrl._inputType.textNumber, null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.button, null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, false, WidgetHtmlCtrl._inputType.checkbox, null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, false, WidgetHtmlCtrl._inputType.radio, null, null);
        // WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.file, null, null);
        // WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.image, null, null);
        // WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.password, null, null);
        // WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.submit, null, null);
        // WidgetHtmlCtrl.addInput(elementFileRoot, this, "demo", WidgetHtmlCtrl._inputType.reset, null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, "#336699", WidgetHtmlCtrl._inputType.color, null, null);
        WidgetHtmlCtrl.addInput(elementFileRoot, this, "rgba(0, 255, 0, 0.6)", WidgetHtmlCtrl._inputType.color, null, null);
        WidgetHtmlCtrl.addSelect(elementFileRoot, this, "0123456", 6, null, null);
    }
}
PanelFileEditorCtrl.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
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
PanelFileEditorCtrl.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = panelFileBrowser._jsonFileBrowser[WidgetHistoryCtrl._keyJson];
    panelFileBrowser.refreshBottomRight();
}
