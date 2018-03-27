function WidgetDockTabController() {
    this._$iX = true;
    this._$kE = null;
    this._$jh = 0;
    this._$kf = WidgetDockTabController._$51;
    this._$hj = null;

    this._isMouseDown = false;
    this._title = "";
    this._floatPanel = null;
    this._tabList = new Array(0);

    this._tabControllerElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);
    this._tabControllerElement._tabController = this;
    this._tabControllerElement.style.backgroundColor = 'ActiveCaption';
    this._tabControllerElement.style.border = "0px solid";
    this._tabControllerElement.onmousedown = WidgetDockTabController.onMouseDown;
    this._tabControllerElement.onmousemove = WidgetDockTabController.onMouseMove;
    WidgetDockElementController.setElementSize(this._tabControllerElement, 40, WidgetDockTabController._tabControllerHeightBase);

    this._tabElement = WidgetDockElementController.createElementWithParent("div", this._tabControllerElement);
    this._tabElement._tabController = this;
    this._tabElement.style.backgroundColor = 'ButtonFace';
};
WidgetDockTabController._tabControllerHeightBase = 28;
WidgetDockTabController._styleFont = "8pt sans-serif";
WidgetDockTabController._$51 = 0;
WidgetDockTabController._$2Z = 4;
WidgetDockTabController._$3U = 4;
WidgetDockTabController.onMouseDown = function (e) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._tabController.mouseDown(e);
    } else {
        if (e == null || e == undefined) {
            e = window.event;
        }
        e.srcElement._tabController.mouseDown(e);
    }
    return false;
};
WidgetDockTabController.onMouseMove = function (e) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._tabController.mouseMove(e);
    } else {
        if (e == null || e == undefined) {
            e = window.event;
        }
        e.srcElement._tabController.mouseMove(e);
    }
};
WidgetDockTabController.prototype.resize = function (left, top, width, height) {
    WidgetDockElementController.setElementLeftTop(this._tabControllerElement, left, top);
    WidgetDockElementController.setElementSize(this._tabControllerElement, width, height);
    this._$5z();
    this.refresh();
};
WidgetDockTabController.prototype._$2P = function (rc) {
    rc.left = WidgetDockElementController.getElementLeft(this._tabControllerElement);
    rc.top = WidgetDockElementController.getElementTop(this._tabControllerElement);
    rc.right = rc.left + WidgetDockElementController.getElementWidth(this._tabControllerElement);
    rc.bottom = rc.top + WidgetDockElementController.getElementHeight(this._tabControllerElement);
};
WidgetDockTabController.prototype._$5Q = function (_$al, left, top, width, height) {
    if (this._tabList != null) {
        var _$e0 = this._tabList.length;
        for (var i = 0; i < _$e0; i++) {
            var pb = this._tabList[i]._floatPanel;
            if (pb != null && pb != _$al) {
                pb._$6p(left, top, width, height);
            }
        }
    }
};
WidgetDockTabController.prototype.mouseMove = function (e) {
    if (this._isMouseDown) {
        this._$ms(e);
    } else {
        if (this._$0i(e) >= 0) {
            this._tabControllerElement.style.cursor = "move";
        } else {
            this._tabControllerElement.style.cursor = "default";
        }
    }
};
WidgetDockTabController.prototype.mouseDown = function (e) {
    var iac = this._$0i(e);
    this._$V(iac);
    if (iac == -1) return;
    if (!WidgetDockController.isButtonAvailable(e.button)) {
        return;
    } else {
        this._isMouseDown = true;
        WidgetDockWindow._movePanelStateController = this;
        if (this._$37(e) >= 0) {
            this._$ms(e);
        } else {
            this._isMouseDown = false;
        }
    }
    return false;
};
WidgetDockTabController.prototype.mouseUp = function (e) {
    if (!this._$fT()) return;
    if (!this._isMouseDown) return;
    if (!WidgetDockController.isButtonAvailable(e.button)) {
        this._isMouseDown = false;
        this._floatPanel._$T();
        return;
    }
    var _$pH = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, _$pH);
    this._isMouseDown = false;
    this._floatPanel._$1x();
};
WidgetDockTabController.prototype._$21 = function () {
    if (this._tabList == null) return null;
    var _$aQ = new Array(this._tabList.length);
    var i;
    for (i = 0; i < _$aQ.length; i++) {
        _$aQ[i] = this._tabList[i]._floatPanel;
    }
    return _$aQ;
};
WidgetDockTabController.prototype._$5K = function (floatPanel) {
    if (floatPanel._$jm != WidgetDockFloatPanel._$q) {
        floatPanel._$5O();
    }
    var _$gi = this._tabList.length;
    if (_$gi == 0) {
        return false;
    }
    var tab;
    var act = null;
    var _$q7 = new WidgetDockRect();
    if (_$gi >= 2 && this._$jh < _$gi) {
        act = this._tabList[this._$jh];
        act._floatPanel.getRect(_$q7);
    }
    for (var i = 0; i < _$gi; i++) {
        tab = this._tabList[i];
        if (tab._floatPanel == floatPanel) {
            if (tab._titleElement != null) {
                this._tabControllerElement.removeChild(tab._titleElement);
                tab._titleElement = null;
            }
            this._tabList.splice(i, 1);
            if (this._$jh >= i) {
                this._$jh = i - 1;
                if (this._$jh < 0) this._$jh = 0;
            }
            break;
        }
    }
    _$gi = this._tabList.length;
    if (_$gi >= 1) {
        act = this._tabList[this._$jh];
        act._floatPanel.setElementVisible(true);
        this._$kE._floatPanel = act._floatPanel;
        this._$kE._floatPanel._pattern = act._floatPanel._pattern;
        this._floatPanel = act._floatPanel;
        if (_$gi >= 2) {
            act._floatPanel._$5(this);
        }
        act._floatPanel._$6q(_$q7);
    }
    if (_$gi <= 1) {
        if (_$gi == 1) {
            var _$sN = this._tabList[0];
            if (_$sN._titleElement != null) {
                this._tabControllerElement.removeChild(_$sN._titleElement);
                _$sN._titleElement = null;
            }
        }
        this._tabList.splice(0, this._tabList.length);
        this.setVisible(false);
        WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._tabControllerElement);
        if (_$gi == 0) return false;
    }
    this._$5z();
    this.refresh();
    return true;
};
WidgetDockTabController.prototype.setVisible = function (bv) {
    this._$iX = bv;
};
WidgetDockTabController.prototype._$fT = function () {
    return this._$iX;
};
WidgetDockTabController.prototype.Add = function (floatPanel) {
    var _$e1 = this._tabList.length;
    for (var i = 0; i < _$e1; i++) {
        if (this._tabList[i]._floatPanel == floatPanel) {
            return;
        }
    }
    var title = floatPanel._panelStateController.getTitle();
    var tab = new WidgetDockTab(0, 0, title);
    tab._titleElement = WidgetDockElementController.createElementWithParent("div", this._tabControllerElement);
    tab._titleElement._tabController = this;
    tab._floatPanel = floatPanel;
    this._tabList.push(tab);
    this._$5z();
};
WidgetDockTabController.prototype._$3 = function (floatPanel, _$cN) {
    var _$e1 = this._tabList.length;
    for (var i = 0; i < _$e1; i++) {
        if (this._tabList[i]._floatPanel == floatPanel) {
            return;
        }
    }
    var title = floatPanel._panelStateController.getTitle();
    var tab = new WidgetDockTab(0, 0, title);
    tab._titleElement = WidgetDockElementController.createElementWithParent("div", this._tabControllerElement);
    tab._titleElement._tabController = this;
    tab._floatPanel = floatPanel;
    this._tabList.splice(_$cN, 0, tab);
    this._$5z();
};
WidgetDockTabController.prototype._$6b = function (floatPanel) {
    var _$e1 = this._tabList.length;
    for (var i = 0; i < _$e1; i++) {
        var tab = this._tabList[i];
        if (tab._floatPanel == floatPanel) {
            this._$V(i);
            break;
        }
    }
};
WidgetDockTabController.prototype.getSize = function () {
    var _$sX = new WidgetDockSize();
    _$sX.width = WidgetDockElementController.getElementWidth(this._tabControllerElement);
    _$sX.height = WidgetDockElementController.getElementHeight(this._tabControllerElement);
    return _$sX;
};
WidgetDockTabController.prototype._$5z = function () {
    if (this._tabList == null) {
        return;
    }
    var d = this.getSize();
    d.width -= 2;
    if (d.width < 0) {
        d.width = 0;
    }
    var ft;
    if (this._tabElement != null) {
        WidgetDockElementController.setElementLeftTop(this._tabElement, 0, 0);
        WidgetDockElementController.setElementSize(this._tabElement, d.width, WidgetDockTabController._$3U);
    }
    var tabListLength = this._tabList.length;
    var _$fv = 0;
    var tab = null;
    var size = new WidgetDockSize();
    var _$dI = new Array(tabListLength);
    for (var i = 0; i < tabListLength; i++) {
        tab = this._tabList[i];
        ft = this.getStyleFontWithFloatPanel(tab._floatPanel);
        tab._left = _$fv;
        WidgetDockElementController.getOffsetSize(size, ft, tab._titleOriginal, this._$hj);
        tab._right = _$fv + size.width + 2 * WidgetDockTabController._$2Z;
        _$dI[i] = tab._right - _$fv;
        _$fv = tab._right;
    }
    if (_$fv > d.width) {
        for (var i = 0; i < tabListLength; i++) {
            tab = this._tabList[i];
            tab._left = tab._left * d.width / _$fv;
            tab._right = tab._right * d.width / _$fv;
        }
    }
    for (var i = 0; i < tabListLength; i++) {
        tab = this._tabList[i];
        ft = this.getStyleFontWithFloatPanel(tab._floatPanel);
        var _$fE = tab._right - tab._left;
        var _$fK = 0;
        tab._title = WidgetDockPatternBase._$6y(ft, tab._titleOriginal, _$fE, _$dI[i], WidgetDockTabController._$2Z, _$fK, this._$hj);
    }
    this.refresh();
};
WidgetDockTabController.prototype._$4J = function (floatPanel, _$sd) {
    var _$e1 = this._tabList.length;
    for (var i = 0; i < _$e1; i++) {
        var tab = this._tabList[i];
        if (tab._floatPanel == floatPanel) {
            tab._titleOriginal = new String(_$sd);
            tab._title = new String(_$sd);
            this._$5z();
            break;
        }
    }
};
WidgetDockTabController.prototype._$3x = function (floatPanel) {
    var b = false;
    var _$e1 = this._tabList.length;
    for (var i = 0; i < _$e1; i++) {
        var tab = this._tabList[i];
        if (tab._floatPanel == floatPanel) {
            b = true;
            break;
        }
    }
    return b;
};
WidgetDockTabController.prototype._$V = function (_$cN) {
    var iac = _$cN;
    if (iac != this._$jh && iac != -1) {
        if (this._floatPanel != null) {
            this._floatPanel._tabController = null;
        }
        this._$jh = iac;
        var tab = this._tabList[iac];
        this._floatPanel = tab._floatPanel;
        var rc = new WidgetDockRect();
        this._$kE._floatPanel.getRect(rc);
        this._$kE._floatPanel.setElementVisible(false);
        tab._floatPanel.setElementVisible(true);
        if (!(tab._floatPanel._$jm == WidgetDockFloatPanel._$q)) {
            tab._floatPanel._tabController = this;
        }
        this._$kE._floatPanel = tab._floatPanel;
        this._$kE._floatPanel._pattern = tab._floatPanel._pattern;
        tab._floatPanel._$kA = this._$kE;
        tab._floatPanel._$6q(rc);
        this.refresh();
        tab._floatPanel._patternMain._$1(tab._floatPanel);
    }
};
WidgetDockTabController.prototype._$37 = function (e) {
    var _$pL = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, _$pL);
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0X;
    this._floatPanel._$lf._$iC = true;
    return this._floatPanel._$4R(_$pL);
};
WidgetDockTabController.prototype._$ms = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    this._floatPanel._$4i(pt);
};
WidgetDockTabController.prototype._$0i = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    pt.x = pt.x - WidgetDockElementController.getElementLeft(this._tabControllerElement);
    var _$e1 = this._tabList.length;
    for (var i = 0; i < _$e1; i++) {
        var tab = this._tabList[i];
        if (pt.x >= tab._left && pt.x <= tab._right) {
            return i;
        }
    }
    return -1;
};
WidgetDockTabController.prototype.setFloatPanel = function (floatPanel) {
    this._floatPanel = floatPanel;
};
WidgetDockTabController.prototype.refresh = function (g) {
    this._tabControllerElement.width = this._tabControllerElement.width;
    this._$aK(g, this._$jh);
};
WidgetDockTabController.prototype._$c6 = function () {
    if (this._floatPanel != null) {
        var d = this._floatPanel.getSize();
        d.height = WidgetDockTabController._tabControllerHeightBase;
        return d;
    } else {
        return new WidgetDockSize(100, WidgetDockTabController._tabControllerHeightBase);
    }
};
WidgetDockTabController.prototype._$0d = function (floatPanel, pt) {
    var _$sw = new WidgetDockLocation();
    _$sw.x = pt.x;
    _$sw.y = pt.y;
    _$sw.x = _$sw.x - WidgetDockElementController.getElementLeft(this._tabControllerElement);
    _$sw.y = _$sw.y - WidgetDockElementController.getElementTop(this._tabControllerElement);
    var _$e1 = this._tabList.length;
    var tab = null;
    for (var i = 0; i < _$e1; i++) {
        tab = this._tabList[i];
        if (_$sw.x > tab._left && _$sw.x < tab._right) {
            if (tab._floatPanel != floatPanel) {
                this._tabList[i] = this._tabList[this._$jh];
                this._tabList[this._$jh] = tab;
                this._$jh = i;
                this._$kE._$6G(tab._floatPanel, floatPanel);
                this._$5z();
            }
            return true;
        }
    }
    return false;
};
WidgetDockTabController.prototype.getStyleFont = function () {
    return WidgetDockTabController._styleFont;
};
WidgetDockTabController.prototype.getStyleFontWithFloatPanel = function (floatPanel) {
    if (floatPanel != null && floatPanel._panelStateController != null) {
        return floatPanel._panelStateController.getStyleFont();
    } else {
        return this.getStyleFont();
    }
};
WidgetDockTabController.prototype._$aK = function (g, _$cs) {
    if (_$cs < 0) return;
    var d = this.getSize();
    var _$e1 = this._tabList.length;
    if (_$e1 == 0) return;
    if (this._$kf == WidgetDockTabController._$51) {
        var tab = null;
        var f;
        for (var i = 0; i < _$e1; i++) {
            if (i != this._$jh) {
                tab = this._tabList[i];
                f = this.getStyleFontWithFloatPanel(tab._floatPanel);
                this._$aJ(tab._titleElement, tab._left, tab._right, tab._title, false, f);
            }
        }
        tab = this._tabList[_$cs];
        var _$dS = tab._left;
        var _$ed = tab._right;
        f = this.getStyleFontWithFloatPanel(tab._floatPanel);
        this._$aJ(tab._titleElement, _$dS, _$ed, tab._title, true, f);
        if (this._$hj != null) {
            this._$hj._$s1 = 'ButtonShadow';
            if (tab._left >= 2) {
                WidgetDockElementController._$1q(0, 2, tab._left, 2, this._$hj);
            }
            WidgetDockElementController._$1q(tab._right, 2, d.width, 2, this._$hj);
            this._$hj._$s1 = 'menutext';
            if (tab._left >= 2) {
                WidgetDockElementController._$1q(0, 3, tab._left, 3, this._$hj);
            }
            WidgetDockElementController._$1q(tab._right, 3, d.width, 3, this._$hj);
        }
    }
};
WidgetDockTabController.prototype._$aJ = function (_$U, left, right, title, _$7J, _$b2) {
    var _$gC = 2;
    var _$dU;
    if (!_$7J) {
        _$dU = WidgetDockTabController._tabControllerHeightBase - 3;
    } else {
        _$dU = WidgetDockTabController._tabControllerHeightBase - 2;
    }
    if (this._$hj == null) {
        var _$ff = 0;
        WidgetDockElementController.setElementLeftTop(_$U, left + WidgetDockTabController._$2Z, WidgetDockTabController._$3U + _$ff);
        WidgetDockElementController.setElementSize(_$U, right - left, WidgetDockTabController._tabControllerHeightBase - WidgetDockTabController._$3U - _$ff - 4);
        _$U.style.font = _$b2;
        _$U.innerHTML = title;
        if (_$7J) {
            _$U.style.backgroundColor = 'ButtonFace';
            _$U.style.color = 'menutext';
        } else {
            _$U.style.backgroundColor = 'ActiveCaption';
            _$U.style.color = 'white';
        }
        return;
    }
    this._$hj._$s1 = 'buttonText';
    WidgetDockElementController._$1q(left, 2, left, _$dU - 2, this._$hj);
    WidgetDockElementController._$1q(right, 2, right, _$dU - 2, this._$hj);
    this._$hj._$s1 = 'buttonShadow';
    WidgetDockElementController._$1q(left + 2, _$dU - 1, right - 2, _$dU - 1, this._$hj);
    WidgetDockElementController._$1q(right - 1, _$gC, right - 1, _$dU - 2, this._$hj);
    this._$hj._$s1 = 'buttonText';
    WidgetDockElementController._$1q(left, _$dU - 2, left + 1, _$dU - 1, this._$hj);
    WidgetDockElementController._$1q(left + 2, _$dU, right - 2, _$dU, this._$hj);
    WidgetDockElementController._$1q(right - 1, _$dU - 1, right, _$dU - 2, this._$hj);
    WidgetDockElementController._$1q(right, _$gC, right, _$dU - 2, this._$hj);
    this._$hj.fillStyle = 'menutext';
    var size = new WidgetDockSize();
    WidgetDockElementController.getOffsetSize(size, _$b2, title, this._$hj);
    this._$hj.font = _$b2;
    this._$hj.fillText(title, left + WidgetDockTabController._$2Z, WidgetDockTabController._tabControllerHeightBase / 2 + 4);
};
