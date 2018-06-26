function PanelMenu() {
}

PanelMenu.prototype.init = function () {
    var panelMenu = document.getElementById("panelMenu");
    // WidgetHtml.addInput(panelMenu, this, "清空历史记录", WidgetHtml._inputType.button, PanelMenu.onClickHistoryClear, null);
}
PanelMenu.onClickHistoryClear = function (e) {
    WidgetHistory.clear();
}
