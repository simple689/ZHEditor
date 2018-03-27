function WidgetDockFloatPanel(window, title) {
    this._$jz = -1;
    this._$lf = new _$6P();
    this._$lt = null;
    this._$lK = null;
    this._$iL = false;
    this._$jm = WidgetDockFloatPanel._$0;
    this._$jA = WidgetDockPanelStateController._$0U;
    this._$iG = false;
    this._$iP = false;
    this._$ly;
    this._$lx;
    this._$ko;
    this._$kp;
    this._$ks;
    this._$kr;
    this._$iv;
    this._$jG;
    this._$jE;
    this._$iM;
    this._$je;
    this._$kW;
    this._$j3;
    this._$jr;
    this._$k4;
    this._$ls;
    this._$kA;
    this._$l6;
    this._$ir;
    this._$kc;
    this._$id = true;
    this._$kj = WidgetDockFloatPanel._$0;
    this._$lJ;
    this._$l7;
    this._$lN;
    this._$hz = null;
    this._$jE = 0;

    this._element = null;
    this._left = 0;
    this._top = 0;
    this._width = 0;
    this._height = 0;
    this._patternPositionType;
    this._pattern;
    this._panelStateController = null;

    this._pinType = EnumPinType.Show;
    this._isInitLayout = false;

    this._windowType = EnumWindowType.Main;
    this._window = null;
    this._patternMain;
    this._title = title;
    if (window == null) {
        this._windowType = EnumWindowType.Main;
    } else {
        this._windowType = EnumWindowType.Normal;
        this._window = window;
        this.setPatternAndTitle(window._patternMain, title);
    }
    if (WidgetDockFloatPanel._floatPanelController == null) {
        WidgetDockFloatPanel._floatPanelController = new WidgetDockListController();
    }
    WidgetDockFloatPanel._floatPanelController.add(this);
};
WidgetDockFloatPanel._floatPanelController = null;

WidgetDockFloatPanel._$3Q = 0;
WidgetDockFloatPanel._$6K = 1;
WidgetDockFloatPanel._$5j = 2;
WidgetDockFloatPanel._$q = 3;

WidgetDockFloatPanel._$0 = 7;

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
WidgetDockFloatPanel._$jy = 0;
WidgetDockFloatPanel._$iY = false;
WidgetDockFloatPanel._$k2 = 0;
WidgetDockFloatPanel._$k3 = 0;
WidgetDockFloatPanel._$lL = new _$5Y();
WidgetDockFloatPanel._$cj = new WidgetDockRect();

