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
    this.readObject(jsonObj, "");
};
WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent) {
    for (var o in jsonObj) {
        var key = o;
        var value = jsonObj[key]
        LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            this.readObject(value, keyChild);
        } else if (typeof(value) == "string") {
            var elementContent = this._elementTabTitle._elementContent;

            var nodeRoot = document.createElement("div");
            elementContent.appendChild(nodeRoot);
            nodeRoot.classList.add("nodeRoot");

            var nodeRow = document.createElement("div");
            nodeRoot.appendChild(nodeRow);
            nodeRow.classList.add("nodeItem");

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
    }
};
WidgetFileJsonController.changeInput = function(e) {
    // alert(this.value);
}
