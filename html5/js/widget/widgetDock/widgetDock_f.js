function _$F() {
    this._m$FParent = null;
    this._m$F_1 = null;
    this._m$F_2 = null;
    this._positionType_1 = EnumPatternPositionType.Top;
    this._positionType_2 = EnumPatternPositionType.Bottom;
    this._$8y = false;
    this._$br = 1.0;
    this._$oy = null;
    this._floatPanel = null;
    this._title = "";
    this._$57List = null;
    this._rect = new WidgetDockRect();
    this._tabController = null;
};
_$F.prototype._$e = function (title, _$aP, pt, x, y) {
    var m$57 = new _$57();
    m$57._title = title;
    m$57._$aP = _$aP;
    m$57._point = pt;
    m$57._x = x;
    m$57._y = y;
    if (this._$57List == null) {
        this._$57List = new Array(0);
    }
    this._$57List.push(m$57);
};
_$F.prototype._$1L = function () {
    var _$pO = null;
    if (this._m$F_1 != null) {
        _$pO = this._m$F_1._$1L();
    }
    if (_$pO != null) {
        return _$pO;
    }
    if (this._m$F_2 != null) {
        _$pO = this._m$F_2._$1L();
    }
    if (_$pO != null) {
        return _$pO;
    }
    if (this._m$F_2 == null && this._m$F_1 == null && !this._$8y) {
        return this;
    }
    return null;
};
_$F.prototype._$5w = function (mainPattern, patternPositionType) {
    if (this._$oy != null) {
        if (this._$oy._mainPattern != null) {
            this._$oy._mainPattern._$5E(this._$oy);
        }
        this._$oy._mainPattern = mainPattern;
        mainPattern.add(this._$oy);
    }
    if (this._m$F_1 != null && !this._m$F_1._$8y) {
        this._m$F_1._$5w(mainPattern, patternPositionType);
    }
    if (this._m$F_2 != null && !this._m$F_2._$8y) {
        this._m$F_2._$5w(mainPattern, patternPositionType);
    } else if (this._m$F_2 == null && this._m$F_2 == null && !this._$8y && this._floatPanel != null) {
        this._floatPanel._m$F = this;
        this._floatPanel._patternPositionType = patternPositionType;
        this._floatPanel._pattern = mainPattern;
        if (this._tabController != null && this._tabController._tabList.length > 1) {
            if (this._$57List == null) {
                this._$57List = new Array(0);
            }
            var len = this._tabController._tabList.length;
            for (var i = 0; i < len; i++) {
                var _$nQ = this._tabController._tabList[i]._floatPanel;
                var m$57 = new _$57();
                _$nQ._patternPositionType = patternPositionType;
                m$57._floatPanel = _$nQ;
                _$nQ._pattern = mainPattern;
                this._$57List.push(m$57);
                _$nQ._m$F = this;
            }
        }
    }
};
_$F.prototype._$i = function () {
    var _$8V = false;
    var _$oU = this._m$FParent;
    var pme = this;
    var _$pu;
    while (true) {
        if (_$oU != null) {
            _$pu = null;
            if (_$oU._m$F_1 != null && _$oU._m$F_1 != pme) {
                _$pu = _$oU._m$F_1;
            } else if (_$oU._m$F_2 != null && _$oU._m$F_2 != pme) {
                _$pu = _$oU._m$F_2;
            }
            if (_$pu != null && !_$pu._$8y) {
                break;
            }
            _$oU._$8y = true;
            pme = _$oU;
            _$oU = _$oU._m$FParent;
        } else {
            _$8V = true;
            break;
        }
    }
    return _$8V;
};
_$F.prototype._$2Q = function (_$nb) {
    if (this._m$F_1 != null) {
        this._m$F_1._$2Q(_$nb);
    }
    if (this._m$F_2 != null) {
        this._m$F_2._$2Q(_$nb);
    }
    if (this._m$F_1 == null && this._m$F_2 == null && !this._$8y) {
        if (this._tabController != null && this._tabController._tabList.length > 1) {
            var _$e1 = this._tabController._tabList.length;
            for (var i = 0; i < _$e1; i++) {
                _$nb.add(this._tabController._tabList[i]._floatPanel);
            }
        } else {
            _$nb.add(this._floatPanel);
        }
    }
};
_$F.prototype._$5J = function (_m$F) {
    var _$pO = null;
    if (_m$F != null) {
        this._positionType_1 = _m$F._positionType_1;
        this._positionType_2 = _m$F._positionType_2;
        this._$br = _m$F._$br;
        this._$8y = _m$F._$8y;
        this._$oy = _m$F._$oy;
        if (this._$oy != null) {
            this._$oy._$kE = this;
        }
        if (_m$F._m$F_1 != null && !_m$F._m$F_1._$8y) {
            _$pO = new _$F();
            this._m$F_1 = _$pO;
            _$pO._m$FParent = this;
            _$pO._$5J(_m$F._m$F_1);
        }
        if (_m$F._m$F_2 != null && !_m$F._m$F_2._$8y) {
            _$pO = new _$F();
            this._m$F_2 = _$pO;
            _$pO._m$FParent = this;
            _$pO._$5J(_m$F._m$F_2);
        } else if ((_m$F._m$F_2 == null) && (_m$F._m$F_2 == null) && !_m$F._$8y && (_m$F._floatPanel != null)) {
            this._floatPanel = _m$F._floatPanel;
            this._$8y = false;
            this._positionType_1 = _m$F._positionType_1;
            this._positionType_2 = _m$F._positionType_2;
            this._$br = _m$F._$br;
            this._$8y = _m$F._$8y;
            if (_m$F._tabController != null && _m$F._tabController._tabList.length > 1) {
                this._tabController = _m$F._tabController;
                this._tabController._$kE = this;
            }
        }
    }
};
_$F.prototype._$3F = function (_$nf, _$9f, _$7V, _$n1) {
    var _$oc = new _$F();
    var _$oD = _$nf;
    _$oc._m$FParent = this;
    _$oD._m$FParent = this;
    _$oc._m$F_1 = this._m$F_1;
    _$oc._m$F_2 = this._m$F_2;
    if (this._m$F_1 != null) this._m$F_1._m$FParent = _$oc;
    if (this._m$F_2 != null) this._m$F_2._m$FParent = _$oc;
    _$oc._floatPanel = this._floatPanel;
    if (this._floatPanel != null) {
        if (this._floatPanel._m$F == this) {
            this._floatPanel._m$F = _$oc;
        } else if (this._floatPanel._$l6 == this) {
            this._floatPanel._$l6 = _$oc;
        }
    }
    _$oc._$br = this._$br;
    _$oc._$57List = this._$57List;
    _$oc._tabController = this._tabController;
    _$oc._positionType_1 = this._positionType_1;
    _$oc._$oy = this._$oy;
    if (this._$oy != null) {
        this._$oy._$kE = _$oc;
    }
    _$oc._rect = this._rect;
    if (this._tabController != null) {
        this._tabController._$kE = _$oc;
    }
    _$oc._$6Z(this);
    _$oc._$8y = this._$8y;
    if (_$7V) {
        this._m$F_1 = _$oD;
        this._m$F_2 = _$oc;
    } else {
        this._m$F_1 = _$oc;
        this._m$F_2 = _$oD;
    }
    if (_$9f == EnumPatternPositionType.Left || _$9f == EnumPatternPositionType.Right) {
        this._m$F_1._positionType_2 = EnumPatternPositionType.Left;
        this._m$F_2._positionType_2 = EnumPatternPositionType.Right;
    } else {
        this._m$F_1._positionType_2 = EnumPatternPositionType.Top;
        this._m$F_2._positionType_2 = EnumPatternPositionType.Bottom;
    }
    this._$8y = false;
    _$oD._$8y = true;
    this._$br = 1.0;
    this._positionType_1 = this._m$F_1._positionType_2;
    this._$P(_$oc, _$oD, _$n1);
    this._$57List = null;
    this._tabController = null;
    this._floatPanel = null;
    this._$oy = null;
};
_$F.prototype._$P = function (_$n4, _$nf, _$nj) {
    var _$qs = new WidgetDockRect();
    _$n4._$22(_$qs);
    var _$gd = _$qs.bottom - _$qs.top;
    var _$ge = _$qs.right - _$qs.left;
    if ((this._positionType_1 == EnumPatternPositionType.Top || this._positionType_1 == EnumPatternPositionType.Bottom) && _$gd > 0 && (_$gd > _$nj.y) && _$nj.y > 0) {
        if (_$nf._positionType_2 == EnumPatternPositionType.Top) {
            this._$br = 1.0 * _$nj.y / (_$gd - _$nj.y);
        } else {
            this._$br = 1.0 * (_$gd - _$nj.y) / _$nj.y;
        }
    } else if ((this._positionType_1 == EnumPatternPositionType.Left || this._positionType_1 == EnumPatternPositionType.Right) && _$ge > 0 && (_$ge > _$nj.x) && _$nj.x > 0) {
        if (_$nf._positionType_2 == EnumPatternPositionType.Left) this._$br = 1.0 * _$nj.x / (_$ge - _$nj.x); else this._$br = 1.0 * (_$ge - _$nj.x) / _$nj.x;
    }
};
_$F.prototype._$5K = function (floatPanel) {
    if (this._tabController != null) {
        return this._tabController._$5K(floatPanel);
    }
    return false;
};
_$F.prototype._$6Z = function (_$nl) {
    if (this._$57List == null || this._$57List.length == 0) return;
    var _$gi = this._$57List.length;
    var _$pN;
    for (var i = 0; i < _$gi; i++) {
        _$pN = this._$57List[i]._floatPanel;
        if (_$pN != null) {
            if (_$pN._m$F == _$nl) _$pN._m$F = this;
            if (_$pN._$l6 == _$nl) _$pN._$l6 = this;
        }
    }
};
_$F.prototype._$6m = function (_$cN, mainPattern) {
    if (this._$57List == null || this._$57List.length == 0) {
        return;
    }
    var _$gi = this._$57List.length;
    var _$pN;
    for (var i = 0; i < _$gi; i++) {
        _$pN = this._$57List[i]._floatPanel;
        if (_$pN != null) {
            if (_$pN._pattern == mainPattern) {
                _$pN._$jr = _$cN;
            }
            if (_$pN._patternFloatPanelNormal == mainPattern) {
                _$pN._$k4 = _$cN;
            }
        }
    }
};
_$F.prototype._$o = function (_$aQ, _$d3, _$mM, mainPattern) {
    if (_$mM != this._floatPanel) {
        return;
    }
    if (_$aQ == null || _$d3 < 2) {
        return;
    }
    if (this._$57List == null) {
        this._$57List = new Array(0);
    }
    if (this._tabController == null) {
        this._tabController = new WidgetDockTabController();
    }
    var _$e1 = this._$57List.length;
    for (var i = 0; i < _$e1; i++) {
        if (this._$57List[i]._floatPanel == _$mM) {
            this._$57List.splice(i, 1);
            break;
        }
    }
    this._tabController._$5K(_$mM);
    this._tabController._$kE = this;
    for (var i = 0; i < _$d3; i++) {
        mainPattern.add(_$aQ[i]);
        this.add(_$aQ[i]);
        this._tabController.add(_$aQ[i]);
        _$aQ[i]._m$F = this;
        _$aQ[i]._pattern = mainPattern;
        if (_$aQ[i] == _$mM) {
            this._tabController._$jh = i;
            this._floatPanel = _$aQ[i];
            this._tabController.setVisible(true);
            this._tabController._floatPanel = _$aQ[i];
            _$aQ[i]._$5(this._tabController);
        } else {
            _$aQ[i].setElementVisible(false);
            if (_$mM != null) {
                _$aQ[i]._$ic = false;
                _$aQ[i]._$6p(_$mM._left, _$mM._top, _$mM._width, _$mM._height);
                _$aQ[i]._$ic = true;
            }
        }
    }
    this._tabController.refresh();
};
_$F.prototype._$0w = function (_$aQ, _$d3, _$mM, mainPattern) {
    if (_$aQ == null || _$d3 < 2) return;
    this._$57List = new Array(0);
    this._tabController = new WidgetDockTabController();
    this._tabController._$kE = this;
    for (var i = 0; i < _$d3; i++) {
        this.add(_$aQ[i]);
        this._tabController.add(_$aQ[i]);
        _$aQ[i]._m$F = this;
        mainPattern.add(_$aQ[i]);
        if (_$aQ[i] == _$mM) {
            this._tabController._$jh = i;
            this._floatPanel = _$aQ[i];
            this._tabController.setVisible(true);
            this._tabController._floatPanel = _$aQ[i];
            _$aQ[i]._$5(this._tabController);
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
    if (this._$57List == null || this._$57List.length == 0) return false;
    var _$gi = this._$57List.length;
    for (var i = 0; i < _$gi; i++) {
        if (!this._$8y) {
            return true;
        }
    }
    return false;
};
_$F.prototype._$56 = function (title) {
    if (this._$57List == null || this._$57List.length == 0) {
        return 0;
    }
    var len = this._$57List.length;
    var title$57;
    for (var i = 0; i < len; i++) {
        title$57 = this._$57List[i]._title;
        if (title$57 != null && (title$57 == title)) {
            this._$57List.splice(i, 1);
            break;
        }
    }
    len = this._$57List.length;
    return len;
};
_$F.prototype._$56 = function (floatPanel) {
    if (this._$57List == null || this._$57List.length == 0) {
        return 0;
    }
    var len = this._$57List.length;
    var floatPanel$57;
    if (floatPanel == null) {
        while (len > 0) {
            floatPanel$57 = this._$57List[0]._floatPanel;
            if (floatPanel$57 != null) {
                floatPanel$57._m$F = null;
                this._$57List.splice(0, 1);
                len = this._$57List.length;
            }
        }
        return 0;
    }
    for (var i = 0; i < len; i++) {
        floatPanel$57 = this._$57List[i]._floatPanel;
        if (floatPanel$57 == floatPanel) {
            this._$57List.splice(i, 1);
            floatPanel$57._m$F = null;
            if (floatPanel == this._floatPanel) {
                this._floatPanel = null;
            }
            break;
        }
    }
    len = this._$57List.length;
    return len;
};
_$F.prototype._$31 = function (floatPanel, pt) {
    if (this._tabController != null && this._tabController._tabList.length >= 2) {
        return this._tabController._$0d(floatPanel, pt);
    }
    return false;
};
_$F.prototype._$3v = function (pt) {
    if (this._tabController == null || this._tabController._tabList.length < 2) {
        return false;
    }
    var rc = new WidgetDockRect();
    this._tabController._$2P(rc);
    return WidgetDockPatternBase.isInRect(rc, pt);
};
_$F.prototype._$6G = function (_$mP, _$mQ) {
    if (this._$57List == null) return;
    var _$eU = -1;
    var _$eV = -1;
    var _$e1 = this._$57List.length;
    for (var i = 0; i < _$e1; i++) {
        if (this._$57List[i]._floatPanel == _$mP) _$eU = i; else if (this._$57List[i]._floatPanel == _$mQ) _$eV = i;
        if (_$eU >= 0 && _$eV >= 0) break;
    }
    if (_$eU >= 0 && _$eV >= 0) {
        var _$pN = this._$57List[_$eU];
        this._$57List[_$eU] = this._$57List[_$eV];
        this._$57List[_$eV] = _$pN;
    }
};
_$F.prototype._$2 = function (floatPanel) {
    var rc = new WidgetDockRect();
    this._floatPanel.getRect(rc);
    var _$og = this._floatPanel._pattern;
    _$og.add(floatPanel);
    var _$p1 = this._floatPanel;
    this._floatPanel.setElementVisible(false);
    floatPanel._m$F._floatPanel = floatPanel;
    floatPanel._pattern = _$og;
    floatPanel._$6q(rc);
    var _$eq = this._$1M(floatPanel);
    var _$fy = this._$1M(_$p1);
    if (this._tabController == null || (this._tabController._tabList.length == 0)) {
        this._tabController = new WidgetDockTabController();
        this._tabController._$kE = this;
        if ((_$fy <= _$eq) || (_$eq < 0)) {
            this._tabController.add(_$p1);
            this._tabController.add(floatPanel);
            this._tabController._$jh = 1;
        } else {
            this._tabController.add(floatPanel);
            this._tabController.add(_$p1);
            this._tabController._$jh = 0;
        }
        floatPanel._$5(this._tabController);
    } else {
        if (_$eq >= 0) {
            this._tabController._$3(floatPanel, _$eq);
            this._tabController._$jh = _$eq;
        } else {
            this._tabController.add(floatPanel);
            this._tabController._$jh = this._tabController._tabList.length - 1;
        }
        floatPanel._$5(this._tabController);
    }
    if (this._$57List == null) {
        this._$57List = new Array(0);
        this.add(_$p1);
    }
    this._tabController._floatPanel = floatPanel;
    this.add(floatPanel);
};
_$F.prototype._$1M = function (floatPanel) {
    if (this._$57List == null || this._$57List.length == 0) return -1;
    var _$gi = this._$57List.length;
    var _$e5 = 0;
    var tmp;
    for (var i = 0; i < _$gi; i++) {
        tmp = this._$57List[i]._floatPanel;
        if (tmp != null) {
            if (tmp._m$F == this && !tmp._m$F._$8y && floatPanel != tmp) {
                if (this._tabController != null && this._tabController._$3x(tmp)) _$e5++;
            }
            if (tmp == floatPanel) {
                if ((this._tabController == null) || (this._tabController._tabList.length == 0)) return i; else return _$e5;
            }
        }
    }
    return -1;
};
_$F.prototype.add = function (floatPanel) {
    var m$57 = new _$57();
    if (this._$57List == null || this._$57List.length == 0) {
        if (this._$57List == null) {
            this._$57List = new Array(0);
        }
        if (this._floatPanel != null && this._floatPanel != floatPanel) {
            m$57._floatPanel = this._floatPanel;
            this._$57List.push(m$57);
        }
        m$57._floatPanel = floatPanel;
        this._$57List.push(m$57);
        return;
    }
    var _$e1 = this._$57List.length;
    for (var i = 0; i < _$e1; i++) {
        if (floatPanel == this._$57List[i]._floatPanel) {
            return;
        }
    }
    m$57._floatPanel = floatPanel;
    this._$57List.push(m$57);
};
_$F.prototype._$1K = function (_$nn, _$nG, _$p7, _$pa) {
    var rcf = new WidgetDockRect();
    var rcs = new WidgetDockRect();
    var rcPanel = new WidgetDockRect();
    rcf.left = rcf.right = rcs.left = rcs.right = -6000;
    _$nn[0] = this._m$F_1;
    _$nG[0] = this._m$F_2;
    if (this._m$F_1 != null) {
        this._m$F_1._$22(rcf);
    }
    if (this._m$F_2 != null) {
        this._m$F_2._$22(rcs);
    }
    if ((_$nG[0] != null) && ((_$nG[0]._positionType_2 == EnumPatternPositionType.Top) || (_$nG[0]._positionType_2 == EnumPatternPositionType.Left))) {
        _$nn[0] = this._m$F_2;
        _$nG[0] = this._m$F_1;
        rcPanel.setRect(rcf);
        rcf.setRect(rcs);
        rcs.setRect(rcPanel);
    }
    if (_$p7 != null) {
        _$p7.setRect(rcf);
    }
    if (_$pa != null) {
        _$pa.setRect(rcs);
    }
};
_$F.prototype._$22 = function (_$q1) {
    _$q1.left = _$q1.right = _$q1.top = _$q1.bottom = -6000;
    var _$pQ, _$pT;
    _$pQ = this._m$F_1;
    _$pT = this._m$F_2;
    if (this._m$F_2 != null && (this._m$F_2._positionType_2 == EnumPatternPositionType.Left || this._m$F_2._positionType_2 == EnumPatternPositionType.Top)) {
        _$pQ = this._m$F_2;
        _$pT = this._m$F_1;
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
        if (this._positionType_1 == EnumPatternPositionType.Top || this._positionType_1 == EnumPatternPositionType.Bottom) {
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
        this._floatPanel.getRect(_$q1);
    }
};
_$F.prototype._$03 = function (_$mX, pt, _$nz, _$dk, _$oQ) {
    var _$9z = 0xff;
    if (this._m$F_1 != null || this._m$F_2 != null) {
        var _$rP = new WidgetDockPoint();
        _$rP.x = _$nz.x;
        _$rP.y = _$nz.y;
        if (this._m$F_1 != null) {
            _$9z = this._m$F_1._$03(_$mX, pt, _$nz, _$dk, _$oQ);
        }
        if (_$9z != 0xff && ((_$9z + 1) % 2) == 0) {
            return _$9z;
        }
        var _$9A = 0xff;
        var _$su = null;
        if (this._m$F_2 != null) {
            _$su = new Array(1);
            _$9A = this._m$F_2._$03(_$mX, pt, _$rP, _$dk, _$su);
        }
        if ((_$9A != 0xff) && ((((_$9A + 1) % 2) == 0) || (_$9z == 0xff))) {
            if (_$oQ != null) {
                _$oQ[0] = _$su[0];
            }
            _$nz.x = _$rP.x;
            _$nz.y = _$rP.y;
            return _$9A;
        }
        return _$9z;
    }
    if (!this._$8y) {
        var _$qg = _$mX._rect;
        var _$q7 = new WidgetDockRect();
        var _$9m = 0xff;
        if (this._floatPanel == null) {
            return _$9m;
        }
        this._floatPanel.getRect(_$q7);
        var iw = _$q7.right - _$q7.left;
        var ih = _$q7.bottom - _$q7.top;
        var _$gN = _$q7.left;
        var _$gT = _$q7.top;
        var _$qh = new WidgetDockRect();
        this._floatPanel._panelStateController._$2P(_$qh);
        if (this._floatPanel._$jm >= WidgetDockFloatPanel._$0) {
            if (this._floatPanel._patternPositionType == EnumPatternPositionType.Left || this._floatPanel._patternPositionType == EnumPatternPositionType.Right) {
                _$q7.top = _$qh.bottom;
            } else {
                _$q7.left = _$qh.right;
            }
        } else {
            if (this._floatPanel._$jm == WidgetDockFloatPanel._$3Q) {
                _$q7.left = _$qh.right;
            } else if (this._floatPanel._$jm == WidgetDockFloatPanel._$6K) {
                _$q7.top = _$qh.bottom;
            } else if (this._floatPanel._$jm == WidgetDockFloatPanel._$5j) {
                _$q7.right = _$qh.left;
            } else {
                _$q7.bottom = _$qh.top;
            }
        }
        if (_$qh.left != 0 || _$qh.right != 0 || _$qh.top != 0 || _$qh.bottom != 0) {
            if (WidgetDockPatternBase.isInRect(_$qh, pt) && (this._floatPanel == null || this._floatPanel != null) && (_$mX._floatPanel == null || _$mX._floatPanel != null)) {
                _$nz.x = iw;
                _$oQ[0] = this._floatPanel;
                _$nz.y = ih;
                _$mX._$ij = true;
                _$mX._$kJ = this._floatPanel;
                _$qh.bottom = _$qh.top + _$nz.y;
                _$mX._$j1 = this._floatPanel._patternPositionType;
                _$mX._$kn = _$gN;
                _$mX._$kq = _$gT;
                return (this._floatPanel._patternPositionType * 2 + 1);
            }
        }
        _$9z = WidgetDockPatternBase._$m(_$q7, pt);
        if (_$9z != 0xff) {
            if (((_$9z + 1) % 2) == 0) {
                _$oQ[0] = this._floatPanel;
                if (parseInt(_$9z / 2) == EnumPatternPositionType.Bottom || parseInt(_$9z / 2) == EnumPatternPositionType.Top) {
                    _$nz.x = WidgetDockPatternBase.getWidth(_$q7);
                    if ((_$nz.y >= (_$q7.bottom - _$q7.top))) {
                        if (_$qg.left != _$q7.left || _$qg.right != _$q7.right) {
                            _$nz.y = (_$q7.bottom - _$q7.top) / 2;
                            if (WidgetDockPatternBase.getHeight(_$q7) < _$dk) {
                                _$9z = 0xff;
                            }
                        }
                    }
                } else {
                    _$nz.y = WidgetDockPatternBase.getHeight(_$q7);
                    if ((_$nz.x >= (_$q7.right - _$q7.left))) {
                        if (_$qg.top != _$q7.top || _$qg.bottom != _$q7.bottom) {
                            _$nz.x = (_$q7.right - _$q7.left) / 2;
                            if (WidgetDockPatternBase.getWidth(_$q7) < _$dk) {
                                _$9z = 0xff;
                            }
                        }
                    }
                }
                _$mX._$j1 = parseInt(_$9z / 2);
                WidgetDockPatternBase._$2c(_$mX, _$q7, _$nz);
                return _$9z;
            } else if (_$9m == 0xff) {
                _$9m = _$9z;
                _$oQ[0] = this._floatPanel;
                return _$9z;
            }
        }
    }
    return 0xff;
};
_$F.prototype._$4s = function (floatPanel, sch) {
    var _$e1 = 0;
    if (this._m$F_1 != null) {
        _$e1 += this._m$F_1._$4s(floatPanel, sch);
    }
    if (_$e1 >= 2) {
        return _$e1;
    }
    if (this._m$F_2 != null) {
        _$e1 += this._m$F_2._$4s(floatPanel, sch);
    }
    if (_$e1 >= 2) {
        return _$e1;
    }
    if (this._m$F_1 == null && this._m$F_2 == null && !this._$8y) {
        if (this._floatPanel != null && this._floatPanel != floatPanel) {
            _$e1++;
            if (!sch) {
                if (this._tabController != null && this._tabController._tabList.length > 1) {
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
    if (this._m$F_1 != null) {
        _$8y = this._m$F_1._$05();
        if (!_$8y) {
            return _$8y;
        }
    }
    if (this._m$F_2 != null) {
        _$8y = this._m$F_2._$05();
        if (!_$8y) {
            return _$8y;
        }
    }
    if (this._m$FParent == null) {
        return true;
    }
    if (this._m$F_2 == null && this._m$F_1 == null && this._floatPanel != null) {
        return this._$8y;
    }
    return true;
};
