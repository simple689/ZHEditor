function WidgetDialog() {
}

WidgetDialog._dialogList = new Array();

function ChoiceListItem(title, callback) {
    this._title = title;
    this._callback = callback;
};

WidgetDialog.prototype.createDialog = function (elementParent) {
    this._elementParent = WidgetHtml.addDiv(elementParent);
    WidgetHtml.classAdd(this._elementParent, "widgetDialogRoot");
    this._elementParent._widgetDialog = this;
    WidgetDialog._dialogList.push(this);

    this._elementMask = WidgetHtml.addDiv(this._elementParent);
    WidgetHtml.classAdd(this._elementMask, "widgetDialogMask");
    this._elementMask._widgetDialog = this;

    this._elementDialog = WidgetHtml.addDiv(this._elementParent);
    WidgetHtml.classAdd(this._elementDialog, "widgetDialog");
    this._elementDialog._widgetDialog = this;

    this._elementDialogHead = WidgetHtml.addDiv(this._elementDialog);
    WidgetHtml.classAdd(this._elementDialogHead, "widgetDialogHead");
    this._elementDialogHead._widgetDialog = this;

    this._elementDialogClose = WidgetHtml.addDiv(this._elementDialogHead);
    WidgetHtml.classAdd(this._elementDialogClose, "widgetDialogHeadButton");
    this._elementDialogClose._widgetDialog = this;
    this._elementDialogClose.innerHTML = "X";
    this._elementDialogClose.onclick = WidgetDialog.onClickClose;

    this._elementDialogContent = WidgetHtml.addDiv(this._elementDialog);
    WidgetHtml.classAdd(this._elementDialogContent, "widgetDialogContent");
    this._elementDialogContent._widgetDialog = this;
}
WidgetDialog.loadedHtml = function (widgetDialog, callback) {
    if (callback) {
        callback(widgetDialog);
    }
    WidgetDialog.autoCenter(widgetDialog._elementDialog);
}
WidgetDialog.autoCenter = function (element) {
    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;
    //获取对话框宽、高
    var elementW = element.offsetWidth;
    var elementH = element.offsetHeight;

    element.style.left = (bodyW - elementW) / 2 + 'px';
    element.style.top = (bodyH - elementH) / 2 + 'px';
};
WidgetDialog.resizeWindow = function () {
    for (var i in WidgetDialog._dialogList) {
        WidgetDialog.autoCenter(WidgetDialog._dialogList[i]._elementDialog);
    }
};
WidgetDialog.prototype.createDialogWithHtml = function (jsonObjCtrl, elementParent, html, callback) {
    this.createDialog(elementParent);
    if (!this._elementDialogContent) {
        return;
    }
    this._jsonObjCtrl = jsonObjCtrl;
    if (html) {
        $(this._elementDialogContent).load(html, function () {
            WidgetDialog.loadedHtml(this._widgetDialog, callback);
        });
    } else {
        WidgetDialog.loadedHtml(this, callback);
    }
}
WidgetDialog.prototype.createDialogOneInput = function (title, description, elementParent, callback) {
    this.createDialog(elementParent);
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = title;
    var label = WidgetHtml.addLabel(this._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    // 描述
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = description;
    WidgetHtml.addLabel(this._elementDialogContent, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    this._oneInput = WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._textString);

    WidgetHtml.addBr(this._elementDialogContent);
    // button
    this._callback = callback;

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = WidgetDialog.onClickOneInputCancel;
    WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "确定";
    jsonObjCtrl._onClick = WidgetDialog.onClickOneInputConfirm;
    WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._button);

    WidgetDialog.loadedHtml(this, null);
}
WidgetDialog.prototype.createDialogChoiceList = function (title, description, elementParent, choiceList) {
    this.createDialog(elementParent);
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = title;
    var label = WidgetHtml.addLabel(this._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    // 描述
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = description;
    WidgetHtml.addLabel(this._elementDialogContent, jsonObjCtrl);

    WidgetHtml.addBr(this._elementDialogContent);
    WidgetHtml.addBr(this._elementDialogContent);

    for (var i in choiceList) {
        var item = choiceList[i];
        jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
        jsonObjCtrl._value = item._title;
        jsonObjCtrl._onClick = item._callback;
        WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._button);
    }
    WidgetDialog.loadedHtml(this, null);
}
WidgetDialog.prototype.createDialogFileBrowser = function (title, elementParent, choiceList) {
    this.createDialog(elementParent);
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = title;
    var label = WidgetHtml.addLabel(this._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    // 路径
    var name = this._jsonObjCtrl._key;
    var elementTabTitle = this._jsonObjCtrl._exec._elementTabTitle;
    if (elementTabTitle) {
        name = elementTabTitle._title;
    }
    var title = getFileTitle(name)
    var extend = getFileExtend(name);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    var path = "/" + APIData._personalShow + "/";
    if (extend.length > 0) {
        if (equalFileExtend(extend, APIData._extendJson)) {
            path += APIData._jsonShow;
        } else if (equalFileExtend(extend, APIData._extendJsonMd)) {
            path += APIData._jsonMouldShow;
        }
        path += "/";
    }
    jsonObjCtrl._value = path;
    var input = WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._textString);
    this._inputFolder = input;
    input.style.width = bodyW * 0.5 + "px";

    // 间隔
    WidgetHtml.addBr(this._elementDialogContent);
    WidgetHtml.addBr(this._elementDialogContent);

    // 文件浏览
    var widgetFileBrowser = new WidgetFileBrowser();
    this._widgetFileBrowser = widgetFileBrowser;
    widgetFileBrowser._nowFolderElement = input;
    widgetFileBrowser.create(this._elementDialogContent, API._fileBrowser._type._all, "dialogSaveFile");
    widgetFileBrowser._divMain.style.height = bodyH * 0.8 + "px";
    widgetFileBrowser._divMain.style.width = bodyW * 0.8 + "px";
    widgetFileBrowser._divLeft.style.width = bodyW * 0.2 + "px";

    // 间隔
    WidgetHtml.addBr(this._elementDialogContent);

    // 保存路径
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "文件名：";
    WidgetHtml.addLabel(this._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = title;
    input = WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._textString);
    this._inputFileName = input;
    input.style.width = bodyW * 0.3 + "px";

    // 间隔
    WidgetHtml.addBr(this._elementDialogContent);

    // 保存类型
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "保存类型：";
    WidgetHtml.addLabel(this._elementDialogContent, jsonObjCtrl);
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = extend;
    input = WidgetHtml.addInput(this._elementDialogContent, jsonObjCtrl, WidgetHtml._enumInputType._textString);
    this._inputFileExtend = input;
    input.style.width = bodyW * 0.3 + "px";

    // 间隔
    WidgetHtml.addBr(this._elementDialogContent);

    // 按钮
    var divButton = WidgetHtml.addDiv(this._elementDialogContent);
    divButton.style.float = "right";

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "保存";
    jsonObjCtrl._onClick = PanelMenu.onClickSaveAsButtonSave;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._enumInputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "取消";
    jsonObjCtrl._onClick = PanelMenu.onClickSaveAsButtonCancel;
    WidgetHtml.addInput(divButton, jsonObjCtrl, WidgetHtml._enumInputType._button);

    // 刷新
    widgetFileBrowser.refreshFileBrowserRightPath(path);

    WidgetDialog.loadedHtml(this, null);
}
WidgetDialog.onClickOneInputCancel = function () {
    var exec = WidgetFileUtil.getExec(this);
    if (!exec) {
        return;
    }
    if (exec._callback) {
        exec._callback(null, null);
    }
    exec.close();
}
WidgetDialog.onClickOneInputConfirm = function () {
    var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(this);
    if (!jsonObjCtrl) {
        return;
    }
    var exec = jsonObjCtrl._exec;
    if (!exec) {
        return;
    }
    var value = exec._oneInput.value;
    if (exec._callback) {
        exec._callback(WidgetKey._confirm, value);
    }
    exec.close();
}

WidgetDialog.onClickClose = function () {
    this._widgetDialog.close();
}
WidgetDialog.prototype.close = function () {
    this._elementParent.remove();
}
