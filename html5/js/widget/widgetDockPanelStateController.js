function WidgetDockPanelStateController() {
    this._floatPanel = null;
    this._$i9 = true;
    this._$iO = false;
    this._title = "";
    this._$hf = null;
    this._$lw = new WidgetDockRect();
    this._$lA = new WidgetDockRect();
    this.styleFont = "12px sans-serif";
    this._titleElement = null;
    this._buttonPinElement = null;
    this._buttonCloseElement = null;
    this._$hj = null;

    this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);
    this._panelStateElement._panelStateController = this;
    this._panelStateElement.style.background = 'ButtonFace';
    WidgetDockElementController.setElementSize(this._panelStateElement, 15, 40);
    this._panelStateElement.onmousedown = WidgetDockPanelStateController.onMouseDown;
    this._panelStateElement.onmousemove = WidgetDockPanelStateController.onMouseMove;
    this._panelStateElement.onmouseout = WidgetDockPanelStateController.onMouseOut;
    this._panelStateElement._$mF = WidgetDockPanelStateController._$mh;

    this._titleElement = WidgetDockElementController.createElementWithParent("div", this._panelStateElement);
    this._titleElement._panelStateController = this;
    this._titleElement.style.font = this.styleFont;
};
WidgetDockPanelStateController._$0U = 18;
WidgetDockPanelStateController._$hd = null;
WidgetDockPanelStateController._$4Y = 4;
WidgetDockPanelStateController._$j5 = new WidgetDockSize();
WidgetDockPanelStateController.prototype.resize = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._panelStateElement, _$cS, _$do);
    WidgetDockElementController.setElementSize(this._panelStateElement, width, height);
    this.refresh();
};
WidgetDockPanelStateController.prototype.setVisible = function (isVisible) {
    WidgetDockElementController.setElementVisible(this._panelStateElement, isVisible);
    WidgetDockElementController.setElementVisible(this._titleElement, isVisible);
    WidgetDockElementController.setElementVisible(this._buttonPinElement, isVisible);
    WidgetDockElementController.setElementVisible(this._buttonCloseElement, isVisible);
};
WidgetDockPanelStateController.prototype.getStyleFont = function () {
    return this.styleFont;
};
WidgetDockPanelStateController.onMouseDown = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._panelStateController.mouseDown(e);
    } else {
        e.srcElement._panelStateController.mouseDown(e);
    }
    return false;
};
WidgetDockPanelStateController.onMouseMove = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) e.target._panelStateController.mouseMove(e);
    else e.srcElement._panelStateController.mouseMove(e);
    return false;
};
WidgetDockPanelStateController._$mh = function (e) {
    return false;
};
WidgetDockPanelStateController.onMouseOut = function (e) {
    return true;
};
WidgetDockPanelStateController.prototype.mouseDown = function (e) {
    if (this._$iO) {
        return;
    }
    if (!WidgetDockController.isButtonAvailable(e.button)) {
        return;
    }
    this._$iO = true;
    if (WidgetDockWindow._$hK != null && WidgetDockWindow._$hK != this) {
        if (WidgetDockWindow._$hK instanceof WidgetDockPanelStateController) {
            WidgetDockWindow._$hK._$iO = false;
        }
    }
    WidgetDockWindow._$hK = this;
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    if (this._$mj(pt) >= 0) {
        WidgetDockController._$6s(true);
        this._$ms(e);
    } else {
        this._$iO = false;
    }
};
WidgetDockPanelStateController.prototype._$fT = function () {
    return true;
};
WidgetDockPanelStateController.prototype._$2P = function (rc) {
    rc.left = WidgetDockElementController.getElementLeft(this._panelStateElement);
    rc.top = WidgetDockElementController.getElementTop(this._panelStateElement);
    rc.right = rc.left + WidgetDockElementController.getElementWidth(this._panelStateElement);
    rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._panelStateElement);
};
WidgetDockPanelStateController.prototype.mouseUp = function (e) {
    if (!this._$fT()) return;
    if (!this._$iO) return;
    if (!WidgetDockController.isButtonAvailable(e.button)) {
        this._$iO = false;
        this._$T();
        return;
    }
    var _$pH = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, _$pH);
    this._$iO = false;
    WidgetDockController._$6s(false);
    this._floatPanel._$1x(_$pH);
};
WidgetDockPanelStateController.prototype._$0u = function () {
};
WidgetDockPanelStateController.prototype._$a = function (tab) {
    this._$0u();
    _$hf._$rz(new WidgetDockSize(150, _$G._$6J + _floatPanel._$jA));
};
WidgetDockPanelStateController.prototype._$0Y = function (_$mS) {
    var _$7E = new WidgetDockFloatPanelController();
    _$mS._$2Q(_$7E);
    var ic = _$7E.getPanelNum();
    var _$p3 = new Array(ic);
    var _$gJ = 0;
    var i;
    for (i = 0; i < ic; i++) {
        if (_$7E._panelList[i]._$fT()) {
            _$p3[_$gJ] = _$7E._panelList[i];
            _$gJ++;
        }
    }
    for (i = 0; i < ic; i++) {
        if (_$7E._panelList[i] != _floatPanel) _$7E._panelList[i]._$5d(); else _$7E._panelList[i]._$4L();
    }
    for (i = 0; i < _$gJ; i++) {
        if (!_$p3[i]._$fT()) _$p3[i].setVisible(true);
    }
};
WidgetDockPanelStateController.prototype._$4L = function () {
    var pb = _floatPanel._$kA;
    if (pb._$o5 != null && pb._$o5._$i6.length > 1) {
        _$0Y(_floatPanel._$kA);
    } else this._floatPanel._$4L();
};
WidgetDockPanelStateController.prototype._$T = function () {
    this._floatPanel._$T();
};
WidgetDockPanelStateController.prototype._$07 = function (e, key) {
    var _$h0;
    if (e == null) {
        _$h0 = window.event._$gZ;
    } else {
        _$h0 = e._$tu;
    }
    if (_$h0 == key) {
        return true;
    }
    return false;
};
WidgetDockPanelStateController.prototype.mouseMove = function (e) {
    if (!this._$iO) {
        var _$9P = WidgetDockElementController.getElementLeft(this._panelStateElement);
        var _$9Q = WidgetDockElementController.getElementTop(this._panelStateElement);
        var _$a5 = new WidgetDockLocation();
        WidgetDockElementController._$2D(e, _$a5);
        _$a5.x = _$a5.x - _$9P;
        _$a5.y = _$a5.y - _$9Q;
        if (this instanceof _$4d) {
            if (WidgetDockPatternBase._$5f(this._$lw, _$a5)) {
                this._panelStateElement.style.cursor = "default";
            } else {
                this._panelStateElement.style.cursor = "move";
            }
            return;
        }
        if (!this._floatPanel._$fR()) {
            return;
        }
        if (this._floatPanel._$k0 == WidgetDockFloatPanel._$6W) return;
        if ((this._floatPanel._$k0 != WidgetDockFloatPanel._$4C && WidgetDockPatternBase._$5f(this._$lA, _$a5)) || (WidgetDockPatternBase._$5f(this._$lw, _$a5))) {
            this._panelStateElement.style.cursor = "default";
        } else {
            this._panelStateElement.style.cursor = "move";
        }
    }
};
WidgetDockPanelStateController.prototype._$mj = function (pt) {
    var left = WidgetDockElementController.getElementLeft(this._panelStateElement);
    var top = WidgetDockElementController.getElementTop(this._panelStateElement);
    var _$a5 = new WidgetDockLocation();
    _$a5.x = pt.x - left;
    _$a5.y = pt.y - top;
    if (this._floatPanel._$k0 != WidgetDockFloatPanel._$4C && WidgetDockPatternBase._$5f(this._$lA, _$a5)) {
        this._floatPanel._$0h();
        return -1;
    }
    if ((this._floatPanel != null) && (this._floatPanel._$k0 == WidgetDockFloatPanel._$6W)) {
        if (!WidgetDockPatternBase._$5f(this._$lw, _$a5)) return -1;
    }
    if (WidgetDockPatternBase._$5f(this._$lw, _$a5)) {
        this._floatPanel._$9X();
        return -1;
    }
    if (!this._floatPanel._$fR()) {
        return -2;
    }
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0V;
    return this._floatPanel._$4R(pt);
};
WidgetDockPanelStateController.prototype._$ms = function (e) {
    if (!this._$iO) return;
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._floatPanel._$4i(pt);
};
WidgetDockPanelStateController.prototype.setFloatPanel = function (floatPanel) {
    this._floatPanel = floatPanel;
};
WidgetDockPanelStateController.prototype._$r6 = function (_$7J) {
    this._$i9 = _$7J;
    this.refresh();
};
WidgetDockPanelStateController.prototype.setTitle = function (title) {
    if (title != null) {
        this._title = title;
    } else {
        this._title = "";
    }
    this.refresh();
};
WidgetDockPanelStateController.prototype.getTitle = function () {
    return this._title;
};
WidgetDockPanelStateController.prototype._$c6 = function () {
    if (this._floatPanel == null) return null;
    if (this._floatPanel._$jm == WidgetDockFloatPanel._$0) {
        if (this._floatPanel._patternMain._$jv == WidgetDockController._$0R) {
            WidgetDockPanelStateController._$j5.width = 130;
            WidgetDockPanelStateController._$j5.height = this._floatPanel._$jA;
        } else {
            var _$9y = this._floatPanel._$bL();
            if (this._floatPanel._$kB != null && this._floatPanel._$kB._$ii) {
                if (_$9y == EnumPatternPositionType.Left || _$9y == EnumPatternPositionType.Right) {
                    WidgetDockPanelStateController._$j5.width = 130;
                    WidgetDockPanelStateController._$j5.height = this._floatPanel._$jA;
                } else {
                    WidgetDockPanelStateController._$j5.width = this._floatPanel._$jA;
                    WidgetDockPanelStateController._$j5.height = 130;
                }
            } else {
                WidgetDockPanelStateController._$j5.width = 130;
                WidgetDockPanelStateController._$j5.height = this._floatPanel._$jA;
            }
        }
    } else {
        if (this._floatPanel._$jm == WidgetDockFloatPanel._$3Q || this._floatPanel._$jm == WidgetDockFloatPanel._$5j) {
            WidgetDockPanelStateController._$j5.width = this._floatPanel._$jA;
            WidgetDockPanelStateController._$j5.height = 130;
        } else {
            WidgetDockPanelStateController._$j5.width = 130;
            WidgetDockPanelStateController._$j5.height = this._floatPanel._$jA;
        }
    }
    return WidgetDockPanelStateController._$j5;
};
WidgetDockPanelStateController.prototype._$nL = function (_$82, ix, iy, width, height) {
    if (this._$hj == null) {
        return;
    }
    if (this._$i9) {
        this._$hj.fillStyle = 'ActiveCaption';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, width, height);
    } else {
        this._$hj.fillStyle = 'InactiveCaption';
        if (WidgetDockController._browserType == EnumBrowserType.Opera) {
            this._$hj.fillStyle = '#d0d0d0';
        }
        this._$hj.fillRect(ix, iy, width, height);
    }
};
WidgetDockPanelStateController.prototype.refresh = function () {
    if (this._buttonPinElement == null) {
        this._buttonPinElement = WidgetDockElementController.createElementWithParent("div", this._panelStateElement);
        this._imagePin = new Image();
        this._imagePin.src = WidgetDockController._dir + "img/pinned.gif";
        this._imagePin.style.width = "100%";
        this._imagePin.style.height = "100%";
        this._buttonPinElement.appendChild(this._imagePin);
        this._buttonPinElement.childNodes[0]._panelStateController = this;
        this._buttonPinElement._panelStateController = this;

        this._buttonCloseElement = WidgetDockElementController.createElementWithParent("div", this._panelStateElement);
        this._imageClose = new Image();
        this._imageClose.src = WidgetDockController._dir + "img/close.jpg";
        this._imageClose.style.width = "100%";
        this._imageClose.style.height = "100%";
        this._buttonCloseElement.appendChild(this._imageClose);
        this._buttonCloseElement.childNodes[0]._panelStateController = this;
        this._buttonCloseElement._panelStateController = this;
    }
    var si = new WidgetDockRect();
    this._$2P(si);
    var iw = si.right - si.left;
    var ih = si.bottom - si.top;
    var _$em;
    var _$fu;
    var _$8u = true;
    var _$96 = this._$6z();
    if (this._floatPanel._patternMain._$jv == WidgetDockController._$0T) {
        if ((this._floatPanel._$jm >= WidgetDockFloatPanel._$0) && _$96) {
            _$8u = true;
        } else {
            _$8u = false;
        }
    }
    var _$ea = this._floatPanel._$j0;
    if (this._floatPanel._$jm < WidgetDockFloatPanel._$0) {
        _$ea = this._floatPanel._$jm;
        if (_$ea == WidgetDockFloatPanel._$3Q || _$ea == WidgetDockFloatPanel._$5j) {
            _$ea = WidgetDockFloatPanel._$6K;
        } else _$ea = WidgetDockFloatPanel._$3Q;
    }
    var _$8K = false;
    if (this._floatPanel._$jm >= WidgetDockFloatPanel._$0 && (this._floatPanel._patternMain._$jv == WidgetDockController._$0R || _$96)) {
        _$8K = true;
    } else if (_$ea == WidgetDockFloatPanel._$3Q || _$ea == WidgetDockFloatPanel._$5j) {
        _$8K = true;
    }
    if (_$8K) {
        _$em = ih;
        _$fu = ih - 3;
        if (this._floatPanel._$k0 == WidgetDockFloatPanel._$4C) _$fu = 0;
        if (_$8u) this._$aF(iw, ih, _$96, _$ea); else {
            var _$9Z = _$6V._$bF("ToolBar.background");
            g._$rc(_$9Z);
            g.fillRect(0, 0, si.width, si.height);
            si.width -= (_$em + _$fu);
            if (_$em != 0) si.width -= WidgetDockPanelStateController._$4Y; else si.width -= 2;
            _$aG(si, _$ea);
            if (_$fu > 0) {
                this._$lA.left = si.width;
                this._$lA.right = _$lA.left + _$fu;
                this._$lA.top = si.y + 3;
                this._$lA.bottom = si.height - 3;
                this._$aI(this._$lA, _floatPanel._$k0, false);
            }
            si.width += _$em + _$fu;
            if (_$em != 0) si.width += WidgetDockPanelStateController._$4Y; else si.width += 2;
            if (_$em != 0) _$aE(si, _$ea);
        }
    } else {
        _$em = si.width;
        _$fu = si.width - 3;
        var _$fk = si.width;
        var _$fj = si.height;
        var _$fK = 0;
        if (_floatPanel._$k0 == WidgetDockFloatPanel._$4C) _$fu = 0;
        _$fK = (_$em + _$fu);
        if (_$em != 0 && _$fu != 0) _$fK += WidgetDockPanelStateController._$4Y; else if (_$em == 0) _$fK += 2;
        si.y += _$fK;
        si.height -= _$fK;
        var size = new WidgetDockSize();
        var titleNow = this._title;
        WidgetDockElementController.getOffsetSize(size, this.getStyleFont(), titleNow, this._$hj);
        titleNow = WidgetDockPatternBase._$6y(this.getStyleFont(), titleNow, si.height, size.width, _$G._$2Z, 0, this._$hj);
        if (!_$8u) {
            var _$9Z = _$6V._$bF("ToolBar.background");
            g._$rc(_$9Z);
            g.fillRect(0, 0, _$fk, _$fj);
            _$aG(g, si, _$ea);
        } else {
        }
        if (_$fu > 0) {
            _$lA.left = 1;
            _$lA.right = _$fu;
            _$lA.top = _$em + 2;
            _$lA.bottom = _$lA.top + _$fu;
            if (_$8u) this._$aI(this._$lA, this._floatPanel._$k0, this._$i9); else this._$aI(this._$lA, this._floatPanel._$k0, false);
        }
        si.height = si.width;
        si.y = 0;
        if (_$em != 0) _$aE(si, _$ea);
    }
};
WidgetDockPanelStateController.prototype._$aD = function (g, _$9f, rc) {
    if (_$9f == EnumPatternPositionType.Left || _$9f == EnumPatternPositionType.Right) {
        g._$rc(_$6I._$ac);
        g._$aH(rc.x, rc.y, rc.width + rc.x - 2, rc.y);
        g._$aH(rc.x, rc.y + 1, rc.x, rc.y + rc.height - 2);
        g._$rc(_$6I._$ad);
        g._$aH(rc.x, rc.y + rc.height - 1, rc.width + rc.x - 1, rc.y + rc.height - 1);
        g._$aH(rc.x + rc.width - 1, rc.y, rc.x + rc.width - 1, rc.y + rc.height - 1);
        g._$rc(_$6I._$ab);
        g.fillRect(rc.x + 1, rc.y + 1, rc.width - 2, rc.height - 2);
    } else {
        g._$rc(_$6I._$ac);
        g._$aH(rc.x, rc.y, rc.x, rc.y + rc.height - 2);
        g._$aH(rc.x + 1, rc.y, rc.x + rc.width - 2, rc.y);
        g._$rc(_$6I._$ad);
        g._$aH(rc.x + rc.width - 1, rc.y, rc.width + rc.x - 1, rc.y + rc.height - 1);
        g._$rc(_$6I._$ab);
        g.fillRect(rc.x + 1, rc.y + 1, rc.width - 2, rc.height - 2);
    }
};
WidgetDockPanelStateController.prototype._$aG = function (g, si, _$gf) {
    var _$ff;
    var _$9y = _$gf;
    var rc = new WidgetDockFrame();
    var _$eh = 2;
    var _$ec = 3;
    if (_$9y == EnumPatternPositionType.Left || _$9y == EnumPatternPositionType.Right) {
        _$ff = (si.height - _$eh - _$ec * 2) / 2;
        rc.x = si.x + 2;
        rc.y = si.y + _$ff;
        rc.width = si.width - 4;
        rc.height = _$ec;
        _$aD(g, EnumPatternPositionType.Left, rc);
        rc.y += _$eh + _$ec;
        _$aD(g, EnumPatternPositionType.Left, rc);
    } else {
        _$ff = (si.width - _$eh - _$ec * 2) / 2;
        rc.x = si.x + _$ff;
        rc.y = si.y + 2;
        rc.width = _$ec;
        rc.height = si.height - 4;
        _$aD(g, EnumPatternPositionType.Top, rc);
        rc.x += _$eh + _$ec;
        _$aD(g, EnumPatternPositionType.Top, rc);
    }
};
WidgetDockPanelStateController.prototype._$6z = function () {
    if (this._floatPanel != null && this._floatPanel._$kB != null && !this._floatPanel._$kB._$ii) {
        var jp = this._floatPanel._$kB._$hh;
        if (jp == null) return false;
        var _$a6 = this._floatPanel._$kB._$bE();
        var _$ew = _$a6.length;
        var _$96 = true;
        var ino = 0;
        var i;
        for (i = 0; i < _$ew; i++) {
            if (_$a6[i] instanceof WidgetDockFloatPanel) {
                if (_$a6[i]._$fT()) ino++;
                if (ino > 1) {
                    _$96 = false;
                    break;
                }
            }
        }
        return _$96;
    }
    return false;
};
WidgetDockPanelStateController.prototype._$aF = function (iw, ih, _$8a, _$cD) {
    var _$el = 0;
    var _$8H = false;
    var _$8n = true;
    if (WidgetDockPatternBase._$l2 != null && WidgetDockPatternBase._$l2._$kx == this._floatPanel) {
        _$8n = false;
    }
    if (_$8n && _$8a) _$8H = true;
    this._$nL(_$8H, 0, 0, iw, ih);
    var _$em = 0;
    if (this._title != null) {
        var _$fK = 0;
        if (this._floatPanel != null) {
            _$em = ih;
            _$fK += ih;
            if (this._floatPanel._$k0 != WidgetDockFloatPanel._$4C) {
                _$fK += ih - 3;
                if (_$em != 0) {
                    _$fK += WidgetDockPanelStateController._$4Y;
                } else {
                    this._$lw.left = this._$lw.right = iw - 2;
                    _$fK += 2;
                }
            }
        }
        var titleNow = this._title;
        var size = new WidgetDockSize();
        WidgetDockElementController.getOffsetSize(size, this.getStyleFont(), titleNow, this._$hj);
        var _$tq = WidgetDockElementController.getElementWidth(this._panelStateElement);
        titleNow = WidgetDockPatternBase._$6y(this.getStyleFont(), titleNow, _$tq - _$fK, size.width, _$G._$2Z, 0, this._$hj);
        var _$gP;
        _$gP = ih / 2;
        if (this._$hj != null) {
            this._$hj.font = this.getStyleFont();
            this._$hj.fillStyle = 'buttonText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(titleNow, 2, _$gP + 4);
        } else {
            WidgetDockElementController.setElementLeftTop(this._titleElement, 2, 2);
            WidgetDockElementController.setElementSize(this._titleElement, size.width + 2, ih - 2);
            this._titleElement.style.font = this.getStyleFont();
            this._titleElement.innerHTML = titleNow;
        }
    }
    if (this._floatPanel != null) {
        this._$aE(0, 0, iw, ih, _$cD);
        this._$lA.right = this._$lw.left;
        if (_$em != 0) this._$lA.right -= WidgetDockPanelStateController._$4Y;
        this._$lA.left = this._$lA.right - (ih - 3);
        this._$lA.top = 1;
        this._$lA.bottom = ih - 3;
        this._$aI(this._$lA, this._floatPanel._$k0, this._$i9);
    }
    var _$r1 = String.fromCharCode(4);
};
WidgetDockPanelStateController.prototype._$aI = function (_$pc, _$d6, _$7J) {
    var _$gv, _$gD;
    _$gD = (_$pc.right - _$pc.left - 2);
    _$gv = _$gD * 4 / 11;
    var iw = _$pc.right - _$pc.left - 2;
    iw = iw / 2 * 2;
    var _$gL = (_$pc.right - _$pc.left) / 2 + _$pc.left;
    var _$gO = _$gL - iw;
    var _$gQ = (_$pc.bottom - _$pc.top) / 2 + _$pc.top;
    var _$gV = _$gQ + iw;
    if (this._$hj == null) {
        WidgetDockElementController.setElementLeftTop(this._buttonPinElement, _$pc.left, _$pc.top);
        WidgetDockElementController.setElementSize(this._buttonPinElement, _$pc.right - _$pc.left, _$pc.bottom - _$pc.top);
        WidgetDockElementController.setElementLeftTop(this._buttonPinElement.childNodes[0], 0, 0);
        if (_$d6 == WidgetDockFloatPanel._$6W) {
            this._imagePin.src = WidgetDockController._dir + "img/unpinned.gif";
        } else {
            this._imagePin.src = WidgetDockController._dir + "img/pinned.gif";
        }
        return;
    }
    if (!_$7J) {
        this._$hj._$s1 = 'buttonText';
    } else {
        this._$hj._$s1 = 'buttonText';
    }
    if (_$d6 == WidgetDockFloatPanel._$6W) {
        _$gQ -= 1;
        _$gO = _$gL - (_$pc.right - _$pc.left) / 2;
        if (_$pc != null) {
            if (WidgetDockController._$lh != null) {
            } else {
                var iha;
                iha = iw / 4;
                WidgetDockElementController._$1q(_$gO, _$gQ, _$gO + _$gv, _$gQ, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gv, _$gQ - iw / 2, _$gO + _$gv, _$gQ + iw / 2, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gv, _$gQ + iha, _$gO + _$gD, _$gQ + iha, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gv, _$gQ + iha - 1, _$gO + _$gD, _$gQ + iha - 1, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gD, _$gQ + iha, _$gO + _$gD, _$gQ - iha, this._$hj);
                WidgetDockElementController._$1q(_$gO + _$gD, _$gQ - iha, _$gO + _$gv, _$gQ - iha, this._$hj);
            }
        }
    } else if (_$d6 == WidgetDockFloatPanel._$4Z) {
        _$gO = _$gL - iw / 2;
        _$gV = _$gQ + (_$pc.bottom - _$pc.top) / 2;
        if ((_$7J && WidgetDockController._$l3 != null) || (!_$7J && WidgetDockController._$l4 != null)) {
        } else {
            var iha;
            iha = iw / 4;
            WidgetDockElementController._$1q(_$gL, _$gV, _$gL, _$gV - _$gv, this._$hj);
            WidgetDockElementController._$1q(_$gL - iw / 2, _$gV - _$gv, _$gL + iw / 2, _$gV - _$gv, this._$hj);
            WidgetDockElementController._$1q(_$gL + iha, _$gV - _$gv, _$gL + iha, _$gV - _$gD, this._$hj);
            WidgetDockElementController._$1q(_$gL + iha - 1, _$gV - _$gv, _$gL + iha - 1, _$gV - _$gD, this._$hj);
            WidgetDockElementController._$1q(_$gL + iha, _$gV - _$gD, _$gL - iha, _$gV - _$gD, this._$hj);
            WidgetDockElementController._$1q(_$gL - iha, _$gV - _$gD, _$gL - iha, _$gV - _$gv, this._$hj);
        }
    }
};
WidgetDockPanelStateController.prototype._$aE = function (_$cS, _$do, width, height, _$gf) {
    var _$el;
    var _$8v = false;
    if (this._floatPanel == null) _$8v = true; else if (this._floatPanel._$jm >= WidgetDockFloatPanel._$0) {
        if ((this._floatPanel._patternMain._$jv == WidgetDockController._$0R) || (this._floatPanel._$kB != null && !_floatPanel._$kB._$ii)) _$8v = true;
    }
    if (_$8v || (_$gf == EnumPatternPositionType.Left) || (_$gf == EnumPatternPositionType.Right)) {
        _$el = height - 3;
        _$cS = _$cS + width - 2 - _$el;
        _$do = _$do + 2;
    } else {
        _$cS += 2;
        _$el = width - 3;
        _$do += 2;
    }
    this._$lw.left = _$cS;
    this._$lw.top = _$do;
    this._$lw.right = this._$lw.left + _$el - 1;
    this._$lw.bottom = this._$lw.top + _$el - 1;
    if (this._$hj == null) {
        if (this._buttonCloseElement != null) {
            WidgetDockElementController.setElementLeftTop(this._buttonCloseElement, _$cS, _$do);
            WidgetDockElementController.setElementSize(this._buttonCloseElement, this._$lw.right - this._$lw.left, this._$lw.bottom - this._$lw.top);
            WidgetDockElementController.setElementLeftTop(this._buttonCloseElement.childNodes[0], 0, 0);
        }
        return;
    }
    this._$hj._$s1 = 'buttonText';
    WidgetDockElementController._$1q(_$cS, _$do, _$cS + _$el - 2, _$do, this._$hj);
    WidgetDockElementController._$1q(_$cS, _$do, _$cS, _$do + _$el - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cS + 1, _$do + _$el - 2, _$cS + _$el - 2, _$do + _$el - 2, this._$hj);
    WidgetDockElementController._$1q(_$cS + _$el - 2, _$do + 1, _$cS + _$el - 2, _$do + _$el - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cS, _$do + _$el - 1, _$cS + _$el - 1, _$do + _$el - 1, this._$hj);
    WidgetDockElementController._$1q(_$cS + _$el - 1, _$do, _$cS + _$el - 1, _$do + _$el - 1, this._$hj);
    this._$hj.fillStyle = 'ButtonFace';
    if (WidgetDockController._browserType == EnumBrowserType.Opera) {
        this._$hj.fillStyle = 'white';
    }
    this._$hj.fillRect(_$cS + 1, _$do + 1, _$el - 3, _$el - 3);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(_$cS + 3, _$do + 3, _$cS + _$el - 4, _$do + _$el - 4, this._$hj);
    WidgetDockElementController._$1q(_$cS + 3, _$do + _$el - 4, _$cS + _$el - 4, _$do + 3, this._$hj);
};

