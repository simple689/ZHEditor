function WidgetDockPanelState() {
    WidgetDockPanelState.baseConstructor.call(this);
    this._$k9 = 1;
    this._$km = 0;
    this._panelStateElement = null;
    this._$iy = false;
    this._$js = 1;
    this._$ke = null;
    this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);
    this._$3I();
    this._panelStateElement.style.backgroundColor = 'ButtonFace';
};
WidgetDockPrototype.bind(WidgetDockPanelState, WidgetDockPanel);
WidgetDockPanelState.prototype._$nJ = function (g) {
    WidgetDockPanel.prototype._$nJ.call(this, g);
    var rc = getFrame();
    _$4S(g);
};
WidgetDockPanelState.prototype.getRect = function (rc) {
    if (this._panelStateElement != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._panelStateElement);
        rc.top = WidgetDockElementController.getElementTop(this._panelStateElement);
        rc.right = rc.left + WidgetDockElementController.getElementWidth(this._panelStateElement);
        rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._panelStateElement);
    }
};
WidgetDockPanelState.prototype.refresh = function () {
    this._$4S();
};
WidgetDockPanelState.prototype._$3I = function () {
    this._panelStateElement._panelStatePanel = this;
    this._panelStateElement.onmousedown = WidgetDockPanelState.onMouseDown;
    this._panelStateElement.onmousemove = WidgetDockPanelState.onMouseMove;
};
WidgetDockPanelState.onMouseDown = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._panelStatePanel.mouseDown(e);
    } else {
        e.srcElement._panelStatePanel.mouseDown(e);
    }
    return false;
};
WidgetDockPanelState.onMouseMove = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._panelStatePanel.mouseMove(e);
    } else {
        e.srcElement._panelStatePanel.mouseMove(e);
    }
};
WidgetDockPanelState.prototype._$5K = function (floatPanel) {
    return false;
};
WidgetDockPanelState.prototype._$5q = function () {
    this.getRect(this.rect);
};
WidgetDockPanelState.prototype._$w = function (floatPanel, pt) {
    var rc = new WidgetDockRect();
    var _$8m = false;
    floatPanel.getRect(rc);
    if (this._$le._patternPositionType == EnumPatternPositionType.Left || this._$le._patternPositionType == EnumPatternPositionType.Right) {
        if (pt.y < rc.top) {
            _$8m = true;
        } else {
            _$8m = false;
        }
    } else {
        if (pt.x < rc.left) {
            _$8m = true;
        } else {
            _$8m = false;
        }
    }
    return _$8m;
};
WidgetDockPanelState.prototype._$2b = function (pt, _$ny) {
    var _$pO = _$kI;
    var _$8x = null;
    var pf;
    while (true) {
        if (_$pO._$od == null && _$pO._$pr == null) {
            if (_$pO._floatPanel != null && !_$pO._$8y) {
                _$ny[0] = _$pO._floatPanel._$jr;
                if (_$w(_$pO._floatPanel, pt)) {
                    _$8x = _$pO;
                }
            }
            break;
        } else {
            if (_$pO._$od != null) {
                pf = _$pO._$od;
                if (pf._floatPanel != null && !pf._$8y) {
                    _$ny[0] = pf._floatPanel._$jr;
                    if (_$w(pf._floatPanel, pt)) {
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
WidgetDockPanelState.prototype._$03 = function (mainPattern, _$mX, pt, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    _$oQ[0] = null;
    var rcPanel = new WidgetDockRect();
    WidgetDockPatternBase._$2P(_$je, rcPanel);
    var _$9z = _$3E(rcPanel, pt, _$de);
    if (_$9z != 0xff) {
        if (this._$le._patternPositionType == EnumPatternPositionType.Left || this._$le._patternPositionType == EnumPatternPositionType.Right) {
            _$nz.cy = rect.bottom - rect.top;
        } else {
            _$nz.cx = rect.right - rect.left;
        }
    }
    return _$9z;
};
WidgetDockPanelState.prototype._$6v = function (patternBase, _$9c, _$cA) {
    this._$6q(this.rect);
    this.refresh();
    var _$8j = new WidgetDockListController();
    this._$2l(_$8j, null);
    var _$e1 = _$8j.getSize();
    var _$q7 = new WidgetDockRect();
    var _$eq = new Array(1);
    _$eq[0] = -1;
    var _$eR = new Array(1);
    var _$ol;
    var _$9t;
    if (this._$le._patternPositionType == EnumPatternPositionType.Top || this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
        _$9t = true;
    } else {
        _$9t = false;
    }
    var _$8D = new Array(1);
    var _$gE = new Array(1);
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
    for (var i = 0; i < _$e1; i++) {
        _$ol = _$8j._list[i];
        _$ol._$nQ.getRect(_$q7);
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
            rc.bottom = _$8j._list[_$eq[0]].size.cy;
            _$fn = _$eR[0] + _$2H(_$8j, _$eq[0], _$e1, false) - (this.rect.right - this.rect.left);
        } else {
            rc.left = 0;
            rc.right = _$8j._list[_$eq[0]].size.cx;
            _$fn = _$eR[0] + _$2H(_$8j, _$eq[0], _$e1, false) - (this.rect.bottom - this.rect.top);
        }
        if (_$fn > _$fx) _$eR[0] -= _$fx; else _$eR[0] -= _$fn;
        if (_$9t) rc.right = _$eR[0]; else rc.bottom = _$eR[0];
        for (var i = 0; i < _$eq[0]; i++) {
            _$ol = _$8j._list[_$eq[0] - 1 - i];
            _$ol._$nQ.getRect(_$q7);
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
        for (var i = _$eq[0]; i < _$e1; i++) {
            _$ol = _$8j._list[i];
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
WidgetDockPanelState.prototype._$4j = function (mainPattern, _$cY, patternPositionType) {
    if (this._$iX) {
        var plt = new WidgetDockLocation();
        var rcPanel = new WidgetDockRect();
        this.getRect(rcPanel);
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
        _$ql.right = plt.x + WidgetDockPatternBase.getWidth(rcPanel);
        _$ql.bottom = plt.y + WidgetDockPatternBase.getHeight(rcPanel);
        this._$6q(_$ql);
    }
};
WidgetDockPanelState.prototype._$2B = function (floatPanel, pRC) {
    if (this._panelStateElement == null) {
        pRC.left = pRC.right = 0;
        pRC.top = pRC.bottom = 0;
        return;
    }
    this.getRect(pRC);
};
WidgetDockPanelState.prototype._$11 = function (_$mZ) {
    if (_$mZ._$oV == null) {
        _$mZ._floatPanel = null;
    } else {
        var _$pb;
        if (_$mZ == _$mZ._$oV._$od) {
            _$pb = _$mZ._$oV._$pr;
            _$mZ._$oV._$od = _$pb._$od;
            _$mZ._$oV._$pr = _$pb._$pr;
            if (_$pb._$od != null) {
                _$pb._$od._$oV = _$mZ._$oV;
            }
            if (_$pb._$pr != null) {
                _$pb._$pr._$oV = _$mZ._$oV;
            }
            _$mZ._$oV._floatPanel = _$pb._floatPanel;
            _$mZ._$oV._$8y = _$pb._$8y;
            if (_$pb._floatPanel != null) {
                if (_$pb._floatPanel._$kA == _$pb) {
                    _$pb._floatPanel._$kA = _$mZ._$oV;
                }
                if (_$pb._floatPanel._$l6 == _$pb) {
                    _$pb._floatPanel._$l6 = _$mZ._$oV;
                }
            }
        } else {
            if (_$mZ._$oV._$oV == null) {
                _$pb = _$mZ._$oV._$od;
                _$mZ._$oV._$od = _$mZ._$oV._$pr = null;
                _$mZ._$oV._floatPanel = _$pb._floatPanel;
                _$mZ._$oV._$8y = _$pb._$8y;
                if (_$pb._floatPanel != null) {
                    if (_$pb._floatPanel._$kA == _$pb) {
                        _$pb._floatPanel._$kA = _$mZ._$oV;
                    }
                    if (_$pb._floatPanel._$l6 == _$pb) {
                        _$pb._floatPanel._$l6 = _$mZ._$oV;
                    }
                }
            } else {
                _$pb = _$mZ._$oV;
                _$pb._$oV._$pr = _$pb._$od;
                _$pb._$od._$oV = _$pb._$oV;
            }
        }
        _$pb._floatPanel = null;
        _$pb._$od = _$pb._$pr = null;
    }
};
WidgetDockPanelState.prototype._$qI = function () {
    if (this._$je != null) {
        WidgetDockPanel.prototype._$qI.call(this);
        this._$je = null;
        this._$iy = false;
    }
};
WidgetDockPanelState.prototype._$53 = function (_$mS) {
    _$11(_$mS);
    if (_$mS != _$kI) {
        return false;
    } else if (this._$kI._$pr == null && this._$kI._$pr == null && this._$kI._floatPanel == null) {
        return true;
    }
    return false;
};
WidgetDockPanelState.prototype._$f = function (mainPattern, _$mS, pRC) {
    if (this._$kI == _$mS) return true;
    var _$pN = _$kI;
    var _$8g = true;
    while (_$pN != null) {
        if (_$pN._$od == null && _$pN._$pr == null && !_$pN._$8y) {
            _$8g = false;
            break;
        }
        if (_$pN._$od != null && _$pN._$od._floatPanel != null && !_$pN._$od._$8y) {
            _$8g = false;
            break;
        }
        _$pN = _$pN._$pr;
    }
    if (!_$8g) {
        _$mS._$8y = false;
        var _$e1, _$er;
        var _$8j = new WidgetDockListController();
        _$er = _$2l(_$8j, _$mS._floatPanel);
        _$e1 = _$8j.getSize();
        _$mS._$8y = true;
        var _$9y;
        if (this._$le != null) _$9y = this._$le._patternPositionType; else _$9y = _$mS._floatPanel._$lf._$j1;
        var _$9t = true;
        if (_$9y == EnumPatternPositionType.Right || _$9y == EnumPatternPositionType.Left) _$9t = false;
        var _$8D = new Array(1);
        var _$gE = new Array(1);
        var iid = new Array(1);
        var imo = new Array(1);
        this._$04(_$9t, _$8j, _$8D, _$gE, iid, imo);
        var _$ow = _$8j._list[_$er];
        _$8j.delete(_$er);
        var _$g2 = _$2m(_$8j, 0, _$8j.getSize(), _$9t);
        var _$fW = new Array(1);
        if ((_$9t && (_$ow.size.cy >= (rect.bottom - rect.top))) || (!_$9t && (_$ow.size.cx >= (rect.right - rect.left)))) {
            if (_$9t && (_$g2 < _$ow.size.cy)) {
                _$fW[0] = _$g2 - _$ow.size.cy;
            } else if (!_$9t && (_$g2 < _$ow.size.cx)) {
                _$fW[0] = _$g2 - _$ow.size.cx;
            }
        }
        var _$eL = _$2H(_$8j, 0, _$8j.getSize(), false);
        if ((_$9t && (_$eL <= (this.rect.right - this.rect.left))) || (!_$9t && (_$eL <= (this.rect.bottom - this.rect.top)))) {
            var j;
            for (j = 0; j < _$8j.getSize(); j++) {
                var _$ol = _$8j._list[j];
                var _$ov = _$ol._$nQ;
                _$ov._$5S();
            }
            _$5C(null, 0, _$8j, _$9t);
            this._$je.refresh();
            return _$8g;
        }
        if (_$8D[0]) {
            var _$eP = this._$2s(_$8j, 0, _$8j.getSize());
            if ((_$9t && (_$eP <= (this.rect.right - this.rect.left))) || (!_$9t && (_$eP <= (this.rect.bottom - this.rect.top)))) {
                var _$mI = new WidgetDockListController();
                this._$2t(_$8j, 0, _$mI);
                _$e1 = _$mI.getSize();
                var _$gu = 0;
                _$sM;
                var k;
                for (k = 0; k < _$e1; k++) {
                    _$ol = _$8j._list[k];
                    if (_$9t) {
                        _$gu += _$ol._$nQ.getWidth();
                    } else {
                        _$gu += _$ol._$nQ.getHeight();
                    }
                }
                var _$rK;
                if (_$9t) _$rK = ((this.rect.right - this.rect.left) - _$gu); else _$rK = ((this.rect.bottom - this.rect.top) - _$gu);
                _$6w(_$8j, _$rK, _$fW);
                if (_$fW[0] != 0) {
                    var _$e5 = this._$le._mainPattern._$2F(this._$le._patternPositionType, this);
                    this._$le._mainPattern._$5p(this, _$e5, this._$le._patternPositionType, _$fW[0]);
                }
            } else {
                _$6w(_$8j, 0, _$fW);
                if (_$fW[0] != 0) {
                    var _$e5 = this._$le._mainPattern._$2F(this._$le._patternPositionType, this);
                    this._$le._mainPattern._$5p(this, _$e5, this._$le._patternPositionType, _$fW[0]);
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
WidgetDockPanelState.prototype._$2H = function (d) {
    var _$8j = new WidgetDockListController();
    _$2l(_$8j, null);
    d.width = _$2H(_$8j, 0, _$8j.getSize(), false);
    d.height = 0;
    var _$e1 = _$8j.getSize();
    if (_$e1 > 0) {
        var _$ol = _$8j._list[_$e1 - 1];
        var rc = _$ol._$nQ.getFrame();
        if (this._$le._patternPositionType == EnumPatternPositionType.Top || this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
            d.height = rc.x + rc.width;
        } else {
            d.height = rc.y + rc.height;
        }
    }
};
WidgetDockPanelState.prototype._$2H = function (floatPanelController, left, right, _$7N) {
    var _$fe = 0;
    var _$os;
    var i;
    for (i = left; i < right; i++) {
        _$os = floatPanelController._list[i];
        var _$9y;
        if (this._$le != null) _$9y = this._$le._patternPositionType; else _$9y = _$os._$nQ._$lf._$j1;
        if (_$9y == EnumPatternPositionType.Top || _$9y == EnumPatternPositionType.Bottom) {
            if (!_$7N) _$fe += _$os.size.cx; else _$fe += _$os._$nQ.getWidth();
        } else {
            if (!_$7N) _$fe += _$os.size.cy; else _$fe += _$os._$nQ.getHeight();
        }
    }
    return _$fe;
};
WidgetDockPanelState.prototype._$2l = function (floatPanelController, floatPanel) {
    var _$eq = 0;
    var _$er = -1;
    var _$pO = this._$kI;
    while (_$pO != null) {
        if (_$pO._$od == null && _$pO._$pr == null) {
            if (!_$pO._$8y && _$pO._floatPanel != null) {
                var _$ol = new _$44();
                var bts = _$pO._floatPanel._$lf._$j1;
                if (this._$le != null) _$pO._floatPanel._$lf._$j1 = this._$le._patternPositionType;
                _$pO._floatPanel._$2w(_$ol.size, 0, null, false);
                _$pO._floatPanel._$lf._$j1 = bts;
                _$ol._$nQ = _$pO._floatPanel;
                floatPanelController.add(_$ol);
                if (floatPanel == _$pO._floatPanel) _$er = _$eq;
            }
            break;
        } else {
            if (_$pO._$od != null) {
                var pf = _$pO._$od;
                if (pf._floatPanel != null && !pf._$8y) {
                    if (pf._floatPanel == floatPanel) _$er = _$eq;
                    var _$ol = new _$44();
                    var bts = pf._floatPanel._$lf._$j1;
                    if (this._$le != null) {
                        pf._floatPanel._$lf._$j1 = this._$le._patternPositionType;
                    }
                    pf._floatPanel._$2w(_$ol.size, 0, null, false);
                    pf._floatPanel._$lf._$j1 = bts;
                    _$ol._$nQ = pf._floatPanel;
                    floatPanelController.add(_$ol);
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
WidgetDockPanelState.prototype._$7 = function (mainPattern, floatPanel) {
    if (floatPanel._$c2() != this._$je) {
        this._$je.add(floatPanel);
    }
    var rcPanel = new WidgetDockRect();
    var size = new _$5Y();
    floatPanel._$2w(size, 0, null, false);
    var floatPanelController = new WidgetDockListController();
    var _$er = _$2l(floatPanelController, floatPanel);
    var _$ol = null;
    floatPanel._$jW = _$1d._$jX;
    _$1d._$jX += 1;
    var _$e1 = floatPanelController.getSize();
    var _$8D = new Array(1);
    _$8D[0] = false;
    var _$gE = new Array(1);
    var i = 0;
    var _$eq = new Array(1);
    var _$eR = new Array(1);
    var _$9t;
    if (this._$le._patternPositionType == EnumPatternPositionType.Left || this._$le._patternPositionType == EnumPatternPositionType.Right) {
        _$9t = false;
    } else {
        _$9t = true;
    }
    if (_$er < 0) {
        return;
    }
    _$ol = floatPanelController._list[_$er];
    floatPanelController.delete(_$er);
    this._$04(_$9t, floatPanelController, _$8D, _$gE, _$eq, _$eR);
    floatPanelController.insert(_$ol, _$er);
    var _$eI = 0;
    _$eI = floatPanel._$2o(_$9t);
    if (_$8D[0] || (_$9t && ((this.rect.right - this.rect.left) < (_$gE[0] + _$eI))) || (!_$9t && ((this.rect.bottom - this.rect.top) < (_$gE[0] + _$eI)))) {
        var _$eP = this._$2s(floatPanelController, 0, floatPanelController.getSize());
        if ((_$9t && ((this.rect.right - this.rect.left) >= _$eP)) || (!_$9t && ((this.rect.bottom - this.rect.top) >= _$eP))) {
            var _$mI = new WidgetDockListController();
            this._$2t(floatPanelController, 0, _$mI);
            for (i = 0; i < _$e1; i++) {
                _$ol = floatPanelController._list[i];
                if (_$ol._$nQ != floatPanel) {
                    _$ol.size.cx = _$ol._$nQ.getWidth();
                    _$ol.size.cy = _$ol._$nQ.getHeight();
                    if (_$9t) {
                        _$ol._$du = _$ol._$nQ.getWidth();
                    } else {
                        _$ol._$du = _$ol._$nQ.getHeight();
                    }
                } else {
                    var it = floatPanel._$2o(_$9t);
                    if (floatPanel._$k6 > it) {
                        floatPanel._$k6 = it;
                    }
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
                _$ol = floatPanelController._list[_$er - 1];
                var _$qo = new WidgetDockRect();
                _$ol._$nQ.getRect(_$qo);
                var _$eO = 0;
                _$eO = _$ol._$nQ._$2r();
                if (_$9t && (_$qo.right >= pt.x)) {
                    if ((pt.x - _$qo.left) > _$eO) {
                        _$ol._$nQ._$k6 = pt.x - _$qo.left;
                    } else {
                        _$ol._$nQ._$k6 = _$eO;
                    }
                    _$ol._$du = _$ol._$nQ._$k6;
                } else if (!_$9t && (_$qo.bottom >= pt.y)) {
                    if ((pt.y - _$qo.top) > _$eO) {
                        _$ol._$nQ._$k6 = pt.y - _$qo.top;
                    } else {
                        _$ol._$nQ._$k6 = _$eO;
                    }
                    _$ol._$du = _$ol._$nQ._$k6;
                }
            }
            if (_$er < (_$e1 - 1)) {
                _$ol = floatPanelController._list[_$er + 1];
                var _$qo = new WidgetDockRect();
                _$ol.bar.getRect(_$qo);
                var _$eO = 0;
                _$eO = _$ol._$nQ._$2r();
                if (_$9t && (_$qo.left <= pt.x)) {
                    if ((_$qo.right - pt.x) > _$eO) {
                        _$ol._$nQ._$k6 = _$qo.right - pt.x;
                    } else {
                        _$ol._$nQ._$k6 = _$eO;
                    }
                    _$ol._$du = _$ol._$nQ._$k6;
                } else if (!_$9t && (_$qo.top <= pt.y)) {
                    if ((_$qo.bottom - pt.y) > _$eO) {
                        _$ol._$nQ._$k6 = _$qo.bottom - pt.y;
                    } else {
                        _$ol._$nQ._$k6 = _$eO;
                    }
                    _$ol._$du = _$ol._$nQ._$k6;
                }
            }
            var _$dN = 0;
            for (i = 0; i < _$e1; i++) {
                _$ol = floatPanelController._list[i];
                if (_$ol._$nQ != floatPanel) {
                    _$dN += _$ol._$du;
                } else {
                    _$dN += _$ol._$nQ._$k6;
                }
            }
            var _$gD = this.rect.right - this.rect.left;
            if (!_$9t) _$gD = this.rect.bottom - this.rect.top;
            var _$rK = (_$gD - _$dN);
            var _$dZ = new Array(1);
            this._$5c(floatPanelController, 0, 0, floatPanelController.getSize(), _$mI, _$rK, _$9t, _$gD, 0, _$dZ);
            _$dZ[0] = this._$0m(_$9t, _$dZ[0]);
            if (_$dZ[0] != 0) {
                var _$e5 = this._$le._mainPattern._$2F(this._$le._patternPositionType, this);
                this._$le._mainPattern._$5p(this, _$e5, this._$le._patternPositionType, _$dZ[0]);
            }
        } else {
            var _$fX = new Array(1);
            this._$6w(floatPanelController, 0, _$fX);
        }
        return;
    }
    this._$5C(floatPanel, _$er, floatPanelController, _$9t);
    return;
};
WidgetDockPanelState.prototype._$5C = function (floatPanel, _$cP, _$8j, _$9t) {
};
WidgetDockPanelState.prototype._$2m = function (_$u, left, right, _$8c) {
    var _$ol = null;
    var _$eI = 0;
    var i;
    for (i = left; i < right; i++) {
        _$ol = _$u._list[i];
        if (_$8c) {
            if (_$ol.size.cy > _$eI) {
                _$eI = _$ol.size.cy;
            }
        } else {
            if (_$ol.size.cx > _$eI) {
                _$eI = _$ol.size.cx;
            }
        }
    }
    return _$eI;
};
WidgetDockPanelState.prototype.setVisible = function (_$8e) {
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementVisible(this._panelStateElement);
    }
    this._$iX = _$8e;
};
WidgetDockPanelState.prototype._$4S = function (g) {
};
WidgetDockPanelState.prototype._$qy = function (wnd, rc) {
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
WidgetDockPanelState.prototype._$6q = function (rc) {
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementLeftTop(this._panelStateElement, rc.left, rc.top);
        WidgetDockElementController.setElementSize(this._panelStateElement, rc.right - rc.left, rc.bottom - rc.top);
        this.refresh();
    }
};
WidgetDockPanelState.prototype._$0m = function (_$9t, iwh) {
    var _$e7 = 0;
    if (!_$9t && iwh != (this.rect.right - this.rect.left)) {
        _$e7 = iwh - (this.rect.right - this.rect.left);
        if (this._$le._patternPositionType == EnumPatternPositionType.Right) this.rect.left -= _$e7;
        this.rect.right = this.rect.left + iwh;
    } else if (_$9t && iwh != (this.rect.bottom - this.rect.top)) {
        _$e7 = iwh - (this.rect.bottom - this.rect.top);
        if (this._$le._patternPositionType == EnumPatternPositionType.Bottom) this.rect.top -= _$e7;
        this.rect.bottom = this.rect.top + iwh;
    }
    return _$e7;
};
WidgetDockPanelState.prototype._$2s = function (_$8j, left, right) {
    var i;
    var _$ol;
    var _$gD = 0;
    var _$eM = 0;
    for (i = left; i < right; i++) {
        _$ol = _$8j._list[i];
        _$eM = _$ol._$nQ._$2r();
        _$gD += _$eM;
    }
    return _$gD;
};
WidgetDockPanelState.prototype._$2t = function (_$8j, _$dS, _$mI) {
    var _$e1 = _$8j.getSize();
    var _$fi;
    var bin;
    var i;
    var j;
    var _$ol, _$oJ;
    for (i = _$dS; i < _$e1; i++) {
        _$fi = _$mI.getSize();
        bin = false;
        _$ol = _$8j._list[i];
        for (j = 0; j < _$fi; j++) {
            _$oJ = _$mI._list[j];
            if (_$ol._$nQ._$jW < _$oJ._$nQ._$jW) {
                _$mI.insert(_$ol, j);
                bin = true;
                break;
            }
        }
        if (!bin) {
            _$mI.add(_$ol);
        }
    }
};
WidgetDockPanelState.prototype._$5c = function (_$8j, _$cx, _$cw, _$cF, _$mI, _$rJ, _$9t, _$gD, _$g4, _$eX) {
    var j;
    var _$oJ;
    var _$ol;
    var szs = new _$5Y();
    var _$e1 = _$mI.getSize();
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
            _$oJ = _$mI._list[j];
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
            _$oJ = _$mI._list[j];
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
        _$oJ = _$mI._list[_$eq];
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
        _$ol = _$8j._list[i];
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
        _$ol = _$8j._list[i];
        _$ov = _$ol._$nQ;
        _$ov._$5n(_$9t, _$g4, _$eX[0]);
    }
};
WidgetDockPanelState.prototype._$6w = function (_$8j, _$rJ, _$dB) {
    var i;
    var j;
    var _$ol;
    _$dB[0] = 0;
    var _$ov;
    var _$e1 = _$8j.getSize();
    var _$mI = new WidgetDockListController();
    this._$2t(_$8j, 0, _$mI);
    var _$q7 = new WidgetDockRect();
    var _$9t;
    if (this._$le._patternPositionType == EnumPatternPositionType.Top || this._$le._patternPositionType == EnumPatternPositionType.Bottom) _$9t = true; else _$9t = false;
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
        _$ol = _$8j._list[i];
        _$eM = _$ol._$nQ._$2r();
        if ((_$eP + _$eM) > _$gD) {
            if (i >= 1) {
                var panel = _$8j._list[i - 1];
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
                    _$ol = _$8j._list[i];
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
                            _$ol = _$8j._list[k];
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
            _$ol = _$8j._list[i];
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
        _$e1 = _$mI.getSize();
        this._$js = _$go;
    } else {
        _$g4 = 0;
        _$gw = 0;
        for (j = 0; j < _$e1; j++) {
            _$ol = _$8j._list[j];
            _$ov = _$ol._$nQ;
            _$ov.getRect(_$q7);
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
    this._$5c(_$8j, 0, _$gw, _$8j.getSize(), _$mI, _$rJ, _$9t, _$gD, _$g4, _$eX);
    this._$ke[_$go - 1] = _$eX[0];
    _$gp += _$eX[0];
    if (_$9t) _$dB[0] = _$gp - (this.rect.bottom - this.rect.top); else _$dB[0] = _$gp - (this.rect.right - this.rect.left);
    if (_$dB[0] != 0) {
        if (this._$le._patternPositionType == EnumPatternPositionType.Left) {
            this.rect.right += _$dB[0];
        } else if (this._$le._patternPositionType == EnumPatternPositionType.Right) {
            this.rect.left -= _$dB[0];
        } else if (this._$le._patternPositionType == EnumPatternPositionType.Top) {
            this.rect.bottom += _$dB[0];
        } else if (this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
            this.rect.top -= _$dB[0];
        }
        this._$js = _$go;
    }
};
WidgetDockPanelState.prototype._$04 = function (_$9t, _$8j, _$8i, _$dL, _$dF, _$dG) {
    _$8i[0] = false;
    _$dL[0] = 0;
    var i;
    var _$e1 = _$8j.getSize();
    var _$ol;
    var _$q7 = new WidgetDockRect();
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j._list[i];
        _$ol._$nQ.getRect(_$q7);
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
        _$ol = _$8j._list[j];
        _$ol._$nQ.getRect(_$q7);
        if (_$9t) _$dL[0] += _$q7.right - _$q7.left; else _$dL[0] += _$q7.bottom - _$q7.top;
    }
};
WidgetDockPanelState.prototype._$g = function (_$8h, _$cP, _$8c, pt) {
    var _$pH = new WidgetDockLocation();
    _$pH.x = pt.x;
    _$pH.y = pt.y;
    WidgetDockPatternBase._$6a(this._$je, _$pH);
    var _$dR = this._$2s(_$8h, 0, _$cP);
    var _$dQ = this._$2H(_$8h, 0, _$cP, false);
    var _$e1 = _$8h.getSize();
    var _$dy = this._$2s(_$8h, _$cP, _$e1);
    var _$dx = this._$2H(_$8h, _$cP, _$e1, false);
    var _$oL = _$dR;
    var _$oM = _$dQ;
    var _$dP = this._$2H(_$8h, 0, _$cP, true);
    var _$dw = this._$2H(_$8h, _$cP, _$8h.getSize(), true);
    var _$dO, _$dv;
    var _$or = _$8h._list[_$cP];
    var _$qk = new WidgetDockRect();
    _$or._$nQ.getRect(_$qk);
    var _$8f = true;
    var _$8w = new WidgetDockListController();
    var _$7x = new WidgetDockListController();
    var _$8A = new WidgetDockListController();
    var _$7y = new WidgetDockListController();
    var i = 0;
    for (i = 0; i < _$cP; i++) {
        _$or = _$8h._list[i];
        if (_$8c) _$or._$du = _$or._$nQ.getWidth(); else _$or._$du = _$or._$nQ.getHeight();
        _$8w.add(_$8h._list[i]);
    }
    for (i = _$cP; i < _$e1; i++) {
        _$or = _$8h._list[i];
        if (_$8c) _$or._$du = _$or._$nQ.getWidth(); else _$or._$du = _$or._$nQ.getHeight();
        _$7x.add(_$8h._list[i]);
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
        this._$5c(_$8w, 0, 0, _$8w.getSize(), _$8A, _$dO, _$8c, _$dT, 0, _$eX);
        var _$eW = _$eX[0];
        this._$5c(_$7x, _$dT, 0, _$7x.getSize(), _$7y, _$dv, _$8c, _$dz, 0, _$eX);
        if (_$eX[0] > _$eW) _$eW = _$eX[0];
        var _$e7 = this._$0m(_$8c, _$eW);
        if (_$e7 != 0) {
            var _$e5 = this._$le._mainPattern._$2F(this._$le._patternPositionType, this);
            this._$le._mainPattern._$5p(this, _$e5, this._$le._patternPositionType, _$e7);
        }
        for (i = 0; i < _$8h.getSize(); i++) {
            _$or = _$8h._list[i];
            _$ov = _$or._$nQ;
            _$ov._$5n(_$8c, 0, _$eW);
            if (_$8c) _$ov._$k6 = _$ov.getWidth(); else _$ov._$k6 = _$ov.getHeight();
        }
    }
};
WidgetDockPanelState.prototype._$5z = function (floatPanel, pt, _$q5) {
    var pp = new WidgetDockLocation();
    pp.x = _$q5.left;
    pp.y = _$q5.top;
    WidgetDockPatternBase._$6a(this._$je, pp);
    var _$ov = floatPanel;
    var _$9t = false;
    if (floatPanel._patternPositionType == EnumPatternPositionType.Bottom || floatPanel._patternPositionType == EnumPatternPositionType.Top) _$9t = true;
    var _$8j = new WidgetDockListController();
    var _$er = this._$2l(_$8j, floatPanel);
    var _$dK = new Array(1);
    var _$dF = new Array(1);
    var _$dG = new Array(1);
    var _$8i = new Array(1);
    this._$04(_$9t, _$8j, _$8i, _$dK, _$dF, _$dG);
    if (_$8i[0]) {
        this._$g(_$8j, _$er, _$9t, pt);
        return;
    }
    if (_$ov._$ix) {
        var _$qv = new WidgetDockRect();
        WidgetDockPatternBase._$2P(_$ov, _$qv);
        if (_$9t) {
            if ((pt.x > _$qv.left) && (pt.x < _$qv.right)) return;
        } else {
            if ((pt.y > _$qv.top) && (pt.y < _$qv.bottom)) return;
        }
    }
    var _$o0 = floatPanel._$kA;
    this._$11(_$o0);
    var _$eT = new Array(1);
    var _$pN = this._$2b(pp, _$eT);
    this._$c(floatPanel, _$pN);
    this._$7(null, floatPanel);
};
WidgetDockPanelState.prototype._$0B = function (floatPanel, _$nq, _$cD) {
    if (_$nq == null) {
        return;
    }
    if (_$cD == EnumPatternPositionType.Left || _$cD == EnumPatternPositionType.Top) {
        this._$c(floatPanel, _$nq);
    } else {
        var _$oU = _$nq._$oV;
        if (_$oU == null || _$oU._$pr == _$nq) {
            _$nq = null;
        } else {
            if (_$oU._$pr._$od == null && _$oU._$pr._$pr == null) {
                _$nq = _$oU._$pr;
            } else if (_$oU._$pr._$od != null) {
                _$nq = _$oU._$pr._$od;
            }
        }
        this._$c(floatPanel, _$nq);
    }
};
WidgetDockPanelState.prototype._$0B = function (floatPanel, pt, _$87) {
    var _$eT = new Array(1);
    if (_$87) {
        WidgetDockPatternBase._$6a(_$je, pt);
    }
    var _$pN = this._$2b(pt, _$eT);
    floatPanel._$jr = _$eT[0];
    this._$c(floatPanel, _$pN);
};
WidgetDockPanelState.prototype._$c = function (floatPanel, _$mR) {
    if (this._$kI._$od == null && this._$kI._$pr == null && this._$kI._floatPanel == null) {
        this._$kI._floatPanel = floatPanel;
        floatPanel._$kA = this._$kI;
        return;
    }
    var _$nI = new _$F();
    _$nI._floatPanel = floatPanel;
    floatPanel._$kA = _$nI;
    if (_$mR != null) {
        var _$pm = new _$F();
        if (_$mR._$oV == null) {
            _$pm._floatPanel = _$mR._floatPanel;
            _$pm._$8y = _$mR._$8y;
            if (_$mR._floatPanel._$kA == _$mR) {
                _$mR._floatPanel._$kA = _$pm;
            }
            if (_$mR._floatPanel._$l6 == _$mR) {
                _$mR._floatPanel._$l6 = _$pm;
            }
            _$mR._$od = _$nI;
            _$nI._$oV = _$mR;
            _$mR._$pr = _$pm;
            _$pm._$oV = _$mR;
            _$mR._floatPanel = null;
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
        while (_$o8._$pr != null) {
            _$o8 = _$o8._$pr;
        }
        var _$op = new _$F();
        _$op._floatPanel = _$o8._floatPanel;
        _$op._$8y = _$o8._$8y;
        if (_$o8._floatPanel != null) {
            if (_$o8._floatPanel._$kA == _$o8) {
                _$o8._floatPanel._$kA = _$op;
            }
            if (_$o8._floatPanel._$l6 == _$o8) {
                _$o8._floatPanel._$l6 = _$op;
            }
        }
        _$o8._floatPanel = null;
        _$o8._$od = _$op;
        _$op._$oV = _$o8;
        _$o8._$pr = _$nI;
        _$nI._$oV = _$o8;
    }
};
WidgetDockPanelState.prototype._$ah = function (patternBase, patternPositionType) {
    this._$km = 0;
    WidgetDockPanel.prototype._$ah.call(this, patternBase, patternPositionType);
};
WidgetDockPanelState.prototype._$66 = function (layout) {
};
WidgetDockPanelState.prototype._$63 = function (mainPattern, layout, _$mS) {
};
WidgetDockPanelState.prototype.initPanelInfoLayout = function (mainPattern, layout, _$mS) {
};
