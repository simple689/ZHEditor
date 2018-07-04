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
PanelFileBrowser.saveAs = function (title, jsonObj) {
    if (false) {
        WidgetHistory.setFileJsonMould(title, jsonObj);
    }
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(document.body, "../../editor/dialog/dialogSaveAs.html", PanelFileBrowser.saveAsHtmlLoaded);
};
PanelFileBrowser.saveAsHtmlLoaded = function (widgetDialog) {
    var widgetFileBrowser = new WidgetFileBrowser();

    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "另存为";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFolder");
    jsonObjCtrl._value = "/";
    var input =  WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType.textString);
    widgetFileBrowser._nowFolder = input;
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
    jsonObjCtrl._value = "inputFileName";
    input =  WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType.textString);
    widgetDialog._inputFileName = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelSaveType");
    jsonObjCtrl._keyShow = "保存类型：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputSaveType");
    jsonObjCtrl._value = "inputSaveType";
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType.textString);
    widgetDialog._inputSaveType = input;
    input.style.width = "300px";

    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    var divButton = WidgetHtml.addDiv(widgetDialog._elementDialogContent);
    divButton.style.float = "right";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonSave");
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._onClick = PanelFileBrowser.onClickSaveAsButtonSave;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType.button);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonCancel");
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = PanelFileBrowser.onClickSaveAsButtonCancel;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType.button);
};
PanelFileBrowser.onClickSaveAsButtonSave = function () {
    var widgetDialog = this._jsonObjCtrl._exec;
    var folder = widgetDialog._inputFolder.value;
    var fileName = widgetDialog._inputFileName.value;
    var saveType = widgetDialog._inputSaveType.value;

    var folderList = folder.split("/");
    var jsonObjFolder = PanelFileBrowser.getJsonObjFolder(folderList, WidgetFileBrowser._jsonFileBrowser, WidgetFileBrowser._jsonFileBrowser);
    WidgetHistory.addFileBrowserFile(jsonObjFolder, fileName, WidgetFile._extendJsonMd);
    WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonFileBrowser);

    panelFileBrowser._widgetFileBrowser.refreshFileBrowserLeft();
    widgetDialog.close();
}
PanelFileBrowser.onClickSaveAsButtonCancel = function () {
    this._jsonObjCtrl._exec.close();
}
PanelFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
    for (var i = 0; i < folderList.length; i++) {
        var item = folderList[i];
        if (item.length > 0) {
            for (var o in jsonObj) {
                var key = o;
                var value = jsonObj[key];
                var keyShow = value[WidgetKey._title];
                if (item == keyShow) {
                    var folderListNew = folderList.slice(i + 1, folderList.length + 1);
                    var jsonObjNew = value[WidgetKey._folderList];
                    return PanelFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
                }
            }
        }
        if (i == folderList.length - 1) {
            return jsonObjOrg;
        }
    }
    return null;
}
