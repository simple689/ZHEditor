function WidgetHtmlControlRow() {
}
WidgetHtmlControlRow.addTitle = function(nodeTable, key) {
    var nodeRow = WidgetHtmlControl.addRow(nodeTable);
    WidgetHtmlControl.addTitle(nodeRow, key);
    return nodeRow;
}
WidgetHtmlControlRow.addTitleTitle = function(nodeTable, key, value) {
    var nodeRow = WidgetHtmlControl.addRow(nodeTable);
    WidgetHtmlControl.addTitle(nodeRow, key);
    WidgetHtmlControl.addTitle(nodeRow, value);
    return nodeRow;
}
WidgetHtmlControlRow.addTitleInput = function(nodeTable, key, value, inputValueType) {
    var nodeRow = WidgetHtmlControl.addRow(nodeTable);
    WidgetHtmlControl.addTitle(nodeRow, key);
    WidgetHtmlControl.addInput(nodeRow, value, inputValueType);
    return nodeRow;
}
