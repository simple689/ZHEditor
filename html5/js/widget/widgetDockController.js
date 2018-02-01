
function widgetDockController() {
};
var browserType = {
    IE: 0,
    Firefox: 1,
    Chrome: 2,
    Safari: 3,
    Opera: 4
}
widgetDockController.controller = null;
widgetDockController.browserType = browserType.IE;
widgetDockController.rootDivId = "";
widgetDockController.window = null;
widgetDockController.isHasCanvasContext = true;
widgetDockController.fixedLeft = 0;
widgetDockController.fixedTop = 1;
widgetDockController.fixedRight = 2;
widgetDockController.fixedBottom = 3;
widgetDockController.fixedCenter = 4;
widgetDockController._$kN = new Array();
widgetDockController._$iU = true;
widgetDockController._$0R = 0;
widgetDockController._$0T = 1;
widgetDockController._$0S = 2;
widgetDockController._$3s = 0;
widgetDockController._$1E = 1;
widgetDockController._$I = 2;
widgetDockController._$5V = 3;
widgetDockController._$4F = 4;

widgetDockController.createWidgetDock = function () {
    if (widgetDockController.controller != null) return widgetDockController.controller;
    widgetDockController.controller = new widgetDockController();

    var strUserAgent = navigator.userAgent;
    if (strUserAgent.indexOf("MSIE") != "-1") {
        widgetDockController.browserType = browserType.IE;
        widgetDockController.ieVersion = 9;
        var index = strUserAgent.indexOf("MSIE") + 4;
        var str = strUserAgent.slice(index, strUserAgent.length);
        index = str.indexOf(".");
        if (index >= 0) {
            str = str.substr(0, index);
            widgetDockController.ieVersion = parseInt(str);
        }
    } else if (strUserAgent.indexOf("Firefox") != "-1") {
        widgetDockController.browserType = browserType.Firefox;
    } else if (strUserAgent.indexOf("Chrome") != "-1") {
        widgetDockController.browserType = browserType.Chrome;
    } else if (strUserAgent.indexOf("Safari") != "-1") {
        widgetDockController.browserType = browserType.Safari;
    } else if (strUserAgent.indexOf("Opera") != "-1") {
        widgetDockController.browserType = browserType.Opera;
    }

    var elementDiv = document.createElement("div");
    document.body.appendChild(elementDiv);
    elementDiv.id = "widgetDock";
    widgetDockController.rootDivId = elementDiv.id;

    widgetDockController.setStyle();

    if (widgetDockController.window == null) {
        widgetDockController.window = new widgetDockWindow(null, "MainWindow");
        if (widgetDockController.browserType == browserType.IE && widgetDockController.ieVersion <= 8) {
            document.body.attachEvent("onmousedown", mouseDown);
            document.body.attachEvent("onmouseup", mouseUp);
            document.body.attachEvent("onmousemove", mouseMove);
        } else {
            document.body.addEventListener("mousedown", mouseDown, true);
            document.body.addEventListener("mouseup", mouseUp, true);
            document.body.addEventListener("mousemove", mouseMove, true);
        }
    }

    widgetDockController.isHasCanvasContext = !!document.createElement('canvas').getContext;
    widgetDockController.dir = "";
    if (!widgetDockController.isHasCanvasContext) {
        var elementList = document.getElementsByTagName('script');
        if (elementList != null) {
            var len = elementList.length;
            var i;
            for (i = 0; i < len; i++) {
                var str = elementList[i].src;
                var index = str.indexOf("widgetDock.js");
                if (index >= 0) {
                    widgetDockController.dir = str.substr(0, index);
                    break;
                }
            }
        }
    }
    return widgetDockController.controller;
};
widgetDockController.setStyle = function () {
    document.body.scroll = "no";
    document.body.style.overflow = 'hidden';
};
function mouseDown(e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.window == null) return;
    widgetDockController.window.mouseDown(e);
};
function mouseUp(e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.window == null) return;
    widgetDockController.window.mouseUp(e);
    var x, y;
    x = e.x;
    y = e.y;
    var div = document.getElementById("widgetDockMessageId");
    if (div != null) {
        if (widgetDockController.browserType == browserType.IE) {
            div.innerHTML = "UP x: " + x + " y: " + y + " Client X" + e.clientX + " Client Y " + e.clientY + " Offset Y " + e.offsetY + " source: " + e.srcElement;
        } else {
            div.innerHTML = "UP x: " + x + " y: " + y + " Client X" + e.clientX + " Client Y " + e.clientY + " source: " + e.target;
        }
    }
};
function mouseMove(e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.window == null) return;
    widgetDockController.window.mouseMove(e);
    var x, y;
    x = e.x;
    y = e.y;
    var div = document.getElementById("widgetDockMessageId");
    if (div != null) {
        if (widgetDockController.browserType == browserType.IE) {
            div.innerHTML = "x: " + x + " y: " + y + " Client X" + e.clientX + " Client Y " + e.clientY + " Offset Y " + e.offsetY + " source: " + e.srcElement;
        } else {
            div.innerHTML = "x: " + x + " y: " + y + " Client X" + e.clientX + " Client Y " + e.clientY + " source: " + e.target;
        }
    }
};
widgetDockController.prototype.addFixedPanel = function (_element, _type) {
    widgetDockController.window.addFixedPanel(_element, _type);
};
widgetDockController.prototype.createFloatPanel = function (_panelTitle) {
    return new widgetDockFloatPanel(widgetDockController.window, _panelTitle);
};
widgetDockController.prototype.saveStatesIntoKey = function (key) {
    var layout = new widgetDockLayout();
    widgetDockController.window.initLayout(layout);
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        sessionStorage.setItem(key, layout.getContent());
    }
};
widgetDockController.prototype.loadStatesFromKey = function (key) {
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        var item = sessionStorage.getItem(key);
        if (item != null) {
            var pin = new _$4v(item);
            widgetDockController.window._$3Y(pin);
        }
    }
};
widgetDockController._$fQ = function (_$9E) {
    if ((_$9E != 0 && widgetDockController.browserType != browserType.IE) || (widgetDockController.browserType == browserType.IE && widgetDockController.ieVersion >= 9 && _$9E != 0)) {
        return false;
    }
    return true;
};
widgetDockController._$6s = function (_$88) {
    if (widgetDockController._$iU) widgetDockController.window._$6s(_$88);
};
widgetDockController._$06 = function (fID) {
    var va = widgetDockController._$kN;
    var _$e0 = va.length;
    var i;
    for (i = 0; i < _$e0; i++) {
        if (va[i] == fID) {
            va.splice(i, 1);
            return true;
        }
    }
    return false;
};
widgetDockController.initIFrame = function (fID) {
    if (widgetDockController.controller == null) widgetDockController.createWidgetDock();
    var vf = document.getElementById(fID);
    try {
        vf.contentWindow.document._$m7 = vf;
    } catch (err) {
        {
            if (widgetDockController._$iU) {
                if (widgetDockController.window == null) {
                    widgetDockController._$kN.push(fID);
                } else {
                    var _$8C = widgetDockController.window._$rv(fID);
                    if (!_$8C) {
                        widgetDockController._$kN.push(fID);
                    }
                }
            }
            return;
        }
    } finally {
        var s = 0;
    }
    if ((vf.contentWindow.attachEvent != null) && widgetDockController.ieVersion >= 7 && widgetDockController.ieVersion <= 8) {
        var vro = vf.contentWindow.document;
        vro.attachEvent("onmousedown", mouseDown);
        vro.attachEvent("onmouseup", mouseUp);
        vro.attachEvent("onmousemove", mouseMove);
        return;
    }
    vf.contentWindow.addEventListener("mousemove", mouseMove, true);
    vf.contentWindow.addEventListener("mouseup", mouseUp, true);
    vf.contentWindow.addEventListener("mousedown", mouseDown, true);
};
widgetDockController._$2E = function (rc) {
    var iw = 0;
    var ih = 0;
    if (window.innerHeight) {
        iw = window.innerWidth;
        ih = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        ih = document.documentElement.clientHeight;
        iw = document.documentElement.clientWidth;
    } else {
        iw = document.body.clientWidth;
        ih = document.body.clientHeight;
    }
    rc.x = 0;
    rc.y = 0;
    rc.width = iw;
    rc.height = ih;
};
