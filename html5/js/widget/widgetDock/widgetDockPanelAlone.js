function WidgetDockPanelAlone(elementId) {
    this._resizeType = 0;
    this._isMouseDown = false;
    this._location = new WidgetDockPoint();
    this._frame = new WidgetDockFrame();
    this._$kQ = null;
    this.m$59 = null;
    this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", elementId);
    this._panelStateElement.style.border = "1px solid";
    this._panelStateElement._panelAlone = this;
    this._panelStateElement.onmousedown = WidgetDockPanelAlone.onMouseDown;
    this._panelStateElement.onmousemove = WidgetDockPanelAlone.onMouseMove;
    this._panelStateElement.style.background = 'ButtonFace';
};
WidgetDockPanelAlone._space = 4;
WidgetDockPanelAlone.onMouseDown = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._panelAlone.mouseDown(e);
    } else {
        e.srcElement._panelAlone.mouseDown(e);
    }
    return false;
};
WidgetDockPanelAlone.onMouseMove = function (e) {
    if (e == null) {
        e = window.event;
    }
    if (WidgetDockController._browserType == EnumBrowserType.Firefox) {
        e.target._panelAlone.mouseMove(e);
    } else {
        e.srcElement._panelAlone.mouseMove(e);
    }
};
WidgetDockPanelAlone.prototype.mouseDown = function (e) {
    if (this._isMouseDown) return;
    WidgetDockWindow._movePanelStateController = this;
    this._isMouseDown = true;
    var pt = new WidgetDockPoint();
    WidgetDockElementController.getMousePoint(e, pt);
    if (this._resizeType >= 0) {
        this._location.x = WidgetDockElementController.getElementLeft(this._panelStateElement);
        this._location.y = WidgetDockElementController.getElementTop(this._panelStateElement);
        this._frame.x = this._location.x;
        this._frame.y = this._location.y;
        this._frame.width = parseInt(this._panelStateElement.style.width);
        this._frame.height = parseInt(this._panelStateElement.style.height);
        this._location.x = pt.x;
        this._location.y = pt.y;
    }
};
WidgetDockPanelAlone.prototype.mouseUp = function (e) {
    this._isMouseDown = false;
};
WidgetDockPanelAlone.prototype.mouseMove = function (e) {
    var pt = new WidgetDockPoint();
    WidgetDockElementController.getMousePoint(e, pt);
    if (!this._isMouseDown) {
        this._$f4(pt);
    }
    if (this._resizeType >= 0) {
        if (this._resizeType == EnumResizeType.eResize_x || this._resizeType == EnumResizeType.eResize_y) {
            this._panelStateElement.style.cursor = "e-resize";
        } else if (this._resizeType == EnumResizeType.nResize_y || this._resizeType == EnumResizeType.nResize_x) {
            this._panelStateElement.style.cursor = "n-resize";
        } else if (this._resizeType == EnumResizeType.nwResize) {
            this._panelStateElement.style.cursor = "nw-resize";
        } else if (this._resizeType == EnumResizeType.swResize) {
            this._panelStateElement.style.cursor = "sw-resize";
        } else if (this._resizeType == EnumResizeType.neResize) {
            this._panelStateElement.style.cursor = "ne-resize";
        } else {
            this._panelStateElement.style.cursor = "se-resize";
        }
    }
};
WidgetDockPanelAlone.prototype.getRect = function (rc) {
    if (this._panelStateElement != null) {
        rc.left = WidgetDockElementController.getElementLeft(this._panelStateElement);
        rc.top = WidgetDockElementController.getElementTop(this._panelStateElement);
        rc.right = rc.left + parseInt(this._panelStateElement.style.width);
        rc.bottom = rc.top + parseInt(this._panelStateElement.style.height);
    }
};
WidgetDockPanelAlone.prototype._$ms = function (e) {
    if (!this._isMouseDown) return;
    if (this._resizeType < 0) return;
    var _$pL = new WidgetDockPoint();
    WidgetDockElementController.getMousePoint(e, _$pL);
    var rt = new WidgetDockFrame();
    rt.x = this._frame.x;
    rt.y = this._frame.y;
    rt.width = this._frame.width;
    rt.height = this._frame.height;
    if (this._resizeType == EnumResizeType.eResize_y) {
        rt.width = rt.width + _$pL.x - this._location.x;
    } else if (this._resizeType == EnumResizeType.eResize_x) {
        rt.width = rt.width + this._location.x - _$pL.x;
    } else if (this._resizeType == EnumResizeType.nResize_y) {
        rt.height = rt.height + _$pL.y - this._location.y;
    } else if (this._resizeType == EnumResizeType.nResize_x) {
        rt.height = rt.height + this._location.y - _$pL.y;
    } else if (this._resizeType == EnumResizeType.swResize) {
        rt.width = rt.width + this._location.x - _$pL.x;
        rt.height = rt.height + _$pL.y - this._location.y;
    } else if (this._resizeType == EnumResizeType.nwResize) {
        rt.width = rt.width + this._location.x - _$pL.x;
        rt.height = rt.height + this._location.y - _$pL.y;
    } else if (this._resizeType == EnumResizeType.seResize) {
        rt.width = rt.width + _$pL.x - this._location.x;
        rt.height = rt.height + _$pL.y - this._location.y;
    } else {
        rt.width = rt.width + _$pL.x - this._location.x;
        rt.height = rt.height + this._location.y - _$pL.y;
    }
    this._$sC(_$pL, rt);
    if (this._resizeType >= 0) {
        if (this._resizeType == EnumResizeType.eResize_x || this._resizeType == EnumResizeType.eResize_y) {
            this._panelStateElement.style.cursor = "e-resize";
        } else if (this._resizeType == EnumResizeType.nResize_y || this._resizeType == EnumResizeType.nResize_x) {
            this._panelStateElement.style.cursor = "n-resize";
        } else if (this._resizeType == EnumResizeType.nwResize) {
            this._panelStateElement.style.cursor = "nw-resize";
        } else if (this._resizeType == EnumResizeType.swResize) {
            this._panelStateElement.style.cursor = "sw-resize";
        } else if (this._resizeType == EnumResizeType.neResize) {
            this._panelStateElement.style.cursor = "ne-resize";
        } else {
            this._panelStateElement.style.cursor = "se-resize";
        }
    }
};
WidgetDockPanelAlone.prototype._$sC = function (_$pL, rt) {
    var _$8K = true;
    if (this._resizeType == EnumResizeType.nResize_x || this._resizeType == EnumResizeType.nResize_y) _$8K = false;
        if (rt.width < 100) rt.width = 100;
        if (rt.height < 100) rt.height = 100;
    if (this._resizeType == EnumResizeType.eResize_x) {
        rt.x = this._frame.x + _$pL.x - this._location.x;
    } else if (this._resizeType == EnumResizeType.nResize_x) {
        rt.y = this._frame.y + _$pL.y - this._location.y;
    } else if (this._resizeType == EnumResizeType.swResize) {
        rt.x = this._frame.x + _$pL.x - this._location.x;
    } else if (this._resizeType == EnumResizeType.nwResize) {
        rt.x = this._frame.x + _$pL.x - this._location.x;
        rt.y = this._frame.y + _$pL.y - this._location.y;
    } else if (this._resizeType == EnumResizeType.neResize) {
        rt.y = this._frame.y + _$pL.y - this._location.y;
    }
    if (this._$kQ != null) {
        this._$kQ._$6p(rt.x, rt.y, rt.width, rt.height);
    } else if (this.m$59 != null) {
        this.m$59.resize(rt.x, rt.y, rt.width, rt.height);
    }
};
WidgetDockPanelAlone.prototype._$f4 = function (pt) {
    this._resizeType = -1;
    var rt = new WidgetDockFrame();
    rt.x = WidgetDockElementController.getElementLeft(this._panelStateElement);
    rt.y = WidgetDockElementController.getElementTop(this._panelStateElement);
    rt.width = parseInt(this._panelStateElement.style.width);
    rt.height = parseInt(this._panelStateElement.style.height);
    if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
            this._resizeType = EnumResizeType.swResize;
        } else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
            this._resizeType = EnumResizeType.nwResize;
        } else {
            this._resizeType = EnumResizeType.eResize_x;
        }
    } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
        if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
            this._resizeType = EnumResizeType.seResize;
        } else if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
            this._resizeType = EnumResizeType.neResize;
        } else {
            this._resizeType = EnumResizeType.eResize_y;
        }
    }
    if ((pt.y >= rt.y) && (pt.y < (rt.y + 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
            this._resizeType = EnumResizeType.nwResize;
        } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
            this._resizeType = EnumResizeType.neResize;
        } else {
            this._resizeType = EnumResizeType.nResize_x;
        }
    } else if ((pt.y <= (rt.y + rt.height)) && (pt.y > (rt.y + rt.height - 7))) {
        if ((pt.x >= rt.x) && (pt.x < (rt.x + 7))) {
            this._resizeType = EnumResizeType.swResize;
        } else if ((pt.x <= (rt.x + rt.width)) && (pt.x > (rt.x + rt.width - 7))) {
            this._resizeType = EnumResizeType.seResize;
        } else {
            this._resizeType = EnumResizeType.nResize_y;
        }
    }
};
