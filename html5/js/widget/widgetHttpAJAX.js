// WidgetHttpAJAX.createRequest(url, null, this, null, null);
function WidgetHttpAJAX() {
}
WidgetHttpAJAX._enumOpenType = {
    get: 0,
    post: 1
}
function jsonpCallback(data) {
}
WidgetHttpAJAX.createRequest = function (url, jsonObj, exec, funcSuccess, funcError) {
    $.ajax({
        _exec : exec,
        _funcSuccess : funcSuccess,
        _funcError : funcError,
        url : url,
        data: jsonObj,
        dataType: 'jsonp',
        jsonp: 'jsonpCallback',
        jsonpCallback: 'jsonpCallback',
        // cache: false,
        // beforeSend: function(XHR) {
        //     console.log("[beforeSend]");
        // },
        success: function(data, success, XHR) {
            WidgetLog.log("[ajax success]", data);
            // WidgetLog.log(JSON.stringify(data));
            // WidgetLog.log(JSON.stringify(data, null, 2));
            if (funcSuccess) funcSuccess(this._exec, data);
        },
        error: function (XHR, error, e) {
            console.log("[ajax error]", error);
            console.log("[ajax error]", e);
            if (funcError) funcError(this._exec, error, e);
        }
    });
}
WidgetHttpAJAX.createFd = function (url, jsonObj, exec, funcSuccess, funcError) {
    var formData = new FormData();
    formData.append('path', "./test.json");
    var jsonStr = JSON.stringify(jsonObj);
    formData.append('file', jsonStr);
    formData.append('originalFilename', "test.json");

    $.ajax({
        _exec : exec,
        _funcSuccess : funcSuccess,
        _funcError : funcError,
        url : url,
        data : formData,
        type : "post",
        cache: false,
        processData : false, // 不处理数据
        contentType : false, // 不设置内容类型
        success : function(data) {
            WidgetLog.log("[ajax success]", data);
            var jsonObj = JSON.parse(data);
            WidgetLog.log(JSON.stringify(jsonObj, null, 2));
        },
        error: function (XHR, error, e) {
            console.log("[ajax error]", error);
            console.log("[ajax error]", e);
        }
    });
}
