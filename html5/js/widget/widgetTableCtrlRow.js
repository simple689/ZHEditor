function WidgetTableCtrlRow() {
}

WidgetTableCtrlRow.addLabel = function (nodeTable, key) {
    var nodeRow = WidgetTableCtrlHtml.addRow(nodeTable);
    WidgetTableCtrlHtml.addLabel(nodeRow, key);
    return nodeRow;
}
WidgetTableCtrlRow.addLabelLabel = function (nodeTable, key, value) {
    var nodeRow = WidgetTableCtrlHtml.addRow(nodeTable);
    WidgetTableCtrlHtml.addLabel(nodeRow, key);
    WidgetTableCtrlHtml.addLabel(nodeRow, value);
    return nodeRow;
}
WidgetTableCtrlRow.addLabelInput = function (nodeTable, key, value, inputType) {
    var nodeRow = WidgetTableCtrlHtml.addRow(nodeTable);
    WidgetTableCtrlHtml.addLabel(nodeRow, key);
    WidgetTableCtrlHtml.addInput(nodeRow, value, inputType);
    return nodeRow;
}
