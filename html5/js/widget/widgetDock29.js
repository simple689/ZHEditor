
_$m8 = {};
_$m8._$ku = 2;
_$m8._$0z = function (_$aT, _$av) {
    var _$m9 = document.createElement(_$aT);
    document.getElementById(_$av).appendChild(_$m9);
    _$m9.style.position = "absolute";
    if (widgetDockController.browserType == browserType.Firefox || widgetDockController.browserType == browserType.Chrome) {
        _$m9.style.left = 0;
        _$m9.style.top = 0;
    } else {
        _$m9.style.pixelLeft = 0;
        _$m9.style.pixelTop = 0;
    }
    _$m9.width = 200;
    _$m9.height = 200;
    _$m9.style.visibility = "visible";
    return _$m9;
};
_$m8._$6i = function (Com, _$cR) {
    Com.style.zIndex = _$cR;
};
_$m8._$0t = function (_$aT, _$qU) {
    var _$m9 = document.createElement(_$aT);
    _$qU.appendChild(_$m9);
    _$m9.style.position = "absolute";
    if (widgetDockController.browserType == browserType.Firefox || widgetDockController.browserType == browserType.Chrome) {
        _$m9.style.left = 0;
        _$m9.style.top = 0;
    } else {
        _$m9.style.pixelLeft = 0;
        _$m9.style.pixelTop = 0;
    }
    _$m9.width = 200;
    _$m9.height = 200;
    _$m9.style.visibility = "visible";
    _$m9.style.zIndex = _$m8._$ku;
    _$m8._$ku++;
    return _$m9;
};
_$m8._$39 = function (com, _$88) {
    if (com == null) return;
    if (_$88) {
        com.style.visibility = "visible";
    } else {
        com.style.visibility = "hidden";
    }
};
_$m8._$5I = function (_$av, _$aU) {
    var par = document.getElementById(_$av);
    if (par != null) par.removeChild(_$aU);
};
_$m8._$2k = function (_$sF) {
    if (widgetDockController.browserType == browserType.Firefox || widgetDockController.browserType == browserType.Chrome) {
        return parseInt(_$sF.style.left);
    } else {
        return _$sF.style.pixelLeft;
    }
};
_$m8._$2M = function (_$sF) {
    if (widgetDockController.browserType == browserType.Firefox || widgetDockController.browserType == browserType.Chrome) {
        return parseInt(_$sF.style.top);
    } else {
        return _$sF.style.pixelTop;
    }
};
_$m8._$2O = function (_$sF) {
    if (widgetDockController.isHasCanvasContext) {
        return _$sF.width;
    }
    return parseInt(_$sF.style.width);
};
_$m8._$2h = function (_$sF) {
    if (widgetDockController.isHasCanvasContext) {
        return _$sF.height;
    }
    return parseInt(_$sF.style.height);
};
_$m8._$6j = function (_$sF, _$sH, _$sK) {
    if (widgetDockController.browserType == browserType.Firefox || widgetDockController.browserType == browserType.Chrome) {
        _$sF.style.left = _$sH + "px";
        _$sF.style.top = _$sK + "px";
    } else {
        _$sF.style.pixelLeft = _$sH;
        _$sF.style.pixelTop = _$sK;
    }
};
_$m8._$6n = function (_$sF, _$dq, _$cM) {
    if (isNaN(_$cM)) return;
    if (widgetDockController.isHasCanvasContext) {
        _$sF.width = _$dq;
        _$sF.height = _$cM;
    } else {
        _$sF.style.width = _$dq + "px";
        _$sF.style.height = _$cM + "px";
    }
};
_$m8._$6e = function (element, left, top, width, height) {
    if (isNaN(height)) return;
    if (widgetDockController.browserType == browserType.Firefox || widgetDockController.browserType == browserType.Chrome) {
        element.style.left = left + "px";
        element.style.top = top + "px";
    } else {
        element.style.pixelLeft = left;
        element.style.pixelTop = top;
    }
    element.style.width = width + "px";
    element.style.height = height + "px";
};
_$m8._$4r = function (_$sF) {
    _$sF.style.zIndex = _$m8._$ku;
    _$m8._$ku++;
};
_$m8._$aq = function (fontStyle) {
    var body = document.getElementsByTagName("body")[0];
    var _$aL = document.createElement("div");
    var _$aM = document.createTextNode("Mj");
    _$aL.appendChild(_$aM);
    _$aL.setAttribute("style", fontStyle);
    body.appendChild(_$aL);
    var _$qM = _$aL.offsetHeight;
    body.removeChild(_$aL);
    return _$qM;
};
;_$m8._$ar = function (fontStyle, _$qV) {
    var body = document.getElementsByTagName("body")[0];
    var _$aL = document.createElement("span");
    var _$aM = document.createTextNode(_$qV);
    _$aL.appendChild(_$aM);
    _$aL.setAttribute("style", fontStyle);
    body.appendChild(_$aL);
    var _$qM = _$aL.offsetWidth;
    body.removeChild(_$aL);
    return _$qM;
};
;_$m8._$2L = function (dt, ft, _$qV, _$aa) {
    if (_$aa != null) {
        var _$t8 = "font: " + ft + ";";
        _$aa.font = ft;
        dt.height = _$m8._$aq(_$t8);
        var _$sr = _$aa.measureText(_$qV);
        dt.width = _$sr.width;
    } else {
        var _$t8 = "font: " + ft + ";";
        dt.height = _$m8._$aq(_$t8);
        dt.width = _$m8._$ar(_$t8, _$qV);
    }
};
_$m8._$1q = function (_$tB, _$tD, _$tA, _$tC, cxt) {
    cxt.beginPath();
    cxt.moveTo(_$tB, _$tD);
    cxt.lineTo(_$tA, _$tC);
    cxt.lineWidth = 1;
    cxt.closePath();
    cxt.stroke();
};
_$m8._$1n = function (_$tB, _$tD, _$tA, _$tC, cxt) {
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
_$m8._$2D = function (e, pt) {
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
        if (widgetDockController.browserType == browserType.IE) {
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
