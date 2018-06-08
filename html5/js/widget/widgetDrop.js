function WidgetDropController() {
}

WidgetDropController._borderColorNormal = "rgba(102,102,102,0)";
WidgetDropController._borderColorFocus = "rgba(102,102,102,1)";
WidgetDropController.createDrop = function (elementParent, panel) {
    var elementDrop = document.createElement("div");
    elementParent.appendChild(elementDrop);
    this.addDrop(elementDrop, panel);
    return elementDrop;
}
WidgetDropController.addDrop = function (elementDrop, panel) {
    elementDrop.classList.add("widgetDrop");
    elementDrop._panel = panel;

    // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
    document.ondragover = WidgetDropController.onDragOverDocument;
    document.ondrop = WidgetDropController.onDropDocument;
    elementDrop.ondragover = WidgetDropController.onDragOverItem;
    elementDrop.ondragenter = WidgetDropController.onDragEnterItem;
    elementDrop.ondragleave = WidgetDropController.onDragLeaveItem;
    elementDrop.ondrop = WidgetDropController.onDropItem;

    return elementDrop;
}

WidgetDropController.onDragOverDocument = function (e) {
    e.preventDefault(); // 只有在onDragOver中阻止默认行为才能触发onDrop而不是onDragLeave
}
WidgetDropController.onDropDocument = function (e) {
    e.preventDefault(); // 阻止onDrop的默认行为（在新窗口中打开拖进的图片）
}
WidgetDropController.onDragOverItem = function (e) {
    this.style.borderColor = WidgetDropController._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropController.onDragEnterItem = function (e) {
    this.style.borderColor = WidgetDropController._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropController.onDragLeaveItem = function (e) {
    this.style.borderColor = WidgetDropController._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropController.onDropItem = function (e) {
    this.style.borderColor = WidgetDropController._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
    this._panel.handleFiles(e.dataTransfer.files);
}
