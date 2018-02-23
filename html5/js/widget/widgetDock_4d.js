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
};
_$1l._$0U = 18;
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

function _$4d() {
    _$4d.baseConstructor.call(this);
    this._$kY = null;
};
WidgetDockPrototype.bind(_$4d, _$1l);
_$4d.prototype._$ru = function (mainPattern) {
    this._$kY = mainPattern;
};
_$4d.prototype.setVisible = function () {
};
_$4d.prototype.setSize = function (_$am) {
    WidgetDockElementController.setElementSize(this._$h8, _$am.width, _$am.height);
};
_$4d.prototype.setElementZIndex = function (_$cR) {
    if (this._$h8 != null) {
        WidgetDockElementController.setElementZIndex(this._$h8, _$cR);
    }
};
_$4d.prototype._$mj = function (pts) {
    var _$po;
    _$po = this._$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    var _$9P = WidgetDockElementController.getElementLeft(this._$h8);
    var _$9Q = WidgetDockElementController.getElementTop(this._$h8);
    var pt = new WidgetDockLocation();
    pt.x = pts.x - _$9P;
    pt.y = pts.y - _$9Q;
    if (WidgetDockPatternBase._$5f(this._$lw, pt)) {
        var _$7E = new WidgetDockFloatPanelController();
        _$po._$2Q(_$7E);
        var _$e1 = _$7E.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            var dfw = _$7E._panelList[i];
            if (dfw._$cn()) {
                dfw.setVisible(false);
            }
        }
        return -1;
    }
    var _$oe = _$po._$1L();
    this._$bi = _$oe._$of;
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0W;
    return this._$bi._$4R(pts);
};
_$4d.prototype._$c6 = function () {
    _$1l._$j5.width = 130;
    _$1l._$j5.height = 18;
    return _$1l._$j5;
};
_$4d.prototype._$qJ = function () {
    var rc = new WidgetDockRect();
    this._$2P(rc);
    rc.right = rc.right - rc.left;
    rc.left = 0;
    rc.bottom = rc.bottom - rc.top;
    rc.top = 0;
    var vh = rc.bottom - rc.top;
    vh -= 2;
    var _$pN = this._$bi;
    this._$bi = null;
    this._$nL(true, rc.left, rc.top, rc.right - rc.left, vh, true);
    this._$aE(rc.left, rc.top, rc.right - rc.left, vh, WidgetDockFloatPanel._$3Q);
    this._$bi = _$pN;
};
_$4d.prototype._$4L = function () {
    var _$po = _$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    this._$0Y(_$po);
};

