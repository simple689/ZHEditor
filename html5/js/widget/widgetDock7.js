function widgetDockFloatPanel(window, _panelTitle) {
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
    this.panelTitle = _panelTitle;
    this._$hE = null;
    this._$jm = widgetDockFloatPanel._$0;
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
    this._$l0 = null;
    this._$l9 = null;
    this.element = null;
    this._$hr = 0;
    this._$hs = 0;
    this._$ht = 0;
    this._$hq = 0;
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
    this._$iF;
    this._$kc;
    this._$id = true;
    this._$jx;
    this._$jN = widgetDockFloatPanel._$48;
    this._$kj = widgetDockFloatPanel._$0;
    this._$j4;
    this._$lJ;
    this._$kB;
    this._$l7;
    this._$kH;
    this._$iS;
    this._$i8 = null;
    this._$hw = null;
    this._$lD;
    this._$lN;
    this._$k0 = widgetDockFloatPanel._$4Z;
    this._$jt = 0;
    this._$hz = null;
    if (window == null) this._$jw = widgetDockFloatPanel._$4B; else {
        this._$jw = widgetDockFloatPanel._$4W;
        this._$l0 = window;
    }
    if (window != null) this._$f6(window.pattern, _panelTitle);
    this._$jE = 0;
    if (widgetDockFloatPanel._$kw == null) widgetDockFloatPanel._$kw = new _$D();
    widgetDockFloatPanel._$kw._$b(this);
};
widgetDockFloatPanel._$0K = 1;
widgetDockFloatPanel._$0Q = 0x02;
widgetDockFloatPanel._$0M = 0x04;
widgetDockFloatPanel._$0I = 0x08;
widgetDockFloatPanel._$iH = false;
widgetDockFloatPanel._$0J = 0;
widgetDockFloatPanel._$0P = 1;
widgetDockFloatPanel._$0L = 2;
widgetDockFloatPanel._$0H = 3;
widgetDockFloatPanel._$1F = 4;
widgetDockFloatPanel._$3Q = 0;
widgetDockFloatPanel._$6K = 1;
widgetDockFloatPanel._$5j = 2;
widgetDockFloatPanel._$q = 3;
widgetDockFloatPanel._$0 = 7;
widgetDockFloatPanel._$48 = 0;
widgetDockFloatPanel._$46 = 1;
widgetDockFloatPanel._$47 = 2;
widgetDockFloatPanel._$4C = 0;
widgetDockFloatPanel._$4Z = 1;
widgetDockFloatPanel._$6W = 2;
widgetDockFloatPanel._$0V = 0;
widgetDockFloatPanel._$0X = 1;
widgetDockFloatPanel._$0W = 2;
widgetDockFloatPanel._$1D = 0x01;
widgetDockFloatPanel._$1A = 0x02;
widgetDockFloatPanel._$1B = 0x04;
widgetDockFloatPanel._$1C = 0x08;
widgetDockFloatPanel._$2T = 0x10;
widgetDockFloatPanel._$2U = 0x20;
widgetDockFloatPanel._$6X = 0x380;
widgetDockFloatPanel._$3t = 0xc00;
widgetDockFloatPanel._$4X = 0xF000;
widgetDockFloatPanel._$B = 0x10000;
widgetDockFloatPanel._$C = 0xE0000;
widgetDockFloatPanel._$75 = 0;
widgetDockFloatPanel._$2Y = 1;
widgetDockFloatPanel._$2X = 2;
widgetDockFloatPanel._$2W = 3;
widgetDockFloatPanel._$lU = null;
widgetDockFloatPanel._$lV = null;
widgetDockFloatPanel._$lY = null;
widgetDockFloatPanel._$lR = null;
widgetDockFloatPanel._$lS = null;
widgetDockFloatPanel._$lT = null;
widgetDockFloatPanel._$lW = null;
widgetDockFloatPanel._$lX = null;
widgetDockFloatPanel._$hP = null;
widgetDockFloatPanel._$hQ = null;
widgetDockFloatPanel._$hT = null;
widgetDockFloatPanel._$hM = null;
widgetDockFloatPanel._$hN = null;
widgetDockFloatPanel._$hO = null;
widgetDockFloatPanel._$hR = null;
widgetDockFloatPanel._$hS = null;
widgetDockFloatPanel._$1H = 4;
widgetDockFloatPanel._$iA = false;
widgetDockFloatPanel._$jy = 0;
widgetDockFloatPanel._$iY = false;
widgetDockFloatPanel._$jB = 0;
widgetDockFloatPanel._$im = true;
widgetDockFloatPanel._$k2 = 0;
widgetDockFloatPanel._$k3 = 0;
widgetDockFloatPanel._$lL = new _$5Y();
widgetDockFloatPanel._$4B = 0;
widgetDockFloatPanel._$1G = 1;
widgetDockFloatPanel._$4W = 2;
widgetDockFloatPanel._$kw = null;
widgetDockFloatPanel._$ie = false;
widgetDockFloatPanel._$lr = new Align();
widgetDockFloatPanel._$cj = new Rect();
widgetDockFloatPanel._$h5 = null;
widgetDockFloatPanel.prototype._$7h = function () {
};
widgetDockFloatPanel.prototype._$7i = function () {
};
widgetDockFloatPanel.prototype._$fO = function () {
    return false;
};
widgetDockFloatPanel.prototype.hasOutIFrame = function () {
    this._$iZ = true;
};
widgetDockFloatPanel.prototype._$f7 = function () {
    if (this._$i8 == null) {
        this._$i8 = new Array();
        this._$hw = new Array();
    }
    this._$kc = 0xffff;
    this._$k0 = widgetDockFloatPanel._$4Z;
    this._$kj = widgetDockFloatPanel._$0;
    this._$iv = true;
    this._$jN = widgetDockFloatPanel._$48;
    this._$iS = false;
    this._$iF = false;
    this._$lt = new Align();
    this._$lK = new _$5Y();
    this._$lJ = new _$5Y();
    this._$lI = new _$5Y();
    this._$lx = new Rect();
    widgetDockFloatPanel._$lL = new _$5Y();
    this._$ly = new Rect();
    this._$ls = new Align();
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
    widgetDockPattern._$6l(this._$lx);
    widgetDockPattern._$6l(this._$ly);
    this._$lI.cx = this._$lI.cy = 0;
    this._$j3 = this._$j0 = 0;
    this._$kA = null;
    this._$jr = 0xffffffff;
};
widgetDockFloatPanel.prototype._$f6 = function (_$nS, _panelTitle) {
    this.panelTitle = _panelTitle;
    this._$3a();
    if (this._$jw == widgetDockFloatPanel._$4B) return;
    this._$kH = _$nS;
    this._$f7();
    this._$39(true);
    this._$7q();
    this._$hy._$rC(_panelTitle);
};
widgetDockFloatPanel.prototype._$fS = function () {
    return true;
};
widgetDockFloatPanel.prototype._$rr = function (img) {
    _$hE = img;
    if (this._$k0 == widgetDockFloatPanel._$6W && _$kH != null) {
        this._$kH._$5A(0);
    } else if (this._$kA != null && this._$kA._$o5 != null) {
        this._$kA._$o5._$5z();
    }
};
widgetDockFloatPanel.prototype._$bV = function () {
    if (this._$fT()) return _$75;
    if (_$k0 == widgetDockFloatPanel._$6W) return widgetDockFloatPanel._$2Y;
    if (_$kA != null && _$kA._$o5 != null) {
        if (_$kA._$o5._$3x(this)) return _$2X;
    }
    return _$2W;
};
widgetDockFloatPanel.prototype._$rm = function (_$8a) {
    _$iq = _$8a;
};
widgetDockFloatPanel.prototype._$bO = function () {
    return _$iq;
};
widgetDockFloatPanel.prototype._$c4 = function () {
    return _$k0;
};
widgetDockFloatPanel.prototype._$ry = function (_$d6) {
    if (!_$S() || _$k0 == _$d6) {
        return;
    }
    if (_$kB == null) {
        _$k0 = _$d6;
        return;
    }
    var bvi = this._$fT();
    if (_$d6 == widgetDockFloatPanel._$4Z || _$d6 == widgetDockFloatPanel._$6W) {
        if ((this._$k0 == widgetDockFloatPanel._$4Z && bvi) || this._$k0 == widgetDockFloatPanel._$6W) this._$0h(); else if (this._$k0 == widgetDockFloatPanel._$4C && _$d6 == widgetDockFloatPanel._$6W) {
            if (bvi) {
                this._$k0 = widgetDockFloatPanel._$4Z;
                this._$0h();
            } else {
                this._$iP = true;
                this._$kH._$8(this._$j0, this, true);
            }
        }
        this._$k0 = _$d6;
        _$qJ();
    } else {
        if (_$k0 == widgetDockFloatPanel._$6W) {
            _$39(false);
            _$kH._$5M(_$j0, this);
            _$kH._$5A(0);
            widgetDockController._$8l._$5N();
            this._$iP = false;
            this._$k0 = widgetDockFloatPanel._$4Z;
            setVisible(true);
            this._$iP = true;
        }
        _$k0 = _$4C;
        _$qJ();
    }
};
widgetDockFloatPanel.prototype._$9W = function () {
    this._$f7();
};
widgetDockFloatPanel.prototype.unload = function (_$80) {
    if (_$k0 == widgetDockFloatPanel._$6W) {
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
        var _$e1 = widgetDockFloatPanel._$kw.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            if (widgetDockFloatPanel._$kw.panelList[i] == this) widgetDockFloatPanel._$kw._$5G(i);
        }
    }
};
widgetDockFloatPanel.prototype._$r9 = function (_$9R) {
    if (this._$hy != null) {
        this._$hy._$rp(_$9R);
        this._$hy._$qJ();
    }
    if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1) {
        this._$kA._$o5._$5z();
    }
};
widgetDockFloatPanel.prototype._$bW = function () {
    return this._$hE;
};
widgetDockFloatPanel.prototype._$rl = function (_$7T) {
    this._$iv = _$7T;
};
widgetDockFloatPanel.prototype.setPanelTitle = function (_panelTitle) {
    this.panelTitle = _panelTitle;
};
widgetDockFloatPanel.prototype.getPanelTitle = function () {
    return this.panelTitle;
};
widgetDockFloatPanel.prototype.getTitle = function () {
    if (this.panelTitle != null && this.panelTitle.length > 0) return this.panelTitle; else return _$hy._$cb();
};
widgetDockFloatPanel.prototype.setInitialLayoutReference = function (_$mO) {
    if (_$mO != this) this._$l9 = _$mO;
};
widgetDockFloatPanel.prototype._$rt = function (mgr) {
};
widgetDockFloatPanel.prototype._$1f = function (_$og, _panelTitle) {
    if (_$og == null) this._$jw = widgetDockFloatPanel._$4B; else this._$jw = _$1G;
    this._$f6(_$og._$8l, _panelTitle);
    this._$jE = 0;
    if (widgetDockFloatPanel._$kw == null) widgetDockFloatPanel._$kw = new _$D();
    widgetDockFloatPanel._$kw._$b(this);
};
widgetDockFloatPanel.prototype._$mq = function () {
    _$kH._$1(this);
};
widgetDockFloatPanel.prototype._$7q = function () {
    this._$hy = new _$1l();
    this._$hy._$rn(this);
    this._$fc(this._$hy, widgetDockFloatPanel._$6K);
    {
        this._$hy._$rE(this._$hy._$cb());
    }
};
widgetDockFloatPanel.prototype._$1j = function (_$99) {
    if (_$99 == _$0P || _$99 == _$0H) return true;
    return false;
};
widgetDockFloatPanel.prototype._$r6 = function (_$7J, _$8d) {
    if (this._$k0 == widgetDockFloatPanel._$6W) return;
    if (this._$jw == widgetDockFloatPanel._$4B) return;
    if (_$7J == false) {
    } else {
    }
    if (_$7J && this._$kB != null && !this._$kB._$ii) {
        if (this._$jw != widgetDockFloatPanel._$4W) {
        }
    }
    this._$hy._$r6(_$7J);
    if (_$7J && this._$jw == widgetDockFloatPanel._$4W && !this._$kB._$ii) {
        if (!this._$kB._$ii) {
        }
    }
    if (_$8d) {
        if (this._$kB != null && !this._$kB._$ii) {
        }
    }
};
widgetDockFloatPanel.prototype._$ag = function (mainPattern) {
    return new widgetDockPanel();
};
widgetDockFloatPanel.prototype._$69 = function (_$9g, _$nA, _$97) {
    this._$lf._$j1 = _$9g;
    if (_$nA != null) {
        this._$lf._$ky = _$nA._$kA;
        this._$lf._$j2 = _$97;
    } else this._$lf._$ky = null;
};
widgetDockFloatPanel.prototype._$2w = function (_$nz, _$dk, _$p8, _$8b) {
    var _$fl = _$nz.cx;
    var _$fm = _$nz.cy;
    if (this._$lf._$j1 == widgetDockPattern._$3m || this._$lf._$j1 == widgetDockPattern._$3j) {
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
    if (this._$lf._$j1 == widgetDockPattern._$3j) {
        _$fm = _$fm - _$nz.cy;
        this._$lf._$kq = this._$lf._$kq + _$fm;
    } else if (this._$lf._$j1 == widgetDockPattern._$3l) {
        _$fl = _$fl - _$nz.cx;
        this._$lf._$kn = this._$lf._$kn + _$fl;
    }
};
widgetDockFloatPanel.prototype._$mw = function (pt) {
    var _$pL = _$c0();
    _$pL.x = _$pL.x + pt.x;
    _$pL.y = _$pL.y + pt.y;
    _$4R(_$pL);
};
widgetDockFloatPanel.prototype._$rC = function (_panelTitle) {
    _$hy._$rC(_panelTitle);
    if (_$kA != null && _$kA._$o5 != null && _$kA._$o5._$i6.length > 1) {
        _$kA._$o5._$4J(this, _panelTitle);
    }
    var _$fs;
    if (this._$kj <= _$q) _$fs = this._$kj; else _$fs = this._$j0;
    if (_$k0 == _$6W && _$fs <= _$0H && _$kH._$lk != null && _$kH._$lk[_$fs] != null) {
        _$kH._$lk[_$fs]._$4J(this, _panelTitle);
    }
};
widgetDockFloatPanel.prototype._$cb = function () {
    return this._$hy._$cb();
};
widgetDockFloatPanel.prototype._$rF = function (_$di) {
    var _$fg = this._$kj;
    var bre = false;
    if (_$fg != _$di && _$k0 == widgetDockFloatPanel._$6W) {
        _$0h();
        bre = true;
    }
    if (_$di < 0 || _$di > _$q) {
        this._$kj = _$0;
    } else this._$kj = _$di;
    if (_$fg != this._$kj && bre && _$k0 == widgetDockFloatPanel._$4Z) {
        _$0h();
    }
};
widgetDockFloatPanel.prototype._$cd = function () {
    return this._$kj;
};
widgetDockFloatPanel.prototype._$rs = function (_$cO) {
    if (_$cO < 0) _$cO = 0;
    if (_$cO > 2) _$cO = 2;
    _$jN = _$cO;
};
widgetDockFloatPanel.prototype._$bY = function () {
    return _$jN;
};
widgetDockFloatPanel.prototype._$ms = function (pt) {
    var _$pL = _$c0();
    _$pL.x = _$pL.x + pt.x;
    _$pL.y = _$pL.y + pt.y;
    _$4i(_$pL);
};
widgetDockFloatPanel.prototype._$bf = function (_$88) {
    if (!this._$io) return;
    var ar = this._$i8;
    var _$gi = ar.length;
    var i;
    for (i = 0; i < _$gi; i++) {
        var tmp = ar[i];
        tmp(_$88);
    }
};
widgetDockFloatPanel.prototype._$be = function (_$cD) {
    var ar = this._$hw;
    var _$gi = ar.length;
    var i;
    for (i = 0; i < _$gi; i++) {
        var tmp = ar[i];
        tmp(_$cD);
    }
};
widgetDockFloatPanel.prototype._$R = function (_$pC, _$99, _$nz) {
    this._$lf._$j0 = this._$j0;
    this._$lf._$jr = this._$jr;
    this._$lf._$kA = this._$kA;
    this._$lf._$kC = this._$kB;
    this._$lf._$kx = this;
    this._$lf._$ir = this._$ir;
    if (!this._$Q()) this._$lf._$it = true; else this._$lf._$it = false;
    if (!this._$S() || widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) {
        this._$25(this._$lf._$lC);
    } else {
        this._$kB.getWindowRect(this._$lf._$lC);
    }
    var _$og = null;
    var _$oh = null;
    if (this._$jw == widgetDockFloatPanel._$4W) _$oh = this._$l0._$2i(); else _$oh = _$6B._$kL;
    var _$e1 = _$oh.length;
    var _$qj = new Rect();
    var _$8R;
    if (this._$iq) _$e1 = 0;
    var i;
    for (i = 0; i < _$e1; i++) {
        var pmi;
        if (this._$jw == widgetDockFloatPanel._$4W) pmi = _$oh[i]; else pmi = _$6B._$kL[i]._$hJ;
        if (pmi._$bG() == null) continue;
        pmi.getWindowRect(_$qj);
        _$8R = false;
        if (!pmi._$it) {
            _$8R = widgetDockPattern._$5f(_$qj, _$pC);
            if (_$8R) {
            }
        } else {
            widgetDockFloatPanel._$cj.setRect(_$qj);
            widgetDockFloatPanel._$cj.left -= widgetDockPattern._$A;
            widgetDockFloatPanel._$cj.right += widgetDockPattern._$A;
            widgetDockFloatPanel._$cj.top -= widgetDockPattern._$A;
            widgetDockFloatPanel._$cj.bottom += widgetDockPattern._$A;
            _$8R = widgetDockPattern._$5f(widgetDockFloatPanel._$cj, _$pC);
            if (_$8R) {
                if ((pmi == this._$kB) && widgetDockFloatPanel._$iY) {
                    _$og = null;
                    _$99[0] = 0xff;
                    this._$lf._$j1 = 0xff;
                } else {
                    _$og = pmi._$1Z(this._$lf, this._$kz, _$pC, _$99, _$nz);
                    if (this._$lf._$j1 >= 0 && this._$lf._$j1 <= 7) {
                        return _$og;
                    }
                }
                if (widgetDockPattern._$5f(_$qj, _$pC) && pmi != this._$kB) {
                    return _$og;
                }
            }
        }
    }
    _$og = null;
    _$og = this._$kH._$1Z(this._$lf, this._$kz, _$pC, _$99, _$nz);
    if (_$99[0] >= 0 && _$99[0] <= 7) {
        if (this._$lf._$iM) {
            this._$kH._$0f(this._$lf, _$99, _$nz);
        }
        return _$og;
    } else {
        var _$tm = 0;
    }
    return _$og;
};
widgetDockFloatPanel.prototype._$39 = function (_$88) {
    if (this._$hy != null) {
        this._$hy.setVisible(_$88);
    }
    if (this.element != null) {
        if (_$88) {
            this.element.style.overflow = "auto";
        } else {
            this.element.style.overflow = "hidden";
        }
    }
    _$m8._$39(this.element, _$88);
};
widgetDockFloatPanel.prototype._$fR = function () {
    if (this._$kc == 0 && !this._$id) {
        return false;
    }
    return true;
};
widgetDockFloatPanel.prototype._$ro = function (_$7W) {
    this._$id = _$7W;
    if (!this._$id && this._$kB != null && !this._$kB._$ii) {
        if (this._$kc != 0) {
            this._$ay();
        } else {
        }
    }
};
widgetDockFloatPanel.prototype._$bQ = function () {
    return this._$id;
};
widgetDockFloatPanel.prototype._$ra = function (iHW) {
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
widgetDockFloatPanel.prototype._$bD = function () {
    return this._$jA;
};
widgetDockFloatPanel.prototype._$rk = function (_$di) {
    if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1 && this._$kA._$o5._$bi == this) {
        if (_$di != this._$jm && _$jm == _$q) {
            _$qC(_$hy._$hf);
            this._$fc(_$kA._$o5, widgetDockFloatPanel._$q);
        } else if (_$di == widgetDockFloatPanel._$q) {
            this._$jm = _$di;
            this._$5(_$kA._$o5);
        }
    }
    this._$jm = _$di;
    this._$qz(-1);
};
widgetDockFloatPanel.prototype._$bN = function () {
    return this._$jm;
};
widgetDockFloatPanel.prototype._$fc = function (_$a0, _$gf) {
};
widgetDockFloatPanel.prototype.add = function (s, _$a0) {
    return _$a0;
};
widgetDockFloatPanel.prototype.addElement = function (_element) {
    this.element = _element;
    _element.style.position = "absolute";
    if (widgetDockController.browserType == browserType.IE && widgetDockController.ieVersion <= 7) {
        this.hasOutIFrame();
        return;
    }
    if (_element instanceof HTMLIFrameElement) {
        if (widgetDockController._$06(_element.id)) {
            this.hasOutIFrame();
        }
    }
};
widgetDockFloatPanel.prototype._$6p = function (_$cS, _$do, _$dq, _$cM) {
    {
        this._$sL();
    }
    if (!this._$ir) {
        this._$lJ.cx = _$dq;
        this._$lJ.cy = _$cM;
    }
    this._$hr = _$cS;
    this._$hs = _$do;
    ;this._$ht = _$dq;
    this._$hq = _$cM;
    this._$qK();
};
widgetDockFloatPanel.prototype._$6q = function (_$q4) {
    this._$6p(_$q4.left, _$q4.top, widgetDockPattern._$2A(_$q4), widgetDockPattern._$2z(_$q4));
};
widgetDockFloatPanel.prototype.setVisible = function (_$88) {
    if (this._$jw == widgetDockFloatPanel._$4B) {
        this._$39(_$88);
        return;
    }
    this._$kH._$rB(this, _$88);
};
widgetDockFloatPanel.prototype._$rB = function (_$88) {
    var _$rW = "";
    if (!this._$iF) {
        this._$39(_$88);
        return;
    }
    if (_$88) {
        if (!this._$fT()) {
            this._$39(true);
            if (this._$k0 == widgetDockFloatPanel._$6W) {
                if (this._$kH != null) {
                    this._$l0.pattern._$6t(this);
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
                    this._$39(true);
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
            if (this._$k0 == widgetDockFloatPanel._$6W) {
                this._$kH._$5N();
                return;
            }
        }
        var _$8L = false;
        if (this._$kB != this._$kH) _$8L = true;
        this._$kB._$5H(this, null);
        this._$ir = _$8L;
        this._$39(false);
        this._$iP = false;
    }
    this._$bf(_$88);
};
widgetDockFloatPanel.prototype._$S = function () {
    return true;
};
widgetDockFloatPanel.prototype._$18 = function () {
    this._$kH._$s7(this);
};
widgetDockFloatPanel.prototype._$s7 = function () {
    if (!this._$S()) {
        if (!this._$ir) return;
    }
    var _$8s = false;
    if (this._$kB == null) {
        if (this._$jE == 0) {
            this._$kB = this._$kH;
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
    this._$39(false);
    this._$d(this._$kB);
    if (this._$kB != null && this._$kB._$ii) this._$be(this._$j0); else this._$be(widgetDockFloatPanel._$1F);
    this._$39(true);
    if (!_$8s) this._$kB._$18(this, null);
    this._$kH._$1(this);
};
widgetDockFloatPanel.prototype._$d = function (mainPattern) {
    mainPattern._$d(this);
};
widgetDockFloatPanel.prototype._$Z = function () {
    if (this._$kW == null) {
        if (this._$jw == widgetDockFloatPanel._$4W) {
            this._$kW = new _$J(false);
        } else {
            this._$kW = new _$K(false);
        }
        this._$kW._$kV = this._$kH;
        this._$j0 = 0;
        this._$jr = 0xffffffff;
        this._$kA = null;
    }
    this._$kW._$n(this);
};
widgetDockFloatPanel.prototype._$1R = function () {
    this._$kH._$s8(this);
};
widgetDockFloatPanel.prototype._$5v = function () {
};
widgetDockFloatPanel.prototype._$s8 = function () {
    var rc = new Rect();
    rc.left = this._$lt.x;
    rc.top = this._$lt.y;
    rc.right = rc.left + this._$lK.cx;
    rc.bottom = rc.top + this._$lK.cy;
    if (this._$kB != null && this._$S()) {
        var _$aQ = null;
        if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0V && this._$kA._$o5 != null && (this._$kA._$o5._$i6.length > 1)) {
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
                            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0X) _$aQ[i]._$io = false;
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
    this._$be(widgetDockFloatPanel._$1F);
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
        widgetDockPattern._$6o(_$kW._$bG(), null, _$eu, _$gC, this._$lK.cx, this._$lK.cy, 0);
        this._$kW._$bG().setVisible(true);
        this._$kW._$bI()._$sL();
        this._$kB = this._$kW;
        this._$qz(-1);
    }
};
widgetDockFloatPanel.prototype._$31 = function (_$pC) {
    return this._$kA._$31(this, _$pC);
};
widgetDockFloatPanel.prototype._$3y = function () {
    if (this._$ia && !this._$ir) {
        this._$ia = false;
        this._$1m(this._$ia);
    }
};
widgetDockFloatPanel.prototype._$6F = function () {
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
widgetDockFloatPanel.prototype._$1m = function (_$7J) {
};
widgetDockFloatPanel.prototype._$4L = function () {
    _$5d();
};
widgetDockFloatPanel.prototype._$5d = function () {
    if (_$k0 == widgetDockFloatPanel._$6W) return;
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
widgetDockFloatPanel.prototype._$9X = function () {
    if (this._$k0 == widgetDockFloatPanel._$6W) {
        this._$l0.pattern._$5N();
        this._$bf(false);
        return true;
    }
    this._$kB._$5H(this, null);
    this._$39(false);
    this._$iP = false;
    this._$bf(false);
    return true;
};
widgetDockFloatPanel.prototype._$0h = function () {
    if (this._$k0 == widgetDockFloatPanel._$4Z) {
        if (this._$k0 == widgetDockFloatPanel._$6W) {
            widgetDockController._$8l._$5N();
        }
        this._$kB._$5H(this, null);
        this._$39(false);
        this._$iP = false;
        this._$k0 = widgetDockFloatPanel._$6W;
        this._$bf(false);
        if (this._$kj > widgetDockFloatPanel._$q) this._$kH._$8(this._$j0, this, true); else this._$kH._$8(this._$kj, this, true);
        this._$kH._$5A(0);
        this._$qz(-1);
    } else {
        this._$39(false);
        if (this._$kj <= widgetDockFloatPanel._$q) this._$kH._$5M(this._$kj, this); else this._$kH._$5M(this._$j0, this);
        this._$kH._$5A(0);
        this._$l0.pattern._$5N();
        this._$iP = false;
        this._$k0 = widgetDockFloatPanel._$4Z;
        this.setVisible(true);
    }
};
widgetDockFloatPanel.prototype._$cn = function () {
    return this._$iw;
};
widgetDockFloatPanel.prototype._$rq = function (_$7U) {
    this._$iw = _$7U;
};
widgetDockFloatPanel.prototype._$5u = function () {
};
widgetDockFloatPanel._$e4 = 0;
var _$t9 = null;
_$b1._$b0(widgetDockWindow, widgetDockFloatPanel);

widgetDockFloatPanel.prototype._$4R = function (_$pD) {
    return this._$kH._$sa(this, _$pD);
};
widgetDockFloatPanel.prototype._$sa = function (_$pD) {
    widgetDockFloatPanel._$ie = false;
    this._$lf._$j1 = 0xff;
    this._$lf._$ij = false;
    this._$im = true;
    if (this._$kB != null && this._$kB._$ii) {
        if ((widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0V) && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1) {
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
    widgetDockFloatPanel._$iY = false;
    if (this._$kB != null && !this._$kB._$ii) {
        if (this._$kB._$it) {
            if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0X) widgetDockFloatPanel._$iY = !this._$kB._$4s(null, false); else if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0V) widgetDockFloatPanel._$iY = !this._$kB._$4s(null, true); else if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0W) widgetDockFloatPanel._$iY = true;
        }
    }
    if (this._$kB != null && !this._$kB._$ii && !this._$S()) widgetDockFloatPanel._$iY = true;
    this._$25(this._$lx);
    if (widgetDockFloatPanel._$iY) {
        if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0W) {
            widgetDockFloatPanel._$k2 = this._$lK.cx;
            widgetDockFloatPanel._$k3 = this._$lK.cy;
        }
        {
            if (this._$kB != null) {
                this._$kB.getWindowRect(this._$lx);
            }
            this._$lK.cx = widgetDockPattern._$2A(this._$lx);
            this._$lK.cy = widgetDockPattern._$2z(this._$lx);
        }
    }
    this._$iG = true;
    this._$ly.left = this._$ly.right = this._$ly.right = this._$ly.bottom = 0;
    this._$ko = _$pD.x - this._$lx.left;
    this._$kp = widgetDockPattern._$2A(this._$lx);
    this._$ks = _$pD.y - this._$lx.top;
    this._$kr = widgetDockPattern._$2z(this._$lx);
    this._$3B();
    this._$4I();
    this._$ih = false;
    widgetDockFloatPanel._$lL.cx = this._$lJ.cx;
    widgetDockFloatPanel._$lL.cy = this._$lJ.cy;
    this._$iL = false;
    this._$iG = false;
    return 0;
};
widgetDockFloatPanel.prototype._$4I = function () {
};
widgetDockFloatPanel.prototype._$15 = function (_$ts, _$h1) {
    _$jG = 0;
    return _$jG;
};
widgetDockFloatPanel.prototype._$mf = function () {
    widgetDockFloatPanel._$ie = true;
    this._$4i(widgetDockFloatPanel._$lr);
};
widgetDockFloatPanel.prototype._$mg = function () {
    widgetDockFloatPanel._$ie = false;
    this._$4i(widgetDockFloatPanel._$lr);
};
widgetDockFloatPanel.prototype._$4i = function (pt) {
    widgetDockFloatPanel._$lr.x = pt.x;
    widgetDockFloatPanel._$lr.y = pt.y;
    this._$iL = true;
    if (this._$jw == widgetDockFloatPanel._$4W) {
        var rcb = new Rect();
        this._$l0.getWindowRect(rcb);
        if (!widgetDockPattern._$5f(rcb, pt)) return;
    }
    this._$lD.setRect(this._$lx);
    var _$8s = false;
    this._$lf._$ij = false;
    this._$lf._$iC = false;
    this._$lf._$kM = this._$R(pt, this._$lN, widgetDockFloatPanel._$lL);
    if (widgetDockFloatPanel._$ie) {
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
        if ((widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0V) && (this._$kA._$o5 != null) && this._$kA._$o5._$i6.length > 1) {
            var _$p4 = this._$kA._$o5._$21();
            _$f8 = _$p4.length;
            for (i = 0; i < _$f8; i++) {
                if (_$p4[i]._$1k(this._$lf._$kM, this._$lN[0])) break;
            }
            if (i == _$f8) {
                this._$lN[0] = 8;
            }
        } else {
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) {
                if (!this._$1k(this._$lf._$kM, this._$lf._$j1)) {
                    this._$lN[0] = 8;
                }
            } else {
                var _$7F = new _$D();
                var pbk = (this._$kB.subPatternList[0].subPattern.panelList[0])._$kI;
                pbk._$2Q(_$7F);
                var ic = _$7F.getPanelNum();
                for (i = 0; i < ic; i++) {
                    if (_$7F.panelList[i]._$1k(this._$lf._$kM, this._$lN[0])) break;
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
            var _$qr = new AlignSize();
            widgetDockController._$2E(_$qr);
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
                var _$e1 = this._$lf._$kM.subPatternList[this._$lN[0]].subPattern.getPanelNum();
                var _$g5 = this._$lf._$ka - 1;
                if (_$g5 < _$e1) {
                    var _$pY = null;
                    var k;
                    for (k = 0; k <= _$g5; k++) {
                        _$pY = this._$lf._$kM.subPatternList[this._$lN[0]].subPattern.panelList[_$g5 - k];
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
                    if (this._$lN[0] == widgetDockFloatPanel._$0J || this._$lN[0] == widgetDockFloatPanel._$0L) {
                        widgetDockFloatPanel._$lL.cy = rca.bottom - rca.top;
                        pt.x = 0;
                        pt.y = rca.top;
                        this._$lf._$kq = pt.y;
                    } else {
                        widgetDockFloatPanel._$lL.cx = rca.right - rca.left;
                        pt.x = rca.left;
                        pt.y = 0;
                        this._$lf._$kn = pt.x;
                    }
                }
            }
            this._$lx.left = this._$lf._$kn;
            this._$lx.top = this._$lf._$kq;
        } else {
            this._$lx.left = pt.x - widgetDockFloatPanel._$lL.cx * this._$ko / this._$kp;
            this._$lx.top = pt.y - widgetDockFloatPanel._$lL.cy * this._$ks / this._$kr;
        }
        this._$lx.right = this._$lx.left + widgetDockFloatPanel._$lL.cx;
        this._$lx.bottom = this._$lx.top + widgetDockFloatPanel._$lL.cy;
        _$8s = true;
    }
    if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0X) {
        if (this._$lf._$iC) {
            this._$T();
            return;
        } else {
            this._$3A();
        }
    }
    if (this._$jw == widgetDockFloatPanel._$4W) {
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
widgetDockFloatPanel.prototype._$4l = function (_$8s) {
    widgetDockFloatPanel._$hT._$ri(_$8s, this._$id);
    widgetDockFloatPanel._$hM._$ri(_$8s, this._$id);
    widgetDockFloatPanel._$hP._$ri(_$8s, this._$id);
    widgetDockFloatPanel._$hQ._$ri(_$8s, this._$id);
    var pt = new Align();
    pt.x = this._$lx.left;
    pt.y = this._$lx.top;
    this._$m5(pt.x, pt.y, this._$lx.right - this._$lx.left, this._$lx.bottom - this._$lx.top);
    if ((this._$lD.right - this._$lD.left) != (this._$lx.right - this._$lx.left)) {
        widgetDockFloatPanel._$hT._$sL();
        widgetDockFloatPanel._$hM._$sL();
    }
    if ((this._$lD.bottom - this._$lD.top) != (this._$lx.bottom - this._$lx.top)) {
        widgetDockFloatPanel._$hP._$sL();
        widgetDockFloatPanel._$hQ._$sL();
    }
};
widgetDockFloatPanel.prototype._$2Q = function (_$mY, _$nh, _$85, _$7O) {
    var _$7F = new _$D();
    var com = _$mY._$bE();
    var _$sx;
    var i;
    for (i = 0; i < com.length; i++) {
        if (com[i] instanceof widgetDockFloatPanel) {
            _$sx = com[i];
            if (!_$sx._$kA._$8y) {
                if (_$sx._$kA._$o5 != null && _$sx._$kA._$o5._$i6.length >= 1) {
                    var _$e1 = _$sx._$kA._$o5._$i6.length;
                    var j;
                    for (j = 0; j < _$e1; j++) {
                        _$mY._$5E(_$sx._$kA._$o5._$i6[j]._$mO);
                        _$nh.Add(_$sx._$kA._$o5._$i6[j]._$mO);
                        _$7F._$b(_$sx._$kA._$o5._$i6[j]._$mO);
                    }
                    if (_$85) {
                    }
                    _$sx._$kA._$o5 = null;
                } else {
                    if (com[i]._$fT()) {
                        _$mY._$5E(com[i]);
                        _$nh.Add(com[i]);
                        _$7F._$b(com[i]);
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
            var _$nQ = _$7F.panelList[i];
            _$mY._$53(_$nQ);
        }
    } else if (!_$mY._$ii && _$nh._$ii) {
        var _$9C;
        var _$pO;
        var _$pR;
        var _$gB;
        var i;
        for (i = 0; i < _$e1; i++) {
            var _$nQ = _$7F.panelList[i];
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
    _$mY.subPatternList[0].subPattern.panelList[0]._$iX = false;
    _$mY._$01();
    return _$7F;
};
widgetDockFloatPanel.prototype._$33 = function (_$mY, _$nh) {
    if (_$mY._$ii) return null;
    var _$oE = new _$F();
    var _$oK = _$mY.subPatternList[0].subPattern.panelList[0]._$kI;
    _$oE._$5J(_$oK);
    var _$7F;
    _$7F = this._$2Q(_$mY, _$nh, false, false);
    if (!_$nh._$ii && this._$lf._$iM) {
        _$oE._$5w(_$nh, 0);
    } else _$oE._$5w(_$nh, this._$lf._$j1);
    var _$e1 = _$7F.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$7F.panelList[i] != this) _$7F.panelList[i]._$qz(-1);
    }
    return _$oE;
};
widgetDockFloatPanel.prototype._$30 = function (_$mX) {
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
widgetDockFloatPanel.prototype._$5P = function (_$aQ) {
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
widgetDockFloatPanel.prototype._$77 = function () {
    var _$qr = widgetDockController._$lB;
    if (this._$lt.y < _$qr.y) this._$lt.y = _$qr.y;
    if ((this._$lt.x + 15) > (_$qr.x + _$qr.width)) this._$lt.x = _$qr.x + _$qr.width - 15;
    if ((this._$lt.y + 15) > (_$qr.y + _$qr.height)) this._$lt.y = _$qr.y + _$qr.height - 15;
    if ((this._$lt.x + this._$lK.cx - 15) < _$qr.x) this._$lt.x = _$qr.x + 15 - this._$lK.cx;
};
widgetDockFloatPanel.prototype._$73 = function (_$nn, _$nG) {
    var _$pW = _$nG._$oV;
    var _$pu = _$nn;
    var pb = _$nG;
    if (_$pW != null && _$pu != null) {
        var _$qs = new Rect();
        _$pu._$22(_$qs);
        var _$gd = _$qs.bottom - _$qs.top;
        var _$ge = _$qs.right - _$qs.left;
        if ((_$pW._$9y == widgetDockPattern._$3m || _$pW._$9y == widgetDockPattern._$3j) && _$gd > 0 && (_$gd > this._$lJ.cy) && this._$lJ.cy > 0) {
            if (pb._$9j == widgetDockPattern._$3m) {
                _$pW._$br = 1.0 * this._$lJ.cy / (_$gd - this._$lJ.cy);
            } else {
                _$pW._$br = 1.0 * (_$gd - this._$lJ.cy) / this._$lJ.cy;
            }
        } else if ((_$pW._$9y == widgetDockPattern._$3k || _$pW._$9y == widgetDockPattern._$3l) && _$ge > 0 && (_$ge > this._$lJ.cx) && this._$lJ.cx > 0) {
            if (pb._$9j == widgetDockPattern._$3k) _$pW._$br = 1.0 * this._$lJ.cx / (_$ge - this._$lJ.cx); else _$pW._$br = 1.0 * (_$ge - this._$lJ.cx) / this._$lJ.cx;
        }
        if (_$pW._$br < 0.01) _$pW._$br = 0.01;
    }
};
widgetDockFloatPanel.prototype._$1x = function (pt) {
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
        if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) {
            this._$lJ.cx = widgetDockFloatPanel._$lL.cx;
            this._$lJ.cy = widgetDockFloatPanel._$lL.cy;
        }
        if ((this._$j0 == this._$lf._$j1) && (this._$jr == this._$lf._$ka) && (this._$kA == this._$lf._$ky) && this._$lf._$j2 == 0xff) return;
        var _$8t = false;
        var _$aQ = null;
        var pb = null;
        if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0V && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1) {
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
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) {
                if (!this._$1k(this._$lf._$kM, this._$lf._$j1)) return;
                _$aQ = new Array(1);
                _$aQ[0] = this;
                this._$30(this._$lf);
            } else {
                var _$7F = new _$D();
                var pbk = this._$kB.subPatternList[0].subPattern.panelList[0]._$kI;
                pbk._$2Q(_$7F);
                var i;
                var ic = _$7F.getPanelNum();
                var _$oX = new Array(ic);
                _$aQ = new Array(ic);
                _$9q = new Array(ic);
                var _$en = 0;
                var _$f8 = 0;
                for (i = 0; i < ic; i++) {
                    if (!_$7F.panelList[i]._$1k(this._$lf._$kM, this._$lf._$j1)) {
                        _$oX[_$en] = _$7F.panelList[i];
                        _$9q[_$en] = _$oX[_$en]._$fT();
                        _$en++;
                    } else {
                        _$aQ[_$f8] = _$7F.panelList[i];
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
                        _$aQ[i] = _$7H.panelList[i];
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
        if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W && _$nZ != null) {
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
                if (_$aQ[i]._$kH._$jv != widgetDockController._$0R) {
                    _$aQ[i]._$qz(-1);
                }
                if (_$aQ[i]._$kB != null && _$aQ[i]._$kB._$ii) {
                    _$aQ[i]._$be(_$aQ[i]._$j0);
                } else _$aQ[i]._$be(widgetDockFloatPanel._$1F);
            }
            this._$r6(true, true);
            return;
        }
        if (this._$lf._$ky != null) {
            _$nZ._$jr = this._$lf._$ky._$of._$jr;
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) pb = new _$F();
            if (_$8t) {
                pb._$0w(_$aQ, _$f8, _$nZ, this._$lf._$kM);
                var k;
                for (k = 0; k < _$f8; k++) {
                    _$aQ[k]._$jr = _$nZ._$jr;
                    _$aQ[k]._$j0 = _$nZ._$j0;
                    _$aQ[k]._$kB = this._$lf._$kM;
                }
            } else {
                if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) pb._$of = _$nZ;
            }
            pb._$8y = true;
            var _$pW = this._$lf._$ky._$oV;
            var _$p2 = new Array(1);
            _$nZ._$0A(this._$lf._$ky, pb, this._$lf._$j2, _$p2);
            var _$pu = _$p2[0];
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) _$nZ._$kA = pb;
            _$pW = pb._$oV;
            _$nZ._$73(_$pu, pb);
        } else {
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W && _$nZ != null) _$nZ._$kA = null;
        }
        if (!this._$lf._$kM._$ii) {
            this._$lf._$kM.Add(this);
        }
        if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W && _$nZ != null) _$nZ._$j0 = this._$lf._$j1;
        if (!this._$lf._$kM._$ii && this._$lf._$iM) {
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) this._$lf._$kM._$1g(this._$lf, this._$lJ); else this._$lf._$kM._$3G(pb, this._$lf, this._$lJ);
        }
        if (this._$lf._$ky == null) {
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) {
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
                            if (_$aQ[i]._$kH._$jv != widgetDockController._$0R) {
                                _$aQ[i]._$qz(-1);
                            }
                            if (_$aQ[i]._$kB != null && _$aQ[i]._$kB._$ii) _$aQ[i]._$be(_$aQ[i]._$j0); else _$aQ[i]._$be(widgetDockFloatPanel._$1F);
                        }
                    }
                }
                if (this._$kA._$o5 != null) this._$kA._$o5._$5z();
            } else {
                this._$lf._$kM._$19(pb, this._$lf._$j1, this._$lf._$ka);
                var k;
                for (k = 0; k < _$f8; k++) {
                    if (_$aQ[k] != this) {
                        if (_$aQ[k]._$kB != null && _$aQ[k]._$kB._$ii) _$aQ[k]._$be(_$aQ[k]._$j0); else _$aQ[k]._$be(widgetDockFloatPanel._$1F);
                    }
                }
            }
        } else {
            if (widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0W) {
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
            if (this._$lf._$kM != null && this._$lf._$kM._$ii) _$nZ._$be(this._$lf._$j1); else _$nZ._$be(widgetDockFloatPanel._$1F);
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
        if (!this._$kB._$ii && widgetDockFloatPanel._$iY) {
            this._$1S();
        } else {
            var _$8F = this._$ir;
            var _$p0 = null;
            var _$en = 0;
            var _$gF;
            _$f8 = 0;
            if (this._$kA._$o5 != null && widgetDockFloatPanel._$jy != widgetDockFloatPanel._$0X) _$p0 = this._$kA._$o5._$21();
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
            if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0V) {
                if (_$aQ != null) {
                    _$nY._$kA._$o(_$aQ, _$f8, _$nY, _$nY._$kB);
                    for (i = 0; i < _$f8; i++) {
                        _$aQ[i]._$jr = _$nY._$jr;
                        _$aQ[i]._$j0 = _$nY._$j0;
                        _$aQ[i]._$kW = _$nY._$kB;
                        _$aQ[i]._$jE = 1;
                        if (_$aQ[i] != this && _$aQ[i]._$kH._$jv != widgetDockController._$0R) {
                            _$aQ[i]._$qz(-1);
                        }
                        if (_$aQ[i] != this) _$aQ[i]._$be(widgetDockFloatPanel._$1F);
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
widgetDockFloatPanel.prototype._$qz = function (_$9d) {
    var kst = "";
    var _$f1 = -1;
    if (this._$jm >= widgetDockFloatPanel._$0) {
        if (this._$kB != null && this._$kB._$ii && this._$kH._$jv != widgetDockController._$0R) {
            if ((this._$j0 == widgetDockPattern._$3k) || (this._$j0 == widgetDockPattern._$3l)) {
                this._$fc(this._$hy, widgetDockFloatPanel._$6K);
                _$f1 = widgetDockFloatPanel._$6K;
            } else {
                this._$fc(this._$hy, widgetDockFloatPanel._$3Q);
                _$f1 = widgetDockFloatPanel._$3Q;
            }
        } else {
            this._$fc(this._$hy, widgetDockFloatPanel._$6K);
            _$f1 = widgetDockFloatPanel._$6K;
        }
    } else {
        var _$8o = false;
        if (this._$kA != null && this._$kA._$o5 != null && this._$kA._$o5._$i6.length > 1 && this._$kA._$o5._$bi == this) _$8o = true;
        if (!_$8o) _$qC(this._$hy); else {
        }
        if (this._$jm == _$3Q) {
            this._$fc(this._$hy, widgetDockFloatPanel._$3Q);
            _$f1 = widgetDockFloatPanel._$3Q;
        } else if (this._$jm == widgetDockFloatPanel._$5j) {
            this._$fc(this._$hy, widgetDockFloatPanel._$5j);
            _$f1 = widgetDockFloatPanel._$5j;
        } else if (this._$jm == widgetDockFloatPanel._$6K) {
            this._$fc(this._$hy, widgetDockFloatPanel._$6K);
            _$f1 = widgetDockFloatPanel._$6K;
        } else {
            if (!_$8o) {
                this._$fc(this._$hy, widgetDockFloatPanel._$q);
                _$f1 = widgetDockFloatPanel._$q;
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
widgetDockFloatPanel.prototype._$bA = function (_$dq, _$cM, _$rL, _$8K) {
    if (_$dq < 40) _$dq = 40;
    if (_$cM < 40) _$cM = 40;
    _$rL.cx = _$dq;
    _$rL.cy = _$cM;
};
widgetDockFloatPanel.prototype._$6c = function (_$99) {
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
widgetDockFloatPanel.prototype._$5 = function (_$n2) {
    if (this._$jm != widgetDockFloatPanel._$q) {
        this._$fc(_$n2, widgetDockFloatPanel._$q);
    } else {
        this._$hy._$a(_$n2);
    }
    this._$hz = _$n2;
    if (_$n2 != null) {
        _$m8._$6i(_$n2._$h8, this._$hy._$h8.style.zIndex);
    }
    this._$qK();
};
widgetDockFloatPanel.prototype._$5O = function (_$n2) {
    this._$hz = null;
    this._$qK();
};
widgetDockFloatPanel.prototype._$1k = function (mainPattern, _$99) {
    if (mainPattern != null && mainPattern._$ii && (_$99 > 3)) return false;
    if (mainPattern != null && (_$99 <= 3) && (_$99 != 0xff)) {
        if (mainPattern._$ii && (((this._$kc >> _$99) & 0x01) == 1)) return true; else if (!mainPattern._$ii && this._$id) return true;
        return false;
    } else if (_$99 > 3) {
        if (this._$id) return false;
    }
    return true;
};
widgetDockFloatPanel.prototype._$aA = function (_$az) {
    if ((_$az <= 3) && (((this._$kc >> _$az) & 0x01) == 1)) return true;
    return false;
};
widgetDockFloatPanel.prototype._$bL = function () {
    if (_$kB != null && _$kB._$ii) return _$j0;
    return _$1F;
};
widgetDockFloatPanel.prototype._$fN = function () {
    if (this._$kB != null && this._$kB._$ii) return false;
    return true;
};
widgetDockFloatPanel.prototype._$3A = function () {
    if (this._$jw == widgetDockFloatPanel._$4W) {
        if (widgetDockFloatPanel._$hT != null) return;
        if (widgetDockFloatPanel._$hT == null) widgetDockFloatPanel._$hT = new _$6C(1, this);
        if (widgetDockFloatPanel._$hP == null) widgetDockFloatPanel._$hP = new _$6C(0, this);
        if (widgetDockFloatPanel._$hQ == null) widgetDockFloatPanel._$hQ = new _$6C(2, this);
        if (widgetDockFloatPanel._$hM == null) widgetDockFloatPanel._$hM = new _$6C(3, this);
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
widgetDockFloatPanel.prototype._$3B = function () {
    this._$lf._$ij = false;
    if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0X) return;
    this._$3A();
};
widgetDockFloatPanel.prototype._$m6 = function (_$cS, _$do, _$dq, _$cM) {
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
widgetDockFloatPanel.prototype._$5D = function (p) {
    _$m8._$5I(widgetDockController.rootDivId, p._$h8);
};
widgetDockFloatPanel.prototype._$m5 = function (_$cS, _$do, _$dq, _$cM) {
    widgetDockFloatPanel._$hT._$r8(_$cS + widgetDockFloatPanel._$1H, _$do, _$dq - (2 * widgetDockFloatPanel._$1H), widgetDockFloatPanel._$1H);
    if (!this._$lf._$ij) {
        widgetDockFloatPanel._$hP._$r8(_$cS, _$do, widgetDockFloatPanel._$1H, _$cM);
        widgetDockFloatPanel._$hQ._$r8(_$cS + _$dq - widgetDockFloatPanel._$1H, _$do, widgetDockFloatPanel._$1H, _$cM);
        widgetDockFloatPanel._$hM._$r8(_$cS + widgetDockFloatPanel._$1H, _$do + _$cM - widgetDockFloatPanel._$1H, _$dq - (2 * widgetDockFloatPanel._$1H), widgetDockFloatPanel._$1H);
        widgetDockFloatPanel._$hT._$qJ();
        widgetDockFloatPanel._$hP._$qJ();
        widgetDockFloatPanel._$hQ._$qJ();
        widgetDockFloatPanel._$hM._$qJ();
        var _$eq;
        if (widgetDockFloatPanel._$hR != null) {
            this._$5D(widgetDockFloatPanel._$hR);
            widgetDockFloatPanel._$hR = null;
        }
        if (widgetDockFloatPanel._$hS != null) {
            this._$5D(widgetDockFloatPanel._$hS);
            widgetDockFloatPanel._$hS = null;
        }
        if (widgetDockFloatPanel._$hN != null) {
            this._$5D(widgetDockFloatPanel._$hN);
            widgetDockFloatPanel._$hN = null;
        }
        if (widgetDockFloatPanel._$hO != null) {
            this._$5D(widgetDockFloatPanel._$hO);
            widgetDockFloatPanel._$hO = null;
        }
    } else {
        if (widgetDockFloatPanel._$hN == null) {
            widgetDockFloatPanel._$hN = new _$6C(3, this);
            widgetDockFloatPanel._$hO = new _$6C(3, this);
            widgetDockFloatPanel._$hR = new _$6C(4, this);
            widgetDockFloatPanel._$hS = new _$6C(5, this);
            widgetDockFloatPanel._$hN._$ri(true);
            widgetDockFloatPanel._$hO._$ri(true);
            widgetDockFloatPanel._$hR._$ri(true);
            widgetDockFloatPanel._$hS._$ri(true);
            widgetDockFloatPanel._$hN._$qJ();
            widgetDockFloatPanel._$hO._$qJ();
            widgetDockFloatPanel._$hR._$qJ();
            widgetDockFloatPanel._$hS._$qJ();
        }
        var _$gq = _$G._$6J - widgetDockFloatPanel._$1H;
        var _$gr = 10;
        var _$gt = 40;
        if (_$dq < 50) {
            _$gr = _$dq / 6;
            _$gt = (4 * _$dq) / 6;
        }
        if (_$cM < (_$G._$6J - widgetDockFloatPanel._$1H)) {
            _$gq = 0;
        }
        _$cM -= 3;
        widgetDockFloatPanel._$hP._$r8(_$cS, _$do, widgetDockFloatPanel._$1H, _$cM - _$gq);
        widgetDockFloatPanel._$hQ._$r8(_$cS + _$dq - widgetDockFloatPanel._$1H, _$do, widgetDockFloatPanel._$1H, _$cM - _$gq);
        widgetDockFloatPanel._$hN._$r8(_$cS + widgetDockFloatPanel._$1H, _$do + _$cM - _$gq - widgetDockFloatPanel._$1H, _$gr, widgetDockFloatPanel._$1H);
        widgetDockFloatPanel._$hR._$r8(_$cS + _$gr + widgetDockFloatPanel._$1H, _$do + _$cM - _$gq - widgetDockFloatPanel._$1H, widgetDockFloatPanel._$1H, _$gq + widgetDockFloatPanel._$1H - 1);
        widgetDockFloatPanel._$hS._$r8(_$cS + _$gr + _$gt - widgetDockFloatPanel._$1H, _$do + _$cM - _$gq - widgetDockFloatPanel._$1H, widgetDockFloatPanel._$1H, _$gq + widgetDockFloatPanel._$1H - 1);
        widgetDockFloatPanel._$hO._$r8(_$cS + _$gr + _$gt, _$do + _$cM - _$gq - widgetDockFloatPanel._$1H, _$dq - _$gr - _$gt - 1, widgetDockFloatPanel._$1H);
        widgetDockFloatPanel._$hM._$r8(_$cS + widgetDockFloatPanel._$1H + _$gr, _$do + _$cM - widgetDockFloatPanel._$1H, _$gt - widgetDockFloatPanel._$1H, widgetDockFloatPanel._$1H);
    }
};
widgetDockFloatPanel.prototype._$T = function () {
    this._$1p(true);
    if (widgetDockFloatPanel._$jy == widgetDockFloatPanel._$0W) {
        this._$lK.cx = widgetDockFloatPanel._$k2;
        this._$lK.cy = widgetDockFloatPanel._$k3;
    }
    if (this._$jf != null) {
        this._$jf = null;
    }
    if (widgetDockFloatPanel._$hT != null) this._$5D(widgetDockFloatPanel._$hT);
    if (widgetDockFloatPanel._$hM != null) this._$5D(widgetDockFloatPanel._$hM);
    if (widgetDockFloatPanel._$hP != null) this._$5D(widgetDockFloatPanel._$hP);
    if (widgetDockFloatPanel._$hQ != null) this._$5D(widgetDockFloatPanel._$hQ);
    if (widgetDockFloatPanel._$hR != null) this._$5D(widgetDockFloatPanel._$hR);
    if (widgetDockFloatPanel._$hS != null) this._$5D(widgetDockFloatPanel._$hS);
    if (widgetDockFloatPanel._$hN != null) this._$5D(widgetDockFloatPanel._$hN);
    if (widgetDockFloatPanel._$hO != null) this._$5D(widgetDockFloatPanel._$hO);
    if (this._$jw == widgetDockFloatPanel._$4W) {
    }
    widgetDockFloatPanel._$lY = null;
    widgetDockFloatPanel._$lR = null;
    widgetDockFloatPanel._$lU = null;
    widgetDockFloatPanel._$lV = null;
    widgetDockFloatPanel._$lW = null;
    widgetDockFloatPanel._$lX = null;
    widgetDockFloatPanel._$lS = null;
    widgetDockFloatPanel._$lT = null;
    widgetDockFloatPanel._$hT = null;
    widgetDockFloatPanel._$hM = null;
    widgetDockFloatPanel._$hP = null;
    widgetDockFloatPanel._$hQ = null;
    widgetDockFloatPanel._$hR = null;
    widgetDockFloatPanel._$hS = null;
    widgetDockFloatPanel._$hN = null;
    widgetDockFloatPanel._$hO = null;
};
widgetDockFloatPanel.prototype._$1p = function (_$86) {
};
widgetDockFloatPanel.prototype.initLayout = function (_$cS, _$do, _$dq, _$cM, _$aO) {
    this.setSize(_$dq, _$cM);
    this.setLocation(_$cS, _$do);
    if (this._$iN) {
        this._$hy._$h8.style.visibility = "visible";
    }
    if (this._$jw == widgetDockFloatPanel._$4B) return;
    if (this._$iF) return;
    var ic = widgetDockFloatPanel._$kw.getPanelNum();
    var _$8G = false;
    var i;
    for (i = 0; i < ic; i++) {
        if (widgetDockFloatPanel._$kw.panelList[i] == this) {
            _$8G = true;
            break;
        }
    }
    if (!_$8G) {
        widgetDockFloatPanel._$kw._$b(this);
    }
    var _$sk = this.getTitle();
    this._$5U(_$aO, _$sk);
    this._$iF = true;
    this._$sL();
    ic = widgetDockFloatPanel._$kw.getPanelNum();
    for (i = 0; i < ic; i++) {
        var df = widgetDockFloatPanel._$kw.panelList[i];
        if ((!df._$iF) && df.getTitle() == _$sk) {
            widgetDockFloatPanel._$kw._$5G(i);
            break;
        }
    }
};
widgetDockFloatPanel.prototype._$ay = function () {
    if (!this._$iF) return false;
    if (!this._$fT()) return false;
    if (!this._$S()) {
        if (this._$ir) {
            this._$6F();
        }
    } else {
        if (this._$k0 == widgetDockFloatPanel._$6W) {
            this._$0h();
        }
        if (this._$kB != null && !this._$kB._$ii) {
            this._$6F();
        }
    }
    return true;
};
widgetDockFloatPanel.prototype._$bh = function () {
    if (!this._$iF) return false;
    if (!this._$fT()) return false;
    var kst = "";
    if (!this._$S()) {
        if (!this._$ir && this._$id) this._$1R();
    } else {
        if (this._$k0 == widgetDockFloatPanel._$6W) {
            this._$0h();
        }
        if (this._$kB != null && this._$kB._$ii) this._$6F();
    }
    return true;
};
widgetDockFloatPanel.prototype._$16 = function (_$aO) {
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
widgetDockFloatPanel.prototype._$1i = function () {
    _$16(_$lf._$j1);
};
widgetDockFloatPanel.prototype._$f5 = function () {
    var rc = new Rect();
    var d = this._$c8();
    this._$lJ.cx = d.width;
    this._$lJ.cy = d.height;
    if (this._$lK.cx < 0 || this._$lK.cy < 0) {
        this._$lK.cx = 200;
        this._$lK.cy = 150;
    }
};
widgetDockFloatPanel.prototype._$Q = function () {
    return false;
};
widgetDockFloatPanel.prototype._$1Q = function () {
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
widgetDockFloatPanel.prototype._$qG = function () {
    this._$kB._$5E(this);
};
widgetDockFloatPanel.prototype._$0C = function () {
    var _$9u;
    if (this._$kj <= widgetDockFloatPanel._$q) _$9u = this._$kj; else _$9u = this._$j0;
    this._$kH._$8(_$9u, this, true);
    this._$kH._$5A(0);
    this._$k0 = widgetDockFloatPanel._$6W;
    var _$ps = null;
    var _$e1 = this._$kB.subPatternList[_$9u].subPattern.getPanelNum();
    if (_$e1 > 0 && this._$jr >= 0 && this._$jr < _$e1) {
        _$ps = this._$kB.subPatternList[_$9u].subPattern.panelList[this._$jr];
    }
    var ih, iw;
    if (_$ps != null) {
        iw = _$ps.rect.right - _$ps.rect.left;
        ih = _$ps.rect.bottom - _$ps.rect.top;
        if (this._$kj <= widgetDockFloatPanel._$q) {
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
widgetDockFloatPanel.prototype._$bC = function () {
    var rc = new AlignSize();
    rc.x = this._$hr;
    rc.y = this._$hs;
    rc.width = this._$ht;
    rc.height = this._$hq;
    return rc;
};
widgetDockFloatPanel.prototype._$cg = function () {
    return this._$ht;
};
widgetDockFloatPanel.prototype._$bU = function () {
    return this._$hq;
};
widgetDockFloatPanel.prototype._$c8 = function () {
    var d = new Size();
    d.width = this._$ht;
    d.height = this._$hq;
    return d;
};
widgetDockFloatPanel.prototype._$25 = function (rc) {
    rc.left = this._$hr;
    rc.top = this._$hs;
    rc.right = this._$ht + this._$hr;
    rc.bottom = this._$hq + this._$hs;
};
widgetDockFloatPanel.prototype.setSize = function (_$gK, _$el) {
    this._$ht = _$gK;
    this._$hq = _$el;
};
widgetDockFloatPanel.prototype.setLocation = function (_$eu, _$gC) {
    this._$hr = _$eu;
    this._$hs = _$gC;
};
widgetDockFloatPanel.prototype._$5U = function (_$cD, _$sf) {
    var _$fU = new Array(2);
    var _$g1 = new Array(2);
    var _$7B = new Array(2);
    var _$7C = new Array(2);
    var _$pI = new Align();
    var _$eg = new Array(2);
    _$eg[0] = 0;
    _$eg[1] = 0;
    var _$q9 = this._$bC();
    var _$g0 = 0;
    var _$8M = false;
    var _$oW = new Array(1);
    var _$9K = this._$kH._$1P(this, _$g0, _$sf, _$7C, _$fU, _$g1, _$7B, _$oW);
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
        if ((_$oW[0]._$aP & widgetDockFloatPanel._$2T) != 0) this._$iv = true; else this._$iv = false;
        if ((_$oW[0]._$aP & widgetDockFloatPanel._$2U) == 0) this._$k0 = widgetDockFloatPanel._$4C;
        this._$kj = ((widgetDockFloatPanel._$6X & _$oW[0]._$aP) >> 7);
        if (this._$kj < 0) this._$kj = 0;
        if (this._$kj > widgetDockFloatPanel._$0) this._$kj = widgetDockFloatPanel._$0;
        this._$kc = (widgetDockFloatPanel._$4X & _$oW[0]._$aP) >> 12;
        if ((_$oW[0]._$aP & widgetDockFloatPanel._$B) != 0) this._$id = true; else this._$id = false;
        this._$jm = (widgetDockFloatPanel._$C & _$oW[0]._$aP) >> 17;
    }
    var _$pR = null;
    if (_$7B[0] == null && _$7B[1] == null) {
        _$8M = true;
        _$9K = 1;
        if (this._$l9 != null && this._$l9._$l0 == this._$l0) {
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
                if (_$cD <= 3) {
                    _$7B[0] = new _$F();
                    _$7B[0]._$8y = true;
                    _$p2 = new Array(1);
                    this._$0A(this._$l9._$kA, _$7B[0], _$cD, _$p2);
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
            this._$39(true);
        }
        this._$lf._$j1 = _$cD;
        if (this._$jw == widgetDockFloatPanel._$4W) {
            _$pR = _$J._$0x(_$q9);
        } else _$pR = _$K._$0y(_$q9);
        if (_$cD >= 0 && _$cD <= 3) {
            _$7C[0] = this._$kH;
            _$7C[1] = _$pR;
            _$fU[0] = _$cD;
            _$g1[0] = this._$jr;
        } else {
            _$7C[0] = _$pR;
            _$7C[1] = this._$kH;
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
            if (this._$jw == widgetDockFloatPanel._$4W) {
                _$7C[_$e5 ^ 0x01] = _$J._$0x(_$q9);
            } else _$7C[_$e5 ^ 0x01] = _$K._$0y(_$q9);
            _$fU[_$e5 ^ 0x01] = 0;
            _$g1[_$e5 ^ 0x01] = 0xffffffff;
            _$7B[_$e5 ^ 0x01] = null;
        } else {
            _$7C[_$e5 ^ 0x01] = this._$kH;
            _$g1[_$e5 ^ 0x01] = 0xffffffff;
            if (_$cD > 3) _$fU[_$e5 ^ 0x01] = 0; else _$fU[_$e5 ^ 0x01] = this._$cD;
        }
    }
    if (_$7C[0] != null) {
        if (_$7C[0]._$ii) {
            if (!this._$1k(_$7C[0], _$fU[0])) {
                var bys = 0xff;
                bys = this._$6c(bys);
                if (bys != 0xff || (!this._$id)) {
                    if (bys != 0xff) _$cD = bys; else _$cD = _$fU[0];
                    if (_$cD != _$fU[0]) {
                        this._$jr = _$g1[0];
                        this._$j0 = _$fU[0];
                        this._$kA = _$7B[0];
                        _$7C[0]._$53(this);
                        if (_$cD >= widgetDockFloatPanel._$1F) _$cD = widgetDockFloatPanel._$0J;
                        _$g1[0] = -1;
                        _$fU[0] = _$cD;
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
                    if (bys != 0xff) _$cD = bys; else _$cD = _$fU[0];
                    if (_$cD != _$fU[0]) {
                        this._$jr = _$g1[0];
                        this._$j0 = _$fU[0];
                        this._$kA = _$7B[0];
                        _$7C[0]._$53(this);
                        _$g1[0] = -1;
                        _$fU[0] = _$cD;
                        _$7B[0] = null;
                    }
                }
            } else {
                if (_$fU[1] < widgetDockFloatPanel._$1F) {
                    if (!this._$1k(this._$kH, _$fU[1])) {
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
        if (this._$k0 == widgetDockFloatPanel._$6W) {
            _$9K = 0;
        }
        if (!this._$fT()) {
            _$9K = 0;
            _$8M = false;
        }
    }
    if (!_$8M && this._$k0 == widgetDockFloatPanel._$6W) this._$k0 = widgetDockFloatPanel._$4Z;
    this._$lf._$j1 = _$fU[0];
    this._$qz(-1);
    if (_$9K > 0) {
        this._$18();
        this._$qJ();
    } else if (_$8M) {
        if (this._$kA == null) {
            this._$k0 = widgetDockFloatPanel._$4Z;
            this._$kB._$6O(this);
            this._$kA._$8y = true;
            this._$kH._$d(this);
            this._$39(false);
            this._$k0 = widgetDockFloatPanel._$6W;
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
                if (_$ol._$mO == this && ((_$ol._$aP & widgetDockFloatPanel._$1B) > 0)) {
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
                    if (_$o9._$mO == this && (_$o9._$aP & widgetDockFloatPanel._$1C) != 0) {
                        _$8G = true;
                        break;
                    }
                }
                if (_$8G) {
                    this._$0C();
                }
                this._$ir = !this._$kB._$ii;
                this._$39(false);
                this._$iP = false;
            }
        } else {
            if (this._$kA == null && this._$kB != null) {
                this._$kB._$6O(this);
                if (this._$kA != null) this._$kA._$8y = true;
            }
            this._$ir = !this._$kB._$ii;
            this._$39(false);
            this._$iP = false;
        }
    }
    this._$Y(this._$l7, this._$j3, this._$k4);
    this._$Y(this._$kB, this._$j0, this._$jr);
};
widgetDockFloatPanel.prototype._$1S = function () {
    var ps = new Align();
    ps.x = this._$lx.left;
    ps.y = this._$lx.top;
    if (this._$jw == widgetDockFloatPanel._$4W) {
    }
    this._$kB._$6p(ps.x, ps.y, widgetDockPattern._$2A(this._$lx), widgetDockPattern._$2z(this._$lx));
};
widgetDockFloatPanel.prototype._$3a = function () {
    if (widgetDockFloatPanel._$iA) return;
    widgetDockFloatPanel._$iA = true;
};
widgetDockFloatPanel.prototype._$0A = function (_$n3, _$ne, _$9b, _$oT) {
    var _$pW = _$n3._$oV;
    var _$pu = null;
    var pb = _$ne;
    pb._$9j = _$9b;
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
    if (_$9b == widgetDockPattern._$3m) _$pu._$9j = widgetDockPattern._$3j; else if (_$9b == widgetDockPattern._$3j) _$pu._$9j = widgetDockPattern._$3m; else if (_$9b == widgetDockPattern._$3k) _$pu._$9j = widgetDockPattern._$3l; else _$pu._$9j = widgetDockPattern._$3k;
    if (_$oT != null) _$oT[0] = _$pu;
};
widgetDockFloatPanel.prototype._$Y = function (mainPattern, _$cD, _$dg) {
    if (mainPattern != null && mainPattern._$ii && _$dg >= 0 && _$dg != 0xffffffff) {
        var _$ps = mainPattern.subPatternList[_$cD].subPattern.panelList[_$dg];
        var _$eG, _$fC;
        var _$fq, _$fr;
        _$fq = -1;
        _$fr = -1;
        var _$9n, _$9v;
        if ((_$cD == widgetDockPattern._$3k) || _$cD == widgetDockPattern._$3l) {
            _$9n = widgetDockPattern._$3m;
            _$9v = widgetDockPattern._$3j;
        } else {
            _$9n = widgetDockPattern._$3k;
            _$9v = widgetDockPattern._$3l;
        }
        if (_$ps._$kR == null) _$eG = -1; else _$eG = mainPattern._$2F(_$9n, _$ps._$kR);
        if (_$ps._$l8 == null) _$fC = -1; else _$fC = mainPattern._$2F(_$9v, _$ps._$l8);
        if (this._$kH._$lk[_$9n] != null) _$fq = mainPattern._$2F(_$9n, this._$kH._$lk[_$9n]);
        if (this._$kH._$lk[_$9v] != null) _$fr = mainPattern._$2F(_$9v, this._$kH._$lk[_$9v]);
        if (_$fq >= 0 && _$eG < _$fq) {
            mainPattern._$j(_$9n);
        }
        if (_$fr >= 0 && _$fC < _$fr) {
            mainPattern._$j(_$9v);
        }
        if (this._$kH._$lk[_$cD] != null) {
        }
    }
};
widgetDockFloatPanel.prototype._$3x = function () {
    if (_$kA != null && _$kA._$o5 != null) {
        if (_$kA._$o5._$3x(this)) {
            return true;
        }
    }
    return false;
};
widgetDockFloatPanel.prototype._$bR = function () {
    if (!_$fN()) return null;
    return _$kB._$bP();
};
widgetDockFloatPanel.prototype._$fT = function () {
    if (this._$hy == null) return true;
    if (this._$hy._$h8.style.visibility == "visible") return true;
    return false;
};
widgetDockFloatPanel.prototype._$sL = function () {
};
widgetDockFloatPanel.prototype._$6i = function (_$cR) {
    if (this._$hy != null) {
        _$m8._$6i(this._$hy._$h8, _$cR);
    }
    if (this.element != null) {
        _$m8._$6i(this.element, _$cR);
    }
    if (this._$hz != null) {
        _$m8._$6i(this._$hz._$h8, _$cR);
    }
};
widgetDockFloatPanel.prototype._$qK = function () {
    if (this._$hy == null) return;
    var left, top, width, height;
    var _$tj = this._$hy._$c6();
    if (this._$jz == widgetDockFloatPanel._$6K) {
        left = this._$hr;
        top = this._$hs + _$tj.height;
        width = this._$ht;
        height = this._$hq - _$tj.height;
        var _$aC = _$tj.height;
        if (_$aC > this._$hq) _$aC = this._$hq;
        this._$hy._$6o(this._$hr, this._$hs, this._$ht, _$aC);
    }
    if (this._$hz != null) {
        this._$hz._$6o(this._$hr, this._$hs + this._$hq - _$G._$6J, this._$ht, _$G._$6J);
        height -= _$G._$6J;
    }
    if (height < 0) height = 0;
    if (width < 0) width = 0;

    if (this.element != null) _$m8._$6e(this.element, left, top, width, height);
    if (this._$hz != null && this._$hz._$bj == this) {
        this._$hz._$5Q(this, this._$hr, this._$hs, this._$ht, this._$hq);
    }
    if (this._$iZ && this._$hA != null && this.element != null && this.element.style.visibility == "visible") {
        _$m8._$6e(this._$hA, this._$hr, this._$hs, this._$ht, this._$hq);
    }
};
widgetDockFloatPanel.prototype._$qJ = function () {
};
widgetDockFloatPanel.prototype._$0c = function (_$88) {
    if (!this._$iZ) return;
    if (this._$hA == null) {
        var _$t5 = "div";
        if (widgetDockController.isHasCanvasContext) _$t5 = "div";
        this._$hA = _$m8._$0z(_$t5, widgetDockController.rootDivId);
        this._$hA.style.border = "0px solid";
        this._$hA.style.zIndex = 7890;
    }
    if (_$88) {
        if (this.element != null && this.element.style.visibility == "visible") {
            this._$hA.style.visibility = "visible";
            _$m8._$6e(this._$hA, this._$hr, this._$hs, this._$ht, this._$hq);
        }
    } else {
        this._$hA.style.visibility = "hidden";
    }
};
