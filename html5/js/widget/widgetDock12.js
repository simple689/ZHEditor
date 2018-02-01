
function _$J(_$7R) {
    _$J.baseConstructor.call(this, _$7R);
    this._$kS;
    this._$kF = null;
};_$b1._$b0(_$J, _$K);
_$J.prototype.getWindowRect = function (_$qb) {
    if (this._$he != null) {
        _$qb.left = _$m8._$2k(this._$he);
        _$qb.top = _$m8._$2M(this._$he);
        if (widgetDockController.isHasCanvasContext) {
            _$qb.right = this._$he.width + _$qb.left;
            _$qb.bottom = this._$he.height + _$qb.top;
        } else {
            _$qb.right = parseInt(this._$he.style.width) + _$qb.left;
            _$qb.bottom = parseInt(this._$he.style.height) + _$qb.top;
        }
    }
};
_$J.prototype._$36 = function (iX, iY) {
    var _$eu = _$m8._$2k(this._$he);
    var _$gC = _$m8._$2M(this._$he);
    var width, height;
    if (widgetDockController.isHasCanvasContext) {
        width = this._$he.width;
        height = this._$he.height;
    } else {
        width = parseInt(this._$he.style.width);
        height = parseInt(this._$he.style.height);
    }
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
    if (com instanceof widgetDockFloatPanel) {
        com._$6i(this._$jO + 1);
    } else {
        com._$6i(this._$jO + 2);
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
        _$m8._$6i(this._$he, this._$jO);
        if (this._$ha != null) {
            var _$e0 = this._$ha.length;
            var i;
            for (i = 0; i < _$e0; i++) {
                if (this._$ha[i] instanceof widgetDockFloatPanel) {
                    this._$ha[i]._$6i(this._$jO + 1);
                } else {
                    this._$ha[i]._$6i(this._$jO + 2);
                }
            }
        }
    }
};
_$J.prototype._$2g = function () {
};
_$J._$0x = function (_$q2) {
    var _$og = new _$J(false);
    _$og._$lq = new Align();
    _$og._$lq.x = _$q2.x;
    _$og._$lq.y = _$q2.y;
    _$og._$ln = new Size();
    _$og._$ln.width = _$q2.width;
    _$og._$ln.height = _$q2.height;
    return _$og;
};
_$J.prototype._$0v = function (_$mL) {
    var sp = new _$6A(_$mL);
    sp._$kQ = this;
    this._$he = sp._$h8;
    this.setVisible(false);
    this._$hh = sp._$h8;
    this._$is = true;
    this._$jF[1] = 6;
    this._$jF[3] = 6;
    this._$jF[0] = 6;
    this._$jF[2] = 6;
    this._$lz.bottom = this._$lz.top;
    return true;
};
_$J.prototype._$fT = function () {
    if (this._$he != null && this._$he.style.visibility == "visible") return true;
    return false;
};
_$J.prototype.setVisible = function (_$8e) {
    _$m8._$39(this._$he, _$8e);
};
_$J.prototype._$n = function (_$b9) {
    this._$it = true;
    this._$is = true;
    this._$kS = _$b9._$l0._$kS;
    this._$kF = _$b9._$l0;
    this._$kF._$ml(this);
    var _$8q = false;
    if (this._$he != null) {
        var _$8Z = false;
    }
    if (this._$he == null || (this._$he != null && !this._$fT())) {
        if (this._$kV == null) this._$kV = _$b9._$kH;
        this._$0v(widgetDockController.rootDivId);
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
        if (this._$ln == null) {
            this._$ln = new Size();
            this._$ln.width = _$b9._$lK.cx;
            this._$ln.height = _$b9._$lK.cy;
            this._$lq = new Align();
            this._$lq.x = _$b9._$lt.x;
            this._$lq.y = _$b9._$lt.y;
        } else {
            _$b9._$lt.x = this._$lq.x;
            _$b9._$lt.y = this._$lq.y;
            _$b9._$lK.cx = this._$ln.width;
            _$b9._$lK.cy = this._$ln.height;
        }
        var pt = new Align();
        pt.x = _$b9._$lt.x;
        pt.y = _$b9._$lt.y;
        if (pt.y < 0) pt.y = 0;
        this.setVisible(true);
        this._$6p(pt.x, pt.y, _$b9._$lK.cx, _$b9._$lK.cy);
    }
    if (_$b9._$kA != null && _$b9._$kA._$o5 != null) _$b9._$kA._$o5._$5z();
    if (!_$8q) {
        if (this._$4s(null, true)) this._$7p();
    }
};
_$J.prototype._$6p = function (_$cS, _$do, _$dq, _$cM) {
    _$m8._$6j(this._$he, _$cS, _$do);
    if (widgetDockController.isHasCanvasContext) {
        this._$he.width = _$dq;
        this._$he.height = _$cM;
    } else {
        this._$he.style.width = _$dq + "px";
        this._$he.style.height = _$cM + "px";
    }
    this._$mC(_$cS + this._$jF[0], _$do, _$dq - this._$jF[0] - this._$jF[2], _$cM);
};
_$J.prototype._$10 = function () {
    _$m8._$5I(widgetDockController.rootDivId, this._$he);
    this._$he = null;
    this._$kF._$mm(this);
    var cnt = this._$ha.length;
    var i;
    for (i = 0; i < cnt; i++) {
        if ((this._$ha[i] instanceof _$N) || (this._$ha[i] instanceof _$1l)) {
            _$m8._$5I(widgetDockController.rootDivId, this._$ha[i]._$h8);
        }
    }
    this._$hC[1] = null;
};
_$J.prototype._$01 = function () {
    if (this._$it) {
        var _$ps = this.subPatternList[0].subPattern.panelList[0];
        if (!_$ps._$iX) {
            this._$lq.x = _$m8._$2k(this._$he);
            this._$lq.y = _$m8._$2M(this._$he);
            if (widgetDockController.isHasCanvasContext) {
                this._$ln.width = this._$he.width;
                this._$ln.height = this._$he.height;
            } else {
                this._$ln.width = parseInt(this._$he.style.width);
                this._$ln.height = parseInt(this._$he.style.height);
            }
            this._$10();
        }
    } else this._$10();
};
_$J.prototype._$53 = function (_$n5) {
    _$K.prototype._$53.call(this, _$n5);
};
