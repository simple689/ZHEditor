function _$4d() {
    _$4d.baseConstructor.call(this);
    this._$kY = null;
};
WidgetDockPrototype.bind(_$4d, _$1l);
_$4d.prototype._$ru = function (mainPattern) {
    this._$kY = mainPattern;
};
_$4d.prototype.setVisible = function () {
};
_$4d.prototype.setSize = function (_$am) {
    WidgetDockElementController.setElementSize(this._$h8, _$am.width, _$am.height);
};
_$4d.prototype.setElementZIndex = function (_$cR) {
    if (this._$h8 != null) {
        WidgetDockElementController.setElementZIndex(this._$h8, _$cR);
    }
};
_$4d.prototype._$mj = function (pts) {
    var _$po;
    _$po = this._$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    var _$9P = WidgetDockElementController.getElementLeft(this._$h8);
    var _$9Q = WidgetDockElementController.getElementTop(this._$h8);
    var pt = new WidgetDockLocation();
    pt.x = pts.x - _$9P;
    pt.y = pts.y - _$9Q;
    if (WidgetDockPatternBase._$5f(this._$lw, pt)) {
        var _$7E = new WidgetDockFloatPanelController();
        _$po._$2Q(_$7E);
        var _$e1 = _$7E.getPanelNum();
        var i;
        for (i = 0; i < _$e1; i++) {
            var dfw = _$7E._panelList[i];
            if (dfw._$cn()) {
                dfw.setVisible(false);
            }
        }
        return -1;
    }
    var _$oe = _$po._$1L();
    this._$bi = _$oe._$of;
    WidgetDockFloatPanel._$jy = WidgetDockFloatPanel._$0W;
    return this._$bi._$4R(pts);
};
_$4d.prototype._$c6 = function () {
    _$1l._$j5.width = 130;
    _$1l._$j5.height = 18;
    return _$1l._$j5;
};
_$4d.prototype._$qJ = function () {
    var rc = new WidgetDockRect();
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
    this._$aE(rc.left, rc.top, rc.right - rc.left, vh, WidgetDockFloatPanel._$3Q);
    this._$bi = _$pN;
};
_$4d.prototype._$4L = function () {
    var _$po = _$kY._patternPositionList[0]._patternSub._panelList[0]._$kI;
    this._$0Y(_$po);
};

