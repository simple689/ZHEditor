function MenuFileTemplateCtrl() {
}

MenuFileTemplateCtrl.closeTitle = function (li) {
    if (li._menu._exec) {
        var elementTabTitle = li._menu._exec;
        elementTabTitle._widgetTabCtrl.closeTitle(elementTabTitle);
    }
}
