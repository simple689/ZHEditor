function PanelMenuCallback() {
}

PanelMenuCallback.loadedHtmlSaveAs = function (widgetDialog) {
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "另存为";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    // 路径
    var name = widgetDialog._jsonObjCtrl._key;
    var elementTabTitle = widgetDialog._jsonObjCtrl._exec._elementTabTitle;
    if (elementTabTitle) {
        name = elementTabTitle.innerHTML;
    }
    var title = getFileTitle(name)
    var extend = getFileExtend(name);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFolder");
    var path = "/" + WidgetKey._personalFoldShow + "/";
    if (extend.length > 0) {
        if (extend == WidgetKey._extendJson) {
            path += WidgetKey._jsonShow;
        } else if (extend == WidgetKey._extendJsonMd) {
            path += WidgetKey._jsonMouldShow;
        }
        path += "/";
    }
    jsonObjCtrl._value = path;
    var input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFolder = input;
    input.style.width = bodyW * 0.5 + "px";

    // 间隔
    WidgetHtml.addBr(widgetDialog._elementDialogContent);
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    // 文件浏览
    var widgetFileBrowser = new WidgetFileBrowser();
    widgetDialog._widgetFileBrowser = widgetFileBrowser;
    widgetFileBrowser._nowFolderElement = input;
    widgetFileBrowser.create(widgetDialog._elementDialogContent);
    widgetFileBrowser._divMain.style.height = bodyH * 0.8 + "px";
    widgetFileBrowser._divMain.style.width = bodyW * 0.8 + "px";
    widgetFileBrowser._divLeft.style.width = bodyW * 0.2 + "px";

    // 间隔
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    // 保存路径
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileName");
    jsonObjCtrl._keyShow = "文件名：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileName");
    jsonObjCtrl._value = title;
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFileName = input;
    input.style.width = bodyW * 0.3 + "px";

    // 间隔
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    // 保存类型
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelFileExtend");
    jsonObjCtrl._keyShow = "保存类型：";
    WidgetHtml.addLabel(widgetDialog._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "inputFileExtend");
    jsonObjCtrl._value = extend;
    input = WidgetHtml.addInput(widgetDialog._elementDialogContent, jsonObjCtrl, WidgetHtml._inputType._textString);
    widgetDialog._inputFileExtend = input;
    input.style.width = bodyW * 0.3 + "px";

    // 间隔
    WidgetHtml.addBr(widgetDialog._elementDialogContent);

    // 按钮
    var divButton = WidgetHtml.addDiv(widgetDialog._elementDialogContent);
    divButton.style.float = "right";

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonSave");
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._onClick = PanelMenuCallback.onClickSaveAsButtonSave;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType._button);

    jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "buttonCancel");
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = PanelMenuCallback.onClickSaveAsButtonCancel;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._inputType._button);

    // 刷新
    widgetFileBrowser.refreshFileBrowserRightPath(path);
};

PanelMenuCallback.onClickSaveAsButtonSave = function () {
    var widgetDialog = this._jsonObjCtrl._exec;
    var folder = widgetDialog._inputFolder.value;
    var fileName = widgetDialog._inputFileName.value;
    var extend = getFileExtend(fileName);
    if (extend.length <= 0) {
        extend = widgetDialog._inputFileExtend.value;
    }

    var jsonObjFolder = WidgetFileBrowser.getJsonObjPath(folder);
    WidgetHistory.addFileBrowserFileList(jsonObjFolder, fileName, extend);
    WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonFileBrowser);

    WidgetHistory.setFileJsonMould(folder + fileName + extend, widgetDialog._jsonObjCtrl._obj);

    panelFileBrowser._widgetFileBrowser.refreshFileBrowserLeft();
    widgetDialog.close();
}
PanelMenuCallback.onClickSaveAsButtonCancel = function () {
    this._jsonObjCtrl._exec.close();
}
