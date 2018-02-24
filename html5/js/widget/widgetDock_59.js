function _$59() {
    this._$kx = null;
    this._$la = null;
    this._$lc = null;
    this._$lc = new _$6A(WidgetDockController._elementRootId);
    this._$lc._$l5 = this;
    this._$hu = new Date();
    this._$hk = this._$hu.getTime();
    this._$iJ = false;
};
_$59.prototype.Add = function (floatPanel) {
    var it = 0;
    var _$et = floatPanel._windowMain._$jO;
    WidgetDockElementController.setElementZIndex(this._$lc._$h8, _$et);
    floatPanel.setElementZIndex(_$et + 1);
};
_$59.prototype.setVisible = function (_$8e) {
};
_$59.prototype._$6k = function (_$di) {
    this._$jY = _$di;
};
_$59.prototype._$6o = function (_$cS, _$do, width, height) {
    var _$d5 = this._$jY;
    WidgetDockElementController.setElementLeftTop(this._$lc._$h8, _$cS, _$do);
    var canvas = this._$lc._$h8;

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

    if (this._$kx != null) {
        var _$t6 = 2;
        var _$tl, _$to, _$tp, _$tk;
        if (_$d5 == EnumPatternPositionType.Left) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = width - 2 * _$6A._$p - _$t6;
            _$tk = height - 2 * _$6A._$p;
        } else if (_$d5 == EnumPatternPositionType.Right) {
            _$tl = _$cS + _$6A._$p + _$t6;
            _$to = _$do + _$6A._$p;
            _$tp = width - 2 * _$6A._$p - _$t6;
            _$tk = height - 2 * _$6A._$p;
        } else if (_$d5 == EnumPatternPositionType.Top) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = width - 2 * _$6A._$p;
            _$tk = height - 2 * _$6A._$p - _$t6;
        } else {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p + _$t6;
            _$tp = width - 2 * _$6A._$p;
            _$tk = height - 2 * _$6A._$p - _$t6;
        }
        this._$kx._$6p(_$tl, _$to, _$tp, _$tk);
    }
};
_$59.prototype._$au = function () {
    if (this._$la != null) this._$la.reset();
    this._$kx.setElementVisible(false);
    this._$kx._$bf(false);
    this._$kx._patternMain.Add(this._$kx);
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$lc._$h8);
};
_$59.prototype._$0a = function (e) {
    if (this._$iJ) return;
    var rc = new WidgetDockRect();
    this._$lc._$25(rc);
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    if (!WidgetDockPatternBase._$5f(rc, pt)) {
        if (!this._$la._$3u(pt, this._$kx)) {
            var vd = new Date();
            var _$sW = (vd.getTime() - this._$hk) / 1000;
            if (_$sW > 2) {
                this._$kx._windowMain._patternMain._$4T(null);
            }
        }
    }
    _$59.prototype._$09 = function (e) {
        var rc = new WidgetDockRect();
        this._$lc._$25(rc);
        var pt = new WidgetDockLocation();
        WidgetDockElementController._$2D(e, pt);
        if (WidgetDockPatternBase._$5f(rc, pt)) {
            this._$iJ = true;
        } else {
            this._$iJ = false;
            this._$kx._windowMain._patternMain._$4T(null);
        }
    }
};
