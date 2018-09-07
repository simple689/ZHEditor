function WidgetHttpAJAX() {
}
WidgetHttpAJAX._enumOpenType = {
    get: 0,
    post: 1
}
WidgetHttpAJAX.prototype.createRequest = function (url, jsonObj, exec, funcSuccess, funcError) {
    $.ajax(url, {
        // _exec : exec,
        // _funcSuccess : funcSuccess,
        // _funcError : funcError,
        type: 'GET',
        // type: 'POST',
        // data: jsonObj,
        // data: {},
        dataType: 'jsonp',
        // jsonp:"callback",
        cache:false,
        // crossDomain: true,
        // beforeSend: function(XHR) {
        //     console.log("beforeSend");
        // },
        success: function(data, state) {
            data = JSON.parse(data);
            console.log("success");
            // if(data && data.resultcode == '200'){
            //     console.log(data.result.today);
            // }
        },
        error: function (XHR, err, e) {
            console.log("[error]", err);
            console.log("[error]", e);
        }
    });
}
