function PanelState() {
    WidgetPanelBase.call(this);
}

PanelState.prototype = new WidgetPanelBase();
PanelState.prototype.constructor = PanelState;

PanelState.prototype.init = function (elementRootID) {
    WidgetPanelBase.prototype.init.apply(this, arguments);

    var elementRoot = getElementById(this._elementRootID);

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "信息";
    WidgetHtml.addLabel(elementRoot, jsonObjCtrl);
}
