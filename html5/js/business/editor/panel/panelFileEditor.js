function PanelFileEditorController() {
    this.widgetTabController = new WidgetTabController();
    // widgetDropController = new WidgetDropController();
};
PanelFileEditorController.prototype.init = function () {
    LogController.func();

    // appendWidgetTab();
    this.widgetTabController.init(this);
    // widgetDropController.init(this);

    // var input = document.createElement("input");
    // input.classList.add("obj");
    // widgetTabContentHome.appendChild(input);
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

