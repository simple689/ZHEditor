function _$6C(type, floatPanel) {
    this._$kd = type;
    this._$ik = false;
    this._$hj = null;
    this._$ig = false;
    this._panelStateElement = WidgetDockElementController.createElementWithParentId("div", WidgetDockController._elementRootId);
    this._panelStateElement.style.border = "1px solid";
    WidgetDockElementController.setElementZIndex(this._panelStateElement, floatPanel._window._$jO);
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
_$6C.prototype._$r8 = function (left, top, width, height) {
    WidgetDockElementController.setElementLeftTop(this._panelStateElement, left, top);
    WidgetDockElementController.setElementSize(this._panelStateElement, width, height);
    this.refresh();
};
_$6C.prototype.refresh = function () {
    var width = WidgetDockElementController.getElementWidth(this._panelStateElement);
    var height = WidgetDockElementController.getElementHeight(this._panelStateElement);
    if (this._$hj == null) return;
    if (this._$ik) {
        this._$hj._$s1 = "#0000ff";
    } else {
        this._$hj._$s1 = "#000000";
    }
    if (this._$kd == 0) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, 0, height, this._$hj);
            WidgetDockElementController._$1n(0, 0, width, 0, this._$hj);
            WidgetDockElementController._$1n(0, height - 1, width, height - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, 0, height, this._$hj);
            WidgetDockElementController._$1q(0, 0, width, 0, this._$hj);
            WidgetDockElementController._$1q(0, height - 1, width, height - 1, this._$hj);
        }
    } else if (this._$kd == 1) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, width, 0, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, width, 0, this._$hj);
        }
    } else if (this._$kd == 2) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, 0, width, 0, this._$hj);
            WidgetDockElementController._$1n(0, height - 1, width, height - 1, this._$hj);
            WidgetDockElementController._$1n(width - 1, 0, width - 1, height, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, 0, width, 0, this._$hj);
            WidgetDockElementController._$1q(0, height - 1, width, height - 1, this._$hj);
            WidgetDockElementController._$1q(width - 1, 0, width - 1, height, this._$hj);
        }
    } else if (this._$kd == 3) {
        if (this._$ig) {
            WidgetDockElementController._$1n(0, height - 1, width, height - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(0, height - 1, width, height - 1, this._$hj);
        }
    } else if (this._$kd == 4) {
        if (this._$ig) {
            WidgetDockElementController._$1q(0, width, 0, height - 1, this._$hj);
        } else {
            WidgetDockElementController._$1n(0, width, 0, height - 1, this._$hj);
        }
    } else if (this._$kd == 5) {
        if (this._$ig) {
            WidgetDockElementController._$1n(width - 1, width, width - 1, height - 1, this._$hj);
        } else {
            WidgetDockElementController._$1q(width - 1, width, width - 1, height - 1, this._$hj);
        }
    }
};
