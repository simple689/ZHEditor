function PanelFileEditorController() {
    this._widgetDropController = new WidgetDropController();
    this._widgetFileController = new WidgetFileController();
    this._widgetTabController = new WidgetTabController();
};
PanelFileEditorController.prototype.init = function () {
    var rootElement = document.getElementById("panelFileEditor");
    var dropElement = this._widgetDropController.init(this, rootElement);

    var tapElement = this._widgetTabController.init(this, dropElement);

    // appendWidgetTab();
};
PanelFileEditorController.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this._widgetTabController.addTab(file);
    }
};

PanelFileEditorController.prototype.appendWidgetTab = function () {
    // var li = document.createElement("li");
    // li.classList.add("widgetTabTitle");
    // li.innerHTML = "new";
    // li.id = "new";
    // widgetTabTitleGroup_root.appendChild(li);
    //
    // var div = document.createElement("div");
    // div.classList.add("widgetTabContent");
    // div.innerHTML = "new";
    // widgetTabContentGroup_root.appendChild(div);
    //
    // widgetTabController.switchTitle($(li));
}