WidgetDockFloatPanel.prototype.setPatternAndTitle = function (patternMain, title) {
    this._title = title;
    if (this._windowType == EnumWindowType.Main) {
        return;
    }
    this._patternMain = patternMain;
    this.reset();
    this.setElementVisible(true);
    this.createPanelStateController(title);
};
WidgetDockFloatPanel.prototype.reset = function () {
    this._pinType = EnumPinType.Show;
    this._isInitLayout = false;

    this._$kc = 0xffff;
    this._$kj = WidgetDockFloatPanel._$0;
    this._$iv = true;
    this._$lt = new WidgetDockLocation();
    this._$lK = new _$5Y();
    this._$lJ = new _$5Y();
    this._$lx = new WidgetDockRect();
    WidgetDockFloatPanel._$lL = new _$5Y();
    this._$ly = new WidgetDockRect();
    this._$ls = new WidgetDockLocation();
    this._$lN = new Array(1);
    this._$lN[0] = 0;
    this._$ir = true;
    this._$iP = true;
    this._$lt.x = 0;
    this._$lt.y = 0;
    this._$lK.cx = -140;
    this._$lK.cy = -200;
    this._$jE = 0;
    this._$kA = null;
    this._$l6 = null;
    this._$kW = null;
    this._pattern = null;
    this._$l7 = null;
    WidgetDockPatternBase.resetRect(this._$lx);
    WidgetDockPatternBase.resetRect(this._$ly);
    this._$j3 = this._patternPositionType = 0;
    this._$kA = null;
    this._$jr = 0xffffffff;
};
WidgetDockFloatPanel.prototype.setElementVisible = function (isVisible) {
    if (this._panelStateController != null) {
        this._panelStateController.setVisible(isVisible);
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
WidgetDockFloatPanel.prototype.createPanelStateController = function (title) {
    this._panelStateController = new WidgetDockPanelStateController();
    this._panelStateController.setFloatPanel(this);
    this._panelStateController.setTitle(title);
};
WidgetDockFloatPanel.prototype._$c3 = function () {
    return this._title;
};
WidgetDockFloatPanel.prototype.getTitle = function () {
    if (this._title != null && this._title.length > 0) {
        return this._title;
    } else {
        return this._panelStateController.getTitle();
    }
};
WidgetDockFloatPanel.prototype._$r6 = function (_$7J) {
    if (this._pinType == EnumPinType.Hide) return;
    if (this._windowType == EnumWindowType.Main) return;
    this._panelStateController._$r6(_$7J);
};
WidgetDockFloatPanel.prototype._$ag = function () {
    return new WidgetDockPanel();
};
WidgetDockFloatPanel.prototype._$69 = function (_$9g, layoutController, _$97) {
    this._$lf._$j1 = _$9g;
    if (layoutController != null) {
        this._$lf._$ky = layoutController._$kA;
        this._$lf._$j2 = _$97;
    } else {
        this._$lf._$ky = null;
    }
};
WidgetDockFloatPanel.prototype._$2w = function (_$nz, _$dk, _$p8, _$8b) {
    var _$fl = _$nz.cx;
    var _$fm = _$nz.cy;
    if (this._$lf._$j1 == EnumPatternPositionType.Top || this._$lf._$j1 == EnumPatternPositionType.Bottom) {
        if (!_$8b) {
            _$nz.cx = _$p8.right - _$p8.left;
        }
        if (this._$lf._$ij) return;
        if (this._$ir || !_$8b) {
            _$nz.cy = _$dk;
        }
    } else {
        if (!_$8b) {
            _$nz.cy = _$p8.bottom - _$p8.top;
        }
        if (this._$lf._$ij) return;
        if (this._$ir || !_$8b) _$nz.cx = _$dk;
    }
    if (this._$lf._$j1 == EnumPatternPositionType.Bottom) {
        _$fm = _$fm - _$nz.cy;
        this._$lf._$kq = this._$lf._$kq + _$fm;
    } else if (this._$lf._$j1 == EnumPatternPositionType.Right) {
        _$fl = _$fl - _$nz.cx;
        this._$lf._$kn = this._$lf._$kn + _$fl;
    }
};
WidgetDockFloatPanel.prototype.mouseDown = function (pt) {
    var _$pL = _$c0();
    _$pL.x = _$pL.x + pt.x;
    _$pL.y = _$pL.y + pt.y;
    _$4R(_$pL);
};
WidgetDockFloatPanel.prototype.setTitle = function (title) {
    _panelStateController.setTitle(title);
    if (_$kA != null && _$kA._tabController != null && _$kA._tabController._tabList.length > 1) {
        _$kA._tabController._$4J(this, title);
    }
    var _$fs;
    if (this._$kj <= _$q) _$fs = this._$kj; else _$fs = this._patternPositionType;
    if (_pinType == EnumPinType.Hide && _$fs <= EnumPatternPositionType.Bottom && _patternMain._$lk != null && _patternMain._$lk[_$fs] != null) {
        _patternMain._$lk[_$fs]._$4J(this, title);
    }
};
WidgetDockFloatPanel.prototype._$ms = function (pt) {
    var _$pL = _$c0();
    _$pL.x = _$pL.x + pt.x;
    _$pL.y = _$pL.y + pt.y;
    _$4i(_$pL);
};
WidgetDockFloatPanel.prototype._$R = function (pt, patternPositionType, _$nz) {
    this._$lf._patternPositionType = this._patternPositionType;
    this._$lf._$jr = this._$jr;
    this._$lf._$kA = this._$kA;
    this._$lf._$kx = this;
    this._$lf._$ir = this._$ir;
    if (!this._$Q()) {
        this._$lf._$it = true;
    } else {
        this._$lf._$it = false;
    }
    if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
        this.getRect(this._$lf._$lC);
    } else {
        this._pattern.getWindowRect(this._$lf._$lC);
    }
    var _$og = null;
    var _$oh = null;
    if (this._windowType == EnumWindowType.Normal) {
        _$oh = this._window._$2i();
    } else {
        _$oh = _$6B._$kL;
    }
    var _$e1 = _$oh.length;
    var _$qj = new WidgetDockRect();
    var _$8R;
    for (var i = 0; i < _$e1; i++) {
        var pmi;
        if (this._windowType == EnumWindowType.Normal) {
            pmi = _$oh[i];
        }
        if (pmi._$bG() == null) continue;
        pmi.getWindowRect(_$qj);
        _$8R = false;
        if (!pmi._$it) {
            _$8R = WidgetDockPatternBase.isInRect(_$qj, pt);
        } else {
            WidgetDockFloatPanel._$cj.setRect(_$qj);
            WidgetDockFloatPanel._$cj.left -= WidgetDockPatternBase._$A;
            WidgetDockFloatPanel._$cj.right += WidgetDockPatternBase._$A;
            WidgetDockFloatPanel._$cj.top -= WidgetDockPatternBase._$A;
            WidgetDockFloatPanel._$cj.bottom += WidgetDockPatternBase._$A;
            _$8R = WidgetDockPatternBase.isInRect(WidgetDockFloatPanel._$cj, pt);
            if (_$8R) {
                if ((pmi == this._pattern) && WidgetDockFloatPanel._$iY) {
                    _$og = null;
                    patternPositionType[0] = 0xff;
                    this._$lf._$j1 = 0xff;
                } else {
                    _$og = pmi._$1Z(this._$lf, this, pt, patternPositionType, _$nz);
                    if (this._$lf._$j1 >= 0 && this._$lf._$j1 <= 7) {
                        return _$og;
                    }
                }
                if (WidgetDockPatternBase.isInRect(_$qj, pt) && pmi != this._pattern) {
                    return _$og;
                }
            }
        }
    }
    _$og = null;
    _$og = this._patternMain._$1Z(this._$lf, this, pt, patternPositionType, _$nz);
    if (patternPositionType[0] >= 0 && patternPositionType[0] <= 7) {
        if (this._$lf._$iM) {
            this._patternMain._$0f(this._$lf, patternPositionType, _$nz);
        }
        return _$og;
    }
    return _$og;
};
WidgetDockFloatPanel.prototype._$fR = function () {
    if (this._$kc == 0 && !this._$id) {
        return false;
    }
    return true;
};
WidgetDockFloatPanel.prototype.add = function (s, _$a0) {
    return _$a0;
};
WidgetDockFloatPanel.prototype.addContentDiv = function (element) {
    this._element = element;
    element.style.position = "absolute";
};
WidgetDockFloatPanel.prototype._$6p = function (left, top, width, height) {
    if (!this._$ir) {
        this._$lJ.cx = width;
        this._$lJ.cy = height;
    }
    this._left = left;
    this._top = top;
    this._width = width;
    this._height = height;
    this._$qK();
};
WidgetDockFloatPanel.prototype._$6q = function (_$q4) {
    this._$6p(_$q4.left, _$q4.top, WidgetDockPatternBase.getWidth(_$q4), WidgetDockPatternBase.getHeight(_$q4));
};
WidgetDockFloatPanel.prototype.setVisible = function (sch) {
    if (this._windowType == EnumWindowType.Main) {
        this.setElementVisible(sch);
        return;
    }
    this._patternMain._$rB(this, sch);
};
WidgetDockFloatPanel.prototype._$rB = function (sch) {
    if (!this._isInitLayout) {
        this.setElementVisible(sch);
        return;
    }
    if (sch) {
        if (!this._$fT()) {
            this.setElementVisible(true);
            if (this._pinType == EnumPinType.Hide) {
                if (this._patternMain != null) {
                    this._window._patternMain._$6t(this);
                }
                return;
            }
            if (this._pattern == null) {
            } else if (this._$kA != null) {
                if (this._pattern._isMain) {
                    this._$d(this._pattern);
                    this._$lf._$j1 = this._patternPositionType;
                    this._$5u();
                    this._pattern._$18(this, null);
                    this.setElementVisible(true);
                    this._$qz();
                    this.refresh();
                } else {
                    this._$kW = this._pattern;
                    this._$Z();
                }
            } else this._$18();
            this._$iP = true;
        }
    } else {
        if (!this._$fT()) {
            if (this._$kA == null || this._$kA._tabController == null || this._$kA._tabController._tabList.length <= 1) return;
            this._$kA._tabController._$6b(this);
        } else {
            if (this._pinType == EnumPinType.Hide) {
                this._patternMain._$5N();
                return;
            }
        }
        var _$8L = false;
        if (this._pattern != this._patternMain) _$8L = true;
        this._pattern._$5H(this, null);
        this._$ir = _$8L;
        this.setElementVisible(false);
        this._$iP = false;
    }
};
WidgetDockFloatPanel.prototype._$18 = function () {
    var _$8s = false;
    if (this._pattern == null) {
        if (this._$jE == 0) {
            this._pattern = this._patternMain;
            this._$jE = 1;
        } else {
            this._$Z();
            _$8s = true;
            if (this._$l7 == null) this._$jE = 0;
        }
    } else {
        if (!this._pattern._isMain) {
            this._$kW = this._pattern;
            this._$Z();
            _$8s = true;
        }
    }
    if (this._pattern._isMain) {
        this._$ir = false;
    } else {
        this._$ir = true;
    }
    this.setElementVisible(false);
    this._$d(this._pattern);
    this.setElementVisible(true);
    if (!_$8s) {
        this._pattern._$18(this, null);
    }
    this._patternMain._$1(this);
};
WidgetDockFloatPanel.prototype._$d = function (mainPattern) {
    mainPattern._$d(this);
};
WidgetDockFloatPanel.prototype._$Z = function () {
    if (this._$kW == null) {
        if (this._windowType == EnumWindowType.Normal) {
            this._$kW = new _$J(false);
        } else {
            this._$kW = new _$K(false);
        }
        this._$kW._$kV = this._patternMain;
        this._patternPositionType = 0;
        this._$jr = 0xffffffff;
        this._$kA = null;
    }
    this._$kW._$n(this);
};
WidgetDockFloatPanel.prototype._$1R = function () {
    this._patternMain._$s8(this);
};
WidgetDockFloatPanel.prototype._$s8 = function () {
    var rc = new WidgetDockRect();
    rc.left = this._$lt.x;
    rc.top = this._$lt.y;
    rc.right = rc.left + this._$lK.cx;
    rc.bottom = rc.top + this._$lK.cy;
    if (this._pattern != null) {
        var _$aQ = null;
        if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V && this._$kA._tabController != null && (this._$kA._tabController._tabList.length > 1)) {
            _$aQ = this._$kA._tabController._$21();
        } else {
            _$aQ = new Array(1);
            _$aQ[0] = this;
        }
        if (!this._pattern._isMain) {
            if (this._pattern._$4s(null, false)) {
                this._$5P(_$aQ);
                for (var i = 0; i < _$aQ.length; i++) {
                    _$aQ[i]._pattern._$53(_$aQ[i]);
                    _$aQ[i]._pattern._$l(_$aQ[i]);
                }
                this._$ir = false;
            } else this._$ir = true;
        } else {
            var _$fI = 0;
            var _$91 = new Array(_$aQ.length);
            while (_$fI < _$aQ.length) {
                for (var i = 0; i < _$aQ.length; i++) {
                    if (_$aQ[i]._$fT() && !_$91[i]) {
                        var _$gy = _$aQ[i]._$jr;
                        var _$pO = _$aQ[i]._$kA;
                        var _$9C = _$aQ[i]._patternPositionType;
                        var _$sv = _$aQ[i]._pattern;
                        _$aQ[i]._$jr = _$aQ[i]._$k4;
                        _$aQ[i]._$kA = _$aQ[i]._$l6;
                        _$aQ[i]._patternPositionType = _$aQ[i]._$j3;
                        _$aQ[i]._pattern = _$aQ[i]._$l7;
                        if (_$aQ[i]._pattern != null && !_$aQ[i]._pattern._isMain) {
                            _$aQ[i]._pattern._$53(_$aQ[i]);
                        }
                        _$aQ[i]._$k4 = _$gy;
                        _$aQ[i]._$l6 = _$pO;
                        _$aQ[i]._$j3 = _$9C;
                        _$aQ[i]._$l7 = _$sv;
                        _$aQ[i]._pattern = _$sv;
                        _$aQ[i]._$kA = _$pO;
                        _$aQ[i]._patternPositionType = _$9C;
                        _$aQ[i]._$jr = _$gy;
                        if (_$aQ[i]._pattern != null) {
                            _$aQ[i]._pattern._$5H(_$aQ[i], null);
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
    this._$ir = true;
    this._$jE = 1;
    this._$kW = null;
    this._$Z();
    this._$qz();
};
WidgetDockFloatPanel.prototype._$31 = function (pt) {
    return this._$kA._$31(this, pt);
};
WidgetDockFloatPanel.prototype._$6F = function () {
    if (this._$j3 <= 3 && !this._$1k(this._$l7, this._$j3)) return;
    if ((this._$l7 != null) && (!this._$l7._isMain) && (!this._$id)) return;
    var _$pR = this._pattern;
    var _$pO = this._$kA;
    var _$9B = this._$jr;
    var _$9C = this._patternPositionType;
    if (this._pattern != null) {
        this._pattern._$5H(this, null);
    }
    this._pattern = this._$l7;
    this._$kA = this._$l6;
    this._$jr = this._$k4;
    this._patternPositionType = this._$j3;
    this._$l7 = _$pR;
    this._$l6 = _$pO;
    this._$k4 = _$9B;
    this._$j3 = _$9C;
    this._$lf._$j1 = this._patternPositionType;
    this._$5u();
    this._$18();
    this._$qz();
};
WidgetDockFloatPanel.prototype._$4L = function () {
    _$5d();
};
WidgetDockFloatPanel.prototype._$5d = function () {
    if (_pinType == EnumPinType.Hide) return;
    _$6F();
};
WidgetDockFloatPanel.prototype._$9X = function () {
    if (this._pinType == EnumPinType.Hide) {
        this._window._patternMain._$5N();
        return true;
    }
    this._pattern._$5H(this, null);
    this.setElementVisible(false);
    this._$iP = false;
    return true;
};
WidgetDockFloatPanel.prototype.clickButtonPin = function () {
    if (this._pinType == EnumPinType.Show) {
        if (this._pinType == EnumPinType.Hide) {
            WidgetDockController._$8l._$5N();
        }
        this._pattern._$5H(this, null);
        this.setElementVisible(false);
        this._$iP = false;
        this._pinType = EnumPinType.Hide;
        if (this._$kj > WidgetDockFloatPanel._$q) {
            this._patternMain._$8(this._patternPositionType, this);
        } else {
            this._patternMain._$8(this._$kj, this);
        }
        this._patternMain._$5A();
        this._$qz();
    } else {
        this.setElementVisible(false);
        if (this._$kj <= WidgetDockFloatPanel._$q) {
            this._patternMain._$5M(this._$kj, this);
        } else {
            this._patternMain._$5M(this._patternPositionType, this);
        }
        this._patternMain._$5A();
        this._window._patternMain._$5N();
        this._$iP = false;
        this._pinType = EnumPinType.Show;
        this.setVisible(true);
    }
};
WidgetDockFloatPanel.prototype._$5u = function () {
};
WidgetDockFloatPanel._$e4 = 0;
WidgetDockPrototype.bind(WidgetDockWindow, WidgetDockFloatPanel);

WidgetDockFloatPanel.prototype._$4R = function (pt) {
    return this._$sa(pt);
};
WidgetDockFloatPanel.prototype._$sa = function (pt) {
    this._$lf._$j1 = 0xff;
    this._$lf._$ij = false;
    if (this._pattern != null && this._pattern._isMain) {
        if ((WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) && this._$kA._tabController != null && this._$kA._tabController._tabList.length > 1) {
            var _$f8;
            var _$p4 = this._$kA._tabController._$21();
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
        }
    }
    WidgetDockFloatPanel._$iY = false;
    if (this._pattern != null && !this._pattern._isMain) {
        if (this._pattern._$it) {
            if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0X) {
                WidgetDockFloatPanel._$iY = !this._pattern._$4s(null, false);
            } else if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) {
                WidgetDockFloatPanel._$iY = !this._pattern._$4s(null, true);
            } else if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0W) {
                WidgetDockFloatPanel._$iY = true;
            }
        }
    }
    this.getRect(this._$lx);
    if (WidgetDockFloatPanel._$iY) {
        if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0W) {
            WidgetDockFloatPanel._$k2 = this._$lK.cx;
            WidgetDockFloatPanel._$k3 = this._$lK.cy;
        }
        if (this._pattern != null) {
            this._pattern.getWindowRect(this._$lx);
        }
        this._$lK.cx = WidgetDockPatternBase.getWidth(this._$lx);
        this._$lK.cy = WidgetDockPatternBase.getHeight(this._$lx);
    }
    this._$iG = true;
    this._$ly.left = this._$ly.right = this._$ly.right = this._$ly.bottom = 0;
    this._$ko = pt.x - this._$lx.left;
    this._$kp = WidgetDockPatternBase.getWidth(this._$lx);
    this._$ks = pt.y - this._$lx.top;
    this._$kr = WidgetDockPatternBase.getHeight(this._$lx);
    this._$3B();
    this._$4I();
    WidgetDockFloatPanel._$lL.cx = this._$lJ.cx;
    WidgetDockFloatPanel._$lL.cy = this._$lJ.cy;
    this._$iL = false;
    this._$iG = false;
    return 0;
};
WidgetDockFloatPanel.prototype._$4I = function () {
};
WidgetDockFloatPanel.prototype._$15 = function () {
    _$jG = 0;
    return _$jG;
};
WidgetDockFloatPanel.prototype._$4i = function (pt) {
    this._$iL = true;
    if (this._windowType == EnumWindowType.Normal) {
        var rcb = new WidgetDockRect();
        this._window.getWindowRect(rcb);
        if (!WidgetDockPatternBase.isInRect(rcb, pt)) {
            return;
        }
    }
    var _$8s = false;
    this._$lf._$ij = false;
    this._$lf._$iC = false;
    this._$lf._$kM = this._$R(pt, this._$lN, WidgetDockFloatPanel._$lL);
    if (this._$lN[0] <= 7) {
        var i = 0;
        var _$f8;
        if ((WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V) && (this._$kA._tabController != null) && this._$kA._tabController._tabList.length > 1) {
            var _$p4 = this._$kA._tabController._$21();
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
                var _$7F = new WidgetDockListController();
                var pbk = (this._pattern._panelList[0]._list[0])._$kI;
                pbk._$2Q(_$7F);
                var ic = _$7F.getSize();
                for (i = 0; i < ic; i++) {
                    if (_$7F._list[i]._$1k(this._$lf._$kM, this._$lN[0])) break;
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
        this._$lx.left = pt.x - this._$lK.cx * this._$ko / this._$kp;
        this._$lx.top = pt.y - this._$lK.cy * this._$ks / this._$kr;
        var _$qr = new WidgetDockFrame();
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
    } else {
        if (this._$lf._$iM && this._$lf._$ka >= 0 && this._$lf._$kM != null) {
            var _$e1 = this._$lf._$kM._panelList[this._$lN[0]].getSize();
            var _$g5 = this._$lf._$ka - 1;
            if (_$g5 < _$e1) {
                var _$pY = null;
                for (var k = 0; k <= _$g5; k++) {
                    _$pY = this._$lf._$kM._panelList[this._$lN[0]]._list[_$g5 - k];
                    if (_$pY._$iX) break;
                    _$pY = null;
                }
                var rca = new WidgetDockRect();
                if (_$pY != null) {
                    rca.setRect(_$pY.rect);
                } else {
                    this._$lf._$kM.getWindowRect(rca);
                    rca.left += this._$lf._$kM._signLenList[0];
                    rca.right -= this._$lf._$kM._signLenList[2];
                    rca.top += this._$lf._$kM._signLenList[1];
                    rca.bottom -= this._$lf._$kM._signLenList[3];
                }
                if (this._$lN[0] == EnumPatternPositionType.Left || this._$lN[0] == EnumPatternPositionType.Right) {
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
    if (this._windowType == EnumWindowType.Normal) {
        this._$4l(_$8s);
        return;
    }
    _$lY._$ri(_$8s, this._$id);
    _$lR._$ri(_$8s, this._$id);
    _$lU._$ri(_$8s, this._$id);
    _$lV._$ri(_$8s, this._$id);
    this._$m6(this._$lx.left, this._$lx.top, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
};
WidgetDockFloatPanel.prototype._$4l = function (_$8s) {
    WidgetDockFloatPanel._$hT._$ri(_$8s, this._$id);
    WidgetDockFloatPanel._$hM._$ri(_$8s, this._$id);
    WidgetDockFloatPanel._$hP._$ri(_$8s, this._$id);
    WidgetDockFloatPanel._$hQ._$ri(_$8s, this._$id);
    var pt = new WidgetDockLocation();
    pt.x = this._$lx.left;
    pt.y = this._$lx.top;
    this._$m5(pt.x, pt.y, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
};
WidgetDockFloatPanel.prototype._$2Q = function (_$mY, mainPattern, _$85, _$7O) {
    var _$7F = new WidgetDockListController();
    var com = _$mY._$bE();
    var _$sx;
    for (var i = 0; i < com.length; i++) {
        if (com[i] instanceof WidgetDockFloatPanel) {
            _$sx = com[i];
            if (!_$sx._$kA._$8y) {
                if (_$sx._$kA._tabController != null && _$sx._$kA._tabController._tabList.length >= 1) {
                    var _$e1 = _$sx._$kA._tabController._tabList.length;
                    var j;
                    for (j = 0; j < _$e1; j++) {
                        _$mY._$5E(_$sx._$kA._tabController._tabList[j]._floatPanel);
                        mainPattern.Add(_$sx._$kA._tabController._tabList[j]._floatPanel);
                        _$7F.add(_$sx._$kA._tabController._tabList[j]._floatPanel);
                    }
                    _$sx._$kA._tabController = null;
                } else {
                    if (com[i]._$fT()) {
                        _$mY._$5E(com[i]);
                        mainPattern.Add(com[i]);
                        _$7F.add(com[i]);
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
    var _$e1 = _$7F.getSize();
    if (!_$mY._isMain && !mainPattern._isMain) {
        var i;
        for (i = 0; i < _$e1; i++) {
            var _$nQ = _$7F._list[i];
            _$mY._$53(_$nQ);
        }
    } else if (!_$mY._isMain && mainPattern._isMain) {
        var _$9C;
        var _$pO;
        var _$pR;
        var _$gB;
        for (var i = 0; i < _$e1; i++) {
            var _$nQ = _$7F._list[i];
            _$9C = _$nQ._patternPositionType;
            _$pO = _$nQ._$kA;
            _$pR = _$nQ._pattern;
            _$gB = _$nQ._$jr;
            _$nQ._$lf._$j1 = this._$lf._$j1;
            _$nQ._$lf._$ka = this._$lf._$ka;
            _$nQ._patternPositionType = _$nQ._$j3;
            _$nQ._$kA = _$nQ._$l6;
            _$nQ._$jr = _$nQ._$k4;
            _$nQ._pattern = _$nQ._$l7;
            if (_$nQ._pattern != null) _$nQ._pattern._$53(_$nQ);
            this._$lf._$ka = _$nQ._$lf._$ka;
            _$nQ._$l7 = _$pR;
            _$nQ._$j3 = _$9C;
            _$nQ._$l6 = _$pO;
            _$nQ._$k4 = _$gB;
        }
    }
    _$mY._panelList[0]._list[0]._$iX = false;
    _$mY._$01();
    return _$7F;
};
WidgetDockFloatPanel.prototype._$33 = function (_$mY, mainPattern) {
    if (_$mY._isMain) return null;
    var _$oE = new _$F();
    var _$oK = _$mY._panelList[0]._list[0]._$kI;
    _$oE._$5J(_$oK);
    var _$7F;
    _$7F = this._$2Q(_$mY, mainPattern, false, false);
    if (!mainPattern._isMain && this._$lf._$iM) {
        _$oE._$5w(mainPattern, 0);
    } else {
        _$oE._$5w(mainPattern, this._$lf._$j1);
    }
    var _$e1 = _$7F.getSize();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$7F._list[i] != this) _$7F._list[i]._$qz();
    }
    return _$oE;
};
WidgetDockFloatPanel.prototype._$30 = function (_$mX) {
    this._$lf._$j1 = _$mX._$j1;
    this._$lf._$ka = _$mX._$ka;
    this._pattern._$5H(this, _$mX._$kM);
    this._$jG = 1;
    if (this._pattern != _$mX._$kM) {
        if (this._pattern != null && (this._pattern._isMain != _$mX._$kM._isMain)) {
            var _$9C;
            var _$pR;
            var _$gA;
            var _$pO;
            _$9C = this._patternPositionType;
            _$pR = this._pattern;
            _$gA = this._$jr;
            _$pO = this._$kA;
            this._pattern = this._$l7;
            this._patternPositionType = this._$j3;
            this._$jr = this._$k4;
            this._$kA = this._$l6;
            if (this._pattern != null) {
                this._pattern._$53(this);
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
                this._pattern._$5H(_$aQ[i], null);
                _$fI++;
                _$91[i] = true;
            }
        }
    }
};
WidgetDockFloatPanel.prototype._$73 = function (_$nn, _$nG) {
    var _$pW = _$nG._$oV;
    var _$pu = _$nn;
    var pb = _$nG;
    if (_$pW != null && _$pu != null) {
        var _$qs = new WidgetDockRect();
        _$pu._$22(_$qs);
        var _$gd = _$qs.bottom - _$qs.top;
        var _$ge = _$qs.right - _$qs.left;
        if ((_$pW._$9y == EnumPatternPositionType.Top || _$pW._$9y == EnumPatternPositionType.Bottom) && _$gd > 0 && (_$gd > this._$lJ.cy) && this._$lJ.cy > 0) {
            if (pb._$9j == EnumPatternPositionType.Top) {
                _$pW._$br = 1.0 * this._$lJ.cy / (_$gd - this._$lJ.cy);
            } else {
                _$pW._$br = 1.0 * (_$gd - this._$lJ.cy) / this._$lJ.cy;
            }
        } else if ((_$pW._$9y == EnumPatternPositionType.Left || _$pW._$9y == EnumPatternPositionType.Right) && _$ge > 0 && (_$ge > this._$lJ.cx) && this._$lJ.cx > 0) {
            if (pb._$9j == EnumPatternPositionType.Left) _$pW._$br = 1.0 * this._$lJ.cx / (_$ge - this._$lJ.cx); else _$pW._$br = 1.0 * (_$ge - this._$lJ.cx) / this._$lJ.cx;
        }
        if (_$pW._$br < 0.01) _$pW._$br = 0.01;
    }
};
WidgetDockFloatPanel.prototype._$1x = function () {
    this._$T();
    if (!this._$iL) return;
    if (this._$lf._$iC) return;
    var _$9q = null;
    var _$f8 = 0;
    if ((this._$lf._$j1 != 0xff) && (this._$lf._$j1 < 4)) {
        var _$nZ = this;
        if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
            this._$lJ.cx = WidgetDockFloatPanel._$lL.cx;
            this._$lJ.cy = WidgetDockFloatPanel._$lL.cy;
        }
        if ((this._patternPositionType == this._$lf._$j1) && (this._$jr == this._$lf._$ka) && (this._$kA == this._$lf._$ky) && this._$lf._$j2 == 0xff) return;
        var _$8t = false;
        var _$aQ = null;
        var pb = null;
        if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0V && this._$kA._tabController != null && this._$kA._tabController._tabList.length > 1) {
            _$8t = true;
            var _$p4 = this._$kA._tabController._$21();
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
                _$oX[i].setVisible(false);
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
                        _$aQ[i]._$30(this._$lf);
                        _$fI++;
                        _$91[i] = true;
                    }
                }
            }
            for (i = 0; i < _$en; i++) {
                if (!_$9q[i]) _$oX[i].setVisible(true); else {
                    _$oX[i].setVisible(true);
                }
            }
        } else {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                if (!this._$1k(this._$lf._$kM, this._$lf._$j1)) return;
                _$aQ = new Array(1);
                _$aQ[0] = this;
                this._$30(this._$lf);
            } else {
                var _$7F = new WidgetDockListController();
                var pbk = this._pattern._panelList[0]._list[0]._$kI;
                pbk._$2Q(_$7F);
                var i;
                var ic = _$7F.getSize();
                var _$oX = new Array(ic);
                _$aQ = new Array(ic);
                _$9q = new Array(ic);
                var _$en = 0;
                var _$f8 = 0;
                for (i = 0; i < ic; i++) {
                    if (!_$7F._list[i]._$1k(this._$lf._$kM, this._$lf._$j1)) {
                        _$oX[_$en] = _$7F._list[i];
                        _$9q[_$en] = _$oX[_$en]._$fT();
                        _$en++;
                    } else {
                        _$aQ[_$f8] = _$7F._list[i];
                        _$f8++;
                    }
                }
                if (_$en == ic) {
                    return;
                }
                var _$o1 = this._pattern;
                for (i = 0; i < _$en; i++) {
                    if (_$oX[i] == this) _$nZ = null;
                    _$oX[i].setVisible(false);
                }
                if (!this._$lf._$ij) {
                    pb = this._$33(_$o1, this._$lf._$kM);
                    _$o1._$l(null);
                } else {
                    var _$7H = this._$2Q(this._pattern, this._$lf._$kM, true, true);
                    var ino = _$7H.getSize();
                    _$aQ = new Array(ino);
                    for (i = 0; i < ino; i++) {
                        _$aQ[i] = _$7H._list[i];
                        if (_$nZ == null && _$aQ[i]._$fT()) {
                            _$nZ = _$aQ[i];
                        }
                    }
                }
                for (i = 0; i < _$en; i++) {
                    if (!_$9q[i]) _$oX[i].setVisible(true); else {
                        _$oX[i].setVisible(true);
                    }
                }
            }
        }
        if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W && _$nZ != null) {
            _$nZ._patternPositionType = this._$lf._$j1;
            _$nZ._$jr = this._$lf._$ka;
        }
        if (this._$lf._$ij) {
            this._$lf._$ky = this._$lf._$kJ._$kA;
            var i;
            for (i = 0; i < _$aQ.length; i++) {
                _$aQ[i]._$kA = this._$lf._$ky;
                _$aQ[i]._$kA._$2(_$aQ[i]);
                _$aQ[i]._pattern = this._$lf._$kM;
                _$aQ[i]._patternPositionType = this._$lf._$j1;
                _$aQ[i]._$jr = this._$lf._$ka;
            }
            this._$r6(true);
            return;
        }
        if (this._$lf._$ky != null) {
            _$nZ._$jr = this._$lf._$ky._floatPanel._$jr;
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) pb = new _$F();
            if (_$8t) {
                pb._$0w(_$aQ, _$f8, _$nZ, this._$lf._$kM);
                var k;
                for (k = 0; k < _$f8; k++) {
                    _$aQ[k]._$jr = _$nZ._$jr;
                    _$aQ[k]._patternPositionType = _$nZ._patternPositionType;
                    _$aQ[k]._pattern = this._$lf._$kM;
                }
            } else {
                if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) pb._floatPanel = _$nZ;
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
        if (!this._$lf._$kM._isMain) {
            this._$lf._$kM.Add(this);
        }
        if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W && _$nZ != null) _$nZ._patternPositionType = this._$lf._$j1;
        if (!this._$lf._$kM._isMain && this._$lf._$iM) {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) this._$lf._$kM._$1g(this._$lf, this._$lJ); else this._$lf._$kM._$3G(pb, this._$lf, this._$lJ);
        }
        if (this._$lf._$ky == null) {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                if (_$nZ != null) {
                    _$nZ._pattern = this._$lf._$kM;
                    if (_$nZ != this) {
                        _$nZ._$lJ = this._$lJ;
                    }
                    this._$lf._$kM._$18(_$nZ, null);
                    _$nZ._$kA._$0w(_$aQ, _$f8, _$nZ, this._$lf._$kM);
                    var i;
                    for (i = 0; i < _$f8; i++) {
                        if (_$aQ[i] != this) {
                            _$aQ[i]._patternPositionType = _$nZ._patternPositionType;
                            _$aQ[i]._$jr = _$nZ._$jr;
                            _$aQ[i]._pattern = this._$lf._$kM;
                        }
                    }
                }
                if (this._$kA._tabController != null) this._$kA._tabController._$5z();
            } else {
                this._$lf._$kM._$19(pb, this._$lf._$j1, this._$lf._$ka);
            }
        } else {
            if (WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0W) {
                _$nZ._pattern = this._$lf._$kM;
                this._$lf._$kM._$18(_$nZ, null);
            } else {
                this._$lf._$kM._$19(pb, this._$lf._$j1, this._$lf._$ka);
            }
        }
        if (!this._$lf._$kM._isMain) {
            this._$lf._$kM._$7p();
        }
        if (_$nZ != null) {
            _$nZ._$qz();
            if (this._$lf._$kM != null) {
            }
            _$nZ._pattern = this._$lf._$kM;
        }
        if (this._$lf._$iM && this._pattern._isMain) {
            this._$Y(this._pattern, this._$lf._$j1, this._$jr);
        }
    } else {
        this._$lt.x = this._$lx.left;
        this._$lt.y = this._$lx.top;
        if (!this._pattern._isMain && WidgetDockFloatPanel._$iY) {
            this._$1S();
        } else {
            var _$8F = this._$ir;
            var _$p0 = null;
            var _$en = 0;
            var _$gF;
            _$f8 = 0;
            if (this._$kA._tabController != null && WidgetDockFloatPanel._$jy != WidgetDockFloatPanel._$0X) _$p0 = this._$kA._tabController._$21();
            if (_$p0 == null || _$p0.length == 0) {
                _$p0 = new Array(1);
                _$p0[0] = this;
                _$gF = 1;
            }
            _$gF = _$p0.length;
            var _$aQ = new Array(_$gF);
            var _$oX = new Array(_$gF);
            _$9q = new Array(_$gF);
            for (var i = 0; i < _$gF; i++) {
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
            for (var i = 0; i < _$en; i++) {
                if (_$oX[i] == this) _$nY = null;
                _$oX[i].setVisible(false);
            }
            if (_$nY == null) {
                for (var i = 0; i < _$f8; i++) {
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
                    _$nY._$kA._$o(_$aQ, _$f8, _$nY, _$nY._pattern);
                    for (i = 0; i < _$f8; i++) {
                        _$aQ[i]._$jr = _$nY._$jr;
                        _$aQ[i]._patternPositionType = _$nY._patternPositionType;
                        _$aQ[i]._$kW = _$nY._pattern;
                        _$aQ[i]._$jE = 1;
                    }
                }
            }
            for (var i = 0; i < _$en; i++) {
                if (!_$9q[i]) _$oX[i].setVisible(true); else {
                    _$oX[i].setVisible(true);
                }
            }
        }
    }
};
WidgetDockFloatPanel.prototype._$qz = function () {
    var _$f1 = -1;
    if (this._$jm >= WidgetDockFloatPanel._$0) {
        _$f1 = WidgetDockFloatPanel._$6K;
    } else {
        var _$8o = false;
        if (this._$kA != null && this._$kA._tabController != null && this._$kA._tabController._tabList.length > 1 && this._$kA._tabController._floatPanel == this) {
            _$8o = true;
        }
        if (!_$8o) {
            _$qC(this._panelStateController);
        }
        if (this._$jm == _$3Q) {
            _$f1 = WidgetDockFloatPanel._$3Q;
        } else if (this._$jm == WidgetDockFloatPanel._$5j) {
            _$f1 = WidgetDockFloatPanel._$5j;
        } else if (this._$jm == WidgetDockFloatPanel._$6K) {
            _$f1 = WidgetDockFloatPanel._$6K;
        } else {
            if (!_$8o) {
                _$f1 = WidgetDockFloatPanel._$q;
            }
        }
    }
    if (_$f1 != this._$jz) {
        this._$jz = _$f1;
        this._$qK();
    }
};
WidgetDockFloatPanel.prototype._$6c = function (patternPositionType) {
    if ((patternPositionType <= 3) && (patternPositionType != 0xff)) {
        if (((this._$kc >> patternPositionType) & 0x01) == 1) {
            return patternPositionType;
        }
    }
    for (var i = 0; i < 4; i++) {
        if (((this._$kc >> i) & 0x01) == 1) {
            patternPositionType = i;
            return patternPositionType;
        }
    }
    return 0xff;
};
WidgetDockFloatPanel.prototype._$5 = function (tabController) {
    if (this._$jm == WidgetDockFloatPanel._$q) {
        this._panelStateController._$a();
    }
    this._$hz = tabController;
    if (tabController != null) {
        WidgetDockElementController.setElementZIndex(tabController._tabControllerElement, this._panelStateController._panelStateElement.style.zIndex);
    }
    this._$qK();
};
WidgetDockFloatPanel.prototype._$5O = function () {
    this._$hz = null;
    this._$qK();
};
WidgetDockFloatPanel.prototype._$1k = function (mainPattern, patternPositionType) {
    if (mainPattern != null && mainPattern._isMain && (patternPositionType > 3)) return false;
    if (mainPattern != null && (patternPositionType <= 3) && (patternPositionType != 0xff)) {
        if (mainPattern._isMain && (((this._$kc >> patternPositionType) & 0x01) == 1)) {
            return true;
        } else if (!mainPattern._isMain && this._$id) {
            return true;
        }
        return false;
    } else if (patternPositionType > 3) {
        if (this._$id) {
            return false;
        }
    }
    return true;
};
WidgetDockFloatPanel.prototype._$3A = function () {
    if (this._windowType == EnumWindowType.Normal) {
        if (WidgetDockFloatPanel._$hT != null) {
            return;
        }
        if (WidgetDockFloatPanel._$hT == null) {
            WidgetDockFloatPanel._$hT = new _$6C(1, this);
        }
        if (WidgetDockFloatPanel._$hP == null) {
            WidgetDockFloatPanel._$hP = new _$6C(0, this);
        }
        if (WidgetDockFloatPanel._$hQ == null) {
            WidgetDockFloatPanel._$hQ = new _$6C(2, this);
        }
        if (WidgetDockFloatPanel._$hM == null) {
            WidgetDockFloatPanel._$hM = new _$6C(3, this);
        }
        return;
    }
    if (this._$lY == null) {
        var _$bo = null;
        if (this._$lY == null) {
            this._$lY = new _$6D(_$bo, 1);
        }
        if (this._$lU == null) {
            this._$lU = new _$6D(_$bo, 0);
        }
        if (this._$lV == null) {
            this._$lV = new _$6D(_$bo, 2);
        }
        if (this._$lR == null) {
            this._$lR = new _$6D(_$bo, 3);
        }
        this._$m6(this._$lx.left, this._$lx.top, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
        this._$lY.setVisible(true);
        this._$lR.setVisible(true);
        this._$lU.setVisible(true);
        this._$lV.setVisible(true);
    }
};
WidgetDockFloatPanel.prototype._$3B = function () {
    this._$lf._$ij = false;
    if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0X) {
        return;
    }
    this._$3A();
};
WidgetDockFloatPanel.prototype._$m6 = function (left, top, width, height) {
    this._$lY._$r8(left + _$1H, top, width - (2 * _$1H), _$1H);
    if (!_$lf._$ij) {
        _$lU._$r8(left, top, _$1H, height);
        _$lV._$r8(left + width - _$1H, top, _$1H, height);
        _$lR._$r8(left + _$1H, top + height - _$1H, width - (2 * _$1H), _$1H);
        _$lY.refresh();
        _$lU.refresh();
        _$lV.refresh();
        _$lR.refresh();
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
        var _$gq = WidgetDockTabController._$6J - _$1H;
        var _$gr = 10;
        var _$gt = 40;
        if (width < 50) {
            _$gr = width / 6;
            _$gt = (4 * width) / 6;
        }
        if (height < (WidgetDockTabController._$6J - _$1H)) {
            _$gq = 0;
        }
        height -= 3;
        _$lU._$r8(left, top, _$1H, height - _$gq);
        _$lV._$r8(left + width - _$1H, top, _$1H, height - _$gq);
        _$lS._$r8(left + _$1H, top + height - _$gq - _$1H, _$gr, _$1H);
        _$lW._$r8(left + _$gr + _$1H, top + height - _$gq - _$1H, _$1H, _$gq + _$1H - 1);
        _$lX._$r8(left + _$gr + _$gt - _$1H, top + height - _$gq - _$1H, _$1H, _$gq + _$1H - 1);
        _$lT._$r8(left + _$gr + _$gt, top + height - _$gq - _$1H, width - _$gr - _$gt - 1, _$1H);
        _$lR._$r8(left + _$1H + _$gr, top + height - _$1H, _$gt - _$1H, _$1H);
    }
};
WidgetDockFloatPanel.prototype._$5D = function (p) {
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, p._panelStateElement);
};
WidgetDockFloatPanel.prototype._$m5 = function (left, top, width, height) {
    WidgetDockFloatPanel._$hT._$r8(left + WidgetDockFloatPanel._$1H, top, width - (2 * WidgetDockFloatPanel._$1H), WidgetDockFloatPanel._$1H);
    if (!this._$lf._$ij) {
        WidgetDockFloatPanel._$hP._$r8(left, top, WidgetDockFloatPanel._$1H, height);
        WidgetDockFloatPanel._$hQ._$r8(left + width - WidgetDockFloatPanel._$1H, top, WidgetDockFloatPanel._$1H, height);
        WidgetDockFloatPanel._$hM._$r8(left + WidgetDockFloatPanel._$1H, top + height - WidgetDockFloatPanel._$1H, width - (2 * WidgetDockFloatPanel._$1H), WidgetDockFloatPanel._$1H);
        WidgetDockFloatPanel._$hT.refresh();
        WidgetDockFloatPanel._$hP.refresh();
        WidgetDockFloatPanel._$hQ.refresh();
        WidgetDockFloatPanel._$hM.refresh();
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
            WidgetDockFloatPanel._$hN.refresh();
            WidgetDockFloatPanel._$hO.refresh();
            WidgetDockFloatPanel._$hR.refresh();
            WidgetDockFloatPanel._$hS.refresh();
        }
        var _$gq = WidgetDockTabController._$6J - WidgetDockFloatPanel._$1H;
        var _$gr = 10;
        var _$gt = 40;
        if (width < 50) {
            _$gr = width / 6;
            _$gt = (4 * width) / 6;
        }
        if (height < (WidgetDockTabController._$6J - WidgetDockFloatPanel._$1H)) {
            _$gq = 0;
        }
        height -= 3;
        WidgetDockFloatPanel._$hP._$r8(left, top, WidgetDockFloatPanel._$1H, height - _$gq);
        WidgetDockFloatPanel._$hQ._$r8(left + width - WidgetDockFloatPanel._$1H, top, WidgetDockFloatPanel._$1H, height - _$gq);
        WidgetDockFloatPanel._$hN._$r8(left + WidgetDockFloatPanel._$1H, top + height - _$gq - WidgetDockFloatPanel._$1H, _$gr, WidgetDockFloatPanel._$1H);
        WidgetDockFloatPanel._$hR._$r8(left + _$gr + WidgetDockFloatPanel._$1H, top + height - _$gq - WidgetDockFloatPanel._$1H, WidgetDockFloatPanel._$1H, _$gq + WidgetDockFloatPanel._$1H - 1);
        WidgetDockFloatPanel._$hS._$r8(left + _$gr + _$gt - WidgetDockFloatPanel._$1H, top + height - _$gq - WidgetDockFloatPanel._$1H, WidgetDockFloatPanel._$1H, _$gq + WidgetDockFloatPanel._$1H - 1);
        WidgetDockFloatPanel._$hO._$r8(left + _$gr + _$gt, top + height - _$gq - WidgetDockFloatPanel._$1H, width - _$gr - _$gt - 1, WidgetDockFloatPanel._$1H);
        WidgetDockFloatPanel._$hM._$r8(left + WidgetDockFloatPanel._$1H + _$gr, top + height - WidgetDockFloatPanel._$1H, _$gt - WidgetDockFloatPanel._$1H, WidgetDockFloatPanel._$1H);
    }
};
WidgetDockFloatPanel.prototype._$T = function () {
    this._$1p();
    if (WidgetDockFloatPanel._$jy == WidgetDockFloatPanel._$0W) {
        this._$lK.cx = WidgetDockFloatPanel._$k2;
        this._$lK.cy = WidgetDockFloatPanel._$k3;
    }
    if (WidgetDockFloatPanel._$hT != null) this._$5D(WidgetDockFloatPanel._$hT);
    if (WidgetDockFloatPanel._$hM != null) this._$5D(WidgetDockFloatPanel._$hM);
    if (WidgetDockFloatPanel._$hP != null) this._$5D(WidgetDockFloatPanel._$hP);
    if (WidgetDockFloatPanel._$hQ != null) this._$5D(WidgetDockFloatPanel._$hQ);
    if (WidgetDockFloatPanel._$hR != null) this._$5D(WidgetDockFloatPanel._$hR);
    if (WidgetDockFloatPanel._$hS != null) this._$5D(WidgetDockFloatPanel._$hS);
    if (WidgetDockFloatPanel._$hN != null) this._$5D(WidgetDockFloatPanel._$hN);
    if (WidgetDockFloatPanel._$hO != null) this._$5D(WidgetDockFloatPanel._$hO);
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
    if (this._windowType == EnumWindowType.Main) return;
    if (this._isInitLayout) return;
    var panelNum = WidgetDockFloatPanel._floatPanelController.getSize();
    var isFind = false;
    for (var i = 0; i < panelNum; i++) {
        if (WidgetDockFloatPanel._floatPanelController._list[i] == this) {
            isFind = true;
            break;
        }
    }
    if (!isFind) {
        WidgetDockFloatPanel._floatPanelController.add(this);
    }
    var title = this.getTitle();
    this._$5U(type, title);
    this._isInitLayout = true;
    panelNum = WidgetDockFloatPanel._floatPanelController.getSize();
    for (var i = 0; i < panelNum; i++) {
        var panel = WidgetDockFloatPanel._floatPanelController._list[i];
        if ((!panel._isInitLayout) && panel.getTitle() == title) {
            WidgetDockFloatPanel._floatPanelController.delete(i);
            break;
        }
    }
};
WidgetDockFloatPanel.prototype._$f5 = function () {
    var d = this.getSize();
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
        this._$lJ.cx = this.getWidth();
        this._$lJ.cy = this.getHeight();
    }
    if (this._pattern != null && !this._pattern._isMain) {
        return 0;
    }
    if (this._pattern == null) _$jE = 1;
    _$1R();
    if (_$l7 == null) {
        _$jE = 0;
    }
    return 0;
};
WidgetDockFloatPanel.prototype._$qG = function () {
    this._pattern._$5E(this);
};
WidgetDockFloatPanel.prototype._$0C = function () {
    var _$9u;
    if (this._$kj <= WidgetDockFloatPanel._$q) {
        _$9u = this._$kj;
    } else {
        _$9u = this._patternPositionType;
    }
    this._patternMain._$8(_$9u, this);
    this._patternMain._$5A();
    this._pinType = EnumPinType.Hide;
    var panel = null;
    var _$e1 = this._pattern._panelList[_$9u].getSize();
    if (_$e1 > 0 && this._$jr >= 0 && this._$jr < _$e1) {
        panel = this._pattern._panelList[_$9u]._list[this._$jr];
    }
    var ih, iw;
    if (panel != null) {
        iw = panel.rect.right - panel.rect.left;
        ih = panel.rect.bottom - panel.rect.top;
        if (this._$kj <= WidgetDockFloatPanel._$q) {
            if (this.isTopOrBottom(_patternPositionType) && !this.isTopOrBottom(_$9u)) {
                iw = 200;
            } else if (!this.isTopOrBottom(_patternPositionType) && this.isTopOrBottom(_$9u)) {
                ih = 200;
            }
        }
    } else {
        iw = ih = 200;
    }
};
WidgetDockFloatPanel.prototype.getFrame = function () {
    var rc = new WidgetDockFrame();
    rc.x = this._left;
    rc.y = this._top;
    rc.width = this._width;
    rc.height = this._height;
    return rc;
};
WidgetDockFloatPanel.prototype.getWidth = function () {
    return this._width;
};
WidgetDockFloatPanel.prototype.getHeight = function () {
    return this._height;
};
WidgetDockFloatPanel.prototype.getSize = function () {
    var d = new WidgetDockSize();
    d.width = this._width;
    d.height = this._height;
    return d;
};
WidgetDockFloatPanel.prototype.getRect = function (rc) {
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
    var _$pI = new WidgetDockLocation();
    var _$eg = new Array(2);
    _$eg[0] = 0;
    _$eg[1] = 0;
    var frame = this.getFrame();
    var _$8M = false;
    var _$oW = new Array(1);
    var _$9K = this._patternMain._$1P(this, title, _$7C, _$fU, _$g1, _$7B, _$oW);
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
            frame.x = this._$lt.x;
            frame.width = _$eg[0];
        }
        if (_$eg[1] <= 0) {
            this._$lt.y = 200;
            this._$lK.cy = 200;
        } else {
            this._$lt.y = _$pI.y;
            this._$lK.cy = _$eg[1];
            frame.y = this._$lt.y;
            frame.height = _$eg[1];
        }
        if ((_$oW[0]._$aP & WidgetDockFloatPanel._$2T) != 0) this._$iv = true; else this._$iv = false;
        if ((_$oW[0]._$aP & WidgetDockFloatPanel._$2U) == 0) this._pinType = EnumPinType.None;
        this._$kj = ((WidgetDockFloatPanel._$6X & _$oW[0]._$aP) >> 7);
        if (this._$kj < 0) this._$kj = 0;
        if (this._$kj > WidgetDockFloatPanel._$0) this._$kj = WidgetDockFloatPanel._$0;
        this._$kc = (WidgetDockFloatPanel._$4X & _$oW[0]._$aP) >> 12;
        if ((_$oW[0]._$aP & WidgetDockFloatPanel._$B) != 0) {
            this._$id = true;
        } else {
            this._$id = false;
        }
        this._$jm = (WidgetDockFloatPanel._$C & _$oW[0]._$aP) >> 17;
    }
    var _$pR = null;
    if (_$7B[0] == null && _$7B[1] == null) {
        _$8M = true;
        _$9K = 1;
    }
    if (_$7B[0] == null && _$7B[1] == null) {
        _$9K = 1;
        if (!this._$fT()) {
            _$9K = 0;
            this.setElementVisible(true);
        }
        this._$lf._$j1 = type;
        if (this._windowType == EnumWindowType.Normal) {
            _$pR = _$J._$0x(frame);
            _$pR = _$K._$0y(frame);
        } else {
            _$pR = _$K._$0y(frame);
        }
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
        if (!_$7C[0]._isMain) {
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
        if (_$7B[0] == null) {
            _$e5 = 1;
        } else {
            _$e5 = 0;
        }
        if (_$7C[_$e5]._isMain) {
            if (this._windowType == EnumWindowType.Normal) {
                _$7C[_$e5 ^ 0x01] = _$J._$0x(frame);
            } else {
                _$7C[_$e5 ^ 0x01] = _$K._$0y(frame);
            }
            _$fU[_$e5 ^ 0x01] = 0;
            _$g1[_$e5 ^ 0x01] = 0xffffffff;
            _$7B[_$e5 ^ 0x01] = null;
        } else {
            _$7C[_$e5 ^ 0x01] = this._patternMain;
            _$g1[_$e5 ^ 0x01] = 0xffffffff;
            if (type > 3) {
                _$fU[_$e5 ^ 0x01] = 0;
            } else {
                _$fU[_$e5 ^ 0x01] = this._$cD;
            }
        }
    }
    if (_$7C[0] != null) {
        if (_$7C[0]._isMain) {
            if (!this._$1k(_$7C[0], _$fU[0])) {
                var bys = 0xff;
                bys = this._$6c(bys);
                if (bys != 0xff || (!this._$id)) {
                    if (bys != 0xff) {
                        type = bys;
                    } else {
                        type = _$fU[0];
                    }
                    if (type != _$fU[0]) {
                        this._$jr = _$g1[0];
                        this._patternPositionType = _$fU[0];
                        this._$kA = _$7B[0];
                        _$7C[0]._$53(this);
                        if (type >= EnumPatternPositionType.Center) {
                            type = EnumPatternPositionType.Left;
                        }
                        _$g1[0] = -1;
                        _$fU[0] = type;
                        _$7B[0] = null;
                    }
                } else {
                    this._$kA = _$7B[0];
                    this._$jr = _$g1[0];
                    this._pattern = _$7C[0];
                    this._patternPositionType = _$fU[0];
                    _$7B[0] = _$7B[1];
                    _$g1[0] = _$g1[1];
                    _$7C[0] = _$7C[1];
                    _$fU[0] = _$fU[1];
                    _$7B[1] = this._$kA;
                    _$g1[1] = this._$jr;
                    _$fU[1] = this._patternPositionType;
                    _$7C[1] = this._pattern;
                }
            }
        } else {
            if (!this._$id) {
                this._$kA = _$7B[0];
                this._$jr = _$g1[0];
                this._pattern = _$7C[0];
                this._patternPositionType = _$fU[0];
                _$7B[0] = _$7B[1];
                _$g1[0] = _$g1[1];
                _$7C[0] = _$7C[1];
                _$fU[0] = _$fU[1];
                _$7B[1] = this._$kA;
                _$g1[1] = this._$jr;
                _$fU[1] = this._patternPositionType;
                _$7C[1] = this._pattern;
                if (!this._$1k(_$7C[0], _$fU[0])) {
                    var bys = 0xff;
                    bys = this._$6c(bys);
                    if (bys != 0xff) {
                        type = bys;
                    } else {
                        type = _$fU[0];
                    }
                    if (type != _$fU[0]) {
                        this._$jr = _$g1[0];
                        this._patternPositionType = _$fU[0];
                        this._$kA = _$7B[0];
                        _$7C[0]._$53(this);
                        _$g1[0] = -1;
                        _$fU[0] = type;
                        _$7B[0] = null;
                    }
                }
            } else {
                if (_$fU[1] < EnumPatternPositionType.Center) {
                    if (!this._$1k(this._patternMain, _$fU[1])) {
                        var bys = 0xff;
                        bys = this._$6c(bys);
                        if ((bys != 0xff) && bys != _$fU[1]) {
                            this._$jr = _$g1[1];
                            this._patternPositionType = _$fU[1];
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
    this._patternPositionType = _$fU[0];
    var _$8J = false;
    if (_$7B[0] != null && _$7B[0]._floatPanel != null) _$8J = true;
    if (_$7B[0] != null && !_$8J) _$7B[0]._floatPanel = this;
    this._$kA = _$7B[0];
    this._$l6 = _$7B[1];
    this._pattern = _$7C[0];
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
        if (this._pinType == EnumPinType.Hide) {
            _$9K = 0;
        }
        if (!this._$fT()) {
            _$9K = 0;
            _$8M = false;
        }
    }
    if (!_$8M && this._pinType == EnumPinType.Hide) {
        this._pinType = EnumPinType.Show;
    }
    this._$lf._$j1 = _$fU[0];
    this._$qz();
    if (_$9K > 0) {
        this._$18();
        this.refresh();
    } else if (_$8M) {
        if (this._$kA == null) {
            this._pinType = EnumPinType.Show;
            this._pattern._$6O(this);
            this._$kA._$8y = true;
            this._patternMain._$d(this);
            this.setElementVisible(false);
            this._pinType = EnumPinType.Hide;
        }
        this._$0C();
        this._$ir = false;
    } else {
        if (this._$kA != null && this._$kA._$l1 != null && this._$kA._$l1.length >= 1) {
            var _$nH = this._$kA._floatPanel;
            var _$8G = false;
            var i;
            for (i = 0; i < this._$kA._$l1.length; i++) {
                var _$ol = this._$kA._$l1[i];
                if (_$ol._floatPanel == this && ((_$ol._$aP & WidgetDockFloatPanel._$1B) > 0)) {
                    _$8G = true;
                }
            }
            if (_$8G) {
                this._$lf._$j1 = _$fU[0];
                this._$18();
                _$9K = 1;
                if (_$nH != this && this._$kA._tabController != null) {
                    this._$kA._tabController._$6b(_$nH);
                }
                this.refresh();
            } else {
                _$8G = false;
                var i;
                for (i = 0; i < this._$kA._$l1.length; i++) {
                    var _$o9 = this._$kA._$l1[i];
                    if (_$o9._floatPanel == this && (_$o9._$aP & WidgetDockFloatPanel._$1C) != 0) {
                        _$8G = true;
                        break;
                    }
                }
                if (_$8G) {
                    this._$0C();
                }
                this._$ir = !this._pattern._isMain;
                this.setElementVisible(false);
                this._$iP = false;
            }
        } else {
            if (this._$kA == null && this._pattern != null) {
                this._pattern._$6O(this);
                if (this._$kA != null) this._$kA._$8y = true;
            }
            this._$ir = !this._pattern._isMain;
            this.setElementVisible(false);
            this._$iP = false;
        }
    }
    this._$Y(this._$l7, this._$j3, this._$k4);
    this._$Y(this._pattern, this._patternPositionType, this._$jr);
};
WidgetDockFloatPanel.prototype._$1S = function () {
    var ps = new WidgetDockLocation();
    ps.x = this._$lx.left;
    ps.y = this._$lx.top;
    if (this._windowType == EnumWindowType.Normal) {
    }
    this._pattern._$6p(ps.x, ps.y, WidgetDockPatternBase.getWidth(this._$lx), WidgetDockPatternBase.getHeight(this._$lx));
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
        pf._floatPanel = _$n3._floatPanel;
        pf._$8y = _$n3._$8y;
        pf._$l1 = _$n3._$l1;
        pf._tabController = _$n3._tabController;
        if (pf._tabController != null) pf._tabController._$kE = pf;
        pf._$6Z(_$n3);
        if (pf._floatPanel != null) {
            pf._floatPanel._$kA = pf;
        }
        _$n3._floatPanel = null;
        _$n3._$od = pf;
        _$n3._$pr = pb;
        pf._$oV = _$n3;
        pb._$oV = _$n3;
        _$n3._$9y = pb._$9j;
        _$n3._$l1 = null;
        _$pu = _$n3._$od;
    }
    if (type == EnumPatternPositionType.Top) {
        _$pu._$9j = EnumPatternPositionType.Bottom;
    } else if (type == EnumPatternPositionType.Bottom) {
        _$pu._$9j = EnumPatternPositionType.Top;
    } else if (type == EnumPatternPositionType.Left) {
        _$pu._$9j = EnumPatternPositionType.Right;
    } else {
        _$pu._$9j = EnumPatternPositionType.Left;
    }
    if (_$oT != null) {
        _$oT[0] = _$pu;
    }
};
WidgetDockFloatPanel.prototype._$Y = function (mainPattern, _$cD, _$dg) {
    if (mainPattern != null && mainPattern._isMain && _$dg >= 0 && _$dg != 0xffffffff) {
        var panel = mainPattern._panelList[_$cD]._list[_$dg];
        var _$eG, _$fC;
        var _$fq, _$fr;
        _$fq = -1;
        _$fr = -1;
        var _$9n, _$9v;
        if ((_$cD == EnumPatternPositionType.Left) || _$cD == EnumPatternPositionType.Right) {
            _$9n = EnumPatternPositionType.Top;
            _$9v = EnumPatternPositionType.Bottom;
        } else {
            _$9n = EnumPatternPositionType.Left;
            _$9v = EnumPatternPositionType.Right;
        }
        if (panel._$kR == null) {
            _$eG = -1;
        } else {
            _$eG = mainPattern._$2F(_$9n, panel._$kR);
        }
        if (panel._$l8 == null) {
            _$fC = -1;
        } else {
            _$fC = mainPattern._$2F(_$9v, panel._$l8);
        }
        if (this._patternMain._$lk[_$9n] != null) {
            _$fq = mainPattern._$2F(_$9n, this._patternMain._$lk[_$9n]);
        }
        if (this._patternMain._$lk[_$9v] != null) {
            _$fr = mainPattern._$2F(_$9v, this._patternMain._$lk[_$9v]);
        }
        if (_$fq >= 0 && _$eG < _$fq) {
            mainPattern._$j(_$9n);
        }
        if (_$fr >= 0 && _$fC < _$fr) {
            mainPattern._$j(_$9v);
        }
    }
};
WidgetDockFloatPanel.prototype._$3x = function () {
    if (_$kA != null && _$kA._tabController != null) {
        if (_$kA._tabController._$3x(this)) {
            return true;
        }
    }
    return false;
};
WidgetDockFloatPanel.prototype._$fT = function () {
    if (this._panelStateController == null) return true;
    if (this._panelStateController._panelStateElement.style.visibility == "visible") return true;
    return false;
};
WidgetDockFloatPanel.prototype.setElementZIndex = function (_$cR) {
    if (this._panelStateController != null) {
        WidgetDockElementController.setElementZIndex(this._panelStateController._panelStateElement, _$cR);
    }
    if (this._element != null) {
        WidgetDockElementController.setElementZIndex(this._element, _$cR);
    }
    if (this._$hz != null) {
        WidgetDockElementController.setElementZIndex(this._$hz._panelStateElement, _$cR);
    }
};
WidgetDockFloatPanel.prototype._$qK = function () {
    if (this._panelStateController == null) return;
    var left, top, width, height;
    var _$tj = this._panelStateController._$c6();
    if (this._$jz == WidgetDockFloatPanel._$6K) {
        left = this._left;
        top = this._top + _$tj.height;
        width = this._width;
        height = this._height - _$tj.height;
        var _$aC = _$tj.height;
        if (_$aC > this._height) {
            _$aC = this._height;
        }
        this._panelStateController.resize(this._left, this._top, this._width, _$aC);
    }
    if (this._$hz != null) {
        this._$hz.resize(this._left, this._top + this._height - WidgetDockTabController._$6J, this._width, WidgetDockTabController._$6J);
        height -= WidgetDockTabController._$6J;
    }
    if (height < 0) height = 0;
    if (width < 0) width = 0;

    if (this._element != null) {
        WidgetDockElementController.setElementLeftTopSize(this._element, left, top, width, height);
    }
    if (this._$hz != null && this._$hz._$bj == this) {
        this._$hz._$5Q(this, this._left, this._top, this._width, this._height);
    }
};
WidgetDockFloatPanel.prototype.refresh = function () {
};

function WidgetDockWindow(window, title) {
    WidgetDockWindow.baseConstructor.call(this, window, title);
    this._patternMain = new WidgetDockPatternMain(true);
    this._$kL = new Array();
    this.cx;
    this.cy;
    this._floatPanelControllerList = new Array(4);
    this._$3C();
    this._$jO = 4;
};
WidgetDockWindow.prototype.addFixedPanel = function (element, type) {
    element.style.position = "absolute";
    this._patternMain.addFixedPanel(element, type);
};
WidgetDockWindow._movePanelStateController = null;
WidgetDockWindow.prototype.mouseMove = function (e) {
    if (WidgetDockWindow._movePanelStateController != null) {
        WidgetDockWindow._movePanelStateController._$ms(e);
    } else {
        this._patternMain.mouseMove(e);
    }
};
WidgetDockWindow.prototype.mouseDown = function (e) {
    this._patternMain._$09(e);
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    var _$e0 = this._$kL.length;
    for (var i = 0; i < _$e0; i++) {
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
    if (WidgetDockWindow._movePanelStateController != null) {
        WidgetDockWindow._movePanelStateController.mouseUp(e);
        WidgetDockWindow._movePanelStateController = null;
    }
};
WidgetDockWindow.prototype._$0g = function () {
    var floatPanelController = WidgetDockFloatPanel._floatPanelController;
    var _$e1 = 0;
    if (floatPanelController == null) return;
    _$e1 = floatPanelController.getSize();
    var i;
    for (i = _$e1 - 1; i >= 0; i--) {
        if (floatPanelController._list[i] != this) {
            floatPanelController._list[i]._$0g();
        }
    }
    this._patternMain.reset();
    if (this._$kL != null) {
        _$e1 = _$K._$kL.length;
        for (i = 0; i < _$e1; i++) {
            this._$kL[i].reset();
        }
        this._$kL.length = 0;
    }
    this._patternMain._$3z();
    var vrc = new WidgetDockRect();
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

WidgetDockWindow.prototype._$3C = function () {
    window.onresize = windowResize;
    var rect = new WidgetDockRect();
    this.getWindowRect(rect);
    this._patternMain.setSize(rect.right - rect.left, rect.bottom - rect.top);
    for (var i = 0; i < 4; i++) {
        this._floatPanelControllerList[i] = new WidgetDockListController();
    }
};
function windowResize() {
    WidgetDockController._window.resizeWindow();
};
WidgetDockWindow.prototype._$ml = function (mainPattern) {
    var _$e1 = this._$kL.length;
    for (var i = 0; i < _$e1; i++) {
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
    for (var i = 0; i < _$e1; i++) {
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
WidgetDockWindow.prototype.resizeWindow = function (e) {
    var rc = new WidgetDockFrame();
    var d = new WidgetDockSize();
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
    for (var i = 0; i < 2; i++) {
        if (this._patternMain._elementList != null) {
            if (this._patternMain._elementList[2 * i + 1] != null) {
                if (i == 0) {
                    rc.y = this._patternMain._signLenList[2 * i + 1];
                    WidgetDockElementController.setElementLeftTopSize(this._patternMain._elementList[2 * i + 1], 0, 0, d.width, this._patternMain._signLenList[2 * i + 1]);
                } else {
                    WidgetDockElementController.setElementLeftTopSize(this._patternMain._elementList[2 * i + 1], 0, d.height - this._patternMain._signLenList[2 * i + 1], d.width, this._patternMain._signLenList[2 * i + 1]);
                }
                rc.height -= this._patternMain._signLenList[2 * i + 1];
            }
        }
    }
    for (var i = 0; i < 2; i++) {
        if (this._patternMain._elementList != null) {
            if (this._patternMain._elementList[2 * i] != null && d.height > 0) {
                rc.width = this._patternMain._signLenList[2 * i];
                if (i == 0) {
                    rc.x = 0;
                } else {
                    rc.x = d.width - rc.width;
                }
                WidgetDockElementController.setElementLeftTopSize(this._patternMain._elementList[2 * i], rc.x, rc.y, rc.width, rc.height);
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
    for (var i = 0; i < 4; i++) {
        patternPositionPanelNumList[i] = this._patternMain._panelList[i].getSize();
    }
    this._patternMain._$41(layoutController);
    var floatPanelController = new WidgetDockListController();
    if (WidgetDockFloatPanel._floatPanelController != null) {
        var panelNum = WidgetDockFloatPanel._floatPanelController.getSize();
        for (var j = 0; j < panelNum; j++) {
            var panel = WidgetDockFloatPanel._floatPanelController._list[j];
            if (!panel._isInitLayout) {
                floatPanelController.add(WidgetDockFloatPanel._floatPanelController._list[j]);
            }
        }
    }
    this._patternMain._$0b(patternPositionPanelNumList, 4, floatPanelController);
    var _$rS = layoutController.read();
    var _$e1 = parseInt(layoutController.read());
    var _$aj = new WidgetDockListController();
    for (var i = 0; i < _$e1; i++) {
        var _$ox = new _$J(false);
        _$ox._$41(layoutController);
        this._$kL.push(_$ox);
        _$aj.add(_$ox);
    }
    var ino = floatPanelController.getSize();
    for (var i = 0; i < ino; i++) {
        var _$si = floatPanelController._list[i]._$c3();
        _$e1 = _$aj.getSize();
        for (var j = 0; j < _$e1; j++) {
            var _$fY = _$aj._list[j]._panelList[0].getSize();
            if (_$fY == 1) {
                var mi = _$aj._list[j];
                var _$nT = this._patternMain._$1N(_$si, mi._panelList[0]._list[0]._$kI);
                if (_$nT != null) {
                    _$aj._list[j]._$53(_$nT, null, _$si, 0, 0);
                    _$fY = _$aj._list[j]._panelList[0].getSize();
                    if (_$fY == 0) {
                        _$oh = this._$kL;
                        _$e1 = _$oh.length;
                        for (var n = 0; n < _$e1; n++) {
                            if (_$oh[n] == _$aj._list[j]) {
                                _$oh.split(n, 1);
                                break;
                            }
                        }
                        _$aj.delete(j);
                    }
                    break;
                }
            }
        }
    }
};
WidgetDockWindow.prototype.createLayout = function (layout) {
    layout.addContent("DFIdentifier");
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    layout.addContent(rcWindow.left);
    layout.addContent(rcWindow.top);
    layout.addContent(rcWindow.right);
    layout.addContent(rcWindow.bottom);
    var patternPositionType_0, patternPositionType_1;
    for (var i = 0; i < 4; i++) {
        if (i == 0 || i == 2) {
            patternPositionType_0 = EnumPatternPositionType.Top;
            patternPositionType_1 = EnumPatternPositionType.Bottom;
        } else {
            patternPositionType_0 = EnumPatternPositionType.Left;
            patternPositionType_1 = EnumPatternPositionType.Right;
        }
        var panelNum = this._patternMain._panelList[i].getSize();
        var panel;
        var index = 0;
        for (var j = 0; j < panelNum; j++) {
            panel = this._patternMain._panelList[i]._list[j];
            index = panel.initPanelLayout(this._patternMain, layout, index, patternPositionType_0, patternPositionType_1);
        }
        layout.addContent("SECTIONNONE");
    }
    layout.addContent("MINIFRAMES");
    var _$e1 = this._$kL.length;
    var panel;
    var ino = 0;
    var panelNum;
    for (var i = 0; i < _$e1; i++) {
        panelNum = this._$kL[i]._panelList[0].getSize();
        if (panelNum == 1) {
            ino++;
        }
    }
    layout.addContent(ino);
    patternPositionType_0 = 1;
    patternPositionType_1 = 3;
    for (var i = 0; i < _$e1; i++) {
        panelNum = this._$kL[i]._panelList[0].getSize();
        if (panelNum == 1) {
            var _$og = this._$kL[i];
            _$og.getWindowRect(rcWindow);
            layout.addContent(rcWindow.left);
            layout.addContent(rcWindow.top);
            layout.addContent(rcWindow.right);
            layout.addContent(rcWindow.bottom);
            panel = _$og._panelList[0]._list[0];
            panel.initPanelLayout(_$og, layout, 0, patternPositionType_0, patternPositionType_1);
            layout.addContent("SECTIONNONE");
        }
    }
    layout.getContent();
};
WidgetDockWindow.prototype._$1O = function (floatPanel, title, _$nO, _$dA, _$dC, _$nP, _$cX) {
    var ino = this._$kL.length;
    var _$og = null;
    var _$e1;
    for (var i = 0; i < ino; i++) {
        _$og = this._$kL[i];
        _$e1 = _$og._panelList[0].getSize();
        if (_$e1 == 1) {
            var _$ps = _$og._panelList[0]._list[0];
            var _$pO = this._patternMain._$1J(floatPanel, title, _$ps._$kI, _$cX, null);
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
