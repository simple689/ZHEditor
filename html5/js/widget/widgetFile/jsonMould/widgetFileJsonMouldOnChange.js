WidgetFileJsonMould.onChangeInput = function (e) {
    var inputType = e._inputType;
    var value = e.value;
    switch (inputType) {
        case WidgetHtml._enumInputType._checkbox :
        case WidgetHtml._enumInputType._radio : {
            value = e.checked;
            break;
        }
    }
    var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(e);
    var jsonObj = jsonObjCtrl._obj;
    jsonObj[jsonObjCtrl._key] = value;
    jsonObjCtrl._exec.refreshContent();
}
WidgetFileJsonMould.onChangeSelect = function (e) {
    var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(e);
    var key = jsonObjCtrl._key;
    if (key == WidgetKey._valueType) {
        WidgetFileJsonMould.changeSelectValueType(e);
    } else if (key == WidgetKey._enumTypeDefault) {
        WidgetFileJsonMould.changeSelectEnumDefault(e);
    }
}
