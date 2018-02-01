
function _$6A(_$a7) {
    this._$hJ = null;
    this._$jU = 0;
    this._$il = false;
    this._$mJ = new Align();
    this._$mK = new AlignSize();
    this._$j6 = null;
    this._$kQ = null;
    this._$hL;
    this._$ld = null;
    this._$l5 = null;
    if (widgetDockController.isHasCanvasContext) {
        this._$h8 = _$m8._$0z("canvas", _$a7);
    } else {
        this._$h8 = _$m8._$0z("div", _$a7);
    }
    this._$h8.style.border = "1px solid";
    this._$h8._$4x = this;
    this._$h8.onmousedown = _$6A._$4h;
    this._$h8.onmousemove = _$6A._$4g;
    this._$h8._$mF = _$6A._$mh;
    this._$h8.style.background = 'ButtonFace';
};_$6A._$7a = 0;
_$6A._$4D = 1;
_$6A._$1t = 2;
_$6A._$60 = 3;
_$6A._$7b = 4;
_$6A._$7c = 5;
_$6A._$1u = 6;
_$6A._$1v = 7;
_$6A.icc = 0;
_$6A._$p = 4;
_$6A._$lL = new _$5Y();
_$6A._$4h = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) e.target._$4x._$mw(e); else e.srcElement._$4x._$mw(e);
    return false;
};
_$6A._$4g = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (widgetDockController.browserType == browserType.Firefox) {
        e.target._$4x.mouseMove(e);
    } else {
        e.srcElement._$4x.mouseMove(e);
    }
};
_$6A._$mh = function (e) {
    return false;
};
_$6A.prototype.mouseUp = function (e) {
    widgetDockController._$6s(false);
    this._$il = false;
};
_$6A.prototype._$m3 = function (e) {
    if (!this._$il) {
    }
};
_$6A.prototype._$25 = function (rc) {
    if (this._$h8 != null) {
        rc.left = _$m8._$2k(this._$h8);
        rc.top = _$m8._$2M(this._$h8);
        if (widgetDockController.isHasCanvasContext) {
            rc.right = rc.left + this._$h8.width;
            rc.bottom = rc.top + this._$h8.height;
        } else {
            rc.right = rc.left + parseInt(this._$h8.style.width);
            rc.bottom = rc.top + parseInt(this._$h8.style.height);
        }
    }
};
_$6A.prototype._$mz = function (e) {
};
_$6A.prototype.mouseMove = function (e) {
    var pt = new Align();
    _$m8._$2D(e, pt);
    if (!this._$il) this._$f4(pt);
    if (this._$jU >= 0) {
        if (this._$jU == _$6A._$7a || this._$jU == _$6A._$1t) {
            this._$h8.style.cursor = "e-resize";
        } else if (this._$jU == _$6A._$60 || this._$jU == _$6A._$4D) {
            this._$h8.style.cursor = "n-resize";
        } else if (this._$jU == _$6A._$7b) {
            this._$h8.style.cursor = "nw-resize";
        } else if (this._$jU == _$6A._$7c) {
            this._$h8.style.cursor = "sw-resize";
        } else if (this._$jU == _$6A._$1u) {
            this._$h8.style.cursor = "ne-resize";
        } else {
            this._$h8.style.cursor = "se-resize";
        }
    } else {
    }
};
_$6A.prototype._$mw = function (e) {
    if (this._$il) return;
    widgetDockWindow._$hK = this;
    widgetDockController._$6s(true);
    this._$il = true;
    if (this._$ld != null && this._$ld._$hJ != null && !_$ld._$hJ._$it) {
    }
    var pt = new Align();
    _$m8._$2D(e, pt);
    if (this._$jU >= 0) {
        this._$mJ.x = _$m8._$2k(this._$h8);
        this._$mJ.y = _$m8._$2M(this._$h8);
        this._$mK.x = this._$mJ.x;
        this._$mK.y = this._$mJ.y;
        if (widgetDockController.isHasCanvasContext) {
            this._$mK.width = this._$h8.width;
            this._$mK.height = this._$h8.height;
        } else {
            this._$mK.width = parseInt(this._$h8.style.width);
            this._$mK.height = parseInt(this._$h8.style.height);
        }
        this._$mJ.x = pt.x;
        this._$mJ.y = pt.y;
    }
};
_$6A.prototype._$ms = function (e) {
    if (!this._$il) return;
    if (this._$jU < 0) return;
    var _$pL = new Align();
    _$m8._$2D(e, _$pL);
    var rt = new AlignSize();
    rt.x = this._$mK.x;
    rt.y = this._$mK.y;
    rt.width = this._$mK.width;
    rt.height = this._$mK.height;
    if (this._$jU == _$6A._$1t) rt.width = rt.width + _$pL.x - this._$mJ.x; else if (this._$jU == _$6A._$7a) {
        rt.width = rt.width + this._$mJ.x - _$pL.x;
    } else if (this._$jU == _$6A._$60) rt.height = rt.height + _$pL.y - this._$mJ.y; else if (this._$jU == _$6A._$4D) {
        rt.height = rt.height + this._$mJ.y - _$pL.y;
    } else if (this._$jU == _$6A._$7c) {
        rt.width = rt.width + this._$mJ.x - _$pL.x;
        rt.height = rt.height + _$pL.y - this._$mJ.y;
    } else if (this._$jU == _$6A._$7b) {
        rt.width = rt.width + this._$mJ.x - _$pL.x;
        rt.height = rt.height + this._$mJ.y - _$pL.y;
    } else if (this._$jU == _$6A._$1v) {
        rt.width = rt.width + _$pL.x - this._$mJ.x;
        rt.height = rt.height + _$pL.y - this._$mJ.y;
    } else {
        rt.width = rt.width + _$pL.x - this._$mJ.x;
        rt.height = rt.height + this._$mJ.y - _$pL.y;
    }
    this._$sC(_$pL, rt);
    if (this._$j6 != null && !this._$j6._$S()) {
        this._$j6._$lO._$aw();
    }
    if (this._$jU >= 0) {
        if (this._$jU == _$6A._$7a || this._$jU == _$6A._$1t) {
            this._$h8.style.cursor = "e-resize";
        } else if (this._$jU == _$6A._$60 || this._$jU == _$6A._$4D) {
            this._$h8.style.cursor = "n-resize";
        } else if (this._$jU == _$6A._$7b) {
            this._$h8.style.cursor = "nw-resize";
        } else if (this._$jU == _$6A._$7c) {
            this._$h8.style.cursor = "sw-resize";
        } else if (this._$jU == _$6A._$1u) {
            this._$h8.style.cursor = "ne-resize";
        } else {
            this._$h8.style.cursor = "se-resize";
        }
    } else {
    }
};
_$6A.prototype._$sC = function (_$pL, rt) {
    var _$8K = true;
    if (this._$jU == _$6A._$4D || this._$jU == _$6A._$60) _$8K = false;
    if (this._$j6 != null) this._$j6._$bA(rt.width, rt.height, _$lL, _$8K);
    if (this._$ld != null && this._$ld._$hJ != null && !this._$ld._$hJ._$it) {
        rt.width = _$lL.cx;
        rt.height = _$lL.cy;
    } else {
        if (rt.width < 100) rt.width = 100;
        if (rt.height < 100) rt.height = 100;
    }
    if (this._$jU == _$6A._$7a) {
        rt.x = this._$mK.x + _$pL.x - this._$mJ.x;
    } else if (this._$jU == _$6A._$4D) {
        rt.y = this._$mK.y + _$pL.y - this._$mJ.y;
    } else if (this._$jU == _$6A._$7c) {
        rt.x = this._$mK.x + _$pL.x - this._$mJ.x;
    } else if (this._$jU == _$6A._$7b) {
        rt.x = this._$mK.x + _$pL.x - this._$mJ.x;
        rt.y = this._$mK.y + _$pL.y - this._$mJ.y;
    } else if (this._$jU == _$6A._$1u) {
        rt.y = this._$mK.y + _$pL.y - this._$mJ.y;
    }
    if (this._$ld != null) this._$ld._$r8(rt); else if (this._$kQ != null) {
        this._$kQ._$6p(rt.x, rt.y, rt.width, rt.height);
    } else if (this._$l5 != null) {
        this._$l5._$6o(rt.x, rt.y, rt.width, rt.height);
    }
    if (this._$ld != null && this._$ld._$hJ != null && !this._$ld._$hJ._$it) {
        if (this._$j6 == null) {
        }
        if (this._$j6 != null) {
            this._$j6._$lK.cx = rt.width;
            this._$j6._$lK.cy = rt.height;
        }
    }
    if (this._$ld != null) {
        this._$ld._$sL();
        this._$ld._$qJ();
    } else if (this._$kQ != null) {
    }
};
_$6A.prototype._$f4 = function (pt) {
    this._$jU = -1;
    var rt = new AlignSize();
    rt.x = _$m8._$2k(this._$h8);
    rt.y = _$m8._$2M(this._$h8);
    if (widgetDockController.isHasCanvasContext) {
        rt.width = this._$h8.width;
        rt.height = this._$h8.height;
    } else {
        rt.width = parseInt(this._$h8.style.width);
        rt.height = parseInt(this._$h8.style.height);
    }
    if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) this._$jU = _$6A._$7c; else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) this._$jU = _$6A._$7b; else this._$jU = _$6A._$7a;
    } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) this._$jU = _$6A._$1v; else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) this._$jU = _$6A._$1u; else this._$jU = _$6A._$1t;
    }
    if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) this._$jU = _$6A._$7b; else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) this._$jU = _$6A._$1u; else this._$jU = _$6A._$4D;
    } else if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) this._$jU = _$6A._$7c; else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) this._$jU = _$6A._$1v; else this._$jU = _$6A._$60;
    }
};
