function JsonObjCtrl(exec, obj, isListParent, key) {
    this._exec = exec;
    this._obj = obj;
    this._objMd = null;
    this._isListParent = isListParent;

    this._key = key;
    this._keyShow = null;

    this._value = null;
    this._valueList = null;

    this._onClick = null;
    this._onContextMenu = null;
    this._onChange = null;
};
function JsonListItem(key, keyShow) {
    this._key = key;
    this._keyShow = keyShow;
};
function JsonListCtrl(len) {
    this._list = new Array();
    for(var i = 0; i < len; i++){
        this._list.push(new JsonListItem(i,i));
    }
    return this._list;
}
function JsonListCtrlStatic() {
    var list = new Array();
    for(var i = 0; i < arguments.length; i++){
        list.push(arguments[i]);
    }
    return list;
}
JsonListCtrl.prototype.insert = function(item) {
    this._list.push(item);
}
JsonObjCtrl._valueTypeList = JsonListCtrlStatic(
    new JsonListItem(WidgetKey._object,"对象"),
    new JsonListItem(WidgetKey._array,"列表"),
    new JsonListItem(WidgetKey._string,"字符串"),
    new JsonListItem(WidgetKey._number,"数字"),
    new JsonListItem(WidgetKey._boolean,"真假"),
    new JsonListItem(WidgetKey._enum,"枚举"),
    new JsonListItem(WidgetKey._link,"链接"));
