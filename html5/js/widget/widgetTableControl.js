function WidgetTableControl() {
}
WidgetTableControl.addLabelLabel = function(elementParent, key, value) {
    var nodeTable = WidgetTableControlHtml.addTable(elementParent);
    WidgetTableControlRow.addLabelLabel(nodeTable, key, value);
    return nodeTable;
}
WidgetTableControl.addLabelInput = function(elementParent, key, value, inputType) {
    var nodeTable = WidgetTableControlHtml.addTable(elementParent);
    WidgetTableControlRow.addLabelInput(nodeTable, key, value, inputType);
    return nodeTable;
}
