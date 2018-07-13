function WidgetFileOnChange() {
}

WidgetFileOnChange.getExec = function (e) {
    return e._jsonObjCtrl._exec;
}
WidgetFileOnChange.onChangeInput = function (e) {
    var func = WidgetFileOnChange.getExec(this).onChangeInput;
    if (func) func(this);
}
WidgetFileOnChange.onChangeSelect = function (e) {
    var func = WidgetFileOnChange.getExec(this).onChangeSelect;
    if (func) func(this);
}
