function WidgetFileOnChange() {
}

WidgetFileOnChange.onChangeInput = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;
    jsonObjCtrl._exec.onChangeInput(this);
}
WidgetFileOnChange.onChangeSelect = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;
    jsonObjCtrl._exec.onChangeSelect(this);
}
