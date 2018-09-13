function WidgetUser() {
}

WidgetUser._enumClientType = {
    webPC: 0,
    webMobile: 1,
    appPc: 2,
    appMobile: 3
}
WidgetUser._client = WidgetUser._enumClientType.webPC;

WidgetUser._jsonLoginCache = null;

WidgetUser.init = function (elementParent) {
    WidgetUser._elementParent = elementParent;
    if (WidgetUser._jsonLoginCache) {
        WidgetUser.initMenuLogout();
    } else {
        WidgetUser.initMenuLogin();
    }
    // test
    WidgetUser.create();
}
WidgetUser.initMenuLogin = function () {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "登录";
    jsonObjCtrl._onClick = WidgetUser.onClickMenuLogin;
    WidgetHtml.addInput(WidgetUser._elementParent, jsonObjCtrl, WidgetHtml._enumInputType._button);
}
WidgetUser.initMenuLogout = function () {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "用户";
    jsonObjCtrl._valueList = new MenuListCtrl();
    jsonObjCtrl._valueList.insertItem(new MenuListItem("个人中心", WidgetUser.onClickMenuLogout, APIKey._extendJson));
    jsonObjCtrl._valueList.insertItem(new MenuListItem("退出", WidgetUser.onClickMenuLogout, APIKey._extendJsonMd));
    WidgetHtml.addInput(WidgetUser._elementParent, jsonObjCtrl, WidgetHtml._enumInputType._buttonMenu);
}
WidgetUser.onClickMenuLogin = function () {
    var widgetDialog = new WidgetDialog();
    widgetDialog.createDialogWithHtml(null, document.body, null, WidgetUser.showDialogLogin);
}
WidgetUser.showDialogLogin = function (widgetDialog) {
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "登录";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    var widgetUserLogin = new WidgetUserLogin();
    widgetDialog._widgetUserLogin = widgetUserLogin;
    widgetUserLogin.create(widgetDialog._elementDialogContent);
    // widgetUserLogin._divMain.style.height = bodyH * 0.8 + "px";
    // widgetUserLogin._divMain.style.width = bodyW * 0.8 + "px";
};
WidgetUser.onClickMenuLogout = function () {
}
WidgetUser.create = function () {
    var url = confHttpRoot;
    var pwd = "123456";
    pwd = sha1(pwd);

    var jsonData = {
        "module": APIServer._module._user,
        "func": APIServer._user._login,
        "name": "teddy",
        "pwd": pwd,
    };
    WidgetHttpAJAX.createPost(url, jsonData, this,
        WidgetUser.ajaxSuccessJsonFileBrowser, WidgetUser.ajaxErrorJsonFileBrowser);
}
WidgetUser.ajaxSuccessJsonFileBrowser = function (widgetFileBrowser, data) {
    // if (data[APIKey._data]) {
    //     WidgetFileBrowser._jsonFileBrowser = data[APIKey._data];
    // }
    // widgetFileBrowser.initDefault();
}
WidgetUser.ajaxErrorJsonFileBrowser = function (widgetFileBrowser, error, e) {
    // WidgetFileBrowser._jsonFileBrowser = WidgetHistory.getFileBrowser();
    // widgetFileBrowser.initDefault();
}
