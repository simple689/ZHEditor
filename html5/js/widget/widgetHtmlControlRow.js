function widgetHtmlControlRow() {
};
widgetHtmlControlRow.addTitleTitle = function(nodeTable, key, value) {
    var nodeRow = widgetHtmlControl.addRow(nodeTable);
    widgetHtmlControl.addTitle(nodeRow, key);
    widgetHtmlControl.addTitle(nodeRow, value);
    return nodeRow;
}
widgetHtmlControlRow.addTitleInput = function(nodeTable, key, value) {
    var nodeRow = widgetHtmlControl.addRow(nodeTable);
    widgetHtmlControl.addTitle(nodeRow, key);
    widgetHtmlControl.addInput(nodeRow, value);
    return nodeRow;
}
