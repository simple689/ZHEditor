
function _$N() {
    this._$je = 0;
    this._$j1 = 0;
    this._$iI = false;
    this._$jR = 0;
    this._$jS = 0;
    this._$kG = null;
    this._$kE = null;
    this._$km = widgetDockPattern._$5Z;
    ;this._$lx = new Rect();
    this._$ly = new Rect();
    this._$iG = false;
    this._$ja = 0;
    this._$jf = 0;
    this._$hL = null;
    this._$ka = 0;
    this._$hH = null;
    this._$hj = null;
    if (widgetDockController.isHasCanvasContext) {
        this._$h8 = _$m8._$0z("canvas", widgetDockController.rootDivId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = _$m8._$0z("div", widgetDockController.rootDivId);
        this._$h8.style.border = "1px solid";
    }
    _$m8._$6n(this._$h8, this._$km, this._$km);
    this._$h8._$4y = this;
    this._$h8.onmousedown = _$N._$4h;
    this._$h8.onmousemove = _$N._$4g;
    this._$h8._$mF = _$N._$mh;
};_$N._$4h = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4y._$mw(e);
    else e.srcElement._$4y._$mw(e);
    return false;
};
_$N._$4g = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4y.mouseMove(e);
    else e.srcElement._$4y.mouseMove(e);
};
_$N._$mh = function (e) {
    return false;
};
_$N._$kw = new _$D();
_$N.prototype._$r8 = function (_$cS, _$do, _$dq, _$cM) {
};
_$N.prototype.setSize = function (_$dq, _$cM) {
    if (this._$h8 == null) return;
    _$m8._$6n(this._$h8, _$dq, _$cM);
    if (_$dq == 0 && _$cM == 0) {
        this._$h8.style.visibility = "hidden";
    }
    this._$qJ();
};
_$N.prototype._$6i = function (_$cR) {
    if (this._$h8 != null) {
        _$m8._$6i(this._$h8, _$cR);
    }
};
_$N.prototype._$mw = function (e) {
    if (widgetDockController._$fQ(e.button)) {
        widgetDockWindow._$hK = this;
        widgetDockController._$6s(true);
        this._$4N(0, 0);
    }
    return false;
};
_$N.prototype.mouseUp = function (e) {
    if (!this._$iG) return;
    widgetDockController._$6s(false);
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
    if (this._$j1 == widgetDockPattern._$3k || this._$j1 == widgetDockPattern._$3l) this._$h8.style.cursor = "e-resize";
    else this._$h8.style.cursor = "n-resize"
};
_$N.prototype._$rh = function (_$og) {
    this._$kG = _$og;
    _$og.Add(this);
};
_$N.prototype._$ms = function (e) {
    if (!this._$iG) return;
    var pt = new Align();
    _$m8._$2D(e, pt);
    this._$4i(pt);
    this._$qJ();
};
_$N.prototype._$4N = function (_$ts, _$h1) {
    return this._$kG._$s9(this, _$ts, _$h1);
};
_$N.prototype._$bZ = function () {
    var pt = new Align();
    pt.x = _$m8._$2k(this._$h8);
    pt.y = _$m8._$2M(this._$h8);
    return pt;
};
_$N.prototype._$c8 = function () {
    var d = new Size();
    d.width = _$m8._$2O(this._$h8);
    d.height = _$m8._$2h(this._$h8);
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
            if (this._$j1 == widgetDockPattern._$3k) {
                this._$jR = _$ps.rect.left + 2 * widgetDockPattern._$5Z;
                this._$jS = this._$kG._$lz.right - 2 * widgetDockPattern._$5Z - this._$kG._$2J(this._$j1, _$g8, 0xffffffff);
            } else if (this._$j1 == widgetDockPattern._$3l) {
                this._$jR = this._$kG._$lz.left + this._$kG._$2J(this._$j1, _$g8, 0xffffffff) + widgetDockPattern._$5Z;
                this._$jS = _$ps.rect.right - 2 * widgetDockPattern._$5Z;
            } else if (this._$j1 == widgetDockPattern._$3m) {
                this._$jR = _$ps.rect.top + 2 * widgetDockPattern._$5Z;
                this._$jS = this._$kG._$lz.bottom - 2 * widgetDockPattern._$5Z - this._$kG._$2J(this._$j1, _$g8, 0xffffffff);
            } else {
                this._$jR = this._$kG._$lz.top + this._$kG._$2J(this._$j1, _$g8, 0xffffffff) + widgetDockPattern._$5Z;
                this._$jS = _$ps.rect.bottom - 2 * widgetDockPattern._$5Z;
            }
        } else {
            var iw, ih;
            iw = _$pv[0].rect.right - _$pv[0].rect.left;
            ih = _$pv[0].rect.bottom - _$pv[0].rect.top;
            if (this._$j1 == widgetDockPattern._$3k) {
                this._$jR = _$ps.rect.left + 2 * widgetDockPattern._$5Z;
                this._$jS = _$ps.rect.right + iw - 2 * widgetDockPattern._$5Z;
            } else if (this._$j1 == widgetDockPattern._$3l) {
                this._$jR = _$ps.rect.left - iw + widgetDockPattern._$5Z;
                this._$jS = _$ps.rect.right - 2 * widgetDockPattern._$5Z;
            } else if (this._$j1 == widgetDockPattern._$3m) {
                this._$jR = _$ps.rect.top + 2 * widgetDockPattern._$5Z;
                this._$jS = _$ps.rect.bottom + ih - 2 * widgetDockPattern._$5Z;
            } else {
                this._$jR = _$ps.rect.top - ih + widgetDockPattern._$5Z;
                this._$jS = _$ps.rect.bottom - 2 * widgetDockPattern._$5Z;
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
        if ((this._$j1 == widgetDockPattern._$3k) || (this._$j1 == widgetDockPattern._$3l)) {
            this._$jR = rc1.left + widgetDockPattern._$5Z * 2;
            this._$jS = rc2.right - widgetDockPattern._$5Z * 2;
        } else {
            this._$jR = rc1.top + widgetDockPattern._$5Z * 2;
            this._$jS = rc2.bottom - widgetDockPattern._$5Z * 2;
        }
    }
    this._$3B();
    return 0;
};
_$N.prototype._$4i = function (pt) {
    if (this._$j1 == widgetDockPattern._$3k || this._$j1 == widgetDockPattern._$3l) {
    } else {
    }
    var iw = widgetDockPattern._$2A(this._$lx);
    var ih = widgetDockPattern._$2z(this._$lx);
    if (this._$j1 == widgetDockPattern._$3k || this._$j1 == widgetDockPattern._$3l) {
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
        _$m8._$5I(widgetDockController.rootDivId, this._$h8);
    }
    this._$h8 = null;
};
_$N.prototype._$1Q = function () {
    this._$kG._$sb(this);
};
_$N.prototype._$sb = function () {
    var _$e1 = this._$kG.subPatternList[this._$j1].subPattern.getPanelNum();
    var _$ps;
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    _$ps = this._$2a(_$95, _$pv, _$gg);
    var _$qm = this._$ly;
    var _$dt = this._$lx.left - _$qm.left;
    if (this._$j1 == widgetDockPattern._$3k || this._$j1 == widgetDockPattern._$3l) {
        _$dt = this._$lx.left - _$qm.left;
    } else {
        _$dt = this._$lx.top - _$qm.top;
    }
    this._$4q(_$dt);
    var _$ey, _$eB;
    var _$ez, _$eC, _$eA, _$eD;
    _$ez = _$eA = _$eC = _$eD = 0;
    var _$9w;
    if (this._$j1 == widgetDockPattern._$3k || this._$j1 == widgetDockPattern._$3l) {
        _$9w = widgetDockPattern._$3m;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
        if (_$pv[0] != null) {
            _$ez = _$qm.top;
            _$eC = _$pv[0].rect.top;
            _$eA = _$pv[0].rect.bottom;
            _$eD = _$qm.bottom;
        }
    } else {
        _$9w = widgetDockPattern._$3k;
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
        if (this._$j1 == widgetDockPattern._$3k) _$q8.right += _$dt; else if (this._$j1 == widgetDockPattern._$3l) _$q8.left += _$dt; else if (this._$j1 == widgetDockPattern._$3m) _$q8.bottom += _$dt; else _$q8.top += _$dt;
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
                    if (this._$j1 == widgetDockPattern._$3k) _$q8.left += _$dt; else if (this._$j1 == widgetDockPattern._$3l) _$q8.right += _$dt; else if (this._$j1 == widgetDockPattern._$3m) _$q8.top += _$dt; else _$q8.bottom += _$dt;
                    this._$kG._$6v(_$pv[0]._$kI, _$q8, this._$j1);
                    _$ps._$5q();
                    _$pv[0]._$5q();
                    if (this._$j1 == widgetDockPattern._$3l || this._$j1 == widgetDockPattern._$3j) _$dt = -_$dt;
                    this._$kG._$4o(this._$j1, this._$ka + 1, _$gg[0] - 1, _$dt);
                } else {
                    _$ps._$5q();
                    if (this._$j1 == widgetDockPattern._$3l || this._$j1 == widgetDockPattern._$3j) _$dt = -_$dt;
                    this._$kG._$4n(this._$j1, this._$ka + 1, _$dt);
                }
                this._$kG._$6x(_$9w, _$ey, _$eB);
                this._$kG._$6x((_$9w + 2), _$ey, _$eB);
                this._$kG._$h();
            } else {
                this._$kG._$6v(_$ps._$kI, _$q8, this._$j1);
                _$ps._$5q();
                if (this._$j1 == widgetDockPattern._$3l || this._$j1 == widgetDockPattern._$3j) _$dt = -_$dt;
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
        if ((this._$j1 == widgetDockPattern._$3m) || (this._$j1 == widgetDockPattern._$3j)) {
            rc1.bottom += _$dt;
            this._$kG._$6v(pd1[0], rc1, widgetDockPattern._$6N);
            rc2.top += _$dt;
            this._$kG._$6v(pd2[0], rc2, widgetDockPattern._$6N);
            if (rc2.top == rc2.bottom) this._$kE._$br = 999.0; else this._$kE._$br = 1.0 * (widgetDockPattern._$2z(rc1)) / (widgetDockPattern._$2z(rc2));
        } else {
            rc1.right += _$dt;
            rc2.left += _$dt;
            this._$kG._$6v(pd1[0], rc1, widgetDockPattern._$3T);
            this._$kG._$6v(pd2[0], rc2, widgetDockPattern._$3T);
            if (rc2.left == rc2.right) this._$kE._$br = 999.0; else this._$kE._$br = 1.0 * (widgetDockPattern._$2A(rc1)) / (widgetDockPattern._$2A(rc2));
        }
    }
};
_$N.prototype._$4q = function (_$cY) {
    var ix, iy;
    var _$gK, _$el;
    var _$qu = new Rect();
    if (!this._$iG) this._$25(_$qu); else _$qu = this._$ly;
    _$gK = widgetDockPattern._$2A(_$qu);
    _$el = widgetDockPattern._$2z(_$qu);
    ix = _$qu.left;
    iy = _$qu.top;
    if (this._$j1 == widgetDockPattern._$3k || this._$j1 == widgetDockPattern._$3l) {
        ix += _$cY;
    } else {
        iy += _$cY;
    }
    _$m8._$6j(this._$h8, ix, iy);
    _$m8._$6n(this._$h8, _$gK, _$el);
    this._$qJ();
};
_$N.prototype._$6q = function (rc) {
    if (this._$h8 != null) {
        _$m8._$6j(this._$h8, rc.left, rc.top);
        _$m8._$6n(this._$h8, rc.right - rc.left, rc.bottom - rc.top);
        this._$qJ();
    }
};
_$N.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = _$m8._$2k(this._$h8);
        rc.top = _$m8._$2M(this._$h8);
        rc.right = rc.left + _$m8._$2O(this._$h8);
        rc.bottom = rc.top + _$m8._$2h(this._$h8);
    }
};
_$N.prototype._$2a = function (_$89, _$nC, _$dj) {
    var _$e1 = this._$kG.subPatternList[this._$j1].subPattern.getPanelNum();
    var _$ps;
    _$nC[0] = null;
    _$89[0] = true;
    var _$f2;
    var i;
    for (i = _$e1 - 1; i >= 0; i--) {
        _$ps = this._$kG.subPatternList[this._$j1].subPattern.panelList[i];
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
    _$m8._$6j(this._$h8, vrc.left, vrc.top);
    _$m8._$6n(this._$h8, vrc.right - vrc.left, vrc.bottom - vrc.top);
    return;
};
_$N.prototype._$3B = function () {
};
_$N.prototype._$qJ = function () {
    var _$eu, _$gC, iw, ih;
    _$eu = _$m8._$2k(this._$h8);
    _$gC = _$m8._$2M(this._$h8);
    iw = _$m8._$2O(this._$h8);
    ih = _$m8._$2h(this._$h8);
    if (this._$hj == null) return;
    if ((this._$j1 == widgetDockPattern._$3k) || (this._$j1 == widgetDockPattern._$3l)) {
        this._$hj._$s1 = 'black';
        _$m8._$1q(0, 0, 0, ih, this._$hj);
        this._$hj._$s1 = 'black';
        _$m8._$1q(iw - 2, 0, iw - 2, ih, this._$hj);
        this._$hj._$s1 = 'black';
        _$m8._$1q(iw - 1, 0, iw - 1, ih, this._$hj);
        this._$hj.fillStyle = 'ButtonFace';
        if (widgetDockController.browserType == browserType.Opera) {
            this._$hj.fillStyle = 'white';
        }
        this._$hj.fillRect(1, 0, iw - 3, ih);
    } else {
        this._$hj._$s1 = 'black';
        _$m8._$1q(0, 0, iw, 0, this._$hj);
        this._$hj._$s1 = 'black';
        _$m8._$1q(0, ih - 2, iw, ih - 2, this._$hj);
        this._$hj._$s1 = 'black';
        _$m8._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        this._$hj.fillStyle = 'ButtonFace';
        if (widgetDockController.browserType == browserType.Opera) {
            this._$hj.fillStyle = 'white';
        }
        this._$hj.fillRect(0, 1, iw, ih - 3);
    }
};
