WidgetFileJsonMould.prototype.onChangeInput = function (e) {
    var inputType = e._inputType;
    var value = e.value;
    switch (inputType) {
        case WidgetHtml._inputType._checkbox :
        case WidgetHtml._inputType._radio : {
            value = e.checked;
            break;
        }
    }
    var jsonObjCtrl = e;
    var jsonObj = jsonObjCtrl._obj;
    jsonObj[jsonObjCtrl._key] = value;
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.prototype.onChangeSelect = function (e) {
    var jsonObjCtrl = e._jsonObjCtrl;
    var key = jsonObjCtrl._key;
    if (key == WidgetKey._valueType) {
        WidgetFileJsonMould.changeSelectValueType(this);
    } else if (key == WidgetKey._enumTypeDefault) {
        WidgetFileJsonMould.changeSelectEnumDefault(this);
    }
}
