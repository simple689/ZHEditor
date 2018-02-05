function _$M() {
    this._$o2 = null;
    this._$kI = null;
    this._$eF = -1;
    this._$fB = -1;
    this._$gK = 0;
    this._$el = 0;
    this._$g6 = 0;
};

function WidgetDockSessionLayout() {
    this.content = "";
};
WidgetDockSessionLayout.prototype.addContent = function (str) {
    this.content += str;
    this.content += '\r\n';
};
WidgetDockSessionLayout.prototype.getContent = function () {
    return this.content;
};

function WidgetDockSessionLayoutController(item) {
    this._itemList = item.split("\r\n");
    this._readIndex = 1;
    this._itemListLen = this._itemList.length;
    if (this._itemListLen == 1) {
        this._itemList = item.split("\n");
        this._itemListLen = this._itemList.length;
    }
};
WidgetDockSessionLayoutController.prototype.read = function () {
    if (this._readIndex < this._itemListLen) {
        var str = this._itemList[this._readIndex];
        this._readIndex++;
        return str;
    }
    return null;
};

function Location() {
    this.x = 0;
    this.y = 0;
};

function Rect() {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
};
Rect.prototype.setRect = function (rc) {
    this.left = rc.left;
    this.top = rc.top;
    this.right = rc.right;
    this.bottom = rc.bottom;
};

function _$5Y() {
    this.cx = 0;
    this.cy = 0;
};

function Size() {
    this.width = 0;
    this.height = 0;
};

function LocationSize() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
};

WidgetDockPrototype = {};
;WidgetDockPrototype.bind = function (dst, src) {
    function WidgetDockPrototypeConvert() {
    }

    WidgetDockPrototypeConvert.prototype = src.prototype;
    dst.prototype = new WidgetDockPrototypeConvert();
    dst.baseConstructor = src;
    dst._$s4 = src.prototype;
};

WidgetDockElementController = {};
WidgetDockElementController._$ku = 2;
WidgetDockElementController._$0z = function (_$aT, _$av) {
    var _$m9 = document.createElement(_$aT);
    document.getElementById(_$av).appendChild(_$m9);
    _$m9.style.position = "absolute";
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
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
WidgetDockElementController._$6i = function (Com, _$cR) {
    Com.style.zIndex = _$cR;
};
WidgetDockElementController._$0t = function (_$aT, _$qU) {
    var _$m9 = document.createElement(_$aT);
    _$qU.appendChild(_$m9);
    _$m9.style.position = "absolute";
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        _$m9.style.left = 0;
        _$m9.style.top = 0;
    } else {
        _$m9.style.pixelLeft = 0;
        _$m9.style.pixelTop = 0;
    }
    _$m9.width = 200;
    _$m9.height = 200;
    _$m9.style.visibility = "visible";
    _$m9.style.zIndex = WidgetDockElementController._$ku;
    WidgetDockElementController._$ku++;
    return _$m9;
};
WidgetDockElementController.setElementVisible = function (element, isVisible) {
    if (element == null) return;
    if (isVisible) {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
};
WidgetDockElementController._$5I = function (_$av, _$aU) {
    var par = document.getElementById(_$av);
    if (par != null) par.removeChild(_$aU);
};
WidgetDockElementController._$2k = function (_$sF) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        return parseInt(_$sF.style.left);
    } else {
        return _$sF.style.pixelLeft;
    }
};
WidgetDockElementController._$2M = function (_$sF) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        return parseInt(_$sF.style.top);
    } else {
        return _$sF.style.pixelTop;
    }
};
WidgetDockElementController._$2O = function (_$sF) {
    if (WidgetDockController._isHasCanvasContext) {
        return _$sF.width;
    }
    return parseInt(_$sF.style.width);
};
WidgetDockElementController._$2h = function (_$sF) {
    if (WidgetDockController._isHasCanvasContext) {
        return _$sF.height;
    }
    return parseInt(_$sF.style.height);
};
WidgetDockElementController._$6j = function (_$sF, _$sH, _$sK) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        _$sF.style.left = _$sH + "px";
        _$sF.style.top = _$sK + "px";
    } else {
        _$sF.style.pixelLeft = _$sH;
        _$sF.style.pixelTop = _$sK;
    }
};
WidgetDockElementController._$6n = function (_$sF, _$dq, _$cM) {
    if (isNaN(_$cM)) return;
    if (WidgetDockController._isHasCanvasContext) {
        _$sF.width = _$dq;
        _$sF.height = _$cM;
    } else {
        _$sF.style.width = _$dq + "px";
        _$sF.style.height = _$cM + "px";
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
WidgetDockElementController._$4r = function (_$sF) {
    _$sF.style.zIndex = WidgetDockElementController._$ku;
    WidgetDockElementController._$ku++;
};
WidgetDockElementController._$aq = function (fontStyle) {
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
;WidgetDockElementController._$ar = function (fontStyle, _$qV) {
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
;WidgetDockElementController._$2L = function (dt, ft, _$qV, _$aa) {
    if (_$aa != null) {
        var _$t8 = "font: " + ft + ";";
        _$aa.font = ft;
        dt.height = WidgetDockElementController._$aq(_$t8);
        var _$sr = _$aa.measureText(_$qV);
        dt.width = _$sr.width;
    } else {
        var _$t8 = "font: " + ft + ";";
        dt.height = WidgetDockElementController._$aq(_$t8);
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

function WidgetDockFloatPanelController() {
    this._panelNumMax = this._$jk = 10;
    this._panelNum = 0;
    this._panelList = new Array(this._panelNumMax);
};
WidgetDockFloatPanelController.prototype.addFloatPanel = function (floatPanel) {
    this._panelList[this._panelNum] = floatPanel;
    this._panelNum++;
    if (this._panelNum == this._panelNumMax) {
        var _$oR = new Array(this._panelNum + this._$jk);
        var i;
        for (i = 0; i < this._panelNum; i++) {
            _$oR[i] = this._panelList[i];
        }
        this._panelList = _$oR;
        this._panelNumMax += this._$jk;
    }
};
WidgetDockFloatPanelController.prototype.deletePanel = function (index) {
    if (this._panelNum == 0 || index > (this._panelNum - 1)) return;
    var i;
    for (i = index; i < this._panelNum - 1; i++) {
        this._panelList[i] = this._panelList[i + 1];
    }
    this._panelNum -= 1;
};
WidgetDockFloatPanelController.prototype._$4 = function (_$nu, _$cN) {
    if (_$cN > this._panelNum) return false;
    if (_$cN == this._panelNum) {
        this.addFloatPanel(_$nu);
        return true;
    }
    this._panelNum++;
    var i;
    if (this._panelNum == this._panelNumMax) {
        var _$oS = new Array(this._panelNum + this._$jk);
        for (i = 0; i < _$cN; i++) {
            _$oR[i] = this._panelList[i];
        }
        for (i = _$cN; i < this._panelNum; i++) _$oR[i + 1] = this._panelList[i];
        _$oR[_$cN] = _$nu;
        this._panelList = _$oR;
        this._panelNumMax += this._$jk;
    } else {
        for (i = this._panelNum - 1; i > _$cN; i--) this._panelList[i] = this._panelList[i - 1];
        this._panelList[_$cN] = _$nu;
    }
    return true;
};
WidgetDockFloatPanelController.prototype.getPanelNum = function () {
    return this._panelNum;
};
WidgetDockFloatPanelController.prototype._$5R = function () {
    this._panelNumMax = this._$jk = 10;
    this._panelNum = 0;
    this._panelList = new Array(this._panelNumMax);
};

function _$17() {
};_$17.prototype._$2G = function (_$nz, _$dk, _$p8, _$8b) {
};
_$17.prototype._$67 = function (_$9g, _$nB, _$97) {
};

function _$5g() {
};

function _$6P() {
    this._$lC = new _$5g();
    this._$ir = false;
    this._$it = false;
    this._$kC = null;
    this._$kx = null;
    this._$jr = 0;
    this._$j0 = 0;
    this._$kA = null;
    this._$ka = 0;
    this._$j1 = 0;
    this._$j2 = 0;
    this._$kn = 0;
    this._$kq = 0;
    this._$ky = null;
    this._$kM = null;
    this._$iM = false;
    this._$kJ = null;
    this._$iC = false;
    this._$ij = false;
};

function _$0O() {
    this._$aO = 0;
    this._patternSub = new WidgetDockFloatPanelController();
};

function _$5h() {
    this._$i0 = new WidgetDockFloatPanelController();
};
;

function _$F() {
    this._$fG = 0;
    this._$aS = 0xffffffff;
    this._$oV = null;
    this._$od = null;
    this._$pr = null;
    this._$9y = WidgetDockPatternBase._$3m;
    this._$9j = WidgetDockPatternBase._$3j;
    this._$8y = false;
    this._$90 = false;
    this._$br = 1.0;
    this._$oy = null;
    this._$of = null;
    this._$sl = "";
    this._$l1 = null;
    this.prc = new Rect();
    this._$e8 = 0;
    this._$eb = 0;
    this._$rO = new _$5Y();
    this._$pl = false;
    this._$o5 = null;
};_$F.prototype._$e = function (_$qY, _$aP, _$pz, _$cJ, _$cK) {
    var _$ol = new _$57();
    _$ol._$qY = _$qY;
    _$ol._$aP = _$aP;
    _$ol._$pA = _$pz;
    _$ol._$rM = _$cJ;
    _$ol._$rN = _$cK;
    if (this._$l1 == null) this._$l1 = new Array(0);
    this._$l1.push(_$ol);
};
_$F.prototype._$1L = function () {
    var _$pO = null;
    if (this._$od != null) _$pO = this._$od._$1L();
    if (_$pO != null) return _$pO;
    if (this._$pr != null) _$pO = this._$pr._$1L();
    if (_$pO != null) return _$pO;
    if (this._$pr == null && this._$od == null && !this._$8y) return this;
    return null;
};
_$F.prototype._$5w = function (mainPattern, _$99) {
    if (this._$oy != null) {
        if (this._$oy._$kG != null) {
            this._$oy._$kG._$5E(this._$oy);
        }
        this._$oy._$kG = mainPattern;
        mainPattern.Add(this._$oy);
    }
    if (this._$od != null && !this._$od._$8y) {
        this._$od._$5w(mainPattern, _$99);
    }
    if (this._$pr != null && !this._$pr._$8y) {
        this._$pr._$5w(mainPattern, _$99);
    } else if ((this._$pr == null) && (this._$pr == null) && !this._$8y && (this._$of != null)) {
        this._$of._$kA = this;
        this._$of._$j0 = _$99;
        this._$of._$kB = mainPattern;
        if (this._$o5 != null && this._$o5._$i6.length > 1) {
            if (this._$l1 == null) this._$l1 = new Array(0);
            var _$e1 = this._$o5._$i6.length;
            var i;
            for (i = 0; i < _$e1; i++) {
                var _$nQ = this._$o5._$i6[i]._$mO;
                var _$ol = new _$57();
                _$nQ._$j0 = _$99;
                _$ol._$mO = _$nQ;
                _$nQ._$kB = mainPattern;
                this._$l1.push(_$ol);
                _$nQ._$kA = this;
            }
        }
    }
};
_$F.prototype._$i = function () {
    var _$8V = false;
    var _$oU = this._$oV;
    var pme = this;
    var _$pu;
    while (true) {
        if (_$oU != null) {
            _$pu = null;
            if (_$oU._$od != null && _$oU._$od != pme) _$pu = _$oU._$od; else if (_$oU._$pr != null && _$oU._$pr != pme) _$pu = _$oU._$pr;
            if (_$pu != null && !_$pu._$8y) {
                break;
            }
            _$oU._$8y = true;
            pme = _$oU;
            _$oU = _$oU._$oV;
        } else {
            _$8V = true;
            break;
        }
    }
    return _$8V;
};
_$F.prototype._$2Q = function (_$nb) {
    if (this._$od != null) this._$od._$2Q(_$nb);
    if (this._$pr != null) this._$pr._$2Q(_$nb);
    if (this._$od == null && this._$pr == null && !this._$8y) {
        if (this._$o5 != null && this._$o5._$i6.length > 1) {
            var _$e1 = this._$o5._$i6.length;
            var i;
            for (i = 0; i < _$e1; i++) {
                _$nb.addFloatPanel(this._$o5._$i6[i]._$mO);
            }
        } else {
            _$nb.addFloatPanel(this._$of);
        }
    }
};
_$F.prototype._$5J = function (_$mS) {
    var _$pO = null;
    if (_$mS != null) {
        this._$9y = _$mS._$9y;
        this._$9j = _$mS._$9j;
        this._$br = _$mS._$br;
        this._$8y = _$mS._$8y;
        this._$oy = _$mS._$oy;
        if (this._$oy != null) this._$oy._$kE = this;
        if (_$mS._$od != null && !_$mS._$od._$8y) {
            _$pO = new _$F();
            this._$od = _$pO;
            _$pO._$oV = this;
            _$pO._$5J(_$mS._$od);
        }
        if (_$mS._$pr != null && !_$mS._$pr._$8y) {
            _$pO = new _$F();
            this._$pr = _$pO;
            _$pO._$oV = this;
            _$pO._$5J(_$mS._$pr);
        } else if ((_$mS._$pr == null) && (_$mS._$pr == null) && !_$mS._$8y && (_$mS._$of != null)) {
            this._$of = _$mS._$of;
            this._$8y = false;
            this._$9y = _$mS._$9y;
            this._$9j = _$mS._$9j;
            this._$br = _$mS._$br;
            this._$8y = _$mS._$8y;
            if (_$mS._$o5 != null && _$mS._$o5._$i6.length > 1) {
                this._$o5 = _$mS._$o5;
                this._$o5._$kE = this;
            }
        }
    }
};
_$F.prototype._$3F = function (_$nf, _$9f, _$7V, _$n1) {
    var _$oc = new _$F();
    var _$oD = _$nf;
    _$oc._$oV = this;
    _$oD._$oV = this;
    _$oc._$od = this._$od;
    _$oc._$pr = this._$pr;
    if (this._$od != null) this._$od._$oV = _$oc;
    if (this._$pr != null) this._$pr._$oV = _$oc;
    _$oc._$of = this._$of;
    if (this._$of != null) {
        if (this._$of._$kA == this) this._$of._$kA = _$oc; else if (this._$of._$l6 == this) this._$of._$l6 = _$oc;
    }
    _$oc._$br = this._$br;
    _$oc._$l1 = this._$l1;
    _$oc._$o5 = this._$o5;
    _$oc._$9y = this._$9y;
    _$oc._$oy = this._$oy;
    if (this._$oy != null) this._$oy._$kE = _$oc;
    _$oc._$e8 = this._$e8;
    _$oc._$eb = this._$eb;
    _$oc._$pl = this._$pl;
    _$oc.prc = this.prc;
    if (this._$o5 != null) this._$o5._$kE = _$oc;
    _$oc._$6Z(this);
    _$oc._$8y = this._$8y;
    if (_$7V) {
        this._$od = _$oD;
        this._$pr = _$oc;
    } else {
        this._$od = _$oc;
        this._$pr = _$oD;
    }
    if (_$9f == WidgetDockPatternBase._$3k || _$9f == WidgetDockPatternBase._$3l) {
        this._$od._$9j = WidgetDockPatternBase._$3k;
        this._$pr._$9j = WidgetDockPatternBase._$3l;
    } else {
        this._$od._$9j = WidgetDockPatternBase._$3m;
        this._$pr._$9j = WidgetDockPatternBase._$3j;
    }
    this._$8y = false;
    _$oD._$8y = true;
    this._$br = 1.0;
    this._$9y = this._$od._$9j;
    this._$P(_$oc, _$oD, _$n1);
    this._$l1 = null;
    this._$o5 = null;
    this._$of = null;
    this._$oy = null;
};
_$F.prototype._$P = function (_$n4, _$nf, _$nj) {
    {
        var _$qs = new Rect();
        _$n4._$22(_$qs);
        var _$gd = _$qs.bottom - _$qs.top;
        var _$ge = _$qs.right - _$qs.left;
        if ((this._$9y == WidgetDockPatternBase._$3m || this._$9y == WidgetDockPatternBase._$3j) && _$gd > 0 && (_$gd > _$nj.cy) && _$nj.cy > 0) {
            if (_$nf._$9j == WidgetDockPatternBase._$3m) {
                this._$br = 1.0 * _$nj.cy / (_$gd - _$nj.cy);
            } else {
                this._$br = 1.0 * (_$gd - _$nj.cy) / _$nj.cy;
            }
        } else if ((this._$9y == WidgetDockPatternBase._$3k || this._$9y == WidgetDockPatternBase._$3l) && _$ge > 0 && (_$ge > _$nj.cx) && _$nj.cx > 0) {
            if (_$nf._$9j == WidgetDockPatternBase._$3k) this._$br = 1.0 * _$nj.cx / (_$ge - _$nj.cx); else this._$br = 1.0 * (_$ge - _$nj.cx) / _$nj.cx;
        }
    }
};
_$F.prototype._$5K = function (_$mO) {
    if (this._$o5 != null) {
        return this._$o5._$5K(_$mO);
    }
    return false;
};
_$F.prototype._$6Z = function (_$nl) {
    if (this._$l1 == null || this._$l1.length == 0) return;
    var _$gi = this._$l1.length;
    var _$pN;
    var i;
    for (i = 0; i < _$gi; i++) {
        _$pN = this._$l1[i]._$mO;
        if (_$pN != null) {
            if (_$pN._$kA == _$nl) _$pN._$kA = this;
            if (_$pN._$l6 == _$nl) _$pN._$l6 = this;
        }
    }
};
_$F.prototype._$6m = function (_$cN, mainPattern) {
    if (this._$l1 == null || this._$l1.length == 0) return;
    var _$gi = this._$l1.length;
    var _$pN;
    var i;
    for (i = 0; i < _$gi; i++) {
        _$pN = this._$l1[i]._$mO;
        if (_$pN != null) {
            if (_$pN._$kB == mainPattern) _$pN._$jr = _$cN;
            if (_$pN._$l7 == mainPattern) _$pN._$k4 = _$cN;
        }
    }
};
_$F.prototype._$o = function (_$aQ, _$d3, _$mM, _$nh) {
    if (_$mM != this._$of) {
        return;
    }
    if (_$aQ == null || _$d3 < 2) return;
    if (this._$l1 == null) this._$l1 = new Array(0);
    if (this._$o5 == null) this._$o5 = new _$G();
    var _$e1 = this._$l1.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$l1[i]._$mO == _$mM) {
            this._$l1.splice(i, 1);
            break;
        }
    }
    this._$o5._$5K(_$mM);
    this._$o5._$kE = this;
    for (i = 0; i < _$d3; i++) {
        _$nh.Add(_$aQ[i]);
        this.Add(_$aQ[i]);
        this._$o5.Add(_$aQ[i]);
        _$aQ[i]._$kA = this;
        _$aQ[i]._$kB = _$nh;
        if (_$aQ[i] == _$mM) {
            this._$o5._$jh = i;
            this._$of = _$aQ[i];
            this._$o5.setVisible(true);
            this._$o5._$bi = _$aQ[i];
            _$aQ[i]._$5(this._$o5);
        } else {
            _$aQ[i].setElementVisible(false);
            if (_$mM != null) {
                _$aQ[i]._$ic = false;
                _$aQ[i]._$6p(_$mM._left, _$mM._top, _$mM._width, _$mM._height);
                _$aQ[i]._$ic = true;
            }
        }
    }
    this._$o5._$qJ();
};
_$F.prototype._$0w = function (_$aQ, _$d3, _$mM, _$nh) {
    if (_$aQ == null || _$d3 < 2) return;
    this._$l1 = new Array(0);
    this._$o5 = new _$G();
    this._$o5._$kE = this;
    var i;
    for (i = 0; i < _$d3; i++) {
        this.Add(_$aQ[i]);
        this._$o5.Add(_$aQ[i]);
        _$aQ[i]._$kA = this;
        _$nh.Add(_$aQ[i]);
        if (_$aQ[i] == _$mM) {
            this._$o5._$jh = i;
            this._$of = _$aQ[i];
            this._$o5.setVisible(true);
            this._$o5._$bi = _$aQ[i];
            _$aQ[i]._$5(this._$o5);
        } else {
            _$aQ[i].setElementVisible(false);
            if (_$mM != null) {
                _$aQ[i]._$ic = false;
                _$aQ[i]._$6p(_$mM._left, _$mM._top, _$mM._width, _$mM._height);
                _$aQ[i]._$ic = true;
            }
        }
    }
};
_$F.prototype._$20 = function () {
    if (this._$l1 == null || this._$l1.length == 0) return false;
    var _$gi = this._$l1.length;
    var _$pN;
    var i;
    for (i = 0; i < _$gi; i++) {
        if (!this._$8y) return true;
    }
    return false;
};
_$F.prototype._$56 = function (_$sg) {
    if (this._$l1 == null || this._$l1.length == 0) return 0;
    var _$gi = this._$l1.length;
    var _$sm;
    var i;
    for (i = 0; i < _$gi; i++) {
        _$sm = this._$l1[i]._$qY;
        if (_$sm != null && (_$sm == _$sg)) {
            this._$l1.splice(i, 1);
            break;
        }
    }
    _$gi = this._$l1.length;
    return _$gi;
};
_$F.prototype._$56 = function (_$mO) {
    if (this._$l1 == null || this._$l1.length == 0) return 0;
    var _$pN;
    var _$gi = this._$l1.length;
    if (_$mO == null) {
        while (_$gi > 0) {
            _$pN = this._$l1[0]._$mO;
            if (_$pN != null) {
                _$pN._$kA = null;
                this._$l1.splice(0, 1);
                _$gi = this._$l1.length;
            }
        }
        return 0;
    }
    var i;
    for (i = 0; i < _$gi; i++) {
        _$pN = this._$l1[i]._$mO;
        if (_$pN == _$mO) {
            this._$l1.splice(i, 1);
            _$pN._$kA = null;
            if (_$mO == this._$of) this._$of = null;
            break;
        }
    }
    _$gi = this._$l1.length;
    return _$gi;
};
_$F.prototype._$31 = function (_$mO, _$pC) {
    if (this._$o5 != null && this._$o5._$i6.length >= 2) {
        return this._$o5._$0d(_$mO, _$pC);
    }
    return false;
};
_$F.prototype._$3v = function (_$pC) {
    if (this._$o5 == null || this._$o5._$i6.length < 2) return false;
    var rc = new Rect();
    this._$o5._$2P(rc);
    return WidgetDockPatternBase._$5f(rc, _$pC);
};
_$F.prototype._$6G = function (_$mP, _$mQ) {
    if (this._$l1 == null) return;
    var _$eU = -1;
    var _$eV = -1;
    var _$e1 = this._$l1.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$l1[i]._$mO == _$mP) _$eU = i; else if (this._$l1[i]._$mO == _$mQ) _$eV = i;
        if (_$eU >= 0 && _$eV >= 0) break;
    }
    if (_$eU >= 0 && _$eV >= 0) {
        var _$pN = this._$l1[_$eU];
        this._$l1[_$eU] = this._$l1[_$eV];
        this._$l1[_$eV] = _$pN;
    }
};
_$F.prototype._$2 = function (_$mO) {
    var rc = new Rect();
    this._$of._$25(rc);
    var _$og = this._$of._$kB;
    _$og.Add(_$mO);
    var _$p1 = this._$of;
    this._$of.setElementVisible(false);
    _$mO._$kA._$of = _$mO;
    _$mO._$kB = _$og;
    _$mO._$6q(rc);
    var _$eq = this._$1M(_$mO);
    var _$fy = this._$1M(_$p1);
    if (this._$o5 == null || (this._$o5._$i6.length == 0)) {
        this._$o5 = new _$G();
        this._$o5._$kE = this;
        if ((_$fy <= _$eq) || (_$eq < 0)) {
            this._$o5.Add(_$p1);
            this._$o5.Add(_$mO);
            this._$o5._$jh = 1;
        } else {
            this._$o5.Add(_$mO);
            this._$o5.Add(_$p1);
            this._$o5._$jh = 0;
        }
        _$mO._$5(this._$o5);
    } else {
        if (_$eq >= 0) {
            this._$o5._$3(_$mO, _$eq);
            this._$o5._$jh = _$eq;
        } else {
            this._$o5.Add(_$mO);
            this._$o5._$jh = this._$o5._$i6.length - 1;
        }
        _$mO._$5(this._$o5);
    }
    _$mO._$sL();
    if (this._$l1 == null) {
        this._$l1 = new Array(0);
        this.Add(_$p1);
    }
    this._$o5._$bi = _$mO;
    this.Add(_$mO);
    _$p1._$bf(false);
};
_$F.prototype._$1M = function (_$mO) {
    if (this._$l1 == null || this._$l1.length == 0) return -1;
    var _$gi = this._$l1.length;
    var _$e5 = 0;
    var tmp;
    var i;
    for (i = 0; i < _$gi; i++) {
        tmp = this._$l1[i]._$mO;
        if (tmp != null) {
            if (tmp._$kA == this && !tmp._$kA._$8y && _$mO != tmp) {
                if (this._$o5 != null && this._$o5._$3x(tmp)) _$e5++;
            }
            if (tmp == _$mO) {
                if ((this._$o5 == null) || (this._$o5._$i6.length == 0)) return i; else return _$e5;
            }
        }
    }
    return -1;
};
_$F.prototype.Add = function (_$mO) {
    if (this._$l1 == null || this._$l1.length == 0) {
        if (this._$l1 == null) this._$l1 = new Array(0);
        var _$ol;
        if (this._$of != null && this._$of != _$mO) {
            _$ol = new _$57();
            _$ol._$mO = this._$of;
            this._$l1.push(_$ol);
        }
        _$ol = new _$57();
        _$ol._$mO = _$mO;
        this._$l1.push(_$ol);
        return;
    }
    var _$e1 = this._$l1.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == this._$l1[i]._$mO) return;
    }
    var _$ol = new _$57();
    _$ol._$mO = _$mO;
    this._$l1.push(_$ol);
};
_$F.prototype._$1K = function (_$nn, _$nG, _$p7, _$pa) {
    var rcf = new Rect();
    var rcs = new Rect();
    var _$qu = new Rect();
    rcf.left = rcf.right = rcs.left = rcs.right = -6000;
    _$nn[0] = this._$od;
    _$nG[0] = this._$pr;
    if (this._$od != null) this._$od._$22(rcf);
    if (this._$pr != null) this._$pr._$22(rcs);
    if ((_$nG[0] != null) && ((_$nG[0]._$9j == WidgetDockPatternBase._$3m) || (_$nG[0]._$9j == WidgetDockPatternBase._$3k))) {
        _$nn[0] = this._$pr;
        _$nG[0] = this._$od;
        _$qu.setRect(rcf);
        rcf.setRect(rcs);
        rcs.setRect(_$qu);
    }
    if (_$p7 != null) _$p7.setRect(rcf);
    if (_$pa != null) _$pa.setRect(rcs);
};
_$F.prototype._$22 = function (_$q1) {
    _$q1.left = _$q1.right = _$q1.top = _$q1.bottom = -6000;
    var _$pQ, _$pT;
    _$pQ = this._$od;
    _$pT = this._$pr;
    if (this._$pr != null && (this._$pr._$9j == WidgetDockPatternBase._$3k || this._$pr._$9j == WidgetDockPatternBase._$3m)) {
        _$pQ = this._$pr;
        _$pT = this._$od;
    }
    var rcs = new Rect();
    if (_$pQ != null && _$pT == null) {
        _$pQ._$22(_$q1);
        return;
    } else if (_$pQ == null && _$pT != null) {
        _$pT._$22(_$q1);
        return;
    } else if (_$pQ != null && _$pT != null) {
        _$pQ._$22(_$q1);
        _$pT._$22(rcs);
        if (this._$9y == WidgetDockPatternBase._$3m || this._$9y == WidgetDockPatternBase._$3j) {
            if ((_$q1.top == _$q1.bottom) && (_$q1.top == -6000)) {
                _$q1.setRect(rcs);
            } else {
                if (rcs.bottom > _$q1.bottom) _$q1.bottom = rcs.bottom;
            }
        } else {
            if ((_$q1.left == _$q1.right) && (_$q1.left == -6000)) {
                _$q1.setRect(rcs);
            } else {
                if (rcs.right > _$q1.right) _$q1.right = rcs.right;
            }
        }
        return;
    } else if (!this._$8y) {
        this._$of._$25(_$q1);
    }
};
_$F.prototype._$03 = function (_$mX, _$pC, _$nz, _$dk, _$oQ) {
    var _$9z = 0xff;
    if (this._$od != null || this._$pr != null) {
        var _$rP = new _$5Y();
        _$rP.cx = _$nz.cx;
        _$rP.cy = _$nz.cy;
        if (this._$od != null) _$9z = this._$od._$03(_$mX, _$pC, _$nz, _$dk, _$oQ);
        if (_$9z != 0xff && ((_$9z + 1) % 2) == 0) {
            return _$9z;
        }
        var _$9A = 0xff;
        var _$su = null;
        if (this._$pr != null) {
            _$su = new Array(1);
            _$9A = this._$pr._$03(_$mX, _$pC, _$rP, _$dk, _$su);
        }
        if ((_$9A != 0xff) && ((((_$9A + 1) % 2) == 0) || (_$9z == 0xff))) {
            if (_$oQ != null) _$oQ[0] = _$su[0];
            _$nz.cx = _$rP.cx;
            _$nz.cy = _$rP.cy;
            return _$9A;
        }
        return _$9z;
    }
    if (!this._$8y) {
        var _$qg = new Rect();
        _$qg = _$mX._$lC;
        var _$q7 = new Rect();
        var _$9m = 0xff;
        if (this._$of == null) {
            return _$9m;
        }
        this._$of._$25(_$q7);
        var iw = _$q7.right - _$q7.left;
        var ih = _$q7.bottom - _$q7.top;
        var _$gN = _$q7.left;
        var _$gT = _$q7.top;
        var _$qh = new Rect();
        this._$of._$hy._$2P(_$qh);
        if (this._$of._$jm >= WidgetDockFloatPanel._$0) {
            if (this._$of._patternMain._$jv == WidgetDockController._$0R || this._$of._$j0 == WidgetDockPatternBase._$3k || this._$of._$j0 == WidgetDockPatternBase._$3l) {
                _$q7.top = _$qh.bottom;
            } else {
                _$q7.left = _$qh.right;
            }
        } else {
            if (this._$of._$jm == WidgetDockFloatPanel._$3Q) {
                _$q7.left = _$qh.right;
            } else if (this._$of._$jm == WidgetDockFloatPanel._$6K) {
                _$q7.top = _$qh.bottom;
            } else if (this._$of._$jm == WidgetDockFloatPanel._$5j) _$q7.right = _$qh.left; else _$q7.bottom = _$qh.top;
        }
        if (_$qh.left != 0 || _$qh.right != 0 || _$qh.top != 0 || _$qh.bottom != 0) {
            if (WidgetDockPatternBase._$5f(_$qh, _$pC) && (this._$of == null || (this._$of != null && !this._$of._$iq)) && (_$mX._$kx == null || (_$mX._$kx != null && !_$mX._$kx._$iq))) {
                {
                    _$nz.cx = iw;
                    _$oQ[0] = this._$of;
                    _$nz.cy = ih;
                    _$mX._$ij = true;
                    _$mX._$kJ = this._$of;
                    _$qh.bottom = _$qh.top + _$nz.cy;
                    _$mX._$j1 = this._$of._$j0;
                    _$mX._$kn = _$gN;
                    _$mX._$kq = _$gT;
                    return (this._$of._$j0 * 2 + 1);
                }
            }
        }
        _$9z = WidgetDockPatternBase._$m(_$q7, _$pC);
        if (_$9z != 0xff) {
            if (((_$9z + 1) % 2) == 0) {
                _$oQ[0] = this._$of;
                if (parseInt(_$9z / 2) == WidgetDockPatternBase._$3j || parseInt(_$9z / 2) == WidgetDockPatternBase._$3m) {
                    _$nz.cx = WidgetDockPatternBase._$2A(_$q7);
                    if ((_$nz.cy >= (_$q7.bottom - _$q7.top))) {
                        if (_$qg.left != _$q7.left || _$qg.right != _$q7.right) {
                            _$nz.cy = (_$q7.bottom - _$q7.top) / 2;
                            if (WidgetDockPatternBase._$2z(_$q7) < _$dk) _$9z = 0xff;
                        }
                    }
                } else {
                    _$nz.cy = WidgetDockPatternBase._$2z(_$q7);
                    if ((_$nz.cx >= (_$q7.right - _$q7.left))) {
                        if (_$qg.top != _$q7.top || _$qg.bottom != _$q7.bottom) {
                            _$nz.cx = (_$q7.right - _$q7.left) / 2;
                            if (WidgetDockPatternBase._$2A(_$q7) < _$dk) _$9z = 0xff;
                        }
                    }
                }
                {
                    _$mX._$j1 = parseInt(_$9z / 2);
                    WidgetDockPatternBase._$2c(_$mX, _$q7, _$nz);
                }
                return _$9z;
            } else if (_$9m == 0xff) {
                _$9m = _$9z;
                _$oQ[0] = this._$of;
                return _$9z;
            }
        } else {
        }
    }
    return 0xff;
};
_$F.prototype._$4s = function (_$mO, _$8e) {
    var _$e1 = 0;
    if (this._$od != null) {
        _$e1 += this._$od._$4s(_$mO, _$8e);
    }
    if (_$e1 >= 2) return _$e1;
    if (this._$pr != null) _$e1 += this._$pr._$4s(_$mO, _$8e);
    if (_$e1 >= 2) return _$e1;
    if (this._$od == null && this._$pr == null && !this._$8y) {
        if (this._$of != null && this._$of != _$mO) {
            _$e1++;
            if (!_$8e) {
                if (this._$o5 != null && this._$o5._$i6.length > 1) {
                    _$e1 += 2;
                    return _$e1;
                }
            }
        }
    }
    return _$e1;
};
_$F.prototype._$05 = function () {
    var _$8y;
    if (this._$od != null) {
        _$8y = this._$od._$05();
        if (!_$8y) return _$8y;
    }
    if (this._$pr != null) {
        _$8y = this._$pr._$05();
        if (!_$8y) return _$8y;
    }
    if (this._$oV == null) return true;
    if (this._$pr == null && this._$od == null && this._$of != null) return this._$8y;
    return true;
};

function WidgetDockPatternBase(_$7R) {
    if (_$7R) this._$lk = new Array(4);
    this._$iZ = false;
    this._$hA = null;
    this._$it = true;
    this._$is = false;
    this._$iW = false;
    this._patternPositionList = new Array(4);
    this._$lo = null;
    this._$je = 0;
    this._elementWithCenter = null;
    this._elementWithType = new Array(4);
    this._$jO = 0;
    this._$he = null;
    this._$i3 = null;
    this._$iV = false;
    this._$lm = new Array(4);
    this._$iz = false;
    this._$jv = 0;
    this._$jF = new Array(4);
    var k;
    for (k = 0; k < 4; k++) {
        this._patternPositionList[k] = new _$0O();
        this._$lm[k] = new _$5h();
        this._$jF[k] = 0;
        this._elementWithType[k] = null;
    }
    this._$lz = new Rect();
    this.width = 0;
    this.height = 0;
    this._$ii = _$7R;
    WidgetDockPatternBase.resetRect(this._$lz);
    this._elementWithCenter = null;
    this._$jd = 0;
    this._$lz.left = -4000;
    this._$lz.right = -4000;
    {
        var i;
        for (i = 0; i < 4; i++) {
        }
    }
};WidgetDockPatternBase._$3S = 0;
WidgetDockPatternBase._$6M = 1;
WidgetDockPatternBase._$5k = 2;
WidgetDockPatternBase._$s = 3;
WidgetDockPatternBase._$3T = 0;
WidgetDockPatternBase._$6N = 1;
WidgetDockPatternBase._$5l = 2;
WidgetDockPatternBase._$t = 3;
WidgetDockPatternBase._$3k = 0;
WidgetDockPatternBase._$3m = 1;
WidgetDockPatternBase._$3l = 2;
WidgetDockPatternBase._$3j = 3;
WidgetDockPatternBase._$3e = 0;
WidgetDockPatternBase._$3d = 1;
WidgetDockPatternBase._$3i = 2;
WidgetDockPatternBase._$3h = 3;
WidgetDockPatternBase._$3g = 4;
WidgetDockPatternBase._$3f = 5;
WidgetDockPatternBase._$3c = 6;
WidgetDockPatternBase._$3b = 7;
WidgetDockPatternBase._$5Z = 6;
WidgetDockPatternBase._$45 = 16;
WidgetDockPatternBase._$A = 12;
WidgetDockPatternBase._$61 = 0;
WidgetDockPatternBase._$62 = 1;
WidgetDockPatternBase._$l2 = null;
WidgetDockPatternBase._$k1 = 0;
WidgetDockPatternBase._$ib = true;
WidgetDockPatternBase.prototype._$3z = function () {
    this.width = 0;
    this.height = 0;
    this._$lz.left = -4000;
    this._$lz.right = -4000;
    this._$iW = false;
};
WidgetDockPatternBase.prototype._$4b = function (_$mO) {
    if (this._$ii) {
        var i;
        for (i = 0; i < 4; i++) {
            if (this._$lk[i] != null) this._$5M(i, _$mO);
        }
    }
    var _$ps = null;
    var i;
    for (i = 0; i < 4; i++) {
        var _$e1 = this._patternPositionList[i]._patternSub.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            _$ps = this._patternPositionList[i]._patternSub._panelList[j];
            var _$8G = this._$4a(_$ps._$kI, _$mO);
            if (_$8G) return;
        }
    }
};
WidgetDockPatternBase.prototype._$4a = function (_$mS, _$mO) {
    var _$8G = false;
    if (_$mS == null) return false;
    if (_$mS._$od != null) _$8G = this._$4a(_$mS._$od, _$mO);
    if (_$8G) return true;
    if (_$mS._$pr != null) _$8G = this._$4a(_$mS._$pr, _$mO);
    if (_$8G) return true;
    if (!_$mO._$S() && _$mS._$of == _$mO && _$mO != null) {
        _$mS._$of = null;
        _$mS._$sl = _$mO.getTitle();
        _$mS.prc = new Rect();
        _$mS.prc.left = _$mO._$lt.x;
        _$mS.prc.top = _$mO._$lt.y;
        _$mS.prc.right = _$mO._$lt.x + _$mO._$lK.cx;
        _$mS.prc.bottom = _$mO._$lt.y + _$mO._$lK.cy;
        _$mS._$e8 = _$mO._$ls.x;
        _$mS._$eb = _$mO._$ls.y;
        _$mS._$fG = _$mO._$k6;
        _$mS._$aS = 0;
        _$mS._$aS |= _$mO._$kc << 12;
        if (_$mO._$id) _$mS._$aS |= WidgetDockFloatPanel._$B;
        if (_$mO._$iv) _$mS._$aS |= WidgetDockFloatPanel._$2T;
        var b = _$mO._$iR;
        _$mS._$90 = false;
        if (b) {
            _$mS._$pl = true;
            if (_$mO._$ir) {
                _$mS._$90 = true;
            }
        } else {
            _$mS._$pl = false;
            if (_$mO._$kB == null) {
                _$mS._$90 = true;
            }
        }
        _$mS._$8y = true;
        return true;
    } else if (_$mO._$S()) {
        if (_$mS._$l1 != null) {
            var _$e1 = _$mS._$l1.length;
            var i;
            for (i = 0; i < _$e1; i++) {
                var _$ol = _$mS._$l1.get(i);
                if (_$ol._$mO != null && _$ol._$mO == _$mO) {
                    _$ol._$mO = null;
                    _$ol._$qY = _$mO.getTitle();
                    _$ol._$pA = _$mO._$lt;
                    _$ol._$rM = _$mO._$lK.cx;
                    _$ol._$rN = _$mO._$lK.cy;
                    _$ol._$aP = WidgetDockFloatPanel._$1D;
                    if (_$mO._$kB == this) _$ol._$aP |= WidgetDockFloatPanel._$1A;
                    if (_$mO._$k0 == WidgetDockFloatPanel._$6W) {
                        _$ol._$aP |= WidgetDockFloatPanel._$1C;
                        _$ol._$aP &= ~WidgetDockFloatPanel._$1D;
                    }
                    _$ol._$aP |= _$mO._$kc << 12;
                    if (_$mO._$id) _$ol._$aP |= WidgetDockFloatPanel._$B;
                    if (_$mO._$kj < 0) _$mO._$kj = 0;
                    _$ol._$aP |= _$mO._$kj << 7;
                    if (_$mO._$iv) _$ol._$aP |= WidgetDockFloatPanel._$2T;
                    if (_$mO._$k0 != WidgetDockFloatPanel._$4C) _$ol._$aP |= WidgetDockFloatPanel._$2U;
                    return true;
                }
            }
        } else {
            if (_$mS._$of == _$mO && _$mO != null) {
                var _$aS = WidgetDockFloatPanel._$1D;
                if (_$mO._$kB == this) _$aS |= WidgetDockFloatPanel._$1A;
                if (_$mO._$k0 == WidgetDockFloatPanel._$6W) {
                    _$aS |= WidgetDockFloatPanel._$1C;
                    _$aS &= ~WidgetDockFloatPanel._$1D;
                }
                if (_$mO._$iv) {
                    _$aS |= WidgetDockFloatPanel._$2T;
                }
                _$aS |= _$mO._$kc << 12;
                if (_$mO._$id) _$aS |= WidgetDockFloatPanel._$B;
                if (_$mO._$kj < 0) _$mO._$kj = 0;
                _$aS |= _$mO._$kj << 7;
                if (_$mO._$k0 != WidgetDockFloatPanel._$4C) _$aS |= WidgetDockFloatPanel._$2U;
                _$mS._$e(_$mO._$c3(), _$aS, _$mO._$lt, _$mO._$lK.cx, _$mO._$lK.cy);
                return true;
            }
        }
    }
    return false;
};

WidgetDockPatternBase.prototype.addFixedPanelWithType = function (type, element, left, top, width, height) {
    this._elementWithType[type] = element;
    WidgetDockElementController.addFixedPanel(element, left, top, width, height);
    this._$5z();
};
WidgetDockPatternBase.prototype._$01 = function () {
};
WidgetDockPatternBase._$pq = function (_$mO) {
};
WidgetDockPatternBase.prototype._$6E = function (_$9f, _$cB, _$cQ, _$d8) {
    _$cQ[0] = 0;
    _$d8[0] = 0;
    {
        var _$e6 = _$cB;
        var _$pU;
        var _$dM;
        var _$e1;
        var _$9l = _$9f;
        while (_$e6 != 0) {
            _$e1 = this._patternPositionList[_$9l]._patternSub.getPanelNum();
            var j;
            for (j = _$e1 - 1; j >= 0; j--) {
                _$pU = this._patternPositionList[_$9l]._patternSub._panelList[j];
                if (_$9l == WidgetDockPatternBase._$3k || _$9l == WidgetDockPatternBase._$3l) _$dM = _$pU.rect.right - _$pU.rect.left - 2 * widgetDockPanel._$kt; else _$dM = _$pU.rect.bottom - _$pU.rect.top - 2 * widgetDockPanel._$kt;
                if (_$pU._$iX && _$pU._$k9 == 0 && (_$dM != 0)) {
                    if (_$cB > 0) {
                        if (_$dM > _$e6) _$dM = _$e6;
                    } else {
                        if (_$dM >= -_$e6) _$dM = -_$e6;
                        _$dM = -_$dM;
                    }
                    _$e6 -= _$dM;
                    this._$k(_$pU, _$dM);
                    if (_$9l == WidgetDockPatternBase._$3l || _$9l == WidgetDockPatternBase._$3j) _$d8[0] += _$dM; else _$cQ[0] += _$dM;
                }
                if (_$e6 == 0) break;
            }
            if (_$9l == WidgetDockPatternBase._$3l || _$9l == WidgetDockPatternBase._$3j) break;
            _$9l += 2;
            _$cB = -_$e6;
            _$e6 = _$cB;
        }
    }
};
WidgetDockPatternBase.prototype.setSize = function (iw, ih) {
    this.width = iw;
    this.height = ih;
};
WidgetDockPatternBase.prototype._$mB = function (iw, ih) {
    var width, height;
    height = ih;
    width = iw;
    if ((this.width == 0) && (this.height == 0)) {
        this.width = width;
        this.height = height;
        return 1;
    }
    if (this.width != width) {
        this._$4n(WidgetDockPatternBase._$3l, 0, this.width - width);
        this._$6x(WidgetDockPatternBase._$3m, -32767, 32767);
        this._$6x(WidgetDockPatternBase._$3j, -32767, 32767);
    }
    if (this.height != height) {
        this._$4n(WidgetDockPatternBase._$3j, 0, this.height - height);
        this._$6x(WidgetDockPatternBase._$3k, -32767, 32767);
        this._$6x(WidgetDockPatternBase._$3l, -32767, 32767);
    }
    var _$qu = new Rect();
    _$qu.left = this._$2K(WidgetDockPatternBase._$3k, WidgetDockPatternBase._$5k);
    _$qu.top = this._$2K(WidgetDockPatternBase._$3m, WidgetDockPatternBase._$s);
    _$qu.right = this._$2K(WidgetDockPatternBase._$3l, WidgetDockPatternBase._$3S);
    _$qu.bottom = this._$2K(WidgetDockPatternBase._$3j, WidgetDockPatternBase._$6M);
    var _$ev = new Array(1);
    var _$fM = new Array(1);
    if (_$qu.right < _$qu.left) {
        this._$6E(WidgetDockPatternBase._$3k, _$qu.right - _$qu.left, _$ev, _$fM);
        _$qu.left += _$ev[0];
        _$qu.right += _$fM[0];
    }
    if (_$qu.bottom < _$qu.top) {
        this._$6E(WidgetDockPatternBase._$3m, _$qu.bottom - _$qu.top, _$ev, _$fM);
        _$qu.top += _$ev[0];
        _$qu.bottom += _$fM[0];
    }
    this.width = width;
    this.height = height;
    this._$lz.setRect(_$qu);
    if (this._elementWithCenter != null) {
        var _$sY = this._elementWithCenter;
        WidgetDockElementController.addFixedPanel(_$sY, _$qu.left, _$qu.top, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top);
    }
    return 1;
};
WidgetDockPatternBase.prototype._$72 = function (_$mS) {
    if (!_$mS._$8y) {
        while (_$mS != null) {
            _$mS._$8y = false;
            _$mS = _$mS._$oV;
        }
    }
};
WidgetDockPatternBase.prototype._$2F = function (_$cD, _$nx) {
    var _$e1 = this._patternPositionList[_$cD]._patternSub.getPanelNum();
    var _$ps;
    var i;
    for (i = 0; i < _$e1; i++) {
        _$ps = this._patternPositionList[_$cD]._patternSub._panelList[i];
        if (_$ps == _$nx) {
            return i;
        }
    }
    return 0xffffffff;
};
WidgetDockPatternBase.prototype._$5H = function (_$n5, _$ng) {
    if (!this._$ii && !this._$it) {
        _$n5._$ir = false;
        if (_$ng != null) {
            _$n5._$d(_$ng);
        }
        _$01();
        _$n5._$kB = null;
        return;
    }
    if (_$n5._$jr < 0) return;
    if (this._patternPositionList[_$n5._$j0]._patternSub.getPanelNum() < 1) return;
    var _$ps = this._patternPositionList[_$n5._$j0]._patternSub._panelList[_$n5._$jr];
    if (_$n5._$kA._$8y) return;
    var _$qs = new Rect();
    var _$qu = new Rect();
    _$ps._$2B(_$n5, _$qu);
    var _$8V = false;
    var _$oV = _$n5._$kA._$oV;
    var pme = _$n5._$kA;
    var _$pu;
    var _$9h = _$ps._$5K(_$n5);
    if (!_$9h) {
        _$n5._$kA._$8y = true;
        _$8V = _$ps._$f(this, _$n5._$kA, _$qu);
    }
    if (_$8V && (_$qu.left != _$qu.right || _$qu.top != _$qu.bottom)) {
        _$ps._$qI();
        var _$9y;
        var _$dt;
        if (_$n5._$j0 == WidgetDockPatternBase._$3k || _$n5._$j0 == WidgetDockPatternBase._$3l) {
            _$dt = WidgetDockPatternBase._$2A(_$qu);
            _$9y = WidgetDockPatternBase._$3m;
        } else {
            _$dt = WidgetDockPatternBase._$2z(_$qu);
            _$9y = WidgetDockPatternBase._$3k;
            _$qu.top = _$qu.left;
            _$qu.bottom = _$qu.right;
        }
        this._$4n(_$n5._$j0, _$n5._$jr + 1, -(_$dt + _$ps._$cf()));
        if (_$n5._$j0 == WidgetDockPatternBase._$3l || _$n5._$j0 == WidgetDockPatternBase._$3j) _$dt += _$ps._$cf(); else _$dt = -(_$dt + _$ps._$cf());
        this._$6x(_$9y, _$qu.top, _$qu.bottom);
        this._$6x((_$9y + 2), _$qu.top, _$qu.bottom);
        this._$h();
    }
    if (_$ng == this || (_$ng != null && !_$ng._$ii && !this._$ii)) {
        this._$53(_$n5);
    } else _$n5._$qG();
    if (!this._$ii) {
        _$n5._$ir = false;
        if (_$ng != null) {
            _$n5._$d(_$ng);
        }
        this._$l(_$n5);
        this._$01();
        return;
    }
};
WidgetDockPatternBase.prototype._$55 = function (_$mS, _$n5, _$sg, _$99, _$dg) {
    if (_$dg < 0) return;
    var _$st = _$mS;
    if (_$st == null) return;
    var _$pj = this._patternPositionList[_$99]._patternSub._panelList[_$dg];
    var _$gs;
    if (_$n5 != null) _$gs = _$mS._$56(_$n5); else _$gs = _$mS._$56(_$sg);
    if (_$gs > 0) {
        if (_$n5 != null) _$n5._$kA = null;
        return;
    }
    var _$93 = _$pj._$53(_$st);
    if (_$n5 != null) _$n5._$kA = null;
    if (_$93) {
        if (_$n5 != null && _$sg == null) {
            if (_$n5._$j0 == _$n5._$lf._$j1 && _$n5._$jr < _$n5._$lf._$ka && _$n5._$lf._$ka != -1 && _$n5._$lf._$ka != 0xffffffff) {
                _$n5._$lf._$ka -= 1;
            }
        }
        var _$pU;
        this._patternPositionList[_$99]._patternSub._panelList[_$dg]._$kI = null;
        this._patternPositionList[_$99]._patternSub.deletePanel(_$dg);
        var i;
        for (i = _$dg; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[_$99]._patternSub._panelList[i];
            var pb = _$pU._$kI;
            this._$6m(pb, i);
        }
        var _$oF;
        if (_$dg == 0) _$oF = null; else _$oF = this._patternPositionList[_$99]._patternSub._panelList[_$dg - 1];
        if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) {
            this._$5L(WidgetDockPatternBase._$3m, _$pj, _$oF);
            this._$5L(WidgetDockPatternBase._$3j, _$pj, _$oF);
        } else {
            this._$5L(WidgetDockPatternBase._$3k, _$pj, _$oF);
            this._$5L(WidgetDockPatternBase._$3l, _$pj, _$oF);
        }
    }
};
WidgetDockPatternBase.prototype._$54 = function (_$mS, _$99, _$9e) {
    var _$nQ = _$mS._$of;
    var _$pj = this._patternPositionList[_$99]._patternSub._panelList[_$9e];
    _$mS._$56(null);
    _$nQ._$kA = _$mS;
    _$53(_$nQ);
};
WidgetDockPatternBase.prototype._$53 = function (_$n5) {
    this._$55(_$n5._$kA, _$n5, null, _$n5._$j0, _$n5._$jr);
};
WidgetDockPatternBase.prototype._$6m = function (_$mS, _$cN) {
    if (_$mS == null) return;
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) this._$6m(_$mS._$od, _$cN);
        if (_$mS._$pr != null) this._$6m(_$mS._$pr, _$cN);
        return;
    }
    if (_$mS._$of != null) {
        if (_$mS._$of._$kB == this) _$mS._$of._$jr = _$cN; else if (_$mS._$of._$l7 == this) _$mS._$of._$k4 = _$cN;
    }
    _$mS._$6m(_$cN, this);
};
WidgetDockPatternBase.prototype._$5L = function (_$99, _$n0, _$nk) {
    var _$ps;
    var i;
    for (i = 0; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        if (_$ps._$kR == _$n0) _$ps._$kR = _$nk;
        if (_$ps._$l8 == _$n0) _$ps._$l8 = _$nk;
    }
};
WidgetDockPatternBase.prototype._$2j = function (_$99) {
    var _$eY = this._patternPositionList[_$99]._patternSub.getPanelNum();
    if (_$eY == 0) return null; else return this._patternPositionList[_$99]._patternSub._panelList[_$eY - 1];
};
WidgetDockPatternBase.prototype._$19 = function (_$mS, _$99, _$9e) {
    var _$ps = null;
    var _$8T = false;
    var _$nm = null;
    var _$qu = new Rect();
    var _$8U = true;
    if (_$mS._$oV == null) {
        _$ps = new widgetDockPanel();
        if (_$9e != 0xffffffff) {
            _$8T = true;
            if (_$9e > 0) {
                _$nm = this._patternPositionList[_$99]._patternSub._panelList[_$9e - 1];
                _$ps._$kR = _$nm._$kR;
                _$ps._$l8 = _$nm._$l8;
            } else {
                _$ps._$kR = null;
                _$ps._$l8 = null;
            }
        } else {
            if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) {
                _$ps._$kR = this._$2j(WidgetDockPatternBase._$3m);
                _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3j);
            } else {
                _$ps._$kR = this._$2j(WidgetDockPatternBase._$3k);
                _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3l);
            }
            _$9e = this._patternPositionList[_$99]._patternSub.getPanelNum();
        }
        _$ps._$kI = _$mS;
        _$ps._$ah(this, _$99);
        WidgetDockPatternBase.resetRect(_$qu);
        this._patternPositionList[_$99]._patternSub._$4(_$ps, _$9e);
        this._$6m(_$mS, _$9e);
        var _$pU;
        var i;
        for (i = _$9e + 1; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[_$99]._patternSub._panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        this._$6m(_$mS, _$9e);
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[_$9e];
        if (_$ps._$05()) {
            _$ps._$ah(this, _$99);
            WidgetDockPatternBase.resetRect(_$qu);
        } else {
            _$8U = false;
        }
        _$mS._$8y = false;
        this._$72(_$mS);
        if (!_$8U) {
            _$ps._$6(this, _$mS);
        }
    }
    if (_$8T) {
        if (_$99 == WidgetDockPatternBase._$3j) {
            this._$W(WidgetDockPatternBase._$3k, _$ps, _$nm, false);
            this._$W(WidgetDockPatternBase._$3l, _$ps, _$nm, false);
        } else if (_$99 == WidgetDockPatternBase._$3m) {
            this._$W(WidgetDockPatternBase._$3k, _$ps, _$nm, true);
            this._$W(WidgetDockPatternBase._$3l, _$ps, _$nm, true);
        } else if (_$99 == WidgetDockPatternBase._$3k) {
            this._$W(WidgetDockPatternBase._$3m, _$ps, _$nm, true);
            this._$W(WidgetDockPatternBase._$3j, _$ps, _$nm, true);
        } else {
            this._$W(WidgetDockPatternBase._$3m, _$ps, _$nm, false);
            this._$W(WidgetDockPatternBase._$3j, _$ps, _$nm, false);
        }
    }
    if (_$8U) {
        var iw, ih;
        if ((_$ps.rect.left != _$ps.rect.right) && (_$ps.rect.left >= 0)) {
            iw = _$ps.rect.right - _$ps.rect.left;
            ih = _$ps.rect.bottom - _$ps.rect.top;
        } else {
            iw = WidgetDockFloatPanel._$lL.cx;
            ih = WidgetDockFloatPanel._$lL.cy;
        }
        this._$4m(_$ps, _$99, _$9e, true, iw, ih, _$mS, true);
    }
};
WidgetDockPatternBase.prototype._$4m = function (_$ps, _$99, _$9e, _$7Q, _$d2, _$d0, _$mS, _$83) {
    {
        var rcWindow = new Rect();
        this.getWindowRect(rcWindow);
        var ilt, irb;
        var ior;
        var _$oB = null;
        var _$ey, _$eB;
        var _$gj = _$ps._$cf();
        var _$qu = new Rect();
        var _$qt = new Rect();
        _$qu.left = _$qu.top = 0;
        if (_$83) {
            _$qu.right = _$d2;
            _$qu.bottom = _$d0;
        } else {
            _$qu.right = _$ps.rect.right - _$ps.rect.left;
            _$qu.bottom = _$ps.rect.bottom - _$ps.rect.top;
        }
        var _$9t = true;
        if ((_$99 == WidgetDockPatternBase._$3k) || (_$99 == WidgetDockPatternBase._$3l)) _$9t = false;
        var _$9r;
        var _$gK, _$el, _$dt;
        if (_$83 && _$ps != null && (_$ps instanceof _$6R) && !(_$ps instanceof _$58)) {
            if ((_$9e - 1) >= 0) _$oB = this._patternPositionList[_$99]._patternSub._panelList[_$9e - 1];
            ior = this._$2I(_$99, _$oB);
            if (!_$9t) _$9r = WidgetDockPatternBase._$3m; else _$9r = WidgetDockPatternBase._$3k;
            ilt = this._$2I(_$9r, _$ps._$kR);
            irb = this._$2I((_$9r + 2), _$ps._$l8);
            if (!_$9t) {
                _$ey = rcWindow.top + ilt;
                _$eB = rcWindow.bottom - irb;
                _$el = _$eB - _$ey;
                _$qu.top = _$ey;
                _$gK = 0;
                if (_$99 == WidgetDockPatternBase._$3k) {
                    _$qu.left = ior;
                } else {
                    _$qu.left = rcWindow.right - ior - _$gK;
                }
                _$qu.right = _$qu.left;
                _$qu.bottom = _$qu.top + _$el;
            } else {
                _$ey = rcWindow.left + ilt;
                _$eB = rcWindow.right - irb;
                _$gK = _$eB - _$ey;
                _$el = 0;
                _$qu.left = _$ey;
                if (_$99 == WidgetDockPatternBase._$3m) {
                    _$qu.top = ior;
                } else {
                    _$qu.top = rcWindow.bottom - ior - _$el;
                }
                _$qu.bottom = _$qu.top;
                _$qu.right = _$qu.left + _$gK;
            }
            _$ps._$iX = true;
            _$ps._$qy(_$mS._$of, _$qu);
            return;
        }
        if (this._$lz.right == -4000 && this._$lz.left == -4000) {
            this.getWindowRect(this._$lz);
            this.width = this._$lz.right - this._$lz.left;
            this.height = this._$lz.bottom - this._$lz.top;
        }
        var _$fJ;
        var _$ev = new Array(1);
        var _$fM = new Array(1);
        if ((_$99 == WidgetDockPatternBase._$3k) || (_$99 == WidgetDockPatternBase._$3l)) {
            _$fJ = this._$lz.right - this._$lz.left - (_$qu.right + _$ps._$cf());
            if (_$fJ < 0) {
                if (_$7Q) {
                    _$fJ += _$qu.right;
                    if (_$fJ < 0) _$fJ = 0;
                    _$qu.right = _$fJ;
                    _$fJ = this._$lz.right - this._$lz.left - (_$qu.right + _$ps._$cf());
                }
                if (_$fJ < 0) {
                    this._$6E(WidgetDockPatternBase._$3k, _$fJ, _$ev, _$fM);
                }
            }
        } else {
            _$fJ = this._$lz.bottom - this._$lz.top - (_$qu.bottom + _$ps._$cf());
            if (_$fJ < 0) {
                if (_$7Q) {
                    _$fJ += _$qu.bottom;
                    if (_$fJ < 0) _$fJ = 0;
                    _$qu.bottom = _$fJ;
                    _$fJ = this._$lz.bottom - this._$lz.top - (_$qu.bottom + _$ps._$cf());
                }
                if (_$fJ < 0) {
                    this._$6E(_$3m, _$fJ, _$ev, _$fM);
                }
            }
        }
        if ((_$9e - 1) >= 0) _$oB = this._patternPositionList[_$99]._patternSub._panelList[_$9e - 1];
        ior = this._$2I(_$99, _$oB);
        if (!_$9t) _$9r = WidgetDockPatternBase._$3m; else _$9r = WidgetDockPatternBase._$3k;
        ilt = this._$2I(_$9r, _$ps._$kR);
        irb = this._$2I((_$9r + 2), _$ps._$l8);
        if (!_$9t) {
            _$ey = rcWindow.top + ilt;
            _$eB = rcWindow.bottom - irb;
            _$el = _$eB - _$ey;
            _$qu.top = _$ey;
            _$qt.top = _$ey;
            _$qt.bottom = _$qt.top + _$el;
            _$gK = WidgetDockPatternBase._$2A(_$qu);
            if (_$83) _$dt = _$gK + _$gj; else _$dt = _$d2 + _$gj;
            if (_$99 == WidgetDockPatternBase._$3k) {
                _$qu.left = ior;
                _$qt.left = ior + _$gK;
            } else {
                _$qu.left = rcWindow.right - ior - _$gK;
                _$qt.left = rcWindow.right - ior - _$gK - _$gj;
            }
            _$qt.right = _$qt.left + _$gj;
        } else {
            _$ey = rcWindow.left + ilt;
            _$eB = rcWindow.right - irb;
            _$gK = _$eB - _$ey;
            _$el = WidgetDockPatternBase._$2z(_$qu);
            _$qu.left = _$ey;
            _$qt.left = _$ey;
            _$qt.right = _$qt.left + _$gK;
            if (_$83) _$dt = _$el + _$gj; else _$dt = _$d0 + _$gj;
            if (_$99 == WidgetDockPatternBase._$3m) {
                _$qu.top = ior;
                _$qt.top = ior + _$el;
            } else {
                _$qu.top = rcWindow.bottom - ior - _$el;
                _$qt.top = rcWindow.bottom - ior - _$el - _$gj;
            }
            _$qt.bottom = _$qt.top + _$gj;
        }
        _$qu.right = _$qu.left + _$gK;
        _$qu.bottom = _$qu.top + _$el;
        if (_$mS != null) {
            if (_$mS._$of != null) {
                _$ps._$qy(_$mS._$of, _$qu);
            } else {
                this._$6v(_$mS, _$qu, WidgetDockPatternBase._$3m);
                this._$6v(_$mS, _$qu, WidgetDockPatternBase._$3k);
            }
        } else if (_$83) {
            _$ps._$qy(null, _$qu);
        }
        if (_$83) {
            _$ps.rect.setRect(_$qu);
            _$ps._$iX = true;
        }
        if (_$ps._$le != null) {
            _$ps._$le._$6q(_$qt);
        }
        this._$4n(_$99, _$9e + 1, _$dt);
        var _$9y;
        if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) _$9y = WidgetDockPatternBase._$3m; else _$9y = WidgetDockPatternBase._$3k;
        this._$6x(_$9y, _$ey, _$eB);
        this._$6x((_$9y + 2), _$ey, _$eB);
        this._$h();
    }
};
WidgetDockPatternBase.prototype._$6O = function (_$n5) {
    var _$ps;
    if (_$n5._$kA != null || _$n5._$jr != 0xffffffff) return;
    var _$gl = _$n5._$j0;
    var _$o6 = new _$F();
    _$n5._$kA = _$o6;
    _$o6._$8y = false;
    _$o6._$of = _$n5;
    _$ps = _$n5._$ag(null);
    if (_$gl == WidgetDockPatternBase._$3k || _$gl == WidgetDockPatternBase._$3l) {
        _$ps._$kR = this._$2j(WidgetDockPatternBase._$3m);
        _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3j);
    } else {
        _$ps._$kR = this._$2j(WidgetDockPatternBase._$3k);
        _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3l);
    }
    _$ps.rect.left = _$ps.rect.top = 0;
    _$ps.rect.right = _$n5._$lJ.cx;
    _$ps.rect.bottom = _$n5._$lJ.cy;
    _$n5._$jr = this._patternPositionList[_$gl]._patternSub.getPanelNum();
    _$ps._$kI = _$o6;
    this._patternPositionList[_$gl]._patternSub._$4(_$ps, _$n5._$jr);
    var _$pU;
    var i;
    for (i = _$n5._$jr + 1; i < this._patternPositionList[_$gl]._patternSub.getPanelNum(); i++) {
        _$pU = this._patternPositionList[_$gl]._patternSub._panelList[i];
        _$6m(_$pU._$kI, i);
    }
};
WidgetDockPatternBase.prototype._$18 = function (_$n5, _$oP) {
    var _$gl = _$n5._$j0;
    var _$8U = true;
    var _$qu = new Rect();
    var _$ps;
    var _$8T = false;
    var _$nm = null;
    if (_$n5._$kA == null) {
        var _$o6 = new _$F();
        _$n5._$kA = _$o6;
        _$o6._$8y = false;
        _$o6._$of = _$n5;
        _$ps = _$n5._$ag(this);
        if (_$oP != null) _$oP[0] = _$ps;
        if (_$n5._$jr != 0xffffffff) {
            _$8T = true;
            if (_$n5._$jr > 0) {
                _$nm = this._patternPositionList[_$gl]._patternSub._panelList[_$n5._$jr - 1];
                _$ps._$kR = _$nm._$kR;
                _$ps._$l8 = _$nm._$l8;
            } else {
                _$ps._$kR = null;
                _$ps._$l8 = null;
            }
        } else {
            if (_$gl == WidgetDockPatternBase._$3k || _$gl == WidgetDockPatternBase._$3l) {
                _$ps._$kR = this._$2j(WidgetDockPatternBase._$3m);
                _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3j);
            } else {
                _$ps._$kR = this._$2j(WidgetDockPatternBase._$3k);
                _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3l);
            }
            _$n5._$jr = this._patternPositionList[_$gl]._patternSub.getPanelNum();
        }
        _$ps._$kI = _$o6;
        _$ps._$ah(this, _$n5._$j0);
        WidgetDockPatternBase.resetRect(_$qu);
        this._patternPositionList[_$gl]._patternSub._$4(_$ps, _$n5._$jr);
        var _$pU;
        var i;
        for (i = _$n5._$jr + 1; i < this._patternPositionList[_$gl]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[_$gl]._patternSub._panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        if (_$n5._$kA._$20() == true) {
            _$n5._$kA._$2(_$n5);
            return;
        }
        _$n5._$kA._$of = _$n5;
        _$ps = this._patternPositionList[_$gl]._patternSub._panelList[_$n5._$jr];
        if (_$ps._$05()) {
            _$ps._$ah(this, _$n5._$j0);
            WidgetDockPatternBase.resetRect(_$qu);
        } else {
            _$8U = false;
        }
        _$n5._$kA._$8y = false;
        this._$72(_$n5._$kA);
        if (!_$8U) {
            _$ps._$7(this, _$n5);
        }
    }
    if (_$8T) {
        if (_$gl == WidgetDockPatternBase._$3j) {
            this._$W(WidgetDockPatternBase._$3k, _$ps, _$nm, false);
            this._$W(WidgetDockPatternBase._$3l, _$ps, _$nm, false);
        } else if (_$gl == WidgetDockPatternBase._$3m) {
            this._$W(WidgetDockPatternBase._$3k, _$ps, _$nm, true);
            this._$W(WidgetDockPatternBase._$3l, _$ps, _$nm, true);
        } else if (_$gl == WidgetDockPatternBase._$3k) {
            this._$W(WidgetDockPatternBase._$3m, _$ps, _$nm, true);
            this._$W(WidgetDockPatternBase._$3j, _$ps, _$nm, true);
        } else {
            this._$W(WidgetDockPatternBase._$3m, _$ps, _$nm, false);
            this._$W(WidgetDockPatternBase._$3j, _$ps, _$nm, false);
        }
    }
    if (_$8U) {
        _$qu.left = _$qu.top = 0;
        var _$8I = false;
        if (_$n5._$S()) {
            if ((_$ps.rect.left != _$ps.rect.right) && (_$ps.rect.left >= 0)) {
                _$qu.right = _$ps.rect.right - _$ps.rect.left;
                _$qu.bottom = _$ps.rect.bottom - _$ps.rect.top;
            } else {
                _$qu.right = _$n5._$lJ.cx;
                _$qu.bottom = _$n5._$lJ.cy;
            }
            _$8I = true;
        } else {
            _$qu.right = _$n5._$lJ.cx;
            _$qu.bottom = _$n5._$lJ.cy;
        }
        if (_$qu.right <= _$qu.left) _$qu.right = _$qu.left + 20;
        if (_$qu.bottom <= _$qu.top) _$qu.bottom = _$qu.top + 20;
        this._$4m(_$ps, _$gl, _$n5._$jr, _$8I, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top, _$n5._$kA, true);
        if (this._$ii) {
            this._$5A(_$n5._$j0);
        }
    }
};
WidgetDockPatternBase.prototype._$W = function (_$99, _$ni, _$nm, _$81) {
    var s;
    for (s = 0; s < this._patternPositionList[_$99]._patternSub.getPanelNum(); s++) {
        var _$pU = this._patternPositionList[_$99]._patternSub._panelList[s];
        if (_$81 && _$pU._$kR == _$nm) {
            _$pU._$kR = _$ni;
        } else if (!_$81 && _$pU._$l8 == _$nm) {
            _$pU._$l8 = _$ni;
        }
    }
};
WidgetDockPatternBase.prototype._$0c = function (_$88) {
    if (!this._$iZ) return;
    if (this._$hA == null) {
        var _$t5 = "div";
        if (WidgetDockController._isHasCanvasContext) _$t5 = "canvas";
        this._$hA = WidgetDockElementController._$0z(_$t5, WidgetDockController._elementRootId);
        this._$hA.style.border = "0px solid";
        this._$hA.style.zIndex = 7890;
    }
    if (_$88) {
        var _$qu = this._$lz;
        this._$hA.style.visibility = "visible";
        WidgetDockElementController.addFixedPanel(this._$hA, _$qu.left, _$qu.top, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top);
    } else {
        this._$hA.style.visibility = "hidden";
    }
};
WidgetDockPatternBase.prototype._$h = function () {
    var rc = new Rect();
    rc.left = this._$2K(WidgetDockPatternBase._$3k, WidgetDockPatternBase._$5k);
    rc.top = this._$2K(WidgetDockPatternBase._$3m, WidgetDockPatternBase._$s);
    rc.right = this._$2K(WidgetDockPatternBase._$3l, WidgetDockPatternBase._$3S);
    rc.bottom = this._$2K(WidgetDockPatternBase._$3j, WidgetDockPatternBase._$6M);
    this._$lz.setRect(rc);
    if (this._elementWithCenter != null) {
        var element = this._elementWithCenter;
        WidgetDockElementController.addFixedPanel(element, rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
    }
};
WidgetDockPatternBase.prototype._$5F = function () {
    var i;
    for (i = 0; i < 4; i++) {
        this._patternPositionList[i]._patternSub._$5R();
    }
};
WidgetDockPatternBase.prototype._$k = function (_$mV, _$cu) {
    var _$qm = new Rect();
    _$mV._$le._$25(_$qm);
    var _$9w;
    var _$ey;
    var _$eB;
    var _$9y = _$mV._$le._$j1;
    var _$g1 = this._$2F(_$9y, _$mV);
    if (_$9y == WidgetDockPatternBase._$3k || _$9y == WidgetDockPatternBase._$3l) {
        _$9w = WidgetDockPatternBase._$3m;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
    } else {
        _$9w = WidgetDockPatternBase._$3k;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
    }
    var _$q8 = new Rect();
    _$mV._$kI._$22(_$q8);
    if (_$9y == WidgetDockPatternBase._$3k) _$q8.right += _$cu; else if (_$9y == WidgetDockPatternBase._$3l) _$q8.left += _$cu; else if (_$9y == WidgetDockPatternBase._$3m) _$q8.bottom += _$cu; else _$q8.top += _$cu;
    _$mV._$le._$4q(_$cu);
    this._$6v(_$mV._$kI, _$q8, _$9y);
    _$mV._$5q();
    if (_$9y == WidgetDockPatternBase._$3l || _$9y == WidgetDockPatternBase._$3j) _$cu = -_$cu;
    this._$4n(_$9y, _$g1 + 1, _$cu);
    this._$6x(_$9w, _$ey, _$eB);
    this._$6x((_$9w + 2), _$ey, _$eB);
};
WidgetDockPatternBase.prototype._$4j = function (_$mS, _$ct, _$9c) {
    var _$qu = new Rect();
    var _$ql = new Rect();
    var plt = new Location();
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) this._$4j(_$mS._$od, _$ct, _$9c);
        if (_$mS._$pr != null) this._$4j(_$mS._$pr, _$ct, _$9c);
        if ((_$mS._$od != null) && (_$mS._$pr != null) && (!_$mS._$od._$8y) && (!_$mS._$pr._$8y)) {
            _$mS._$oy._$25(_$qu);
            plt.x = _$qu.left;
            plt.y = _$qu.top;
            if (_$9c == WidgetDockPatternBase._$3k || _$9c == WidgetDockPatternBase._$3l) {
                if (_$9c == WidgetDockPatternBase._$3k) plt.x = _$qu.left + _$ct; else plt.x = _$qu.left - _$ct;
            } else {
                plt.x = _$qu.left;
                if (_$9c == WidgetDockPatternBase._$3m) plt.y = _$qu.top + _$ct; else plt.y = _$qu.top - _$ct;
            }
            _$ql.left = plt.x;
            _$ql.top = plt.y;
            _$ql.right = plt.x + WidgetDockPatternBase._$2A(_$qu);
            _$ql.bottom = plt.y + WidgetDockPatternBase._$2z(_$qu);
            _$mS._$oy._$6q(_$ql);
        }
        return;
    }
    if (!_$mS._$8y) {
        _$mS._$of._$25(_$qu);
        plt.x = _$qu.left;
        plt.y = _$qu.top;
        if (_$mS._$of._$j0 == WidgetDockPatternBase._$3k || _$mS._$of._$j0 == WidgetDockPatternBase._$3l) {
            if (_$mS._$of._$j0 == WidgetDockPatternBase._$3k) plt.x = _$qu.left + _$ct; else plt.x = _$qu.left - _$ct;
        } else {
            plt.x = _$qu.left;
            if (_$mS._$of._$j0 == WidgetDockPatternBase._$3m) plt.y = _$qu.top + _$ct; else plt.y = _$qu.top - _$ct;
        }
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + WidgetDockPatternBase._$2A(_$qu);
        _$ql.bottom = plt.y + WidgetDockPatternBase._$2z(_$qu);
        _$mS._$of._$6q(_$ql);
    }
};
WidgetDockPatternBase.prototype._$4n = function (_$99, _$dg, _$cY) {
    var _$ps;
    var i;
    for (i = _$dg; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        _$ps._$4i(this, _$99, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$4o = function (_$99, _$dg, _$cG, _$cY) {
    var _$ps;
    var i;
    for (i = _$dg; i <= _$cG; i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        _$ps._$4i(this, _$99, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$2K = function (_$99, _$9a) {
    var _$ex;
    var rcWindow = new Rect();
    this.getWindowRect(rcWindow);
    if (_$9a == WidgetDockPatternBase._$3S) {
        _$ex = rcWindow.right - this._$jF[2];
    } else if (_$9a == WidgetDockPatternBase._$5k) {
        _$ex = rcWindow.left + this._$jF[0];
    }else if (_$9a == WidgetDockPatternBase._$6M) {
        _$ex = rcWindow.bottom - this._$jF[3];
    }else {
        _$ex = rcWindow.top + this._$jF[1];
    }
    var _$ps;
    var rc = new Rect();
    var i;
    for (i = 0; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        if (_$ps._$iX) {
            _$ps._$le._$25(rc);
            if (_$9a == WidgetDockPatternBase._$3S) _$ex = rc.left; else if (_$9a == WidgetDockPatternBase._$5k) _$ex = rc.right; else if (_$9a == WidgetDockPatternBase._$6M) {
                _$ex = rc.top;
            } else _$ex = rc.bottom;
        }
    }
    return _$ex;
};
WidgetDockPatternBase.prototype._$6v = function (_$mS, _$q1, _$9c) {
    if (_$mS == null) return;
    if ((_$mS._$od != null) || (_$mS._$pr != null)) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new Rect();
        var rc2 = new Rect();
        _$mS._$1K(pd1, pd2, rc1, rc2);
        var b1 = false;
        var b2 = false;
        if ((rc1.left != rc1.right) || (rc1.top != rc1.bottom) || (rc1.left != -6000)) b1 = true;
        if ((rc2.left != rc2.right) || (rc2.top != rc2.bottom) || (rc2.left != -6000)) b2 = true;
        var _$gD;
        var _$qt = new Rect();
        if (b1 && b2) {
            if (((_$mS._$9y % 2) == 0 && (_$9c % 2) == 0) || (((_$mS._$9y + 1) % 2) == 0 && (_$9c + 1) % 2 == 0)) {
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) _$gD = WidgetDockPatternBase._$2A(_$q1) - widgetDockPanel._$kt; else _$gD = WidgetDockPatternBase._$2z(_$q1) - widgetDockPanel._$kt;
                var id2 = (_$gD / (1 + _$mS._$br));
                var id1 = _$gD - id2;
                id1 = parseInt(id1);
                id2 = parseInt(id2);
                rc1.setRect(_$q1);
                rc2.setRect(_$q1);
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) {
                    rc1.right = rc1.left + id1;
                    rc2.left = rc2.right - id2;
                    _$qt.left = rc1.right;
                    _$qt.right = _$qt.left + widgetDockPanel._$kt;
                    _$qt.top = _$q1.top;
                    _$qt.bottom = _$q1.bottom;
                } else {
                    rc1.bottom = rc1.top + id1;
                    rc2.top = rc2.bottom - id2;
                    _$qt.top = rc1.bottom;
                    _$qt.bottom = _$qt.top + widgetDockPanel._$kt;
                    _$qt.left = _$q1.left;
                    _$qt.right = _$q1.right;
                }
                this._$6v(pd1[0], rc1, _$9c);
                this._$6v(pd2[0], rc2, _$9c);
                _$mS._$oy._$6q(_$qt);
            } else {
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) {
                    rc1.left = _$q1.left;
                    rc1.right = _$q1.right;
                    rc2.left = _$q1.left;
                    rc2.right = _$q1.right;
                    _$qt.left = _$q1.left;
                    _$qt.right = _$q1.right;
                    _$qt.top = rc1.bottom;
                    _$qt.bottom = _$qt.top + widgetDockPanel._$kt;
                } else {
                    rc1.top = _$q1.top;
                    rc1.bottom = _$q1.bottom;
                    rc2.top = _$q1.top;
                    rc2.bottom = _$q1.bottom;
                    _$qt.top = _$q1.top;
                    _$qt.bottom = _$q1.bottom;
                    _$qt.left = rc1.right;
                    _$qt.right = _$qt.left + widgetDockPanel._$kt;
                }
                if (pd1[0] != null) this._$6v(pd1[0], rc1, _$9c);
                if (pd2[0] != null) this._$6v(pd2[0], rc2, _$9c);
                if (_$mS._$oy != null) {
                    _$mS._$oy._$6q(_$qt);
                }
            }
        } else if (b1) {
            this._$6v(pd1[0], _$q1, _$9c);
        } else if (b2) {
            this._$6v(pd2[0], _$q1, _$9c);
        }
    } else {
        if (!_$mS._$8y) {
            _$mS._$of._$6q(_$q1);
        }
    }
};
WidgetDockPatternBase._$5y = function (_$cm, _$q6) {
    WidgetDockPatternBase._$6o(_$cm, null, _$q6.left, _$q6.top, WidgetDockPatternBase._$2A(_$q6), WidgetDockPatternBase._$2z(_$q6), 0);
};
WidgetDockPatternBase.prototype.getWindowRect = function (rect) {
    if (!this._$iW) {
        this._$iW = true;
    }
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
    rect.right = iw;
    rect.left = 0;
    rect.bottom = ih;
    rect.top = 0;
};
WidgetDockPatternBase.prototype._$5p = function (_$ps, _$dg, _$99, _$dX) {
    if (_$dX != 0) {
        if (_$dX > 0) {
            if (_$99 == WidgetDockPatternBase._$3m || _$99 == WidgetDockPatternBase._$3j) this._$4m(_$ps, _$99, _$dg, false, 0, _$dX, null, false); else this._$4m(_$ps, _$99, _$dg, false, _$dX, 0, null, false);
        } else {
            var _$9y;
            this._$4n(_$99, _$dg + 1, _$dX);
            var ilt, irb;
            var _$qt = new Rect();
            _$qt.setRect(_$ps.rect);
            if (_$99 == WidgetDockPatternBase._$3l || _$99 == WidgetDockPatternBase._$3k) {
                _$9y = WidgetDockPatternBase._$3m;
                ilt = _$ps.rect.top;
                irb = _$ps.rect.bottom;
                if (_$99 == WidgetDockPatternBase._$3k) {
                    _$qt.left = _$ps.rect.right;
                } else _$qt.left = _$ps.rect.left;
                _$qt.right = _$qt.left;
            } else {
                _$9y = WidgetDockPatternBase._$3k;
                ilt = _$ps.rect.left;
                irb = _$ps.rect.right;
                if (_$99 == WidgetDockPatternBase._$3m) {
                    _$qt.top = _$ps.rect.bottom;
                } else _$qt.top = _$ps.rect.top;
                _$qt.bottom = _$qt.top;
            }
            _$ps._$le._$r8(_$qt.left, _$qt.top, _$qt.right - _$qt.left, _$qt.bottom - _$qt.top);
            this._$6x(_$9y, ilt, irb);
            this._$6x((_$9y + 2), ilt, irb);
            this._$h();
        }
    }
};
WidgetDockPatternBase.prototype._$6x = function (_$99, _$cT, _$cU) {
    var _$ps;
    var _$gK, _$el;
    var rcWindow = new Rect();
    var _$qt = new Rect();
    var _$9p = 0;
    this.getWindowRect(rcWindow);
    var i;
    for (i = 0; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        var _$dX = new Array(1);
        _$dX[0] = 0;
        _$ps._$6u(this, rcWindow, _$99, _$cT, _$cU, _$dX);
        this._$5p(_$ps, i, _$99, _$dX[0]);
    }
};
WidgetDockPatternBase.prototype._$2J = function (_$99, _$cv, _$cE) {
    var _$e1 = this._patternPositionList[_$99]._patternSub.getPanelNum();
    if (_$cE == 0xffffffff || _$cE > _$e1) _$cE = _$e1;
    var _$ps;
    var ire = 0;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        if (_$ps._$iX) {
            if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) ire += WidgetDockPatternBase._$2A(_$ps.rect); else ire += WidgetDockPatternBase._$2z(_$ps.rect);
            ire += _$ps._$cf();
        }
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2I = function (_$99, _$nd) {
    var ire = this._$jF[_$99];
    if (_$nd == null) return ire;
    var _$ps;
    var i;
    for (i = 0; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        if (_$ps._$iX) {
            if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) ire += WidgetDockPatternBase._$2A(_$ps.rect); else ire += WidgetDockPatternBase._$2z(_$ps.rect);
            ire += _$ps._$le._$cf();
        }
        if (_$ps == _$nd) break;
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2d = function (_$mX, _$99, _$nx, _$nz) {
    var rcf = new Rect();
    rcf.setRect(_$nx.rect);
    if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3m) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.top;
    } else if (_$99 == WidgetDockPatternBase._$3j) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.bottom - _$nz.cy;
    } else {
        _$mX._$kn = rcf.right - _$nz.cx;
        _$mX._$kq = rcf.top;
    }
};
WidgetDockPatternBase._$2c = function (_$mX, _$q3, _$nz) {
    _$mX._$kn = _$q3.left;
    _$mX._$kq = _$q3.top;
    if (_$mX._$j1 == WidgetDockPatternBase._$3l) {
        _$mX._$kn = _$q3.right - _$nz.cx;
    } else if (_$mX._$j1 == WidgetDockPatternBase._$3j) {
        _$mX._$kq = _$q3.bottom - _$nz.cy;
    }
};
WidgetDockPatternBase.prototype._$1h = function (_$mX, _$nz, _$gK, _$el, _$qe, _$pC) {
    if (_$mX._$kx._$kB != this) return true;
    if (WidgetDockPatternBase._$5f(_$qe, _$pC) && _$mX._$it) {
        var _$qh = new Rect();
        _$mX._$kx._$hy._$2P(_$qh);
        var _$8n;
        _$8n = WidgetDockPatternBase._$5f(_$qh, _$pC);
        var _$8Q;
        _$8Q = _$mX._$kx._$kA._$3v(_$pC);
        if (_$8n || _$8Q) {
            _$mX._$ka = _$mX._$jr;
            _$mX._$ky = _$mX._$kA;
            _$mX._$j1 = _$mX._$j0;
            _$nz.cx = _$gK;
            _$nz.cy = _$el;
            WidgetDockPatternBase._$2c(_$mX, _$qe, _$nz);
            if (_$8Q) {
                _$mX._$kx._$31(_$pC);
                _$mX._$iC = true;
            }
            _$mX._$j2 = 0xff;
            return false;
        } else {
            if ((_$mX._$kx._$jy != WidgetDockFloatPanel._$0X) || (_$mX._$kx._$kA._$o5 == null) || (_$mX._$kx._$kA._$o5 != null && _$mX._$kx._$kA._$o5._$i6.length < 2)) {
                _$mX._$j1 = 0xff;
                return true;
            } else {
                _$qe.top = _$qh.bottom;
                _$qe.bottom -= _$G._$6J;
                var _$9i = WidgetDockPatternBase._$m(_$qe, _$pC);
                if (_$9i != 0xff) {
                    _$9i = parseInt((_$9i - 1) / 2);
                    _$mX._$ka = _$mX._$jr;
                    _$mX._$ky = _$mX._$kA;
                    if (_$9i == WidgetDockPatternBase._$3k || _$9i == WidgetDockPatternBase._$3l) {
                        _$nz.cx = _$mX._$kx._$lK.cx;
                        if (_$nz.cx >= (_$qe.right - _$qe.left)) _$nz.cx = _$nz.cx / 2;
                        _$nz.cy = _$qe.bottom - _$qe.top;
                    } else {
                        _$nz.cy = _$mX._$kx._$lK.cy;
                        if (_$nz.cy > (_$qe.bottom - _$qe.top)) _$nz.cy = _$nz.cy / 2;
                    }
                    if (_$9i == WidgetDockPatternBase._$3k || _$9i == WidgetDockPatternBase._$3m) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.top;
                    } else if (_$9i == WidgetDockPatternBase._$3j) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.bottom - _$nz.cy;
                    } else {
                        _$mX._$kn = _$qe.right - _$nz.cx;
                        _$mX._$kq = _$qe.top;
                    }
                    _$mX._$j1 = _$mX._$j0;
                    _$mX._$j2 = _$9i;
                    return false;
                }
            }
        }
    }
    return true;
};
WidgetDockPatternBase.prototype._$R = function (_$mX, _$mU, _$pC, _$nz) {
    if (!this._$is) return 0xff;
    var rcWindow = new Rect();
    this.getWindowRect(rcWindow);
    rcWindow.right = rcWindow.right - rcWindow.top;
    rcWindow.bottom = rcWindow.bottom - rcWindow.top;
    rcWindow.left = 0;
    rcWindow.top = 0;
    rcWindow.left += this._$jF[0];
    rcWindow.right -= this._$jF[2];
    rcWindow.top += this._$jF[1];
    rcWindow.bottom -= this._$jF[3];
    var _$qe = new Rect();
    _$qe.setRect(_$mX._$lC);
    var _$el = WidgetDockPatternBase._$2z(_$qe);
    var _$gK = WidgetDockPatternBase._$2A(_$qe);
    var _$gk = _$gK < _$el ? _$gK : _$el;
    _$mX._$iM = false;
    _$nz.cx = _$gK;
    _$nz.cy = _$el;
    if (!this._$1h(_$mX, _$nz, _$gK, _$el, _$qe, _$pC)) return _$mX._$j1;
    var _$9j = WidgetDockPatternBase._$m(rcWindow, _$pC);
    _$mX._$ka = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0;
    if ((_$9j != 0xff) && ((_$9j % 2) == 0)) {
        _$mX._$j1 = parseInt(_$9j / 2);
        _$mU._$2G(_$nz, _$gk, rcWindow, false);
        _$mX._$iM = true;
        WidgetDockPatternBase._$2c(_$mX, rcWindow, _$nz);
        return _$mX._$j1;
    }
    var _$9z;
    var _$8E = true;
    var _$o4 = null;
    var _$pP = new Array(1);
    var _$gw = 0xff;
    _$9j = 0xff;
    var _$d1 = new Array(1);
    var i;
    for (i = 0; i < 4; i++) {
        _$9z = this._$02(_$mX, i, _$pC, _$nz, _$gk, _$pP, _$d1);
        if (_$9z != 0xff) {
            if ((((_$9z + 1) % 2) == 0) || _$d1[0] >= 0) {
                _$o4 = _$pP[0];
                _$gw = i;
                _$9j = _$9z;
                if (_$d1[0] >= 0) _$mX._$ka = _$d1[0];
                break;
            } else if (_$8E) {
                _$9j = _$9z;
                _$o4 = _$pP[0];
                _$gw = i;
            }
        }
    }
    var rcs = new Rect();
    rcs.setRect(this._$lz);
    var bme = false;
    if ((_$mX._$kx != null) && (_$mX._$kx == _$o4)) {
        _$mX._$j1 = 0xff;
        bme = true;
        if (!WidgetDockPatternBase._$5f(rcs, _$pC)) return 0xff;
    }
    if (!bme && _$9j != 0xff && ((_$9j + 1) % 2 == 0)) {
        _$mX._$j1 = parseInt((_$9j / 2));
        if (_$o4 != null) _$mU._$2G(_$nz, _$gk, rcWindow, true); else {
            rcWindow.left = rcWindow.top = 0;
            rcWindow.right = _$nz.cx;
            rcWindow.bottom = _$nz.cy;
            _$mU._$2G(_$nz, _$gk, rcWindow, false);
        }
        _$mU._$67(_$gw, _$o4, parseInt((_$9j / 2)));
    } else {
        _$9j = WidgetDockPatternBase._$m(rcs, _$pC);
        if (_$9j != 0xff) {
            _$mX._$j1 = parseInt((_$9j / 2));
            _$mU._$2G(_$nz, _$gk, this._$lz, false);
        }
        if (_$9j != 0xff && ((_$9j + 1) % 2 == 0)) {
            _$mX._$ka = 0xffffffff;
            _$mX._$ky = null;
            _$mX._$j1 = parseInt((_$9j / 2));
            _$mX._$j2 = parseInt((_$9j / 2));
            WidgetDockPatternBase._$2c(_$mX, rcs, _$nz);
        } else _$mX._$j1 = 0xff;
        _$mX._$iM = true;
    }
    return _$mX._$j1;
};
WidgetDockPatternBase.prototype._$02 = function (_$mX, _$99, _$pC, _$nz, _$dk, _$oQ, _$d1) {
    if (this._patternPositionList[_$99] == null) {
        return 0xff;
    }
    var _$ps;
    var _$9m = 0xff;
    var _$9z = 0xff;
    _$oQ[0] = null;
    var _$fZ = new Array(1);
    var _$e1 = this._patternPositionList[_$99]._patternSub.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        _$d1[0] = -1;
        _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
        if (_$ps._$iX) {
            _$9z = _$ps._$03(this, _$mX, _$pC, _$nz, _$dk, _$oQ, _$fZ);
            if ((((_$9z + 1) % 2) == 0 && _$9z != 0xff) || _$fZ[0] >= 1) {
                if (_$fZ[0] == 0 || _$fZ[0] == 1) {
                    _$d1[0] = i;
                    if (_$fZ[0] == 1) {
                        this._$2d(_$mX, _$99, _$ps, _$nz);
                    }
                } else if (_$fZ[0] == 2) {
                    var j;
                    var _$8G = false;
                    for (j = i + 1; j < _$e1; j++) {
                        var _$oG = this._patternPositionList[_$99]._patternSub._panelList[j];
                        if (_$oG._$iX) {
                            _$ps = _$oG;
                            _$8G = true;
                            break;
                        }
                    }
                    if (_$8G) this._$2d(_$mX, _$99, _$ps, _$nz); else {
                        var _$ql = new Rect();
                        _$ql.setRect(_$ps.rect);
                        if (_$99 == WidgetDockPatternBase._$3m) {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.bottom;
                        } else if (_$99 == WidgetDockPatternBase._$3k) {
                            _$mX._$kn = _$ql.right;
                            _$mX._$kq = _$ql.top;
                        } else if (_$99 == WidgetDockPatternBase._$3l) {
                            _$mX._$kn = _$ql.left - _$nz.cx;
                            _$mX._$kq = _$ql.top;
                        } else {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.top - _$nz.cy;
                        }
                    }
                    _$d1[0] = i + 1;
                }
                if (_$fZ[0] > 0) {
                    _$mX._$iM = true;
                } else _$mX._$iM = false;
                return _$9z;
            }
        }
    }
    return _$9z;
};
WidgetDockPatternBase._$m = function (_$nv, _$pC) {
    var _$9j = 0xff;
    if (WidgetDockPatternBase._$5f(_$nv, _$pC)) {
        if ((_$pC.x - _$nv.left) > 0 && (_$pC.x - _$nv.left) <= WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3d; else if ((_$pC.y - _$nv.top) > 0 && (_$pC.y - _$nv.top) <= WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3h; else if ((_$pC.x - _$nv.right) < 0 && (_$pC.x - _$nv.right) >= -WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3f; else if ((_$pC.y - _$nv.bottom) < 0 && (_$pC.y - _$nv.bottom) >= -WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3b;
    } else {
        if ((_$pC.y > _$nv.top) && (_$pC.y < _$nv.bottom)) {
            if ((_$pC.x - _$nv.left) < 0 && (_$pC.x - _$nv.left) >= -WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3e; else if ((_$pC.x - _$nv.right) > 0 && (_$pC.x - _$nv.right) <= WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3g;
        } else if ((_$pC.x > _$nv.left) && (_$pC.x < _$nv.right)) {
            if ((_$pC.y - _$nv.top) < 0 && (_$pC.y - _$nv.top) >= -WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3i; else if ((_$pC.y - _$nv.bottom) > 0 && (_$pC.y - _$nv.bottom) <= WidgetDockPatternBase._$A) _$9j = WidgetDockPatternBase._$3c;
        }
    }
    return _$9j;
};
WidgetDockPatternBase.prototype._$1Z = function (_$mX, _$mT, _$pC, _$99, _$nz) {
    _$99[0] = this._$R(_$mX, _$mT, _$pC, _$nz);
    if (_$99[0] > 3 || _$99[0] < 0) return null;
    return this;
};
WidgetDockPatternBase.prototype._$1 = function (_$mN) {
    var _$8P = false;
    if (_$mN != null && _$mN._$kB != null && !_$mN._$kB._$ii && this._$lo != null && this._$lo._$kB == _$mN._$kB) _$8P = true;
    if (this._$lo != null && this._$lo != _$mN) {
        this._$lo._$r6(false, !_$8P);
    }
    _$mN._$r6(true, !_$8P);
    this._$lo = _$mN;
};
WidgetDockPatternBase.prototype._$bG = function () {
    return this._$he;
};
WidgetDockPatternBase.prototype._$bI = function () {
};
WidgetDockPatternBase.prototype._$rd = function (com) {
};
WidgetDockPatternBase.prototype.Add = function (com) {
};
WidgetDockPatternBase.prototype._$d = function (com) {
    var i = 0;
};
WidgetDockPatternBase.prototype._$5E = function (com) {
};
WidgetDockPatternBase.prototype._$2g = function () {
};
WidgetDockPatternBase._$2A = function (rc) {
    return (rc.right - rc.left);
};
WidgetDockPatternBase._$2z = function (rc) {
    return (rc.bottom - rc.top);
};
WidgetDockPatternBase._$5s = function (com, rc) {
    var pt = new Location();
    pt.x = rc.left;
    pt.y = rc.top;
    _$6a(com, pt);
    rc.left = pt.x;
    rc.top = pt.y;
    pt.x = rc.right;
    pt.y = rc.bottom;
    _$6a(com, pt);
    rc.right = pt.x;
    rc.bottom = pt.y;
};
WidgetDockPatternBase._$25 = function (com, rc) {
};
WidgetDockPatternBase._$2P = function (com, rc) {
    var i = 0;
};
WidgetDockPatternBase._$5f = function (_$qe, _$pC) {
    if ((_$pC.x > _$qe.left) && (_$pC.x < _$qe.right) && (_$pC.y > _$qe.top) && (_$pC.y < _$qe.bottom)) return true;
    return false;
};
WidgetDockPatternBase._$6o = function (com, _$qd, _$cS, _$do, _$dq, _$cM, _$cI) {
    _$cS = 0;
};
WidgetDockPatternBase._$0j = function (_$cm, pt) {
    var _$pG = _$cm._$c0();
    pt.x = pt.x + _$pG.x;
    pt.y = pt.y + _$pG.y;
};
WidgetDockPatternBase._$6a = function (_$cm, pt) {
    var _$pG = _$cm._$c0();
    pt.x = pt.x - _$pG.x;
    pt.y = pt.y - _$pG.y;
};
WidgetDockPatternBase.resetRect = function (rc) {
    rc.left = rc.right = rc.top = rc.bottom = 0;
};
WidgetDockPatternBase._$6d = function (_$ef) {
};
WidgetDockPatternBase._$5r = function (_$cr, _$qf) {
    var _$pL = _$cr._$c0();
    _$qf.left = _$qf.left + _$pL.x;
    _$qf.right = _$qf.right + _$pL.x;
    _$qf.top += _$pL.y;
    _$qf.bottom += _$pL.y;
};
WidgetDockPatternBase.prototype._$1P = function (_$mO, _$df, _$sh, mainPattern, _$cD, _$dg, _$mS, _$nr) {
    var _$ps;
    _$mS[0] = _$mS[1] = null;
    var _$eQ = new Array(1);
    var i;
    for (i = 0; i < 4; i++) {
        var _$e1 = this._patternPositionList[i]._patternSub.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            _$ps = this._patternPositionList[i]._patternSub._panelList[j];
            var _$pO = this._$1J(_$mO, _$sh, _$ps._$kI, _$eQ, _$nr);
            if (_$pO != null && _$ps._$k9 == _$df) {
                if (_$df != 0) {
                    _$cD[0] = i;
                    _$dg[0] = j;
                    _$mS[0] = _$pO;
                    mainPattern[0] = this;
                    return _$eQ[0];
                }
                if ((_$eQ[0] & WidgetDockFloatPanel._$1A) > 0) {
                    _$cD[0] = i;
                    _$dg[0] = j;
                    _$mS[0] = _$pO;
                    mainPattern[0] = this;
                } else {
                    _$cD[1] = i;
                    _$dg[1] = j;
                    _$mS[1] = _$pO;
                    mainPattern[1] = this;
                }
                this._$1O(_$mO, _$sh, _$mS, _$cD, _$dg, mainPattern, _$eQ);
                return _$eQ[0] & WidgetDockFloatPanel._$1D;
            }
        }
    }
    if (_$df != 0) return _$eQ[0] & WidgetDockFloatPanel._$1D;
    this._$1O(_$mO, _$sh, _$mS, _$cD, _$dg, mainPattern, _$eQ);
    return _$eQ[0] & WidgetDockFloatPanel._$1D;
};
WidgetDockPatternBase.prototype._$1O = function (_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX) {
    _$mO._windowParent._$1O(_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX);
};
WidgetDockPatternBase.prototype._$1J = function (_$mO, _$sh, _$mS, _$cX, _$nr) {
    if (_$mS == null) return null;
    var _$pO = null;
    if (_$mS._$od != null) _$pO = this._$1J(_$mO, _$sh, _$mS._$od, _$cX, _$nr);
    if (_$pO != null) return _$pO;
    if (_$mS._$pr != null) return this._$1J(_$mO, _$sh, _$mS._$pr, _$cX, _$nr);
    if (_$mS._$sl != null && (_$sh == _$mS._$sl)) return _$mS; else if (_$mS._$l1 != null && _$mS._$l1.length > 0) {
        var _$e1 = _$mS._$l1.length;
        var i;
        for (i = 0; i < _$e1; i++) {
            var _$rZ = _$mS._$l1[i]._$qY;
            if (_$rZ != null && (_$sh == _$rZ)) {
                var _$ol = _$mS._$l1[i];
                _$cX[0] = _$ol._$aP;
                if (_$nr != null) _$nr[0] = _$ol;
                _$ol._$mO = _$mO;
                _$ol._$qY = null;
                return _$mS;
            }
        }
    }
    return null;
};
WidgetDockPatternBase.prototype._$2e = function (_$n7, _$7L) {
    var i;
    var d;
    for (i = 0; i < 4; i++) {
        _$n7[i] = 0;
        if (this._elementWithType[i] != null) {
            if (i == 1 || i == 3) {
                d = parseInt(this._elementWithType[i].style.height);
                _$n7[i] = d;
            } else {
                _$n7[i] = parseInt(this._elementWithType[i].style.width);
            }
        }
    }
};
WidgetDockPatternBase.prototype.addFixedPanelWithCenter = function (element) {
    this._elementWithCenter = element;
    this._$h();
};
WidgetDockPatternBase.prototype._$qF = function (_$a0) {
    if (_$a0 == null) return;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._elementWithType[i] == _$a0) {
            this._elementWithType[i] = null;
            this._$5z();
            this._$h();
            return;
        }
    }
    if (this._elementWithCenter != null) {
    }
};
WidgetDockPatternBase.prototype.addFixedPanel = function (element, type) {
    if (WidgetDockController._browserType == EnumBrowserType.IE && WidgetDockController._ieVersion <= 7) {
        this._$iZ = true;
    } else if (element instanceof HTMLIFrameElement) {
        if (WidgetDockController._$06(element.id)) {
            this._$iZ = true;
        }
    }
    var left, top, width, height;
    var rcWindow = new Rect();
    this.getWindowRect(rcWindow);
    if (type == EnumPanelPositionType.Center) {
        this.addFixedPanelWithCenter(element);
        return;
    } else if (type == EnumPanelPositionType.Left) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = rcWindow.bottom - rcWindow.top - (this._$jF[1] + this._$jF[3]);
        left = 0;
        top = this._$jF[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPanelPositionType.Right) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = rcWindow.bottom - rcWindow.top - this._$jF[1] - this._$jF[3];
        left = this._$lz.right - width;
        top = this._$jF[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPanelPositionType.Top) {
        width = rcWindow.right - rcWindow.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = 0;
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPanelPositionType.Bottom) {
        width = rcWindow.right - rcWindow.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = rcWindow.bottom - rcWindow.top - height;
        this.addFixedPanelWithType(type, element, 0, top, width, height);
        if (this._elementWithType[EnumPanelPositionType.Left] != null) {
            var element = this._elementWithType[EnumPanelPositionType.Left];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController._$2k(element);
            var top = WidgetDockElementController._$2M(element);
            WidgetDockElementController.addFixedPanel(element, left, top, width, height);
        }
        if (this._elementWithType[EnumPanelPositionType.Right] != null) {
            var element = this._elementWithType[EnumPanelPositionType.Right];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController._$2k(element);
            var top = WidgetDockElementController._$2M(element);
            WidgetDockElementController.addFixedPanel(element, left, top, width, height);
        }
    }
    this._$h();
};
WidgetDockPatternBase.prototype._$5z = function () {
    var _$gG = new Array(4);
    var _$e6;
    this._$2e(_$gG, true);
    if ((_$gG[1] - this._$jF[1]) != 0 || (_$gG[0] - this._$jF[0]) != 0 || (_$gG[2] - this._$jF[2]) != 0 || (_$gG[3] - this._$jF[3]) != 0) {
        var k;
        var _$du;
        for (k = 1; k < 4; k = k + 2) {
            if (_$gG[k] - this._$jF[k] != 0) {
                _$e6 = _$gG[k] - this._$jF[k];
                _$du = _$e6 - (this._$lz.bottom - this._$lz.top);
                this._$jF[k] = _$gG[k];
                this._$4n(k, 0, _$e6);
                this._$6x(WidgetDockPatternBase._$3k, -32767, 32767);
                this._$6x(WidgetDockPatternBase._$3l, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(WidgetDockPatternBase._$3m, -_$du, _$eE, _$fA);
                }
            }
        }
        for (k = 0; k < 3; k = k + 2) {
            if ((_$gG[k] - this._$jF[k]) != 0) {
                _$e6 = _$gG[k] - this._$jF[k];
                _$du = _$e6 - (this._$lz.right - this._$lz.left);
                this._$jF[k] = _$gG[k];
                this._$4n(k, 0, _$e6);
                this._$6x(WidgetDockPatternBase._$3m, -32767, 32767);
                this._$6x(WidgetDockPatternBase._$3j, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(WidgetDockPatternBase._$3k, -_$du, _$eE, _$fA);
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$rB = function (_$mO, _$88) {
    _$mO._$rB(_$88);
};
WidgetDockPatternBase.prototype._$s8 = function (_$mO) {
    _$mO._$s8();
};
WidgetDockPatternBase.prototype._$s7 = function (_$mO) {
    _$mO._$s7();
};
WidgetDockPatternBase.prototype._$sa = function (_$mO, _$pC) {
    return _$mO._$sa(_$pC);
};
WidgetDockPatternBase.prototype._$sb = function (_$rR) {
    _$rR._$sb();
};
WidgetDockPatternBase.prototype._$s9 = function (_$rR, _$ts, _$h1) {
    return _$rR._$s9(_$ts, _$h1);
};
WidgetDockPatternBase.prototype._$41 = function (layoutController) {
    var rc;
    {
        var left, top, right, bottom;
        left = parseInt(layoutController.read());
        top = parseInt(layoutController.read());
        right = parseInt(layoutController.read());
        bottom = parseInt(layoutController.read());
        if (this._$ii) {
        } else {
            this._$40(left, top, right, bottom);
        }
        var _$gh = 1;
        if (this._$ii) {
            _$gh = 4;
        }
        var _$sj;
        var _$rV;
        var _$gI;
        var i;
        for (i = 0; i < _$gh; i++) {
            this._$lm[i]._$i0._$5R();
            var _$fV = 0;
            while (true) {
                _$sj = "SEC" + _$fV;
                _$rV = layoutController.read();
                if (_$rV == _$sj) {
                    var _$pg = new _$M();
                    _$pg._$g6 = 0;
                    this._$lm[i]._$i0._$4(_$pg, _$fV);
                    _$gI = parseInt(layoutController.read());
                    _$pg._$gK = _$gI;
                    _$gI = parseInt(layoutController.read());
                    _$pg._$el = _$gI;
                    _$gI = parseInt(layoutController.read());
                    _$pg._$eF = _$gI;
                    if (_$pg._$eF < 0) _$pg._$eF = -1;
                    _$gI = parseInt(layoutController.read());
                    _$pg._$fB = _$gI;
                    if (_$pg._$fB < 0) _$pg._$fB = -1;
                    _$pg._$kI = new _$F();
                    _$gI = parseInt(layoutController.read());
                    if (_$gI == 0) {
                        _$rV = layoutController.read();
                        if (_$rV == "ROOTBLOCK") {
                            this._$3Z(layoutController, _$pg._$kI);
                        } else break;
                    } else if (_$gI == 1 || _$gI == 2) {
                        _$rV = layoutController.read();
                        if (_$rV == "ROOTBLOCK") {
                            _$pg._$g6 = _$gI;
                            this._$42(layoutController, _$pg._$kI);
                        } else break;
                    }
                    _$fV++;
                } else break;
            }
        }
        if (this._$ii) {
            this._$78(0, 1, true, true);
            this._$78(0, 3, false, true);
            this._$78(2, 1, true, false);
            this._$78(2, 3, false, false);
        } else {
        }
        for (i = 0; i < _$gh; i++) {
            var _$ee = this._patternPositionList[i]._patternSub.getPanelNum();
            var _$gl;
            var _$8S;
            if (i == 0 || i == 2) {
                _$gl = 1;
                if (i == 0) _$8S = true; else _$8S = false;
            } else {
                _$gl = 0;
                if (i == 1) _$8S = true; else _$8S = false;
            }
            var _$pf;
            if (this._$ii) {
                var j;
                for (j = 0; j < 2; j++) {
                    var _$fH = this._$lm[_$gl + 2 * j]._$i0.getPanelNum();
                    var k;
                    for (k = 0; k < _$fH; k++) {
                        _$pf = this._$lm[_$gl + 2 * j]._$i0._panelList[k];
                        if (_$8S) _$pf._$eF = _$pf._$eF + _$ee; else _$pf._$fB = _$pf._$fB + _$ee;
                    }
                }
            }
        }
        for (i = 0; i < _$gh; i++) {
            var _$e1 = this._$lm[i]._$i0.getPanelNum();
            var _$e3 = this._patternPositionList[i]._patternSub.getPanelNum();
            var j;
            for (j = 0; j < _$e1; j++) {
                var _$pf = this._$lm[i]._$i0._panelList[j];
                _$pf._$eq = _$e3;
                var _$ps = null;
                if (_$pf._$g6 == 0) _$ps = new widgetDockPanel(); else if (_$pf._$g6 == 1) _$ps = new _$6R(); else _$ps = new _$4c();
                _$pf._$o2 = _$ps;
                _$ps.rect.left = _$ps.rect.top = 0;
                _$ps.rect.right = _$pf._$gK;
                _$ps.rect.bottom = _$pf._$el;
                _$ps._$iX = false;
                _$ps._$kI = _$pf._$kI;
                this._patternPositionList[i]._patternSub._$4(_$ps, _$e3);
                _$e3++;
            }
        }
        for (i = 0; i < _$gh; i++) {
            var _$e1 = this._$lm[i]._$i0.getPanelNum();
            var _$ou, _$p6;
            if (i == 0 || i == 2) {
                _$ou = this._patternPositionList[1];
                _$p6 = this._patternPositionList[3];
            } else {
                _$ou = this._patternPositionList[0];
                _$p6 = this._patternPositionList[2];
            }
            if (this._$ii) {
                var j;
                for (j = 0; j < _$e1; j++) {
                    var _$pf = this._$lm[i]._$i0._panelList[j];
                    if (_$pf._$eF != -1) _$pf._$o2._$kR = _$ou._patternSub._panelList[_$pf._$eF]; else _$pf._$o2._$kR = null;
                    if (_$pf._$fB != -1) _$pf._$o2._$l8 = _$p6._patternSub._panelList[_$pf._$fB]; else _$pf._$o2._$l8 = null;
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$0b = function (patternPositionPanelNumList, positionNum, floatPanelController) {
    if (floatPanelController == null) return;
    var _$dD = new Array(4);
    var i;
    for (i = 0; i < positionNum; i++) {
        _$dD[i] = this._patternPositionList[i]._patternSub.getPanelNum();
    }
    var _$fz = floatPanelController.getPanelNum();
    var nn;
    for (nn = 0; nn < _$fz; nn++) {
        var _$si = floatPanelController._panelList[nn].getTitle();
        var _$8G = false;
        for (i = 0; i < positionNum; i++) {
            if (_$8G) break;
            var s;
            for (s = patternPositionPanelNumList[i]; s < _$dD[i]; s++) {
                var pbf = this._$1N(_$si, this._patternPositionList[i]._patternSub._panelList[s]._$kI);
                if (pbf != null) {
                    _$8G = true;
                    this._$55(pbf, null, _$si, i, s);
                    _$dD[i] = this._patternPositionList[i]._patternSub.getPanelNum();
                    break;
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$1N = function (_$sh, _$mS) {
    if (_$mS == null) return null;
    var _$pO = null;
    if (_$mS._$od != null) _$pO = _$1N(_$sh, _$mS._$od);
    if (_$pO != null) return _$pO;
    if (_$mS._$pr != null) return _$1N(_$sh, _$mS._$pr);
    if (_$mS._$sl != null && _$mS._$sl.lastIndexOf(_$sh) == 0) {
        return _$mS;
    } else if (_$mS._$l1 != null && _$mS._$l1.length > 0) {
        var _$e1 = _$mS._$l1.length;
        var i;
        for (i = 0; i < _$e1; i++) {
            var _$so = _$mS._$l1[i]._$qY;
            if (_$so != null && _$so.lastIndexOf(_$sh) == 0) {
                return _$mS;
            }
        }
    }
    return null;
};
WidgetDockPatternBase.prototype._$78 = function (_$cD, _$cZ, _$81, _$84) {
    var _$py, _$oC;
    _$py = this._$lm[_$cD];
    _$oC = this._$lm[_$cZ];
    var _$e1 = _$py._$i0.getPanelNum();
    var _$eY = _$oC._$i0.getPanelNum();
    var _$eq, _$eZ;
    _$eq = 0;
    _$eZ = -1;
    var _$pt, _$oz;
    while (_$eq < _$e1) {
        var _$pf = _$py._$i0._panelList[_$eq];
        if (_$81) _$pt = _$pf._$eF; else _$pt = _$pf._$fB;
        if ((_$pt) > (_$eY - 1)) _$pt = (_$eY - 1);
        if ((_$pt) < _$eZ) _$pt = _$eZ;
        if (_$81) _$pf._$eF = _$pt; else _$pf._$fB = _$pt;
        if ((_$pt) != _$eZ) {
            var _$ei = (_$pt) - _$eZ;
            var s;
            for (s = 0; s < _$ei; s++) {
                var _$oA = _$oC._$i0._panelList[_$eZ + 1 + s];
                if (_$84) _$oz = _$oA._$eF; else _$oz = _$oA._$fB;
                _$oz = _$eq - 1;
                if (_$84) _$oA._$eF = _$oz; else _$oA._$fB = _$oz;
            }
            _$eZ = _$pt;
        } else {
            if ((_$eZ + 1) < _$eY) {
                var _$oA = _$oC._$i0._panelList[_$eZ + 1];
                if (_$84) _$oz = _$oA._$eF; else _$oz = _$oA._$fB;
                if (_$oz < _$eq) _$oz = _$eq;
                if (_$oz > (_$e1 - 1)) _$oz = _$e1 - 1;
                if (_$84) _$oA._$eF = _$oz; else _$oA._$fB = _$oz;
                var _$ei = (_$oz) - _$eq;
                var s;
                for (s = 0; s < _$ei; s++) {
                    var _$ps = _$py._$i0._panelList[_$eq + 1 + s];
                    if (_$81) _$ps._$eF = _$eZ; else _$ps._$fB = _$eZ;
                }
                _$eZ += 1;
                _$eq += _$ei;
            }
        }
        _$eq++;
    }
    var i;
    for (i = (_$eZ + 1); i < (_$eY - _$eZ - 1); i++) {
        var _$oA = _$oC._$i0._panelList[i];
        if (_$84) _$oA._$eF = _$eq - 1; else _$oA._$fB = _$eq - 1;
    }
};
WidgetDockPatternBase.prototype._$42 = function (_$na, _$mS) {
};
WidgetDockPatternBase.prototype._$3Z = function (_$na, _$mS) {
    var _$h2;
    var dw;
    _$h2 = parseInt(_$na.read());
    _$mS._$br = (_$h2 / 1000.0);
    _$mS._$8y = true;
    var _$h3 = 0;
    var _$rV = _$na.read();
    var _$nX;
    if (_$rV == "LEFTBLOCK") {
        _$h2 = 0;
        _$nX = new _$F();
        _$mS._$od = _$nX;
        _$nX._$oV = _$mS;
        this._$3Z(_$na, _$nX);
    } else {
        _$h2 = 1;
    }
    _$rV = _$na.read();
    if (_$rV == "RIGHTBLOCK") {
        _$h3 = 0;
        _$nX = new _$F();
        _$mS._$pr = _$nX;
        _$nX._$oV = _$mS;
        this._$3Z(_$na, _$nX);
    } else {
        _$h3 = 1;
    }
    if (_$h2 == 1 && _$h3 == 1) {
        this._$3X(_$na, _$mS);
    }
    _$h2 = parseInt(_$na.read());
    if ((_$h2 & 0x01) == 1) _$mS._$90 = true; else _$mS._$90 = false;
    _$mS._$9y = ((_$h2 >> 8) & 0xff);
    _$mS._$9j = ((_$h2 >> 16) & 0xff);
};
WidgetDockPatternBase.prototype._$43 = function (_$na, _$mS) {
};
WidgetDockPatternBase.prototype._$3X = function (_$na, _$mS) {
    var _$gs = parseInt(_$na.read());
    var i;
    for (i = 0; i < _$gs; i++) {
        var _$rZ = _$na.read();
        var _$aS = parseInt(_$na.read());
        var pt = new Location();
        var iX, iY;
        iX = 0;
        iY = 0;
        if (this._$ii) {
            pt.x = parseInt(_$na.read());
            pt.y = parseInt(_$na.read());
            iX = parseInt(_$na.read());
            iY = parseInt(_$na.read());
        }
        _$mS._$e(_$rZ, _$aS, pt, iX, iY);
    }
};
WidgetDockPatternBase.prototype._$4T = function (_$og) {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$au();
        WidgetDockPatternBase._$l2 = null;
    }
    WidgetDockPatternBase._$l2 = _$og;
    WidgetDockPatternBase._$k1 = 0;
};
WidgetDockPatternBase.prototype._$0a = function (e) {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$0a(e);
    }
};
WidgetDockPatternBase.prototype._$09 = function (e) {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$09(e);
    }
};
WidgetDockPatternBase.prototype._$rA = function (_$r4) {
    _$i3 = _$r4;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$lk[i] != null) this._$lk[i]._$5A();
    }
};
WidgetDockPatternBase.prototype._$8 = function (_$99, _$mO, _$7V) {
    var _$g1 = 0xFFFFFFFF;
    if (_$7V) _$g1 = 0; else if (this._$lk[_$99] == null) {
        var _$e1 = this._patternPositionList[_$99]._patternSub.getPanelNum();
        alert("Sd");
        var _$ps;
        var i;
        for (i = 0; i < _$e1; i++) {
            _$ps = this._patternPositionList[_$99]._patternSub._panelList[i];
            if (_$ps._$k9 == 0) {
                _$g1 = i;
                break;
            } else if (_$ps._$k9 == 1) {
                _$g1 = (i + 1);
                if (_$g1 == _$e1) {
                    _$g1 = 0xFFFFFFFF;
                    break;
                }
            }
        }
    }
    var _$g7 = _$58._$2V;
    if (this._$lk[_$99] != null) {
        _$g1 = this._$2F(_$99, this._$lk[_$99]);
        if (this._$lk[_$99]._$iX == false) this._$9(_$99, _$g1, _$g7);
    } else this._$9(_$99, _$g1, _$g7);
    this._$lk[_$99]._$8(_$mO);
};
WidgetDockPatternBase.prototype._$j = function (_$99) {
    var _$ps = this._$lk[_$99];
    if (_$ps == null) return;
    var ino;
    var _$oU = _$ps._$0s();
    this._$5M(_$99, null);
    ino = _$oU.length;
    var i;
    for (i = 0; i < ino; i++) {
        this._$8(_$99, _$oU[i]._$mO, true);
    }
};
WidgetDockPatternBase.prototype._$5M = function (_$99, _$mO) {
    var _$ps = this._$lk[_$99];
    if (_$ps == null) return;
    var ino = this._$lk[_$99]._$5M(_$mO);
    if (ino > 0) return;
    if (_$ps._$iX) {
        var _$qu = new Rect();
        _$ps._$2B(null, _$qu);
        _$ps._$qI();
        var _$9y;
        var _$dt;
        if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) {
            _$dt = _$qu.right - _$qu.left;
            _$9y = WidgetDockPatternBase._$3m;
        } else {
            _$dt = _$qu.bottom - _$qu.top;
            _$9y = WidgetDockPatternBase._$3k;
            _$qu.top = _$qu.left;
            _$qu.bottom = _$qu.right;
        }
        var _$e5 = this._$2F(_$99, _$ps);
        this._$4n(_$99, _$e5 + 1, -(_$dt + _$ps._$cf()));
        if (_$99 == WidgetDockPatternBase._$3l || _$99 == WidgetDockPatternBase._$3j) _$dt += _$ps._$cf(); else _$dt = -(_$dt + _$ps._$cf());
        _$ps.setVisible(false);
        this._$6x(_$9y, _$qu.top, _$qu.bottom);
        this._$6x((_$9y + 2), _$qu.top, _$qu.bottom);
        this._$h();
    }
    var _$g1 = this._$2F(_$99, _$ps);
    var _$pU;
    var _$pj = this._$lk[_$99];
    this._$lk[_$99] = null;
    this._patternPositionList[_$99]._patternSub.deletePanel(_$g1);
    var i;
    for (i = _$g1; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
        _$pU = this._patternPositionList[_$99]._patternSub._panelList[i];
        var pb = _$pU._$kI;
        this._$6m(pb, i);
    }
    var _$oF;
    if (_$g1 == 0) _$oF = null; else _$oF = this._patternPositionList[_$99]._patternSub._panelList[_$g1 - 1];
    if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) {
        this._$5L(WidgetDockPatternBase._$3m, _$pj, _$oF);
        this._$5L(WidgetDockPatternBase._$3j, _$pj, _$oF);
    } else {
        this._$5L(WidgetDockPatternBase._$3k, _$pj, _$oF);
        this._$5L(WidgetDockPatternBase._$3l, _$pj, _$oF);
    }
};
WidgetDockPatternBase.prototype._$9 = function (_$99, _$dg, iWH) {
    if (_$99 < 0 || _$99 > 3) return;
    var _$ps = null;
    var _$8T = false;
    var _$nm = null;
    var _$8X = false;
    if (this._$lk[_$99] == null) {
        _$ps = new _$58();
        _$ps._$ju = _$99;
        this._$lk[_$99] = _$ps;
        _$ps._$rw(this);
        _$8X = true;
    }
    if (_$8X) {
        if (_$dg != 0xffffffff) {
            _$8T = true;
            if (_$dg > 0) {
                _$nm = this._patternPositionList[_$99]._patternSub._panelList[_$dg - 1];
                _$ps._$kR = _$nm._$kR;
                _$ps._$l8 = _$nm._$l8;
            } else {
                _$ps._$kR = null;
                _$ps._$l8 = null;
            }
        } else {
            if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) {
                _$ps._$kR = this._$2j(WidgetDockPatternBase._$3m);
                _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3j);
            } else {
                _$ps._$kR = this._$2j(WidgetDockPatternBase._$3k);
                _$ps._$l8 = this._$2j(WidgetDockPatternBase._$3l);
            }
            _$dg = this._patternPositionList[_$99]._patternSub.getPanelNum();
        }
        _$ps._$kI = null;
        _$ps._$ah(this, _$99);
        this._patternPositionList[_$99]._patternSub._$4(_$ps, _$dg);
        var _$pU;
        var i;
        for (i = _$dg + 1; i < this._patternPositionList[_$99]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[_$99]._patternSub._panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        _$ps = this._$lk[_$99];
        _$ps._$ah(this, _$99);
    }
    if (_$8T) {
        if (_$99 == WidgetDockPatternBase._$3j) {
            this._$W(WidgetDockPatternBase._$3k, _$ps, _$nm, false);
            this._$W(WidgetDockPatternBase._$3l, _$ps, _$nm, false);
        } else if (_$99 == WidgetDockPatternBase._$3m) {
            this._$W(WidgetDockPatternBase._$3k, _$ps, _$nm, true);
            this._$W(WidgetDockPatternBase._$3l, _$ps, _$nm, true);
        } else if (_$99 == WidgetDockPatternBase._$3k) {
            this._$W(WidgetDockPatternBase._$3m, _$ps, _$nm, true);
            this._$W(WidgetDockPatternBase._$3j, _$ps, _$nm, true);
        } else {
            this._$W(WidgetDockPatternBase._$3m, _$ps, _$nm, false);
            this._$W(WidgetDockPatternBase._$3j, _$ps, _$nm, false);
        }
    }
    this._$4m(_$ps, _$99, _$dg, false, iWH, iWH, null, true);
    _$ps._$iX = true;
};
WidgetDockPatternBase.prototype._$5A = function (_$98) {
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$lk[i] != null) this._$lk[i]._$5A();
    }
};
WidgetDockPatternBase.prototype._$5N = function () {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$au();
        WidgetDockPatternBase._$l2 = null;
    }
};
WidgetDockPatternBase.prototype._$6t = function (_$mO) {
    if (_$mO._$kj > WidgetDockFloatPanel._$q) this._$lk[_$mO._$j0]._$5b(_$mO); else {
        this._$lk[_$mO._$kj]._$5b(_$mO);
    }
};
WidgetDockPatternBase.prototype._$34 = function (_$rU, iID, _$pB) {
};
WidgetDockPatternBase.prototype._$0f = function (_$nF, _$nU, _$nz) {
    var _$nm = null;
    var _$ot = null;
    var _$p5 = null;
    if (_$nF._$ka > 0 && _$nF._$ka != 0xffffffff) {
        _$nm = this._patternPositionList[_$nU[0]]._patternSub._panelList[_$nF._$ka - 1];
        _$ot = _$nm._$kR;
        _$p5 = _$nm._$l8;
    }
    var _$oY;
    var _$oZ;
    var _$eH;
    var _$fD;
    if ((_$nU[0] == WidgetDockPatternBase._$3m) || (_$nU[0] == WidgetDockPatternBase._$3j)) {
        _$oY = this._$lk[WidgetDockPatternBase._$3k];
        _$oZ = this._$lk[WidgetDockPatternBase._$3l];
        _$eH = WidgetDockPatternBase._$3k;
        _$fD = WidgetDockPatternBase._$3l;
    } else {
        _$oY = this._$lk[WidgetDockPatternBase._$3m];
        _$oZ = this._$lk[WidgetDockPatternBase._$3j];
        _$eH = WidgetDockPatternBase._$3m;
        _$fD = WidgetDockPatternBase._$3j;
    }
    var _$eG = -1;
    var _$fC = -1;
    if (_$nF._$ka == -1 || _$nF._$ka == 0xffffffff) {
        _$eG = 0xFFFF;
        _$fC = 0xFFFF;
    }
    if (_$ot != null) _$eG = this._$2F(_$eH, _$ot);
    if (_$p5 != null) _$fC = this._$2F(_$fD, _$p5);
    var _$fq = -2;
    var _$fr = -2;
    if (_$oY != null) _$fq = this._$2F(_$eH, _$oY);
    if (_$oZ != null) _$fr = this._$2F(_$fD, _$oZ);
    var _$fs;
    if (this._$lk[_$nU[0]] == null) _$fs = -2; else _$fs = this._$2F(_$nU[0], this._$lk[_$nU[0]]);
    var _$f0 = _$nF._$ka;
    if (_$f0 == 0xFFFFFFFF) _$f0 = 0xFFFF;
    if (_$nF._$it) {
        if (_$eG >= _$fq && _$fC >= _$fr) {
            if (_$f0 > _$fs) return;
        }
        if (_$fs == -2) {
            if ((_$nU[0] == WidgetDockPatternBase._$3m) || (_$nU[0] == WidgetDockPatternBase._$3j)) {
                if (_$fq >= 0 && _$eG < _$fq && _$nz.cx > 20) {
                    _$nF._$kn += 20;
                    _$nz.cx -= 20;
                }
                if (_$fr >= 0 && _$fC < _$fr && _$nz.cx > 20) {
                    _$nz.cx -= 20;
                }
            } else {
                if (_$fq >= 0 && _$eG < _$fq && _$nz.cy > 20) {
                    _$nF._$kq += 20;
                    _$nz.cy -= 20;
                }
                if (_$fr >= 0 && _$fC < _$fr && _$nz.cy > 20) {
                    _$nz.cy -= 20;
                }
            }
            return;
        }
    } else {
        if (_$fs == -2) {
            if (_$eG >= _$fq && _$fC >= _$fr) return;
            if (_$eG == -1 && _$fC == -1) return;
        } else {
            if (_$fs >= _$f0 || _$f0 == 0xFFFF) return;
            if (_$eG >= _$fq && _$fC >= _$fr) return;
        }
    }
    _$nU[0] = 0xff;
    _$nF._$j1 = 0xff;
    return;
};
WidgetDockPatternBase._$2L = function (d, _$ck, _$se, _$7z) {
};
WidgetDockPatternBase._$6y = function (_$cl, _$qT, _$fE, _$db, _$cy, _$dc, Cxt) {
    var _$r0 = "";
    var dt = new Size();
    var j;
    if (_$fE < _$db) {
        _$fE = _$fE - 2 * _$cy - 3;
        _$fE -= _$dc;
        if (_$fE < 0) {
            return "";
        } else {
            var _$8p = true;
            for (j = 0; j < 3; j++) {
                _$r0 = _$r0 + ".";
                WidgetDockElementController._$2L(dt, _$cl, _$r0, Cxt);
                if (dt.width > _$fE) {
                    return _$r0;
                }
            }
            if (_$8p) {
                var _$ew = _$qT.length;
                for (j = 0; j < _$ew; j++) {
                    var vc = _$qT.slice(0, j + 1) + _$r0;
                    WidgetDockElementController._$2L(dt, _$cl, vc, Cxt);
                    if (dt.width > _$fE) {
                        return vc;
                    }
                }
            }
        }
    } else {
        return _$qT;
    }
    return _$qT;
};

function _$N() {
    this._$je = 0;
    this._$j1 = 0;
    this._$iI = false;
    this._$jR = 0;
    this._$jS = 0;
    this._$kG = null;
    this._$kE = null;
    this._$km = WidgetDockPatternBase._$5Z;
    ;this._$lx = new Rect();
    this._$ly = new Rect();
    this._$iG = false;
    this._$ja = 0;
    this._$jf = 0;
    this._$hL = null;
    this._$ka = 0;
    this._$hH = null;
    this._$hj = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController._$0z("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = WidgetDockElementController._$0z("div", WidgetDockController._elementRootId);
        this._$h8.style.border = "1px solid";
    }
    WidgetDockElementController._$6n(this._$h8, this._$km, this._$km);
    this._$h8._$4y = this;
    this._$h8.onmousedown = _$N._$4h;
    this._$h8.onmousemove = _$N._$4g;
    this._$h8._$mF = _$N._$mh;
};_$N._$4h = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4y._$mw(e);
    else e.srcElement._$4y._$mw(e);
    return false;
};
_$N._$4g = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4y.mouseMove(e);
    else e.srcElement._$4y.mouseMove(e);
};
_$N._$mh = function (e) {
    return false;
};
_$N._floatPanelController = new WidgetDockFloatPanelController();
_$N.prototype._$r8 = function (_$cS, _$do, _$dq, _$cM) {
};
_$N.prototype.setSize = function (_$dq, _$cM) {
    if (this._$h8 == null) return;
    WidgetDockElementController._$6n(this._$h8, _$dq, _$cM);
    if (_$dq == 0 && _$cM == 0) {
        this._$h8.style.visibility = "hidden";
    }
    this._$qJ();
};
_$N.prototype._$6i = function (_$cR) {
    if (this._$h8 != null) {
        WidgetDockElementController._$6i(this._$h8, _$cR);
    }
};
_$N.prototype._$mw = function (e) {
    if (WidgetDockController._$fQ(e.button)) {
        WidgetDockWindow._$hK = this;
        WidgetDockController._$6s(true);
        this._$4N(0, 0);
    }
    return false;
};
_$N.prototype.mouseUp = function (e) {
    if (!this._$iG) return;
    WidgetDockController._$6s(false);
    this._$1x();
    this._$iG = false;
};
_$N.prototype._$m3 = function (e) {
    _$mt();
};
_$N.prototype._$mt = function () {
};
_$N.prototype._$rG = function (wh) {
    this._$km = wh;
    if (wh == 0) {
        this._$h8.style.visibility = "hidden";
    }
};
_$N.prototype._$cf = function () {
    return this._$km;
};
_$N.prototype._$07 = function (e, key) {
    var _$h0;
    if (e == null) {
        _$h0 = window.event._$gZ;
    } else {
        _$h0 = e._$tu;
    }
    if (_$h0 == key) {
        return true;
    }
    return false;
};
_$N.prototype._$mn = function (e) {
    if ((_$07(e, 27) || _$07(e, 18)) && _$iG) {
        _$iG = false;
        _$kG._$hH = null;
        _$T();
    }
};
_$N.prototype._$9N = function () {
    if (_$iG) {
        _$iG = false;
        _$kG._$hH = null;
        _$T();
    }
};
_$N.prototype.mouseMove = function () {
    if (this._$j1 == WidgetDockPatternBase._$3k || this._$j1 == WidgetDockPatternBase._$3l) this._$h8.style.cursor = "e-resize";
    else this._$h8.style.cursor = "n-resize"
};
_$N.prototype._$rh = function (_$og) {
    this._$kG = _$og;
    _$og.Add(this);
};
_$N.prototype._$ms = function (e) {
    if (!this._$iG) return;
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    this._$4i(pt);
    this._$qJ();
};
_$N.prototype._$4N = function (_$ts, _$h1) {
    return this._$kG._$s9(this, _$ts, _$h1);
};
_$N.prototype._$bZ = function () {
    var pt = new Location();
    pt.x = WidgetDockElementController._$2k(this._$h8);
    pt.y = WidgetDockElementController._$2M(this._$h8);
    return pt;
};
_$N.prototype._$c8 = function () {
    var d = new Size();
    d.width = WidgetDockElementController._$2O(this._$h8);
    d.height = WidgetDockElementController._$2h(this._$h8);
    return d;
};
_$N.prototype._$s9 = function (_$ts, _$h1) {
    if (this._$iG) return;
    this._$iG = true;
    var _$pL = this._$bZ();
    var dd = this._$c8();
    this._$lx.left = _$pL.x;
    this._$lx.top = _$pL.y;
    this._$lx.right = dd.width + _$pL.x;
    this._$lx.bottom = _$pL.y + dd.height;
    this._$25(this._$ly);
    var _$ps;
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    _$ps = this._$2a(_$95, _$pv, _$gg);
    if (_$ps != null) {
        _$ps._$5q();
        var _$g8 = this._$kG._$2F(this._$j1, _$ps) + 1;
        if (_$pv[0] == null) {
            if (this._$j1 == WidgetDockPatternBase._$3k) {
                this._$jR = _$ps.rect.left + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = this._$kG._$lz.right - 2 * WidgetDockPatternBase._$5Z - this._$kG._$2J(this._$j1, _$g8, 0xffffffff);
            } else if (this._$j1 == WidgetDockPatternBase._$3l) {
                this._$jR = this._$kG._$lz.left + this._$kG._$2J(this._$j1, _$g8, 0xffffffff) + WidgetDockPatternBase._$5Z;
                this._$jS = _$ps.rect.right - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._$j1 == WidgetDockPatternBase._$3m) {
                this._$jR = _$ps.rect.top + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = this._$kG._$lz.bottom - 2 * WidgetDockPatternBase._$5Z - this._$kG._$2J(this._$j1, _$g8, 0xffffffff);
            } else {
                this._$jR = this._$kG._$lz.top + this._$kG._$2J(this._$j1, _$g8, 0xffffffff) + WidgetDockPatternBase._$5Z;
                this._$jS = _$ps.rect.bottom - 2 * WidgetDockPatternBase._$5Z;
            }
        } else {
            var iw, ih;
            iw = _$pv[0].rect.right - _$pv[0].rect.left;
            ih = _$pv[0].rect.bottom - _$pv[0].rect.top;
            if (this._$j1 == WidgetDockPatternBase._$3k) {
                this._$jR = _$ps.rect.left + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = _$ps.rect.right + iw - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._$j1 == WidgetDockPatternBase._$3l) {
                this._$jR = _$ps.rect.left - iw + WidgetDockPatternBase._$5Z;
                this._$jS = _$ps.rect.right - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._$j1 == WidgetDockPatternBase._$3m) {
                this._$jR = _$ps.rect.top + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = _$ps.rect.bottom + ih - 2 * WidgetDockPatternBase._$5Z;
            } else {
                this._$jR = _$ps.rect.top - ih + WidgetDockPatternBase._$5Z;
                this._$jS = _$ps.rect.bottom - 2 * WidgetDockPatternBase._$5Z;
            }
        }
    } else if (this._$iI) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new Rect();
        var rc2 = new Rect();
        this._$kE._$1K(pd1, pd2, rc1, rc2);
        this._$jR = 0;
        this._$jS = 32666;
        if ((this._$j1 == WidgetDockPatternBase._$3k) || (this._$j1 == WidgetDockPatternBase._$3l)) {
            this._$jR = rc1.left + WidgetDockPatternBase._$5Z * 2;
            this._$jS = rc2.right - WidgetDockPatternBase._$5Z * 2;
        } else {
            this._$jR = rc1.top + WidgetDockPatternBase._$5Z * 2;
            this._$jS = rc2.bottom - WidgetDockPatternBase._$5Z * 2;
        }
    }
    this._$3B();
    return 0;
};
_$N.prototype._$4i = function (pt) {
    if (this._$j1 == WidgetDockPatternBase._$3k || this._$j1 == WidgetDockPatternBase._$3l) {
    } else {
    }
    var iw = WidgetDockPatternBase._$2A(this._$lx);
    var ih = WidgetDockPatternBase._$2z(this._$lx);
    if (this._$j1 == WidgetDockPatternBase._$3k || this._$j1 == WidgetDockPatternBase._$3l) {
        this._$lx.left = pt.x;
        if (this._$jR > pt.x) this._$lx.left = this._$jR;
        if (this._$jS < pt.x) this._$lx.left = this._$jS;
    } else {
        this._$lx.top = pt.y;
        if (this._$jR > pt.y) this._$lx.top = this._$jR;
        if (this._$jS < pt.y) this._$lx.top = this._$jS;
    }
    this._$lx.right = iw + this._$lx.left;
    this._$lx.bottom = ih + this._$lx.top;
    this._$1p(false);
};
_$N.prototype._$1x = function () {
    this._$T();
    this._$1Q();
};
_$N.prototype._$ap = function () {
    this._$kG._$5E(this);
    if (this._$h8 != null) {
        WidgetDockElementController._$5I(WidgetDockController._elementRootId, this._$h8);
    }
    this._$h8 = null;
};
_$N.prototype._$1Q = function () {
    this._$kG._$sb(this);
};
_$N.prototype._$sb = function () {
    var _$e1 = this._$kG._patternPositionList[this._$j1]._patternSub.getPanelNum();
    var _$ps;
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    _$ps = this._$2a(_$95, _$pv, _$gg);
    var _$qm = this._$ly;
    var _$dt = this._$lx.left - _$qm.left;
    if (this._$j1 == WidgetDockPatternBase._$3k || this._$j1 == WidgetDockPatternBase._$3l) {
        _$dt = this._$lx.left - _$qm.left;
    } else {
        _$dt = this._$lx.top - _$qm.top;
    }
    this._$4q(_$dt);
    var _$ey, _$eB;
    var _$ez, _$eC, _$eA, _$eD;
    _$ez = _$eA = _$eC = _$eD = 0;
    var _$9w;
    if (this._$j1 == WidgetDockPatternBase._$3k || this._$j1 == WidgetDockPatternBase._$3l) {
        _$9w = WidgetDockPatternBase._$3m;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
        if (_$pv[0] != null) {
            _$ez = _$qm.top;
            _$eC = _$pv[0].rect.top;
            _$eA = _$pv[0].rect.bottom;
            _$eD = _$qm.bottom;
        }
    } else {
        _$9w = WidgetDockPatternBase._$3k;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
        if (_$pv[0] != null) {
            _$ez = _$qm.left;
            _$eC = _$pv[0].rect.left;
            _$eA = _$pv[0].rect.right;
            _$eD = _$qm.right;
        }
    }
    if (!this._$iI) {
        var _$q8 = new Rect();
        _$ps._$kI._$22(_$q8);
        if (this._$j1 == WidgetDockPatternBase._$3k) _$q8.right += _$dt; else if (this._$j1 == WidgetDockPatternBase._$3l) _$q8.left += _$dt; else if (this._$j1 == WidgetDockPatternBase._$3m) _$q8.bottom += _$dt; else _$q8.top += _$dt;
        if (_$95[0]) {
            this._$kG._$6v(_$ps._$kI, _$q8, this._$j1);
            _$ps._$5q();
            this._$kG._$6x(_$9w, _$ey, _$eB);
            this._$kG._$6x((_$9w + 2), _$ey, _$eB);
            this._$kG._$h();
        } else {
            var _$sS = false;
            if (!_$sS) {
                this._$kG._$6v(_$ps._$kI, _$q8, this._$j1);
                if (_$pv[0] != null) {
                    _$pv[0]._$kI._$22(_$q8);
                    if (this._$j1 == WidgetDockPatternBase._$3k) _$q8.left += _$dt; else if (this._$j1 == WidgetDockPatternBase._$3l) _$q8.right += _$dt; else if (this._$j1 == WidgetDockPatternBase._$3m) _$q8.top += _$dt; else _$q8.bottom += _$dt;
                    this._$kG._$6v(_$pv[0]._$kI, _$q8, this._$j1);
                    _$ps._$5q();
                    _$pv[0]._$5q();
                    if (this._$j1 == WidgetDockPatternBase._$3l || this._$j1 == WidgetDockPatternBase._$3j) _$dt = -_$dt;
                    this._$kG._$4o(this._$j1, this._$ka + 1, _$gg[0] - 1, _$dt);
                } else {
                    _$ps._$5q();
                    if (this._$j1 == WidgetDockPatternBase._$3l || this._$j1 == WidgetDockPatternBase._$3j) _$dt = -_$dt;
                    this._$kG._$4n(this._$j1, this._$ka + 1, _$dt);
                }
                this._$kG._$6x(_$9w, _$ey, _$eB);
                this._$kG._$6x((_$9w + 2), _$ey, _$eB);
                this._$kG._$h();
            } else {
                this._$kG._$6v(_$ps._$kI, _$q8, this._$j1);
                _$ps._$5q();
                if (this._$j1 == WidgetDockPatternBase._$3l || this._$j1 == WidgetDockPatternBase._$3j) _$dt = -_$dt;
                this._$kG._$4n(this._$j1, this._$ka + 1, _$dt);
                this._$kG._$6x(_$9w, _$ey, _$eB);
                this._$kG._$6x((_$9w + 2), _$ey, _$eB);
                this._$kG._$h();
            }
        }
    } else {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new Rect();
        var rc2 = new Rect();
        this._$kE._$1K(pd1, pd2, rc1, rc2);
        if ((this._$j1 == WidgetDockPatternBase._$3m) || (this._$j1 == WidgetDockPatternBase._$3j)) {
            rc1.bottom += _$dt;
            this._$kG._$6v(pd1[0], rc1, WidgetDockPatternBase._$6N);
            rc2.top += _$dt;
            this._$kG._$6v(pd2[0], rc2, WidgetDockPatternBase._$6N);
            if (rc2.top == rc2.bottom) this._$kE._$br = 999.0; else this._$kE._$br = 1.0 * (WidgetDockPatternBase._$2z(rc1)) / (WidgetDockPatternBase._$2z(rc2));
        } else {
            rc1.right += _$dt;
            rc2.left += _$dt;
            this._$kG._$6v(pd1[0], rc1, WidgetDockPatternBase._$3T);
            this._$kG._$6v(pd2[0], rc2, WidgetDockPatternBase._$3T);
            if (rc2.left == rc2.right) this._$kE._$br = 999.0; else this._$kE._$br = 1.0 * (WidgetDockPatternBase._$2A(rc1)) / (WidgetDockPatternBase._$2A(rc2));
        }
    }
};
_$N.prototype._$4q = function (_$cY) {
    var ix, iy;
    var _$gK, _$el;
    var _$qu = new Rect();
    if (!this._$iG) this._$25(_$qu); else _$qu = this._$ly;
    _$gK = WidgetDockPatternBase._$2A(_$qu);
    _$el = WidgetDockPatternBase._$2z(_$qu);
    ix = _$qu.left;
    iy = _$qu.top;
    if (this._$j1 == WidgetDockPatternBase._$3k || this._$j1 == WidgetDockPatternBase._$3l) {
        ix += _$cY;
    } else {
        iy += _$cY;
    }
    WidgetDockElementController._$6j(this._$h8, ix, iy);
    WidgetDockElementController._$6n(this._$h8, _$gK, _$el);
    this._$qJ();
};
_$N.prototype._$6q = function (rc) {
    if (this._$h8 != null) {
        WidgetDockElementController._$6j(this._$h8, rc.left, rc.top);
        WidgetDockElementController._$6n(this._$h8, rc.right - rc.left, rc.bottom - rc.top);
        this._$qJ();
    }
};
_$N.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = WidgetDockElementController._$2k(this._$h8);
        rc.top = WidgetDockElementController._$2M(this._$h8);
        rc.right = rc.left + WidgetDockElementController._$2O(this._$h8);
        rc.bottom = rc.top + WidgetDockElementController._$2h(this._$h8);
    }
};
_$N.prototype._$2a = function (_$89, _$nC, _$dj) {
    var _$e1 = this._$kG._patternPositionList[this._$j1]._patternSub.getPanelNum();
    var _$ps;
    _$nC[0] = null;
    _$89[0] = true;
    var _$f2;
    var i;
    for (i = _$e1 - 1; i >= 0; i--) {
        _$ps = this._$kG._patternPositionList[this._$j1]._patternSub._panelList[i];
        if (_$ps._$iX) {
            if (_$ps._$le == this) {
                this._$ka = i;
                return _$ps;
            } else {
                _$89[0] = false;
                var _$sS = false;
                if (_$sS) {
                    _$nC[0] = _$ps;
                    _$f2 = i;
                    _$dj[0] = i;
                } else {
                    if (_$ps._$k9 != 1) {
                        _$nC[0] = _$ps;
                        _$f2 = i;
                        _$dj[0] = i;
                    }
                }
            }
        }
    }
    return null;
};
_$N.prototype._$T = function () {
    this._$1p(true);
};
_$N.prototype._$1p = function (_$86) {
    var vrc = this._$lx;
    WidgetDockElementController._$6j(this._$h8, vrc.left, vrc.top);
    WidgetDockElementController._$6n(this._$h8, vrc.right - vrc.left, vrc.bottom - vrc.top);
    return;
};
_$N.prototype._$3B = function () {
};
_$N.prototype._$qJ = function () {
    var _$eu, _$gC, iw, ih;
    _$eu = WidgetDockElementController._$2k(this._$h8);
    _$gC = WidgetDockElementController._$2M(this._$h8);
    iw = WidgetDockElementController._$2O(this._$h8);
    ih = WidgetDockElementController._$2h(this._$h8);
    if (this._$hj == null) return;
    if ((this._$j1 == WidgetDockPatternBase._$3k) || (this._$j1 == WidgetDockPatternBase._$3l)) {
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, 0, 0, ih, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(iw - 2, 0, iw - 2, ih, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(iw - 1, 0, iw - 1, ih, this._$hj);
        this._$hj.fillStyle = 'ButtonFace';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = 'white';
        }
        this._$hj.fillRect(1, 0, iw - 3, ih);
    } else {
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, ih - 2, iw, ih - 2, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        this._$hj.fillStyle = 'ButtonFace';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = 'white';
        }
        this._$hj.fillRect(0, 1, iw, ih - 3);
    }
};

function widgetDockPanel() {
    this._$le = null;
    this._$kI = null;
    this._$kR;
    this._$l8;
    this._$iX;
    this.rect = new Rect();
    this._$km = widgetDockPanel._$kt;
    this._$k9 = 0;
};widgetDockPanel._$kt = WidgetDockPatternBase._$5Z;
widgetDockPanel._$iD = false;
widgetDockPanel._$6g = function (iWH) {
    if (_$iD) return;
    if (iWH < 0) iWH = 0;
    widgetDockPanel._$kt = iWH;
};
widgetDockPanel.prototype._$cf = function () {
    return this._$km;
};
widgetDockPanel.prototype._$3E = function (_$p9, _$pC, _$de) {
    var _$9z = WidgetDockPatternBase._$m(_$p9, _$pC);
    _$de[0] = 0;
    if (_$9z != 0xff) {
        if (this._$le._$j1 == WidgetDockPatternBase._$3m) {
            if (_$9z == WidgetDockPatternBase._$3h) _$de[0] = 1; else if (_$9z == WidgetDockPatternBase._$3b) _$de[0] = 2;
        } else if (this._$le._$j1 == WidgetDockPatternBase._$3j) {
            if (_$9z == WidgetDockPatternBase._$3h) _$de[0] = 2; else if (_$9z == WidgetDockPatternBase._$3b) _$de[0] = 1;
        } else if (this._$le._$j1 == WidgetDockPatternBase._$3k) {
            if (_$9z == WidgetDockPatternBase._$3d) _$de[0] = 1;
            if (_$9z == WidgetDockPatternBase._$3f) _$de[0] = 2;
        } else if (this._$le._$j1 == WidgetDockPatternBase._$3l) {
            if (_$9z == WidgetDockPatternBase._$3d) _$de[0] = 2;
            if (_$9z == WidgetDockPatternBase._$3f) _$de[0] = 1;
        }
        if (_$de[0] == 0) {
            return 0xff;
        }
        _$9z = (2 * this._$le._$j1 + 1);
    }
    return _$9z;
};
widgetDockPanel.prototype._$ah = function (_$ax, _$99) {
    this._$le = new _$N();
    this._$le._$j1 = _$99;
    this._$le._$rh(_$ax);
    this._$le._$rG(this._$km);
};
widgetDockPanel.prototype._$qI = function () {
    if (this._$le != null) {
        if (this._$le._$kG != null) {
            this._$le._$kG._$5E(this._$le);
        }
        this._$le._$ap();
        this._$le = null;
    }
    this._$iX = false;
};
widgetDockPanel.prototype._$05 = function () {
    return this._$kI._$05();
};
widgetDockPanel.prototype._$qy = function (wnd, rc) {
    wnd._$6q(rc);
};
widgetDockPanel.prototype._$2B = function (_$mO, pRC) {
    if (_$mO._$kA._$8y) {
        pRC.left = 0;
        pRC.top = 0;
        pRC.right = 0;
        pRC.bottom = 0;
        return;
    }
    _$mO._$25(pRC);
};
widgetDockPanel.prototype._$6u = function (_$ax, _$qb, _$99, _$cT, _$cU, _$cA) {
    if (this._$iX) {
        var ilt, irb;
        var _$dW;
        var _$gK, _$el;
        var _$qt = new Rect();
        var _$9p = 0;
        _$gK = WidgetDockPatternBase._$2A(this.rect);
        _$el = WidgetDockPatternBase._$2z(this.rect);
        if ((_$99 == WidgetDockPatternBase._$3m) || (_$99 == WidgetDockPatternBase._$3j)) {
            _$dW = (this.rect.top + this.rect.bottom) / 2;
            ilt = _$ax._$2I(WidgetDockPatternBase._$3k, this._$kR);
            irb = _$ax._$2I(WidgetDockPatternBase._$3l, this._$l8);
            this.rect.left = _$qb.left + ilt;
            this.rect.right = _$qb.right - irb;
        } else {
            _$dW = (this.rect.left + this.rect.right) / 2;
            ilt = _$ax._$2I(WidgetDockPatternBase._$3m, this._$kR);
            irb = _$ax._$2I(WidgetDockPatternBase._$3j, this._$l8);
            this.rect.top = _$qb.top + ilt;
            this.rect.bottom = _$qb.bottom - irb;
        }
        if ((_$dW >= _$cT) && (_$dW <= _$cU)) {
            this._$le._$25(_$qt);
            if ((_$99 == WidgetDockPatternBase._$3m) || (_$99 == WidgetDockPatternBase._$3j)) {
                _$qt.left = this.rect.left;
                _$qt.right = this.rect.right;
                _$9p = WidgetDockPatternBase._$3k;
            } else if ((_$99 == WidgetDockPatternBase._$3k) || (_$99 == WidgetDockPatternBase._$3l)) {
                _$qt.top = this.rect.top;
                _$qt.bottom = this.rect.bottom;
                _$9p = WidgetDockPatternBase._$3m;
            }
            this._$6v(_$ax, _$9p, _$cA);
            if (_$99 == WidgetDockPatternBase._$3m || _$99 == WidgetDockPatternBase._$3j) {
                _$qt.left = this.rect.left;
                _$qt.right = _$qt.left + this.rect.right - this.rect.left;
            } else {
                _$qt.top = this.rect.top;
                _$qt.bottom = _$qt.top + this.rect.bottom - this.rect.top;
            }
            this._$le._$6q(_$qt);
        }
    }
};
widgetDockPanel.prototype._$5q = function () {
    var pd1 = new Array(1);
    var pd2 = new Array(1);
    var rc1 = new Rect();
    var rc2 = new Rect();
    this._$kI._$1K(pd1, pd2, rc1, rc2);
    if (pd1[0] == null && pd2[0] == null) {
        this._$kI._$of._$25(this.rect);
    } else if (pd1[0] == null) {
        this.rect.setRect(rc2);
    } else if (pd2[0] == null) {
        this.rect.setRect(rc1);
    } else {
        if (rc1.left != -6000 && rc2.left != -6000) {
            this.rect.setRect(rc1);
            if (this._$kI._$9y == WidgetDockPatternBase._$3m || this._$kI._$9y == WidgetDockPatternBase._$3j) {
                this.rect.bottom = rc2.bottom;
            } else {
                this.rect.right = rc2.right;
            }
        } else if (rc1.left == -6000 && rc2.left != -6000) {
            this.rect.setRect(rc2);
        } else if (rc1.left != -6000 && rc2.left == -6000) {
            this.rect.setRect(rc1);
        } else {
            this.rect.left = this.rect.right = this.rect.top = this.rect.bottom = 0;
        }
    }
};
widgetDockPanel.prototype._$03 = function (mainPattern, _$mX, _$pC, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    if (_$mX._$it) {
        return this._$kI._$03(_$mX, _$pC, _$nz, _$dk, _$oQ);
    } else {
        var _$qu = new Rect();
        _$qu.setRect(rect);
        mainPattern._$5r(mainPattern._$hh, _$qu);
        var _$9z = _$3E(_$qu, _$pC, _$de);
        _$mX._$kn = rect.right - rect.left;
        _$mX._$kq = rect.bottom - rect.top;
        return _$9z;
    }
};
widgetDockPanel.prototype._$53 = function (_$mS) {
    var _$oV = _$mS._$oV;
    if (_$oV == null) {
        return true;
    }
    if (_$mS == _$oV._$od) {
        _$oV._$od = null;
        if (_$oV._$pr == null) return this._$53(_$oV); else if (_$oV._$oV != null) {
            _$oV._$pr._$oV = _$oV._$oV;
            _$oV._$pr._$9j = _$oV._$9j;
            if (_$oV._$oV._$od == _$oV) _$oV._$oV._$od = _$oV._$pr; else _$oV._$oV._$pr = _$oV._$pr;
        }
    } else {
        _$oV._$pr = null;
        if (_$oV._$od == null) return this._$53(_$oV); else if (_$oV._$oV != null) {
            _$oV._$od._$oV = _$oV._$oV;
            _$oV._$od._$9j = _$oV._$9j;
            if (_$oV._$oV._$od == _$oV) _$oV._$oV._$od = _$oV._$od; else _$oV._$oV._$pr = _$oV._$od;
        }
    }
    return false;
};
widgetDockPanel.prototype._$5K = function (_$mO) {
    return _$mO._$kA._$5K(_$mO);
};
widgetDockPanel.prototype._$f = function (mainPattern, _$mS, prc) {
    var _$qs = new Rect();
    var _$qu = new Rect();
    _$qu.setRect(prc);
    var _$8V = false;
    var _$oV = _$mS._$oV;
    var pme = _$mS;
    var _$pu;
    while (true) {
        if (_$oV != null) {
            _$pu = null;
            if (_$oV._$od != null && _$oV._$od != pme) _$pu = _$oV._$od; else if (_$oV._$pr != null && _$oV._$pr != pme) _$pu = _$oV._$pr;
            if (_$pu != null && !_$pu._$8y) {
                if (_$oV._$oy != null) {
                    _$oV._$oy._$ap();
                    _$oV._$oy = null;
                }
                var _$gc;
                _$pu._$22(_$qs);
                if (_$oV._$9y == WidgetDockPatternBase._$3m || _$oV._$9y == WidgetDockPatternBase._$3j) {
                    _$gc = WidgetDockPatternBase._$2z(_$qu) + widgetDockPanel._$kt;
                    if (pme._$9j == WidgetDockPatternBase._$3j) {
                        _$qs.bottom += _$gc;
                    } else _$qs.top -= _$gc;
                    mainPattern._$6v(pme._$oV, _$qs, WidgetDockPatternBase._$6N);
                } else {
                    _$gc = WidgetDockPatternBase._$2A(_$qu) + widgetDockPanel._$kt;
                    if (pme._$9j == WidgetDockPatternBase._$3l) _$qs.right += _$gc; else _$qs.left -= _$gc;
                    mainPattern._$6v(pme._$oV, _$qs, WidgetDockPatternBase._$3T);
                }
                break;
            }
            _$oV._$8y = true;
            pme = _$oV;
            _$oV = _$oV._$oV;
        } else {
            _$8V = true;
            break;
        }
    }
    return _$8V;
};
widgetDockPanel.prototype._$6 = function (mainPattern, _$mS) {
    var pme = _$mS;
    var _$oV = pme._$oV;
    if (_$oV == null) return;
    var _$9j;
    if (pme._$9j == WidgetDockPatternBase._$3m) _$9j = WidgetDockPatternBase._$3j; else if (pme._$9j == WidgetDockPatternBase._$3j) _$9j = WidgetDockPatternBase._$3m; else if (pme._$9j == WidgetDockPatternBase._$3k) _$9j = WidgetDockPatternBase._$3l; else _$9j = WidgetDockPatternBase._$3k;
    if (_$oV._$od != null && _$oV._$od != pme) _$oV._$od._$9j = _$9j; else if (_$oV._$pr != null && _$oV._$pr != pme) _$oV._$pr._$9j = _$9j;
    var _$pu;
    while (_$oV != null) {
        _$pu = null;
        if (_$oV._$od != null && _$oV._$od != pme) _$pu = _$oV._$od; else if (_$oV._$pr != null && _$oV._$pr != pme) _$pu = _$oV._$pr;
        if (_$pu != null && !_$pu._$8y) {
            var _$9o;
            if (_$oV._$9y == WidgetDockPatternBase._$3m || _$oV._$9y == WidgetDockPatternBase._$3j) {
                _$9o = WidgetDockPatternBase._$3m;
            } else {
                _$9o = WidgetDockPatternBase._$3k;
            }
            var rc = new Rect();
            _$pu._$22(rc);
            _$oV._$oy = new _$N();
            _$oV._$oy._$rG(widgetDockPanel._$kt);
            _$oV._$oy._$rh(mainPattern);
            _$oV._$oy._$iI = true;
            _$oV._$oy._$j1 = _$9o;
            _$oV._$oy._$kE = _$oV;
            mainPattern._$6v(_$pu._$oV, rc, 0);
            mainPattern._$6v(_$pu._$oV, rc, 1);
            break;
        }
        pme = _$oV;
        _$oV = _$oV._$oV;
        if (_$oV == null) return;
    }
};
widgetDockPanel.prototype._$7 = function (mainPattern, _$n5) {
    var pme = _$n5._$kA;
    this._$6(mainPattern, pme);
};
widgetDockPanel.prototype._$4i = function (mainPattern, _$99, _$dg, _$cY) {
    if (this._$iX) {
        this._$4j(mainPattern, _$cY, _$99);
        if (_$99 == WidgetDockPatternBase._$3l) {
            this.rect.left -= _$cY;
            this.rect.right -= _$cY;
        } else if (_$99 == WidgetDockPatternBase._$3k) {
            this.rect.left += _$cY;
            this.rect.right += _$cY;
        } else if (_$99 == WidgetDockPatternBase._$3j) {
            this.rect.top -= _$cY;
            this.rect.bottom -= _$cY;
        } else {
            this.rect.top += _$cY;
            this.rect.bottom += _$cY;
        }
        var _$gz = _$cY;
        if (_$99 == WidgetDockPatternBase._$3l || _$99 == WidgetDockPatternBase._$3j) _$gz = -_$cY;
        this._$le._$4q(_$gz);
    }
};
widgetDockPanel.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$cA[0] = 0;
    _$ax._$6v(this._$kI, this.rect, _$9c);
};
widgetDockPanel.prototype._$4j = function (mainPattern, _$cY, _$99) {
    mainPattern._$4j(this._$kI, _$cY, _$99);
};
widgetDockPanel.prototype._$0e = function (_$mS) {
    if (_$mS == null) return false;
    if (_$mS._$of != null) return true;
    if (_$mS._$od == null && _$mS._$pr == null && _$mS._$l1 != null) {
        var _$e1 = _$mS._$l1.length;
        if (_$e1 > 0) {
            var i;
            for (i = 0; i < _$e1; i++) {
                var p = _$mS._$l1[i];
                var sz;
                if (p._$qY != null) sz = p._$qY; else sz = p._$mO._title;
                if (sz.length > 0) return true;
                return false;
            }
        } else return false;
    }
    var b = false;
    if (_$mS._$od != null) b = this._$0e(_$mS._$od);
    if (b) return b;
    if (_$mS._$pr != null) b = this._$0e(_$mS._$pr);
    return b;
};
widgetDockPanel.prototype.initPanelLayout = function (mainPattern, layout, index, _$eF, _$fB) {
    if (!this._$0e(this._$kI)) {
        return index;
    }
    layout.addContent("SEC" + index);
    layout.addContent(this.rect.right - this.rect.left);
    layout.addContent(this.rect.bottom - this.rect.top);
    var _$aR = -1;
    if (this._$kR != null) {
        _$aR = mainPattern._$2F(_$eF, this._$kR);
        if (mainPattern._$lk[_$eF] != null) {
            var _$fp = mainPattern._$2F(_$eF, mainPattern._$lk[_$eF]);
            if (_$aR > _$fp) _$aR--;
        }
    }
    layout.addContent(_$aR);
    _$aR = -1;
    if (this._$l8 != null) {
        _$aR = mainPattern._$2F(_$fB, this._$l8);
        if (mainPattern._$lk[_$fB] != null) {
            var _$fp = mainPattern._$2F(_$eF, mainPattern._$lk[_$fB]);
            if (_$aR > _$fp) _$aR--;
        }
    }
    layout.addContent(_$aR);
    this._$66(layout);
    var _$nT = this._$kI;
    layout.addContent("ROOTBLOCK");
    this.initPanelInfoLayout(mainPattern, layout, _$nT);
    index++;
    return index;
};
widgetDockPanel.prototype._$63 = function (mainPattern, layout, _$mS, _$aP) {
    {
        var _$7D = null;
        if (_$mS._$l1 != null && _$mS._$l1.length >= 1) {
            var _$gi = _$mS._$l1.length;
            _$7D = new Array(_$gi);
            var i;
            for (i = 0; i < _$gi; i++) _$7D[i] = _$mS._$l1[i];
        } else {
            _$7D = new Array(1);
            _$7D[0] = new _$57();
            _$7D[0]._$mO = _$mS._$of;
        }
        layout.addContent(_$7D.length);
        var i;
        for (i = 0; i < _$7D.length; i++) {
            var sTitle;
            var _$aS = 0xFFF00000;
            if (_$7D[i]._$qY != null) {
                sTitle = _$7D[i]._$qY;
                _$aS = _$7D[i]._$aP;
            } else {
                if (_$7D[i]._$mO != null) {
                    sTitle = _$7D[i]._$mO.getTitle();
                    var bvi = _$7D[i]._$mO._$fT();
                    if (bvi) _$aS |= WidgetDockFloatPanel._$1D;
                    if (_$7D[i]._$mO._$kB == mainPattern) {
                        _$aS |= WidgetDockFloatPanel._$1A;
                    }
                    if (_$7D[i]._$mO._$k0 == WidgetDockFloatPanel._$6W) _$aS |= WidgetDockFloatPanel._$1C;
                    if (_$7D[i]._$mO._$k0 != WidgetDockFloatPanel._$4C) _$aS |= WidgetDockFloatPanel._$2U;
                    if (_$7D[i]._$mO._$iv) _$aS |= WidgetDockFloatPanel._$2T;
                    _$aS |= ((_$7D[i]._$mO._$kc & 0xF) << 12);
                    _$aS |= ((_$7D[i]._$mO._$kj & 0x7) << 7);
                    if (_$7D[i]._$mO._$id) _$aS |= WidgetDockFloatPanel._$B;
                    _$aS |= ((_$7D[i]._$mO._$jm & 0x07) << 17);
                } else {
                    sTitle = _$mS._$sl;
                    _$aS |= (WidgetDockFloatPanel._$1D | WidgetDockFloatPanel._$1A);
                }
            }
            var _$8Q = false;
            if (_$mS._$o5 != null) {
                var k;
                for (k = 0; k < _$mS._$o5._$i6.length; k++) {
                    var _$pE = _$mS._$o5._$i6[k];
                    if (_$pE._$mO == _$7D[i]._$mO) {
                        _$8Q = true;
                        break;
                    }
                }
            }
            if (_$8Q) _$aS |= WidgetDockFloatPanel._$1B; else _$aS &= ~WidgetDockFloatPanel._$1B;
            layout.addContent(sTitle);
            layout.addContent(_$aS);
            if (mainPattern._$ii) {
                if (_$7D[i]._$mO != null) {
                    layout.addContent(_$7D[i]._$mO._$lt.x);
                    layout.addContent(_$7D[i]._$mO._$lt.y);
                    layout.addContent(_$7D[i]._$mO._$lK.cx);
                    layout.addContent(_$7D[i]._$mO._$lK.cy);
                } else {
                    if (_$7D[i]._$pA == null) _$7D[i]._$pA = new Location(100, 200);
                    layout.addContent(_$7D[i]._$pA.x);
                    layout.addContent(_$7D[i]._$pA.y);
                    layout.addContent(_$7D[i]._$rM);
                    layout.addContent(_$7D[i]._$rN);
                }
            }
        }
    }
};
widgetDockPanel.prototype.initPanelInfoLayout = function (mainPattern, layout, _$mS) {
    layout.addContent(_$mS._$br * 1000);
    var _$aS = new Array(1);
    _$aS[0] = _$mS._$9j;
    _$aS[0] <<= 8;
    _$aS[0] |= _$mS._$9y;
    _$aS[0] <<= 8;
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) {
            layout.addContent("LEFTBLOCK");
            this.initPanelInfoLayout(mainPattern, layout, _$mS._$od);
        } else {
            layout.addContent("LEFTNONE");
        }
        if (_$mS._$pr != null) {
            layout.addContent("RIGHTBLOCK");
            this.initPanelInfoLayout(mainPattern, layout, _$mS._$pr);
        } else layout.addContent("RIGHTNONE");
    } else {
        layout.addContent("LEFTNONE");
        layout.addContent("RIGHTNONE");
        this._$63(mainPattern, layout, _$mS, _$aS);
    }
    layout.addContent(_$aS[0]);
};
widgetDockPanel.prototype._$66 = function (layout) {
    layout.addContent(0);
};

function _$6R() {
    _$6R.baseConstructor.call(this);
    this._$k9 = 1;
    this._$km = 0;
    this._$h8 = null;
    this._$iy = false;
    this._$js = 1;
    this._$ke = null;
    this._$hi = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController._$0z("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = WidgetDockElementController._$0z("div", WidgetDockController._elementRootId);
    }
    this._$3I();
    this._$h8.style.backgroundColor = 'ButtonFace';
};WidgetDockPrototype.bind(_$6R, widgetDockPanel);
_$6R.prototype._$nJ = function (g) {
    widgetDockPanel.prototype._$nJ.call(this, g);
    var rc = _$bC();
    _$nK(g, rc);
    _$4S(g);
};
_$6R.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = WidgetDockElementController._$2k(this._$h8);
        rc.top = WidgetDockElementController._$2M(this._$h8);
        rc.right = rc.left + WidgetDockElementController._$2O(this._$h8);
        rc.bottom = rc.top + WidgetDockElementController._$2h(this._$h8);
    }
};
_$6R.prototype._$qJ = function () {
    this._$4S();
};
_$6R.prototype._$nK = function (g, rc) {
};
_$6R.prototype._$3I = function () {
    this._$h8._$4A = this;
    this._$h8.onmousedown = _$6R._$4h;
    this._$h8.onmousemove = _$6R._$4g;
    this._$h8._$mF = _$6R._$mh;
};
_$6R._$4h = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4A._$mw(e); else e.srcElement._$4A._$mw(e);
    return false;
};
_$6R._$4g = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4A.mouseMove(e);
    else e.srcElement._$4A.mouseMove(e);
};
_$6R._$mh = function (e) {
    return false;
};
_$6R._$14 = function (e) {
    return false;
};
_$6R._$13 = function (e) {
    return false;
};
_$6R.prototype._$5K = function (_$mO) {
    return false;
};
_$6R.prototype._$5q = function () {
    this._$25(this.rect);
};
_$6R.prototype._$5T = function () {
};
_$6R.prototype._$29 = function () {
    return null;
};
_$6R.prototype._$w = function (_$mO, _$pC) {
    var rc = new Rect();
    var _$8m = false;
    _$mO._$25(rc);
    if (this._$le._$j1 == WidgetDockPatternBase._$3k || this._$le._$j1 == WidgetDockPatternBase._$3l) {
        {
            if (_$pC.y < rc.top) _$8m = true; else _$8m = false;
        }
    } else {
        {
            if (_$pC.x < rc.left) _$8m = true; else _$8m = false;
        }
    }
    return _$8m;
};
_$6R.prototype._$2b = function (_$pC, _$ny) {
    var _$pO = _$kI;
    var _$8x = null;
    var pf;
    while (true) {
        if (_$pO._$od == null && _$pO._$pr == null) {
            if (_$pO._$of != null && !_$pO._$8y) {
                _$ny[0] = _$pO._$of._$jr;
                if (_$w(_$pO._$of, _$pC)) {
                    _$8x = _$pO;
                }
            }
            break;
        } else {
            if (_$pO._$od != null) {
                pf = _$pO._$od;
                if (pf._$of != null && !pf._$8y) {
                    _$ny[0] = pf._$of._$jr;
                    if (_$w(pf._$of, _$pC)) {
                        _$8x = pf;
                        break;
                    }
                }
            }
            if (_$pO._$pr != null) {
                _$pO = _$pO._$pr;
            } else {
                break;
            }
        }
    }
    return _$8x;
};
_$6R.prototype._$1I = function (_$mO) {
    if (_$mO._$ir) return false;
    return false;
};
_$6R.prototype._$35 = function () {
    if (this._$kI._$od != null) return false;
    return true;
};
_$6R.prototype._$03 = function (mainPattern, _$mX, _$pC, _$nz, _$dk, _$oQ, _$de) {
    var _$n6 = _$mX._$kx;
    var _$8G = _$1I(_$n6);
    _$de[0] = 0;
    _$oQ[0] = null;
    var _$qu = new Rect();
    WidgetDockPatternBase._$2P(_$je, _$qu);
    if (!_$n6._$S()) {
        var _$8N = false;
        var ih = _$qu.bottom - _$qu.top;
        var iw = _$qu.right - _$qu.left;
        if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) {
            if ((_$pC.y > (_$qu.top + ih / 4)) && (_$pC.y < (_$qu.top + 3 * ih / 4)) && (_$pC.x > _$qu.left) && (_$pC.x < _$qu.right)) _$8N = true;
        } else {
            if ((_$pC.x > (_$qu.left + iw / 4)) && (_$pC.x < (_$qu.left + 3 * iw / 4)) && (_$pC.y > _$qu.top) && (_$pC.y < _$qu.bottom)) _$8N = true;
        }
        if (_$8N) {
            _$oQ[0] = null;
            var sz = new _$5Y();
            var rc = new Rect();
            _$n6._$lf._$j1 = _$le._$j1;
            _$n6._$2w(sz, _$dk, rc, false);
            return (byte)(2 * _$le._$j1 + 1);
        }
        var _$9z = _$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (_$8G && _$35()) {
                _$de[0] = 0;
                return 0xff;
            }
        }
        return _$9z;
    } else {
        var _$9z = _$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == WidgetDockPatternBase._$3k || this._$le._$j1 == WidgetDockPatternBase._$3l) _$nz.cy = rect.bottom - rect.top; else _$nz.cx = rect.right - rect.left;
        }
        return _$9z;
    }
};
_$6R.prototype._$6v = function (_$ax, _$9c, _$cA) {
    this._$6q(this.rect);
    this._$qJ();
    var _$8j = new WidgetDockFloatPanelController();
    this._$2l(_$8j, null);
    var _$e1 = _$8j.getPanelNum();
    var _$q7 = new Rect();
    var _$eq = new Array(1);
    _$eq[0] = -1;
    var _$eR = new Array(1);
    var _$ol;
    var _$9t;
    if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) _$9t = true; else _$9t = false;
    var _$8D = new Array(1);
    var _$gE = new Array(1);
    var i;
    this._$04(_$9t, _$8j, _$8D, _$gE, _$eq, _$eR);
    var _$rK;
    if (_$9t) {
        _$rK = ((this.rect.right - this.rect.left) - _$gE[0]);
    } else {
        _$rK = ((this.rect.bottom - this.rect.top) - _$gE[0]);
    }
    if (_$8D[0] || this._$js > 1) {
        this._$6w(_$8j, _$rK, _$cA);
        return;
    }
    if ((_$9t && (_$gE[0] > (this.rect.right - this.rect.left))) || ((!_$9t) && (_$gE[0] > (this.rect.bottom - this.rect.top)))) {
        this._$6w(_$8j, _$rK, _$cA);
        return;
    }
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j._panelList[i];
        _$ol._$nQ._$25(_$q7);
        if (_$9t && (_$q7.right > (this.rect.right - this.rect.left))) {
            _$eq[0] = i;
            _$eR[0] = _$q7.left;
            break;
        } else if (!_$9t && (_$q7.bottom > (this.rect.bottom - this.rect.top))) {
            _$eq[0] = i;
            _$eR[0] = _$q7.top;
            break;
        }
    }
    var rc = new Rect();
    if (_$eq[0] >= 0) {
        var _$fx = _$eR[0] - _$2H(_$8j, 0, _$eq[0], false);
        var _$fn;
        if (_$9t) {
            rc.top = 0;
            rc.bottom = _$8j._panelList[_$eq[0]].size.cy;
            _$fn = _$eR[0] + _$2H(_$8j, _$eq[0], _$e1, false) - (this.rect.right - this.rect.left);
        } else {
            rc.left = 0;
            rc.right = _$8j._panelList[_$eq[0]].size.cx;
            _$fn = _$eR[0] + _$2H(_$8j, _$eq[0], _$e1, false) - (this.rect.bottom - this.rect.top);
        }
        if (_$fn > _$fx) _$eR[0] -= _$fx; else _$eR[0] -= _$fn;
        if (_$9t) rc.right = _$eR[0]; else rc.bottom = _$eR[0];
        for (i = 0; i < _$eq[0]; i++) {
            _$ol = _$8j._panelList[_$eq[0] - 1 - i];
            _$ol._$nQ._$25(_$q7);
            if (_$9t) {
                if (_$q7.right < rc.right) break;
                rc.left = rc.right - _$ol.size.cx;
                _$ol._$nQ._$6o(rc);
                rc.right = rc.left;
            } else {
                if (_$q7.bottom < rc.bottom) break;
                rc.top = rc.bottom - _$ol.size.cy;
                _$ol._$nQ._$6o(rc);
                rc.bottom = rc.top;
            }
        }
        if (_$9t) rc.left = _$eR[0]; else rc.top = _$eR[0];
        for (i = _$eq[0]; i < _$e1; i++) {
            _$ol = _$8j._panelList[i];
            if (_$9t) {
                rc.right = rc.left + _$ol.size.cx;
                _$ol._$nQ._$6o(rc);
                rc.left = rc.right;
            } else {
                rc.bottom = rc.top + _$ol.size.cy;
                _$ol._$nQ._$6o(rc);
                rc.top = rc.bottom;
            }
        }
    }
};
_$6R.prototype._$4j = function (mainPattern, _$cY, _$99) {
    if (this._$iX) {
        var plt = new Location();
        var _$qu = new Rect();
        this._$25(_$qu);
        plt.x = _$qu.left;
        plt.y = _$qu.top;
        if (_$99 == WidgetDockPatternBase._$3k || _$99 == WidgetDockPatternBase._$3l) {
            if (_$99 == WidgetDockPatternBase._$3k) plt.x = _$qu.left + _$cY; else plt.x = _$qu.left - _$cY;
        } else {
            plt.x = _$qu.left;
            if (_$99 == WidgetDockPatternBase._$3m) plt.y = _$qu.top + _$cY; else plt.y = _$qu.top - _$cY;
        }
        var _$ql = new Rect();
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + WidgetDockPatternBase._$2A(_$qu);
        _$ql.bottom = plt.y + WidgetDockPatternBase._$2z(_$qu);
        this._$6q(_$ql);
    }
};
_$6R.prototype._$2B = function (_$mO, pRC) {
    if (this._$h8 == null) {
        pRC.left = pRC.right = 0;
        pRC.top = pRC.bottom = 0;
        return;
    }
    this._$25(pRC);
};
_$6R.prototype._$11 = function (_$mZ) {
    if (_$mZ._$oV == null) {
        _$mZ._$of = null;
    } else {
        var _$pb;
        if (_$mZ == _$mZ._$oV._$od) {
            _$pb = _$mZ._$oV._$pr;
            _$mZ._$oV._$od = _$pb._$od;
            _$mZ._$oV._$pr = _$pb._$pr;
            if (_$pb._$od != null) _$pb._$od._$oV = _$mZ._$oV;
            if (_$pb._$pr != null) _$pb._$pr._$oV = _$mZ._$oV;
            _$mZ._$oV._$of = _$pb._$of;
            _$mZ._$oV._$8y = _$pb._$8y;
            if (_$pb._$of != null) {
                if (_$pb._$of._$kA == _$pb) _$pb._$of._$kA = _$mZ._$oV;
                if (_$pb._$of._$l6 == _$pb) _$pb._$of._$l6 = _$mZ._$oV;
            }
        } else {
            if (_$mZ._$oV._$oV == null) {
                _$pb = _$mZ._$oV._$od;
                _$mZ._$oV._$od = _$mZ._$oV._$pr = null;
                _$mZ._$oV._$of = _$pb._$of;
                _$mZ._$oV._$8y = _$pb._$8y;
                if (_$pb._$of != null) {
                    if (_$pb._$of._$kA == _$pb) _$pb._$of._$kA = _$mZ._$oV;
                    if (_$pb._$of._$l6 == _$pb) _$pb._$of._$l6 = _$mZ._$oV;
                }
            } else {
                _$pb = _$mZ._$oV;
                _$pb._$oV._$pr = _$pb._$od;
                _$pb._$od._$oV = _$pb._$oV;
            }
        }
        _$pb._$of = null;
        _$pb._$od = _$pb._$pr = null;
    }
};
_$6R.prototype._$qI = function () {
    if (this._$je != null) {
        widgetDockPanel.prototype._$qI.call(this);
        this._$je = null;
        this._$iy = false;
    }
};
_$6R.prototype._$53 = function (_$mS) {
    _$11(_$mS);
    if (_$mS != _$kI) {
        return false;
    } else if (this._$kI._$pr == null && this._$kI._$pr == null && this._$kI._$of == null) return true;
    return false;
};
_$6R.prototype._$f = function (mainPattern, _$mS, pRC) {
    if (this._$kI == _$mS) return true;
    var _$pN = _$kI;
    var _$8g = true;
    while (_$pN != null) {
        if (_$pN._$od == null && _$pN._$pr == null && !_$pN._$8y) {
            _$8g = false;
            break;
        }
        if (_$pN._$od != null && _$pN._$od._$of != null && !_$pN._$od._$8y) {
            _$8g = false;
            break;
        }
        _$pN = _$pN._$pr;
    }
    if (!_$8g) {
        _$mS._$8y = false;
        var _$e1, _$er;
        var _$8j = new WidgetDockFloatPanelController();
        _$er = _$2l(_$8j, _$mS._$of);
        _$e1 = _$8j.getPanelNum();
        _$mS._$8y = true;
        var _$9y;
        if (this._$le != null) _$9y = this._$le._$j1; else _$9y = _$mS._$of._$lf._$j1;
        var _$9t = true;
        if (_$9y == WidgetDockPatternBase._$3l || _$9y == WidgetDockPatternBase._$3k) _$9t = false;
        var _$8D = new Array(1);
        var _$gE = new Array(1);
        var iid = new Array(1);
        var imo = new Array(1);
        this._$04(_$9t, _$8j, _$8D, _$gE, iid, imo);
        var _$ow = _$8j._panelList[_$er];
        _$8j.deletePanel(_$er);
        var _$g2 = _$2m(_$8j, 0, _$8j.getPanelNum(), _$9t);
        var _$fW = new Array(1);
        if ((_$9t && (_$ow.size.cy >= (rect.bottom - rect.top))) || (!_$9t && (_$ow.size.cx >= (rect.right - rect.left)))) {
            if (_$9t && (_$g2 < _$ow.size.cy)) {
                _$fW[0] = _$g2 - _$ow.size.cy;
            } else if (!_$9t && (_$g2 < _$ow.size.cx)) {
                _$fW[0] = _$g2 - _$ow.size.cx;
            }
        }
        var _$eL = _$2H(_$8j, 0, _$8j.getPanelNum(), false);
        if ((_$9t && (_$eL <= (this.rect.right - this.rect.left))) || (!_$9t && (_$eL <= (this.rect.bottom - this.rect.top)))) {
            var j;
            for (j = 0; j < _$8j.getPanelNum(); j++) {
                var _$ol = _$8j._panelList[j];
                var _$ov = _$ol._$nQ;
                _$ov._$5S();
            }
            _$5C(null, 0, _$8j, _$9t);
            this._$je._$qJ();
            return _$8g;
        }
        if (_$8D[0]) {
            var _$eP = this._$2s(_$8j, 0, _$8j.getPanelNum());
            if ((_$9t && (_$eP <= (this.rect.right - this.rect.left))) || (!_$9t && (_$eP <= (this.rect.bottom - this.rect.top)))) {
                var _$mI = new WidgetDockFloatPanelController();
                this._$2t(_$8j, 0, _$mI);
                _$e1 = _$mI.getPanelNum();
                var _$gu = 0;
                _$sM;
                var k;
                for (k = 0; k < _$e1; k++) {
                    _$ol = _$8j._panelList[k];
                    if (_$9t) {
                        _$gu += _$ol._$nQ._$cg();
                    } else _$gu += _$ol._$nQ._$bU();
                }
                var _$rK;
                if (_$9t) _$rK = ((this.rect.right - this.rect.left) - _$gu); else _$rK = ((this.rect.bottom - this.rect.top) - _$gu);
                _$6w(_$8j, _$rK, _$fW);
                if (_$fW[0] != 0) {
                    var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
                    this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$fW[0]);
                }
            } else {
                _$6w(_$8j, 0, _$fW);
                if (_$fW[0] != 0) {
                    var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
                    this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$fW[0]);
                }
            }
            return _$8g;
        } else {
            _$5C(null, 0, _$8j, _$9t);
            this._$je._$qJ();
            return _$8g;
        }
    }
    return _$8g;
};
_$6R.prototype._$2H = function (d) {
    var _$8j = new WidgetDockFloatPanelController();
    _$2l(_$8j, null);
    d.width = _$2H(_$8j, 0, _$8j.getPanelNum(), false);
    d.height = 0;
    var _$e1 = _$8j.getPanelNum();
    if (_$e1 > 0) {
        var _$ol = _$8j._panelList[_$e1 - 1];
        var rc = _$ol._$nQ._$bC();
        if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) {
            d.height = rc.x + rc.width;
        } else {
            d.height = rc.y + rc.height;
        }
    }
};
_$6R.prototype._$2H = function (_$nR, _$cv, _$cE, _$7N) {
    var _$fe = 0;
    var _$os;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        _$os = _$nR._panelList[i];
        var _$9y;
        if (this._$le != null) _$9y = this._$le._$j1; else _$9y = _$os._$nQ._$lf._$j1;
        if (_$9y == WidgetDockPatternBase._$3m || _$9y == WidgetDockPatternBase._$3j) {
            if (!_$7N) _$fe += _$os.size.cx; else _$fe += _$os._$nQ._$cg();
        } else {
            if (!_$7N) _$fe += _$os.size.cy; else _$fe += _$os._$nQ._$bU();
        }
    }
    return _$fe;
};
_$6R.prototype._$2l = function (_$nR, _$mO) {
    var _$eq = 0;
    var _$er = -1;
    var _$pO = this._$kI;
    while (_$pO != null) {
        if (_$pO._$od == null && _$pO._$pr == null) {
            if (!_$pO._$8y && _$pO._$of != null) {
                var _$ol = new _$44();
                var bts = _$pO._$of._$lf._$j1;
                if (this._$le != null) _$pO._$of._$lf._$j1 = this._$le._$j1;
                _$pO._$of._$2w(_$ol.size, 0, null, false);
                _$pO._$of._$lf._$j1 = bts;
                _$ol._$nQ = _$pO._$of;
                _$nR.addFloatPanel(_$ol);
                if (_$mO == _$pO._$of) _$er = _$eq;
            }
            break;
        } else {
            if (_$pO._$od != null) {
                var pf = _$pO._$od;
                if (pf._$of != null && !pf._$8y) {
                    if (pf._$of == _$mO) _$er = _$eq;
                    var _$ol = new _$44();
                    var bts = pf._$of._$lf._$j1;
                    if (this._$le != null) {
                        pf._$of._$lf._$j1 = this._$le._$j1;
                    }
                    pf._$of._$2w(_$ol.size, 0, null, false);
                    pf._$of._$lf._$j1 = bts;
                    _$ol._$nQ = pf._$of;
                    _$nR.addFloatPanel(_$ol);
                    _$eq++;
                }
            }
            if (_$pO._$pr != null) {
                _$pO = _$pO._$pr;
            } else {
                break;
            }
        }
    }
    return _$er;
};
_$6R.prototype._$7 = function (mainPattern, _$mO) {
    if (_$mO._$c2() != this._$je) {
        this._$je.add(_$mO);
    }
    var _$qu = new Rect();
    var size = new _$5Y();
    _$mO._$2w(size, 0, null, false);
    var _$nR = new WidgetDockFloatPanelController();
    var _$er = _$2l(_$nR, _$mO);
    var _$ol = null;
    _$mO._$jW = _$1d._$jX;
    _$1d._$jX += 1;
    var _$e1 = _$nR.getPanelNum();
    var _$8D = new Array(1);
    _$8D[0] = false;
    var _$gE = new Array(1);
    var i = 0;
    var _$eq = new Array(1);
    var _$eR = new Array(1);
    var _$9t;
    if (this._$le._$j1 == WidgetDockPatternBase._$3k || this._$le._$j1 == WidgetDockPatternBase._$3l) _$9t = false; else _$9t = true;
    if (_$er < 0) return;
    _$ol = _$nR._panelList[_$er];
    _$nR.deletePanel(_$er);
    this._$04(_$9t, _$nR, _$8D, _$gE, _$eq, _$eR);
    _$nR._$4(_$ol, _$er);
    var _$eI = 0;
    _$eI = _$mO._$2o(_$9t);
    if (_$8D[0] || (_$9t && ((this.rect.right - this.rect.left) < (_$gE[0] + _$eI))) || (!_$9t && ((this.rect.bottom - this.rect.top) < (_$gE[0] + _$eI)))) {
        var _$eP = this._$2s(_$nR, 0, _$nR.getPanelNum());
        if ((_$9t && ((this.rect.right - this.rect.left) >= _$eP)) || (!_$9t && ((this.rect.bottom - this.rect.top) >= _$eP))) {
            var _$mI = new WidgetDockFloatPanelController();
            this._$2t(_$nR, 0, _$mI);
            for (i = 0; i < _$e1; i++) {
                _$ol = _$nR._panelList[i];
                if (_$ol._$nQ != _$mO) {
                    _$ol.size.cx = _$ol._$nQ._$cg();
                    _$ol.size.cy = _$ol._$nQ._$bU();
                    if (_$9t) {
                        _$ol._$du = _$ol._$nQ._$cg();
                    } else _$ol._$du = _$ol._$nQ._$bU();
                } else {
                    var it = _$mO._$2o(_$9t);
                    if (_$mO._$k6 > it) _$mO._$k6 = it;
                    _$ol._$du = _$mO._$k6;
                }
            }
            var pt = _$mO._$ls;
            if (_$mO._$iQ) {
                if (pt.x < 0) {
                    pt.x = 0;
                    pt.y = 0;
                } else {
                    WidgetDockPatternBase._$6a(_$je, pt);
                }
            }
            if (_$er > 0) {
                _$ol = _$nR._panelList[_$er - 1];
                var _$qo = new Rect();
                _$ol._$nQ._$25(_$qo);
                var _$eO = 0;
                _$eO = _$ol._$nQ._$2r();
                if (_$9t && (_$qo.right >= pt.x)) {
                    if ((pt.x - _$qo.left) > _$eO) {
                        _$ol._$nQ._$k6 = pt.x - _$qo.left;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                } else if (!_$9t && (_$qo.bottom >= pt.y)) {
                    if ((pt.y - _$qo.top) > _$eO) {
                        _$ol._$nQ._$k6 = pt.y - _$qo.top;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                }
            }
            if (_$er < (_$e1 - 1)) {
                _$ol = _$nR._panelList[_$er + 1];
                var _$qo = new Rect();
                _$ol.bar._$25(_$qo);
                var _$eO = 0;
                _$eO = _$ol._$nQ._$2r();
                if (_$9t && (_$qo.left <= pt.x)) {
                    if ((_$qo.right - pt.x) > _$eO) {
                        _$ol._$nQ._$k6 = _$qo.right - pt.x;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                } else if (!_$9t && (_$qo.top <= pt.y)) {
                    if ((_$qo.bottom - pt.y) > _$eO) {
                        _$ol._$nQ._$k6 = _$qo.bottom - pt.y;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                }
            }
            var _$dN = 0;
            for (i = 0; i < _$e1; i++) {
                _$ol = _$nR._panelList[i];
                if (_$ol._$nQ != _$mO) _$dN += _$ol._$du; else _$dN += _$ol._$nQ._$k6;
            }
            var _$gD = this.rect.right - this.rect.left;
            if (!_$9t) _$gD = this.rect.bottom - this.rect.top;
            var _$rK = (_$gD - _$dN);
            var _$dZ = new Array(1);
            this._$5c(_$nR, 0, 0, _$nR.getPanelNum(), _$mI, _$rK, _$9t, _$gD, 0, _$dZ);
            _$dZ[0] = this._$0m(_$9t, _$dZ[0]);
            if (_$dZ[0] != 0) {
                var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
                this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$dZ[0]);
            }
        } else {
            var _$fX = new Array(1);
            this._$6w(_$nR, 0, _$fX);
        }
        return;
    }
    this._$5C(_$mO, _$er, _$nR, _$9t);
    return;
};
_$6R.prototype._$5C = function (_$mO, _$cP, _$8j, _$9t) {
};
_$6R.prototype._$2m = function (_$u, _$cv, _$cE, _$8c) {
    var _$ol = null;
    var _$eI = 0;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        _$ol = _$u._panelList[i];
        if (_$8c) {
            if (_$ol.size.cy > _$eI) _$eI = _$ol.size.cy;
        } else {
            if (_$ol.size.cx > _$eI) _$eI = _$ol.size.cx;
        }
    }
    return _$eI;
};
_$6R.prototype._$38 = function (_$cH, _$mO, _$8j, _$cv, _$cE, _$9t, _$d9) {
};
_$6R.prototype._$71 = function (_$nQ, pRC) {
};
_$6R.prototype.setVisible = function (_$8e) {
    if (this._$h8 != null) {
        WidgetDockElementController.setElementVisible(this._$h8);
    }
    this._$iX = _$8e;
};
_$6R.prototype._$4S = function (g) {
};
_$6R.prototype._$qy = function (wnd, rc) {
    if (this._$h8 == null) {
    }
    if (wnd == null) {
        this._$6q(rc);
        return;
    }
    if (!this._$iy) {
        this.rect.setRect(rc);
        _$iy = true;
    }
    this._$6q(rc);
    this._$7(null, wnd);
};
_$6R.prototype._$6q = function (rc) {
    if (this._$h8 != null) {
        WidgetDockElementController._$6j(this._$h8, rc.left, rc.top);
        WidgetDockElementController._$6n(this._$h8, rc.right - rc.left, rc.bottom - rc.top);
        this._$qJ();
    }
};
_$6R.prototype._$0m = function (_$9t, iwh) {
    var _$e7 = 0;
    if (!_$9t && iwh != (this.rect.right - this.rect.left)) {
        _$e7 = iwh - (this.rect.right - this.rect.left);
        if (this._$le._$j1 == WidgetDockPatternBase._$3l) this.rect.left -= _$e7;
        this.rect.right = this.rect.left + iwh;
    } else if (_$9t && iwh != (this.rect.bottom - this.rect.top)) {
        _$e7 = iwh - (this.rect.bottom - this.rect.top);
        if (this._$le._$j1 == WidgetDockPatternBase._$3j) this.rect.top -= _$e7;
        this.rect.bottom = this.rect.top + iwh;
    }
    return _$e7;
};
_$6R.prototype._$2s = function (_$8j, _$cv, _$cE) {
    var i;
    var _$ol;
    var _$gD = 0;
    var _$eM = 0;
    for (i = _$cv; i < _$cE; i++) {
        _$ol = _$8j._panelList[i];
        _$eM = _$ol._$nQ._$2r();
        _$gD += _$eM;
    }
    return _$gD;
};
_$6R.prototype._$2t = function (_$8j, _$dS, _$mI) {
    var _$e1 = _$8j.getPanelNum();
    var _$fi;
    var bin;
    var i;
    var j;
    var _$ol, _$oJ;
    for (i = _$dS; i < _$e1; i++) {
        _$fi = _$mI.getPanelNum();
        bin = false;
        _$ol = _$8j._panelList[i];
        for (j = 0; j < _$fi; j++) {
            _$oJ = _$mI._panelList[j];
            if (_$ol._$nQ._$jW < _$oJ._$nQ._$jW) {
                _$mI._$4(_$ol, j);
                bin = true;
                break;
            }
        }
        if (!bin) {
            _$mI.addFloatPanel(_$ol);
        }
    }
};
_$6R.prototype._$5c = function (_$8j, _$cx, _$cw, _$cF, _$mI, _$rJ, _$9t, _$gD, _$g4, _$eX) {
    var j;
    var _$oJ;
    var _$ol;
    var szs = new _$5Y();
    var _$e1 = _$mI.getPanelNum();
    var _$ov = null;
    var _$eM = 0;
    var _$dX;
    if (_$rJ < 0) _$dX = -_$rJ; else _$dX = _$rJ;
    var _$eq = 0;
    if (_$rJ >= 0) {
        _$eq = _$e1 - 1;
    }
    if (_$rJ > 0) {
        for (j = _$e1 - 1; j >= 0; j--) {
            _$oJ = _$mI._panelList[j];
            _$ov = _$oJ._$nQ;
            var _$ds = _$ov._$2o(_$9t);
            if (_$ov._$k6 > _$ds) _$ov._$k6 = _$ds;
            if (_$oJ._$du < _$ov._$k6) {
                if ((_$dX + _$oJ._$du) > _$ov._$k6) {
                    _$dX = _$dX + _$oJ._$du - _$ov._$k6;
                    _$oJ._$du = _$ov._$k6;
                } else {
                    _$oJ._$du += _$dX;
                    _$dX = 0;
                    break;
                }
            }
        }
    } else {
        for (j = 0; j < _$e1; j++) {
            _$oJ = _$mI._panelList[j];
            _$ov = _$oJ._$nQ;
            if (_$oJ._$du > _$ov._$k6) {
                if ((_$oJ._$du - _$dX) < _$ov._$k6) {
                    _$dX = _$dX - (_$oJ._$du - _$ov._$k6);
                    _$oJ._$du = _$ov._$k6;
                } else {
                    _$oJ._$du -= _$dX;
                    _$dX = 0;
                    break;
                }
            }
        }
    }
    j = 0;
    while (j < _$e1 && _$dX > 0) {
        _$oJ = _$mI._panelList[_$eq];
        _$ov = _$oJ._$nQ;
        if (_$rJ >= 0) {
            _$eM = _$ov._$2o(_$9t);
            if (_$9t && (_$oJ._$du < _$eM)) {
                if ((_$eM - _$oJ._$du) >= _$dX) {
                    _$oJ._$du += _$dX;
                    break;
                } else {
                    _$dX -= (_$eM - _$oJ._$du);
                    _$oJ._$du = _$eM;
                }
            } else if (!_$9t && (_$oJ._$du < _$eM)) {
                if ((_$eM - _$oJ._$du) >= _$dX) {
                    _$oJ._$du += _$dX;
                    break;
                } else {
                    _$dX -= (_$eM - _$oJ._$du);
                    _$oJ._$du = _$eM;
                }
            }
        } else {
            _$eM = _$ov._$2r();
            if (_$9t && (_$oJ._$du > _$eM)) {
                if ((_$oJ._$du - _$eM) >= _$dX) {
                    _$oJ._$du = _$oJ._$du - _$dX;
                    break;
                } else {
                    _$dX -= (_$oJ._$du) - _$eM;
                    _$oJ._$du = _$eM;
                }
            } else if (!_$9t && (_$oJ._$du > _$eM)) {
                if ((_$oJ._$du - _$eM) >= _$dX) {
                    _$oJ._$du = _$oJ._$du - _$dX;
                    break;
                } else {
                    _$dX -= (_$oJ._$du - _$eM);
                    _$oJ._$du = _$eM;
                }
            }
        }
        if (_$rJ >= 0) {
            _$eq--;
        } else {
            _$eq++;
        }
        j++;
    }
    var _$fJ;
    var i;
    var _$dS = _$cx;
    _$eX[0] = 0;
    for (i = _$cw; i < _$cF; i++) {
        _$ol = _$8j._panelList[i];
        _$fJ = _$ol._$du;
        _$ov = _$ol._$nQ;
        if (_$9t) {
            szs.cy = _$ol.size.cy;
            if (szs.cy < _$eX[0]) szs.cy = _$eX[0];
            szs.cx = _$fJ;
        } else {
            szs.cy = _$fJ;
            szs.cx = _$ol.size.cx;
            if (szs.cx < _$eX[0]) szs.cx = _$eX[0];
        }
        _$ov._$5x(_$g4, _$dS, szs, _$gD, _$gD - _$dS - _$fJ);
        if (_$9t) {
            if (szs.cy > _$eX[0]) _$eX[0] = szs.cy;
            _$dS += szs.cx;
        } else {
            _$dS += szs.cy;
            if (szs.cx > _$eX[0]) _$eX[0] = szs.cx;
        }
    }
    for (i = _$cw; i < _$cF; i++) {
        _$ol = _$8j._panelList[i];
        _$ov = _$ol._$nQ;
        _$ov._$5n(_$9t, _$g4, _$eX[0]);
    }
};
_$6R.prototype._$6w = function (_$8j, _$rJ, _$dB) {
    var i;
    var j;
    var _$ol;
    _$dB[0] = 0;
    var _$ov;
    var _$e1 = _$8j.getPanelNum();
    var _$mI = new WidgetDockFloatPanelController();
    this._$2t(_$8j, 0, _$mI);
    var _$q7 = new Rect();
    var _$9t;
    if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) _$9t = true; else _$9t = false;
    var _$dS = 0;
    var szs = new _$5Y();
    var _$gD;
    if (_$9t) {
        szs.cy = this.rect.bottom - this.rect.top;
        _$gD = this.rect.right - this.rect.left;
    } else {
        _$gD = this.rect.bottom - this.rect.top;
        szs.cx = this.rect.right - this.rect.left;
    }
    var _$eM = 0;
    var _$eP = 0;
    var _$go = 0;
    var _$gp = 0;
    var _$dJ = new Array(_$e1);
    var ihw = 0;
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j._panelList[i];
        _$eM = _$ol._$nQ._$2r();
        if ((_$eP + _$eM) > _$gD) {
            if (i >= 1) {
                var _$pS = _$8j._panelList[i - 1];
                if (_$gD >= _$eP) _$pS._$du = (_$gD - _$eP) + _$pS._$du;
            }
            _$eP = 0;
            if (_$gp > 0) {
                _$go++;
            }
            _$gp = 0;
        }
        _$gp++;
        _$ol._$du = _$eM;
        _$ol._$go = _$go;
        ihw = _$ol._$nQ._$2q(_$9t);
        if (ihw > _$dJ[_$go]) _$dJ[_$go] = ihw;
        _$eP += _$eM;
    }
    _$go++;
    this._$ke = new Array(_$go);
    _$gp = 0;
    var _$g4 = 0;
    var _$gw = 0;
    if (_$go > 1) {
        if (_$rJ < 0) {
            for (j = 0; j < _$go - 1; j++) {
                _$dS = 0;
                var _$eJ = 0;
                for (i = _$gw; i < _$e1; i++) {
                    if (_$9t) {
                        szs.cy = this._$ke[j];
                    } else szs.cx = this._$ke[j];
                    _$ol = _$8j._panelList[i];
                    if (_$ol._$go == j) {
                        _$ov = _$ol._$nQ;
                        if (_$9t) szs.cx = _$ol._$du; else szs.cy = _$ol._$du;
                        _$ov._$5x(_$g4, _$dS, szs, _$gD, _$gD - _$dS - _$ol._$du);
                        if (_$9t) {
                            if (_$eJ < szs.cy) _$eJ = szs.cy;
                            _$dS += szs.cx;
                        } else {
                            if (_$eJ < szs.cx) _$eJ = szs.cx;
                            _$dS += szs.cy;
                        }
                        this._$ke[j] = _$eJ;
                    } else {
                        var k;
                        for (k = _$gw; k < i; k++) {
                            _$ol = _$8j._panelList[k];
                            _$ov = _$ol._$nQ;
                            _$ov._$5n(_$9t, _$g4, _$eJ);
                        }
                        break;
                    }
                }
                _$g4 += this._$ke[j];
                _$gw = i;
            }
        }
        _$eP = 0;
        for (i = _$gw; i < _$e1; i++) {
            _$ol = _$8j._panelList[i];
            if (_$9t) {
                _$ol.size.cx = _$ol._$du;
            } else {
                _$ol.size.cy = _$ol._$du;
            }
            _$eP += _$ol._$du;
        }
        if (_$9t) {
            _$rJ = (rect.right - rect.left - _$eP);
        } else {
            _$rJ = (rect.bottom - rect.top - _$eP);
        }
        _$mI._$5R();
        this._$2t(_$8j, _$gw, _$mI);
        _$e1 = _$mI.getPanelNum();
        this._$js = _$go;
    } else {
        _$g4 = 0;
        _$gw = 0;
        for (j = 0; j < _$e1; j++) {
            _$ol = _$8j._panelList[j];
            _$ov = _$ol._$nQ;
            _$ov._$25(_$q7);
            _$ol.size.cx = _$q7.right - _$q7.left;
            _$ol.size.cy = _$q7.bottom - _$q7.top;
            if (_$9t) {
                _$ol._$du = _$q7.right - _$q7.left;
            } else {
                _$ol._$du = _$q7.bottom - _$q7.top;
            }
        }
    }
    for (i = 0; i < _$go - 1; i++) {
        _$gp += _$ke[i];
    }
    var _$eX = new Array(1);
    this._$5c(_$8j, 0, _$gw, _$8j.getPanelNum(), _$mI, _$rJ, _$9t, _$gD, _$g4, _$eX);
    this._$ke[_$go - 1] = _$eX[0];
    _$gp += _$eX[0];
    if (_$9t) _$dB[0] = _$gp - (this.rect.bottom - this.rect.top); else _$dB[0] = _$gp - (this.rect.right - this.rect.left);
    if (_$dB[0] != 0) {
        if (this._$le._$j1 == WidgetDockPatternBase._$3k) {
            this.rect.right += _$dB[0];
        } else if (this._$le._$j1 == WidgetDockPatternBase._$3l) {
            this.rect.left -= _$dB[0];
        } else if (this._$le._$j1 == WidgetDockPatternBase._$3m) {
            this.rect.bottom += _$dB[0];
        } else if (this._$le._$j1 == WidgetDockPatternBase._$3j) {
            this.rect.top -= _$dB[0];
        }
        this._$js = _$go;
    }
};
_$6R.prototype._$04 = function (_$9t, _$8j, _$8i, _$dL, _$dF, _$dG) {
    _$8i[0] = false;
    _$dL[0] = 0;
    var i;
    var _$e1 = _$8j.getPanelNum();
    var _$ol;
    var _$q7 = new Rect();
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j._panelList[i];
        _$ol._$nQ._$25(_$q7);
        if (_$9t) _$dL[0] += _$q7.right - _$q7.left; else _$dL[0] += _$q7.bottom - _$q7.top;
        if (_$ol._$nQ._$ix) {
            _$8i[0] = true;
            break;
        }
        if (_$9t && (_$q7.right > (rect.right - rect.left))) {
            _$dF[0] = i;
            _$dG[0] = _$q7.left;
            break;
        } else if (!_$9t && (_$q7.bottom > (rect.bottom - rect.top))) {
            _$dF[0] = i;
            _$dG[0] = _$q7.top;
            break;
        }
    }
    var j;
    for (j = i + 1; j < _$e1; j++) {
        _$ol = _$8j._panelList[j];
        _$ol._$nQ._$25(_$q7);
        if (_$9t) _$dL[0] += _$q7.right - _$q7.left; else _$dL[0] += _$q7.bottom - _$q7.top;
    }
};
_$6R.prototype._$g = function (_$8h, _$cP, _$8c, _$pC) {
    var _$pH = new Location();
    _$pH.x = _$pC.x;
    _$pH.y = _$pC.y;
    WidgetDockPatternBase._$6a(this._$je, _$pH);
    var _$dR = this._$2s(_$8h, 0, _$cP);
    var _$dQ = this._$2H(_$8h, 0, _$cP, false);
    var _$e1 = _$8h.getPanelNum();
    var _$dy = this._$2s(_$8h, _$cP, _$e1);
    var _$dx = this._$2H(_$8h, _$cP, _$e1, false);
    var _$oL = _$dR;
    var _$oM = _$dQ;
    var _$dP = this._$2H(_$8h, 0, _$cP, true);
    var _$dw = this._$2H(_$8h, _$cP, _$8h.getPanelNum(), true);
    var _$dO, _$dv;
    var _$or = _$8h._panelList[_$cP];
    var _$qk = new Rect();
    _$or._$nQ._$25(_$qk);
    var _$8f = true;
    var _$8w = new WidgetDockFloatPanelController();
    var _$7x = new WidgetDockFloatPanelController();
    var _$8A = new WidgetDockFloatPanelController();
    var _$7y = new WidgetDockFloatPanelController();
    var i = 0;
    for (i = 0; i < _$cP; i++) {
        _$or = _$8h._panelList[i];
        if (_$8c) _$or._$du = _$or._$nQ._$cg(); else _$or._$du = _$or._$nQ._$bU();
        _$8w.addFloatPanel(_$8h._panelList[i]);
    }
    for (i = _$cP; i < _$e1; i++) {
        _$or = _$8h._panelList[i];
        if (_$8c) _$or._$du = _$or._$nQ._$cg(); else _$or._$du = _$or._$nQ._$bU();
        _$7x.addFloatPanel(_$8h._panelList[i]);
    }
    this._$2t(_$8w, 0, _$8A);
    this._$2t(_$7x, 0, _$7y);
    var _$dT, _$dz;
    if (_$8c) {
        if ((_$oL + _$dx) < (this.rect.right - this.rect.left)) {
            _$oL = this.rect.right - this.rect.left - _$dx;
        }
        if ((_$oM + _$dy) > (this.rect.right - this.rect.left)) _$oM = this.rect.right - this.rect.left - _$dy;
        if (_$pH.x < _$oL) _$pH.x = _$oL;
        if (_$pH.x > _$oM) _$pH.x = _$oM;
        _$dO = _$pH.x - _$dP;
        _$dv = this.rect.right - this.rect.left - _$pH.x - _$dw;
        if (_$pH.x == _$qk.left) _$8f = false;
        _$dT = _$pH.x;
        _$dz = this.rect.right - this.rect.left;
    } else {
        if ((_$oL + _$dx) < (this.rect.bottom - this.rect.top)) {
            _$oL = this.rect.bottom - this.rect.top - _$dx;
        }
        if ((_$oM + _$dy) > (this.rect.bottom - this.rect.top)) _$oM = rect.bottom - rect.top - _$dy;
        if (_$pH.y < _$oL) _$pH.y = _$oL;
        if (_$pH.y > _$oM) _$pH.y = _$oM;
        _$dO = _$pH.y - _$dP;
        _$dv = this.rect.bottom - this.rect.top - _$pH.y - _$dw;
        if (_$pH.y == _$qk.top) _$8f = false;
        _$dT = _$pH.y;
        _$dz = this.rect.bottom - this.rect.top;
    }
    if (_$8f) {
        var _$eX = new Array(1);
        this._$5c(_$8w, 0, 0, _$8w.getPanelNum(), _$8A, _$dO, _$8c, _$dT, 0, _$eX);
        var _$eW = _$eX[0];
        this._$5c(_$7x, _$dT, 0, _$7x.getPanelNum(), _$7y, _$dv, _$8c, _$dz, 0, _$eX);
        if (_$eX[0] > _$eW) _$eW = _$eX[0];
        var _$e7 = this._$0m(_$8c, _$eW);
        if (_$e7 != 0) {
            var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
            this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$e7);
        }
        for (i = 0; i < _$8h.getPanelNum(); i++) {
            _$or = _$8h._panelList[i];
            _$ov = _$or._$nQ;
            _$ov._$5n(_$8c, 0, _$eW);
            if (_$8c) _$ov._$k6 = _$ov._$cg(); else _$ov._$k6 = _$ov._$bU();
        }
    }
};
_$6R.prototype._$5z = function (_$mO, _$pC, _$q5) {
    var pp = new Location();
    pp.x = _$q5.left;
    pp.y = _$q5.top;
    WidgetDockPatternBase._$6a(this._$je, pp);
    var _$ov = _$mO;
    var _$9t = false;
    if (_$mO._$j0 == WidgetDockPatternBase._$3j || _$mO._$j0 == WidgetDockPatternBase._$3m) _$9t = true;
    var _$8j = new WidgetDockFloatPanelController();
    var _$er = this._$2l(_$8j, _$mO);
    var _$dK = new Array(1);
    var _$dF = new Array(1);
    var _$dG = new Array(1);
    var _$8i = new Array(1);
    this._$04(_$9t, _$8j, _$8i, _$dK, _$dF, _$dG);
    if (_$8i[0]) {
        this._$g(_$8j, _$er, _$9t, _$pC);
        return;
    }
    if (_$ov._$ix) {
        var _$qv = new Rect();
        WidgetDockPatternBase._$2P(_$ov, _$qv);
        if (_$9t) {
            if ((_$pC.x > _$qv.left) && (_$pC.x < _$qv.right)) return;
        } else {
            if ((_$pC.y > _$qv.top) && (_$pC.y < _$qv.bottom)) return;
        }
    }
    var _$o0 = _$mO._$kA;
    this._$11(_$o0);
    var _$eT = new Array(1);
    var _$pN = this._$2b(pp, _$eT);
    this._$c(_$mO, _$pN);
    this._$7(null, _$mO);
};
_$6R.prototype._$0B = function (_$mO, _$nq, _$cD) {
    if (_$nq == null) return;
    if (_$cD == WidgetDockPatternBase._$3k || _$cD == WidgetDockPatternBase._$3m) {
        this._$c(_$mO, _$nq);
    } else {
        var _$oU = _$nq._$oV;
        if (_$oU == null || _$oU._$pr == _$nq) _$nq = null; else {
            if (_$oU._$pr._$od == null && _$oU._$pr._$pr == null) _$nq = _$oU._$pr; else if (_$oU._$pr._$od != null) {
                _$nq = _$oU._$pr._$od;
            }
        }
        this._$c(_$mO, _$nq);
    }
};
_$6R.prototype._$0B = function (_$mO, _$pC, _$87) {
    var _$eT = new Array(1);
    if (_$87) WidgetDockPatternBase._$6a(_$je, _$pC);
    var _$pN = this._$2b(_$pC, _$eT);
    _$mO._$jr = _$eT[0];
    this._$c(_$mO, _$pN);
};
_$6R.prototype._$c = function (_$mO, _$mR) {
    if (this._$kI._$od == null && this._$kI._$pr == null && this._$kI._$of == null) {
        this._$kI._$of = _$mO;
        _$mO._$kA = this._$kI;
        return;
    }
    {
        var _$nI = new _$F();
        _$nI._$of = _$mO;
        _$mO._$kA = _$nI;
        if (_$mR != null) {
            var _$pm = new _$F();
            if (_$mR._$oV == null) {
                _$pm._$of = _$mR._$of;
                _$pm._$8y = _$mR._$8y;
                if (_$mR._$of._$kA == _$mR) _$mR._$of._$kA = _$pm;
                if (_$mR._$of._$l6 == _$mR) _$mR._$of._$l6 = _$pm;
                _$mR._$od = _$nI;
                _$nI._$oV = _$mR;
                _$mR._$pr = _$pm;
                _$pm._$oV = _$mR;
                _$mR._$of = null;
            } else {
                var _$oH = _$pm;
                if (_$mR._$oV._$pr == _$mR) {
                    _$oH._$oV = _$mR._$oV;
                    _$mR._$oV._$pr = _$oH;
                    _$oH._$pr = _$mR;
                    _$mR._$oV = _$oH;
                    _$oH._$od = _$nI;
                    _$nI._$oV = _$oH;
                } else {
                    var _$oI;
                    _$oI = _$mR._$oV._$pr;
                    _$oH._$oV = _$mR._$oV;
                    _$mR._$oV._$pr = _$oH;
                    _$oH._$pr = _$oI;
                    _$oI._$oV = _$oH;
                    _$oH._$od = _$mR;
                    _$mR._$oV = _$oH;
                    _$oH._$oV._$od = _$nI;
                    _$nI._$oV = _$oH._$oV;
                }
            }
        } else {
            var _$o8 = this._$kI;
            while (_$o8._$pr != null) _$o8 = _$o8._$pr;
            var _$op = new _$F();
            _$op._$of = _$o8._$of;
            _$op._$8y = _$o8._$8y;
            if (_$o8._$of != null) {
                if (_$o8._$of._$kA == _$o8) _$o8._$of._$kA = _$op;
                if (_$o8._$of._$l6 == _$o8) _$o8._$of._$l6 = _$op;
            }
            _$o8._$of = null;
            _$o8._$od = _$op;
            _$op._$oV = _$o8;
            _$o8._$pr = _$nI;
            _$nI._$oV = _$o8;
        }
    }
};
_$6R.prototype._$ah = function (_$ax, _$99) {
    this._$km = 0;
    widgetDockPanel.prototype._$ah.call(this, _$ax, _$99);
};
_$6R.prototype._$7n = function (_$q0) {
    if (this._$je != null) this._$je.add(_$q0);
};
_$6R.prototype._$rw = function (mainPattern) {
    if (this._$je != null) {
    }
};
_$6R.prototype._$66 = function (layout) {
};
_$6R.prototype._$63 = function (mainPattern, layout, _$mS, _$aP) {
};
_$6R.prototype.initPanelInfoLayout = function (mainPattern, layout, _$mS) {
};

function _$K(_$7R) {
    _$K.baseConstructor.call(this, _$7R);
    this._$kK = null;
    this._$iG = false;
    this._$lq = null;
    this._$ln = null;
    this._$kV = null;
    this._$it = false;
    this._$ha = new Array();
    this._$kX = null;
};WidgetDockPrototype.bind(_$K, WidgetDockPatternBase);
_$K._$kL = new Array();
_$K.prototype._$bE = function () {
    var _$9U = new Array();
    var i;
    var cnt = this._$ha.length;
    for (i = 0; i < cnt; i++) {
        _$9U.push(this._$ha[i]);
    }
    return _$9U;
};
_$K.prototype._$2v = function (rc) {
    if (rc != null) {
        if (this._$lq != null) {
            rc.x = this._$lq.x;
            rc.y = this._$lq.y;
        } else {
            rc.x = 100;
            rc.y = 100;
        }
        if (this._$ln != null) {
            rc.width = this._$ln.width;
            rc.height = this._$ln.height;
        } else {
            rc.width = 200;
            rc.height = 300;
        }
    }
};
_$K.prototype._$40 = function (_$cS, _$do, _$dd, _$cz) {
    if (this._$lq == null) this._$lq = new Location();
    this._$lq.x = _$cS;
    this._$lq.y = _$do;
    if (this._$ln == null) this._$ln = new Size();
    this._$ln.width = _$dd - _$cS;
    this._$ln.height = _$cz - _$do;
    ;
};
_$K.prototype._$qF = function (_$a0) {
    if (_$a0 == null) return;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._elementWithType[i] == _$a0) {
            this._elementWithType[i] = null;
            this._$5z();
            return;
        }
    }
};
_$K.prototype._$7v = function (_$a0) {
    this._$qF(this._elementWithType[1]);
    var _$tc = WidgetDockElementController._$2k(this._$he);
    var _$tn = WidgetDockElementController._$2M(this._$he);
    this._elementWithType[1] = _$a0._$h8;
    if (WidgetDockController._isHasCanvasContext) {
        WidgetDockElementController._$6j(_$a0._$h8, 3 + _$tc, 3 + _$tn);
        _$a0._$h8.width = this._$hh.width - 6;
    } else WidgetDockElementController.addFixedPanel(_$a0._$h8, 3 + _$tc, 3 + _$tn, parseInt(this._$hh.style.width) - 6, parseInt(_$a0._$h8.style.height));
    this._$5z();
};
_$K.prototype.Add = function (com) {
    var vt = 0;
};
_$K.prototype._$d = function (com) {
    var vs = 0;
};
_$K.prototype._$5E = function (com) {
};
_$K.prototype._$2g = function () {
};
_$K.prototype._$7p = function () {
    if (this._elementWithType[1] != null) return;
    var pan = new _$4d();
    pan._$ru(this);
    pan.setVisible(true);
    pan.setSize(pan._$c6());
    this._$7v(pan);
    this.Add(pan);
    this._$kX = pan;
    this._$kX._$qJ();
};
_$K.prototype._$7m = function (_$7J) {
    if (this._elementWithType[1] != null) {
        this._elementWithType[1]._$r6(_$7J);
    }
};
_$K._$0y = function (_$q2) {
    var _$og = new _$K(false);
    _$og._$lq = new Location();
    _$og._$lq.x = _$q2.x;
    _$og._$lq.y = _$q2.y;
    _$og._$ln = new Size();
    _$og._$ln.width = _$q2.width;
    _$og._$ln.height = _$q2.height;
    _$K._$kL.push(_$og);
    return _$og;
};
_$K.prototype._$0v = function (_$mL) {
};
_$K.prototype._$4R = function (_$ts, _$h1) {
    this._$iG = true;
    return _$kK._$15(_$ts, _$h1);
};
_$K.prototype._$v = function (_$mO) {
};
_$K.prototype._$n = function (_$b9) {
};
_$K.prototype._$10 = function () {
    _$he = null;
};
_$K.prototype._$01 = function () {
    if (this._$it) {
        var _$ps = this._patternPositionList[0]._patternSub._panelList[0];
        if (!_$ps._$iX) {
            _$lq = _$he._$bZ();
            _$ln = _$he._$c8();
            _$10();
        }
    } else _$10();
};
_$K.prototype._$R = function (_$mX, _$mU, _$pC, _$nz) {
    if (!this._$is || !this._$it) return 0xff;
    if (!_$mX._$it) return 0xff;
    if (this._$kK != null && this._$kK._$iq) {
        _$mX._$j1 = 0xff;
        return 0xff;
    }
    var _$qf = new _$5g();
    var _$qe = new _$5g();
    _$qe = _$mX._$lC;
    var _$el = WidgetDockPatternBase._$2z(_$qe);
    var _$gK = WidgetDockPatternBase._$2A(_$qe);
    var _$gk = _$gK < _$el ? _$gK : _$el;
    _$mX._$iM = false;
    _$nz.cx = _$gK;
    _$nz.cy = _$el;
    if (!this._$1h(_$mX, _$nz, _$gK, _$el, _$qe, _$pC)) return _$mX._$j1;
    this.getWindowRect(_$qf);
    _$qf.left += this._$jF[0];
    _$qf.right -= this._$jF[2];
    _$qf.top += this._$jF[1];
    _$qf.bottom -= this._$jF[3];
    var _$9j = WidgetDockPatternBase._$m(_$qf, _$pC);
    _$mX._$ka = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0xff;
    if ((_$9j != 0xff) && ((_$9j % 2) == 0)) {
        _$mX._$j1 = parseInt(_$9j / 2);
        _$mU._$2G(_$nz, _$gk, _$qf, false);
        _$mX._$iM = true;
        WidgetDockPatternBase._$2c(_$mX, _$qf, _$nz);
        return _$mX._$j1;
    }
    var _$9z;
    var _$8E = true;
    var _$o4 = null;
    var _$pP = new Array(1);
    var _$d1 = new Array(1);
    _$9z = this._$02(_$mX, 0, _$pC, _$nz, _$gk, _$pP, _$d1);
    if (_$9z != 0xff) {
        if (((_$9z + 1) % 2) == 0) {
            _$o4 = _$pP[0];
        }
    } else return 0xff;
    if (_$mX._$kx == _$o4) {
        _$mX._$j1 = 0xff;
        return 0xff;
    }
    _$mX._$j1 = parseInt(_$9z / 2);
    if (_$o4 != null) _$mU._$2G(_$nz, _$gk, _$qf, true); else {
        _$qf.left = _$qf.top = 0;
        _$qf.right = _$nz.cx;
        _$qf.bottom = _$nz.cy;
        _$mU._$2G(_$nz, _$gk, _$qf, false);
    }
    _$mU._$67(0, _$o4, parseInt(_$9z / 2));
    if (_$mX._$ky == null && _$mX._$j1 == 0 && !_$mX._$iM) {
        _$mX._$j1 = 0xff;
    }
    return _$mX._$j1;
};
_$K.prototype._$2e = function (_$n7, _$7L) {
    var i;
    var d;
    _$n7[0] = this._$jF[0];
    _$n7[2] = this._$jF[2];
    _$n7[3] = this._$jF[3];
    _$n7[1] = 3;
    if (this._elementWithType[1] != null) {
        _$n7[1] += WidgetDockElementController._$2h(this._elementWithType[1]);
    }
};
_$K.prototype._$mC = function (_$eu, _$gC, iw, ih) {
    var _$gK, _$el;
    _$el = ih;
    _$gK = iw;
    if (this._elementWithType[1] != null) {
        WidgetDockElementController._$6j(this._elementWithType[1], 3 + WidgetDockElementController._$2k(this._$he), 3 + WidgetDockElementController._$2M(this._$he));
        WidgetDockElementController._$6n(this._elementWithType[1], iw, this._$jF[1] - 3);
        if (this._$kX != null) this._$kX._$qJ();
    }
    var _$cp = 0;
    var _$e1 = this._patternPositionList[0]._patternSub.getPanelNum();
    if (_$e1 == 1) {
        var _$ps = this._patternPositionList[0]._patternSub._panelList[0];
        if (_$ps._$le != null) {
            _$ps._$le.setSize(0, 0);
        }
        var rc = new _$5g();
        rc.left = _$eu;
        rc.top = _$gC;
        rc.right = _$eu + iw;
        rc.bottom = _$gC + ih;
        _$ps.rect.setRect(rc);
        this._$6v(_$ps._$kI, rc, WidgetDockPatternBase._$5l);
        this._$6x(WidgetDockPatternBase._$3k, -32767, 32767);
    }
    return 0;
};
_$K.prototype._$l = function (_$mO) {
    if (!this._$4s(_$mO, true)) {
        if (this._elementWithType[1] != null) WidgetDockElementController._$5I(WidgetDockController._elementRootId, this._elementWithType[1]);
        this._$qF(this._elementWithType[1]);
        this._$5E(this._$kX);
    }
};
_$K.prototype._$4s = function (_$mO, _$8e) {
    var _$e1 = 0;
    var _$nT = null;
    var _$fY = this._patternPositionList[0]._patternSub.getPanelNum();
    if (_$fY < 1) return false;
    _$nT = this._patternPositionList[0]._patternSub._panelList[0]._$kI;
    _$e1 = _$nT._$4s(_$mO, _$8e);
    if (_$e1 < 2) return false;
    return true;
};
_$K.prototype._$bP = function () {
    var _$e1 = 0;
    var _$nT = null;
    var _$fY = this._patternPositionList[0]._patternSub.getPanelNum();
    if (_$fY < 1) return null;
    var _$oq = new WidgetDockFloatPanelController();
    _$nT = this._patternPositionList[0]._patternSub._panelList[0]._$kI;
    _$nT._$2Q(_$oq);
    var _$at = new Array(_$oq.getPanelNum());
    var i;
    for (i = 0; i < _$oq.getPanelNum(); i++) _$at[i] = _$oq._panelList[i];
    return _$at;
};
_$K.prototype._$3G = function (_$nc, _$mX, _$n1) {
    var _$ps = this._patternPositionList[0]._patternSub._panelList[0];
    var _$pp = _$ps._$kI;
    var _$8E = false;
    if (_$mX._$j1 == WidgetDockPatternBase._$3m || _$mX._$j1 == WidgetDockPatternBase._$3k) _$8E = true;
    _$mX._$ka = 0;
    _$pp._$3F(_$nc, _$mX._$j1, _$8E, _$n1);
    _$mX._$j1 = 0;
    _$nc._$6m(0, this);
};
_$K.prototype._$1g = function (_$mX, _$n1) {
    var _$ps = this._patternPositionList[0]._patternSub._panelList[0];
    var _$pp = _$ps._$kI;
    _$mX._$kx._$jr = 0;
    var _$8E = false;
    if (_$mX._$j1 == WidgetDockPatternBase._$3m || _$mX._$j1 == WidgetDockPatternBase._$3k) _$8E = true;
    var _$oD = new _$F();
    _$oD._$of = _$mX._$kx;
    _$mX._$kx._$kA = _$oD;
    _$pp._$3F(_$oD, _$mX._$j1, _$8E, _$n1);
    _$mX._$kx._$j0 = 0;
};
_$K.prototype._$53 = function (_$n5) {
    WidgetDockPatternBase.prototype._$53.call(this, _$n5);
    var _$e1 = this._patternPositionList[0]._patternSub.getPanelNum();
    if (_$e1 > 0) {
        var _$ps = this._patternPositionList[0]._patternSub._panelList[0];
        if (_$ps._$kI._$od == null && _$ps._$kI._$pr == null && _$ps._$kI._$of == null && (_$ps._$kI._$l1 == null || (_$ps._$kI._$l1 != null && _$ps._$kI._$l1.length < 1))) {
            _$e1 = _$K._$kL.length;
            var i;
            for (i = 0; i < _$e1; i++) {
                if (_$K._$kL[i] == this) {
                    _$K._$kL.splice(i, 1);
                    break;
                }
            }
        }
    } else {
        _$e1 = _$K._$kL.length;
        var i;
        for (i = 0; i < _$e1; i++) {
            if (_$K._$kL[i] == this) {
                _$K._$kL.splice(i, 1);
                break;
            }
        }
    }
};

function _$6A(_$a7) {
    this._$hJ = null;
    this._$jU = 0;
    this._$il = false;
    this._$mJ = new Location();
    this._$mK = new LocationSize();
    this._$j6 = null;
    this._$kQ = null;
    this._$hL;
    this._$ld = null;
    this._$l5 = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController._$0z("canvas", _$a7);
    } else {
        this._$h8 = WidgetDockElementController._$0z("div", _$a7);
    }
    this._$h8.style.border = "1px solid";
    this._$h8._$4x = this;
    this._$h8.onmousedown = _$6A._$4h;
    this._$h8.onmousemove = _$6A._$4g;
    this._$h8._$mF = _$6A._$mh;
    this._$h8.style.background = 'ButtonFace';
};_$6A._$7a = 0;
_$6A._$4D = 1;
_$6A._$1t = 2;
_$6A._$60 = 3;
_$6A._$7b = 4;
_$6A._$7c = 5;
_$6A._$1u = 6;
_$6A._$1v = 7;
_$6A.icc = 0;
_$6A._$p = 4;
_$6A._$lL = new _$5Y();
_$6A._$4h = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4x._$mw(e); else e.srcElement._$4x._$mw(e);
    return false;
};
_$6A._$4g = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4x.mouseMove(e);
    } else {
        e.srcElement._$4x.mouseMove(e);
    }
};
_$6A._$mh = function (e) {
    return false;
};
_$6A.prototype.mouseUp = function (e) {
    WidgetDockController._$6s(false);
    this._$il = false;
};
_$6A.prototype._$m3 = function (e) {
    if (!this._$il) {
    }
};
_$6A.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = WidgetDockElementController._$2k(this._$h8);
        rc.top = WidgetDockElementController._$2M(this._$h8);
        if (WidgetDockController._isHasCanvasContext) {
            rc.right = rc.left + this._$h8.width;
            rc.bottom = rc.top + this._$h8.height;
        } else {
            rc.right = rc.left + parseInt(this._$h8.style.width);
            rc.bottom = rc.top + parseInt(this._$h8.style.height);
        }
    }
};
_$6A.prototype._$mz = function (e) {
};
_$6A.prototype.mouseMove = function (e) {
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    if (!this._$il) this._$f4(pt);
    if (this._$jU >= 0) {
        if (this._$jU == _$6A._$7a || this._$jU == _$6A._$1t) {
            this._$h8.style.cursor = "e-resize";
        } else if (this._$jU == _$6A._$60 || this._$jU == _$6A._$4D) {
            this._$h8.style.cursor = "n-resize";
        } else if (this._$jU == _$6A._$7b) {
            this._$h8.style.cursor = "nw-resize";
        } else if (this._$jU == _$6A._$7c) {
            this._$h8.style.cursor = "sw-resize";
        } else if (this._$jU == _$6A._$1u) {
            this._$h8.style.cursor = "ne-resize";
        } else {
            this._$h8.style.cursor = "se-resize";
        }
    } else {
    }
};
_$6A.prototype._$mw = function (e) {
    if (this._$il) return;
    WidgetDockWindow._$hK = this;
    WidgetDockController._$6s(true);
    this._$il = true;
    if (this._$ld != null && this._$ld._$hJ != null && !_$ld._$hJ._$it) {
    }
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    if (this._$jU >= 0) {
        this._$mJ.x = WidgetDockElementController._$2k(this._$h8);
        this._$mJ.y = WidgetDockElementController._$2M(this._$h8);
        this._$mK.x = this._$mJ.x;
        this._$mK.y = this._$mJ.y;
        if (WidgetDockController._isHasCanvasContext) {
            this._$mK.width = this._$h8.width;
            this._$mK.height = this._$h8.height;
        } else {
            this._$mK.width = parseInt(this._$h8.style.width);
            this._$mK.height = parseInt(this._$h8.style.height);
        }
        this._$mJ.x = pt.x;
        this._$mJ.y = pt.y;
    }
};
_$6A.prototype._$ms = function (e) {
    if (!this._$il) return;
    if (this._$jU < 0) return;
    var _$pL = new Location();
    WidgetDockElementController._$2D(e, _$pL);
    var rt = new LocationSize();
    rt.x = this._$mK.x;
    rt.y = this._$mK.y;
    rt.width = this._$mK.width;
    rt.height = this._$mK.height;
    if (this._$jU == _$6A._$1t) rt.width = rt.width + _$pL.x - this._$mJ.x; else if (this._$jU == _$6A._$7a) {
        rt.width = rt.width + this._$mJ.x - _$pL.x;
    } else if (this._$jU == _$6A._$60) rt.height = rt.height + _$pL.y - this._$mJ.y; else if (this._$jU == _$6A._$4D) {
        rt.height = rt.height + this._$mJ.y - _$pL.y;
    } else if (this._$jU == _$6A._$7c) {
        rt.width = rt.width + this._$mJ.x - _$pL.x;
        rt.height = rt.height + _$pL.y - this._$mJ.y;
    } else if (this._$jU == _$6A._$7b) {
        rt.width = rt.width + this._$mJ.x - _$pL.x;
        rt.height = rt.height + this._$mJ.y - _$pL.y;
    } else if (this._$jU == _$6A._$1v) {
        rt.width = rt.width + _$pL.x - this._$mJ.x;
        rt.height = rt.height + _$pL.y - this._$mJ.y;
    } else {
        rt.width = rt.width + _$pL.x - this._$mJ.x;
        rt.height = rt.height + this._$mJ.y - _$pL.y;
    }
    this._$sC(_$pL, rt);
    if (this._$j6 != null && !this._$j6._$S()) {
        this._$j6._$lO._$aw();
    }
    if (this._$jU >= 0) {
        if (this._$jU == _$6A._$7a || this._$jU == _$6A._$1t) {
            this._$h8.style.cursor = "e-resize";
        } else if (this._$jU == _$6A._$60 || this._$jU == _$6A._$4D) {
            this._$h8.style.cursor = "n-resize";
        } else if (this._$jU == _$6A._$7b) {
            this._$h8.style.cursor = "nw-resize";
        } else if (this._$jU == _$6A._$7c) {
            this._$h8.style.cursor = "sw-resize";
        } else if (this._$jU == _$6A._$1u) {
            this._$h8.style.cursor = "ne-resize";
        } else {
            this._$h8.style.cursor = "se-resize";
        }
    } else {
    }
};
_$6A.prototype._$sC = function (_$pL, rt) {
    var _$8K = true;
    if (this._$jU == _$6A._$4D || this._$jU == _$6A._$60) _$8K = false;
    if (this._$j6 != null) this._$j6._$bA(rt.width, rt.height, _$lL, _$8K);
    if (this._$ld != null && this._$ld._$hJ != null && !this._$ld._$hJ._$it) {
        rt.width = _$lL.cx;
        rt.height = _$lL.cy;
    } else {
        if (rt.width < 100) rt.width = 100;
        if (rt.height < 100) rt.height = 100;
    }
    if (this._$jU == _$6A._$7a) {
        rt.x = this._$mK.x + _$pL.x - this._$mJ.x;
    } else if (this._$jU == _$6A._$4D) {
        rt.y = this._$mK.y + _$pL.y - this._$mJ.y;
    } else if (this._$jU == _$6A._$7c) {
        rt.x = this._$mK.x + _$pL.x - this._$mJ.x;
    } else if (this._$jU == _$6A._$7b) {
        rt.x = this._$mK.x + _$pL.x - this._$mJ.x;
        rt.y = this._$mK.y + _$pL.y - this._$mJ.y;
    } else if (this._$jU == _$6A._$1u) {
        rt.y = this._$mK.y + _$pL.y - this._$mJ.y;
    }
    if (this._$ld != null) this._$ld._$r8(rt); else if (this._$kQ != null) {
        this._$kQ._$6p(rt.x, rt.y, rt.width, rt.height);
    } else if (this._$l5 != null) {
        this._$l5._$6o(rt.x, rt.y, rt.width, rt.height);
    }
    if (this._$ld != null && this._$ld._$hJ != null && !this._$ld._$hJ._$it) {
        if (this._$j6 == null) {
        }
        if (this._$j6 != null) {
            this._$j6._$lK.cx = rt.width;
            this._$j6._$lK.cy = rt.height;
        }
    }
    if (this._$ld != null) {
        this._$ld._$sL();
        this._$ld._$qJ();
    } else if (this._$kQ != null) {
    }
};
_$6A.prototype._$f4 = function (pt) {
    this._$jU = -1;
    var rt = new LocationSize();
    rt.x = WidgetDockElementController._$2k(this._$h8);
    rt.y = WidgetDockElementController._$2M(this._$h8);
    if (WidgetDockController._isHasCanvasContext) {
        rt.width = this._$h8.width;
        rt.height = this._$h8.height;
    } else {
        rt.width = parseInt(this._$h8.style.width);
        rt.height = parseInt(this._$h8.style.height);
    }
    if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) this._$jU = _$6A._$7c; else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) this._$jU = _$6A._$7b; else this._$jU = _$6A._$7a;
    } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) this._$jU = _$6A._$1v; else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) this._$jU = _$6A._$1u; else this._$jU = _$6A._$1t;
    }
    if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) this._$jU = _$6A._$7b; else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) this._$jU = _$6A._$1u; else this._$jU = _$6A._$4D;
    } else if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) this._$jU = _$6A._$7c; else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) this._$jU = _$6A._$1v; else this._$jU = _$6A._$60;
    }
};

function _$J(_$7R) {
    _$J.baseConstructor.call(this, _$7R);
    this._$kS;
    this._$kF = null;
};WidgetDockPrototype.bind(_$J, _$K);
_$J.prototype.getWindowRect = function (_$qb) {
    if (this._$he != null) {
        _$qb.left = WidgetDockElementController._$2k(this._$he);
        _$qb.top = WidgetDockElementController._$2M(this._$he);
        if (WidgetDockController._isHasCanvasContext) {
            _$qb.right = this._$he.width + _$qb.left;
            _$qb.bottom = this._$he.height + _$qb.top;
        } else {
            _$qb.right = parseInt(this._$he.style.width) + _$qb.left;
            _$qb.bottom = parseInt(this._$he.style.height) + _$qb.top;
        }
    }
};
_$J.prototype._$36 = function (iX, iY) {
    var _$eu = WidgetDockElementController._$2k(this._$he);
    var _$gC = WidgetDockElementController._$2M(this._$he);
    var width, height;
    if (WidgetDockController._isHasCanvasContext) {
        width = this._$he.width;
        height = this._$he.height;
    } else {
        width = parseInt(this._$he.style.width);
        height = parseInt(this._$he.style.height);
    }
    if ((iX >= _$eu) && (iX <= (_$eu + width)) && (iY >= _$gC) && (iY <= (_$gC + height))) return true;
    return false;
};
_$J.prototype.Add = function (com) {
    var _$e0 = this._$ha.length;
    var i;
    var _$8G = false;
    for (i = 0; i < _$e0; i++) {
        if (this._$ha[i] == com) {
            _$8G = true;
            break;
        }
    }
    if (!_$8G) {
        this._$ha.push(com);
    }
    if (com instanceof WidgetDockFloatPanel) {
        com._$6i(this._$jO + 1);
    } else {
        com._$6i(this._$jO + 2);
    }
};
_$J.prototype._$d = function (com) {
    var v = 0;
};
_$J.prototype._$5E = function (com) {
    var _$e0 = this._$ha.length;
    var i;
    for (i = 0; i < _$e0; i++) {
        if (this._$ha[i] == com) {
            this._$ha.splice(i, 1);
            break;
        }
    }
};
_$J.prototype._$X = function (_$tE) {
    this._$6r(this._$jO + _$tE);
};
_$J.prototype._$6r = function (_$tE) {
    this._$jO = _$tE;
    this._$74();
};
_$J.prototype._$74 = function () {
    if (this._$he != null) {
        WidgetDockElementController._$6i(this._$he, this._$jO);
        if (this._$ha != null) {
            var _$e0 = this._$ha.length;
            var i;
            for (i = 0; i < _$e0; i++) {
                if (this._$ha[i] instanceof WidgetDockFloatPanel) {
                    this._$ha[i]._$6i(this._$jO + 1);
                } else {
                    this._$ha[i]._$6i(this._$jO + 2);
                }
            }
        }
    }
};
_$J.prototype._$2g = function () {
};
_$J._$0x = function (_$q2) {
    var _$og = new _$J(false);
    _$og._$lq = new Location();
    _$og._$lq.x = _$q2.x;
    _$og._$lq.y = _$q2.y;
    _$og._$ln = new Size();
    _$og._$ln.width = _$q2.width;
    _$og._$ln.height = _$q2.height;
    return _$og;
};
_$J.prototype._$0v = function (_$mL) {
    var sp = new _$6A(_$mL);
    sp._$kQ = this;
    this._$he = sp._$h8;
    this.setVisible(false);
    this._$hh = sp._$h8;
    this._$is = true;
    this._$jF[1] = 6;
    this._$jF[3] = 6;
    this._$jF[0] = 6;
    this._$jF[2] = 6;
    this._$lz.bottom = this._$lz.top;
    return true;
};
_$J.prototype._$fT = function () {
    if (this._$he != null && this._$he.style.visibility == "visible") return true;
    return false;
};
_$J.prototype.setVisible = function (_$8e) {
    WidgetDockElementController.setElementVisible(this._$he, _$8e);
};
_$J.prototype._$n = function (_$b9) {
    this._$it = true;
    this._$is = true;
    this._$kS = _$b9._windowParent._$kS;
    this._$kF = _$b9._windowParent;
    this._$kF._$ml(this);
    var _$8q = false;
    if (this._$he != null) {
        var _$8Z = false;
    }
    if (this._$he == null || (this._$he != null && !this._$fT())) {
        if (this._$kV == null) this._$kV = _$b9._patternMain;
        this._$0v(WidgetDockController._elementRootId);
        _$8q = true;
        this._$74();
    }
    this.Add(_$b9);
    this._$kK = _$b9;
    if (_$8q) {
    }
    _$b9._$kB = this;
    this._$18(_$b9, null);
    if (!this._$fT()) {
        if (this._$ln == null) {
            this._$ln = new Size();
            this._$ln.width = _$b9._$lK.cx;
            this._$ln.height = _$b9._$lK.cy;
            this._$lq = new Location();
            this._$lq.x = _$b9._$lt.x;
            this._$lq.y = _$b9._$lt.y;
        } else {
            _$b9._$lt.x = this._$lq.x;
            _$b9._$lt.y = this._$lq.y;
            _$b9._$lK.cx = this._$ln.width;
            _$b9._$lK.cy = this._$ln.height;
        }
        var pt = new Location();
        pt.x = _$b9._$lt.x;
        pt.y = _$b9._$lt.y;
        if (pt.y < 0) pt.y = 0;
        this.setVisible(true);
        this._$6p(pt.x, pt.y, _$b9._$lK.cx, _$b9._$lK.cy);
    }
    if (_$b9._$kA != null && _$b9._$kA._$o5 != null) _$b9._$kA._$o5._$5z();
    if (!_$8q) {
        if (this._$4s(null, true)) this._$7p();
    }
};
_$J.prototype._$6p = function (_$cS, _$do, _$dq, _$cM) {
    WidgetDockElementController._$6j(this._$he, _$cS, _$do);
    if (WidgetDockController._isHasCanvasContext) {
        this._$he.width = _$dq;
        this._$he.height = _$cM;
    } else {
        this._$he.style.width = _$dq + "px";
        this._$he.style.height = _$cM + "px";
    }
    this._$mC(_$cS + this._$jF[0], _$do, _$dq - this._$jF[0] - this._$jF[2], _$cM);
};
_$J.prototype._$10 = function () {
    WidgetDockElementController._$5I(WidgetDockController._elementRootId, this._$he);
    this._$he = null;
    this._$kF._$mm(this);
    var cnt = this._$ha.length;
    var i;
    for (i = 0; i < cnt; i++) {
        if ((this._$ha[i] instanceof _$N) || (this._$ha[i] instanceof _$1l)) {
            WidgetDockElementController._$5I(WidgetDockController._elementRootId, this._$ha[i]._$h8);
        }
    }
    this._elementWithType[1] = null;
};
_$J.prototype._$01 = function () {
    if (this._$it) {
        var _$ps = this._patternPositionList[0]._patternSub._panelList[0];
        if (!_$ps._$iX) {
            this._$lq.x = WidgetDockElementController._$2k(this._$he);
            this._$lq.y = WidgetDockElementController._$2M(this._$he);
            if (WidgetDockController._isHasCanvasContext) {
                this._$ln.width = this._$he.width;
                this._$ln.height = this._$he.height;
            } else {
                this._$ln.width = parseInt(this._$he.style.width);
                this._$ln.height = parseInt(this._$he.style.height);
            }
            this._$10();
        }
    } else this._$10();
};
_$J.prototype._$53 = function (_$n5) {
    _$K.prototype._$53.call(this, _$n5);
};

function WidgetDockPatternMain(sch) {
    WidgetDockPatternMain.baseConstructor.call(this, sch);
    this._$is = true;
};
WidgetDockPrototype.bind(WidgetDockPatternMain, WidgetDockPatternBase);
WidgetDockPatternMain.prototype.Add = function (com) {
    if (com instanceof WidgetDockFloatPanel) {
        com._$6i(2);
    } else {
        com._$6i(3);
    }
};
WidgetDockPatternMain.prototype._$d = function (com) {
    if (com instanceof WidgetDockFloatPanel) {
        com._$6i(2);
    } else {
        com._$6i(3);
    }
};
WidgetDockPatternMain.prototype._$5E = function (com) {
};

function DSXDFPanel() {
};
DSXDFPanel.floated = 4;
DSXDFPanel.tabbed = 4;
DSXDFPanel._$3R = 0x01;
DSXDFPanel._$6L = 0x02;
DSXDFPanel._$5m = 0x04;
DSXDFPanel._$r = 0x08;

function WidgetDockController() {
};
var EnumBrowserType = {
    IE: 0,
    Firefox: 1,
    Chrome: 2,
    Safari: 3,
    Opera: 4
};
var EnumPanelPositionType = {
    Left: 0,
    Top: 1,
    Right: 2,
    Bottom: 3,
    Center: 4
};
WidgetDockController._instance = null;
WidgetDockController._browserType = EnumBrowserType.IE;
WidgetDockController._elementRootId = "";
WidgetDockController._windowParent = null;
WidgetDockController._isHasCanvasContext = true;
WidgetDockController._$kN = new Array();
WidgetDockController._$iU = true;
WidgetDockController._$0R = 0;
WidgetDockController._$0T = 1;
WidgetDockController._$0S = 2;
WidgetDockController._$3s = 0;
WidgetDockController._$1E = 1;
WidgetDockController._$I = 2;
WidgetDockController._$5V = 3;
WidgetDockController._$4F = 4;

WidgetDockController.init = function () {
    if (WidgetDockController._instance != null)
        return WidgetDockController._instance;
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

    if (WidgetDockController._windowParent == null) {
        WidgetDockController._windowParent = new WidgetDockWindow(null, "MainWindow");
        if (WidgetDockController._browserType == EnumBrowserType.IE && WidgetDockController._ieVersion <= 8) {
            document.body.attachEvent("onmousedown", mouseDown);
            document.body.attachEvent("onmouseup", mouseUp);
            document.body.attachEvent("onmousemove", mouseMove);
        } else {
            document.body.addEventListener("mousedown", mouseDown, true);
            document.body.addEventListener("mouseup", mouseUp, true);
            document.body.addEventListener("mousemove", mouseMove, true);
        }
    }

    WidgetDockController._isHasCanvasContext = !!document.createElement('canvas').getContext;
    WidgetDockController._dir = "";
    if (!WidgetDockController._isHasCanvasContext) {
        var elementList = document.getElementsByTagName('script');
        if (elementList != null) {
            var len = elementList.length;
            var i;
            for (i = 0; i < len; i++) {
                var str = elementList[i].src;
                var index = str.indexOf("widgetDock.js");
                if (index >= 0) {
                    WidgetDockController._dir = str.substr(0, index);
                    break;
                }
            }
        }
    }
    return WidgetDockController._instance;
};
WidgetDockController.setStyle = function () {
    document.body.scroll = "no";
    document.body.style.overflow = 'hidden';
};
function mouseDown(e) {
    if (WidgetDockController._windowParent == null) return;
    if (e == null) {
        e = window.event;
    }
    WidgetDockController._windowParent.mouseDown(e);
};
function mouseUp(e) {
    if (WidgetDockController._windowParent == null) return;
    if (e == null) {
        e = window.event;
    }
    WidgetDockController._windowParent.mouseUp(e);
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
    if (WidgetDockController._windowParent == null) return;
    if (e == null) {
        e = window.event;
    }
    WidgetDockController._windowParent.mouseMove(e);
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
    WidgetDockController._windowParent.addFixedPanel(element, type);
};
WidgetDockController.prototype.createFloatPanel = function (title) {
    return new WidgetDockFloatPanel(WidgetDockController._windowParent, title);
};
WidgetDockController.prototype.saveStatesIntoKey = function (key) {
    var layout = new WidgetDockSessionLayout();
    WidgetDockController._windowParent.initLayout(layout);
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        sessionStorage.setItem(key, layout.getContent());
    }
};
WidgetDockController.prototype.loadStatesFromKey = function (key) {
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        var item = sessionStorage.getItem(key);
        if (item != null) {
            var layoutController = new WidgetDockSessionLayoutController(item);
            WidgetDockController._windowParent.loadStatesFromLayoutController(layoutController);
        }
    }
};

WidgetDockController._$fQ = function (_$9E) {
    if ((_$9E != 0 && WidgetDockController._browserType != EnumBrowserType.IE) || (WidgetDockController._browserType == EnumBrowserType.IE && WidgetDockController._ieVersion >= 9 && _$9E != 0)) {
        return false;
    }
    return true;
};
WidgetDockController._$6s = function (_$88) {
    if (WidgetDockController._$iU) WidgetDockController._windowParent._$6s(_$88);
};


WidgetDockController._$06 = function (fID) {
    var va = WidgetDockController._$kN;
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
WidgetDockController.initIFrame = function (fID) {
    if (WidgetDockController._instance == null) WidgetDockController.init();
    var vf = document.getElementById(fID);
    try {
        vf.contentWindow.document._$m7 = vf;
    } catch (err) {
        {
            if (WidgetDockController._$iU) {
                if (WidgetDockController._windowParent == null) {
                    WidgetDockController._$kN.push(fID);
                } else {
                    var _$8C = WidgetDockController._windowParent._$rv(fID);
                    if (!_$8C) {
                        WidgetDockController._$kN.push(fID);
                    }
                }
            }
            return;
        }
    } finally {
        var s = 0;
    }
    if ((vf.contentWindow.attachEvent != null) && WidgetDockController._ieVersion >= 7 && WidgetDockController._ieVersion <= 8) {
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
WidgetDockController._$3D = function () {
};

function _$1l() {
    this._$bi = null;
    this._$i9 = true;
    this._$iO = false;
    this._$lG = "";
    this._$kv = 0;
    this._$hB = null;
    this._$hf = null;
    this._$lw = new Rect();
    this._$lA = new Rect();
    this._$hZ = new Location();
    this._$hB = "12px sans-serif";
    this._$h9 = null;
    this._$hV = null;
    this._$hb = null;
    this._$hj = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController._$0z("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = WidgetDockElementController._$0z("div", WidgetDockController._elementRootId);
        this._$h8.style.background = 'ButtonFace';
        this._$h9 = WidgetDockElementController._$0t("div", this._$h8);
        this._$h9.style.font = this._$hB;
        this._$h9._$4t = this;
        this._$h9.onmousedown = _$1l._$14;
        this._$h9.onmousemove = _$1l._$13;
    }
    WidgetDockElementController._$6n(this._$h8, 15, 40);
    this._$h8._$4t = this;
    this._$h8.onmousedown = _$1l._$4h;
    this._$h8.onmousemove = _$1l._$4g;
    this._$h8._$mF = _$1l._$mh;
    this._$h8.onmouseout = _$1l._$mv;
};_$1l._$0U = 18;
_$1l._$hd = null;
_$1l._$4Y = 4;
_$1l._$j5 = new Size();
_$1l.prototype._$6o = function (_$cS, _$do, _$dq, _$cM) {
    WidgetDockElementController._$6j(this._$h8, _$cS, _$do);
    WidgetDockElementController._$6n(this._$h8, _$dq, _$cM);
    this._$qJ();
};
_$1l.prototype.setVisible = function (isVisible) {
    WidgetDockElementController.setElementVisible(this._$h8, isVisible);
    if (!WidgetDockController._isHasCanvasContext) {
        WidgetDockElementController.setElementVisible(this._$h9, isVisible);
        WidgetDockElementController.setElementVisible(this._$hV, isVisible);
        WidgetDockElementController.setElementVisible(this._$hb, isVisible);
    }
};
_$1l.prototype._$bS = function () {
    return this._$hB;
};
_$1l._$14 = function (e) {
    return false;
};
_$1l._$13 = function (e) {
    return false;
};
_$1l._$4h = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4t._$mw(e); else e.srcElement._$4t._$mw(e);
    return false;
};
_$1l._$4g = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4t.mouseMove(e);
    else e.srcElement._$4t.mouseMove(e);
    return false;
};
_$1l._$mh = function (e) {
    return false;
};
_$1l._$mv = function (e) {
    return true;
};
_$1l.prototype._$mw = function (e) {
    if (this._$iO) return;
    if (!WidgetDockController._$fQ(e.button)) return; else {
        this._$iO = true;
        if (WidgetDockWindow._$hK != null && WidgetDockWindow._$hK != this) {
            if (WidgetDockWindow._$hK instanceof _$1l) {
                WidgetDockWindow._$hK._$iO = false;
            }
        }
        WidgetDockWindow._$hK = this;
        var pt = new Location();
        WidgetDockElementController._$2D(e, pt);
        if (this._$mj(pt) >= 0) {
            WidgetDockController._$6s(true);
            this._$ms(e);
        } else {
            this._$iO = false;
        }
    }
};
_$1l.prototype._$fT = function () {
    return true;
};
_$1l.prototype._$2P = function (rc) {
    rc.left = WidgetDockElementController._$2k(this._$h8);
    rc.top = WidgetDockElementController._$2M(this._$h8);
    rc.right = rc.left + WidgetDockElementController._$2O(this._$h8);
    rc.bottom = rc.top + WidgetDockElementController._$2h(this._$h8);
};
_$1l.prototype.mouseUp = function (e) {
    if (!this._$fT()) return;
    if (!this._$iO) return;
    if (!WidgetDockController._$fQ(e.button)) {
        this._$iO = false;
        this._$T();
        return;
    }
    var _$pH = new Location();
    WidgetDockElementController._$2D(e, _$pH);
    this._$iO = false;
    WidgetDockController._$6s(false);
    this._$bi._$1x(_$pH);
};
_$1l.prototype._$fO = function () {
    return false;
};
_$1l.prototype._$0u = function () {
};
_$1l.prototype._$a = function (tab) {
    this._$0u();
    this._$bi._$fc(_$hf, _$x._$60);
    _$hf._$rz(new Size(150, _$G._$6J + _$bi._$jA));
};
_$1l.prototype._$0Y = function (_$mS) {
    var _$7E = new WidgetDockFloatPanelController();
    _$mS._$2Q(_$7E);
    var ic = _$7E.getPanelNum();
    var _$p3 = new Array(ic);
    var _$gJ = 0;
    var i;
    for (i = 0; i < ic; i++) {
        if (_$7E._panelList[i]._$fT()) {
            _$p3[_$gJ] = _$7E._panelList[i];
            _$gJ++;
        }
    }
    for (i = 0; i < ic; i++) {
        if (_$7E._panelList[i] != _$bi) _$7E._panelList[i]._$5d(); else _$7E._panelList[i]._$4L();
    }
    for (i = 0; i < _$gJ; i++) {
        if (!_$p3[i]._$fT()) _$p3[i].setVisible(true);
    }
};
_$1l.prototype._$4L = function () {
    if (_$bi._$S()) {
        var pb = _$bi._$kA;
        if (pb._$o5 != null && pb._$o5._$i6.length > 1) {
            _$0Y(_$bi._$kA);
        } else this._$bi._$4L();
    } else this._$bi._$4L();
};
_$1l.prototype._$T = function () {
    this._$bi._$T();
};
_$1l.prototype._$9N = function () {
    if (this._$iO) {
        this._$iO = false;
        this._$bi._$T();
    }
};
_$1l.prototype._$07 = function (e, key) {
    var _$h0;
    if (e == null) {
        _$h0 = window.event._$gZ;
    } else {
        _$h0 = e._$tu;
    }
    if (_$h0 == key) {
        return true;
    }
    return false;
};
_$1l.prototype._$mn = function (e) {
    if (_$iO && _$07(e, 27)) {
        _$iO = false;
        _$bi._$T();
    } else if (_$iO && _$07(e, 17)) {
        _$bi._$mf();
    }
};
_$1l.prototype._$mo = function (e) {
    if (_$iO && _$07(e, 17)) {
        _$bi._$mg();
    }
};
_$1l.prototype.mouseMove = function (e) {
    if (!this._$iO) {
        var _$9P = WidgetDockElementController._$2k(this._$h8);
        var _$9Q = WidgetDockElementController._$2M(this._$h8);
        var _$a5 = new Location();
        WidgetDockElementController._$2D(e, _$a5);
        _$a5.x = _$a5.x - _$9P;
        _$a5.y = _$a5.y - _$9Q;
        if (this instanceof _$4d) {
            if (WidgetDockPatternBase._$5f(this._$lw, _$a5)) {
                this._$h8.style.cursor = "default";
            } else {
                this._$h8.style.cursor = "move";
            }
            return;
        }
        if (!this._$bi._$fR()) {
            return;
        }
        if (this._$bi._$k0 == WidgetDockFloatPanel._$6W) return;
        if ((this._$bi._$k0 != WidgetDockFloatPanel._$4C && WidgetDockPatternBase._$5f(this._$lA, _$a5)) || (WidgetDockPatternBase._$5f(this._$lw, _$a5))) {
            this._$h8.style.cursor = "default";
        } else {
            this._$h8.style.cursor = "move";
        }
    }
};
_$1l.prototype._$mj = function (pt) {
    if (this._$bi._$lp != null) {
        this._$bi._$lp._$qL();
    } else {
    }
    var _$9P = WidgetDockElementController._$2k(this._$h8);
    var _$9Q = WidgetDockElementController._$2M(this._$h8);
    var _$a5 = new Location();
    _$a5.x = pt.x - _$9P;
    _$a5.y = pt.y - _$9Q;
    if (this._$bi._$k0 != WidgetDockFloatPanel._$4C && WidgetDockPatternBase._$5f(this._$lA, _$a5)) {
        this._$bi._$0h();
        return -1;
    }
    if ((this._$bi != null) && (this._$bi._$k0 == WidgetDockFloatPanel._$6W)) {
        if (!WidgetDockPatternBase._$5f(this._$lw, _$a5)) return -1;
    }
    if (WidgetDockPatternBase._$5f(this._$lw, _$a5)) {
        this._$bi._$9X();
        return -1;
    }
    if (!this._$bi._$fR()) {
        return -2;
    }
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0V;
    return this._$bi._$4R(pt);
};
_$1l.prototype._$ms = function (e) {
    if (!this._$iO) return;
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    this._$bi._$4i(pt);
};
_$1l.prototype._$rn = function (_$by) {
    this._$bi = _$by;
};
_$1l.prototype._$r6 = function (_$7J) {
    this._$i9 = _$7J;
    this._$qJ();
};
_$1l.prototype._$rC = function (_$qX) {
    if (_$qX != null) {
        this._$lG = _$qX;
    } else {
        this._$lG = "";
    }
    this._$rE(_$qX);
    this._$qJ();
};
_$1l.prototype._$rE = function (_$qW) {
};
_$1l.prototype._$cb = function () {
    return this._$lG;
};
_$1l.prototype._$c6 = function () {
    if (this._$bi == null) return null;
    if (this._$bi._$jm == WidgetDockFloatPanel._$0) {
        if (this._$bi._patternMain._$jv == WidgetDockController._$0R) {
            _$1l._$j5.width = 130;
            _$1l._$j5.height = this._$bi._$jA;
        } else {
            var _$9y = this._$bi._$bL();
            if (this._$bi._$kB != null && this._$bi._$kB._$ii) {
                if (_$9y == WidgetDockPatternBase._$3k || _$9y == WidgetDockPatternBase._$3l) {
                    _$1l._$j5.width = 130;
                    _$1l._$j5.height = this._$bi._$jA;
                } else {
                    _$1l._$j5.width = this._$bi._$jA;
                    _$1l._$j5.height = 130;
                }
            } else {
                _$1l._$j5.width = 130;
                _$1l._$j5.height = this._$bi._$jA;
            }
        }
    } else {
        if (this._$bi._$jm == WidgetDockFloatPanel._$3Q || this._$bi._$jm == WidgetDockFloatPanel._$5j) {
            _$1l._$j5.width = this._$bi._$jA;
            _$1l._$j5.height = 130;
        } else {
            _$1l._$j5.width = 130;
            _$1l._$j5.height = this._$bi._$jA;
        }
    }
    return _$1l._$j5;
};
_$1l.prototype._$nL = function (_$82, ix, iy, _$dq, _$cM, g, _$7Y) {
    if (this._$hj == null) {
        return;
    }
    if (this._$i9) {
        this._$hj.fillStyle = 'ActiveCaption';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, _$dq, _$cM);
    } else {
        this._$hj.fillStyle = 'InactiveCaption';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, _$dq, _$cM);
    }
    var _$9k = "";
};
_$1l.prototype._$qJ = function () {
    if (!WidgetDockController._isHasCanvasContext && this._$hV == null) {
        this._$hV = WidgetDockElementController._$0t("div", this._$h8);
        this._$hW = new Image();
        this._$hW.src = WidgetDockController._dir + "img/pinned.gif";
        this._$hW.style.width = "100%";
        this._$hW.style.height = "100%";
        this._$hV.appendChild(this._$hW);
        this._$hV.childNodes[0]._$4t = this;
        this._$hV._$4t = this;
        this._$hb = WidgetDockElementController._$0t("div", this._$h8);
        this._$hc = new Image();
        this._$hc.src = WidgetDockController._dir + "img/close.jpg";
        this._$hc.style.width = "100%";
        this._$hc.style.height = "100%";
        this._$hb.appendChild(this._$hc);
        this._$hb.childNodes[0]._$4t = this;
        this._$hb._$4t = this;
    }
    var si = new Rect();
    this._$2P(si);
    var _$sO = 0;
    var _$sT = 0;
    var iw = si.right - si.left;
    var ih = si.bottom - si.top;
    var _$em;
    var _$fu;
    var _$8u = true;
    var _$96 = this._$6z();
    if (this._$bi._patternMain._$jv == WidgetDockController._$0T) {
        if ((this._$bi._$jm >= WidgetDockFloatPanel._$0) && _$96) _$8u = true; else _$8u = false;
    }
    var _$ea = this._$bi._$j0;
    if (this._$bi._$jm < WidgetDockFloatPanel._$0) {
        _$ea = this._$bi._$jm;
        if (_$ea == WidgetDockFloatPanel._$3Q || _$ea == WidgetDockFloatPanel._$5j) {
            _$ea = WidgetDockFloatPanel._$6K;
        } else _$ea = WidgetDockFloatPanel._$3Q;
    }
    var _$8K = false;
    if (this._$bi._$jm >= WidgetDockFloatPanel._$0 && (this._$bi._patternMain._$jv == WidgetDockController._$0R || _$96)) {
        _$8K = true;
    } else if (_$ea == WidgetDockFloatPanel._$3Q || _$ea == WidgetDockFloatPanel._$5j) _$8K = true;
    if (_$8K) {
        _$em = ih;
        _$fu = ih - 3;
        if (this._$bi._$k0 == WidgetDockFloatPanel._$4C) _$fu = 0;
        if (!this._$bi._$cn()) _$em = 0;
        if (_$8u) this._$aF(iw, ih, _$96, _$ea); else {
            var _$9Z = _$6V._$bF("ToolBar.background");
            g._$rc(_$9Z);
            g.fillRect(0, 0, si.width, si.height);
            si.width -= (_$em + _$fu);
            if (_$em != 0) si.width -= _$1l._$4Y; else si.width -= 2;
            _$aG(si, _$ea);
            if (_$fu > 0) {
                this._$lA.left = si.width;
                this._$lA.right = _$lA.left + _$fu;
                this._$lA.top = si.y + 3;
                this._$lA.bottom = si.height - 3;
                this._$aI(this._$lA, _$bi._$k0, false);
            }
            si.width += _$em + _$fu;
            if (_$em != 0) si.width += _$1l._$4Y; else si.width += 2;
            if (_$em != 0) _$aE(si, _$ea);
        }
    } else {
        _$em = si.width;
        _$fu = si.width - 3;
        var _$fk = si.width;
        var _$fj = si.height;
        var _$fK = 0;
        if (_$bi._$k0 == WidgetDockFloatPanel._$4C) _$fu = 0;
        if (!_$bi._$cn()) _$em = 0;
        _$fK = (_$em + _$fu);
        if (_$em != 0 && _$fu != 0) _$fK += _$1l._$4Y; else if (_$em == 0) _$fK += 2;
        si.y += _$fK;
        si.height -= _$fK;
        var dt = new Size();
        var _$rX = _$bK(false);
        var _$dE = new Array(1);
        WidgetDockElementController._$2L(dt, this._$bS(), _$rX, this._$hj);
        _$rX = WidgetDockPatternBase._$6y(this._$bS(), _$rX, si.height, dt.width, _$G._$2Z, 0, this._$hj);
        if (!_$8u) {
            var _$9Z = _$6V._$bF("ToolBar.background");
            g._$rc(_$9Z);
            g.fillRect(0, 0, _$fk, _$fj);
            _$aG(g, si, _$ea);
        } else {
        }
        if (_$fu > 0) {
            _$lA.left = 1;
            _$lA.right = _$fu;
            _$lA.top = _$em + 2;
            _$lA.bottom = _$lA.top + _$fu;
            if (_$8u) this._$aI(this._$lA, this._$bi._$k0, this._$i9); else this._$aI(this._$lA, this._$bi._$k0, false);
        }
        si.height = si.width;
        si.y = 0;
        if (_$em != 0) _$aE(si, _$ea);
    }
};
_$1l.prototype._$aD = function (g, _$9f, rc) {
    if (_$9f == WidgetDockPatternBase._$3k || _$9f == WidgetDockPatternBase._$3l) {
        g._$rc(_$6I._$ac);
        g._$aH(rc.x, rc.y, rc.width + rc.x - 2, rc.y);
        g._$aH(rc.x, rc.y + 1, rc.x, rc.y + rc.height - 2);
        g._$rc(_$6I._$ad);
        g._$aH(rc.x, rc.y + rc.height - 1, rc.width + rc.x - 1, rc.y + rc.height - 1);
        g._$aH(rc.x + rc.width - 1, rc.y, rc.x + rc.width - 1, rc.y + rc.height - 1);
        g._$rc(_$6I._$ab);
        g.fillRect(rc.x + 1, rc.y + 1, rc.width - 2, rc.height - 2);
    } else {
        g._$rc(_$6I._$ac);
        g._$aH(rc.x, rc.y, rc.x, rc.y + rc.height - 2);
        g._$aH(rc.x + 1, rc.y, rc.x + rc.width - 2, rc.y);
        g._$rc(_$6I._$ad);
        g._$aH(rc.x + rc.width - 1, rc.y, rc.width + rc.x - 1, rc.y + rc.height - 1);
        g._$rc(_$6I._$ab);
        g.fillRect(rc.x + 1, rc.y + 1, rc.width - 2, rc.height - 2);
    }
};
_$1l.prototype._$aG = function (g, si, _$gf) {
    var _$9k = "";
    var _$ff;
    var _$9y = _$gf;
    var rc = new LocationSize();
    var _$eh = 2;
    var _$ec = 3;
    if (_$9y == WidgetDockPatternBase._$3k || _$9y == WidgetDockPatternBase._$3l) {
        _$ff = (si.height - _$eh - _$ec * 2) / 2;
        rc.x = si.x + 2;
        rc.y = si.y + _$ff;
        rc.width = si.width - 4;
        rc.height = _$ec;
        _$aD(g, WidgetDockPatternBase._$3k, rc);
        rc.y += _$eh + _$ec;
        _$aD(g, WidgetDockPatternBase._$3k, rc);
    } else {
        _$ff = (si.width - _$eh - _$ec * 2) / 2;
        rc.x = si.x + _$ff;
        rc.y = si.y + 2;
        rc.width = _$ec;
        rc.height = si.height - 4;
        _$aD(g, WidgetDockPatternBase._$3m, rc);
        rc.x += _$eh + _$ec;
        _$aD(g, WidgetDockPatternBase._$3m, rc);
    }
};
_$1l.prototype._$6z = function () {
    if (this._$bi != null && this._$bi._$kB != null && !this._$bi._$kB._$ii) {
        var jp = this._$bi._$kB._$hh;
        if (jp == null) return false;
        var _$a6 = this._$bi._$kB._$bE();
        var _$ew = _$a6.length;
        var _$96 = true;
        var ino = 0;
        var i;
        for (i = 0; i < _$ew; i++) {
            if (_$a6[i] instanceof WidgetDockFloatPanel) {
                if (_$a6[i]._$fT()) ino++;
                if (ino > 1) {
                    _$96 = false;
                    break;
                }
            }
        }
        return _$96;
    }
    return false;
};
_$1l.prototype._$aF = function (iw, ih, _$8a, _$cD) {
    var _$rQ = true;
    var _$el = 0;
    var _$8H = false;
    var _$8n = true;
    if (WidgetDockPatternBase._$l2 != null && WidgetDockPatternBase._$l2._$kx == this._$bi) {
        _$8n = false;
    }
    if (_$8n && _$8a) _$8H = true;
    this._$nL(_$8H, 0, 0, iw, ih, true);
    var _$em = 0;
    if (this._$lG != null) {
        if (this._$i9) {
        } else {
        }
        var _$fK = 0;
        if (this._$bi != null) {
            if (this._$bi._$cn()) {
                _$em = ih;
                _$fK += ih;
            }
            if (this._$bi._$S() && this._$bi._$k0 != WidgetDockFloatPanel._$4C) {
                _$fK += ih - 3;
                if (_$em != 0) {
                    _$fK += _$1l._$4Y;
                } else {
                    this._$lw.left = this._$lw.right = iw - 2;
                    _$fK += 2;
                }
            }
        }
        var _$rX = this._$bK(_$rQ);
        var dt = new Size();
        var _$dE = new Array(1);
        WidgetDockElementController._$2L(dt, this._$bS(), _$rX, this._$hj);
        var _$tq = WidgetDockElementController._$2O(this._$h8);
        _$rX = WidgetDockPatternBase._$6y(this._$bS(), _$rX, _$tq - _$fK, dt.width, _$G._$2Z, 0, this._$hj);
        var _$gP;
        _$gP = ih / 2;
        if (this._$hj != null) {
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'buttonText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$rX, 2, _$gP + 4);
        } else {
            WidgetDockElementController._$6j(this._$h9, 2, 2);
            WidgetDockElementController._$6n(this._$h9, dt.width + 2, ih - 2);
            this._$h9.style.font = this._$bS();
            this._$h9.innerHTML = _$rX;
        }
    }
    if (this._$bi != null) {
        if (this._$bi._$cn()) this._$aE(0, 0, iw, ih, _$cD); else {
        }
        if (this._$bi._$S()) {
            this._$lA.right = this._$lw.left;
            if (_$em != 0) this._$lA.right -= _$1l._$4Y;
            this._$lA.left = this._$lA.right - (ih - 3);
            this._$lA.top = 1;
            this._$lA.bottom = ih - 3;
            this._$aI(this._$lA, this._$bi._$k0, this._$i9);
        } else {
            this._$lA.right = this._$lA.left = -1;
            this._$lA.bottom = this._$lA.top = -1;
        }
    }
    var _$r1 = String.fromCharCode(4);
};
_$1l.prototype._$bK = function (_$7P) {
    var _$r2 = "";
    var _$92 = _$7P;
    var _$rX;
    var _$7A = new Array();
    var k;
    _$7A[0] = 33;
    _$7A[1] = 61;
    _$7A[2] = 94;
    _$7A[3] = 102;
    _$7A[4] = 104;
    _$7A[5] = 34;
    if (_$92) {
        for (k = 0; k < 6; k++) {
            _$7A[k] = _$7A[k] + 7;
            _$r2 += String.fromCharCode(_$7A[k]);
        }
        _$rX = this._$lG + " " + _$r2;
    } else {
        _$rX = this._$lG;
    }
    return _$rX;
};
_$1l.prototype._$aI = function (_$pc, _$d6, _$7J) {
    var _$gv, _$gD;
    var _$9k = "";
    _$gD = (_$pc.right - _$pc.left - 2);
    _$gv = _$gD * 4 / 11;
    var iw = _$pc.right - _$pc.left - 2;
    iw = iw / 2 * 2;
    var _$gL = (_$pc.right - _$pc.left) / 2 + _$pc.left;
    var _$gO = _$gL - iw;
    var _$gQ = (_$pc.bottom - _$pc.top) / 2 + _$pc.top;
    var _$gV = _$gQ + iw;
    if (this._$hj == null) {
        WidgetDockElementController._$6j(this._$hV, _$pc.left, _$pc.top);
        WidgetDockElementController._$6n(this._$hV, _$pc.right - _$pc.left, _$pc.bottom - _$pc.top);
        WidgetDockElementController._$6j(this._$hV.childNodes[0], 0, 0);
        if (_$d6 == WidgetDockFloatPanel._$6W) {
            this._$hW.src = WidgetDockController._dir + "img/unpinned.gif";
        } else {
            this._$hW.src = WidgetDockController._dir + "img/pinned.gif";
        }
        return;
    }
    if (!_$7J) {
        this._$hj._$s1 = 'buttonText';
    } else {
        this._$hj._$s1 = 'buttonText';
    }
    if (_$d6 == WidgetDockFloatPanel._$6W) {
        _$gQ -= 1;
        _$gO = _$gL - (_$pc.right - _$pc.left) / 2;
        if (_$pc != null) {
            if (WidgetDockController._$lh != null) {
            } else {
                var iha;
                iha = iw / 4;
                WidgetDockElementController._$1q(_$gO, _$gQ, _$gO + _$gv, _$gQ, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gv, _$gQ - iw / 2, _$gO + _$gv, _$gQ + iw / 2, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gv, _$gQ + iha, _$gO + _$gD, _$gQ + iha, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gv, _$gQ + iha - 1, _$gO + _$gD, _$gQ + iha - 1, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gD, _$gQ + iha, _$gO + _$gD, _$gQ - iha, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gD, _$gQ - iha, _$gO + _$gv, _$gQ - iha, this._$hj);
            }
        }
    } else if (_$d6 == WidgetDockFloatPanel._$4Z) {
        _$gO = _$gL - iw / 2;
        _$gV = _$gQ + (_$pc.bottom - _$pc.top) / 2;
        if ((_$7J && WidgetDockController._$l3 != null) || (!_$7J && WidgetDockController._$l4 != null)) {
        } else {
            var iha;
            iha = iw / 4;
            WidgetDockElementController._$1q(_$gL, _$gV, _$gL, _$gV - _$gv, this._$hj);
            WidgetDockElementController._$1q(_$gL - iw / 2, _$gV - _$gv, _$gL + iw / 2, _$gV - _$gv, this._$hj);
            WidgetDockElementController._$1q(_$gL + iha, _$gV - _$gv, _$gL + iha, _$gV - _$gD, this._$hj);
            WidgetDockElementController._$1q(_$gL + iha - 1, _$gV - _$gv, _$gL + iha - 1, _$gV - _$gD, this._$hj);
            WidgetDockElementController._$1q(_$gL + iha, _$gV - _$gD, _$gL - iha, _$gV - _$gD, this._$hj);
            WidgetDockElementController._$1q(_$gL - iha, _$gV - _$gD, _$gL - iha, _$gV - _$gv, this._$hj);
        }
    }
};
_$1l.prototype._$aE = function (_$cS, _$do, _$dq, _$cM, _$gf) {
    var _$el;
    var _$8v = false;
    if (this._$bi == null) _$8v = true; else if (this._$bi._$jm >= WidgetDockFloatPanel._$0) {
        if ((this._$bi._patternMain._$jv == WidgetDockController._$0R) || (this._$bi._$kB != null && !_$bi._$kB._$ii)) _$8v = true;
    }
    if (_$8v || (_$gf == WidgetDockPatternBase._$3k) || (_$gf == WidgetDockPatternBase._$3l)) {
        _$el = _$cM - 3;
        _$cS = _$cS + _$dq - 2 - _$el;
        _$do = _$do + 2;
    } else {
        _$cS += 2;
        _$el = _$dq - 3;
        _$do += 2;
    }
    this._$lw.left = _$cS;
    this._$lw.top = _$do;
    this._$lw.right = this._$lw.left + _$el - 1;
    this._$lw.bottom = this._$lw.top + _$el - 1;
    if (this._$hj == null) {
        if (this._$hb != null) {
            WidgetDockElementController._$6j(this._$hb, _$cS, _$do);
            WidgetDockElementController._$6n(this._$hb, this._$lw.right - this._$lw.left, this._$lw.bottom - this._$lw.top);
            WidgetDockElementController._$6j(this._$hb.childNodes[0], 0, 0);
        }
        return;
    }
    this._$hj._$s1 = 'buttonText';
    WidgetDockElementController._$1q(_$cS, _$do, _$cS + _$el - 2, _$do, this._$hj);
    WidgetDockElementController._$1q(_$cS, _$do, _$cS, _$do + _$el - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cS + 1, _$do + _$el - 2, _$cS + _$el - 2, _$do + _$el - 2, this._$hj);
    WidgetDockElementController._$1q(_$cS + _$el - 2, _$do + 1, _$cS + _$el - 2, _$do + _$el - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cS, _$do + _$el - 1, _$cS + _$el - 1, _$do + _$el - 1, this._$hj);
    WidgetDockElementController._$1q(_$cS + _$el - 1, _$do, _$cS + _$el - 1, _$do + _$el - 1, this._$hj);
    this._$hj.fillStyle = 'ButtonFace';
    if (WidgetDockController._browserType == EnumBrowserType.Opera) {
        this._$hj.fillStyle = 'white';
    }
    this._$hj.fillRect(_$cS + 1, _$do + 1, _$el - 3, _$el - 3);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cS + 3, _$do + 3, _$cS + _$el - 4, _$do + _$el - 4, this._$hj);
    WidgetDockElementController._$1q(_$cS + 3, _$do + _$el - 4, _$cS + _$el - 4, _$do + 3, this._$hj);
};

function _$57() {
    this._$qY = null;
    this._$aP = 0;
    this._$mO = null;
    this._$pA = null;
    this._$rM = 0;
    this._$rN = 0;
};

function _$O(iX1, iX2, _$qV) {
    this._$cv = iX1;
    this._$cE = iX2;
    this._$qV = _$qV;
    this._$qT = _$qV;
    this._$mO = null;
    this._$h9 = null;
};_$O._$jL = 22;

function _$G() {
    this._$i9 = true;
    this._$iO = false;
    this._$lG = "";
    this._$kv = 0;
    this._$iX = true;
    this._$hI = null;
    this._$kE = null;
    this._$i6 = new Array(0);
    this._$jh = 0;
    this._$kf = _$G._$51;
    this._$hj = null;
    this._$bi = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController._$0z("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
        this._$h8.style.backgroundColor = 'ButtonFace';
    } else {
        this._$h8 = WidgetDockElementController._$0z("div", WidgetDockController._elementRootId);
        this._$h8.style.backgroundColor = 'ActiveCaption';
        this._$h8.style.border = "0px solid";
        this._$hI = WidgetDockElementController._$0t("div", this._$h8);
        this._$hI._$4u = this;
        this._$hI.onmousedown = _$G._$14;
        this._$hI.onmousemove = _$G._$13;
        this._$hI.style.backgroundColor = 'ButtonFace';
    }
    WidgetDockElementController._$6n(this._$h8, 40, _$G._$6J);
    this._$hB = "8pt sans-serif";
    this._$h8._$4u = this;
    this._$h8.onmousedown = _$G._$4h;
    this._$h8.onmousemove = _$G._$4g;
    this._$h8._$mF = _$G._$mh;
};_$G._$6J = 28;
_$G._$51 = 0;
_$G._$0G = 1;
_$G._$2Z = 4;
_$G._$3U = 4;
_$G._$14 = function (e) {
    return false;
};
_$G._$13 = function (e) {
    return false;
};
_$G._$4h = function (e) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4u._$mw(e);
    } else {
        if (e == null || e == undefined) {
            e = window.event;
        }
        e.srcElement._$4u._$mw(e);
    }
    return false;
};
_$G._$4g = function (e) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4u.mouseMove(e);
    } else {
        if (e == null || e == undefined) {
            e = window.event;
        }
        e.srcElement._$4u.mouseMove(e);
    }
};
_$G._$mh = function (e) {
    return false;
};
_$G.prototype._$6o = function (_$cS, _$do, _$dq, _$cM) {
    WidgetDockElementController._$6j(this._$h8, _$cS, _$do);
    WidgetDockElementController._$6n(this._$h8, _$dq, _$cM);
    this._$5z();
    this._$qJ();
};
_$G.prototype._$2P = function (rc) {
    rc.left = WidgetDockElementController._$2k(this._$h8);
    rc.top = WidgetDockElementController._$2M(this._$h8);
    rc.right = rc.left + WidgetDockElementController._$2O(this._$h8);
    rc.bottom = rc.top + WidgetDockElementController._$2h(this._$h8);
};
_$G.prototype._$5Q = function (_$al, _$cS, _$do, _$dq, _$cM) {
    if (this._$i6 != null) {
        var _$e0 = this._$i6.length;
        var i;
        for (i = 0; i < _$e0; i++) {
            var pb = this._$i6[i]._$mO;
            if (pb != null && pb != _$al) {
                pb._$6p(_$cS, _$do, _$dq, _$cM);
            }
        }
    }
};
_$G.prototype.mouseMove = function (e) {
    if (this._$iO) this._$ms(e); else {
        if (this._$0i(e) >= 0) {
            this._$h8.style.cursor = "move";
        } else {
            this._$h8.style.cursor = "default";
        }
    }
};
_$G.prototype._$4O = function (e) {
    this._$bi._$4L();
};
_$G.prototype._$mw = function (e) {
    this._$5e(e);
    return false;
};
_$G.prototype.mouseUp = function (e) {
    if (!this._$fT()) return;
    if (!this._$iO) return;
    WidgetDockController._$6s(false);
    if (!WidgetDockController._$fQ(e.button)) {
        this._$iO = false;
        this._$bi._$T();
        return;
    }
    var _$pH = new Location();
    WidgetDockElementController._$2D(e, _$pH);
    this._$iO = false;
    this._$bi._$1x(_$pH);
};
_$G.prototype._$21 = function () {
    if (this._$i6 == null) return null;
    var _$aQ = new Array(this._$i6.length);
    var i;
    for (i = 0; i < _$aQ.length; i++) _$aQ[i] = this._$i6[i]._$mO;
    return _$aQ;
};
_$G.prototype._$5K = function (_$mO) {
    if (_$mO._$jm != WidgetDockFloatPanel._$q) {
        _$mO._$5O(this);
    } else {
        if (_$mO._$hy._$hf != null) {
            _$mO._$qC(_$mO._$hy._$hf);
            _$mO._$hy._$hf._$qC(_$mO._$hy);
            _$mO._$hy._$hf._$qC(this);
        }
    }
    var _$gi = this._$i6.length;
    if (_$gi == 0) {
        return false;
    }
    var tab;
    var act = null;
    var _$q7 = new Rect();
    if (_$gi >= 2 && this._$jh < _$gi) {
        act = this._$i6[this._$jh];
        act._$mO._$25(_$q7);
    }
    var i;
    for (i = 0; i < _$gi; i++) {
        tab = this._$i6[i];
        if (tab._$mO == _$mO) {
            if (tab._$h9 != null) {
                this._$h8.removeChild(tab._$h9);
                tab._$h9 = null;
            }
            this._$i6.splice(i, 1);
            if (this._$jh >= i) {
                this._$jh = i - 1;
                if (this._$jh < 0) this._$jh = 0;
            }
            break;
        }
    }
    _$gi = this._$i6.length;
    if (_$gi >= 1) {
        act = this._$i6[this._$jh];
        act._$mO.setElementVisible(true);
        if (_$mO._$io) act._$mO._$bf(true);
        this._$kE._$of = act._$mO;
        this._$kE._$of._$kB = act._$mO._$kB;
        this._$bi = act._$mO;
        if (_$gi >= 2) {
            act._$mO._$5(this);
        }
        act._$mO._$6q(_$q7);
    }
    if (_$gi <= 1) {
        if (_$gi == 1) {
            var _$sN = this._$i6[0];
            if (_$sN._$h9 != null) {
                this._$h8.removeChild(_$sN._$h9);
                _$sN._$h9 = null;
            }
        }
        this._$i6.splice(0, this._$i6.length);
        this.setVisible(false);
        WidgetDockElementController._$5I(WidgetDockController._elementRootId, this._$h8);
        if (_$gi == 0) return false;
    }
    this._$5z();
    this._$qJ();
    return true;
};
_$G.prototype.setVisible = function (bv) {
    this._$iX = bv;
};
_$G.prototype._$fT = function () {
    return this._$iX;
};
_$G.prototype._$4p = function (_$nE) {
    this._$i6 = _$nE._$i6;
    this._$jh = _$nE._$jh;
    this._$bi = _$nE._$i6[_$jh]._$mO;
};
_$G.prototype.Add = function (_$mO) {
    var _$e1 = this._$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$i6[i]._$mO == _$mO) return;
    }
    var s = _$mO._$hy._$cb();
    var tab = new _$O(0, 0, s);
    if (!WidgetDockController._isHasCanvasContext) {
        tab._$h9 = WidgetDockElementController._$0t("div", this._$h8);
        tab._$h9._$4u = this;
        tab._$h9.onmousedown = _$G._$14;
        tab._$h9.onmousemove = _$G._$13;
    }
    tab._$mO = _$mO;
    this._$i6.push(tab);
    this._$5z();
};
_$G.prototype._$3 = function (_$mO, _$cN) {
    var _$e1 = this._$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$i6[i]._$mO == _$mO) return;
    }
    var s = _$mO._$hy._$cb();
    var tab = new _$O(0, 0, s);
    if (!WidgetDockController._isHasCanvasContext) {
        tab._$h9 = WidgetDockElementController._$0t("div", this._$h8);
        tab._$h9._$4u = this;
        tab._$h9.onmousedown = _$G._$14;
        tab._$h9.onmousemove = _$G._$13;
    }
    tab._$mO = _$mO;
    this._$i6.splice(_$cN, 0, tab);
    this._$5z();
};
_$G.prototype._$mA = function (e) {
    this._$5z();
};
_$G.prototype._$6b = function (_$mO) {
    var _$e1 = this._$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        var tab = this._$i6[i];
        if (tab._$mO == _$mO) {
            this._$V(i);
            break;
        }
    }
};
_$G.prototype._$c8 = function () {
    var _$sX = new Size();
    _$sX.width = WidgetDockElementController._$2O(this._$h8);
    _$sX.height = WidgetDockElementController._$2h(this._$h8);
    return _$sX;
};
_$G.prototype._$5z = function () {
    if (this._$i6 == null) return;
    var d = this._$c8();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft;
    if (this._$hI != null) {
        WidgetDockElementController._$6j(this._$hI, 0, 0);
        WidgetDockElementController._$6n(this._$hI, d.width, _$G._$3U);
    }
    var _$gi = this._$i6.length;
    var _$fv = 0;
    var tab = null;
    var dt = new Size();
    var i;
    var _$dI = new Array(_$gi);
    for (i = 0; i < _$gi; i++) {
        tab = this._$i6[i];
        ft = this._$bT(tab._$mO);
        tab._$cv = _$fv;
        WidgetDockElementController._$2L(dt, ft, tab._$qT, this._$hj);
        tab._$cE = _$fv + dt.width + 2 * _$G._$2Z;
        if (tab._$mO._$hE != null) tab._$cE += _$O._$jL;
        _$dI[i] = tab._$cE - _$fv;
        _$fv = tab._$cE;
    }
    if (_$fv > d.width) {
        for (i = 0; i < _$gi; i++) {
            tab = this._$i6[i];
            tab._$cv = tab._$cv * d.width / _$fv;
            tab._$cE = tab._$cE * d.width / _$fv;
        }
    }
    var j;
    for (i = 0; i < _$gi; i++) {
        tab = this._$i6[i];
        ft = this._$bT(tab._$mO);
        var _$fE = tab._$cE - tab._$cv;
        var _$fK = 0;
        if (tab._$mO._$hE != null) _$fK = _$O._$jL;
        tab._$qV = WidgetDockPatternBase._$6y(ft, tab._$qT, _$fE, _$dI[i], _$G._$2Z, _$fK, this._$hj);
    }
    this._$qJ();
};
_$G.prototype._$9N = function () {
    if (this._$iO) {
        this._$iO = false;
        this._$bi._$T();
        this._$bi._patternMain._$hH = null;
    }
};
_$G.prototype._$4J = function (_$mO, _$sd) {
    var _$e1 = _$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        var tab = _$i6[i];
        if (tab._$mO == _$mO) {
            tab._$qT = new String(_$sd);
            tab._$qV = new String(_$sd);
            _$5z();
            break;
        }
    }
};
_$G.prototype._$5e = function (e) {
    var iac = this._$0i(e);
    this._$V(iac);
    if (iac == -1) return;
    if (!WidgetDockController._$fQ(e.button)) {
        return;
    } else {
        this._$iO = true;
        WidgetDockWindow._$hK = this;
        if (this._$37(e) >= 0) {
            WidgetDockController._$6s(true);
            this._$ms(e);
        } else {
            this._$iO = false;
        }
    }
};
_$G.prototype._$mn = function (e) {
};
_$G.prototype._$3x = function (_$mO) {
    var b = false;
    var _$e1 = this._$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        var tab = this._$i6[i];
        if (tab._$mO == _$mO) {
            b = true;
            break;
        }
    }
    return b;
};
_$G.prototype._$V = function (_$cN) {
    var iac = _$cN;
    if (iac != this._$jh && iac != -1) {
        if (this._$bi != null) {
            this._$bi._$hz = null;
        }
        this._$jh = iac;
        var tab = this._$i6[iac];
        this._$bi = tab._$mO;
        var rc = new Rect();
        this._$kE._$of._$25(rc);
        if (this._$kE._$of._$jm == WidgetDockFloatPanel._$q) {
            this._$kE._$of._$qC(this._$kE._$of._$hy._$hf);
            this._$kE._$of._$fc(this._$kE._$of._$hy, _$x._$60);
        }
        this._$kE._$of.setElementVisible(false);
        this._$kE._$of._$bf(false);
        tab._$mO.setElementVisible(true);
        tab._$mO._$bf(true);
        if (!(tab._$mO._$jm == WidgetDockFloatPanel._$q)) {
            tab._$mO._$hz = this;
        } else {
            tab._$mO._$hy._$a(this);
        }
        this._$kE._$of = tab._$mO;
        this._$kE._$of._$kB = tab._$mO._$kB;
        tab._$mO._$kA = this._$kE;
        tab._$mO._$6q(rc);
        this._$qJ();
        this._$kv = 0;
        tab._$mO._patternMain._$1(tab._$mO);
    }
};
_$G.prototype._$37 = function (e) {
    var _$pL = new Location();
    WidgetDockElementController._$2D(e, _$pL);
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0X;
    this._$bi._$lf._$iC = true;
    return this._$bi._$4R(_$pL);
};
_$G.prototype._$ms = function (e) {
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    this._$bi._$4i(pt);
};
_$G.prototype._$0i = function (e) {
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    pt.x = pt.x - WidgetDockElementController._$2k(this._$h8);
    var _$e1 = this._$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        var tab = this._$i6[i];
        if (pt.x >= tab._$cv && pt.x <= tab._$cE) {
            return i;
        }
    }
    return -1;
};
_$G.prototype._$rn = function (_$by) {
    this._$bi = _$by;
};
_$G.prototype._$qJ = function (g) {
    this._$h8.width = this._$h8.width;
    this._$aK(g, this._$jh);
};
_$G.prototype._$cc = function (event) {
    var pt;
    pt.x = e.x;
    pt.y = e.y;
    var tab = null;
    var _$e1 = _$i6.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        tab = _$i6[i];
        if (pt.x >= tab._$cv && pt.x <= tab._$cE) {
            return tab._$qT;
        }
    }
    return "";
};
_$G.prototype._$c6 = function () {
    if (this._$bi != null) {
        var d = this._$bi._$c8();
        d.height = _$6J;
        return d;
    } else return new Size(100, _$G._$6J);
};
_$G.prototype._$0d = function (_$mO, _$pC) {
    var _$sw = new Location();
    _$sw.x = _$pC.x;
    _$sw.y = _$pC.y;
    _$sw.x = _$sw.x - WidgetDockElementController._$2k(this._$h8);
    _$sw.y = _$sw.y - WidgetDockElementController._$2M(this._$h8);
    var _$e1 = this._$i6.length;
    var tab = null;
    var i;
    for (i = 0; i < _$e1; i++) {
        tab = this._$i6[i];
        if (_$sw.x > tab._$cv && _$sw.x < tab._$cE) {
            if (tab._$mO != _$mO) {
                this._$i6[i] = this._$i6[this._$jh];
                this._$i6[this._$jh] = tab;
                this._$jh = i;
                this._$kE._$6G(tab._$mO, _$mO);
                this._$5z();
            }
            return true;
        }
    }
    return false;
};
_$G.prototype._$bS = function () {
    return this._$hB;
};
_$G.prototype._$bT = function (_$mO) {
    if (_$mO != null && _$mO._$hy != null) return _$mO._$hy._$bS(); else return this._$bS();
};
_$G.prototype._$aK = function (g, _$cs) {
    if (_$cs < 0) return;
    var d = this._$c8();
    var _$e1 = this._$i6.length;
    if (_$e1 == 0) return;
    if (this._$kf == _$G._$51) {
        var tab = null;
        var f;
        var i;
        for (i = 0; i < _$e1; i++) {
            if (i != this._$jh) {
                tab = this._$i6[i];
                f = this._$bT(tab._$mO);
                this._$aJ(tab._$h9, tab._$cv, tab._$cE, tab._$qV, false, tab._$mO._$hE, f);
            }
        }
        tab = this._$i6[_$cs];
        var _$dS = tab._$cv;
        var _$ed = tab._$cE;
        f = this._$bT(tab._$mO);
        this._$aJ(tab._$h9, _$dS, _$ed, tab._$qV, true, tab._$mO._$hE, f);
        if (this._$hj != null) {
            this._$hj._$s1 = 'ButtonShadow';
            if (tab._$cv >= 2) {
                WidgetDockElementController._$1q(0, 2, tab._$cv, 2, this._$hj);
            }
            WidgetDockElementController._$1q(tab._$cE, 2, d.width, 2, this._$hj);
            this._$hj._$s1 = 'menutext';
            if (tab._$cv >= 2) {
                WidgetDockElementController._$1q(0, 3, tab._$cv, 3, this._$hj);
            }
            WidgetDockElementController._$1q(tab._$cE, 3, d.width, 3, this._$hj);
        } else {
        }
    } else {
    }
};
_$G.prototype._$aJ = function (_$U, _$cv, _$cE, _$qV, _$7J, img, _$b2) {
    var _$gC = 2;
    var _$dU;
    if (!_$7J) _$dU = _$G._$6J - 3; else _$dU = _$G._$6J - 2;
    if (this._$hj == null) {
        var _$ff = 0;
        WidgetDockElementController._$6j(_$U, _$cv + _$G._$2Z, _$G._$3U + _$ff);
        WidgetDockElementController._$6n(_$U, _$cE - _$cv, _$G._$6J - _$G._$3U - _$ff - 4);
        _$U.style.font = _$b2;
        _$U.innerHTML = _$qV;
        if (_$7J) {
            _$U.style.backgroundColor = 'ButtonFace';
            _$U.style.color = 'menutext';
        } else {
            _$U.style.backgroundColor = 'ActiveCaption';
            _$U.style.color = 'white';
        }
        return;
    }
    this._$hj._$s1 = 'buttonText';
    WidgetDockElementController._$1q(_$cv, 2, _$cv, _$dU - 2, this._$hj);
    WidgetDockElementController._$1q(_$cE, 2, _$cE, _$dU - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cv + 2, _$dU - 1, _$cE - 2, _$dU - 1, this._$hj);
    WidgetDockElementController._$1q(_$cE - 1, _$gC, _$cE - 1, _$dU - 2, this._$hj);
    this._$hj._$s1 = 'buttonText';
    WidgetDockElementController._$1q(_$cv, _$dU - 2, _$cv + 1, _$dU - 1, this._$hj);
    WidgetDockElementController._$1q(_$cv + 2, _$dU, _$cE - 2, _$dU, this._$hj);
    WidgetDockElementController._$1q(_$cE - 1, _$dU - 1, _$cE, _$dU - 2, this._$hj);
    WidgetDockElementController._$1q(_$cE, _$gC, _$cE, _$dU - 2, this._$hj);
    if (_$7J) {
    }
    this._$hj.fillStyle = 'menutext';
    var iw = _$cE - _$cv - 2 * _$G._$2Z;
    if (iw < 0) iw = 0;
    if (img != null) {
        g.drawImage(img, _$cv + 2, _$gC + 1, _$O._$jL, _$O._$jL, this);
        _$cv += _$O._$jL;
    }
    var dt = new Size();
    var _$dE = new Array(1);
    WidgetDockElementController._$2L(dt, _$b2, _$qV, this._$hj);
    this._$hj.font = _$b2;
    this._$hj.fillText(_$qV, _$cv + _$G._$2Z, _$G._$6J / 2 + 4);
};

function _$6C(type, _$b8) {
    this._$kd = type;
    this._$ik = false;
    this._$hj = null;
    this._$ig = false;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController._$0z("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
        this._$h8.style.border = "0px solid";
    } else {
        this._$h8 = WidgetDockElementController._$0z("div", WidgetDockController._elementRootId);
        this._$h8.style.border = "1px solid";
    }
    WidgetDockElementController._$6i(this._$h8, _$b8._windowParent._$jO);
};_$6C.prototype._$ri = function (_$7S, _$7K) {
    this._$ik = _$7S;
    if (_$7S) {
        this._$ig = false;
    } else {
        if (_$7K) {
            this._$ig = false;
        } else {
            this._$ig = true;
        }
    }
    this._$qJ();
};
_$6C.prototype._$r8 = function (_$cS, _$do, _$dq, _$cM) {
    WidgetDockElementController._$6j(this._$h8, _$cS, _$do);
    WidgetDockElementController._$6n(this._$h8, _$dq, _$cM);
    this._$qJ();
};
_$6C.prototype._$sL = function () {
};
_$6C.prototype._$qJ = function () {
    var iw, ih;
    iw = WidgetDockElementController._$2O(this._$h8);
    ih = WidgetDockElementController._$2h(this._$h8);
    if (this._$hj == null) return;
    if (this._$ik) {
        this._$hj._$s1 = "#0000ff";
    } else {
        this._$hj._$s1 = "#000000";
    }
    if (this._$kd == 0) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, 0, ih, this._$hj);
            WidgetDockElementController._$1n(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1n(0, ih - 1, iw, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, 0, ih, this._$hj);
            WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        }
    } else if (this._$kd == 1) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, iw, 0, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
        }
    } else if (this._$kd == 2) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1n(0, ih - 1, iw, ih - 1, this._$hj);
            WidgetDockElementController._$1n(iw - 1, 0, iw - 1, ih, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
            WidgetDockElementController._$1q(iw - 1, 0, iw - 1, ih, this._$hj);
        }
    } else if (this._$kd == 3) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, ih - 1, iw, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        }
    } else if (this._$kd == 4) {
        if (this._$ig) {
            WidgetDockElementController._$1q(0, iw, 0, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1n(0, iw, 0, ih - 1, this._$hj);
        }
    } else if (this._$kd == 5) {
        if (this._$ig) {
            WidgetDockElementController._$1n(iw - 1, iw, iw - 1, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(iw - 1, iw, iw - 1, ih - 1, this._$hj);
        }
    }
};

_$L.prototype = new _$17;

function _$L() {
};
_$L.prototype._$2G = function (_$nz, _$dk, _$p8, _$8b) {
    this._$ho._$2w(_$nz, _$dk, _$p8, _$8b);
};
_$L.prototype._$67 = function (_$9g, _$nA, _$97) {
    this._$ho._$69(_$9g, _$nA, _$97);
};

function WidgetDockFloatPanel(window, title) {
    this._$iN = false;
    this._$jz = -1;
    this._$kz = new _$L();
    this._$kz._$ho = this;
    this._$lf = new _$6P();
    this._$hy = null;
    this._$lt = null;
    this._$io = true;
    this._$lK = null;
    this._$iL = false;
    this._title = title;
    this._$hE = null;
    this._$jm = WidgetDockFloatPanel._$0;
    this._$jA = _$1l._$0U;
    this._$iG = false;
    this._$iP = false;
    this._$iR;
    this._$ly;
    this._$lx;
    this._$lI;
    this._$ih;
    this._$ko;
    this._$kp;
    this._$ks;
    this._$kr;
    this._$iv;
    this._$iw = true;
    this._$jG;
    this._$jE;
    this._$lp;
    this._$jw = 0;
    this._windowParent = null;
    this._$l9 = null;
    this._element = null;
    this._left = 0;
    this._top = 0;
    this._width = 0;
    this._height = 0;
    this._$hA = null;
    this._$iZ = false;
    this._$iM;
    this._$je;
    this._$kW;
    this._$ja;
    this._$jf;
    this._$j3;
    this._$j0;
    this._$jr;
    this._$ia;
    this._$k4;
    this._$ls;
    this._$iq = false;
    this._$kA;
    this._$l6;
    this._$ir;
    this._isInitLayout;
    this._$kc;
    this._$id = true;
    this._$jx;
    this._$jN = WidgetDockFloatPanel._$48;
    this._$kj = WidgetDockFloatPanel._$0;
    this._$j4;
    this._$lJ;
    this._$kB;
    this._$l7;
    this._patternMain;
    this._$iS;
    this._$i8 = null;
    this._$hw = null;
    this._$lD;
    this._$lN;
    this._$k0 = WidgetDockFloatPanel._$4Z;
    this._$jt = 0;
    this._$hz = null;
    if (window == null) {
        this._$jw = WidgetDockFloatPanel._$4B;
    } else {
        this._$jw = WidgetDockFloatPanel._$4W;
        this._windowParent = window;
        this._$f6(window._patternMain, title);
    }
    this._$jE = 0;
    if (WidgetDockFloatPanel._floatPanelController == null) {
        WidgetDockFloatPanel._floatPanelController = new WidgetDockFloatPanelController();
    }
    WidgetDockFloatPanel._floatPanelController.addFloatPanel(this);
};
WidgetDockFloatPanel._$0K = 1;
WidgetDockFloatPanel._$0Q = 0x02;
WidgetDockFloatPanel._$0M = 0x04;
WidgetDockFloatPanel._$0I = 0x08;
WidgetDockFloatPanel._$iH = false;
WidgetDockFloatPanel._$0J = 0;
WidgetDockFloatPanel._$0P = 1;
WidgetDockFloatPanel._$0L = 2;
WidgetDockFloatPanel._$0H = 3;
WidgetDockFloatPanel._$1F = 4;
WidgetDockFloatPanel._$3Q = 0;
WidgetDockFloatPanel._$6K = 1;
WidgetDockFloatPanel._$5j = 2;
WidgetDockFloatPanel._$q = 3;
WidgetDockFloatPanel._$0 = 7;
WidgetDockFloatPanel._$48 = 0;
WidgetDockFloatPanel._$46 = 1;
WidgetDockFloatPanel._$47 = 2;
WidgetDockFloatPanel._$4C = 0;
WidgetDockFloatPanel._$4Z = 1;
WidgetDockFloatPanel._$6W = 2;
WidgetDockFloatPanel._$0V = 0;
WidgetDockFloatPanel._$0X = 1;
WidgetDockFloatPanel._$0W = 2;
WidgetDockFloatPanel._$1D = 0x01;
WidgetDockFloatPanel._$1A = 0x02;
WidgetDockFloatPanel._$1B = 0x04;
WidgetDockFloatPanel._$1C = 0x08;
WidgetDockFloatPanel._$2T = 0x10;
WidgetDockFloatPanel._$2U = 0x20;
WidgetDockFloatPanel._$6X = 0x380;
WidgetDockFloatPanel._$3t = 0xc00;
WidgetDockFloatPanel._$4X = 0xF000;
WidgetDockFloatPanel._$B = 0x10000;
WidgetDockFloatPanel._$C = 0xE0000;
WidgetDockFloatPanel._$75 = 0;
WidgetDockFloatPanel._$2Y = 1;
WidgetDockFloatPanel._$2X = 2;
WidgetDockFloatPanel._$2W = 3;
WidgetDockFloatPanel._$lU = null;
WidgetDockFloatPanel._$lV = null;
WidgetDockFloatPanel._$lY = null;
WidgetDockFloatPanel._$lR = null;
WidgetDockFloatPanel._$lS = null;
WidgetDockFloatPanel._$lT = null;
WidgetDockFloatPanel._$lW = null;
WidgetDockFloatPanel._$lX = null;
WidgetDockFloatPanel._$hP = null;
WidgetDockFloatPanel._$hQ = null;
WidgetDockFloatPanel._$hT = null;
WidgetDockFloatPanel._$hM = null;
WidgetDockFloatPanel._$hN = null;
WidgetDockFloatPanel._$hO = null;
WidgetDockFloatPanel._$hR = null;
WidgetDockFloatPanel._$hS = null;
WidgetDockFloatPanel._$1H = 4;
WidgetDockFloatPanel._$iA = false;
WidgetDockFloatPanel._$jy = 0;
WidgetDockFloatPanel._$iY = false;
WidgetDockFloatPanel._$jB = 0;
WidgetDockFloatPanel._$im = true;
WidgetDockFloatPanel._$k2 = 0;
WidgetDockFloatPanel._$k3 = 0;
WidgetDockFloatPanel._$lL = new _$5Y();
WidgetDockFloatPanel._$4B = 0;
WidgetDockFloatPanel._$1G = 1;
WidgetDockFloatPanel._$4W = 2;
WidgetDockFloatPanel._floatPanelController = null;
WidgetDockFloatPanel._$ie = false;
WidgetDockFloatPanel._$lr = new Location();
WidgetDockFloatPanel._$cj = new Rect();
WidgetDockFloatPanel._$h5 = null;
WidgetDockFloatPanel.prototype._$7h = function () {
};
WidgetDockFloatPanel.prototype._$7i = function () {
};
WidgetDockFloatPanel.prototype._$fO = function () {
    return false;
};
WidgetDockFloatPanel.prototype.hasOutIFrame = function () {
    this._$iZ = true;
};
WidgetDockFloatPanel.prototype._$f7 = function () {
    if (this._$i8 == null) {
        this._$i8 = new Array();
        this._$hw = new Array();
    }
    this._$kc = 0xffff;
    this._$k0 = WidgetDockFloatPanel._$4Z;
    this._$kj = WidgetDockFloatPanel._$0;
    this._$iv = true;
    this._$jN = WidgetDockFloatPanel._$48;
    this._$iS = false;
    this._isInitLayout = false;
    this._$lt = new Location();
    this._$lK = new _$5Y();
    this._$lJ = new _$5Y();
    this._$lI = new _$5Y();
    this._$lx = new Rect();
    WidgetDockFloatPanel._$lL = new _$5Y();
    this._$ly = new Rect();
    this._$ls = new Location();
    this._$lD = new Rect();
    this._$lN = new Array(1);
    this._$lN[0] = 0;
    this._$ir = true;
    this._$iP = true;
    this._$ia = true;
    this._$lt.x = 0;
    this._$lt.y = 0;
    this._$lK.cx = -140;
    this._$lK.cy = -200;
    this._$jE = 0;
    this._$l9 = null;
    this._$kA = null;
    this._$l6 = null;
    this._$kW = null;
    this._$kB = null;
    this._$l7 = null;
    WidgetDockPatternBase.resetRect(this._$lx);
    WidgetDockPatternBase.resetRect(this._$ly);
    this._$lI.cx = this._$lI.cy = 0;
    this._$j3 = this._$j0 = 0;
    this._$kA = null;
    this._$jr = 0xffffffff;
};
WidgetDockFloatPanel.prototype._$f6 = function (patternMain, title) {
    this._title = title;
    this._$3a();
    if (this._$jw == WidgetDockFloatPanel._$4B) return;
    this._patternMain = patternMain;
    this._$f7();
    this.setElementVisible(true);
    this._$7q();
    this._$hy._$rC(title);
};
WidgetDockFloatPanel.prototype._$fS = function () {
    return true;
};
WidgetDockFloatPanel.prototype._$rr = function (img) {
    _$hE = img;
    if (this._$k0 == WidgetDockFloatPanel._$6W && _$kH != null) {
        this._patternMain._$5A(0);
    } else if (this._$kA != null && this._$kA._$o5 != null) {
        this._$kA._$o5._$5z();
    }
};
WidgetDockFloatPanel.prototype._$bV = function () {
    if (this._$fT()) return _$75;
    if (_$k0 == WidgetDockFloatPanel._$6W) return WidgetDockFloatPanel._$2Y;
    if (_$kA != null && _$kA._$o5 != null) {
        if (_$kA._$o5._$3x(this)) return _$2X;
    }
    return _$2W;
};
WidgetDockFloatPanel.prototype._$rm = function (_$8a) {
    _$iq = _$8a;
};
WidgetDockFloatPanel.prototype._$bO = function () {
    return _$iq;
};
WidgetDockFloatPanel.prototype._$c4 = function () {
    return _$k0;
};
WidgetDockFloatPanel.prototype._$ry = function (_$d6) {
    if (!_$S() || _$k0 == _$d6) {
        return;
    }
    if (_$kB == null) {
        _$k0 = _$d6;
        return;
    }
    var bvi = this._$fT();
    if (_$d6 == WidgetDockFloatPanel._$4Z || _$d6 == WidgetDockFloatPanel._$6W) {
        if ((this._$k0 == WidgetDockFloatPanel._$4Z && bvi) || this._$k0 == WidgetDockFloatPanel._$6W) this._$0h(); else if (this._$k0 == WidgetDockFloatPanel._$4C && _$d6 == WidgetDockFloatPanel._$6W) {
            if (bvi) {
                this._$k0 = WidgetDockFloatPanel._$4Z;
                this._$0h();
            } else {
                this._$iP = true;
                this._patternMain._$8(this._$j0, this, true);
            }
        }
        this._$k0 = _$d6;
        _$qJ();
    } else {
        if (_$k0 == WidgetDockFloatPanel._$6W) {
            _$39(false);
            _$kH._$5M(_$j0, this);
            _$kH._$5A(0);
            WidgetDockController._$8l._$5N();
            this._$iP = false;
            this._$k0 = WidgetDockFloatPanel._$4Z;
            setVisible(true);
            this._$iP = true;
        }
        _$k0 = _$4C;
        _$qJ();
    }
};
WidgetDockFloatPanel.prototype._$9W = function () {
    this._$f7();
};
WidgetDockFloatPanel.prototype.unload = function (_$80) {
    if (_$k0 == WidgetDockFloatPanel._$6W) {
        _$kH._$5N();
        this._$0h();
    }
    if (_$80) _$kH._$4b(this);
    _$iR = this._$fT();
    if (!_$iR) {
        if (_$kA != null && _$kA._$o5 != null) _$kA._$o5._$6b(this);
        _$iR = this._$fT();
    }
    if (_$iR) {
        setVisible(false);
    }
    if (_$kB != null) {
    }
    if (!_$80) {
        if (_$kB == null) {
            _$j0 = _$j3;
            _$jr = _$k4;
            _$kA = _$l6;
        }
        if (_$jr >= 0 && _$j0 <= 3) _$kH._$53(this);
    }
    _$f7();
    if (!_$80) {
        var _$e1 = WidgetDockFloatPanel._floatPanelController.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            if (WidgetDockFloatPanel._floatPanelController._panelList[i] == this) WidgetDockFloatPanel._floatPanelController.deletePanel(i);
        }
    }
};
WidgetDockFloatPanel.prototype._$r9 = function (_$9R) {
    if (this._$hy != null) {
        this._$hy._$rp(_$9R);
        this._$hy._$qJ();
    }
    if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1) {
        this._$kA._$o5._$5z();
    }
};
WidgetDockFloatPanel.prototype._$bW = function () {
    return this._$hE;
};
WidgetDockFloatPanel.prototype._$rl = function (_$7T) {
    this._$iv = _$7T;
};
WidgetDockFloatPanel.prototype._$rx = function (_$qY) {
    this._title = _$qY;
};
WidgetDockFloatPanel.prototype._$c3 = function () {
    return this._title;
};
WidgetDockFloatPanel.prototype.getTitle = function () {
    if (this._title != null && this._title.length > 0) return this._title; else return _$hy._$cb();
};
WidgetDockFloatPanel.prototype.setInitialLayoutReference = function (_$mO) {
    if (_$mO != this) this._$l9 = _$mO;
};
WidgetDockFloatPanel.prototype._$rt = function (mgr) {
};
WidgetDockFloatPanel.prototype._$1f = function (_$og, _$qX) {
    if (_$og == null) this._$jw = WidgetDockFloatPanel._$4B; else this._$jw = _$1G;
    this._$f6(_$og._$8l, _$qX);
    this._$jE = 0;
    if (WidgetDockFloatPanel._floatPanelController == null) WidgetDockFloatPanel._floatPanelController = new WidgetDockFloatPanelController();
    WidgetDockFloatPanel._floatPanelController.addFloatPanel(this);
};
WidgetDockFloatPanel.prototype._$mq = function () {
    _$kH._$1(this);
};
WidgetDockFloatPanel.prototype._$7q = function () {
    this._$hy = new _$1l();
    this._$hy._$rn(this);
    this._$fc(this._$hy, WidgetDockFloatPanel._$6K);
    {
        this._$hy._$rE(this._$hy._$cb());
    }
};
WidgetDockFloatPanel.prototype._$1j = function (_$99) {
    if (_$99 == _$0P || _$99 == _$0H) return true;
    return false;
};
WidgetDockFloatPanel.prototype._$r6 = function (_$7J, _$8d) {
    if (this._$k0 == WidgetDockFloatPanel._$6W) return;
    if (this._$jw == WidgetDockFloatPanel._$4B) return;
    if (_$7J == false) {
    } else {
    }
    if (_$7J && this._$kB != null && !this._$kB._$ii) {
        if (this._$jw != WidgetDockFloatPanel._$4W) {
        }
    }
    this._$hy._$r6(_$7J);
    if (_$7J && this._$jw == WidgetDockFloatPanel._$4W && !this._$kB._$ii) {
        if (!this._$kB._$ii) {
        }
    }
    if (_$8d) {
        if (this._$kB != null && !this._$kB._$ii) {
        }
    }
};
WidgetDockFloatPanel.prototype._$ag = function (mainPattern) {
    return new widgetDockPanel();
};
WidgetDockFloatPanel.prototype._$69 = function (_$9g, _$nA, _$97) {
    this._$lf._$j1 = _$9g;
    if (_$nA != null) {
        this._$lf._$ky = _$nA._$kA;
        this._$lf._$j2 = _$97;
    } else this._$lf._$ky = null;
};
WidgetDockFloatPanel.prototype._$2w = function (_$nz, _$dk, _$p8, _$8b) {
    var _$fl = _$nz.cx;
    var _$fm = _$nz.cy;
    if (this._$lf._$j1 == WidgetDockPatternBase._$3m || this._$lf._$j1 == WidgetDockPatternBase._$3j) {
        if (!_$8b) {
            _$nz.cx = _$p8.right - _$p8.left;
        }
        if (this._$lf._$ij) return;
        if (this._$ir || !_$8b) _$nz.cy = _$dk;
    } else {
        if (!_$8b) {
            _$nz.cy = _$p8.bottom - _$p8.top;
        }
        if (this._$lf._$ij) return;
        if (this._$ir || !_$8b) _$nz.cx = _$dk;
    }
    if (this._$lf._$j1 == WidgetDockPatternBase._$3j) {
        _$fm = _$fm - _$nz.cy;
        this._$lf._$kq = this._$lf._$kq + _$fm;
    } else if (this._$lf._$j1 == WidgetDockPatternBase._$3l) {
        _$fl = _$fl - _$nz.cx;
        this._$lf._$kn = this._$lf._$kn + _$fl;
    }
};
WidgetDockFloatPanel.prototype._$mw = function (pt) {
    var _$pL = _$c0();
    _$pL.x = _$pL.x + pt.x;
    _$pL.y = _$pL.y + pt.y;
    _$4R(_$pL);
};
WidgetDockFloatPanel.prototype._$rC = function (_$qX) {
    _$hy._$rC(_$qX);
    if (_$kA != null && _$kA._$o5 != null && _$kA._$o5._$i6.length > 1) {
        _$kA._$o5._$4J(this, _$qX);
    }
    var _$fs;
    if (this._$kj <= _$q) _$fs = this._$kj; else _$fs = this._$j0;
    if (_$k0 == _$6W && _$fs <= _$0H && _$kH._$lk != null && _$kH._$lk[_$fs] != null) {
        _$kH._$lk[_$fs]._$4J(this, _$qX);
    }
};
WidgetDockFloatPanel.prototype._$cb = function () {
    return this._$hy._$cb();
};
WidgetDockFloatPanel.prototype._$rF = function (_$di) {
    var _$fg = this._$kj;
    var bre = false;
    if (_$fg != _$di && _$k0 == WidgetDockFloatPanel._$6W) {
        _$0h();
        bre = true;
    }
    if (_$di < 0 || _$di > _$q) {
        this._$kj = _$0;
    } else this._$kj = _$di;
    if (_$fg != this._$kj && bre && _$k0 == WidgetDockFloatPanel._$4Z) {
        _$0h();
    }
};
WidgetDockFloatPanel.prototype._$cd = function () {
    return this._$kj;
};
WidgetDockFloatPanel.prototype._$rs = function (_$cO) {
    if (_$cO < 0) _$cO = 0;
    if (_$cO > 2) _$cO = 2;
    _$jN = _$cO;
};
WidgetDockFloatPanel.prototype._$bY = function () {
    return _$jN;
};
WidgetDockFloatPanel.prototype._$ms = function (pt) {
    var _$pL = _$c0();
    _$pL.x = _$pL.x + pt.x;
    _$pL.y = _$pL.y + pt.y;
    _$4i(_$pL);
};
WidgetDockFloatPanel.prototype._$bf = function (_$88) {
    if (!this._$io) return;
    var ar = this._$i8;
    var _$gi = ar.length;
    var i;
    for (i = 0; i < _$gi; i++) {
        var tmp = ar[i];
        tmp(_$88);
    }
};
WidgetDockFloatPanel.prototype._$be = function (_$cD) {
    var ar = this._$hw;
    var _$gi = ar.length;
    var i;
    for (i = 0; i < _$gi; i++) {
        var tmp = ar[i];
        tmp(_$cD);
    }
};
WidgetDockFloatPanel.prototype._$R = function (_$pC, _$99, _$nz) {
    this._$lf._$j0 = this._$j0;
    this._$lf._$jr = this._$jr;
    this._$lf._$kA = this._$kA;
    this._$lf._$kC = this._$kB;
    this._$lf._$kx = this;
    this._$lf._$ir = this._$ir;
    if (!this._$Q()) this._$lf._$it = true; else this._$lf._$it = false;
    if (!this._$S() || WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
        this._$25(this._$lf._$lC);
    } else {
        this._$kB.getWindowRect(this._$lf._$lC);
    }
    var _$og = null;
    var _$oh = null;
    if (this._$jw == WidgetDockFloatPanel._$4W) _$oh = this._windowParent._$2i(); else _$oh = _$6B._$kL;
    var _$e1 = _$oh.length;
    var _$qj = new Rect();
    var _$8R;
    if (this._$iq) _$e1 = 0;
    var i;
    for (i = 0; i < _$e1; i++) {
        var pmi;
        if (this._$jw == WidgetDockFloatPanel._$4W) pmi = _$oh[i]; else pmi = _$6B._$kL[i]._$hJ;
        if (pmi._$bG() == null) continue;
        pmi.getWindowRect(_$qj);
        _$8R = false;
        if (!pmi._$it) {
            _$8R = WidgetDockPatternBase._$5f(_$qj, _$pC);
            if (_$8R) {
            }
        } else {
            WidgetDockFloatPanel._$cj.setRect(_$qj);
            WidgetDockFloatPanel._$cj.left -= WidgetDockPatternBase._$A;
            WidgetDockFloatPanel._$cj.right += WidgetDockPatternBase._$A;
            WidgetDockFloatPanel._$cj.top -= WidgetDockPatternBase._$A;
            WidgetDockFloatPanel._$cj.bottom += WidgetDockPatternBase._$A;
            _$8R = WidgetDockPatternBase._$5f(WidgetDockFloatPanel._$cj, _$pC);
            if (_$8R) {
                if ((pmi == this._$kB) && WidgetDockFloatPanel._$iY) {
                    _$og = null;
                    _$99[0] = 0xff;
                    this._$lf._$j1 = 0xff;
                } else {
                    _$og = pmi._$1Z(this._$lf, this._$kz, _$pC, _$99, _$nz);
                    if (this._$lf._$j1 >= 0 && this._$lf._$j1 <= 7) {
                        return _$og;
                    }
                }
                if (WidgetDockPatternBase._$5f(_$qj, _$pC) && pmi != this._$kB) {
                    return _$og;
                }
            }
        }
    }
    _$og = null;
    _$og = this._patternMain._$1Z(this._$lf, this._$kz, _$pC, _$99, _$nz);
    if (_$99[0] >= 0 && _$99[0] <= 7) {
        if (this._$lf._$iM) {
            this._patternMain._$0f(this._$lf, _$99, _$nz);
        }
        return _$og;
    } else {
        var _$tm = 0;
    }
    return _$og;
};
WidgetDockFloatPanel.prototype.setElementVisible = function (isVisible) {
    if (this._$hy != null) {
        this._$hy.setVisible(isVisible);
    }
    if (this._element != null) {
        if (isVisible) {
            this._element.style.overflow = "auto";
        } else {
            this._element.style.overflow = "hidden";
        }
    }
    WidgetDockElementController.setElementVisible(this._element, isVisible);
};
WidgetDockFloatPanel.prototype._$fR = function () {
    if (this._$kc == 0 && !this._$id) {
        return false;
    }
    return true;
};
WidgetDockFloatPanel.prototype._$ro = function (_$7W) {
    this._$id = _$7W;
    if (!this._$id && this._$kB != null && !this._$kB._$ii) {
        if (this._$kc != 0) {
            this._$ay();
        } else {
        }
    }
};
WidgetDockFloatPanel.prototype._$bQ = function () {
    return this._$id;
};
WidgetDockFloatPanel.prototype._$ra = function (iHW) {
    if (iHW < 0) iHW = 0;
    this._$jA = iHW;
    if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1 && this._$kA._$o5._$bi == this) {
        if (this._$hy._$hf != null) {
            this._$hy._$hf._$rz(new Size(_$hy._$hf._$cg(), _$jA + _$G._$6J));
        }
        this._$aw();
        if (this._$hy._$hf != null) this._$hy._$hf._$aw();
    } else this._$aw();
};
WidgetDockFloatPanel.prototype._$bD = function () {
    return this._$jA;
};
WidgetDockFloatPanel.prototype._$rk = function (_$di) {
    if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1 && this._$kA._$o5._$bi == this) {
        if (_$di != this._$jm && _$jm == _$q) {
            _$qC(_$hy._$hf);
            this._$fc(_$kA._$o5, WidgetDockFloatPanel._$q);
        } else if (_$di == WidgetDockFloatPanel._$q) {
            this._$jm = _$di;
            this._$5(_$kA._$o5);
        }
    }
    this._$jm = _$di;
    this._$qz(-1);
};
WidgetDockFloatPanel.prototype._$bN = function () {
    return this._$jm;
};
WidgetDockFloatPanel.prototype._$fc = function (_$a0, _$gf) {
};
WidgetDockFloatPanel.prototype.add = function (s, _$a0) {
    return _$a0;
};
WidgetDockFloatPanel.prototype.addContentDiv = function (element) {
    this._element = element;
    element.style.position = "absolute";
    if (WidgetDockController._browserType == EnumBrowserType.IE && WidgetDockController._ieVersion <= 7) {
        this.hasOutIFrame();
        return;
    }
    if (element instanceof HTMLIFrameElement) {
        if (WidgetDockController._$06(element.id)) {
            this.hasOutIFrame();
        }
    }
};
WidgetDockFloatPanel.prototype._$6p = function (_$cS, _$do, _$dq, _$cM) {
    {
        this._$sL();
    }
    if (!this._$ir) {
        this._$lJ.cx = _$dq;
        this._$lJ.cy = _$cM;
    }
    this._left = _$cS;
    this._top = _$do;
    ;this._width = _$dq;
    this._height = _$cM;
    this._$qK();
};
WidgetDockFloatPanel.prototype._$6q = function (_$q4) {
    this._$6p(_$q4.left, _$q4.top, WidgetDockPatternBase._$2A(_$q4), WidgetDockPatternBase._$2z(_$q4));
};
WidgetDockFloatPanel.prototype.setVisible = function (_$88) {
    if (this._$jw == WidgetDockFloatPanel._$4B) {
        this.setElementVisible(_$88);
        return;
    }
    this._patternMain._$rB(this, _$88);
};
WidgetDockFloatPanel.prototype._$rB = function (_$88) {
    var _$rW = "";
    if (!this._isInitLayout) {
        this.setElementVisible(_$88);
        return;
    }
    if (_$88) {
        if (!this._$fT()) {
            this.setElementVisible(true);
            if (this._$k0 == WidgetDockFloatPanel._$6W) {
                if (this._patternMain != null) {
                    this._windowParent._patternMain._$6t(this);
                }
                return;
            }
            if (this._$kB == null) {
                if (!this._$S()) {
                    this._$ir = false;
                    this._$1R();
                } else {
                }
            } else if (this._$kA != null) {
                if (this._$kB._$ii || !this._$S()) {
                    var _$cp = 0;
                    this._$d(this._$kB);
                    this._$lf._$j1 = this._$j0;
                    this._$5u();
                    this._$be(this._$j0);
                    this._$kB._$18(this, null);
                    this.setElementVisible(true);
                    this._$qz(-1);
                    this._$qJ();
                } else {
                    this._$kW = this._$kB;
                    this._$Z();
                }
            } else this._$18();
            this._$iP = true;
        }
    } else {
        if (!this._$fT()) {
            if (this._$kA == null || this._$kA._$o5 == null || this._$kA._$o5._$i6.length <= 1) return;
            this._$kA._$o5._$6b(this);
        } else {
            if (this._$k0 == WidgetDockFloatPanel._$6W) {
                this._patternMain._$5N();
                return;
            }
        }
        var _$8L = false;
        if (this._$kB != this._patternMain) _$8L = true;
        this._$kB._$5H(this, null);
        this._$ir = _$8L;
        this.setElementVisible(false);
        this._$iP = false;
    }
    this._$bf(_$88);
};
WidgetDockFloatPanel.prototype._$S = function () {
    return true;
};
WidgetDockFloatPanel.prototype._$18 = function () {
    this._patternMain._$s7(this);
};
WidgetDockFloatPanel.prototype._$s7 = function () {
    if (!this._$S()) {
        if (!this._$ir) return;
    }
    var _$8s = false;
    if (this._$kB == null) {
        if (this._$jE == 0) {
            this._$kB = this._patternMain;
            this._$jE = 1;
        } else {
            this._$Z();
            _$8s = true;
            if (this._$l7 == null) this._$jE = 0;
        }
    } else {
        if (!this._$kB._$ii) {
            this._$kW = this._$kB;
            this._$Z();
            _$8s = true;
        }
    }
    if (this._$kB._$ii) this._$ir = false; else this._$ir = true;
    var rc = new Rect();
    this.setElementVisible(false);
    this._$d(this._$kB);
    if (this._$kB != null && this._$kB._$ii) this._$be(this._$j0); else this._$be(WidgetDockFloatPanel._$1F);
    this.setElementVisible(true);
    if (!_$8s) this._$kB._$18(this, null);
    this._patternMain._$1(this);
};
WidgetDockFloatPanel.prototype._$d = function (mainPattern) {
    mainPattern._$d(this);
};
WidgetDockFloatPanel.prototype._$Z = function () {
    if (this._$kW == null) {
        if (this._$jw == WidgetDockFloatPanel._$4W) {
            this._$kW = new _$J(false);
        } else {
            this._$kW = new _$K(false);
        }
        this._$kW._$kV = this._patternMain;
        this._$j0 = 0;
        this._$jr = 0xffffffff;
        this._$kA = null;
    }
    this._$kW._$n(this);
};
WidgetDockFloatPanel.prototype._$1R = function () {
    this._patternMain._$s8(this);
};
WidgetDockFloatPanel.prototype._$5v = function () {
};
WidgetDockFloatPanel.prototype._$s8 = function () {
    var rc = new Rect();
    rc.left = this._$lt.x;
    rc.top = this._$lt.y;
    rc.right = rc.left + this._$lK.cx;
    rc.bottom = rc.top + this._$lK.cy;
    if (this._$kB != null && this._$S()) {
        var _$aQ = null;
        if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V && this._$kA._$o5 != null && (this._$kA._$o5._$i6.length > 1)) {
            _$aQ = this._$kA._$o5._$21();
        } else {
            _$aQ = new Array(1);
            _$aQ[0] = this;
        }
        if (!this._$kB._$ii) {
            if (this._$kB._$4s(null, false)) {
                var _$pi = this._$kB;
                this._$5P(_$aQ);
                var i;
                for (i = 0; i < _$aQ.length; i++) {
                    _$aQ[i]._$kB._$53(_$aQ[i]);
                    _$aQ[i]._$kB._$l(_$aQ[i]);
                }
                this._$ir = false;
            } else this._$ir = true;
        } else {
            var _$fI = 0;
            var _$91 = new Array(_$aQ.length);
            while (_$fI < _$aQ.length) {
                var i;
                for (i = 0; i < _$aQ.length; i++) {
                    if (_$aQ[i]._$fT() && !_$91[i]) {
                        var _$gy = _$aQ[i]._$jr;
                        var _$pO = _$aQ[i]._$kA;
                        var _$9C = _$aQ[i]._$j0;
                        var _$sv = _$aQ[i]._$kB;
                        _$aQ[i]._$jr = _$aQ[i]._$k4;
                        _$aQ[i]._$kA = _$aQ[i]._$l6;
                        _$aQ[i]._$j0 = _$aQ[i]._$j3;
                        _$aQ[i]._$kB = _$aQ[i]._$l7;
                        if (_$aQ[i]._$kB != null && !_$aQ[i]._$kB._$ii) {
                            _$aQ[i]._$kB._$53(_$aQ[i]);
                        }
                        _$aQ[i]._$k4 = _$gy;
                        _$aQ[i]._$l6 = _$pO;
                        _$aQ[i]._$j3 = _$9C;
                        _$aQ[i]._$l7 = _$sv;
                        _$aQ[i]._$kB = _$sv;
                        _$aQ[i]._$kA = _$pO;
                        _$aQ[i]._$j0 = _$9C;
                        _$aQ[i]._$jr = _$gy;
                        if (_$aQ[i]._$kB != null) {
                            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0X) _$aQ[i]._$io = false;
                            _$aQ[i]._$kB._$5H(_$aQ[i], null);
                            _$aQ[i]._$io = true;
                        }
                        _$fI++;
                        _$91[i] = true;
                    }
                }
            }
        }
    }
    if (this._$kW != null && this._$iP) {
        this._$1S();
        return;
    }
    this._$be(WidgetDockFloatPanel._$1F);
    this._$ir = true;
    if (this._$iP && !this._$S()) {
        this._$k4 = this._$jr;
        this._$l6 = this._$kA;
        this._$j3 = this._$j0;
        this._$l7 = this._$kB;
        if (this._$kB != null) this._$kB._$5H(this, this._$kW);
    }
    if (this._$S()) {
        this._$jE = 1;
        this._$kW = null;
        this._$Z();
        this._$qz(-1);
    } else {
        this._$5v();
        this._$kW = new _$K(false);
        this._$kW._$kV = _$kH;
        this._$kW._$kK = this;
        var _$eu = rc.left;
        var _$gC = rc.top;
        WidgetDockPatternBase._$6o(_$kW._$bG(), null, _$eu, _$gC, this._$lK.cx, this._$lK.cy, 0);
        this._$kW._$bG().setVisible(true);
        this._$kW._$bI()._$sL();
        this._$kB = this._$kW;
        this._$qz(-1);
    }
};
WidgetDockFloatPanel.prototype._$31 = function (_$pC) {
    return this._$kA._$31(this, _$pC);
};
WidgetDockFloatPanel.prototype._$3y = function () {
    if (this._$ia && !this._$ir) {
        this._$ia = false;
        this._$1m(this._$ia);
    }
};
WidgetDockFloatPanel.prototype._$6F = function () {
    if (this._$j3 <= 3 && !this._$1k(this._$l7, this._$j3)) return;
    if ((this._$l7 != null) && (!this._$l7._$ii) && (!this._$id)) return;
    var _$pR = null;
    var _$pO = null;
    var _$9B;
    var _$9C;
    _$pR = this._$kB;
    _$pO = this._$kA;
    _$9B = this._$jr;
    _$9C = this._$j0;
    if (this._$kB != null) this._$kB._$5H(this, null);
    this._$kB = this._$l7;
    this._$kA = this._$l6;
    this._$jr = this._$k4;
    this._$j0 = this._$j3;
    this._$l7 = _$pR;
    this._$l6 = _$pO;
    this._$k4 = _$9B;
    this._$j3 = _$9C;
    this._$lf._$j1 = this._$j0;
    this._$5u();
    this._$18();
    this._$qz(-1);
};
WidgetDockFloatPanel.prototype._$1m = function (_$7J) {
};
WidgetDockFloatPanel.prototype._$4L = function () {
    _$5d();
};
WidgetDockFloatPanel.prototype._$5d = function () {
    if (_$k0 == WidgetDockFloatPanel._$6W) return;
    _$7h();
    if (!_$S()) {
        if (!_$ir) {
            if (_$id) {
                _$kW = null;
                _$1R();
            }
        } else {
            if (_$aA(_$j3)) {
                var _$pR = null;
                var _$pO = null;
                var _$9B;
                var _$9C;
                _$pR = _$kB;
                _$pO = _$kA;
                _$9B = _$jr;
                _$9C = _$j0;
                _$kB = _$l7;
                _$kA = _$l6;
                _$jr = _$k4;
                _$j0 = _$j3;
                _$l7 = _$pR;
                _$l6 = _$pO;
                _$k4 = _$9B;
                _$j3 = _$9C;
                _$lf._$j1 = _$j0;
                _$5u();
                if (!_$ir) return;
                _$ir = false;
                if (_$kB == null) _$kB = _$kH;
                var rc = new Rect();
                _$39(false);
                _$d(_$kB);
                _$be(_$j0);
                _$kB._$18(this, null);
                _$39(true);
                _$kH._$1(this);
                if (_$l7 != null && !_$l7._$ii) {
                    this._$kW.getWindowRect(rc);
                    _$lt.x = rc.left;
                    _$lt.y = rc.top;
                }
                _$kB._$bI()._$qJ();
                this._$qz(-1);
            }
        }
    } else {
        _$6F();
    }
};
WidgetDockFloatPanel.prototype._$9X = function () {
    if (this._$k0 == WidgetDockFloatPanel._$6W) {
        this._windowParent._patternMain._$5N();
        this._$bf(false);
        return true;
    }
    this._$kB._$5H(this, null);
    this.setElementVisible(false);
    this._$iP = false;
    this._$bf(false);
    return true;
};
WidgetDockFloatPanel.prototype._$0h = function () {
    if (this._$k0 == WidgetDockFloatPanel._$4Z) {
        if (this._$k0 == WidgetDockFloatPanel._$6W) {
            WidgetDockController._$8l._$5N();
        }
        this._$kB._$5H(this, null);
        this.setElementVisible(false);
        this._$iP = false;
        this._$k0 = WidgetDockFloatPanel._$6W;
        this._$bf(false);
        if (this._$kj > WidgetDockFloatPanel._$q) this._patternMain._$8(this._$j0, this, true); else this._patternMain._$8(this._$kj, this, true);
        this._patternMain._$5A(0);
        this._$qz(-1);
    } else {
        this.setElementVisible(false);
        if (this._$kj <= WidgetDockFloatPanel._$q) this._patternMain._$5M(this._$kj, this); else this._patternMain._$5M(this._$j0, this);
        this._patternMain._$5A(0);
        this._windowParent._patternMain._$5N();
        this._$iP = false;
        this._$k0 = WidgetDockFloatPanel._$4Z;
        this.setVisible(true);
    }
};
WidgetDockFloatPanel.prototype._$cn = function () {
    return this._$iw;
};
WidgetDockFloatPanel.prototype._$rq = function (_$7U) {
    this._$iw = _$7U;
};
WidgetDockFloatPanel.prototype._$5u = function () {
};
WidgetDockFloatPanel._$e4 = 0;
WidgetDockPrototype.bind(WidgetDockWindow, WidgetDockFloatPanel);

WidgetDockFloatPanel.prototype._$4R = function (_$pD) {
    return this._patternMain._$sa(this, _$pD);
};
WidgetDockFloatPanel.prototype._$sa = function (_$pD) {
    WidgetDockFloatPanel._$ie = false;
    this._$lf._$j1 = 0xff;
    this._$lf._$ij = false;
    this._$im = true;
    if (this._$kB != null && this._$kB._$ii) {
        if ((WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1) {
            var _$f8;
            var _$p4 = this._$kA._$o5._$21();
            _$f8 = _$p4.length;
            var i;
            for (i = 0; i < _$f8; i++) {
                if ((_$p4[i]._$kc & 0x0F) != 0) break;
            }
            if (i == _$f8) {
                return 0;
            }
            for (i = 0; i < _$f8; i++) {
                if (_$p4[i]._$id) break;
            }
            if (i == _$f8) this._$im = false;
        } else {
            if (!this._$id) {
                this._$im = false;
            }
        }
    }
    WidgetDockFloatPanel._$iY = false;
    if (this._$kB != null && !this._$kB._$ii) {
        if (this._$kB._$it) {
            if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0X) WidgetDockFloatPanel._$iY = !this._$kB._$4s(null, false); else if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) WidgetDockFloatPanel._$iY = !this._$kB._$4s(null, true); else if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0W) WidgetDockFloatPanel._$iY = true;
        }
    }
    if (this._$kB != null && !this._$kB._$ii && !this._$S()) WidgetDockFloatPanel._$iY = true;
    this._$25(this._$lx);
    if (WidgetDockFloatPanel._$iY) {
        if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0W) {
            WidgetDockFloatPanel._$k2 = this._$lK.cx;
            WidgetDockFloatPanel._$k3 = this._$lK.cy;
        }
        {
            if (this._$kB != null) {
                this._$kB.getWindowRect(this._$lx);
            }
            this._$lK.cx = WidgetDockPatternBase._$2A(this._$lx);
            this._$lK.cy = WidgetDockPatternBase._$2z(this._$lx);
        }
    }
    this._$iG = true;
    this._$ly.left = this._$ly.right = this._$ly.right = this._$ly.bottom = 0;
    this._$ko = _$pD.x - this._$lx.left;
    this._$kp = WidgetDockPatternBase._$2A(this._$lx);
    this._$ks = _$pD.y - this._$lx.top;
    this._$kr = WidgetDockPatternBase._$2z(this._$lx);
    this._$3B();
    this._$4I();
    this._$ih = false;
    WidgetDockFloatPanel._$lL.cx = this._$lJ.cx;
    WidgetDockFloatPanel._$lL.cy = this._$lJ.cy;
    this._$iL = false;
    this._$iG = false;
    return 0;
};
WidgetDockFloatPanel.prototype._$4I = function () {
};
WidgetDockFloatPanel.prototype._$15 = function (_$ts, _$h1) {
    _$jG = 0;
    return _$jG;
};
WidgetDockFloatPanel.prototype._$mf = function () {
    WidgetDockFloatPanel._$ie = true;
    this._$4i(WidgetDockFloatPanel._$lr);
};
WidgetDockFloatPanel.prototype._$mg = function () {
    WidgetDockFloatPanel._$ie = false;
    this._$4i(WidgetDockFloatPanel._$lr);
};
WidgetDockFloatPanel.prototype._$4i = function (pt) {
    WidgetDockFloatPanel._$lr.x = pt.x;
    WidgetDockFloatPanel._$lr.y = pt.y;
    this._$iL = true;
    if (this._$jw == WidgetDockFloatPanel._$4W) {
        var rcb = new Rect();
        this._windowParent.getWindowRect(rcb);
        if (!WidgetDockPatternBase._$5f(rcb, pt)) return;
    }
    this._$lD.setRect(this._$lx);
    var _$8s = false;
    this._$lf._$ij = false;
    this._$lf._$iC = false;
    this._$lf._$kM = this._$R(pt, this._$lN, WidgetDockFloatPanel._$lL);
    if (WidgetDockFloatPanel._$ie) {
        this._$lN[0] = 0xff;
        this._$lf._$j1 = 0xff;
    }
    if (this._$lN[0] <= 7 && !this._$aA(this._$lN[0]) && !this._$S()) {
        this._$lN[0] = 8;
        this._$lf._$j1 = 0xff;
    }
    if (this._$S() && this._$lN[0] <= 7) {
        var i = 0;
        var _$f8;
        if ((WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) && (this._$kA._$o5 != null) && this._$kA._$o5._$i6.length > 1) {
            var _$p4 = this._$kA._$o5._$21();
            _$f8 = _$p4.length;
            for (i = 0; i < _$f8; i++) {
                if (_$p4[i]._$1k(this._$lf._$kM, this._$lN[0])) break;
            }
            if (i == _$f8) {
                this._$lN[0] = 8;
            }
        } else {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                if (!this._$1k(this._$lf._$kM, this._$lf._$j1)) {
                    this._$lN[0] = 8;
                }
            } else {
                var _$7F = new WidgetDockFloatPanelController();
                var pbk = (this._$kB._patternPositionList[0]._patternSub._panelList[0])._$kI;
                pbk._$2Q(_$7F);
                var ic = _$7F.getPanelNum();
                for (i = 0; i < ic; i++) {
                    if (_$7F._panelList[i]._$1k(this._$lf._$kM, this._$lN[0])) break;
                }
                if (i == ic) {
                    this._$lN[0] = 8;
                }
            }
        }
        if (this._$lN[0] == 8) {
            this._$lf._$j1 = 0xff;
            this._$lf._$ij = false;
        }
    }
    if ((this._$lN[0] == 0xff) || (this._$lN[0] > 7)) {
        {
            this._$lx.left = pt.x - this._$lK.cx * this._$ko / this._$kp;
            this._$lx.top = pt.y - this._$lK.cy * this._$ks / this._$kr;
            var _$qr = new LocationSize();
            WidgetDockController._$2E(_$qr);
            if (this._$lx.top < 0) this._$lx.top = 0;
            if ((this._$lx.top + 15) > (_$qr.y + _$qr.height)) {
                this._$lx.top = _$qr.y + _$qr.height - 15;
            }
            if ((this._$lx.left + this._$lK.cx - 15) < _$qr.x) {
                this._$lx.left = _$qr.x + 15 - this._$lK.cx;
            }
            if ((this._$lx.left + 15) > (_$qr.x + _$qr.width)) {
                this._$lx.left = _$qr.x + _$qr.width - 15;
            }
            this._$lx.right = this._$lx.left + this._$lK.cx;
            this._$lx.bottom = this._$lx.top + this._$lK.cy;
        }
    } else {
        if (this._$S()) {
            if (this._$lf._$iM && this._$lf._$ka >= 0 && this._$lf._$kM != null) {
                var _$e1 = this._$lf._$kM._patternPositionList[this._$lN[0]]._patternSub.getPanelNum();
                var _$g5 = this._$lf._$ka - 1;
                if (_$g5 < _$e1) {
                    var _$pY = null;
                    var k;
                    for (k = 0; k <= _$g5; k++) {
                        _$pY = this._$lf._$kM._patternPositionList[this._$lN[0]]._patternSub._panelList[_$g5 - k];
                        if (_$pY._$iX) break;
                        _$pY = null;
                    }
                    var rca = new Rect();
                    if (_$pY != null) {
                        rca.setRect(_$pY.rect);
                    } else {
                        this._$lf._$kM.getWindowRect(rca);
                        rca.left += this._$lf._$kM._$jF[0];
                        rca.right -= this._$lf._$kM._$jF[2];
                        rca.top += this._$lf._$kM._$jF[1];
                        rca.bottom -= this._$lf._$kM._$jF[3];
                    }
                    if (this._$lN[0] == WidgetDockFloatPanel._$0J || this._$lN[0] == WidgetDockFloatPanel._$0L) {
                        WidgetDockFloatPanel._$lL.cy = rca.bottom - rca.top;
                        pt.x = 0;
                        pt.y = rca.top;
                        this._$lf._$kq = pt.y;
                    } else {
                        WidgetDockFloatPanel._$lL.cx = rca.right - rca.left;
                        pt.x = rca.left;
                        pt.y = 0;
                        this._$lf._$kn = pt.x;
                    }
                }
            }
            this._$lx.left = this._$lf._$kn;
            this._$lx.top = this._$lf._$kq;
        } else {
            this._$lx.left = pt.x - WidgetDockFloatPanel._$lL.cx * this._$ko / this._$kp;
            this._$lx.top = pt.y - WidgetDockFloatPanel._$lL.cy * this._$ks / this._$kr;
        }
        this._$lx.right = this._$lx.left + WidgetDockFloatPanel._$lL.cx;
        this._$lx.bottom = this._$lx.top + WidgetDockFloatPanel._$lL.cy;
        _$8s = true;
    }
    if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0X) {
        if (this._$lf._$iC) {
            this._$T();
            return;
        } else {
            this._$3A();
        }
    }
    if (this._$jw == WidgetDockFloatPanel._$4W) {
        this._$4l(_$8s);
        return;
    }
    {
        _$lY._$ri(_$8s, this._$id);
        _$lR._$ri(_$8s, this._$id);
        _$lU._$ri(_$8s, this._$id);
        _$lV._$ri(_$8s, this._$id);
        this._$m6(this._$lx.left, this._$lx.top, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
        if ((_$lD.right - _$lD.left) != (this._$lx.right - this._$lx.left)) {
            _$lY._$sL();
            _$lR._$sL();
        }
        if ((_$lD.bottom - _$lD.top) != (this._$lx.bottom - this._$lx.top)) {
            _$lU._$sL();
            _$lV._$sL();
        }
    }
};
WidgetDockFloatPanel.prototype._$4l = function (_$8s) {
    WidgetDockFloatPanel._$hT._$ri(_$8s, this._$id);
    WidgetDockFloatPanel._$hM._$ri(_$8s, this._$id);
    WidgetDockFloatPanel._$hP._$ri(_$8s, this._$id);
    WidgetDockFloatPanel._$hQ._$ri(_$8s, this._$id);
    var pt = new Location();
    pt.x = this._$lx.left;
    pt.y = this._$lx.top;
    this._$m5(pt.x, pt.y, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
    if ((this._$lD.right - this._$lD.left) != (this._$lx.right - this._$lx.left)) {
        WidgetDockFloatPanel._$hT._$sL();
        WidgetDockFloatPanel._$hM._$sL();
    }
    if ((this._$lD.bottom - this._$lD.top) != (this._$lx.bottom - this._$lx.top)) {
        WidgetDockFloatPanel._$hP._$sL();
        WidgetDockFloatPanel._$hQ._$sL();
    }
};
WidgetDockFloatPanel.prototype._$2Q = function (_$mY, _$nh, _$85, _$7O) {
    var _$7F = new WidgetDockFloatPanelController();
    var com = _$mY._$bE();
    var _$sx;
    var i;
    for (i = 0; i < com.length; i++) {
        if (com[i] instanceof WidgetDockFloatPanel) {
            _$sx = com[i];
            if (!_$sx._$kA._$8y) {
                if (_$sx._$kA._$o5 != null && _$sx._$kA._$o5._$i6.length >= 1) {
                    var _$e1 = _$sx._$kA._$o5._$i6.length;
                    var j;
                    for (j = 0; j < _$e1; j++) {
                        _$mY._$5E(_$sx._$kA._$o5._$i6[j]._$mO);
                        _$nh.Add(_$sx._$kA._$o5._$i6[j]._$mO);
                        _$7F.addFloatPanel(_$sx._$kA._$o5._$i6[j]._$mO);
                    }
                    if (_$85) {
                    }
                    _$sx._$kA._$o5 = null;
                } else {
                    if (com[i]._$fT()) {
                        _$mY._$5E(com[i]);
                        _$nh.Add(com[i]);
                        _$7F.addFloatPanel(com[i]);
                    }
                }
                _$sx._$kA._$8y = true;
                _$sx._$kA._$i();
            }
        } else {
            if (com[i] instanceof _$N) {
                _$mY._$5E(com[i]);
                if (_$7O) {
                    com[i]._$ap();
                }
            }
        }
    }
    var _$e1 = _$7F.getPanelNum();
    if (!_$mY._$ii && !_$nh._$ii) {
        var i;
        for (i = 0; i < _$e1; i++) {
            var _$nQ = _$7F._panelList[i];
            _$mY._$53(_$nQ);
        }
    } else if (!_$mY._$ii && _$nh._$ii) {
        var _$9C;
        var _$pO;
        var _$pR;
        var _$gB;
        var i;
        for (i = 0; i < _$e1; i++) {
            var _$nQ = _$7F._panelList[i];
            _$9C = _$nQ._$j0;
            _$pO = _$nQ._$kA;
            _$pR = _$nQ._$kB;
            _$gB = _$nQ._$jr;
            _$nQ._$lf._$j1 = this._$lf._$j1;
            _$nQ._$lf._$ka = this._$lf._$ka;
            _$nQ._$j0 = _$nQ._$j3;
            _$nQ._$kA = _$nQ._$l6;
            _$nQ._$jr = _$nQ._$k4;
            _$nQ._$kB = _$nQ._$l7;
            if (_$nQ._$kB != null) _$nQ._$kB._$53(_$nQ);
            this._$lf._$ka = _$nQ._$lf._$ka;
            _$nQ._$l7 = _$pR;
            _$nQ._$j3 = _$9C;
            _$nQ._$l6 = _$pO;
            _$nQ._$k4 = _$gB;
        }
    } else {
    }
    _$mY._patternPositionList[0]._patternSub._panelList[0]._$iX = false;
    _$mY._$01();
    return _$7F;
};
WidgetDockFloatPanel.prototype._$33 = function (_$mY, _$nh) {
    if (_$mY._$ii) return null;
    var _$oE = new _$F();
    var _$oK = _$mY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    _$oE._$5J(_$oK);
    var _$7F;
    _$7F = this._$2Q(_$mY, _$nh, false, false);
    if (!_$nh._$ii && this._$lf._$iM) {
        _$oE._$5w(_$nh, 0);
    } else _$oE._$5w(_$nh, this._$lf._$j1);
    var _$e1 = _$7F.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$7F._panelList[i] != this) _$7F._panelList[i]._$qz(-1);
    }
    return _$oE;
};
WidgetDockFloatPanel.prototype._$30 = function (_$mX) {
    this._$lf._$j1 = _$mX._$j1;
    this._$lf._$ka = _$mX._$ka;
    this._$kB._$5H(this, _$mX._$kM);
    this._$jG = 1;
    if (this._$kB != _$mX._$kM) {
        if (this._$kB != null && (this._$kB._$ii != _$mX._$kM._$ii)) {
            var _$9C;
            var _$pR;
            var _$gA;
            var _$pO;
            _$9C = this._$j0;
            _$pR = this._$kB;
            _$gA = this._$jr;
            _$pO = this._$kA;
            this._$kB = this._$l7;
            this._$j0 = this._$j3;
            this._$jr = this._$k4;
            this._$kA = this._$l6;
            if (this._$kB != null) {
                this._$kB._$53(this);
            }
            this._$l7 = _$pR;
            this._$j3 = _$9C;
            this._$k4 = _$gA;
            this._$l6 = _$pO;
        }
    }
    _$mX._$ka = this._$lf._$ka;
};
WidgetDockFloatPanel.prototype._$5P = function (_$aQ) {
    var _$fI = 0;
    var _$91 = new Array(_$aQ.length);
    while (_$fI < _$aQ.length) {
        var i;
        for (i = 0; i < _$aQ.length; i++) {
            if (_$aQ[i]._$fT() && !_$91[i]) {
                this._$kB._$5H(_$aQ[i], null);
                _$fI++;
                _$91[i] = true;
            }
        }
    }
};
WidgetDockFloatPanel.prototype._$77 = function () {
    var _$qr = WidgetDockController._$lB;
    if (this._$lt.y < _$qr.y) this._$lt.y = _$qr.y;
    if ((this._$lt.x + 15) > (_$qr.x + _$qr.width)) this._$lt.x = _$qr.x + _$qr.width - 15;
    if ((this._$lt.y + 15) > (_$qr.y + _$qr.height)) this._$lt.y = _$qr.y + _$qr.height - 15;
    if ((this._$lt.x + this._$lK.cx - 15) < _$qr.x) this._$lt.x = _$qr.x + 15 - this._$lK.cx;
};
WidgetDockFloatPanel.prototype._$73 = function (_$nn, _$nG) {
    var _$pW = _$nG._$oV;
    var _$pu = _$nn;
    var pb = _$nG;
    if (_$pW != null && _$pu != null) {
        var _$qs = new Rect();
        _$pu._$22(_$qs);
        var _$gd = _$qs.bottom - _$qs.top;
        var _$ge = _$qs.right - _$qs.left;
        if ((_$pW._$9y == WidgetDockPatternBase._$3m || _$pW._$9y == WidgetDockPatternBase._$3j) && _$gd > 0 && (_$gd > this._$lJ.cy) && this._$lJ.cy > 0) {
            if (pb._$9j == WidgetDockPatternBase._$3m) {
                _$pW._$br = 1.0 * this._$lJ.cy / (_$gd - this._$lJ.cy);
            } else {
                _$pW._$br = 1.0 * (_$gd - this._$lJ.cy) / this._$lJ.cy;
            }
        } else if ((_$pW._$9y == WidgetDockPatternBase._$3k || _$pW._$9y == WidgetDockPatternBase._$3l) && _$ge > 0 && (_$ge > this._$lJ.cx) && this._$lJ.cx > 0) {
            if (pb._$9j == WidgetDockPatternBase._$3k) _$pW._$br = 1.0 * this._$lJ.cx / (_$ge - this._$lJ.cx); else _$pW._$br = 1.0 * (_$ge - this._$lJ.cx) / this._$lJ.cx;
        }
        if (_$pW._$br < 0.01) _$pW._$br = 0.01;
    }
};
WidgetDockFloatPanel.prototype._$1x = function (pt) {
    this._$7i();
    var _$cp = 0;
    this._$T();
    if (!this._$iL) return;
    if (this._$lf._$iC) return;
    var _$9q = null;
    var _$pR;
    var _$9C;
    var _$gA;
    var _$pO;
    var _$f8 = 0;
    if ((this._$lf._$j1 != 0xff) && (this._$lf._$j1 < 4)) {
        var _$nZ = this;
        if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
            this._$lJ.cx = WidgetDockFloatPanel._$lL.cx;
            this._$lJ.cy = WidgetDockFloatPanel._$lL.cy;
        }
        if ((this._$j0 == this._$lf._$j1) && (this._$jr == this._$lf._$ka) && (this._$kA == this._$lf._$ky) && this._$lf._$j2 == 0xff) return;
        var _$8t = false;
        var _$aQ = null;
        var pb = null;
        if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1) {
            _$8t = true;
            var _$p4 = this._$kA._$o5._$21();
            _$aQ = new Array(_$p4.length);
            var i;
            var _$dY = 0;
            var _$en = 0;
            _$f8 = _$p4.length;
            var _$oX = new Array(_$f8);
            _$9q = new Array(_$f8);
            for (i = 0; i < _$f8; i++) {
                if (_$p4[i]._$1k(this._$lf._$kM, this._$lf._$j1)) {
                    _$aQ[_$dY] = _$p4[i];
                    _$dY++;
                } else {
                    _$oX[_$en] = _$p4[i];
                    _$9q[_$en] = _$oX[_$en]._$fT();
                    if (_$oX[_$en] == this) _$nZ = null;
                    _$en++;
                }
            }
            if (_$dY == 0) {
                return;
            }
            for (i = 0; i < _$en; i++) {
                _$oX[i]._$io = false;
                _$oX[i].setVisible(false);
                _$oX[i]._$io = true;
            }
            if (_$dY > 0 && _$nZ == null) {
                for (i = 0; i < _$dY; i++) {
                    if (_$aQ[i]._$fT()) {
                        _$nZ = _$aQ[i];
                        break;
                    }
                }
            }
            _$f8 = _$dY;
            var _$fI = 0;
            var _$91 = new Array(_$f8);
            var j;
            for (j = 0; j < _$f8; j++) {
                for (i = 0; i < _$f8; i++) {
                    if (_$aQ[i]._$fT() && !_$91[i]) {
                        _$aQ[i]._$io = false;
                        _$aQ[i]._$30(this._$lf);
                        _$aQ[i]._$io = true;
                        _$fI++;
                        _$91[i] = true;
                    }
                }
            }
            for (i = 0; i < _$en; i++) {
                if (!_$9q[i]) _$oX[i].setVisible(true); else {
                    _$oX[i]._$io = false;
                    _$oX[i].setVisible(true);
                    _$oX[i]._$io = true;
                }
            }
        } else {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                if (!this._$1k(this._$lf._$kM, this._$lf._$j1)) return;
                _$aQ = new Array(1);
                _$aQ[0] = this;
                this._$30(this._$lf);
            } else {
                var _$7F = new WidgetDockFloatPanelController();
                var pbk = this._$kB._patternPositionList[0]._patternSub._panelList[0]._$kI;
                pbk._$2Q(_$7F);
                var i;
                var ic = _$7F.getPanelNum();
                var _$oX = new Array(ic);
                _$aQ = new Array(ic);
                _$9q = new Array(ic);
                var _$en = 0;
                var _$f8 = 0;
                for (i = 0; i < ic; i++) {
                    if (!_$7F._panelList[i]._$1k(this._$lf._$kM, this._$lf._$j1)) {
                        _$oX[_$en] = _$7F._panelList[i];
                        _$9q[_$en] = _$oX[_$en]._$fT();
                        _$en++;
                    } else {
                        _$aQ[_$f8] = _$7F._panelList[i];
                        _$f8++;
                    }
                }
                if (_$en == ic) {
                    return;
                }
                var _$o1 = this._$kB;
                for (i = 0; i < _$en; i++) {
                    if (_$oX[i] == this) _$nZ = null;
                    _$oX[i]._$io = false;
                    _$oX[i].setVisible(false);
                    _$oX[i]._$io = true;
                }
                if (!this._$lf._$ij) {
                    pb = this._$33(_$o1, this._$lf._$kM);
                    _$o1._$l(null);
                } else {
                    var _$7H = this._$2Q(this._$kB, this._$lf._$kM, true, true);
                    var ino = _$7H.getPanelNum();
                    _$aQ = new Array(ino);
                    for (i = 0; i < ino; i++) {
                        _$aQ[i] = _$7H._panelList[i];
                        if (_$nZ == null && _$aQ[i]._$fT()) {
                            _$nZ = _$aQ[i];
                        }
                    }
                }
                for (i = 0; i < _$en; i++) {
                    if (!_$9q[i]) _$oX[i].setVisible(true); else {
                        _$oX[i]._$io = false;
                        _$oX[i].setVisible(true);
                        _$oX[i]._$io = true;
                    }
                }
            }
        }
        if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W && _$nZ != null) {
            _$nZ._$j0 = this._$lf._$j1;
            _$nZ._$jr = this._$lf._$ka;
        }
        if (this._$lf._$ij) {
            this._$lf._$ky = this._$lf._$kJ._$kA;
            var i;
            for (i = 0; i < _$aQ.length; i++) {
                _$aQ[i]._$kA = this._$lf._$ky;
                _$aQ[i]._$kA._$2(_$aQ[i]);
                _$aQ[i]._$kB = this._$lf._$kM;
                _$aQ[i]._$j0 = this._$lf._$j1;
                _$aQ[i]._$jr = this._$lf._$ka;
                if (_$aQ[i]._patternMain._$jv != WidgetDockController._$0R) {
                    _$aQ[i]._$qz(-1);
                }
                if (_$aQ[i]._$kB != null && _$aQ[i]._$kB._$ii) {
                    _$aQ[i]._$be(_$aQ[i]._$j0);
                } else _$aQ[i]._$be(WidgetDockFloatPanel._$1F);
            }
            this._$r6(true, true);
            return;
        }
        if (this._$lf._$ky != null) {
            _$nZ._$jr = this._$lf._$ky._$of._$jr;
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) pb = new _$F();
            if (_$8t) {
                pb._$0w(_$aQ, _$f8, _$nZ, this._$lf._$kM);
                var k;
                for (k = 0; k < _$f8; k++) {
                    _$aQ[k]._$jr = _$nZ._$jr;
                    _$aQ[k]._$j0 = _$nZ._$j0;
                    _$aQ[k]._$kB = this._$lf._$kM;
                }
            } else {
                if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) pb._$of = _$nZ;
            }
            pb._$8y = true;
            var _$pW = this._$lf._$ky._$oV;
            var _$p2 = new Array(1);
            _$nZ._$0A(this._$lf._$ky, pb, this._$lf._$j2, _$p2);
            var _$pu = _$p2[0];
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) _$nZ._$kA = pb;
            _$pW = pb._$oV;
            _$nZ._$73(_$pu, pb);
        } else {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W && _$nZ != null) _$nZ._$kA = null;
        }
        if (!this._$lf._$kM._$ii) {
            this._$lf._$kM.Add(this);
        }
        if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W && _$nZ != null) _$nZ._$j0 = this._$lf._$j1;
        if (!this._$lf._$kM._$ii && this._$lf._$iM) {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) this._$lf._$kM._$1g(this._$lf, this._$lJ); else this._$lf._$kM._$3G(pb, this._$lf, this._$lJ);
        }
        if (this._$lf._$ky == null) {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                if (_$nZ != null) {
                    _$nZ._$kB = this._$lf._$kM;
                    if (_$nZ != this) {
                        _$nZ._$lJ = this._$lJ;
                    }
                    this._$lf._$kM._$18(_$nZ, null);
                    _$nZ._$kA._$0w(_$aQ, _$f8, _$nZ, this._$lf._$kM);
                    var i;
                    for (i = 0; i < _$f8; i++) {
                        if (_$aQ[i] != this) {
                            _$aQ[i]._$j0 = _$nZ._$j0;
                            _$aQ[i]._$jr = _$nZ._$jr;
                            _$aQ[i]._$kB = this._$lf._$kM;
                            if (_$aQ[i]._patternMain._$jv != WidgetDockController._$0R) {
                                _$aQ[i]._$qz(-1);
                            }
                            if (_$aQ[i]._$kB != null && _$aQ[i]._$kB._$ii) _$aQ[i]._$be(_$aQ[i]._$j0); else _$aQ[i]._$be(WidgetDockFloatPanel._$1F);
                        }
                    }
                }
                if (this._$kA._$o5 != null) this._$kA._$o5._$5z();
            } else {
                this._$lf._$kM._$19(pb, this._$lf._$j1, this._$lf._$ka);
                var k;
                for (k = 0; k < _$f8; k++) {
                    if (_$aQ[k] != this) {
                        if (_$aQ[k]._$kB != null && _$aQ[k]._$kB._$ii) _$aQ[k]._$be(_$aQ[k]._$j0); else _$aQ[k]._$be(WidgetDockFloatPanel._$1F);
                    }
                }
            }
        } else {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                _$nZ._$kB = this._$lf._$kM;
                this._$lf._$kM._$18(_$nZ, null);
            } else {
                this._$lf._$kM._$19(pb, this._$lf._$j1, this._$lf._$ka);
            }
        }
        if (!this._$lf._$kM._$ii) {
            this._$lf._$kM._$7p();
        }
        if (_$nZ != null) {
            if (this._$lf._$kM != null && this._$lf._$kM._$ii) _$nZ._$be(this._$lf._$j1); else _$nZ._$be(WidgetDockFloatPanel._$1F);
            _$nZ._$qz(-1);
            if (this._$lf._$kM != null) {
            }
            _$nZ._$kB = this._$lf._$kM;
        }
        if (this._$lf._$iM && this._$kB._$ii) {
            this._$Y(this._$kB, this._$lf._$j1, this._$jr);
        }
    } else {
        this._$lt.x = this._$lx.left;
        this._$lt.y = this._$lx.top;
        if (!this._$kB._$ii && WidgetDockFloatPanel._$iY) {
            this._$1S();
        } else {
            var _$8F = this._$ir;
            var _$p0 = null;
            var _$en = 0;
            var _$gF;
            _$f8 = 0;
            if (this._$kA._$o5 != null && WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0X) _$p0 = this._$kA._$o5._$21();
            if (_$p0 == null || _$p0.length == 0) {
                _$p0 = new Array(1);
                _$p0[0] = this;
                _$gF = 1;
            }
            _$gF = _$p0.length;
            var _$aQ = new Array(_$gF);
            var _$oX = new Array(_$gF);
            _$9q = new Array(_$gF);
            var i;
            for (i = 0; i < _$gF; i++) {
                if (!_$p0[i]._$id) {
                    _$oX[_$en] = _$p0[i];
                    _$9q[_$en] = _$oX[_$en]._$fT();
                    _$en++;
                } else {
                    _$aQ[_$f8] = _$p0[i];
                    _$f8++;
                }
            }
            if (_$en == _$gF) {
                return;
            }
            var _$nY = this;
            for (i = 0; i < _$en; i++) {
                if (_$oX[i] == this) _$nY = null;
                _$oX[i]._$io = false;
                _$oX[i].setVisible(false);
                _$oX[i]._$io = true;
            }
            if (_$nY == null) {
                for (i = 0; i < _$f8; i++) {
                    if (_$aQ[i]._$fT()) {
                        _$nY = _$aQ[i];
                        break;
                    }
                }
            }
            _$nY._$kW = null;
            _$nY._$1R();
            if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) {
                if (_$aQ != null) {
                    _$nY._$kA._$o(_$aQ, _$f8, _$nY, _$nY._$kB);
                    for (i = 0; i < _$f8; i++) {
                        _$aQ[i]._$jr = _$nY._$jr;
                        _$aQ[i]._$j0 = _$nY._$j0;
                        _$aQ[i]._$kW = _$nY._$kB;
                        _$aQ[i]._$jE = 1;
                        if (_$aQ[i] != this && _$aQ[i]._patternMain._$jv != WidgetDockController._$0R) {
                            _$aQ[i]._$qz(-1);
                        }
                        if (_$aQ[i] != this) _$aQ[i]._$be(WidgetDockFloatPanel._$1F);
                    }
                }
            }
            for (i = 0; i < _$en; i++) {
                if (!_$9q[i]) _$oX[i].setVisible(true); else {
                    _$oX[i]._$io = false;
                    _$oX[i].setVisible(true);
                    _$oX[i]._$io = true;
                }
            }
            if (!_$8F) {
            }
        }
    }
};
WidgetDockFloatPanel.prototype._$qz = function (_$9d) {
    var kst = "";
    var _$f1 = -1;
    if (this._$jm >= WidgetDockFloatPanel._$0) {
        if (this._$kB != null && this._$kB._$ii && this._patternMain._$jv != WidgetDockController._$0R) {
            if ((this._$j0 == WidgetDockPatternBase._$3k) || (this._$j0 == WidgetDockPatternBase._$3l)) {
                this._$fc(this._$hy, WidgetDockFloatPanel._$6K);
                _$f1 = WidgetDockFloatPanel._$6K;
            } else {
                this._$fc(this._$hy, WidgetDockFloatPanel._$3Q);
                _$f1 = WidgetDockFloatPanel._$3Q;
            }
        } else {
            this._$fc(this._$hy, WidgetDockFloatPanel._$6K);
            _$f1 = WidgetDockFloatPanel._$6K;
        }
    } else {
        var _$8o = false;
        if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1 && this._$kA._$o5._$bi == this) _$8o = true;
        if (!_$8o) _$qC(this._$hy); else {
        }
        if (this._$jm == _$3Q) {
            this._$fc(this._$hy, WidgetDockFloatPanel._$3Q);
            _$f1 = WidgetDockFloatPanel._$3Q;
        } else if (this._$jm == WidgetDockFloatPanel._$5j) {
            this._$fc(this._$hy, WidgetDockFloatPanel._$5j);
            _$f1 = WidgetDockFloatPanel._$5j;
        } else if (this._$jm == WidgetDockFloatPanel._$6K) {
            this._$fc(this._$hy, WidgetDockFloatPanel._$6K);
            _$f1 = WidgetDockFloatPanel._$6K;
        } else {
            if (!_$8o) {
                this._$fc(this._$hy, WidgetDockFloatPanel._$q);
                _$f1 = WidgetDockFloatPanel._$q;
            } else {
            }
        }
    }
    if (_$f1 != this._$jz) {
        this._$jz = _$f1;
        this._$qK();
    }
    this._$sL();
};
WidgetDockFloatPanel.prototype._$bA = function (_$dq, _$cM, _$rL, _$8K) {
    if (_$dq < 40) _$dq = 40;
    if (_$cM < 40) _$cM = 40;
    _$rL.cx = _$dq;
    _$rL.cy = _$cM;
};
WidgetDockFloatPanel.prototype._$6c = function (_$99) {
    if ((_$99 <= 3) && (_$99 != 0xff)) {
        if (((this._$kc >> _$99) & 0x01) == 1) {
            return _$99;
        }
    }
    var i;
    for (i = 0; i < 4; i++) {
        if (((this._$kc >> i) & 0x01) == 1) {
            _$99 = i;
            return _$99;
        }
    }
    return 0xff;
};
WidgetDockFloatPanel.prototype._$5 = function (_$n2) {
    if (this._$jm != WidgetDockFloatPanel._$q) {
        this._$fc(_$n2, WidgetDockFloatPanel._$q);
    } else {
        this._$hy._$a(_$n2);
    }
    this._$hz = _$n2;
    if (_$n2 != null) {
        WidgetDockElementController._$6i(_$n2._$h8, this._$hy._$h8.style.zIndex);
    }
    this._$qK();
};
WidgetDockFloatPanel.prototype._$5O = function (_$n2) {
    this._$hz = null;
    this._$qK();
};
WidgetDockFloatPanel.prototype._$1k = function (mainPattern, _$99) {
    if (mainPattern != null && mainPattern._$ii && (_$99 > 3)) return false;
    if (mainPattern != null && (_$99 <= 3) && (_$99 != 0xff)) {
        if (mainPattern._$ii && (((this._$kc >> _$99) & 0x01) == 1)) return true; else if (!mainPattern._$ii && this._$id) return true;
        return false;
    } else if (_$99 > 3) {
        if (this._$id) return false;
    }
    return true;
};
WidgetDockFloatPanel.prototype._$aA = function (_$az) {
    if ((_$az <= 3) && (((this._$kc >> _$az) & 0x01) == 1)) return true;
    return false;
};
WidgetDockFloatPanel.prototype._$bL = function () {
    if (_$kB != null && _$kB._$ii) return _$j0;
    return _$1F;
};
WidgetDockFloatPanel.prototype._$fN = function () {
    if (this._$kB != null && this._$kB._$ii) return false;
    return true;
};
WidgetDockFloatPanel.prototype._$3A = function () {
    if (this._$jw == WidgetDockFloatPanel._$4W) {
        if (WidgetDockFloatPanel._$hT != null) return;
        if (WidgetDockFloatPanel._$hT == null) WidgetDockFloatPanel._$hT = new _$6C(1, this);
        if (WidgetDockFloatPanel._$hP == null) WidgetDockFloatPanel._$hP = new _$6C(0, this);
        if (WidgetDockFloatPanel._$hQ == null) WidgetDockFloatPanel._$hQ = new _$6C(2, this);
        if (WidgetDockFloatPanel._$hM == null) WidgetDockFloatPanel._$hM = new _$6C(3, this);
        return;
    }
    if (this._$lY == null) {
        var _$bo = null;
        if (this._$lY == null) this._$lY = new _$6D(_$bo, 1);
        if (this._$lU == null) this._$lU = new _$6D(_$bo, 0);
        if (this._$lV == null) this._$lV = new _$6D(_$bo, 2);
        if (this._$lR == null) this._$lR = new _$6D(_$bo, 3);
        this._$m6(this._$lx.left, this._$lx.top, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
        this._$lY.setVisible(true);
        this._$lR.setVisible(true);
        this._$lU.setVisible(true);
        this._$lV.setVisible(true);
    }
};
WidgetDockFloatPanel.prototype._$3B = function () {
    this._$lf._$ij = false;
    if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0X) return;
    this._$3A();
};
WidgetDockFloatPanel.prototype._$m6 = function (_$cS, _$do, _$dq, _$cM) {
    this._$lY._$r8(_$cS + _$1H, _$do, _$dq - (2 * _$1H), _$1H);
    if (!_$lf._$ij) {
        _$lU._$r8(_$cS, _$do, _$1H, _$cM);
        _$lV._$r8(_$cS + _$dq - _$1H, _$do, _$1H, _$cM);
        _$lR._$r8(_$cS + _$1H, _$do + _$cM - _$1H, _$dq - (2 * _$1H), _$1H);
        _$lY._$qJ();
        _$lU._$qJ();
        _$lV._$qJ();
        _$lR._$qJ();
        if (_$lW != null) {
            _$lW._$au();
            _$lW = null;
        }
        if (_$lX != null) {
            _$lX._$au();
            _$lX = null;
        }
        if (_$lS != null) {
            _$lS._$au();
            _$lS = null;
        }
        if (_$lT != null) {
            _$lT._$au();
            _$lT = null;
        }
    } else {
        if (_$lS == null) {
            _$lS = new _$6D(_$bo, 3);
            _$lT = new _$6D(_$bo, 3);
            _$lW = new _$6D(_$bo, 4);
            _$lX = new _$6D(_$bo, 5);
            _$lS._$ri(true);
            _$lT._$ri(true);
            _$lW._$ri(true);
            _$lX._$ri(true);
            _$lW.setVisible(true);
            _$lX.setVisible(true);
            _$lS.setVisible(true);
            _$lT.setVisible(true);
        }
        var _$gq = _$G._$6J - _$1H;
        var _$gr = 10;
        var _$gt = 40;
        if (_$dq < 50) {
            _$gr = _$dq / 6;
            _$gt = (4 * _$dq) / 6;
        }
        if (_$cM < (_$G._$6J - _$1H)) {
            _$gq = 0;
        }
        _$cM -= 3;
        _$lU._$r8(_$cS, _$do, _$1H, _$cM - _$gq);
        _$lV._$r8(_$cS + _$dq - _$1H, _$do, _$1H, _$cM - _$gq);
        _$lS._$r8(_$cS + _$1H, _$do + _$cM - _$gq - _$1H, _$gr, _$1H);
        _$lW._$r8(_$cS + _$gr + _$1H, _$do + _$cM - _$gq - _$1H, _$1H, _$gq + _$1H - 1);
        _$lX._$r8(_$cS + _$gr + _$gt - _$1H, _$do + _$cM - _$gq - _$1H, _$1H, _$gq + _$1H - 1);
        _$lT._$r8(_$cS + _$gr + _$gt, _$do + _$cM - _$gq - _$1H, _$dq - _$gr - _$gt - 1, _$1H);
        _$lR._$r8(_$cS + _$1H + _$gr, _$do + _$cM - _$1H, _$gt - _$1H, _$1H);
    }
};
WidgetDockFloatPanel.prototype._$5D = function (p) {
    WidgetDockElementController._$5I(WidgetDockController._elementRootId, p._$h8);
};
WidgetDockFloatPanel.prototype._$m5 = function (_$cS, _$do, _$dq, _$cM) {
    WidgetDockFloatPanel._$hT._$r8(_$cS + WidgetDockFloatPanel._$1H, _$do, _$dq - (2 * WidgetDockFloatPanel._$1H), WidgetDockFloatPanel._$1H);
    if (!this._$lf._$ij) {
        WidgetDockFloatPanel._$hP._$r8(_$cS, _$do, WidgetDockFloatPanel._$1H, _$cM);
        WidgetDockFloatPanel._$hQ._$r8(_$cS + _$dq - WidgetDockFloatPanel._$1H, _$do, WidgetDockFloatPanel._$1H, _$cM);
        WidgetDockFloatPanel._$hM._$r8(_$cS + WidgetDockFloatPanel._$1H, _$do + _$cM - WidgetDockFloatPanel._$1H, _$dq - (2 * WidgetDockFloatPanel._$1H), WidgetDockFloatPanel._$1H);
        WidgetDockFloatPanel._$hT._$qJ();
        WidgetDockFloatPanel._$hP._$qJ();
        WidgetDockFloatPanel._$hQ._$qJ();
        WidgetDockFloatPanel._$hM._$qJ();
        var _$eq;
        if (WidgetDockFloatPanel._$hR != null) {
            this._$5D(WidgetDockFloatPanel._$hR);
            WidgetDockFloatPanel._$hR = null;
        }
        if (WidgetDockFloatPanel._$hS != null) {
            this._$5D(WidgetDockFloatPanel._$hS);
            WidgetDockFloatPanel._$hS = null;
        }
        if (WidgetDockFloatPanel._$hN != null) {
            this._$5D(WidgetDockFloatPanel._$hN);
            WidgetDockFloatPanel._$hN = null;
        }
        if (WidgetDockFloatPanel._$hO != null) {
            this._$5D(WidgetDockFloatPanel._$hO);
            WidgetDockFloatPanel._$hO = null;
        }
    } else {
        if (WidgetDockFloatPanel._$hN == null) {
            WidgetDockFloatPanel._$hN = new _$6C(3, this);
            WidgetDockFloatPanel._$hO = new _$6C(3, this);
            WidgetDockFloatPanel._$hR = new _$6C(4, this);
            WidgetDockFloatPanel._$hS = new _$6C(5, this);
            WidgetDockFloatPanel._$hN._$ri(true);
            WidgetDockFloatPanel._$hO._$ri(true);
            WidgetDockFloatPanel._$hR._$ri(true);
            WidgetDockFloatPanel._$hS._$ri(true);
            WidgetDockFloatPanel._$hN._$qJ();
            WidgetDockFloatPanel._$hO._$qJ();
            WidgetDockFloatPanel._$hR._$qJ();
            WidgetDockFloatPanel._$hS._$qJ();
        }
        var _$gq = _$G._$6J - WidgetDockFloatPanel._$1H;
        var _$gr = 10;
        var _$gt = 40;
        if (_$dq < 50) {
            _$gr = _$dq / 6;
            _$gt = (4 * _$dq) / 6;
        }
        if (_$cM < (_$G._$6J - WidgetDockFloatPanel._$1H)) {
            _$gq = 0;
        }
        _$cM -= 3;
        WidgetDockFloatPanel._$hP._$r8(_$cS, _$do, WidgetDockFloatPanel._$1H, _$cM - _$gq);
        WidgetDockFloatPanel._$hQ._$r8(_$cS + _$dq - WidgetDockFloatPanel._$1H, _$do, WidgetDockFloatPanel._$1H, _$cM - _$gq);
        WidgetDockFloatPanel._$hN._$r8(_$cS + WidgetDockFloatPanel._$1H, _$do + _$cM - _$gq - WidgetDockFloatPanel._$1H, _$gr, WidgetDockFloatPanel._$1H);
        WidgetDockFloatPanel._$hR._$r8(_$cS + _$gr + WidgetDockFloatPanel._$1H, _$do + _$cM - _$gq - WidgetDockFloatPanel._$1H, WidgetDockFloatPanel._$1H, _$gq + WidgetDockFloatPanel._$1H - 1);
        WidgetDockFloatPanel._$hS._$r8(_$cS + _$gr + _$gt - WidgetDockFloatPanel._$1H, _$do + _$cM - _$gq - WidgetDockFloatPanel._$1H, WidgetDockFloatPanel._$1H, _$gq + WidgetDockFloatPanel._$1H - 1);
        WidgetDockFloatPanel._$hO._$r8(_$cS + _$gr + _$gt, _$do + _$cM - _$gq - WidgetDockFloatPanel._$1H, _$dq - _$gr - _$gt - 1, WidgetDockFloatPanel._$1H);
        WidgetDockFloatPanel._$hM._$r8(_$cS + WidgetDockFloatPanel._$1H + _$gr, _$do + _$cM - WidgetDockFloatPanel._$1H, _$gt - WidgetDockFloatPanel._$1H, WidgetDockFloatPanel._$1H);
    }
};
WidgetDockFloatPanel.prototype._$T = function () {
    this._$1p(true);
    if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0W) {
        this._$lK.cx = WidgetDockFloatPanel._$k2;
        this._$lK.cy = WidgetDockFloatPanel._$k3;
    }
    if (this._$jf != null) {
        this._$jf = null;
    }
    if (WidgetDockFloatPanel._$hT != null) this._$5D(WidgetDockFloatPanel._$hT);
    if (WidgetDockFloatPanel._$hM != null) this._$5D(WidgetDockFloatPanel._$hM);
    if (WidgetDockFloatPanel._$hP != null) this._$5D(WidgetDockFloatPanel._$hP);
    if (WidgetDockFloatPanel._$hQ != null) this._$5D(WidgetDockFloatPanel._$hQ);
    if (WidgetDockFloatPanel._$hR != null) this._$5D(WidgetDockFloatPanel._$hR);
    if (WidgetDockFloatPanel._$hS != null) this._$5D(WidgetDockFloatPanel._$hS);
    if (WidgetDockFloatPanel._$hN != null) this._$5D(WidgetDockFloatPanel._$hN);
    if (WidgetDockFloatPanel._$hO != null) this._$5D(WidgetDockFloatPanel._$hO);
    if (this._$jw == WidgetDockFloatPanel._$4W) {
    }
    WidgetDockFloatPanel._$lY = null;
    WidgetDockFloatPanel._$lR = null;
    WidgetDockFloatPanel._$lU = null;
    WidgetDockFloatPanel._$lV = null;
    WidgetDockFloatPanel._$lW = null;
    WidgetDockFloatPanel._$lX = null;
    WidgetDockFloatPanel._$lS = null;
    WidgetDockFloatPanel._$lT = null;
    WidgetDockFloatPanel._$hT = null;
    WidgetDockFloatPanel._$hM = null;
    WidgetDockFloatPanel._$hP = null;
    WidgetDockFloatPanel._$hQ = null;
    WidgetDockFloatPanel._$hR = null;
    WidgetDockFloatPanel._$hS = null;
    WidgetDockFloatPanel._$hN = null;
    WidgetDockFloatPanel._$hO = null;
};
WidgetDockFloatPanel.prototype._$1p = function (_$86) {
};
WidgetDockFloatPanel.prototype.initLayout = function (left, top, width, height, type) {
    this.setSize(width, height);
    this.setLocation(left, top);
    if (this._$iN) {
        this._$hy._$h8.style.visibility = "visible";
    }
    if (this._$jw == WidgetDockFloatPanel._$4B) return;
    if (this._isInitLayout) return;
    var panelNum = WidgetDockFloatPanel._floatPanelController.getPanelNum();
    var isFind = false;
    var i;
    for (i = 0; i < panelNum; i++) {
        if (WidgetDockFloatPanel._floatPanelController._panelList[i] == this) {
            isFind = true;
            break;
        }
    }
    if (!isFind) {
        WidgetDockFloatPanel._floatPanelController.addFloatPanel(this);
    }
    var title = this.getTitle();
    this._$5U(type, title);
    this._isInitLayout = true;
    this._$sL();
    panelNum = WidgetDockFloatPanel._floatPanelController.getPanelNum();
    for (i = 0; i < panelNum; i++) {
        var panel = WidgetDockFloatPanel._floatPanelController._panelList[i];
        if ((!panel._isInitLayout) && panel.getTitle() == title) {
            WidgetDockFloatPanel._floatPanelController.deletePanel(i);
            break;
        }
    }
};
WidgetDockFloatPanel.prototype._$ay = function () {
    if (!this._isInitLayout) return false;
    if (!this._$fT()) return false;
    if (!this._$S()) {
        if (this._$ir) {
            this._$6F();
        }
    } else {
        if (this._$k0 == WidgetDockFloatPanel._$6W) {
            this._$0h();
        }
        if (this._$kB != null && !this._$kB._$ii) {
            this._$6F();
        }
    }
    return true;
};
WidgetDockFloatPanel.prototype._$bh = function () {
    if (!this._isInitLayout) return false;
    if (!this._$fT()) return false;
    var kst = "";
    if (!this._$S()) {
        if (!this._$ir && this._$id) this._$1R();
    } else {
        if (this._$k0 == WidgetDockFloatPanel._$6W) {
            this._$0h();
        }
        if (this._$kB != null && this._$kB._$ii) this._$6F();
    }
    return true;
};
WidgetDockFloatPanel.prototype._$16 = function (_$aO) {
    if (!this._$fT()) {
        _$ir = false;
        _$lf._$iM = true;
        if (_$aO < 0 || _$aO > 3) {
            _$kB = null;
            _$l7 = null;
            _$l6 = null;
            _$k4 = 0x00;
            _$j3 = 0;
            this._$iP = false;
        } else {
            _$kB = _$kH;
            this._$iP = false;
            _$j0 = _$aO;
            if (((_$kc >> _$j0) & 0x01) == 0) {
                var i;
                for (i = 0; i < 4; i++) {
                    if (((_$kc >> i) & 0x01) != 0) break;
                }
                if (i != 4) _$j0 = i;
            }
        }
        _$f5();
        return 0;
    }
    if (_$aO < 0 || _$aO > 3) {
        if (!_$iF) {
            _$f5();
            _$ir = false;
            _$39(true);
        } else {
            if (_$ir) return 0;
        }
        _$1Q();
        _$5v();
        return 0;
    }
    _$j0 = _$aO;
    _$lf._$j1 = _$aO;
    _$f5();
    _$18();
    _$qz(-1);
    return 0;
};
WidgetDockFloatPanel.prototype._$1i = function () {
    _$16(_$lf._$j1);
};
WidgetDockFloatPanel.prototype._$f5 = function () {
    var rc = new Rect();
    var d = this._$c8();
    this._$lJ.cx = d.width;
    this._$lJ.cy = d.height;
    if (this._$lK.cx < 0 || this._$lK.cy < 0) {
        this._$lK.cx = 200;
        this._$lK.cy = 150;
    }
};
WidgetDockFloatPanel.prototype._$Q = function () {
    return false;
};
WidgetDockFloatPanel.prototype._$1Q = function () {
    if (this._$lJ.cx <= 0 || this._$lJ.cy <= 0) {
        this._$lJ.cx = this._$cg();
        this._$lJ.cy = this._$bU();
    }
    if (this._$kB != null && !this._$kB._$ii) {
        return 0;
    }
    if (_$kB == null) _$jE = 1;
    _$1R();
    if (_$l7 == null) {
        _$jE = 0;
    }
    return 0;
};
WidgetDockFloatPanel.prototype._$qG = function () {
    this._$kB._$5E(this);
};
WidgetDockFloatPanel.prototype._$0C = function () {
    var _$9u;
    if (this._$kj <= WidgetDockFloatPanel._$q) _$9u = this._$kj; else _$9u = this._$j0;
    this._patternMain._$8(_$9u, this, true);
    this._patternMain._$5A(0);
    this._$k0 = WidgetDockFloatPanel._$6W;
    var _$ps = null;
    var _$e1 = this._$kB._patternPositionList[_$9u]._patternSub.getPanelNum();
    if (_$e1 > 0 && this._$jr >= 0 && this._$jr < _$e1) {
        _$ps = this._$kB._patternPositionList[_$9u]._patternSub._panelList[this._$jr];
    }
    var ih, iw;
    if (_$ps != null) {
        iw = _$ps.rect.right - _$ps.rect.left;
        ih = _$ps.rect.bottom - _$ps.rect.top;
        if (this._$kj <= WidgetDockFloatPanel._$q) {
            if (this._$1j(_$j0) && !this._$1j(_$9u)) {
                iw = 200;
            } else if (!this._$1j(_$j0) && this._$1j(_$9u)) {
                ih = 200;
            }
        }
    } else {
        iw = ih = 200;
    }
};
WidgetDockFloatPanel.prototype._$bC = function () {
    var rc = new LocationSize();
    rc.x = this._left;
    rc.y = this._top;
    rc.width = this._width;
    rc.height = this._height;
    return rc;
};
WidgetDockFloatPanel.prototype._$cg = function () {
    return this._width;
};
WidgetDockFloatPanel.prototype._$bU = function () {
    return this._height;
};
WidgetDockFloatPanel.prototype._$c8 = function () {
    var d = new Size();
    d.width = this._width;
    d.height = this._height;
    return d;
};
WidgetDockFloatPanel.prototype._$25 = function (rc) {
    rc.left = this._left;
    rc.top = this._top;
    rc.right = this._width + this._left;
    rc.bottom = this._height + this._top;
};
WidgetDockFloatPanel.prototype.setSize = function (width, height) {
    this._width = width;
    this._height = height;
};
WidgetDockFloatPanel.prototype.setLocation = function (left, top) {
    this._left = left;
    this._top = top;
};
WidgetDockFloatPanel.prototype._$5U = function (type, title) {
    var _$fU = new Array(2);
    var _$g1 = new Array(2);
    var _$7B = new Array(2);
    var _$7C = new Array(2);
    var _$pI = new Location();
    var _$eg = new Array(2);
    _$eg[0] = 0;
    _$eg[1] = 0;
    var _$q9 = this._$bC();
    var _$g0 = 0;
    var _$8M = false;
    var _$oW = new Array(1);
    var _$9K = this._patternMain._$1P(this, _$g0, title, _$7C, _$fU, _$g1, _$7B, _$oW);
    if (_$oW[0] != null) {
        _$pI.x = _$oW[0]._$pA.x;
        _$pI.y = _$oW[0]._$pA.y;
        _$eg[0] = _$oW[0]._$rM;
        _$eg[1] = _$oW[0]._$rN;
        if (_$eg[0] <= 0) {
            this._$lt.x = 200;
            this._$lK.cx = 200;
        } else {
            this._$lt.x = _$pI.x;
            this._$lK.cx = _$eg[0];
            _$q9.x = this._$lt.x;
            _$q9.width = _$eg[0];
        }
        if (_$eg[1] <= 0) {
            this._$lt.y = 200;
            this._$lK.cy = 200;
        } else {
            this._$lt.y = _$pI.y;
            this._$lK.cy = _$eg[1];
            _$q9.y = this._$lt.y;
            _$q9.height = _$eg[1];
        }
        if ((_$oW[0]._$aP & WidgetDockFloatPanel._$2T) != 0) this._$iv = true; else this._$iv = false;
        if ((_$oW[0]._$aP & WidgetDockFloatPanel._$2U) == 0) this._$k0 = WidgetDockFloatPanel._$4C;
        this._$kj = ((WidgetDockFloatPanel._$6X & _$oW[0]._$aP) >> 7);
        if (this._$kj < 0) this._$kj = 0;
        if (this._$kj > WidgetDockFloatPanel._$0) this._$kj = WidgetDockFloatPanel._$0;
        this._$kc = (WidgetDockFloatPanel._$4X & _$oW[0]._$aP) >> 12;
        if ((_$oW[0]._$aP & WidgetDockFloatPanel._$B) != 0) this._$id = true; else this._$id = false;
        this._$jm = (WidgetDockFloatPanel._$C & _$oW[0]._$aP) >> 17;
    }
    var _$pR = null;
    if (_$7B[0] == null && _$7B[1] == null) {
        _$8M = true;
        _$9K = 1;
        if (this._$l9 != null && this._$l9._windowParent == this._windowParent) {
            if (!this._$l9._$fT()) _$9K = 0;
            var _$9J = true;
            _$7C[0] = this._$l9._$kB;
            if (_$7C[0] != null) {
                if (_$7C[0]._$ii) {
                    _$9J = this._$1k(_$7C[0], this._$l9._$j0);
                } else _$9J = this._$id;
            }
            if (_$9J) {
                _$fU[0] = this._$l9._$j0;
                _$g1[0] = this._$l9._$jr;
                if (type <= 3) {
                    _$7B[0] = new _$F();
                    _$7B[0]._$8y = true;
                    _$p2 = new Array(1);
                    this._$0A(this._$l9._$kA, _$7B[0], type, _$p2);
                    this._$lJ.cx = this._$cg();
                    this._$lJ.cy = this._$bU();
                    this._$73(_$p2[0], _$7B[0]);
                } else {
                    this._$l9._$kA.Add(this);
                    _$7B[0] = this._$l9._$kA;
                }
            }
        }
    }
    if (_$7B[0] == null && _$7B[1] == null) {
        _$9K = 1;
        if (!this._$fT()) {
            _$9K = 0;
            this.setElementVisible(true);
        }
        this._$lf._$j1 = type;
        if (this._$jw == WidgetDockFloatPanel._$4W) {
            _$pR = _$J._$0x(_$q9);
            _$pR = _$K._$0y(_$q9);
        } else _$pR = _$K._$0y(_$q9);
        if (type >= 0 && type <= 3) {
            _$7C[0] = this._patternMain;
            _$7C[1] = _$pR;
            _$fU[0] = type;
            _$g1[0] = this._$jr;
        } else {
            _$7C[0] = _$pR;
            _$7C[1] = this._patternMain;
            _$fU[1] = 0;
            _$g1[1] = this._$jr;
        }
        if (!_$7C[0]._$ii) {
            _$fU[0] = 0;
            _$g1[0] = 0xffffffff;
            _$7B[0] = null;
        } else {
            _$fU[1] = 0;
            _$g1[1] = 0xffffffff;
            _$7B[1] = null;
        }
    } else if (_$7B[0] == null || _$7B[1] == null) {
        var _$e5;
        if (_$7B[0] == null) _$e5 = 1; else _$e5 = 0;
        if (_$7C[_$e5]._$ii) {
            if (this._$jw == WidgetDockFloatPanel._$4W) {
                _$7C[_$e5 ^ 0x01] = _$J._$0x(_$q9);
            } else _$7C[_$e5 ^ 0x01] = _$K._$0y(_$q9);
            _$fU[_$e5 ^ 0x01] = 0;
            _$g1[_$e5 ^ 0x01] = 0xffffffff;
            _$7B[_$e5 ^ 0x01] = null;
        } else {
            _$7C[_$e5 ^ 0x01] = this._patternMain;
            _$g1[_$e5 ^ 0x01] = 0xffffffff;
            if (type > 3) _$fU[_$e5 ^ 0x01] = 0; else _$fU[_$e5 ^ 0x01] = this._$cD;
        }
    }
    if (_$7C[0] != null) {
        if (_$7C[0]._$ii) {
            if (!this._$1k(_$7C[0], _$fU[0])) {
                var bys = 0xff;
                bys = this._$6c(bys);
                if (bys != 0xff || (!this._$id)) {
                    if (bys != 0xff) type = bys; else type = _$fU[0];
                    if (type != _$fU[0]) {
                        this._$jr = _$g1[0];
                        this._$j0 = _$fU[0];
                        this._$kA = _$7B[0];
                        _$7C[0]._$53(this);
                        if (type >= WidgetDockFloatPanel._$1F) type = WidgetDockFloatPanel._$0J;
                        _$g1[0] = -1;
                        _$fU[0] = type;
                        _$7B[0] = null;
                    }
                } else {
                    this._$kA = _$7B[0];
                    this._$jr = _$g1[0];
                    this._$kB = _$7C[0];
                    this._$j0 = _$fU[0];
                    _$7B[0] = _$7B[1];
                    _$g1[0] = _$g1[1];
                    _$7C[0] = _$7C[1];
                    _$fU[0] = _$fU[1];
                    _$7B[1] = this._$kA;
                    _$g1[1] = this._$jr;
                    _$fU[1] = this._$j0;
                    _$7C[1] = this._$kB;
                }
            }
        } else {
            if (!this._$id) {
                this._$kA = _$7B[0];
                this._$jr = _$g1[0];
                this._$kB = _$7C[0];
                this._$j0 = _$fU[0];
                _$7B[0] = _$7B[1];
                _$g1[0] = _$g1[1];
                _$7C[0] = _$7C[1];
                _$fU[0] = _$fU[1];
                _$7B[1] = this._$kA;
                _$g1[1] = this._$jr;
                _$fU[1] = this._$j0;
                _$7C[1] = this._$kB;
                if (!this._$1k(_$7C[0], _$fU[0])) {
                    var bys = 0xff;
                    bys = this._$6c(bys);
                    if (bys != 0xff) type = bys; else type = _$fU[0];
                    if (type != _$fU[0]) {
                        this._$jr = _$g1[0];
                        this._$j0 = _$fU[0];
                        this._$kA = _$7B[0];
                        _$7C[0]._$53(this);
                        _$g1[0] = -1;
                        _$fU[0] = type;
                        _$7B[0] = null;
                    }
                }
            } else {
                if (_$fU[1] < WidgetDockFloatPanel._$1F) {
                    if (!this._$1k(this._patternMain, _$fU[1])) {
                        var bys = 0xff;
                        bys = this._$6c(bys);
                        if ((bys != 0xff) && bys != _$fU[1]) {
                            this._$jr = _$g1[1];
                            this._$j0 = _$fU[1];
                            this._$kA = _$7B[1];
                            _$7C[1]._$53(this);
                            _$g1[1] = -1;
                            _$7B[1] = null;
                            _$fU[1] = bys;
                        }
                    }
                }
            }
        }
    }
    this._$jr = _$g1[0];
    this._$j0 = _$fU[0];
    var _$8J = false;
    if (_$7B[0] != null && _$7B[0]._$of != null) _$8J = true;
    if (_$7B[0] != null && !_$8J) _$7B[0]._$of = this;
    this._$kA = _$7B[0];
    this._$l6 = _$7B[1];
    this._$kB = _$7C[0];
    this._$l7 = _$7C[1];
    this._$k4 = _$g1[1];
    this._$j3 = _$fU[1];
    if (_$7B[0] != null) {
        var _$gK = _$eg[0];
        var _$el = _$eg[1];
        if (_$gK <= 0) {
            this._$lt.x = 200;
            this._$lK.cx = 200;
        } else {
            this._$lt.x = _$pI.x;
            this._$lK.cx = _$gK;
        }
        if (_$el <= 0) {
            this._$lt.y = 200;
            this._$lK.cy = 200;
        } else {
            this._$lt.y = _$pI.y;
            this._$lK.cy = _$el;
        }
    } else {
        this._$f5();
    }
    if (_$8M) {
        if (this._$k0 == WidgetDockFloatPanel._$6W) {
            _$9K = 0;
        }
        if (!this._$fT()) {
            _$9K = 0;
            _$8M = false;
        }
    }
    if (!_$8M && this._$k0 == WidgetDockFloatPanel._$6W) this._$k0 = WidgetDockFloatPanel._$4Z;
    this._$lf._$j1 = _$fU[0];
    this._$qz(-1);
    if (_$9K > 0) {
        this._$18();
        this._$qJ();
    } else if (_$8M) {
        if (this._$kA == null) {
            this._$k0 = WidgetDockFloatPanel._$4Z;
            this._$kB._$6O(this);
            this._$kA._$8y = true;
            this._patternMain._$d(this);
            this.setElementVisible(false);
            this._$k0 = WidgetDockFloatPanel._$6W;
        }
        this._$0C();
        this._$ir = false;
    } else {
        if (this._$kA != null && this._$kA._$l1 != null && this._$kA._$l1.length >= 1) {
            var _$nH = this._$kA._$of;
            var _$8G = false;
            var i;
            for (i = 0; i < this._$kA._$l1.length; i++) {
                var _$ol = this._$kA._$l1[i];
                if (_$ol._$mO == this && ((_$ol._$aP & WidgetDockFloatPanel._$1B) > 0)) {
                    _$8G = true;
                }
            }
            if (_$8G) {
                this._$lf._$j1 = _$fU[0];
                this._$18();
                _$9K = 1;
                if (_$nH != this && this._$kA._$o5 != null) {
                    this._$kA._$o5._$6b(_$nH);
                }
                this._$qJ();
            } else {
                _$8G = false;
                var i;
                for (i = 0; i < this._$kA._$l1.length; i++) {
                    var _$o9 = this._$kA._$l1[i];
                    if (_$o9._$mO == this && (_$o9._$aP & WidgetDockFloatPanel._$1C) != 0) {
                        _$8G = true;
                        break;
                    }
                }
                if (_$8G) {
                    this._$0C();
                }
                this._$ir = !this._$kB._$ii;
                this.setElementVisible(false);
                this._$iP = false;
            }
        } else {
            if (this._$kA == null && this._$kB != null) {
                this._$kB._$6O(this);
                if (this._$kA != null) this._$kA._$8y = true;
            }
            this._$ir = !this._$kB._$ii;
            this.setElementVisible(false);
            this._$iP = false;
        }
    }
    this._$Y(this._$l7, this._$j3, this._$k4);
    this._$Y(this._$kB, this._$j0, this._$jr);
};
WidgetDockFloatPanel.prototype._$1S = function () {
    var ps = new Location();
    ps.x = this._$lx.left;
    ps.y = this._$lx.top;
    if (this._$jw == WidgetDockFloatPanel._$4W) {
    }
    this._$kB._$6p(ps.x, ps.y, WidgetDockPatternBase._$2A(this._$lx), WidgetDockPatternBase._$2z(this._$lx));
};
WidgetDockFloatPanel.prototype._$3a = function () {
    if (WidgetDockFloatPanel._$iA) return;
    WidgetDockFloatPanel._$iA = true;
};
WidgetDockFloatPanel.prototype._$0A = function (_$n3, _$ne, type, _$oT) {
    var _$pW = _$n3._$oV;
    var _$pu = null;
    var pb = _$ne;
    pb._$9j = type;
    if ((_$pW != null) && ((_$pW._$od == null && _$pW._$pr != null) || (_$pW._$od != null && _$pW._$pr == null))) {
        _$pW._$9y = pb._$9j;
        if (_$pW._$od == null) {
            _$pu = _$pW._$pr;
            _$pW._$od = pb;
        } else {
            _$pW._$pr = pb;
            _$pu = _$pW._$od;
        }
        pb._$oV = _$pW;
    } else {
        var pf = new _$F();
        pf._$of = _$n3._$of;
        pf._$8y = _$n3._$8y;
        pf._$l1 = _$n3._$l1;
        pf._$o5 = _$n3._$o5;
        if (pf._$o5 != null) pf._$o5._$kE = pf;
        pf._$6Z(_$n3);
        if (pf._$of != null) {
            pf._$of._$kA = pf;
        }
        _$n3._$of = null;
        _$n3._$od = pf;
        _$n3._$pr = pb;
        pf._$oV = _$n3;
        pb._$oV = _$n3;
        _$n3._$9y = pb._$9j;
        _$n3._$l1 = null;
        _$pu = _$n3._$od;
    }
    if (type == WidgetDockPatternBase._$3m) _$pu._$9j = WidgetDockPatternBase._$3j; else if (type == WidgetDockPatternBase._$3j) _$pu._$9j = WidgetDockPatternBase._$3m; else if (type == WidgetDockPatternBase._$3k) _$pu._$9j = WidgetDockPatternBase._$3l; else _$pu._$9j = WidgetDockPatternBase._$3k;
    if (_$oT != null) _$oT[0] = _$pu;
};
WidgetDockFloatPanel.prototype._$Y = function (mainPattern, _$cD, _$dg) {
    if (mainPattern != null && mainPattern._$ii && _$dg >= 0 && _$dg != 0xffffffff) {
        var _$ps = mainPattern._patternPositionList[_$cD]._patternSub._panelList[_$dg];
        var _$eG, _$fC;
        var _$fq, _$fr;
        _$fq = -1;
        _$fr = -1;
        var _$9n, _$9v;
        if ((_$cD == WidgetDockPatternBase._$3k) || _$cD == WidgetDockPatternBase._$3l) {
            _$9n = WidgetDockPatternBase._$3m;
            _$9v = WidgetDockPatternBase._$3j;
        } else {
            _$9n = WidgetDockPatternBase._$3k;
            _$9v = WidgetDockPatternBase._$3l;
        }
        if (_$ps._$kR == null) _$eG = -1; else _$eG = mainPattern._$2F(_$9n, _$ps._$kR);
        if (_$ps._$l8 == null) _$fC = -1; else _$fC = mainPattern._$2F(_$9v, _$ps._$l8);
        if (this._patternMain._$lk[_$9n] != null) _$fq = mainPattern._$2F(_$9n, this._patternMain._$lk[_$9n]);
        if (this._patternMain._$lk[_$9v] != null) _$fr = mainPattern._$2F(_$9v, this._patternMain._$lk[_$9v]);
        if (_$fq >= 0 && _$eG < _$fq) {
            mainPattern._$j(_$9n);
        }
        if (_$fr >= 0 && _$fC < _$fr) {
            mainPattern._$j(_$9v);
        }
        if (this._patternMain._$lk[_$cD] != null) {
        }
    }
};
WidgetDockFloatPanel.prototype._$3x = function () {
    if (_$kA != null && _$kA._$o5 != null) {
        if (_$kA._$o5._$3x(this)) {
            return true;
        }
    }
    return false;
};
WidgetDockFloatPanel.prototype._$bR = function () {
    if (!_$fN()) return null;
    return _$kB._$bP();
};
WidgetDockFloatPanel.prototype._$fT = function () {
    if (this._$hy == null) return true;
    if (this._$hy._$h8.style.visibility == "visible") return true;
    return false;
};
WidgetDockFloatPanel.prototype._$sL = function () {
};
WidgetDockFloatPanel.prototype._$6i = function (_$cR) {
    if (this._$hy != null) {
        WidgetDockElementController._$6i(this._$hy._$h8, _$cR);
    }
    if (this._element != null) {
        WidgetDockElementController._$6i(this._element, _$cR);
    }
    if (this._$hz != null) {
        WidgetDockElementController._$6i(this._$hz._$h8, _$cR);
    }
};
WidgetDockFloatPanel.prototype._$qK = function () {
    if (this._$hy == null) return;
    var left, top, width, height;
    var _$tj = this._$hy._$c6();
    if (this._$jz == WidgetDockFloatPanel._$6K) {
        left = this._left;
        top = this._top + _$tj.height;
        width = this._width;
        height = this._height - _$tj.height;
        var _$aC = _$tj.height;
        if (_$aC > this._height) _$aC = this._height;
        this._$hy._$6o(this._left, this._top, this._width, _$aC);
    }
    if (this._$hz != null) {
        this._$hz._$6o(this._left, this._top + this._height - _$G._$6J, this._width, _$G._$6J);
        height -= _$G._$6J;
    }
    if (height < 0) height = 0;
    if (width < 0) width = 0;

    if (this._element != null) WidgetDockElementController.addFixedPanel(this._element, left, top, width, height);
    if (this._$hz != null && this._$hz._$bj == this) {
        this._$hz._$5Q(this, this._left, this._top, this._width, this._height);
    }
    if (this._$iZ && this._$hA != null && this._element != null && this._element.style.visibility == "visible") {
        WidgetDockElementController.addFixedPanel(this._$hA, this._left, this._top, this._width, this._height);
    }
};
WidgetDockFloatPanel.prototype._$qJ = function () {
};
WidgetDockFloatPanel.prototype._$0c = function (_$88) {
    if (!this._$iZ) return;
    if (this._$hA == null) {
        var _$t5 = "div";
        if (WidgetDockController._isHasCanvasContext) _$t5 = "div";
        this._$hA = WidgetDockElementController._$0z(_$t5, WidgetDockController._elementRootId);
        this._$hA.style.border = "0px solid";
        this._$hA.style.zIndex = 7890;
    }
    if (_$88) {
        if (this._element != null && this._element.style.visibility == "visible") {
            this._$hA.style.visibility = "visible";
            WidgetDockElementController.addFixedPanel(this._$hA, this._left, this._top, this._width, this._height);
        }
    } else {
        this._$hA.style.visibility = "hidden";
    }
};

function WidgetDockWindow(window, title) {
    WidgetDockWindow.baseConstructor.call(this, window, title);
    this._patternMain = new WidgetDockPatternMain(true);
    this._$kS = null;
    this._$kL = new Array();
    this.cx;
    this.cy;
    this._$lm = new Array(4);
    this._$3C();
    this._$jO = 4;
};
WidgetDockWindow.prototype.addFixedPanel = function (element, type) {
    element.style.position = "absolute";
    this._patternMain.addFixedPanel(element, type);
};
WidgetDockWindow._$hK = null;


WidgetDockWindow.prototype.mouseMove = function (e) {
    if (WidgetDockWindow._$hK != null) {
        WidgetDockWindow._$hK._$ms(e);
    } else {
        this._patternMain._$0a(e);
    }
};
WidgetDockWindow.prototype.mouseDown = function (e) {
    this._patternMain._$09(e);
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    var _$e0 = this._$kL.length;
    var i;
    for (i = 0; i < _$e0; i++) {
        if (this._$kL[i]._$36(pt.x, pt.y)) {
            if (i != 0) {
                var _$tr = this._$kL[0]._$jO;
                var _$tm = this._$kL[i];
                var j;
                for (j = 0; j < i; j++) {
                    this._$kL[j]._$X(-3);
                }
                this._$kL.splice(i, 1);
                this._$kL.splice(0, 0, _$tm);
                _$tm._$6r(_$tr);
            }
            break;
        }
    }
};
WidgetDockWindow.prototype.mouseUp = function (e) {
    if (WidgetDockWindow._$hK != null) {
        WidgetDockWindow._$hK.mouseUp(e);
        WidgetDockWindow._$hK = null;
    }
};
WidgetDockWindow.prototype._$rv = function (sID) {
    var ic = WidgetDockFloatPanel._floatPanelController.getPanelNum();
    var i;
    for (i = 0; i < ic; i++) {
        var _$sR = WidgetDockFloatPanel._floatPanelController._panelList[i]._element;
        if (_$sR != null && _$sR.id == sID) {
            WidgetDockFloatPanel._floatPanelController._panelList[i].hasOutIFrame(true);
            return true;
        }
    }
    return false;
};
WidgetDockWindow.prototype._$6s = function (_$88) {
    var ic = WidgetDockFloatPanel._floatPanelController.getPanelNum();
    var i;
    for (i = 0; i < ic; i++) {
        if (WidgetDockFloatPanel._floatPanelController._panelList[i] != this) WidgetDockFloatPanel._floatPanelController._panelList[i]._$0c(_$88);
    }
    this._patternMain._$0c(_$88);
};
WidgetDockWindow.prototype._$0g = function () {
    var _$nR = WidgetDockFloatPanel._floatPanelController;
    var _$e1 = 0;
    if (_$nR == null) return;
    _$e1 = _$nR.getPanelNum();
    var i;
    for (i = _$e1 - 1; i >= 0; i--) {
        if (_$nR._panelList[i] != this) {
            _$nR._panelList[i]._$0g();
        }
    }
    this._patternMain._$5F();
    if (this._$kL != null) {
        _$e1 = _$K._$kL.length;
        for (i = 0; i < _$e1; i++) {
            this._$kL[i]._$5F();
        }
        this._$kL.length = 0;
    }
    this._patternMain._$3z();
    var vrc = new Rect();
    this.getWindowRect(vrc);
    this._patternMain.setSize(vrc.right - vrc.left, vrc.bottom - vrc.top);
    this._$my(null);
};
WidgetDockWindow.prototype._$2i = function () {
    return this._$kL;
};
WidgetDockWindow.prototype.getWindowRect = function (rc) {
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
    rc.left = 0;
    rc.top = 0;
    rc.right = rc.left + iw;
    rc.bottom = rc.top + ih;
};

function _$7g() {
    WidgetDockController._windowParent._$my();
};

WidgetDockWindow.prototype._$3C = function () {
    window.onresize = _$7g;
    var rect = new Rect();
    this.getWindowRect(rect);
    this._patternMain.setSize(rect.right - rect.left, rect.bottom - rect.top);
    var i;
    for (i = 0; i < 4; i++) {
        this._$lm[i] = new _$5h();
    }
    this._patternMain._$jv = 0;
};
WidgetDockWindow.prototype._$ml = function (mainPattern) {
    var _$e1 = this._$kL.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$kL[i] == mainPattern) {
            this._$kL.splice(i, 1);
            break;
        }
    }
    this._$kL.splice(0, 0, mainPattern);
    mainPattern._$6r(this._$jO);
    this._$jO += 3;
};
WidgetDockWindow.prototype._$mm = function (mainPattern) {
    var _$e1 = this._$kL.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$kL[i] == mainPattern) {
            var j;
            for (j = 0; j < i; j++) {
                this._$kL[j]._$X(-3);
            }
            this._$kL.splice(i, 1);
            if (this._$kL.length > 0) {
                this._$jO = this._$kL[0]._$jO + 3;
            } else {
                this._$jO = mainPattern._$jO;
            }
            break;
        }
    }
};
WidgetDockWindow.prototype._$my = function (e) {
    var rc = new LocationSize();
    var d = new Size();
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
    d.width = iw;
    d.height = ih;
    rc.height = ih;
    var i;
    for (i = 0; i < 2; i++) {
        if (this._patternMain._elementWithType != null) {
            if (this._patternMain._elementWithType[2 * i + 1] != null) {
                if (i == 0) {
                    rc.y = this._patternMain._$jF[2 * i + 1];
                    WidgetDockElementController.addFixedPanel(this._patternMain._elementWithType[2 * i + 1], 0, 0, d.width, this._patternMain._$jF[2 * i + 1]);
                } else {
                    WidgetDockElementController.addFixedPanel(this._patternMain._elementWithType[2 * i + 1], 0, d.height - this._patternMain._$jF[2 * i + 1], d.width, this._patternMain._$jF[2 * i + 1]);
                }
                rc.height -= this._patternMain._$jF[2 * i + 1];
            }
        }
    }
    for (i = 0; i < 2; i++) {
        if (this._patternMain._elementWithType != null) {
            if (this._patternMain._elementWithType[2 * i] != null && d.height > 0) {
                rc.width = this._patternMain._$jF[2 * i];
                if (i == 0) {
                    rc.x = 0;
                } else {
                    rc.x = d.width - rc.width;
                }
                WidgetDockElementController.addFixedPanel(this._patternMain._elementWithType[2 * i], rc.x, rc.y, rc.width, rc.height);
            }
        }
    }
    this._patternMain._$mB(d.width, d.height);
};
WidgetDockWindow.prototype._$qF = function (_$a0) {
    this._patternMain._$qF(_$a0);
};
WidgetDockWindow.prototype.loadStatesFromLayoutController = function (layoutController) {
    var patternPositionPanelNumList = new Array(4);
    var i;
    for (i = 0; i < 4; i++) {
        patternPositionPanelNumList[i] = this._patternMain._patternPositionList[i]._patternSub.getPanelNum();
    }
    this._patternMain._$41(layoutController);
    var floatPanelController = new WidgetDockFloatPanelController();
    if (WidgetDockFloatPanel._floatPanelController != null) {
        var panelNum = WidgetDockFloatPanel._floatPanelController.getPanelNum();
        var j;
        for (j = 0; j < panelNum; j++) {
            var panel = WidgetDockFloatPanel._floatPanelController._panelList[j];
            if (panel._isInitLayout) floatPanelController.addFloatPanel(WidgetDockFloatPanel._floatPanelController._panelList[j]);
        }
    }
    this._patternMain._$0b(patternPositionPanelNumList, 4, floatPanelController);
    var _$rS = layoutController.read();
    var _$e2 = parseInt(layoutController.read());
    var _$e1 = _$e2;
    var _$aj = new WidgetDockFloatPanelController();
    for (i = 0; i < _$e1; i++) {
        var _$ox = new _$J(false);
        _$ox._$41(layoutController);
        this._$kL.push(_$ox);
        _$aj.addFloatPanel(_$ox);
    }
    var ino = floatPanelController.getPanelNum();
    for (i = 0; i < ino; i++) {
        var _$si = floatPanelController._panelList[i]._$c3();
        _$e1 = _$aj.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            var _$fY = _$aj._panelList[j]._patternPositionList[0]._patternSub.getPanelNum();
            if (_$fY == 1) {
                var mi = _$aj._panelList[j];
                var _$nT = this._patternMain._$1N(_$si, mi._patternPositionList[0]._patternSub._panelList[0]._$kI);
                if (_$nT != null) {
                    _$aj._panelList[j]._$53(_$nT, null, _$si, 0, 0);
                    _$fY = _$aj._panelList[j]._patternPositionList[0]._patternSub.getPanelNum();
                    if (_$fY == 0) {
                        _$oh = this._$kL;
                        _$e1 = _$oh.length;
                        var n;
                        for (n = 0; n < _$e1; n++) {
                            if (_$oh[n] == _$aj._panelList[j]) {
                                _$oh.split(n, 1);
                                break;
                            }
                        }
                        _$aj.deletePanel(j);
                    }
                    break;
                }
            }
        }
    }
};
WidgetDockWindow.prototype.initLayout = function (layout) {
    var _$eF, _$fB;
    layout.addContent("DFIdentifier");
    var rcWindow = new Rect();
    this.getWindowRect(rcWindow);
    layout.addContent(rcWindow.left);
    layout.addContent(rcWindow.top);
    layout.addContent(rcWindow.right);
    layout.addContent(rcWindow.bottom);
    var i;
    for (i = 0; i < 4; i++) {
        if (i == 0 || i == 2) {
            _$eF = 1;
            _$fB = 3;
        } else {
            _$eF = 0;
            _$fB = 2;
        }
        var panelNum = this._patternMain._patternPositionList[i]._patternSub.getPanelNum();
        var panel;
        var index = 0;
        var j;
        for (j = 0; j < panelNum; j++) {
            panel = this._patternMain._patternPositionList[i]._patternSub._panelList[j];
            index = panel.initPanelLayout(this._patternMain, layout, index, _$eF, _$fB);
        }
        layout.addContent("SECTIONNONE");
    }
    layout.addContent("MINIFRAMES");
    // var _$e1 = this._$kL.length;
    var _$e1 = _$K._$kL.length;
    var panel;
    var ino = 0;
    var panelNum;
    for (i = 0; i < _$e1; i++) {
        // _panelNum = this._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
        panelNum = _$K._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
        // if (_panelNum == 1) {
            ino++;
        // }
    }
    layout.addContent(ino);
    _$eF = 1;
    _$fB = 3;
    for (i = 0; i < _$e1; i++) {
        // _panelNum = this._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
        panelNum = _$K._$kL[i]._patternPositionList[0]._patternSub.getPanelNum();
        if (panelNum == 1) {
            // var _$og = this._$kL[i];
            var _$og = _$K._$kL[i];
            _$og.getWindowRect(rcWindow);
            layout.addContent(rcWindow.left);
            layout.addContent(rcWindow.top);
            layout.addContent(rcWindow.right);
            layout.addContent(rcWindow.bottom);
            panel = _$og._patternPositionList[0]._patternSub._panelList[0];
            panel.initPanelLayout(_$og, layout, 0, _$eF, _$fB);
            layout.addContent("SECTIONNONE");
        }
    }
    layout.getContent();
};
WidgetDockWindow.prototype._$1O = function (_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX) {
    var ino = this._$kL.length;
    var _$og = null;
    var _$e1;
    var i;
    for (i = 0; i < ino; i++) {
        _$og = this._$kL[i];
        _$e1 = _$og._patternPositionList[0]._patternSub.getPanelNum();
        if (_$e1 == 1) {
            var _$ps = _$og._patternPositionList[0]._patternSub._panelList[0];
            var _$pO = this._patternMain._$1J(_$mO, _$qY, _$ps._$kI, _$cX, null);
            if (_$pO != null) {
                if ((_$cX[0] & WidgetDockFloatPanel._$1A) > 0) {
                    _$nO[0] = _$pO;
                    _$nP[0] = _$og;
                    _$dA[0] = 0;
                    _$dC[0] = 0;
                } else {
                    _$nO[1] = _$pO;
                    _$nP[1] = _$og;
                    _$dA[1] = 0;
                    _$dC[1] = 0;
                }
                return;
            }
        }
    }
};

function _$4d() {
    _$4d.baseConstructor.call(this);
    this._$kY = null;
};
WidgetDockPrototype.bind(_$4d, _$1l);
_$4d.prototype._$ru = function (mainPattern) {
    this._$kY = mainPattern;
};
_$4d.prototype.setVisible = function () {
};
_$4d.prototype.setSize = function (_$am) {
    WidgetDockElementController._$6n(this._$h8, _$am.width, _$am.height);
};
_$4d.prototype._$6i = function (_$cR) {
    if (this._$h8 != null) {
        WidgetDockElementController._$6i(this._$h8, _$cR);
    }
};
_$4d.prototype._$mj = function (pts) {
    var _$po;
    _$po = this._$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    var _$9P = WidgetDockElementController._$2k(this._$h8);
    var _$9Q = WidgetDockElementController._$2M(this._$h8);
    var pt = new Location();
    pt.x = pts.x - _$9P;
    pt.y = pts.y - _$9Q;
    if (WidgetDockPatternBase._$5f(this._$lw, pt)) {
        var _$7E = new WidgetDockFloatPanelController();
        _$po._$2Q(_$7E);
        var _$e1 = _$7E.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            var dfw = _$7E._panelList[i];
            if (dfw._$cn()) {
                dfw.setVisible(false);
            }
        }
        return -1;
    }
    var _$oe = _$po._$1L();
    this._$bi = _$oe._$of;
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0W;
    return this._$bi._$4R(pts);
};
_$4d.prototype._$c6 = function () {
    _$1l._$j5.width = 130;
    _$1l._$j5.height = 18;
    return _$1l._$j5;
};
_$4d.prototype._$qJ = function () {
    var rc = new Rect();
    this._$2P(rc);
    rc.right = rc.right - rc.left;
    rc.left = 0;
    rc.bottom = rc.bottom - rc.top;
    rc.top = 0;
    var vh = rc.bottom - rc.top;
    vh -= 2;
    var _$pN = this._$bi;
    this._$bi = null;
    this._$nL(true, rc.left, rc.top, rc.right - rc.left, vh, true);
    this._$aE(rc.left, rc.top, rc.right - rc.left, vh, WidgetDockFloatPanel._$3Q);
    this._$bi = _$pN;
};
_$4d.prototype._$4L = function () {
    var _$po = _$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    this._$0Y(_$po);
};

function _$58() {
    _$58.baseConstructor.call(this);
    this._$jj = 0;
    this._$jC = 0;
    this._$kg = -1;
    this._$jZ = -1;
    this._$ju = 0;
    this._$hU = new WidgetDockFloatPanelController();
};WidgetDockPrototype.bind(_$58, _$6R);
_$58._$in = false;
_$58._$h6 = null;
_$58._$lu = new Location();
_$58._$2V = 24;
_$58.prototype.mouseMove = function (e) {
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    this._$4Q(pt);
};
_$58.prototype._$mw = function (e) {
    if (e.button != 1) return;
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    this._$08(pt, false);
};
_$58.prototype._$5e = function (e) {
};
_$58.prototype._$qy = function (wnd, rc) {
    _$6R.prototype._$qy.call(this, null, rc);
};
_$58.prototype._$5z = function (_$mO, _$pC, _$87) {
    this._$5A();
};
_$58.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$6R.prototype._$6v.call(this, _$ax, _$9c, _$cA);
};
_$58.prototype._$5R = function () {
    if (this._$kg >= 0) {
    }
    this._$kg = -1;
    this._$jZ = -1;
};
_$58.prototype._$3w = function (pt) {
    WidgetDockPatternBase._$6a(this._$je, pt);
    var rc = new Rect();
    var _$es;
    var _$e1 = this._$hU.getPanelNum();
    if (_$e1 >= 1) {
        _$es = _$e1 - 1;
        if (this._$le._$j1 == WidgetDockPatternBase._$3k || _$le._$j1 == WidgetDockPatternBase._$3l) {
            rc.left = 0;
            rc.right = this.rect.right - this.rect.left;
            rc.top = this._$hU._panelList[0]._$cv;
            rc.bottom = this._$hU._panelList[_$es]._$cE;
        } else {
            rc.top = 0;
            rc.bottom = this.rect.bottom - this.rect.top;
            rc.left = this._$hU._panelList[0]._$cv;
            rc.right = this._$hU._panelList[_$es]._$cE;
        }
    }
    if (WidgetDockPatternBase._$5f(rc, pt)) return true;
    return false;
};
_$58.prototype._$4P = function () {
};
_$58.prototype._$4U = function () {
    var pt = new Location();
    pt.x = _$58._$lu.x;
    pt.y = _$58._$lu.y;
    var _$pX = new Location();
    _$pX.x = pt.x;
    _$pX.y = pt.y;
    WidgetDockPatternBase._$6a(this._$je, pt);
    var rc = new Rect();
    WidgetDockPatternBase._$25(this._$je, rc);
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    if (_$58._$in) {
        pt.x = -100;
        _$pX.x = -100;
    }
    if (WidgetDockPatternBase._$5f(rc, pt)) {
        this._$08(pt, true);
    } else {
        if (WidgetDockPatternBase._$l2 == null || WidgetDockPatternBase._$l2._$la != this) {
            this._$5R();
        }
    }
    WidgetDockController._$8l._$34(null, _$4f._$49, _$pX);
};
_$58.prototype._$6Q = function (_$mO) {
    this._$5R();
    _$mO._patternMain._$4T(null);
    this._$5M(_$mO);
    _$mO._patternMain._$5M(_$le._$j1, _$mO);
    _$mO._$k0 = WidgetDockFloatPanel._$4Z;
    _$mO.setVisible(true);
    this._$jZ = -1;
};
_$58.prototype._$3u = function (pt, _$mO) {
    var rc = new Rect();
    this._$25(rc);
    var ptc = new Location();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$th = this._$le._$j1;
    if (_$th == WidgetDockPatternBase._$3j) {
        ptc.y += 1;
    } else if (_$th == WidgetDockPatternBase._$3m) {
        ptc.y -= 1;
    } else if (_$th == WidgetDockPatternBase._$3k) {
        ptc.x -= 1;
    } else ptc.x += 1;
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU._panelList[i];
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) {
                if ((ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) && (_$pE._$mO == _$mO)) {
                    return true;
                }
            } else {
                if ((ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) && (_$pE._$mO == _$mO)) {
                    return true;
                }
            }
        }
    }
    return false;
};
_$58.prototype._$08 = function (pt, _$7X) {
    var rc = new Rect();
    this._$25(rc);
    var ptc = new Location();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$e1 = this._$hU.getPanelNum();
    var bin = false;
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU._panelList[i];
        var _$8O = false;
        var _$9J = true;
        if ((_$pE._$mO._$jN == WidgetDockFloatPanel._$48 && !_$7X) || (_$pE._$mO._$jN == WidgetDockFloatPanel._$46 && _$7X)) _$9J = false;
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (WidgetDockPatternBase._$l2 != null) {
                if (WidgetDockPatternBase._$l2._$kx == _$pE._$mO) {
                    _$8O = true;
                }
            }
            if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) {
                if (ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE._$mO);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE._$mO);
                    } else this._$jZ = i;
                    break;
                }
            } else {
                if (ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE._$mO);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE._$mO);
                    } else this._$jZ = i;
                    break;
                }
            }
        }
    }
};
_$58.prototype._$4M = function (e) {
};
_$58.prototype._$4Q = function (pt) {
    this._$08(pt, true);
};
_$58.prototype._$4S = function () {
    var _$cD = this._$le._$j1;
    var _$e1 = this._$hU.getPanelNum();
    var _$pE;
    var rc = new Rect();
    var _$qa = new Rect();
    this._$25(_$qa);
    _$qa.right = _$qa.right - _$qa.left;
    _$qa.left = 0;
    _$qa.bottom = _$qa.bottom - _$qa.top;
    _$qa.top = 0;
    if (this._$hj != null) {
        this._$hj.fillStyle = 'rgb( 250, 250, 250 )';
        this._$hj.fillRect(_$qa.left, _$qa.top, _$qa.right - _$qa.left, _$qa.bottom - _$qa.top);
    }
    var _$o3 = null;
    var _$ba = null;
    var _$eo, _$ep;
    var i;
    for (i = 0; i < _$e1; i++) {
        _$pE = this._$hU._panelList[i];
        var _$ok = _$pE._$mO._$hE;
        if (_$o3 == null) {
            _$o3 = _$pE._$mO._patternMain;
            _$ba = _$o3._$i3;
            if (_$ba == null) _$ba = this._$bS();
        }
        if (this._$hj == null) {
            if (_$pE._$h9 != null) {
                if (_$cD == WidgetDockPatternBase._$3m || _$cD == WidgetDockPatternBase._$3j) {
                    var _$ff = 2;
                    WidgetDockElementController._$6j(_$pE._$h9, _$pE._$cv, 2 + _$ff);
                    WidgetDockElementController._$6n(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V - 2 - _$ff);
                    _$pE._$h9.style.font = this._$bS();
                } else {
                    if (WidgetDockController._browserType == WidgetDockController._$3s || WidgetDockController._browserType == WidgetDockController._$I) {
                        _$ff = (_$58._$2V - 2) / 2;
                        WidgetDockElementController._$6j(_$pE._$h9, 4 - _$ff, _$pE._$cv + 2);
                        WidgetDockElementController._$6n(_$pE._$h9, _$58._$2V - 2, _$pE._$cE - _$pE._$cv);
                        _$pE._$h9.style.writingMode = 'tb-rl';
                    } else if (WidgetDockController._browserType == WidgetDockController._$4F) {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController._$6j(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController._$6n(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController._$6j(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController._$6n(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    _$pE._$h9.style.font = this._$bS();
                }
                _$pE._$h9.innerHTML = _$pE._$qV;
            }
            continue;
        }
        var dt = new Size();
        var _$dE = new Array(1);
        WidgetDockElementController._$2L(dt, _$ba, _$pE._$qV, this._$hj);
        if (_$cD == WidgetDockPatternBase._$3m || _$cD == WidgetDockPatternBase._$3j) {
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            this._$hj._$s1 = 'ButtonShadow';
            if (_$cD == WidgetDockPatternBase._$3m) {
                rc.top = 0;
                rc.bottom = _$qa.bottom - 3;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.bottom, rc.right, rc.top, this._$hj);
            } else {
                rc.top = 2;
                rc.bottom = _$qa.bottom;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                rc.top = 3;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$eo = rc.right - _$O._$jL;
            _$ep = rc.top + (rc.bottom - rc.top - _$O._$jL) / 2;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
        } else {
            this._$hj.save();
            this._$hj._$s1 = 'ButtonShadow';
            this._$hj.translate(this._$h8.width / 2, -this._$h8.width / 2);
            this._$hj.rotate(3.141592653589 / 2);
            this._$hj.translate(this._$h8.width / 2, -this._$h8.width / 2);
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            if (_$cD == WidgetDockPatternBase._$3k) {
                rc.top = 3;
                rc.bottom = _$qa.right;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2;
            } else {
                rc.top = 0;
                rc.bottom = _$qa.right - 2;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2 + 1;
                rc.bottom -= 1;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$ep = rc.right - _$O._$jL;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
            this._$hj.restore();
        }
        if (_$ok != null) {
        }
    }
};
_$58.prototype._$03 = function (mainPattern, _$mX, _$pC, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    _$oQ[0] = null;
    {
        var _$qu = new Rect();
        _$qu.setRect(this.rect);
        var _$9z = this._$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == WidgetDockPatternBase._$3k || this._$le._$j1 == WidgetDockPatternBase._$3l) _$nz.cy = this.rect.bottom - this.rect.top; else _$nz.cx = this.rect.right - this.rect.left;
        }
        return _$9z;
    }
};
_$58.prototype._$5b = function (_$mO) {
    var rc = new Rect();
    this._$25(rc);
    var iw = _$mO._$cg();
    var ih = _$mO._$bU();
    iw += 6;
    ih += 6;
    var _$qi = new Rect();
    var _$ft = this._$ju;
    if (_$ft == WidgetDockPatternBase._$3k) {
        rc.left = rc.right;
        rc.right = rc.left + iw;
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == WidgetDockPatternBase._$3l) {
        rc.right = rc.left;
        rc.left = rc.right - (iw);
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == WidgetDockPatternBase._$3m) {
        rc.left += this._$jj;
        rc.right -= this._$jC;
        rc.top = rc.bottom;
        rc.bottom = rc.top + ih;
    } else {
        rc.bottom = rc.top;
        rc.top = rc.top - (ih);
        rc.left += this._$jj;
        rc.right -= this._$jC;
    }
    var _$og = new _$59();
    _$og._$la = this;
    _$og._$kx = _$mO;
    if (this._$kg < 0) {
        this._$kg = 1;
    }
    _$og._$kx = _$mO;
    _$og.Add(_$mO);
    _$mO.setElementVisible(true);
    _$mO._$bf(true);
    _$og._$6k(_$ft);
    _$og._$6o(rc.left, rc.top, (rc.right - rc.left), (rc.bottom - rc.top));
    _$og.setVisible(true);
    _$mO._windowParent._patternMain._$4T(_$og);
};
_$58.prototype._$0s = function () {
    var iNo = this._$hU.getPanelNum();
    if (iNo > 0) {
        var _$oU = new Array();
        var i;
        for (i = 0; i < iNo; i++) {
            _$oU[i] = this._$hU._panelList[i];
        }
        this._$hU._$5R();
        return _$oU;
    }
    return null;
};
_$58.prototype._$4J = function (_$mO, _$sc) {
    var _$e1 = _$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == _$hU._panelList[i]._$mO) {
            var _$pE = _$hU._panelList[i];
            _$pE._$qT = new String(_$sc);
            _$pE._$qV = new String(_$sc);
            this._$5A();
            break;
        }
    }
};
_$58.prototype._$8 = function (_$mO) {
    var _$ol = new _$O(0, 0, _$mO._$hy._$cb());
    _$ol._$mO = _$mO;
    this._$hU.addFloatPanel(_$ol);
    if (!WidgetDockController._isHasCanvasContext) {
        _$ol._$h9 = WidgetDockElementController._$0t("div", this._$h8);
        _$ol._$h9._$4A = this;
        _$ol._$h9.onmousedown = _$6R._$14;
        _$ol._$h9.onmousemove = _$6R._$13;
    }
    this._$5A();
    this._$qJ();
};
_$58.prototype._$5M = function (_$mO) {
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == this._$hU._panelList[i]._$mO) {
            if (this._$hU._panelList[i]._$h9 != null) {
                this._$h8.removeChild(this._$hU._panelList[i]._$h9);
                this._$hU._panelList[i]._$h9 = null;
            }
            this._$hU.deletePanel(i);
            break;
        }
    }
    this._$5A();
    this._$qJ();
    return this._$hU.getPanelNum();
};
_$58.prototype._$5A = function () {
    var _$qp = new Rect();
    var _$ga = 0;
    var _$gb = 0;
    var _$qk = new Rect();
    this._$25(_$qk);
    if (this._$le._$j1 == WidgetDockPatternBase._$3m || this._$le._$j1 == WidgetDockPatternBase._$3j) {
        this._$5B(_$ga);
    } else {
        this._$5B(_$ga);
    }
    this._$jj = _$ga;
    this._$jC = _$gb;
    this._$qJ();
};
_$58.prototype._$c8 = function () {
    var d = new Size();
    if (this._$h8 != null) {
        d.width = this._$h8.width;
        d.height = this._$h8.height;
    }
    return d;
};
_$58.prototype._$bS = function () {
    return "8pt sans-serif";
};
_$58.prototype._$5B = function (_$d4) {
    if (this._$hU == null) return;
    var d = this._$c8();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft = null;
    var _$gi = this._$hU.getPanelNum();
    var _$fv = _$d4;
    var tab = null;
    var dt = new Size();
    var i;
    var _$dI = new Array();
    var _$o3 = null;
    for (i = 0; i < _$gi; i++) {
        tab = this._$hU._panelList[i];
        tab._$cv = _$fv;
        if (_$o3 == null) {
            _$o3 = tab._$mO._patternMain;
            ft = _$o3._$i3;
            if (ft == null) ft = this._$bS();
        }
        WidgetDockElementController._$2L(dt, ft, tab._$qT, this._$hj);
        tab._$cE = _$fv + dt.width + 2 * _$G._$2Z;
        if (tab._$mO._$hE != null) tab._$cE += _$O._$jL;
        _$dI[i] = tab._$cE - _$fv;
        _$fv = tab._$cE;
    }
};

function _$59() {
    this._$kx = null;
    this._$la = null;
    this._$lc = null;
    this._$lc = new _$6A(WidgetDockController._elementRootId);
    this._$lc._$l5 = this;
    this._$hu = new Date();
    this._$hk = this._$hu.getTime();
    this._$iJ = false;
};_$59.prototype.Add = function (_$mO) {
    var it = 0;
    var _$et = _$mO._windowParent._$jO;
    WidgetDockElementController._$6i(this._$lc._$h8, _$et);
    _$mO._$6i(_$et + 1);
};
_$59.prototype.setVisible = function (_$8e) {
};
_$59.prototype._$6k = function (_$di) {
    this._$jY = _$di;
};
_$59.prototype._$6o = function (_$cS, _$do, _$dq, _$cM) {
    var _$d5 = this._$jY;
    WidgetDockElementController._$6j(this._$lc._$h8, _$cS, _$do);
    var canvas = this._$lc._$h8;
    if (WidgetDockController._isHasCanvasContext) {
        canvas.width = _$dq;
        canvas.height = _$cM;
    } else {
        canvas.style.width = _$dq + "px";
        canvas.style.height = _$cM + "px";
    }
    if (this._$kx != null) {
        var _$t6 = 2;
        var _$tl, _$to, _$tp, _$tk;
        if (_$d5 == WidgetDockPatternBase._$3k) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = _$dq - 2 * _$6A._$p - _$t6;
            _$tk = _$cM - 2 * _$6A._$p;
        } else if (_$d5 == WidgetDockPatternBase._$3l) {
            _$tl = _$cS + _$6A._$p + _$t6;
            _$to = _$do + _$6A._$p;
            _$tp = _$dq - 2 * _$6A._$p - _$t6;
            _$tk = _$cM - 2 * _$6A._$p;
        } else if (_$d5 == WidgetDockPatternBase._$3m) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = _$dq - 2 * _$6A._$p;
            _$tk = _$cM - 2 * _$6A._$p - _$t6;
        } else {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p + _$t6;
            _$tp = _$dq - 2 * _$6A._$p;
            _$tk = _$cM - 2 * _$6A._$p - _$t6;
        }
        this._$kx._$6p(_$tl, _$to, _$tp, _$tk);
    }
};
_$59.prototype._$au = function () {
    if (this._$la != null) this._$la._$5R();
    this._$kx.setElementVisible(false);
    this._$kx._$bf(false);
    this._$kx._patternMain.Add(this._$kx);
    WidgetDockElementController._$5I(WidgetDockController._elementRootId, this._$lc._$h8);
};
_$59.prototype._$0a = function (e) {
    if (this._$iJ) return;
    var rc = new Rect();
    this._$lc._$25(rc);
    var pt = new Location();
    WidgetDockElementController._$2D(e, pt);
    if (!WidgetDockPatternBase._$5f(rc, pt)) {
        if (!this._$la._$3u(pt, this._$kx)) {
            var vd = new Date();
            var _$sW = (vd.getTime() - this._$hk) / 1000;
            if (_$sW > 2) {
                this._$kx._windowParent._patternMain._$4T(null);
            }
        }
    }
    _$59.prototype._$09 = function (e) {
        var rc = new Rect();
        this._$lc._$25(rc);
        var pt = new Location();
        WidgetDockElementController._$2D(e, pt);
        if (WidgetDockPatternBase._$5f(rc, pt)) {
            this._$iJ = true;
        } else {
            this._$iJ = false;
            this._$kx._windowParent._patternMain._$4T(null);
        }
    }
};
