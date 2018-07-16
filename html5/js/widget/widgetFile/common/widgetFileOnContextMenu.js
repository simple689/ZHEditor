function WidgetFileOnContextMenu() {
}

WidgetFileOnContextMenu.createMenu = function() {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    return menu;
}
WidgetFileOnContextMenu.onContextMenuRoot = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    li = menu.addLi(ul, "刷新", WidgetFileOnClick.onClickRefresh);
    li = menu.addLi(ul, "保存", WidgetFileOnClick.onClickSave);
    li = menu.addLi(ul, "另存为", WidgetFileOnClick.onClickSaveAs);
    li = menu.addLi(ul, "下载", WidgetFileOnClick.onClickDownLoad);
    var func = WidgetFileUtil.getExec(this).onContextMenuRoot;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuObject = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._key == WidgetKey._ignore) {
        li = menu.addLi(ul, "暂无功能", null);
    } else if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "添加对象", WidgetFileOnClick.onClickObjectAdd);
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileOnClick.onClickListDel);
    } else {
        li = menu.addLi(ul, "重命名Key", WidgetFileOnClick.onClickRenameKey);
        li = menu.addLi(ul, "添加对象", WidgetFileOnClick.onClickObjectAdd);
        li = menu.addLi(ul, "删除对象", WidgetFileOnClick.onClickObjectDel);
    }
    var func = WidgetFileUtil.getExec(this).onContextMenuObject;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuList = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    li = menu.addLi(ul, "列表中添加对象", WidgetFileOnClick.onClickListAdd);
    li = menu.addLi(ul, "列表中清空对象", WidgetFileOnClick.onClickListClear);
    var func = WidgetFileUtil.getExec(this).onContextMenuList;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuLabel = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileOnClick.onClickListDel);
    }
    var func = WidgetFileUtil.getExec(this).onContextMenuLabel;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuInput = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileOnClick.onClickListDel);
    }
    var func = WidgetFileUtil.getExec(this).onContextMenuInput;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuSelect = function (e) {
    var menu = WidgetFileOnContextMenu.createMenu();
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    var func = WidgetFileUtil.getExec(this).onContextMenuSelect;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
