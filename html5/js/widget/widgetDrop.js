function WidgetDropCtrl() {
}

WidgetDropCtrl._borderColorNormal = "rgba(102,102,102,0)";
WidgetDropCtrl._borderColorFocus = "rgba(102,102,102,1)";
WidgetDropCtrl.createDrop = function (elementParent, panel) {
    var elementDrop = document.createElement("div");
    elementParent.appendChild(elementDrop);
    this.addDrop(elementDrop, panel);
    return elementDrop;
}
WidgetDropCtrl.addDrop = function (elementDrop, panel) {
    elementDrop.classList.add("widgetDrop");
    elementDrop._panel = panel;

    // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
    document.ondragover = WidgetDropCtrl.onDragOverDocument;
    document.ondrop = WidgetDropCtrl.onDropDocument;
    elementDrop.ondragover = WidgetDropCtrl.onDragOverItem;
    elementDrop.ondragenter = WidgetDropCtrl.onDragEnterItem;
    elementDrop.ondragleave = WidgetDropCtrl.onDragLeaveItem;
    elementDrop.ondrop = WidgetDropCtrl.onDropItem;

    return elementDrop;
}

WidgetDropCtrl.onDragOverDocument = function (e) {
    e.preventDefault(); // 只有在onDragOver中阻止默认行为才能触发onDrop而不是onDragLeave
}
WidgetDropCtrl.onDropDocument = function (e) {
    e.preventDefault(); // 阻止onDrop的默认行为（在新窗口中打开拖进的图片）
}
WidgetDropCtrl.onDragOverItem = function (e) {
    this.style.borderColor = WidgetDropCtrl._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropCtrl.onDragEnterItem = function (e) {
    this.style.borderColor = WidgetDropCtrl._borderColorFocus;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropCtrl.onDragLeaveItem = function (e) {
    this.style.borderColor = WidgetDropCtrl._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
}
WidgetDropCtrl.onDropItem = function (e) {
    this.style.borderColor = WidgetDropCtrl._borderColorNormal;
    e.stopPropagation();
    e.preventDefault();
    this._panel.handleFiles(e.dataTransfer.files);
}
