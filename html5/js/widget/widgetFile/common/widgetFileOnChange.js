function WidgetFileOnChange() {
}

WidgetFileOnChange.onChangeInput = function (e) {
    var func = WidgetFileUtil.getExec(this).onChangeInput;
    if (func) func(this);
}
WidgetFileOnChange.onChangeSelect = function (e) {
    var func = WidgetFileUtil.getExec(this).onChangeSelect;
    if (func) func(this);
}
