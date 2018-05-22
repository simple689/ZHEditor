function WidgetFileJsonController() {
};
WidgetFileJsonController.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initControl();
};
WidgetFileJsonController.prototype.initControl = function () {
    var jsonObj = eval('(' + this._fileStr + ')');
    // LogController.log(jsonObj);
    var nodeRoot = this._elementTabTitle._elementContent;
    WidgetFileJsonController.addControlTable_titleTitle(nodeRoot, "demo", "demo");
    WidgetFileJsonController.addControlTable_titleInput(nodeRoot, "demo", "demo");
    var nodeTable = WidgetFileJsonController.insertNodeTable(nodeRoot);
    this.readObject(jsonObj, "", nodeTable);
};
WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent, elementParent) {
    for (var o in jsonObj) {
        var key = o;
        var value = jsonObj[key]
        LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            this.readObject(value, keyChild, elementParent);
        } else if (typeof(value) == "string") {
            WidgetFileJsonController.addControlRow_titleInput(elementParent, key, value);
        }
    }
};
WidgetFileJsonController.changeInput = function(e) {
    alert(this.value);
}
WidgetFileJsonController.insertNodeTable = function(nodeParent) {
    var nodeTable = document.createElement("table");
    nodeParent.appendChild(nodeTable);
    nodeTable.classList.add("nodeTable");
    return nodeTable;
}
WidgetFileJsonController.insertNodeRow = function(nodeTable) {
    var nodeRow = nodeTable.insertRow();
    nodeRow.classList.add("nodeRow");
    return nodeRow;
}
WidgetFileJsonController.insertNodeCell = function(nodeRow) {
    var nodeCell = nodeRow.insertCell();
    nodeCell.classList.add("nodeCell");
    return nodeCell;
}
WidgetFileJsonController.addControl_title = function(nodeRow, value) {
    var nodeCell = WidgetFileJsonController.insertNodeCell(nodeRow);
    var nodeTitle = document.createElement("div");
    nodeCell.appendChild(nodeTitle);
    nodeTitle.innerHTML = value;
    nodeTitle.classList.add("nodeTitle");
}
WidgetFileJsonController.addControl_input = function(nodeRow, value) {
    var nodeCell = WidgetFileJsonController.insertNodeCell(nodeRow);
    var nodeInput = document.createElement("input");
    nodeCell.appendChild(nodeInput);
    nodeInput.value = value;
    nodeInput.classList.add("nodeInput");
    nodeInput.onchange = WidgetFileJsonController.changeInput;
}
WidgetFileJsonController.addControlRow_titleTitle = function(nodeTable, key, value) {
    var nodeRow = WidgetFileJsonController.insertNodeRow(nodeTable);
    WidgetFileJsonController.addControl_title(nodeRow, key);
    WidgetFileJsonController.addControl_title(nodeRow, value);
    return nodeRow;
}
WidgetFileJsonController.addControlRow_titleInput = function(nodeTable, key, value) {
    var nodeRow = WidgetFileJsonController.insertNodeRow(nodeTable);
    WidgetFileJsonController.addControl_title(nodeRow, key);
    WidgetFileJsonController.addControl_input(nodeRow, value);
    return nodeRow;
}
WidgetFileJsonController.addControlTable_titleTitle = function(elementParent, key, value) {
    var nodeTable = WidgetFileJsonController.insertNodeTable(elementParent);
    WidgetFileJsonController.addControlRow_titleTitle(nodeTable, key, value);
    return nodeTable;
}
WidgetFileJsonController.addControlTable_titleInput = function(elementParent, key, value) {
    var nodeTable = WidgetFileJsonController.insertNodeTable(elementParent);
    WidgetFileJsonController.addControlRow_titleInput(nodeTable, key, value);
    return nodeTable;
}
WidgetFileJsonController.toJson_titleTitle = function(nodeTable, key, value) {
}
WidgetFileJsonController.toJson_titleInput = function(nodeTable, key, value) {
}
