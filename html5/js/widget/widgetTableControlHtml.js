function WidgetTableControlHtml() {
}
WidgetTableControlHtml.addTable = function(nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
WidgetTableControlHtml.addRow = function(nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
WidgetTableControlHtml.addCell = function(nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
WidgetTableControlHtml.addTitle = function(nodeRow, value) {
    var nodeCell = WidgetTableControlHtml.addCell(nodeRow);
    WidgetHtmlControl.addTitle(nodeCell, value);
}
WidgetTableControlHtml.addInput = function(nodeRow, value, inputValueType) {
    var nodeCell = WidgetTableControlHtml.addCell(nodeRow);
    WidgetHtmlControl.addInput(nodeCell, value, inputValueType);
}
