function WidgetDialog() {
}

WidgetDialog._dialogList = new Array();

WidgetDialog.prototype.createDialog = function (elementParent) {
    this._elementRoot = WidgetHtml.createElement("div");
    elementParent.appendChild(this._elementRoot);
    WidgetHtml.classAdd(this._elementRoot, "widgetDialogRoot");
    this._elementRoot._widgetDialog = this;
    WidgetDialog._dialogList.push(this);

    this._elementMask = WidgetHtml.createElement("div");
    this._elementRoot.appendChild(this._elementMask);
    WidgetHtml.classAdd(this._elementMask, "widgetDialogMask");
    this._elementMask._widgetDialog = this;

    this._elementDialog = WidgetHtml.createElement("div");
    this._elementRoot.appendChild(this._elementDialog);
    WidgetHtml.classAdd(this._elementDialog, "widgetDialog");
    this._elementDialog._widgetDialog = this;

    this._elementDialogHead = WidgetHtml.createElement("div");
    this._elementDialog.appendChild(this._elementDialogHead);
    WidgetHtml.classAdd(this._elementDialogHead, "widgetDialogHead");
    this._elementDialogHead._widgetDialog = this;

    this._elementDialogClose = WidgetHtml.createElement("div");
    this._elementDialogHead.appendChild(this._elementDialogClose);
    WidgetHtml.classAdd(this._elementDialogClose, "widgetDialogHeadButton");
    this._elementDialogClose._widgetDialog = this;
    this._elementDialogClose.innerHTML = "X";
    this._elementDialogClose.onclick = WidgetDialog.onClickClose;

    this._elementDialogContent = WidgetHtml.createElement("div");
    this._elementDialog.appendChild(this._elementDialogContent);
    WidgetHtml.classAdd(this._elementDialogContent, "widgetDialogContent");
    this._elementDialogContent._widgetDialog = this;

    // this._elementDialogButton = WidgetHtml.createElement("div");
    // this._elementDialog.appendChild(this._elementDialogButton);
    // WidgetHtml.classAdd(this._elementDialogButton, "widgetDialogButton");
}
WidgetDialog.prototype.createDialogWithHtml = function (jsonObjCtrl, elementParent, html, loadedHtml) {
    this.createDialog(elementParent);
    if (!this._elementDialogContent) {
        return;
    }
    this._jsonObjCtrl = jsonObjCtrl;
    if (html) {
        $(this._elementDialogContent).load(html, function () {
            WidgetDialog.loadedHtml(this._widgetDialog, loadedHtml);
        });
    } else {
        WidgetDialog.loadedHtml(this, loadedHtml);
    }

}
WidgetDialog.loadedHtml = function (widgetDialog, loadedHtml) {
    if (loadedHtml) {
        loadedHtml(widgetDialog);
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
WidgetDialog.onClickClose = function () {
    this._widgetDialog.close();
}
WidgetDialog.prototype.close = function () {
    this._elementRoot.remove();
}
