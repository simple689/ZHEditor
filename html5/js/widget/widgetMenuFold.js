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
    dt.innerHTML = foldTitle;

    var dd = this.addFoldItem(dt);
    return dd;
}
WidgetMenuFoldController.prototype.addFoldItem = function (elementParent) {
    var dd = document.createElement("dd");
    elementParent.appendChild(dd);
    return dd;
}
