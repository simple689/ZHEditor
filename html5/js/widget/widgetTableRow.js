function WidgetTableRow() {
}

WidgetTableRow.addLabel = function (nodeTable, key) {
    var nodeRow = WidgetTableHtml.addRow(nodeTable);
    WidgetTableHtml.addLabel(nodeRow, key);
    return nodeRow;
}
WidgetTableRow.addLabelLabel = function (nodeTable, key, value) {
    var nodeRow = WidgetTableHtml.addRow(nodeTable);
    WidgetTableHtml.addLabel(nodeRow, key);
    WidgetTableHtml.addLabel(nodeRow, value);
    return nodeRow;
}
WidgetTableRow.addLabelInput = function (nodeTable, key, value, inputType) {
    var nodeRow = WidgetTableHtml.addRow(nodeTable);
    WidgetTableHtml.addLabel(nodeRow, key);
    WidgetTableHtml.addInput(nodeRow, value, inputType);
    return nodeRow;
}
