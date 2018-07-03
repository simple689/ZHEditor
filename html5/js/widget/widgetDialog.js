function WidgetDialog() {
}
WidgetDialog._dialogList = new Array();

WidgetDialog.prototype.createDialog = function (elementParent) {
    this._elementRoot = document.createElement("div");
    elementParent.appendChild(this._elementRoot);
    this._elementRoot.classList.add("widgetDialogRoot");
    WidgetDialog._dialogList.push(this);

    this._elementMask = document.createElement("div");
    this._elementRoot.appendChild(this._elementMask);
    this._elementMask.classList.add("widgetDialogMask");

    this._elementDialog = document.createElement("div");
    this._elementRoot.appendChild(this._elementDialog);
    this._elementDialog.classList.add("dialog");

    this._elementDialogHead = document.createElement("div");
    this._elementDialog.appendChild(this._elementDialogHead);
    this._elementDialogHead.classList.add("widgetDialogHead");

    this._elementDialogContent = document.createElement("div");
    this._elementDialog.appendChild(this._elementDialogContent);
    this._elementDialogContent.classList.add("widgetDialogContent");

    this._elementDialogClose = document.createElement("div");
    this._elementDialog.appendChild(this._elementDialogClose);
    this._elementDialogClose.classList.add("widgetDialogClose");
    this._elementDialogClose.classList.add("widgetDialogButton");
}
WidgetDialog.prototype.createDialogWithHtml = function (elementParent, html) {
    this.createDialog(elementParent);
    if (!this._elementDialogContent) {
        return;
    }
    $(this._elementDialogContent).load(html, function () {
    });

    this.autoCenter(this._elementDialog);
}

WidgetDialog.prototype.autoCenter = function (element) {
    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;
    //获取对话框宽、高
    var elW = element.offsetWidth;
    var elH = element.offsetHeight;

    element.style.left = (bodyW - elW)/2 + 'px';
    element.style.top = (bodyH - elH)/2 + 'px';
};
