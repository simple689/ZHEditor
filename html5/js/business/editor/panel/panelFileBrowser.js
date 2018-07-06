function PanelFileBrowser() {
    this._widgetSearch = new WidgetSearch();
    this._widgetFileBrowser = new WidgetFileBrowser();
}

PanelFileBrowser.prototype.init = function () {
    this.initTool();

    var fileBrowser = document.getElementById("fileBrowser");
    this._widgetFileBrowser.createFileBrowser(fileBrowser);
}
PanelFileBrowser.prototype.initTool = function () {
    this._menuLeftCreate = new WidgetMenu();
    this._menuLeftCreate.createMenuWithHtml(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._PanelFileBrowser = this;
    $(createBtn).on("click", PanelFileBrowser.onClickCreateBtn);

    this._widgetSearch.createSearch(this, createBtn);
}
PanelFileBrowser.onClickCreateBtn = function () {
    WidgetMenu.showMenu(this._PanelFileBrowser._menuLeftCreate, null, this._PanelFileBrowser);
}
PanelFileBrowser.saveAs = function (jsonObjCtrl) {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(jsonObjCtrl, document.body, "../../editor/dialog/dialogSaveAs.html", PanelFileBrowser.saveAsHtmlLoaded);
};
PanelFileBrowser.downLoad = function (jsonObjCtrl) {
    var name = jsonObjCtrl._exec._elementTabTitle.innerHTML;
    var jsonStr = JSON.stringify(jsonObjCtrl._obj, null, 2); // 将字符串对象转换为JSON对象
    var element = document.createElement("a");
    element.setAttribute('href', 'data:text/text; base64,' + '77u/'+ base64encode(utf16to8(jsonStr)));
    element.setAttribute('download', name);
    element.click();
};
PanelFileBrowser.saveAsHtmlLoaded = function (widgetDialog) {
    var name = widgetDialog._jsonObjCtrl._exec._elementTabTitle.innerHTML;

    var widgetFileBrowser = new WidgetFileBrowser();

    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "另存为";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFolder");
    jsonObjCtrl._value = "/";
    var input =  WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetFileBrowser._nowFolderElement = input;
    widgetDialog._inputFolder = input;
    input.style.width = "500px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    widgetFileBrowser.createFileBrowser(widgetDialog._elementDialogContent);
    widgetDialog._widgetFileBrowser = widgetFileBrowser;
    widgetFileBrowser._divFileBrowser.style.height = "300px";
    widgetFileBrowser._divFileBrowser.style.width = "600px";
    widgetFileBrowser._divLeft.style.width = "200px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileName");
    jsonObjCtrl._keyShow = "文件名：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileName");
    jsonObjCtrl._value = getFileTitle(name);
    input =  WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFileName = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileExtend");
    jsonObjCtrl._keyShow = "保存类型：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileExtend");
    jsonObjCtrl._value = getFileExtend(name);
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFileExtend = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    var divButton = WidgetHtml.addDiv(widgetDialog._elementDialogContent);
    divButton.style.float = "right";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonSave");
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._onClick = PanelFileBrowser.onClickSaveAsButtonSave;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType._button);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonCancel");
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = PanelFileBrowser.onClickSaveAsButtonCancel;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType._button);
};
PanelFileBrowser.onClickSaveAsButtonSave = function () {
    var widgetDialog = this._jsonObjCtrl._exec;
    var folder = widgetDialog._inputFolder.value;
    var fileName = widgetDialog._inputFileName.value;
    var extend = getFileExtend(fileName);
    if (extend.length <= 0) {
        extend = widgetDialog._inputFileExtend.value;
    }

    var folderList = folder.split("/");
    var jsonObjFolder = WidgetFileBrowser.getJsonObjFolder(folderList, WidgetFileBrowser._jsonFileBrowser, WidgetFileBrowser._jsonFileBrowser);
    WidgetHistory.addFileBrowserFileList(jsonObjFolder, fileName, extend);
    WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonFileBrowser);

    WidgetHistory.setFileJsonMould(folder + fileName + extend, widgetDialog._jsonObjCtrl._obj);

    panelFileBrowser._widgetFileBrowser.refreshFileBrowserLeft();
    widgetDialog.close();
}
PanelFileBrowser.onClickSaveAsButtonCancel = function () {
    this._jsonObjCtrl._exec.close();
}
