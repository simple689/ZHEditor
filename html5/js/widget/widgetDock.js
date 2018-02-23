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

function _$F() {
    this._$fG = 0;
    this._$aS = 0xffffffff;
    this._$oV = null;
    this._$od = null;
    this._$pr = null;
    this._$9y = EnumPatternPositionType.Top;
    this._$9j = EnumPatternPositionType.Bottom;
    this._$8y = false;
    this._$90 = false;
    this._$br = 1.0;
    this._$oy = null;
    this._$of = null;
    this._$sl = "";
    this._$l1 = null;
    this.prc = new WidgetDockRect();
    this._$e8 = 0;
    this._$eb = 0;
    this._$rO = new _$5Y();
    this._$pl = false;
    this._$o5 = null;
};
_$F.prototype._$e = function (_$qY, _$aP, _$pz, _$cJ, _$cK) {
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
_$F.prototype._$5w = function (mainPattern, panelPositionType) {
    if (this._$oy != null) {
        if (this._$oy._$kG != null) {
            this._$oy._$kG._$5E(this._$oy);
        }
        this._$oy._$kG = mainPattern;
        mainPattern.Add(this._$oy);
    }
    if (this._$od != null && !this._$od._$8y) {
        this._$od._$5w(mainPattern, panelPositionType);
    }
    if (this._$pr != null && !this._$pr._$8y) {
        this._$pr._$5w(mainPattern, panelPositionType);
    } else if ((this._$pr == null) && (this._$pr == null) && !this._$8y && (this._$of != null)) {
        this._$of._$kA = this;
        this._$of._$j0 = panelPositionType;
        this._$of._$kB = mainPattern;
        if (this._$o5 != null && this._$o5._$i6.length > 1) {
            if (this._$l1 == null) this._$l1 = new Array(0);
            var _$e1 = this._$o5._$i6.length;
            var i;
            for (i = 0; i < _$e1; i++) {
                var _$nQ = this._$o5._$i6[i]._$mO;
                var _$ol = new _$57();
                _$nQ._$j0 = panelPositionType;
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
    if (_$9f == EnumPatternPositionType.Left || _$9f == EnumPatternPositionType.Right) {
        this._$od._$9j = EnumPatternPositionType.Left;
        this._$pr._$9j = EnumPatternPositionType.Right;
    } else {
        this._$od._$9j = EnumPatternPositionType.Top;
        this._$pr._$9j = EnumPatternPositionType.Bottom;
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
        var _$qs = new WidgetDockRect();
        _$n4._$22(_$qs);
        var _$gd = _$qs.bottom - _$qs.top;
        var _$ge = _$qs.right - _$qs.left;
        if ((this._$9y == EnumPatternPositionType.Top || this._$9y == EnumPatternPositionType.Bottom) && _$gd > 0 && (_$gd > _$nj.cy) && _$nj.cy > 0) {
            if (_$nf._$9j == EnumPatternPositionType.Top) {
                this._$br = 1.0 * _$nj.cy / (_$gd - _$nj.cy);
            } else {
                this._$br = 1.0 * (_$gd - _$nj.cy) / _$nj.cy;
            }
        } else if ((this._$9y == EnumPatternPositionType.Left || this._$9y == EnumPatternPositionType.Right) && _$ge > 0 && (_$ge > _$nj.cx) && _$nj.cx > 0) {
            if (_$nf._$9j == EnumPatternPositionType.Left) this._$br = 1.0 * _$nj.cx / (_$ge - _$nj.cx); else this._$br = 1.0 * (_$ge - _$nj.cx) / _$nj.cx;
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
    var rc = new WidgetDockRect();
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
    var rc = new WidgetDockRect();
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
    var rcf = new WidgetDockRect();
    var rcs = new WidgetDockRect();
    var _$qu = new WidgetDockRect();
    rcf.left = rcf.right = rcs.left = rcs.right = -6000;
    _$nn[0] = this._$od;
    _$nG[0] = this._$pr;
    if (this._$od != null) this._$od._$22(rcf);
    if (this._$pr != null) this._$pr._$22(rcs);
    if ((_$nG[0] != null) && ((_$nG[0]._$9j == EnumPatternPositionType.Top) || (_$nG[0]._$9j == EnumPatternPositionType.Left))) {
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
    if (this._$pr != null && (this._$pr._$9j == EnumPatternPositionType.Left || this._$pr._$9j == EnumPatternPositionType.Top)) {
        _$pQ = this._$pr;
        _$pT = this._$od;
    }
    var rcs = new WidgetDockRect();
    if (_$pQ != null && _$pT == null) {
        _$pQ._$22(_$q1);
        return;
    } else if (_$pQ == null && _$pT != null) {
        _$pT._$22(_$q1);
        return;
    } else if (_$pQ != null && _$pT != null) {
        _$pQ._$22(_$q1);
        _$pT._$22(rcs);
        if (this._$9y == EnumPatternPositionType.Top || this._$9y == EnumPatternPositionType.Bottom) {
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
        var _$qg = new WidgetDockRect();
        _$qg = _$mX._$lC;
        var _$q7 = new WidgetDockRect();
        var _$9m = 0xff;
        if (this._$of == null) {
            return _$9m;
        }
        this._$of._$25(_$q7);
        var iw = _$q7.right - _$q7.left;
        var ih = _$q7.bottom - _$q7.top;
        var _$gN = _$q7.left;
        var _$gT = _$q7.top;
        var _$qh = new WidgetDockRect();
        this._$of._$hy._$2P(_$qh);
        if (this._$of._$jm >= WidgetDockFloatPanel._$0) {
            if (this._$of._patternMain._$jv == WidgetDockController._$0R || this._$of._$j0 == EnumPatternPositionType.Left || this._$of._$j0 == EnumPatternPositionType.Right) {
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
                if (parseInt(_$9z / 2) == EnumPatternPositionType.Bottom || parseInt(_$9z / 2) == EnumPatternPositionType.Top) {
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
    this._$lz = new WidgetDockRect();
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
};
WidgetDockPatternBase._$3S = 0;
WidgetDockPatternBase._$6M = 1;
WidgetDockPatternBase._$5k = 2;
WidgetDockPatternBase._$s = 3;
WidgetDockPatternBase._$3T = 0;
WidgetDockPatternBase._$6N = 1;
WidgetDockPatternBase._$5l = 2;
WidgetDockPatternBase._$t = 3;
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
    var panel = null;
    var i;
    for (i = 0; i < 4; i++) {
        var _$e1 = this._patternPositionList[i]._patternSub.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            panel = this._patternPositionList[i]._patternSub._panelList[j];
            var _$8G = this._$4a(panel._$kI, _$mO);
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
        _$mS.prc = new WidgetDockRect();
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
                if (_$9l == EnumPatternPositionType.Left || _$9l == EnumPatternPositionType.Right) _$dM = _$pU.rect.right - _$pU.rect.left - 2 * widgetDockPanel._$kt; else _$dM = _$pU.rect.bottom - _$pU.rect.top - 2 * widgetDockPanel._$kt;
                if (_$pU._$iX && _$pU._$k9 == 0 && (_$dM != 0)) {
                    if (_$cB > 0) {
                        if (_$dM > _$e6) _$dM = _$e6;
                    } else {
                        if (_$dM >= -_$e6) _$dM = -_$e6;
                        _$dM = -_$dM;
                    }
                    _$e6 -= _$dM;
                    this._$k(_$pU, _$dM);
                    if (_$9l == EnumPatternPositionType.Right || _$9l == EnumPatternPositionType.Bottom) _$d8[0] += _$dM; else _$cQ[0] += _$dM;
                }
                if (_$e6 == 0) break;
            }
            if (_$9l == EnumPatternPositionType.Right || _$9l == EnumPatternPositionType.Bottom) break;
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
        this._$4n(EnumPatternPositionType.Right, 0, this.width - width);
        this._$6x(EnumPatternPositionType.Top, -32767, 32767);
        this._$6x(EnumPatternPositionType.Bottom, -32767, 32767);
    }
    if (this.height != height) {
        this._$4n(EnumPatternPositionType.Bottom, 0, this.height - height);
        this._$6x(EnumPatternPositionType.Left, -32767, 32767);
        this._$6x(EnumPatternPositionType.Right, -32767, 32767);
    }
    var _$qu = new WidgetDockRect();
    _$qu.left = this._$2K(EnumPatternPositionType.Left, WidgetDockPatternBase._$5k);
    _$qu.top = this._$2K(EnumPatternPositionType.Top, WidgetDockPatternBase._$s);
    _$qu.right = this._$2K(EnumPatternPositionType.Right, WidgetDockPatternBase._$3S);
    _$qu.bottom = this._$2K(EnumPatternPositionType.Bottom, WidgetDockPatternBase._$6M);
    var _$ev = new Array(1);
    var _$fM = new Array(1);
    if (_$qu.right < _$qu.left) {
        this._$6E(EnumPatternPositionType.Left, _$qu.right - _$qu.left, _$ev, _$fM);
        _$qu.left += _$ev[0];
        _$qu.right += _$fM[0];
    }
    if (_$qu.bottom < _$qu.top) {
        this._$6E(EnumPatternPositionType.Top, _$qu.bottom - _$qu.top, _$ev, _$fM);
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
    var panel;
    var i;
    for (i = 0; i < _$e1; i++) {
        panel = this._patternPositionList[_$cD]._patternSub._panelList[i];
        if (panel == _$nx) {
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
    var panel = this._patternPositionList[_$n5._$j0]._patternSub._panelList[_$n5._$jr];
    if (_$n5._$kA._$8y) return;
    var _$qs = new WidgetDockRect();
    var _$qu = new WidgetDockRect();
    panel._$2B(_$n5, _$qu);
    var _$8V = false;
    var _$oV = _$n5._$kA._$oV;
    var pme = _$n5._$kA;
    var _$pu;
    var _$9h = panel._$5K(_$n5);
    if (!_$9h) {
        _$n5._$kA._$8y = true;
        _$8V = panel._$f(this, _$n5._$kA, _$qu);
    }
    if (_$8V && (_$qu.left != _$qu.right || _$qu.top != _$qu.bottom)) {
        panel._$qI();
        var _$9y;
        var _$dt;
        if (_$n5._$j0 == EnumPatternPositionType.Left || _$n5._$j0 == EnumPatternPositionType.Right) {
            _$dt = WidgetDockPatternBase._$2A(_$qu);
            _$9y = EnumPatternPositionType.Top;
        } else {
            _$dt = WidgetDockPatternBase._$2z(_$qu);
            _$9y = EnumPatternPositionType.Left;
            _$qu.top = _$qu.left;
            _$qu.bottom = _$qu.right;
        }
        this._$4n(_$n5._$j0, _$n5._$jr + 1, -(_$dt + panel._$cf()));
        if (_$n5._$j0 == EnumPatternPositionType.Right || _$n5._$j0 == EnumPatternPositionType.Bottom) _$dt += panel._$cf(); else _$dt = -(_$dt + panel._$cf());
        this._$6x(_$9y, _$qu.top, _$qu.bottom);
        this._$6x((_$9y + 2), _$qu.top, _$qu.bottom);
        this.refreshFixedPanel();
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
WidgetDockPatternBase.prototype._$55 = function (_$mS, _$n5, _$sg, panelPositionType, _$dg) {
    if (_$dg < 0) return;
    var _$st = _$mS;
    if (_$st == null) return;
    var _$pj = this._patternPositionList[panelPositionType]._patternSub._panelList[_$dg];
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
        this._patternPositionList[panelPositionType]._patternSub._panelList[_$dg]._$kI = null;
        this._patternPositionList[panelPositionType]._patternSub.deletePanel(_$dg);
        var i;
        for (i = _$dg; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
            var pb = _$pU._$kI;
            this._$6m(pb, i);
        }
        var _$oF;
        if (_$dg == 0) _$oF = null; else _$oF = this._patternPositionList[panelPositionType]._patternSub._panelList[_$dg - 1];
        if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) {
            this._$5L(EnumPatternPositionType.Top, _$pj, _$oF);
            this._$5L(EnumPatternPositionType.Bottom, _$pj, _$oF);
        } else {
            this._$5L(EnumPatternPositionType.Left, _$pj, _$oF);
            this._$5L(EnumPatternPositionType.Right, _$pj, _$oF);
        }
    }
};
WidgetDockPatternBase.prototype._$54 = function (_$mS, panelPositionType, _$9e) {
    var _$nQ = _$mS._$of;
    var _$pj = this._patternPositionList[panelPositionType]._patternSub._panelList[_$9e];
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
WidgetDockPatternBase.prototype._$5L = function (panelPositionType, _$n0, _$nk) {
    var panel;
    var i;
    for (i = 0; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        if (panel._$kR == _$n0) panel._$kR = _$nk;
        if (panel._$l8 == _$n0) panel._$l8 = _$nk;
    }
};
WidgetDockPatternBase.prototype._$2j = function (panelPositionType) {
    var _$eY = this._patternPositionList[panelPositionType]._patternSub.getPanelNum();
    if (_$eY == 0) return null; else return this._patternPositionList[panelPositionType]._patternSub._panelList[_$eY - 1];
};
WidgetDockPatternBase.prototype._$19 = function (_$mS, panelPositionType, _$9e) {
    var panel = null;
    var _$8T = false;
    var _$nm = null;
    var _$qu = new WidgetDockRect();
    var _$8U = true;
    if (_$mS._$oV == null) {
        panel = new widgetDockPanel();
        if (_$9e != 0xffffffff) {
            _$8T = true;
            if (_$9e > 0) {
                _$nm = this._patternPositionList[panelPositionType]._patternSub._panelList[_$9e - 1];
                panel._$kR = _$nm._$kR;
                panel._$l8 = _$nm._$l8;
            } else {
                panel._$kR = null;
                panel._$l8 = null;
            }
        } else {
            if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) {
                panel._$kR = this._$2j(EnumPatternPositionType.Top);
                panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
            } else {
                panel._$kR = this._$2j(EnumPatternPositionType.Left);
                panel._$l8 = this._$2j(EnumPatternPositionType.Right);
            }
            _$9e = this._patternPositionList[panelPositionType]._patternSub.getPanelNum();
        }
        panel._$kI = _$mS;
        panel._$ah(this, panelPositionType);
        WidgetDockPatternBase.resetRect(_$qu);
        this._patternPositionList[panelPositionType]._patternSub._$4(panel, _$9e);
        this._$6m(_$mS, _$9e);
        var _$pU;
        var i;
        for (i = _$9e + 1; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        this._$6m(_$mS, _$9e);
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[_$9e];
        if (panel._$05()) {
            panel._$ah(this, panelPositionType);
            WidgetDockPatternBase.resetRect(_$qu);
        } else {
            _$8U = false;
        }
        _$mS._$8y = false;
        this._$72(_$mS);
        if (!_$8U) {
            panel._$6(this, _$mS);
        }
    }
    if (_$8T) {
        if (panelPositionType == EnumPatternPositionType.Bottom) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, false);
        } else if (panelPositionType == EnumPatternPositionType.Top) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, true);
        } else if (panelPositionType == EnumPatternPositionType.Left) {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, true);
        } else {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, false);
        }
    }
    if (_$8U) {
        var iw, ih;
        if ((panel.rect.left != panel.rect.right) && (panel.rect.left >= 0)) {
            iw = panel.rect.right - panel.rect.left;
            ih = panel.rect.bottom - panel.rect.top;
        } else {
            iw = WidgetDockFloatPanel._$lL.cx;
            ih = WidgetDockFloatPanel._$lL.cy;
        }
        this._$4m(panel, panelPositionType, _$9e, true, iw, ih, _$mS, true);
    }
};
WidgetDockPatternBase.prototype._$4m = function (panel, panelPositionType, _$9e, _$7Q, _$d2, _$d0, _$mS, _$83) {
    {
        var rcWindow = new WidgetDockRect();
        this.getWindowRect(rcWindow);
        var ilt, irb;
        var ior;
        var _$oB = null;
        var _$ey, _$eB;
        var _$gj = panel._$cf();
        var _$qu = new WidgetDockRect();
        var _$qt = new WidgetDockRect();
        _$qu.left = _$qu.top = 0;
        if (_$83) {
            _$qu.right = _$d2;
            _$qu.bottom = _$d0;
        } else {
            _$qu.right = panel.rect.right - panel.rect.left;
            _$qu.bottom = panel.rect.bottom - panel.rect.top;
        }
        var _$9t = true;
        if ((panelPositionType == EnumPatternPositionType.Left) || (panelPositionType == EnumPatternPositionType.Right)) _$9t = false;
        var _$9r;
        var _$gK, _$el, _$dt;
        if (_$83 && panel != null && (panel instanceof _$6R) && !(panel instanceof _$58)) {
            if ((_$9e - 1) >= 0) _$oB = this._patternPositionList[panelPositionType]._patternSub._panelList[_$9e - 1];
            ior = this._$2I(panelPositionType, _$oB);
            if (!_$9t) _$9r = EnumPatternPositionType.Top; else _$9r = EnumPatternPositionType.Left;
            ilt = this._$2I(_$9r, panel._$kR);
            irb = this._$2I((_$9r + 2), panel._$l8);
            if (!_$9t) {
                _$ey = rcWindow.top + ilt;
                _$eB = rcWindow.bottom - irb;
                _$el = _$eB - _$ey;
                _$qu.top = _$ey;
                _$gK = 0;
                if (panelPositionType == EnumPatternPositionType.Left) {
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
                if (panelPositionType == EnumPatternPositionType.Top) {
                    _$qu.top = ior;
                } else {
                    _$qu.top = rcWindow.bottom - ior - _$el;
                }
                _$qu.bottom = _$qu.top;
                _$qu.right = _$qu.left + _$gK;
            }
            panel._$iX = true;
            panel._$qy(_$mS._$of, _$qu);
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
        if ((panelPositionType == EnumPatternPositionType.Left) || (panelPositionType == EnumPatternPositionType.Right)) {
            _$fJ = this._$lz.right - this._$lz.left - (_$qu.right + panel._$cf());
            if (_$fJ < 0) {
                if (_$7Q) {
                    _$fJ += _$qu.right;
                    if (_$fJ < 0) _$fJ = 0;
                    _$qu.right = _$fJ;
                    _$fJ = this._$lz.right - this._$lz.left - (_$qu.right + panel._$cf());
                }
                if (_$fJ < 0) {
                    this._$6E(EnumPatternPositionType.Left, _$fJ, _$ev, _$fM);
                }
            }
        } else {
            _$fJ = this._$lz.bottom - this._$lz.top - (_$qu.bottom + panel._$cf());
            if (_$fJ < 0) {
                if (_$7Q) {
                    _$fJ += _$qu.bottom;
                    if (_$fJ < 0) _$fJ = 0;
                    _$qu.bottom = _$fJ;
                    _$fJ = this._$lz.bottom - this._$lz.top - (_$qu.bottom + panel._$cf());
                }
                if (_$fJ < 0) {
                    this._$6E(EnumPatternPositionType.Top, _$fJ, _$ev, _$fM);
                }
            }
        }
        if ((_$9e - 1) >= 0) _$oB = this._patternPositionList[panelPositionType]._patternSub._panelList[_$9e - 1];
        ior = this._$2I(panelPositionType, _$oB);
        if (!_$9t) _$9r = EnumPatternPositionType.Top; else _$9r = EnumPatternPositionType.Left;
        ilt = this._$2I(_$9r, panel._$kR);
        irb = this._$2I((_$9r + 2), panel._$l8);
        if (!_$9t) {
            _$ey = rcWindow.top + ilt;
            _$eB = rcWindow.bottom - irb;
            _$el = _$eB - _$ey;
            _$qu.top = _$ey;
            _$qt.top = _$ey;
            _$qt.bottom = _$qt.top + _$el;
            _$gK = WidgetDockPatternBase._$2A(_$qu);
            if (_$83) _$dt = _$gK + _$gj; else _$dt = _$d2 + _$gj;
            if (panelPositionType == EnumPatternPositionType.Left) {
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
            if (panelPositionType == EnumPatternPositionType.Top) {
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
                panel._$qy(_$mS._$of, _$qu);
            } else {
                this._$6v(_$mS, _$qu, EnumPatternPositionType.Top);
                this._$6v(_$mS, _$qu, EnumPatternPositionType.Left);
            }
        } else if (_$83) {
            panel._$qy(null, _$qu);
        }
        if (_$83) {
            panel.rect.setRect(_$qu);
            panel._$iX = true;
        }
        if (panel._$le != null) {
            panel._$le._$6q(_$qt);
        }
        this._$4n(panelPositionType, _$9e + 1, _$dt);
        var _$9y;
        if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) _$9y = EnumPatternPositionType.Top; else _$9y = EnumPatternPositionType.Left;
        this._$6x(_$9y, _$ey, _$eB);
        this._$6x((_$9y + 2), _$ey, _$eB);
        this.refreshFixedPanel();
    }
};
WidgetDockPatternBase.prototype._$6O = function (_$n5) {
    var panel;
    if (_$n5._$kA != null || _$n5._$jr != 0xffffffff) return;
    var _$gl = _$n5._$j0;
    var _$o6 = new _$F();
    _$n5._$kA = _$o6;
    _$o6._$8y = false;
    _$o6._$of = _$n5;
    panel = _$n5._$ag(null);
    if (_$gl == EnumPatternPositionType.Left || _$gl == EnumPatternPositionType.Right) {
        panel._$kR = this._$2j(EnumPatternPositionType.Top);
        panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
    } else {
        panel._$kR = this._$2j(EnumPatternPositionType.Left);
        panel._$l8 = this._$2j(EnumPatternPositionType.Right);
    }
    panel.rect.left = panel.rect.top = 0;
    panel.rect.right = _$n5._$lJ.cx;
    panel.rect.bottom = _$n5._$lJ.cy;
    _$n5._$jr = this._patternPositionList[_$gl]._patternSub.getPanelNum();
    panel._$kI = _$o6;
    this._patternPositionList[_$gl]._patternSub._$4(panel, _$n5._$jr);
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
    var _$qu = new WidgetDockRect();
    var panel;
    var _$8T = false;
    var _$nm = null;
    if (_$n5._$kA == null) {
        var _$o6 = new _$F();
        _$n5._$kA = _$o6;
        _$o6._$8y = false;
        _$o6._$of = _$n5;
        panel = _$n5._$ag(this);
        if (_$oP != null) _$oP[0] = panel;
        if (_$n5._$jr != 0xffffffff) {
            _$8T = true;
            if (_$n5._$jr > 0) {
                _$nm = this._patternPositionList[_$gl]._patternSub._panelList[_$n5._$jr - 1];
                panel._$kR = _$nm._$kR;
                panel._$l8 = _$nm._$l8;
            } else {
                panel._$kR = null;
                panel._$l8 = null;
            }
        } else {
            if (_$gl == EnumPatternPositionType.Left || _$gl == EnumPatternPositionType.Right) {
                panel._$kR = this._$2j(EnumPatternPositionType.Top);
                panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
            } else {
                panel._$kR = this._$2j(EnumPatternPositionType.Left);
                panel._$l8 = this._$2j(EnumPatternPositionType.Right);
            }
            _$n5._$jr = this._patternPositionList[_$gl]._patternSub.getPanelNum();
        }
        panel._$kI = _$o6;
        panel._$ah(this, _$n5._$j0);
        WidgetDockPatternBase.resetRect(_$qu);
        this._patternPositionList[_$gl]._patternSub._$4(panel, _$n5._$jr);
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
        panel = this._patternPositionList[_$gl]._patternSub._panelList[_$n5._$jr];
        if (panel._$05()) {
            panel._$ah(this, _$n5._$j0);
            WidgetDockPatternBase.resetRect(_$qu);
        } else {
            _$8U = false;
        }
        _$n5._$kA._$8y = false;
        this._$72(_$n5._$kA);
        if (!_$8U) {
            panel._$7(this, _$n5);
        }
    }
    if (_$8T) {
        if (_$gl == EnumPatternPositionType.Bottom) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, false);
        } else if (_$gl == EnumPatternPositionType.Top) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, true);
        } else if (_$gl == EnumPatternPositionType.Left) {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, true);
        } else {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, false);
        }
    }
    if (_$8U) {
        _$qu.left = _$qu.top = 0;
        var _$8I = false;
        if (_$n5._$S()) {
            if ((panel.rect.left != panel.rect.right) && (panel.rect.left >= 0)) {
                _$qu.right = panel.rect.right - panel.rect.left;
                _$qu.bottom = panel.rect.bottom - panel.rect.top;
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
        this._$4m(panel, _$gl, _$n5._$jr, _$8I, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top, _$n5._$kA, true);
        if (this._$ii) {
            this._$5A(_$n5._$j0);
        }
    }
};
WidgetDockPatternBase.prototype._$W = function (panelPositionType, _$ni, _$nm, _$81) {
    var s;
    for (s = 0; s < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); s++) {
        var _$pU = this._patternPositionList[panelPositionType]._patternSub._panelList[s];
        if (_$81 && _$pU._$kR == _$nm) {
            _$pU._$kR = _$ni;
        } else if (!_$81 && _$pU._$l8 == _$nm) {
            _$pU._$l8 = _$ni;
        }
    }
};
WidgetDockPatternBase.prototype._$0c = function (sch) {
    if (!this._$iZ) return;
    if (this._$hA == null) {
        var _$t5 = "div";
        if (WidgetDockController._isHasCanvasContext) _$t5 = "canvas";
        this._$hA = WidgetDockElementController.createElementWithParent(_$t5, WidgetDockController._elementRootId);
        this._$hA.style.border = "0px solid";
        this._$hA.style.zIndex = 7890;
    }
    if (sch) {
        var _$qu = this._$lz;
        this._$hA.style.visibility = "visible";
        WidgetDockElementController.addFixedPanel(this._$hA, _$qu.left, _$qu.top, _$qu.right - _$qu.left, _$qu.bottom - _$qu.top);
    } else {
        this._$hA.style.visibility = "hidden";
    }
};
WidgetDockPatternBase.prototype.refreshFixedPanel = function () {
    var rc = new WidgetDockRect();
    rc.left = this._$2K(EnumPatternPositionType.Left, WidgetDockPatternBase._$5k);
    rc.top = this._$2K(EnumPatternPositionType.Top, WidgetDockPatternBase._$s);
    rc.right = this._$2K(EnumPatternPositionType.Right, WidgetDockPatternBase._$3S);
    rc.bottom = this._$2K(EnumPatternPositionType.Bottom, WidgetDockPatternBase._$6M);
    this._$lz.setRect(rc);
    if (this._elementWithCenter != null) {
        var element = this._elementWithCenter;
        WidgetDockElementController.addFixedPanel(element, rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
    }
};
WidgetDockPatternBase.prototype._$5F = function () {
    var i;
    for (i = 0; i < 4; i++) {
        this._patternPositionList[i]._patternSub.reset();
    }
};
WidgetDockPatternBase.prototype._$k = function (_$mV, _$cu) {
    var _$qm = new WidgetDockRect();
    _$mV._$le._$25(_$qm);
    var _$9w;
    var _$ey;
    var _$eB;
    var _$9y = _$mV._$le._$j1;
    var _$g1 = this._$2F(_$9y, _$mV);
    if (_$9y == EnumPatternPositionType.Left || _$9y == EnumPatternPositionType.Right) {
        _$9w = EnumPatternPositionType.Top;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
    } else {
        _$9w = EnumPatternPositionType.Left;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
    }
    var _$q8 = new WidgetDockRect();
    _$mV._$kI._$22(_$q8);
    if (_$9y == EnumPatternPositionType.Left) _$q8.right += _$cu; else if (_$9y == EnumPatternPositionType.Right) _$q8.left += _$cu; else if (_$9y == EnumPatternPositionType.Top) _$q8.bottom += _$cu; else _$q8.top += _$cu;
    _$mV._$le._$4q(_$cu);
    this._$6v(_$mV._$kI, _$q8, _$9y);
    _$mV._$5q();
    if (_$9y == EnumPatternPositionType.Right || _$9y == EnumPatternPositionType.Bottom) _$cu = -_$cu;
    this._$4n(_$9y, _$g1 + 1, _$cu);
    this._$6x(_$9w, _$ey, _$eB);
    this._$6x((_$9w + 2), _$ey, _$eB);
};
WidgetDockPatternBase.prototype._$4j = function (_$mS, _$ct, _$9c) {
    var _$qu = new WidgetDockRect();
    var _$ql = new WidgetDockRect();
    var plt = new WidgetDockLocation();
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) this._$4j(_$mS._$od, _$ct, _$9c);
        if (_$mS._$pr != null) this._$4j(_$mS._$pr, _$ct, _$9c);
        if ((_$mS._$od != null) && (_$mS._$pr != null) && (!_$mS._$od._$8y) && (!_$mS._$pr._$8y)) {
            _$mS._$oy._$25(_$qu);
            plt.x = _$qu.left;
            plt.y = _$qu.top;
            if (_$9c == EnumPatternPositionType.Left || _$9c == EnumPatternPositionType.Right) {
                if (_$9c == EnumPatternPositionType.Left) plt.x = _$qu.left + _$ct; else plt.x = _$qu.left - _$ct;
            } else {
                plt.x = _$qu.left;
                if (_$9c == EnumPatternPositionType.Top) plt.y = _$qu.top + _$ct; else plt.y = _$qu.top - _$ct;
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
        if (_$mS._$of._$j0 == EnumPatternPositionType.Left || _$mS._$of._$j0 == EnumPatternPositionType.Right) {
            if (_$mS._$of._$j0 == EnumPatternPositionType.Left) plt.x = _$qu.left + _$ct; else plt.x = _$qu.left - _$ct;
        } else {
            plt.x = _$qu.left;
            if (_$mS._$of._$j0 == EnumPatternPositionType.Top) plt.y = _$qu.top + _$ct; else plt.y = _$qu.top - _$ct;
        }
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + WidgetDockPatternBase._$2A(_$qu);
        _$ql.bottom = plt.y + WidgetDockPatternBase._$2z(_$qu);
        _$mS._$of._$6q(_$ql);
    }
};
WidgetDockPatternBase.prototype._$4n = function (panelPositionType, _$dg, _$cY) {
    var panel;
    var i;
    for (i = _$dg; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        panel._$4i(this, panelPositionType, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$4o = function (panelPositionType, _$dg, _$cG, _$cY) {
    var panel;
    var i;
    for (i = _$dg; i <= _$cG; i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        panel._$4i(this, panelPositionType, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$2K = function (panelPositionType, _$9a) {
    var _$ex;
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    if (_$9a == WidgetDockPatternBase._$3S) {
        _$ex = rcWindow.right - this._$jF[2];
    } else if (_$9a == WidgetDockPatternBase._$5k) {
        _$ex = rcWindow.left + this._$jF[0];
    } else if (_$9a == WidgetDockPatternBase._$6M) {
        _$ex = rcWindow.bottom - this._$jF[3];
    } else {
        _$ex = rcWindow.top + this._$jF[1];
    }
    var panel;
    var rc = new WidgetDockRect();
    var i;
    for (i = 0; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        if (panel._$iX) {
            panel._$le._$25(rc);
            if (_$9a == WidgetDockPatternBase._$3S) {
                _$ex = rc.left;
            } else if (_$9a == WidgetDockPatternBase._$5k) {
                _$ex = rc.right;
            } else if (_$9a == WidgetDockPatternBase._$6M) {
                _$ex = rc.top;
            } else {
                _$ex = rc.bottom;
            }
        }
    }
    return _$ex;
};
WidgetDockPatternBase.prototype._$6v = function (_$mS, _$q1, _$9c) {
    if (_$mS == null) return;
    if ((_$mS._$od != null) || (_$mS._$pr != null)) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        _$mS._$1K(pd1, pd2, rc1, rc2);
        var b1 = false;
        var b2 = false;
        if ((rc1.left != rc1.right) || (rc1.top != rc1.bottom) || (rc1.left != -6000)) b1 = true;
        if ((rc2.left != rc2.right) || (rc2.top != rc2.bottom) || (rc2.left != -6000)) b2 = true;
        var _$gD;
        var _$qt = new WidgetDockRect();
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
WidgetDockPatternBase.prototype._$5p = function (panel, _$dg, panelPositionType, _$dX) {
    if (_$dX != 0) {
        if (_$dX > 0) {
            if (panelPositionType == EnumPatternPositionType.Top || panelPositionType == EnumPatternPositionType.Bottom) this._$4m(panel, panelPositionType, _$dg, false, 0, _$dX, null, false); else this._$4m(panel, panelPositionType, _$dg, false, _$dX, 0, null, false);
        } else {
            var _$9y;
            this._$4n(panelPositionType, _$dg + 1, _$dX);
            var ilt, irb;
            var _$qt = new WidgetDockRect();
            _$qt.setRect(panel.rect);
            if (panelPositionType == EnumPatternPositionType.Right || panelPositionType == EnumPatternPositionType.Left) {
                _$9y = EnumPatternPositionType.Top;
                ilt = panel.rect.top;
                irb = panel.rect.bottom;
                if (panelPositionType == EnumPatternPositionType.Left) {
                    _$qt.left = panel.rect.right;
                } else _$qt.left = panel.rect.left;
                _$qt.right = _$qt.left;
            } else {
                _$9y = EnumPatternPositionType.Left;
                ilt = panel.rect.left;
                irb = panel.rect.right;
                if (panelPositionType == EnumPatternPositionType.Top) {
                    _$qt.top = panel.rect.bottom;
                } else _$qt.top = panel.rect.top;
                _$qt.bottom = _$qt.top;
            }
            panel._$le._$r8(_$qt.left, _$qt.top, _$qt.right - _$qt.left, _$qt.bottom - _$qt.top);
            this._$6x(_$9y, ilt, irb);
            this._$6x((_$9y + 2), ilt, irb);
            this.refreshFixedPanel();
        }
    }
};
WidgetDockPatternBase.prototype._$6x = function (panelPositionType, _$cT, _$cU) {
    var panel;
    var _$gK, _$el;
    var rcWindow = new WidgetDockRect();
    var _$qt = new WidgetDockRect();
    var _$9p = 0;
    this.getWindowRect(rcWindow);
    var i;
    for (i = 0; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        var _$dX = new Array(1);
        _$dX[0] = 0;
        panel._$6u(this, rcWindow, panelPositionType, _$cT, _$cU, _$dX);
        this._$5p(panel, i, panelPositionType, _$dX[0]);
    }
};
WidgetDockPatternBase.prototype._$2J = function (panelPositionType, _$cv, _$cE) {
    var _$e1 = this._patternPositionList[panelPositionType]._patternSub.getPanelNum();
    if (_$cE == 0xffffffff || _$cE > _$e1) _$cE = _$e1;
    var panel;
    var ire = 0;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        if (panel._$iX) {
            if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) ire += WidgetDockPatternBase._$2A(panel.rect); else ire += WidgetDockPatternBase._$2z(panel.rect);
            ire += panel._$cf();
        }
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2I = function (panelPositionType, _$nd) {
    var ire = this._$jF[panelPositionType];
    if (_$nd == null) return ire;
    var panel;
    var i;
    for (i = 0; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        if (panel._$iX) {
            if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) ire += WidgetDockPatternBase._$2A(panel.rect); else ire += WidgetDockPatternBase._$2z(panel.rect);
            ire += panel._$le._$cf();
        }
        if (panel == _$nd) break;
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2d = function (_$mX, panelPositionType, _$nx, _$nz) {
    var rcf = new WidgetDockRect();
    rcf.setRect(_$nx.rect);
    if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Top) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.top;
    } else if (panelPositionType == EnumPatternPositionType.Bottom) {
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
    if (_$mX._$j1 == EnumPatternPositionType.Right) {
        _$mX._$kn = _$q3.right - _$nz.cx;
    } else if (_$mX._$j1 == EnumPatternPositionType.Bottom) {
        _$mX._$kq = _$q3.bottom - _$nz.cy;
    }
};
WidgetDockPatternBase.prototype._$1h = function (_$mX, _$nz, _$gK, _$el, _$qe, _$pC) {
    if (_$mX._$kx._$kB != this) return true;
    if (WidgetDockPatternBase._$5f(_$qe, _$pC) && _$mX._$it) {
        var _$qh = new WidgetDockRect();
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
                    if (_$9i == EnumPatternPositionType.Left || _$9i == EnumPatternPositionType.Right) {
                        _$nz.cx = _$mX._$kx._$lK.cx;
                        if (_$nz.cx >= (_$qe.right - _$qe.left)) _$nz.cx = _$nz.cx / 2;
                        _$nz.cy = _$qe.bottom - _$qe.top;
                    } else {
                        _$nz.cy = _$mX._$kx._$lK.cy;
                        if (_$nz.cy > (_$qe.bottom - _$qe.top)) _$nz.cy = _$nz.cy / 2;
                    }
                    if (_$9i == EnumPatternPositionType.Left || _$9i == EnumPatternPositionType.Top) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.top;
                    } else if (_$9i == EnumPatternPositionType.Bottom) {
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
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    rcWindow.right = rcWindow.right - rcWindow.top;
    rcWindow.bottom = rcWindow.bottom - rcWindow.top;
    rcWindow.left = 0;
    rcWindow.top = 0;
    rcWindow.left += this._$jF[0];
    rcWindow.right -= this._$jF[2];
    rcWindow.top += this._$jF[1];
    rcWindow.bottom -= this._$jF[3];
    var _$qe = new WidgetDockRect();
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
    var rcs = new WidgetDockRect();
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
WidgetDockPatternBase.prototype._$02 = function (_$mX, panelPositionType, _$pC, _$nz, _$dk, _$oQ, _$d1) {
    if (this._patternPositionList[panelPositionType] == null) {
        return 0xff;
    }
    var panel;
    var _$9m = 0xff;
    var _$9z = 0xff;
    _$oQ[0] = null;
    var _$fZ = new Array(1);
    var _$e1 = this._patternPositionList[panelPositionType]._patternSub.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        _$d1[0] = -1;
        panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        if (panel._$iX) {
            _$9z = panel._$03(this, _$mX, _$pC, _$nz, _$dk, _$oQ, _$fZ);
            if ((((_$9z + 1) % 2) == 0 && _$9z != 0xff) || _$fZ[0] >= 1) {
                if (_$fZ[0] == 0 || _$fZ[0] == 1) {
                    _$d1[0] = i;
                    if (_$fZ[0] == 1) {
                        this._$2d(_$mX, panelPositionType, panel, _$nz);
                    }
                } else if (_$fZ[0] == 2) {
                    var j;
                    var _$8G = false;
                    for (j = i + 1; j < _$e1; j++) {
                        var _$oG = this._patternPositionList[panelPositionType]._patternSub._panelList[j];
                        if (_$oG._$iX) {
                            panel = _$oG;
                            _$8G = true;
                            break;
                        }
                    }
                    if (_$8G) this._$2d(_$mX, panelPositionType, panel, _$nz); else {
                        var _$ql = new WidgetDockRect();
                        _$ql.setRect(panel.rect);
                        if (panelPositionType == EnumPatternPositionType.Top) {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.bottom;
                        } else if (panelPositionType == EnumPatternPositionType.Left) {
                            _$mX._$kn = _$ql.right;
                            _$mX._$kq = _$ql.top;
                        } else if (panelPositionType == EnumPatternPositionType.Right) {
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
WidgetDockPatternBase.prototype._$1Z = function (_$mX, _$mT, _$pC, panelPositionType, _$nz) {
    panelPositionType[0] = this._$R(_$mX, _$mT, _$pC, _$nz);
    if (panelPositionType[0] > 3 || panelPositionType[0] < 0) return null;
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
    var pt = new WidgetDockLocation();
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
WidgetDockPatternBase._$6o = function (com, _$qd, _$cS, _$do, width, height, _$cI) {
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
    var panel;
    _$mS[0] = _$mS[1] = null;
    var _$eQ = new Array(1);
    var i;
    for (i = 0; i < 4; i++) {
        var _$e1 = this._patternPositionList[i]._patternSub.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            panel = this._patternPositionList[i]._patternSub._panelList[j];
            var _$pO = this._$1J(_$mO, _$sh, panel._$kI, _$eQ, _$nr);
            if (_$pO != null && panel._$k9 == _$df) {
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
    _$mO._windowMain._$1O(_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX);
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
    this.refreshFixedPanel();
};
WidgetDockPatternBase.prototype._$qF = function (_$a0) {
    if (_$a0 == null) return;
    var i;
    for (i = 0; i < 4; i++) {
        if (this._elementWithType[i] == _$a0) {
            this._elementWithType[i] = null;
            this._$5z();
            this.refreshFixedPanel();
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
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    if (type == EnumPatternPositionType.Center) {
        this.addFixedPanelWithCenter(element);
        return;
    } else if (type == EnumPatternPositionType.Left) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = rcWindow.bottom - rcWindow.top - (this._$jF[1] + this._$jF[3]);
        left = 0;
        top = this._$jF[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Right) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = rcWindow.bottom - rcWindow.top - this._$jF[1] - this._$jF[3];
        left = this._$lz.right - width;
        top = this._$jF[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Top) {
        width = rcWindow.right - rcWindow.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = 0;
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Bottom) {
        width = rcWindow.right - rcWindow.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = rcWindow.bottom - rcWindow.top - height;
        this.addFixedPanelWithType(type, element, 0, top, width, height);
        if (this._elementWithType[EnumPatternPositionType.Left] != null) {
            var element = this._elementWithType[EnumPatternPositionType.Left];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController.getElementLeft(element);
            var top = WidgetDockElementController.getElementTop(element);
            WidgetDockElementController.addFixedPanel(element, left, top, width, height);
        }
        if (this._elementWithType[EnumPatternPositionType.Right] != null) {
            var element = this._elementWithType[EnumPatternPositionType.Right];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController.getElementLeft(element);
            var top = WidgetDockElementController.getElementTop(element);
            WidgetDockElementController.addFixedPanel(element, left, top, width, height);
        }
    }
    this.refreshFixedPanel();
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
                this._$6x(EnumPatternPositionType.Left, -32767, 32767);
                this._$6x(EnumPatternPositionType.Right, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(EnumPatternPositionType.Top, -_$du, _$eE, _$fA);
                }
            }
        }
        for (k = 0; k < 3; k = k + 2) {
            if ((_$gG[k] - this._$jF[k]) != 0) {
                _$e6 = _$gG[k] - this._$jF[k];
                _$du = _$e6 - (this._$lz.right - this._$lz.left);
                this._$jF[k] = _$gG[k];
                this._$4n(k, 0, _$e6);
                this._$6x(EnumPatternPositionType.Top, -32767, 32767);
                this._$6x(EnumPatternPositionType.Bottom, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(EnumPatternPositionType.Left, -_$du, _$eE, _$fA);
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$rB = function (_$mO, sch) {
    _$mO._$rB(sch);
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
    var left, top, right, bottom;
    left = parseInt(layoutController.read());
    top = parseInt(layoutController.read());
    right = parseInt(layoutController.read());
    bottom = parseInt(layoutController.read());
    var _$gh = 1;
    if (this._$ii) {
        _$gh = 4;
    } else {
        this.setLocationSize(left, top, right, bottom);
    }
    var secIndexStr;
    var readStr;
    var readInt;
    var i;
    for (i = 0; i < _$gh; i++) {
        this._$lm[i]._$i0.reset();
        var _secIndex = 0;
        while (true) {
            secIndexStr = "SEC" + _secIndex;
            readStr = layoutController.read();
            if (readStr == secIndexStr) {
                var _$pg = new _$M();
                _$pg._$g6 = 0;
                this._$lm[i]._$i0._$4(_$pg, _secIndex);
                readInt = parseInt(layoutController.read());
                _$pg._widthSec = readInt;
                readInt = parseInt(layoutController.read());
                _$pg._heightSec = readInt;
                readInt = parseInt(layoutController.read());
                _$pg._$eF = readInt;
                if (_$pg._$eF < 0) _$pg._$eF = -1;
                readInt = parseInt(layoutController.read());
                _$pg._$fB = readInt;
                if (_$pg._$fB < 0) _$pg._$fB = -1;
                _$pg._$kI = new _$F();
                readInt = parseInt(layoutController.read());
                if (readInt == 0) {
                    readStr = layoutController.read();
                    if (readStr == "ROOTBLOCK") {
                        this._$3Z(layoutController, _$pg._$kI);
                    } else break;
                } else if (readInt == 1 || readInt == 2) {
                    readStr = layoutController.read();
                    if (readStr == "ROOTBLOCK") {
                        _$pg._$g6 = readInt;
                        this._$42(layoutController, _$pg._$kI);
                    } else break;
                }
                _secIndex++;
            } else break;
        }
    }
    if (this._$ii) {
        this._$78(0, 1, true, true);
        this._$78(0, 3, false, true);
        this._$78(2, 1, true, false);
        this._$78(2, 3, false, false);
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
            var panel = null;
            if (_$pf._$g6 == 0) panel = new widgetDockPanel(); else if (_$pf._$g6 == 1) panel = new _$6R(); else panel = new _$4c();
            _$pf._$o2 = panel;
            panel.rect.left = panel.rect.top = 0;
            panel.rect.right = _$pf._widthSec;
            panel.rect.bottom = _$pf._heightSec;
            panel._$iX = false;
            panel._$kI = _$pf._$kI;
            this._patternPositionList[i]._patternSub._$4(panel, _$e3);
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
                    var panel = _$py._$i0._panelList[_$eq + 1 + s];
                    if (_$81) panel._$eF = _$eZ; else panel._$fB = _$eZ;
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
        var pt = new WidgetDockLocation();
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
WidgetDockPatternBase.prototype._$8 = function (panelPositionType, _$mO, _$7V) {
    var _$g1 = 0xFFFFFFFF;
    if (_$7V) _$g1 = 0; else if (this._$lk[panelPositionType] == null) {
        var _$e1 = this._patternPositionList[panelPositionType]._patternSub.getPanelNum();
        alert("Sd");
        var panel;
        var i;
        for (i = 0; i < _$e1; i++) {
            panel = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
            if (panel._$k9 == 0) {
                _$g1 = i;
                break;
            } else if (panel._$k9 == 1) {
                _$g1 = (i + 1);
                if (_$g1 == _$e1) {
                    _$g1 = 0xFFFFFFFF;
                    break;
                }
            }
        }
    }
    var _$g7 = _$58._$2V;
    if (this._$lk[panelPositionType] != null) {
        _$g1 = this._$2F(panelPositionType, this._$lk[panelPositionType]);
        if (this._$lk[panelPositionType]._$iX == false) this._$9(panelPositionType, _$g1, _$g7);
    } else this._$9(panelPositionType, _$g1, _$g7);
    this._$lk[panelPositionType]._$8(_$mO);
};
WidgetDockPatternBase.prototype._$j = function (panelPositionType) {
    var panel = this._$lk[panelPositionType];
    if (panel == null) return;
    var ino;
    var _$oU = panel._$0s();
    this._$5M(panelPositionType, null);
    ino = _$oU.length;
    var i;
    for (i = 0; i < ino; i++) {
        this._$8(panelPositionType, _$oU[i]._$mO, true);
    }
};
WidgetDockPatternBase.prototype._$5M = function (panelPositionType, _$mO) {
    var panel = this._$lk[panelPositionType];
    if (panel == null) return;
    var ino = this._$lk[panelPositionType]._$5M(_$mO);
    if (ino > 0) return;
    if (panel._$iX) {
        var _$qu = new WidgetDockRect();
        panel._$2B(null, _$qu);
        panel._$qI();
        var _$9y;
        var _$dt;
        if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) {
            _$dt = _$qu.right - _$qu.left;
            _$9y = EnumPatternPositionType.Top;
        } else {
            _$dt = _$qu.bottom - _$qu.top;
            _$9y = EnumPatternPositionType.Left;
            _$qu.top = _$qu.left;
            _$qu.bottom = _$qu.right;
        }
        var _$e5 = this._$2F(panelPositionType, panel);
        this._$4n(panelPositionType, _$e5 + 1, -(_$dt + panel._$cf()));
        if (panelPositionType == EnumPatternPositionType.Right || panelPositionType == EnumPatternPositionType.Bottom) _$dt += panel._$cf(); else _$dt = -(_$dt + panel._$cf());
        panel.setVisible(false);
        this._$6x(_$9y, _$qu.top, _$qu.bottom);
        this._$6x((_$9y + 2), _$qu.top, _$qu.bottom);
        this.refreshFixedPanel();
    }
    var _$g1 = this._$2F(panelPositionType, panel);
    var _$pU;
    var _$pj = this._$lk[panelPositionType];
    this._$lk[panelPositionType] = null;
    this._patternPositionList[panelPositionType]._patternSub.deletePanel(_$g1);
    var i;
    for (i = _$g1; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
        _$pU = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
        var pb = _$pU._$kI;
        this._$6m(pb, i);
    }
    var _$oF;
    if (_$g1 == 0) _$oF = null; else _$oF = this._patternPositionList[panelPositionType]._patternSub._panelList[_$g1 - 1];
    if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) {
        this._$5L(EnumPatternPositionType.Top, _$pj, _$oF);
        this._$5L(EnumPatternPositionType.Bottom, _$pj, _$oF);
    } else {
        this._$5L(EnumPatternPositionType.Left, _$pj, _$oF);
        this._$5L(EnumPatternPositionType.Right, _$pj, _$oF);
    }
};
WidgetDockPatternBase.prototype._$9 = function (panelPositionType, _$dg, iWH) {
    if (panelPositionType < 0 || panelPositionType > 3) return;
    var panel = null;
    var _$8T = false;
    var _$nm = null;
    var _$8X = false;
    if (this._$lk[panelPositionType] == null) {
        panel = new _$58();
        panel._$ju = panelPositionType;
        this._$lk[panelPositionType] = panel;
        panel._$rw(this);
        _$8X = true;
    }
    if (_$8X) {
        if (_$dg != 0xffffffff) {
            _$8T = true;
            if (_$dg > 0) {
                _$nm = this._patternPositionList[panelPositionType]._patternSub._panelList[_$dg - 1];
                panel._$kR = _$nm._$kR;
                panel._$l8 = _$nm._$l8;
            } else {
                panel._$kR = null;
                panel._$l8 = null;
            }
        } else {
            if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) {
                panel._$kR = this._$2j(EnumPatternPositionType.Top);
                panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
            } else {
                panel._$kR = this._$2j(EnumPatternPositionType.Left);
                panel._$l8 = this._$2j(EnumPatternPositionType.Right);
            }
            _$dg = this._patternPositionList[panelPositionType]._patternSub.getPanelNum();
        }
        panel._$kI = null;
        panel._$ah(this, panelPositionType);
        this._patternPositionList[panelPositionType]._patternSub._$4(panel, _$dg);
        var _$pU;
        var i;
        for (i = _$dg + 1; i < this._patternPositionList[panelPositionType]._patternSub.getPanelNum(); i++) {
            _$pU = this._patternPositionList[panelPositionType]._patternSub._panelList[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        panel = this._$lk[panelPositionType];
        panel._$ah(this, panelPositionType);
    }
    if (_$8T) {
        if (panelPositionType == EnumPatternPositionType.Bottom) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, false);
        } else if (panelPositionType == EnumPatternPositionType.Top) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, true);
        } else if (panelPositionType == EnumPatternPositionType.Left) {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, true);
        } else {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, false);
        }
    }
    this._$4m(panel, panelPositionType, _$dg, false, iWH, iWH, null, true);
    panel._$iX = true;
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
    if ((_$nU[0] == EnumPatternPositionType.Top) || (_$nU[0] == EnumPatternPositionType.Bottom)) {
        _$oY = this._$lk[EnumPatternPositionType.Left];
        _$oZ = this._$lk[EnumPatternPositionType.Right];
        _$eH = EnumPatternPositionType.Left;
        _$fD = EnumPatternPositionType.Right;
    } else {
        _$oY = this._$lk[EnumPatternPositionType.Top];
        _$oZ = this._$lk[EnumPatternPositionType.Bottom];
        _$eH = EnumPatternPositionType.Top;
        _$fD = EnumPatternPositionType.Bottom;
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
            if ((_$nU[0] == EnumPatternPositionType.Top) || (_$nU[0] == EnumPatternPositionType.Bottom)) {
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
    var dt = new WidgetDockSize();
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
    ;this._$lx = new WidgetDockRect();
    this._$ly = new WidgetDockRect();
    this._$iG = false;
    this._$ja = 0;
    this._$jf = 0;
    this._$hL = null;
    this._$ka = 0;
    this._$hH = null;
    this._$hj = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", WidgetDockController._elementRootId);
        this._$h8.style.border = "1px solid";
    }
    WidgetDockElementController.setElementSize(this._$h8, this._$km, this._$km);
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
_$N.prototype._$r8 = function (_$cS, _$do, width, height) {
};
_$N.prototype.setSize = function (width, height) {
    if (this._$h8 == null) return;
    WidgetDockElementController.setElementSize(this._$h8, width, height);
    if (width == 0 && height == 0) {
        this._$h8.style.visibility = "hidden";
    }
    this._$qJ();
};
_$N.prototype.setElementZIndex = function (_$cR) {
    if (this._$h8 != null) {
        WidgetDockElementController.setElementZIndex(this._$h8, _$cR);
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
    if (this._$j1 == EnumPatternPositionType.Left || this._$j1 == EnumPatternPositionType.Right) this._$h8.style.cursor = "e-resize";
    else this._$h8.style.cursor = "n-resize"
};
_$N.prototype._$rh = function (_$og) {
    this._$kG = _$og;
    _$og.Add(this);
};
_$N.prototype._$ms = function (e) {
    if (!this._$iG) return;
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._$4i(pt);
    this._$qJ();
};
_$N.prototype._$4N = function (_$ts, _$h1) {
    return this._$kG._$s9(this, _$ts, _$h1);
};
_$N.prototype._$bZ = function () {
    var pt = new WidgetDockLocation();
    pt.x = WidgetDockElementController.getElementLeft(this._$h8);
    pt.y = WidgetDockElementController.getElementTop(this._$h8);
    return pt;
};
_$N.prototype._$c8 = function () {
    var d = new WidgetDockSize();
    d.width = WidgetDockElementController.getElementWidth(this._$h8);
    d.height = WidgetDockElementController.getElementHeight(this._$h8);
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
    var panel;
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    panel = this._$2a(_$95, _$pv, _$gg);
    if (panel != null) {
        panel._$5q();
        var _$g8 = this._$kG._$2F(this._$j1, panel) + 1;
        if (_$pv[0] == null) {
            if (this._$j1 == EnumPatternPositionType.Left) {
                this._$jR = panel.rect.left + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = this._$kG._$lz.right - 2 * WidgetDockPatternBase._$5Z - this._$kG._$2J(this._$j1, _$g8, 0xffffffff);
            } else if (this._$j1 == EnumPatternPositionType.Right) {
                this._$jR = this._$kG._$lz.left + this._$kG._$2J(this._$j1, _$g8, 0xffffffff) + WidgetDockPatternBase._$5Z;
                this._$jS = panel.rect.right - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._$j1 == EnumPatternPositionType.Top) {
                this._$jR = panel.rect.top + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = this._$kG._$lz.bottom - 2 * WidgetDockPatternBase._$5Z - this._$kG._$2J(this._$j1, _$g8, 0xffffffff);
            } else {
                this._$jR = this._$kG._$lz.top + this._$kG._$2J(this._$j1, _$g8, 0xffffffff) + WidgetDockPatternBase._$5Z;
                this._$jS = panel.rect.bottom - 2 * WidgetDockPatternBase._$5Z;
            }
        } else {
            var iw, ih;
            iw = _$pv[0].rect.right - _$pv[0].rect.left;
            ih = _$pv[0].rect.bottom - _$pv[0].rect.top;
            if (this._$j1 == EnumPatternPositionType.Left) {
                this._$jR = panel.rect.left + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = panel.rect.right + iw - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._$j1 == EnumPatternPositionType.Right) {
                this._$jR = panel.rect.left - iw + WidgetDockPatternBase._$5Z;
                this._$jS = panel.rect.right - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._$j1 == EnumPatternPositionType.Top) {
                this._$jR = panel.rect.top + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = panel.rect.bottom + ih - 2 * WidgetDockPatternBase._$5Z;
            } else {
                this._$jR = panel.rect.top - ih + WidgetDockPatternBase._$5Z;
                this._$jS = panel.rect.bottom - 2 * WidgetDockPatternBase._$5Z;
            }
        }
    } else if (this._$iI) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        this._$kE._$1K(pd1, pd2, rc1, rc2);
        this._$jR = 0;
        this._$jS = 32666;
        if ((this._$j1 == EnumPatternPositionType.Left) || (this._$j1 == EnumPatternPositionType.Right)) {
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
    if (this._$j1 == EnumPatternPositionType.Left || this._$j1 == EnumPatternPositionType.Right) {
    } else {
    }
    var iw = WidgetDockPatternBase._$2A(this._$lx);
    var ih = WidgetDockPatternBase._$2z(this._$lx);
    if (this._$j1 == EnumPatternPositionType.Left || this._$j1 == EnumPatternPositionType.Right) {
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
        WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$h8);
    }
    this._$h8 = null;
};
_$N.prototype._$1Q = function () {
    this._$kG._$sb(this);
};
_$N.prototype._$sb = function () {
    var _$e1 = this._$kG._patternPositionList[this._$j1]._patternSub.getPanelNum();
    var panel;
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    panel = this._$2a(_$95, _$pv, _$gg);
    var _$qm = this._$ly;
    var _$dt = this._$lx.left - _$qm.left;
    if (this._$j1 == EnumPatternPositionType.Left || this._$j1 == EnumPatternPositionType.Right) {
        _$dt = this._$lx.left - _$qm.left;
    } else {
        _$dt = this._$lx.top - _$qm.top;
    }
    this._$4q(_$dt);
    var _$ey, _$eB;
    var _$ez, _$eC, _$eA, _$eD;
    _$ez = _$eA = _$eC = _$eD = 0;
    var _$9w;
    if (this._$j1 == EnumPatternPositionType.Left || this._$j1 == EnumPatternPositionType.Right) {
        _$9w = EnumPatternPositionType.Top;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
        if (_$pv[0] != null) {
            _$ez = _$qm.top;
            _$eC = _$pv[0].rect.top;
            _$eA = _$pv[0].rect.bottom;
            _$eD = _$qm.bottom;
        }
    } else {
        _$9w = EnumPatternPositionType.Left;
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
        var _$q8 = new WidgetDockRect();
        panel._$kI._$22(_$q8);
        if (this._$j1 == EnumPatternPositionType.Left) _$q8.right += _$dt; else if (this._$j1 == EnumPatternPositionType.Right) _$q8.left += _$dt; else if (this._$j1 == EnumPatternPositionType.Top) _$q8.bottom += _$dt; else _$q8.top += _$dt;
        if (_$95[0]) {
            this._$kG._$6v(panel._$kI, _$q8, this._$j1);
            panel._$5q();
            this._$kG._$6x(_$9w, _$ey, _$eB);
            this._$kG._$6x((_$9w + 2), _$ey, _$eB);
            this._$kG.refreshFixedPanel();
        } else {
            var _$sS = false;
            if (!_$sS) {
                this._$kG._$6v(panel._$kI, _$q8, this._$j1);
                if (_$pv[0] != null) {
                    _$pv[0]._$kI._$22(_$q8);
                    if (this._$j1 == EnumPatternPositionType.Left) _$q8.left += _$dt; else if (this._$j1 == EnumPatternPositionType.Right) _$q8.right += _$dt; else if (this._$j1 == EnumPatternPositionType.Top) _$q8.top += _$dt; else _$q8.bottom += _$dt;
                    this._$kG._$6v(_$pv[0]._$kI, _$q8, this._$j1);
                    panel._$5q();
                    _$pv[0]._$5q();
                    if (this._$j1 == EnumPatternPositionType.Right || this._$j1 == EnumPatternPositionType.Bottom) _$dt = -_$dt;
                    this._$kG._$4o(this._$j1, this._$ka + 1, _$gg[0] - 1, _$dt);
                } else {
                    panel._$5q();
                    if (this._$j1 == EnumPatternPositionType.Right || this._$j1 == EnumPatternPositionType.Bottom) _$dt = -_$dt;
                    this._$kG._$4n(this._$j1, this._$ka + 1, _$dt);
                }
                this._$kG._$6x(_$9w, _$ey, _$eB);
                this._$kG._$6x((_$9w + 2), _$ey, _$eB);
                this._$kG.refreshFixedPanel();
            } else {
                this._$kG._$6v(panel._$kI, _$q8, this._$j1);
                panel._$5q();
                if (this._$j1 == EnumPatternPositionType.Right || this._$j1 == EnumPatternPositionType.Bottom) _$dt = -_$dt;
                this._$kG._$4n(this._$j1, this._$ka + 1, _$dt);
                this._$kG._$6x(_$9w, _$ey, _$eB);
                this._$kG._$6x((_$9w + 2), _$ey, _$eB);
                this._$kG.refreshFixedPanel();
            }
        }
    } else {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        this._$kE._$1K(pd1, pd2, rc1, rc2);
        if ((this._$j1 == EnumPatternPositionType.Top) || (this._$j1 == EnumPatternPositionType.Bottom)) {
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
    var _$qu = new WidgetDockRect();
    if (!this._$iG) this._$25(_$qu); else _$qu = this._$ly;
    _$gK = WidgetDockPatternBase._$2A(_$qu);
    _$el = WidgetDockPatternBase._$2z(_$qu);
    ix = _$qu.left;
    iy = _$qu.top;
    if (this._$j1 == EnumPatternPositionType.Left || this._$j1 == EnumPatternPositionType.Right) {
        ix += _$cY;
    } else {
        iy += _$cY;
    }
    WidgetDockElementController.setElementLeftTop(this._$h8, ix, iy);
    WidgetDockElementController.setElementSize(this._$h8, _$gK, _$el);
    this._$qJ();
};
_$N.prototype._$6q = function (rc) {
    if (this._$h8 != null) {
        WidgetDockElementController.setElementLeftTop(this._$h8, rc.left, rc.top);
        WidgetDockElementController.setElementSize(this._$h8, rc.right - rc.left, rc.bottom - rc.top);
        this._$qJ();
    }
};
_$N.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._$h8);
        rc.top = WidgetDockElementController.getElementTop(this._$h8);
        rc.right = rc.left + WidgetDockElementController.getElementWidth(this._$h8);
        rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._$h8);
    }
};
_$N.prototype._$2a = function (_$89, _$nC, _$dj) {
    var _$e1 = this._$kG._patternPositionList[this._$j1]._patternSub.getPanelNum();
    var panel;
    _$nC[0] = null;
    _$89[0] = true;
    var _$f2;
    var i;
    for (i = _$e1 - 1; i >= 0; i--) {
        panel = this._$kG._patternPositionList[this._$j1]._patternSub._panelList[i];
        if (panel._$iX) {
            if (panel._$le == this) {
                this._$ka = i;
                return panel;
            } else {
                _$89[0] = false;
                var _$sS = false;
                if (_$sS) {
                    _$nC[0] = panel;
                    _$f2 = i;
                    _$dj[0] = i;
                } else {
                    if (panel._$k9 != 1) {
                        _$nC[0] = panel;
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
    WidgetDockElementController.setElementLeftTop(this._$h8, vrc.left, vrc.top);
    WidgetDockElementController.setElementSize(this._$h8, vrc.right - vrc.left, vrc.bottom - vrc.top);
    return;
};
_$N.prototype._$3B = function () {
};
_$N.prototype._$qJ = function () {
    var _$eu, _$gC, iw, ih;
    _$eu = WidgetDockElementController.getElementLeft(this._$h8);
    _$gC = WidgetDockElementController.getElementTop(this._$h8);
    iw = WidgetDockElementController.getElementWidth(this._$h8);
    ih = WidgetDockElementController.getElementHeight(this._$h8);
    if (this._$hj == null) return;
    if ((this._$j1 == EnumPatternPositionType.Left) || (this._$j1 == EnumPatternPositionType.Right)) {
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
    this.rect = new WidgetDockRect();
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
        if (this._$le._$j1 == EnumPatternPositionType.Top) {
            if (_$9z == WidgetDockPatternBase._$3h) _$de[0] = 1; else if (_$9z == WidgetDockPatternBase._$3b) _$de[0] = 2;
        } else if (this._$le._$j1 == EnumPatternPositionType.Bottom) {
            if (_$9z == WidgetDockPatternBase._$3h) _$de[0] = 2; else if (_$9z == WidgetDockPatternBase._$3b) _$de[0] = 1;
        } else if (this._$le._$j1 == EnumPatternPositionType.Left) {
            if (_$9z == WidgetDockPatternBase._$3d) _$de[0] = 1;
            if (_$9z == WidgetDockPatternBase._$3f) _$de[0] = 2;
        } else if (this._$le._$j1 == EnumPatternPositionType.Right) {
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
widgetDockPanel.prototype._$ah = function (_$ax, panelPositionType) {
    this._$le = new _$N();
    this._$le._$j1 = panelPositionType;
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
widgetDockPanel.prototype._$6u = function (_$ax, _$qb, panelPositionType, _$cT, _$cU, _$cA) {
    if (this._$iX) {
        var ilt, irb;
        var _$dW;
        var _$gK, _$el;
        var _$qt = new WidgetDockRect();
        var _$9p = 0;
        _$gK = WidgetDockPatternBase._$2A(this.rect);
        _$el = WidgetDockPatternBase._$2z(this.rect);
        if ((panelPositionType == EnumPatternPositionType.Top) || (panelPositionType == EnumPatternPositionType.Bottom)) {
            _$dW = (this.rect.top + this.rect.bottom) / 2;
            ilt = _$ax._$2I(EnumPatternPositionType.Left, this._$kR);
            irb = _$ax._$2I(EnumPatternPositionType.Right, this._$l8);
            this.rect.left = _$qb.left + ilt;
            this.rect.right = _$qb.right - irb;
        } else {
            _$dW = (this.rect.left + this.rect.right) / 2;
            ilt = _$ax._$2I(EnumPatternPositionType.Top, this._$kR);
            irb = _$ax._$2I(EnumPatternPositionType.Bottom, this._$l8);
            this.rect.top = _$qb.top + ilt;
            this.rect.bottom = _$qb.bottom - irb;
        }
        if ((_$dW >= _$cT) && (_$dW <= _$cU)) {
            this._$le._$25(_$qt);
            if ((panelPositionType == EnumPatternPositionType.Top) || (panelPositionType == EnumPatternPositionType.Bottom)) {
                _$qt.left = this.rect.left;
                _$qt.right = this.rect.right;
                _$9p = EnumPatternPositionType.Left;
            } else if ((panelPositionType == EnumPatternPositionType.Left) || (panelPositionType == EnumPatternPositionType.Right)) {
                _$qt.top = this.rect.top;
                _$qt.bottom = this.rect.bottom;
                _$9p = EnumPatternPositionType.Top;
            }
            this._$6v(_$ax, _$9p, _$cA);
            if (panelPositionType == EnumPatternPositionType.Top || panelPositionType == EnumPatternPositionType.Bottom) {
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
    var rc1 = new WidgetDockRect();
    var rc2 = new WidgetDockRect();
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
            if (this._$kI._$9y == EnumPatternPositionType.Top || this._$kI._$9y == EnumPatternPositionType.Bottom) {
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
        var _$qu = new WidgetDockRect();
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
    var _$qs = new WidgetDockRect();
    var _$qu = new WidgetDockRect();
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
                if (_$oV._$9y == EnumPatternPositionType.Top || _$oV._$9y == EnumPatternPositionType.Bottom) {
                    _$gc = WidgetDockPatternBase._$2z(_$qu) + widgetDockPanel._$kt;
                    if (pme._$9j == EnumPatternPositionType.Bottom) {
                        _$qs.bottom += _$gc;
                    } else _$qs.top -= _$gc;
                    mainPattern._$6v(pme._$oV, _$qs, WidgetDockPatternBase._$6N);
                } else {
                    _$gc = WidgetDockPatternBase._$2A(_$qu) + widgetDockPanel._$kt;
                    if (pme._$9j == EnumPatternPositionType.Right) _$qs.right += _$gc; else _$qs.left -= _$gc;
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
    if (pme._$9j == EnumPatternPositionType.Top) _$9j = EnumPatternPositionType.Bottom; else if (pme._$9j == EnumPatternPositionType.Bottom) _$9j = EnumPatternPositionType.Top; else if (pme._$9j == EnumPatternPositionType.Left) _$9j = EnumPatternPositionType.Right; else _$9j = EnumPatternPositionType.Left;
    if (_$oV._$od != null && _$oV._$od != pme) _$oV._$od._$9j = _$9j; else if (_$oV._$pr != null && _$oV._$pr != pme) _$oV._$pr._$9j = _$9j;
    var _$pu;
    while (_$oV != null) {
        _$pu = null;
        if (_$oV._$od != null && _$oV._$od != pme) _$pu = _$oV._$od; else if (_$oV._$pr != null && _$oV._$pr != pme) _$pu = _$oV._$pr;
        if (_$pu != null && !_$pu._$8y) {
            var _$9o;
            if (_$oV._$9y == EnumPatternPositionType.Top || _$oV._$9y == EnumPatternPositionType.Bottom) {
                _$9o = EnumPatternPositionType.Top;
            } else {
                _$9o = EnumPatternPositionType.Left;
            }
            var rc = new WidgetDockRect();
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
widgetDockPanel.prototype._$4i = function (mainPattern, panelPositionType, _$dg, _$cY) {
    if (this._$iX) {
        this._$4j(mainPattern, _$cY, panelPositionType);
        if (panelPositionType == EnumPatternPositionType.Right) {
            this.rect.left -= _$cY;
            this.rect.right -= _$cY;
        } else if (panelPositionType == EnumPatternPositionType.Left) {
            this.rect.left += _$cY;
            this.rect.right += _$cY;
        } else if (panelPositionType == EnumPatternPositionType.Bottom) {
            this.rect.top -= _$cY;
            this.rect.bottom -= _$cY;
        } else {
            this.rect.top += _$cY;
            this.rect.bottom += _$cY;
        }
        var _$gz = _$cY;
        if (panelPositionType == EnumPatternPositionType.Right || panelPositionType == EnumPatternPositionType.Bottom) _$gz = -_$cY;
        this._$le._$4q(_$gz);
    }
};
widgetDockPanel.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$cA[0] = 0;
    _$ax._$6v(this._$kI, this.rect, _$9c);
};
widgetDockPanel.prototype._$4j = function (mainPattern, _$cY, panelPositionType) {
    mainPattern._$4j(this._$kI, _$cY, panelPositionType);
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
                    if (_$7D[i]._$pA == null) _$7D[i]._$pA = new WidgetDockLocation(100, 200);
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
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", WidgetDockController._elementRootId);
    }
    this._$3I();
    this._$h8.style.backgroundColor = 'ButtonFace';
};
WidgetDockPrototype.bind(_$6R, widgetDockPanel);
_$6R.prototype._$nJ = function (g) {
    widgetDockPanel.prototype._$nJ.call(this, g);
    var rc = _$bC();
    _$nK(g, rc);
    _$4S(g);
};
_$6R.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._$h8);
        rc.top = WidgetDockElementController.getElementTop(this._$h8);
        rc.right = rc.left + WidgetDockElementController.getElementWidth(this._$h8);
        rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._$h8);
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
    var rc = new WidgetDockRect();
    var _$8m = false;
    _$mO._$25(rc);
    if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) {
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
    var _$qu = new WidgetDockRect();
    WidgetDockPatternBase._$2P(_$je, _$qu);
    if (!_$n6._$S()) {
        var _$8N = false;
        var ih = _$qu.bottom - _$qu.top;
        var iw = _$qu.right - _$qu.left;
        if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
            if ((_$pC.y > (_$qu.top + ih / 4)) && (_$pC.y < (_$qu.top + 3 * ih / 4)) && (_$pC.x > _$qu.left) && (_$pC.x < _$qu.right)) _$8N = true;
        } else {
            if ((_$pC.x > (_$qu.left + iw / 4)) && (_$pC.x < (_$qu.left + 3 * iw / 4)) && (_$pC.y > _$qu.top) && (_$pC.y < _$qu.bottom)) _$8N = true;
        }
        if (_$8N) {
            _$oQ[0] = null;
            var sz = new _$5Y();
            var rc = new WidgetDockRect();
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
            if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) _$nz.cy = rect.bottom - rect.top; else _$nz.cx = rect.right - rect.left;
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
    var _$q7 = new WidgetDockRect();
    var _$eq = new Array(1);
    _$eq[0] = -1;
    var _$eR = new Array(1);
    var _$ol;
    var _$9t;
    if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) _$9t = true; else _$9t = false;
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
    var rc = new WidgetDockRect();
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
_$6R.prototype._$4j = function (mainPattern, _$cY, panelPositionType) {
    if (this._$iX) {
        var plt = new WidgetDockLocation();
        var _$qu = new WidgetDockRect();
        this._$25(_$qu);
        plt.x = _$qu.left;
        plt.y = _$qu.top;
        if (panelPositionType == EnumPatternPositionType.Left || panelPositionType == EnumPatternPositionType.Right) {
            if (panelPositionType == EnumPatternPositionType.Left) plt.x = _$qu.left + _$cY; else plt.x = _$qu.left - _$cY;
        } else {
            plt.x = _$qu.left;
            if (panelPositionType == EnumPatternPositionType.Top) plt.y = _$qu.top + _$cY; else plt.y = _$qu.top - _$cY;
        }
        var _$ql = new WidgetDockRect();
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
        if (_$9y == EnumPatternPositionType.Right || _$9y == EnumPatternPositionType.Left) _$9t = false;
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
        if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
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
        if (_$9y == EnumPatternPositionType.Top || _$9y == EnumPatternPositionType.Bottom) {
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
    var _$qu = new WidgetDockRect();
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
    if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) _$9t = false; else _$9t = true;
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
                var _$qo = new WidgetDockRect();
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
                var _$qo = new WidgetDockRect();
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
        WidgetDockElementController.setElementLeftTop(this._$h8, rc.left, rc.top);
        WidgetDockElementController.setElementSize(this._$h8, rc.right - rc.left, rc.bottom - rc.top);
        this._$qJ();
    }
};
_$6R.prototype._$0m = function (_$9t, iwh) {
    var _$e7 = 0;
    if (!_$9t && iwh != (this.rect.right - this.rect.left)) {
        _$e7 = iwh - (this.rect.right - this.rect.left);
        if (this._$le._$j1 == EnumPatternPositionType.Right) this.rect.left -= _$e7;
        this.rect.right = this.rect.left + iwh;
    } else if (_$9t && iwh != (this.rect.bottom - this.rect.top)) {
        _$e7 = iwh - (this.rect.bottom - this.rect.top);
        if (this._$le._$j1 == EnumPatternPositionType.Bottom) this.rect.top -= _$e7;
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
    var _$q7 = new WidgetDockRect();
    var _$9t;
    if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) _$9t = true; else _$9t = false;
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
                var panel = _$8j._panelList[i - 1];
                if (_$gD >= _$eP) panel._$du = (_$gD - _$eP) + panel._$du;
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
        _$mI.reset();
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
        if (this._$le._$j1 == EnumPatternPositionType.Left) {
            this.rect.right += _$dB[0];
        } else if (this._$le._$j1 == EnumPatternPositionType.Right) {
            this.rect.left -= _$dB[0];
        } else if (this._$le._$j1 == EnumPatternPositionType.Top) {
            this.rect.bottom += _$dB[0];
        } else if (this._$le._$j1 == EnumPatternPositionType.Bottom) {
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
    var _$q7 = new WidgetDockRect();
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
    var _$pH = new WidgetDockLocation();
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
    var _$qk = new WidgetDockRect();
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
    var pp = new WidgetDockLocation();
    pp.x = _$q5.left;
    pp.y = _$q5.top;
    WidgetDockPatternBase._$6a(this._$je, pp);
    var _$ov = _$mO;
    var _$9t = false;
    if (_$mO._$j0 == EnumPatternPositionType.Bottom || _$mO._$j0 == EnumPatternPositionType.Top) _$9t = true;
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
        var _$qv = new WidgetDockRect();
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
    if (_$cD == EnumPatternPositionType.Left || _$cD == EnumPatternPositionType.Top) {
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
_$6R.prototype._$ah = function (_$ax, panelPositionType) {
    this._$km = 0;
    widgetDockPanel.prototype._$ah.call(this, _$ax, panelPositionType);
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
    this._location = null;
    this._size = null;
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

function _$6A(_$a7) {
    this._$hJ = null;
    this._$jU = 0;
    this._$il = false;
    this._$mJ = new WidgetDockLocation();
    this._$mK = new WidgetDockFrame();
    this._$j6 = null;
    this._$kQ = null;
    this._$hL;
    this._$ld = null;
    this._$l5 = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", _$a7);
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", _$a7);
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
        rc.left = WidgetDockElementController.getElementLeft(this._$h8);
        rc.top = WidgetDockElementController.getElementTop(this._$h8);
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
    var pt = new WidgetDockLocation();
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
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    if (this._$jU >= 0) {
        this._$mJ.x = WidgetDockElementController.getElementLeft(this._$h8);
        this._$mJ.y = WidgetDockElementController.getElementTop(this._$h8);
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
    var _$pL = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, _$pL);
    var rt = new WidgetDockFrame();
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
    var rt = new WidgetDockFrame();
    rt.x = WidgetDockElementController.getElementLeft(this._$h8);
    rt.y = WidgetDockElementController.getElementTop(this._$h8);
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

function WidgetDockPatternMain(sch) {
    WidgetDockPatternMain.baseConstructor.call(this, sch);
    this._$is = true;
};
WidgetDockPrototype.bind(WidgetDockPatternMain, WidgetDockPatternBase);
WidgetDockPatternMain.prototype.Add = function (com) {
    if (com instanceof WidgetDockFloatPanel) {
        com.setElementZIndex(2);
    } else {
        com.setElementZIndex(3);
    }
};
WidgetDockPatternMain.prototype._$d = function (com) {
    if (com instanceof WidgetDockFloatPanel) {
        com.setElementZIndex(2);
    } else {
        com.setElementZIndex(3);
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


function _$1l() {
    this._$bi = null;
    this._$i9 = true;
    this._$iO = false;
    this._title = "";
    this._$kv = 0;
    this._$hB = null;
    this._$hf = null;
    this._$lw = new WidgetDockRect();
    this._$lA = new WidgetDockRect();
    this._$hZ = new WidgetDockLocation();
    this._$hB = "12px sans-serif";
    this._$h9 = null;
    this._$hV = null;
    this._$hb = null;
    this._$hj = null;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", WidgetDockController._elementRootId);
        this._$h8.style.background = 'ButtonFace';
        this._$h9 = WidgetDockElementController._$0t("div", this._$h8);
        this._$h9.style.font = this._$hB;
        this._$h9._$4t = this;
        this._$h9.onmousedown = _$1l._$14;
        this._$h9.onmousemove = _$1l._$13;
    }
    WidgetDockElementController.setElementSize(this._$h8, 15, 40);
    this._$h8._$4t = this;
    this._$h8.onmousedown = _$1l._$4h;
    this._$h8.onmousemove = _$1l._$4g;
    this._$h8._$mF = _$1l._$mh;
    this._$h8.onmouseout = _$1l._$mv;
};_$1l._$0U = 18;
_$1l._$hd = null;
_$1l._$4Y = 4;
_$1l._$j5 = new WidgetDockSize();
_$1l.prototype._$6o = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._$h8, _$cS, _$do);
    WidgetDockElementController.setElementSize(this._$h8, width, height);
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
        var pt = new WidgetDockLocation();
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
    rc.left = WidgetDockElementController.getElementLeft(this._$h8);
    rc.top = WidgetDockElementController.getElementTop(this._$h8);
    rc.right = rc.left + WidgetDockElementController.getElementWidth(this._$h8);
    rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._$h8);
};
_$1l.prototype.mouseUp = function (e) {
    if (!this._$fT()) return;
    if (!this._$iO) return;
    if (!WidgetDockController._$fQ(e.button)) {
        this._$iO = false;
        this._$T();
        return;
    }
    var _$pH = new WidgetDockLocation();
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
    _$hf._$rz(new WidgetDockSize(150, _$G._$6J + _$bi._$jA));
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
        var _$9P = WidgetDockElementController.getElementLeft(this._$h8);
        var _$9Q = WidgetDockElementController.getElementTop(this._$h8);
        var _$a5 = new WidgetDockLocation();
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
    var _$9P = WidgetDockElementController.getElementLeft(this._$h8);
    var _$9Q = WidgetDockElementController.getElementTop(this._$h8);
    var _$a5 = new WidgetDockLocation();
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
    var pt = new WidgetDockLocation();
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
_$1l.prototype._$rC = function (title) {
    if (title != null) {
        this._title = title;
    } else {
        this._title = "";
    }
    this._$rE(title);
    this._$qJ();
};
_$1l.prototype._$rE = function (_$qW) {
};
_$1l.prototype._$cb = function () {
    return this._title;
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
                if (_$9y == EnumPatternPositionType.Left || _$9y == EnumPatternPositionType.Right) {
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
_$1l.prototype._$nL = function (_$82, ix, iy, width, height, g, _$7Y) {
    if (this._$hj == null) {
        return;
    }
    if (this._$i9) {
        this._$hj.fillStyle = 'ActiveCaption';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, width, height);
    } else {
        this._$hj.fillStyle = 'InactiveCaption';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, width, height);
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
    var si = new WidgetDockRect();
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
        var dt = new WidgetDockSize();
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
    if (_$9f == EnumPatternPositionType.Left || _$9f == EnumPatternPositionType.Right) {
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
    var rc = new WidgetDockFrame();
    var _$eh = 2;
    var _$ec = 3;
    if (_$9y == EnumPatternPositionType.Left || _$9y == EnumPatternPositionType.Right) {
        _$ff = (si.height - _$eh - _$ec * 2) / 2;
        rc.x = si.x + 2;
        rc.y = si.y + _$ff;
        rc.width = si.width - 4;
        rc.height = _$ec;
        _$aD(g, EnumPatternPositionType.Left, rc);
        rc.y += _$eh + _$ec;
        _$aD(g, EnumPatternPositionType.Left, rc);
    } else {
        _$ff = (si.width - _$eh - _$ec * 2) / 2;
        rc.x = si.x + _$ff;
        rc.y = si.y + 2;
        rc.width = _$ec;
        rc.height = si.height - 4;
        _$aD(g, EnumPatternPositionType.Top, rc);
        rc.x += _$eh + _$ec;
        _$aD(g, EnumPatternPositionType.Top, rc);
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
    if (this._title != null) {
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
        var dt = new WidgetDockSize();
        var _$dE = new Array(1);
        WidgetDockElementController._$2L(dt, this._$bS(), _$rX, this._$hj);
        var _$tq = WidgetDockElementController.getElementWidth(this._$h8);
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
            WidgetDockElementController.setElementLeftTop(this._$h9, 2, 2);
            WidgetDockElementController.setElementSize(this._$h9, dt.width + 2, ih - 2);
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
        _$rX = this._title + " " + _$r2;
    } else {
        _$rX = this._title;
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
        WidgetDockElementController.setElementLeftTop(this._$hV, _$pc.left, _$pc.top);
        WidgetDockElementController.setElementSize(this._$hV, _$pc.right - _$pc.left, _$pc.bottom - _$pc.top);
        WidgetDockElementController.setElementLeftTop(this._$hV.childNodes[0], 0, 0);
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
_$1l.prototype._$aE = function (_$cS, _$do, width, height, _$gf) {
    var _$el;
    var _$8v = false;
    if (this._$bi == null) _$8v = true; else if (this._$bi._$jm >= WidgetDockFloatPanel._$0) {
        if ((this._$bi._patternMain._$jv == WidgetDockController._$0R) || (this._$bi._$kB != null && !_$bi._$kB._$ii)) _$8v = true;
    }
    if (_$8v || (_$gf == EnumPatternPositionType.Left) || (_$gf == EnumPatternPositionType.Right)) {
        _$el = height - 3;
        _$cS = _$cS + width - 2 - _$el;
        _$do = _$do + 2;
    } else {
        _$cS += 2;
        _$el = width - 3;
        _$do += 2;
    }
    this._$lw.left = _$cS;
    this._$lw.top = _$do;
    this._$lw.right = this._$lw.left + _$el - 1;
    this._$lw.bottom = this._$lw.top + _$el - 1;
    if (this._$hj == null) {
        if (this._$hb != null) {
            WidgetDockElementController.setElementLeftTop(this._$hb, _$cS, _$do);
            WidgetDockElementController.setElementSize(this._$hb, this._$lw.right - this._$lw.left, this._$lw.bottom - this._$lw.top);
            WidgetDockElementController.setElementLeftTop(this._$hb.childNodes[0], 0, 0);
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
    this._title = "";
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
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
        this._$h8.style.backgroundColor = 'ButtonFace';
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", WidgetDockController._elementRootId);
        this._$h8.style.backgroundColor = 'ActiveCaption';
        this._$h8.style.border = "0px solid";
        this._$hI = WidgetDockElementController._$0t("div", this._$h8);
        this._$hI._$4u = this;
        this._$hI.onmousedown = _$G._$14;
        this._$hI.onmousemove = _$G._$13;
        this._$hI.style.backgroundColor = 'ButtonFace';
    }
    WidgetDockElementController.setElementSize(this._$h8, 40, _$G._$6J);
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
_$G.prototype._$6o = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._$h8, _$cS, _$do);
    WidgetDockElementController.setElementSize(this._$h8, width, height);
    this._$5z();
    this._$qJ();
};
_$G.prototype._$2P = function (rc) {
    rc.left = WidgetDockElementController.getElementLeft(this._$h8);
    rc.top = WidgetDockElementController.getElementTop(this._$h8);
    rc.right = rc.left + WidgetDockElementController.getElementWidth(this._$h8);
    rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._$h8);
};
_$G.prototype._$5Q = function (_$al, _$cS, _$do, width, height) {
    if (this._$i6 != null) {
        var _$e0 = this._$i6.length;
        var i;
        for (i = 0; i < _$e0; i++) {
            var pb = this._$i6[i]._$mO;
            if (pb != null && pb != _$al) {
                pb._$6p(_$cS, _$do, width, height);
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
    var _$pH = new WidgetDockLocation();
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
    var _$q7 = new WidgetDockRect();
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
        WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$h8);
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
    var _$sX = new WidgetDockSize();
    _$sX.width = WidgetDockElementController.getElementWidth(this._$h8);
    _$sX.height = WidgetDockElementController.getElementHeight(this._$h8);
    return _$sX;
};
_$G.prototype._$5z = function () {
    if (this._$i6 == null) return;
    var d = this._$c8();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft;
    if (this._$hI != null) {
        WidgetDockElementController.setElementLeftTop(this._$hI, 0, 0);
        WidgetDockElementController.setElementSize(this._$hI, d.width, _$G._$3U);
    }
    var _$gi = this._$i6.length;
    var _$fv = 0;
    var tab = null;
    var dt = new WidgetDockSize();
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
        var rc = new WidgetDockRect();
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
    var _$pL = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, _$pL);
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0X;
    this._$bi._$lf._$iC = true;
    return this._$bi._$4R(_$pL);
};
_$G.prototype._$ms = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._$bi._$4i(pt);
};
_$G.prototype._$0i = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    pt.x = pt.x - WidgetDockElementController.getElementLeft(this._$h8);
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
    } else return new WidgetDockSize(100, _$G._$6J);
};
_$G.prototype._$0d = function (_$mO, _$pC) {
    var _$sw = new WidgetDockLocation();
    _$sw.x = _$pC.x;
    _$sw.y = _$pC.y;
    _$sw.x = _$sw.x - WidgetDockElementController.getElementLeft(this._$h8);
    _$sw.y = _$sw.y - WidgetDockElementController.getElementTop(this._$h8);
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
        WidgetDockElementController.setElementLeftTop(_$U, _$cv + _$G._$2Z, _$G._$3U + _$ff);
        WidgetDockElementController.setElementSize(_$U, _$cE - _$cv, _$G._$6J - _$G._$3U - _$ff - 4);
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
    var dt = new WidgetDockSize();
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
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
        this._$h8.style.border = "0px solid";
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", WidgetDockController._elementRootId);
        this._$h8.style.border = "1px solid";
    }
    WidgetDockElementController.setElementZIndex(this._$h8, _$b8._windowMain._$jO);
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
_$6C.prototype._$r8 = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._$h8, _$cS, _$do);
    WidgetDockElementController.setElementSize(this._$h8, width, height);
    this._$qJ();
};
_$6C.prototype._$sL = function () {
};
_$6C.prototype._$qJ = function () {
    var iw, ih;
    iw = WidgetDockElementController.getElementWidth(this._$h8);
    ih = WidgetDockElementController.getElementHeight(this._$h8);
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

function _$L() {
};
_$L.prototype._$2G = function (_$nz, _$dk, _$p8, _$8b) {
    this._$ho._$2w(_$nz, _$dk, _$p8, _$8b);
};
_$L.prototype._$67 = function (_$9g, _$nA, _$97) {
    this._$ho._$69(_$9g, _$nA, _$97);
};
