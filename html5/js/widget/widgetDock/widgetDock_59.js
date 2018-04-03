function _$59() {
    this._$kx = null;
    this._$la = null;
    this._$lc = null;
    this._$lc = new WidgetDockPanelAlone(WidgetDockController._elementRootId);
    this._$lc._$l5 = this;
    this._$hu = new Date();
    this._$hk = this._$hu.getTime();
    this._$iJ = false;
};
_$59.prototype.add = function (floatPanel) {
    var _$et = floatPanel._window._$jO;
    WidgetDockElementController.setElementZIndex(this._$lc._panelStateElement, _$et);
    floatPanel.setElementZIndex(_$et + 1);
};
_$59.prototype._$6k = function (_$di) {
    this._$jY = _$di;
};
_$59.prototype.resize = function (left, top, width, height) {
    var _$d5 = this._$jY;
    WidgetDockElementController.setElementLeftTop(this._$lc._panelStateElement, left, top);
    var canvas = this._$lc._panelStateElement;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    if (this._$kx != null) {
        var _$t6 = 2;
        var _$tl, _$to, _$tp, _$tk;
        if (_$d5 == EnumPatternPositionType.Left) {
            _$tl = left + WidgetDockPanelAlone._space;
            _$to = top + WidgetDockPanelAlone._space;
            _$tp = width - 2 * WidgetDockPanelAlone._space - _$t6;
            _$tk = height - 2 * WidgetDockPanelAlone._space;
        } else if (_$d5 == EnumPatternPositionType.Right) {
            _$tl = left + WidgetDockPanelAlone._space + _$t6;
            _$to = top + WidgetDockPanelAlone._space;
            _$tp = width - 2 * WidgetDockPanelAlone._space - _$t6;
            _$tk = height - 2 * WidgetDockPanelAlone._space;
        } else if (_$d5 == EnumPatternPositionType.Top) {
            _$tl = left + WidgetDockPanelAlone._space;
            _$to = top + WidgetDockPanelAlone._space;
            _$tp = width - 2 * WidgetDockPanelAlone._space;
            _$tk = height - 2 * WidgetDockPanelAlone._space - _$t6;
        } else {
            _$tl = left + WidgetDockPanelAlone._space;
            _$to = top + WidgetDockPanelAlone._space + _$t6;
            _$tp = width - 2 * WidgetDockPanelAlone._space;
            _$tk = height - 2 * WidgetDockPanelAlone._space - _$t6;
        }
        this._$kx._$6p(_$tl, _$to, _$tp, _$tk);
    }
};
_$59.prototype._$au = function () {
    if (this._$la != null) this._$la.reset();
    this._$kx.setElementVisible(false);
    this._$kx._patternMain.add(this._$kx);
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._$lc._panelStateElement);
};
_$59.prototype.mouseMove = function (e) {
    if (this._$iJ) return;
    var rc = new WidgetDockRect();
    this._$lc.getRect(rc);
    var pt = new WidgetDockPoint();
    WidgetDockElementController.getMousePoint(e, pt);
    if (!WidgetDockPatternBase.isInRect(rc, pt)) {
        if (!this._$la._$3u(pt, this._$kx)) {
            var vd = new Date();
            var _$sW = (vd.getTime() - this._$hk) / 1000;
            if (_$sW > 2) {
                this._$kx._window._patternMain._$4T(null);
            }
        }
    }
    _$59.prototype._$09 = function (e) {
        var rc = new WidgetDockRect();
        this._$lc.getRect(rc);
        var pt = new WidgetDockPoint();
        WidgetDockElementController.getMousePoint(e, pt);
        if (WidgetDockPatternBase.isInRect(rc, pt)) {
            this._$iJ = true;
        } else {
            this._$iJ = false;
            this._$kx._window._patternMain._$4T(null);
        }
    }
};
