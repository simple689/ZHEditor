function WidgetHtmlControl() {
}
WidgetHtmlControl._inputValueType = {
    string : 0,
    number : 1
}
WidgetHtmlControl.inputOnChange = function(e) {
    switch(this._valueType) {
        case WidgetHtmlControl._inputValueType.string : {
            break;
        }
        case WidgetHtmlControl._inputValueType.number : {
            var valueOld = this.value;
            this.value = this.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'');
            if (this.value != valueOld) {
                alert("该控件内容为数字类型。自动修正完毕。");
            }
            break;
        }
    }
    // alert(this.value);
}
WidgetHtmlControl.addTable = function(nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
WidgetHtmlControl.addRow = function(nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
WidgetHtmlControl.addCell = function(nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
WidgetHtmlControl.addTitle = function(nodeRow, value) {
    var nodeCell = WidgetHtmlControl.addCell(nodeRow);
    var nodeTitle = document.createElement("div");
    nodeCell.appendChild(nodeTitle);
    nodeTitle.classList.add("nodeTitle");
    nodeTitle.innerHTML = value;
}
WidgetHtmlControl.addInput = function(nodeRow, value, inputValueType) {
    var nodeCell = WidgetHtmlControl.addCell(nodeRow);
    var nodeInput = document.createElement("input");
    nodeCell.appendChild(nodeInput);
    nodeInput.classList.add("nodeInput");
    nodeInput.value = value;
    nodeInput.onchange = WidgetHtmlControl.inputOnChange;
    nodeInput._valueType = inputValueType;
}