function _$58() {
    _$58.baseConstructor.call(this);
    this._$jj = 0;
    this._$jC = 0;
    this._$kg = -1;
    this._$jZ = -1;
    this._$ju = 0;
    this._$hU = new WidgetDockFloatPanelController();
};WidgetDockPrototype.bind(_$58, _$6R);
_$58._$in = false;
_$58._$h6 = null;
_$58._$lu = new WidgetDockLocation();
_$58._$2V = 24;
_$58.prototype.mouseMove = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
    this._$4Q(pt);
};
_$58.prototype._$mw = function (e) {
    if (e.button != 1) return;
    var pt = new WidgetDockLocation();
    WidgetDockElementController._$2D(e, pt);
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
_$58.prototype.reset = function () {
    if (this._$kg >= 0) {
    }
    this._$kg = -1;
    this._$jZ = -1;
};
_$58.prototype._$3w = function (pt) {
    WidgetDockPatternBase._$6a(this._$je, pt);
    var rc = new WidgetDockRect();
    var _$es;
    var _$e1 = this._$hU.getPanelNum();
    if (_$e1 >= 1) {
        _$es = _$e1 - 1;
        if (this._$le._$j1 == EnumPatternPositionType.Left || _$le._$j1 == EnumPatternPositionType.Right) {
            rc.left = 0;
            rc.right = this.rect.right - this.rect.left;
            rc.top = this._$hU._panelList[0]._$cv;
            rc.bottom = this._$hU._panelList[_$es]._$cE;
        } else {
            rc.top = 0;
            rc.bottom = this.rect.bottom - this.rect.top;
            rc.left = this._$hU._panelList[0]._$cv;
            rc.right = this._$hU._panelList[_$es]._$cE;
        }
    }
    if (WidgetDockPatternBase._$5f(rc, pt)) return true;
    return false;
};
_$58.prototype._$4P = function () {
};
_$58.prototype._$4U = function () {
    var pt = new WidgetDockLocation();
    pt.x = _$58._$lu.x;
    pt.y = _$58._$lu.y;
    var _$pX = new WidgetDockLocation();
    _$pX.x = pt.x;
    _$pX.y = pt.y;
    WidgetDockPatternBase._$6a(this._$je, pt);
    var rc = new WidgetDockRect();
    WidgetDockPatternBase._$25(this._$je, rc);
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    if (_$58._$in) {
        pt.x = -100;
        _$pX.x = -100;
    }
    if (WidgetDockPatternBase._$5f(rc, pt)) {
        this._$08(pt, true);
    } else {
        if (WidgetDockPatternBase._$l2 == null || WidgetDockPatternBase._$l2._$la != this) {
            this.reset();
        }
    }
    WidgetDockController._$8l._$34(null, _$4f._$49, _$pX);
};
_$58.prototype._$6Q = function (_$mO) {
    this.reset();
    _$mO._patternMain._$4T(null);
    this._$5M(_$mO);
    _$mO._patternMain._$5M(_$le._$j1, _$mO);
    _$mO._$k0 = WidgetDockFloatPanel._$4Z;
    _$mO.setVisible(true);
    this._$jZ = -1;
};
_$58.prototype._$3u = function (pt, _$mO) {
    var rc = new WidgetDockRect();
    this._$25(rc);
    var ptc = new WidgetDockLocation();
    ptc.x = pt.x - rc.left;
    ptc.y = pt.y - rc.top;
    rc.right = rc.right - rc.left;
    rc.bottom = rc.bottom - rc.top;
    rc.left = 0;
    rc.top = 0;
    var _$th = this._$le._$j1;
    if (_$th == EnumPatternPositionType.Bottom) {
        ptc.y += 1;
    } else if (_$th == EnumPatternPositionType.Top) {
        ptc.y -= 1;
    } else if (_$th == EnumPatternPositionType.Left) {
        ptc.x -= 1;
    } else ptc.x += 1;
    var _$e1 = this._$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        var _$pE = this._$hU._panelList[i];
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
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
    var rc = new WidgetDockRect();
    this._$25(rc);
    var ptc = new WidgetDockLocation();
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
        var _$pE = this._$hU._panelList[i];
        var _$8O = false;
        var _$9J = true;
        if ((_$pE._$mO._$jN == WidgetDockFloatPanel._$48 && !_$7X) || (_$pE._$mO._$jN == WidgetDockFloatPanel._$46 && _$7X)) _$9J = false;
        if (WidgetDockPatternBase._$5f(rc, ptc)) {
            if (WidgetDockPatternBase._$l2 != null) {
                if (WidgetDockPatternBase._$l2._$kx == _$pE._$mO) {
                    _$8O = true;
                }
            }
            if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
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
_$58.prototype._$4M = function (e) {
};
_$58.prototype._$4Q = function (pt) {
    this._$08(pt, true);
};
_$58.prototype._$4S = function () {
    var _$cD = this._$le._$j1;
    var _$e1 = this._$hU.getPanelNum();
    var _$pE;
    var rc = new WidgetDockRect();
    var _$qa = new WidgetDockRect();
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
        _$pE = this._$hU._panelList[i];
        var _$ok = _$pE._$mO._$hE;
        if (_$o3 == null) {
            _$o3 = _$pE._$mO._patternMain;
            _$ba = _$o3._$i3;
            if (_$ba == null) _$ba = this._$bS();
        }
        if (this._$hj == null) {
            if (_$pE._$h9 != null) {
                if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
                    var _$ff = 2;
                    WidgetDockElementController.setElementLeftTop(_$pE._$h9, _$pE._$cv, 2 + _$ff);
                    WidgetDockElementController.setElementSize(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V - 2 - _$ff);
                    _$pE._$h9.style.font = this._$bS();
                } else {
                    if (WidgetDockController._browserType == WidgetDockController._$3s || WidgetDockController._browserType == WidgetDockController._$I) {
                        _$ff = (_$58._$2V - 2) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._$h9, 4 - _$ff, _$pE._$cv + 2);
                        WidgetDockElementController.setElementSize(_$pE._$h9, _$58._$2V - 2, _$pE._$cE - _$pE._$cv);
                        _$pE._$h9.style.writingMode = 'tb-rl';
                    } else if (WidgetDockController._browserType == WidgetDockController._$4F) {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController.setElementSize(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['OTransform'] = ' rotate(90deg) ';
                    } else {
                        var _$te = (_$pE._$cE - _$pE._$cv) / 2;
                        WidgetDockElementController.setElementLeftTop(_$pE._$h9, -_$te + (_$58._$2V) / 2 - 2, _$pE._$cv + _$te);
                        WidgetDockElementController.setElementSize(_$pE._$h9, _$pE._$cE - _$pE._$cv, _$58._$2V);
                        _$pE._$h9.style['MozTransform'] = ' rotate(90deg) ';
                    }
                    _$pE._$h9.style.font = this._$bS();
                }
                _$pE._$h9.innerHTML = _$pE._$qV;
            }
            continue;
        }
        var dt = new WidgetDockSize();
        var _$dE = new Array(1);
        WidgetDockElementController._$2L(dt, _$ba, _$pE._$qV, this._$hj);
        if (_$cD == EnumPatternPositionType.Top || _$cD == EnumPatternPositionType.Bottom) {
            rc.left = _$pE._$cv;
            rc.right = _$pE._$cE;
            this._$hj._$s1 = 'ButtonShadow';
            if (_$cD == EnumPatternPositionType.Top) {
                rc.top = 0;
                rc.bottom = _$qa.bottom - 3;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.bottom, rc.right, rc.top, this._$hj);
            } else {
                rc.top = 2;
                rc.bottom = _$qa.bottom;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                rc.top = 3;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$eo = rc.right - _$O._$jL;
            _$ep = rc.top + (rc.bottom - rc.top - _$O._$jL) / 2;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
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
            if (_$cD == EnumPatternPositionType.Left) {
                rc.top = 3;
                rc.bottom = _$qa.right;
                WidgetDockElementController._$1q(rc.left, rc.top, rc.left, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.top, rc.right, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2;
            } else {
                rc.top = 0;
                rc.bottom = _$qa.right - 2;
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.left, rc.top, this._$hj);
                WidgetDockElementController._$1q(rc.right, rc.top, rc.right, rc.bottom, this._$hj);
                WidgetDockElementController._$1q(rc.left, rc.bottom, rc.right, rc.bottom, this._$hj);
                _$eo = _$qa.left + (_$qa.right - _$qa.left - _$O._$jL) / 2 + 1;
                rc.bottom -= 1;
            }
            rc.left += 2;
            this._$hj.fillStyle = 'ButtonFace';
            this._$hj.fillRect(rc.left, rc.top, rc.right - rc.left, rc.bottom - rc.top);
            _$ep = rc.right - _$O._$jL;
            this._$hj.font = this._$bS();
            this._$hj.fillStyle = 'menuText';
            if (WidgetDockController._browserType == EnumBrowserType.Opera) {
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
        var _$qu = new WidgetDockRect();
        _$qu.setRect(this.rect);
        var _$9z = this._$3E(_$qu, _$pC, _$de);
        if (_$9z != 0xff) {
            if (this._$le._$j1 == EnumPatternPositionType.Left || this._$le._$j1 == EnumPatternPositionType.Right) _$nz.cy = this.rect.bottom - this.rect.top; else _$nz.cx = this.rect.right - this.rect.left;
        }
        return _$9z;
    }
};
_$58.prototype._$5b = function (_$mO) {
    var rc = new WidgetDockRect();
    this._$25(rc);
    var iw = _$mO._$cg();
    var ih = _$mO._$bU();
    iw += 6;
    ih += 6;
    var _$qi = new WidgetDockRect();
    var _$ft = this._$ju;
    if (_$ft == EnumPatternPositionType.Left) {
        rc.left = rc.right;
        rc.right = rc.left + iw;
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == EnumPatternPositionType.Right) {
        rc.right = rc.left;
        rc.left = rc.right - (iw);
        rc.top += this._$jj;
        rc.bottom -= this._$jC;
    } else if (_$ft == EnumPatternPositionType.Top) {
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
    _$mO.setElementVisible(true);
    _$mO._$bf(true);
    _$og._$6k(_$ft);
    _$og._$6o(rc.left, rc.top, (rc.right - rc.left), (rc.bottom - rc.top));
    _$og.setVisible(true);
    _$mO._windowMain._patternMain._$4T(_$og);
};
_$58.prototype._$0s = function () {
    var iNo = this._$hU.getPanelNum();
    if (iNo > 0) {
        var _$oU = new Array();
        var i;
        for (i = 0; i < iNo; i++) {
            _$oU[i] = this._$hU._panelList[i];
        }
        this._$hU.reset();
        return _$oU;
    }
    return null;
};
_$58.prototype._$4J = function (_$mO, _$sc) {
    var _$e1 = _$hU.getPanelNum();
    var i;
    for (i = 0; i < _$e1; i++) {
        if (_$mO == _$hU._panelList[i]._$mO) {
            var _$pE = _$hU._panelList[i];
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
    this._$hU.addFloatPanel(_$ol);
    if (!WidgetDockController._isHasCanvasContext) {
        _$ol._$h9 = WidgetDockElementController._$0t("div", this._$h8);
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
        if (_$mO == this._$hU._panelList[i]._$mO) {
            if (this._$hU._panelList[i]._$h9 != null) {
                this._$h8.removeChild(this._$hU._panelList[i]._$h9);
                this._$hU._panelList[i]._$h9 = null;
            }
            this._$hU.deletePanel(i);
            break;
        }
    }
    this._$5A();
    this._$qJ();
    return this._$hU.getPanelNum();
};
_$58.prototype._$5A = function () {
    var _$qp = new WidgetDockRect();
    var _$ga = 0;
    var _$gb = 0;
    var _$qk = new WidgetDockRect();
    this._$25(_$qk);
    if (this._$le._$j1 == EnumPatternPositionType.Top || this._$le._$j1 == EnumPatternPositionType.Bottom) {
        this._$5B(_$ga);
    } else {
        this._$5B(_$ga);
    }
    this._$jj = _$ga;
    this._$jC = _$gb;
    this._$qJ();
};
_$58.prototype._$c8 = function () {
    var d = new WidgetDockSize();
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
    var dt = new WidgetDockSize();
    var i;
    var _$dI = new Array();
    var _$o3 = null;
    for (i = 0; i < _$gi; i++) {
        tab = this._$hU._panelList[i];
        tab._$cv = _$fv;
        if (_$o3 == null) {
            _$o3 = tab._$mO._patternMain;
            ft = _$o3._$i3;
            if (ft == null) ft = this._$bS();
        }
        WidgetDockElementController._$2L(dt, ft, tab._$qT, this._$hj);
        tab._$cE = _$fv + dt.width + 2 * _$G._$2Z;
        if (tab._$mO._$hE != null) tab._$cE += _$O._$jL;
        _$dI[i] = tab._$cE - _$fv;
        _$fv = tab._$cE;
    }
};

function _$59() {
    this._$kx = null;
    this._$la = null;
    this._$lc = null;
    this._$lc = new _$6A(WidgetDockController._elementRootId);
    this._$lc._$l5 = this;
    this._$hu = new Date();
    this._$hk = this._$hu.getTime();
    this._$iJ = false;
};_$59.prototype.Add = function (_$mO) {
    var it = 0;
    var _$et = _$mO._windowMain._$jO;
    WidgetDockElementController.setElementZIndex(this._$lc._$h8, _$et);
    _$mO.setElementZIndex(_$et + 1);
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
    if (WidgetDockController._isHasCanvasContext) {
        canvas.width = width;
        canvas.height = height;
    } else {
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }
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
