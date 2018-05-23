function PanelFileEditorController() {
    this._widgetDropController = new WidgetDropController();
    this._widgetFileController = new WidgetFileController();
    this._widgetTabController = new WidgetTabController();
    this._widgetHistotyController = new WidgetHistoryController();
}
PanelFileEditorController.prototype.init = function () {
    this._widgetHistotyController.init();
    var rootElement = document.getElementById("panelFileEditor");
    var dropElement = this._widgetDropController.init(this, rootElement);
    this._widgetTabController.init(this, dropElement);
}
PanelFileEditorController.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabController.addTab(file);
    }
}
