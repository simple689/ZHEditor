function WidgetDockController() {
};

WidgetDockController._instance = null;
WidgetDockController._browserType = EnumBrowserType.IE;
WidgetDockController._elementRootId = "";
WidgetDockController._windowMain = null;
WidgetDockController._dir = "";

WidgetDockController._$kN = new Array();
WidgetDockController._$0R = 0;
WidgetDockController._$0T = 1;
WidgetDockController._$0S = 2;
WidgetDockController._$3s = 0;
WidgetDockController._$1E = 1;
WidgetDockController._$I = 2;
WidgetDockController._$5V = 3;
WidgetDockController._$4F = 4;

WidgetDockController.init = function () {
    if (WidgetDockController._instance != null) {
        return WidgetDockController._instance;
    }
    WidgetDockController._instance = new WidgetDockController();

    var strUserAgent = navigator.userAgent;
    if (strUserAgent.indexOf("MSIE") != "-1") {
        WidgetDockController._browserType = EnumBrowserType.IE;
        WidgetDockController._ieVersion = 9;
        var index = strUserAgent.indexOf("MSIE") + 4;
        var str = strUserAgent.slice(index, strUserAgent.length);
        index = str.indexOf(".");
        if (index >= 0) {
            str = str.substr(0, index);
            WidgetDockController._ieVersion = parseInt(str);
        }
    } else if (strUserAgent.indexOf("Firefox") != "-1") {
        WidgetDockController._browserType = EnumBrowserType.Firefox;
    } else if (strUserAgent.indexOf("Chrome") != "-1") {
        WidgetDockController._browserType = EnumBrowserType.Chrome;
    } else if (strUserAgent.indexOf("Safari") != "-1") {
        WidgetDockController._browserType = EnumBrowserType.Safari;
    } else if (strUserAgent.indexOf("Opera") != "-1") {
        WidgetDockController._browserType = EnumBrowserType.Opera;
    }

    var elementDiv = document.createElement("div");
    document.body.appendChild(elementDiv);
    elementDiv.id = "widgetDock";
    WidgetDockController._elementRootId = elementDiv.id;

    WidgetDockController.setStyle();

    if (WidgetDockController._windowMain == null) {
        WidgetDockController._windowMain = new WidgetDockWindow(null, "MainWindow");
        document.body.addEventListener("mousedown", mouseDown, true);
        document.body.addEventListener("mouseup", mouseUp, true);
        document.body.addEventListener("mousemove", mouseMove, true);
    }

    var elementList = document.getElementsByTagName('script');
    if (elementList != null) {
        var len = elementList.length;
        for (var i = 0; i < len; i++) {
            var str = elementList[i].src;
            var index = str.indexOf("jquery.js");
            if (index >= 0) {
                WidgetDockController._dir = str.substr(0, index);
                break;
            }
        }
    }
    WidgetDockController._dir += "../../";
    return WidgetDockController._instance;
};
WidgetDockController.setStyle = function () {
    document.body.scroll = "no";
    document.body.style.overflow = 'hidden';
};
function mouseDown(e) {
    if (WidgetDockController._windowMain == null) return;
    if (e == null) {
        e = window.event;
    }
    WidgetDockController._windowMain.mouseDown(e);
};
function mouseUp(e) {
    if (WidgetDockController._windowMain == null) return;
    if (e == null) {
        e = window.event;
    }
    WidgetDockController._windowMain.mouseUp(e);
    var div = document.getElementById("widgetDockMessageId");
    if (div != null) {
        if (WidgetDockController._browserType == EnumBrowserType.IE) {
            div.innerHTML = "UP x: " + e.x + " y: " + e.y + " Client X" + e.clientX + " Client Y " + e.clientY + " Offset Y " + e.offsetY + " source: " + e.srcElement;
        } else {
            div.innerHTML = "UP x: " + e.x + " y: " + e.y + " Client X" + e.clientX + " Client Y " + e.clientY + " source: " + e.target;
        }
    }
};
function mouseMove(e) {
    if (WidgetDockController._windowMain == null) return;
    if (e == null) {
        e = window.event;
    }
    WidgetDockController._windowMain.mouseMove(e);
    var div = document.getElementById("widgetDockMessageId");
    if (div != null) {
        if (WidgetDockController._browserType == EnumBrowserType.IE) {
            div.innerHTML = "x: " + e.x + " y: " + e.y + " Client X" + e.clientX + " Client Y " + e.clientY + " Offset Y " + e.offsetY + " source: " + e.srcElement;
        } else {
            div.innerHTML = "x: " + e.x + " y: " + e.y + " Client X" + e.clientX + " Client Y " + e.clientY + " source: " + e.target;
        }
    }
};
WidgetDockController.prototype.addFixedPanel = function (element, type) {
    WidgetDockController._windowMain.addFixedPanel(element, type);
};
WidgetDockController.prototype.createFloatPanel = function (title) {
    return new WidgetDockFloatPanel(WidgetDockController._windowMain, title);
};
WidgetDockController.prototype.saveStatesIntoKey = function (key) {
    var layout = new WidgetDockLayout();
    WidgetDockController._windowMain.createLayout(layout);
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        sessionStorage.setItem(key, layout.getContent());
    }
};
WidgetDockController.prototype.loadLayoutFromKey = function (key) {
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        var layoutStr = sessionStorage.getItem(key);
        if (layoutStr != null) {
            var layoutController = new WidgetDockLayoutController(layoutStr);
            WidgetDockController._windowMain.loadStatesFromLayoutController(layoutController);
        }
    }
};
WidgetDockController.isButtonAvailable = function (buttonType) {
    if ((buttonType != 0 && WidgetDockController._browserType != EnumBrowserType.IE) || (WidgetDockController._browserType == EnumBrowserType.IE && WidgetDockController._ieVersion >= 9 && buttonType != 0)) {
        return false;
    }
    return true;
};
WidgetDockController._$6s = function (sch) {
    WidgetDockController._windowMain._$6s(sch);
};
WidgetDockController._$06 = function (elementId) {
    var va = WidgetDockController._$kN;
    var len = va.length;
    for (var i = 0; i < len; i++) {
        if (va[i] == elementId) {
            va.splice(i, 1);
            return true;
        }
    }
    return false;
};
WidgetDockController._$2E = function (rc) {
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
