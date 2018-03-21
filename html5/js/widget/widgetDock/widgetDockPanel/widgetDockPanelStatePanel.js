function WidgetDockPanelStatePanel() {
    WidgetDockPanelStatePanel.baseConstructor.call(this);
    this._$jj = 0;
    this._$jC = 0;
    this._$kg = -1;
    this._$jZ = -1;
    this._patternPositionType = 0;
    this._floatPanelController = new WidgetDockFloatPanelController();
};
WidgetDockPrototype.bind(WidgetDockPanelStatePanel, WidgetDockPanelState);
WidgetDockPanelStatePanel._$in = false;
WidgetDockPanelStatePanel._$h6 = null;
WidgetDockPanelStatePanel._$lu = new WidgetDockLocation();
WidgetDockPanelStatePanel._$2V = 24;
WidgetDockPanelStatePanel.prototype.mouseMove = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    this._$08(pt, true);
};
WidgetDockPanelStatePanel.prototype.mouseDown = function (e) {
    if (e.button != 1) return;
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    this._$08(pt, false);
};
WidgetDockPanelStatePanel.prototype._$5e = function (e) {
};
WidgetDockPanelStatePanel.prototype._$qy = function (wnd, rc) {
    WidgetDockPanelState.prototype._$qy.call(this, null, rc);
};
WidgetDockPanelStatePanel.prototype._$5z = function (floatPanel, pt, _$87) {
    this._$5A();
};
WidgetDockPanelStatePanel.prototype._$6v = function (patternBase, _$9c, _$cA) {
    WidgetDockPanelState.prototype._$6v.call(this, patternBase, _$9c, _$cA);
};
WidgetDockPanelStatePanel.prototype.reset = function () {
    this._$kg = -1;
    this._$jZ = -1;
};
WidgetDockPanelStatePanel.prototype._$6Q = function (floatPanel) {
    this.reset();
    floatPanel._patternMain._$4T(null);
    this._$5M(floatPanel);
    floatPanel._patternMain._$5M(_$le._patternPositionType, floatPanel);
    floatPanel._pinType = EnumPinType.Show;
    floatPanel.setVisible(true);
    this._$jZ = -1;
};
WidgetDockPanelStatePanel.prototype._$3u = function (pt, floatPanel) {
    var rc = new WidgetDockRect();
    this.getRect(rc);
    var ptc = new WidgetDockLocation();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$th = this._$le._patternPositionType;
    if (_$th == EnumPatternPositionType.Bottom) {
        ptc.y += 1;
    } else if (_$th == EnumPatternPositionType.Top) {
        ptc.y -= 1;
    } else if (_$th == EnumPatternPositionType.Left) {
        ptc.x -= 1;
    } else ptc.x += 1;
    var _$e1 = this._floatPanelController.getPanelNum();
    for (var i = 0; i < _$e1; i++) {
        var tab = this._floatPanelController._panelTabList[i];
        if (WidgetDockPatternBase.isInRect(rc, ptc)) {
            if (this._$le._patternPositionType == EnumPatternPositionType.Top || this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
                if ((ptc.x > tab._left && ptc.x < tab._right) && (tab._floatPanel == floatPanel)) {
                    return true;
                }
            } else {
                if ((ptc.y > tab._left && ptc.y < tab._right) && (tab._floatPanel == floatPanel)) {
                    return true;
                }
            }
        }
    }
    return false;
};
WidgetDockPanelStatePanel.prototype._$08 = function (pt, isMove) {
    var rc = new WidgetDockRect();
    this.getRect(rc);
    var ptc = new WidgetDockLocation();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var panelNum = this._floatPanelController.getPanelNum();
    var bin = false;
    for (var i = 0; i < panelNum; i++) {
        var tab = this._floatPanelController._panelTabList[i];
        var _$8O = false;
        var _$9J = true;
        if ((tab._floatPanel._$jN == WidgetDockFloatPanel._$48 && !isMove) || (tab._floatPanel._$jN == WidgetDockFloatPanel._$46 && isMove)) {
            _$9J = false;
        }
        if (WidgetDockPatternBase.isInRect(rc, ptc)) {
            if (WidgetDockPatternBase._$l2 != null) {
                if (WidgetDockPatternBase._$l2._$kx == tab._floatPanel) {
                    _$8O = true;
                }
            }
            if (this._$le._patternPositionType == EnumPatternPositionType.Top || this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
                if (ptc.x > tab._left && ptc.x < tab._right) {
                    bin = true;
                    if (!isMove) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(tab._floatPanel);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(tab._floatPanel);
                    } else {
                        this._$jZ = i;
                    }
                    break;
                }
            } else {
                if (ptc.y > tab._left && ptc.y < tab._right) {
                    bin = true;
                    if (!isMove) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(tab._floatPanel);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(tab._floatPanel);
                    } else {
                        this._$jZ = i;
                    }
                    break;
                }
            }
        }
    }
};
WidgetDockPanelStatePanel.prototype._$4S = function () {
    var _$cD = this._$le._patternPositionType;
    var _$e1 = this._floatPanelController.getPanelNum();
    var tab;
    var rc = new WidgetDockRect();
    var _$qa = new WidgetDockRect();
    this.getRect(_$qa);
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
    for (var i = 0; i < _$e1; i++) {
        tab = this._floatPanelController._panelTabList[i];
        if (_$o3 == null) {
            _$o3 = tab._floatPanel._patternMain;
            _$ba = _$o3._$i3;
            if (_$ba == null) {
                _$ba = this.getStyleFont();
            }
        }
        if (this._$hj == null) {
            if (tab._titleElement != null) {
                if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
                    var _$ff = 2;
                    WidgetDockElementController.setElementLeftTop(tab._titleElement, tab._left, 2 + _$ff);
                    WidgetDockElementController.setElementSize(tab._titleElement, tab._right - tab._left, WidgetDockPanelStatePanel._$2V - 2 - _$ff);
                    tab._titleElement.style.font = this.getStyleFont();
                } else {
                    if (WidgetDockController._browserType == EnumBrowserType.IE || WidgetDockController._browserType == EnumBrowserType.Chrome) {
                        _$ff = (WidgetDockPanelStatePanel._$2V - 2) / 2;
                        WidgetDockElementController.setElementLeftTop(tab._titleElement, 4 - _$ff, tab._left + 2);
                        WidgetDockElementController.setElementSize(tab._titleElement, WidgetDockPanelStatePanel._$2V - 2, tab._right - tab._left);
                        tab._titleElement.style.writingMode = 'tb-rl';
                    } else if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                        var _$te = (tab._right - tab._left) / 2;
                        WidgetDockElementController.setElementLeftTop(tab._titleElement, -_$te + (WidgetDockPanelStatePanel._$2V) / 2 - 2, tab._left + _$te);
                        WidgetDockElementController.setElementSize(tab._titleElement, tab._right - tab._left, WidgetDockPanelStatePanel._$2V);
                        tab._titleElement.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        var _$te = (tab._right - tab._left) / 2;
                        WidgetDockElementController.setElementLeftTop(tab._titleElement, -_$te + (WidgetDockPanelStatePanel._$2V) / 2 - 2, tab._left + _$te);
                        WidgetDockElementController.setElementSize(tab._titleElement, tab._right - tab._left, WidgetDockPanelStatePanel._$2V);
                        tab._titleElement.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    tab._titleElement.style.font = this.getStyleFont();
                }
                tab._titleElement.innerHTML = tab._title;
            }
            continue;
        }
        var size = new WidgetDockSize();
        WidgetDockElementController.getOffsetSize(size, _$ba, tab._title, this._$hj);
        if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
            rc.left = tab._left;
            rc.right = tab._right;
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
            _$eo = rc.right - WidgetDockTab._space;
            _$ep = rc.top + (rc.bottom - rc.top - WidgetDockTab._space) / 2;
            this._$hj.font = this.getStyleFont();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(tab._title, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
        } else {
            this._$hj.save();
            this._$hj._$s1 = 'ButtonShadow';
            this._$hj.translate(this._panelStateElement.width / 2, -this._panelStateElement.width / 2);
            this._$hj.rotate(3.141592653589 / 2);
            this._$hj.translate(this._panelStateElement.width / 2, -this._panelStateElement.width / 2);
            rc.left = tab._left;
            rc.right = tab._right;
            if (_$cD == EnumPatternPositionType.Left) {
                rc.top = 3;
                rc.bottom = _$qa.right;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - WidgetDockTab._space) / 2;
            } else {
                rc.top = 0;
                rc.bottom = _$qa.right - 2;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - WidgetDockTab._space) / 2 + 1;
                rc.bottom -= 1;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$ep = rc.right - WidgetDockTab._space;
            this._$hj.font = this.getStyleFont();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(tab._title, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
            this._$hj.restore();
        }
    }
};
WidgetDockPanelStatePanel.prototype._$03 = function (mainPattern, _$mX, pt, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    _$oQ[0] = null;
    var rcPanel = new WidgetDockRect();
    rcPanel.setRect(this.rect);
    var _$9z = this._$3E(rcPanel, pt, _$de);
    if (_$9z != 0xff) {
        if (this._$le._patternPositionType == EnumPatternPositionType.Left || this._$le._patternPositionType == EnumPatternPositionType.Right) _$nz.cy = this.rect.bottom - this.rect.top; else _$nz.cx = this.rect.right - this.rect.left;
    }
    return _$9z;
};
WidgetDockPanelStatePanel.prototype._$5b = function (floatPanel) {
    var rc = new WidgetDockRect();
    this.getRect(rc);
    var iw = floatPanel.getWidth();
    var ih = floatPanel.getHeight();
    iw += 6;
    ih += 6;
    var _$ft = this._patternPositionType;
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
WidgetDockPanelStatePanel.prototype._$0s = function () {
    var iNo = this._floatPanelController.getPanelNum();
    if (iNo > 0) {
        var _$oU = new Array();
        var i;
        for (i = 0; i < iNo; i++) {
            _$oU[i] = this._floatPanelController._panelTabList[i];
        }
        this._floatPanelController.reset();
        return _$oU;
    }
    return null;
};
WidgetDockPanelStatePanel.prototype._$4J = function (floatPanel, _$sc) {
    var _$e1 = _floatPanelController.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (floatPanel == _floatPanelController._panelTabList[i].floatPanel) {
            var tab = _floatPanelController._panelTabList[i];
            tab._title = new String(_$sc);
            this._$5A();
            break;
        }
    }
};
WidgetDockPanelStatePanel.prototype._$8 = function (floatPanel) {
    var _$ol = new WidgetDockTab(0, 0, floatPanel._panelStateController.getTitle());
    _$ol._floatPanel = floatPanel;
    this._floatPanelController.addFloatPanel(_$ol);
    _$ol._titleElement = WidgetDockElementController.createElementWithParent("div", this._panelStateElement);
    _$ol._titleElement._panelStatePanel = this;
    this._$5A();
    this.refresh();
};
WidgetDockPanelStatePanel.prototype._$5M = function (floatPanel) {
    var _$e1 = this._floatPanelController.getPanelNum();
    for (var i = 0; i < _$e1; i++) {
        if (floatPanel == this._floatPanelController._panelTabList[i]._floatPanel) {
            if (this._floatPanelController._panelTabList[i]._titleElement != null) {
                this._panelStateElement.removeChild(this._floatPanelController._panelTabList[i]._titleElement);
                this._floatPanelController._panelTabList[i]._titleElement = null;
            }
            this._floatPanelController.deletePanel(i);
            break;
        }
    }
    this._$5A();
    this.refresh();
    return this._floatPanelController.getPanelNum();
};
WidgetDockPanelStatePanel.prototype._$5A = function () {
    var _$ga = 0;
    var _$gb = 0;
    var _$qk = new WidgetDockRect();
    this.getRect(_$qk);
    if (this._$le._patternPositionType == EnumPatternPositionType.Top || this._$le._patternPositionType == EnumPatternPositionType.Bottom) {
        this._$5B(_$ga);
    } else {
        this._$5B(_$ga);
    }
    this._$jj = _$ga;
    this._$jC = _$gb;
    this.refresh();
};
WidgetDockPanelStatePanel.prototype.getSize = function () {
    var d = new WidgetDockSize();
    if (this._panelStateElement != null) {
        d.width = this._panelStateElement.width;
        d.height = this._panelStateElement.height;
    }
    return d;
};
WidgetDockPanelStatePanel.prototype.getStyleFont = function () {
    return "8pt sans-serif";
};
WidgetDockPanelStatePanel.prototype._$5B = function (_$d4) {
    if (this._floatPanelController == null) return;
    var d = this.getSize();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft = null;
    var _$gi = this._floatPanelController.getPanelNum();
    var _$fv = _$d4;
    var tab = null;
    var size = new WidgetDockSize();
    var _$dI = new Array();
    var _$o3 = null;
    for (var i = 0; i < _$gi; i++) {
        tab = this._floatPanelController._panelTabList[i];
        tab._left = _$fv;
        if (_$o3 == null) {
            _$o3 = tab._floatPanel._patternMain;
            ft = _$o3._$i3;
            if (ft == null) ft = this.getStyleFont();
        }
        WidgetDockElementController.getOffsetSize(size, ft, tab._title, this._$hj);
        tab._right = _$fv + size.width + 2 * _$G._$2Z;
        if (tab._floatPanel._$hE != null) tab._right += WidgetDockTab._space;
        _$dI[i] = tab._right - _$fv;
        _$fv = tab._right;
    }
};
