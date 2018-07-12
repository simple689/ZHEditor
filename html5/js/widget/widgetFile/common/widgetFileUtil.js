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
    } else if (key == WidgetKey._enumDefault) {
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
WidgetFileUtil.isAddBr = function (key) {
    var isAdd = true;
    if (key == 'x' || key == 'y' || key == 'z') {
        isAdd = false;
    }
    return isAdd;
}
