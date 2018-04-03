function _$N() {
    this._$je = 0;
    this._patternPositionType = 0;
    this._$iI = false;
    this._$jR = 0;
    this._$jS = 0;
    this._mainPattern = null;
    this._$kE = null;
    this._$km = WidgetDockPatternBase._$5Z;
    this._$lx = new WidgetDockRect();
    this._$ly = new WidgetDockRect();
    this._$iG = false;
    this._panelIndex = 0;
    this._$hj = null;
    this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);
    this._panelStateElement.style.border = "1px solid";
    WidgetDockElementController.setElementSize(this._panelStateElement, this._$km, this._$km);
    this._panelStateElement._$4y = this;
    this._panelStateElement.onmousedown = _$N.onMouseDown;
    this._panelStateElement.onmousemove = _$N.onMouseMove;
};
_$N.onMouseDown = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4y.mouseDown(e);
    } else {
        e.srcElement._$4y.mouseDown(e);
    }
    return false;
};
_$N.onMouseMove = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4y.mouseMove(e);
    } else {
        e.srcElement._$4y.mouseMove(e);
    }
};
_$N._floatPanelController = new WidgetDockListController();
_$N.prototype._$r8 = function (left, top, width, height) {
};
_$N.prototype.setSize = function (width, height) {
    if (this._panelStateElement == null) return;
    WidgetDockElementController.setElementSize(this._panelStateElement, width, height);
    if (width == 0 && height == 0) {
        this._panelStateElement.style.visibility = "hidden";
    }
    this.refresh();
};
_$N.prototype.setElementZIndex = function (_$cR) {
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementZIndex(this._panelStateElement, _$cR);
    }
};
_$N.prototype.mouseDown = function (e) {
    if (WidgetDockController.isButtonAvailable(e.button)) {
        WidgetDockWindow._movePanelStateController = this;
        this._$s9(this);
    }
    return false;
};
_$N.prototype.mouseUp = function (e) {
    if (!this._$iG) return;
    this._$1x();
    this._$iG = false;
};
_$N.prototype._$rG = function (wh) {
    this._$km = wh;
    if (wh == 0) {
        this._panelStateElement.style.visibility = "hidden";
    }
};
_$N.prototype._$cf = function () {
    return this._$km;
};
_$N.prototype.mouseMove = function () {
    if (this._patternPositionType == EnumPatternPositionType.Left || this._patternPositionType == EnumPatternPositionType.Right) {
        this._panelStateElement.style.cursor = "e-resize";
    } else {
        this._panelStateElement.style.cursor = "n-resize"
    }
};
_$N.prototype._$rh = function (mainPattern) {
    this._mainPattern = mainPattern;
    mainPattern.add(this);
};
_$N.prototype._$ms = function (e) {
    if (!this._$iG) return;
    var pt = new WidgetDockPoint();
    WidgetDockElementController.getMousePoint(e, pt);
    this._$4i(pt);
    this.refresh();
};
_$N.prototype.getPoint = function () {
    var pt = new WidgetDockPoint();
    pt.x = WidgetDockElementController.getElementLeft(this._panelStateElement);
    pt.y = WidgetDockElementController.getElementTop(this._panelStateElement);
    return pt;
};
_$N.prototype.getSize = function () {
    var size = new WidgetDockSize();
    size.width = WidgetDockElementController.getElementWidth(this._panelStateElement);
    size.height = WidgetDockElementController.getElementHeight(this._panelStateElement);
    return size;
};
_$N.prototype._$s9 = function () {
    if (this._$iG) return;
    this._$iG = true;
    var _$pL = this.getPoint();
    var dd = this.getSize();
    this._$lx.left = _$pL.x;
    this._$lx.top = _$pL.y;
    this._$lx.right = dd.width + _$pL.x;
    this._$lx.bottom = _$pL.y + dd.height;
    this.getRect(this._$ly);
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    var panel = this._$2a(_$95, _$pv, _$gg);
    if (panel != null) {
        panel._$5q();
        var _$g8 = this._mainPattern._$2F(this._patternPositionType, panel) + 1;
        if (_$pv[0] == null) {
            if (this._patternPositionType == EnumPatternPositionType.Left) {
                this._$jR = panel._rect.left + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = this._mainPattern._rect.right - 2 * WidgetDockPatternBase._$5Z - this._mainPattern._$2J(this._patternPositionType, _$g8, 0xffffffff);
            } else if (this._patternPositionType == EnumPatternPositionType.Right) {
                this._$jR = this._mainPattern._rect.left + this._mainPattern._$2J(this._patternPositionType, _$g8, 0xffffffff) + WidgetDockPatternBase._$5Z;
                this._$jS = panel._rect.right - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._patternPositionType == EnumPatternPositionType.Top) {
                this._$jR = panel._rect.top + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = this._mainPattern._rect.bottom - 2 * WidgetDockPatternBase._$5Z - this._mainPattern._$2J(this._patternPositionType, _$g8, 0xffffffff);
            } else {
                this._$jR = this._mainPattern._rect.top + this._mainPattern._$2J(this._patternPositionType, _$g8, 0xffffffff) + WidgetDockPatternBase._$5Z;
                this._$jS = panel._rect.bottom - 2 * WidgetDockPatternBase._$5Z;
            }
        } else {
            var iw = _$pv[0]._rect.right - _$pv[0]._rect.left;
            var ih = _$pv[0]._rect.bottom - _$pv[0]._rect.top;
            if (this._patternPositionType == EnumPatternPositionType.Left) {
                this._$jR = panel._rect.left + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = panel._rect.right + iw - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._patternPositionType == EnumPatternPositionType.Right) {
                this._$jR = panel._rect.left - iw + WidgetDockPatternBase._$5Z;
                this._$jS = panel._rect.right - 2 * WidgetDockPatternBase._$5Z;
            } else if (this._patternPositionType == EnumPatternPositionType.Top) {
                this._$jR = panel._rect.top + 2 * WidgetDockPatternBase._$5Z;
                this._$jS = panel._rect.bottom + ih - 2 * WidgetDockPatternBase._$5Z;
            } else {
                this._$jR = panel._rect.top - ih + WidgetDockPatternBase._$5Z;
                this._$jS = panel._rect.bottom - 2 * WidgetDockPatternBase._$5Z;
            }
        }
    } else if (this._$iI) {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        this._$kE._$1K(pd1, pd2, rc1, rc2);
        this._$jR = 0;
        this._$jS = 32666;
        if ((this._patternPositionType == EnumPatternPositionType.Left) || (this._patternPositionType == EnumPatternPositionType.Right)) {
            this._$jR = rc1.left + WidgetDockPatternBase._$5Z * 2;
            this._$jS = rc2.right - WidgetDockPatternBase._$5Z * 2;
        } else {
            this._$jR = rc1.top + WidgetDockPatternBase._$5Z * 2;
            this._$jS = rc2.bottom - WidgetDockPatternBase._$5Z * 2;
        }
    }
    return 0;
};
_$N.prototype._$4i = function (pt) {
    var iw = WidgetDockPatternBase.getWidth(this._$lx);
    var ih = WidgetDockPatternBase.getHeight(this._$lx);
    if (this._patternPositionType == EnumPatternPositionType.Left || this._patternPositionType == EnumPatternPositionType.Right) {
        this._$lx.left = pt.x;
        if (this._$jR > pt.x) {
            this._$lx.left = this._$jR;
        }
        if (this._$jS < pt.x) {
            this._$lx.left = this._$jS;
        }
    } else {
        this._$lx.top = pt.y;
        if (this._$jR > pt.y) {
            this._$lx.top = this._$jR;
        }
        if (this._$jS < pt.y) {
            this._$lx.top = this._$jS;
        }
    }
    this._$lx.right = iw + this._$lx.left;
    this._$lx.bottom = ih + this._$lx.top;
    this._$1p();
};
_$N.prototype._$1x = function () {
    this._$1p();
    this._$sb();
};
_$N.prototype._$ap = function () {
    this._mainPattern._$5E(this);
    if (this._panelStateElement != null) {
        WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._panelStateElement);
    }
    this._panelStateElement = null;
};
_$N.prototype._$sb = function () {
    var _$pv = new Array(1);
    var _$95 = new Array(1);
    var _$gg = new Array(1);
    var panel = this._$2a(_$95, _$pv, _$gg);
    var _$qm = this._$ly;
    var _$dt = this._$lx.left - _$qm.left;
    if (this._patternPositionType == EnumPatternPositionType.Left || this._patternPositionType == EnumPatternPositionType.Right) {
        _$dt = this._$lx.left - _$qm.left;
    } else {
        _$dt = this._$lx.top - _$qm.top;
    }
    this._$4q(_$dt);
    var _$ey, _$eB;
    var _$9w;
    if (this._patternPositionType == EnumPatternPositionType.Left || this._patternPositionType == EnumPatternPositionType.Right) {
        _$9w = EnumPatternPositionType.Top;
        _$ey = _$qm.top;
        _$eB = _$qm.bottom;
    } else {
        _$9w = EnumPatternPositionType.Left;
        _$ey = _$qm.left;
        _$eB = _$qm.right;
    }
    if (!this._$iI) {
        var _$q8 = new WidgetDockRect();
        panel._$kI._$22(_$q8);
        if (this._patternPositionType == EnumPatternPositionType.Left) {
            _$q8.right += _$dt;
        } else if (this._patternPositionType == EnumPatternPositionType.Right) {
            _$q8.left += _$dt;
        } else if (this._patternPositionType == EnumPatternPositionType.Top) {
            _$q8.bottom += _$dt;
        } else {
            _$q8.top += _$dt;
        }
        if (_$95[0]) {
            this._mainPattern._$6v(panel._$kI, _$q8, this._patternPositionType);
            panel._$5q();
            this._mainPattern._$6x(_$9w, _$ey, _$eB);
            this._mainPattern._$6x((_$9w + 2), _$ey, _$eB);
            this._mainPattern.refreshFixedPanel();
        } else {
            var _$sS = false;
            if (!_$sS) {
                this._mainPattern._$6v(panel._$kI, _$q8, this._patternPositionType);
                if (_$pv[0] != null) {
                    _$pv[0]._$kI._$22(_$q8);
                    if (this._patternPositionType == EnumPatternPositionType.Left) {
                        _$q8.left += _$dt;
                    } else if (this._patternPositionType == EnumPatternPositionType.Right) {
                        _$q8.right += _$dt;
                    } else if (this._patternPositionType == EnumPatternPositionType.Top) {
                        _$q8.top += _$dt;
                    } else {
                        _$q8.bottom += _$dt;
                    }
                    this._mainPattern._$6v(_$pv[0]._$kI, _$q8, this._patternPositionType);
                    panel._$5q();
                    _$pv[0]._$5q();
                    if (this._patternPositionType == EnumPatternPositionType.Right || this._patternPositionType == EnumPatternPositionType.Bottom) {
                        _$dt = -_$dt;
                    }
                    this._mainPattern._$4o(this._patternPositionType, this._panelIndex + 1, _$gg[0] - 1, _$dt);
                } else {
                    panel._$5q();
                    if (this._patternPositionType == EnumPatternPositionType.Right || this._patternPositionType == EnumPatternPositionType.Bottom) {
                        _$dt = -_$dt;
                    }
                    this._mainPattern._$4n(this._patternPositionType, this._panelIndex + 1, _$dt);
                }
                this._mainPattern._$6x(_$9w, _$ey, _$eB);
                this._mainPattern._$6x((_$9w + 2), _$ey, _$eB);
                this._mainPattern.refreshFixedPanel();
            } else {
                this._mainPattern._$6v(panel._$kI, _$q8, this._patternPositionType);
                panel._$5q();
                if (this._patternPositionType == EnumPatternPositionType.Right || this._patternPositionType == EnumPatternPositionType.Bottom) {
                    _$dt = -_$dt;
                }
                this._mainPattern._$4n(this._patternPositionType, this._panelIndex + 1, _$dt);
                this._mainPattern._$6x(_$9w, _$ey, _$eB);
                this._mainPattern._$6x((_$9w + 2), _$ey, _$eB);
                this._mainPattern.refreshFixedPanel();
            }
        }
    } else {
        var pd1 = new Array(1);
        var pd2 = new Array(1);
        var rc1 = new WidgetDockRect();
        var rc2 = new WidgetDockRect();
        this._$kE._$1K(pd1, pd2, rc1, rc2);
        if ((this._patternPositionType == EnumPatternPositionType.Top) || (this._patternPositionType == EnumPatternPositionType.Bottom)) {
            rc1.bottom += _$dt;
            this._mainPattern._$6v(pd1[0], rc1, WidgetDockPatternBase._$6N);
            rc2.top += _$dt;
            this._mainPattern._$6v(pd2[0], rc2, WidgetDockPatternBase._$6N);
            if (rc2.top == rc2.bottom) {
                this._$kE._$br = 999.0;
            } else {
                this._$kE._$br = 1.0 * (WidgetDockPatternBase.getHeight(rc1)) / (WidgetDockPatternBase.getHeight(rc2));
            }
        } else {
            rc1.right += _$dt;
            rc2.left += _$dt;
            this._mainPattern._$6v(pd1[0], rc1, WidgetDockPatternBase._$3T);
            this._mainPattern._$6v(pd2[0], rc2, WidgetDockPatternBase._$3T);
            if (rc2.left == rc2.right) {
                this._$kE._$br = 999.0;
            } else {
                this._$kE._$br = 1.0 * (WidgetDockPatternBase.getWidth(rc1)) / (WidgetDockPatternBase.getWidth(rc2));
            }
        }
    }
};
_$N.prototype._$4q = function (_$cY) {
    var rc = new WidgetDockRect();
    if (!this._$iG) {
        this.getRect(rc);
    } else {
        rc = this._$ly;
    }
    var width = WidgetDockPatternBase.getWidth(rc);
    var height = WidgetDockPatternBase.getHeight(rc);
    var ix = rc.left;
    var iy = rc.top;
    if (this._patternPositionType == EnumPatternPositionType.Left || this._patternPositionType == EnumPatternPositionType.Right) {
        ix += _$cY;
    } else {
        iy += _$cY;
    }
    WidgetDockElementController.setElementLeftTop(this._panelStateElement, ix, iy);
    WidgetDockElementController.setElementSize(this._panelStateElement, width, height);
    this.refresh();
};
_$N.prototype._$6q = function (rc) {
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementLeftTop(this._panelStateElement, rc.left, rc.top);
        WidgetDockElementController.setElementSize(this._panelStateElement, rc.right - rc.left, rc.bottom - rc.top);
        this.refresh();
    }
};
_$N.prototype.getRect = function (rc) {
    if (this._panelStateElement != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._panelStateElement);
        rc.top = WidgetDockElementController.getElementTop(this._panelStateElement);
        rc.right = rc.left + WidgetDockElementController.getElementWidth(this._panelStateElement);
        rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._panelStateElement);
    }
};
_$N.prototype._$2a = function (_$89, _$nC, _$dj) {
    var panelNum = this._mainPattern._panelList[this._patternPositionType].getSize();
    var panel;
    _$nC[0] = null;
    _$89[0] = true;
    var _$f2;
    for (var i = panelNum - 1; i >= 0; i--) {
        panel = this._mainPattern._panelList[this._patternPositionType]._list[i];
        if (panel._isVisible) {
            if (panel.m$N == this) {
                this._panelIndex = i;
                return panel;
            } else {
                _$89[0] = false;
                var _$sS = false;
                if (_$sS) {
                    _$nC[0] = panel;
                    _$f2 = i;
                    _$dj[0] = i;
                } else {
                    if (panel._$k9 != 1) {
                        _$nC[0] = panel;
                        _$f2 = i;
                        _$dj[0] = i;
                    }
                }
            }
        }
    }
    return null;
};
_$N.prototype._$1p = function () {
    var _rect = this._$lx;
    WidgetDockElementController.setElementLeftTop(this._panelStateElement, _rect.left, _rect.top);
    WidgetDockElementController.setElementSize(this._panelStateElement, _rect.right - _rect.left, _rect.bottom - _rect.top);
};
_$N.prototype.refresh = function () {
    var iw, ih;
    iw = WidgetDockElementController.getElementWidth(this._panelStateElement);
    ih = WidgetDockElementController.getElementHeight(this._panelStateElement);
    if (this._$hj == null) return;
    if ((this._patternPositionType == EnumPatternPositionType.Left) || (this._patternPositionType == EnumPatternPositionType.Right)) {
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, 0, 0, ih, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(iw - 2, 0, iw - 2, ih, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(iw - 1, 0, iw - 1, ih, this._$hj);
        this._$hj.fillStyle = 'ButtonFace';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = 'white';
        }
        this._$hj.fillRect(1, 0, iw - 3, ih);
    } else {
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, ih - 2, iw, ih - 2, this._$hj);
        this._$hj._$s1 = 'black';
        WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        this._$hj.fillStyle = 'ButtonFace';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = 'white';
        }
        this._$hj.fillRect(0, 1, iw, ih - 3);
    }
};
