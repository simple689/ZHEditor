function WidgetFileMenu() {
}

WidgetFileMenu.createMenu = function() {
    var menu = new WidgetMenu();
    menu.createMenu(document.body);
    return menu;
}
WidgetFileMenu.onMenu = function (e) {
    // console.log(this);
    var jsonObjCtrl = WidgetFileUtil.getJsonObjCtrl(this);
    var type = jsonObjCtrl._type;
    if (type == WidgetKey._none) {
        return false;
    }

    var menu = WidgetFileMenu.createMenu();
    var ul = menu.addUl(menu._elementParent);
    var li = null;
    if (type == WidgetKey._array) {
        li = menu.addLi(ul, "添加列表成员", WidgetFileOnClick.onClickListToolAdd, jsonObjCtrl);
        li = menu.addLi(ul, "清空列表成员", WidgetFileOnClick.onClickListToolClear, jsonObjCtrl);
    } else if (type == WidgetKey._arrayItem) {
        li = menu.addLi(ul, "删除该成员", WidgetFileOnClick.onClickListToolDel, jsonObjCtrl);
    } else {
        li = menu.addLi(ul, "复制Key：", WidgetFileOnClick.onClickListToolDel, jsonObjCtrl);

        if (type == WidgetKey._string) {

        } else if (type == WidgetKey._number) {

        } else if (type == WidgetKey._boolean) {

        }
    }

    var func = WidgetFileUtil.getExec(this).constructor.onMenu;
    if (func) func(menu, ul);
    WidgetMenu.showMenu(menu, e, this);
    return false; // 取消右键点击的默认事件
}
// li = menu.addLi(ul, "刷新", WidgetFileOnClick.onClickRefresh, null);
// li = menu.addLi(ul, "保存", WidgetFileOnClick.onClickSave, null);
// li = menu.addLi(ul, "另存为", WidgetFileOnClick.onClickSaveAs, null);
// li = menu.addLi(ul, "下载", WidgetFileOnClick.onClickDownLoad, null);
//
// li = menu.addLi(ul, "编辑显示Key", null, null);
// li = menu.addLi(ul, "值类型", null, null);
//
// var ul_0 = menu.addUl(li);
// li = menu.addLi(ul_0, "字符串", null, null);
// li = menu.addLi(ul_0, "数字", null, null);
// var ul_0_0 = menu.addUl(li);
// li = menu.addLi(ul_0_0, "整数", null, null);
// li = menu.addLi(ul_0_0, "小数", null, null);
//
// li = menu.addLi(ul_0, "按钮", null, null);
// li = menu.addLi(ul_0, "真假", null, null);
// li = menu.addLi(ul_0, "单选", null, null);
// li = menu.addLi(ul_0, "文件", null, null);
// li = menu.addLi(ul_0, "颜色", null, null);
