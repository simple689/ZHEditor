function WidgetUserLogin() {
}

WidgetUserLogin.prototype.create = function (elementParent) {
    this._divMain = WidgetHtml.addDiv(elementParent);
    this._divMain.classList.add("widgetUserLoginMain");

    this._divUserName = WidgetHtml.addDiv(this._divMain);
    this._divUserName.classList.add("widgetUserLoginUserName");

    var jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    // jsonObjCtrl._value = "xxx@xxx.com";
    WidgetHtml.addInput(this._divUserName, jsonObjCtrl, WidgetHtml._enumInputType._textString);

    this._divUserPWD = WidgetHtml.addDiv(this._divMain);
    this._divUserPWD.classList.add("widgetUserLoginUserPWD");

    jsonObjCtrl = new JsonObjCtrl(this, null, false, null);
    // jsonObjCtrl._value = "********";
    WidgetHtml.addInput(this._divUserName, jsonObjCtrl, WidgetHtml._enumInputType._password);

    this._divVerify = WidgetHtml.addDiv(this._divMain);
    this._divVerify.classList.add("widgetUserLoginVerify");

    this._divMsg = WidgetHtml.addDiv(this._divMain);
    this._divMsg.classList.add("widgetUserLoginMsg");

    this.init();
}

WidgetUserLogin.prototype.init = function () {
    var widgetVerify = new WidgetVerify();
    widgetVerify.create(this._divVerify, function () {
        // document.getElementById('msg').innerHTML = '登录成功！'
        console.log("verify ok");
    })
};
