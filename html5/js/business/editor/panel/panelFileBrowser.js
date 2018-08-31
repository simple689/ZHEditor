function PanelFileBrowser() {
}

PanelFileBrowser.prototype.init = function () {
    var rootElement = document.getElementById("panelFileBrowser");
    this._divMain = WidgetHtml.addDiv(rootElement);
    this._divMain.id = "main";

    this._divTool = WidgetHtml.addDiv(this._divMain);

    this._divFileBrowser = WidgetHtml.addDiv(this._divMain);
    this._divFileBrowser.id = "fileBrowser";

    this.initTool();
    this.initFileBrowser();
}
PanelFileBrowser.prototype.initTool = function () {
    this.initCreate();

    this._widgetSearch = new WidgetSearch();
    this._widgetSearch.createSearch(this, this._divTool);

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._valueList = JsonObjCtrl._fileBrowserTypeList;
    jsonObjCtrl._onChange = WidgetFileOnChange.onChangeSelect;
    WidgetHtml.addSelect(this._divTool, jsonObjCtrl);
}
PanelFileBrowser.prototype.initCreate = function () {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "创建";
    jsonObjCtrl._valueList = new MenuListCtrl();

    var menuListItem = new MenuListItem("1", PanelFileBrowser.saveAs, WidgetKey._extendJson);
    jsonObjCtrl._valueList.insertItem(menuListItem);
    menuListItem = new MenuListItem("2", PanelFileBrowser.saveAs, WidgetKey._extendJsonMd);
    jsonObjCtrl._valueList.insertItem(menuListItem);

    menuListItem = new MenuListItem("3", PanelFileBrowser.saveAs, WidgetKey._extendJson);
    var listSub = jsonObjCtrl._valueList.insertItemList(menuListItem);

    menuListItem = new MenuListItem("31", PanelFileBrowser.saveAs, WidgetKey._extendJson);
    menuListItem.setListParent(listSub);
    jsonObjCtrl._valueList.insertItem(menuListItem);

    menuListItem = new MenuListItem("32", PanelFileBrowser.saveAs, WidgetKey._extendJson);
    menuListItem.setListParent(listSub);
    listSub = jsonObjCtrl._valueList.insertItemList(menuListItem);

    menuListItem = new MenuListItem("321", PanelFileBrowser.saveAs, WidgetKey._extendJson);
    menuListItem.setListParent(listSub);
    jsonObjCtrl._valueList.insertItem(menuListItem);

    WidgetHtml.addInput(this._divTool, jsonObjCtrl, WidgetHtml._inputType._buttonMenu);
}
PanelFileBrowser.prototype.initFileBrowser = function () {
    this._widgetFileBrowser = new WidgetFileBrowser();
    this._widgetFileBrowser.create(this._divFileBrowser);
}
