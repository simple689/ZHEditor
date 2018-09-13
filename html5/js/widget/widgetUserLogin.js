function WidgetUserLogin() {
}

WidgetUserLogin.prototype.create = function (elementParent) {
    this._divMain = WidgetHtml.addDiv(elementParent);
    WidgetHtml.classAdd(this._divMain, "widgetUserLoginMain");

    // userName
    this._divUserName = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divUserName, "widgetUserLoginUserName");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "用户名";
    WidgetHtml.addLabel(this._divUserName, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._placeholder = "xxx@xxx.com";
    WidgetHtml.addInput(this._divUserName, jsonObjCtrl, WidgetHtml._enumInputType._textString);

    // userPWD
    this._divUserPWD = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divUserPWD, "widgetUserLoginUserPWD");

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "密码";
    WidgetHtml.addLabel(this._divUserPWD, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    WidgetHtml.addInput(this._divUserPWD, jsonObjCtrl, WidgetHtml._enumInputType._password);

    // verify
    this._divVerify = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divVerify, "widgetUserLoginVerify");

    // msg
    this._divMsg = WidgetHtml.addDiv(this._divMain);
    WidgetHtml.classAdd(this._divMsg, "widgetUserLoginMsg");

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "验证";
    this._labelMsg = WidgetHtml.addLabel(this._divMsg, jsonObjCtrl);

    this.init();
}

WidgetUserLogin.prototype.init = function () {
    var widgetVerify = new WidgetVerify();
    widgetVerify._exec = this;
    widgetVerify.create(this._divVerify, function () {
        this._exec._labelMsg.innerHTML = "验证成功！";
        console.log("verify ok");
    })
};
