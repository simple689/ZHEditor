
function _$6R() {
    _$6R.baseConstructor.call(this);
    this._$k9 = 1;
    this._$km = 0;
    this._$h8 = null;
    this._$iy = false;
    this._$js = 1;
    this._$ke = null;
    this._$hi = null;
    if (widgetDockController.isHasCanvasContext) {
        this._$h8 = _$m8._$0z("canvas", widgetDockController.rootDivId);
        this._$hj = this._$h8.getContext("2d");
    } else {
        this._$h8 = _$m8._$0z("div", widgetDockController.rootDivId);
    }
    this._$3I();
    this._$h8.style.backgroundColor = 'ButtonFace';
};_$b1._$b0(_$6R, widgetDockPanel);
_$6R.prototype._$nJ = function (g) {
    widgetDockPanel.prototype._$nJ.call(this, g);
    var rc = _$bC();
    _$nK(g, rc);
    _$4S(g);
};
_$6R.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = _$m8._$2k(this._$h8);
        rc.top = _$m8._$2M(this._$h8);
        rc.right = rc.left + _$m8._$2O(this._$h8);
        rc.bottom = rc.top + _$m8._$2h(this._$h8);
    }
};
_$6R.prototype._$qJ = function () {
    this._$4S();
};
_$6R.prototype._$nK = function (g, rc) {
};
_$6R.prototype._$3I = function () {
    this._$h8._$4A = this;
    this._$h8.onmousedown = _$6R._$4h;
    this._$h8.onmousemove = _$6R._$4g;
    this._$h8._$mF = _$6R._$mh;
};
_$6R._$4h = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4A._$mw(e); else e.srcElement._$4A._$mw(e);
    return false;
};
_$6R._$4g = function (e) {
    if (e == null || e == undefined) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4A.mouseMove(e);
    else e.srcElement._$4A.mouseMove(e);
};
_$6R._$mh = function (e) {
    return false;
};
_$6R._$14 = function (e) {
    return false;
};
_$6R._$13 = function (e) {
    return false;
};
_$6R.prototype._$5K = function (_$mO) {
    return false;
};
_$6R.prototype._$5q = function () {
    this._$25(this.rect);
};
_$6R.prototype._$5T = function () {
};
_$6R.prototype._$29 = function () {
    return null;
};
_$6R.prototype._$w = function (_$mO, _$pC) {
    var rc = new Rect();
    var _$8m = false;
    _$mO._$25(rc);
    if (this._$le._$j1 == widgetDockPattern._$3k || this._$le._$j1 == widgetDockPattern._$3l) {
        {
            if (_$pC.y < rc.top) _$8m = true; else _$8m = false;
        }
    } else {
        {
            if (_$pC.x < rc.left) _$8m = true; else _$8m = false;
        }
    }
    return _$8m;
};
_$6R.prototype._$2b = function (_$pC, _$ny) {
    var _$pO = _$kI;
    var _$8x = null;
    var pf;
    while (true) {
        if (_$pO._$od == null && _$pO._$pr == null) {
            if (_$pO._$of != null && !_$pO._$8y) {
                _$ny[0] = _$pO._$of._$jr;
                if (_$w(_$pO._$of, _$pC)) {
                    _$8x = _$pO;
                }
            }
            break;
        } else {
            if (_$pO._$od != null) {
                pf = _$pO._$od;
                if (pf._$of != null && !pf._$8y) {
                    _$ny[0] = pf._$of._$jr;
                    if (_$w(pf._$of, _$pC)) {
                        _$8x = pf;
                        break;
                    }
                }
            }
            if (_$pO._$pr != null) {
                _$pO = _$pO._$pr;
            } else {
                break;
            }
        }
    }
    return _$8x;
};
_$6R.prototype._$1I = function (_$mO) {
    if (_$mO._$ir) return false;
    return false;
};
_$6R.prototype._$35 = function () {
    if (this._$kI._$od != null) return false;
    return true;
};
_$6R.prototype._$03 = function (mainPattern, _$mX, _$pC, _$nz, _$dk, _$oQ, _$de) {
    var _$n6 = _$mX._$kx;
    var _$8G = _$1I(_$n6);
    _$de[0] = 0;
    _$oQ[0] = null;
    var _$qu = new Rect();
    widgetDockPattern._$2P(_$je, _$qu);
    if (!_$n6._$S()) {
        var _$8N = false;
        var ih = _$qu.bottom - _$qu.top;
        var iw = _$qu.right - _$qu.left;
        if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) {
            if ((_$pC.y > (_$qu.top + ih / 4)) && (_$pC.y < (_$qu.top + 3 * ih / 4)) && (_$pC.x > _$qu.left) && (_$pC.x < _$qu.right)) _$8N = true;
        } else {
            if ((_$pC.x > (_$qu.left + iw / 4)) && (_$pC.x < (_$qu.left + 3 * iw / 4)) && (_$pC.y > _$qu.top) && (_$pC.y < _$qu.bottom)) _$8N = true;
        }
        if (_$8N) {
            _$oQ[0] = null;
            var sz = new _$5Y();
            var rc = new Rect();
            _$n6._$lf._$j1 = _$le._$j1;
            _$n6._$2w(sz, _$dk, rc, false);
            return (byte)(2 * _$le._$j1 + 1);
        }
        var _$9z = _$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (_$8G && _$35()) {
                _$de[0] = 0;
                return 0xff;
            }
        }
        return _$9z;
    } else {
        var _$9z = _$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == widgetDockPattern._$3k || this._$le._$j1 == widgetDockPattern._$3l) _$nz.cy = rect.bottom - rect.top; else _$nz.cx = rect.right - rect.left;
        }
        return _$9z;
    }
};
_$6R.prototype._$6v = function (_$ax, _$9c, _$cA) {
    this._$6q(this.rect);
    this._$qJ();
    var _$8j = new _$D();
    this._$2l(_$8j, null);
    var _$e1 = _$8j.getPanelNum();
    var _$q7 = new Rect();
    var _$eq = new Array(1);
    _$eq[0] = -1;
    var _$eR = new Array(1);
    var _$ol;
    var _$9t;
    if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) _$9t = true; else _$9t = false;
    var _$8D = new Array(1);
    var _$gE = new Array(1);
    var i;
    this._$04(_$9t, _$8j, _$8D, _$gE, _$eq, _$eR);
    var _$rK;
    if (_$9t) {
        _$rK = ((this.rect.right - this.rect.left) - _$gE[0]);
    } else {
        _$rK = ((this.rect.bottom - this.rect.top) - _$gE[0]);
    }
    if (_$8D[0] || this._$js > 1) {
        this._$6w(_$8j, _$rK, _$cA);
        return;
    }
    if ((_$9t && (_$gE[0] > (this.rect.right - this.rect.left))) || ((!_$9t) && (_$gE[0] > (this.rect.bottom - this.rect.top)))) {
        this._$6w(_$8j, _$rK, _$cA);
        return;
    }
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j.panelList[i];
        _$ol._$nQ._$25(_$q7);
        if (_$9t && (_$q7.right > (this.rect.right - this.rect.left))) {
            _$eq[0] = i;
            _$eR[0] = _$q7.left;
            break;
        } else if (!_$9t && (_$q7.bottom > (this.rect.bottom - this.rect.top))) {
            _$eq[0] = i;
            _$eR[0] = _$q7.top;
            break;
        }
    }
    var rc = new Rect();
    if (_$eq[0] >= 0) {
        var _$fx = _$eR[0] - _$2H(_$8j, 0, _$eq[0], false);
        var _$fn;
        if (_$9t) {
            rc.top = 0;
            rc.bottom = _$8j.panelList[_$eq[0]].size.cy;
            _$fn = _$eR[0] + _$2H(_$8j, _$eq[0], _$e1, false) - (this.rect.right - this.rect.left);
        } else {
            rc.left = 0;
            rc.right = _$8j.panelList[_$eq[0]].size.cx;
            _$fn = _$eR[0] + _$2H(_$8j, _$eq[0], _$e1, false) - (this.rect.bottom - this.rect.top);
        }
        if (_$fn > _$fx) _$eR[0] -= _$fx; else _$eR[0] -= _$fn;
        if (_$9t) rc.right = _$eR[0]; else rc.bottom = _$eR[0];
        for (i = 0; i < _$eq[0]; i++) {
            _$ol = _$8j.panelList[_$eq[0] - 1 - i];
            _$ol._$nQ._$25(_$q7);
            if (_$9t) {
                if (_$q7.right < rc.right) break;
                rc.left = rc.right - _$ol.size.cx;
                _$ol._$nQ._$6o(rc);
                rc.right = rc.left;
            } else {
                if (_$q7.bottom < rc.bottom) break;
                rc.top = rc.bottom - _$ol.size.cy;
                _$ol._$nQ._$6o(rc);
                rc.bottom = rc.top;
            }
        }
        if (_$9t) rc.left = _$eR[0]; else rc.top = _$eR[0];
        for (i = _$eq[0]; i < _$e1; i++) {
            _$ol = _$8j.panelList[i];
            if (_$9t) {
                rc.right = rc.left + _$ol.size.cx;
                _$ol._$nQ._$6o(rc);
                rc.left = rc.right;
            } else {
                rc.bottom = rc.top + _$ol.size.cy;
                _$ol._$nQ._$6o(rc);
                rc.top = rc.bottom;
            }
        }
    }
};
_$6R.prototype._$4j = function (mainPattern, _$cY, _$99) {
    if (this._$iX) {
        var plt = new Align();
        var _$qu = new Rect();
        this._$25(_$qu);
        plt.x = _$qu.left;
        plt.y = _$qu.top;
        if (_$99 == widgetDockPattern._$3k || _$99 == widgetDockPattern._$3l) {
            if (_$99 == widgetDockPattern._$3k) plt.x = _$qu.left + _$cY; else plt.x = _$qu.left - _$cY;
        } else {
            plt.x = _$qu.left;
            if (_$99 == widgetDockPattern._$3m) plt.y = _$qu.top + _$cY; else plt.y = _$qu.top - _$cY;
        }
        var _$ql = new Rect();
        _$ql.left = plt.x;
        _$ql.top = plt.y;
        _$ql.right = plt.x + widgetDockPattern._$2A(_$qu);
        _$ql.bottom = plt.y + widgetDockPattern._$2z(_$qu);
        this._$6q(_$ql);
    }
};
_$6R.prototype._$2B = function (_$mO, pRC) {
    if (this._$h8 == null) {
        pRC.left = pRC.right = 0;
        pRC.top = pRC.bottom = 0;
        return;
    }
    this._$25(pRC);
};
_$6R.prototype._$11 = function (_$mZ) {
    if (_$mZ._$oV == null) {
        _$mZ._$of = null;
    } else {
        var _$pb;
        if (_$mZ == _$mZ._$oV._$od) {
            _$pb = _$mZ._$oV._$pr;
            _$mZ._$oV._$od = _$pb._$od;
            _$mZ._$oV._$pr = _$pb._$pr;
            if (_$pb._$od != null) _$pb._$od._$oV = _$mZ._$oV;
            if (_$pb._$pr != null) _$pb._$pr._$oV = _$mZ._$oV;
            _$mZ._$oV._$of = _$pb._$of;
            _$mZ._$oV._$8y = _$pb._$8y;
            if (_$pb._$of != null) {
                if (_$pb._$of._$kA == _$pb) _$pb._$of._$kA = _$mZ._$oV;
                if (_$pb._$of._$l6 == _$pb) _$pb._$of._$l6 = _$mZ._$oV;
            }
        } else {
            if (_$mZ._$oV._$oV == null) {
                _$pb = _$mZ._$oV._$od;
                _$mZ._$oV._$od = _$mZ._$oV._$pr = null;
                _$mZ._$oV._$of = _$pb._$of;
                _$mZ._$oV._$8y = _$pb._$8y;
                if (_$pb._$of != null) {
                    if (_$pb._$of._$kA == _$pb) _$pb._$of._$kA = _$mZ._$oV;
                    if (_$pb._$of._$l6 == _$pb) _$pb._$of._$l6 = _$mZ._$oV;
                }
            } else {
                _$pb = _$mZ._$oV;
                _$pb._$oV._$pr = _$pb._$od;
                _$pb._$od._$oV = _$pb._$oV;
            }
        }
        _$pb._$of = null;
        _$pb._$od = _$pb._$pr = null;
    }
};
_$6R.prototype._$qI = function () {
    if (this._$je != null) {
        widgetDockPanel.prototype._$qI.call(this);
        this._$je = null;
        this._$iy = false;
    }
};
_$6R.prototype._$53 = function (_$mS) {
    _$11(_$mS);
    if (_$mS != _$kI) {
        return false;
    } else if (this._$kI._$pr == null && this._$kI._$pr == null && this._$kI._$of == null) return true;
    return false;
};
_$6R.prototype._$f = function (mainPattern, _$mS, pRC) {
    if (this._$kI == _$mS) return true;
    var _$pN = _$kI;
    var _$8g = true;
    while (_$pN != null) {
        if (_$pN._$od == null && _$pN._$pr == null && !_$pN._$8y) {
            _$8g = false;
            break;
        }
        if (_$pN._$od != null && _$pN._$od._$of != null && !_$pN._$od._$8y) {
            _$8g = false;
            break;
        }
        _$pN = _$pN._$pr;
    }
    if (!_$8g) {
        _$mS._$8y = false;
        var _$e1, _$er;
        var _$8j = new _$D();
        _$er = _$2l(_$8j, _$mS._$of);
        _$e1 = _$8j.getPanelNum();
        _$mS._$8y = true;
        var _$9y;
        if (this._$le != null) _$9y = this._$le._$j1; else _$9y = _$mS._$of._$lf._$j1;
        var _$9t = true;
        if (_$9y == widgetDockPattern._$3l || _$9y == widgetDockPattern._$3k) _$9t = false;
        var _$8D = new Array(1);
        var _$gE = new Array(1);
        var iid = new Array(1);
        var imo = new Array(1);
        this._$04(_$9t, _$8j, _$8D, _$gE, iid, imo);
        var _$ow = _$8j.panelList[_$er];
        _$8j._$5G(_$er);
        var _$g2 = _$2m(_$8j, 0, _$8j.getPanelNum(), _$9t);
        var _$fW = new Array(1);
        if ((_$9t && (_$ow.size.cy >= (rect.bottom - rect.top))) || (!_$9t && (_$ow.size.cx >= (rect.right - rect.left)))) {
            if (_$9t && (_$g2 < _$ow.size.cy)) {
                _$fW[0] = _$g2 - _$ow.size.cy;
            } else if (!_$9t && (_$g2 < _$ow.size.cx)) {
                _$fW[0] = _$g2 - _$ow.size.cx;
            }
        }
        var _$eL = _$2H(_$8j, 0, _$8j.getPanelNum(), false);
        if ((_$9t && (_$eL <= (this.rect.right - this.rect.left))) || (!_$9t && (_$eL <= (this.rect.bottom - this.rect.top)))) {
            var j;
            for (j = 0; j < _$8j.getPanelNum(); j++) {
                var _$ol = _$8j.panelList[j];
                var _$ov = _$ol._$nQ;
                _$ov._$5S();
            }
            _$5C(null, 0, _$8j, _$9t);
            this._$je._$qJ();
            return _$8g;
        }
        if (_$8D[0]) {
            var _$eP = this._$2s(_$8j, 0, _$8j.getPanelNum());
            if ((_$9t && (_$eP <= (this.rect.right - this.rect.left))) || (!_$9t && (_$eP <= (this.rect.bottom - this.rect.top)))) {
                var _$mI = new _$D();
                this._$2t(_$8j, 0, _$mI);
                _$e1 = _$mI.getPanelNum();
                var _$gu = 0;
                _$sM;
                var k;
                for (k = 0; k < _$e1; k++) {
                    _$ol = _$8j.panelList[k];
                    if (_$9t) {
                        _$gu += _$ol._$nQ._$cg();
                    } else _$gu += _$ol._$nQ._$bU();
                }
                var _$rK;
                if (_$9t) _$rK = ((this.rect.right - this.rect.left) - _$gu); else _$rK = ((this.rect.bottom - this.rect.top) - _$gu);
                _$6w(_$8j, _$rK, _$fW);
                if (_$fW[0] != 0) {
                    var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
                    this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$fW[0]);
                }
            } else {
                _$6w(_$8j, 0, _$fW);
                if (_$fW[0] != 0) {
                    var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
                    this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$fW[0]);
                }
            }
            return _$8g;
        } else {
            _$5C(null, 0, _$8j, _$9t);
            this._$je._$qJ();
            return _$8g;
        }
    }
    return _$8g;
};
_$6R.prototype._$2H = function (d) {
    var _$8j = new _$D();
    _$2l(_$8j, null);
    d.width = _$2H(_$8j, 0, _$8j.getPanelNum(), false);
    d.height = 0;
    var _$e1 = _$8j.getPanelNum();
    if (_$e1 > 0) {
        var _$ol = _$8j.panelList[_$e1 - 1];
        var rc = _$ol._$nQ._$bC();
        if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) {
            d.height = rc.x + rc.width;
        } else {
            d.height = rc.y + rc.height;
        }
    }
};
_$6R.prototype._$2H = function (_$nR, _$cv, _$cE, _$7N) {
    var _$fe = 0;
    var _$os;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        _$os = _$nR.panelList[i];
        var _$9y;
        if (this._$le != null) _$9y = this._$le._$j1; else _$9y = _$os._$nQ._$lf._$j1;
        if (_$9y == widgetDockPattern._$3m || _$9y == widgetDockPattern._$3j) {
            if (!_$7N) _$fe += _$os.size.cx; else _$fe += _$os._$nQ._$cg();
        } else {
            if (!_$7N) _$fe += _$os.size.cy; else _$fe += _$os._$nQ._$bU();
        }
    }
    return _$fe;
};
_$6R.prototype._$2l = function (_$nR, _$mO) {
    var _$eq = 0;
    var _$er = -1;
    var _$pO = this._$kI;
    while (_$pO != null) {
        if (_$pO._$od == null && _$pO._$pr == null) {
            if (!_$pO._$8y && _$pO._$of != null) {
                var _$ol = new _$44();
                var bts = _$pO._$of._$lf._$j1;
                if (this._$le != null) _$pO._$of._$lf._$j1 = this._$le._$j1;
                _$pO._$of._$2w(_$ol.size, 0, null, false);
                _$pO._$of._$lf._$j1 = bts;
                _$ol._$nQ = _$pO._$of;
                _$nR._$b(_$ol);
                if (_$mO == _$pO._$of) _$er = _$eq;
            }
            break;
        } else {
            if (_$pO._$od != null) {
                var pf = _$pO._$od;
                if (pf._$of != null && !pf._$8y) {
                    if (pf._$of == _$mO) _$er = _$eq;
                    var _$ol = new _$44();
                    var bts = pf._$of._$lf._$j1;
                    if (this._$le != null) {
                        pf._$of._$lf._$j1 = this._$le._$j1;
                    }
                    pf._$of._$2w(_$ol.size, 0, null, false);
                    pf._$of._$lf._$j1 = bts;
                    _$ol._$nQ = pf._$of;
                    _$nR._$b(_$ol);
                    _$eq++;
                }
            }
            if (_$pO._$pr != null) {
                _$pO = _$pO._$pr;
            } else {
                break;
            }
        }
    }
    return _$er;
};
_$6R.prototype._$7 = function (mainPattern, _$mO) {
    if (_$mO._$c2() != this._$je) {
        this._$je.add(_$mO);
    }
    var _$qu = new Rect();
    var size = new _$5Y();
    _$mO._$2w(size, 0, null, false);
    var _$nR = new _$D();
    var _$er = _$2l(_$nR, _$mO);
    var _$ol = null;
    _$mO._$jW = _$1d._$jX;
    _$1d._$jX += 1;
    var _$e1 = _$nR.getPanelNum();
    var _$8D = new Array(1);
    _$8D[0] = false;
    var _$gE = new Array(1);
    var i = 0;
    var _$eq = new Array(1);
    var _$eR = new Array(1);
    var _$9t;
    if (this._$le._$j1 == widgetDockPattern._$3k || this._$le._$j1 == widgetDockPattern._$3l) _$9t = false; else _$9t = true;
    if (_$er < 0) return;
    _$ol = _$nR.panelList[_$er];
    _$nR._$5G(_$er);
    this._$04(_$9t, _$nR, _$8D, _$gE, _$eq, _$eR);
    _$nR._$4(_$ol, _$er);
    var _$eI = 0;
    _$eI = _$mO._$2o(_$9t);
    if (_$8D[0] || (_$9t && ((this.rect.right - this.rect.left) < (_$gE[0] + _$eI))) || (!_$9t && ((this.rect.bottom - this.rect.top) < (_$gE[0] + _$eI)))) {
        var _$eP = this._$2s(_$nR, 0, _$nR.getPanelNum());
        if ((_$9t && ((this.rect.right - this.rect.left) >= _$eP)) || (!_$9t && ((this.rect.bottom - this.rect.top) >= _$eP))) {
            var _$mI = new _$D();
            this._$2t(_$nR, 0, _$mI);
            for (i = 0; i < _$e1; i++) {
                _$ol = _$nR.panelList[i];
                if (_$ol._$nQ != _$mO) {
                    _$ol.size.cx = _$ol._$nQ._$cg();
                    _$ol.size.cy = _$ol._$nQ._$bU();
                    if (_$9t) {
                        _$ol._$du = _$ol._$nQ._$cg();
                    } else _$ol._$du = _$ol._$nQ._$bU();
                } else {
                    var it = _$mO._$2o(_$9t);
                    if (_$mO._$k6 > it) _$mO._$k6 = it;
                    _$ol._$du = _$mO._$k6;
                }
            }
            var pt = _$mO._$ls;
            if (_$mO._$iQ) {
                if (pt.x < 0) {
                    pt.x = 0;
                    pt.y = 0;
                } else {
                    widgetDockPattern._$6a(_$je, pt);
                }
            }
            if (_$er > 0) {
                _$ol = _$nR.panelList[_$er - 1];
                var _$qo = new Rect();
                _$ol._$nQ._$25(_$qo);
                var _$eO = 0;
                _$eO = _$ol._$nQ._$2r();
                if (_$9t && (_$qo.right >= pt.x)) {
                    if ((pt.x - _$qo.left) > _$eO) {
                        _$ol._$nQ._$k6 = pt.x - _$qo.left;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                } else if (!_$9t && (_$qo.bottom >= pt.y)) {
                    if ((pt.y - _$qo.top) > _$eO) {
                        _$ol._$nQ._$k6 = pt.y - _$qo.top;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                }
            }
            if (_$er < (_$e1 - 1)) {
                _$ol = _$nR.panelList[_$er + 1];
                var _$qo = new Rect();
                _$ol.bar._$25(_$qo);
                var _$eO = 0;
                _$eO = _$ol._$nQ._$2r();
                if (_$9t && (_$qo.left <= pt.x)) {
                    if ((_$qo.right - pt.x) > _$eO) {
                        _$ol._$nQ._$k6 = _$qo.right - pt.x;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                } else if (!_$9t && (_$qo.top <= pt.y)) {
                    if ((_$qo.bottom - pt.y) > _$eO) {
                        _$ol._$nQ._$k6 = _$qo.bottom - pt.y;
                    } else _$ol._$nQ._$k6 = _$eO;
                    _$ol._$du = _$ol._$nQ._$k6;
                }
            }
            var _$dN = 0;
            for (i = 0; i < _$e1; i++) {
                _$ol = _$nR.panelList[i];
                if (_$ol._$nQ != _$mO) _$dN += _$ol._$du; else _$dN += _$ol._$nQ._$k6;
            }
            var _$gD = this.rect.right - this.rect.left;
            if (!_$9t) _$gD = this.rect.bottom - this.rect.top;
            var _$rK = (_$gD - _$dN);
            var _$dZ = new Array(1);
            this._$5c(_$nR, 0, 0, _$nR.getPanelNum(), _$mI, _$rK, _$9t, _$gD, 0, _$dZ);
            _$dZ[0] = this._$0m(_$9t, _$dZ[0]);
            if (_$dZ[0] != 0) {
                var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
                this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$dZ[0]);
            }
        } else {
            var _$fX = new Array(1);
            this._$6w(_$nR, 0, _$fX);
        }
        return;
    }
    this._$5C(_$mO, _$er, _$nR, _$9t);
    return;
};
_$6R.prototype._$5C = function (_$mO, _$cP, _$8j, _$9t) {
};
_$6R.prototype._$2m = function (_$u, _$cv, _$cE, _$8c) {
    var _$ol = null;
    var _$eI = 0;
    var i;
    for (i = _$cv; i < _$cE; i++) {
        _$ol = _$u.panelList[i];
        if (_$8c) {
            if (_$ol.size.cy > _$eI) _$eI = _$ol.size.cy;
        } else {
            if (_$ol.size.cx > _$eI) _$eI = _$ol.size.cx;
        }
    }
    return _$eI;
};
_$6R.prototype._$38 = function (_$cH, _$mO, _$8j, _$cv, _$cE, _$9t, _$d9) {
};
_$6R.prototype._$71 = function (_$nQ, pRC) {
};
_$6R.prototype.setVisible = function (_$8e) {
    if (this._$h8 != null) {
        _$m8._$39(this._$h8);
    }
    this._$iX = _$8e;
};
_$6R.prototype._$4S = function (g) {
};
_$6R.prototype._$qy = function (wnd, rc) {
    if (this._$h8 == null) {
    }
    if (wnd == null) {
        this._$6q(rc);
        return;
    }
    if (!this._$iy) {
        this.rect.setRect(rc);
        _$iy = true;
    }
    this._$6q(rc);
    this._$7(null, wnd);
};
_$6R.prototype._$6q = function (rc) {
    if (this._$h8 != null) {
        _$m8._$6j(this._$h8, rc.left, rc.top);
        _$m8._$6n(this._$h8, rc.right - rc.left, rc.bottom - rc.top);
        this._$qJ();
    }
};
_$6R.prototype._$0m = function (_$9t, iwh) {
    var _$e7 = 0;
    if (!_$9t && iwh != (this.rect.right - this.rect.left)) {
        _$e7 = iwh - (this.rect.right - this.rect.left);
        if (this._$le._$j1 == widgetDockPattern._$3l) this.rect.left -= _$e7;
        this.rect.right = this.rect.left + iwh;
    } else if (_$9t && iwh != (this.rect.bottom - this.rect.top)) {
        _$e7 = iwh - (this.rect.bottom - this.rect.top);
        if (this._$le._$j1 == widgetDockPattern._$3j) this.rect.top -= _$e7;
        this.rect.bottom = this.rect.top + iwh;
    }
    return _$e7;
};
_$6R.prototype._$2s = function (_$8j, _$cv, _$cE) {
    var i;
    var _$ol;
    var _$gD = 0;
    var _$eM = 0;
    for (i = _$cv; i < _$cE; i++) {
        _$ol = _$8j.panelList[i];
        _$eM = _$ol._$nQ._$2r();
        _$gD += _$eM;
    }
    return _$gD;
};
_$6R.prototype._$2t = function (_$8j, _$dS, _$mI) {
    var _$e1 = _$8j.getPanelNum();
    var _$fi;
    var bin;
    var i;
    var j;
    var _$ol, _$oJ;
    for (i = _$dS; i < _$e1; i++) {
        _$fi = _$mI.getPanelNum();
        bin = false;
        _$ol = _$8j.panelList[i];
        for (j = 0; j < _$fi; j++) {
            _$oJ = _$mI.panelList[j];
            if (_$ol._$nQ._$jW < _$oJ._$nQ._$jW) {
                _$mI._$4(_$ol, j);
                bin = true;
                break;
            }
        }
        if (!bin) {
            _$mI._$b(_$ol);
        }
    }
};
_$6R.prototype._$5c = function (_$8j, _$cx, _$cw, _$cF, _$mI, _$rJ, _$9t, _$gD, _$g4, _$eX) {
    var j;
    var _$oJ;
    var _$ol;
    var szs = new _$5Y();
    var _$e1 = _$mI.getPanelNum();
    var _$ov = null;
    var _$eM = 0;
    var _$dX;
    if (_$rJ < 0) _$dX = -_$rJ; else _$dX = _$rJ;
    var _$eq = 0;
    if (_$rJ >= 0) {
        _$eq = _$e1 - 1;
    }
    if (_$rJ > 0) {
        for (j = _$e1 - 1; j >= 0; j--) {
            _$oJ = _$mI.panelList[j];
            _$ov = _$oJ._$nQ;
            var _$ds = _$ov._$2o(_$9t);
            if (_$ov._$k6 > _$ds) _$ov._$k6 = _$ds;
            if (_$oJ._$du < _$ov._$k6) {
                if ((_$dX + _$oJ._$du) > _$ov._$k6) {
                    _$dX = _$dX + _$oJ._$du - _$ov._$k6;
                    _$oJ._$du = _$ov._$k6;
                } else {
                    _$oJ._$du += _$dX;
                    _$dX = 0;
                    break;
                }
            }
        }
    } else {
        for (j = 0; j < _$e1; j++) {
            _$oJ = _$mI.panelList[j];
            _$ov = _$oJ._$nQ;
            if (_$oJ._$du > _$ov._$k6) {
                if ((_$oJ._$du - _$dX) < _$ov._$k6) {
                    _$dX = _$dX - (_$oJ._$du - _$ov._$k6);
                    _$oJ._$du = _$ov._$k6;
                } else {
                    _$oJ._$du -= _$dX;
                    _$dX = 0;
                    break;
                }
            }
        }
    }
    j = 0;
    while (j < _$e1 && _$dX > 0) {
        _$oJ = _$mI.panelList[_$eq];
        _$ov = _$oJ._$nQ;
        if (_$rJ >= 0) {
            _$eM = _$ov._$2o(_$9t);
            if (_$9t && (_$oJ._$du < _$eM)) {
                if ((_$eM - _$oJ._$du) >= _$dX) {
                    _$oJ._$du += _$dX;
                    break;
                } else {
                    _$dX -= (_$eM - _$oJ._$du);
                    _$oJ._$du = _$eM;
                }
            } else if (!_$9t && (_$oJ._$du < _$eM)) {
                if ((_$eM - _$oJ._$du) >= _$dX) {
                    _$oJ._$du += _$dX;
                    break;
                } else {
                    _$dX -= (_$eM - _$oJ._$du);
                    _$oJ._$du = _$eM;
                }
            }
        } else {
            _$eM = _$ov._$2r();
            if (_$9t && (_$oJ._$du > _$eM)) {
                if ((_$oJ._$du - _$eM) >= _$dX) {
                    _$oJ._$du = _$oJ._$du - _$dX;
                    break;
                } else {
                    _$dX -= (_$oJ._$du) - _$eM;
                    _$oJ._$du = _$eM;
                }
            } else if (!_$9t && (_$oJ._$du > _$eM)) {
                if ((_$oJ._$du - _$eM) >= _$dX) {
                    _$oJ._$du = _$oJ._$du - _$dX;
                    break;
                } else {
                    _$dX -= (_$oJ._$du - _$eM);
                    _$oJ._$du = _$eM;
                }
            }
        }
        if (_$rJ >= 0) {
            _$eq--;
        } else {
            _$eq++;
        }
        j++;
    }
    var _$fJ;
    var i;
    var _$dS = _$cx;
    _$eX[0] = 0;
    for (i = _$cw; i < _$cF; i++) {
        _$ol = _$8j.panelList[i];
        _$fJ = _$ol._$du;
        _$ov = _$ol._$nQ;
        if (_$9t) {
            szs.cy = _$ol.size.cy;
            if (szs.cy < _$eX[0]) szs.cy = _$eX[0];
            szs.cx = _$fJ;
        } else {
            szs.cy = _$fJ;
            szs.cx = _$ol.size.cx;
            if (szs.cx < _$eX[0]) szs.cx = _$eX[0];
        }
        _$ov._$5x(_$g4, _$dS, szs, _$gD, _$gD - _$dS - _$fJ);
        if (_$9t) {
            if (szs.cy > _$eX[0]) _$eX[0] = szs.cy;
            _$dS += szs.cx;
        } else {
            _$dS += szs.cy;
            if (szs.cx > _$eX[0]) _$eX[0] = szs.cx;
        }
    }
    for (i = _$cw; i < _$cF; i++) {
        _$ol = _$8j.panelList[i];
        _$ov = _$ol._$nQ;
        _$ov._$5n(_$9t, _$g4, _$eX[0]);
    }
};
_$6R.prototype._$6w = function (_$8j, _$rJ, _$dB) {
    var i;
    var j;
    var _$ol;
    _$dB[0] = 0;
    var _$ov;
    var _$e1 = _$8j.getPanelNum();
    var _$mI = new _$D();
    this._$2t(_$8j, 0, _$mI);
    var _$q7 = new Rect();
    var _$9t;
    if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) _$9t = true; else _$9t = false;
    var _$dS = 0;
    var szs = new _$5Y();
    var _$gD;
    if (_$9t) {
        szs.cy = this.rect.bottom - this.rect.top;
        _$gD = this.rect.right - this.rect.left;
    } else {
        _$gD = this.rect.bottom - this.rect.top;
        szs.cx = this.rect.right - this.rect.left;
    }
    var _$eM = 0;
    var _$eP = 0;
    var _$go = 0;
    var _$gp = 0;
    var _$dJ = new Array(_$e1);
    var ihw = 0;
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j.panelList[i];
        _$eM = _$ol._$nQ._$2r();
        if ((_$eP + _$eM) > _$gD) {
            if (i >= 1) {
                var _$pS = _$8j.panelList[i - 1];
                if (_$gD >= _$eP) _$pS._$du = (_$gD - _$eP) + _$pS._$du;
            }
            _$eP = 0;
            if (_$gp > 0) {
                _$go++;
            }
            _$gp = 0;
        }
        _$gp++;
        _$ol._$du = _$eM;
        _$ol._$go = _$go;
        ihw = _$ol._$nQ._$2q(_$9t);
        if (ihw > _$dJ[_$go]) _$dJ[_$go] = ihw;
        _$eP += _$eM;
    }
    _$go++;
    this._$ke = new Array(_$go);
    _$gp = 0;
    var _$g4 = 0;
    var _$gw = 0;
    if (_$go > 1) {
        if (_$rJ < 0) {
            for (j = 0; j < _$go - 1; j++) {
                _$dS = 0;
                var _$eJ = 0;
                for (i = _$gw; i < _$e1; i++) {
                    if (_$9t) {
                        szs.cy = this._$ke[j];
                    } else szs.cx = this._$ke[j];
                    _$ol = _$8j.panelList[i];
                    if (_$ol._$go == j) {
                        _$ov = _$ol._$nQ;
                        if (_$9t) szs.cx = _$ol._$du; else szs.cy = _$ol._$du;
                        _$ov._$5x(_$g4, _$dS, szs, _$gD, _$gD - _$dS - _$ol._$du);
                        if (_$9t) {
                            if (_$eJ < szs.cy) _$eJ = szs.cy;
                            _$dS += szs.cx;
                        } else {
                            if (_$eJ < szs.cx) _$eJ = szs.cx;
                            _$dS += szs.cy;
                        }
                        this._$ke[j] = _$eJ;
                    } else {
                        var k;
                        for (k = _$gw; k < i; k++) {
                            _$ol = _$8j.panelList[k];
                            _$ov = _$ol._$nQ;
                            _$ov._$5n(_$9t, _$g4, _$eJ);
                        }
                        break;
                    }
                }
                _$g4 += this._$ke[j];
                _$gw = i;
            }
        }
        _$eP = 0;
        for (i = _$gw; i < _$e1; i++) {
            _$ol = _$8j.panelList[i];
            if (_$9t) {
                _$ol.size.cx = _$ol._$du;
            } else {
                _$ol.size.cy = _$ol._$du;
            }
            _$eP += _$ol._$du;
        }
        if (_$9t) {
            _$rJ = (rect.right - rect.left - _$eP);
        } else {
            _$rJ = (rect.bottom - rect.top - _$eP);
        }
        _$mI._$5R();
        this._$2t(_$8j, _$gw, _$mI);
        _$e1 = _$mI.getPanelNum();
        this._$js = _$go;
    } else {
        _$g4 = 0;
        _$gw = 0;
        for (j = 0; j < _$e1; j++) {
            _$ol = _$8j.panelList[j];
            _$ov = _$ol._$nQ;
            _$ov._$25(_$q7);
            _$ol.size.cx = _$q7.right - _$q7.left;
            _$ol.size.cy = _$q7.bottom - _$q7.top;
            if (_$9t) {
                _$ol._$du = _$q7.right - _$q7.left;
            } else {
                _$ol._$du = _$q7.bottom - _$q7.top;
            }
        }
    }
    for (i = 0; i < _$go - 1; i++) {
        _$gp += _$ke[i];
    }
    var _$eX = new Array(1);
    this._$5c(_$8j, 0, _$gw, _$8j.getPanelNum(), _$mI, _$rJ, _$9t, _$gD, _$g4, _$eX);
    this._$ke[_$go - 1] = _$eX[0];
    _$gp += _$eX[0];
    if (_$9t) _$dB[0] = _$gp - (this.rect.bottom - this.rect.top); else _$dB[0] = _$gp - (this.rect.right - this.rect.left);
    if (_$dB[0] != 0) {
        if (this._$le._$j1 == widgetDockPattern._$3k) {
            this.rect.right += _$dB[0];
        } else if (this._$le._$j1 == widgetDockPattern._$3l) {
            this.rect.left -= _$dB[0];
        } else if (this._$le._$j1 == widgetDockPattern._$3m) {
            this.rect.bottom += _$dB[0];
        } else if (this._$le._$j1 == widgetDockPattern._$3j) {
            this.rect.top -= _$dB[0];
        }
        this._$js = _$go;
    }
};
_$6R.prototype._$04 = function (_$9t, _$8j, _$8i, _$dL, _$dF, _$dG) {
    _$8i[0] = false;
    _$dL[0] = 0;
    var i;
    var _$e1 = _$8j.getPanelNum();
    var _$ol;
    var _$q7 = new Rect();
    for (i = 0; i < _$e1; i++) {
        _$ol = _$8j.panelList[i];
        _$ol._$nQ._$25(_$q7);
        if (_$9t) _$dL[0] += _$q7.right - _$q7.left; else _$dL[0] += _$q7.bottom - _$q7.top;
        if (_$ol._$nQ._$ix) {
            _$8i[0] = true;
            break;
        }
        if (_$9t && (_$q7.right > (rect.right - rect.left))) {
            _$dF[0] = i;
            _$dG[0] = _$q7.left;
            break;
        } else if (!_$9t && (_$q7.bottom > (rect.bottom - rect.top))) {
            _$dF[0] = i;
            _$dG[0] = _$q7.top;
            break;
        }
    }
    var j;
    for (j = i + 1; j < _$e1; j++) {
        _$ol = _$8j.panelList[j];
        _$ol._$nQ._$25(_$q7);
        if (_$9t) _$dL[0] += _$q7.right - _$q7.left; else _$dL[0] += _$q7.bottom - _$q7.top;
    }
};
_$6R.prototype._$g = function (_$8h, _$cP, _$8c, _$pC) {
    var _$pH = new Align();
    _$pH.x = _$pC.x;
    _$pH.y = _$pC.y;
    widgetDockPattern._$6a(this._$je, _$pH);
    var _$dR = this._$2s(_$8h, 0, _$cP);
    var _$dQ = this._$2H(_$8h, 0, _$cP, false);
    var _$e1 = _$8h.getPanelNum();
    var _$dy = this._$2s(_$8h, _$cP, _$e1);
    var _$dx = this._$2H(_$8h, _$cP, _$e1, false);
    var _$oL = _$dR;
    var _$oM = _$dQ;
    var _$dP = this._$2H(_$8h, 0, _$cP, true);
    var _$dw = this._$2H(_$8h, _$cP, _$8h.getPanelNum(), true);
    var _$dO, _$dv;
    var _$or = _$8h.panelList[_$cP];
    var _$qk = new Rect();
    _$or._$nQ._$25(_$qk);
    var _$8f = true;
    var _$8w = new _$D();
    var _$7x = new _$D();
    var _$8A = new _$D();
    var _$7y = new _$D();
    var i = 0;
    for (i = 0; i < _$cP; i++) {
        _$or = _$8h.panelList[i];
        if (_$8c) _$or._$du = _$or._$nQ._$cg(); else _$or._$du = _$or._$nQ._$bU();
        _$8w._$b(_$8h.panelList[i]);
    }
    for (i = _$cP; i < _$e1; i++) {
        _$or = _$8h.panelList[i];
        if (_$8c) _$or._$du = _$or._$nQ._$cg(); else _$or._$du = _$or._$nQ._$bU();
        _$7x._$b(_$8h.panelList[i]);
    }
    this._$2t(_$8w, 0, _$8A);
    this._$2t(_$7x, 0, _$7y);
    var _$dT, _$dz;
    if (_$8c) {
        if ((_$oL + _$dx) < (this.rect.right - this.rect.left)) {
            _$oL = this.rect.right - this.rect.left - _$dx;
        }
        if ((_$oM + _$dy) > (this.rect.right - this.rect.left)) _$oM = this.rect.right - this.rect.left - _$dy;
        if (_$pH.x < _$oL) _$pH.x = _$oL;
        if (_$pH.x > _$oM) _$pH.x = _$oM;
        _$dO = _$pH.x - _$dP;
        _$dv = this.rect.right - this.rect.left - _$pH.x - _$dw;
        if (_$pH.x == _$qk.left) _$8f = false;
        _$dT = _$pH.x;
        _$dz = this.rect.right - this.rect.left;
    } else {
        if ((_$oL + _$dx) < (this.rect.bottom - this.rect.top)) {
            _$oL = this.rect.bottom - this.rect.top - _$dx;
        }
        if ((_$oM + _$dy) > (this.rect.bottom - this.rect.top)) _$oM = rect.bottom - rect.top - _$dy;
        if (_$pH.y < _$oL) _$pH.y = _$oL;
        if (_$pH.y > _$oM) _$pH.y = _$oM;
        _$dO = _$pH.y - _$dP;
        _$dv = this.rect.bottom - this.rect.top - _$pH.y - _$dw;
        if (_$pH.y == _$qk.top) _$8f = false;
        _$dT = _$pH.y;
        _$dz = this.rect.bottom - this.rect.top;
    }
    if (_$8f) {
        var _$eX = new Array(1);
        this._$5c(_$8w, 0, 0, _$8w.getPanelNum(), _$8A, _$dO, _$8c, _$dT, 0, _$eX);
        var _$eW = _$eX[0];
        this._$5c(_$7x, _$dT, 0, _$7x.getPanelNum(), _$7y, _$dv, _$8c, _$dz, 0, _$eX);
        if (_$eX[0] > _$eW) _$eW = _$eX[0];
        var _$e7 = this._$0m(_$8c, _$eW);
        if (_$e7 != 0) {
            var _$e5 = this._$le._$kG._$2F(this._$le._$j1, this);
            this._$le._$kG._$5p(this, _$e5, this._$le._$j1, _$e7);
        }
        for (i = 0; i < _$8h.getPanelNum(); i++) {
            _$or = _$8h.panelList[i];
            _$ov = _$or._$nQ;
            _$ov._$5n(_$8c, 0, _$eW);
            if (_$8c) _$ov._$k6 = _$ov._$cg(); else _$ov._$k6 = _$ov._$bU();
        }
    }
};
_$6R.prototype._$5z = function (_$mO, _$pC, _$q5) {
    var pp = new Align();
    pp.x = _$q5.left;
    pp.y = _$q5.top;
    widgetDockPattern._$6a(this._$je, pp);
    var _$ov = _$mO;
    var _$9t = false;
    if (_$mO._$j0 == widgetDockPattern._$3j || _$mO._$j0 == widgetDockPattern._$3m) _$9t = true;
    var _$8j = new _$D();
    var _$er = this._$2l(_$8j, _$mO);
    var _$dK = new Array(1);
    var _$dF = new Array(1);
    var _$dG = new Array(1);
    var _$8i = new Array(1);
    this._$04(_$9t, _$8j, _$8i, _$dK, _$dF, _$dG);
    if (_$8i[0]) {
        this._$g(_$8j, _$er, _$9t, _$pC);
        return;
    }
    if (_$ov._$ix) {
        var _$qv = new Rect();
        widgetDockPattern._$2P(_$ov, _$qv);
        if (_$9t) {
            if ((_$pC.x > _$qv.left) && (_$pC.x < _$qv.right)) return;
        } else {
            if ((_$pC.y > _$qv.top) && (_$pC.y < _$qv.bottom)) return;
        }
    }
    var _$o0 = _$mO._$kA;
    this._$11(_$o0);
    var _$eT = new Array(1);
    var _$pN = this._$2b(pp, _$eT);
    this._$c(_$mO, _$pN);
    this._$7(null, _$mO);
};
_$6R.prototype._$0B = function (_$mO, _$nq, _$cD) {
    if (_$nq == null) return;
    if (_$cD == widgetDockPattern._$3k || _$cD == widgetDockPattern._$3m) {
        this._$c(_$mO, _$nq);
    } else {
        var _$oU = _$nq._$oV;
        if (_$oU == null || _$oU._$pr == _$nq) _$nq = null; else {
            if (_$oU._$pr._$od == null && _$oU._$pr._$pr == null) _$nq = _$oU._$pr; else if (_$oU._$pr._$od != null) {
                _$nq = _$oU._$pr._$od;
            }
        }
        this._$c(_$mO, _$nq);
    }
};
_$6R.prototype._$0B = function (_$mO, _$pC, _$87) {
    var _$eT = new Array(1);
    if (_$87) widgetDockPattern._$6a(_$je, _$pC);
    var _$pN = this._$2b(_$pC, _$eT);
    _$mO._$jr = _$eT[0];
    this._$c(_$mO, _$pN);
};
_$6R.prototype._$c = function (_$mO, _$mR) {
    if (this._$kI._$od == null && this._$kI._$pr == null && this._$kI._$of == null) {
        this._$kI._$of = _$mO;
        _$mO._$kA = this._$kI;
        return;
    }
    {
        var _$nI = new _$F();
        _$nI._$of = _$mO;
        _$mO._$kA = _$nI;
        if (_$mR != null) {
            var _$pm = new _$F();
            if (_$mR._$oV == null) {
                _$pm._$of = _$mR._$of;
                _$pm._$8y = _$mR._$8y;
                if (_$mR._$of._$kA == _$mR) _$mR._$of._$kA = _$pm;
                if (_$mR._$of._$l6 == _$mR) _$mR._$of._$l6 = _$pm;
                _$mR._$od = _$nI;
                _$nI._$oV = _$mR;
                _$mR._$pr = _$pm;
                _$pm._$oV = _$mR;
                _$mR._$of = null;
            } else {
                var _$oH = _$pm;
                if (_$mR._$oV._$pr == _$mR) {
                    _$oH._$oV = _$mR._$oV;
                    _$mR._$oV._$pr = _$oH;
                    _$oH._$pr = _$mR;
                    _$mR._$oV = _$oH;
                    _$oH._$od = _$nI;
                    _$nI._$oV = _$oH;
                } else {
                    var _$oI;
                    _$oI = _$mR._$oV._$pr;
                    _$oH._$oV = _$mR._$oV;
                    _$mR._$oV._$pr = _$oH;
                    _$oH._$pr = _$oI;
                    _$oI._$oV = _$oH;
                    _$oH._$od = _$mR;
                    _$mR._$oV = _$oH;
                    _$oH._$oV._$od = _$nI;
                    _$nI._$oV = _$oH._$oV;
                }
            }
        } else {
            var _$o8 = this._$kI;
            while (_$o8._$pr != null) _$o8 = _$o8._$pr;
            var _$op = new _$F();
            _$op._$of = _$o8._$of;
            _$op._$8y = _$o8._$8y;
            if (_$o8._$of != null) {
                if (_$o8._$of._$kA == _$o8) _$o8._$of._$kA = _$op;
                if (_$o8._$of._$l6 == _$o8) _$o8._$of._$l6 = _$op;
            }
            _$o8._$of = null;
            _$o8._$od = _$op;
            _$op._$oV = _$o8;
            _$o8._$pr = _$nI;
            _$nI._$oV = _$o8;
        }
    }
};
_$6R.prototype._$ah = function (_$ax, _$99) {
    this._$km = 0;
    widgetDockPanel.prototype._$ah.call(this, _$ax, _$99);
};
_$6R.prototype._$7n = function (_$q0) {
    if (this._$je != null) this._$je.add(_$q0);
};
_$6R.prototype._$rw = function (mainPattern) {
    if (this._$je != null) {
    }
};
_$6R.prototype._$66 = function (layout) {
};
_$6R.prototype._$63 = function (mainPattern, layout, _$mS, _$aP) {
};
_$6R.prototype.initPanelInfoLayout = function (mainPattern, layout, _$mS) {
};
