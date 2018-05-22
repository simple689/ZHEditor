function widgetHtmlControlTable() {
};
widgetHtmlControlTable.addTitleTitle = function(elementParent, key, value) {
    var nodeTable = widgetHtmlControl.addTable(elementParent);
    widgetHtmlControlRow.addTitleTitle(nodeTable, key, value);
    return nodeTable;
}
widgetHtmlControlTable.addTitleInput = function(elementParent, key, value) {
    var nodeTable = widgetHtmlControl.addTable(elementParent);
    widgetHtmlControlRow.addTitleInput(nodeTable, key, value);
    return nodeTable;
}
