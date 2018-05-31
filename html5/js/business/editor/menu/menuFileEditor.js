function MenuFileEditorTitleController() {
}
MenuFileEditorTitleController.closeTitle = function (li) {
    if (li._menu._exec) {
        var elementTabTitle = li._menu._exec;
        elementTabTitle._widgetTabController.closeTitle(elementTabTitle);
    }
}
