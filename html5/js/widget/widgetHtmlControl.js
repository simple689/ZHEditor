function widgetHtmlControl() {
};
widgetHtmlControl.changeInput = function(e) {
    alert(this.value);
}
widgetHtmlControl.addTable = function(nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
widgetHtmlControl.addRow = function(nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
widgetHtmlControl.addCell = function(nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
widgetHtmlControl.addTitle = function(nodeRow, value) {
    var nodeCell = widgetHtmlControl.addCell(nodeRow);
    var nodeTitle = document.createElement("div");
    nodeCell.appendChild(nodeTitle);
    nodeTitle.classList.add("nodeTitle");
    nodeTitle.innerHTML = value;
}
widgetHtmlControl.addInput = function(nodeRow, value) {
    var nodeCell = widgetHtmlControl.addCell(nodeRow);
    var nodeInput = document.createElement("input");
    nodeCell.appendChild(nodeInput);
    nodeInput.classList.add("nodeInput");
    nodeInput.value = value;
    nodeInput.onchange = widgetHtmlControl.changeInput;
}
