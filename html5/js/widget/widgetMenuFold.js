/**
 * 菜单折叠
 **/
function WidgetMenuFoldController() {
}
WidgetMenuFoldController.prototype.createMenuFold = function (elementParent) {
    this._menuFold = document.createElement("div");
    elementParent.appendChild(this._menuFold);
    this._menuFold.classList.add("widgetMenuFold");
    var dd = this.addFold(this._menuFold, "");
    return dd;
}
WidgetMenuFoldController.prototype.addFold = function (elementParent, foldTitle) {
    var dl = document.createElement("dl");
    elementParent.appendChild(dl);

    var dt = document.createElement("dt");
    dl.appendChild(dt);
    dt._dl = dl;
    dt.onclick = WidgetMenuFoldController.dtOnClick;
    dt.innerHTML = foldTitle;

    var dd = this.addFoldItem(dl);
    return dd;
}
WidgetMenuFoldController.prototype.addFoldItem = function (dl) {
    var dd = document.createElement("dd");
    dl.appendChild(dd);
    dd._dl = dl;
    dd.style.display = "block";
    dd.isCheck = true;
    return dd;
}
WidgetMenuFoldController.dtOnClick = function () {
    var nextNode = this.nextSibling;
    while(nextNode) {
        var tagName = nextNode.tagName;
        if (tagName == "DD") {
            nextNode.isCheck = !nextNode.isCheck;
            //展开和收齐的不同状态下更换小图标
            if (nextNode.isCheck) {
                nextNode.style.display = "block";
                $(this).css(
                    "background-image","url(/html5/img/widget/widgetMenuFold/menuFold_arrowBottom.jpg)"
                );
            } else {
                nextNode.style.display = "none";
                $(this).css(
                    "background-image","url(/html5/img/widget/widgetMenuFold/menuFold_arrowTop.jpg)"
                );
            }
        } else if (tagName == "DT") {
            break;
        }
        nextNode = nextNode.nextSibling;
    }
}
