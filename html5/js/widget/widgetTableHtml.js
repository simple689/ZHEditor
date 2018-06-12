function WidgetTableHtml() {
}

WidgetTableHtml.addTable = function (nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
WidgetTableHtml.addRow = function (nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
WidgetTableHtml.addCell = function (nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
WidgetTableHtml.addLabel = function (nodeRow, value) {
    var nodeCell = WidgetTableHtml.addCell(nodeRow);
    WidgetHtml.addLabel(nodeCell, this, value, null, null);
}
WidgetTableHtml.addInput = function (nodeRow, value, inputType) {
    var nodeCell = WidgetTableHtml.addCell(nodeRow);
    WidgetHtml.addInput(nodeCell, this, value, inputType, null, null);
}
