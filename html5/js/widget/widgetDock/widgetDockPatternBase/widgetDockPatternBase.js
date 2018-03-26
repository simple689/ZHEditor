function WidgetDockPatternBase(isMain) {
    if (isMain) {
        this._$lk = new Array(4);
    }
    this._$it = true;
    this._$is = false;
    this._$iW = false;
    this._patternPositionList = new Array(4);
    this._$lo = null;
    this._$je = 0;
    this._elementWithCenter = null;
    this._elementWithType = new Array(4);
    this._$jO = 0;
    this._$he = null;
    this._$i3 = null;
    this._floatPanelControllerList = new Array(4);
    this._$jv = 0;
    this._signLenAry = new Array(4);
    for (var k = 0; k < 4; k++) {
        this._patternPositionList[k] = new WidgetDockListController();
        this._floatPanelControllerList[k] = new WidgetDockListController();
        this._signLenAry[k] = 0;
        this._elementWithType[k] = null;
    }
    this.width = 0;
    this.height = 0;
    this._isMain = isMain;
    this._elementWithCenter = null;
    this._rect = new WidgetDockRect();
    WidgetDockPatternBase.resetRect(this._rect);
    this._rect.left = -4000;
    this._rect.right = -4000;
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
WidgetDockPatternBase._$45 = 16;
WidgetDockPatternBase._$A = 12;
WidgetDockPatternBase._$61 = 0;
WidgetDockPatternBase._$62 = 1;
WidgetDockPatternBase._$l2 = null;
WidgetDockPatternBase._$k1 = 0;
WidgetDockPatternBase._$ib = true;
WidgetDockPatternBase.prototype._$3z = function () {
    this.width = 0;
    this.height = 0;
    this._rect.left = -4000;
    this._rect.right = -4000;
    this._$iW = false;
};
WidgetDockPatternBase.prototype._$4a = function (_$mS, floatPanel) {
    var _$8G = false;
    if (_$mS == null) {
        return false;
    }
    if (_$mS._$od != null) {
        _$8G = this._$4a(_$mS._$od, floatPanel);
    }
    if (_$8G) {
        return true;
    }
    if (_$mS._$pr != null) {
        _$8G = this._$4a(_$mS._$pr, floatPanel);
    }
    if (_$8G) {
        return true;
    }
    if (_$mS._$l1 != null) {
        var _$e1 = _$mS._$l1.length;
        for (var i = 0; i < _$e1; i++) {
            var _$ol = _$mS._$l1.get(i);
            if (_$ol._floatPanel != null && _$ol._floatPanel == floatPanel) {
                _$ol._floatPanel = null;
                _$ol._title = floatPanel.getTitle();
                _$ol._$pA = floatPanel._$lt;
                _$ol._$rM = floatPanel._$lK.cx;
                _$ol._$rN = floatPanel._$lK.cy;
                _$ol._$aP = WidgetDockFloatPanel._$1D;
                if (floatPanel._pattern == this) {
                    _$ol._$aP |= WidgetDockFloatPanel._$1A;
                }
                if (floatPanel._pinType == EnumPinType.Hide) {
                    _$ol._$aP |= WidgetDockFloatPanel._$1C;
                    _$ol._$aP &= ~WidgetDockFloatPanel._$1D;
                }
                _$ol._$aP |= floatPanel._$kc << 12;
                if (floatPanel._$id) {
                    _$ol._$aP |= WidgetDockFloatPanel._$B;
                }
                if (floatPanel._$kj < 0) floatPanel._$kj = 0;
                _$ol._$aP |= floatPanel._$kj << 7;
                if (floatPanel._$iv) {
                    _$ol._$aP |= WidgetDockFloatPanel._$2T;
                }
                if (floatPanel._pinType != EnumPinType.None) {
                    _$ol._$aP |= WidgetDockFloatPanel._$2U;
                }
                return true;
            }
        }
    } else {
        if (_$mS._$of == floatPanel && floatPanel != null) {
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
            _$mS._$e(floatPanel._$c3(), _$aS, floatPanel._$lt, floatPanel._$lK.cx, floatPanel._$lK.cy);
            return true;
        }
    }
    return false;
};
WidgetDockPatternBase.prototype.addFixedPanelWithType = function (type, element, left, top, width, height) {
    this._elementWithType[type] = element;
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
        _$e1 = this._patternPositionList[_$9l].getSize();
        for (var j = _$e1 - 1; j >= 0; j--) {
            _$pU = this._patternPositionList[_$9l]._list[j];
            if (_$9l == EnumPatternPositionType.Left || _$9l == EnumPatternPositionType.Right) {
                _$dM = _$pU.rect.right - _$pU.rect.left - 2 * WidgetDockPanel._$kt;
            } else {
                _$dM = _$pU.rect.bottom - _$pU.rect.top - 2 * WidgetDockPanel._$kt;
            }
            if (_$pU._$iX && _$pU._$k9 == 0 && (_$dM != 0)) {
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
WidgetDockPatternBase.prototype._$72 = function (_$mS) {
    if (!_$mS._$8y) {
        while (_$mS != null) {
            _$mS._$8y = false;
            _$mS = _$mS._$oV;
        }
    }
};
WidgetDockPatternBase.prototype._$2F = function (patternPositionType, panelNow) {
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    var panel;
    for (var i = 0; i < panelNum; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
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
    if (this._patternPositionList[floatPanel._patternPositionType].getSize() < 1) return;
    var panel = this._patternPositionList[floatPanel._patternPositionType]._list[floatPanel._$jr];
    if (floatPanel._$kA._$8y) return;
    var rcPanel = new WidgetDockRect();
    panel._$2B(floatPanel, rcPanel);
    var _$8V = false;
    var _$9h = panel._$5K(floatPanel);
    if (!_$9h) {
        floatPanel._$kA._$8y = true;
        _$8V = panel._$f(this, floatPanel._$kA, rcPanel);
    }
    if (_$8V && (rcPanel.left != rcPanel.right || rcPanel.top != rcPanel.bottom)) {
        panel._$qI();
        var _$9y;
        var _$dt;
        if (floatPanel._patternPositionType == EnumPatternPositionType.Left || floatPanel._patternPositionType == EnumPatternPositionType.Right) {
            _$dt = WidgetDockPatternBase.getWidth(rcPanel);
            _$9y = EnumPatternPositionType.Top;
        } else {
            _$dt = WidgetDockPatternBase.getHeight(rcPanel);
            _$9y = EnumPatternPositionType.Left;
            rcPanel.top = rcPanel.left;
            rcPanel.bottom = rcPanel.right;
        }
        this._$4n(floatPanel._patternPositionType, floatPanel._$jr + 1, -(_$dt + panel._$cf()));
        this._$6x(_$9y, rcPanel.top, rcPanel.bottom);
        this._$6x((_$9y + 2), rcPanel.top, rcPanel.bottom);
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
WidgetDockPatternBase.prototype._$55 = function (_$mS, floatPanel, _$sg, patternPositionType, _$dg) {
    if (_$dg < 0) return;
    var _$st = _$mS;
    if (_$st == null) return;
    var _$pj = this._patternPositionList[patternPositionType]._list[_$dg];
    var _$gs;
    if (floatPanel != null) {
        _$gs = _$mS._$56(floatPanel);
    } else {
        _$gs = _$mS._$56(_$sg);
    }
    if (_$gs > 0) {
        if (floatPanel != null) {
            floatPanel._$kA = null;
        }
        return;
    }
    var _$93 = _$pj._$53(_$st);
    if (floatPanel != null) {
        floatPanel._$kA = null;
    }
    if (_$93) {
        if (floatPanel != null && _$sg == null) {
            if (floatPanel._patternPositionType == floatPanel._$lf._$j1 && floatPanel._$jr < floatPanel._$lf._$ka && floatPanel._$lf._$ka != -1 && floatPanel._$lf._$ka != 0xffffffff) {
                floatPanel._$lf._$ka -= 1;
            }
        }
        var _$pU;
        this._patternPositionList[patternPositionType]._list[_$dg]._$kI = null;
        this._patternPositionList[patternPositionType].delete(_$dg);
        for (var i = _$dg; i < this._patternPositionList[patternPositionType].getSize(); i++) {
            _$pU = this._patternPositionList[patternPositionType]._list[i];
            var pb = _$pU._$kI;
            this._$6m(pb, i);
        }
        var _$oF;
        if (_$dg == 0) {
            _$oF = null;
        } else {
            _$oF = this._patternPositionList[patternPositionType]._list[_$dg - 1];
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
    this._$55(floatPanel._$kA, floatPanel, null, floatPanel._patternPositionType, floatPanel._$jr);
};
WidgetDockPatternBase.prototype._$6m = function (_$mS, _$cN) {
    if (_$mS == null) return;
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) {
            this._$6m(_$mS._$od, _$cN);
        }
        if (_$mS._$pr != null) {
            this._$6m(_$mS._$pr, _$cN);
        }
        return;
    }
    if (_$mS._$of != null) {
        if (_$mS._$of._pattern == this) {
            _$mS._$of._$jr = _$cN;
        } else if (_$mS._$of._$l7 == this) {
            _$mS._$of._$k4 = _$cN;
        }
    }
    _$mS._$6m(_$cN, this);
};
WidgetDockPatternBase.prototype._$5L = function (patternPositionType, _$n0, _$nk) {
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    var panel;
    for (var i = 0; i < panelNum; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        if (panel._$kR == _$n0) {
            panel._$kR = _$nk;
        }
        if (panel._$l8 == _$n0) {
            panel._$l8 = _$nk;
        }
    }
};
WidgetDockPatternBase.prototype._$2j = function (patternPositionType) {
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    if (panelNum == 0) {
        return null;
    } else {
        return this._patternPositionList[patternPositionType]._list[panelNum - 1];
    }
};
WidgetDockPatternBase.prototype._$19 = function (_$mS, patternPositionType, _$9e) {
    var panel = null;
    var _$8T = false;
    var _$nm = null;
    var rcPanel = new WidgetDockRect();
    var _$8U = true;
    if (_$mS._$oV == null) {
        panel = new WidgetDockPanel();
        if (_$9e != 0xffffffff) {
            _$8T = true;
            if (_$9e > 0) {
                _$nm = this._patternPositionList[patternPositionType]._list[_$9e - 1];
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
            _$9e = this._patternPositionList[patternPositionType].getSize();
        }
        panel._$kI = _$mS;
        panel._$ah(this, patternPositionType);
        WidgetDockPatternBase.resetRect(rcPanel);
        this._patternPositionList[patternPositionType].insert(panel, _$9e);
        this._$6m(_$mS, _$9e);
        var _$pU;
        var i;
        for (i = _$9e + 1; i < this._patternPositionList[patternPositionType].getSize(); i++) {
            _$pU = this._patternPositionList[patternPositionType]._list[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        this._$6m(_$mS, _$9e);
        panel = this._patternPositionList[patternPositionType]._list[_$9e];
        if (panel._$05()) {
            panel._$ah(this, patternPositionType);
            WidgetDockPatternBase.resetRect(rcPanel);
        } else {
            _$8U = false;
        }
        _$mS._$8y = false;
        this._$72(_$mS);
        if (!_$8U) {
            panel._$6(this, _$mS);
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
        if ((panel.rect.left != panel.rect.right) && (panel.rect.left >= 0)) {
            iw = panel.rect.right - panel.rect.left;
            ih = panel.rect.bottom - panel.rect.top;
        } else {
            iw = WidgetDockFloatPanel._$lL.cx;
            ih = WidgetDockFloatPanel._$lL.cy;
        }
        this._$4m(panel, patternPositionType, _$9e, true, iw, ih, _$mS, true);
    }
};
WidgetDockPatternBase.prototype._$4m = function (panel, patternPositionType, _$9e, _$7Q, _$d2, _$d0, _$mS, _$83) {
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
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
        rcPanel.right = panel.rect.right - panel.rect.left;
        rcPanel.bottom = panel.rect.bottom - panel.rect.top;
    }
    var _$9t = true;
    if ((patternPositionType == EnumPatternPositionType.Left) || (patternPositionType == EnumPatternPositionType.Right)) {
        _$9t = false;
    }
    var _$9r;
    var _$gK, _$el, _$dt;
    if (_$83 && panel != null && (panel instanceof WidgetDockPanelState) && !(panel instanceof WidgetDockPanelStatePanel)) {
        if ((_$9e - 1) >= 0) {
            _$oB = this._patternPositionList[patternPositionType]._list[_$9e - 1];
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
            _$ey = rcWindow.top + ilt;
            _$eB = rcWindow.bottom - irb;
            _$el = _$eB - _$ey;
            rcPanel.top = _$ey;
            _$gK = 0;
            if (patternPositionType == EnumPatternPositionType.Left) {
                rcPanel.left = ior;
            } else {
                rcPanel.left = rcWindow.right - ior - _$gK;
            }
            rcPanel.right = rcPanel.left;
            rcPanel.bottom = rcPanel.top + _$el;
        } else {
            _$ey = rcWindow.left + ilt;
            _$eB = rcWindow.right - irb;
            _$gK = _$eB - _$ey;
            _$el = 0;
            rcPanel.left = _$ey;
            if (patternPositionType == EnumPatternPositionType.Top) {
                rcPanel.top = ior;
            } else {
                rcPanel.top = rcWindow.bottom - ior - _$el;
            }
            rcPanel.bottom = rcPanel.top;
            rcPanel.right = rcPanel.left + _$gK;
        }
        panel._$iX = true;
        panel._$qy(_$mS._$of, rcPanel);
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
        _$oB = this._patternPositionList[patternPositionType]._list[_$9e - 1];
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
        _$ey = rcWindow.top + ilt;
        _$eB = rcWindow.bottom - irb;
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
            rcPanel.left = rcWindow.right - ior - _$gK;
            _$qt.left = rcWindow.right - ior - _$gK - _$gj;
        }
        _$qt.right = _$qt.left + _$gj;
    } else {
        _$ey = rcWindow.left + ilt;
        _$eB = rcWindow.right - irb;
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
            rcPanel.top = rcWindow.bottom - ior - _$el;
            _$qt.top = rcWindow.bottom - ior - _$el - _$gj;
        }
        _$qt.bottom = _$qt.top + _$gj;
    }
    rcPanel.right = rcPanel.left + _$gK;
    rcPanel.bottom = rcPanel.top + _$el;
    if (_$mS != null) {
        if (_$mS._$of != null) {
            panel._$qy(_$mS._$of, rcPanel);
        } else {
            this._$6v(_$mS, rcPanel, EnumPatternPositionType.Top);
            this._$6v(_$mS, rcPanel, EnumPatternPositionType.Left);
        }
    } else if (_$83) {
        panel._$qy(null, rcPanel);
    }
    if (_$83) {
        panel.rect.setRect(rcPanel);
        panel._$iX = true;
    }
    if (panel._$le != null) {
        panel._$le._$6q(_$qt);
    }
    this._$4n(patternPositionType, _$9e + 1, _$dt);
    var _$9y;
    if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
        _$9y = EnumPatternPositionType.Top;
    } else {
        _$9y = EnumPatternPositionType.Left;
    }
    this._$6x(_$9y, _$ey, _$eB);
    this._$6x((_$9y + 2), _$ey, _$eB);
    this.refreshFixedPanel();
};
WidgetDockPatternBase.prototype._$6O = function (floatPanel) {
    var panel;
    if (floatPanel._$kA != null || floatPanel._$jr != 0xffffffff) {
        return;
    }
    var _$gl = floatPanel._patternPositionType;
    var _$o6 = new _$F();
    floatPanel._$kA = _$o6;
    _$o6._$8y = false;
    _$o6._$of = floatPanel;
    panel = floatPanel._$ag();
    if (_$gl == EnumPatternPositionType.Left || _$gl == EnumPatternPositionType.Right) {
        panel._$kR = this._$2j(EnumPatternPositionType.Top);
        panel._$l8 = this._$2j(EnumPatternPositionType.Bottom);
    } else {
        panel._$kR = this._$2j(EnumPatternPositionType.Left);
        panel._$l8 = this._$2j(EnumPatternPositionType.Right);
    }
    panel.rect.left = panel.rect.top = 0;
    panel.rect.right = floatPanel._$lJ.cx;
    panel.rect.bottom = floatPanel._$lJ.cy;
    floatPanel._$jr = this._patternPositionList[_$gl].getSize();
    panel._$kI = _$o6;
    this._patternPositionList[_$gl].insert(panel, floatPanel._$jr);
    var _$pU;
    var i;
    for (i = floatPanel._$jr + 1; i < this._patternPositionList[_$gl].getSize(); i++) {
        _$pU = this._patternPositionList[_$gl]._list[i];
        _$6m(_$pU._$kI, i);
    }
};
WidgetDockPatternBase.prototype._$18 = function (floatPanel, _$oP) {
    var _$gl = floatPanel._patternPositionType;
    var _$8U = true;
    var rcPanel = new WidgetDockRect();
    var panel;
    var _$8T = false;
    var _$nm = null;
    if (floatPanel._$kA == null) {
        var _$o6 = new _$F();
        floatPanel._$kA = _$o6;
        _$o6._$8y = false;
        _$o6._$of = floatPanel;
        panel = floatPanel._$ag();
        if (_$oP != null) _$oP[0] = panel;
        if (floatPanel._$jr != 0xffffffff) {
            _$8T = true;
            if (floatPanel._$jr > 0) {
                _$nm = this._patternPositionList[_$gl]._list[floatPanel._$jr - 1];
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
            floatPanel._$jr = this._patternPositionList[_$gl].getSize();
        }
        panel._$kI = _$o6;
        panel._$ah(this, floatPanel._patternPositionType);
        WidgetDockPatternBase.resetRect(rcPanel);
        this._patternPositionList[_$gl].insert(panel, floatPanel._$jr);
        var _$pU;
        var i;
        for (i = floatPanel._$jr + 1; i < this._patternPositionList[_$gl].getSize(); i++) {
            _$pU = this._patternPositionList[_$gl]._list[i];
            this._$6m(_$pU._$kI, i);
        }
    } else {
        if (floatPanel._$kA._$20() == true) {
            floatPanel._$kA._$2(floatPanel);
            return;
        }
        floatPanel._$kA._$of = floatPanel;
        panel = this._patternPositionList[_$gl]._list[floatPanel._$jr];
        if (panel._$05()) {
            panel._$ah(this, floatPanel._patternPositionType);
            WidgetDockPatternBase.resetRect(rcPanel);
        } else {
            _$8U = false;
        }
        floatPanel._$kA._$8y = false;
        this._$72(floatPanel._$kA);
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
        if ((panel.rect.left != panel.rect.right) && (panel.rect.left >= 0)) {
            rcPanel.right = panel.rect.right - panel.rect.left;
            rcPanel.bottom = panel.rect.bottom - panel.rect.top;
        } else {
            rcPanel.right = floatPanel._$lJ.cx;
            rcPanel.bottom = floatPanel._$lJ.cy;
        }
        if (rcPanel.right <= rcPanel.left) {
            rcPanel.right = rcPanel.left + 20;
        }
        if (rcPanel.bottom <= rcPanel.top) {
            rcPanel.bottom = rcPanel.top + 20;
        }
        this._$4m(panel, _$gl, floatPanel._$jr, _$8I, rcPanel.right - rcPanel.left, rcPanel.bottom - rcPanel.top, floatPanel._$kA, true);
        if (this._isMain) {
            this._$5A();
        }
    }
};
WidgetDockPatternBase.prototype._$W = function (patternPositionType, panelNow, _$nm, _$81) {
    for (var i = 0; i < this._patternPositionList[patternPositionType].getSize(); i++) {
        var _$pU = this._patternPositionList[patternPositionType]._list[i];
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
        this._patternPositionList[i].reset();
    }
};
WidgetDockPatternBase.prototype._$k = function (_$mV, _$cu) {
    var _$qm = new WidgetDockRect();
    _$mV._$le.getRect(_$qm);
    var _$9w;
    var _$ey;
    var _$eB;
    var _$9y = _$mV._$le._patternPositionType;
    var _$g1 = this._$2F(_$9y, _$mV);
    if (_$9y == EnumPatternPositionType.Left || _$9y == EnumPatternPositionType.Right) {
        _$9w = EnumPatternPositionType.Top;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
    } else {
        _$9w = EnumPatternPositionType.Left;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
    }
    var _$q8 = new WidgetDockRect();
    _$mV._$kI._$22(_$q8);
    if (_$9y == EnumPatternPositionType.Left) {
        _$q8.right += _$cu;
    } else if (_$9y == EnumPatternPositionType.Right) {
        _$q8.left += _$cu;
    } else if (_$9y == EnumPatternPositionType.Top) {
        _$q8.bottom += _$cu;
    } else {
        _$q8.top += _$cu;
    }
    _$mV._$le._$4q(_$cu);
    this._$6v(_$mV._$kI, _$q8, _$9y);
    _$mV._$5q();
    if (_$9y == EnumPatternPositionType.Right || _$9y == EnumPatternPositionType.Bottom) {
        _$cu = -_$cu;
    }
    this._$4n(_$9y, _$g1 + 1, _$cu);
    this._$6x(_$9w, _$ey, _$eB);
    this._$6x((_$9w + 2), _$ey, _$eB);
};
WidgetDockPatternBase.prototype._$4j = function (_$mS, _$ct, _$9c) {
    var rcPanel = new WidgetDockRect();
    var _$ql = new WidgetDockRect();
    var plt = new WidgetDockLocation();
    if (_$mS._$od != null || _$mS._$pr != null) {
        if (_$mS._$od != null) {
            this._$4j(_$mS._$od, _$ct, _$9c);
        }
        if (_$mS._$pr != null) {
            this._$4j(_$mS._$pr, _$ct, _$9c);
        }
        if ((_$mS._$od != null) && (_$mS._$pr != null) && (!_$mS._$od._$8y) && (!_$mS._$pr._$8y)) {
            _$mS._$oy.getRect(rcPanel);
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
            _$mS._$oy._$6q(_$ql);
        }
        return;
    }
    if (!_$mS._$8y) {
        _$mS._$of.getRect(rcPanel);
        plt.x = rcPanel.left;
        plt.y = rcPanel.top;
        if (_$mS._$of._patternPositionType == EnumPatternPositionType.Left || _$mS._$of._patternPositionType == EnumPatternPositionType.Right) {
            if (_$mS._$of._patternPositionType == EnumPatternPositionType.Left) {
                plt.x = rcPanel.left + _$ct;
            } else {
                plt.x = rcPanel.left - _$ct;
            }
        } else {
            plt.x = rcPanel.left;
            if (_$mS._$of._patternPositionType == EnumPatternPositionType.Top) {
                plt.y = rcPanel.top + _$ct;
            } else {
                plt.y = rcPanel.top - _$ct;
            }
        }
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + WidgetDockPatternBase.getWidth(rcPanel);
        _$ql.bottom = plt.y + WidgetDockPatternBase.getHeight(rcPanel);
        _$mS._$of._$6q(_$ql);
    }
};
WidgetDockPatternBase.prototype._$4n = function (patternPositionType, _$dg, _$cY) {
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    var panel;
    for (var i = _$dg; i < panelNum; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        panel._$4i(this, patternPositionType, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$4o = function (patternPositionType, _$dg, _$cG, _$cY) {
    var panel;
    for (var i = _$dg; i <= _$cG; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        panel._$4i(this, patternPositionType, _$dg, _$cY);
    }
};
WidgetDockPatternBase.prototype._$2K = function (patternPositionType, _$9a) {
    var _$ex;
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    if (_$9a == WidgetDockPatternBase._$3S) {
        _$ex = rcWindow.right - this._signLenAry[2];
    } else if (_$9a == WidgetDockPatternBase._$5k) {
        _$ex = rcWindow.left + this._signLenAry[0];
    } else if (_$9a == WidgetDockPatternBase._$6M) {
        _$ex = rcWindow.bottom - this._signLenAry[3];
    } else {
        _$ex = rcWindow.top + this._signLenAry[1];
    }
    var panel;
    var rc = new WidgetDockRect();
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    for (var i = 0; i < panelNum; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        if (panel._$iX) {
            panel._$le.getRect(rc);
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
WidgetDockPatternBase.prototype._$6v = function (_$mS, _$q1, _$9c) {
    if (_$mS == null) return;
    if ((_$mS._$od != null) || (_$mS._$pr != null)) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        _$mS._$1K(pd1, pd2, rc1, rc2);
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
            if (((_$mS._$9y % 2) == 0 && (_$9c % 2) == 0) || (((_$mS._$9y + 1) % 2) == 0 && (_$9c + 1) % 2 == 0)) {
                if ((_$9c == WidgetDockPatternBase._$3T) || (_$9c == WidgetDockPatternBase._$5l)) {
                    _$gD = WidgetDockPatternBase.getWidth(_$q1) - WidgetDockPanel._$kt;
                } else {
                    _$gD = WidgetDockPatternBase.getHeight(_$q1) - WidgetDockPanel._$kt;
                }
                var id2 = (_$gD / (1 + _$mS._$br));
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
                _$mS._$oy._$6q(_$qt);
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
                if (_$mS._$oy != null) {
                    _$mS._$oy._$6q(_$qt);
                }
            }
        } else if (b1) {
            this._$6v(pd1[0], _$q1, _$9c);
        } else if (b2) {
            this._$6v(pd2[0], _$q1, _$9c);
        }
    } else {
        if (!_$mS._$8y) {
            _$mS._$of._$6q(_$q1);
        }
    }
};
WidgetDockPatternBase._$5y = function (_$cm, _$q6) {
    WidgetDockPatternBase.resize(_$cm, null, _$q6.left, _$q6.top, WidgetDockPatternBase.getWidth(_$q6), WidgetDockPatternBase.getHeight(_$q6), 0);
};
WidgetDockPatternBase.prototype.getWindowRect = function (rect) {
    if (!this._$iW) {
        this._$iW = true;
    }
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
    rect.right = iw;
    rect.left = 0;
    rect.bottom = ih;
    rect.top = 0;
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
            var _$9y;
            this._$4n(patternPositionType, index + 1, _$dX);
            var ilt, irb;
            var _$qt = new WidgetDockRect();
            _$qt.setRect(panel.rect);
            if (patternPositionType == EnumPatternPositionType.Right || patternPositionType == EnumPatternPositionType.Left) {
                _$9y = EnumPatternPositionType.Top;
                ilt = panel.rect.top;
                irb = panel.rect.bottom;
                if (patternPositionType == EnumPatternPositionType.Left) {
                    _$qt.left = panel.rect.right;
                } else {
                    _$qt.left = panel.rect.left;
                }
                _$qt.right = _$qt.left;
            } else {
                _$9y = EnumPatternPositionType.Left;
                ilt = panel.rect.left;
                irb = panel.rect.right;
                if (patternPositionType == EnumPatternPositionType.Top) {
                    _$qt.top = panel.rect.bottom;
                } else {
                    _$qt.top = panel.rect.top;
                }
                _$qt.bottom = _$qt.top;
            }
            panel._$le._$r8(_$qt.left, _$qt.top, _$qt.right - _$qt.left, _$qt.bottom - _$qt.top);
            this._$6x(_$9y, ilt, irb);
            this._$6x((_$9y + 2), ilt, irb);
            this.refreshFixedPanel();
        }
    }
};
WidgetDockPatternBase.prototype._$6x = function (patternPositionType, top, bottom) {
    var panel;
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    for (var i = 0; i < this._patternPositionList[patternPositionType].getSize(); i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        var _$dX = new Array(1);
        _$dX[0] = 0;
        panel._$6u(this, rcWindow, patternPositionType, top, bottom, _$dX);
        this._$5p(panel, i, patternPositionType, _$dX[0]);
    }
};
WidgetDockPatternBase.prototype._$2J = function (patternPositionType, left, right) {
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    if (right == 0xffffffff || right > panelNum) {
        right = panelNum;
    }
    var panel;
    var ire = 0;
    for (var i = left; i < right; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        if (panel._$iX) {
            if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
                ire += WidgetDockPatternBase.getWidth(panel.rect);
            } else {
                ire += WidgetDockPatternBase.getHeight(panel.rect);
            }
            ire += panel._$cf();
        }
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2I = function (patternPositionType, _$nd) {
    var ire = this._signLenAry[patternPositionType];
    if (_$nd == null) {
        return ire;
    }
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    var panel;
    for (var i = 0; i < panelNum; i++) {
        panel = this._patternPositionList[patternPositionType]._list[i];
        if (panel._$iX) {
            if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
                ire += WidgetDockPatternBase.getWidth(panel.rect);
            } else {
                ire += WidgetDockPatternBase.getHeight(panel.rect);
            }
            ire += panel._$le._$cf();
        }
        if (panel == _$nd) {
            break;
        }
    }
    return ire;
};
WidgetDockPatternBase.prototype._$2d = function (_$mX, patternPositionType, _$nx, _$nz) {
    var rcf = new WidgetDockRect();
    rcf.setRect(_$nx.rect);
    if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Top) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.top;
    } else if (patternPositionType == EnumPatternPositionType.Bottom) {
        _$mX._$kn = rcf.left;
        _$mX._$kq = rcf.bottom - _$nz.cy;
    } else {
        _$mX._$kn = rcf.right - _$nz.cx;
        _$mX._$kq = rcf.top;
    }
};
WidgetDockPatternBase._$2c = function (_$mX, _$q3, _$nz) {
    _$mX._$kn = _$q3.left;
    _$mX._$kq = _$q3.top;
    if (_$mX._$j1 == EnumPatternPositionType.Right) {
        _$mX._$kn = _$q3.right - _$nz.cx;
    } else if (_$mX._$j1 == EnumPatternPositionType.Bottom) {
        _$mX._$kq = _$q3.bottom - _$nz.cy;
    }
};
WidgetDockPatternBase.prototype._$1h = function (_$mX, _$nz, _$gK, _$el, _$qe, pt) {
    if (_$mX._$kx._pattern != this) {
        return true;
    }
    if (WidgetDockPatternBase.isInRect(_$qe, pt) && _$mX._$it) {
        var _$qh = new WidgetDockRect();
        _$mX._$kx._panelStateController._$2P(_$qh);
        var _$8n = WidgetDockPatternBase.isInRect(_$qh, pt);
        var _$8Q = _$mX._$kx._$kA._$3v(pt);
        if (_$8n || _$8Q) {
            _$mX._$ka = _$mX._$jr;
            _$mX._$ky = _$mX._$kA;
            _$mX._$j1 = _$mX._patternPositionType;
            _$nz.cx = _$gK;
            _$nz.cy = _$el;
            WidgetDockPatternBase._$2c(_$mX, _$qe, _$nz);
            if (_$8Q) {
                _$mX._$kx._$31(pt);
                _$mX._$iC = true;
            }
            _$mX._$j2 = 0xff;
            return false;
        } else {
            if ((_$mX._$kx._$jy != WidgetDockFloatPanel._$0X) || (_$mX._$kx._$kA._$o5 == null) || (_$mX._$kx._$kA._$o5 != null && _$mX._$kx._$kA._$o5._tabList.length < 2)) {
                _$mX._$j1 = 0xff;
                return true;
            } else {
                _$qe.top = _$qh.bottom;
                _$qe.bottom -= _$G._$6J;
                var _$9i = WidgetDockPatternBase._$m(_$qe, pt);
                if (_$9i != 0xff) {
                    _$9i = parseInt((_$9i - 1) / 2);
                    _$mX._$ka = _$mX._$jr;
                    _$mX._$ky = _$mX._$kA;
                    if (_$9i == EnumPatternPositionType.Left || _$9i == EnumPatternPositionType.Right) {
                        _$nz.cx = _$mX._$kx._$lK.cx;
                        if (_$nz.cx >= (_$qe.right - _$qe.left)) {
                            _$nz.cx = _$nz.cx / 2;
                        }
                        _$nz.cy = _$qe.bottom - _$qe.top;
                    } else {
                        _$nz.cy = _$mX._$kx._$lK.cy;
                        if (_$nz.cy > (_$qe.bottom - _$qe.top)) {
                            _$nz.cy = _$nz.cy / 2;
                        }
                    }
                    if (_$9i == EnumPatternPositionType.Left || _$9i == EnumPatternPositionType.Top) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.top;
                    } else if (_$9i == EnumPatternPositionType.Bottom) {
                        _$mX._$kn = _$qe.left;
                        _$mX._$kq = _$qe.bottom - _$nz.cy;
                    } else {
                        _$mX._$kn = _$qe.right - _$nz.cx;
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
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    rcWindow.right = rcWindow.right - rcWindow.top;
    rcWindow.bottom = rcWindow.bottom - rcWindow.top;
    rcWindow.left = 0;
    rcWindow.top = 0;
    rcWindow.left += this._signLenAry[0];
    rcWindow.right -= this._signLenAry[2];
    rcWindow.top += this._signLenAry[1];
    rcWindow.bottom -= this._signLenAry[3];
    var _$qe = new WidgetDockRect();
    _$qe.setRect(_$mX._$lC);
    var _$el = WidgetDockPatternBase.getHeight(_$qe);
    var _$gK = WidgetDockPatternBase.getWidth(_$qe);
    var _$gk = _$gK < _$el ? _$gK : _$el;
    _$mX._$iM = false;
    _$nz.cx = _$gK;
    _$nz.cy = _$el;
    if (!this._$1h(_$mX, _$nz, _$gK, _$el, _$qe, pt)) {
        return _$mX._$j1;
    }
    var _$9j = WidgetDockPatternBase._$m(rcWindow, pt);
    _$mX._$ka = 0;
    _$mX._$ky = null;
    _$mX._$j1 = 0;
    if ((_$9j != 0xff) && ((_$9j % 2) == 0)) {
        _$mX._$j1 = parseInt(_$9j / 2);
        floatPanel._$2w(_$nz, _$gk, rcWindow, false);
        _$mX._$iM = true;
        WidgetDockPatternBase._$2c(_$mX, rcWindow, _$nz);
        return _$mX._$j1;
    }
    var _$9z;
    var _$o4 = null;
    var _$pP = new Array(1);
    var _$gw = 0xff;
    _$9j = 0xff;
    var _$d1 = new Array(1);
    for (var i = 0; i < 4; i++) {
        _$9z = this._$02(_$mX, i, pt, _$nz, _$gk, _$pP, _$d1);
        if (_$9z != 0xff) {
            if ((((_$9z + 1) % 2) == 0) || _$d1[0] >= 0) {
                _$o4 = _$pP[0];
                _$gw = i;
                _$9j = _$9z;
                if (_$d1[0] >= 0) {
                    _$mX._$ka = _$d1[0];
                }
                break;
            } else {
                _$9j = _$9z;
                _$o4 = _$pP[0];
                _$gw = i;
            }
        }
    }
    var rcs = new WidgetDockRect();
    rcs.setRect(this._rect);
    var bme = false;
    if ((_$mX._$kx != null) && (_$mX._$kx == _$o4)) {
        _$mX._$j1 = 0xff;
        bme = true;
        if (!WidgetDockPatternBase.isInRect(rcs, pt)) {
            return 0xff;
        }
    }
    if (!bme && _$9j != 0xff && ((_$9j + 1) % 2 == 0)) {
        _$mX._$j1 = parseInt((_$9j / 2));
        if (_$o4 != null) {
            floatPanel._$2w(_$nz, _$gk, rcWindow, true);
        } else {
            rcWindow.left = rcWindow.top = 0;
            rcWindow.right = _$nz.cx;
            rcWindow.bottom = _$nz.cy;
            floatPanel._$2w(_$nz, _$gk, rcWindow, false);
        }
        floatPanel._$69(_$gw, _$o4, parseInt((_$9j / 2)));
    } else {
        _$9j = WidgetDockPatternBase._$m(rcs, pt);
        if (_$9j != 0xff) {
            _$mX._$j1 = parseInt((_$9j / 2));
            floatPanel._$2w(_$nz, _$gk, this._rect, false);
        }
        if (_$9j != 0xff && ((_$9j + 1) % 2 == 0)) {
            _$mX._$ka = 0xffffffff;
            _$mX._$ky = null;
            _$mX._$j1 = parseInt((_$9j / 2));
            _$mX._$j2 = parseInt((_$9j / 2));
            WidgetDockPatternBase._$2c(_$mX, rcs, _$nz);
        } else {
            _$mX._$j1 = 0xff;
        }
        _$mX._$iM = true;
    }
    return _$mX._$j1;
};
WidgetDockPatternBase.prototype._$02 = function (_$mX, patternPositionType, pt, _$nz, _$dk, _$oQ, _$d1) {
    if (this._patternPositionList[patternPositionType] == null) {
        return 0xff;
    }
    var panel;
    var _$9z = 0xff;
    _$oQ[0] = null;
    var _$fZ = new Array(1);
    var panelNum = this._patternPositionList[patternPositionType].getSize();
    for (var i = 0; i < panelNum; i++) {
        _$d1[0] = -1;
        panel = this._patternPositionList[patternPositionType]._list[i];
        if (panel._$iX) {
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
                        var _$oG = this._patternPositionList[patternPositionType]._list[j];
                        if (_$oG._$iX) {
                            panel = _$oG;
                            _$8G = true;
                            break;
                        }
                    }
                    if (_$8G) this._$2d(_$mX, patternPositionType, panel, _$nz); else {
                        var _$ql = new WidgetDockRect();
                        _$ql.setRect(panel.rect);
                        if (patternPositionType == EnumPatternPositionType.Top) {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.bottom;
                        } else if (patternPositionType == EnumPatternPositionType.Left) {
                            _$mX._$kn = _$ql.right;
                            _$mX._$kq = _$ql.top;
                        } else if (patternPositionType == EnumPatternPositionType.Right) {
                            _$mX._$kn = _$ql.left - _$nz.cx;
                            _$mX._$kq = _$ql.top;
                        } else {
                            _$mX._$kn = _$ql.left;
                            _$mX._$kq = _$ql.top - _$nz.cy;
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
    var _$9j = 0xff;
    if (WidgetDockPatternBase.isInRect(_$nv, pt)) {
        if ((pt.x - _$nv.left) > 0 && (pt.x - _$nv.left) <= WidgetDockPatternBase._$A) {
            _$9j = WidgetDockPatternBase._$3d;
        } else if ((pt.y - _$nv.top) > 0 && (pt.y - _$nv.top) <= WidgetDockPatternBase._$A) {
            _$9j = WidgetDockPatternBase._$3h;
        } else if ((pt.x - _$nv.right) < 0 && (pt.x - _$nv.right) >= -WidgetDockPatternBase._$A) {
            _$9j = WidgetDockPatternBase._$3f;
        } else if ((pt.y - _$nv.bottom) < 0 && (pt.y - _$nv.bottom) >= -WidgetDockPatternBase._$A) {
            _$9j = WidgetDockPatternBase._$3b;
        }
    } else {
        if ((pt.y > _$nv.top) && (pt.y < _$nv.bottom)) {
            if ((pt.x - _$nv.left) < 0 && (pt.x - _$nv.left) >= -WidgetDockPatternBase._$A) {
                _$9j = WidgetDockPatternBase._$3e;
            } else if ((pt.x - _$nv.right) > 0 && (pt.x - _$nv.right) <= WidgetDockPatternBase._$A) {
                _$9j = WidgetDockPatternBase._$3g;
            }
        } else if ((pt.x > _$nv.left) && (pt.x < _$nv.right)) {
            if ((pt.y - _$nv.top) < 0 && (pt.y - _$nv.top) >= -WidgetDockPatternBase._$A) {
                _$9j = WidgetDockPatternBase._$3i;
            } else if ((pt.y - _$nv.bottom) > 0 && (pt.y - _$nv.bottom) <= WidgetDockPatternBase._$A) {
                _$9j = WidgetDockPatternBase._$3c;
            }
        }
    }
    return _$9j;
};
WidgetDockPatternBase.prototype._$1Z = function (_$mX, _$mT, pt, patternPositionType, _$nz) {
    patternPositionType[0] = this._$R(_$mX, _$mT, pt, _$nz);
    if (patternPositionType[0] > 3 || patternPositionType[0] < 0) {
        return null;
    }
    return this;
};
WidgetDockPatternBase.prototype._$1 = function (_$mN) {
    if (this._$lo != null && this._$lo != _$mN) {
        this._$lo._$r6(false);
    }
    _$mN._$r6(true);
    this._$lo = _$mN;
};
WidgetDockPatternBase.prototype._$bG = function () {
    return this._$he;
};
WidgetDockPatternBase.prototype.Add = function (com) {
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
    var pt = new WidgetDockLocation();
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
WidgetDockPatternBase.getRect = function (com, rc) {
};
WidgetDockPatternBase._$2P = function (com, rc) {
};
WidgetDockPatternBase.isInRect = function (_$qe, pt) {
    if ((pt.x > _$qe.left) && (pt.x < _$qe.right) && (pt.y > _$qe.top) && (pt.y < _$qe.bottom)) {
        return true;
    }
    return false;
};
WidgetDockPatternBase.resize = function (com, _$qd, left, top, width, height, _$cI) {
    left = 0;
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
    rc.left = rc.right = rc.top = rc.bottom = 0;
};
WidgetDockPatternBase._$6d = function (_$ef) {
};
WidgetDockPatternBase._$5r = function (_$cr, _$qf) {
    var _$pL = _$cr._$c0();
    _$qf.left = _$qf.left + _$pL.x;
    _$qf.right = _$qf.right + _$pL.x;
    _$qf.top += _$pL.y;
    _$qf.bottom += _$pL.y;
};
WidgetDockPatternBase.prototype._$1P = function (floatPanel, title, mainPattern, _$cD, _$dg, _$mS, _$nr) {
    _$mS[0] = _$mS[1] = null;
    var _$eQ = new Array(1);
    for (var i = 0; i < 4; i++) {
        var panelNum = this._patternPositionList[i].getSize();
        var panel;
        for (var j = 0; j < panelNum; j++) {
            panel = this._patternPositionList[i]._list[j];
            var _$pO = this._$1J(floatPanel, title, panel._$kI, _$eQ, _$nr);
            if (_$pO != null && panel._$k9 == 0) {
                if ((_$eQ[0] & WidgetDockFloatPanel._$1A) > 0) {
                    _$cD[0] = i;
                    _$dg[0] = j;
                    _$mS[0] = _$pO;
                    mainPattern[0] = this;
                } else {
                    _$cD[1] = i;
                    _$dg[1] = j;
                    _$mS[1] = _$pO;
                    mainPattern[1] = this;
                }
                this._$1O(floatPanel, title, _$mS, _$cD, _$dg, mainPattern, _$eQ);
                return _$eQ[0] & WidgetDockFloatPanel._$1D;
            }
        }
    }
    this._$1O(floatPanel, title, _$mS, _$cD, _$dg, mainPattern, _$eQ);
    return _$eQ[0] & WidgetDockFloatPanel._$1D;
};
WidgetDockPatternBase.prototype._$1O = function (floatPanel, title, _$nO, _$dA, _$dC, _$nP, _$cX) {
    floatPanel._window._$1O(floatPanel, title, _$nO, _$dA, _$dC, _$nP, _$cX);
};
WidgetDockPatternBase.prototype._$1J = function (floatPanel, title, _$mS, _$cX, _$nr) {
    if (_$mS == null) return null;
    var _$pO = null;
    if (_$mS._$od != null) {
        _$pO = this._$1J(floatPanel, title, _$mS._$od, _$cX, _$nr);
    }
    if (_$pO != null) return _$pO;
    if (_$mS._$pr != null) {
        return this._$1J(floatPanel, title, _$mS._$pr, _$cX, _$nr);
    }
    if (_$mS._$sl != null && (title == _$mS._$sl)) return _$mS; else if (_$mS._$l1 != null && _$mS._$l1.length > 0) {
        var _$e1 = _$mS._$l1.length;
        for (var i = 0; i < _$e1; i++) {
            var _$rZ = _$mS._$l1[i]._title;
            if (_$rZ != null && (title == _$rZ)) {
                var _$ol = _$mS._$l1[i];
                _$cX[0] = _$ol._$aP;
                if (_$nr != null) {
                    _$nr[0] = _$ol;
                }
                _$ol._floatPanel = floatPanel;
                _$ol._title = null;
                return _$mS;
            }
        }
    }
    return null;
};
WidgetDockPatternBase.prototype.setSignLen = function (signLenAry) {
    var d;
    for (var i = 0; i < 4; i++) {
        signLenAry[i] = 0;
        if (this._elementWithType[i] != null) {
            if (i == 1 || i == 3) {
                d = parseInt(this._elementWithType[i].style.height);
                signLenAry[i] = d;
            } else {
                signLenAry[i] = parseInt(this._elementWithType[i].style.width);
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
        if (this._elementWithType[i] == _$a0) {
            this._elementWithType[i] = null;
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
    var rcWindow = new WidgetDockRect();
    this.getWindowRect(rcWindow);
    if (type == EnumPatternPositionType.Center) {
        this.addFixedPanelWithCenter(element);
        return;
    } else if (type == EnumPatternPositionType.Left) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = rcWindow.bottom - rcWindow.top - (this._signLenAry[1] + this._signLenAry[3]);
        left = 0;
        top = this._signLenAry[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Right) {
        width = element.style.width;
        width = parseInt(width, "px");
        height = rcWindow.bottom - rcWindow.top - this._signLenAry[1] - this._signLenAry[3];
        left = this._rect.right - width;
        top = this._signLenAry[1];
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Top) {
        width = rcWindow.right - rcWindow.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = 0;
        this.addFixedPanelWithType(type, element, left, top, width, height);
    } else if (type == EnumPatternPositionType.Bottom) {
        width = rcWindow.right - rcWindow.left;
        height = element.style.height;
        height = parseInt(height, "px");
        left = 0;
        top = rcWindow.bottom - rcWindow.top - height;
        this.addFixedPanelWithType(type, element, 0, top, width, height);
        if (this._elementWithType[EnumPatternPositionType.Left] != null) {
            var element = this._elementWithType[EnumPatternPositionType.Left];
            var width = parseInt(element.style.width, "px");
            var height = parseInt(element.style.height, "px") - height;
            var left = WidgetDockElementController.getElementLeft(element);
            var top = WidgetDockElementController.getElementTop(element);
            WidgetDockElementController.setElementLeftTopSize(element, left, top, width, height);
        }
        if (this._elementWithType[EnumPatternPositionType.Right] != null) {
            var element = this._elementWithType[EnumPatternPositionType.Right];
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
    if ((_$gG[1] - this._signLenAry[1]) != 0 || (_$gG[0] - this._signLenAry[0]) != 0 || (_$gG[2] - this._signLenAry[2]) != 0 || (_$gG[3] - this._signLenAry[3]) != 0) {
        var k;
        var _$du;
        for (k = 1; k < 4; k = k + 2) {
            if (_$gG[k] - this._signLenAry[k] != 0) {
                _$e6 = _$gG[k] - this._signLenAry[k];
                _$du = _$e6 - (this._rect.bottom - this._rect.top);
                this._signLenAry[k] = _$gG[k];
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
            if ((_$gG[k] - this._signLenAry[k]) != 0) {
                _$e6 = _$gG[k] - this._signLenAry[k];
                _$du = _$e6 - (this._rect.right - this._rect.left);
                this._signLenAry[k] = _$gG[k];
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
WidgetDockPatternBase.prototype._$sb = function (_$rR) {
    _$rR._$sb();
};
WidgetDockPatternBase.prototype._$s9 = function (_$rR) {
    return _$rR._$s9();
};
WidgetDockPatternBase.prototype._$41 = function (layoutController) {
    var left, top, right, bottom;
    left = parseInt(layoutController.read());
    top = parseInt(layoutController.read());
    right = parseInt(layoutController.read());
    bottom = parseInt(layoutController.read());
    var _$gh = 1;
    if (this._isMain) {
        _$gh = 4;
    } else {
        this.setLocationSize(left, top, right, bottom);
    }
    var secIndexStr;
    var readStr;
    var readInt;
    for (var i = 0; i < _$gh; i++) {
        this._floatPanelControllerList[i].reset();
        var _secIndex = 0;
        while (true) {
            secIndexStr = "SEC" + _secIndex;
            readStr = layoutController.read();
            if (readStr == secIndexStr) {
                var _$pg = new _$M();
                _$pg._$g6 = 0;
                this._floatPanelControllerList[i].insert(_$pg, _secIndex);
                readInt = parseInt(layoutController.read());
                _$pg._widthSec = readInt;
                readInt = parseInt(layoutController.read());
                _$pg._heightSec = readInt;
                readInt = parseInt(layoutController.read());
                _$pg._$eF = readInt;
                if (_$pg._$eF < 0) _$pg._$eF = -1;
                readInt = parseInt(layoutController.read());
                _$pg._$fB = readInt;
                if (_$pg._$fB < 0) _$pg._$fB = -1;
                _$pg._$kI = new _$F();
                readInt = parseInt(layoutController.read());
                if (readInt == 0) {
                    readStr = layoutController.read();
                    if (readStr == "ROOTBLOCK") {
                        this._$3Z(layoutController, _$pg._$kI);
                    } else break;
                } else if (readInt == 1 || readInt == 2) {
                    readStr = layoutController.read();
                    if (readStr == "ROOTBLOCK") {
                        _$pg._$g6 = readInt;
                        this._$42(layoutController, _$pg._$kI);
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
        var _$ee = this._patternPositionList[i].getSize();
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
        var _$e3 = this._patternPositionList[i].getSize();
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
            panel.rect.left = panel.rect.top = 0;
            panel.rect.right = _$pf._widthSec;
            panel.rect.bottom = _$pf._heightSec;
            panel._$iX = false;
            panel._$kI = _$pf._$kI;
            this._patternPositionList[i].insert(panel, _$e3);
            _$e3++;
        }
    }
    for (var i = 0; i < _$gh; i++) {
        var _$e1 = this._floatPanelControllerList[i].getSize();
        var _$ou, _$p6;
        if (i == 0 || i == 2) {
            _$ou = this._patternPositionList[1];
            _$p6 = this._patternPositionList[3];
        } else {
            _$ou = this._patternPositionList[0];
            _$p6 = this._patternPositionList[2];
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
        _$dD[i] = this._patternPositionList[i].getSize();
    }
    var _$fz = floatPanelController.getSize();
    for (var nn = 0; nn < _$fz; nn++) {
        var _$si = floatPanelController._list[nn].getTitle();
        var _$8G = false;
        for (var i = 0; i < positionNum; i++) {
            if (_$8G) break;
            for (var s = patternPositionPanelNumList[i]; s < _$dD[i]; s++) {
                var pbf = this._$1N(_$si, this._patternPositionList[i]._list[s]._$kI);
                if (pbf != null) {
                    _$8G = true;
                    this._$55(pbf, null, _$si, i, s);
                    _$dD[i] = this._patternPositionList[i].getSize();
                    break;
                }
            }
        }
    }
};
WidgetDockPatternBase.prototype._$1N = function (title, _$mS) {
    if (_$mS == null) return null;
    var _$pO = null;
    if (_$mS._$od != null) _$pO = _$1N(title, _$mS._$od);
    if (_$pO != null) return _$pO;
    if (_$mS._$pr != null) return _$1N(title, _$mS._$pr);
    if (_$mS._$sl != null && _$mS._$sl.lastIndexOf(title) == 0) {
        return _$mS;
    } else if (_$mS._$l1 != null && _$mS._$l1.length > 0) {
        var _$e1 = _$mS._$l1.length;
        for (var i = 0; i < _$e1; i++) {
            var _$so = _$mS._$l1[i]._title;
            if (_$so != null && _$so.lastIndexOf(title) == 0) {
                return _$mS;
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
WidgetDockPatternBase.prototype._$42 = function (layoutController, _$mS) {
};
WidgetDockPatternBase.prototype._$3Z = function (layoutController, _$mS) {
    var _$h2 = parseInt(layoutController.read());
    _$mS._$br = (_$h2 / 1000.0);
    _$mS._$8y = true;
    var _$h3 = 0;
    var _$rV = layoutController.read();
    var _$nX;
    if (_$rV == "LEFTBLOCK") {
        _$h2 = 0;
        _$nX = new _$F();
        _$mS._$od = _$nX;
        _$nX._$oV = _$mS;
        this._$3Z(layoutController, _$nX);
    } else {
        _$h2 = 1;
    }
    _$rV = layoutController.read();
    if (_$rV == "RIGHTBLOCK") {
        _$h3 = 0;
        _$nX = new _$F();
        _$mS._$pr = _$nX;
        _$nX._$oV = _$mS;
        this._$3Z(layoutController, _$nX);
    } else {
        _$h3 = 1;
    }
    if (_$h2 == 1 && _$h3 == 1) {
        this._$3X(layoutController, _$mS);
    }
    _$h2 = parseInt(layoutController.read());
    _$mS._$9y = ((_$h2 >> 8) & 0xff);
    _$mS._$9j = ((_$h2 >> 16) & 0xff);
};
WidgetDockPatternBase.prototype._$43 = function (layoutController, _$mS) {
};
WidgetDockPatternBase.prototype._$3X = function (layoutController, _$mS) {
    var _$gs = parseInt(layoutController.read());
    var i;
    for (i = 0; i < _$gs; i++) {
        var _$rZ = layoutController.read();
        var _$aS = parseInt(layoutController.read());
        var pt = new WidgetDockLocation();
        var iX, iY;
        iX = 0;
        iY = 0;
        if (this._isMain) {
            pt.x = parseInt(layoutController.read());
            pt.y = parseInt(layoutController.read());
            iX = parseInt(layoutController.read());
            iY = parseInt(layoutController.read());
        }
        _$mS._$e(_$rZ, _$aS, pt, iX, iY);
    }
};
WidgetDockPatternBase.prototype._$4T = function (_$og) {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$au();
        WidgetDockPatternBase._$l2 = null;
    }
    WidgetDockPatternBase._$l2 = _$og;
    WidgetDockPatternBase._$k1 = 0;
};
WidgetDockPatternBase.prototype.mouseMove = function (e) {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2.mouseMove(e);
    }
};
WidgetDockPatternBase.prototype._$09 = function (e) {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$09(e);
    }
};
WidgetDockPatternBase.prototype._$8 = function (patternPositionType, floatPanel) {
    var _$g1 = 0;
    var _$g7 = WidgetDockPanelStatePanel._$2V;
    if (this._$lk[patternPositionType] != null) {
        _$g1 = this._$2F(patternPositionType, this._$lk[patternPositionType]);
        if (this._$lk[patternPositionType]._$iX == false) {
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
    if (panel._$iX) {
        var rcPanel = new WidgetDockRect();
        panel._$2B(null, rcPanel);
        panel._$qI();
        var _$9y;
        var _$dt;
        if (patternPositionType == EnumPatternPositionType.Left || patternPositionType == EnumPatternPositionType.Right) {
            _$dt = rcPanel.right - rcPanel.left;
            _$9y = EnumPatternPositionType.Top;
        } else {
            _$dt = rcPanel.bottom - rcPanel.top;
            _$9y = EnumPatternPositionType.Left;
            rcPanel.top = rcPanel.left;
            rcPanel.bottom = rcPanel.right;
        }
        var _$e5 = this._$2F(patternPositionType, panel);
        this._$4n(patternPositionType, _$e5 + 1, -(_$dt + panel._$cf()));
        panel.setVisible(false);
        this._$6x(_$9y, rcPanel.top, rcPanel.bottom);
        this._$6x((_$9y + 2), rcPanel.top, rcPanel.bottom);
        this.refreshFixedPanel();
    }
    var _$g1 = this._$2F(patternPositionType, panel);
    var _$pU;
    var _$pj = this._$lk[patternPositionType];
    this._$lk[patternPositionType] = null;
    this._patternPositionList[patternPositionType].delete(_$g1);
    for (var i = _$g1; i < this._patternPositionList[patternPositionType].getSize(); i++) {
        _$pU = this._patternPositionList[patternPositionType]._list[i];
        var pb = _$pU._$kI;
        this._$6m(pb, i);
    }
    var _$oF;
    if (_$g1 == 0) {
        _$oF = null;
    } else {
        _$oF = this._patternPositionList[patternPositionType]._list[_$g1 - 1];
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
                _$nm = this._patternPositionList[patternPositionType]._list[_$dg - 1];
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
            _$dg = this._patternPositionList[patternPositionType].getSize();
        }
        panel._$kI = null;
        panel._$ah(this, patternPositionType);
        this._patternPositionList[patternPositionType].insert(panel, _$dg);
        var _$pU;
        for (var i = _$dg + 1; i < this._patternPositionList[patternPositionType].getSize(); i++) {
            _$pU = this._patternPositionList[patternPositionType]._list[i];
            this._$6m(_$pU._$kI, i);
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
    panel._$iX = true;
};
WidgetDockPatternBase.prototype._$5A = function () {
    for (var i = 0; i < 4; i++) {
        if (this._$lk[i] != null) {
            this._$lk[i]._$5A();
        }
    }
};
WidgetDockPatternBase.prototype._$5N = function () {
    if (WidgetDockPatternBase._$l2 != null) {
        WidgetDockPatternBase._$l2._$au();
        WidgetDockPatternBase._$l2 = null;
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
    if (_$nF._$ka > 0 && _$nF._$ka != 0xffffffff) {
        _$nm = this._patternPositionList[_$nU[0]]._list[_$nF._$ka - 1];
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
    if (_$nF._$ka == -1 || _$nF._$ka == 0xffffffff) {
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
    var _$f0 = _$nF._$ka;
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
                if (_$fq >= 0 && _$eG < _$fq && _$nz.cx > 20) {
                    _$nF._$kn += 20;
                    _$nz.cx -= 20;
                }
                if (_$fr >= 0 && _$fC < _$fr && _$nz.cx > 20) {
                    _$nz.cx -= 20;
                }
            } else {
                if (_$fq >= 0 && _$eG < _$fq && _$nz.cy > 20) {
                    _$nF._$kq += 20;
                    _$nz.cy -= 20;
                }
                if (_$fr >= 0 && _$fC < _$fr && _$nz.cy > 20) {
                    _$nz.cy -= 20;
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
WidgetDockPatternBase.getOffsetSize = function (size, ft, title, element) {
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
