function WidgetDockLayout() {
    this.content = "";
};
WidgetDockLayout.prototype.addContent = function (str) {
    this.content += str;
    this.content += '\r\n';
};
WidgetDockLayout.prototype.getContent = function () {
    return this.content;
};

function WidgetDockLayoutController(layoutStr) {
    this._layoutList = layoutStr.split("\r\n");
    this._readIndex = 1;
    this._layoutListLen = this._layoutList.length;
    if (this._layoutListLen == 1) {
        this._layoutList = layoutStr.split("\n");
        this._layoutListLen = this._layoutList.length;
    }
};
WidgetDockLayoutController.prototype.read = function () {
    if (this._readIndex < this._layoutListLen) {
        var str = this._layoutList[this._readIndex];
        this._readIndex++;
        return str;
    }
    return null;
};
