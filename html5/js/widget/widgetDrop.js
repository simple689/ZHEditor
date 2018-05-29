function WidgetDropController() {
}
WidgetDropController._borderColorNormal = "#666666";
WidgetDropController._borderColorFocus = "silver";
WidgetDropController.createDrop = function (elementParent, panel ) {
    var elementDrop = document.createElement("div");
    elementParent.appendChild(elementDrop);
    elementDrop.classList.add("widgetDrop");
    elementDrop._panel = panel;

    // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
    document.ondragover = WidgetDropController.documentOnDragOver;
    document.ondrop = WidgetDropController.documentOnDrop;
    elementDrop.ondragover = WidgetDropController.itemOnDragOver;
    elementDrop.ondragenter = WidgetDropController.itemOnDragEnter;
    elementDrop.ondragleave = WidgetDropController.itemOnDragLeave;
    elementDrop.ondrop = WidgetDropController.itemOnDrop;

    return elementDrop;
}
WidgetDropController.documentOnDragOver = function (e) {
    e.preventDefault(); // 只有在onDragOver中阻止默认行为才能触发onDrop而不是onDragLeave
}
WidgetDropController.documentOnDrop = function (e) {
    e.preventDefault(); // 阻止onDrop的默认行为（在新窗口中打开拖进的图片）
}
WidgetDropController.itemOnDragOver = function (e) {
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropController.itemOnDragEnter = function (e) {
    this.style.borderColor = WidgetDropController._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropController.itemOnDragLeave = function (e) {
    this.style.borderColor = WidgetDropController._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropController.itemOnDrop = function (e) {
    this.style.borderColor = WidgetDropController._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
    this._panel.handleFiles(e.dataTransfer.files);
}
