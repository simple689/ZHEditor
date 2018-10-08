function MenuFileTitleOnClick() {
}

MenuFileTitleOnClick.onClickRefresh = function (e) {
    var func = WidgetFileUtil.getExec(this).onClickRefresh;
    if (func) func(this);
}
MenuFileTitleOnClick.onClickSave = function (e) {
    var func = WidgetFileUtil.getExec(this).onClickSave;
    if (func) func(this);
}
MenuFileTitleOnClick.onClickSaveAs = function (e) {
    var func = WidgetFileUtil.getExec(this).onClickSaveAs;
    if (func) func(this);
}
MenuFileTitleOnClick.onClickDownLoad = function (e) {
    var func = WidgetFileUtil.getExec(this).onClickDownLoad;
    if (func) func(this);
}
MenuFileTitleOnClick.closeTitle = function (li) {
    if (li._menu._exec) {
        var elementTabTitle = li._menu._exec;
        elementTabTitle._widgetTab.closeTitle(elementTabTitle);
    }
}
