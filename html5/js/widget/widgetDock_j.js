function _$K(_$7R) {
    _$K.baseConstructor.call(this, _$7R);
    this._$kK = null;
    this._$iG = false;
    this._location = null;
    this._size = null;
    this._$kV = null;
    this._$it = false;
    this._$ha = new Array();
    this._$kX = null;
};
WidgetDockPrototype.bind(_$K, WidgetDockPatternBase);
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
        if (this._location != null) {
            rc.x = this._location.x;
            rc.y = this._location.y;
        } else {
            rc.x = 100;
            rc.y = 100;
        }
        if (this._size != null) {
            rc.width = this._size.width;
            rc.height = this._size.height;
        } else {
            rc.width = 200;
            rc.height = 300;
        }
    }
};
_$K.prototype.setLocationSize = function (left, top, right, bottom) {
    if (this._location == null) {
        this._location = new WidgetDockLocation();
    }
    this._location.x = left;
    this._location.y = top;
    if (this._size == null) {
        this._size = new WidgetDockSize();
    }
    this._size.width = right - left;
    this._size.height = bottom - top;
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
    var _$tc = WidgetDockElementController.getElementLeft(this._$he);
    var _$tn = WidgetDockElementController.getElementTop(this._$he);
    this._elementWithType[1] = _$a0._$h8;
    if (WidgetDockController._isHasCanvasContext) {
        WidgetDockElementController.setElementLeftTop(_$a0._$h8, 3 + _$tc, 3 + _$tn);
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
    _$og._location = new WidgetDockLocation();
    _$og._location.x = _$q2.x;
    _$og._location.y = _$q2.y;
    _$og._size = new WidgetDockSize();
    _$og._size.width = _$q2.width;
    _$og._size.height = _$q2.height;
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
        var panel = this._patternPositionList[0]._patternSub._panelList[0];
        if (!panel._$iX) {
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
        _$n7[1] += WidgetDockElementController.getElementHeight(this._elementWithType[1]);
    }
};
_$K.prototype._$mC = function (_$eu, _$gC, iw, ih) {
    var _$gK, _$el;
    _$el = ih;
    _$gK = iw;
    if (this._elementWithType[1] != null) {
        WidgetDockElementController.setElementLeftTop(this._elementWithType[1], 3 + WidgetDockElementController.getElementLeft(this._$he), 3 + WidgetDockElementController.getElementTop(this._$he));
        WidgetDockElementController.setElementSize(this._elementWithType[1], iw, this._$jF[1] - 3);
        if (this._$kX != null) this._$kX._$qJ();
    }
    var _$cp = 0;
    var _$e1 = this._patternPositionList[0]._patternSub.getPanelNum();
    if (_$e1 == 1) {
        var panel = this._patternPositionList[0]._patternSub._panelList[0];
        if (panel._$le != null) {
            panel._$le.setSize(0, 0);
        }
        var rc = new WidgetDockRect();
        rc.left = _$eu;
        rc.top = _$gC;
        rc.right = _$eu + iw;
        rc.bottom = _$gC + ih;
        panel.rect.setRect(rc);
        this._$6v(panel._$kI, rc, WidgetDockPatternBase._$5l);
        this._$6x(EnumPatternPositionType.Left, -32767, 32767);
    }
    return 0;
};
_$K.prototype._$l = function (_$mO) {
    if (!this._$4s(_$mO, true)) {
        if (this._elementWithType[1] != null) WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._elementWithType[1]);
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
    var panel = this._patternPositionList[0]._patternSub._panelList[0];
    var _$pp = panel._$kI;
    var _$8E = false;
    if (_$mX._$j1 == EnumPatternPositionType.Top || _$mX._$j1 == EnumPatternPositionType.Left) _$8E = true;
    _$mX._$ka = 0;
    _$pp._$3F(_$nc, _$mX._$j1, _$8E, _$n1);
    _$mX._$j1 = 0;
    _$nc._$6m(0, this);
};
_$K.prototype._$1g = function (_$mX, _$n1) {
    var panel = this._patternPositionList[0]._patternSub._panelList[0];
    var _$pp = panel._$kI;
    _$mX._$kx._$jr = 0;
    var _$8E = false;
    if (_$mX._$j1 == EnumPatternPositionType.Top || _$mX._$j1 == EnumPatternPositionType.Left) _$8E = true;
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
        var panel = this._patternPositionList[0]._patternSub._panelList[0];
        if (panel._$kI._$od == null && panel._$kI._$pr == null && panel._$kI._$of == null && (panel._$kI._$l1 == null || (panel._$kI._$l1 != null && panel._$kI._$l1.length < 1))) {
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

function _$J(_$7R) {
    _$J.baseConstructor.call(this, _$7R);
    this._$kS;
    this._$kF = null;
};
WidgetDockPrototype.bind(_$J, _$K);
_$J.prototype.getWindowRect = function (_$qb) {
    if (this._$he != null) {
        _$qb.left = WidgetDockElementController.getElementLeft(this._$he);
        _$qb.top = WidgetDockElementController.getElementTop(this._$he);
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
    var _$eu = WidgetDockElementController.getElementLeft(this._$he);
    var _$gC = WidgetDockElementController.getElementTop(this._$he);
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
        com.setElementZIndex(this._$jO + 1);
    } else {
        com.setElementZIndex(this._$jO + 2);
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
        WidgetDockElementController.setElementZIndex(this._$he, this._$jO);
        if (this._$ha != null) {
            var _$e0 = this._$ha.length;
            var i;
            for (i = 0; i < _$e0; i++) {
                if (this._$ha[i] instanceof WidgetDockFloatPanel) {
                    this._$ha[i].setElementZIndex(this._$jO + 1);
                } else {
                    this._$ha[i].setElementZIndex(this._$jO + 2);
                }
            }
        }
    }
};
_$J.prototype._$2g = function () {
};
_$J._$0x = function (_$q2) {
    var _$og = new _$J(false);
    _$og._location = new WidgetDockLocation();
    _$og._location.x = _$q2.x;
    _$og._location.y = _$q2.y;
    _$og._size = new WidgetDockSize();
    _$og._size.width = _$q2.width;
    _$og._size.height = _$q2.height;
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
    this._$kS = _$b9._windowMain._$kS;
    this._$kF = _$b9._windowMain;
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
        if (this._size == null) {
            this._size = new WidgetDockSize();
            this._size.width = _$b9._$lK.cx;
            this._size.height = _$b9._$lK.cy;
            this._location = new WidgetDockLocation();
            this._location.x = _$b9._$lt.x;
            this._location.y = _$b9._$lt.y;
        } else {
            _$b9._$lt.x = this._location.x;
            _$b9._$lt.y = this._location.y;
            _$b9._$lK.cx = this._size.width;
            _$b9._$lK.cy = this._size.height;
        }
        var pt = new WidgetDockLocation();
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
_$J.prototype._$6p = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._$he, _$cS, _$do);
    if (WidgetDockController._isHasCanvasContext) {
        this._$he.width = width;
        this._$he.height = height;
    } else {
        this._$he.style.width = width + "px";
        this._$he.style.height = height + "px";
    }
    this._$mC(_$cS + this._$jF[0], _$do, width - this._$jF[0] - this._$jF[2], height);
};
_$J.prototype._$10 = function () {
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$he);
    this._$he = null;
    this._$kF._$mm(this);
    var cnt = this._$ha.length;
    var i;
    for (i = 0; i < cnt; i++) {
        if ((this._$ha[i] instanceof _$N) || (this._$ha[i] instanceof _$1l)) {
            WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$ha[i]._$h8);
        }
    }
    this._elementWithType[1] = null;
};
_$J.prototype._$01 = function () {
    if (this._$it) {
        var panel = this._patternPositionList[0]._patternSub._panelList[0];
        if (!panel._$iX) {
            this._location.x = WidgetDockElementController.getElementLeft(this._$he);
            this._location.y = WidgetDockElementController.getElementTop(this._$he);
            if (WidgetDockController._isHasCanvasContext) {
                this._size.width = this._$he.width;
                this._size.height = this._$he.height;
            } else {
                this._size.width = parseInt(this._$he.style.width);
                this._size.height = parseInt(this._$he.style.height);
            }
            this._$10();
        }
    } else this._$10();
};
_$J.prototype._$53 = function (_$n5) {
    _$K.prototype._$53.call(this, _$n5);
};
