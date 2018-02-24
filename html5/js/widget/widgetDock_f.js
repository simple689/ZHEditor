
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
_$F.prototype._$5w = function (mainPattern, patternPositionType) {
    if (this._$oy != null) {
        if (this._$oy._$kG != null) {
            this._$oy._$kG._$5E(this._$oy);
        }
        this._$oy._$kG = mainPattern;
        mainPattern.Add(this._$oy);
    }
    if (this._$od != null && !this._$od._$8y) {
        this._$od._$5w(mainPattern, patternPositionType);
    }
    if (this._$pr != null && !this._$pr._$8y) {
        this._$pr._$5w(mainPattern, patternPositionType);
    } else if ((this._$pr == null) && (this._$pr == null) && !this._$8y && (this._$of != null)) {
        this._$of._$kA = this;
        this._$of._$j0 = patternPositionType;
        this._$of._$kB = mainPattern;
        if (this._$o5 != null && this._$o5._$i6.length > 1) {
            if (this._$l1 == null) this._$l1 = new Array(0);
            var _$e1 = this._$o5._$i6.length;
            var i;
            for (i = 0; i < _$e1; i++) {
                var _$nQ = this._$o5._$i6[i].floatPanel;
                var _$ol = new _$57();
                _$nQ._$j0 = patternPositionType;
                _$ol.floatPanel = _$nQ;
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
                _$nb.addFloatPanel(this._$o5._$i6[i].floatPanel);
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
_$F.prototype._$5K = function (floatPanel) {
    if (this._$o5 != null) {
        return this._$o5._$5K(floatPanel);
    }
    return false;
};
_$F.prototype._$6Z = function (_$nl) {
    if (this._$l1 == null || this._$l1.length == 0) return;
    var _$gi = this._$l1.length;
    var _$pN;
    var i;
    for (i = 0; i < _$gi; i++) {
        _$pN = this._$l1[i].floatPanel;
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
        _$pN = this._$l1[i].floatPanel;
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
        if (this._$l1[i].floatPanel == _$mM) {
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
            this._$o5._floatPanel = _$aQ[i];
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
            this._$o5._floatPanel = _$aQ[i];
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
_$F.prototype._$56 = function (floatPanel) {
    if (this._$l1 == null || this._$l1.length == 0) return 0;
    var _$pN;
    var _$gi = this._$l1.length;
    if (floatPanel == null) {
        while (_$gi > 0) {
            _$pN = this._$l1[0].floatPanel;
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
        _$pN = this._$l1[i].floatPanel;
        if (_$pN == floatPanel) {
            this._$l1.splice(i, 1);
            _$pN._$kA = null;
            if (floatPanel == this._$of) this._$of = null;
            break;
        }
    }
    _$gi = this._$l1.length;
    return _$gi;
};
_$F.prototype._$31 = function (floatPanel, _$pC) {
    if (this._$o5 != null && this._$o5._$i6.length >= 2) {
        return this._$o5._$0d(floatPanel, _$pC);
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
        if (this._$l1[i].floatPanel == _$mP) _$eU = i; else if (this._$l1[i].floatPanel == _$mQ) _$eV = i;
        if (_$eU >= 0 && _$eV >= 0) break;
    }
    if (_$eU >= 0 && _$eV >= 0) {
        var _$pN = this._$l1[_$eU];
        this._$l1[_$eU] = this._$l1[_$eV];
        this._$l1[_$eV] = _$pN;
    }
};
_$F.prototype._$2 = function (floatPanel) {
    var rc = new WidgetDockRect();
    this._$of._$25(rc);
    var _$og = this._$of._$kB;
    _$og.Add(floatPanel);
    var _$p1 = this._$of;
    this._$of.setElementVisible(false);
    floatPanel._$kA._$of = floatPanel;
    floatPanel._$kB = _$og;
    floatPanel._$6q(rc);
    var _$eq = this._$1M(floatPanel);
    var _$fy = this._$1M(_$p1);
    if (this._$o5 == null || (this._$o5._$i6.length == 0)) {
        this._$o5 = new _$G();
        this._$o5._$kE = this;
        if ((_$fy <= _$eq) || (_$eq < 0)) {
            this._$o5.Add(_$p1);
            this._$o5.Add(floatPanel);
            this._$o5._$jh = 1;
        } else {
            this._$o5.Add(floatPanel);
            this._$o5.Add(_$p1);
            this._$o5._$jh = 0;
        }
        floatPanel._$5(this._$o5);
    } else {
        if (_$eq >= 0) {
            this._$o5._$3(floatPanel, _$eq);
            this._$o5._$jh = _$eq;
        } else {
            this._$o5.Add(floatPanel);
            this._$o5._$jh = this._$o5._$i6.length - 1;
        }
        floatPanel._$5(this._$o5);
    }
    floatPanel._$sL();
    if (this._$l1 == null) {
        this._$l1 = new Array(0);
        this.Add(_$p1);
    }
    this._$o5._floatPanel = floatPanel;
    this.Add(floatPanel);
    _$p1._$bf(false);
};
_$F.prototype._$1M = function (floatPanel) {
    if (this._$l1 == null || this._$l1.length == 0) return -1;
    var _$gi = this._$l1.length;
    var _$e5 = 0;
    var tmp;
    var i;
    for (i = 0; i < _$gi; i++) {
        tmp = this._$l1[i].floatPanel;
        if (tmp != null) {
            if (tmp._$kA == this && !tmp._$kA._$8y && floatPanel != tmp) {
                if (this._$o5 != null && this._$o5._$3x(tmp)) _$e5++;
            }
            if (tmp == floatPanel) {
                if ((this._$o5 == null) || (this._$o5._$i6.length == 0)) return i; else return _$e5;
            }
        }
    }
    return -1;
};
_$F.prototype.Add = function (floatPanel) {
    if (this._$l1 == null || this._$l1.length == 0) {
        if (this._$l1 == null) this._$l1 = new Array(0);
        var _$ol;
        if (this._$of != null && this._$of != floatPanel) {
            _$ol = new _$57();
            _$ol.floatPanel = this._$of;
            this._$l1.push(_$ol);
        }
        _$ol = new _$57();
        _$ol.floatPanel = floatPanel;
        this._$l1.push(_$ol);
        return;
    }
    var _$e1 = this._$l1.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (floatPanel == this._$l1[i].floatPanel) return;
    }
    var _$ol = new _$57();
    _$ol.floatPanel = floatPanel;
    this._$l1.push(_$ol);
};
_$F.prototype._$1K = function (_$nn, _$nG, _$p7, _$pa) {
    var rcf = new WidgetDockRect();
    var rcs = new WidgetDockRect();
    var rcPanel = new WidgetDockRect();
    rcf.left = rcf.right = rcs.left = rcs.right = -6000;
    _$nn[0] = this._$od;
    _$nG[0] = this._$pr;
    if (this._$od != null) this._$od._$22(rcf);
    if (this._$pr != null) this._$pr._$22(rcs);
    if ((_$nG[0] != null) && ((_$nG[0]._$9j == EnumPatternPositionType.Top) || (_$nG[0]._$9j == EnumPatternPositionType.Left))) {
        _$nn[0] = this._$pr;
        _$nG[0] = this._$od;
        rcPanel.setRect(rcf);
        rcf.setRect(rcs);
        rcs.setRect(rcPanel);
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
        this._$of._panelStateController._$2P(_$qh);
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
_$F.prototype._$4s = function (floatPanel, _$8e) {
    var _$e1 = 0;
    if (this._$od != null) {
        _$e1 += this._$od._$4s(floatPanel, _$8e);
    }
    if (_$e1 >= 2) return _$e1;
    if (this._$pr != null) _$e1 += this._$pr._$4s(floatPanel, _$8e);
    if (_$e1 >= 2) return _$e1;
    if (this._$od == null && this._$pr == null && !this._$8y) {
        if (this._$of != null && this._$of != floatPanel) {
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
