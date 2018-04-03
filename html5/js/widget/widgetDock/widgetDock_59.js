function _$59() {
    this._floatPanel = null;
    this._panelStatePanel = null;
    this._panelAlone = null;
    this._panelAlone = new WidgetDockPanelAlone(WidgetDockController._elementRootId);
    this._panelAlone.m$59 = this;
    var date = new Date();
    this._time = date.getTime();
    this._isInRect = false;
};
_$59.prototype.add = function (floatPanel) {
    var _$et = floatPanel._window._$jO;
    WidgetDockElementController.setElementZIndex(this._panelAlone._panelStateElement, _$et);
    floatPanel.setElementZIndex(_$et + 1);
};
_$59.prototype._$6k = function (_$di) {
    this._$jY = _$di;
};
_$59.prototype.resize = function (left, top, width, height) {
    var _$d5 = this._$jY;
    WidgetDockElementController.setElementLeftTop(this._panelAlone._panelStateElement, left, top);
    var canvas = this._panelAlone._panelStateElement;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    if (this._floatPanel != null) {
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
        this._floatPanel._$6p(_$tl, _$to, _$tp, _$tk);
    }
};
_$59.prototype._$au = function () {
    if (this._panelStatePanel != null) this._panelStatePanel.reset();
    this._floatPanel.setElementVisible(false);
    this._floatPanel._patternMain.add(this._floatPanel);
    WidgetDockElementController.removeChildWithElementId(WidgetDockController._elementRootId, this._panelAlone._panelStateElement);
};
_$59.prototype.mouseMove = function (e) {
    if (this._isInRect) return;
    var rc = new WidgetDockRect();
    this._panelAlone.getRect(rc);
    var pt = new WidgetDockPoint();
    WidgetDockElementController.getMousePoint(e, pt);
    if (!WidgetDockPatternBase.isInRect(rc, pt)) {
        if (!this._panelStatePanel._$3u(pt, this._floatPanel)) {
            var vd = new Date();
            var _$sW = (vd.getTime() - this._time) / 1000;
            if (_$sW > 2) {
                this._floatPanel._window._patternMain._$4T(null);
            }
        }
    }
    _$59.prototype._$09 = function (e) {
        var rc = new WidgetDockRect();
        this._panelAlone.getRect(rc);
        var pt = new WidgetDockPoint();
        WidgetDockElementController.getMousePoint(e, pt);
        if (WidgetDockPatternBase.isInRect(rc, pt)) {
            this._isInRect = true;
        } else {
            this._isInRect = false;
            this._floatPanel._window._patternMain._$4T(null);
        }
    }
};
