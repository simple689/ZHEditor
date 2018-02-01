function _$58() {
    _$58.baseConstructor.call(this);
    this._$jj = 0;
    this._$jC = 0;
    this._$kg = -1;
    this._$jZ = -1;
    this._$ju = 0;
    this._$hU = new _$D();
};
_$58._$in = false;
_$58._$h6 = null;
_$58._$lu = new Align();
_$58._$2V = 24;
_$58.prototype.mouseMove = function (e) {
    var pt = new Align();
    _$m8._$2D(e, pt);
    this._$4Q(pt);
};
_$58.prototype._$mw = function (e) {
    if (e.button != 1) return;
    var pt = new Align();
    _$m8._$2D(e, pt);
    this._$08(pt, false);
};
_$58.prototype._$5e = function (e) {
};
_$58.prototype._$qy = function (wnd, rc) {
    _$6R.prototype._$qy.call(this, null, rc);
};
_$58.prototype._$5z = function (_$mO, _$pC, _$87) {
    this._$5A();
};
_$58.prototype._$6v = function (_$ax, _$9c, _$cA) {
    _$6R.prototype._$6v.call(this, _$ax, _$9c, _$cA);
};
_$58.prototype._$5R = function () {
    if (this._$kg >= 0) {
    }
    this._$kg = -1;
    this._$jZ = -1;
};
_$58.prototype._$3w = function (pt) {
    widgetDockPattern._$6a(this._$je, pt);
    var rc = new Rect();
    var _$es;
    var _$e1 = this._$hU.getPanelNum();
    if (_$e1 >= 1) {
        _$es = _$e1 - 1;
        if (this._$le._$j1 == widgetDockPattern._$3k || _$le._$j1 == widgetDockPattern._$3l) {
            rc.left = 0;
            rc.right = this.rect.right - this.rect.left;
            rc.top = this._$hU.panelList[0]._$cv;
            rc.bottom = this._$hU.panelList[_$es]._$cE;
        } else {
            rc.top = 0;
            rc.bottom = this.rect.bottom - this.rect.top;
            rc.left = this._$hU.panelList[0]._$cv;
            rc.right = this._$hU.panelList[_$es]._$cE;
        }
    }
    if (widgetDockPattern._$5f(rc, pt)) return true;
    return false;
};
_$58.prototype._$4U = function () {
    var pt = new Align();
    pt.x = _$58._$lu.x;
    pt.y = _$58._$lu.y;
    var _$pX = new Align();
    _$pX.x = pt.x;
    _$pX.y = pt.y;
    widgetDockPattern._$6a(this._$je, pt);
    var rc = new Rect();
    widgetDockPattern._$25(this._$je, rc);
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    if (_$58._$in) {
        pt.x = -100;
        _$pX.x = -100;
    }
    if (widgetDockPattern._$5f(rc, pt)) {
        this._$08(pt, true);
    } else {
        if (widgetDockPattern._$l2 == null || widgetDockPattern._$l2._$la != this) {
            this._$5R();
        }
    }
    widgetDockController._$8l._$34(null, _$4f._$49, _$pX);
};
_$58.prototype._$6Q = function (_$mO) {
    this._$5R();
    _$mO._$kH._$4T(null);
    this._$5M(_$mO);
    _$mO._$kH._$5M(_$le._$j1, _$mO);
    _$mO._$k0 = widgetDockFloatPanel._$4Z;
    _$mO.setVisible(true);
    this._$jZ = -1;
};
_$58.prototype._$3u = function (pt, _$mO) {
    var rc = new Rect();
    this._$25(rc);
    var ptc = new Align();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$th = this._$le._$j1;
    if (_$th == widgetDockPattern._$3j) {
        ptc.y += 1;
    } else if (_$th == widgetDockPattern._$3m) {
        ptc.y -= 1;
    } else if (_$th == widgetDockPattern._$3k) {
        ptc.x -= 1;
    } else ptc.x += 1;
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU.panelList[i];
        if (widgetDockPattern._$5f(rc, ptc)) {
            if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) {
                if ((ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) && (_$pE._$mO == _$mO)) {
                    return true;
                }
            } else {
                if ((ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) && (_$pE._$mO == _$mO)) {
                    return true;
                }
            }
        }
    }
    return false;
};
_$58.prototype._$08 = function (pt, _$7X) {
    var rc = new Rect();
    this._$25(rc);
    var ptc = new Align();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$e1 = this._$hU.getPanelNum();
    var bin = false;
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU.panelList[i];
        var _$8O = false;
        var _$9J = true;
        if ((_$pE._$mO._$jN == widgetDockFloatPanel._$48 && !_$7X) || (_$pE._$mO._$jN == widgetDockFloatPanel._$46 && _$7X)) _$9J = false;
        if (widgetDockPattern._$5f(rc, ptc)) {
            if (widgetDockPattern._$l2 != null) {
                if (widgetDockPattern._$l2._$kx == _$pE._$mO) {
                    _$8O = true;
                }
            }
            if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) {
                if (ptc.x > _$pE._$cv && ptc.x < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE._$mO);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE._$mO);
                    } else this._$jZ = i;
                    break;
                }
            } else {
                if (ptc.y > _$pE._$cv && ptc.y < _$pE._$cE) {
                    bin = true;
                    if (!_$7X) {
                        this._$jZ = i;
                        if (!_$8O && _$9J) {
                            this._$6Q(_$pE._$mO);
                            return;
                        }
                    }
                    if (this._$jZ == i && !_$8O && _$9J) {
                        this._$5b(_$pE._$mO);
                    } else this._$jZ = i;
                    break;
                }
            }
        }
    }
};
_$58.prototype._$4Q = function (pt) {
    this._$08(pt, true);
};
_$58.prototype._$4S = function () {
    var _$cD = this._$le._$j1;
    var _$e1 = this._$hU.getPanelNum();
    var _$pE;
    var rc = new Rect();
    var _$qa = new Rect();
    this._$25(_$qa);
    _$qa.right = _$qa.right - _$qa.left;
    _$qa.left = 0;
    _$qa.bottom = _$qa.bottom - _$qa.top;
    _$qa.top = 0;
    if (this._$hj != null) {
        this._$hj.fillStyle = 'rgb( 250, 250, 250 )';
        this._$hj.fillRect(_$qa.left, _$qa.top, _$qa.right - _$qa.left, _$qa.bottom - _$qa.top);
    }
    var _$o3 = null;
    var _$ba = null;
    var _$eo, _$ep;
    var i;
    for (i = 0; i < _$e1; i++) {
        _$pE = this._$hU.panelList[i];
        var _$ok = _$pE._$mO._$hE;
        if (_$o3 == null) {
            _$o3 = _$pE._$mO._$kH;
            _$ba = _$o3._$i3;
            if (_$ba == null) _$ba = this._$bS();
        }
        if (this._$hj == null) {
            if (_$pE._$h9 != null) {
                if (_$cD == widgetDockPattern._$3m || _$cD == widgetDockPattern._$3j) {
                    var _$ff = 2;
                    _$m8._$6j(_$pE._$h9, _$pE._$cv, 2 + _$ff);
                    _$m8._$6n(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V - 2 - _$ff);
                    _$pE._$h9.style.font = this._$bS();
                } else {
                    if (widgetDockController.browserType == widgetDockController._$3s || widgetDockController.browserType == widgetDockController._$I) {
                        _$ff = (_$58._$2V - 2) / 2;
                        _$m8._$6j(_$pE._$h9, 4 - _$ff, _$pE._$cv + 2);
                        _$m8._$6n(_$pE._$h9, _$58._$2V - 2, _$pE._$cE - _$pE._$cv);
                        _$pE._$h9.style.writingMode = 'tb-rl';
                    } else if (widgetDockController.browserType == widgetDockController._$4F) {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        _$m8._$6j(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        _$m8._$6n(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        _$m8._$6j(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        _$m8._$6n(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    _$pE._$h9.style.font = this._$bS();
                }
                _$pE._$h9.innerHTML = _$pE._$qV;
            }
            continue;
        }
        var dt = new Size();
        var _$dE = new Array(1);
        _$m8._$2L(dt, _$ba, _$pE._$qV, this._$hj);
        if (_$cD == widgetDockPattern._$3m || _$cD == widgetDockPattern._$3j) {
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            this._$hj._$s1 = 'ButtonShadow';
            if (_$cD == widgetDockPattern._$3m) {
                rc.top = 0;
                rc.bottom = _$qa.bottom - 3;
                _$m8._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                _$m8._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                _$m8._$1q(rc.right, rc.bottom, rc.right, rc.top, this._$hj);
            } else {
                rc.top = 2;
                rc.bottom = _$qa.bottom;
                _$m8._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                _$m8._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                _$m8._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                rc.top = 3;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$eo = rc.right - _$O._$jL;
            _$ep = rc.top + (rc.bottom - rc.top - _$O._$jL) / 2;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (widgetDockController.browserType == browserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
        } else {
            this._$hj.save();
            this._$hj._$s1 = 'ButtonShadow';
            this._$hj.translate(this._$h8.width / 2, -this._$h8.width / 2);
            this._$hj.rotate(3.141592653589 / 2);
            this._$hj.translate(this._$h8.width / 2, -this._$h8.width / 2);
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            if (_$cD == widgetDockPattern._$3k) {
                rc.top = 3;
                rc.bottom = _$qa.right;
                _$m8._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                _$m8._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                _$m8._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2;
            } else {
                rc.top = 0;
                rc.bottom = _$qa.right - 2;
                _$m8._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                _$m8._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                _$m8._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2 + 1;
                rc.bottom -= 1;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$ep = rc.right - _$O._$jL;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (widgetDockController.browserType == browserType.Opera) {
                this._$hj.fillStyle = 'black';
            }
            this._$hj.fillText(_$pE._$qV, rc.left, (rc.bottom - rc.top) / 2 + rc.top + 4);
            this._$hj.restore();
        }
        if (_$ok != null) {
        }
    }
};
_$58.prototype._$03 = function (mainPattern, _$mX, _$pC, _$nz, _$dk, _$oQ, _$de) {
    _$de[0] = 0;
    _$oQ[0] = null;
    {
        var _$qu = new Rect();
        _$qu.setRect(this.rect);
        var _$9z = this._$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == widgetDockPattern._$3k || this._$le._$j1 == widgetDockPattern._$3l) _$nz.cy = this.rect.bottom - this.rect.top; else _$nz.cx = this.rect.right - this.rect.left;
        }
        return _$9z;
    }
};
_$58.prototype._$5b = function (_$mO) {
    var rc = new Rect();
    this._$25(rc);
    var iw = _$mO._$cg();
    var ih = _$mO._$bU();
    iw += 6;
    ih += 6;
    var _$qi = new Rect();
    var _$ft = this._$ju;
    if (_$ft == widgetDockPattern._$3k) {
        rc.left = rc.right;
        rc.right = rc.left + iw;
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == widgetDockPattern._$3l) {
        rc.right = rc.left;
        rc.left = rc.right - (iw);
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == widgetDockPattern._$3m) {
        rc.left += this._$jj;
        rc.right -= this._$jC;
        rc.top = rc.bottom;
        rc.bottom = rc.top + ih;
    } else {
        rc.bottom = rc.top;
        rc.top = rc.top - (ih);
        rc.left += this._$jj;
        rc.right -= this._$jC;
    }
    var _$og = new _$59();
    _$og._$la = this;
    _$og._$kx = _$mO;
    if (this._$kg < 0) {
        this._$kg = 1;
    }
    _$og._$kx = _$mO;
    _$og.Add(_$mO);
    _$mO._$39(true);
    _$mO._$bf(true);
    _$og._$6k(_$ft);
    _$og._$6o(rc.left, rc.top, (rc.right - rc.left), (rc.bottom - rc.top));
    _$og.setVisible(true);
    _$mO._$l0.pattern._$4T(_$og);
};
_$58.prototype._$0s = function () {
    var iNo = this._$hU.getPanelNum();
    if (iNo > 0) {
        var _$oU = new Array();
        var i;
        for (i = 0; i < iNo; i++) {
            _$oU[i] = this._$hU.panelList[i];
        }
        this._$hU._$5R();
        return _$oU;
    }
    return null;
};
_$58.prototype._$4J = function (_$mO, _$sc) {
    var _$e1 = _$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == _$hU.panelList[i]._$mO) {
            var _$pE = _$hU.panelList[i];
            _$pE._$qT = new String(_$sc);
            _$pE._$qV = new String(_$sc);
            this._$5A();
            break;
        }
    }
};
_$58.prototype._$8 = function (_$mO) {
    var _$ol = new _$O(0, 0, _$mO._$hy._$cb());
    _$ol._$mO = _$mO;
    this._$hU._$b(_$ol);
    if (!widgetDockController.isHasCanvasContext) {
        _$ol._$h9 = _$m8._$0t("div", this._$h8);
        _$ol._$h9._$4A = this;
        _$ol._$h9.onmousedown = _$6R._$14;
        _$ol._$h9.onmousemove = _$6R._$13;
    }
    this._$5A();
    this._$qJ();
};
_$58.prototype._$5M = function (_$mO) {
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == this._$hU.panelList[i]._$mO) {
            if (this._$hU.panelList[i]._$h9 != null) {
                this._$h8.removeChild(this._$hU.panelList[i]._$h9);
                this._$hU.panelList[i]._$h9 = null;
            }
            this._$hU._$5G(i);
            break;
        }
    }
    this._$5A();
    this._$qJ();
    return this._$hU.getPanelNum();
};
_$58.prototype._$5A = function () {
    var _$qp = new Rect();
    var _$ga = 0;
    var _$gb = 0;
    var _$qk = new Rect();
    this._$25(_$qk);
    if (this._$le._$j1 == widgetDockPattern._$3m || this._$le._$j1 == widgetDockPattern._$3j) {
        this._$5B(_$ga);
    } else {
        this._$5B(_$ga);
    }
    this._$jj = _$ga;
    this._$jC = _$gb;
    this._$qJ();
};
_$58.prototype._$c8 = function () {
    var d = new Size();
    if (this._$h8 != null) {
        d.width = this._$h8.width;
        d.height = this._$h8.height;
    }
    return d;
};
_$58.prototype._$bS = function () {
    return "8pt sans-serif";
};
_$58.prototype._$5B = function (_$d4) {
    if (this._$hU == null) return;
    var d = this._$c8();
    d.width -= 2;
    if (d.width < 0) d.width = 0;
    var ft = null;
    var _$gi = this._$hU.getPanelNum();
    var _$fv = _$d4;
    var tab = null;
    var dt = new Size();
    var i;
    var _$dI = new Array();
    var _$o3 = null;
    for (i = 0; i < _$gi; i++) {
        tab = this._$hU.panelList[i];
        tab._$cv = _$fv;
        if (_$o3 == null) {
            _$o3 = tab._$mO._$kH;
            ft = _$o3._$i3;
            if (ft == null) ft = this._$bS();
        }
        _$m8._$2L(dt, ft, tab._$qT, this._$hj);
        tab._$cE = _$fv + dt.width + 2 * _$G._$2Z;
        if (tab._$mO._$hE != null) tab._$cE += _$O._$jL;
        _$dI[i] = tab._$cE - _$fv;
        _$fv = tab._$cE;
    }
};
