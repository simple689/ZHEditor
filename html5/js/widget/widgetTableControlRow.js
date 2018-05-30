function WidgetTableControlRow() {
}
WidgetTableControlRow.addLabel = function(nodeTable, key) {
    var nodeRow = WidgetTableControlHtml.addRow(nodeTable);
    WidgetTableControlHtml.addLabel(nodeRow, key);
    return nodeRow;
}
WidgetTableControlRow.addLabelLabel = function(nodeTable, key, value) {
    var nodeRow = WidgetTableControlHtml.addRow(nodeTable);
    WidgetTableControlHtml.addLabel(nodeRow, key);
    WidgetTableControlHtml.addLabel(nodeRow, value);
    return nodeRow;
}
WidgetTableControlRow.addLabelInput = function(nodeTable, key, value, inputType) {
    var nodeRow = WidgetTableControlHtml.addRow(nodeTable);
    WidgetTableControlHtml.addLabel(nodeRow, key);
    WidgetTableControlHtml.addInput(nodeRow, value, inputType);
    return nodeRow;
}
