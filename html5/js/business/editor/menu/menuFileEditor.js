function MenuFileEditor() {
}

MenuFileEditor.closeTitle = function (li) {
    if (li._menu._exec) {
        var elementTabTitle = li._menu._exec;
        elementTabTitle._WidgetTab.closeTitle(elementTabTitle);
    }
}
