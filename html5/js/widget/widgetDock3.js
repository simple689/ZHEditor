function widgetDockWindow(window, _windowTitle) {
    widgetDockWindow.baseConstructor.call(this, window, _windowTitle);
    this._$kS = null;
    this._$kL = new Array();
    this.cx;
    this.cy;
    this.pattern = new _$52(true);
    this._$lm = new Array(4);
    _$t9 = this;
    this._$3C();
    this._$jO = 4;
};
widgetDockWindow.prototype.addFixedPanel = function (_element, _type) {
    _element.style.position = "absolute";
    this.pattern.addFixedPanel(_element, _type);
};
widgetDockWindow._$hK = null;
widgetDockWindow.prototype.mouseMove = function (e) {
    if (widgetDockWindow._$hK != null) {
        widgetDockWindow._$hK._$ms(e);
    } else {
        this.pattern._$0a(e);
    }
};
widgetDockWindow.prototype.mouseDown = function (e) {
    this.pattern._$09(e);
    var pt = new Align();
    _$m8._$2D(e, pt);
    var _$e0 = this._$kL.length;
    var i;
    for (i = 0; i < _$e0; i++) {
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
widgetDockWindow.prototype.mouseUp = function (e) {
    if (widgetDockWindow._$hK != null) {
        widgetDockWindow._$hK.mouseUp(e);
        widgetDockWindow._$hK = null;
    }
};
widgetDockWindow.prototype._$rv = function (sID) {
    var ic = widgetDockFloatPanel._$kw.getPanelNum();
    var i;
    for (i = 0; i < ic; i++) {
        var _$sR = widgetDockFloatPanel._$kw.panelList[i].element;
        if (_$sR != null && _$sR.id == sID) {
            widgetDockFloatPanel._$kw.panelList[i].hasOutIFrame(true);
            return true;
        }
    }
    return false;
};
widgetDockWindow.prototype._$6s = function (_$88) {
    var ic = widgetDockFloatPanel._$kw.getPanelNum();
    var i;
    for (i = 0; i < ic; i++) {
        if (widgetDockFloatPanel._$kw.panelList[i] != this) widgetDockFloatPanel._$kw.panelList[i]._$0c(_$88);
    }
    this.pattern._$0c(_$88);
};
widgetDockWindow.prototype._$0g = function () {
    var _$nR = widgetDockFloatPanel._$kw;
    var _$e1 = 0;
    if (_$nR == null) return;
    _$e1 = _$nR.getPanelNum();
    var i;
    for (i = _$e1 - 1; i >= 0; i--) {
        if (_$nR.panelList[i] != this) {
            _$nR.panelList[i]._$0g();
        }
    }
    this.pattern._$5F();
    if (this._$kL != null) {
        _$e1 = _$K._$kL.length;
        for (i = 0; i < _$e1; i++) {
            this._$kL[i]._$5F();
        }
        this._$kL.length = 0;
    }
    this.pattern._$3z();
    var vrc = new Rect();
    this.getWindowRect(vrc);
    this.pattern.setSize(vrc.right - vrc.left, vrc.bottom - vrc.top);
    this._$my(null);
};
widgetDockWindow.prototype._$2i = function () {
    return this._$kL;
};
widgetDockWindow.prototype.getWindowRect = function (rc) {
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
widgetDockWindow.prototype._$3C = function () {
    window.onresize = _$7g;
    var rect = new Rect();
    this.getWindowRect(rect);
    this.pattern.setSize(rect.right - rect.left, rect.bottom - rect.top);
    var i;
    for (i = 0; i < 4; i++) {
        this._$lm[i] = new _$5h();
    }
    this.pattern._$jv = 0;
};
widgetDockWindow.prototype._$ml = function (mainPattern) {
    var _$e1 = this._$kL.length;
    var i;
    for (i = 0; i < _$e1; i++) {
        if (this._$kL[i] == mainPattern) {
            this._$kL.splice(i, 1);
            break;
        }
    }
    this._$kL.splice(0, 0, mainPattern);
    mainPattern._$6r(this._$jO);
    this._$jO += 3;
};
widgetDockWindow.prototype._$mm = function (mainPattern) {
    var _$e1 = this._$kL.length;
    var i;
    for (i = 0; i < _$e1; i++) {
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
widgetDockWindow.prototype._$my = function (e) {
    var rc = new AlignSize();
    var d = new Size();
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
    var i;
    for (i = 0; i < 2; i++) {
        if (this.pattern._$hC != null) {
            if (this.pattern._$hC[2 * i + 1] != null) {
                if (i == 0) {
                    rc.y = this.pattern._$jF[2 * i + 1];
                    _$m8._$6e(this.pattern._$hC[2 * i + 1], 0, 0, d.width, this.pattern._$jF[2 * i + 1]);
                } else {
                    _$m8._$6e(this.pattern._$hC[2 * i + 1], 0, d.height - this.pattern._$jF[2 * i + 1], d.width, this.pattern._$jF[2 * i + 1]);
                }
                rc.height -= this.pattern._$jF[2 * i + 1];
            }
        }
    }
    for (i = 0; i < 2; i++) {
        if (this.pattern._$hC != null) {
            if (this.pattern._$hC[2 * i] != null && d.height > 0) {
                rc.width = this.pattern._$jF[2 * i];
                if (i == 0) {
                    rc.x = 0;
                } else {
                    rc.x = d.width - rc.width;
                }
                _$m8._$6e(this.pattern._$hC[2 * i], rc.x, rc.y, rc.width, rc.height);
            }
        }
    }
    this.pattern._$mB(d.width, d.height);
};
widgetDockWindow.prototype._$qF = function (_$a0) {
    this.pattern._$qF(_$a0);
};
widgetDockWindow.prototype._$3Y = function (p) {
    var s = 1;
    if (s == 0) {
        return;
    }
    var _$s5 = p._$qw();
    var _$dH = new Array(4);
    var i;
    for (i = 0; i < 4; i++) _$dH[i] = this.pattern.subPatternList[i].subPattern.getPanelNum();
    this.pattern._$41(p);
    var _$ph = new _$D();
    if (widgetDockFloatPanel._$kw != null) {
        var _$f9 = widgetDockFloatPanel._$kw.getPanelNum();
        var j;
        for (j = 0; j < _$f9; j++) {
            var dfw = widgetDockFloatPanel._$kw.panelList[j];
            if (dfw._$iF) _$ph._$b(widgetDockFloatPanel._$kw.panelList[j]);
        }
    }
    this.pattern._$0b(_$dH, 4, _$ph);
    var _$rS = p._$qw();
    var _$e2 = parseInt(p._$qw());
    var _$e1 = _$e2;
    var _$aj = new _$D();
    for (i = 0; i < _$e1; i++) {
        var _$ox = new _$J(false);
        _$ox._$41(p);
        this._$kL.push(_$ox);
        _$aj._$b(_$ox);
    }
    var ino = _$ph.getPanelNum();
    for (i = 0; i < ino; i++) {
        var _$si = _$ph.panelList[i].getPanelTitle();
        _$e1 = _$aj.getPanelNum();
        var j;
        for (j = 0; j < _$e1; j++) {
            var _$fY = _$aj.panelList[j].subPatternList[0].subPattern.getPanelNum();
            if (_$fY == 1) {
                var mi = _$aj.panelList[j];
                var _$nT = this.pattern._$1N(_$si, mi.subPatternList[0].subPattern.panelList[0]._$kI);
                if (_$nT != null) {
                    _$aj.panelList[j]._$53(_$nT, null, _$si, 0, 0);
                    _$fY = _$aj.panelList[j].subPatternList[0].subPattern.getPanelNum();
                    if (_$fY == 0) {
                        _$oh = this._$kL;
                        _$e1 = _$oh.length;
                        var n;
                        for (n = 0; n < _$e1; n++) {
                            if (_$oh[n] == _$aj.panelList[j]) {
                                _$oh.split(n, 1);
                                break;
                            }
                        }
                        _$aj._$5G(j);
                    }
                    break;
                }
            }
        }
    }
};
widgetDockWindow.prototype.initLayout = function (layout) {
    var _$eF, _$fB;
    layout.addContent("DFIdentifier");
    var rc = new Rect();
    this.getWindowRect(rc);
    layout.addContent(rc.left);
    layout.addContent(rc.top);
    layout.addContent(rc.right);
    layout.addContent(rc.bottom);
    var i;
    for (i = 0; i < 4; i++) {
        if (i == 0 || i == 2) {
            _$eF = 1;
            _$fB = 3;
        } else {
            _$eF = 0;
            _$fB = 2;
        }
        var panelNum = this.pattern.subPatternList[i].subPattern.getPanelNum();
        var panel;
        var index = 0;
        var j;
        for (j = 0; j < panelNum; j++) {
            panel = this.pattern.subPatternList[i].subPattern.panelList[j];
            index = panel.initPanelLayout(this.pattern, layout, index, _$eF, _$fB);
        }
        layout.addContent("SECTIONNONE");
    }
    layout.addContent("MINIFRAMES");
    var _$e1 = this._$kL.length;
    var panel;
    var ino = 0;
    var panelNum;
    for (i = 0; i < _$e1; i++) {
        panelNum = this._$kL[i].subPatternList[0].subPattern.getPanelNum();
        if (panelNum == 1) {
            ino++;
        }
    }
    layout.addContent(ino);
    _$eF = 1;
    _$fB = 3;
    for (i = 0; i < _$e1; i++) {
        panelNum = this._$kL[i].subPatternList[0].subPattern.getPanelNum();
        if (panelNum == 1) {
            var _$og = this._$kL[i];
            _$og.getWindowRect(rc);
            layout.addContent(rc.left);
            layout.addContent(rc.top);
            layout.addContent(rc.right);
            layout.addContent(rc.bottom);
            panel = _$og.subPatternList[0].subPattern.panelList[0];
            panel.initPanelLayout(_$og, layout, 0, _$eF, _$fB);
            layout.addContent("SECTIONNONE");
        }
    }
    layout.getContent();
};
widgetDockWindow.prototype._$1O = function (_$mO, _$qY, _$nO, _$dA, _$dC, _$nP, _$cX) {
    var ino = this._$kL.length;
    var _$og = null;
    var _$e1;
    var i;
    for (i = 0; i < ino; i++) {
        _$og = this._$kL[i];
        _$e1 = _$og.subPatternList[0].subPattern.getPanelNum();
        if (_$e1 == 1) {
            var _$ps = _$og.subPatternList[0].subPattern.panelList[0];
            var _$pO = this.pattern._$1J(_$mO, _$qY, _$ps._$kI, _$cX, null);
            if (_$pO != null) {
                if ((_$cX[0] & widgetDockFloatPanel._$1A) > 0) {
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
