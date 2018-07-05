function PanelState() {
}

PanelState.prototype.init = function () {
    var panelState = document.getElementById("panelState");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "清空历史记录";
    jsonObjCtrl._onClick = PanelMenu.onClickHistoryClear;
    WidgetHtml.addInput(panelState, jsonObjCtrl, WidgetHtml._inputType._button);
}
