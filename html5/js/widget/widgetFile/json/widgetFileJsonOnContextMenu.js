WidgetFileJson.prototype.onContextMenuRoot = function (menu, ul) {
}
WidgetFileJson.prototype.onContextMenuObject = function (menu, ul) {
}
WidgetFileJson.prototype.onContextMenuList = function (menu, ul) {
}
WidgetFileJson.prototype.onContextMenuLabel = function (menu, ul) {
    var li = menu.addLi(ul, "编辑显示Key", null);
    li = menu.addLi(ul, "下一个键值对不换行", null);
}
WidgetFileJson.prototype.onContextMenuInput = function (menu, ul) {
    var li = menu.addLi(ul, "原始Key:", null);
    li = menu.addLi(ul, "复制原始Key", null);
    li = menu.addLi(ul, "编辑显示Key", null);
    li = menu.addLi(ul, "值类型", null);

    var ul_0 = menu.addUl(li);
    li = menu.addLi(ul_0, "字符串", null);
    li = menu.addLi(ul_0, "数字", null);
    var ul_0_0 = menu.addUl(li);
    li = menu.addLi(ul_0_0, "整数", null);
    li = menu.addLi(ul_0_0, "小数", null);

    li = menu.addLi(ul_0, "按钮", null);
    li = menu.addLi(ul_0, "真假", null);
    li = menu.addLi(ul_0, "单选", null);
    li = menu.addLi(ul_0, "文件", null);
    li = menu.addLi(ul_0, "颜色", null);
}
WidgetFileJson.prototype.onContextMenuSelect = function (menu, ul) {
}
