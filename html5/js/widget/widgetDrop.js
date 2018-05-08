function WidgetDropController() {
    this._elementDrop = null;
};
WidgetDropController._borderColorNormal = "gray";
WidgetDropController._borderColorFocus = "silver";
WidgetDropController.prototype.init = function (panel, elementParent) {
    this._panel = panel;

    this._elementDrop = document.createElement("div");
    elementParent.appendChild(this._elementDrop);
    this._elementDrop.classList.add("widgetDrop");
    this._elementDrop.classList.add("widgetDropBox");
    this._elementDrop._widgetDropController = this;

    // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
    document.ondragover = WidgetDropController.documentOnDragOver;
    document.ondrop = WidgetDropController.documentOnDrop;
    this._elementDrop.ondragover = WidgetDropController.itemOnDragOver;
    this._elementDrop.ondragenter = WidgetDropController.itemOnDragEnter;
    this._elementDrop.ondragleave = WidgetDropController.itemOnDragLeave;
    this._elementDrop.ondrop = WidgetDropController.itemOnDrop;

    return this._elementDrop;
};
WidgetDropController.documentOnDragOver = function (e) {
    e.preventDefault(); // 只有在onDragOver中阻止默认行为才能触发onDrop而不是onDragLeave
};
WidgetDropController.documentOnDrop = function (e) {
    e.preventDefault(); // 阻止onDrop的默认行为（在新窗口中打开拖进的图片）
};
WidgetDropController.itemOnDragOver = function (e) {
    e.stopPropagation();
    e.preventDefault();
};
WidgetDropController.itemOnDragEnter = function (e) {
    this._widgetDropController._elementDrop.style.borderColor = WidgetDropController._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
};
WidgetDropController.itemOnDragLeave = function (e) {
    this._widgetDropController._elementDrop.style.borderColor = WidgetDropController._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
};
WidgetDropController.itemOnDrop = function (e) {
    this._widgetDropController._elementDrop.style.borderColor = WidgetDropController._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
    this._widgetDropController._panel.handleFiles(e.dataTransfer.files);
};
