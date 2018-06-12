function PanelFileEditor() {
    this._WidgetTab = new WidgetTab();
}

PanelFileEditor.prototype.init = function (fileTemplatePanel) {
    // var rootElement = document.getElementById("panelFileEditor");
    var rootElement = document.getElementById("panelCenter");
    var dropElement = WidgetDrop.addDrop(rootElement, this);

    this._fileTemplatePanel = fileTemplatePanel;

    this._historyItemFile = WidgetKey._fileEditor;
    this._WidgetTab.init(dropElement, this, "../../editor/home/homeFileEditor.html", this._historyItemFile);

    this._menuRightTitle = WidgetMenu.createMenu(document.body, "../../editor/menu/menuFileEditorTitle.html");
    this._menuRightContent = WidgetMenu.createMenu(document.body, "../../editor/menu/menuFileEditorContent.html");
}
PanelFileEditor.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._WidgetTab.addTab(file);
    }
}
PanelFileEditor.prototype.loadedHtml = function (htmlRoot) {
    var homeFileEditor = document.getElementById("homeFileEditor");
    var elementFileRoot = homeFileEditor;
    var isShowDemo = false;
    if (isShowDemo) {
        WidgetHtml.addLabel(elementFileRoot, this, "demo", null, null);
        WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.textString, null, null);
        WidgetHtml.addInput(elementFileRoot, this, 689, WidgetHtml._inputType.textNumber, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.button, null, null);
        WidgetHtml.addInput(elementFileRoot, this, false, WidgetHtml._inputType.checkbox, null, null);
        WidgetHtml.addInput(elementFileRoot, this, false, WidgetHtml._inputType.radio, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.file, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.image, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.password, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.submit, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._inputType.reset, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "#336699", WidgetHtml._inputType.color, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "rgba(0, 255, 0, 0.6)", WidgetHtml._inputType.color, null, null);
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
    var obj = panelFileBrowser._jsonFileBrowser[WidgetKey._json];
    obj = obj[WidgetKey._json];

    WidgetHistory.addFileBrowserFile(obj, fileName, WidgetFile._extendJson);

    panelFileBrowser.refreshBottomRight(obj);
}
