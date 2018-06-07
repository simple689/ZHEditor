function WidgetFileJsonMenuController() {
}

WidgetFileJsonMenuController.editor = function (element) {
    var exec = element._menu._exec;
    var fileController = element._menu._exec._fileController;
    LogController.log(exec);
}
