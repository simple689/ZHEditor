/**
 * 菜单折叠
 **/
function WidgetMenuFold() {
}

WidgetMenuFold.prototype.createMenuFold = function (elementParent, jsonObjCtrl, isCheck) {
    this._menuFold = WidgetHtml.createElement("div");
    elementParent.appendChild(this._menuFold);
    WidgetHtml.classAdd(this._menuFold, "widgetMenuFold");
    var dd = this.addFoldAndItem(this._menuFold, jsonObjCtrl, isCheck);
    return dd;
}
WidgetMenuFold.prototype.addFoldAndItem = function (elementParent, jsonObjCtrl, isCheck) {
    var dt = this.addFold(elementParent, jsonObjCtrl);
    var dd = this.addFoldItem(dt, isCheck);
    return dd;
}
WidgetMenuFold.prototype.addFold = function (elementParent, jsonObjCtrl) {
    var dl = WidgetHtml.createElement("dl");
    elementParent.appendChild(dl);

    var dt = WidgetHtml.createElement("dt");
    dl.appendChild(dt);
    dt._dl = dl;

    var jsonObjCtrlSub = new JsonObjCtrl(jsonObjCtrl._exec, null, false, "");
    jsonObjCtrlSub._keyShow = jsonObjCtrl._keyShow;
    jsonObjCtrlSub._value = jsonObjCtrl._value;
    jsonObjCtrlSub._obj = jsonObjCtrl._obj;
    jsonObjCtrlSub._onClick = WidgetMenuFold.onClickDt;
    jsonObjCtrlSub._onContextMenu = jsonObjCtrl._onContextMenu;
    var label = WidgetHtml.addLabel(dt, jsonObjCtrlSub);
    WidgetHtml.classAdd(label, "widgetMenuFoldLabel");
    label._dt = dt;

    dt._div = WidgetHtml.addDiv(dt);
    dt._label = label;
    return dt;
}
WidgetMenuFold.prototype.addFoldItem = function (dt, isCheck) {
    var dd = WidgetHtml.createElement("dd");
    dt._dl.appendChild(dd);
    dd._dt = dt;
    dd._isCheck = isCheck;
    WidgetMenuFold.setDdCheck(dd, dt._label, isCheck);
    return dd;
}
WidgetMenuFold.setDdCheck = function (elementDd, elementLabel, isCheck) {
    var tagName = elementDd.tagName;
    if (tagName == "DD") {
        var label = elementLabel;
        if (!label) {
            label = elementDd._dt._label;
        }
        var exec = label._jsonObjCtrl._exec;
        var path = label._jsonObjCtrl._obj["path"];
        exec._jsonStateMenuFold[path] = isCheck;
        WidgetHistory.setFileBrowser(WidgetFileBrowser._jsonStore, WidgetFileBrowser._jsonPersonal, exec._widgetID, exec._jsonStateMenuFold, exec._jsonStateFlex);

        WidgetMenuFold.setDdDisplay(elementDd, label, isCheck);
    }
}
WidgetMenuFold.setDdDisplay = function (dd, label, isCheck) {
    //展开和收齐的不同状态下更换小图标
    if (isCheck) {
        dd.style.display = WidgetKey._block;
        $(label).css(
            "background-image", "url(/html5/img/widget/widgetMenuFold/menuFold_arrowBottom.jpg)"
        );
    } else {
        dd.style.display = WidgetKey._none;
        $(label).css(
            "background-image", "url(/html5/img/widget/widgetMenuFold/menuFold_arrowTop.jpg)"
        );
    }
}
WidgetMenuFold.onClickDt = function (e) {
    // // 与触发事件的对象相关的鼠标位置的XY坐标;
    // var x = e.x;
    // var y = e.y;
    // // 获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算位置。
    // var offsetTop = e.offsetTop;
    // var offsetLeft = e.offsetLeft;
    // var offsetHeight = e.offsetHeight;
    // var offsetWidth = e.offsetWidth;
    // // 获取定义对象 offsetTop 和 offsetLeft 属性的容器对象的引用。
    // var offsetParent = e.offsetParent;
    // // 获取对象的高度，不计算任何边距、边框、滚动条或可能应用到该对象的补白。
    // var clientHeight = e.clientHeight;
    // var clientWidth = e.clientWidth;
    // // 获取 offsetLeft 属性和客户区域的实际左边之间的距离。
    // var clientLeft = e.clientLeft;
    // var clientTop = e.clientTop;
    // // 设置或获取获取鼠标指针位置相对于用户屏幕的 x 坐标
    // var screenX = e.screenX;
    // // 设置或获取鼠标指针位置相对于触发事件的对象的 x 坐标。
    // var offsetX = e.offsetX;
    // var offsetY = e.offsetY;
    // // 设置或获取鼠标指针位置相对于窗口客户区域的 x 坐标，其中客户区域不包括窗口自身的控件和滚动条
    // var clientX = e.clientX;

    if (!e) {
        return;
    }
    var nextNode = this._dt.nextSibling;
    while (nextNode) {
        var tagName = nextNode.tagName;
        if (tagName == "DD") {
            nextNode._isCheck = !nextNode._isCheck;
            WidgetMenuFold.setDdCheck(nextNode, this, nextNode._isCheck);
        } else if (tagName == "DT") {
            break;
        }
        nextNode = nextNode.nextSibling;
    }
}
