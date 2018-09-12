function getFileWidgetTab(fileExtend) {
    var widgetTab = null;
    if (fileExtend == APIKey._extendJson) {
        widgetTab = panelFileEditor._widgetTab;
    } else if (fileExtend == APIKey._extendJsonMd) {
        widgetTab = panelFileMould._widgetTab;
    }
    return widgetTab;
}
