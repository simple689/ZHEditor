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

    var nodeRoot = document.createElement("div");
    this._elementTabTitle._elementContent.appendChild(nodeRoot);
    nodeRoot.classList.add("nodeRoot");

    WidgetFileJsonController.toControl_titleTitle(nodeRoot, "demo", "demo");
    WidgetFileJsonController.toControl_titleInput(nodeRoot, "demo", "demo");
    this.readObject(jsonObj, "", nodeRoot);
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
            WidgetFileJsonController.toControl_titleInput(elementParent, key, value);
        }
    }
};
WidgetFileJsonController.changeInput = function(e) {
    alert(this.value);
}
WidgetFileJsonController.createNodeRow = function(elementParent) {
    var nodeRow = document.createElement("div");
    elementParent.appendChild(nodeRow);
    nodeRow.classList.add("nodeItem");
    return nodeRow;
}
WidgetFileJsonController.toControl_titleTitle = function(elementParent, key, value) {
    var nodeRow = WidgetFileJsonController.createNodeRow(elementParent);
    var nodeTitle = document.createElement("div");
    nodeRow.appendChild(nodeTitle);
    nodeTitle.innerHTML = key;
    nodeTitle.classList.add("nodeTitle");
    var nodeTitle_0 = document.createElement("div");
    nodeRow.appendChild(nodeTitle_0);
    nodeTitle_0.innerHTML = value;
    nodeTitle_0.classList.add("nodeTitle");
}
WidgetFileJsonController.toJson_titleTitle = function(elementParent, key, value) {
}
WidgetFileJsonController.toControl_titleInput = function(elementParent, key, value) {
    var nodeRow = WidgetFileJsonController.createNodeRow(elementParent);
    var nodeTitle = document.createElement("div");
    nodeRow.appendChild(nodeTitle);
    nodeTitle.innerHTML = key;
    nodeTitle.classList.add("nodeTitle");
    var nodeInput = document.createElement("input");
    nodeRow.appendChild(nodeInput);
    nodeInput.value = value;
    nodeInput.classList.add("nodeInput");
    nodeInput.onchange = WidgetFileJsonController.changeInput;
}
WidgetFileJsonController.toJson_titleInput = function(elementParent, key, value) {
}
