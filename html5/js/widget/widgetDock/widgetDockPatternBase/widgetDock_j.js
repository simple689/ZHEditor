function _$J(isMain) {
    _$J.baseConstructor.call(this, isMain);
    this._window = null;
};
WidgetDockPrototype.bind(_$J, _$K);
_$J.prototype.getWindowRect = function (rc) {
    if (this._$he != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._$he);
        rc.top = WidgetDockElementController.getElementTop(this._$he);
        rc.right = parseInt(this._$he.style.width) + rc.left;
        rc.bottom = parseInt(this._$he.style.height) + rc.top;
    }
};
_$J.prototype._$36 = function (x, y) {
    var left = WidgetDockElementController.getElementLeft(this._$he);
    var top = WidgetDockElementController.getElementTop(this._$he);
    var width = parseInt(this._$he.style.width);
    var height = parseInt(this._$he.style.height);
    if ((x >= left) && (x <= (left + width)) && (y >= top) && (y <= (top + height))) {
        return true;
    }
    return false;
};
_$J.prototype.add = function (com) {
    var len = this._$ha.length;
    var _$8G = false;
    for (var i = 0; i < len; i++) {
        if (this._$ha[i] == com) {
            _$8G = true;
            break;
        }
    }
    if (!_$8G) {
        this._$ha.push(com);
    }
    if (com instanceof WidgetDockFloatPanel) {
        com.setElementZIndex(this._$jO + 1);
    } else {
        com.setElementZIndex(this._$jO + 2);
    }
};
_$J.prototype._$d = function (com) {
};
_$J.prototype._$5E = function (com) {
    var len = this._$ha.length;
    for (var i = 0; i < len; i++) {
        if (this._$ha[i] == com) {
            this._$ha.splice(i, 1);
            break;
        }
    }
};
_$J.prototype._$X = function (_$tE) {
    this._$6r(this._$jO + _$tE);
};
_$J.prototype._$6r = function (_$tE) {
    this._$jO = _$tE;
    this._$74();
};
_$J.prototype._$74 = function () {
    if (this._$he != null) {
        WidgetDockElementController.setElementZIndex(this._$he, this._$jO);
        if (this._$ha != null) {
            var _$e0 = this._$ha.length;
            for (var i = 0; i < _$e0; i++) {
                if (this._$ha[i] instanceof WidgetDockFloatPanel) {
                    this._$ha[i].setElementZIndex(this._$jO + 1);
                } else {
                    this._$ha[i].setElementZIndex(this._$jO + 2);
                }
            }
        }
    }
};
_$J._$0x = function (frame) {
    var _$og = new _$J(false);
    _$og._location = new WidgetDockLocation();
    _$og._location.x = frame.x;
    _$og._location.y = frame.y;
    _$og._size = new WidgetDockSize();
    _$og._size.width = frame.width;
    _$og._size.height = frame.height;
    return _$og;
};
_$J.prototype._$0v = function (elementId) {
    var sp = new WidgetDockPanelAlone(elementId);
    sp._$kQ = this;
    this._$he = sp._panelStateElement;
    this.setVisible(false);
    this._$hh = sp._panelStateElement;
    this._$is = true;
    this._signLenList[1] = 6;
    this._signLenList[3] = 6;
    this._signLenList[0] = 6;
    this._signLenList[2] = 6;
    this._rect.bottom = this._rect.top;
    return true;
};
_$J.prototype._$fT = function () {
    if (this._$he != null && this._$he.style.visibility == "visible") {
        return true;
    }
    return false;
};
_$J.prototype.setVisible = function (sch) {
    WidgetDockElementController.setElementVisible(this._$he, sch);
};
_$J.prototype._$n = function (floatPanel) {
    this._$it = true;
    this._$is = true;
    this._window = floatPanel._window;
    this._window._$ml(this);
    var _$8q = false;
    if (this._$he == null || (this._$he != null && !this._$fT())) {
        if (this._$kV == null) {
            this._$kV = floatPanel._patternMain;
        }
        this._$0v(WidgetDockController._elementRootId);
        _$8q = true;
        this._$74();
    }
    this.add(floatPanel);
    this._$kK = floatPanel;
    floatPanel._pattern = this;
    this._$18(floatPanel, null);
    if (!this._$fT()) {
        if (this._size == null) {
            this._size = new WidgetDockSize();
            this._size.width = floatPanel._$lK.cx;
            this._size.height = floatPanel._$lK.cy;
            this._location = new WidgetDockLocation();
            this._location.x = floatPanel._$lt.x;
            this._location.y = floatPanel._$lt.y;
        } else {
            floatPanel._$lt.x = this._location.x;
            floatPanel._$lt.y = this._location.y;
            floatPanel._$lK.cx = this._size.width;
            floatPanel._$lK.cy = this._size.height;
        }
        var pt = new WidgetDockLocation();
        pt.x = floatPanel._$lt.x;
        pt.y = floatPanel._$lt.y;
        if (pt.y < 0) {
            pt.y = 0;
        }
        this.setVisible(true);
        this._$6p(pt.x, pt.y, floatPanel._$lK.cx, floatPanel._$lK.cy);
    }
    if (floatPanel._$kA != null && floatPanel._$kA._tabController != null) {
        floatPanel._$kA._tabController._$5z();
    }
    if (!_$8q) {
        if (this._$4s(null, true)) {
            this._$7p();
        }
    }
};
_$J.prototype._$6p = function (left, top, width, height) {
    WidgetDockElementController.setElementLeftTop(this._$he, left, top);
    this._$he.style.width = width + "px";
    this._$he.style.height = height + "px";
    this._$mC(left + this._signLenList[0], top, width - this._signLenList[0] - this._signLenList[2], height);
};
_$J.prototype._$10 = function () {
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$he);
    this._$he = null;
    this._window._$mm(this);
    var cnt = this._$ha.length;
    for (var i = 0; i < cnt; i++) {
        if ((this._$ha[i] instanceof _$N) || (this._$ha[i] instanceof WidgetDockPanelStateController)) {
            WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$ha[i]._panelStateElement);
        }
    }
    this._elementList[1] = null;
};
_$J.prototype._$01 = function () {
    if (this._$it) {
        var panel = this._panelList[0]._list[0];
        if (!panel._$iX) {
            this._location.x = WidgetDockElementController.getElementLeft(this._$he);
            this._location.y = WidgetDockElementController.getElementTop(this._$he);
            this._size.width = parseInt(this._$he.style.width);
            this._size.height = parseInt(this._$he.style.height);
            this._$10();
        }
    } else {
        this._$10();
    }
};
_$J.prototype._$53 = function (floatPanel) {
    _$K.prototype._$53.call(this, floatPanel);
};
