function WidgetHttpAJAX() {
}
WidgetHttpAJAX._enumOpenType = {
    get: 0,
    post: 1
}

WidgetHttpAJAX.prototype.createRequest = function (url, jsonObj, exec, funcSuccess, funcError) {
    this._request = $.ajax(url, {
        _exec : exec,
        _funcSuccess : funcSuccess,
        _funcError : funcError,
        // type: "GET",
        // data: jsonObj,
        dataType: 'jsonP',
        // crossDomain: true,
        // beforeSend: function(XHR) {
        //     console.log("beforeSend");
        // },
        success: function(data, state) {
            console.log("success");
            // if(data && data.resultcode == '200'){
            //     console.log(data.result.today);
            // }
        },
        error: function (XHR, err, e) {
            console.log("[error]", err);
        }
    });
    console.log("this._request : ", this._request);
}
