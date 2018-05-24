/**
 * 菜单功能
 * 要使用右键功能时，在所在元素的标签中添加oncontextmenu
 *  注意：
 *  1、需要用到直线和箭头两个图片,在images目录下可以找到
 *  2、如要使用菜单样式，在页面导入css
 *  3、程序支持多级菜单，所以定义菜单时请使用div+ul标签进行定义:最外层用div，菜单内容用ul+li标签
 * */
function WidgetMenuController() {
}
WidgetMenuController._menuList = new Array();
WidgetMenuController._menuPadding = 6;
WidgetMenuController.init = function () {
}
WidgetMenuController.createMenu = function (elementParent, html) {
    var menu = document.createElement("div");
    elementParent.appendChild(menu);
    menu.classList.add("menu");
    $(menu).load(html, function() {
    });
    WidgetMenuController._menuList.push(menu);
    return menu;
}
WidgetMenuController.hideMenu = function (menu) {
    menu.style.display = 'none'; //再次点击，菜单消失
}
WidgetMenuController.hideMenuAll = function () {
    for (var i in WidgetMenuController._menuList) {
        WidgetMenuController.hideMenu(WidgetMenuController._menuList[i]);
    }
}
/*
 * 弹出菜单
 * menu：菜单
 * */
WidgetMenuController.showMenu = function (menu, e) {
    var e = e || window.event;
    e.cancelBubble = true; // 屏蔽向上一层发送事件
    WidgetMenuController.hideMenu(menu);

    var maxWidth = maxHeight = 0;
    var docSize = [document.documentElement.offsetWidth, document.documentElement.offsetHeight];

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
            // 显示子菜单
            if (ulList[0]){
                // 显示当前
                ulList[0].style.display = "block";
                /*
                 * offsetHeight/Width、offsetTop/offsetLeft
                 * 等返回的都是只读的并且以数字的形式返回像素值（例如，返回12，而不是'12px'）。
                 * */
                ulList[0].style.top = liThis.offsetTop + "px";
                ulList[0].style.left = liThis.offsetWidth + "px";

                var offsetTop = getOffsetTopToParent(ulList[0], liThis._menu);
                var offsetLeft = getOffsetLeftToParent(ulList[0], liThis._menu);
                liThis._menu.style.width = offsetLeft + ulList[0].offsetWidth + WidgetMenuController._menuPadding + "px";
                liThis._menu.style.height = offsetTop + ulList[0].offsetHeight + WidgetMenuController._menuPadding +"px";
                // LogController.log("top = " + offsetTop + " ; left = " + offsetLeft);

                // setWidth(ulList[0]);
                // //最大显示范围
                // maxWidth = docSize[0] - ulList[0].offsetWidth;
                // maxHeight = docSize[1] - ulList[0].offsetHeight;
                // //防止溢出
                // if (maxWidth < getOffset.left(ulList[0])) {
                //     ulList[0].style.left = -ulList[0].clientWidth + "px";
                // }
                // if (maxHeight < getOffset.top(ulList[0])) {
                //     ulList[0].style.top = -ulList[0].clientHeight + liThis.offsetTop + liThis.clientHeight + "px"
                // }
            }
        };
        // 鼠标移出
        li.onmouseout = function (){
            var liThis = this;
            liThis.classList.remove("active");
        };
    }
    menu.style.display = "block"; //显示菜单
    menu.style.left = e.clientX+'px'; //菜单定位
    menu.style.top = e.clientY+'px'; //菜单定位

    /*	setWidth(aUl[0]);
        //最大显示范围
        maxWidth = docSize[0] - menu.offsetWidth;
        maxHeight = docSize[1] - menu.offsetHeight;
        //防止菜单溢出
        menu.offsetTop > maxHeight && (menu.style.top = maxHeight + "px");
        menu.offsetLeft > maxWidth && (menu.style.left = maxWidth + "px");*/
    return false;
}
// 隐藏其他
WidgetMenuController.hideMenuLi = function (li) {
    for (var i = 0; i < li.parentNode.children.length; i++){
        if (li.parentNode.children[i].getElementsByTagName("ul")[0]) {
            li.parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none";
        }
    }
}
//取li中最大的宽度, 并赋给同级所有li
function setWidth(obj){
    maxWidth = 0;
    for (i = 0; i < obj.children.length; i++){
        var oLi = obj.children[i];
        var iWidth = oLi.clientWidth - parseInt(oLi.currentStyle ? oLi.currentStyle["paddingLeft"] : getComputedStyle(oLi,null)["paddingLeft"]) * 2
        if (iWidth > maxWidth) maxWidth = iWidth;
    }
    for (i = 0; i < obj.children.length; i++){
        obj.children[i].style.width = maxWidth + "px";
    }
}