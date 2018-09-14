function WidgetUserDialog() {
}
WidgetUserDialog.prototype.createDialogLogin = function () {
    this._widgetDialog = new WidgetDialog();
    this._widgetDialog._widgetUserDialog = this;
    this._widgetDialog.createDialogWithHtml(null, document.body, null, WidgetUserDialog.showDialogLogin);
}
WidgetUserDialog.showDialogLogin = function (widgetDialog) {
    // 标题
    var jsonObjCtrl = new JsonObjCtrl(widgetDialog, null, false, "labelTitle");
    jsonObjCtrl._keyShow = "用户名密码登录";
    var label = WidgetHtml.addLabel(widgetDialog._elementDialogHead, jsonObjCtrl);
    label.style.textAlign = "center";
    label.style.lineHeight = "30px";

    //获取可见窗口大小
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    var widgetUserDialog = widgetDialog._widgetUserDialog;
    widgetUserDialog.initDialogBase(widgetDialog._elementDialogContent);
    widgetUserDialog._divMain.style.height = bodyH * 0.8 + "px";
    widgetUserDialog._divMain.style.width = bodyW * 0.8 + "px";
    widgetUserDialog._divLeft.style.width = bodyW * 0.5 + "px";
    widgetUserDialog._divRight.style.width = bodyW * 0.3 + "px";
    widgetUserDialog.initDialogLeft(widgetUserDialog._divLeft);

    widgetUserDialog.initDialogLogin(widgetUserDialog._divRightContent);
};
WidgetUserDialog.prototype.initDialogBase = function (elementParent) {
    this._divMain = WidgetHtml.addDiv(elementParent);
    WidgetHtml.classAdd(this._divMain, "widgetUserDialogMain");

    this._divLeft = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divLeft, "widgetUserDialogLeft");

    this._divRight = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divRight, "widgetUserDialogRight");

    this._divRightContent = WidgetHtml.addDiv(this._divRight);
    WidgetHtml.classAdd(this._divRightContent, "widgetUserDialogRightContent");
}
WidgetUserDialog.prototype.initDialogLeft = function (elementParent) {
}
WidgetUserDialog.prototype.initDialogLogin = function (elementParent) {
    // msg
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    this._labelMsg = WidgetHtml.addLabel(elementParent, jsonObjCtrl);
    WidgetHtml.classAdd(this._labelMsg, "widgetUserLabelMsg");

    // 结束换行
    WidgetHtml.addBr(elementParent);

    // userName
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "用户名";
    var labelUserName = WidgetHtml.addLabel(elementParent, jsonObjCtrl);
    WidgetHtml.classAdd(labelUserName, "widgetUserLabelUserName");

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._placeholder = "xxx@xxx.com";
    this._inputUserName = WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._textString);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "(邮箱)";
    WidgetHtml.addLabel(elementParent, jsonObjCtrl);

    // 结束换行
    WidgetHtml.addBr(elementParent);

    // userPWD
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "密码";
    var labelUserPWD = WidgetHtml.addLabel(elementParent, jsonObjCtrl);
    WidgetHtml.classAdd(labelUserPWD, "widgetUserLabelUserPWD");

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    this._inputUserPWD = WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._password);

    // 结束换行
    WidgetHtml.addBr(elementParent);

    // todo 下次自动登录

    // 结束换行
    WidgetHtml.addBr(elementParent);

    // verify
    this._divVerify = WidgetHtml.addDiv(elementParent);
    WidgetHtml.classAdd(this._divVerify, "widgetUserDialogVerify");
    this.initVerify();

    // button
    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "登录";
    jsonObjCtrl._onClick = WidgetUser.onClickLogin;
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "忘记密码？";
    jsonObjCtrl._onClick = WidgetUser.onClickForgetPWD;
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._button);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._value = "注册账号";
    jsonObjCtrl._onClick = WidgetUser.onClickRegister;
    WidgetHtml.addInput(elementParent, jsonObjCtrl, WidgetHtml._enumInputType._button);

}

WidgetUserDialog.prototype.initVerify = function () {
    var widgetVerify = new WidgetVerify();
    widgetVerify._exec = this;
    widgetVerify.create(this._divVerify, function () {
        this._exec._labelMsg.innerHTML = "验证成功！";
        console.log("verify success");
    }, function () {
        this._exec._labelMsg.innerHTML = "验证失败！";
        console.log("verify fail");
    })
};
