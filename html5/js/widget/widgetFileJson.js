function WidgetFileJsonController() {
};
WidgetFileJsonController.prototype.init = function (elementTabTitle, fileStr) {
    this._elementTabTitle = elementTabTitle;
    this._fileStr = fileStr;
    this.initControl();
};
WidgetFileJsonController.prototype.initControl = function () {
    var elementContent = this._elementTabTitle._elementContent;
    elementContent.textContent = "新内容";

    var input = document.createElement("input");
    elementContent.appendChild(input);
    input.value = this._fileStr;

    var jsonObj = eval('(' + this._fileStr + ')');
    console.log(jsonObj);
    for (var j = 0; j < jsonObj.length; j++) {
        alert(jsonObj[j].id);
        alert(jsonObj[j].name);
    }
    for (var o in jsonObj) {
        console.log(o);
        console.log(jsonObj[o]);
        console.log(typeof(jsonObj[o]));
        if (typeof(jsonObj[o]) == "object") {
            for (var o1 in jsonObj[o]) {
                console.log(o1);
                console.log(jsonObj[o][o1]);
            }
        }
    }
};
