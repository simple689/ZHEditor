function WidgetHtmlControl() {
}
WidgetHtmlControl._inputValueType = {
    string : 0,
    number : 1,
    bool : 2
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
WidgetHtmlControl.addTitle = function(nodeParent, value) {
    var nodeTitle = document.createElement("div");
    nodeParent.appendChild(nodeTitle);
    nodeTitle.classList.add("nodeTitle");
    nodeTitle.innerHTML = value;
}
WidgetHtmlControl.addInput = function(nodeParent, value, inputValueType) {
    var nodeInput = document.createElement("input");
    nodeParent.appendChild(nodeInput);
    nodeInput.classList.add("nodeInput");
    nodeInput.onchange = WidgetHtmlControl.inputOnChange;
    nodeInput._valueType = inputValueType;
    if (inputValueType == WidgetHtmlControl._inputValueType.bool) {
        nodeInput.type = "checkbox";
        if (value) {
            nodeInput.checked = true;
        } else {
            nodeInput.checked = false;
        }
    } else {
        nodeInput.value = value;
    }
}
