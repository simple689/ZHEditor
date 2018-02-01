function _$4d() {
    _$4d.baseConstructor.call(this);
    this._$kY = null;
};
_$4d.prototype._$ru = function (mainPattern) {
    this._$kY = mainPattern;
};
_$4d.prototype.setVisible = function () {
};
_$4d.prototype.setSize = function (_$am) {
    _$m8._$6n(this._$h8, _$am.width, _$am.height);
};
_$4d.prototype._$6i = function (_$cR) {
    if (this._$h8 != null) {
        _$m8._$6i(this._$h8, _$cR);
    }
};
_$4d.prototype._$mj = function (pts) {
    var _$po;
    _$po = this._$kY.subPatternList[0].subPattern.panelList[0]._$kI;
    var _$9P = _$m8._$2k(this._$h8);
    var _$9Q = _$m8._$2M(this._$h8);
    var pt = new Align();
    pt.x = pts.x - _$9P;
    pt.y = pts.y - _$9Q;
    if (widgetDockPattern._$5f(this._$lw, pt)) {
        var _$7E = new _$D();
        _$po._$2Q(_$7E);
        var _$e1 = _$7E.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            var dfw = _$7E.panelList[i];
            if (dfw._$cn()) {
                dfw.setVisible(false);
            }
        }
        return -1;
    }
    var _$oe = _$po._$1L();
    this._$bi = _$oe._$of;
    widgetDockFloatPanel._$jy = widgetDockFloatPanel._$0W;
    return this._$bi._$4R(pts);
};
_$4d.prototype._$c6 = function () {
    _$1l._$j5.width = 130;
    _$1l._$j5.height = 18;
    return _$1l._$j5;
};
_$4d.prototype._$qJ = function () {
    var rc = new Rect();
    this._$2P(rc);
    rc.right = rc.right - rc.left;
    rc.left = 0;
    rc.bottom = rc.bottom - rc.top;
    rc.top = 0;
    var vh = rc.bottom - rc.top;
    vh -= 2;
    var _$pN = this._$bi;
    this._$bi = null;
    this._$nL(true, rc.left, rc.top, rc.right - rc.left, vh, true);
    this._$aE(rc.left, rc.top, rc.right - rc.left, vh, widgetDockFloatPanel._$3Q);
    this._$bi = _$pN;
};
_$4d.prototype._$4L = function () {
    var _$po = _$kY.subPatternList[0].subPattern.panelList[0]._$kI;
    this._$0Y(_$po);
};
