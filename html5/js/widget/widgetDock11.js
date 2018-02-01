
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
};_$b1._$b0(_$K, widgetDockPattern);
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
    if (this._$lq == null) this._$lq = new Align();
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
        if (this._$hC[i] == _$a0) {
            this._$hC[i] = null;
            this._$5z();
            return;
        }
    }
};
_$K.prototype._$7v = function (_$a0) {
    this._$qF(this._$hC[1]);
    var _$tc = _$m8._$2k(this._$he);
    var _$tn = _$m8._$2M(this._$he);
    this._$hC[1] = _$a0._$h8;
    if (widgetDockController.isHasCanvasContext) {
        _$m8._$6j(_$a0._$h8, 3 + _$tc, 3 + _$tn);
        _$a0._$h8.width = this._$hh.width - 6;
    } else _$m8._$6e(_$a0._$h8, 3 + _$tc, 3 + _$tn, parseInt(this._$hh.style.width) - 6, parseInt(_$a0._$h8.style.height));
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
    if (this._$hC[1] != null) return;
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
    if (this._$hC[1] != null) {
        this._$hC[1]._$r6(_$7J);
    }
};
_$K._$0y = function (_$q2) {
    var _$og = new _$K(false);
    _$og._$lq = new Align();
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
        var _$ps = this.subPatternList[0].subPattern.panelList[0];
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
    var _$el = widgetDockPattern._$2z(_$qe);
    var _$gK = widgetDockPattern._$2A(_$qe);
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
    var _$9j = widgetDockPattern._$m(_$qf, _$pC);
    _$mX._$ka = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0xff;
    if ((_$9j != 0xff) && ((_$9j % 2) == 0)) {
        _$mX._$j1 = parseInt(_$9j / 2);
        _$mU._$2G(_$nz, _$gk, _$qf, false);
        _$mX._$iM = true;
        widgetDockPattern._$2c(_$mX, _$qf, _$nz);
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
    if (this._$hC[1] != null) {
        _$n7[1] += _$m8._$2h(this._$hC[1]);
    }
};
_$K.prototype._$mC = function (_$eu, _$gC, iw, ih) {
    var _$gK, _$el;
    _$el = ih;
    _$gK = iw;
    if (this._$hC[1] != null) {
        _$m8._$6j(this._$hC[1], 3 + _$m8._$2k(this._$he), 3 + _$m8._$2M(this._$he));
        _$m8._$6n(this._$hC[1], iw, this._$jF[1] - 3);
        if (this._$kX != null) this._$kX._$qJ();
    }
    var _$cp = 0;
    var _$e1 = this.subPatternList[0].subPattern.getPanelNum();
    if (_$e1 == 1) {
        var _$ps = this.subPatternList[0].subPattern.panelList[0];
        if (_$ps._$le != null) {
            _$ps._$le.setSize(0, 0);
        }
        var rc = new _$5g();
        rc.left = _$eu;
        rc.top = _$gC;
        rc.right = _$eu + iw;
        rc.bottom = _$gC + ih;
        _$ps.rect.setRect(rc);
        this._$6v(_$ps._$kI, rc, widgetDockPattern._$5l);
        this._$6x(widgetDockPattern._$3k, -32767, 32767);
    }
    return 0;
};
_$K.prototype._$l = function (_$mO) {
    if (!this._$4s(_$mO, true)) {
        if (this._$hC[1] != null) _$m8._$5I(widgetDockController.rootDivId, this._$hC[1]);
        this._$qF(this._$hC[1]);
        this._$5E(this._$kX);
    }
};
_$K.prototype._$4s = function (_$mO, _$8e) {
    var _$e1 = 0;
    var _$nT = null;
    var _$fY = this.subPatternList[0].subPattern.getPanelNum();
    if (_$fY < 1) return false;
    _$nT = this.subPatternList[0].subPattern.panelList[0]._$kI;
    _$e1 = _$nT._$4s(_$mO, _$8e);
    if (_$e1 < 2) return false;
    return true;
};
_$K.prototype._$bP = function () {
    var _$e1 = 0;
    var _$nT = null;
    var _$fY = this.subPatternList[0].subPattern.getPanelNum();
    if (_$fY < 1) return null;
    var _$oq = new _$D();
    _$nT = this.subPatternList[0].subPattern.panelList[0]._$kI;
    _$nT._$2Q(_$oq);
    var _$at = new Array(_$oq.getPanelNum());
    var i;
    for (i = 0; i < _$oq.getPanelNum(); i++) _$at[i] = _$oq.panelList[i];
    return _$at;
};
_$K.prototype._$3G = function (_$nc, _$mX, _$n1) {
    var _$ps = this.subPatternList[0].subPattern.panelList[0];
    var _$pp = _$ps._$kI;
    var _$8E = false;
    if (_$mX._$j1 == widgetDockPattern._$3m || _$mX._$j1 == widgetDockPattern._$3k) _$8E = true;
    _$mX._$ka = 0;
    _$pp._$3F(_$nc, _$mX._$j1, _$8E, _$n1);
    _$mX._$j1 = 0;
    _$nc._$6m(0, this);
};
_$K.prototype._$1g = function (_$mX, _$n1) {
    var _$ps = this.subPatternList[0].subPattern.panelList[0];
    var _$pp = _$ps._$kI;
    _$mX._$kx._$jr = 0;
    var _$8E = false;
    if (_$mX._$j1 == widgetDockPattern._$3m || _$mX._$j1 == widgetDockPattern._$3k) _$8E = true;
    var _$oD = new _$F();
    _$oD._$of = _$mX._$kx;
    _$mX._$kx._$kA = _$oD;
    _$pp._$3F(_$oD, _$mX._$j1, _$8E, _$n1);
    _$mX._$kx._$j0 = 0;
};
_$K.prototype._$53 = function (_$n5) {
    widgetDockPattern.prototype._$53.call(this, _$n5);
    var _$e1 = this.subPatternList[0].subPattern.getPanelNum();
    if (_$e1 > 0) {
        var _$ps = this.subPatternList[0].subPattern.panelList[0];
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
