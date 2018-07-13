function PanelMenu() {
}

PanelMenu.createFileNum = 0;
PanelMenu.prototype.init = function () {
    var panelMenu = document.getElementById("panelMenu");
}
PanelMenu.onClickCreateFile = function (fileExtend) {
    var name = "新建文件_" + PanelMenu.createFileNum + fileExtend;
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, name);
    PanelFileBrowser.saveAs(jsonObjCtrl);
}
PanelMenu.onClickHistoryClear = function () {
    WidgetHistory.clear();
}
