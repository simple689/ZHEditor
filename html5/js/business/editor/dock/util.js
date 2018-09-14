function getFileWidgetTab(fileExtend) {
    var widgetTab = null;
    if (fileExtend == APIData._extendJson) {
        widgetTab = panelFileEditor._widgetTab;
    } else if (fileExtend == APIData._extendJsonMd) {
        widgetTab = panelFileMould._widgetTab;
    }
    return widgetTab;
}
