function PanelFileEditor() {
    WidgetPanelFileBase.call(this);
}

PanelFileEditor.prototype = new WidgetPanelFileBase();
PanelFileEditor.prototype.constructor = PanelFileEditor;

PanelFileEditor.prototype.init = function (elementRoot) {
    WidgetPanelFileBase.prototype.init.apply(this, arguments);

    this._historyItem = WidgetKey._panelFileEditor;
    this._widgetTab.init(this._dropElement, this, "../../editor/home/homeFileEditor.html", this._historyItem);

    this._menuRightTitle.createMenuWithHtml(document.body, "../../editor/menu/menuFileEditorTitle.html");
    this._menuRightContent.createMenuWithHtml(document.body, "../../editor/menu/menuFileEditorContent.html");
}
PanelFileEditor.prototype.loadedHtml = function (htmlRoot) {
    var homeFileEditor = document.getElementById("homeFileEditor");
    var elementFileRoot = homeFileEditor;
    var isShowDemo = false;
    if (isShowDemo) {
        WidgetHtml.addLabel(elementFileRoot, this, "demo", "demo", null, null);
        WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._textString, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, 689, WidgetHtml._enumInputType._textNumber, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._button, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, false, WidgetHtml._enumInputType._checkbox, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, false, WidgetHtml._enumInputType._radio, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._file, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._image, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._password, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._submit, null, null, null);
        // WidgetHtml.addInput(elementFileRoot, this, "demo", WidgetHtml._enumInputType._reset, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "#336699", WidgetHtml._enumInputType._color, null, null, null);
        WidgetHtml.addInput(elementFileRoot, this, "rgba(0, 255, 0, 0.6)", WidgetHtml._enumInputType._color, null, null, null);
        WidgetHtml.addSelect(elementFileRoot, this, "0123456", 6, null, null);
    }
}
PanelFileEditor.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
    var obj = WidgetFileBrowser._jsonFileBrowser[WidgetKey._json];

    var extend = getFileExtend(fileName);
    if (!WidgetHistory.existFileBrowserFile(obj, fileName, extend)) {
        APIData.fileBrowser.addFile(obj, fileName, extend);
        WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonFileBrowser);
    }
    panelFileBrowser._widgetFileBrowser.refreshFileBrowserRight(obj);
}
