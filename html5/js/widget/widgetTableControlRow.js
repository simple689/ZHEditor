function WidgetTableControlRow() {
}
WidgetTableControlRow.addTitle = function(nodeTable, key) {
    var nodeRow = WidgetTableControlHtml.addRow(nodeTable);
    WidgetTableControlHtml.addTitle(nodeRow, key);
    return nodeRow;
}
WidgetTableControlRow.addTitleTitle = function(nodeTable, key, value) {
    var nodeRow = WidgetTableControlHtml.addRow(nodeTable);
    WidgetTableControlHtml.addTitle(nodeRow, key);
    WidgetTableControlHtml.addTitle(nodeRow, value);
    return nodeRow;
}
WidgetTableControlRow.addTitleInput = function(nodeTable, key, value, inputValueType) {
    var nodeRow = WidgetTableControlHtml.addRow(nodeTable);
    WidgetTableControlHtml.addTitle(nodeRow, key);
    WidgetTableControlHtml.addInput(nodeRow, value, inputValueType);
    return nodeRow;
}
