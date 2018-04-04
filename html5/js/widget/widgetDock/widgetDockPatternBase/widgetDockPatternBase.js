function WidgetDockPatternBase(isMain) {
    this._isMain = isMain;
    this.width = 0;
    this.height = 0;
    this._elementWithCenter = null;
    this._rect = new WidgetDockRect();
    WidgetDockPatternBase.resetRect(this._rect);
    this._rect.left = -4000;
    this._rect.right = -4000;
    this._floatPanel = null;

    this._panelList = new Array(4);
    this._floatPanelControllerList = new Array(4);
    this._signLenList = new Array(4);
    this._elementList = new Array(4);
    for (var k = 0; k < 4; k++) {
        this._panelList[k] = new WidgetDockListController();
        this._floatPanelControllerList[k] = new WidgetDockListController();
        this._signLenList[k] = 0;
        this._elementList[k] = null;
    }

    if (isMain) {
        this._$lk = new Array(4);
    }
    this._$it = true;
    this._$is = false;
    this._$je = 0;
    this._$jO = 0;
    this._$he = null;
};
WidgetDockPatternBase._$3S = 0;
WidgetDockPatternBase._$6M = 1;
WidgetDockPatternBase._$5k = 2;
WidgetDockPatternBase._$s = 3;

WidgetDockPatternBase._$3T = 0;
WidgetDockPatternBase._$6N = 1;
WidgetDockPatternBase._$5l = 2;
WidgetDockPatternBase._$t = 3;

WidgetDockPatternBase._$3e = 0;
WidgetDockPatternBase._$3d = 1;
WidgetDockPatternBase._$3i = 2;
WidgetDockPatternBase._$3h = 3;
WidgetDockPatternBase._$3g = 4;
WidgetDockPatternBase._$3f = 5;
WidgetDockPatternBase._$3c = 6;
WidgetDockPatternBase._$3b = 7;

