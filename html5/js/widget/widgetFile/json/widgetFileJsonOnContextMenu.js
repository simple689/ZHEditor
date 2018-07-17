WidgetFileJson.prototype.onContextMenuRoot = function (menu, ul) {
}
WidgetFileJson.prototype.onContextMenuObject = function (menu, ul) {
}
WidgetFileJson.prototype.onContextMenuList = function (menu, ul) {
}
WidgetFileJson.prototype.onContextMenuLabel = function (menu, ul) {
    var li = menu.addLi(ul, "编辑显示Key", null, null);
    li = menu.addLi(ul, "下一个键值对不换行", null, null);
}
WidgetFileJson.prototype.onContextMenuInput = function (menu, ul) {
    var li = menu.addLi(ul, "原始Key:", null, null);
    li = menu.addLi(ul, "复制原始Key", null, null);
    li = menu.addLi(ul, "编辑显示Key", null, null);
    li = menu.addLi(ul, "值类型", null, null);

    var ul_0 = menu.addUl(li);
    li = menu.addLi(ul_0, "字符串", null, null);
    li = menu.addLi(ul_0, "数字", null, null);
    var ul_0_0 = menu.addUl(li);
    li = menu.addLi(ul_0_0, "整数", null, null);
    li = menu.addLi(ul_0_0, "小数", null, null);

    li = menu.addLi(ul_0, "按钮", null, null);
    li = menu.addLi(ul_0, "真假", null, null);
    li = menu.addLi(ul_0, "单选", null, null);
    li = menu.addLi(ul_0, "文件", null, null);
    li = menu.addLi(ul_0, "颜色", null, null);
}
WidgetFileJson.prototype.onContextMenuSelect = function (menu, ul) {
}
