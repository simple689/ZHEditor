function getFileWidgetTab(fileExtend) {
    var widgetTab = null;
    if (fileExtend == APIData._extendJson) {
        widgetTab = gPanelFileEditor._widgetTab;
    } else if (fileExtend == APIData._extendJsonMd) {
        widgetTab = gPanelFileMould._widgetTab;
    }
    return widgetTab;
}
