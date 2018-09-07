WidgetFileJson.prototype.onChangeInput = function (e) {
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
WidgetFileJson.prototype.onChangeSelect = function (e) {
    var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(e);
    var jsonObj = jsonObjCtrl._obj;
    var key = jsonObjCtrl._key;
    var enumObj = jsonObj[key];

    var value = e.value;
    enumObj[WidgetKey._enumType] = value;
    enumObj[WidgetKey._enumParamList] = {};

    jsonObjCtrl._exec.refreshContent();
}
