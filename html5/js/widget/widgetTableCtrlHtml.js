function WidgetTableCtrlHtml() {
}

WidgetTableCtrlHtml.addTable = function (nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
WidgetTableCtrlHtml.addRow = function (nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
WidgetTableCtrlHtml.addCell = function (nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
WidgetTableCtrlHtml.addLabel = function (nodeRow, value) {
    var nodeCell = WidgetTableCtrlHtml.addCell(nodeRow);
    WidgetHtmlCtrl.addLabel(nodeCell, this, value, null, null);
}
WidgetTableCtrlHtml.addInput = function (nodeRow, value, inputType) {
    var nodeCell = WidgetTableCtrlHtml.addCell(nodeRow);
    WidgetHtmlCtrl.addInput(nodeCell, this, value, inputType, null, null);
}
