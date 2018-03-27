function WidgetDockPanel() {
    this._$le = null;
    this._$kI = null;
    this._$kR;
    this._$l8;
    this._$iX;
    this.rect = new WidgetDockRect();
    this._$km = WidgetDockPanel._$kt;
    this._$k9 = 0;
};
WidgetDockPanel._$kt = WidgetDockPatternBase._$5Z;
WidgetDockPanel._$6g = function (iWH) {
    if (iWH < 0) {
        iWH = 0;
    }
    WidgetDockPanel._$kt = iWH;
};
WidgetDockPanel.prototype._$cf = function () {
    return this._$km;
};
WidgetDockPanel.prototype._$3E = function (_$p9, pt, _$de) {
    var _$9z = WidgetDockPatternBase._$m(_$p9, pt);
    _$de[0] = 0;
    if (_$9z != 0xff) {
        if (this._$le._patternPositionType == EnumPatternPositionType.Top) {
            if (_$9z == WidgetDockPatternBase._$3h) {
                _$de[0] = 1;
            } else if (_$9z == WidgetDockPatternBase._$3b) {
                _$de[0] = 2;
            }
        } else if (this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
            if (_$9z == WidgetDockPatternBase._$3h) {
                _$de[0] = 2;
            } else if (_$9z == WidgetDockPatternBase._$3b) {
                _$de[0] = 1;
            }
        } else if (this._$le._patternPositionType == EnumPatternPositionType.Left) {
            if (_$9z == WidgetDockPatternBase._$3d) {
                _$de[0] = 1;
            }
            if (_$9z == WidgetDockPatternBase._$3f) {
                _$de[0] = 2;
            }
        } else if (this._$le._patternPositionType == EnumPatternPositionType.Right) {
            if (_$9z == WidgetDockPatternBase._$3d) {
                _$de[0] = 2;
            }
            if (_$9z == WidgetDockPatternBase._$3f) {
                _$de[0] = 1;
            }
        }
        if (_$de[0] == 0) {
            return 0xff;
        }
        _$9z = (2 * this._$le._patternPositionType + 1);
    }
    return _$9z;
};
WidgetDockPanel.prototype._$ah = function (patternBase, patternPositionType) {
    this._$le = new _$N();
    this._$le._patternPositionType = patternPositionType;
    this._$le._$rh(patternBase);
    this._$le._$rG(this._$km);
};
WidgetDockPanel.prototype._$qI = function () {
    if (this._$le != null) {
        if (this._$le._mainPattern != null) {
            this._$le._mainPattern._$5E(this._$le);
        }
        this._$le._$ap();
        this._$le = null;
    }
    this._$iX = false;
};
WidgetDockPanel.prototype._$05 = function () {
    return this._$kI._$05();
};
WidgetDockPanel.prototype._$qy = function (wnd, rc) {
    wnd._$6q(rc);
};
WidgetDockPanel.prototype._$2B = function (floatPanel, pRC) {
    if (floatPanel._$kA._$8y) {
        pRC.left = 0;
        pRC.top = 0;
        pRC.right = 0;
        pRC.bottom = 0;
        return;
    }
    floatPanel.getRect(pRC);
};
WidgetDockPanel.prototype._$6u = function (patternBase, rcWindow, patternPositionType, top, bottom, _$cA) {
    if (this._$iX) {
        var ilt, irb;
        var _$dW;
        var _$qt = new WidgetDockRect();
        var _$9p = 0;
        if ((patternPositionType == EnumPatternPositionType.Top) || (patternPositionType == EnumPatternPositionType.Bottom)) {
            _$dW = (this.rect.top + this.rect.bottom) / 2;
            ilt = patternBase._$2I(EnumPatternPositionType.Left, this._$kR);
            irb = patternBase._$2I(EnumPatternPositionType.Right, this._$l8);
            this.rect.left = rcWindow.left + ilt;
            this.rect.right = rcWindow.right - irb;
        } else {
            _$dW = (this.rect.left + this.rect.right) / 2;
            ilt = patternBase._$2I(EnumPatternPositionType.Top, this._$kR);
            irb = patternBase._$2I(EnumPatternPositionType.Bottom, this._$l8);
            this.rect.top = rcWindow.top + ilt;
            this.rect.bottom = rcWindow.bottom - irb;
        }
        if ((_$dW >= top) && (_$dW <= bottom)) {
            this._$le.getRect(_$qt);
            if ((patternPositionType == EnumPatternPositionType.Top) || (patternPositionType == EnumPatternPositionType.Bottom)) {
                _$qt.left = this.rect.left;
                _$qt.right = this.rect.right;
                _$9p = EnumPatternPositionType.Left;
            } else if ((patternPositionType == EnumPatternPositionType.Left) || (patternPositionType == EnumPatternPositionType.Right)) {
                _$qt.top = this.rect.top;
                _$qt.bottom = this.rect.bottom;
                _$9p = EnumPatternPositionType.Top;
            }
            this._$6v(patternBase, _$9p, _$cA);
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
WidgetDockPanel.prototype._$5q = function () {
    var pd1 = new Array(1);
    var pd2 = new Array(1);
    var rc1 = new WidgetDockRect();
    var rc2 = new WidgetDockRect();
    this._$kI._$1K(pd1, pd2, rc1, rc2);
    if (pd1[0] == null && pd2[0] == null) {
        this._$kI._floatPanel.getRect(this.rect);
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
WidgetDockPanel.prototype._$03 = function (mainPattern, _$mX, pt, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    if (_$mX._$it) {
        return this._$kI._$03(_$mX, pt, _$nz, _$dk, _$oQ);
    } else {
        var rcPanel = new WidgetDockRect();
        rcPanel.setRect(this.rect);
        mainPattern._$5r(mainPattern._$hh, rcPanel);
        var _$9z = this._$3E(rcPanel, pt, _$de);
        _$mX._$kn = this.rect.right - this.rect.left;
        _$mX._$kq = this.rect.bottom - this.rect.top;
        return _$9z;
    }
};
WidgetDockPanel.prototype._$53 = function (_$mS) {
    var _$oV = _$mS._$oV;
    if (_$oV == null) {
        return true;
    }
    if (_$mS == _$oV._$od) {
        _$oV._$od = null;
        if (_$oV._$pr == null) {
            return this._$53(_$oV);
        } else if (_$oV._$oV != null) {
            _$oV._$pr._$oV = _$oV._$oV;
            _$oV._$pr._$9j = _$oV._$9j;
            if (_$oV._$oV._$od == _$oV) {
                _$oV._$oV._$od = _$oV._$pr;
            } else {
                _$oV._$oV._$pr = _$oV._$pr;
            }
        }
    } else {
        _$oV._$pr = null;
        if (_$oV._$od == null) {
            return this._$53(_$oV);
        } else if (_$oV._$oV != null) {
            _$oV._$od._$oV = _$oV._$oV;
            _$oV._$od._$9j = _$oV._$9j;
            if (_$oV._$oV._$od == _$oV) {
                _$oV._$oV._$od = _$oV._$od;
            } else {
                _$oV._$oV._$pr = _$oV._$od;
            }
        }
    }
    return false;
};
WidgetDockPanel.prototype._$5K = function (floatPanel) {
    return floatPanel._$kA._$5K(floatPanel);
};
WidgetDockPanel.prototype._$f = function (mainPattern, _$mS, prc) {
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
            if (_$oV._$od != null && _$oV._$od != pme) {
                _$pu = _$oV._$od;
            } else if (_$oV._$pr != null && _$oV._$pr != pme) {
                _$pu = _$oV._$pr;
            }
            if (_$pu != null && !_$pu._$8y) {
                if (_$oV._$oy != null) {
                    _$oV._$oy._$ap();
                    _$oV._$oy = null;
                }
                var _$gc;
                _$pu._$22(_$qs);
                if (_$oV._$9y == EnumPatternPositionType.Top || _$oV._$9y == EnumPatternPositionType.Bottom) {
                    _$gc = WidgetDockPatternBase.getHeight(rcPanel) + WidgetDockPanel._$kt;
                    if (pme._$9j == EnumPatternPositionType.Bottom) {
                        _$qs.bottom += _$gc;
                    } else {
                        _$qs.top -= _$gc;
                    }
                    mainPattern._$6v(pme._$oV, _$qs, WidgetDockPatternBase._$6N);
                } else {
                    _$gc = WidgetDockPatternBase.getWidth(rcPanel) + WidgetDockPanel._$kt;
                    if (pme._$9j == EnumPatternPositionType.Right) {
                        _$qs.right += _$gc;
                    } else {
                        _$qs.left -= _$gc;
                    }
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
WidgetDockPanel.prototype._$6 = function (mainPattern, _$mS) {
    var pme = _$mS;
    var _$oV = pme._$oV;
    if (_$oV == null) return;
    var _$9j;
    if (pme._$9j == EnumPatternPositionType.Top) {
        _$9j = EnumPatternPositionType.Bottom;
    } else if (pme._$9j == EnumPatternPositionType.Bottom) {
        _$9j = EnumPatternPositionType.Top;
    } else if (pme._$9j == EnumPatternPositionType.Left) {
        _$9j = EnumPatternPositionType.Right;
    } else {
        _$9j = EnumPatternPositionType.Left;
    }
    if (_$oV._$od != null && _$oV._$od != pme) {
        _$oV._$od._$9j = _$9j;
    } else if (_$oV._$pr != null && _$oV._$pr != pme) {
        _$oV._$pr._$9j = _$9j;
    }
    var _$pu;
    while (_$oV != null) {
        _$pu = null;
        if (_$oV._$od != null && _$oV._$od != pme) {
            _$pu = _$oV._$od;
        } else if (_$oV._$pr != null && _$oV._$pr != pme) {
            _$pu = _$oV._$pr;
        }
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
            _$oV._$oy._$rG(WidgetDockPanel._$kt);
            _$oV._$oy._$rh(mainPattern);
            _$oV._$oy._$iI = true;
            _$oV._$oy._patternPositionType = _$9o;
            _$oV._$oy._$kE = _$oV;
            mainPattern._$6v(_$pu._$oV, rc, 0);
            mainPattern._$6v(_$pu._$oV, rc, 1);
            break;
        }
        pme = _$oV;
        _$oV = _$oV._$oV;
        if (_$oV == null) {
            return;
        }
    }
};
WidgetDockPanel.prototype._$7 = function (mainPattern, floatPanel) {
    var pme = floatPanel._$kA;
    this._$6(mainPattern, pme);
};
WidgetDockPanel.prototype._$4i = function (mainPattern, patternPositionType, _$dg, _$cY) {
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
        if (patternPositionType == EnumPatternPositionType.Right || patternPositionType == EnumPatternPositionType.Bottom) {
            _$gz = -_$cY;
        }
        this._$le._$4q(_$gz);
    }
};
WidgetDockPanel.prototype._$6v = function (patternBase, _$9c, _$cA) {
    _$cA[0] = 0;
    patternBase._$6v(this._$kI, this.rect, _$9c);
};
WidgetDockPanel.prototype._$4j = function (mainPattern, _$cY, patternPositionType) {
    mainPattern._$4j(this._$kI, _$cY, patternPositionType);
};
WidgetDockPanel.prototype._$0e = function (_$mS) {
    if (_$mS == null) return false;
    if (_$mS._floatPanel != null) return true;
    if (_$mS._$od == null && _$mS._$pr == null && _$mS._$l1 != null) {
        var _$e1 = _$mS._$l1.length;
        if (_$e1 > 0) {
            for (var i = 0; i < _$e1; i++) {
                var p = _$mS._$l1[i];
                var sz;
                if (p._title != null) {
                    sz = p._title;
                } else {
                    sz = p._floatPanel._title;
                }
                if (sz.length > 0) {
                    return true;
                }
                return false;
            }
        } else {
            return false;
        }
    }
    var b = false;
    if (_$mS._$od != null) {
        b = this._$0e(_$mS._$od);
    }
    if (b) {
        return b;
    }
    if (_$mS._$pr != null) {
        b = this._$0e(_$mS._$pr);
    }
    return b;
};
WidgetDockPanel.prototype.initPanelLayout = function (mainPattern, layout, index, patternPositionType_0, patternPositionType_1) {
    if (!this._$0e(this._$kI)) {
        return index;
    }
    layout.addContent("SEC" + index);
    layout.addContent(this.rect.right - this.rect.left);
    layout.addContent(this.rect.bottom - this.rect.top);
    var _$aR = -1;
    if (this._$kR != null) {
        _$aR = mainPattern._$2F(patternPositionType_0, this._$kR);
        if (mainPattern._$lk[patternPositionType_0] != null) {
            var _$fp = mainPattern._$2F(patternPositionType_0, mainPattern._$lk[patternPositionType_0]);
            if (_$aR > _$fp) _$aR--;
        }
    }
    layout.addContent(_$aR);
    _$aR = -1;
    if (this._$l8 != null) {
        _$aR = mainPattern._$2F(patternPositionType_1, this._$l8);
        if (mainPattern._$lk[patternPositionType_1] != null) {
            var _$fp = mainPattern._$2F(patternPositionType_0, mainPattern._$lk[patternPositionType_1]);
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
WidgetDockPanel.prototype._$63 = function (mainPattern, layout, _$mS) {
    var _$7D = null;
    if (_$mS._$l1 != null && _$mS._$l1.length >= 1) {
        var _$gi = _$mS._$l1.length;
        _$7D = new Array(_$gi);
        for (var i = 0; i < _$gi; i++) {
            _$7D[i] = _$mS._$l1[i];
        }
    } else {
        _$7D = new Array(1);
        _$7D[0] = new _$57();
        _$7D[0]._floatPanel = _$mS._floatPanel;
    }
    layout.addContent(_$7D.length);
    for (var i = 0; i < _$7D.length; i++) {
        var sTitle;
        var _$aS = 0xFFF00000;
        if (_$7D[i]._title != null) {
            sTitle = _$7D[i]._title;
            _$aS = _$7D[i]._$aP;
        } else {
            if (_$7D[i]._floatPanel != null) {
                sTitle = _$7D[i]._floatPanel.getTitle();
                var bvi = _$7D[i]._floatPanel._$fT();
                if (bvi) {
                    _$aS |= WidgetDockFloatPanel._$1D;
                }
                if (_$7D[i]._floatPanel._pattern == mainPattern) {
                    _$aS |= WidgetDockFloatPanel._$1A;
                }
                if (_$7D[i]._floatPanel._pinType == EnumPinType.Hide) {
                    _$aS |= WidgetDockFloatPanel._$1C;
                }
                if (_$7D[i]._floatPanel._pinType != EnumPinType.None) {
                    _$aS |= WidgetDockFloatPanel._$2U;
                }
                if (_$7D[i]._floatPanel._$iv) {
                    _$aS |= WidgetDockFloatPanel._$2T;
                }
                _$aS |= ((_$7D[i]._floatPanel._$kc & 0xF) << 12);
                _$aS |= ((_$7D[i]._floatPanel._$kj & 0x7) << 7);
                if (_$7D[i]._floatPanel._$id) {
                    _$aS |= WidgetDockFloatPanel._$B;
                }
                _$aS |= ((_$7D[i]._floatPanel._$jm & 0x07) << 17);
            } else {
                sTitle = _$mS._$sl;
                _$aS |= (WidgetDockFloatPanel._$1D | WidgetDockFloatPanel._$1A);
            }
        }
        var _$8Q = false;
        if (_$mS._$o5 != null) {
            for (var k = 0; k < _$mS._$o5._tabList.length; k++) {
                var tab = _$mS._$o5._tabList[k];
                if (tab._floatPanel == _$7D[i]._floatPanel) {
                    _$8Q = true;
                    break;
                }
            }
        }
        if (_$8Q) {
            _$aS |= WidgetDockFloatPanel._$1B;
        } else {
            _$aS &= ~WidgetDockFloatPanel._$1B;
        }
        layout.addContent(sTitle);
        layout.addContent(_$aS);
        if (mainPattern._isMain) {
            if (_$7D[i]._floatPanel != null) {
                layout.addContent(_$7D[i]._floatPanel._$lt.x);
                layout.addContent(_$7D[i]._floatPanel._$lt.y);
                layout.addContent(_$7D[i]._floatPanel._$lK.cx);
                layout.addContent(_$7D[i]._floatPanel._$lK.cy);
            } else {
                if (_$7D[i]._$pA == null) _$7D[i]._$pA = new WidgetDockLocation(100, 200);
                layout.addContent(_$7D[i]._$pA.x);
                layout.addContent(_$7D[i]._$pA.y);
                layout.addContent(_$7D[i]._$rM);
                layout.addContent(_$7D[i]._$rN);
            }
        }
    }
};
WidgetDockPanel.prototype.initPanelInfoLayout = function (mainPattern, layout, _$mS) {
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
        } else {
            layout.addContent("RIGHTNONE");
        }
    } else {
        layout.addContent("LEFTNONE");
        layout.addContent("RIGHTNONE");
        this._$63(mainPattern, layout, _$mS);
    }
    layout.addContent(_$aS[0]);
};
WidgetDockPanel.prototype._$66 = function (layout) {
    layout.addContent(0);
};
