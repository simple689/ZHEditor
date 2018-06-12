function WidgetFlexCtrl() {
}

WidgetFlexCtrl.prototype.createFlex = function (elementParent) {
    this._flexContainer = document.createElement("div");
    elementParent.appendChild(this._flexContainer);
    this._flexContainer.classList.add("widgetFlexContainer");

    this._flexItemList = new Array();
}
WidgetFlexCtrl.prototype.setFlexDirection = function (flexDirection) {
    this._flexContainer.style.flexDirection = flexDirection;
}
WidgetFlexCtrl.prototype.setFlexWrap = function (flexWrap) {
    this._flexContainer.style.flexWrap = flexWrap;
}
WidgetFlexCtrl.prototype.setFlexJustifyContent = function (flexJustifyContent) {
    this._flexContainer.style.justifyContent = flexJustifyContent;
}
WidgetFlexCtrl.prototype.setFlexAlignItems = function (flexAlignItems) {
    this._flexContainer.style.alignItems = flexAlignItems;
}
WidgetFlexCtrl.prototype.setFlexAlignContent = function (flexAlignContent) {
    this._flexContainer.style.alignContent = flexAlignContent;
}
WidgetFlexCtrl.prototype.addFlexItem = function (element) {
    var flexItem = document.createElement("div");
    this._flexContainer.appendChild(flexItem);
    flexItem.classList.add("widgetFlexItem");
    this.setItemFlexOrder(flexItem, this._flexItemList.length);
    this._flexItemList.push(flexItem);
    if (element) {
        flexItem.appendChild(element);
    }
    return flexItem;
}
WidgetFlexCtrl.prototype.setItemFlexOrder = function (flexItem, flexOrder) {
    flexItem.style.order = flexOrder;
    // flexItem.style.flex = flexOrder;
}
WidgetFlexCtrl.prototype.setItemFlexGrow = function (flexItem, flexGrow) {
    flexItem.style.flexGrow = flexGrow;
}
WidgetFlexCtrl.prototype.setItemFlexShrink = function (flexItem, flexShrink) {
    flexItem.style.flexShrink = flexShrink;
}
WidgetFlexCtrl.prototype.setItemFlexAlignSelf = function (flexItem, itemFlexAlignSelf) {
    flexItem.style.alignSelf = itemFlexAlignSelf;
}
WidgetFlexCtrl.prototype.clearFlexItem = function () {
    var len = this._flexContainer.childNodes.length;
    for (var i = 0; i < len; i++) {
        this._flexContainer.removeChild(this._flexContainer.childNodes[0]);
    }
    this._flexItemList.splice(0, this._flexItemList.length);
}
WidgetFlexCtrl.onClickDt = function () {
    var nextNode = this.nextSibling;
    while (nextNode) {
        var tagName = nextNode.tagName;
        if (tagName == "DD") {
            nextNode.isCheck = !nextNode.isCheck;
            //展开和收齐的不同状态下更换小图标
            if (nextNode.isCheck) {
                nextNode.style.display = "block";
                $(this).css(
                    "background-image", "url(/html5/img/widget/widgetMenuFold/menuFold_arrowBottom.jpg)"
                );
            } else {
                nextNode.style.display = "none";
                $(this).css(
                    "background-image", "url(/html5/img/widget/widgetMenuFold/menuFold_arrowTop.jpg)"
                );
            }
        } else if (tagName == "DT") {
            break;
        }
        nextNode = nextNode.nextSibling;
    }
}
