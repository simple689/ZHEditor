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
WidgetUser._widgetUserDialog = null;

WidgetUser.init = function (elementParent) {
    WidgetUser._elementParent = elementParent;
    if (WidgetUser._jsonLoginCache) {
        WidgetUser.initMenuLogout();
    } else {
        WidgetUser.initMenuLogin();
    }
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
    jsonObjCtrl._valueList.insertItem(new MenuListItem("个人中心", WidgetUser.onClickMenuLogout, APIData._extendJson));
    jsonObjCtrl._valueList.insertItem(new MenuListItem("退出", WidgetUser.onClickMenuLogout, APIData._extendJsonMd));
    WidgetHtml.addInput(WidgetUser._elementParent, jsonObjCtrl, WidgetHtml._enumInputType._buttonMenu);
}
// 点击事件 menu
WidgetUser.onClickMenuLogin = function () {
    WidgetUser._widgetUserDialog = new WidgetUserDialog();
    WidgetUser._widgetUserDialog.createDialogLogin();
}
WidgetUser.onClickMenuLogout = function () {
}
// 点击事件
WidgetUser.onClickLogin = function () {
    var userName = WidgetUser._widgetUserDialog.getUserName();
    var userPWD = WidgetUser._widgetUserDialog.getUserPWD();

    var jsonData = {};
    jsonData[APIData._module] = APIServer._module._user;
    jsonData[APIData._func] = APIServer._user._login;
    jsonData[APIData._module] = userName;
    jsonData[APIData._module] = userPWD;
    WidgetHttpAJAX.createPost(null, jsonData, this, WidgetUser.ajaxCompleteLogin);
}
WidgetUser.ajaxCompleteLogin = function (widgetFileBrowser, e, jsonData) {
    if (e) {
    } else {
        if (jsonData[APIData._data]) {
            WidgetFileBrowser._jsonFileBrowser = jsonData[APIData._data];
        }
    }
}
WidgetUser.onClickForgetPWD = function () {
    // WidgetUser._widgetUserDialog.createDialogLogin();
}
WidgetUser.onClickRegister = function () {
    // WidgetUser._widgetUserDialog.createDialogLogin();
}
