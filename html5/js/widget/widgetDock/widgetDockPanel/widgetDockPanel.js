function WidgetDockPanel() {
    this.m$N = null;
    this._m$F = null;
    this._$kR;
    this._$l8;
    this._isVisible;
    this._rect = new WidgetDockRect();
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
        if (this.m$N._patternPositionType == EnumPatternPositionType.Top) {
            if (_$9z == WidgetDockPatternBase._$3h) {
                _$de[0] = 1;
            } else if (_$9z == WidgetDockPatternBase._$3b) {
                _$de[0] = 2;
            }
        } else if (this.m$N._patternPositionType == EnumPatternPositionType.Bottom) {
            if (_$9z == WidgetDockPatternBase._$3h) {
                _$de[0] = 2;
            } else if (_$9z == WidgetDockPatternBase._$3b) {
                _$de[0] = 1;
            }
        } else if (this.m$N._patternPositionType == EnumPatternPositionType.Left) {
            if (_$9z == WidgetDockPatternBase._$3d) {
                _$de[0] = 1;
            }
            if (_$9z == WidgetDockPatternBase._$3f) {
                _$de[0] = 2;
            }
        } else if (this.m$N._patternPositionType == EnumPatternPositionType.Right) {
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
        _$9z = (2 * this.m$N._patternPositionType + 1);
    }
    return _$9z;
};
WidgetDockPanel.prototype._$ah = function (patternBase, patternPositionType) {
    this.m$N = new _$N();
    this.m$N._patternPositionType = patternPositionType;
    this.m$N._$rh(patternBase);
    this.m$N._$rG(this._$km);
};
WidgetDockPanel.prototype._$qI = function () {
    if (this.m$N != null) {
        if (this.m$N._mainPattern != null) {
            this.m$N._mainPattern._$5E(this.m$N);
        }
        this.m$N._$ap();
        this.m$N = null;
    }
    this._isVisible = false;
};
WidgetDockPanel.prototype._$05 = function () {
    return this._m$F._$05();
};
WidgetDockPanel.prototype._$qy = function (wnd, rc) {
    wnd._$6q(rc);
};
WidgetDockPanel.prototype._$2B = function (floatPanel, pRC) {
    if (floatPanel._m$F._$8y) {
        pRC.left = 0;
        pRC.top = 0;
        pRC.right = 0;
        pRC.bottom = 0;
        return;
    }
    floatPanel.getRect(pRC);
};
WidgetDockPanel.prototype._$6u = function (patternBase, windowRect, patternPositionType, top, bottom, _$cA) {
    if (this._isVisible) {
        var ilt, irb;
        var _$dW;
        var _$qt = new WidgetDockRect();
        var _$9p = 0;
        if ((patternPositionType == EnumPatternPositionType.Top) || (patternPositionType == EnumPatternPositionType.Bottom)) {
            _$dW = (this._rect.top + this._rect.bottom) / 2;
            ilt = patternBase._$2I(EnumPatternPositionType.Left, this._$kR);
            irb = patternBase._$2I(EnumPatternPositionType.Right, this._$l8);
            this._rect.left = windowRect.left + ilt;
            this._rect.right = windowRect.right - irb;
        } else {
            _$dW = (this._rect.left + this._rect.right) / 2;
            ilt = patternBase._$2I(EnumPatternPositionType.Top, this._$kR);
            irb = patternBase._$2I(EnumPatternPositionType.Bottom, this._$l8);
            this._rect.top = windowRect.top + ilt;
            this._rect.bottom = windowRect.bottom - irb;
        }
        if ((_$dW >= top) && (_$dW <= bottom)) {
            this.m$N.getRect(_$qt);
            if ((patternPositionType == EnumPatternPositionType.Top) || (patternPositionType == EnumPatternPositionType.Bottom)) {
                _$qt.left = this._rect.left;
                _$qt.right = this._rect.right;
                _$9p = EnumPatternPositionType.Left;
            } else if ((patternPositionType == EnumPatternPositionType.Left) || (patternPositionType == EnumPatternPositionType.Right)) {
                _$qt.top = this._rect.top;
                _$qt.bottom = this._rect.bottom;
                _$9p = EnumPatternPositionType.Top;
            }
            this._$6v(patternBase, _$9p, _$cA);
            if (patternPositionType == EnumPatternPositionType.Top || patternPositionType == EnumPatternPositionType.Bottom) {
                _$qt.left = this._rect.left;
                _$qt.right = _$qt.left + this._rect.right - this._rect.left;
            } else {
                _$qt.top = this._rect.top;
                _$qt.bottom = _$qt.top + this._rect.bottom - this._rect.top;
            }
            this.m$N._$6q(_$qt);
        }
    }
};
WidgetDockPanel.prototype._$5q = function () {
    var pd1 = new Array(1);
    var pd2 = new Array(1);
    var rc1 = new WidgetDockRect();
    var rc2 = new WidgetDockRect();
    this._m$F._$1K(pd1, pd2, rc1, rc2);
    if (pd1[0] == null && pd2[0] == null) {
        this._m$F._floatPanel.getRect(this._rect);
    } else if (pd1[0] == null) {
        this._rect.setRect(rc2);
    } else if (pd2[0] == null) {
        this._rect.setRect(rc1);
    } else {
        if (rc1.left != -6000 && rc2.left != -6000) {
            this._rect.setRect(rc1);
            if (this._m$F._positionType_1 == EnumPatternPositionType.Top || this._m$F._positionType_1 == EnumPatternPositionType.Bottom) {
                this._rect.bottom = rc2.bottom;
            } else {
                this._rect.right = rc2.right;
            }
        } else if (rc1.left == -6000 && rc2.left != -6000) {
            this._rect.setRect(rc2);
        } else if (rc1.left != -6000 && rc2.left == -6000) {
            this._rect.setRect(rc1);
        } else {
            this._rect.left = this._rect.right = this._rect.top = this._rect.bottom = 0;
        }
    }
};
WidgetDockPanel.prototype._$03 = function (mainPattern, _$mX, pt, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    if (_$mX._$it) {
        return this._m$F._$03(_$mX, pt, _$nz, _$dk, _$oQ);
    } else {
        var rcPanel = new WidgetDockRect();
        rcPanel.setRect(this._rect);
        mainPattern._$5r(mainPattern._$hh, rcPanel);
        var _$9z = this._$3E(rcPanel, pt, _$de);
        _$mX._$kn = this._rect.right - this._rect.left;
        _$mX._$kq = this._rect.bottom - this._rect.top;
        return _$9z;
    }
};
WidgetDockPanel.prototype._$53 = function (_m$F) {
    var _m$FParent = _m$F._m$FParent;
    if (_m$FParent == null) {
        return true;
    }
    if (_m$F == _m$FParent._m$F_1) {
        _m$FParent._m$F_1 = null;
        if (_m$FParent._m$F_2 == null) {
            return this._$53(_m$FParent);
        } else if (_m$FParent._m$FParent != null) {
            _m$FParent._m$F_2._m$FParent = _m$FParent._m$FParent;
            _m$FParent._m$F_2._positionType_2 = _m$FParent._positionType_2;
            if (_m$FParent._m$FParent._m$F_1 == _m$FParent) {
                _m$FParent._m$FParent._m$F_1 = _m$FParent._m$F_2;
            } else {
                _m$FParent._m$FParent._m$F_2 = _m$FParent._m$F_2;
            }
        }
    } else {
        _m$FParent._m$F_2 = null;
        if (_m$FParent._m$F_1 == null) {
            return this._$53(_m$FParent);
        } else if (_m$FParent._m$FParent != null) {
            _m$FParent._m$F_1._m$FParent = _m$FParent._m$FParent;
            _m$FParent._m$F_1._positionType_2 = _m$FParent._positionType_2;
            if (_m$FParent._m$FParent._m$F_1 == _m$FParent) {
                _m$FParent._m$FParent._m$F_1 = _m$FParent._m$F_1;
            } else {
                _m$FParent._m$FParent._m$F_2 = _m$FParent._m$F_1;
            }
        }
    }
    return false;
};
WidgetDockPanel.prototype._$5K = function (floatPanel) {
    return floatPanel._m$F._$5K(floatPanel);
};
WidgetDockPanel.prototype._$f = function (mainPattern, _m$F, _rect) {
    var _$qs = new WidgetDockRect();
    var rcPanel = new WidgetDockRect();
    rcPanel.setRect(_rect);
    var _$8V = false;
    var _m$FParent = _m$F._m$FParent;
    var pme = _m$F;
    var _$pu;
    while (true) {
        if (_m$FParent != null) {
            _$pu = null;
            if (_m$FParent._m$F_1 != null && _m$FParent._m$F_1 != pme) {
                _$pu = _m$FParent._m$F_1;
            } else if (_m$FParent._m$F_2 != null && _m$FParent._m$F_2 != pme) {
                _$pu = _m$FParent._m$F_2;
            }
            if (_$pu != null && !_$pu._$8y) {
                if (_m$FParent._$oy != null) {
                    _m$FParent._$oy._$ap();
                    _m$FParent._$oy = null;
                }
                var _$gc;
                _$pu._$22(_$qs);
                if (_m$FParent._positionType_1 == EnumPatternPositionType.Top || _m$FParent._positionType_1 == EnumPatternPositionType.Bottom) {
                    _$gc = WidgetDockPatternBase.getHeight(rcPanel) + WidgetDockPanel._$kt;
                    if (pme._positionType_2 == EnumPatternPositionType.Bottom) {
                        _$qs.bottom += _$gc;
                    } else {
                        _$qs.top -= _$gc;
                    }
                    mainPattern._$6v(pme._m$FParent, _$qs, WidgetDockPatternBase._$6N);
                } else {
                    _$gc = WidgetDockPatternBase.getWidth(rcPanel) + WidgetDockPanel._$kt;
                    if (pme._positionType_2 == EnumPatternPositionType.Right) {
                        _$qs.right += _$gc;
                    } else {
                        _$qs.left -= _$gc;
                    }
                    mainPattern._$6v(pme._m$FParent, _$qs, WidgetDockPatternBase._$3T);
                }
                break;
            }
            _m$FParent._$8y = true;
            pme = _m$FParent;
            _m$FParent = _m$FParent._m$FParent;
        } else {
            _$8V = true;
            break;
        }
    }
    return _$8V;
};
WidgetDockPanel.prototype._$6 = function (mainPattern, _m$F) {
    var pme = _m$F;
    var _m$FParent = pme._m$FParent;
    if (_m$FParent == null) return;
    var _positionType_2;
    if (pme._positionType_2 == EnumPatternPositionType.Top) {
        _positionType_2 = EnumPatternPositionType.Bottom;
    } else if (pme._positionType_2 == EnumPatternPositionType.Bottom) {
        _positionType_2 = EnumPatternPositionType.Top;
    } else if (pme._positionType_2 == EnumPatternPositionType.Left) {
        _positionType_2 = EnumPatternPositionType.Right;
    } else {
        _positionType_2 = EnumPatternPositionType.Left;
    }
    if (_m$FParent._m$F_1 != null && _m$FParent._m$F_1 != pme) {
        _m$FParent._m$F_1._positionType_2 = _positionType_2;
    } else if (_m$FParent._m$F_2 != null && _m$FParent._m$F_2 != pme) {
        _m$FParent._m$F_2._positionType_2 = _positionType_2;
    }
    var _$pu;
    while (_m$FParent != null) {
        _$pu = null;
        if (_m$FParent._m$F_1 != null && _m$FParent._m$F_1 != pme) {
            _$pu = _m$FParent._m$F_1;
        } else if (_m$FParent._m$F_2 != null && _m$FParent._m$F_2 != pme) {
            _$pu = _m$FParent._m$F_2;
        }
        if (_$pu != null && !_$pu._$8y) {
            var _$9o;
            if (_m$FParent._positionType_1 == EnumPatternPositionType.Top || _m$FParent._positionType_1 == EnumPatternPositionType.Bottom) {
                _$9o = EnumPatternPositionType.Top;
            } else {
                _$9o = EnumPatternPositionType.Left;
            }
            var rc = new WidgetDockRect();
            _$pu._$22(rc);
            _m$FParent._$oy = new _$N();
            _m$FParent._$oy._$rG(WidgetDockPanel._$kt);
            _m$FParent._$oy._$rh(mainPattern);
            _m$FParent._$oy._$iI = true;
            _m$FParent._$oy._patternPositionType = _$9o;
            _m$FParent._$oy._$kE = _m$FParent;
            mainPattern._$6v(_$pu._m$FParent, rc, 0);
            mainPattern._$6v(_$pu._m$FParent, rc, 1);
            break;
        }
        pme = _m$FParent;
        _m$FParent = _m$FParent._m$FParent;
        if (_m$FParent == null) {
            return;
        }
    }
};
WidgetDockPanel.prototype._$7 = function (mainPattern, floatPanel) {
    var pme = floatPanel._m$F;
    this._$6(mainPattern, pme);
};
WidgetDockPanel.prototype._$4i = function (mainPattern, patternPositionType, _$dg, _$cY) {
    if (this._isVisible) {
        this._$4j(mainPattern, _$cY, patternPositionType);
        if (patternPositionType == EnumPatternPositionType.Right) {
            this._rect.left -= _$cY;
            this._rect.right -= _$cY;
        } else if (patternPositionType == EnumPatternPositionType.Left) {
            this._rect.left += _$cY;
            this._rect.right += _$cY;
        } else if (patternPositionType == EnumPatternPositionType.Bottom) {
            this._rect.top -= _$cY;
            this._rect.bottom -= _$cY;
        } else {
            this._rect.top += _$cY;
            this._rect.bottom += _$cY;
        }
        var _$gz = _$cY;
        if (patternPositionType == EnumPatternPositionType.Right || patternPositionType == EnumPatternPositionType.Bottom) {
            _$gz = -_$cY;
        }
        this.m$N._$4q(_$gz);
    }
};
WidgetDockPanel.prototype._$6v = function (patternBase, _$9c, _$cA) {
    _$cA[0] = 0;
    patternBase._$6v(this._m$F, this._rect, _$9c);
};
WidgetDockPanel.prototype._$4j = function (mainPattern, _$cY, patternPositionType) {
    mainPattern._$4j(this._m$F, _$cY, patternPositionType);
};
WidgetDockPanel.prototype._$0e = function (_m$F) {
    if (_m$F == null) return false;
    if (_m$F._floatPanel != null) return true;
    if (_m$F._m$F_1 == null && _m$F._m$F_2 == null && _m$F._$57List != null) {
        var _$e1 = _m$F._$57List.length;
        if (_$e1 > 0) {
            for (var i = 0; i < _$e1; i++) {
                var p = _m$F._$57List[i];
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
    if (_m$F._m$F_1 != null) {
        b = this._$0e(_m$F._m$F_1);
    }
    if (b) {
        return b;
    }
    if (_m$F._m$F_2 != null) {
        b = this._$0e(_m$F._m$F_2);
    }
    return b;
};
WidgetDockPanel.prototype.initPanelLayout = function (mainPattern, layoutWriter, index, patternPositionType_0, patternPositionType_1) {
    if (!this._$0e(this._m$F)) {
        return index;
    }
    layoutWriter.write("SEC" + index);
    layoutWriter.write(this._rect.right - this._rect.left);
    layoutWriter.write(this._rect.bottom - this._rect.top);
    var _$aR = -1;
    if (this._$kR != null) {
        _$aR = mainPattern._$2F(patternPositionType_0, this._$kR);
        if (mainPattern._$lk[patternPositionType_0] != null) {
            var _$fp = mainPattern._$2F(patternPositionType_0, mainPattern._$lk[patternPositionType_0]);
            if (_$aR > _$fp) _$aR--;
        }
    }
    layoutWriter.write(_$aR);
    _$aR = -1;
    if (this._$l8 != null) {
        _$aR = mainPattern._$2F(patternPositionType_1, this._$l8);
        if (mainPattern._$lk[patternPositionType_1] != null) {
            var _$fp = mainPattern._$2F(patternPositionType_0, mainPattern._$lk[patternPositionType_1]);
            if (_$aR > _$fp) _$aR--;
        }
    }
    layoutWriter.write(_$aR);
    this._$66(layoutWriter);
    var _$nT = this._m$F;
    layoutWriter.write("ROOTBLOCK");
    this.initPanelInfoLayout(mainPattern, layoutWriter, _$nT);
    index++;
    return index;
};
WidgetDockPanel.prototype._$63 = function (mainPattern, layoutWriter, _m$F) {
    var _$7D = null;
    if (_m$F._$57List != null && _m$F._$57List.length >= 1) {
        var _$gi = _m$F._$57List.length;
        _$7D = new Array(_$gi);
        for (var i = 0; i < _$gi; i++) {
            _$7D[i] = _m$F._$57List[i];
        }
    } else {
        _$7D = new Array(1);
        _$7D[0] = new _$57();
        _$7D[0]._floatPanel = _m$F._floatPanel;
    }
    layoutWriter.write(_$7D.length);
    for (var i = 0; i < _$7D.length; i++) {
        var sTitle;
        var _$aS = 0xFFF00000;
        if (_$7D[i]._title != null) {
            sTitle = _$7D[i]._title;
            _$aS = _$7D[i]._$aP;
        } else {
            if (_$7D[i]._floatPanel != null) {
                sTitle = _$7D[i]._floatPanel.getTitle();
                var bvi = _$7D[i]._floatPanel.getVisible();
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
                sTitle = _m$F._title;
                _$aS |= (WidgetDockFloatPanel._$1D | WidgetDockFloatPanel._$1A);
            }
        }
        var _$8Q = false;
        if (_m$F._tabController != null) {
            for (var k = 0; k < _m$F._tabController._tabList.length; k++) {
                var tab = _m$F._tabController._tabList[k];
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
        layoutWriter.write(sTitle);
        layoutWriter.write(_$aS);
        if (mainPattern._isMain) {
            if (_$7D[i]._floatPanel != null) {
                layoutWriter.write(_$7D[i]._floatPanel._point.x);
                layoutWriter.write(_$7D[i]._floatPanel._point.y);
                layoutWriter.write(_$7D[i]._floatPanel._$lK.x);
                layoutWriter.write(_$7D[i]._floatPanel._$lK.y);
            } else {
                if (_$7D[i]._point == null) {
                    _$7D[i]._point = new WidgetDockPoint(100, 200);
                }
                layoutWriter.write(_$7D[i]._point.x);
                layoutWriter.write(_$7D[i]._point.y);
                layoutWriter.write(_$7D[i]._x);
                layoutWriter.write(_$7D[i]._y);
            }
        }
    }
};
WidgetDockPanel.prototype.initPanelInfoLayout = function (mainPattern, layoutWriter, _m$F) {
    layoutWriter.write(_m$F._$br * 1000);
    var _$aS = new Array(1);
    _$aS[0] = _m$F._positionType_2;
    _$aS[0] <<= 8;
    _$aS[0] |= _m$F._positionType_1;
    _$aS[0] <<= 8;
    if (_m$F._m$F_1 != null || _m$F._m$F_2 != null) {
        if (_m$F._m$F_1 != null) {
            layoutWriter.write("LEFTBLOCK");
            this.initPanelInfoLayout(mainPattern, layoutWriter, _m$F._m$F_1);
        } else {
            layoutWriter.write("LEFTNONE");
        }
        if (_m$F._m$F_2 != null) {
            layoutWriter.write("RIGHTBLOCK");
            this.initPanelInfoLayout(mainPattern, layoutWriter, _m$F._m$F_2);
        } else {
            layoutWriter.write("RIGHTNONE");
        }
    } else {
        layoutWriter.write("LEFTNONE");
        layoutWriter.write("RIGHTNONE");
        this._$63(mainPattern, layoutWriter, _m$F);
    }
    layoutWriter.write(_$aS[0]);
};
WidgetDockPanel.prototype._$66 = function (layoutWriter) {
    layoutWriter.write(0);
};