function _$58() {
    _$58.baseConstructor.call(this);
    this._$jj = 0;
    this._$jC = 0;
    this._$kg = -1;
    this._$jZ = -1;
    this._$ju = 0;
    this._$hU = new WidgetDockFloatPanelController();
};WidgetDockPrototype.bind(_$58, _$6R);
_$58._$in = false;
_$58._$h6 = null;
_$58._$lu = new WidgetDockLocation();
_$58._$2V = 24;
_$58.prototype.mouseMove = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._$4Q(pt);
};
_$58.prototype._$mw = function (e) {
    if (e.button != 1) return;
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._$08(pt, false);
};
_$58.prototype._$5e = function (e) {
};
_$58.prototype._$qy = function (wnd, rc) {
    _$6R.prototype._$qy.call(this, null, rc);
};
_$58.prototype._$5z = function (_$mO, _$pC, _$87) {
    this._$5A();
};
_$58.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$6R.prototype._$6v.call(this, _$ax, _$9c, _$cA);
};
_$58.prototype.reset = function () {
    if (this._$kg >= 0) {
    }
    this._$kg = -1;
    this._$jZ = -1;
};
_$58.prototype._$3w = function (pt) {
    WidgetDockPatternBase._$6a(this._$je, pt);
    var rc = new WidgetDockRect();
    var _$es;
    var _$e1 = this._$hU.getPanelNum();
    if (_$e1 >= 1) {
        _$es = _$e1 - 1;
        if (this._$le._$j1 == EnumPatternPositionType.Left || _$le._$j1 == EnumPatternPositionType.Right) {
            rc.left = 0;
            rc.right = this.rect.right - this.rect.left;
            rc.top = this._$hU._panelList[0]._$cv;
            rc.bottom = this._$hU._panelList[_$es]._$cE;
        } else {
            rc.top = 0;
            rc.bottom = this.rect.bottom - this.rect.top;
            rc.left = this._$hU._panelList[0]._$cv;
            rc.right = this._$hU._panelList[_$es]._$cE;
        }
    }
    if (WidgetDockPatternBase._$5f(rc, pt)) return true;
    return false;
};
_$58.prototype._$4P = function () {
};
_$58.prototype._$4U = function () {
    var pt = new WidgetDockLocation();
    pt.x = _$58._$lu.x;
    pt.y = _$58._$lu.y;
    var _$pX = new WidgetDockLocation();
    _$pX.x = pt.x;
    _$pX.y = pt.y;
    WidgetDockPatternBase._$6a(this._$je, pt);
    var rc = new WidgetDockRect();
    WidgetDockPatternBase._$25(this._$je, rc);
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    if (_$58._$in) {
        pt.x = -100;
        _$pX.x = -100;
    }
    if (WidgetDockPatternBase._$5f(rc, pt)) {
        this._$08(pt, true);
    } else {
        if (WidgetDockPatternBase._$l2 == null || WidgetDockPatternBase._$l2._$la != this) {
            this.reset();
        }
    }
    WidgetDockController._$8l._$34(null, _$4f._$49, _$pX);
};
_$58.prototype._$6Q = function (_$mO) {
    this.reset();
    _$mO._patternMain._$4T(null);
    this._$5M(_$mO);
    _$mO._patternMain._$5M(_$le._$j1, _$mO);
    _$mO._$k0 = WidgetDockFloatPanel._$4Z;
    _$mO.setVisible(true);
    this._$jZ = -1;
};
_$58.prototype._$3u = function (pt, _$mO) {
    var rc = new WidgetDockRect();
    this._$25(rc);
    var ptc = new WidgetDockLocation();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$th = this._$le._$j1;
    if (_$th == EnumPatternPositionType.Bottom) {
        ptc.y += 1;
    } else if (_$th == EnumPatternPositionType.Top) {
        ptc.y -= 1;
    } else if (_$th == EnumPatternPositionType.Left) {
        ptc.x -= 1;
    } else ptc.x += 1;
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU._panelList[i];
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
                if ((ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) && (_$pE._$mO == _$mO)) {
                    return true;
                }
            } else {
                if ((ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) && (_$pE._$mO == _$mO)) {
                    return true;
                }
            }
        }
    }
    return false;
};
_$58.prototype._$08 = function (pt, _$7X) {
    var rc = new WidgetDockRect();
    this._$25(rc);
    var ptc = new WidgetDockLocation();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$e1 = this._$hU.getPanelNum();
    var bin = false;
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU._panelList[i];
        var _$8O = false;
        var _$9J = true;
        if ((_$pE._$mO._$jN == WidgetDockFloatPanel._$48 && !_$7X) || (_$pE._$mO._$jN == WidgetDockFloatPanel._$46 && _$7X)) _$9J = false;
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (WidgetDockPatternBase._$l2 != null) {
                if (WidgetDockPatternBase._$l2._$kx == _$pE._$mO) {
                    _$8O = true;
                }
            }
            if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
                if (ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE._$mO);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE._$mO);
                    } else this._$jZ = i;
                    break;
                }
            } else {
                if (ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE._$mO);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE._$mO);
                    } else this._$jZ = i;
                    break;
                }
            }
        }
    }
};
_$58.prototype._$4M = function (e) {
};
_$58.prototype._$4Q = function (pt) {
    this._$08(pt, true);
};
_$58.prototype._$4S = function () {
    var _$cD = this._$le._$j1;
    var _$e1 = this._$hU.getPanelNum();
    var _$pE;
    var rc = new WidgetDockRect();
    var _$qa = new WidgetDockRect();
    this._$25(_$qa);
    _$qa.right = _$qa.right - _$qa.left;
    _$qa.left = 0;
    _$qa.bottom = _$qa.bottom - _$qa.top;
    _$qa.top = 0;
    if (this._$hj != null) {
        this._$hj.fillStyle = 'rgb( 250, 250, 250 )';
        this._$hj.fillRect(_$qa.left, _$qa.top, _$qa.right - _$qa.left, _$qa.bottom - _$qa.top);
    }
    var _$o3 = null;
    var _$ba = null;
    var _$eo, _$ep;
    var i;
    for (i = 0; i < _$e1; i++) {
        _$pE = this._$hU._panelList[i];
        var _$ok = _$pE._$mO._$hE;
        if (_$o3 == null) {
            _$o3 = _$pE._$mO._patternMain;
            _$ba = _$o3._$i3;
            if (_$ba == null) _$ba = this._$bS();
        }
        if (this._$hj == null) {
            if (_$pE._$h9 != null) {
                if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
                    var _$ff = 2;
                    WidgetDockElementController.setElementLeftTop(_$pE._$h9, _$pE._$cv, 2 + _$ff);
                    WidgetDockElementController.setElementSize(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V - 2 - _$ff);
                    _$pE._$h9.style.font = this._$bS();
                } else {
                    if (WidgetDockController._browserType == WidgetDockController._$3s || WidgetDockController._browserType == WidgetDockController._$I) {
                        _$ff = (_$58._$2V - 2) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._$h9, 4 - _$ff, _$pE._$cv + 2);
                        WidgetDockElementController.setElementSize(_$pE._$h9, _$58._$2V - 2, _$pE._$cE - _$pE._$cv);
                        _$pE._$h9.style.writingMode = 'tb-rl';
                    } else if (WidgetDockController._browserType == WidgetDockController._$4F) {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController.setElementSize(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController.setElementSize(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    _$pE._$h9.style.font = this._$bS();
                }
                _$pE._$h9.innerHTML = _$pE._$qV;
            }
            continue;
        }
        var dt = new WidgetDockSize();
        var _$dE = new Array(1);
        WidgetDockElementController._$2L(dt, _$ba, _$pE._$qV, this._$hj);
        if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            this._$hj._$s1 = 'ButtonShadow';
            if (_$cD == EnumPatternPositionType.Top) {
                rc.top = 0;
                rc.bottom = _$qa.bottom - 3;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.bottom, rc.right, rc.top, this._$hj);
            } else {
                rc.top = 2;
                rc.bottom = _$qa.bottom;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                rc.top = 3;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$eo = rc.right - _$O._$jL;
            _$ep = rc.top + (rc.bottom - rc.top - _$O._$jL) / 2;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
        } else {
            this._$hj.save();
            this._$hj._$s1 = 'ButtonShadow';
            this._$hj.translate(this._$h8.width / 2, -this._$h8.width / 2);
            this._$hj.rotate(3.141592653589 / 2);
            this._$hj.translate(this._$h8.width / 2, -this._$h8.width / 2);
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            if (_$cD == EnumPatternPositionType.Left) {
                rc.top = 3;
                rc.bottom = _$qa.right;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2;
            } else {
                rc.top = 0;
                rc.bottom = _$qa.right - 2;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2 + 1;
                rc.bottom -= 1;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$ep = rc.right - _$O._$jL;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
            this._$hj.restore();
        }
        if (_$ok != null) {
        }
    }
};
_$58.prototype._$03 = function (mainPattern, _$mX, _$pC, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    _$oQ[0] = null;
    {
        var _$qu = new WidgetDockRect();
        _$qu.setRect(this.rect);
        var _$9z = this._$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) _$nz.cy = this.rect.bottom - this.rect.top; else _$nz.cx = this.rect.right - this.rect.left;
        }
        return _$9z;
    }
};
_$58.prototype._$5b = function (_$mO) {
    var rc = new WidgetDockRect();
    this._$25(rc);
    var iw = _$mO._$cg();
    var ih = _$mO._$bU();
    iw += 6;
    ih += 6;
    var _$qi = new WidgetDockRect();
    var _$ft = this._$ju;
    if (_$ft == EnumPatternPositionType.Left) {
        rc.left = rc.right;
        rc.right = rc.left + iw;
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == EnumPatternPositionType.Right) {
        rc.right = rc.left;
        rc.left = rc.right - (iw);
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == EnumPatternPositionType.Top) {
        rc.left += this._$jj;
        rc.right -= this._$jC;
        rc.top = rc.bottom;
        rc.bottom = rc.top + ih;
    } else {
        rc.bottom = rc.top;
        rc.top = rc.top - (ih);
        rc.left += this._$jj;
        rc.right -= this._$jC;
    }
    var _$og = new _$59();
    _$og._$la = this;
    _$og._$kx = _$mO;
    if (this._$kg < 0) {
        this._$kg = 1;
    }
    _$og._$kx = _$mO;
    _$og.Add(_$mO);
    _$mO.setElementVisible(true);
    _$mO._$bf(true);
    _$og._$6k(_$ft);
    _$og._$6o(rc.left, rc.top, (rc.right - rc.left), (rc.bottom - rc.top));
    _$og.setVisible(true);
    _$mO._windowMain._patternMain._$4T(_$og);
};
_$58.prototype._$0s = function () {
    var iNo = this._$hU.getPanelNum();
    if (iNo > 0) {
        var _$oU = new Array();
        var i;
        for (i = 0; i < iNo; i++) {
            _$oU[i] = this._$hU._panelList[i];
        }
        this._$hU.reset();
        return _$oU;
    }
    return null;
};
_$58.prototype._$4J = function (_$mO, _$sc) {
    var _$e1 = _$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == _$hU._panelList[i]._$mO) {
            var _$pE = _$hU._panelList[i];
            _$pE._$qT = new String(_$sc);
            _$pE._$qV = new String(_$sc);
            this._$5A();
            break;
        }
    }
};
_$58.prototype._$8 = function (_$mO) {
    var _$ol = new _$O(0, 0, _$mO._$hy._$cb());
    _$ol._$mO = _$mO;
    this._$hU.addFloatPanel(_$ol);
    if (!WidgetDockController._isHasCanvasContext) {
        _$ol._$h9 = WidgetDockElementController._$0t("div", this._$h8);
        _$ol._$h9._$4A = this;
        _$ol._$h9.onmousedown = _$6R._$14;
        _$ol._$h9.onmousemove = _$6R._$13;
    }
    this._$5A();
    this._$qJ();
};
_$58.prototype._$5M = function (_$mO) {
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == this._$hU._panelList[i]._$mO) {
            if (this._$hU._panelList[i]._$h9 != null) {
                this._$h8.removeChild(this._$hU._panelList[i]._$h9);
                this._$hU._panelList[i]._$h9 = null;
            }
            this._$hU.deletePanel(i);
            break;
        }
    }
    this._$5A();
    this._$qJ();
    return this._$hU.getPanelNum();
};
_$58.prototype._$5A = function () {
    var _$qp = new WidgetDockRect();
    var _$ga = 0;
    var _$gb = 0;
    var _$qk = new WidgetDockRect();
    this._$25(_$qk);
    if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
        this._$5B(_$ga);
    } else {
        this._$5B(_$ga);
    }
    this._$jj = _$ga;
    this._$jC = _$gb;
    this._$qJ();
};
_$58.prototype._$c8 = function () {
    var d = new WidgetDockSize();
    if (this._$h8 != null) {
        d.width = this._$h8.width;
        d.height = this._$h8.height;
    }
    return d;
};
_$58.prototype._$bS = function () {
    return "8pt sans-serif";
};
_$58.prototype._$5B = function (_$d4) {
    if (this._$hU == null) return;
    var d = this._$c8();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft = null;
    var _$gi = this._$hU.getPanelNum();
    var _$fv = _$d4;
    var tab = null;
    var dt = new WidgetDockSize();
    var i;
    var _$dI = new Array();
    var _$o3 = null;
    for (i = 0; i < _$gi; i++) {
        tab = this._$hU._panelList[i];
        tab._$cv = _$fv;
        if (_$o3 == null) {
            _$o3 = tab._$mO._patternMain;
            ft = _$o3._$i3;
            if (ft == null) ft = this._$bS();
        }
        WidgetDockElementController._$2L(dt, ft, tab._$qT, this._$hj);
        tab._$cE = _$fv + dt.width + 2 * _$G._$2Z;
        if (tab._$mO._$hE != null) tab._$cE += _$O._$jL;
        _$dI[i] = tab._$cE - _$fv;
        _$fv = tab._$cE;
    }
};

