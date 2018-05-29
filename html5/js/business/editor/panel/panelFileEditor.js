function PanelFileEditorController() {
    this._widgetTabController = new WidgetTabController();
}
PanelFileEditorController.prototype.init = function () {
    var rootElement = document.getElementById("panelFileEditor");
    var dropElement = WidgetDropController.addDrop(rootElement, this);
    this._widgetTabController.init(dropElement, this);
}
PanelFileEditorController.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabController.addTab(file);
    }
}
