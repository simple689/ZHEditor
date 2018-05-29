function WidgetTableControl() {
}
WidgetTableControl.addTitleTitle = function(elementParent, key, value) {
    var nodeTable = WidgetTableControlHtml.addTable(elementParent);
    WidgetTableControlRow.addTitleTitle(nodeTable, key, value);
    return nodeTable;
}
WidgetTableControl.addTitleInput = function(elementParent, key, value, inputValueType) {
    var nodeTable = WidgetTableControlHtml.addTable(elementParent);
    WidgetTableControlRow.addTitleInput(nodeTable, key, value, inputValueType);
    return nodeTable;
}