WidgetDockPatternBase._$5Z = 6;
WidgetDockPatternBase._$A = 12;
WidgetDockPatternBase._m$59 = null;
WidgetDockPatternBase.prototype._$3z = function () {
    this.width = 0;
    this.height = 0;
    this._rect.left = -4000;
    this._rect.right = -4000;
};
WidgetDockPatternBase.prototype._$4a = function (_m$F, floatPanel) {
    var _$8G = false;
    if (_m$F == null) {
        return false;
    }
    if (_m$F._m$F_1 != null) {
        _$8G = this._$4a(_m$F._m$F_1, floatPanel);
    }
    if (_$8G) {
        return true;
    }
    if (_m$F._m$F_2 != null) {
        _$8G = this._$4a(_m$F._m$F_2, floatPanel);
    }
    if (_$8G) {
        return true;
    }
    if (_m$F._$57List != null) {
        var _$e1 = _m$F._$57List.length;
        for (var i = 0; i < _$e1; i++) {
            var m$57 = _m$F._$57List.get(i);
            if (m$57._floatPanel != null && m$57._floatPanel == floatPanel) {
                m$57._floatPanel = null;
                m$57._title = floatPanel.getTitle();
                m$57._point = floatPanel._point;
                m$57._x = floatPanel._$lK.x;
                m$57._y = floatPanel._$lK.y;
                m$57._$aP = WidgetDockFloatPanel._$1D;
                if (floatPanel._pattern == this) {
                    m$57._$aP |= WidgetDockFloatPanel._$1A;
                }
                if (floatPanel._pinType == EnumPinType.Hide) {
                    m$57._$aP |= WidgetDockFloatPanel._$1C;
                    m$57._$aP &= ~WidgetDockFloatPanel._$1D;
                }
                m$57._$aP |= floatPanel._$kc << 12;
                if (floatPanel._$id) {
                    m$57._$aP |= WidgetDockFloatPanel._$B;
                }
                if (floatPanel._$kj < 0) floatPanel._$kj = 0;
                m$57._$aP |= floatPanel._$kj << 7;
                if (floatPanel._$iv) {
                    m$57._$aP |= WidgetDockFloatPanel._$2T;
                }
                if (floatPanel._pinType != EnumPinType.None) {
                    m$57._$aP |= WidgetDockFloatPanel._$2U;
                }
                return true;
            }
        }
    } else {
        if (_m$F._floatPanel == floatPanel && floatPanel != null) {
            var _$aS = WidgetDockFloatPanel._$1D;
            if (floatPanel._pattern == this) {
                _$aS |= WidgetDockFloatPanel._$1A;
            }
            if (floatPanel._pinType == EnumPinType.Hide) {
                _$aS |= WidgetDockFloatPanel._$1C;
                _$aS &= ~WidgetDockFloatPanel._$1D;
            }
            if (floatPanel._$iv) {
                _$aS |= WidgetDockFloatPanel._$2T;
            }
            _$aS |= floatPanel._$kc << 12;
            if (floatPanel._$id) {
                _$aS |= WidgetDockFloatPanel._$B;
            }
            if (floatPanel._$kj < 0) {
                floatPanel._$kj = 0;
            }
            _$aS |= floatPanel._$kj << 7;
            if (floatPanel._pinType != EnumPinType.None) {
                _$aS |= WidgetDockFloatPanel._$2U;
            }
            _m$F._$e(floatPanel.getTitleOriginal(), _$aS, floatPanel._point, floatPanel._$lK.x, floatPanel._$lK.y);
            return true;
        }
    }
    return false;
};
WidgetDockPatternBase.prototype.addFixedPanelWithType = function (type, element, left, top, width, height) {
    this._elementList[type] = element;
    WidgetDockElementController.setElementLeftTopSize(element, left, top, width, height);
    this._$5z();
};
WidgetDockPatternBase.prototype._$6E = function (_$9f, _$cB, _$cQ, _$d8) {
    _$cQ[0] = 0;
    _$d8[0] = 0;
    var _$e6 = _$cB;
    var _$pU;
    var _$dM;
    var _$e1;
    var _$9l = _$9f;
    while (_$e6 != 0) {
        _$e1 = this._panelList[_$9l].getSize();
        for (var j = _$e1 - 1; j >= 0; j--) {
            _$pU = this._panelList[_$9l]._list[j];
            if (_$9l == EnumPatternPositionType.Left || _$9l == EnumPatternPositionType.Right) {
                _$dM = _$pU._rect.right - _$pU._rect.left - 2 * WidgetDockPanel._$kt;
            } else {
                _$dM = _$pU._rect.bottom - _$pU._rect.top - 2 * WidgetDockPanel._$kt;
            }
            if (_$pU._isVisible && _$pU._$k9 == 0 && (_$dM != 0)) {
                if (_$cB > 0) {
                    if (_$dM > _$e6) {
                        _$dM = _$e6;
                    }
                } else {
                    if (_$dM >= -_$e6) {
                        _$dM = -_$e6;
                    }
                    _$dM = -_$dM;
                }
                _$e6 -= _$dM;
                this._$k(_$pU, _$dM);
                if (_$9l == EnumPatternPositionType.Right || _$9l == EnumPatternPositionType.Bottom) {
                    _$d8[0] += _$dM;
                } else {
                    _$cQ[0] += _$dM;
                }
            }
            if (_$e6 == 0) {
                break;
            }
        }
        if (_$9l == EnumPatternPositionType.Right || _$9l == EnumPatternPositionType.Bottom) {
            break;
        }
        _$9l += 2;
        _$cB = -_$e6;
        _$e6 = _$cB;
    }
};
WidgetDockPatternBase.prototype.setSize = function (iw, ih) {
    this.width = iw;
    this.height = ih;
};
WidgetDockPatternBase.prototype._$mB = function (iw, ih) {
    var height = ih;
    var width = iw;
    if ((this.width == 0) && (this.height == 0)) {
        this.width = width;
        this.height = height;
        return 1;
    }
    if (this.width != width) {
        this._$4n(EnumPatternPositionType.Right, 0, this.width - width);
        this._$6x(EnumPatternPositionType.Top, -32767, 32767);
        this._$6x(EnumPatternPositionType.Bottom, -32767, 32767);
    }
    if (this.height != height) {
        this._$4n(EnumPatternPositionType.Bottom, 0, this.height - height);
        this._$6x(EnumPatternPositionType.Left, -32767, 32767);
        this._$6x(EnumPatternPositionType.Right, -32767, 32767);
    }
    var rcPanel = new WidgetDockRect();
    rcPanel.left = this._$2K(EnumPatternPositionType.Left, WidgetDockPatternBase._$5k);
    rcPanel.top = this._$2K(EnumPatternPositionType.Top, WidgetDockPatternBase._$s);
    rcPanel.right = this._$2K(EnumPatternPositionType.Right, WidgetDockPatternBase._$3S);
    rcPanel.bottom = this._$2K(EnumPatternPositionType.Bottom, WidgetDockPatternBase._$6M);
    var _$ev = new Array(1);
    var _$fM = new Array(1);
    if (rcPanel.right < rcPanel.left) {
        this._$6E(EnumPatternPositionType.Left, rcPanel.right - rcPanel.left, _$ev, _$fM);
        rcPanel.left += _$ev[0];
        rcPanel.right += _$fM[0];
    }
    if (rcPanel.bottom < rcPanel.top) {
        this._$6E(EnumPatternPositionType.Top, rcPanel.bottom - rcPanel.top, _$ev, _$fM);
        rcPanel.top += _$ev[0];
        rcPanel.bottom += _$fM[0];
    }
    this.width = width;
    this.height = height;
    this._rect.setRect(rcPanel);
    if (this._elementWithCenter != null) {
        var element = this._elementWithCenter;
        WidgetDockElementController.setElementLeftTopSize(element, rcPanel.left, rcPanel.top, rcPanel.right - rcPanel.left, rcPanel.bottom - rcPanel.top);
    }
    return 1;
};
WidgetDockPatternBase.prototype._$72 = function (_m$F) {
    if (!_m$F._$8y) {
        while (_m$F != null) {
            _m$F._$8y = false;
            _m$F = _m$F._m$FParent;
        }
    }
};
WidgetDockPatternBase.prototype._$2F = function (patternPositionType, panelNow) {
    var panelNum = this._panelList[patternPositionType].getSize();
    var panel;
    for (var i = 0; i < panelNum; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        if (panel == panelNow) {
            return i;
        }
    }
    return 0xffffffff;
};
WidgetDockPatternBase.prototype._$5H = function (floatPanel, _$ng) {
    if (!this._isMain && !this._$it) {
        floatPanel._$ir = false;
        if (_$ng != null) {
            floatPanel._$d(_$ng);
        }
        _$01();
        floatPanel._pattern = null;
        return;
    }
    if (floatPanel._$jr < 0) return;
    if (this._panelList[floatPanel._patternPositionType].getSize() < 1) return;
    var panel = this._panelList[floatPanel._patternPositionType]._list[floatPanel._$jr];
    if (floatPanel._m$F._$8y) return;
    var rcPanel = new WidgetDockRect();
    panel._$2B(floatPanel, rcPanel);
    var _$8V = false;
    var _$9h = panel._$5K(floatPanel);
    if (!_$9h) {
        floatPanel._m$F._$8y = true;
        _$8V = panel._$f(this, floatPanel._m$F, rcPanel);
    }
    if (_$8V && (rcPanel.left != rcPanel.right || rcPanel.top != rcPanel.bottom)) {
        panel._$qI();
        var _positionType_1;
        var _$dt;
        if (floatPanel._patternPositionType == EnumPatternPositionType.Left || floatPanel._patternPositionType == EnumPatternPositionType.Right) {
            _$dt = WidgetDockPatternBase.getWidth(rcPanel);
            _positionType_1 = EnumPatternPositionType.Top;
        } else {
            _$dt = WidgetDockPatternBase.getHeight(rcPanel);
            _positionType_1 = EnumPatternPositionType.Left;
            rcPanel.top = rcPanel.left;
            rcPanel.bottom = rcPanel.right;
        }
        this._$4n(floatPanel._patternPositionType, floatPanel._$jr + 1, -(_$dt + panel._$cf()));
        this._$6x(_positionType_1, rcPanel.top, rcPanel.bottom);
        this._$6x((_positionType_1 + 2), rcPanel.top, rcPanel.bottom);
        this.refreshFixedPanel();
    }
    if (_$ng == this || (_$ng != null && !_$ng._isMain && !this._isMain)) {
        this._$53(floatPanel);
    } else {
        floatPanel._$qG();
    }
    if (!this._isMain) {
        floatPanel._$ir = false;
        if (_$ng != null) {
            floatPanel._$d(_$ng);
        }
        this._$l(floatPanel);
        this._$01();
        return;
    }
};
WidgetDockPatternBase.prototype._$55 = function (_m$F, floatPanel, _$sg, patternPositionType, _$dg) {
    if (_$dg < 0) return;
    var _$st = _m$F;
    if (_$st == null) return;
    var _$pj = this._panelList[patternPositionType]._list[_$dg];
    var _$gs;
    if (floatPanel != null) {
        _$gs = _m$F._$56(floatPanel);
    } else {
        _$gs = _m$F._$56(_$sg);
    }
    if (_$gs > 0) {
        if (floatPanel != null) {
            floatPanel._m$F = null;
        }
        return;
    }
    var _$93 = _$pj._$53(_$st);
    if (floatPanel != null) {
        floatPanel._m$F = null;
    }
    if (_$93) {
        if (floatPanel != null && _$sg == null) {
            if (floatPanel._patternPositionType == floatPanel.m$6P._$j1 && floatPanel._$jr < floatPanel.m$6P._panelIndex && floatPanel.m$6P._panelIndex != -1 && floatPanel.m$6P._panelIndex != 0xffffffff) {
                floatPanel.m$6P._panelIndex -= 1;
            }
        }
        var _$pU;
        this._panelList[patternPositionType]._list[_$dg]._m$F = null;
        this._panelList[patternPositionType].delete(_$dg);
        for (var i = _$dg; i < this._panelList[patternPositionType].getSize(); i++) {
            _$pU = this._panelList[patternPositionType]._list[i];
            var pb = _$pU._m$F;
            this._$6m(pb, i);
        }
        var _$oF;
        if (_$dg == 0) {
            _$oF = null;
        } else {
            _$oF = this._panelList[patternPositionType]._list[_$dg - 1];
        }
        if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
            this._$5L(EnumPatternPositionType.Top, _$pj, _$oF);
            this._$5L(EnumPatternPositionType.Bottom, _$pj, _$oF);
        } else {
            this._$5L(EnumPatternPositionType.Left, _$pj, _$oF);
            this._$5L(EnumPatternPositionType.Right, _$pj, _$oF);
        }
    }
};
WidgetDockPatternBase.prototype._$53 = function (floatPanel) {
    this._$55(floatPanel._m$F, floatPanel, null, floatPanel._patternPositionType, floatPanel._$jr);
};
WidgetDockPatternBase.prototype._$6m = function (_m$F, _$cN) {
    if (_m$F == null) return;
    if (_m$F._m$F_1 != null || _m$F._m$F_2 != null) {
        if (_m$F._m$F_1 != null) {
            this._$6m(_m$F._m$F_1, _$cN);
        }
        if (_m$F._m$F_2 != null) {
            this._$6m(_m$F._m$F_2, _$cN);
        }
        return;
    }
    if (_m$F._floatPanel != null) {
        if (_m$F._floatPanel._pattern == this) {
            _m$F._floatPanel._$jr = _$cN;
        } else if (_m$F._floatPanel._patternFloatPanelNormal == this) {
            _m$F._floatPanel._$k4 = _$cN;
        }
    }
    _m$F._$6m(_$cN, this);
};
WidgetDockPatternBase.prototype._$5L = function (patternPositionType, _$n0, _$nk) {
    var panelNum = this._panelList[patternPositionType].getSize();
    var panel;
    for (var i = 0; i < panelNum; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        if (panel._$kR == _$n0) {
            panel._$kR = _$nk;
        }
        if (panel._$l8 == _$n0) {
            panel._$l8 = _$nk;
        }
    }
};
WidgetDockPatternBase.prototype._$2j = function (patternPositionType) {
    var panelNum = this._panelList[patternPositionType].getSize();
    if (panelNum == 0) {
        return null;
    } else {
        return this._panelList[patternPositionType]._list[panelNum - 1];
    }
};
WidgetDockPatternBase.prototype._$19 = function (_m$F, patternPositionType, _$9e) {
    var panel = null;
    var _$8T = false;
    var _$nm = null;
    var rcPanel = new WidgetDockRect();
    var _$8U = true;
    if (_m$F._m$FParent == null) {
        panel = new WidgetDockPanel();
        if (_$9e != 0xffffffff) {
            _$8T = true;
            if (_$9e > 0) {
                _$nm = this._panelList[patternPositionType]._list[_$9e - 1];
                panel._$kR = _$nm._$kR;
                panel._$l8 = _$nm._$l8;
            } else {
                panel._$kR = null;
                panel._$l8 = null;
            }
        } else {
            if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
                panel._$kR = this._$2j(EnumPatternPositionType.Top);
                panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
            } else {
                panel._$kR = this._$2j(EnumPatternPositionType.Left);
                panel._$l8 = this._$2j(EnumPatternPositionType.Right);
            }
            _$9e = this._panelList[patternPositionType].getSize();
        }
        panel._m$F = _m$F;
        panel._$ah(this, patternPositionType);
        WidgetDockPatternBase.resetRect(rcPanel);
        this._panelList[patternPositionType].insert(panel, _$9e);
        this._$6m(_m$F, _$9e);
        var _$pU;
        var i;
        for (i = _$9e + 1; i < this._panelList[patternPositionType].getSize(); i++) {
            _$pU = this._panelList[patternPositionType]._list[i];
            this._$6m(_$pU._m$F, i);
        }
    } else {
        this._$6m(_m$F, _$9e);
        panel = this._panelList[patternPositionType]._list[_$9e];
        if (panel._$05()) {
            panel._$ah(this, patternPositionType);
            WidgetDockPatternBase.resetRect(rcPanel);
        } else {
            _$8U = false;
        }
        _m$F._$8y = false;
        this._$72(_m$F);
        if (!_$8U) {
            panel._$6(this, _m$F);
        }
    }
    if (_$8T) {
        if (patternPositionType == EnumPatternPositionType.Bottom) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, false);
        } else if (patternPositionType == EnumPatternPositionType.Top) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, true);
        } else if (patternPositionType == EnumPatternPositionType.Left) {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, true);
        } else {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, false);
        }
    }
    if (_$8U) {
        var iw, ih;
        if ((panel._rect.left != panel._rect.right) && (panel._rect.left >= 0)) {
            iw = panel._rect.right - panel._rect.left;
            ih = panel._rect.bottom - panel._rect.top;
        } else {
            iw = WidgetDockFloatPanel._$lL.x;
            ih = WidgetDockFloatPanel._$lL.y;
        }
        this._$4m(panel, patternPositionType, _$9e, true, iw, ih, _m$F, true);
    }
};
WidgetDockPatternBase.prototype._$4m = function (panel, patternPositionType, _$9e, _$7Q, _$d2, _$d0, _m$F, _$83) {
    var windowRect = new WidgetDockRect();
    this.getWindowRect(windowRect);
    var ilt, irb;
    var ior;
    var _$oB = null;
    var _$ey, _$eB;
    var _$gj = panel._$cf();
    var rcPanel = new WidgetDockRect();
    var _$qt = new WidgetDockRect();
    rcPanel.left = rcPanel.top = 0;
    if (_$83) {
        rcPanel.right = _$d2;
        rcPanel.bottom = _$d0;
    } else {
        rcPanel.right = panel._rect.right - panel._rect.left;
        rcPanel.bottom = panel._rect.bottom - panel._rect.top;
    }
    var _$9t = true;
    if ((patternPositionType == EnumPatternPositionType.Left) || (patternPositionType == EnumPatternPositionType.Right)) {
        _$9t = false;
    }
    var _$9r;
    var _$gK, _$el, _$dt;
    if (_$83 && panel != null && (panel instanceof WidgetDockPanelState) && !(panel instanceof WidgetDockPanelStatePanel)) {
        if ((_$9e - 1) >= 0) {
            _$oB = this._panelList[patternPositionType]._list[_$9e - 1];
        }
        ior = this._$2I(patternPositionType, _$oB);
        if (!_$9t) {
            _$9r = EnumPatternPositionType.Top;
        } else {
            _$9r = EnumPatternPositionType.Left;
        }
        ilt = this._$2I(_$9r, panel._$kR);
        irb = this._$2I((_$9r + 2), panel._$l8);
        if (!_$9t) {
            _$ey = windowRect.top + ilt;
            _$eB = windowRect.bottom - irb;
            _$el = _$eB - _$ey;
            rcPanel.top = _$ey;
            _$gK = 0;
            if (patternPositionType == EnumPatternPositionType.Left) {
                rcPanel.left = ior;
            } else {
                rcPanel.left = windowRect.right - ior - _$gK;
            }
            rcPanel.right = rcPanel.left;
            rcPanel.bottom = rcPanel.top + _$el;
        } else {
            _$ey = windowRect.left + ilt;
            _$eB = windowRect.right - irb;
            _$gK = _$eB - _$ey;
            _$el = 0;
            rcPanel.left = _$ey;
            if (patternPositionType == EnumPatternPositionType.Top) {
                rcPanel.top = ior;
            } else {
                rcPanel.top = windowRect.bottom - ior - _$el;
            }
            rcPanel.bottom = rcPanel.top;
            rcPanel.right = rcPanel.left + _$gK;
        }
        panel._isVisible = true;
        panel._$qy(_m$F._floatPanel, rcPanel);
        return;
    }
    if (this._rect.right == -4000 && this._rect.left == -4000) {
        this.getWindowRect(this._rect);
        this.width = this._rect.right - this._rect.left;
        this.height = this._rect.bottom - this._rect.top;
    }
    var _$fJ;
    var _$ev = new Array(1);
    var _$fM = new Array(1);
    if ((patternPositionType == EnumPatternPositionType.Left) || (patternPositionType == EnumPatternPositionType.Right)) {
        _$fJ = this._rect.right - this._rect.left - (rcPanel.right + panel._$cf());
        if (_$fJ < 0) {
            if (_$7Q) {
                _$fJ += rcPanel.right;
                if (_$fJ < 0) {
                    _$fJ = 0;
                }
                rcPanel.right = _$fJ;
                _$fJ = this._rect.right - this._rect.left - (rcPanel.right + panel._$cf());
            }
            if (_$fJ < 0) {
                this._$6E(EnumPatternPositionType.Left, _$fJ, _$ev, _$fM);
            }
        }
    } else {
        _$fJ = this._rect.bottom - this._rect.top - (rcPanel.bottom + panel._$cf());
        if (_$fJ < 0) {
            if (_$7Q) {
                _$fJ += rcPanel.bottom;
                if (_$fJ < 0) {
                    _$fJ = 0;
                }
                rcPanel.bottom = _$fJ;
                _$fJ = this._rect.bottom - this._rect.top - (rcPanel.bottom + panel._$cf());
            }
            if (_$fJ < 0) {
                this._$6E(EnumPatternPositionType.Top, _$fJ, _$ev, _$fM);
            }
        }
    }
    if ((_$9e - 1) >= 0) {
        _$oB = this._panelList[patternPositionType]._list[_$9e - 1];
    }
    ior = this._$2I(patternPositionType, _$oB);
    if (!_$9t) {
        _$9r = EnumPatternPositionType.Top;
    } else {
        _$9r = EnumPatternPositionType.Left;
    }
    ilt = this._$2I(_$9r, panel._$kR);
    irb = this._$2I((_$9r + 2), panel._$l8);
    if (!_$9t) {
        _$ey = windowRect.top + ilt;
        _$eB = windowRect.bottom - irb;
        _$el = _$eB - _$ey;
        rcPanel.top = _$ey;
        _$qt.top = _$ey;
        _$qt.bottom = _$qt.top + _$el;
        _$gK = WidgetDockPatternBase.getWidth(rcPanel);
        if (_$83) {
            _$dt = _$gK + _$gj;
        } else {
            _$dt = _$d2 + _$gj;
        }
        if (patternPositionType == EnumPatternPositionType.Left) {
            rcPanel.left = ior;
            _$qt.left = ior + _$gK;
        } else {
            rcPanel.left = windowRect.right - ior - _$gK;
            _$qt.left = windowRect.right - ior - _$gK - _$gj;
        }
        _$qt.right = _$qt.left + _$gj;
    } else {
        _$ey = windowRect.left + ilt;
        _$eB = windowRect.right - irb;
        _$gK = _$eB - _$ey;
        _$el = WidgetDockPatternBase.getHeight(rcPanel);
        rcPanel.left = _$ey;
        _$qt.left = _$ey;
        _$qt.right = _$qt.left + _$gK;
        if (_$83) {
            _$dt = _$el + _$gj;
        } else {
            _$dt = _$d0 + _$gj;
        }
        if (patternPositionType == EnumPatternPositionType.Top) {
            rcPanel.top = ior;
            _$qt.top = ior + _$el;
        } else {
            rcPanel.top = windowRect.bottom - ior - _$el;
            _$qt.top = windowRect.bottom - ior - _$el - _$gj;
        }
        _$qt.bottom = _$qt.top + _$gj;
    }
    rcPanel.right = rcPanel.left + _$gK;
    rcPanel.bottom = rcPanel.top + _$el;
    if (_m$F != null) {
        if (_m$F._floatPanel != null) {
            panel._$qy(_m$F._floatPanel, rcPanel);
        } else {
            this._$6v(_m$F, rcPanel, EnumPatternPositionType.Top);
            this._$6v(_m$F, rcPanel, EnumPatternPositionType.Left);
        }
    } else if (_$83) {
        panel._$qy(null, rcPanel);
    }
    if (_$83) {
        panel._rect.setRect(rcPanel);
        panel._isVisible = true;
    }
    if (panel.m$N != null) {
        panel.m$N._$6q(_$qt);
    }
    this._$4n(patternPositionType, _$9e + 1, _$dt);
    var _positionType_1;
    if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
        _positionType_1 = EnumPatternPositionType.Top;
    } else {
        _positionType_1 = EnumPatternPositionType.Left;
    }
    this._$6x(_positionType_1, _$ey, _$eB);
    this._$6x((_positionType_1 + 2), _$ey, _$eB);
    this.refreshFixedPanel();
};
WidgetDockPatternBase.prototype._$6O = function (floatPanel) {
    var panel;
    if (floatPanel._m$F != null || floatPanel._$jr != 0xffffffff) {
        return;
    }
    var _$gl = floatPanel._patternPositionType;
    var _$o6 = new _$F();
    floatPanel._m$F = _$o6;
    _$o6._$8y = false;
    _$o6._floatPanel = floatPanel;
    panel = floatPanel.createPanel();
    if (_$gl == EnumPatternPositionType.Left || _$gl == EnumPatternPositionType.Right) {
        panel._$kR = this._$2j(EnumPatternPositionType.Top);
        panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
    } else {
        panel._$kR = this._$2j(EnumPatternPositionType.Left);
        panel._$l8 = this._$2j(EnumPatternPositionType.Right);
    }
    panel._rect.left = panel._rect.top = 0;
    panel._rect.right = floatPanel._$lJ.x;
    panel._rect.bottom = floatPanel._$lJ.y;
    floatPanel._$jr = this._panelList[_$gl].getSize();
    panel._m$F = _$o6;
    this._panelList[_$gl].insert(panel, floatPanel._$jr);
    var _$pU;
    var i;
    for (i = floatPanel._$jr + 1; i < this._panelList[_$gl].getSize(); i++) {
        _$pU = this._panelList[_$gl]._list[i];
        _$6m(_$pU._m$F, i);
    }
};
WidgetDockPatternBase.prototype._$18 = function (floatPanel, _$oP) {
    var _$gl = floatPanel._patternPositionType;
    var _$8U = true;
    var rcPanel = new WidgetDockRect();
    var panel;
    var _$8T = false;
    var _$nm = null;
    if (floatPanel._m$F == null) {
        var _$o6 = new _$F();
        floatPanel._m$F = _$o6;
        _$o6._$8y = false;
        _$o6._floatPanel = floatPanel;
        panel = floatPanel.createPanel();
        if (_$oP != null) _$oP[0] = panel;
        if (floatPanel._$jr != 0xffffffff) {
            _$8T = true;
            if (floatPanel._$jr > 0) {
                _$nm = this._panelList[_$gl]._list[floatPanel._$jr - 1];
                panel._$kR = _$nm._$kR;
                panel._$l8 = _$nm._$l8;
            } else {
                panel._$kR = null;
                panel._$l8 = null;
            }
        } else {
            if (_$gl == EnumPatternPositionType.Left || _$gl == EnumPatternPositionType.Right) {
                panel._$kR = this._$2j(EnumPatternPositionType.Top);
                panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
            } else {
                panel._$kR = this._$2j(EnumPatternPositionType.Left);
                panel._$l8 = this._$2j(EnumPatternPositionType.Right);
            }
            floatPanel._$jr = this._panelList[_$gl].getSize();
        }
        panel._m$F = _$o6;
        panel._$ah(this, floatPanel._patternPositionType);
        WidgetDockPatternBase.resetRect(rcPanel);
        this._panelList[_$gl].insert(panel, floatPanel._$jr);
        var _$pU;
        var i;
        for (i = floatPanel._$jr + 1; i < this._panelList[_$gl].getSize(); i++) {
            _$pU = this._panelList[_$gl]._list[i];
            this._$6m(_$pU._m$F, i);
        }
    } else {
        if (floatPanel._m$F._$20() == true) {
            floatPanel._m$F._$2(floatPanel);
            return;
        }
        floatPanel._m$F._floatPanel = floatPanel;
        panel = this._panelList[_$gl]._list[floatPanel._$jr];
        if (panel._$05()) {
            panel._$ah(this, floatPanel._patternPositionType);
            WidgetDockPatternBase.resetRect(rcPanel);
        } else {
            _$8U = false;
        }
        floatPanel._m$F._$8y = false;
        this._$72(floatPanel._m$F);
        if (!_$8U) {
            panel._$7(this, floatPanel);
        }
    }
    if (_$8T) {
        if (_$gl == EnumPatternPositionType.Bottom) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, false);
        } else if (_$gl == EnumPatternPositionType.Top) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, true);
        } else if (_$gl == EnumPatternPositionType.Left) {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, true);
        } else {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, false);
        }
    }
    if (_$8U) {
        rcPanel.left = rcPanel.top = 0;
        var _$8I = true;
        if ((panel._rect.left != panel._rect.right) && (panel._rect.left >= 0)) {
            rcPanel.right = panel._rect.right - panel._rect.left;
            rcPanel.bottom = panel._rect.bottom - panel._rect.top;
        } else {
            rcPanel.right = floatPanel._$lJ.x;
            rcPanel.bottom = floatPanel._$lJ.y;
        }
        if (rcPanel.right <= rcPanel.left) {
            rcPanel.right = rcPanel.left + 20;
        }
        if (rcPanel.bottom <= rcPanel.top) {
            rcPanel.bottom = rcPanel.top + 20;
        }
        this._$4m(panel, _$gl, floatPanel._$jr, _$8I, rcPanel.right - rcPanel.left, rcPanel.bottom - rcPanel.top, floatPanel._m$F, true);
        if (this._isMain) {
            this._$5A();
        }
    }
};
WidgetDockPatternBase.prototype._$W = function (patternPositionType, panelNow, _$nm, _$81) {
    for (var i = 0; i < this._panelList[patternPositionType].getSize(); i++) {
        var _$pU = this._panelList[patternPositionType]._list[i];
        if (_$81 && _$pU._$kR == _$nm) {
            _$pU._$kR = panelNow;
        } else if (!_$81 && _$pU._$l8 == _$nm) {
            _$pU._$l8 = panelNow;
        }
    }
};
WidgetDockPatternBase.prototype.refreshFixedPanel = function () {
    var rc = new WidgetDockRect();
    rc.left = this._$2K(EnumPatternPositionType.Left, WidgetDockPatternBase._$5k);
    rc.top = this._$2K(EnumPatternPositionType.Top, WidgetDockPatternBase._$s);
    rc.right = this._$2K(EnumPatternPositionType.Right, WidgetDockPatternBase._$3S);
    rc.bottom = this._$2K(EnumPatternPositionType.Bottom, WidgetDockPatternBase._$6M);
    this._rect.setRect(rc);
    if (this._elementWithCenter != null) {
        WidgetDockElementController.setElementLeftTopSize(this._elementWithCenter, rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
    }
};
WidgetDockPatternBase.prototype.reset = function () {
    for (var i = 0; i < 4; i++) {
        this._panelList[i].reset();
    }
};
WidgetDockPatternBase.prototype._$k = function (_$mV, _$cu) {
    var _$qm = new WidgetDockRect();
    _$mV.m$N.getRect(_$qm);
    var _$9w;
    var _$ey;
    var _$eB;
    var _positionType_1 = _$mV.m$N._patternPositionType;
    var _$g1 = this._$2F(_positionType_1, _$mV);
    if (_positionType_1 == EnumPatternPositionType.Left || _positionType_1 == EnumPatternPositionType.Right) {
        _$9w = EnumPatternPositionType.Top;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
    } else {
        _$9w = EnumPatternPositionType.Left;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
    }
    var _$q8 = new WidgetDockRect();
    _$mV._m$F._$22(_$q8);
    if (_positionType_1 == EnumPatternPositionType.Left) {
        _$q8.right += _$cu;
    } else if (_positionType_1 == EnumPatternPositionType.Right) {
        _$q8.left += _$cu;
    } else if (_positionType_1 == EnumPatternPositionType.Top) {
        _$q8.bottom += _$cu;
    } else {
        _$q8.top += _$cu;
    }
    _$mV.m$N._$4q(_$cu);
    this._$6v(_$mV._m$F, _$q8, _positionType_1);
    _$mV._$5q();
    if (_positionType_1 == EnumPatternPositionType.Right || _positionType_1 == EnumPatternPositionType.Bottom) {
        _$cu = -_$cu;
    }
    this._$4n(_positionType_1, _$g1 + 1, _$cu);
    this._$6x(_$9w, _$ey, _$eB);
    this._$6x((_$9w + 2), _$ey, _$eB);
};
WidgetDockPatternBase.prototype._$4j = function (_m$F, _$ct, _$9c) {
    var rcPanel = new WidgetDockRect();
    var _$ql = new WidgetDockRect();
    var plt = new WidgetDockPoint();
    if (_m$F._m$F_1 != null || _m$F._m$F_2 != null) {
        if (_m$F._m$F_1 != null) {
            this._$4j(_m$F._m$F_1, _$ct, _$9c);
        }
        if (_m$F._m$F_2 != null) {
            this._$4j(_m$F._m$F_2, _$ct, _$9c);
        }
        if ((_m$F._m$F_1 != null) && (_m$F._m$F_2 != null) && (!_m$F._m$F_1._$8y) && (!_m$F._m$F_2._$8y)) {
            _m$F._$oy.getRect(rcPanel);
            plt.x = rcPanel.left;
            plt.y = rcPanel.top;
            if (_$9c == EnumPatternPositionType.Left || _$9c == EnumPatternPositionType.Right) {
                if (_$9c == EnumPatternPositionType.Left) {
                    plt.x = rcPanel.left + _$ct;
                } else {
                    plt.x = rcPanel.left - _$ct;
                }
            } else {
                plt.x = rcPanel.left;
                if (_$9c == EnumPatternPositionType.Top) {
                    plt.y = rcPanel.top + _$ct;
                } else {
                    plt.y = rcPanel.top - _$ct;
                }
            }
            _$ql.left = plt.x;
            _$ql.top = plt.y;
            _$ql.right = plt.x + WidgetDockPatternBase.getWidth(rcPanel);
            _$ql.bottom = plt.y + WidgetDockPatternBase.getHeight(rcPanel);
            _m$F._$oy._$6q(_$ql);
        }
        return;
    }
    if (!_m$F._$8y) {
        _m$F._floatPanel.getRect(rcPanel);
        plt.x = rcPanel.left;
        plt.y = rcPanel.top;
        if (_m$F._floatPanel._patternPositionType == EnumPatternPositionType.Left || _m$F._floatPanel._patternPositionType == EnumPatternPositionType.Right) {
            if (_m$F._floatPanel._patternPositionType == EnumPatternPositionType.Left) {
                plt.x = rcPanel.left + _$ct;
            } else {
                plt.x = rcPanel.left - _$ct;
            }
        } else {
            plt.x = rcPanel.left;
            if (_m$F._floatPanel._patternPositionType == EnumPatternPositionType.Top) {
                plt.y = rcPanel.top + _$ct;
            } else {
                plt.y = rcPanel.top - _$ct;
            }
        }
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + WidgetDockPatternBase.getWidth(rcPanel);
        _$ql.bottom = plt.y + WidgetDockPatternBase.getHeight(rcPanel);
        _m$F._floatPanel._$6q(_$ql);
    }
};
WidgetDockPatternBase.prototype._$4n = function (patternPositionType, _$dg, _$cY) {
    var panelNum = this._panelList[patternPositionType].getSize();
    var panel;
    for (var i = _$dg; i < panelNum; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        panel._$4i(this, patternPositionType, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$4o = function (patternPositionType, _$dg, _$cG, _$cY) {
    var panel;
    for (var i = _$dg; i <= _$cG; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        panel._$4i(this, patternPositionType, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$2K = function (patternPositionType, _$9a) {
    var _$ex;
    var windowRect = new WidgetDockRect();
    this.getWindowRect(windowRect);
    if (_$9a == WidgetDockPatternBase._$3S) {
        _$ex = windowRect.right - this._signLenList[2];
    } else if (_$9a == WidgetDockPatternBase._$5k) {
        _$ex = windowRect.left + this._signLenList[0];
    } else if (_$9a == WidgetDockPatternBase._$6M) {
        _$ex = windowRect.bottom - this._signLenList[3];
    } else {
        _$ex = windowRect.top + this._signLenList[1];
    }
    var panel;
    var rc = new WidgetDockRect();
    var panelNum = this._panelList[patternPositionType].getSize();
    for (var i = 0; i < panelNum; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        if (panel._isVisible) {
            panel.m$N.getRect(rc);
            if (_$9a == WidgetDockPatternBase._$3S) {
                _$ex = rc.left;
            } else if (_$9a == WidgetDockPatternBase._$5k) {
                _$ex = rc.right;
            } else if (_$9a == WidgetDockPatternBase._$6M) {
                _$ex = rc.top;
            } else {
                _$ex = rc.bottom;
            }
        }
    }
    return _$ex;
};
WidgetDockPatternBase.prototype._$6v = function (_m$F, _$q1, _$9c) {
    if (_m$F == null) return;
    if ((_m$F._m$F_1 != null) || (_m$F._m$F_2 != null)) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        _m$F._$1K(pd1, pd2, rc1, rc2);
        var b1 = false;
        var b2 = false;
        if ((rc1.left != rc1.right) || (rc1.top != rc1.bottom) || (rc1.left != -6000)) {
            b1 = true;
        }
        if ((rc2.left != rc2.right) || (rc2.top != rc2.bottom) || (rc2.left != -6000)) {
            b2 = true;
        }
        var _$gD;
        var _$qt = new WidgetDockRect();
        if (b1 && b2) {
            if (((_m$F._positionType_1 % 2) == 0 && (_$9c % 2) == 0) || (((_m$F._positionType_1 + 1) % 2) == 0 && (_$9c + 1) % 2 == 0)) {
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) {
                    _$gD = WidgetDockPatternBase.getWidth(_$q1) - WidgetDockPanel._$kt;
                } else {
                    _$gD = WidgetDockPatternBase.getHeight(_$q1) - WidgetDockPanel._$kt;
                }
                var id2 = (_$gD / (1 + _m$F._$br));
                var id1 = _$gD - id2;
                id1 = parseInt(id1);
                id2 = parseInt(id2);
                rc1.setRect(_$q1);
                rc2.setRect(_$q1);
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) {
                    rc1.right = rc1.left + id1;
                    rc2.left = rc2.right - id2;
                    _$qt.left = rc1.right;
                    _$qt.right = _$qt.left + WidgetDockPanel._$kt;
                    _$qt.top = _$q1.top;
                    _$qt.bottom = _$q1.bottom;
                } else {
                    rc1.bottom = rc1.top + id1;
                    rc2.top = rc2.bottom - id2;
                    _$qt.top = rc1.bottom;
                    _$qt.bottom = _$qt.top + WidgetDockPanel._$kt;
                    _$qt.left = _$q1.left;
                    _$qt.right = _$q1.right;
                }
                this._$6v(pd1[0], rc1, _$9c);
                this._$6v(pd2[0], rc2, _$9c);
                _m$F._$oy._$6q(_$qt);
            } else {
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) {
                    rc1.left = _$q1.left;
                    rc1.right = _$q1.right;
                    rc2.left = _$q1.left;
                    rc2.right = _$q1.right;
                    _$qt.left = _$q1.left;
                    _$qt.right = _$q1.right;
                    _$qt.top = rc1.bottom;
                    _$qt.bottom = _$qt.top + WidgetDockPanel._$kt;
                } else {
                    rc1.top = _$q1.top;
                    rc1.bottom = _$q1.bottom;
                    rc2.top = _$q1.top;
                    rc2.bottom = _$q1.bottom;
                    _$qt.top = _$q1.top;
                    _$qt.bottom = _$q1.bottom;
                    _$qt.left = rc1.right;
                    _$qt.right = _$qt.left + WidgetDockPanel._$kt;
                }
                if (pd1[0] != null) {
                    this._$6v(pd1[0], rc1, _$9c);
                }
                if (pd2[0] != null) {
                    this._$6v(pd2[0], rc2, _$9c);
                }
                if (_m$F._$oy != null) {
                    _m$F._$oy._$6q(_$qt);
                }
            }
        } else if (b1) {
            this._$6v(pd1[0], _$q1, _$9c);
        } else if (b2) {
            this._$6v(pd2[0], _$q1, _$9c);
        }
    } else {
        if (!_m$F._$8y) {
            _m$F._floatPanel._$6q(_$q1);
        }
    }
};
WidgetDockPatternBase._$5y = function (_$cm, _$q6) {
    WidgetDockPatternBase.resize(_$cm, null, _$q6.left, _$q6.top, WidgetDockPatternBase.getWidth(_$q6), WidgetDockPatternBase.getHeight(_$q6), 0);
};
WidgetDockPatternBase.prototype.getWindowRect = function (_rect) {
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
    _rect.right = iw;
    _rect.left = 0;
    _rect.bottom = ih;
    _rect.top = 0;
};
WidgetDockPatternBase.prototype._$5p = function (panel, index, patternPositionType, _$dX) {
    if (_$dX != 0) {
        if (_$dX > 0) {
            if (patternPositionType == EnumPatternPositionType.Top || patternPositionType == EnumPatternPositionType.Bottom) {
                this._$4m(panel, patternPositionType, index, false, 0, _$dX, null, false);
            } else {
                this._$4m(panel, patternPositionType, index, false, _$dX, 0, null, false);
            }
        } else {
            var _positionType_1;
            this._$4n(patternPositionType, index + 1, _$dX);
            var ilt, irb;
            var _$qt = new WidgetDockRect();
            _$qt.setRect(panel._rect);
            if (patternPositionType == EnumPatternPositionType.Right || patternPositionType == EnumPatternPositionType.Left) {
                _positionType_1 = EnumPatternPositionType.Top;
                ilt = panel._rect.top;
                irb = panel._rect.bottom;
                if (patternPositionType == EnumPatternPositionType.Left) {
                    _$qt.left = panel._rect.right;
                } else {
                    _$qt.left = panel._rect.left;
                }
                _$qt.right = _$qt.left;
            } else {
                _positionType_1 = EnumPatternPositionType.Left;
                ilt = panel._rect.left;
                irb = panel._rect.right;
                if (patternPositionType == EnumPatternPositionType.Top) {
                    _$qt.top = panel._rect.bottom;
                } else {
                    _$qt.top = panel._rect.top;
                }
                _$qt.bottom = _$qt.top;
            }
            panel.m$N._$r8(_$qt.left, _$qt.top, _$qt.right - _$qt.left, _$qt.bottom - _$qt.top);
            this._$6x(_positionType_1, ilt, irb);
            this._$6x((_positionType_1 + 2), ilt, irb);
            this.refreshFixedPanel();
        }
    }
};
WidgetDockPatternBase.prototype._$6x = function (patternPositionType, top, bottom) {
    var panel;
    var windowRect = new WidgetDockRect();
    this.getWindowRect(windowRect);
    for (var i = 0; i < this._panelList[patternPositionType].getSize(); i++) {
        panel = this._panelList[patternPositionType]._list[i];
        var _$dX = new Array(1);
        _$dX[0] = 0;
        panel._$6u(this, windowRect, patternPositionType, top, bottom, _$dX);
        this._$5p(panel, i, patternPositionType, _$dX[0]);
    }
};
WidgetDockPatternBase.prototype._$2J = function (patternPositionType, left, right) {
    var panelNum = this._panelList[patternPositionType].getSize();
    if (right == 0xffffffff || right > panelNum) {
        right = panelNum;
    }
    var panel;
    var ire = 0;
    for (var i = left; i < right; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        if (panel._isVisible) {
            if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
                ire += WidgetDockPatternBase.getWidth(panel._rect);
            } else {
                ire += WidgetDockPatternBase.getHeight(panel._rect);
            }
            ire += panel._$cf();
        }
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2I = function (patternPositionType, _$nd) {
    var ire = this._signLenList[patternPositionType];
    if (_$nd == null) {
        return ire;
    }
    var panelNum = this._panelList[patternPositionType].getSize();
    var panel;
    for (var i = 0; i < panelNum; i++) {
        panel = this._panelList[patternPositionType]._list[i];
        if (panel._isVisible) {
            if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
                ire += WidgetDockPatternBase.getWidth(panel._rect);
            } else {
                ire += WidgetDockPatternBase.getHeight(panel._rect);
            }
            ire += panel.m$N._$cf();
        }
        if (panel == _$nd) {
            break;
        }
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2d = function (_$mX, patternPositionType, _$nx, _$nz) {
    var rcf = new WidgetDockRect();
    rcf.setRect(_$nx._rect);
    if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Top) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.top;
    } else if (patternPositionType == EnumPatternPositionType.Bottom) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.bottom - _$nz.y;
    } else {
        _$mX._$kn = rcf.right - _$nz.x;
        _$mX._$kq = rcf.top;
    }
};
WidgetDockPatternBase._$2c = function (_$mX, _$q3, _$nz) {
    _$mX._$kn = _$q3.left;
    _$mX._$kq = _$q3.top;
    if (_$mX._$j1 == EnumPatternPositionType.Right) {
        _$mX._$kn = _$q3.right - _$nz.x;
    } else if (_$mX._$j1 == EnumPatternPositionType.Bottom) {
        _$mX._$kq = _$q3.bottom - _$nz.y;
    }
};
WidgetDockPatternBase.prototype._$1h = function (_$mX, _$nz, _$gK, _$el, _$qe, pt) {
    if (_$mX._floatPanel._pattern != this) {
        return true;
    }
    if (WidgetDockPatternBase.isInRect(_$qe, pt) && _$mX._$it) {
        var _$qh = new WidgetDockRect();
        _$mX._floatPanel._panelStateController._$2P(_$qh);
        var _$8n = WidgetDockPatternBase.isInRect(_$qh, pt);
        var _$8Q = _$mX._floatPanel._m$F._$3v(pt);
        if (_$8n || _$8Q) {
            _$mX._panelIndex = _$mX._$jr;
            _$mX._$ky = _$mX._m$F;
            _$mX._$j1 = _$mX._patternPositionType;
            _$nz.x = _$gK;
            _$nz.y = _$el;
            WidgetDockPatternBase._$2c(_$mX, _$qe, _$nz);
            if (_$8Q) {
                _$mX._floatPanel._$31(pt);
                _$mX._$iC = true;
            }
            _$mX._$j2 = 0xff;
            return false;
        } else {
            if ((_$mX._floatPanel._$jy != WidgetDockFloatPanel._$0X) || (_$mX._floatPanel._m$F._tabController == null) || (_$mX._floatPanel._m$F._tabController != null && _$mX._floatPanel._m$F._tabController._tabList.length < 2)) {
                _$mX._$j1 = 0xff;
                return true;
            } else {
                _$qe.top = _$qh.bottom;
                _$qe.bottom -= WidgetDockTabController._tabControllerHeightBase;
                var _$9i = WidgetDockPatternBase._$m(_$qe, pt);
                if (_$9i != 0xff) {
                    _$9i = parseInt((_$9i - 1) / 2);
                    _$mX._panelIndex = _$mX._$jr;
                    _$mX._$ky = _$mX._m$F;
                    if (_$9i == EnumPatternPositionType.Left || _$9i == EnumPatternPositionType.Right) {
                        _$nz.x = _$mX._floatPanel._$lK.x;
                        if (_$nz.x >= (_$qe.right - _$qe.left)) {
                            _$nz.x = _$nz.x / 2;
                        }
                        _$nz.y = _$qe.bottom - _$qe.top;
                    } else {
                        _$nz.y = _$mX._floatPanel._$lK.y;
                        if (_$nz.y > (_$qe.bottom - _$qe.top)) {
                            _$nz.y = _$nz.y / 2;
                        }
                    }
                    if (_$9i == EnumPatternPositionType.Left || _$9i == EnumPatternPositionType.Top) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.top;
                    } else if (_$9i == EnumPatternPositionType.Bottom) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.bottom - _$nz.y;
                    } else {
                        _$mX._$kn = _$qe.right - _$nz.x;
                        _$mX._$kq = _$qe.top;
                    }
                    _$mX._$j1 = _$mX._patternPositionType;
                    _$mX._$j2 = _$9i;
                    return false;
                }
            }
        }
    }
    return true;
};
WidgetDockPatternBase.prototype._$R = function (_$mX, floatPanel, pt, _$nz) {
    if (!this._$is) return 0xff;
    var windowRect = new WidgetDockRect();
    this.getWindowRect(windowRect);
    windowRect.right = windowRect.right - windowRect.top;
    windowRect.bottom = windowRect.bottom - windowRect.top;
    windowRect.left = 0;
    windowRect.top = 0;
    windowRect.left += this._signLenList[0];
    windowRect.right -= this._signLenList[2];
    windowRect.top += this._signLenList[1];
    windowRect.bottom -= this._signLenList[3];
    var _$qe = new WidgetDockRect();
    _$qe.setRect(_$mX._rect);
    var height = WidgetDockPatternBase.getHeight(_$qe);
    var width = WidgetDockPatternBase.getWidth(_$qe);
    var min = width < height ? width : height;
    _$mX._$iM = false;
    _$nz.x = width;
    _$nz.y = height;
    if (!this._$1h(_$mX, _$nz, width, height, _$qe, pt)) {
        return _$mX._$j1;
    }
    var _positionType_2 = WidgetDockPatternBase._$m(windowRect, pt);
    _$mX._panelIndex = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0;
    if ((_positionType_2 != 0xff) && ((_positionType_2 % 2) == 0)) {
        _$mX._$j1 = parseInt(_positionType_2 / 2);
        floatPanel._$2w(_$nz, min, windowRect, false);
        _$mX._$iM = true;
        WidgetDockPatternBase._$2c(_$mX, windowRect, _$nz);
        return _$mX._$j1;
    }
    var _$9z;
    var _$o4 = null;
    var _$pP = new Array(1);
    var _$gw = 0xff;
    _positionType_2 = 0xff;
    var _$d1 = new Array(1);
    for (var i = 0; i < 4; i++) {
        _$9z = this._$02(_$mX, i, pt, _$nz, min, _$pP, _$d1);
        if (_$9z != 0xff) {
            if ((((_$9z + 1) % 2) == 0) || _$d1[0] >= 0) {
                _$o4 = _$pP[0];
                _$gw = i;
                _positionType_2 = _$9z;
                if (_$d1[0] >= 0) {
                    _$mX._panelIndex = _$d1[0];
                }
                break;
            } else {
                _positionType_2 = _$9z;
                _$o4 = _$pP[0];
                _$gw = i;
            }
        }
    }
    var rcs = new WidgetDockRect();
    rcs.setRect(this._rect);
    var bme = false;
    if ((_$mX._floatPanel != null) && (_$mX._floatPanel == _$o4)) {
        _$mX._$j1 = 0xff;
        bme = true;
        if (!WidgetDockPatternBase.isInRect(rcs, pt)) {
            return 0xff;
        }
    }
    if (!bme && _positionType_2 != 0xff && ((_positionType_2 + 1) % 2 == 0)) {
        _$mX._$j1 = parseInt((_positionType_2 / 2));
        if (_$o4 != null) {
            floatPanel._$2w(_$nz, min, windowRect, true);
        } else {
            windowRect.left = windowRect.top = 0;
            windowRect.right = _$nz.x;
            windowRect.bottom = _$nz.y;
            floatPanel._$2w(_$nz, min, windowRect, false);
        }
        floatPanel._$69(_$gw, _$o4, parseInt((_positionType_2 / 2)));
    } else {
        _positionType_2 = WidgetDockPatternBase._$m(rcs, pt);
        if (_positionType_2 != 0xff) {
            _$mX._$j1 = parseInt((_positionType_2 / 2));
            floatPanel._$2w(_$nz, min, this._rect, false);
        }
        if (_positionType_2 != 0xff && ((_positionType_2 + 1) % 2 == 0)) {
            _$mX._panelIndex = 0xffffffff;
            _$mX._$ky = null;
            _$mX._$j1 = parseInt((_positionType_2 / 2));
            _$mX._$j2 = parseInt((_positionType_2 / 2));
            WidgetDockPatternBase._$2c(_$mX, rcs, _$nz);
        } else {
            _$mX._$j1 = 0xff;
        }
        _$mX._$iM = true;
    }
    return _$mX._$j1;
};
WidgetDockPatternBase.prototype._$02 = function (_$mX, patternPositionType, pt, _$nz, _$dk, _$oQ, _$d1) {
    if (this._panelList[patternPositionType] == null) {
        return 0xff;
    }
    var panel;
    var _$9z = 0xff;
    _$oQ[0] = null;
    var _$fZ = new Array(1);
    var panelNum = this._panelList[patternPositionType].getSize();
    for (var i = 0; i < panelNum; i++) {
        _$d1[0] = -1;
        panel = this._panelList[patternPositionType]._list[i];
        if (panel._isVisible) {
            _$9z = panel._$03(this, _$mX, pt, _$nz, _$dk, _$oQ, _$fZ);
            if ((((_$9z + 1) % 2) == 0 && _$9z != 0xff) || _$fZ[0] >= 1) {
                if (_$fZ[0] == 0 || _$fZ[0] == 1) {
                    _$d1[0] = i;
                    if (_$fZ[0] == 1) {
                        this._$2d(_$mX, patternPositionType, panel, _$nz);
                    }
                } else if (_$fZ[0] == 2) {
                    var _$8G = false;
                    for (var j = i + 1; j < panelNum; j++) {
                        var _$oG = this._panelList[patternPositionType]._list[j];
                        if (_$oG._isVisible) {
                            panel = _$oG;
                            _$8G = true;
                            break;
                        }
                    }
                    if (_$8G) this._$2d(_$mX, patternPositionType, panel, _$nz); else {
                        var _$ql = new WidgetDockRect();
                        _$ql.setRect(panel._rect);
                        if (patternPositionType == EnumPatternPositionType.Top) {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.bottom;
                        } else if (patternPositionType == EnumPatternPositionType.Left) {
                            _$mX._$kn = _$ql.right;
                            _$mX._$kq = _$ql.top;
                        } else if (patternPositionType == EnumPatternPositionType.Right) {
                            _$mX._$kn = _$ql.left - _$nz.x;
                            _$mX._$kq = _$ql.top;
                        } else {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.top - _$nz.y;
                        }
                    }
                    _$d1[0] = i + 1;
                }
                if (_$fZ[0] > 0) {
                    _$mX._$iM = true;
                } else {
                    _$mX._$iM = false;
                }
                return _$9z;
            }
        }
    }
    return _$9z;
};
WidgetDockPatternBase._$m = function (_$nv, pt) {
    var _positionType_2 = 0xff;
    if (WidgetDockPatternBase.isInRect(_$nv, pt)) {
        if ((pt.x - _$nv.left) > 0 && (pt.x - _$nv.left) <= WidgetDockPatternBase._$A) {
            _positionType_2 = WidgetDockPatternBase._$3d;
        } else if ((pt.y - _$nv.top) > 0 && (pt.y - _$nv.top) <= WidgetDockPatternBase._$A) {
            _positionType_2 = WidgetDockPatternBase._$3h;
        } else if ((pt.x - _$nv.right) < 0 && (pt.x - _$nv.right) >= -WidgetDockPatternBase._$A) {
            _positionType_2 = WidgetDockPatternBase._$3f;
        } else if ((pt.y - _$nv.bottom) < 0 && (pt.y - _$nv.bottom) >= -WidgetDockPatternBase._$A) {
            _positionType_2 = WidgetDockPatternBase._$3b;
        }
    } else {
        if ((pt.y > _$nv.top) && (pt.y < _$nv.bottom)) {
            if ((pt.x - _$nv.left) < 0 && (pt.x - _$nv.left) >= -WidgetDockPatternBase._$A) {
                _positionType_2 = WidgetDockPatternBase._$3e;
            } else if ((pt.x - _$nv.right) > 0 && (pt.x - _$nv.right) <= WidgetDockPatternBase._$A) {
                _positionType_2 = WidgetDockPatternBase._$3g;
            }
        } else if ((pt.x > _$nv.left) && (pt.x < _$nv.right)) {
            if ((pt.y - _$nv.top) < 0 && (pt.y - _$nv.top) >= -WidgetDockPatternBase._$A) {
                _positionType_2 = WidgetDockPatternBase._$3i;
            } else if ((pt.y - _$nv.bottom) > 0 && (pt.y - _$nv.bottom) <= WidgetDockPatternBase._$A) {
                _positionType_2 = WidgetDockPatternBase._$3c;
            }
        }
    }
    return _positionType_2;
};
WidgetDockPatternBase.prototype._$1Z = function (_$mX, _$mT, pt, patternPositionType, _$nz) {
    patternPositionType[0] = this._$R(_$mX, _$mT, pt, _$nz);
    if (patternPositionType[0] > 3 || patternPositionType[0] < 0) {
        return null;
    }
    return this;
};
WidgetDockPatternBase.prototype._$1 = function (floatPanel) {
    if (this._floatPanel != null && this._floatPanel != floatPanel) {
        this._floatPanel._$r6(false);
    }
    floatPanel._$r6(true);
    this._floatPanel = floatPanel;
};
WidgetDockPatternBase.prototype._$bG = function () {
    return this._$he;
};
WidgetDockPatternBase.prototype.add = function (com) {
};
WidgetDockPatternBase.prototype._$d = function (com) {
};
WidgetDockPatternBase.prototype._$5E = function (com) {
};
WidgetDockPatternBase.getWidth = function (rc) {
    return (rc.right - rc.left);
};
WidgetDockPatternBase.getHeight = function (rc) {
    return (rc.bottom - rc.top);
};
WidgetDockPatternBase._$5s = function (com, rc) {
    var pt = new WidgetDockPoint();
    pt.x = rc.left;
    pt.y = rc.top;
    _$6a(com, pt);
    rc.left = pt.x;
    rc.top = pt.y;
    pt.x = rc.right;
    pt.y = rc.bottom;
    _$6a(com, pt);
    rc.right = pt.x;
    rc.bottom = pt.y;
};
WidgetDockPatternBase.isInRect = function (_$qe, pt) {
    if ((pt.x > _$qe.left) && (pt.x < _$qe.right) && (pt.y > _$qe.top) && (pt.y < _$qe.bottom)) {
        return true;
    }
    return false;
};
WidgetDockPatternBase._$0j = function (_$cm, pt) {
    var _$pG = _$cm._$c0();
    pt.x = pt.x + _$pG.x;
    pt.y = pt.y + _$pG.y;
};
WidgetDockPatternBase._$6a = function (_$cm, pt) {
    var _$pG = _$cm._$c0();
    pt.x = pt.x - _$pG.x;
    pt.y = pt.y - _$pG.y;
};
WidgetDockPatternBase.resetRect = function (rc) {
    rc.left = rc.top = rc.right = rc.bottom = 0;
};
WidgetDockPatternBase._$5r = function (_$cr, rc) {
    var _$pL = _$cr._$c0();
    rc.left = rc.left + _$pL.x;
    rc.right = rc.right + _$pL.x;
    rc.top += _$pL.y;
    rc.bottom += _$pL.y;
};
WidgetDockPatternBase.prototype._$1P = function (floatPanel, title, patternList, _$cD, _$dg, m$FList, _$nr) {
    m$FList[0] = m$FList[1] = null;
    var _$eQ = new Array(1);
    for (var i = 0; i < 4; i++) {
        var len = this._panelList[i].getSize();
        var panel;
        for (var j = 0; j < len; j++) {
            panel = this._panelList[i]._list[j];
            var _m$F = this._$1J(floatPanel, title, panel._m$F, _$eQ, _$nr);
            if (_m$F != null && panel._$k9 == 0) {
                if ((_$eQ[0] & WidgetDockFloatPanel._$1A) > 0) {
                    _$cD[0] = i;
                    _$dg[0] = j;
                    m$FList[0] = _m$F;
                    patternList[0] = this;
                } else {
                    _$cD[1] = i;
                    _$dg[1] = j;
                    m$FList[1] = _m$F;
                    patternList[1] = this;
                }
                this._$1O(floatPanel, title, m$FList, _$cD, _$dg, patternList, _$eQ);
                return _$eQ[0] & WidgetDockFloatPanel._$1D;
            }
        }
    }
    this._$1O(floatPanel, title, m$FList, _$cD, _$dg, patternList, _$eQ);
    return _$eQ[0] & WidgetDockFloatPanel._$1D;
};
WidgetDockPatternBase.prototype._$1O = function (floatPanel, title, _$nO, _$dA, _$dC, patternList, _$cX) {
    floatPanel._window._$1O(floatPanel, title, _$nO, _$dA, _$dC, patternList, _$cX);
};
WidgetDockPatternBase.prototype._$1J = function (floatPanel, title, _m$F, _$cX, _$nr) {
    if (_m$F == null) return null;
    var _$pO = null;
    if (_m$F._m$F_1 != null) {
        _$pO = this._$1J(floatPanel, title, _m$F._m$F_1, _$cX, _$nr);
    }
    if (_$pO != null) return _$pO;
    if (_m$F._m$F_2 != null) {
        return this._$1J(floatPanel, title, _m$F._m$F_2, _$cX, _$nr);
    }
    if (_m$F._title != null && title == _m$F._title) {
        return _m$F;
    } else if (_m$F._$57List != null && _m$F._$57List.length > 0) {
        var _$e1 = _m$F._$57List.length;
        for (var i = 0; i < _$e1; i++) {
            var _$rZ = _m$F._$57List[i]._title;
            if (_$rZ != null && (title == _$rZ)) {
                var m$57 = _m$F._$57List[i];
                _$cX[0] = m$57._$aP;
                if (_$nr != null) {
                    _$nr[0] = m$57;
                }
                m$57._floatPanel = floatPanel;
                m$57._title = null;
                return _m$F;
            }
        }
    }
    return null;
};
WidgetDockPatternBase.prototype.setSignLen = function (signLenAry) {
    var d;
    for (var i = 0; i < 4; i++) {
        signLenAry[i] = 0;
        if (this._elementList[i] != null) {
            if (i == 1 || i == 3) {
                d = parseInt(this._elementList[i].style.height);
                signLenAry[i] = d;
            } else {
                signLenAry[i] = parseInt(this._elementList[i].style.width);
            }
        }
    }
};
WidgetDockPatternBase.prototype.addFixedPanelWithCenter = function (element) {
    this._elementWithCenter = element;
    this.refreshFixedPanel();
};
WidgetDockPatternBase.prototype._$qF = function (_$a0) {
    if (_$a0 == null) return;
    for (var i = 0; i < 4; i++) {
        if (this._elementList[i] == _$a0) {
            this._elementList[i] = null;
            this._$5z();
            this.refreshFixedPanel();
            return;
        }
    }
    if (this._elementWithCenter != null) {
    }
};
WidgetDockPatternBase.prototype.addFixedPanel = function (element, type) {
    var left, top, width, height;
    var windowRect = new WidgetDockRect();
    this.getWindowRect(windowRect);
    if (type == EnumPatternPositionType.Center) {
        this.addFixedPanelWithCenter(element);
        return;
    } else if (type == EnumPatternPositionType.Left) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = windowRect.bottom - windowRect.top - (this._signLenList[1] + this._signLenList[3]);
        left = 0;
        top = this._signLenList[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Right) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = windowRect.bottom - windowRect.top - this._signLenList[1] - this._signLenList[3];
        left = this._rect.right - width;
        top = this._signLenList[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Top) {
        width = windowRect.right - windowRect.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = 0;
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Bottom) {
        width = windowRect.right - windowRect.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = windowRect.bottom - windowRect.top - height;
        this.addFixedPanelWithType(type, element, 0, top, width, height);
        if (this._elementList[EnumPatternPositionType.Left] != null) {
            var element = this._elementList[EnumPatternPositionType.Left];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController.getElementLeft(element);
            var top = WidgetDockElementController.getElementTop(element);
            WidgetDockElementController.setElementLeftTopSize(element, left, top, width, height);
        }
        if (this._elementList[EnumPatternPositionType.Right] != null) {
            var element = this._elementList[EnumPatternPositionType.Right];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController.getElementLeft(element);
            var top = WidgetDockElementController.getElementTop(element);
            WidgetDockElementController.setElementLeftTopSize(element, left, top, width, height);
        }
    }
    this.refreshFixedPanel();
};
WidgetDockPatternBase.prototype._$5z = function () {
    var _$gG = new Array(4);
    var _$e6;
    this.setSignLen(_$gG);
    if ((_$gG[1] - this._signLenList[1]) != 0 || (_$gG[0] - this._signLenList[0]) != 0 || (_$gG[2] - this._signLenList[2]) != 0 || (_$gG[3] - this._signLenList[3]) != 0) {
        var k;
        var _$du;
        for (k = 1; k < 4; k = k + 2) {
            if (_$gG[k] - this._signLenList[k] != 0) {
                _$e6 = _$gG[k] - this._signLenList[k];
                _$du = _$e6 - (this._rect.bottom - this._rect.top);
                this._signLenList[k] = _$gG[k];
                this._$4n(k, 0, _$e6);
                this._$6x(EnumPatternPositionType.Left, -32767, 32767);
                this._$6x(EnumPatternPositionType.Right, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(EnumPatternPositionType.Top, -_$du, _$eE, _$fA);
                }
            }
        }
        for (k = 0; k < 3; k = k + 2) {
            if ((_$gG[k] - this._signLenList[k]) != 0) {
                _$e6 = _$gG[k] - this._signLenList[k];
                _$du = _$e6 - (this._rect.right - this._rect.left);
                this._signLenList[k] = _$gG[k];
                this._$4n(k, 0, _$e6);
                this._$6x(EnumPatternPositionType.Top, -32767, 32767);
                this._$6x(EnumPatternPositionType.Bottom, -32767, 32767);
                if (_$du > 0) {
                    var _$eE = new Array(1);
                    var _$fA = new Array(1);
                    this._$6E(EnumPatternPositionType.Left, -_$du, _$eE, _$fA);
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$rB = function (floatPanel, sch) {
    floatPanel._$rB(sch);
};
WidgetDockPatternBase.prototype._$s8 = function (floatPanel) {
    floatPanel._$s8();
};
WidgetDockPatternBase.prototype.loadLayout = function (layoutReader) {
    var windowLeft, windowTop, windowRight, windowBottom;
    windowLeft = parseInt(layoutReader.read());
    windowTop = parseInt(layoutReader.read());
    windowRight = parseInt(layoutReader.read());
    windowBottom = parseInt(layoutReader.read());
    var _$gh = 1;
    if (this._isMain) {
        _$gh = 4;
    } else {
        this.setLocationSize(windowLeft, windowTop, windowRight, windowBottom);
    }
    var secIndexStr;
    var readStr;
    var readInt;
    for (var i = 0; i < _$gh; i++) {
        this._floatPanelControllerList[i].reset();
        var _secIndex = 0;
        while (true) {
            secIndexStr = "SEC" + _secIndex;
            readStr = layoutReader.read();
            if (readStr == secIndexStr) {
                var _$pg = new _$M();
                _$pg._$g6 = 0;
                this._floatPanelControllerList[i].insert(_$pg, _secIndex);
                readInt = parseInt(layoutReader.read());
                _$pg._widthSec = readInt;
                readInt = parseInt(layoutReader.read());
                _$pg._heightSec = readInt;
                readInt = parseInt(layoutReader.read());
                _$pg._$eF = readInt;
                if (_$pg._$eF < 0) _$pg._$eF = -1;
                readInt = parseInt(layoutReader.read());
                _$pg._$fB = readInt;
                if (_$pg._$fB < 0) _$pg._$fB = -1;
                _$pg._m$F = new _$F();
                readInt = parseInt(layoutReader.read());
                if (readInt == 0) {
                    readStr = layoutReader.read();
                    if (readStr == "ROOTBLOCK") {
                        this._$3Z(layoutReader, _$pg._m$F);
                    } else break;
                } else if (readInt == 1 || readInt == 2) {
                    readStr = layoutReader.read();
                    if (readStr == "ROOTBLOCK") {
                        _$pg._$g6 = readInt;
                        this._$42(layoutReader, _$pg._m$F);
                    } else break;
                }
                _secIndex++;
            } else break;
        }
    }
    if (this._isMain) {
        this._$78(0, 1, true, true);
        this._$78(0, 3, false, true);
        this._$78(2, 1, true, false);
        this._$78(2, 3, false, false);
    }
    for (var i = 0; i < _$gh; i++) {
        var _$ee = this._panelList[i].getSize();
        var _$gl;
        var _$8S;
        if (i == 0 || i == 2) {
            _$gl = 1;
            if (i == 0) _$8S = true; else _$8S = false;
        } else {
            _$gl = 0;
            if (i == 1) _$8S = true; else _$8S = false;
        }
        var _$pf;
        if (this._isMain) {
            for (var j = 0; j < 2; j++) {
                var _$fH = this._floatPanelControllerList[_$gl + 2 * j].getSize();
                for (var k = 0; k < _$fH; k++) {
                    _$pf = this._floatPanelControllerList[_$gl + 2 * j]._list[k];
                    if (_$8S) {
                        _$pf._$eF = _$pf._$eF + _$ee;
                    } else {
                        _$pf._$fB = _$pf._$fB + _$ee;
                    }
                }
            }
        }
    }
    for (var i = 0; i < _$gh; i++) {
        var _$e1 = this._floatPanelControllerList[i].getSize();
        var _$e3 = this._panelList[i].getSize();
        for (var j = 0; j < _$e1; j++) {
            var _$pf = this._floatPanelControllerList[i]._list[j];
            _$pf._$eq = _$e3;
            var panel = null;
            if (_$pf._$g6 == 0) {
                panel = new WidgetDockPanel();
            } else if (_$pf._$g6 == 1) {
                panel = new WidgetDockPanelState();
            } else {
                panel = new _$4c();
            }
            _$pf._$o2 = panel;
            panel._rect.left = panel._rect.top = 0;
            panel._rect.right = _$pf._widthSec;
            panel._rect.bottom = _$pf._heightSec;
            panel._isVisible = false;
            panel._m$F = _$pf._m$F;
            this._panelList[i].insert(panel, _$e3);
            _$e3++;
        }
    }
    for (var i = 0; i < _$gh; i++) {
        var _$e1 = this._floatPanelControllerList[i].getSize();
        var _$ou, _$p6;
        if (i == 0 || i == 2) {
            _$ou = this._panelList[1];
            _$p6 = this._panelList[3];
        } else {
            _$ou = this._panelList[0];
            _$p6 = this._panelList[2];
        }
        if (this._isMain) {
            for (var j = 0; j < _$e1; j++) {
                var _$pf = this._floatPanelControllerList[i]._list[j];
                if (_$pf._$eF != -1) {
                    _$pf._$o2._$kR = _$ou._list[_$pf._$eF];
                } else {
                    _$pf._$o2._$kR = null;
                }
                if (_$pf._$fB != -1) {
                    _$pf._$o2._$l8 = _$p6._list[_$pf._$fB];
                } else {
                    _$pf._$o2._$l8 = null;
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$0b = function (patternPositionPanelNumList, positionNum, floatPanelController) {
    if (floatPanelController == null) return;
    var _$dD = new Array(4);
    for (var i = 0; i < positionNum; i++) {
        _$dD[i] = this._panelList[i].getSize();
    }
    var _$fz = floatPanelController.getSize();
    for (var nn = 0; nn < _$fz; nn++) {
        var _$si = floatPanelController._list[nn].getTitle();
        var _$8G = false;
        for (var i = 0; i < positionNum; i++) {
            if (_$8G) break;
            for (var s = patternPositionPanelNumList[i]; s < _$dD[i]; s++) {
                var pbf = this._$1N(_$si, this._panelList[i]._list[s]._m$F);
                if (pbf != null) {
                    _$8G = true;
                    this._$55(pbf, null, _$si, i, s);
                    _$dD[i] = this._panelList[i].getSize();
                    break;
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$1N = function (title, _m$F) {
    if (_m$F == null) {
        return null;
    }
    var _$pO = null;
    if (_m$F._m$F_1 != null) {
        _$pO = this._$1N(title, _m$F._m$F_1);
    }
    if (_$pO != null) {
        return _$pO;
    }
    if (_m$F._m$F_2 != null) {
        return this._$1N(title, _m$F._m$F_2);
    }
    if (_m$F._title != null && _m$F._title.lastIndexOf(title) == 0) {
        return _m$F;
    } else if (_m$F._$57List != null && _m$F._$57List.length > 0) {
        var _$e1 = _m$F._$57List.length;
        for (var i = 0; i < _$e1; i++) {
            var _$so = _m$F._$57List[i]._title;
            if (_$so != null && _$so.lastIndexOf(title) == 0) {
                return _m$F;
            }
        }
    }
    return null;
};
WidgetDockPatternBase.prototype._$78 = function (_$cD, _$cZ, _$81, _$84) {
    var _$py, _$oC;
    _$py = this._floatPanelControllerList[_$cD];
    _$oC = this._floatPanelControllerList[_$cZ];
    var _$e1 = _$py.getSize();
    var _$eY = _$oC.getSize();
    var _$eq, _$eZ;
    _$eq = 0;
    _$eZ = -1;
    var _$pt, _$oz;
    while (_$eq < _$e1) {
        var _$pf = _$py._list[_$eq];
        if (_$81) _$pt = _$pf._$eF; else _$pt = _$pf._$fB;
        if ((_$pt) > (_$eY - 1)) _$pt = (_$eY - 1);
        if ((_$pt) < _$eZ) _$pt = _$eZ;
        if (_$81) _$pf._$eF = _$pt; else _$pf._$fB = _$pt;
        if ((_$pt) != _$eZ) {
            var _$ei = (_$pt) - _$eZ;
            var s;
            for (s = 0; s < _$ei; s++) {
                var _$oA = _$oC._list[_$eZ + 1 + s];
                if (_$84) _$oz = _$oA._$eF; else _$oz = _$oA._$fB;
                _$oz = _$eq - 1;
                if (_$84) _$oA._$eF = _$oz; else _$oA._$fB = _$oz;
            }
            _$eZ = _$pt;
        } else {
            if ((_$eZ + 1) < _$eY) {
                var _$oA = _$oC._list[_$eZ + 1];
                if (_$84) _$oz = _$oA._$eF; else _$oz = _$oA._$fB;
                if (_$oz < _$eq) _$oz = _$eq;
                if (_$oz > (_$e1 - 1)) _$oz = _$e1 - 1;
                if (_$84) _$oA._$eF = _$oz; else _$oA._$fB = _$oz;
                var _$ei = (_$oz) - _$eq;
                var s;
                for (s = 0; s < _$ei; s++) {
                    var panel = _$py._list[_$eq + 1 + s];
                    if (_$81) panel._$eF = _$eZ; else panel._$fB = _$eZ;
                }
                _$eZ += 1;
                _$eq += _$ei;
            }
        }
        _$eq++;
    }
    var i;
    for (i = (_$eZ + 1); i < (_$eY - _$eZ - 1); i++) {
        var _$oA = _$oC._list[i];
        if (_$84) _$oA._$eF = _$eq - 1; else _$oA._$fB = _$eq - 1;
    }
};
WidgetDockPatternBase.prototype._$42 = function (layoutReader, _m$F) {
};
WidgetDockPatternBase.prototype._$3Z = function (layoutReader, _m$F) {
    var _$h2 = parseInt(layoutReader.read());
    _m$F._$br = (_$h2 / 1000.0);
    _m$F._$8y = true;
    var _$h3 = 0;
    var _$rV = layoutReader.read();
    var _$nX;
    if (_$rV == "LEFTBLOCK") {
        _$h2 = 0;
        _$nX = new _$F();
        _m$F._m$F_1 = _$nX;
        _$nX._m$FParent = _m$F;
        this._$3Z(layoutReader, _$nX);
    } else {
        _$h2 = 1;
    }
    _$rV = layoutReader.read();
    if (_$rV == "RIGHTBLOCK") {
        _$h3 = 0;
        _$nX = new _$F();
        _m$F._m$F_2 = _$nX;
        _$nX._m$FParent = _m$F;
        this._$3Z(layoutReader, _$nX);
    } else {
        _$h3 = 1;
    }
    if (_$h2 == 1 && _$h3 == 1) {
        this._$3X(layoutReader, _m$F);
    }
    _$h2 = parseInt(layoutReader.read());
    _m$F._positionType_1 = ((_$h2 >> 8) & 0xff);
    _m$F._positionType_2 = ((_$h2 >> 16) & 0xff);
};
WidgetDockPatternBase.prototype._$3X = function (layoutReader, _m$F) {
    var len = parseInt(layoutReader.read());
    for (var i = 0; i < len; i++) {
        var title = layoutReader.read();
        var _$aS = parseInt(layoutReader.read());
        var pt = new WidgetDockPoint();
        var x, y;
        x = 0;
        y = 0;
        if (this._isMain) {
            pt.x = parseInt(layoutReader.read());
            pt.y = parseInt(layoutReader.read());
            x = parseInt(layoutReader.read());
            y = parseInt(layoutReader.read());
        }
        _m$F._$e(title, _$aS, pt, x, y);
    }
};
WidgetDockPatternBase.prototype._$4T = function (m$59) {
    if (WidgetDockPatternBase._m$59 != null) {
        WidgetDockPatternBase._m$59._$au();
        WidgetDockPatternBase._m$59 = null;
    }
    WidgetDockPatternBase._m$59 = m$59;
};
WidgetDockPatternBase.prototype.mouseMove = function (e) {
    if (WidgetDockPatternBase._m$59 != null) {
        WidgetDockPatternBase._m$59.mouseMove(e);
    }
};
WidgetDockPatternBase.prototype._$09 = function (e) {
    if (WidgetDockPatternBase._m$59 != null) {
        WidgetDockPatternBase._m$59._$09(e);
    }
};
WidgetDockPatternBase.prototype._$8 = function (patternPositionType, floatPanel) {
    var _$g1 = 0;
    var _$g7 = WidgetDockPanelStatePanel._$2V;
    if (this._$lk[patternPositionType] != null) {
        _$g1 = this._$2F(patternPositionType, this._$lk[patternPositionType]);
        if (this._$lk[patternPositionType]._isVisible == false) {
            this._$9(patternPositionType, _$g1, _$g7);
        }
    } else {
        this._$9(patternPositionType, _$g1, _$g7);
    }
    this._$lk[patternPositionType]._$8(floatPanel);
};
WidgetDockPatternBase.prototype._$j = function (patternPositionType) {
    var panel = this._$lk[patternPositionType];
    if (panel == null) {
        return;
    }
    var _$oU = panel._$0s();
    this._$5M(patternPositionType, null);
    var ino = _$oU.length;
    for (var i = 0; i < ino; i++) {
        this._$8(patternPositionType, _$oU[i]._floatPanel);
    }
};
WidgetDockPatternBase.prototype._$5M = function (patternPositionType, floatPanel) {
    var panel = this._$lk[patternPositionType];
    if (panel == null) return;
    var ino = this._$lk[patternPositionType]._$5M(floatPanel);
    if (ino > 0) return;
    if (panel._isVisible) {
        var rcPanel = new WidgetDockRect();
        panel._$2B(null, rcPanel);
        panel._$qI();
        var _positionType_1;
        var _$dt;
        if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
            _$dt = rcPanel.right - rcPanel.left;
            _positionType_1 = EnumPatternPositionType.Top;
        } else {
            _$dt = rcPanel.bottom - rcPanel.top;
            _positionType_1 = EnumPatternPositionType.Left;
            rcPanel.top = rcPanel.left;
            rcPanel.bottom = rcPanel.right;
        }
        var _$e5 = this._$2F(patternPositionType, panel);
        this._$4n(patternPositionType, _$e5 + 1, -(_$dt + panel._$cf()));
        panel.setVisible(false);
        this._$6x(_positionType_1, rcPanel.top, rcPanel.bottom);
        this._$6x((_positionType_1 + 2), rcPanel.top, rcPanel.bottom);
        this.refreshFixedPanel();
    }
    var _$g1 = this._$2F(patternPositionType, panel);
    var _$pU;
    var _$pj = this._$lk[patternPositionType];
    this._$lk[patternPositionType] = null;
    this._panelList[patternPositionType].delete(_$g1);
    for (var i = _$g1; i < this._panelList[patternPositionType].getSize(); i++) {
        _$pU = this._panelList[patternPositionType]._list[i];
        var pb = _$pU._m$F;
        this._$6m(pb, i);
    }
    var _$oF;
    if (_$g1 == 0) {
        _$oF = null;
    } else {
        _$oF = this._panelList[patternPositionType]._list[_$g1 - 1];
    }
    if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
        this._$5L(EnumPatternPositionType.Top, _$pj, _$oF);
        this._$5L(EnumPatternPositionType.Bottom, _$pj, _$oF);
    } else {
        this._$5L(EnumPatternPositionType.Left, _$pj, _$oF);
        this._$5L(EnumPatternPositionType.Right, _$pj, _$oF);
    }
};
WidgetDockPatternBase.prototype._$9 = function (patternPositionType, _$dg, iWH) {
    if (patternPositionType < 0 || patternPositionType > 3) return;
    var panel = null;
    var _$8T = false;
    var _$nm = null;
    var _$8X = false;
    if (this._$lk[patternPositionType] == null) {
        panel = new WidgetDockPanelStatePanel();
        panel._patternPositionType = patternPositionType;
        this._$lk[patternPositionType] = panel;
        _$8X = true;
    }
    if (_$8X) {
        if (_$dg != 0xffffffff) {
            _$8T = true;
            if (_$dg > 0) {
                _$nm = this._panelList[patternPositionType]._list[_$dg - 1];
                panel._$kR = _$nm._$kR;
                panel._$l8 = _$nm._$l8;
            } else {
                panel._$kR = null;
                panel._$l8 = null;
            }
        } else {
            if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
                panel._$kR = this._$2j(EnumPatternPositionType.Top);
                panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
            } else {
                panel._$kR = this._$2j(EnumPatternPositionType.Left);
                panel._$l8 = this._$2j(EnumPatternPositionType.Right);
            }
            _$dg = this._panelList[patternPositionType].getSize();
        }
        panel._m$F = null;
        panel._$ah(this, patternPositionType);
        this._panelList[patternPositionType].insert(panel, _$dg);
        var _$pU;
        for (var i = _$dg + 1; i < this._panelList[patternPositionType].getSize(); i++) {
            _$pU = this._panelList[patternPositionType]._list[i];
            this._$6m(_$pU._m$F, i);
        }
    } else {
        panel = this._$lk[patternPositionType];
        panel._$ah(this, patternPositionType);
    }
    if (_$8T) {
        if (patternPositionType == EnumPatternPositionType.Bottom) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, false);
        } else if (patternPositionType == EnumPatternPositionType.Top) {
            this._$W(EnumPatternPositionType.Left, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Right, panel, _$nm, true);
        } else if (patternPositionType == EnumPatternPositionType.Left) {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, true);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, true);
        } else {
            this._$W(EnumPatternPositionType.Top, panel, _$nm, false);
            this._$W(EnumPatternPositionType.Bottom, panel, _$nm, false);
        }
    }
    this._$4m(panel, patternPositionType, _$dg, false, iWH, iWH, null, true);
    panel._isVisible = true;
};
WidgetDockPatternBase.prototype._$5A = function () {
    for (var i = 0; i < 4; i++) {
        if (this._$lk[i] != null) {
            this._$lk[i]._$5A();
        }
    }
};
WidgetDockPatternBase.prototype._$5N = function () {
    if (WidgetDockPatternBase._m$59 != null) {
        WidgetDockPatternBase._m$59._$au();
        WidgetDockPatternBase._m$59 = null;
    }
};
WidgetDockPatternBase.prototype._$6t = function (floatPanel) {
    if (floatPanel._$kj > WidgetDockFloatPanel._$q) this._$lk[floatPanel._patternPositionType]._$5b(floatPanel); else {
        this._$lk[floatPanel._$kj]._$5b(floatPanel);
    }
};
WidgetDockPatternBase.prototype._$0f = function (_$nF, _$nU, _$nz) {
    var _$nm = null;
    var _$ot = null;
    var _$p5 = null;
    if (_$nF._panelIndex > 0 && _$nF._panelIndex != 0xffffffff) {
        _$nm = this._panelList[_$nU[0]]._list[_$nF._panelIndex - 1];
        _$ot = _$nm._$kR;
        _$p5 = _$nm._$l8;
    }
    var _$oY;
    var _$oZ;
    var _$eH;
    var _$fD;
    if ((_$nU[0] == EnumPatternPositionType.Top) || (_$nU[0] == EnumPatternPositionType.Bottom)) {
        _$oY = this._$lk[EnumPatternPositionType.Left];
        _$oZ = this._$lk[EnumPatternPositionType.Right];
        _$eH = EnumPatternPositionType.Left;
        _$fD = EnumPatternPositionType.Right;
    } else {
        _$oY = this._$lk[EnumPatternPositionType.Top];
        _$oZ = this._$lk[EnumPatternPositionType.Bottom];
        _$eH = EnumPatternPositionType.Top;
        _$fD = EnumPatternPositionType.Bottom;
    }
    var _$eG = -1;
    var _$fC = -1;
    if (_$nF._panelIndex == -1 || _$nF._panelIndex == 0xffffffff) {
        _$eG = 0xFFFF;
        _$fC = 0xFFFF;
    }
    if (_$ot != null) {
        _$eG = this._$2F(_$eH, _$ot);
    }
    if (_$p5 != null) {
        _$fC = this._$2F(_$fD, _$p5);
    }
    var _$fq = -2;
    var _$fr = -2;
    if (_$oY != null) {
        _$fq = this._$2F(_$eH, _$oY);
    }
    if (_$oZ != null) {
        _$fr = this._$2F(_$fD, _$oZ);
    }
    var _$fs;
    if (this._$lk[_$nU[0]] == null) {
        _$fs = -2;
    } else {
        _$fs = this._$2F(_$nU[0], this._$lk[_$nU[0]]);
    }
    var _$f0 = _$nF._panelIndex;
    if (_$f0 == 0xFFFFFFFF) {
        _$f0 = 0xFFFF;
    }
    if (_$nF._$it) {
        if (_$eG >= _$fq && _$fC >= _$fr) {
            if (_$f0 > _$fs) {
                return;
            }
        }
        if (_$fs == -2) {
            if ((_$nU[0] == EnumPatternPositionType.Top) || (_$nU[0] == EnumPatternPositionType.Bottom)) {
                if (_$fq >= 0 && _$eG < _$fq && _$nz.x > 20) {
                    _$nF._$kn += 20;
                    _$nz.x -= 20;
                }
                if (_$fr >= 0 && _$fC < _$fr && _$nz.x > 20) {
                    _$nz.x -= 20;
                }
            } else {
                if (_$fq >= 0 && _$eG < _$fq && _$nz.y > 20) {
                    _$nF._$kq += 20;
                    _$nz.y -= 20;
                }
                if (_$fr >= 0 && _$fC < _$fr && _$nz.y > 20) {
                    _$nz.y -= 20;
                }
            }
            return;
        }
    } else {
        if (_$fs == -2) {
            if (_$eG >= _$fq && _$fC >= _$fr) {
                return;
            }
            if (_$eG == -1 && _$fC == -1) {
                return;
            }
        } else {
            if (_$fs >= _$f0 || _$f0 == 0xFFFF) {
                return;
            }
            if (_$eG >= _$fq && _$fC >= _$fr) {
                return;
            }
        }
    }
    _$nU[0] = 0xff;
    _$nF._$j1 = 0xff;
    return;
};
WidgetDockPatternBase._$6y = function (styleFont, title, _$fE, width, _$cy, _$dc, element) {
    var _$r0 = "";
    var size = new WidgetDockSize();
    if (_$fE < width) {
        _$fE = _$fE - 2 * _$cy - 3;
        _$fE -= _$dc;
        if (_$fE < 0) {
            return "";
        } else {
            var _$8p = true;
            for (var j = 0; j < 3; j++) {
                _$r0 = _$r0 + ".";
                WidgetDockElementController.getOffsetSize(size, styleFont, _$r0, element);
                if (size.width > _$fE) {
                    return _$r0;
                }
            }
            if (_$8p) {
                var _$ew = title.length;
                for (var j = 0; j < _$ew; j++) {
                    var vc = title.slice(0, j + 1) + _$r0;
                    WidgetDockElementController.getOffsetSize(size, styleFont, vc, element);
                    if (size.width > _$fE) {
                        return vc;
                    }
                }
            }
        }
    }
    return title;
};
