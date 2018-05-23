function WidgetHtmlControlTable() {
}
WidgetHtmlControlTable.addTitleTitle = function(elementParent, key, value) {
    var nodeTable = WidgetHtmlControl.addTable(elementParent);
    WidgetHtmlControlRow.addTitleTitle(nodeTable, key, value);
    return nodeTable;
}
WidgetHtmlControlTable.addTitleInput = function(elementParent, key, value, inputValueType) {
    var nodeTable = WidgetHtmlControl.addTable(elementParent);
    WidgetHtmlControlRow.addTitleInput(nodeTable, key, value, inputValueType);
    return nodeTable;
}
