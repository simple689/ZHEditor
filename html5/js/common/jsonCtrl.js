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
// JsonObjCtrl._valueTypeList = JSON.parse('{}');
// JsonObjCtrl._valueTypeList[WidgetKey._key] = [WidgetKey._object, WidgetKey._array, WidgetKey._string, WidgetKey._number, WidgetKey._boolean];
// JsonObjCtrl._valueTypeList[WidgetKey._keyShow] = ["对象", "数组", "字符串", "数字", "真假"];

JsonObjCtrl._valueTypeListShow = ["对象", "数组", "字符串", "数字", "真假"];

