function MenuListItem(title, event, param) {
    this._title = title;
    this._event = event;
    this._param = param;
};
function MenuListCtrlStatic() {
    var list = new Array();
    for(var i = 0; i < arguments.length; i++){
        list.push(arguments[i]);
    }
    return list;
}
function MenuListCtrl(len) {
    this._list = new Array();
    for(var i = 0; i < len; i++){
        this._list.push(new MenuListItem(i,i));
    }
    return this;
}
MenuListCtrl.prototype.getList = function() {
    return this._list;
}
MenuListCtrl.prototype.insertItem = function(item) {
    this._list.push(item);
}
// MenuListCtrl._valueTypeList = MenuListCtrlStatic(
//     new MenuListItem(WidgetKey._object,"对象"),
//     new MenuListItem(WidgetKey._array,"列表"),
//     new MenuListItem(WidgetKey._string,"字符串"),
//     new MenuListItem(WidgetKey._number,"数字"),
//     new MenuListItem(WidgetKey._boolean,"真假"),
//     new MenuListItem(WidgetKey._enum,"枚举"),
//     new MenuListItem(WidgetKey._link,"链接"));
