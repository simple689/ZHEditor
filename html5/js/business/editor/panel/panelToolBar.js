function PanelToolBar() {
}

PanelToolBar.prototype.init = function () {
    var panelToolBar = document.getElementById("panelToolBar");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "新建";
    jsonObjCtrl._valueList = new MenuListCtrl(0);
    jsonObjCtrl._valueList.insertItem(new MenuListItem("Json文件", PanelMenu.onClickCreateFile, WidgetKey._extendJson));
    jsonObjCtrl._valueList.insertItem(new MenuListItem("Json模版文件", PanelMenu.onClickCreateFile, WidgetKey._extendJsonMd));
    WidgetHtml.addInput(panelToolBar, jsonObjCtrl, WidgetHtml._inputType._buttonMenu);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "打开";
    jsonObjCtrl._onClick = PanelMenu.onClickOpen;
    WidgetHtml.addInput(panelToolBar, jsonObjCtrl, WidgetHtml._inputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._valueList = new MenuListCtrl(0);
    jsonObjCtrl._valueList.insertItem(new MenuListItem("Json文件", PanelMenu.onClickSave, WidgetKey._extendJson));
    jsonObjCtrl._valueList.insertItem(new MenuListItem("Json模版文件", PanelMenu.onClickSave, WidgetKey._extendJsonMd));
    WidgetHtml.addInput(panelToolBar, jsonObjCtrl, WidgetHtml._inputType._buttonMenu);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "保存所有";
    jsonObjCtrl._onClick = PanelMenu.onClickSaveAll;
    WidgetHtml.addInput(panelToolBar, jsonObjCtrl, WidgetHtml._inputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "下载";
    jsonObjCtrl._valueList = new MenuListCtrl(0);
    jsonObjCtrl._valueList.insertItem(new MenuListItem("Json文件", PanelMenu.onClickDownload, WidgetKey._extendJson));
    jsonObjCtrl._valueList.insertItem(new MenuListItem("Json模版文件", PanelMenu.onClickDownload, WidgetKey._extendJsonMd));
    WidgetHtml.addInput(panelToolBar, jsonObjCtrl, WidgetHtml._inputType._buttonMenu);
}
