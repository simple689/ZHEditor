WidgetDockElementController = {};
WidgetDockElementController.zIndex = 2;
WidgetDockElementController.createElementWithParent = function (elementType, elementParentId) {
    var element = document.createElement(elementType);
    document.getElementById(elementParentId).appendChild(element);
    element.style.position = "absolute";
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = 0;
        element.style.top = 0;
    } else {
        element.style.pixelLeft = 0;
        element.style.pixelTop = 0;
    }
    element.width = 200;
    element.height = 200;
    element.style.visibility = "visible";
    return element;
};
WidgetDockElementController._$0t = function (elementType, elementParent) {
    var element = document.createElement(elementType);
    elementParent.appendChild(element);
    element.style.position = "absolute";
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = 0;
        element.style.top = 0;
    } else {
        element.style.pixelLeft = 0;
        element.style.pixelTop = 0;
    }
    element.width = 200;
    element.height = 200;
    element.style.visibility = "visible";
    element.style.zIndex = WidgetDockElementController.zIndex;
    WidgetDockElementController.zIndex++;
    return element;
};
WidgetDockElementController.setElementZIndex = function (element, zIndex) {
    element.style.zIndex = zIndex;
};
WidgetDockElementController.setElementZIndexWithController = function (element) {
    element.style.zIndex = WidgetDockElementController.zIndex;
    WidgetDockElementController.zIndex++;
};
WidgetDockElementController.setElementVisible = function (element, isVisible) {
    if (element == null) return;
    if (isVisible) {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
};
WidgetDockElementController.removeChildWithElementId = function (elementId, elementChild) {
    var element = document.getElementById(elementId);
    if (element != null) {
        element.removeChild(elementChild);
    }
};
WidgetDockElementController.getElementLeft = function (element) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        return parseInt(element.style.left);
    }
    return element.style.pixelLeft;
};
WidgetDockElementController.getElementTop = function (element) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        return parseInt(element.style.top);
    }
    return element.style.pixelTop;
};
WidgetDockElementController.getElementWidth = function (element) {
    if (WidgetDockController._isHasCanvasContext) {
        return element.width;
    }
    return parseInt(element.style.width);
};
WidgetDockElementController.getElementHeight = function (element) {
    if (WidgetDockController._isHasCanvasContext) {
        return element.height;
    }
    return parseInt(element.style.height);
};
WidgetDockElementController.setElementLeftTop = function (element, left, top) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = left + "px";
        element.style.top = top + "px";
    } else {
        element.style.pixelLeft = left;
        element.style.pixelTop = top;
    }
};
WidgetDockElementController.setElementSize = function (element, width, height) {
    if (isNaN(height)) return;
    if (WidgetDockController._isHasCanvasContext) {
        element.width = width;
        element.height = height;
    } else {
        element.style.width = width + "px";
        element.style.height = height + "px";
    }
};
WidgetDockElementController.addFixedPanel = function (element, left, top, width, height) {
    if (isNaN(height)) return;
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = left + "px";
        element.style.top = top + "px";
    } else {
        element.style.pixelLeft = left;
        element.style.pixelTop = top;
    }
    element.style.width = width + "px";
    element.style.height = height + "px";
};
WidgetDockElementController.setBodyFontStyle = function (fontStyle) {
    var body = document.getElementsByTagName("body")[0];
    var elementDiv = document.createElement("div");
    var textNode = document.createTextNode("Mj");
    elementDiv.appendChild(textNode);
    elementDiv.setAttribute("style", fontStyle);
    body.appendChild(elementDiv);
    var offsetHeight = elementDiv.offsetHeight;
    body.removeChild(elementDiv);
    return offsetHeight;
};
;WidgetDockElementController._$ar = function (fontStyle, _$qV) {
    var body = document.getElementsByTagName("body")[0];
    var elementSpan = document.createElement("span");
    var textNode = document.createTextNode(_$qV);
    elementSpan.appendChild(textNode);
    elementSpan.setAttribute("style", fontStyle);
    body.appendChild(elementSpan);
    var offsetWidth = elementSpan.offsetWidth;
    body.removeChild(elementSpan);
    return offsetWidth;
};
;WidgetDockElementController._$2L = function (dt, ft, _$qV, _$aa) {
    if (_$aa != null) {
        var _$t8 = "font: " + ft + ";";
        _$aa.font = ft;
        dt.height = WidgetDockElementController.setBodyFontStyle(_$t8);
        var _$sr = _$aa.measureText(_$qV);
        dt.width = _$sr.width;
    } else {
        var _$t8 = "font: " + ft + ";";
        dt.height = WidgetDockElementController.setBodyFontStyle(_$t8);
        dt.width = WidgetDockElementController._$ar(_$t8, _$qV);
    }
};
WidgetDockElementController._$1q = function (_$tB, _$tD, _$tA, _$tC, cxt) {
    cxt.beginPath();
    cxt.moveTo(_$tB, _$tD);
    cxt.lineTo(_$tA, _$tC);
    cxt.lineWidth = 1;
    cxt.closePath();
    cxt.stroke();
};
WidgetDockElementController._$1n = function (_$tB, _$tD, _$tA, _$tC, cxt) {
    cxt.beginPath();
    var _$ta = 2;
    var _$t3 = 5;
    var vno;
    var i;
    if (_$tB == _$tA) {
        vno = (_$tC - _$tD) / (_$ta + _$t3);
        if (vno < 0) {
            vno = -vno;
            var _$tm = _$tD;
            _$tD = _$tC;
            _$tC = _$tm;
        }
        for (i = 0; i < vno; i++) {
            cxt.moveTo(_$tB, _$tD + i * (_$ta + _$t3));
            cxt.lineTo(_$tA, _$tD + i * (_$ta + _$t3) + _$t3);
        }
    } else {
        vno = (_$tA - _$tB) / (_$ta + _$t3);
        if (vno < 0) {
            vno = -vno;
            var _$tm = _$tB;
            _$tB = _$tA;
            _$tA = _$tm;
        }
        for (i = 0; i < vno; i++) {
            cxt.moveTo(_$tB + i * (_$ta + _$t3), _$tD);
            cxt.lineTo(_$tB + i * (_$ta + _$t3) + _$t3, _$tC);
        }
    }
    cxt.lineWidth = 1;
    cxt.closePath();
    cxt.stroke();
};
WidgetDockElementController._$2D = function (e, pt) {
    var vme = null;
    if (e.view != null) {
        vme = e.view.document._$m7;
        if (vme == undefined) {
            vme = e.view.frameElement;
        }
    }
    if (e.srcElement != null && e.srcElement.document != null) {
        vme = e.srcElement.document._$m7;
    }
    if (vme != undefined) {
        var bsp = false;
        if (WidgetDockController._browserType == EnumBrowserType.IE) {
            var vs = e.srcElement.toString();
            if (vs.indexOf("HTMLHtmlElement") >= 0) {
                bsp = true;
            }
        }
        if (bsp) {
            pt.x = e.clientX - e.layerX + e.pageX;
            pt.y = e.clientY - e.layerY + e.pageY;
        } else {
            pt.x = e.clientX + vme.offsetLeft + vme.clientLeft;
            pt.y = e.clientY + vme.offsetTop + vme.clientTop;
        }
    } else {
        pt.x = e.clientX;
        pt.y = e.clientY;
    }
    pt.x = parseInt(pt.x);
    pt.y = parseInt(pt.y);
};
