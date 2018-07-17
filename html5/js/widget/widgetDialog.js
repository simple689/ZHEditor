function WidgetDialog() {
}

WidgetDialog._dialogList = new Array();

WidgetDialog.prototype.createDialog = function (elementParent) {
    this._elementRoot = document.createElement("div");
    elementParent.appendChild(this._elementRoot);
    this._elementRoot.classList.add("widgetDialogRoot");
    this._elementRoot._widgetDialog = this;
    WidgetDialog._dialogList.push(this);

    this._elementMask = document.createElement("div");
    this._elementRoot.appendChild(this._elementMask);
    this._elementMask.classList.add("widgetDialogMask");
    this._elementMask._widgetDialog = this;

    this._elementDialog = document.createElement("div");
    this._elementRoot.appendChild(this._elementDialog);
    this._elementDialog.classList.add("widgetDialog");
    this._elementDialog._widgetDialog = this;

    this._elementDialogHead = document.createElement("div");
    this._elementDialog.appendChild(this._elementDialogHead);
    this._elementDialogHead.classList.add("widgetDialogHead");
    this._elementDialogHead._widgetDialog = this;

    this._elementDialogClose = document.createElement("div");
    this._elementDialogHead.appendChild(this._elementDialogClose);
    this._elementDialogClose.classList.add("widgetDialogHeadButton");
    this._elementDialogClose._widgetDialog = this;
    this._elementDialogClose.innerHTML = "X";
    this._elementDialogClose.onclick = WidgetDialog.onClickClose;

    this._elementDialogContent = document.createElement("div");
    this._elementDialog.appendChild(this._elementDialogContent);
    this._elementDialogContent.classList.add("widgetDialogContent");
    this._elementDialogContent._widgetDialog = this;

    // this._elementDialogButton = document.createElement("div");
    // this._elementDialog.appendChild(this._elementDialogButton);
    // this._elementDialogButton.classList.add("widgetDialogButton");
}
WidgetDialog.prototype.createDialogWithHtml = function (jsonObjCtrl, elementParent, html, htmlLoaded) {
    this.createDialog(elementParent);
    if (!this._elementDialogContent) {
        return;
    }
    this._jsonObjCtrl = jsonObjCtrl;
    if (html) {
        $(this._elementDialogContent).load(html, function () {
            WidgetDialog.htmlLoaded(this._widgetDialog, htmlLoaded);
        });
    } else {
        WidgetDialog.htmlLoaded(this, htmlLoaded);
    }

}
WidgetDialog.htmlLoaded = function (widgetDialog, htmlLoaded) {
    if (htmlLoaded) {
        htmlLoaded(widgetDialog);
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
