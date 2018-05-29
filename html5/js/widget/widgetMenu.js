/**
 * 菜单
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

    var menuLiList = menu.getElementsByTagName("li");
    for (var i = 0; i < menuLiList.length; i++){
        var li = menuLiList[i];
        var ulList = li.getElementsByTagName("ul");
        if (ulList[0]) {
            li.classList.add("sub"); // 为含有子菜单的li加上箭头
        }
        li._menu = menu;
        li.onmouseenter = function () { // 鼠标移入
            var liThis = this;
            liThis.classList.add("active");
            WidgetMenuController.hideMenuLi(liThis);
            var ulList = liThis.getElementsByTagName("ul");
            if (ulList[0]) {
                var ulParent = getElementParentWithTag(liThis, "UL");
                if (ulParent) {
                    setUlPosition(ulList[0], ulParent, ulParent.offsetLeft + ulParent.offsetWidth, ulParent.offsetTop + liThis.offsetTop);
                }
            }
        };
        li.onmouseout = function () { // 鼠标移出
            var liThis = this;
            liThis.classList.remove("active");
        };
    }
    var menuUlList = menu.getElementsByTagName("ul");
    if (menuUlList[0]) {
        setUlPosition(menuUlList[0], null, e.clientX, e.clientY);
    }
    return false;
}
WidgetMenuController.hideMenuAll = function () {
    for (var i in WidgetMenuController._menuList) {
        WidgetMenuController.hideMenu(WidgetMenuController._menuList[i]);
    }
}
WidgetMenuController.hideMenu = function (menu) {
    var ulList = menu.getElementsByTagName("ul");
    for (var i = 0; i < ulList.length; i++){
        setElementDisplay(ulList[i], false);
    }
}
WidgetMenuController.hideMenuLi = function (li) {
    for (var i = 0; i < li.parentNode.children.length; i++){
        if (li.parentNode.children[i].getElementsByTagName("ul")[0]) {
            setElementDisplay(li.parentNode.children[i].getElementsByTagName("ul")[0], false);
        }
    }
}
function setUlPosition(ul, ulParent, left, top) {
    setElementDisplay(ul, true); // 显示菜单

    var leftCheck = left;
    var topCheck = top;
    if (ulParent) {
        leftCheck -= ulParent.offsetLeft;
        topCheck -= ulParent.offsetTop;
    } else {
        if (leftCheck < 0) {
            leftCheck = 0;
        }
        if (topCheck < 0) {
            topCheck = 0;
        }
    }
    ul.style.left = leftCheck + 'px';
    ul.style.top = topCheck + 'px';

    var offsetRight = ul.offsetLeft + ul.offsetWidth;
    var offsetBottom = ul.offsetTop + ul.offsetHeight;
    if (ulParent) {
        offsetRight += ulParent.offsetLeft;
        offsetBottom += ulParent.offsetTop;
    }
    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;
    if (offsetRight > docWidth) {
        // LogController.log("offsetRight = " + offsetRight + " ; docWidth = " + docWidth);
        if (ulParent) {
            leftCheck = 0;
            leftCheck -= ul.offsetWidth;
        } else {
            leftCheck = ul.offsetLeft - (offsetRight - docWidth) - WidgetMenuController._menuPadding;
            if (leftCheck < 0) {
                leftCheck = 0;
            }
        }
        ul.style.left = leftCheck + 'px';
    }
    if (offsetBottom > docHeight) {
        // LogController.log("offsetBottom = " + offsetBottom + " ; docHeight = " + docHeight);
        topCheck = ul.offsetTop - (offsetBottom - docHeight);
        if (ulParent) {
        } else {
            if (topCheck < 0) {
                topCheck = 0;
            }
        }
        ul.style.top = topCheck + "px";
    }
}
