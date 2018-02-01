
function _$D() {
    this._$jq = this._$jk = 10;
    this.panelNum = 0;
    this.panelList = new Array(this._$jq);
};
_$D.prototype._$b = function (_$nu) {
    this.panelList[this.panelNum] = _$nu;
    this.panelNum++;
    if (this.panelNum == this._$jq) {
        var _$oR = new Array(this.panelNum + this._$jk);
        var i;
        for (i = 0; i < this.panelNum; i++) _$oR[i] = this.panelList[i];
        this.panelList = _$oR;
        this._$jq += this._$jk;
    }
};
_$D.prototype._$5G = function (_$cN) {
    if (this.panelNum == 0 || _$cN > (this.panelNum - 1)) return;
    var i;
    for (i = _$cN; i < this.panelNum - 1; i++) {
        this.panelList[i] = this.panelList[i + 1];
    }
    this.panelNum -= 1;
};
_$D.prototype._$4 = function (_$nu, _$cN) {
    if (_$cN > this.panelNum) return false;
    if (_$cN == this.panelNum) {
        this._$b(_$nu);
        return true;
    }
    this.panelNum++;
    var i;
    if (this.panelNum == this._$jq) {
        var _$oS = new Array(this.panelNum + this._$jk);
        for (i = 0; i < _$cN; i++) {
            _$oR[i] = this.panelList[i];
        }
        for (i = _$cN; i < this.panelNum; i++) _$oR[i + 1] = this.panelList[i];
        _$oR[_$cN] = _$nu;
        this.panelList = _$oR;
        this._$jq += this._$jk;
    } else {
        for (i = this.panelNum - 1; i > _$cN; i--) this.panelList[i] = this.panelList[i - 1];
        this.panelList[_$cN] = _$nu;
    }
    return true;
};
_$D.prototype.getPanelNum = function () {
    return this.panelNum;
};
_$D.prototype._$5R = function () {
    this._$jq = this._$jk = 10;
    this.panelNum = 0;
    this.panelList = new Array(this._$jq);
};
