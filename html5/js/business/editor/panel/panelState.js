function PanelState() {
}

PanelState.prototype.init = function () {
    var panelState = getElementById("panelState");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "信息";
    WidgetHtml.addLabel(panelState, jsonObjCtrl);
}
