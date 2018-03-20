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
_$4d.prototype.isInRectWithPanelState = function (pts) {
    var _$po = this._$kY._patternPositionList[0]._panelTabList[0]._$kI;
    var left = WidgetDockElementController.getElementLeft(this._panelStateElement);
    var top = WidgetDockElementController.getElementTop(this._panelStateElement);
    var pt = new WidgetDockLocation();
    pt.x = pts.x - left;
    pt.y = pts.y - top;
    if (WidgetDockPatternBase.isInRect(this._buttonCloseRect, pt)) {
        var _$7E = new WidgetDockFloatPanelController();
        _$po._$2Q(_$7E);
        var _$e1 = _$7E.getPanelNum();
        for (var i = 0; i < _$e1; i++) {
            var dfw = _$7E._panelTabList[i];
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
    var _$po = _$kY._patternPositionList[0]._panelTabList[0]._$kI;
    this._$0Y(_$po);
};
