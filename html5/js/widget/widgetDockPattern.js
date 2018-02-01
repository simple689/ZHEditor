function widgetDockPattern(_$7R) {
    if (_$7R) this._$lk = new Array(4);
    this._$iZ = false;
    this._$hA = null;
    this._$it = true;
    this._$is = false;
    this._$iW = false;
    this.subPatternList = new Array(4);
    this._$lo = null;
    this._$je = 0;
    this._$jg = null;
    this._$hC = new Array(4);
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
        this.subPatternList[k] = new _$0O();
        this._$lm[k] = new _$5h();
        this._$jF[k] = 0;
        this._$hC[k] = null;
    }
    this._$lz = new Rect();
    this.width = 0;
    this.height = 0;
    this._$ii = _$7R;
    widgetDockPattern._$6l(this._$lz);
    this._$jg = null;
    this._$jd = 0;
    this._$lz.left = -4000;
    this._$lz.right = -4000;
    {
        var i;
        for (i = 0; i < 4; i++) {
        }
    }
};
widgetDockPattern._$3S = 0;
widgetDockPattern._$6M = 1;
widgetDockPattern._$5k = 2;
widgetDockPattern._$s = 3;
widgetDockPattern._$3T = 0;
widgetDockPattern._$6N = 1;
widgetDockPattern._$5l = 2;
widgetDockPattern._$t = 3;
widgetDockPattern._$3k = 0;
widgetDockPattern._$3m = 1;
widgetDockPattern._$3l = 2;
widgetDockPattern._$3j = 3;
widgetDockPattern._$3p = 0;
widgetDockPattern._$3r = 1;
widgetDockPattern._$3q = 2;
widgetDockPattern._$3n = 3;
widgetDockPattern._$3o = 4;
widgetDockPattern._$3e = 0;
widgetDockPattern._$3d = 1;
widgetDockPattern._$3i = 2;
widgetDockPattern._$3h = 3;
widgetDockPattern._$3g = 4;
widgetDockPattern._$3f = 5;
widgetDockPattern._$3c = 6;
widgetDockPattern._$3b = 7;
widgetDockPattern._$5Z = 6;
widgetDockPattern._$45 = 16;
widgetDockPattern._$A = 12;
widgetDockPattern._$61 = 0;
widgetDockPattern._$62 = 1;
widgetDockPattern._$l2 = null;
widgetDockPattern._$k1 = 0;
widgetDockPattern._$ib = true;
widgetDockPattern.prototype._$3z = function () {
    this.width = 0;
    this.height = 0;
    this._$lz.left = -4000;
    this._$lz.right = -4000;
    this._$iW = false;
};
widgetDockPattern.prototype._$4b = function (_$mO) {
    if (this._$ii) {
        var i;
        for (i = 0; i < 4; i++) {
            if (this._$lk[i] != null) this._$5M(i, _$mO);
        }
    }
    var _$ps = null;
    var i;
    for (i = 0; i < 4; i++) {
        var _$e1 = this.subPatternList[i].subPattern.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            _$ps = this.subPatternList[i].subPattern.panelList[j];
            var _$8G = this._$4a(_$ps._$kI, _$mO);
            if (_$8G) return;
        }
    }
};
widgetDockPattern.prototype._$4a = function (_$mS, _$mO) {
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
        if (_$mO._$id) _$mS._$aS |= widgetDockFloatPanel._$B;
        if (_$mO._$iv) _$mS._$aS |= widgetDockFloatPanel._$2T;
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
                    _$ol._$aP = widgetDockFloatPanel._$1D;
                    if (_$mO._$kB == this) _$ol._$aP |= widgetDockFloatPanel._$1A;
                    if (_$mO._$k0 == widgetDockFloatPanel._$6W) {
                        _$ol._$aP |= widgetDockFloatPanel._$1C;
                        _$ol._$aP &= ~widgetDockFloatPanel._$1D;
                    }
                    _$ol._$aP |= _$mO._$kc << 12;
                    if (_$mO._$id) _$ol._$aP |= widgetDockFloatPanel._$B;
                    if (_$mO._$kj < 0) _$mO._$kj = 0;
                    _$ol._$aP |= _$mO._$kj << 7;
                    if (_$mO._$iv) _$ol._$aP |= widgetDockFloatPanel._$2T;
                    if (_$mO._$k0 != widgetDockFloatPanel._$4C) _$ol._$aP |= widgetDockFloatPanel._$2U;
                    return true;
                }
            }
        } else {
            if (_$mS._$of == _$mO && _$mO != null) {
                var _$aS = widgetDockFloatPanel._$1D;
                if (_$mO._$kB == this) _$aS |= widgetDockFloatPanel._$1A;
                if (_$mO._$k0 == widgetDockFloatPanel._$6W) {
                    _$aS |= widgetDockFloatPanel._$1C;
                    _$aS &= ~widgetDockFloatPanel._$1D;
                }
                if (_$mO._$iv) {
                    _$aS |= widgetDockFloatPanel._$2T;
                }
                _$aS |= _$mO._$kc << 12;
                if (_$mO._$id) _$aS |= widgetDockFloatPanel._$B;
                if (_$mO._$kj < 0) _$mO._$kj = 0;
                _$aS |= _$mO._$kj << 7;
                if (_$mO._$k0 != widgetDockFloatPanel._$4C) _$aS |= widgetDockFloatPanel._$2U;
                _$mS._$e(_$mO.getPanelTitle(), _$aS, _$mO._$lt, _$mO._$lK.cx, _$mO._$lK.cy);
                return true;
            }
        }
    }
    return false;
};
widgetDockPattern.prototype._$6f = function (_$dn, element, left, top, width, height) {
    this._$hC[_$dn] = element;
    _$m8._$6e(element, left, top, width, height);
    this._$5z();
};
widgetDockPattern.prototype._$01 = function () {
};
widgetDockPattern._$pq = function (_$mO) {
};
widgetDockPattern.prototype._$6E = function (_$9f, _$cB, _$cQ, _$d8) {
    _$cQ[0] = 0;
    _$d8[0] = 0;
    {
        var _$e6 = _$cB;
        var _$pU;
        var _$dM;
        var _$e1;
        var _$9l = _$9f;
        while (_$e6 != 0) {
            _$e1 = this.subPatternList[_$9l].subPattern.getPanelNum();
            var j;
            for (j = _$e1 - 1; j >= 0; j--) {
                _$pU = this.subPatternList[_$9l].subPattern.panelList[j];
                if (_$9l == widgetDockPattern._$3k || _$9l == widgetDockPattern._$3l) _$dM = _$pU.rect.right - _$pU.rect.left - 2 * widgetDockPanel._$kt; else _$dM = _$pU.rect.bottom - _$pU.rect.top - 2 * widgetDockPanel._$kt;
                if (_$pU._$iX && _$pU._$k9 == 0 && (_$dM != 0)) {
                    if (_$cB > 0) {
                        if (_$dM > _$e6) _$dM = _$e6;
                    } else {
                        if (_$dM >= -_$e6) _$dM = -_$e6;
                        _$dM = -_$dM;
                    }
                    _$e6 -= _$dM;
                    this._$k(_$pU, _$dM);
                    if (_$9l == widgetDockPattern._$3l || _$9l == widgetDockPattern._$3j) _$d8[0] += _$dM; else _$cQ[0] += _$dM;
                }
                if (_$e6 == 0) break;
            }
            if (_$9l == widgetDockPattern._$3l || _$9l == widgetDockPattern._$3j) break;
            _$9l += 2;
            _$cB = -_$e6;
            _$e6 = _$cB;
        }
    }
};
widgetDockPattern.prototype.setSize = function (iw, ih) {
    this.width = iw;
    this.height = ih;
};
widgetDockPattern.prototype._$mB = function (iw, ih) {
    var width, height;
    height = ih;
    width = iw;
    if ((this.width == 0) && (this.height == 0)) {
        this.width = width;
        this.height = height;
        return 1;
    }
    if (this.width != width) {
        this._$4n(widgetDockPattern._$3l, 0, this.width - width);
        this._$6x(widgetDockPattern._$3m, -32767, 32767);
        this._$6x(widgetDockPattern._$3j, -32767, 32767);
    }
    if (this.height != height) {
        this._$4n(widgetDockPattern._$3j, 0, this.height - height);
        this._$6x(widgetDockPattern._$3k, -32767, 32767);
        this._$6x(widgetDockPattern._$3l, -32767, 32767);
    }
    var _$qu = new Rect();
    _$qu.left = this._$2K(widgetDockPattern._$3k, widgetDockPattern._$5k);
    _$qu.top = this._$2K(widgetDockPattern._$3m, widgetDockPattern._$s);
    _$qu.right = this._$2K(widgetDockPattern._$3l, widgetDockPattern._$3S);
    _$qu.bottom = this._$2K(widgetDockPattern._$3j, widgetDockPattern._$6M);
    var _$ev = new Array(1);
    var _$fM = new Array(1);
    if (_$qu.right < _$qu.left) {
        this._$6E(widgetDockPattern._$3k, _$qu.right - _$qu.left, _$ev, _$fM);
        _$qu.left += _$ev[0];
        _$qu.right += _$fM[0];
    }
    if (_$qu.bottom < _$qu.top) {
        this._$6E(widgetDockPattern._$3m, _$qu.bottom - _$qu.top, _$ev, _$fM);
        _$qu.top += _$ev[0];
        _$qu.bottom += _$fM[0];
    }
    this.width = width;
    this.height = height;
    this._$lz.setRect(_$qu);
    if (this._$jg != null) {
        var _$sY = this._$jg;
        _$m8._$6e(_$sY, _$qu.left, _$qu.top, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top);
    }
    return 1;
};
widgetDockPattern.prototype._$72 = function (_$mS) {
    if (!_$mS._$8y) {
        while (_$mS != null) {
            _$mS._$8y = false;
            _$mS = _$mS._$oV;
        }
    }
};
widgetDockPattern.prototype._$2F = function (_$cD, _$nx) {
    var _$e1 = this.subPatternList[_$cD].subPattern.getPanelNum();
    var _$ps;
    var i;
    for (i = 0; i < _$e1; i++) {
        _$ps = this.subPatternList[_$cD].subPattern.panelList[i];
        if (_$ps == _$nx) {
            return i;
        }
    }
    return 0xffffffff;
};
widgetDockPattern.prototype._$5H = function (_$n5, _$ng) {
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
    if (this.subPatternList[_$n5._$j0].subPattern.getPanelNum() < 1) return;
    var _$ps = this.subPatternList[_$n5._$j0].subPattern.panelList[_$n5._$jr];
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
        if (_$n5._$j0 == widgetDockPattern._$3k || _$n5._$j0 == widgetDockPattern._$3l) {
            _$dt = widgetDockPattern._$2A(_$qu);
            _$9y = widgetDockPattern._$3m;
        } else {
            _$dt = widgetDockPattern._$2z(_$qu);
            _$9y = widgetDockPattern._$3k;
            _$qu.top = _$qu.left;
            _$qu.bottom = _$qu.right;
        }
        this._$4n(_$n5._$j0, _$n5._$jr + 1, -(_$dt + _$ps._$cf()));
        if (_$n5._$j0 == widgetDockPattern._$3l || _$n5._$j0 == widgetDockPattern._$3j) _$dt += _$ps._$cf(); else _$dt = -(_$dt + _$ps._$cf());
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
widgetDockPattern.prototype._$55 = function (_$mS, _$n5, _$sg, _$99, _$dg) {
    if (_$dg < 0) return;
    var _$st = _$mS;
    if (_$st == null) return;
    var _$pj = this.subPatternList[_$99].subPattern.panelList[_$dg];
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
        this.subPatternList[_$99].subPattern.panelList[_$dg]._$kI = null;
        this.subPatternList[_$99].subPattern._$5G(_$dg);
        var i;
        for (i = _$dg; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
            _$pU = this.subPatternList[_$99].subPattern.panelList[i];
            var pb = _$pU._$kI;
            this._$6m(pb, i);
        }
        var _$oF;
        if (_$dg == 0) _$oF = null; else _$oF = this.subPatternList[_$99].subPattern.panelList[_$dg - 1];
        if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) {
            this._$5L(widgetDockPattern._$3m, _$pj, _$oF);
            this._$5L(widgetDockPattern._$3j, _$pj, _$oF);
        } else {
            this._$5L(widgetDockPattern._$3k, _$pj, _$oF);
            this._$5L(widgetDockPattern._$3l, _$pj, _$oF);
        }
    }
};
widgetDockPattern.prototype._$54 = function (_$mS, _$99, _$9e) {
    var _$nQ = _$mS._$of;
    var _$pj = this.subPatternList[_$99].subPattern.panelList[_$9e];
    _$mS._$56(null);
    _$nQ._$kA = _$mS;
    _$53(_$nQ);
};
widgetDockPattern.prototype._$53 = function (_$n5) {
    this._$55(_$n5._$kA, _$n5, null, _$n5._$j0, _$n5._$jr);
};
widgetDockPattern.prototype._$6m = function (_$mS, _$cN) {
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
widgetDockPattern.prototype._$5L = function (_$99, _$n0, _$nk) {
    var _$ps;
    var i;
    for (i = 0; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        if (_$ps._$kR == _$n0) _$ps._$kR = _$nk;
        if (_$ps._$l8 == _$n0) _$ps._$l8 = _$nk;
    }
};
widgetDockPattern.prototype._$2j = function (_$99) {
    var _$eY = this.subPatternList[_$99].subPattern.getPanelNum();
    if (_$eY == 0) return null; else return this.subPatternList[_$99].subPattern.panelList[_$eY - 1];
};
widgetDockPattern.prototype._$19 = function (_$mS, _$99, _$9e) {
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
                _$nm = this.subPatternList[_$99].subPattern.panelList[_$9e - 1];
                _$ps._$kR = _$nm._$kR;
                _$ps._$l8 = _$nm._$l8;
            } else {
                _$ps._$kR = null;
                _$ps._$l8 = null;
            }
        } else {
            if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) {
                _$ps._$kR = this._$2j(widgetDockPattern._$3m);
                _$ps._$l8 = this._$2j(widgetDockPattern._$3j);
            } else {
                _$ps._$kR = this._$2j(widgetDockPattern._$3k);
                _$ps._$l8 = this._$2j(widgetDockPattern._$3l);
            }
            _$9e = this.subPatternList[_$99].subPattern.getPanelNum();
        }
        _$ps._$kI = _$mS;
        _$ps._$ah(this, _$99);
        widgetDockPattern._$6l(_$qu);
        this.subPatternList[_$99].subPattern._$4(_$ps, _$9e);
        this._$6m(_$mS, _$9e);
        var _$pU;
        var i;
        for (i = _$9e + 1; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
            _$pU = this.subPatternList[_$99].subPattern.panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        this._$6m(_$mS, _$9e);
        _$ps = this.subPatternList[_$99].subPattern.panelList[_$9e];
        if (_$ps._$05()) {
            _$ps._$ah(this, _$99);
            widgetDockPattern._$6l(_$qu);
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
        if (_$99 == widgetDockPattern._$3j) {
            this._$W(widgetDockPattern._$3k, _$ps, _$nm, false);
            this._$W(widgetDockPattern._$3l, _$ps, _$nm, false);
        } else if (_$99 == widgetDockPattern._$3m) {
            this._$W(widgetDockPattern._$3k, _$ps, _$nm, true);
            this._$W(widgetDockPattern._$3l, _$ps, _$nm, true);
        } else if (_$99 == widgetDockPattern._$3k) {
            this._$W(widgetDockPattern._$3m, _$ps, _$nm, true);
            this._$W(widgetDockPattern._$3j, _$ps, _$nm, true);
        } else {
            this._$W(widgetDockPattern._$3m, _$ps, _$nm, false);
            this._$W(widgetDockPattern._$3j, _$ps, _$nm, false);
        }
    }
    if (_$8U) {
        var iw, ih;
        if ((_$ps.rect.left != _$ps.rect.right) && (_$ps.rect.left >= 0)) {
            iw = _$ps.rect.right - _$ps.rect.left;
            ih = _$ps.rect.bottom - _$ps.rect.top;
        } else {
            iw = widgetDockFloatPanel._$lL.cx;
            ih = widgetDockFloatPanel._$lL.cy;
        }
        this._$4m(_$ps, _$99, _$9e, true, iw, ih, _$mS, true);
    }
};
widgetDockPattern.prototype._$4m = function (_$ps, _$99, _$9e, _$7Q, _$d2, _$d0, _$mS, _$83) {
    {
        var _$qb = new Rect();
        this.getWindowRect(_$qb);
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
        if ((_$99 == widgetDockPattern._$3k) || (_$99 == widgetDockPattern._$3l)) _$9t = false;
        var _$9r;
        var _$gK, _$el, _$dt;
        if (_$83 && _$ps != null && (_$ps instanceof _$6R) && !(_$ps instanceof _$58)) {
            if ((_$9e - 1) >= 0) _$oB = this.subPatternList[_$99].subPattern.panelList[_$9e - 1];
            ior = this._$2I(_$99, _$oB);
            if (!_$9t) _$9r = widgetDockPattern._$3m; else _$9r = widgetDockPattern._$3k;
            ilt = this._$2I(_$9r, _$ps._$kR);
            irb = this._$2I((_$9r + 2), _$ps._$l8);
            if (!_$9t) {
                _$ey = _$qb.top + ilt;
                _$eB = _$qb.bottom - irb;
                _$el = _$eB - _$ey;
                _$qu.top = _$ey;
                _$gK = 0;
                if (_$99 == widgetDockPattern._$3k) {
                    _$qu.left = ior;
                } else {
                    _$qu.left = _$qb.right - ior - _$gK;
                }
                _$qu.right = _$qu.left;
                _$qu.bottom = _$qu.top + _$el;
            } else {
                _$ey = _$qb.left + ilt;
                _$eB = _$qb.right - irb;
                _$gK = _$eB - _$ey;
                _$el = 0;
                _$qu.left = _$ey;
                if (_$99 == widgetDockPattern._$3m) {
                    _$qu.top = ior;
                } else {
                    _$qu.top = _$qb.bottom - ior - _$el;
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
        if ((_$99 == widgetDockPattern._$3k) || (_$99 == widgetDockPattern._$3l)) {
            _$fJ = this._$lz.right - this._$lz.left - (_$qu.right + _$ps._$cf());
            if (_$fJ < 0) {
                if (_$7Q) {
                    _$fJ += _$qu.right;
                    if (_$fJ < 0) _$fJ = 0;
                    _$qu.right = _$fJ;
                    _$fJ = this._$lz.right - this._$lz.left - (_$qu.right + _$ps._$cf());
                }
                if (_$fJ < 0) {
                    this._$6E(widgetDockPattern._$3k, _$fJ, _$ev, _$fM);
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
        if ((_$9e - 1) >= 0) _$oB = this.subPatternList[_$99].subPattern.panelList[_$9e - 1];
        ior = this._$2I(_$99, _$oB);
        if (!_$9t) _$9r = widgetDockPattern._$3m; else _$9r = widgetDockPattern._$3k;
        ilt = this._$2I(_$9r, _$ps._$kR);
        irb = this._$2I((_$9r + 2), _$ps._$l8);
        if (!_$9t) {
            _$ey = _$qb.top + ilt;
            _$eB = _$qb.bottom - irb;
            _$el = _$eB - _$ey;
            _$qu.top = _$ey;
            _$qt.top = _$ey;
            _$qt.bottom = _$qt.top + _$el;
            _$gK = widgetDockPattern._$2A(_$qu);
            if (_$83) _$dt = _$gK + _$gj; else _$dt = _$d2 + _$gj;
            if (_$99 == widgetDockPattern._$3k) {
                _$qu.left = ior;
                _$qt.left = ior + _$gK;
            } else {
                _$qu.left = _$qb.right - ior - _$gK;
                _$qt.left = _$qb.right - ior - _$gK - _$gj;
            }
            _$qt.right = _$qt.left + _$gj;
        } else {
            _$ey = _$qb.left + ilt;
            _$eB = _$qb.right - irb;
            _$gK = _$eB - _$ey;
            _$el = widgetDockPattern._$2z(_$qu);
            _$qu.left = _$ey;
            _$qt.left = _$ey;
            _$qt.right = _$qt.left + _$gK;
            if (_$83) _$dt = _$el + _$gj; else _$dt = _$d0 + _$gj;
            if (_$99 == widgetDockPattern._$3m) {
                _$qu.top = ior;
                _$qt.top = ior + _$el;
            } else {
                _$qu.top = _$qb.bottom - ior - _$el;
                _$qt.top = _$qb.bottom - ior - _$el - _$gj;
            }
            _$qt.bottom = _$qt.top + _$gj;
        }
        _$qu.right = _$qu.left + _$gK;
        _$qu.bottom = _$qu.top + _$el;
        if (_$mS != null) {
            if (_$mS._$of != null) {
                _$ps._$qy(_$mS._$of, _$qu);
            } else {
                this._$6v(_$mS, _$qu, widgetDockPattern._$3m);
                this._$6v(_$mS, _$qu, widgetDockPattern._$3k);
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
        if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) _$9y = widgetDockPattern._$3m; else _$9y = widgetDockPattern._$3k;
        this._$6x(_$9y, _$ey, _$eB);
        this._$6x((_$9y + 2), _$ey, _$eB);
        this._$h();
    }
};
widgetDockPattern.prototype._$6O = function (_$n5) {
    var _$ps;
    if (_$n5._$kA != null || _$n5._$jr != 0xffffffff) return;
    var _$gl = _$n5._$j0;
    var _$o6 = new _$F();
    _$n5._$kA = _$o6;
    _$o6._$8y = false;
    _$o6._$of = _$n5;
    _$ps = _$n5._$ag(null);
    if (_$gl == widgetDockPattern._$3k || _$gl == widgetDockPattern._$3l) {
        _$ps._$kR = this._$2j(widgetDockPattern._$3m);
        _$ps._$l8 = this._$2j(widgetDockPattern._$3j);
    } else {
        _$ps._$kR = this._$2j(widgetDockPattern._$3k);
        _$ps._$l8 = this._$2j(widgetDockPattern._$3l);
    }
    _$ps.rect.left = _$ps.rect.top = 0;
    _$ps.rect.right = _$n5._$lJ.cx;
    _$ps.rect.bottom = _$n5._$lJ.cy;
    _$n5._$jr = this.subPatternList[_$gl].subPattern.getPanelNum();
    _$ps._$kI = _$o6;
    this.subPatternList[_$gl].subPattern._$4(_$ps, _$n5._$jr);
    var _$pU;
    var i;
    for (i = _$n5._$jr + 1; i < this.subPatternList[_$gl].subPattern.getPanelNum(); i++) {
        _$pU = this.subPatternList[_$gl].subPattern.panelList[i];
        _$6m(_$pU._$kI, i);
    }
};
widgetDockPattern.prototype._$18 = function (_$n5, _$oP) {
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
                _$nm = this.subPatternList[_$gl].subPattern.panelList[_$n5._$jr - 1];
                _$ps._$kR = _$nm._$kR;
                _$ps._$l8 = _$nm._$l8;
            } else {
                _$ps._$kR = null;
                _$ps._$l8 = null;
            }
        } else {
            if (_$gl == widgetDockPattern._$3k || _$gl == widgetDockPattern._$3l) {
                _$ps._$kR = this._$2j(widgetDockPattern._$3m);
                _$ps._$l8 = this._$2j(widgetDockPattern._$3j);
            } else {
                _$ps._$kR = this._$2j(widgetDockPattern._$3k);
                _$ps._$l8 = this._$2j(widgetDockPattern._$3l);
            }
            _$n5._$jr = this.subPatternList[_$gl].subPattern.getPanelNum();
        }
        _$ps._$kI = _$o6;
        _$ps._$ah(this, _$n5._$j0);
        widgetDockPattern._$6l(_$qu);
        this.subPatternList[_$gl].subPattern._$4(_$ps, _$n5._$jr);
        var _$pU;
        var i;
        for (i = _$n5._$jr + 1; i < this.subPatternList[_$gl].subPattern.getPanelNum(); i++) {
            _$pU = this.subPatternList[_$gl].subPattern.panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        if (_$n5._$kA._$20() == true) {
            _$n5._$kA._$2(_$n5);
            return;
        }
        _$n5._$kA._$of = _$n5;
        _$ps = this.subPatternList[_$gl].subPattern.panelList[_$n5._$jr];
        if (_$ps._$05()) {
            _$ps._$ah(this, _$n5._$j0);
            widgetDockPattern._$6l(_$qu);
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
        if (_$gl == widgetDockPattern._$3j) {
            this._$W(widgetDockPattern._$3k, _$ps, _$nm, false);
            this._$W(widgetDockPattern._$3l, _$ps, _$nm, false);
        } else if (_$gl == widgetDockPattern._$3m) {
            this._$W(widgetDockPattern._$3k, _$ps, _$nm, true);
            this._$W(widgetDockPattern._$3l, _$ps, _$nm, true);
        } else if (_$gl == widgetDockPattern._$3k) {
            this._$W(widgetDockPattern._$3m, _$ps, _$nm, true);
            this._$W(widgetDockPattern._$3j, _$ps, _$nm, true);
        } else {
            this._$W(widgetDockPattern._$3m, _$ps, _$nm, false);
            this._$W(widgetDockPattern._$3j, _$ps, _$nm, false);
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
widgetDockPattern.prototype._$W = function (_$99, _$ni, _$nm, _$81) {
    var s;
    for (s = 0; s < this.subPatternList[_$99].subPattern.getPanelNum(); s++) {
        var _$pU = this.subPatternList[_$99].subPattern.panelList[s];
        if (_$81 && _$pU._$kR == _$nm) {
            _$pU._$kR = _$ni;
        } else if (!_$81 && _$pU._$l8 == _$nm) {
            _$pU._$l8 = _$ni;
        }
    }
};
widgetDockPattern.prototype._$0c = function (_$88) {
    if (!this._$iZ) return;
    if (this._$hA == null) {
        var _$t5 = "div";
        if (widgetDockController.isHasCanvasContext) _$t5 = "canvas";
        this._$hA = _$m8._$0z(_$t5, widgetDockController.rootDivId);
        this._$hA.style.border = "0px solid";
        this._$hA.style.zIndex = 7890;
    }
    if (_$88) {
        var _$qu = this._$lz;
        this._$hA.style.visibility = "visible";
        _$m8._$6e(this._$hA, _$qu.left, _$qu.top, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top);
    } else {
        this._$hA.style.visibility = "hidden";
    }
};
widgetDockPattern.prototype._$h = function () {
    var _$qu = new Rect();
    _$qu.left = this._$2K(widgetDockPattern._$3k, widgetDockPattern._$5k);
    _$qu.top = this._$2K(widgetDockPattern._$3m, widgetDockPattern._$s);
    _$qu.right = this._$2K(widgetDockPattern._$3l, widgetDockPattern._$3S);
    _$qu.bottom = this._$2K(widgetDockPattern._$3j, widgetDockPattern._$6M);
    this._$lz.setRect(_$qu);
    if (this._$jg != null) {
        var _$sY = this._$jg;
        _$m8._$6e(_$sY, _$qu.left, _$qu.top, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top);
    }
};
widgetDockPattern.prototype._$5F = function () {
    var i;
    for (i = 0; i < 4; i++) {
        this.subPatternList[i].subPattern._$5R();
    }
};
widgetDockPattern.prototype._$k = function (_$mV, _$cu) {
    var _$qm = new Rect();
    _$mV._$le._$25(_$qm);
    var _$9w;
    var _$ey;
    var _$eB;
    var _$9y = _$mV._$le._$j1;
    var _$g1 = this._$2F(_$9y, _$mV);
    if (_$9y == widgetDockPattern._$3k || _$9y == widgetDockPattern._$3l) {
        _$9w = widgetDockPattern._$3m;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
    } else {
        _$9w = widgetDockPattern._$3k;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
    }
    var _$q8 = new Rect();
    _$mV._$kI._$22(_$q8);
    if (_$9y == widgetDockPattern._$3k) _$q8.right += _$cu; else if (_$9y == widgetDockPattern._$3l) _$q8.left += _$cu; else if (_$9y == widgetDockPattern._$3m) _$q8.bottom += _$cu; else _$q8.top += _$cu;
    _$mV._$le._$4q(_$cu);
    this._$6v(_$mV._$kI, _$q8, _$9y);
    _$mV._$5q();
    if (_$9y == widgetDockPattern._$3l || _$9y == widgetDockPattern._$3j) _$cu = -_$cu;
    this._$4n(_$9y, _$g1 + 1, _$cu);
    this._$6x(_$9w, _$ey, _$eB);
    this._$6x((_$9w + 2), _$ey, _$eB);
};
widgetDockPattern.prototype._$4j = function (_$mS, _$ct, _$9c) {
    var _$qu = new Rect();
    var _$ql = new Rect();
    var plt = new Align();
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) this._$4j(_$mS._$od, _$ct, _$9c);
        if (_$mS._$pr != null) this._$4j(_$mS._$pr, _$ct, _$9c);
        if ((_$mS._$od != null) && (_$mS._$pr != null) && (!_$mS._$od._$8y) && (!_$mS._$pr._$8y)) {
            _$mS._$oy._$25(_$qu);
            plt.x = _$qu.left;
            plt.y = _$qu.top;
            if (_$9c == widgetDockPattern._$3k || _$9c == widgetDockPattern._$3l) {
                if (_$9c == widgetDockPattern._$3k) plt.x = _$qu.left + _$ct; else plt.x = _$qu.left - _$ct;
            } else {
                plt.x = _$qu.left;
                if (_$9c == widgetDockPattern._$3m) plt.y = _$qu.top + _$ct; else plt.y = _$qu.top - _$ct;
            }
            _$ql.left = plt.x;
            _$ql.top = plt.y;
            _$ql.right = plt.x + widgetDockPattern._$2A(_$qu);
            _$ql.bottom = plt.y + widgetDockPattern._$2z(_$qu);
            _$mS._$oy._$6q(_$ql);
        }
        return;
    }
    if (!_$mS._$8y) {
        _$mS._$of._$25(_$qu);
        plt.x = _$qu.left;
        plt.y = _$qu.top;
        if (_$mS._$of._$j0 == widgetDockPattern._$3k || _$mS._$of._$j0 == widgetDockPattern._$3l) {
            if (_$mS._$of._$j0 == widgetDockPattern._$3k) plt.x = _$qu.left + _$ct; else plt.x = _$qu.left - _$ct;
        } else {
            plt.x = _$qu.left;
            if (_$mS._$of._$j0 == widgetDockPattern._$3m) plt.y = _$qu.top + _$ct; else plt.y = _$qu.top - _$ct;
        }
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + widgetDockPattern._$2A(_$qu);
        _$ql.bottom = plt.y + widgetDockPattern._$2z(_$qu);
        _$mS._$of._$6q(_$ql);
    }
};
widgetDockPattern.prototype._$4n = function (_$99, _$dg, _$cY) {
    var _$ps;
    var i;
    for (i = _$dg; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        _$ps._$4i(this, _$99, _$dg, _$cY);
    }
};
widgetDockPattern.prototype._$4o = function (_$99, _$dg, _$cG, _$cY) {
    var _$ps;
    var i;
    for (i = _$dg; i <= _$cG; i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        _$ps._$4i(this, _$99, _$dg, _$cY);
    }
};
widgetDockPattern.prototype._$2K = function (_$99, _$9a) {
    var _$ex;
    var _$qb = new Rect();
    this.getWindowRect(_$qb);
    if (_$9a == widgetDockPattern._$3S) _$ex = _$qb.right - this._$jF[2]; else if (_$9a == widgetDockPattern._$5k) _$ex = _$qb.left + this._$jF[0]; else if (_$9a == widgetDockPattern._$6M) _$ex = _$qb.bottom - this._$jF[3]; else _$ex = _$qb.top + this._$jF[1];
    var _$ps;
    var _$q7 = new Rect();
    var i;
    for (i = 0; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        if (_$ps._$iX) {
            _$ps._$le._$25(_$q7);
            if (_$9a == widgetDockPattern._$3S) _$ex = _$q7.left; else if (_$9a == widgetDockPattern._$5k) _$ex = _$q7.right; else if (_$9a == widgetDockPattern._$6M) {
                _$ex = _$q7.top;
            } else _$ex = _$q7.bottom;
        }
    }
    return _$ex;
};
widgetDockPattern.prototype._$6v = function (_$mS, _$q1, _$9c) {
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
                if ((_$9c == widgetDockPattern._$3T) || (_$9c == widgetDockPattern._$5l)) _$gD = widgetDockPattern._$2A(_$q1) - widgetDockPanel._$kt; else _$gD = widgetDockPattern._$2z(_$q1) - widgetDockPanel._$kt;
                var id2 = (_$gD / (1 + _$mS._$br));
                var id1 = _$gD - id2;
                id1 = parseInt(id1);
                id2 = parseInt(id2);
                rc1.setRect(_$q1);
                rc2.setRect(_$q1);
                if ((_$9c == widgetDockPattern._$3T) || (_$9c == widgetDockPattern._$5l)) {
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
                if ((_$9c == widgetDockPattern._$3T) || (_$9c == widgetDockPattern._$5l)) {
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
widgetDockPattern._$5y = function (_$cm, _$q6) {
    widgetDockPattern._$6o(_$cm, null, _$q6.left, _$q6.top, widgetDockPattern._$2A(_$q6), widgetDockPattern._$2z(_$q6), 0);
};
widgetDockPattern.prototype.getWindowRect = function (rect) {
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
widgetDockPattern.prototype._$5p = function (_$ps, _$dg, _$99, _$dX) {
    if (_$dX != 0) {
        if (_$dX > 0) {
            if (_$99 == widgetDockPattern._$3m || _$99 == widgetDockPattern._$3j) this._$4m(_$ps, _$99, _$dg, false, 0, _$dX, null, false); else this._$4m(_$ps, _$99, _$dg, false, _$dX, 0, null, false);
        } else {
            var _$9y;
            this._$4n(_$99, _$dg + 1, _$dX);
            var ilt, irb;
            var _$qt = new Rect();
            _$qt.setRect(_$ps.rect);
            if (_$99 == widgetDockPattern._$3l || _$99 == widgetDockPattern._$3k) {
                _$9y = widgetDockPattern._$3m;
                ilt = _$ps.rect.top;
                irb = _$ps.rect.bottom;
                if (_$99 == widgetDockPattern._$3k) {
                    _$qt.left = _$ps.rect.right;
                } else _$qt.left = _$ps.rect.left;
                _$qt.right = _$qt.left;
            } else {
                _$9y = widgetDockPattern._$3k;
                ilt = _$ps.rect.left;
                irb = _$ps.rect.right;
                if (_$99 == widgetDockPattern._$3m) {
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
widgetDockPattern.prototype._$6x = function (_$99, _$cT, _$cU) {
    var _$ps;
    var _$gK, _$el;
    var _$qb = new Rect();
    var _$qt = new Rect();
    var _$9p = 0;
    this.getWindowRect(_$qb);
    var i;
    for (i = 0; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        var _$dX = new Array(1);
        _$dX[0] = 0;
        _$ps._$6u(this, _$qb, _$99, _$cT, _$cU, _$dX);
        this._$5p(_$ps, i, _$99, _$dX[0]);
    }
};
widgetDockPattern.prototype._$2J = function (_$99, _$cv, _$cE) {
    var _$e1 = this.subPatternList[_$99].subPattern.getPanelNum();
    if (_$cE == 0xffffffff || _$cE > _$e1) _$cE = _$e1;
    var _$ps;
    var ire = 0;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        if (_$ps._$iX) {
            if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) ire += widgetDockPattern._$2A(_$ps.rect); else ire += widgetDockPattern._$2z(_$ps.rect);
            ire += _$ps._$cf();
        }
    }
    return ire;
};
widgetDockPattern.prototype._$2I = function (_$99, _$nd) {
    var ire = this._$jF[_$99];
    if (_$nd == null) return ire;
    var _$ps;
    var i;
    for (i = 0; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
        if (_$ps._$iX) {
            if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) ire += widgetDockPattern._$2A(_$ps.rect); else ire += widgetDockPattern._$2z(_$ps.rect);
            ire += _$ps._$le._$cf();
        }
        if (_$ps == _$nd) break;
    }
    return ire;
};
widgetDockPattern.prototype._$2d = function (_$mX, _$99, _$nx, _$nz) {
    var rcf = new Rect();
    rcf.setRect(_$nx.rect);
    if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3m) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.top;
    } else if (_$99 == widgetDockPattern._$3j) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.bottom - _$nz.cy;
    } else {
        _$mX._$kn = rcf.right - _$nz.cx;
        _$mX._$kq = rcf.top;
    }
};
widgetDockPattern._$2c = function (_$mX, _$q3, _$nz) {
    _$mX._$kn = _$q3.left;
    _$mX._$kq = _$q3.top;
    if (_$mX._$j1 == widgetDockPattern._$3l) {
        _$mX._$kn = _$q3.right - _$nz.cx;
    } else if (_$mX._$j1 == widgetDockPattern._$3j) {
        _$mX._$kq = _$q3.bottom - _$nz.cy;
    }
};
widgetDockPattern.prototype._$1h = function (_$mX, _$nz, _$gK, _$el, _$qe, _$pC) {
    if (_$mX._$kx._$kB != this) return true;
    if (widgetDockPattern._$5f(_$qe, _$pC) && _$mX._$it) {
        var _$qh = new Rect();
        _$mX._$kx._$hy._$2P(_$qh);
        var _$8n;
        _$8n = widgetDockPattern._$5f(_$qh, _$pC);
        var _$8Q;
        _$8Q = _$mX._$kx._$kA._$3v(_$pC);
        if (_$8n || _$8Q) {
            _$mX._$ka = _$mX._$jr;
            _$mX._$ky = _$mX._$kA;
            _$mX._$j1 = _$mX._$j0;
            _$nz.cx = _$gK;
            _$nz.cy = _$el;
            widgetDockPattern._$2c(_$mX, _$qe, _$nz);
            if (_$8Q) {
                _$mX._$kx._$31(_$pC);
                _$mX._$iC = true;
            }
            _$mX._$j2 = 0xff;
            return false;
        } else {
            if ((_$mX._$kx._$jy != widgetDockFloatPanel._$0X) || (_$mX._$kx._$kA._$o5 == null) || (_$mX._$kx._$kA._$o5 != null && _$mX._$kx._$kA._$o5._$i6.length < 2)) {
                _$mX._$j1 = 0xff;
                return true;
            } else {
                _$qe.top = _$qh.bottom;
                _$qe.bottom -= _$G._$6J;
                var _$9i = widgetDockPattern._$m(_$qe, _$pC);
                if (_$9i != 0xff) {
                    _$9i = parseInt((_$9i - 1) / 2);
                    _$mX._$ka = _$mX._$jr;
                    _$mX._$ky = _$mX._$kA;
                    if (_$9i == widgetDockPattern._$3k || _$9i == widgetDockPattern._$3l) {
                        _$nz.cx = _$mX._$kx._$lK.cx;
                        if (_$nz.cx >= (_$qe.right - _$qe.left)) _$nz.cx = _$nz.cx / 2;
                        _$nz.cy = _$qe.bottom - _$qe.top;
                    } else {
                        _$nz.cy = _$mX._$kx._$lK.cy;
                        if (_$nz.cy > (_$qe.bottom - _$qe.top)) _$nz.cy = _$nz.cy / 2;
                    }
                    if (_$9i == widgetDockPattern._$3k || _$9i == widgetDockPattern._$3m) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.top;
                    } else if (_$9i == widgetDockPattern._$3j) {
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
widgetDockPattern.prototype._$R = function (_$mX, _$mU, _$pC, _$nz) {
    if (!this._$is) return 0xff;
    var _$qf = new Rect();
    this.getWindowRect(_$qf);
    _$qf.right = _$qf.right - _$qf.top;
    _$qf.bottom = _$qf.bottom - _$qf.top;
    _$qf.left = 0;
    _$qf.top = 0;
    _$qf.left += this._$jF[0];
    _$qf.right -= this._$jF[2];
    _$qf.top += this._$jF[1];
    _$qf.bottom -= this._$jF[3];
    var _$qe = new Rect();
    _$qe.setRect(_$mX._$lC);
    var _$el = widgetDockPattern._$2z(_$qe);
    var _$gK = widgetDockPattern._$2A(_$qe);
    var _$gk = _$gK < _$el ? _$gK : _$el;
    _$mX._$iM = false;
    _$nz.cx = _$gK;
    _$nz.cy = _$el;
    if (!this._$1h(_$mX, _$nz, _$gK, _$el, _$qe, _$pC)) return _$mX._$j1;
    var _$9j = widgetDockPattern._$m(_$qf, _$pC);
    _$mX._$ka = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0;
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
        if (!widgetDockPattern._$5f(rcs, _$pC)) return 0xff;
    }
    if (!bme && _$9j != 0xff && ((_$9j + 1) % 2 == 0)) {
        _$mX._$j1 = parseInt((_$9j / 2));
        if (_$o4 != null) _$mU._$2G(_$nz, _$gk, _$qf, true); else {
            _$qf.left = _$qf.top = 0;
            _$qf.right = _$nz.cx;
            _$qf.bottom = _$nz.cy;
            _$mU._$2G(_$nz, _$gk, _$qf, false);
        }
        _$mU._$67(_$gw, _$o4, parseInt((_$9j / 2)));
    } else {
        _$9j = widgetDockPattern._$m(rcs, _$pC);
        if (_$9j != 0xff) {
            _$mX._$j1 = parseInt((_$9j / 2));
            _$mU._$2G(_$nz, _$gk, this._$lz, false);
        }
        if (_$9j != 0xff && ((_$9j + 1) % 2 == 0)) {
            _$mX._$ka = 0xffffffff;
            _$mX._$ky = null;
            _$mX._$j1 = parseInt((_$9j / 2));
            _$mX._$j2 = parseInt((_$9j / 2));
            widgetDockPattern._$2c(_$mX, rcs, _$nz);
        } else _$mX._$j1 = 0xff;
        _$mX._$iM = true;
    }
    return _$mX._$j1;
};
widgetDockPattern.prototype._$02 = function (_$mX, _$99, _$pC, _$nz, _$dk, _$oQ, _$d1) {
    if (this.subPatternList[_$99] == null) {
        return 0xff;
    }
    var _$ps;
    var _$9m = 0xff;
    var _$9z = 0xff;
    _$oQ[0] = null;
    var _$fZ = new Array(1);
    var _$e1 = this.subPatternList[_$99].subPattern.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        _$d1[0] = -1;
        _$ps = this.subPatternList[_$99].subPattern.panelList[i];
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
                        var _$oG = this.subPatternList[_$99].subPattern.panelList[j];
                        if (_$oG._$iX) {
                            _$ps = _$oG;
                            _$8G = true;
                            break;
                        }
                    }
                    if (_$8G) this._$2d(_$mX, _$99, _$ps, _$nz); else {
                        var _$ql = new Rect();
                        _$ql.setRect(_$ps.rect);
                        if (_$99 == widgetDockPattern._$3m) {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.bottom;
                        } else if (_$99 == widgetDockPattern._$3k) {
                            _$mX._$kn = _$ql.right;
                            _$mX._$kq = _$ql.top;
                        } else if (_$99 == widgetDockPattern._$3l) {
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
widgetDockPattern._$m = function (_$nv, _$pC) {
    var _$9j = 0xff;
    if (widgetDockPattern._$5f(_$nv, _$pC)) {
        if ((_$pC.x - _$nv.left) > 0 && (_$pC.x - _$nv.left) <= widgetDockPattern._$A) _$9j = widgetDockPattern._$3d; else if ((_$pC.y - _$nv.top) > 0 && (_$pC.y - _$nv.top) <= widgetDockPattern._$A) _$9j = widgetDockPattern._$3h; else if ((_$pC.x - _$nv.right) < 0 && (_$pC.x - _$nv.right) >= -widgetDockPattern._$A) _$9j = widgetDockPattern._$3f; else if ((_$pC.y - _$nv.bottom) < 0 && (_$pC.y - _$nv.bottom) >= -widgetDockPattern._$A) _$9j = widgetDockPattern._$3b;
    } else {
        if ((_$pC.y > _$nv.top) && (_$pC.y < _$nv.bottom)) {
            if ((_$pC.x - _$nv.left) < 0 && (_$pC.x - _$nv.left) >= -widgetDockPattern._$A) _$9j = widgetDockPattern._$3e; else if ((_$pC.x - _$nv.right) > 0 && (_$pC.x - _$nv.right) <= widgetDockPattern._$A) _$9j = widgetDockPattern._$3g;
        } else if ((_$pC.x > _$nv.left) && (_$pC.x < _$nv.right)) {
            if ((_$pC.y - _$nv.top) < 0 && (_$pC.y - _$nv.top) >= -widgetDockPattern._$A) _$9j = widgetDockPattern._$3i; else if ((_$pC.y - _$nv.bottom) > 0 && (_$pC.y - _$nv.bottom) <= widgetDockPattern._$A) _$9j = widgetDockPattern._$3c;
        }
    }
    return _$9j;
};
widgetDockPattern.prototype._$1Z = function (_$mX, _$mT, _$pC, _$99, _$nz) {
    _$99[0] = this._$R(_$mX, _$mT, _$pC, _$nz);
    if (_$99[0] > 3 || _$99[0] < 0) return null;
    return this;
};
widgetDockPattern.prototype._$1 = function (_$mN) {
    var _$8P = false;
    if (_$mN != null && _$mN._$kB != null && !_$mN._$kB._$ii && this._$lo != null && this._$lo._$kB == _$mN._$kB) _$8P = true;
    if (this._$lo != null && this._$lo != _$mN) {
        this._$lo._$r6(false, !_$8P);
    }
    _$mN._$r6(true, !_$8P);
    this._$lo = _$mN;
};
widgetDockPattern.prototype._$bG = function () {
    return this._$he;
};
widgetDockPattern.prototype._$bI = function () {
};
widgetDockPattern.prototype._$rd = function (com) {
};
widgetDockPattern.prototype.Add = function (com) {
};
widgetDockPattern.prototype._$d = function (com) {
    var i = 0;
};
widgetDockPattern.prototype._$5E = function (com) {
};
widgetDockPattern.prototype._$2g = function () {
};
widgetDockPattern._$2A = function (rc) {
    return (rc.right - rc.left);
};
widgetDockPattern._$2z = function (rc) {
    return (rc.bottom - rc.top);
};
widgetDockPattern._$5s = function (com, rc) {
    var pt = new Align();
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
widgetDockPattern._$25 = function (com, rc) {
};
widgetDockPattern._$2P = function (com, rc) {
    var i = 0;
};
widgetDockPattern._$5f = function (_$qe, _$pC) {
    if ((_$pC.x > _$qe.left) && (_$pC.x < _$qe.right) && (_$pC.y > _$qe.top) && (_$pC.y < _$qe.bottom)) return true;
    return false;
};
widgetDockPattern._$6o = function (com, _$qd, _$cS, _$do, _$dq, _$cM, _$cI) {
    _$cS = 0;
};
widgetDockPattern._$0j = function (_$cm, pt) {
    var _$pG = _$cm._$c0();
    pt.x = pt.x + _$pG.x;
    pt.y = pt.y + _$pG.y;
};
widgetDockPattern._$6a = function (_$cm, pt) {
    var _$pG = _$cm._$c0();
    pt.x = pt.x - _$pG.x;
    pt.y = pt.y - _$pG.y;
};
widgetDockPattern._$6l = function (_$qu) {
    _$qu.left = _$qu.right = _$qu.top = _$qu.bottom = 0;
};
widgetDockPattern._$6d = function (_$ef) {
};
widgetDockPattern._$5r = function (_$cr, _$qf) {
    var _$pL = _$cr._$c0();
    _$qf.left = _$qf.left + _$pL.x;
    _$qf.right = _$qf.right + _$pL.x;
    _$qf.top += _$pL.y;
    _$qf.bottom += _$pL.y;
};
widgetDockPattern.prototype._$1P = function (_$mO, _$df, _$sh, mainPattern, _$cD, _$dg, _$mS, _$nr) {
    var _$ps;
    _$mS[0] = _$mS[1] = null;
    var _$eQ = new Array(1);
    var i;
    for (i = 0; i < 4; i++) {
        var _$e1 = this.subPatternList[i].subPattern.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            _$ps = this.subPatternList[i].subPattern.panelList[j];
            var _$pO = this._$1J(_$mO, _$sh, _$ps._$kI, _$eQ, _$nr);
            if (_$pO != null && _$ps._$k9 == _$df) {
                if (_$df != 0) {
                    _$cD[0] = i;
                    _$dg[0] = j;
                    _$mS[0] = _$pO;
                    mainPattern[0] = this;
                    return _$eQ[0];
                }
                if ((_$eQ[0] & widgetDockFloatPanel._$1A) > 0) {
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
                return _$eQ[0] & widgetDockFloatPanel._$1D;
            }
        }
    }
    if (_$df != 0) return _$eQ[0] & widgetDockFloatPanel._$1D;
    this._$1O(_$mO, _$sh, _$mS, _$cD, _$dg, mainPattern, _$eQ);
    return _$eQ[0] & widgetDockFloatPanel._$1D;
};
widgetDockPattern.prototype._$1O = function (_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX) {
    _$mO._$l0._$1O(_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX);
};
widgetDockPattern.prototype._$1J = function (_$mO, _$sh, _$mS, _$cX, _$nr) {
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
widgetDockPattern.prototype._$2e = function (_$n7, _$7L) {
    var i;
    var d;
    for (i = 0; i < 4; i++) {
        _$n7[i] = 0;
        if (this._$hC[i] != null) {
            if (i == 1 || i == 3) {
                d = parseInt(this._$hC[i].style.height);
                _$n7[i] = d;
            } else {
                _$n7[i] = parseInt(this._$hC[i].style.width);
            }
        }
    }
};
widgetDockPattern.prototype._$rb = function (_$nM) {
    this._$jg = _$nM;
    this._$h();
};
widgetDockPattern.prototype._$qF = function (_$a0) {
    if (_$a0 == null) return;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$hC[i] == _$a0) {
            this._$hC[i] = null;
            this._$5z();
            this._$h();
            return;
        }
    }
    if (this._$jg != null) {
    }
};
widgetDockPattern.prototype.addFixedPanel = function (element, type) {
    if (widgetDockController.browserType == browserType.IE && widgetDockController.ieVersion <= 7) {
        this._$iZ = true;
    } else if (element instanceof HTMLIFrameElement) {
        if (widgetDockController._$06(element.id)) {
            this._$iZ = true;
        }
    }
    var _$eu, _$gC, width, height;
    var rc = new Rect();
    this.getWindowRect(rc);
    if (type == widgetDockPattern._$3o) {
        this._$rb(element);
        return;
    } else if (type == widgetDockPattern._$3p) {
        _$eu = 0;
        _$gC = this._$jF[1];
        height = rc.bottom - rc.top - (this._$jF[1] + this._$jF[3]);
        width = element.style.width;
        width = parseInt(width, "px");
        this._$6f(0, element, _$eu, _$gC, width, height);
    } else if (type == widgetDockPattern._$3q) {
        width = element.style.width;
        width = parseInt(width, "px");
        _$eu = this._$lz.right - width;
        this._$6f(2, element, _$eu, this._$jF[1], width, rc.bottom - rc.top - this._$jF[1] - this._$jF[3]);
    } else if (type == widgetDockPattern._$3r) {
        height = element.style.height;
        height = parseInt(height, "px");
        this._$6f(1, element, 0, 0, rc.right - rc.left, height);
    } else if (type == widgetDockPattern._$3n) {
        height = element.style.height;
        height = parseInt(height, "px");
        this._$6f(3, element, 0, rc.bottom - rc.top - height, rc.right - rc.left, height);
        if (this._$hC[widgetDockPattern._$3p] != null) {
            var _$sQ = this._$hC[widgetDockPattern._$3p];
            var left = _$m8._$2k(_$sQ);
            var top = _$m8._$2M(_$sQ);
            var width = parseInt(_$sQ.style.width, "px");
            var height = parseInt(_$sQ.style.height, "px") - height;
            _$m8._$6e(_$sQ, left, top, width, height);
        }
        if (this._$hC[widgetDockPattern._$3q] != null) {
            var _$sQ = this._$hC[widgetDockPattern._$3q];
            var left = _$m8._$2k(_$sQ);
            var top = _$m8._$2M(_$sQ);
            var width = parseInt(_$sQ.style.width, "px");
            var height = parseInt(_$sQ.style.height, "px") - height;
            _$m8._$6e(_$sQ, left, top, width, height);
        }
    }
    this._$h();
};
widgetDockPattern.prototype._$5z = function () {
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
                this._$6x(widgetDockPattern._$3k, -32767, 32767);
                this._$6x(widgetDockPattern._$3l, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(widgetDockPattern._$3m, -_$du, _$eE, _$fA);
                }
            }
        }
        for (k = 0; k < 3; k = k + 2) {
            if ((_$gG[k] - this._$jF[k]) != 0) {
                _$e6 = _$gG[k] - this._$jF[k];
                _$du = _$e6 - (this._$lz.right - this._$lz.left);
                this._$jF[k] = _$gG[k];
                this._$4n(k, 0, _$e6);
                this._$6x(widgetDockPattern._$3m, -32767, 32767);
                this._$6x(widgetDockPattern._$3j, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(widgetDockPattern._$3k, -_$du, _$eE, _$fA);
                }
            }
        }
    }
};
widgetDockPattern.prototype._$rB = function (_$mO, _$88) {
    _$mO._$rB(_$88);
};
widgetDockPattern.prototype._$s8 = function (_$mO) {
    _$mO._$s8();
};
widgetDockPattern.prototype._$s7 = function (_$mO) {
    _$mO._$s7();
};
widgetDockPattern.prototype._$sa = function (_$mO, _$pC) {
    return _$mO._$sa(_$pC);
};
widgetDockPattern.prototype._$sb = function (_$rR) {
    _$rR._$sb();
};
widgetDockPattern.prototype._$s9 = function (_$rR, _$ts, _$h1) {
    return _$rR._$s9(_$ts, _$h1);
};
widgetDockPattern.prototype._$41 = function (_$na) {
    var rc;
    {
        var _$eu, _$gC, _$fL, _$dU;
        _$eu = parseInt(_$na._$qw());
        _$gC = parseInt(_$na._$qw());
        _$fL = parseInt(_$na._$qw());
        _$dU = parseInt(_$na._$qw());
        if (this._$ii) {
        } else {
            this._$40(_$eu, _$gC, _$fL, _$dU);
        }
        var _$gh = 1;
        if (this._$ii) _$gh = 4;
        var _$sj;
        var _$rV;
        var _$gI;
        var i;
        for (i = 0; i < _$gh; i++) {
            this._$lm[i]._$i0._$5R();
            var _$fV = 0;
            while (true) {
                _$sj = "SEC" + _$fV;
                _$rV = _$na._$qw();
                if (_$rV == _$sj) {
                    var _$pg = new _$M();
                    _$pg._$g6 = 0;
                    this._$lm[i]._$i0._$4(_$pg, _$fV);
                    _$gI = parseInt(_$na._$qw());
                    _$pg._$gK = _$gI;
                    _$gI = parseInt(_$na._$qw());
                    _$pg._$el = _$gI;
                    _$gI = parseInt(_$na._$qw());
                    _$pg._$eF = _$gI;
                    if (_$pg._$eF < 0) _$pg._$eF = -1;
                    _$gI = parseInt(_$na._$qw());
                    _$pg._$fB = _$gI;
                    if (_$pg._$fB < 0) _$pg._$fB = -1;
                    _$pg._$kI = new _$F();
                    _$gI = parseInt(_$na._$qw());
                    if (_$gI == 0) {
                        _$rV = _$na._$qw();
                        if (_$rV == "ROOTBLOCK") {
                            this._$3Z(_$na, _$pg._$kI);
                        } else break;
                    } else if (_$gI == 1 || _$gI == 2) {
                        _$rV = _$na._$qw();
                        if (_$rV == "ROOTBLOCK") {
                            _$pg._$g6 = _$gI;
                            this._$42(_$na, _$pg._$kI);
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
            var _$ee = this.subPatternList[i].subPattern.getPanelNum();
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
                        _$pf = this._$lm[_$gl + 2 * j]._$i0.panelList[k];
                        if (_$8S) _$pf._$eF = _$pf._$eF + _$ee; else _$pf._$fB = _$pf._$fB + _$ee;
                    }
                }
            }
        }
        for (i = 0; i < _$gh; i++) {
            var _$e1 = this._$lm[i]._$i0.getPanelNum();
            var _$e3 = this.subPatternList[i].subPattern.getPanelNum();
            var j;
            for (j = 0; j < _$e1; j++) {
                var _$pf = this._$lm[i]._$i0.panelList[j];
                _$pf._$eq = _$e3;
                var _$ps = null;
                if (_$pf._$g6 == 0) _$ps = new widgetDockPanel(); else if (_$pf._$g6 == 1) _$ps = new _$6R(); else _$ps = new _$4c();
                _$pf._$o2 = _$ps;
                _$ps.rect.left = _$ps.rect.top = 0;
                _$ps.rect.right = _$pf._$gK;
                _$ps.rect.bottom = _$pf._$el;
                _$ps._$iX = false;
                _$ps._$kI = _$pf._$kI;
                this.subPatternList[i].subPattern._$4(_$ps, _$e3);
                _$e3++;
            }
        }
        for (i = 0; i < _$gh; i++) {
            var _$e1 = this._$lm[i]._$i0.getPanelNum();
            var _$ou, _$p6;
            if (i == 0 || i == 2) {
                _$ou = this.subPatternList[1];
                _$p6 = this.subPatternList[3];
            } else {
                _$ou = this.subPatternList[0];
                _$p6 = this.subPatternList[2];
            }
            if (this._$ii) {
                var j;
                for (j = 0; j < _$e1; j++) {
                    var _$pf = this._$lm[i]._$i0.panelList[j];
                    if (_$pf._$eF != -1) _$pf._$o2._$kR = _$ou.subPattern.panelList[_$pf._$eF]; else _$pf._$o2._$kR = null;
                    if (_$pf._$fB != -1) _$pf._$o2._$l8 = _$p6.subPattern.panelList[_$pf._$fB]; else _$pf._$o2._$l8 = null;
                }
            }
        }
    }
};
widgetDockPattern.prototype._$0b = function (_$ns, _$cC, _$nt) {
    if (_$nt == null) return;
    var _$dH = _$ns;
    var _$dD = new Array(4);
    var i;
    var _$e9 = _$cC;
    for (i = 0; i < _$e9; i++) _$dD[i] = this.subPatternList[i].subPattern.getPanelNum();
    var _$fz = _$nt.getPanelNum();
    var nn;
    for (nn = 0; nn < _$fz; nn++) {
        var _$si = _$nt.panelList[nn].getTitle();
        var _$8G = false;
        for (i = 0; i < _$e9; i++) {
            if (_$8G) break;
            var s;
            for (s = _$dH[i]; s < _$dD[i]; s++) {
                var pbf = this._$1N(_$si, this.subPatternList[i].subPattern.panelList[s]._$kI);
                if (pbf != null) {
                    _$8G = true;
                    this._$55(pbf, null, _$si, i, s);
                    _$dD[i] = this.subPatternList[i].subPattern.getPanelNum();
                    break;
                }
            }
        }
    }
};
widgetDockPattern.prototype._$1N = function (_$sh, _$mS) {
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
widgetDockPattern.prototype._$78 = function (_$cD, _$cZ, _$81, _$84) {
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
        var _$pf = _$py._$i0.panelList[_$eq];
        if (_$81) _$pt = _$pf._$eF; else _$pt = _$pf._$fB;
        if ((_$pt) > (_$eY - 1)) _$pt = (_$eY - 1);
        if ((_$pt) < _$eZ) _$pt = _$eZ;
        if (_$81) _$pf._$eF = _$pt; else _$pf._$fB = _$pt;
        if ((_$pt) != _$eZ) {
            var _$ei = (_$pt) - _$eZ;
            var s;
            for (s = 0; s < _$ei; s++) {
                var _$oA = _$oC._$i0.panelList[_$eZ + 1 + s];
                if (_$84) _$oz = _$oA._$eF; else _$oz = _$oA._$fB;
                _$oz = _$eq - 1;
                if (_$84) _$oA._$eF = _$oz; else _$oA._$fB = _$oz;
            }
            _$eZ = _$pt;
        } else {
            if ((_$eZ + 1) < _$eY) {
                var _$oA = _$oC._$i0.panelList[_$eZ + 1];
                if (_$84) _$oz = _$oA._$eF; else _$oz = _$oA._$fB;
                if (_$oz < _$eq) _$oz = _$eq;
                if (_$oz > (_$e1 - 1)) _$oz = _$e1 - 1;
                if (_$84) _$oA._$eF = _$oz; else _$oA._$fB = _$oz;
                var _$ei = (_$oz) - _$eq;
                var s;
                for (s = 0; s < _$ei; s++) {
                    var _$ps = _$py._$i0.panelList[_$eq + 1 + s];
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
        var _$oA = _$oC._$i0.panelList[i];
        if (_$84) _$oA._$eF = _$eq - 1; else _$oA._$fB = _$eq - 1;
    }
};
widgetDockPattern.prototype._$42 = function (_$na, _$mS) {
};
widgetDockPattern.prototype._$3Z = function (_$na, _$mS) {
    var _$h2;
    var dw;
    _$h2 = parseInt(_$na._$qw());
    _$mS._$br = (_$h2 / 1000.0);
    _$mS._$8y = true;
    var _$h3 = 0;
    var _$rV = _$na._$qw();
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
    _$rV = _$na._$qw();
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
    _$h2 = parseInt(_$na._$qw());
    if ((_$h2 & 0x01) == 1) _$mS._$90 = true; else _$mS._$90 = false;
    _$mS._$9y = ((_$h2 >> 8) & 0xff);
    _$mS._$9j = ((_$h2 >> 16) & 0xff);
};
widgetDockPattern.prototype._$43 = function (_$na, _$mS) {
};
widgetDockPattern.prototype._$3X = function (_$na, _$mS) {
    var _$gs = parseInt(_$na._$qw());
    var i;
    for (i = 0; i < _$gs; i++) {
        var _$rZ = _$na._$qw();
        var _$aS = parseInt(_$na._$qw());
        var pt = new Align();
        var iX, iY;
        iX = 0;
        iY = 0;
        if (this._$ii) {
            pt.x = parseInt(_$na._$qw());
            pt.y = parseInt(_$na._$qw());
            iX = parseInt(_$na._$qw());
            iY = parseInt(_$na._$qw());
        }
        _$mS._$e(_$rZ, _$aS, pt, iX, iY);
    }
};
widgetDockPattern.prototype._$4T = function (_$og) {
    if (widgetDockPattern._$l2 != null) {
        widgetDockPattern._$l2._$au();
        widgetDockPattern._$l2 = null;
    }
    widgetDockPattern._$l2 = _$og;
    widgetDockPattern._$k1 = 0;
};
widgetDockPattern.prototype._$0a = function (e) {
    if (widgetDockPattern._$l2 != null) {
        widgetDockPattern._$l2._$0a(e);
    }
};
widgetDockPattern.prototype._$09 = function (e) {
    if (widgetDockPattern._$l2 != null) {
        widgetDockPattern._$l2._$09(e);
    }
};
widgetDockPattern.prototype._$rA = function (_$r4) {
    _$i3 = _$r4;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$lk[i] != null) this._$lk[i]._$5A();
    }
};
widgetDockPattern.prototype._$8 = function (_$99, _$mO, _$7V) {
    var _$g1 = 0xFFFFFFFF;
    if (_$7V) _$g1 = 0; else if (this._$lk[_$99] == null) {
        var _$e1 = this.subPatternList[_$99].subPattern.getPanelNum();
        alert("Sd");
        var _$ps;
        var i;
        for (i = 0; i < _$e1; i++) {
            _$ps = this.subPatternList[_$99].subPattern.panelList[i];
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
widgetDockPattern.prototype._$j = function (_$99) {
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
widgetDockPattern.prototype._$5M = function (_$99, _$mO) {
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
        if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) {
            _$dt = _$qu.right - _$qu.left;
            _$9y = widgetDockPattern._$3m;
        } else {
            _$dt = _$qu.bottom - _$qu.top;
            _$9y = widgetDockPattern._$3k;
            _$qu.top = _$qu.left;
            _$qu.bottom = _$qu.right;
        }
        var _$e5 = this._$2F(_$99, _$ps);
        this._$4n(_$99, _$e5 + 1, -(_$dt + _$ps._$cf()));
        if (_$99 == widgetDockPattern._$3l || _$99 == widgetDockPattern._$3j) _$dt += _$ps._$cf(); else _$dt = -(_$dt + _$ps._$cf());
        _$ps.setVisible(false);
        this._$6x(_$9y, _$qu.top, _$qu.bottom);
        this._$6x((_$9y + 2), _$qu.top, _$qu.bottom);
        this._$h();
    }
    var _$g1 = this._$2F(_$99, _$ps);
    var _$pU;
    var _$pj = this._$lk[_$99];
    this._$lk[_$99] = null;
    this.subPatternList[_$99].subPattern._$5G(_$g1);
    var i;
    for (i = _$g1; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
        _$pU = this.subPatternList[_$99].subPattern.panelList[i];
        var pb = _$pU._$kI;
        this._$6m(pb, i);
    }
    var _$oF;
    if (_$g1 == 0) _$oF = null; else _$oF = this.subPatternList[_$99].subPattern.panelList[_$g1 - 1];
    if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) {
        this._$5L(widgetDockPattern._$3m, _$pj, _$oF);
        this._$5L(widgetDockPattern._$3j, _$pj, _$oF);
    } else {
        this._$5L(widgetDockPattern._$3k, _$pj, _$oF);
        this._$5L(widgetDockPattern._$3l, _$pj, _$oF);
    }
};
widgetDockPattern.prototype._$9 = function (_$99, _$dg, iWH) {
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
                _$nm = this.subPatternList[_$99].subPattern.panelList[_$dg - 1];
                _$ps._$kR = _$nm._$kR;
                _$ps._$l8 = _$nm._$l8;
            } else {
                _$ps._$kR = null;
                _$ps._$l8 = null;
            }
        } else {
            if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) {
                _$ps._$kR = this._$2j(widgetDockPattern._$3m);
                _$ps._$l8 = this._$2j(widgetDockPattern._$3j);
            } else {
                _$ps._$kR = this._$2j(widgetDockPattern._$3k);
                _$ps._$l8 = this._$2j(widgetDockPattern._$3l);
            }
            _$dg = this.subPatternList[_$99].subPattern.getPanelNum();
        }
        _$ps._$kI = null;
        _$ps._$ah(this, _$99);
        this.subPatternList[_$99].subPattern._$4(_$ps, _$dg);
        var _$pU;
        var i;
        for (i = _$dg + 1; i < this.subPatternList[_$99].subPattern.getPanelNum(); i++) {
            _$pU = this.subPatternList[_$99].subPattern.panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        _$ps = this._$lk[_$99];
        _$ps._$ah(this, _$99);
    }
    if (_$8T) {
        if (_$99 == widgetDockPattern._$3j) {
            this._$W(widgetDockPattern._$3k, _$ps, _$nm, false);
            this._$W(widgetDockPattern._$3l, _$ps, _$nm, false);
        } else if (_$99 == widgetDockPattern._$3m) {
            this._$W(widgetDockPattern._$3k, _$ps, _$nm, true);
            this._$W(widgetDockPattern._$3l, _$ps, _$nm, true);
        } else if (_$99 == widgetDockPattern._$3k) {
            this._$W(widgetDockPattern._$3m, _$ps, _$nm, true);
            this._$W(widgetDockPattern._$3j, _$ps, _$nm, true);
        } else {
            this._$W(widgetDockPattern._$3m, _$ps, _$nm, false);
            this._$W(widgetDockPattern._$3j, _$ps, _$nm, false);
        }
    }
    this._$4m(_$ps, _$99, _$dg, false, iWH, iWH, null, true);
    _$ps._$iX = true;
};
widgetDockPattern.prototype._$5A = function (_$98) {
    var i;
    for (i = 0; i < 4; i++) {
        if (this._$lk[i] != null) this._$lk[i]._$5A();
    }
};
widgetDockPattern.prototype._$5N = function () {
    if (widgetDockPattern._$l2 != null) {
        widgetDockPattern._$l2._$au();
        widgetDockPattern._$l2 = null;
    }
};
widgetDockPattern.prototype._$6t = function (_$mO) {
    if (_$mO._$kj > widgetDockFloatPanel._$q) this._$lk[_$mO._$j0]._$5b(_$mO); else {
        this._$lk[_$mO._$kj]._$5b(_$mO);
    }
};
widgetDockPattern.prototype._$34 = function (_$rU, iID, _$pB) {
};
widgetDockPattern.prototype._$0f = function (_$nF, _$nU, _$nz) {
    var _$nm = null;
    var _$ot = null;
    var _$p5 = null;
    if (_$nF._$ka > 0 && _$nF._$ka != 0xffffffff) {
        _$nm = this.subPatternList[_$nU[0]].subPattern.panelList[_$nF._$ka - 1];
        _$ot = _$nm._$kR;
        _$p5 = _$nm._$l8;
    }
    var _$oY;
    var _$oZ;
    var _$eH;
    var _$fD;
    if ((_$nU[0] == widgetDockPattern._$3m) || (_$nU[0] == widgetDockPattern._$3j)) {
        _$oY = this._$lk[widgetDockPattern._$3k];
        _$oZ = this._$lk[widgetDockPattern._$3l];
        _$eH = widgetDockPattern._$3k;
        _$fD = widgetDockPattern._$3l;
    } else {
        _$oY = this._$lk[widgetDockPattern._$3m];
        _$oZ = this._$lk[widgetDockPattern._$3j];
        _$eH = widgetDockPattern._$3m;
        _$fD = widgetDockPattern._$3j;
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
            if ((_$nU[0] == widgetDockPattern._$3m) || (_$nU[0] == widgetDockPattern._$3j)) {
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
widgetDockPattern._$2L = function (d, _$ck, _$se, _$7z) {
};
widgetDockPattern._$6y = function (_$cl, _$qT, _$fE, _$db, _$cy, _$dc, Cxt) {
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
                _$m8._$2L(dt, _$cl, _$r0, Cxt);
                if (dt.width > _$fE) {
                    return _$r0;
                }
            }
            if (_$8p) {
                var _$ew = _$qT.length;
                for (j = 0; j < _$ew; j++) {
                    var vc = _$qT.slice(0, j + 1) + _$r0;
                    _$m8._$2L(dt, _$cl, vc, Cxt);
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
