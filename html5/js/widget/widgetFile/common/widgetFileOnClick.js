function WidgetFileOnClick() {
}

WidgetFileOnClick.onClickRefresh = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickRefresh(this);
}
WidgetFileOnClick.onClickSave = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickSave(this);
}
WidgetFileOnClick.onClickSaveAs = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickSaveAs(this);
}
WidgetFileOnClick.onClickDownLoad = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickDownLoad(this);
}
WidgetFileOnClick.onClickListAdd = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickListAdd(this);
}
WidgetFileOnClick.onClickListDel = function (e) {
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickListDel(this);
}
WidgetFileOnClick.onClickListClear = function (e) {
    if (!confirm("确定要 “列表中清空对象” 吗？")) { // 利用对话框返回的值（true 或者 false）
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickListClear(this);
}
WidgetFileOnClick.onClickDelObject = function (e) {
    if (!confirm("确定要 “删除对象” 吗？")) { // 利用对话框返回的值（true 或者 false）
        return;
    }
    var jsonObjCtrl = this._menu._exec._jsonObjCtrl;
    jsonObjCtrl._exec.onClickDelObject(this);
}
