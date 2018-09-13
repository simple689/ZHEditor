function WidgetUserLogin() {
}

WidgetUserLogin.prototype.create = function (elementParent) {
    this._divMain = WidgetHtml.addDiv(elementParent);
    this._divMain.classList.add("widgetUserLoginMain");

    // userName
    this._divUserName = WidgetHtml.addDiv(this._divMain);
    this._divUserName.classList.add("widgetUserLoginUserName");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "用户名";
    WidgetHtml.addLabel(this._divUserName, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._placeholder = "xxx@xxx.com";
    WidgetHtml.addInput(this._divUserName, jsonObjCtrl, WidgetHtml._enumInputType._textString);

    // userPWD
    this._divUserPWD = WidgetHtml.addDiv(this._divMain);
    this._divUserPWD.classList.add("widgetUserLoginUserPWD");

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    jsonObjCtrl._keyShow = "密码";
    WidgetHtml.addLabel(this._divUserPWD, jsonObjCtrl);

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    WidgetHtml.addInput(this._divUserPWD, jsonObjCtrl, WidgetHtml._enumInputType._password);

    // verify
    this._divVerify = WidgetHtml.addDiv(this._divMain);
    this._divVerify.classList.add("widgetUserLoginVerify");

    // msg
    this._divMsg = WidgetHtml.addDiv(this._divMain);
    this._divMsg.classList.add("widgetUserLoginMsg");

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
