
function _$1l() {
    this._$bi = null;
    this._$i9 = true;
    this._$iO = false;
    this._$lG = "";
    this._$kv = 0;
    this._$hB = null;
    this._$hf = null;
    this._$lw = new Rect();
    this._$lA = new Rect();
    this._$hZ = new Align();
    this._$hB = "12px sans-serif";
    this._$h9 = null;
    this._$hV = null;
    this._$hb = null;
    this._$hj = null;
    if (widgetDockController.isHasCanvasContext) {
        this._$h8 = _$m8._$0z("canvas", widgetDockController.rootDivId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = _$m8._$0z("div", widgetDockController.rootDivId);
        this._$h8.style.background = 'ButtonFace';
        this._$h9 = _$m8._$0t("div", this._$h8);
        this._$h9.style.font = this._$hB;
        this._$h9._$4t = this;
        this._$h9.onmousedown = _$1l._$14;
        this._$h9.onmousemove = _$1l._$13;
    }
    _$m8._$6n(this._$h8, 15, 40);
    this._$h8._$4t = this;
    this._$h8.onmousedown = _$1l._$4h;
    this._$h8.onmousemove = _$1l._$4g;
    this._$h8._$mF = _$1l._$mh;
    this._$h8.onmouseout = _$1l._$mv;
};_$1l._$0U = 18;
_$1l._$hd = null;
_$1l._$4Y = 4;
_$1l._$j5 = new Size();
_$1l.prototype._$6o = function (_$cS, _$do, _$dq, _$cM) {
    _$m8._$6j(this._$h8, _$cS, _$do);
    _$m8._$6n(this._$h8, _$dq, _$cM);
    this._$qJ();
};
_$1l.prototype.setVisible = function (_$8e) {
    _$m8._$39(this._$h8, _$8e);
    if (!widgetDockController.isHasCanvasContext) {
        _$m8._$39(this._$h9, _$8e);
        _$m8._$39(this._$hV, _$8e);
        _$m8._$39(this._$hb, _$8e);
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
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4t._$mw(e); else e.srcElement._$4t._$mw(e);
    return false;
};
_$1l._$4g = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4t.mouseMove(e);
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
    if (!widgetDockController._$fQ(e.button)) return; else {
        this._$iO = true;
        if (widgetDockWindow._$hK != null && widgetDockWindow._$hK != this) {
            if (widgetDockWindow._$hK instanceof _$1l) {
                widgetDockWindow._$hK._$iO = false;
            }
        }
        widgetDockWindow._$hK = this;
        var pt = new Align();
        _$m8._$2D(e, pt);
        if (this._$mj(pt) >= 0) {
            widgetDockController._$6s(true);
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
    rc.left = _$m8._$2k(this._$h8);
    rc.top = _$m8._$2M(this._$h8);
    rc.right = rc.left + _$m8._$2O(this._$h8);
    rc.bottom = rc.top + _$m8._$2h(this._$h8);
};
_$1l.prototype.mouseUp = function (e) {
    if (!this._$fT()) return;
    if (!this._$iO) return;
    if (!widgetDockController._$fQ(e.button)) {
        this._$iO = false;
        this._$T();
        return;
    }
    var _$pH = new Align();
    _$m8._$2D(e, _$pH);
    this._$iO = false;
    widgetDockController._$6s(false);
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
    _$hf._$rz(new Size(150, _$G._$6J + _$bi._$jA));
};
_$1l.prototype._$0Y = function (_$mS) {
    var _$7E = new _$D();
    _$mS._$2Q(_$7E);
    var ic = _$7E.getPanelNum();
    var _$p3 = new Array(ic);
    var _$gJ = 0;
    var i;
    for (i = 0; i < ic; i++) {
        if (_$7E.panelList[i]._$fT()) {
            _$p3[_$gJ] = _$7E.panelList[i];
            _$gJ++;
        }
    }
    for (i = 0; i < ic; i++) {
        if (_$7E.panelList[i] != _$bi) _$7E.panelList[i]._$5d(); else _$7E.panelList[i]._$4L();
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
        var _$9P = _$m8._$2k(this._$h8);
        var _$9Q = _$m8._$2M(this._$h8);
        var _$a5 = new Align();
        _$m8._$2D(e, _$a5);
        _$a5.x = _$a5.x - _$9P;
        _$a5.y = _$a5.y - _$9Q;
        if (this instanceof _$4d) {
            if (widgetDockPattern._$5f(this._$lw, _$a5)) {
                this._$h8.style.cursor = "default";
            } else {
                this._$h8.style.cursor = "move";
            }
            return;
        }
        if (!this._$bi._$fR()) {
            return;
        }
        if (this._$bi._$k0 == widgetDockFloatPanel._$6W) return;
        if ((this._$bi._$k0 != widgetDockFloatPanel._$4C && widgetDockPattern._$5f(this._$lA, _$a5)) || (widgetDockPattern._$5f(this._$lw, _$a5))) {
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
    var _$9P = _$m8._$2k(this._$h8);
    var _$9Q = _$m8._$2M(this._$h8);
    var _$a5 = new Align();
    _$a5.x = pt.x - _$9P;
    _$a5.y = pt.y - _$9Q;
    if (this._$bi._$k0 != widgetDockFloatPanel._$4C && widgetDockPattern._$5f(this._$lA, _$a5)) {
        this._$bi._$0h();
        return -1;
    }
    if ((this._$bi != null) && (this._$bi._$k0 == widgetDockFloatPanel._$6W)) {
        if (!widgetDockPattern._$5f(this._$lw, _$a5)) return -1;
    }
    if (widgetDockPattern._$5f(this._$lw, _$a5)) {
        this._$bi._$9X();
        return -1;
    }
    if (!this._$bi._$fR()) {
        return -2;
    }
    widgetDockFloatPanel._$jy = widgetDockFloatPanel._$0V;
    return this._$bi._$4R(pt);
};
_$1l.prototype._$ms = function (e) {
    if (!this._$iO) return;
    var pt = new Align();
    _$m8._$2D(e, pt);
    this._$bi._$4i(pt);
};
_$1l.prototype._$rn = function (_$by) {
    this._$bi = _$by;
};
_$1l.prototype._$r6 = function (_$7J) {
    this._$i9 = _$7J;
    this._$qJ();
};
_$1l.prototype._$rC = function (_panelTitle) {
    if (_panelTitle != null) this._$lG = _panelTitle; else this._$lG = "";
    this._$rE(_panelTitle);
    this._$qJ();
};
_$1l.prototype._$rE = function (_$qW) {
};
_$1l.prototype._$cb = function () {
    return this._$lG;
};
_$1l.prototype._$c6 = function () {
    if (this._$bi == null) return null;
    if (this._$bi._$jm == widgetDockFloatPanel._$0) {
        if (this._$bi._$kH._$jv == widgetDockController._$0R) {
            _$1l._$j5.width = 130;
            _$1l._$j5.height = this._$bi._$jA;
        } else {
            var _$9y = this._$bi._$bL();
            if (this._$bi._$kB != null && this._$bi._$kB._$ii) {
                if (_$9y == widgetDockPattern._$3k || _$9y == widgetDockPattern._$3l) {
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
        if (this._$bi._$jm == widgetDockFloatPanel._$3Q || this._$bi._$jm == widgetDockFloatPanel._$5j) {
            _$1l._$j5.width = this._$bi._$jA;
            _$1l._$j5.height = 130;
        } else {
            _$1l._$j5.width = 130;
            _$1l._$j5.height = this._$bi._$jA;
        }
    }
    return _$1l._$j5;
};
_$1l.prototype._$nL = function (_$82, ix, iy, _$dq, _$cM, g, _$7Y) {
    if (this._$hj == null) {
        return;
    }
    if (this._$i9) {
        this._$hj.fillStyle = 'ActiveCaption';
        if (widgetDockController.browserType == browserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, _$dq, _$cM);
    } else {
        this._$hj.fillStyle = 'InactiveCaption';
        if (widgetDockController.browserType == browserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, _$dq, _$cM);
    }
    var _$9k = "";
};
_$1l.prototype._$qJ = function () {
    if (!widgetDockController.isHasCanvasContext && this._$hV == null) {
        this._$hV = _$m8._$0t("div", this._$h8);
        this._$hW = new Image();
        this._$hW.src = widgetDockController.dir + "img/pinned.gif";
        this._$hW.style.width = "100%";
        this._$hW.style.height = "100%";
        this._$hV.appendChild(this._$hW);
        this._$hV.childNodes[0]._$4t = this;
        this._$hV._$4t = this;
        this._$hb = _$m8._$0t("div", this._$h8);
        this._$hc = new Image();
        this._$hc.src = widgetDockController.dir + "img/close.jpg";
        this._$hc.style.width = "100%";
        this._$hc.style.height = "100%";
        this._$hb.appendChild(this._$hc);
        this._$hb.childNodes[0]._$4t = this;
        this._$hb._$4t = this;
    }
    var si = new Rect();
    this._$2P(si);
    var _$sO = 0;
    var _$sT = 0;
    var iw = si.right - si.left;
    var ih = si.bottom - si.top;
    var _$em;
    var _$fu;
    var _$8u = true;
    var _$96 = this._$6z();
    if (this._$bi._$kH._$jv == widgetDockController._$0T) {
        if ((this._$bi._$jm >= widgetDockFloatPanel._$0) && _$96) _$8u = true; else _$8u = false;
    }
    var _$ea = this._$bi._$j0;
    if (this._$bi._$jm < widgetDockFloatPanel._$0) {
        _$ea = this._$bi._$jm;
        if (_$ea == widgetDockFloatPanel._$3Q || _$ea == widgetDockFloatPanel._$5j) {
            _$ea = widgetDockFloatPanel._$6K;
        } else _$ea = widgetDockFloatPanel._$3Q;
    }
    var _$8K = false;
    if (this._$bi._$jm >= widgetDockFloatPanel._$0 && (this._$bi._$kH._$jv == widgetDockController._$0R || _$96)) {
        _$8K = true;
    } else if (_$ea == widgetDockFloatPanel._$3Q || _$ea == widgetDockFloatPanel._$5j) _$8K = true;
    if (_$8K) {
        _$em = ih;
        _$fu = ih - 3;
        if (this._$bi._$k0 == widgetDockFloatPanel._$4C) _$fu = 0;
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
        if (_$bi._$k0 == widgetDockFloatPanel._$4C) _$fu = 0;
        if (!_$bi._$cn()) _$em = 0;
        _$fK = (_$em + _$fu);
        if (_$em != 0 && _$fu != 0) _$fK += _$1l._$4Y; else if (_$em == 0) _$fK += 2;
        si.y += _$fK;
        si.height -= _$fK;
        var dt = new Size();
        var _$rX = _$bK(false);
        var _$dE = new Array(1);
        _$m8._$2L(dt, this._$bS(), _$rX, this._$hj);
        _$rX = widgetDockPattern._$6y(this._$bS(), _$rX, si.height, dt.width, _$G._$2Z, 0, this._$hj);
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
    if (_$9f == widgetDockPattern._$3k || _$9f == widgetDockPattern._$3l) {
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
    var rc = new AlignSize();
    var _$eh = 2;
    var _$ec = 3;
    if (_$9y == widgetDockPattern._$3k || _$9y == widgetDockPattern._$3l) {
        _$ff = (si.height - _$eh - _$ec * 2) / 2;
        rc.x = si.x + 2;
        rc.y = si.y + _$ff;
        rc.width = si.width - 4;
        rc.height = _$ec;
        _$aD(g, widgetDockPattern._$3k, rc);
        rc.y += _$eh + _$ec;
        _$aD(g, widgetDockPattern._$3k, rc);
    } else {
        _$ff = (si.width - _$eh - _$ec * 2) / 2;
        rc.x = si.x + _$ff;
        rc.y = si.y + 2;
        rc.width = _$ec;
        rc.height = si.height - 4;
        _$aD(g, widgetDockPattern._$3m, rc);
        rc.x += _$eh + _$ec;
        _$aD(g, widgetDockPattern._$3m, rc);
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
            if (_$a6[i] instanceof widgetDockFloatPanel) {
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
    if (widgetDockPattern._$l2 != null && widgetDockPattern._$l2._$kx == this._$bi) {
        _$8n = false;
    }
    if (_$8n && _$8a) _$8H = true;
    this._$nL(_$8H, 0, 0, iw, ih, true);
    var _$em = 0;
    if (this._$lG != null) {
        if (this._$i9) {
        } else {
        }
        var _$fK = 0;
        if (this._$bi != null) {
            if (this._$bi._$cn()) {
                _$em = ih;
                _$fK += ih;
            }
            if (this._$bi._$S() && this._$bi._$k0 != widgetDockFloatPanel._$4C) {
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
        var dt = new Size();
        var _$dE = new Array(1);
        _$m8._$2L(dt, this._$bS(), _$rX, this._$hj);
        var _$tq = _$m8._$2O(this._$h8);
        _$rX = widgetDockPattern._$6y(this._$bS(), _$rX, _$tq - _$fK, dt.width, _$G._$2Z, 0, this._$hj);
        var _$gP;
        _$gP = ih / 2;
        if (this._$hj != null) {
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'buttonText';
            if (widgetDockController.browserType == browserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$rX, 2, _$gP + 4);
        } else {
            _$m8._$6j(this._$h9, 2, 2);
            _$m8._$6n(this._$h9, dt.width + 2, ih - 2);
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
        _$rX = this._$lG + " " + _$r2;
    } else {
        _$rX = this._$lG;
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
        _$m8._$6j(this._$hV, _$pc.left, _$pc.top);
        _$m8._$6n(this._$hV, _$pc.right - _$pc.left, _$pc.bottom - _$pc.top);
        _$m8._$6j(this._$hV.childNodes[0], 0, 0);
        if (_$d6 == widgetDockFloatPanel._$6W) {
            this._$hW.src = widgetDockController.dir + "img/unpinned.gif";
        } else {
            this._$hW.src = widgetDockController.dir + "img/pinned.gif";
        }
        return;
    }
    if (!_$7J) {
        this._$hj._$s1 = 'buttonText';
    } else {
        this._$hj._$s1 = 'buttonText';
    }
    if (_$d6 == widgetDockFloatPanel._$6W) {
        _$gQ -= 1;
        _$gO = _$gL - (_$pc.right - _$pc.left) / 2;
        if (_$pc != null) {
            if (widgetDockController._$lh != null) {
            } else {
                var iha;
                iha = iw / 4;
                _$m8._$1q(_$gO, _$gQ, _$gO + _$gv, _$gQ, this._$hj);
                _$m8._$1q(_$gO + _$gv, _$gQ - iw / 2, _$gO + _$gv, _$gQ + iw / 2, this._$hj);
                _$m8._$1q(_$gO + _$gv, _$gQ + iha, _$gO + _$gD, _$gQ + iha, this._$hj);
                _$m8._$1q(_$gO + _$gv, _$gQ + iha - 1, _$gO + _$gD, _$gQ + iha - 1, this._$hj);
                _$m8._$1q(_$gO + _$gD, _$gQ + iha, _$gO + _$gD, _$gQ - iha, this._$hj);
                _$m8._$1q(_$gO + _$gD, _$gQ - iha, _$gO + _$gv, _$gQ - iha, this._$hj);
            }
        }
    } else if (_$d6 == widgetDockFloatPanel._$4Z) {
        _$gO = _$gL - iw / 2;
        _$gV = _$gQ + (_$pc.bottom - _$pc.top) / 2;
        if ((_$7J && widgetDockController._$l3 != null) || (!_$7J && widgetDockController._$l4 != null)) {
        } else {
            var iha;
            iha = iw / 4;
            _$m8._$1q(_$gL, _$gV, _$gL, _$gV - _$gv, this._$hj);
            _$m8._$1q(_$gL - iw / 2, _$gV - _$gv, _$gL + iw / 2, _$gV - _$gv, this._$hj);
            _$m8._$1q(_$gL + iha, _$gV - _$gv, _$gL + iha, _$gV - _$gD, this._$hj);
            _$m8._$1q(_$gL + iha - 1, _$gV - _$gv, _$gL + iha - 1, _$gV - _$gD, this._$hj);
            _$m8._$1q(_$gL + iha, _$gV - _$gD, _$gL - iha, _$gV - _$gD, this._$hj);
            _$m8._$1q(_$gL - iha, _$gV - _$gD, _$gL - iha, _$gV - _$gv, this._$hj);
        }
    }
};
_$1l.prototype._$aE = function (_$cS, _$do, _$dq, _$cM, _$gf) {
    var _$el;
    var _$8v = false;
    if (this._$bi == null) _$8v = true; else if (this._$bi._$jm >= widgetDockFloatPanel._$0) {
        if ((this._$bi._$kH._$jv == widgetDockController._$0R) || (this._$bi._$kB != null && !_$bi._$kB._$ii)) _$8v = true;
    }
    if (_$8v || (_$gf == widgetDockPattern._$3k) || (_$gf == widgetDockPattern._$3l)) {
        _$el = _$cM - 3;
        _$cS = _$cS + _$dq - 2 - _$el;
        _$do = _$do + 2;
    } else {
        _$cS += 2;
        _$el = _$dq - 3;
        _$do += 2;
    }
    this._$lw.left = _$cS;
    this._$lw.top = _$do;
    this._$lw.right = this._$lw.left + _$el - 1;
    this._$lw.bottom = this._$lw.top + _$el - 1;
    if (this._$hj == null) {
        if (this._$hb != null) {
            _$m8._$6j(this._$hb, _$cS, _$do);
            _$m8._$6n(this._$hb, this._$lw.right - this._$lw.left, this._$lw.bottom - this._$lw.top);
            _$m8._$6j(this._$hb.childNodes[0], 0, 0);
        }
        return;
    }
    this._$hj._$s1 = 'buttonText';
    _$m8._$1q(_$cS, _$do, _$cS + _$el - 2, _$do, this._$hj);
    _$m8._$1q(_$cS, _$do, _$cS, _$do + _$el - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    _$m8._$1q(_$cS + 1, _$do + _$el - 2, _$cS + _$el - 2, _$do + _$el - 2, this._$hj);
    _$m8._$1q(_$cS + _$el - 2, _$do + 1, _$cS + _$el - 2, _$do + _$el - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    _$m8._$1q(_$cS, _$do + _$el - 1, _$cS + _$el - 1, _$do + _$el - 1, this._$hj);
    _$m8._$1q(_$cS + _$el - 1, _$do, _$cS + _$el - 1, _$do + _$el - 1, this._$hj);
    this._$hj.fillStyle = 'ButtonFace';
    if (widgetDockController.browserType == browserType.Opera) {
        this._$hj.fillStyle = 'white';
    }
    this._$hj.fillRect(_$cS + 1, _$do + 1, _$el - 3, _$el - 3);
    this._$hj._$s1 = 'buttonShadow';
    _$m8._$1q(_$cS + 3, _$do + 3, _$cS + _$el - 4, _$do + _$el - 4, this._$hj);
    _$m8._$1q(_$cS + 3, _$do + _$el - 4, _$cS + _$el - 4, _$do + 3, this._$hj);
};
