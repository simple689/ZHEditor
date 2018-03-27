function _$K(isMain) {
    _$K.baseConstructor.call(this, isMain);
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
    var cnt = this._$ha.length;
    for (var i = 0; i < cnt; i++) {
        _$9U.push(this._$ha[i]);
    }
    return _$9U;
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
    for (var i = 0; i < 4; i++) {
        if (this._elementList[i] == _$a0) {
            this._elementList[i] = null;
            this._$5z();
            return;
        }
    }
};
_$K.prototype._$7v = function (_$a0) {
    this._$qF(this._elementList[1]);
    var _$tc = WidgetDockElementController.getElementLeft(this._$he);
    var _$tn = WidgetDockElementController.getElementTop(this._$he);
    this._elementList[1] = _$a0._panelStateElement;
    WidgetDockElementController.setElementLeftTopSize(_$a0._panelStateElement, 3 + _$tc, 3 + _$tn, parseInt(this._$hh.style.width) - 6, parseInt(_$a0._panelStateElement.style.height));
    this._$5z();
};
_$K.prototype.add = function (com) {
};
_$K.prototype._$d = function (com) {
};
_$K.prototype._$5E = function (com) {
};
_$K.prototype._$7p = function () {
    if (this._elementList[1] != null) return;
    var pan = new _$4d();
    pan._$ru(this);
    pan.setVisible(true);
    pan.setSize(pan._$c6());
    this._$7v(pan);
    this.add(pan);
    this._$kX = pan;
    this._$kX.refresh();
};
_$K._$0y = function (frame) {
    var _$og = new _$K(false);
    _$og._location = new WidgetDockLocation();
    _$og._location.x = frame.x;
    _$og._location.y = frame.y;
    _$og._size = new WidgetDockSize();
    _$og._size.width = frame.width;
    _$og._size.height = frame.height;
    _$K._$kL.push(_$og);
    return _$og;
};
_$K.prototype._$0v = function (elementId) {
};
_$K.prototype._$4R = function () {
    this._$iG = true;
    return this._$kK._$15();
};
_$K.prototype._$n = function (_$b9) {
};
_$K.prototype._$10 = function () {
    _$he = null;
};
_$K.prototype._$01 = function () {
    if (this._$it) {
        var panel = this._panelList[0]._list[0];
        if (!panel._$iX) {
            _$lq = _$he._$bZ();
            _$ln = _$he.getSize();
            _$10();
        }
    } else {
        _$10();
    }
};
_$K.prototype._$R = function (_$mX, floatPanel, pt, _$nz) {
    if (!this._$is || !this._$it) {
        return 0xff;
    }
    if (!_$mX._$it) {
        return 0xff;
    }
    if (this._$kK != null) {
        _$mX._$j1 = 0xff;
        return 0xff;
    }
    var _$qf = new _$5g();
    var _$el = WidgetDockPatternBase.getHeight(_$qe);
    var _$gK = WidgetDockPatternBase.getWidth(_$qe);
    var _$gk = _$gK < _$el ? _$gK : _$el;
    _$mX._$iM = false;
    _$nz.cx = _$gK;
    _$nz.cy = _$el;
    if (!this._$1h(_$mX, _$nz, _$gK, _$el, _$qe, pt)) {
        return _$mX._$j1;
    }
    this.getWindowRect(_$qf);
    _$qf.left += this._signLenList[0];
    _$qf.right -= this._signLenList[2];
    _$qf.top += this._signLenList[1];
    _$qf.bottom -= this._signLenList[3];
    var _$9j = WidgetDockPatternBase._$m(_$qf, pt);
    _$mX._$ka = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0xff;
    if ((_$9j != 0xff) && ((_$9j % 2) == 0)) {
        _$mX._$j1 = parseInt(_$9j / 2);
        floatPanel._$2w(_$nz, _$gk, _$qf, false);
        _$mX._$iM = true;
        WidgetDockPatternBase._$2c(_$mX, _$qf, _$nz);
        return _$mX._$j1;
    }
    var _$9z;
    var _$o4 = null;
    var _$pP = new Array(1);
    var _$d1 = new Array(1);
    _$9z = this._$02(_$mX, 0, pt, _$nz, _$gk, _$pP, _$d1);
    if (_$9z != 0xff) {
        if (((_$9z + 1) % 2) == 0) {
            _$o4 = _$pP[0];
        }
    } else {
        return 0xff;
    }
    if (_$mX._$kx == _$o4) {
        _$mX._$j1 = 0xff;
        return 0xff;
    }
    _$mX._$j1 = parseInt(_$9z / 2);
    if (_$o4 != null) {
        floatPanel._$2w(_$nz, _$gk, _$qf, true);
    } else {
        _$qf.left = _$qf.top = 0;
        _$qf.right = _$nz.cx;
        _$qf.bottom = _$nz.cy;
        floatPanel._$2w(_$nz, _$gk, _$qf, false);
    }
    floatPanel._$69(0, _$o4, parseInt(_$9z / 2));
    if (_$mX._$ky == null && _$mX._$j1 == 0 && !_$mX._$iM) {
        _$mX._$j1 = 0xff;
    }
    return _$mX._$j1;
};
_$K.prototype.setSignLen = function (signLenAry) {
    signLenAry[0] = this._signLenList[0];
    signLenAry[2] = this._signLenList[2];
    signLenAry[3] = this._signLenList[3];
    signLenAry[1] = 3;
    if (this._elementList[1] != null) {
        signLenAry[1] += WidgetDockElementController.getElementHeight(this._elementList[1]);
    }
};
_$K.prototype._$mC = function (_$eu, _$gC, iw, ih) {
    if (this._elementList[1] != null) {
        WidgetDockElementController.setElementLeftTop(this._elementList[1], 3 + WidgetDockElementController.getElementLeft(this._$he), 3 + WidgetDockElementController.getElementTop(this._$he));
        WidgetDockElementController.setElementSize(this._elementList[1], iw, this._signLenList[1] - 3);
        if (this._$kX != null) {
            this._$kX.refresh();
        }
    }
    var panelNum = this._panelList[0].getSize();
    if (panelNum == 1) {
        var panel = this._panelList[0]._list[0];
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
_$K.prototype._$l = function (floatPanel) {
    if (!this._$4s(floatPanel, true)) {
        if (this._elementList[1] != null) {
            WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._elementList[1]);
        }
        this._$qF(this._elementList[1]);
        this._$5E(this._$kX);
    }
};
_$K.prototype._$4s = function (floatPanel, _$8e) {
    var _$e1 = 0;
    var _$nT = null;
    var _$fY = this._panelList[0].getSize();
    if (_$fY < 1) {
        return false;
    }
    _$nT = this._panelList[0]._list[0]._$kI;
    _$e1 = _$nT._$4s(floatPanel, _$8e);
    if (_$e1 < 2) {
        return false;
    }
    return true;
};
_$K.prototype._$3G = function (_$nc, _$mX, _$n1) {
    var panel = this._panelList[0]._list[0];
    var _$pp = panel._$kI;
    var _$8E = false;
    if (_$mX._$j1 == EnumPatternPositionType.Top || _$mX._$j1 == EnumPatternPositionType.Left) {
        _$8E = true;
    }
    _$mX._$ka = 0;
    _$pp._$3F(_$nc, _$mX._$j1, _$8E, _$n1);
    _$mX._$j1 = 0;
    _$nc._$6m(0, this);
};
_$K.prototype._$1g = function (_$mX, _$n1) {
    var panel = this._panelList[0]._list[0];
    var _$pp = panel._$kI;
    _$mX._$kx._$jr = 0;
    var _$8E = false;
    if (_$mX._$j1 == EnumPatternPositionType.Top || _$mX._$j1 == EnumPatternPositionType.Left) {
        _$8E = true;
    }
    var _$oD = new _$F();
    _$oD._floatPanel = _$mX._$kx;
    _$mX._$kx._$kA = _$oD;
    _$pp._$3F(_$oD, _$mX._$j1, _$8E, _$n1);
    _$mX._$kx._patternPositionType = 0;
};
_$K.prototype._$53 = function (floatPanel) {
    WidgetDockPatternBase.prototype._$53.call(this, floatPanel);
    var _$e1 = this._panelList[0].getSize();
    if (_$e1 > 0) {
        var panel = this._panelList[0]._list[0];
        if (panel._$kI._$od == null && panel._$kI._$pr == null && panel._$kI._floatPanel == null && (panel._$kI._$l1 == null || (panel._$kI._$l1 != null && panel._$kI._$l1.length < 1))) {
            _$e1 = _$K._$kL.length;
            for (var i = 0; i < _$e1; i++) {
                if (_$K._$kL[i] == this) {
                    _$K._$kL.splice(i, 1);
                    break;
                }
            }
        }
    } else {
        _$e1 = _$K._$kL.length;
        for (var i = 0; i < _$e1; i++) {
            if (_$K._$kL[i] == this) {
                _$K._$kL.splice(i, 1);
                break;
            }
        }
    }
};
