function WidgetDockPatternMain(isMain) {
    WidgetDockPatternMain.baseConstructor.call(this, isMain);
    this._$is = true;
};
WidgetDockPrototype.bind(WidgetDockPatternMain, WidgetDockPatternBase);
WidgetDockPatternMain.prototype.add = function (com) {
    if (com instanceof WidgetDockFloatPanel) {
        com.setElementZIndex(2);
    } else {
        com.setElementZIndex(3);
    }
};
WidgetDockPatternMain.prototype._$d = function (com) {
    if (com instanceof WidgetDockFloatPanel) {
        com.setElementZIndex(2);
    } else {
        com.setElementZIndex(3);
    }
};
WidgetDockPatternMain.prototype._$5E = function (com) {
};
