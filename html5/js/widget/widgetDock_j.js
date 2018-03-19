function _$J(isMain) {
    _$J.baseConstructor.call(this, isMain);
    this._$kS;
    this._$kF = null;
};
WidgetDockPrototype.bind(_$J, _$K);
_$J.prototype.getWindowRect = function (_$qb) {
    if (this._$he != null) {
        _$qb.left = WidgetDockElementController.getElementLeft(this._$he);
        _$qb.top = WidgetDockElementController.getElementTop(this._$he);

        _$qb.right = parseInt(this._$he.style.width) + _$qb.left;
        _$qb.bottom = parseInt(this._$he.style.height) + _$qb.top;

    }
};
_$J.prototype._$36 = function (iX, iY) {
    var _$eu = WidgetDockElementController.getElementLeft(this._$he);
    var _$gC = WidgetDockElementController.getElementTop(this._$he);
    var width, height;

    width = parseInt(this._$he.style.width);
    height = parseInt(this._$he.style.height);

    if ((iX >= _$eu) && (iX <= (_$eu + width)) && (iY >= _$gC) && (iY <= (_$gC + height))) return true;
    return false;
};
_$J.prototype.Add = function (com) {
    var _$e0 = this._$ha.length;
    var i;
    var _$8G = false;
    for (i = 0; i < _$e0; i++) {
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
    var v = 0;
};
_$J.prototype._$5E = function (com) {
    var _$e0 = this._$ha.length;
    var i;
    for (i = 0; i < _$e0; i++) {
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
            var i;
            for (i = 0; i < _$e0; i++) {
                if (this._$ha[i] instanceof WidgetDockFloatPanel) {
                    this._$ha[i].setElementZIndex(this._$jO + 1);
                } else {
                    this._$ha[i].setElementZIndex(this._$jO + 2);
                }
            }
        }
    }
};
_$J._$0x = function (_$q2) {
    var _$og = new _$J(false);
    _$og._location = new WidgetDockLocation();
    _$og._location.x = _$q2.x;
    _$og._location.y = _$q2.y;
    _$og._size = new WidgetDockSize();
    _$og._size.width = _$q2.width;
    _$og._size.height = _$q2.height;
    return _$og;
};
_$J.prototype._$0v = function (elementId) {
    var sp = new _$6A(elementId);
    sp._$kQ = this;
    this._$he = sp._panelStateElement;
    this.setVisible(false);
    this._$is = true;
    this._signLenAry[1] = 6;
    this._signLenAry[3] = 6;
    this._signLenAry[0] = 6;
    this._signLenAry[2] = 6;
    this._rect.bottom = this._rect.top;
    return true;
};
_$J.prototype._$fT = function () {
    if (this._$he != null && this._$he.style.visibility == "visible") return true;
    return false;
};
_$J.prototype.setVisible = function (_$8e) {
    WidgetDockElementController.setElementVisible(this._$he, _$8e);
};
_$J.prototype._$n = function (_$b9) {
    this._$it = true;
    this._$is = true;
    this._$kS = _$b9._windowMain._$kS;
    this._$kF = _$b9._windowMain;
    this._$kF._$ml(this);
    var _$8q = false;
    if (this._$he == null || (this._$he != null && !this._$fT())) {
        if (this._$kV == null) this._$kV = _$b9._patternMain;
        this._$0v(WidgetDockController._elementRootId);
        _$8q = true;
        this._$74();
    }
    this.Add(_$b9);
    this._$kK = _$b9;
    if (_$8q) {
    }
    _$b9._$kB = this;
    this._$18(_$b9, null);
    if (!this._$fT()) {
        if (this._size == null) {
            this._size = new WidgetDockSize();
            this._size.width = _$b9._$lK.cx;
            this._size.height = _$b9._$lK.cy;
            this._location = new WidgetDockLocation();
            this._location.x = _$b9._$lt.x;
            this._location.y = _$b9._$lt.y;
        } else {
            _$b9._$lt.x = this._location.x;
            _$b9._$lt.y = this._location.y;
            _$b9._$lK.cx = this._size.width;
            _$b9._$lK.cy = this._size.height;
        }
        var pt = new WidgetDockLocation();
        pt.x = _$b9._$lt.x;
        pt.y = _$b9._$lt.y;
        if (pt.y < 0) pt.y = 0;
        this.setVisible(true);
        this._$6p(pt.x, pt.y, _$b9._$lK.cx, _$b9._$lK.cy);
    }
    if (_$b9._$kA != null && _$b9._$kA._$o5 != null) _$b9._$kA._$o5._$5z();
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
    this._$mC(left + this._signLenAry[0], top, width - this._signLenAry[0] - this._signLenAry[2], height);
};
_$J.prototype._$10 = function () {
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$he);
    this._$he = null;
    this._$kF._$mm(this);
    var cnt = this._$ha.length;
    for (var i = 0; i < cnt; i++) {
        if ((this._$ha[i] instanceof _$N) || (this._$ha[i] instanceof WidgetDockPanelStateController)) {
            WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$ha[i]._panelStateElement);
        }
    }
    this._elementWithType[1] = null;
};
_$J.prototype._$01 = function () {
    if (this._$it) {
        var panel = this._patternPositionList[0]._patternSub._panelList[0];
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
