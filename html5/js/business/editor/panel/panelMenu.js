function PanelMenu() {
}

PanelMenu.prototype.init = function () {
    var panelMenu = document.getElementById("panelMenu");
}
PanelMenu.onClickCreateFile = function (fileType) {
    if (fileType == WidgetKey._json) {

    } else if (fileType == WidgetKey._jsonMould) {

    }
}
PanelMenu.onClickHistoryClear = function () {
    WidgetHistory.clear();
}
