
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
};
_$G._$6J = 28;
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
