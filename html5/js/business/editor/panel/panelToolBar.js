function PanelToolBar() {
}

PanelToolBar.prototype.init = function () {
    var panelToolBar = document.getElementById("panelToolBar");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "清空历史记录";
    jsonObjCtrl._onClick = PanelMenu.onClickHistoryClear;
    WidgetHtml.addInput(panelToolBar, jsonObjCtrl, WidgetHtml._inputType.button);
}
