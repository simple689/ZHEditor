function widgetDockPanel() {
    this._$le = null;
    this._$kI = null;
    this._$kR;
    this._$l8;
    this._$iX;
    this.rect = new WidgetDockRect();
    this._$km = widgetDockPanel._$kt;
    this._$k9 = 0;
};
widgetDockPanel._$kt = WidgetDockPatternBase._$5Z;
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
widgetDockPanel.prototype._$ah = function (_$ax, patternPositionType) {
    this._$le = new _$N();
    this._$le._$j1 = patternPositionType;
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
widgetDockPanel.prototype._$2B = function (floatPanel, pRC) {
    if (floatPanel._$kA._$8y) {
        pRC.left = 0;
        pRC.top = 0;
        pRC.right = 0;
        pRC.bottom = 0;
        return;
    }
    floatPanel._$25(pRC);
};
widgetDockPanel.prototype._$6u = function (_$ax, _$qb, patternPositionType, _$cT, _$cU, _$cA) {
    if (this._$iX) {
        var ilt, irb;
        var _$dW;
        var _$gK, _$el;
        var _$qt = new WidgetDockRect();
        var _$9p = 0;
        _$gK = WidgetDockPatternBase._$2A(this.rect);
        _$el = WidgetDockPatternBase._$2z(this.rect);
        if ((patternPositionType == EnumPatternPositionType.Top) || (patternPositionType == EnumPatternPositionType.Bottom)) {
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
            if ((patternPositionType == EnumPatternPositionType.Top) || (patternPositionType == EnumPatternPositionType.Bottom)) {
                _$qt.left = this.rect.left;
                _$qt.right = this.rect.right;
                _$9p = EnumPatternPositionType.Left;
            } else if ((patternPositionType == EnumPatternPositionType.Left) || (patternPositionType == EnumPatternPositionType.Right)) {
                _$qt.top = this.rect.top;
                _$qt.bottom = this.rect.bottom;
                _$9p = EnumPatternPositionType.Top;
            }
            this._$6v(_$ax, _$9p, _$cA);
            if (patternPositionType == EnumPatternPositionType.Top || patternPositionType == EnumPatternPositionType.Bottom) {
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
        var rcPanel = new WidgetDockRect();
        rcPanel.setRect(rect);
        mainPattern._$5r(mainPattern._$hh, rcPanel);
        var _$9z = _$3E(rcPanel, _$pC, _$de);
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
widgetDockPanel.prototype._$5K = function (floatPanel) {
    return floatPanel._$kA._$5K(floatPanel);
};
widgetDockPanel.prototype._$f = function (mainPattern, _$mS, prc) {
    var _$qs = new WidgetDockRect();
    var rcPanel = new WidgetDockRect();
    rcPanel.setRect(prc);
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
                    _$gc = WidgetDockPatternBase._$2z(rcPanel) + widgetDockPanel._$kt;
                    if (pme._$9j == EnumPatternPositionType.Bottom) {
                        _$qs.bottom += _$gc;
                    } else _$qs.top -= _$gc;
                    mainPattern._$6v(pme._$oV, _$qs, WidgetDockPatternBase._$6N);
                } else {
                    _$gc = WidgetDockPatternBase._$2A(rcPanel) + widgetDockPanel._$kt;
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
widgetDockPanel.prototype._$4i = function (mainPattern, patternPositionType, _$dg, _$cY) {
    if (this._$iX) {
        this._$4j(mainPattern, _$cY, patternPositionType);
        if (patternPositionType == EnumPatternPositionType.Right) {
            this.rect.left -= _$cY;
            this.rect.right -= _$cY;
        } else if (patternPositionType == EnumPatternPositionType.Left) {
            this.rect.left += _$cY;
            this.rect.right += _$cY;
        } else if (patternPositionType == EnumPatternPositionType.Bottom) {
            this.rect.top -= _$cY;
            this.rect.bottom -= _$cY;
        } else {
            this.rect.top += _$cY;
            this.rect.bottom += _$cY;
        }
        var _$gz = _$cY;
        if (patternPositionType == EnumPatternPositionType.Right || patternPositionType == EnumPatternPositionType.Bottom) _$gz = -_$cY;
        this._$le._$4q(_$gz);
    }
};
widgetDockPanel.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$cA[0] = 0;
    _$ax._$6v(this._$kI, this.rect, _$9c);
};
widgetDockPanel.prototype._$4j = function (mainPattern, _$cY, patternPositionType) {
    mainPattern._$4j(this._$kI, _$cY, patternPositionType);
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
                if (p._$qY != null) sz = p._$qY; else sz = p.floatPanel._title;
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
            _$7D[0].floatPanel = _$mS._$of;
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
                if (_$7D[i].floatPanel != null) {
                    sTitle = _$7D[i].floatPanel.getTitle();
                    var bvi = _$7D[i].floatPanel._$fT();
                    if (bvi) _$aS |= WidgetDockFloatPanel._$1D;
                    if (_$7D[i].floatPanel._$kB == mainPattern) {
                        _$aS |= WidgetDockFloatPanel._$1A;
                    }
                    if (_$7D[i].floatPanel._$k0 == WidgetDockFloatPanel._$6W) _$aS |= WidgetDockFloatPanel._$1C;
                    if (_$7D[i].floatPanel._$k0 != WidgetDockFloatPanel._$4C) _$aS |= WidgetDockFloatPanel._$2U;
                    if (_$7D[i].floatPanel._$iv) _$aS |= WidgetDockFloatPanel._$2T;
                    _$aS |= ((_$7D[i].floatPanel._$kc & 0xF) << 12);
                    _$aS |= ((_$7D[i].floatPanel._$kj & 0x7) << 7);
                    if (_$7D[i].floatPanel._$id) _$aS |= WidgetDockFloatPanel._$B;
                    _$aS |= ((_$7D[i].floatPanel._$jm & 0x07) << 17);
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
                    if (_$pE.floatPanel == _$7D[i].floatPanel) {
                        _$8Q = true;
                        break;
                    }
                }
            }
            if (_$8Q) _$aS |= WidgetDockFloatPanel._$1B; else _$aS &= ~WidgetDockFloatPanel._$1B;
            layout.addContent(sTitle);
            layout.addContent(_$aS);
            if (mainPattern._$ii) {
                if (_$7D[i].floatPanel != null) {
                    layout.addContent(_$7D[i].floatPanel._$lt.x);
                    layout.addContent(_$7D[i].floatPanel._$lt.y);
                    layout.addContent(_$7D[i].floatPanel._$lK.cx);
                    layout.addContent(_$7D[i].floatPanel._$lK.cy);
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
    this._panelStateElement = null;
    this._$iy = false;
    this._$js = 1;
    this._$ke = null;
    this._$hi = null;

        this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);

    this._$3I();
    this._panelStateElement.style.backgroundColor = 'ButtonFace';
};
WidgetDockPrototype.bind(_$6R, widgetDockPanel);
_$6R.prototype._$nJ = function (g) {
    widgetDockPanel.prototype._$nJ.call(this, g);
    var rc = _$bC();
    _$nK(g, rc);
    _$4S(g);
};
_$6R.prototype._$25 = function (rc) {
    if (this._panelStateElement != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._panelStateElement);
        rc.top = WidgetDockElementController.getElementTop(this._panelStateElement);
        rc.right = rc.left + WidgetDockElementController.getElementWidth(this._panelStateElement);
        rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._panelStateElement);
    }
};
_$6R.prototype.refresh = function () {
    this._$4S();
};
_$6R.prototype._$nK = function (g, rc) {
};
_$6R.prototype._$3I = function () {
    this._panelStateElement._$4A = this;
    this._panelStateElement.onmousedown = _$6R.onMouseDown;
    this._panelStateElement.onmousemove = _$6R.onMouseMove;
    this._panelStateElement._$mF = _$6R._$mh;
};
_$6R.onMouseDown = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4A.mouseDown(e); else e.srcElement._$4A.mouseDown(e);
    return false;
};
_$6R.onMouseMove = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._$4A.mouseMove(e);
    else e.srcElement._$4A.mouseMove(e);
};
_$6R._$mh = function (e) {
    return false;
};
_$6R.prototype._$5K = function (floatPanel) {
    return false;
};
_$6R.prototype._$5q = function () {
    this._$25(this.rect);
};
_$6R.prototype._$w = function (floatPanel, _$pC) {
    var rc = new WidgetDockRect();
    var _$8m = false;
    floatPanel._$25(rc);
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
_$6R.prototype._$1I = function (floatPanel) {
    if (floatPanel._$ir) return false;
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
    var rcPanel = new WidgetDockRect();
    WidgetDockPatternBase._$2P(_$je, rcPanel);

        var _$9z = _$3E(rcPanel, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) _$nz.cy = rect.bottom - rect.top; else _$nz.cx = rect.right - rect.left;
        }
        return _$9z;
};
_$6R.prototype._$6v = function (_$ax, _$9c, _$cA) {
    this._$6q(this.rect);
    this.refresh();
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
                _$ol._$nQ.resize(rc);
                rc.right = rc.left;
            } else {
                if (_$q7.bottom < rc.bottom) break;
                rc.top = rc.bottom - _$ol.size.cy;
                _$ol._$nQ.resize(rc);
                rc.bottom = rc.top;
            }
        }
        if (_$9t) rc.left = _$eR[0]; else rc.top = _$eR[0];
        for (i = _$eq[0]; i < _$e1; i++) {
            _$ol = _$8j._panelList[i];
            if (_$9t) {
                rc.right = rc.left + _$ol.size.cx;
                _$ol._$nQ.resize(rc);
                rc.left = rc.right;
            } else {
                rc.bottom = rc.top + _$ol.size.cy;
                _$ol._$nQ.resize(rc);
                rc.top = rc.bottom;
            }
        }
    }
};
_$6R.prototype._$4j = function (mainPattern, _$cY, patternPositionType) {
    if (this._$iX) {
        var plt = new WidgetDockLocation();
        var rcPanel = new WidgetDockRect();
        this._$25(rcPanel);
        plt.x = rcPanel.left;
        plt.y = rcPanel.top;
        if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
            if (patternPositionType == EnumPatternPositionType.Left) plt.x = rcPanel.left + _$cY; else plt.x = rcPanel.left - _$cY;
        } else {
            plt.x = rcPanel.left;
            if (patternPositionType == EnumPatternPositionType.Top) plt.y = rcPanel.top + _$cY; else plt.y = rcPanel.top - _$cY;
        }
        var _$ql = new WidgetDockRect();
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + WidgetDockPatternBase._$2A(rcPanel);
        _$ql.bottom = plt.y + WidgetDockPatternBase._$2z(rcPanel);
        this._$6q(_$ql);
    }
};
_$6R.prototype._$2B = function (floatPanel, pRC) {
    if (this._panelStateElement == null) {
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
            this._$je.refresh();
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
            this._$je.refresh();
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
_$6R.prototype._$2l = function (_$nR, floatPanel) {
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
                if (floatPanel == _$pO._$of) _$er = _$eq;
            }
            break;
        } else {
            if (_$pO._$od != null) {
                var pf = _$pO._$od;
                if (pf._$of != null && !pf._$8y) {
                    if (pf._$of == floatPanel) _$er = _$eq;
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
_$6R.prototype._$7 = function (mainPattern, floatPanel) {
    if (floatPanel._$c2() != this._$je) {
        this._$je.add(floatPanel);
    }
    var rcPanel = new WidgetDockRect();
    var size = new _$5Y();
    floatPanel._$2w(size, 0, null, false);
    var _$nR = new WidgetDockFloatPanelController();
    var _$er = _$2l(_$nR, floatPanel);
    var _$ol = null;
    floatPanel._$jW = _$1d._$jX;
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
    _$eI = floatPanel._$2o(_$9t);
    if (_$8D[0] || (_$9t && ((this.rect.right - this.rect.left) < (_$gE[0] + _$eI))) || (!_$9t && ((this.rect.bottom - this.rect.top) < (_$gE[0] + _$eI)))) {
        var _$eP = this._$2s(_$nR, 0, _$nR.getPanelNum());
        if ((_$9t && ((this.rect.right - this.rect.left) >= _$eP)) || (!_$9t && ((this.rect.bottom - this.rect.top) >= _$eP))) {
            var _$mI = new WidgetDockFloatPanelController();
            this._$2t(_$nR, 0, _$mI);
            for (i = 0; i < _$e1; i++) {
                _$ol = _$nR._panelList[i];
                if (_$ol._$nQ != floatPanel) {
                    _$ol.size.cx = _$ol._$nQ._$cg();
                    _$ol.size.cy = _$ol._$nQ._$bU();
                    if (_$9t) {
                        _$ol._$du = _$ol._$nQ._$cg();
                    } else _$ol._$du = _$ol._$nQ._$bU();
                } else {
                    var it = floatPanel._$2o(_$9t);
                    if (floatPanel._$k6 > it) floatPanel._$k6 = it;
                    _$ol._$du = floatPanel._$k6;
                }
            }
            var pt = floatPanel._$ls;
            if (floatPanel._$iQ) {
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
                if (_$ol._$nQ != floatPanel) _$dN += _$ol._$du; else _$dN += _$ol._$nQ._$k6;
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
    this._$5C(floatPanel, _$er, _$nR, _$9t);
    return;
};
_$6R.prototype._$5C = function (floatPanel, _$cP, _$8j, _$9t) {
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
_$6R.prototype._$38 = function (_$cH, floatPanel, _$8j, _$cv, _$cE, _$9t, _$d9) {
};
_$6R.prototype._$71 = function (_$nQ, pRC) {
};
_$6R.prototype.setVisible = function (_$8e) {
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementVisible(this._panelStateElement);
    }
    this._$iX = _$8e;
};
_$6R.prototype._$4S = function (g) {
};
_$6R.prototype._$qy = function (wnd, rc) {
    if (this._panelStateElement == null) {
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
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementLeftTop(this._panelStateElement, rc.left, rc.top);
        WidgetDockElementController.setElementSize(this._panelStateElement, rc.right - rc.left, rc.bottom - rc.top);
        this.refresh();
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
_$6R.prototype._$5z = function (floatPanel, _$pC, _$q5) {
    var pp = new WidgetDockLocation();
    pp.x = _$q5.left;
    pp.y = _$q5.top;
    WidgetDockPatternBase._$6a(this._$je, pp);
    var _$ov = floatPanel;
    var _$9t = false;
    if (floatPanel._$j0 == EnumPatternPositionType.Bottom || floatPanel._$j0 == EnumPatternPositionType.Top) _$9t = true;
    var _$8j = new WidgetDockFloatPanelController();
    var _$er = this._$2l(_$8j, floatPanel);
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
    var _$o0 = floatPanel._$kA;
    this._$11(_$o0);
    var _$eT = new Array(1);
    var _$pN = this._$2b(pp, _$eT);
    this._$c(floatPanel, _$pN);
    this._$7(null, floatPanel);
};
_$6R.prototype._$0B = function (floatPanel, _$nq, _$cD) {
    if (_$nq == null) return;
    if (_$cD == EnumPatternPositionType.Left || _$cD == EnumPatternPositionType.Top) {
        this._$c(floatPanel, _$nq);
    } else {
        var _$oU = _$nq._$oV;
        if (_$oU == null || _$oU._$pr == _$nq) _$nq = null; else {
            if (_$oU._$pr._$od == null && _$oU._$pr._$pr == null) _$nq = _$oU._$pr; else if (_$oU._$pr._$od != null) {
                _$nq = _$oU._$pr._$od;
            }
        }
        this._$c(floatPanel, _$nq);
    }
};
_$6R.prototype._$0B = function (floatPanel, _$pC, _$87) {
    var _$eT = new Array(1);
    if (_$87) WidgetDockPatternBase._$6a(_$je, _$pC);
    var _$pN = this._$2b(_$pC, _$eT);
    floatPanel._$jr = _$eT[0];
    this._$c(floatPanel, _$pN);
};
_$6R.prototype._$c = function (floatPanel, _$mR) {
    if (this._$kI._$od == null && this._$kI._$pr == null && this._$kI._$of == null) {
        this._$kI._$of = floatPanel;
        floatPanel._$kA = this._$kI;
        return;
    }
    {
        var _$nI = new _$F();
        _$nI._$of = floatPanel;
        floatPanel._$kA = _$nI;
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
_$6R.prototype._$ah = function (_$ax, patternPositionType) {
    this._$km = 0;
    widgetDockPanel.prototype._$ah.call(this, _$ax, patternPositionType);
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

function _$58() {
    _$58.baseConstructor.call(this);
    this._$jj = 0;
    this._$jC = 0;
    this._$kg = -1;
    this._$jZ = -1;
    this._$ju = 0;
    this._$hU = new WidgetDockFloatPanelController();
};
WidgetDockPrototype.bind(_$58, _$6R);
_$58._$in = false;
_$58._$h6 = null;
_$58._$lu = new WidgetDockLocation();
_$58._$2V = 24;
_$58.prototype.mouseMove = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._$4Q(pt);
};
_$58.prototype.mouseDown = function (e) {
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
_$58.prototype._$5z = function (floatPanel, _$pC, _$87) {
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
_$58.prototype._$6Q = function (floatPanel) {
    this.reset();
    floatPanel._patternMain._$4T(null);
    this._$5M(floatPanel);
    floatPanel._patternMain._$5M(_$le._$j1, floatPanel);
    floatPanel._$k0 = WidgetDockFloatPanel._$4Z;
    floatPanel.setVisible(true);
    this._$jZ = -1;
};
_$58.prototype._$3u = function (pt, floatPanel) {
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
                if ((ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) && (_$pE.floatPanel == floatPanel)) {
                    return true;
                }
            } else {
                if ((ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) && (_$pE.floatPanel == floatPanel)) {
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
        if ((_$pE.floatPanel._$jN == WidgetDockFloatPanel._$48 && !_$7X) || (_$pE.floatPanel._$jN == WidgetDockFloatPanel._$46 && _$7X)) _$9J = false;
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (WidgetDockPatternBase._$l2 != null) {
                if (WidgetDockPatternBase._$l2._$kx == _$pE.floatPanel) {
                    _$8O = true;
                }
            }
            if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
                if (ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE.floatPanel);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE.floatPanel);
                    } else this._$jZ = i;
                    break;
                }
            } else {
                if (ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE.floatPanel);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE.floatPanel);
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
        var _$ok = _$pE.floatPanel._$hE;
        if (_$o3 == null) {
            _$o3 = _$pE.floatPanel._patternMain;
            _$ba = _$o3._$i3;
            if (_$ba == null) _$ba = this.getStyleFont();
        }
        if (this._$hj == null) {
            if (_$pE._titleElement != null) {
                if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
                    var _$ff = 2;
                    WidgetDockElementController.setElementLeftTop(_$pE._titleElement, _$pE._$cv, 2 + _$ff);
                    WidgetDockElementController.setElementSize(_$pE._titleElement, _$pE._$cE - _$pE._$cv, _$58._$2V - 2 - _$ff);
                    _$pE._titleElement.style.font = this.getStyleFont();
                } else {
                    if (WidgetDockController._browserType == WidgetDockController._$3s || WidgetDockController._browserType == WidgetDockController._$I) {
                        _$ff = (_$58._$2V - 2) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._titleElement, 4 - _$ff, _$pE._$cv + 2);
                        WidgetDockElementController.setElementSize(_$pE._titleElement, _$58._$2V - 2, _$pE._$cE - _$pE._$cv);
                        _$pE._titleElement.style.writingMode = 'tb-rl';
                    } else if (WidgetDockController._browserType == WidgetDockController._$4F) {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._titleElement, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController.setElementSize(_$pE._titleElement, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._titleElement.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._titleElement, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController.setElementSize(_$pE._titleElement, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._titleElement.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    _$pE._titleElement.style.font = this.getStyleFont();
                }
                _$pE._titleElement.innerHTML = _$pE._$qV;
            }
            continue;
        }
        var size = new WidgetDockSize();
        WidgetDockElementController.getOffsetSize(size, _$ba, _$pE._$qV, this._$hj);
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
            this._$hj.font = this.getStyleFont();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
        } else {
            this._$hj.save();
            this._$hj._$s1 = 'ButtonShadow';
            this._$hj.translate(this._panelStateElement.width / 2, -this._panelStateElement.width / 2);
            this._$hj.rotate(3.141592653589 / 2);
            this._$hj.translate(this._panelStateElement.width / 2, -this._panelStateElement.width / 2);
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
            this._$hj.font = this.getStyleFont();
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
        var rcPanel = new WidgetDockRect();
        rcPanel.setRect(this.rect);
        var _$9z = this._$3E(rcPanel, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) _$nz.cy = this.rect.bottom - this.rect.top; else _$nz.cx = this.rect.right - this.rect.left;
        }
        return _$9z;
    }
};
_$58.prototype._$5b = function (floatPanel) {
    var rc = new WidgetDockRect();
    this._$25(rc);
    var iw = floatPanel._$cg();
    var ih = floatPanel._$bU();
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
    _$og._$kx = floatPanel;
    if (this._$kg < 0) {
        this._$kg = 1;
    }
    _$og._$kx = floatPanel;
    _$og.Add(floatPanel);
    floatPanel.setElementVisible(true);
    floatPanel._$bf(true);
    _$og._$6k(_$ft);
    _$og.resize(rc.left, rc.top, (rc.right - rc.left), (rc.bottom - rc.top));
    _$og.setVisible(true);
    floatPanel._windowMain._patternMain._$4T(_$og);
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
_$58.prototype._$4J = function (floatPanel, _$sc) {
    var _$e1 = _$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (floatPanel == _$hU._panelList[i].floatPanel) {
            var _$pE = _$hU._panelList[i];
            _$pE._$qT = new String(_$sc);
            _$pE._$qV = new String(_$sc);
            this._$5A();
            break;
        }
    }
};
_$58.prototype._$8 = function (floatPanel) {
    var _$ol = new _$O(0, 0, floatPanel._panelStateController.getTitle());
    _$ol.floatPanel = floatPanel;
    this._$hU.addFloatPanel(_$ol);

        _$ol._titleElement = WidgetDockElementController.createElementWithParent("div", this._panelStateElement);
        _$ol._titleElement._$4A = this;

    this._$5A();
    this.refresh();
};
_$58.prototype._$5M = function (floatPanel) {
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (floatPanel == this._$hU._panelList[i].floatPanel) {
            if (this._$hU._panelList[i]._titleElement != null) {
                this._panelStateElement.removeChild(this._$hU._panelList[i]._titleElement);
                this._$hU._panelList[i]._titleElement = null;
            }
            this._$hU.deletePanel(i);
            break;
        }
    }
    this._$5A();
    this.refresh();
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
    this.refresh();
};
_$58.prototype._$c8 = function () {
    var d = new WidgetDockSize();
    if (this._panelStateElement != null) {
        d.width = this._panelStateElement.width;
        d.height = this._panelStateElement.height;
    }
    return d;
};
_$58.prototype.getStyleFont = function () {
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
    var size = new WidgetDockSize();
    var i;
    var _$dI = new Array();
    var _$o3 = null;
    for (i = 0; i < _$gi; i++) {
        tab = this._$hU._panelList[i];
        tab._$cv = _$fv;
        if (_$o3 == null) {
            _$o3 = tab.floatPanel._patternMain;
            ft = _$o3._$i3;
            if (ft == null) ft = this.getStyleFont();
        }
        WidgetDockElementController.getOffsetSize(size, ft, tab._$qT, this._$hj);
        tab._$cE = _$fv + size.width + 2 * _$G._$2Z;
        if (tab.floatPanel._$hE != null) tab._$cE += _$O._$jL;
        _$dI[i] = tab._$cE - _$fv;
        _$fv = tab._$cE;
    }
};
