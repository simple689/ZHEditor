/**
 * 菜单功能
 * 要使用右键功能时，在所在元素的标签中添加oncontextmenu
 *  注意：
 *  1、需要用到直线和箭头两个图片,在images目录下可以找到
 *  2、如要使用菜单样式，在页面导入css
 *  3、程序支持多级菜单，所以定义菜单时请使用div+ul标签进行定义:最外层用div，菜单内容用ul+li标签
 **/
function WidgetMenuController() {
}
WidgetMenuController._menuList = new Array();
WidgetMenuController._menuPadding = 6;
WidgetMenuController.createMenu = function (elementParent, html) {
    var menu = document.createElement("div");
    elementParent.appendChild(menu);
    menu.classList.add("menu");
    $(menu).load(html, function() {
    });
    WidgetMenuController._menuList.push(menu);
    return menu;
}
/*
 * 弹出菜单
 * menu：菜单
 * */
WidgetMenuController.showMenu = function (menu, e, exec) {
    var e = e || window.event;
    e.cancelBubble = true; // 屏蔽向上一层发送事件
    menu._exec = exec;
    WidgetMenuController.hideMenuAll();

    var liList = menu.getElementsByTagName("li");
    for (var i = 0; i < liList.length; i++){
        var li = liList[i];
        // 为含有子菜单的li加上箭头
        var ulList = li.getElementsByTagName("ul");
        if (ulList[0]) {
            li.classList.add("sub");
        }
        li._menu = menu;
        // 鼠标移入
        li.onmouseenter = function (){
            var liThis = this;
            var ulList = liThis.getElementsByTagName("ul");
            liThis.classList.add("active");
            WidgetMenuController.hideMenuLi(liThis);
            var ul;
            // 显示子菜单
            if (ulList[0]) {
                ul = ulList[0];
                // 显示当前
                ul.style.display = "block";
                setPosition(ul, liThis, liThis.offsetWidth, liThis.offsetTop);
            } else {
                ul = getParentWithTag(liThis, "UL");
            }
            setSize(liThis._menu, ul, liThis._menu);
        };
        // 鼠标移出
        li.onmouseout = function (){
            var liThis = this;
            liThis.classList.remove("active");
        };
    }
    menu.style.display = "block"; //显示菜单
    var menuUlList = menu.getElementsByTagName("ul");
    if (menuUlList[0]) {
        setSize(menu, menuUlList[0], menu)
    }
    setPosition(menu, null, e.clientX, e.clientY);
    return false;
}
WidgetMenuController.hideMenuAll = function () {
    for (var i in WidgetMenuController._menuList) {
        WidgetMenuController.hideMenu(WidgetMenuController._menuList[i]);
    }
}
WidgetMenuController.hideMenu = function (menu) {
    menu.style.display = 'none'; //再次点击，菜单消失
    var ulList = menu.getElementsByTagName("ul");
    for (var i = 1; i < ulList.length; i++){
        ulList[i].style.display = "none";
    }
}
WidgetMenuController.hideMenuLi = function (li) {
    for (var i = 0; i < li.parentNode.children.length; i++){
        if (li.parentNode.children[i].getElementsByTagName("ul")[0]) {
            li.parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none";
        }
    }
}
function setSize(element, elementCheck, elementCheckParent) {
    var left = getOffsetLeftToParent(elementCheck, elementCheckParent);
    var top = getOffsetTopToParent(elementCheck, elementCheckParent);
    var width = elementCheck.offsetWidth;
    var height = elementCheck.offsetHeight;
    // LogController.log("top = " + top + " ; left = " + left);
    element.style.width = left + width + WidgetMenuController._menuPadding + "px";
    element.style.height = top + height + WidgetMenuController._menuPadding +"px";
}
function setPosition(element, parentElement, left, top) {
    var leftCheck = left;
    var topCheck = top;
    if (leftCheck < 0) {
        leftCheck = 0;
    }
    if (topCheck < 0) {
        topCheck = 0;
    }
    element.style.left = leftCheck + 'px';
    element.style.top = topCheck + 'px';

    var offsetRight = element.offsetLeft + element.offsetWidth;
    var offsetBottom = element.offsetTop + element.offsetHeight;
    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;
    if (offsetRight > docWidth) {
        LogController.log("offsetRight = " + offsetRight + " ; docWidth = " + docWidth);
        leftCheck = element.offsetLeft - (offsetRight - docWidth);
        if (leftCheck >= 0) {
            element.style.left = leftCheck + 'px';
        }
    }
    if (offsetBottom > docHeight) {
        LogController.log("offsetBottom = " + offsetBottom + " ; docHeight = " + docHeight);
        topCheck = element.offsetTop - (offsetBottom - docHeight);
        if (topCheck >= 0) {
            element.style.top = topCheck + "px";
        }
    }
}
