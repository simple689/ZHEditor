function WidgetDockLayoutWriter() {
    this._layoutStr = "";
};

WidgetDockLayoutWriter.prototype.write = function (str) {
    this._layoutStr += str;
    this._layoutStr += '\r\n';
};
WidgetDockLayoutWriter.prototype.getLayoutStr = function () {
    return this._layoutStr;
};
