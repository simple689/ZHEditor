function WidgetTable() {
}

WidgetTable.addLabelLabel = function (elementParent, key, value) {
    var nodeTable = WidgetTableHtml.addTable(elementParent);
    WidgetTableRow.addLabelLabel(nodeTable, key, value);
    return nodeTable;
}
WidgetTable.addLabelInput = function (elementParent, key, value, inputType) {
    var nodeTable = WidgetTableHtml.addTable(elementParent);
    WidgetTableRow.addLabelInput(nodeTable, key, value, inputType);
    return nodeTable;
}
