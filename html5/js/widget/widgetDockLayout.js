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
