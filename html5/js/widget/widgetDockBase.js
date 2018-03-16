function _$M() {
    this._$o2 = null;
    this._$kI = null;
    this._$eF = -1;
    this._$fB = -1;
    this._widthSec = 0;
    this._heightSec = 0;
    this._$g6 = 0;
};
function WidgetDockLocation() {
    this.x = 0;
    this.y = 0;
};
function WidgetDockSize() {
    this.width = 0;
    this.height = 0;
};
function WidgetDockFrame() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
};
function WidgetDockRect() {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
};
WidgetDockRect.prototype.setRect = function (rc) {
    this.left = rc.left;
    this.top = rc.top;
    this.right = rc.right;
    this.bottom = rc.bottom;
};
function _$5Y() {
    this.cx = 0;
    this.cy = 0;
};

WidgetDockPrototype = {};
WidgetDockPrototype.bind = function (dst, src) {
    function WidgetDockPrototypeConvert() {
    }
    WidgetDockPrototypeConvert.prototype = src.prototype;
    dst.prototype = new WidgetDockPrototypeConvert();
    dst.baseConstructor = src;
    dst._$s4 = src.prototype;
};

var EnumBrowserType = {
    IE: 0,
    Firefox: 1,
    Chrome: 2,
    Safari: 3,
    Opera: 4
};
var EnumPatternPositionType = {
    Left: 0,
    Top: 1,
    Right: 2,
    Bottom: 3,
    Center: 4
};

var EnumPinType = {
    None: 0,
    Show: 1,
    Hide: 2,
};
