function WidgetDockListController() {
    this.reset();
};
WidgetDockListController.prototype.reset = function () {
    this._sizeMax = this._sizeBase = 10;
    this._size = 0;
    this._list = new Array(this._sizeMax);
};
WidgetDockListController.prototype.add = function (value) {
    this._list[this._size] = value;
    this._size++;
    if (this._size == this._sizeMax) {
        var listTmp = new Array(this._size + this._sizeBase);
        for (var i = 0; i < this._size; i++) {
            listTmp[i] = this._list[i];
        }
        this._list = listTmp;
        this._sizeMax += this._sizeBase;
    }
};
WidgetDockListController.prototype.delete = function (index) {
    if (this._size == 0 || index > (this._size - 1)) {
        return;
    }
    for (var i = index; i < this._size - 1; i++) {
        this._list[i] = this._list[i + 1];
    }
    this._size -= 1;
};
WidgetDockListController.prototype.insert = function (value, index) {
    if (index > this._size) {
        return false;
    }
    if (index == this._size) {
        this.add(value);
        return true;
    }
    this._size++;
    if (this._size == this._sizeMax) {
        var listTmp = new Array(this._size + this._sizeBase);
        for (var i = 0; i < index; i++) {
            listTmp[i] = this._list[i];
        }
        for (var i = index; i < this._size; i++) {
            listTmp[i + 1] = this._list[i];
        }
        listTmp[index] = value;
        this._list = listTmp;
        this._sizeMax += this._sizeBase;
    } else {
        for (var i = this._size - 1; i > index; i--) {
            this._list[i] = this._list[i - 1];
        }
        this._list[index] = value;
    }
    return true;
};
WidgetDockListController.prototype.getSize = function () {
    return this._size;
};
