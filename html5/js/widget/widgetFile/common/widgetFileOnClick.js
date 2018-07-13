function WidgetFileOnClick() {
}

WidgetFileOnClick.getExec = function (e) {
    return e._menu._exec._jsonObjCtrl._exec;
}
WidgetFileOnClick.onClickRefresh = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickRefresh;
    if (func) func(this);
}
WidgetFileOnClick.onClickSave = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickSave;
    if (func) func(this);
}
WidgetFileOnClick.onClickSaveAs = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickSaveAs;
    if (func) func(this);
}
WidgetFileOnClick.onClickDownLoad = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickDownLoad;
    if (func) func(this);
}
WidgetFileOnClick.onClickObjectAdd = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickObjectAdd;
    if (func) func(this);
}
WidgetFileOnClick.onClickObjectDel = function (e) {
    if (!confirm("确定要 “删除对象” 吗？")) { // 利用对话框返回的值（true 或者 false）
        return;
    }
    var func = WidgetFileOnClick.getExec(this).onClickObjectDel;
    if (func) func(this);
}
WidgetFileOnClick.onClickListAdd = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickListAdd;
    if (func) func(this);
}
WidgetFileOnClick.onClickListDel = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickListDel;
    if (func) func(this);
}
WidgetFileOnClick.onClickListClear = function (e) {
    if (!confirm("确定要 “列表中清空对象” 吗？")) { // 利用对话框返回的值（true 或者 false）
        return;
    }
    var func = WidgetFileOnClick.getExec(this).onClickListClear;
    if (func) func(this);
}
WidgetFileOnClick.onClickRenameKey = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickRenameKey;
    if (func) func(this);
}
WidgetFileOnClick.onClickListToolAdd = function (e) {
    var func = WidgetFileOnClick.getExec(this).onClickListToolAdd;
    if (func) func(this);
}
