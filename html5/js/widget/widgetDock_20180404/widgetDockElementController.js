WidgetDockElementController = {};
WidgetDockElementController.zIndex = 2;
WidgetDockElementController.createElementWithParentId = function (elementType, elementParentId) {
    return this.createElementWithParent(elementType, document.getElementById(elementParentId));
};
WidgetDockElementController.createElementWithParent = function (elementType, elementParent) {
    var element = document.createElement(elementType);
    elementParent.appendChild(element);
    element.style.position = "absolute";
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = 0;
        element.style.top = 0;
    } else {
        element.style.pixelLeft = 0;
        element.style.pixelTop = 0;
    }
    element.width = 200;
    element.height = 200;
    element.style.visibility = "visible";
    element.style.zIndex = WidgetDockElementController.zIndex;
    WidgetDockElementController.zIndex++;
    return element;
};
WidgetDockElementController.setElementZIndex = function (element, zIndex) {
    element.style.zIndex = zIndex;
};
WidgetDockElementController.setElementZIndexWithController = function (element) {
    element.style.zIndex = WidgetDockElementController.zIndex;
    WidgetDockElementController.zIndex++;
};
WidgetDockElementController.setElementVisible = function (element, isVisible) {
    if (element == null) return;
    if (isVisible) {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
};
WidgetDockElementController.removeChildWithElementId = function (elementId, elementChild) {
    var element = document.getElementById(elementId);
    if (element == null) return;
    element.removeChild(elementChild);
};
WidgetDockElementController.getElementLeft = function (element) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        return parseInt(element.style.left);
    }
    return element.style.pixelLeft;
};
WidgetDockElementController.getElementTop = function (element) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        return parseInt(element.style.top);
    }
    return element.style.pixelTop;
};
WidgetDockElementController.getElementWidth = function (element) {
    return parseInt(element.style.width);
};
WidgetDockElementController.getElementHeight = function (element) {
    return parseInt(element.style.height);
};
WidgetDockElementController.setElementLeftTop = function (element, left, top) {
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = left + "px";
        element.style.top = top + "px";
    } else {
        element.style.pixelLeft = left;
        element.style.pixelTop = top;
    }
};
WidgetDockElementController.setElementSize = function (element, width, height) {
    if (isNaN(height)) return;
    element.style.width = width + "px";
    element.style.height = height + "px";
};
WidgetDockElementController.setElementLeftTopSize = function (element, left, top, width, height) {
    if (isNaN(height)) return;
    if (WidgetDockController._browserType == EnumBrowserType.Firefox || WidgetDockController._browserType == EnumBrowserType.Chrome) {
        element.style.left = left + "px";
        element.style.top = top + "px";
    } else {
        element.style.pixelLeft = left;
        element.style.pixelTop = top;
    }
    element.style.width = width + "px";
    element.style.height = height + "px";
};
WidgetDockElementController.getOffsetHeightWithFontStyle = function (fontStyle) {
    var body = document.getElementsByTagName("body")[0];
    var elementDiv = document.createElement("div");
    var textNode = document.createTextNode("Mj");
    elementDiv.appendChild(textNode);
    elementDiv.setAttribute("style", fontStyle);
    body.appendChild(elementDiv);
    var offsetHeight = elementDiv.offsetHeight;
    body.removeChild(elementDiv);
    return offsetHeight;
};
;WidgetDockElementController.getOffsetWidthWithFontStyle = function (fontStyle, title) {
    var body = document.getElementsByTagName("body")[0];
    var elementSpan = document.createElement("span");
    var textNode = document.createTextNode(title);
    elementSpan.appendChild(textNode);
    elementSpan.setAttribute("style", fontStyle);
    body.appendChild(elementSpan);
    var offsetWidth = elementSpan.offsetWidth;
    body.removeChild(elementSpan);
    return offsetWidth;
};
;WidgetDockElementController.getOffsetSize = function (size, ft, title, element) {
    var fontStyleStr = "font: " + ft + ";";
    if (element == null) {
        size.height = WidgetDockElementController.getOffsetHeightWithFontStyle(fontStyleStr);
        size.width = WidgetDockElementController.getOffsetWidthWithFontStyle(fontStyleStr, title);
    } else {
        element.font = ft;
        size.height = WidgetDockElementController.getOffsetHeightWithFontStyle(fontStyleStr);
        var _$sr = element.measureText(title);
        size.width = _$sr.width;
    }
};
WidgetDockElementController._$1q = function (left, top, width, height, element) {
    element.beginPath();
    element.moveTo(left, top);
    element.lineTo(width, height);
    element.lineWidth = 1;
    element.closePath();
    element.stroke();
};
WidgetDockElementController._$1n = function (left, top, width, height, element) {
    element.beginPath();
    var _$ta = 2;
    var _$t3 = 5;
    var vno;
    if (left == width) {
        vno = (height - top) / (_$ta + _$t3);
        if (vno < 0) {
            vno = -vno;
            var _$tm = top;
            top = height;
            height = _$tm;
        }
        for (var i = 0; i < vno; i++) {
            element.moveTo(left, top + i * (_$ta + _$t3));
            element.lineTo(width, top + i * (_$ta + _$t3) + _$t3);
        }
    } else {
        vno = (width - left) / (_$ta + _$t3);
        if (vno < 0) {
            vno = -vno;
            var _$tm = left;
            left = width;
            width = _$tm;
        }
        for (var i = 0; i < vno; i++) {
            element.moveTo(left + i * (_$ta + _$t3), top);
            element.lineTo(left + i * (_$ta + _$t3) + _$t3, height);
        }
    }
    element.lineWidth = 1;
    element.closePath();
    element.stroke();
};
WidgetDockElementController.getMousePoint = function (e, pt) {
    pt.x = e.clientX;
    pt.y = e.clientY;
    pt.x = parseInt(pt.x);
    pt.y = parseInt(pt.y);
};
