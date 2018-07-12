function WidgetFileOnContextMenu() {
}

WidgetFileOnContextMenu.onContextMenuRoot = function (e) {
    var jsonObjCtrl = this._jsonObjCtrl;

    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "刷新", WidgetFileOnClick.onClickRefresh);
    li = menu.addLi(ul, "保存", WidgetFileOnClick.onClickSave);
    li = menu.addLi(ul, "另存为", WidgetFileOnClick.onClickSaveAs);
    li = menu.addLi(ul, "下载", WidgetFileOnClick.onClickDownLoad);

    jsonObjCtrl._exec.onContextMenuRoot(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuObject = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._key == WidgetKey._ignore) {
        li = menu.addLi(ul, "暂无功能", null);
    } else if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "添加对象", WidgetFileJsonMould.onClickAddObject);
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileJsonMould.onClickListDel);
    } else {
        li = menu.addLi(ul, "重命名Key", WidgetFileJsonMould.onClickRenameKey);
        li = menu.addLi(ul, "添加对象", WidgetFileJsonMould.onClickAddObject);
        li = menu.addLi(ul, "删除对象", WidgetFileJsonMould.onClickDelObject);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuList = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = menu.addLi(ul, "列表中添加对象", WidgetFileJsonMould.onClickListAdd);
    li = menu.addLi(ul, "列表中清空对象", WidgetFileJsonMould.onClickListClear);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuLabel = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileJsonMould.onClickListDel);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuInput = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    if (this._jsonObjCtrl._isListParent) {
        li = menu.addLi(ul, "列表中删除此对象", WidgetFileJsonMould.onClickListDel);
    }
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
WidgetFileOnContextMenu.onContextMenuSelect = function (e) {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    var ul = menu.addUl(menu._elementRoot);
    var li = null;
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
