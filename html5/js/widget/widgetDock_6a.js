function _$6A(elementId) {
    this._$hJ = null;
    this._$jU = 0;
    this._isMouseDown = false;
    this._$mJ = new WidgetDockLocation();
    this._$mK = new WidgetDockFrame();
    this._$j6 = null;
    this._$kQ = null;
    this._$hL;
    this._$ld = null;
    this._$l5 = null;
    this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", elementId);
    this._panelStateElement.style.border = "1px solid";
    this._panelStateElement._$4x = this;
    this._panelStateElement.onmousedown = _$6A.onMouseDown;
    this._panelStateElement.onmousemove = _$6A.onMouseMove;
    this._panelStateElement.style.background = 'ButtonFace';
};
_$6A._$7a = 0;
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
_$6A.onMouseDown = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4x.mouseDown(e);
    } else {
        e.srcElement._$4x.mouseDown(e);
    }
    return false;
};
_$6A.onMouseMove = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._$4x.mouseMove(e);
    } else {
        e.srcElement._$4x.mouseMove(e);
    }
};
_$6A.prototype.mouseUp = function (e) {
    WidgetDockController._$6s(false);
    this._isMouseDown = false;
};
_$6A.prototype.getRect = function (rc) {
    if (this._panelStateElement != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._panelStateElement);
        rc.top = WidgetDockElementController.getElementTop(this._panelStateElement);
        rc.right = rc.left + parseInt(this._panelStateElement.style.width);
        rc.bottom = rc.top + parseInt(this._panelStateElement.style.height);
    }
};
_$6A.prototype.mouseMove = function (e) {
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    if (!this._isMouseDown) {
        this._$f4(pt);
    }
    if (this._$jU >= 0) {
        if (this._$jU == _$6A._$7a || this._$jU == _$6A._$1t) {
            this._panelStateElement.style.cursor = "e-resize";
        } else if (this._$jU == _$6A._$60 || this._$jU == _$6A._$4D) {
            this._panelStateElement.style.cursor = "n-resize";
        } else if (this._$jU == _$6A._$7b) {
            this._panelStateElement.style.cursor = "nw-resize";
        } else if (this._$jU == _$6A._$7c) {
            this._panelStateElement.style.cursor = "sw-resize";
        } else if (this._$jU == _$6A._$1u) {
            this._panelStateElement.style.cursor = "ne-resize";
        } else {
            this._panelStateElement.style.cursor = "se-resize";
        }
    }
};
_$6A.prototype.mouseDown = function (e) {
    if (this._isMouseDown) return;
    WidgetDockWindow._movePanelStateController = this;
    WidgetDockController._$6s(true);
    this._isMouseDown = true;
    var pt = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, pt);
    if (this._$jU >= 0) {
        this._$mJ.x = WidgetDockElementController.getElementLeft(this._panelStateElement);
        this._$mJ.y = WidgetDockElementController.getElementTop(this._panelStateElement);
        this._$mK.x = this._$mJ.x;
        this._$mK.y = this._$mJ.y;
        this._$mK.width = parseInt(this._panelStateElement.style.width);
        this._$mK.height = parseInt(this._panelStateElement.style.height);
        this._$mJ.x = pt.x;
        this._$mJ.y = pt.y;
    }
};
_$6A.prototype._$ms = function (e) {
    if (!this._isMouseDown) return;
    if (this._$jU < 0) return;
    var _$pL = new WidgetDockLocation();
    WidgetDockElementController.getMousePoint(e, _$pL);
    var rt = new WidgetDockFrame();
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
    if (this._$jU >= 0) {
        if (this._$jU == _$6A._$7a || this._$jU == _$6A._$1t) {
            this._panelStateElement.style.cursor = "e-resize";
        } else if (this._$jU == _$6A._$60 || this._$jU == _$6A._$4D) {
            this._panelStateElement.style.cursor = "n-resize";
        } else if (this._$jU == _$6A._$7b) {
            this._panelStateElement.style.cursor = "nw-resize";
        } else if (this._$jU == _$6A._$7c) {
            this._panelStateElement.style.cursor = "sw-resize";
        } else if (this._$jU == _$6A._$1u) {
            this._panelStateElement.style.cursor = "ne-resize";
        } else {
            this._panelStateElement.style.cursor = "se-resize";
        }
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
        this._$l5.resize(rt.x, rt.y, rt.width, rt.height);
    }
    if (this._$ld != null && this._$ld._$hJ != null && !this._$ld._$hJ._$it) {
        if (this._$j6 != null) {
            this._$j6._$lK.cx = rt.width;
            this._$j6._$lK.cy = rt.height;
        }
    }
    if (this._$ld != null) {
        this._$ld.refresh();
    }
};
_$6A.prototype._$f4 = function (pt) {
    this._$jU = -1;
    var rt = new WidgetDockFrame();
    rt.x = WidgetDockElementController.getElementLeft(this._panelStateElement);
    rt.y = WidgetDockElementController.getElementTop(this._panelStateElement);
    rt.width = parseInt(this._panelStateElement.style.width);
    rt.height = parseInt(this._panelStateElement.style.height);
    if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
            this._$jU = _$6A._$7c;
        } else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
            this._$jU = _$6A._$7b;
        } else {
            this._$jU = _$6A._$7a;
        }
    } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
            this._$jU = _$6A._$1v;
        } else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
            this._$jU = _$6A._$1u;
        } else {
            this._$jU = _$6A._$1t;
        }
    }
    if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
            this._$jU = _$6A._$7b;
        } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
            this._$jU = _$6A._$1u;
        } else {
            this._$jU = _$6A._$4D;
        }
    } else if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
            this._$jU = _$6A._$7c;
        } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
            this._$jU = _$6A._$1v;
        } else {
            this._$jU = _$6A._$60;
        }
    }
};
