// WidgetHttpAJAX.createRequest(url, null, this, null, null);
function WidgetHttpAJAX() {
}
WidgetHttpAJAX._enumOpenType = {
    get: 0,
    post: 1
}
function jsonpCallback(data) {
};
WidgetHttpAJAX.createRequest = function (url, jsonObj, exec, funcSuccess, funcError) {
    $.ajax(url, {
        _exec : exec,
        _funcSuccess : funcSuccess,
        _funcError : funcError,
        data: jsonObj,
        // type: 'GET',
        // type: 'POST',
        dataType: 'jsonp',
        jsonp: 'jsonpCallback',
        jsonpCallback: 'jsonpCallback',
        // cache: false,
        // beforeSend: function(XHR) {
        //     console.log("[beforeSend]");
        // },
        success: function(data, success, XHR) {
            WidgetLog.log("[ajax success]");
            if (funcSuccess) funcSuccess(this._exec, data);
        },
        error: function (XHR, error, e) {
            console.log("[ajax error]", error);
            console.log("[ajax error]", e);
            if (funcError) funcError(this._exec, error, e);
        }
    });
}
