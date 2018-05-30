function WidgetHtmlControl() {
}
WidgetHtmlControl._inputType = {
    textString : 0,
    textNumber : 1,
    button : 2,
    checkbox : 3,
    radio : 4,
    file : 5,
    image : 6,
    password : 7,
    submit : 8,
    reset : 9,
    hidden : 10
}
WidgetHtmlControl.inputOnChange = function(e) {
    switch(this._inputType) {
        case WidgetHtmlControl._inputType.textString : {
            break;
        }
        case WidgetHtmlControl._inputType.textNumber : {
            var valueOld = this.value;
            this.value = this.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'');
            if (this.value != valueOld) {
                alert("该控件内容为数字类型。自动修正完毕。");
            }
            break;
        }
    }
}
WidgetHtmlControl.addLabel = function(nodeParent, value) {
    var nodeLabel = document.createElement("label");
    nodeParent.appendChild(nodeLabel);
    nodeLabel.classList.add("nodeLabel");
    nodeLabel.innerHTML = value;
}
WidgetHtmlControl.addInput = function(nodeParent, value, inputType) {
    var nodeInput = document.createElement("input");
    nodeParent.appendChild(nodeInput);
    nodeInput.classList.add("nodeInput");
    nodeInput.onchange = WidgetHtmlControl.inputOnChange;
    nodeInput._inputType = inputType;
    switch (inputType) {
        case WidgetHtmlControl._inputType.button : {
            nodeInput.type = "button";
            nodeInput.value = value;
            break;
        }
        case WidgetHtmlControl._inputType.checkbox : {
            nodeInput.type = "checkbox";
            if (value) {
                nodeInput.checked = true;
            } else {
                nodeInput.checked = false;
            }
            break;
        }
        case WidgetHtmlControl._inputType.radio : {
            break;
        }
        case WidgetHtmlControl._inputType.file : {
            break;
        }
        case WidgetHtmlControl._inputType.image : {
            break;
        }
        case WidgetHtmlControl._inputType.password : {
            break;
        }
        case WidgetHtmlControl._inputType.submit : {
            break;
        }
        case WidgetHtmlControl._inputType.reset : {
            break;
        }
        case WidgetHtmlControl._inputType.hidden : {
            break;
        }
        default : {
            nodeInput.value = value;
            break
        }
    }
}
