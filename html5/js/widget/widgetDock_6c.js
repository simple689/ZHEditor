function _$6C(type, _$b8) {
    this._$kd = type;
    this._$ik = false;
    this._$hj = null;
    this._$ig = false;

        this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);
        this._panelStateElement.style.border = "1px solid";

    WidgetDockElementController.setElementZIndex(this._panelStateElement, _$b8._windowMain._$jO);
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
    this.refresh();
};
_$6C.prototype._$r8 = function (_$cS, _$do, width, height) {
    WidgetDockElementController.setElementLeftTop(this._panelStateElement, _$cS, _$do);
    WidgetDockElementController.setElementSize(this._panelStateElement, width, height);
    this.refresh();
};
_$6C.prototype._$sL = function () {
};
_$6C.prototype.refresh = function () {
    var iw, ih;
    iw = WidgetDockElementController.getElementWidth(this._panelStateElement);
    ih = WidgetDockElementController.getElementHeight(this._panelStateElement);
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
