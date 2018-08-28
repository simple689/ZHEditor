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
PanelMenu.onClickOpenFile = function (fileExtend) {
    var name = "新建文件_" + PanelMenu.createFileNum + fileExtend;
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, name);
    PanelFileBrowser.open(jsonObjCtrl);
}
PanelMenu.onClickSave = function (panel) {
}
PanelMenu.onClickSaveAll = function () {
}
PanelMenu.onClickSaveAsJson = function (jsonObjCtrl) {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(jsonObjCtrl, document.body, null, PanelMenuCallback.loadedHtmlSaveAs);
}
PanelMenu.onClickDownload = function (panel) {
}
PanelMenu.onClickDownloadJson = function (jsonObjCtrl) {
    var name = jsonObjCtrl._exec._elementTabTitle.innerHTML;
    var jsonStr = JSON.stringify(jsonObjCtrl._obj, null, 2); // 将字符串对象转换为JSON对象
    var element = document.createElement("a");
    element.setAttribute('href', 'data:text/text; base64,' + '77u/' + base64encode(utf16to8(jsonStr)));
    element.setAttribute('download', name);
    element.click();
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
