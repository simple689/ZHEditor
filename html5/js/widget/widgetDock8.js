
function widgetDockPanel() {
    this._$le = null;
    this._$kI = null;
    this._$kR;
    this._$l8;
    this._$iX;
    this.rect = new Rect();
    this._$km = widgetDockPanel._$kt;
    this._$k9 = 0;
};widgetDockPanel._$kt = widgetDockPattern._$5Z;
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
    var _$9z = widgetDockPattern._$m(_$p9, _$pC);
    _$de[0] = 0;
    if (_$9z != 0xff) {
        if (this._$le._$j1 == widgetDockPattern._$3m) {
            if (_$9z == widgetDockPattern._$3h) _$de[0] = 1; else if (_$9z == widgetDockPattern._$3b) _$de[0] = 2;
        } else if (this._$le._$j1 == widgetDockPattern._$3j) {
            if (_$9z == widgetDockPattern._$3h) _$de[0] = 2; else if (_$9z == widgetDockPattern._$3b) _$de[0] = 1;
        } else if (this._$le._$j1 == widgetDockPattern._$3k) {
            if (_$9z == widgetDockPattern._$3d) _$de[0] = 1;
            if (_$9z == widgetDockPattern._$3f) _$de[0] = 2;
        } else if (this._$le._$j1 == widgetDockPattern._$3l) {
            if (_$9z == widgetDockPattern._$3d) _$de[0] = 2;
            if (_$9z == widgetDockPattern._$3f) _$de[0] = 1;
        }
        if (_$de[0] == 0) {
            return 0xff;
        }
        _$9z = (2 * this._$le._$j1 + 1);
    }
    return _$9z;
};
widgetDockPanel.prototype._$ah = function (_$ax, _$99) {
    this._$le = new _$N();
    this._$le._$j1 = _$99;
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
widgetDockPanel.prototype._$6u = function (_$ax, _$qb, _$99, _$cT, _$cU, _$cA) {
    if (this._$iX) {
        var ilt, irb;
        var _$dW;
        var _$gK, _$el;
        var _$qt = new Rect();
        var _$9p = 0;
        _$gK = widgetDockPattern._$2A(this.rect);
        _$el = widgetDockPattern._$2z(this.rect);
        if ((_$99 == widgetDockPattern._$3m) || (_$99 == widgetDockPattern._$3j)) {
            _$dW = (this.rect.top + this.rect.bottom) / 2;
            ilt = _$ax._$2I(widgetDockPattern._$3k, this._$kR);
            irb = _$ax._$2I(widgetDockPattern._$3l, this._$l8);
            this.rect.left = _$qb.left + ilt;
            this.rect.right = _$qb.right - irb;
        } else {
            _$dW = (this.rect.left + this.rect.right) / 2;
            ilt = _$ax._$2I(widgetDockPattern._$3m, this._$kR);
            irb = _$ax._$2I(widgetDockPattern._$3j, this._$l8);
            this.rect.top = _$qb.top + ilt;
            this.rect.bottom = _$qb.bottom - irb;
        }
        if ((_$dW >= _$cT) && (_$dW <= _$cU)) {
            this._$le._$25(_$qt);
            if ((_$99 == widgetDockPattern._$3m) || (_$99 == widgetDockPattern._$3j)) {
                _$qt.left = this.rect.left;
                _$qt.right = this.rect.right;
                _$9p = widgetDockPattern._$3k;
            } else if ((_$99 == widgetDockPattern._$3k) || (_$99 == widgetDockPattern._$3l)) {
                _$qt.top = this.rect.top;
                _$qt.bottom = this.rect.bottom;
                _$9p = widgetDockPattern._$3m;
            }
            this._$6v(_$ax, _$9p, _$cA);
            if (_$99 == widgetDockPattern._$3m || _$99 == widgetDockPattern._$3j) {
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
    var rc1 = new Rect();
    var rc2 = new Rect();
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
            if (this._$kI._$9y == widgetDockPattern._$3m || this._$kI._$9y == widgetDockPattern._$3j) {
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
        var _$qu = new Rect();
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
    var _$qs = new Rect();
    var _$qu = new Rect();
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
                if (_$oV._$9y == widgetDockPattern._$3m || _$oV._$9y == widgetDockPattern._$3j) {
                    _$gc = widgetDockPattern._$2z(_$qu) + widgetDockPanel._$kt;
                    if (pme._$9j == widgetDockPattern._$3j) {
                        _$qs.bottom += _$gc;
                    } else _$qs.top -= _$gc;
                    mainPattern._$6v(pme._$oV, _$qs, widgetDockPattern._$6N);
                } else {
                    _$gc = widgetDockPattern._$2A(_$qu) + widgetDockPanel._$kt;
                    if (pme._$9j == widgetDockPattern._$3l) _$qs.right += _$gc; else _$qs.left -= _$gc;
                    mainPattern._$6v(pme._$oV, _$qs, widgetDockPattern._$3T);
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
    if (pme._$9j == widgetDockPattern._$3m) _$9j = widgetDockPattern._$3j; else if (pme._$9j == widgetDockPattern._$3j) _$9j = widgetDockPattern._$3m; else if (pme._$9j == widgetDockPattern._$3k) _$9j = widgetDockPattern._$3l; else _$9j = widgetDockPattern._$3k;
    if (_$oV._$od != null && _$oV._$od != pme) _$oV._$od._$9j = _$9j; else if (_$oV._$pr != null && _$oV._$pr != pme) _$oV._$pr._$9j = _$9j;
    var _$pu;
    while (_$oV != null) {
        _$pu = null;
        if (_$oV._$od != null && _$oV._$od != pme) _$pu = _$oV._$od; else if (_$oV._$pr != null && _$oV._$pr != pme) _$pu = _$oV._$pr;
        if (_$pu != null && !_$pu._$8y) {
            var _$9o;
            if (_$oV._$9y == widgetDockPattern._$3m || _$oV._$9y == widgetDockPattern._$3j) {
                _$9o = widgetDockPattern._$3m;
            } else {
                _$9o = widgetDockPattern._$3k;
            }
            var rc = new Rect();
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
widgetDockPanel.prototype._$4i = function (mainPattern, _$99, _$dg, _$cY) {
    if (this._$iX) {
        this._$4j(mainPattern, _$cY, _$99);
        if (_$99 == widgetDockPattern._$3l) {
            this.rect.left -= _$cY;
            this.rect.right -= _$cY;
        } else if (_$99 == widgetDockPattern._$3k) {
            this.rect.left += _$cY;
            this.rect.right += _$cY;
        } else if (_$99 == widgetDockPattern._$3j) {
            this.rect.top -= _$cY;
            this.rect.bottom -= _$cY;
        } else {
            this.rect.top += _$cY;
            this.rect.bottom += _$cY;
        }
        var _$gz = _$cY;
        if (_$99 == widgetDockPattern._$3l || _$99 == widgetDockPattern._$3j) _$gz = -_$cY;
        this._$le._$4q(_$gz);
    }
};
widgetDockPanel.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$cA[0] = 0;
    _$ax._$6v(this._$kI, this.rect, _$9c);
};
widgetDockPanel.prototype._$4j = function (mainPattern, _$cY, _$99) {
    mainPattern._$4j(this._$kI, _$cY, _$99);
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
                if (p._$qY != null) sz = p._$qY; else sz = p._$mO.panelTitle;
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
                    if (bvi) _$aS |= widgetDockFloatPanel._$1D;
                    if (_$7D[i]._$mO._$kB == mainPattern) {
                        _$aS |= widgetDockFloatPanel._$1A;
                    }
                    if (_$7D[i]._$mO._$k0 == widgetDockFloatPanel._$6W) _$aS |= widgetDockFloatPanel._$1C;
                    if (_$7D[i]._$mO._$k0 != widgetDockFloatPanel._$4C) _$aS |= widgetDockFloatPanel._$2U;
                    if (_$7D[i]._$mO._$iv) _$aS |= widgetDockFloatPanel._$2T;
                    _$aS |= ((_$7D[i]._$mO._$kc & 0xF) << 12);
                    _$aS |= ((_$7D[i]._$mO._$kj & 0x7) << 7);
                    if (_$7D[i]._$mO._$id) _$aS |= widgetDockFloatPanel._$B;
                    _$aS |= ((_$7D[i]._$mO._$jm & 0x07) << 17);
                } else {
                    sTitle = _$mS._$sl;
                    _$aS |= (widgetDockFloatPanel._$1D | widgetDockFloatPanel._$1A);
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
            if (_$8Q) _$aS |= widgetDockFloatPanel._$1B; else _$aS &= ~widgetDockFloatPanel._$1B;
            layout.addContent(sTitle);
            layout.addContent(_$aS);
            if (mainPattern._$ii) {
                if (_$7D[i]._$mO != null) {
                    layout.addContent(_$7D[i]._$mO._$lt.x);
                    layout.addContent(_$7D[i]._$mO._$lt.y);
                    layout.addContent(_$7D[i]._$mO._$lK.cx);
                    layout.addContent(_$7D[i]._$mO._$lK.cy);
                } else {
                    if (_$7D[i]._$pA == null) _$7D[i]._$pA = new Align(100, 200);
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