function _$59() {
    this._$kx = null;
    this._$la = null;
    this._$lc = null;
    this._$lc = new _$6A(WidgetDockController._elementRootId);
    this._$lc._$l5 = this;
    this._$hu = new Date();
    this._$hk = this._$hu.getTime();
    this._$iJ = false;
};_$59.prototype.Add = function (_$mO) {
    var it = 0;
    var _$et = _$mO._windowMain._$jO;
    WidgetDockElementController.setElementZIndex(this._$lc._$h8, _$et);
    _$mO.setElementZIndex(_$et + 1);
};
_$59.prototype.setVisible = function (_$8e) {
};
_$59.prototype._$6k = function (_$di) {
    this._$jY = _$di;
};
_$59.prototype._$6o = function (_$cS, _$do, width, height) {
    var _$d5 = this._$jY;
    WidgetDockElementController.setElementLeftTop(this._$lc._$h8, _$cS, _$do);
    var canvas = this._$lc._$h8;
    if (WidgetDockController._isHasCanvasContext) {
        canvas.width = width;
        canvas.height = height;
    } else {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }
    if (this._$kx != null) {
        var _$t6 = 2;
        var _$tl, _$to, _$tp, _$tk;
        if (_$d5 == EnumPatternPositionType.Left) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = width - 2 * _$6A._$p - _$t6;
            _$tk = height - 2 * _$6A._$p;
        } else if (_$d5 == EnumPatternPositionType.Right) {
            _$tl = _$cS + _$6A._$p + _$t6;
            _$to = _$do + _$6A._$p;
            _$tp = width - 2 * _$6A._$p - _$t6;
            _$tk = height - 2 * _$6A._$p;
        } else if (_$d5 == EnumPatternPositionType.Top) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = width - 2 * _$6A._$p;
            _$tk = height - 2 * _$6A._$p - _$t6;
        } else {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p + _$t6;
            _$tp = width - 2 * _$6A._$p;
            _$tk = height - 2 * _$6A._$p - _$t6;
        }
        this._$kx._$6p(_$tl, _$to, _$tp, _$tk);
    }
};
_$59.prototype._$au = function () {
    if (this._$la != null) this._$la.reset();
    this._$kx.setElementVisible(false);
    this._$kx._$bf(false);
    this._$kx._patternMain.Add(this._$kx);
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$lc._$h8);
};
_$59.prototype._$0a = function (e) {
    if (this._$iJ) return;
    var rc = new WidgetDockRect();
    this._$lc._$25(rc);
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    if (!WidgetDockPatternBase._$5f(rc, pt)) {
        if (!this._$la._$3u(pt, this._$kx)) {
            var vd = new Date();
            var _$sW = (vd.getTime() - this._$hk) / 1000;
            if (_$sW > 2) {
                this._$kx._windowMain._patternMain._$4T(null);
            }
        }
    }
    _$59.prototype._$09 = function (e) {
        var rc = new WidgetDockRect();
        this._$lc._$25(rc);
        var pt = new WidgetDockLocation();
        WidgetDockElementController._$2D(e, pt);
        if (WidgetDockPatternBase._$5f(rc, pt)) {
            this._$iJ = true;
        } else {
            this._$iJ = false;
            this._$kx._windowMain._patternMain._$4T(null);
        }
    }
};
