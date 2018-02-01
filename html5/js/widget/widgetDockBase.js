function Align() {
    this.x = 0;
    this.y = 0;
};

function Rect() {
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
};
Rect.prototype.setRect = function (_rect) {
    this.left = _rect.left;
    this.top = _rect.top;
    this.right = _rect.right;
    this.bottom = _rect.bottom;
};

function _$5Y() {
    this.cx = 0;
    this.cy = 0;
};

function Size() {
    this.width = 0;
    this.height = 0;
};

function AlignSize() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
};
