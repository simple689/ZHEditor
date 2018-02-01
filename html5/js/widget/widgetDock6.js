function _$59() {
    this._$kx = null;
    this._$la = null;
    this._$lc = null;
    this._$lc = new _$6A(widgetDockController.rootDivId);
    this._$lc._$l5 = this;
    this._$hu = new Date();
    this._$hk = this._$hu.getTime();
    this._$iJ = false;
};
_$59.prototype.Add = function (_$mO) {
    var it = 0;
    var _$et = _$mO._$l0._$jO;
    _$m8._$6i(this._$lc._$h8, _$et);
    _$mO._$6i(_$et + 1);
};
_$59.prototype.setVisible = function (_$8e) {
};
_$59.prototype._$6k = function (_$di) {
    this._$jY = _$di;
};
_$59.prototype._$6o = function (_$cS, _$do, _$dq, _$cM) {
    var _$d5 = this._$jY;
    _$m8._$6j(this._$lc._$h8, _$cS, _$do);
    var canvas = this._$lc._$h8;
    if (widgetDockController.isHasCanvasContext) {
        canvas.width = _$dq;
        canvas.height = _$cM;
    } else {
        canvas.style.width = _$dq + "px";
        canvas.style.height = _$cM + "px";
    }
    if (this._$kx != null) {
        var _$t6 = 2;
        var _$tl, _$to, _$tp, _$tk;
        if (_$d5 == widgetDockPattern._$3k) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = _$dq - 2 * _$6A._$p - _$t6;
            _$tk = _$cM - 2 * _$6A._$p;
        } else if (_$d5 == widgetDockPattern._$3l) {
            _$tl = _$cS + _$6A._$p + _$t6;
            _$to = _$do + _$6A._$p;
            _$tp = _$dq - 2 * _$6A._$p - _$t6;
            _$tk = _$cM - 2 * _$6A._$p;
        } else if (_$d5 == widgetDockPattern._$3m) {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p;
            _$tp = _$dq - 2 * _$6A._$p;
            _$tk = _$cM - 2 * _$6A._$p - _$t6;
        } else {
            _$tl = _$cS + _$6A._$p;
            _$to = _$do + _$6A._$p + _$t6;
            _$tp = _$dq - 2 * _$6A._$p;
            _$tk = _$cM - 2 * _$6A._$p - _$t6;
        }
        this._$kx._$6p(_$tl, _$to, _$tp, _$tk);
    }
};
_$59.prototype._$au = function () {
    if (this._$la != null) this._$la._$5R();
    this._$kx._$39(false);
    this._$kx._$bf(false);
    this._$kx._$kH.Add(this._$kx);
    _$m8._$5I(widgetDockController.rootDivId, this._$lc._$h8);
};
_$59.prototype._$0a = function (e) {
    if (this._$iJ) return;
    var rc = new Rect();
    this._$lc._$25(rc);
    var pt = new Align();
    _$m8._$2D(e, pt);
    if (!widgetDockPattern._$5f(rc, pt)) {
        if (!this._$la._$3u(pt, this._$kx)) {
            var vd = new Date();
            var _$sW = (vd.getTime() - this._$hk) / 1000;
            if (_$sW > 2) {
                this._$kx._$l0.pattern._$4T(null);
            }
        }
    }
    _$59.prototype._$09 = function (e) {
        var rc = new Rect();
        this._$lc._$25(rc);
        var pt = new Align();
        _$m8._$2D(e, pt);
        if (widgetDockPattern._$5f(rc, pt)) {
            this._$iJ = true;
        } else {
            this._$iJ = false;
            this._$kx._$l0.pattern._$4T(null);
        }
    }
};
