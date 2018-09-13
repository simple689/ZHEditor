function WidgetDrop() {
}

WidgetDrop._borderColorNormal = "rgba(102,102,102,0)";
WidgetDrop._borderColorFocus = "rgba(102,102,102,1)";
WidgetDrop.createDrop = function (elementParent, panel) {
    var elementDrop = WidgetHtml.createElement("div");
    elementParent.appendChild(elementDrop);
    this.addDrop(elementDrop, panel);
    return elementDrop;
}
WidgetDrop.addDrop = function (elementDrop, panel) {
    WidgetHtml.classAdd(elementDrop, "widgetDrop");
    elementDrop._panel = panel;

    // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
    document.ondragover = WidgetDrop.onDragOverDocument;
    document.ondrop = WidgetDrop.onDropDocument;
    elementDrop.ondragover = WidgetDrop.onDragOverItem;
    elementDrop.ondragenter = WidgetDrop.onDragEnterItem;
    elementDrop.ondragleave = WidgetDrop.onDragLeaveItem;
    elementDrop.ondrop = WidgetDrop.onDropItem;

    return elementDrop;
}

WidgetDrop.onDragOverDocument = function (e) {
    e.preventDefault(); // 只有在onDragOver中阻止默认行为才能触发onDrop而不是onDragLeave
}
WidgetDrop.onDropDocument = function (e) {
    e.preventDefault(); // 阻止onDrop的默认行为（在新窗口中打开拖进的图片）
}
WidgetDrop.onDragOverItem = function (e) {
    this.style.borderColor = WidgetDrop._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDrop.onDragEnterItem = function (e) {
    this.style.borderColor = WidgetDrop._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDrop.onDragLeaveItem = function (e) {
    this.style.borderColor = WidgetDrop._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDrop.onDropItem = function (e) {
    this.style.borderColor = WidgetDrop._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
    this._panel.handleFiles(e.dataTransfer.files);
}
