function WidgetFileBase() {
}

WidgetFileBase.prototype.init = function (elementTabTitle, fileContent, contentType) {
    this._elementTabTitle = elementTabTitle;
    if (contentType == WidgetTab._enumAddContentType.fileContent) {
        this._jsonObj = JSON.parse(fileContent);
    } else if (contentType == WidgetTab._enumAddContentType.fileJsonObj) {
        this._jsonObj = fileContent;
    }
    this.initRoot();
}
WidgetFileBase.prototype.initRoot = function () {
    var elementFileRoot = this._elementTabTitle._elementFileRoot;

    var jsonObjCtrl = new JsonObjCtrl(this, this._jsonObj, false, "root");
    jsonObjCtrl._keyShow = "文件根节点";
    jsonObjCtrl._onContextMenu = WidgetFileOnContextMenu.onContextMenuRoot;
    this._menuFoldCtrl = new WidgetMenuFold();
    var foldItem = this._menuFoldCtrl.createMenuFold(elementFileRoot, jsonObjCtrl);
    return foldItem;
}
