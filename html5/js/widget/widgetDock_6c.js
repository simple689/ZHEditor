
function _$6C(type, _$b8) {
    this._$kd = type;
    this._$ik = false;
    this._$hj = null;
    this._$ig = false;
    if (WidgetDockController._isHasCanvasContext) {
        this._$h8 = WidgetDockElementController.createElementWithParent("canvas", WidgetDockController._elementRootId);
        this._$hj = this._$h8.getContext("2d");
        this._$h8.style.border = "0px solid";
    } else {
        this._$h8 = WidgetDockElementController.createElementWithParent("div", WidgetDockController._elementRootId);
        this._$h8.style.border = "1px solid";
    }
    WidgetDockElementController.setElementZIndex(this._$h8, _$b8._windowMain._$jO);
};
_$6C.prototype._$ri = function (_$7S, _$7K) {
    this._$ik = _$7S;
    if (_$7S) {
        this._$ig = false;
    } else {
        if (_$7K) {
            this._$ig = false;
        } else {
            this._$ig = true;
        }
    }
    this._$qJ();
};
_$6C.prototype._$r8 = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._$h8, _$cS, _$do);
    WidgetDockElementController.setElementSize(this._$h8, width, height);
    this._$qJ();
};
_$6C.prototype._$sL = function () {
};
_$6C.prototype._$qJ = function () {
    var iw, ih;
    iw = WidgetDockElementController.getElementWidth(this._$h8);
    ih = WidgetDockElementController.getElementHeight(this._$h8);
    if (this._$hj == null) return;
    if (this._$ik) {
        this._$hj._$s1 = "#0000ff";
    } else {
        this._$hj._$s1 = "#000000";
    }
    if (this._$kd == 0) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, 0, ih, this._$hj);
            WidgetDockElementController._$1n(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1n(0, ih - 1, iw, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, 0, ih, this._$hj);
            WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        }
    } else if (this._$kd == 1) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, iw, 0, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
        }
    } else if (this._$kd == 2) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1n(0, ih - 1, iw, ih - 1, this._$hj);
            WidgetDockElementController._$1n(iw - 1, 0, iw - 1, ih, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, iw, 0, this._$hj);
            WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
            WidgetDockElementController._$1q(iw - 1, 0, iw - 1, ih, this._$hj);
        }
    } else if (this._$kd == 3) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, ih - 1, iw, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, ih - 1, iw, ih - 1, this._$hj);
        }
    } else if (this._$kd == 4) {
        if (this._$ig) {
            WidgetDockElementController._$1q(0, iw, 0, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1n(0, iw, 0, ih - 1, this._$hj);
        }
    } else if (this._$kd == 5) {
        if (this._$ig) {
            WidgetDockElementController._$1n(iw - 1, iw, iw - 1, ih - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(iw - 1, iw, iw - 1, ih - 1, this._$hj);
        }
    }
};


