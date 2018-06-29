function JsonObjCtrl(exec, obj, isArrayParent, key) {
    this._exec = exec;
    this._obj = obj;
    this._isArrayParent = isArrayParent;

    this._key = key;
    this._keyShow = null;

    this._value = null;

    this._valueList = null;
    this._selectIndex = null;

    this._onClick = null;
    this._onContextMenu = null;
    this._onChange = null;
};
function SelectItem(key, keyShow) {
    this._key = key;
    this._keyShow = keyShow;
};
function JsonSelectList() {
    var list = new Array();
    for(var i = 0; i < arguments.length; i++){
        list.push(arguments[i]);
    }
    return list;
}
JsonObjCtrl._valueTypeList = JsonSelectList(
    new SelectItem(WidgetKey._object,"对象"),
    new SelectItem(WidgetKey._array,"数组"),
    new SelectItem(WidgetKey._string,"字符串"),
    new SelectItem(WidgetKey._number,"数字"),
    new SelectItem(WidgetKey._boolean,"真假"));
