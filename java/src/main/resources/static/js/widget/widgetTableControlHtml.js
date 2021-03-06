function WidgetTableControlHtml() {
}

WidgetTableControlHtml.addTable = function (nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
WidgetTableControlHtml.addRow = function (nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
WidgetTableControlHtml.addCell = function (nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
WidgetTableControlHtml.addLabel = function (nodeRow, value) {
    var nodeCell = WidgetTableControlHtml.addCell(nodeRow);
    WidgetHtmlControl.addLabel(nodeCell, value);
}
WidgetTableControlHtml.addInput = function (nodeRow, value, inputType) {
    var nodeCell = WidgetTableControlHtml.addCell(nodeRow);
    WidgetHtmlControl.addInput(nodeCell, value, inputType);
}
