function WidgetFileOnChange() {
}

WidgetFileOnChange.onChangeInput = function (e) {
    var func = WidgetFileUtil.getExec(this).constructor.onChangeInput;
    if (func) func(this);
}
WidgetFileOnChange.onChangeSelect = function (e) {
    var func = WidgetFileUtil.getExec(this).constructor.onChangeSelect;
    if (func) func(this);
}
