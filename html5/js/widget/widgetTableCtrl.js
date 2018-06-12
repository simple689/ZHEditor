function WidgetTableCtrl() {
}

WidgetTableCtrl.addLabelLabel = function (elementParent, key, value) {
    var nodeTable = WidgetTableCtrlHtml.addTable(elementParent);
    WidgetTableCtrlRow.addLabelLabel(nodeTable, key, value);
    return nodeTable;
}
WidgetTableCtrl.addLabelInput = function (elementParent, key, value, inputType) {
    var nodeTable = WidgetTableCtrlHtml.addTable(elementParent);
    WidgetTableCtrlRow.addLabelInput(nodeTable, key, value, inputType);
    return nodeTable;
}
