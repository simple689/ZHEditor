function WidgetDockFloatPanelController() {
    this._panelNumMax = this._$jk = 10;
    this._panelNum = 0;
    this._panelList = new Array(this._panelNumMax);
};
WidgetDockFloatPanelController.prototype.reset = function () {
    this._panelNumMax = this._$jk = 10;
    this._panelNum = 0;
    this._panelList = new Array(this._panelNumMax);
};
WidgetDockFloatPanelController.prototype.addFloatPanel = function (floatPanel) {
    this._panelList[this._panelNum] = floatPanel;
    this._panelNum++;
    if (this._panelNum == this._panelNumMax) {
        var _$oR = new Array(this._panelNum + this._$jk);
        var i;
        for (i = 0; i < this._panelNum; i++) {
            _$oR[i] = this._panelList[i];
        }
        this._panelList = _$oR;
        this._panelNumMax += this._$jk;
    }
};
WidgetDockFloatPanelController.prototype.deletePanel = function (index) {
    if (this._panelNum == 0 || index > (this._panelNum - 1)) return;
    var i;
    for (i = index; i < this._panelNum - 1; i++) {
        this._panelList[i] = this._panelList[i + 1];
    }
    this._panelNum -= 1;
};
WidgetDockFloatPanelController.prototype._$4 = function (floatPanel, secIndex) {
    if (secIndex > this._panelNum) return false;
    if (secIndex == this._panelNum) {
        this.addFloatPanel(floatPanel);
        return true;
    }
    this._panelNum++;
    var i;
    if (this._panelNum == this._panelNumMax) {
        var _$oS = new Array(this._panelNum + this._$jk);
        for (i = 0; i < secIndex; i++) {
            _$oR[i] = this._panelList[i];
        }
        for (i = secIndex; i < this._panelNum; i++) _$oR[i + 1] = this._panelList[i];
        _$oR[secIndex] = floatPanel;
        this._panelList = _$oR;
        this._panelNumMax += this._$jk;
    } else {
        for (i = this._panelNum - 1; i > secIndex; i--) this._panelList[i] = this._panelList[i - 1];
        this._panelList[secIndex] = floatPanel;
    }
    return true;
};
WidgetDockFloatPanelController.prototype.getPanelNum = function () {
    return this._panelNum;
};
