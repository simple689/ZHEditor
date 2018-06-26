function PanelState() {
}

PanelState.prototype.init = function () {
    var panelState = document.getElementById("panelState");
    WidgetHtml.addInput(panelState, this, "清空历史记录", WidgetHtml._inputType.button, PanelMenu.onClickHistoryClear, null);
}
