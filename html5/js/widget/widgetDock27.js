
function _$4v(_$qZ) {
    this._$hG = _$qZ.split("\r\n");
    this._$jM = 0;
    this._$jV = this._$hG.length;
    if (this._$jV == 1) {
        this._$hG = _$qZ.split("\n");
        this._$jV = this._$hG.length;
    }
};
_$4v.prototype._$qw = function () {
    if (this._$jM < this._$jV) {
        var _$tb = this._$hG[this._$jM];
        this._$jM++;
        return _$tb;
    }
    return null;
};
