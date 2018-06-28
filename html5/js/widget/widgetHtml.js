function WidgetHtml() {
}

WidgetHtml._inputType = {
    textString: 0,
    textNumber: 1,
    button: 2,
    checkbox: 3,
    radio: 4,
    file: 5,
    image: 6,
    password: 7,
    submit: 8,
    reset: 9,
    color: 10
}
WidgetHtml.onChangeInput = function (e) {
    switch (this._inputType) {
        case WidgetHtml._inputType.textString : {
            break;
        }
        case WidgetHtml._inputType.textNumber : {
            var valueOld = this.value;
            this.value = this.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '');
            if (this.value != valueOld) {
                alert("该控件内容为数字类型。自动修正完毕。");
            }
            break;
        }
        case WidgetHtml._inputType.color : {
            this.style.background = this.value;
            break;
        }
    }
}
WidgetHtml.addBr = function (nodeParent) {
    var nodeBr = document.createElement("br");
    nodeParent.appendChild(nodeBr);
    nodeBr.classList.add("nodeBr");
    return nodeBr;
}
WidgetHtml.addLabel = function (nodeParent, fileCtrl, key, keyShow, onClick, onContextMenu) {
    var nodeLabel = document.createElement("label");
    nodeParent.appendChild(nodeLabel);
    nodeLabel.classList.add("nodeLabel");
    nodeLabel._fileCtrl = fileCtrl;
    nodeLabel.onclick = onClick;
    nodeLabel.oncontextmenu = onContextMenu;
    nodeLabel._key = key;
    nodeLabel.innerHTML = keyShow;
    return nodeLabel;
}
WidgetHtml.addInput = function (nodeParent, fileCtrl, value, inputType, onClick, onContextMenu) {
    var nodeInput = document.createElement("input");
    nodeParent.appendChild(nodeInput);
    nodeInput.classList.add("nodeInput");
    nodeInput._fileCtrl = fileCtrl;
    nodeInput.onclick = onClick;
    nodeInput.oncontextmenu = onContextMenu;
    nodeInput.onchange = WidgetHtml.onChangeInput;
    nodeInput._inputType = inputType;
    switch (inputType) {
        case WidgetHtml._inputType.button : {
            nodeInput.classList.add("nodeInputButton");
            nodeInput.type = "button";
            nodeInput.value = value;
            break;
        }
        case WidgetHtml._inputType.checkbox : {
            nodeInput.classList.add("nodeInputCheckbox");
            nodeInput.type = "checkbox";
            if (value) {
                nodeInput.checked = true;
            } else {
                nodeInput.checked = false;
            }
            break;
        }
        case WidgetHtml._inputType.radio : {
            nodeInput.classList.add("nodeInputRadio");
            nodeInput.type = "radio";
            if (value) {
                nodeInput.checked = true;
            } else {
                nodeInput.checked = false;
            }
            break;
        }
        case WidgetHtml._inputType.file : {
            nodeInput.classList.add("nodeInputFile");
            nodeInput.type = "file";
            nodeInput.value = value;
            break;
        }
        case WidgetHtml._inputType.image : {
            nodeInput.classList.add("nodeInputImage");
            nodeInput.type = "image";
            nodeInput.value = value;
            break;
        }
        case WidgetHtml._inputType.password : {
            nodeInput.classList.add("nodeInputPassword");
            nodeInput.type = "password";
            nodeInput.value = value;
            break;
        }
        case WidgetHtml._inputType.submit : {
            nodeInput.classList.add("nodeInputSubmit");
            nodeInput.type = "submit";
            nodeInput.value = value;
            break;
        }
        case WidgetHtml._inputType.reset : {
            nodeInput.classList.add("nodeInputReset");
            nodeInput.type = "reset";
            nodeInput.value = value;
            break;
        }
        case WidgetHtml._inputType.color : {
            nodeInput.classList.add("nodeInputColor");
            nodeInput.value = value;
            nodeInput.style.background = value;
            $(nodeInput).colorPicker({
                init: function (element, color) { // colors is a different instance (not connected to colorPicker)
                    element.style.backgroundColor = color;
                    element.style.color = color.rgbaMixCustom.luminance > 0.22 ? '#222' : '#ddd';
                },
            }).each(function (idx, elm) {
            });
            break;
        }
        default : {
            nodeInput.classList.add("nodeInputDefault");
            nodeInput.value = value;
            break
        }
    }
    return nodeInput;
}
WidgetHtml.addSelect = function (nodeParent, valueList, selectIndex) {
    var nodeSelect = document.createElement("select");
    nodeParent.appendChild(nodeSelect);
    nodeSelect.classList.add("nodeSelect");
    for (var i = 0; i < valueList.length; i++) {
        var nodeOption = document.createElement("option");
        nodeSelect.appendChild(nodeOption);
        nodeOption.classList.add("nodeOption");

        nodeOption.value = valueList[i];
        nodeOption.innerHTML = valueList[i];

        if (i == selectIndex) {
            nodeOption.selected = true;
        }
    }
}
