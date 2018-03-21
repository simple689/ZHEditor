function WidgetDockFloatPanelController() {
    this._panelTabNumMax = this._$jk = 10;
    this._panelTabNum = 0;
    this._panelTabList = new Array(this._panelTabNumMax);
};
WidgetDockFloatPanelController.prototype.reset = function () {
    this._panelTabNumMax = this._$jk = 10;
    this._panelTabNum = 0;
    this._panelTabList = new Array(this._panelTabNumMax);
};
WidgetDockFloatPanelController.prototype.addFloatPanel = function (floatPanel) {
    this._panelTabList[this._panelTabNum] = floatPanel;
    this._panelTabNum++;
    if (this._panelTabNum == this._panelTabNumMax) {
        var _$oR = new Array(this._panelTabNum + this._$jk);
        for (var i = 0; i < this._panelTabNum; i++) {
            _$oR[i] = this._panelTabList[i];
        }
        this._panelTabList = _$oR;
        this._panelTabNumMax += this._$jk;
    }
};
WidgetDockFloatPanelController.prototype.deletePanel = function (index) {
    if (this._panelTabNum == 0 || index > (this._panelTabNum - 1)) {
        return;
    }
    for (var i = index; i < this._panelTabNum - 1; i++) {
        this._panelTabList[i] = this._panelTabList[i + 1];
    }
    this._panelTabNum -= 1;
};
WidgetDockFloatPanelController.prototype._$4 = function (floatPanel, secIndex) {
    if (secIndex > this._panelTabNum) {
        return false;
    }
    if (secIndex == this._panelTabNum) {
        this.addFloatPanel(floatPanel);
        return true;
    }
    this._panelTabNum++;
    if (this._panelTabNum == this._panelTabNumMax) {
        for (var i = 0; i < secIndex; i++) {
            _$oR[i] = this._panelTabList[i];
        }
        for (var i = secIndex; i < this._panelTabNum; i++) {
            _$oR[i + 1] = this._panelTabList[i];
        }
        _$oR[secIndex] = floatPanel;
        this._panelTabList = _$oR;
        this._panelTabNumMax += this._$jk;
    } else {
        for (var i = this._panelTabNum - 1; i > secIndex; i--) {
            this._panelTabList[i] = this._panelTabList[i - 1];
        }
        this._panelTabList[secIndex] = floatPanel;
    }
    return true;
};
WidgetDockFloatPanelController.prototype.getPanelNum = function () {
    return this._panelTabNum;
};
