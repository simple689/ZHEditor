function PanelToolBar() {
}

PanelToolBar.prototype.init = function () {
    var panelToolBar = document.getElementById("panelToolBar");
    WidgetHtml.addInput(panelToolBar, this, "清空历史记录", WidgetHtml._inputType.button, PanelMenu.onClickHistoryClear, null, null);
}
