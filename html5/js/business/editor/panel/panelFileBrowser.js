function PanelFileBrowserController() {
    this._widgetSearchController = new WidgetSearchController();
}

PanelFileBrowserController.prototype.init = function () {
    this._menuLeftCreate = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._panelFileBrowserController = this;
    $(createBtn).on("click", PanelFileBrowserController.create);

    this._widgetSearchController.createSearch(this, createBtn);
}
PanelFileBrowserController.create = function () {
    WidgetMenuController.showMenu(this._panelFileBrowserController._menuLeftCreate, null, this._panelFileBrowserController);
}
