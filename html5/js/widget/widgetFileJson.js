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

            var nodeTitle = document.createElement("div");
            nodeRoot.appendChild(nodeTitle);
            nodeTitle.innerHTML = key;
            nodeTitle.classList.add("nodeTitle");
            var nodeInput = document.createElement("input");
            nodeRoot.appendChild(nodeInput);
            nodeInput.value = value;
            nodeInput.classList.add("nodeInput");
        }
    }
};
