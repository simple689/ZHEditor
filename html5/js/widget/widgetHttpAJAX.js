function WidgetHttpAJAX() {
}
WidgetHttpAJAX._enumOpenType = {
    get: 0,
    post: 1
}
function jsonpCallback(data) {
    // console.log(data.name);
};
WidgetHttpAJAX.prototype.createRequest = function (url, jsonObj, exec, funcSuccess, funcError) {
    $.ajax(url, {
        _exec : exec,
        _funcSuccess : funcSuccess,
        _funcError : funcError,
        // data: jsonObj,
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
            console.log("[success]");
            console.log(data.name);
        },
        error: function (XHR, error, e) {
            console.log("[error]", error);
            console.log("[error]", e);
        }
    });
}