function _$4d() {
    _$4d.baseConstructor.call(this);
    this._$kY = null;
};
WidgetDockPrototype.bind(_$4d, WidgetDockPanelStateController);
_$4d.prototype._$ru = function (mainPattern) {
    this._$kY = mainPattern;
};
_$4d.prototype.setVisible = function () {
};
_$4d.prototype.setSize = function (_$am) {
    WidgetDockElementController.setElementSize(this._panelStateElement, _$am.width, _$am.height);
};
_$4d.prototype.setElementZIndex = function (_$cR) {
    if (this._panelStateElement != null) {
        WidgetDockElementController.setElementZIndex(this._panelStateElement, _$cR);
    }
};
_$4d.prototype._$mj = function (pts) {
    var _$po;
    _$po = this._$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    var _$9P = WidgetDockElementController.getElementLeft(this._panelStateElement);
    var _$9Q = WidgetDockElementController.getElementTop(this._panelStateElement);
    var pt = new WidgetDockLocation();
    pt.x = pts.x - _$9P;
    pt.y = pts.y - _$9Q;
    if (WidgetDockPatternBase._$5f(this._$lw, pt)) {
        var _$7E = new WidgetDockFloatPanelController();
        _$po._$2Q(_$7E);
        var _$e1 = _$7E.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            var dfw = _$7E._panelList[i];
            dfw.setVisible(false);
        }
        return -1;
    }
    var _$oe = _$po._$1L();
    this._floatPanel = _$oe._$of;
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0W;
    return this._floatPanel._$4R(pts);
};
_$4d.prototype._$c6 = function () {
    WidgetDockPanelStateController._$j5.width = 130;
    WidgetDockPanelStateController._$j5.height = 18;
    return WidgetDockPanelStateController._$j5;
};
_$4d.prototype.refresh = function () {
    var rc = new WidgetDockRect();
    this._$2P(rc);
    rc.right = rc.right - rc.left;
    rc.left = 0;
    rc.bottom = rc.bottom - rc.top;
    rc.top = 0;
    var vh = rc.bottom - rc.top;
    vh -= 2;
    var _$pN = this._floatPanel;
    this._floatPanel = null;
    this._$nL(true, rc.left, rc.top, rc.right - rc.left, vh);
    this._$aE(rc.left, rc.top, rc.right - rc.left, vh, WidgetDockFloatPanel._$3Q);
    this._floatPanel = _$pN;
};
_$4d.prototype._$4L = function () {
    var _$po = _$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    this._$0Y(_$po);
};
