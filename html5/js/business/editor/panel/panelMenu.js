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
PanelMenu.onClickOpen = function () {
}
PanelMenu.onClickSave = function (panel) {
}
PanelMenu.onClickSaveAll = function () {
}
PanelMenu.onClickDownload = function (panel) {
}
PanelMenu.onClickSetting = function () {
}
PanelMenu.onClickExit = function () {
}
PanelMenu.onClickUndo = function () {
}
PanelMenu.onClickRedo = function () {
}
PanelMenu.onClickCut = function () {
}
PanelMenu.onClickCopy = function () {
}
PanelMenu.onClickPaste = function () {
}
PanelMenu.onClickFind = function () {
}
PanelMenu.onClickVisiblePanel = function (panel) {
}
PanelMenu.onClickHistoryClearAll = function () {
    WidgetHistory.clearAll();
}
PanelMenu.onClickHistoryClear = function (item) {
}
PanelMenu.onClickHelp = function () {
}
