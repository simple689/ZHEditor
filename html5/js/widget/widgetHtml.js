function WidgetHtml() {
}

WidgetHtml._inputType = {
    _textString: 0,
    _textNumber: 1,
    _button: 2,
    _checkbox: 3,
    _radio: 4,
    _file: 5,
    _image: 6,
    _password: 7,
    _submit: 8,
    _reset: 9,
    _color: 10
}
WidgetHtml.onChangeInput = function (e) {
    switch (this._inputType) {
        case WidgetHtml._inputType._textString : {
            break;
        }
        case WidgetHtml._inputType._textNumber : {
            var valueOld = this.value;
            this.value = this.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '');
            if (this.value != valueOld) {
                alert("该控件内容为数字类型。自动修正完毕。");
            }
            break;
        }
        case WidgetHtml._inputType._color : {
            this.style.background = this.value;
            break;
        }
    }
    if (this._jsonObjCtrl._onChange) {
        this._jsonObjCtrl._onChange(this);
    }
}
WidgetHtml.addBr = function (nodeParent) {
    var nodeBr = document.createElement("br");
    nodeParent.appendChild(nodeBr);
    nodeBr.classList.add("nodeBr");
    return nodeBr;
}
WidgetHtml.addDiv = function (nodeParent) {
    var nodeDiv = document.createElement("div");
    nodeParent.appendChild(nodeDiv);
    nodeDiv.classList.add("nodeDiv");
    return nodeDiv;
}
WidgetHtml.addSpan = function (nodeParent) {
    var nodeSpan = document.createElement("span");
    nodeParent.appendChild(nodeSpan);
    nodeSpan.classList.add("nodeSpan");
    return nodeSpan;
}
WidgetHtml.addLabel = function (nodeParent, jsonObjCtrl) {
    var nodeLabel = document.createElement("label");
    nodeParent.appendChild(nodeLabel);
    nodeLabel.classList.add("nodeLabel");
    nodeLabel._jsonObjCtrl = jsonObjCtrl;
    nodeLabel.onclick = jsonObjCtrl._onClick;
    nodeLabel.oncontextmenu = jsonObjCtrl._onContextMenu;
    nodeLabel.innerHTML = jsonObjCtrl._keyShow;
    return nodeLabel;
}
WidgetHtml.addInput = function (nodeParent, jsonObjCtrl, inputType) {
    var nodeInput = document.createElement("input");
    nodeParent.appendChild(nodeInput);
    nodeInput.classList.add("nodeInput");
    nodeInput._jsonObjCtrl = jsonObjCtrl;
    nodeInput.onclick = jsonObjCtrl._onClick;
    nodeInput.oncontextmenu = jsonObjCtrl._onContextMenu;
    nodeInput.onchange = WidgetHtml.onChangeInput;
    nodeInput._inputType = inputType;
    switch (inputType) {
        case WidgetHtml._inputType._button : {
            nodeInput.classList.add("nodeInputButton");
            nodeInput.type = "button";
            nodeInput.value = jsonObjCtrl._value;
            break;
        }
        case WidgetHtml._inputType._checkbox : {
            nodeInput.classList.add("nodeInputCheckbox");
            nodeInput.type = "checkbox";
            if (jsonObjCtrl._value) {
                nodeInput.checked = true;
            } else {
                nodeInput.checked = false;
            }
            break;
        }
        case WidgetHtml._inputType._radio : {
            nodeInput.classList.add("nodeInputRadio");
            nodeInput.type = "radio";
            if (jsonObjCtrl._value) {
                nodeInput.checked = true;
            } else {
                nodeInput.checked = false;
            }
            break;
        }
        case WidgetHtml._inputType._file : {
            nodeInput.classList.add("nodeInputFile");
            nodeInput.type = WidgetKey._file;
            nodeInput.value = jsonObjCtrl._value;
            break;
        }
        case WidgetHtml._inputType._image : {
            nodeInput.classList.add("nodeInputImage");
            nodeInput.type = "image";
            nodeInput.value = jsonObjCtrl._value;
            break;
        }
        case WidgetHtml._inputType._password : {
            nodeInput.classList.add("nodeInputPassword");
            nodeInput.type = "password";
            nodeInput.value = jsonObjCtrl._value;
            break;
        }
        case WidgetHtml._inputType._submit : {
            nodeInput.classList.add("nodeInputSubmit");
            nodeInput.type = "submit";
            nodeInput.value = jsonObjCtrl._value;
            break;
        }
        case WidgetHtml._inputType._reset : {
            nodeInput.classList.add("nodeInputReset");
            nodeInput.type = "reset";
            nodeInput.value = jsonObjCtrl._value;
            break;
        }
        case WidgetHtml._inputType._color : {
            nodeInput.classList.add("nodeInputColor");
            nodeInput.value = jsonObjCtrl._value;
            nodeInput.style.background = jsonObjCtrl._value;
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
            nodeInput.value = jsonObjCtrl._value;
            break
        }
    }
    return nodeInput;
}
WidgetHtml.addSelect = function (nodeParent, jsonObjCtrl) {
    var nodeSelect = document.createElement("select");
    nodeParent.appendChild(nodeSelect);
    nodeSelect.classList.add("nodeSelect");
    nodeSelect._jsonObjCtrl = jsonObjCtrl;
    nodeSelect.oncontextmenu = jsonObjCtrl._onContextMenu;
    nodeSelect.onchange = jsonObjCtrl._onChange;
    for (var i = 0; i < jsonObjCtrl._valueList.length; i++) {
        var nodeOption = document.createElement("option");
        nodeSelect.appendChild(nodeOption);
        nodeOption.classList.add("nodeOption");

        nodeOption.value = jsonObjCtrl._valueList[i]._key;
        nodeOption.innerHTML = jsonObjCtrl._valueList[i]._keyShow;

        if (nodeOption.value == jsonObjCtrl._value) {
            nodeOption.selected = true;
        }
    }
    return nodeSelect;
}
