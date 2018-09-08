// // var jsonObj = WidgetHistory.getFileBrowser();
// function ModuleFileBrowser() {
// }
// ModuleFileBrowser._enumOpenType = {
//     get: 0,
//     post: 1
// }

// ModuleFileBrowser.getFileBrowser = function () {
//     // todo 从数据库获取
//     var item = WidgetHistory.getItem(WidgetKey._panelFileBrowser);
//     var jsonObj = JSON.parse('{}');
//     if (item) {
//         jsonObj = JSON.parse(item); // 通过parse获取json对应键值
//     } else {
//         WidgetHistory.addFileBrowserFolder(jsonObj, WidgetKey._jsonShow);
//         WidgetHistory.addFileBrowserFolder(jsonObj, WidgetKey._jsonMouldShow);
//         WidgetHistory.addFileBrowserFolder(jsonObj, WidgetKey._personalFoldShow);

//         WidgetHistory.addFileBrowserFolderList(jsonObj[WidgetKey._personalFoldShow], WidgetKey._jsonShow);
//         WidgetHistory.addFileBrowserFolderList(jsonObj[WidgetKey._personalFoldShow], WidgetKey._jsonMouldShow);

//         WidgetHistory.addFileBrowserFileList(jsonObj[WidgetKey._jsonShow], "demo", WidgetKey._extendJson);
//         WidgetHistory.addFileBrowserFileList(jsonObj[WidgetKey._jsonMouldShow], "demo", WidgetKey._extendJsonMd);

//         WidgetHistory.setFileBrowser(jsonObj);
//     }
//     return jsonObj;
// }