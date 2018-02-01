function widgetDockLayout() {
    this.content = "";
};
widgetDockLayout.prototype.addContent = function (_content) {
    this.content += _content;
    this.content += '\r\n';
};
widgetDockLayout.prototype.getContent = function () {
    return this.content;
};
