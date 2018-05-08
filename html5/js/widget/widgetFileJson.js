function WidgetFileJsonController() {
};
WidgetFileJsonController.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initControl();
};
WidgetFileJsonController.prototype.initControl = function () {
    var elementContent = this._elementTabTitle._elementContent;

    var input = document.createElement("input");
    elementContent.appendChild(input);
    input.value = this._fileStr;

    var jsonObj = eval('(' + this._fileStr + ')');
    // LogController.log(jsonObj);
    this.readObject(jsonObj, "");
};
WidgetFileJsonController.prototype.readObject = function (jsonObj, keyParent) {
    for (var o in jsonObj) {
        var key = o;
        var value = jsonObj[o]
        LogController.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            this.readObject(value, keyChild);
        }
    }
};
