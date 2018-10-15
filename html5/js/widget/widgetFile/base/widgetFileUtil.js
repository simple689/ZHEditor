function WidgetFileUtil() {
}

WidgetFileUtil.getKeyShow = function (key) {
    var keyShow = key;
    if (key == WidgetKey._ignore) {
        keyShow = "忽略";
    } else if (key == WidgetKey._beginList) {
        keyShow = "开头字符串列表";
    } else if (key == WidgetKey._file) {
        keyShow = "文件";
    } else if (key == WidgetKey._showTitle) {
        keyShow = "显示名字";
    } else if (key == WidgetKey._valueType) {
        keyShow = "值类型";
    } else if (key == WidgetKey._key) {
        keyShow = "唯一key";
    } else if (key == WidgetKey._value) {
        keyShow = "值";
    } else if (key == WidgetKey._enumTypeDefault) {
        keyShow = "默认枚举";
    } else if (key == WidgetKey._enumList) {
        keyShow = "枚举列表";
    } else if (key == WidgetKey._enumParamList) {
        keyShow = "枚举参数列表";
    } else if (key == WidgetKey._valueType) {
        keyShow = "值类型";
    }
    return keyShow;
}
WidgetFileUtil.getJsonObjCtrl = function (e) {
    if (e._menu) {
        return e._menu._exec._jsonObjCtrl;
    } else if (e._labelCheck) {
        return e._labelCheck._jsonObjCtrl;
    }
    return e._jsonObjCtrl;
}
WidgetFileUtil.getExec = function (e) {
    return WidgetFileUtil.getJsonObjCtrl(e)._exec;
}
