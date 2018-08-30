function getFileWidgetTab(fileExtend) {
    var widgetTab = null;
    if (fileExtend == WidgetKey._extendJson) {
        widgetTab = panelFileEditor._widgetTab;
    } else if (fileExtend == WidgetKey._extendJsonMd) {
        widgetTab = panelFileMould._widgetTab;
    }
    return widgetTab;
}
