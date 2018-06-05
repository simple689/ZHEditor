function WidgetSearchController() {
}

WidgetSearchController._searchList = new Array();
WidgetSearchController.prototype.createSearch = function (panel, elementBrother) {
    this._panel = panel;

    this._searchText = document.createElement("input");
    elementBrother.after(this._searchText);
    this._searchText._widgetSearchController = this;
    $(this._searchText).on("keyup", WidgetSearchController.searchTextOnKeyUp);
    $(this._searchText).on("focus", WidgetSearchController.searchTextOnFocus);
    this._searchText.placeholder = "搜索内容";
    this._searchText.autocomplete = "off"

    this._searchBtn = document.createElement("input");
    this._searchText.after(this._searchBtn);
    this._searchBtn._widgetSearchController = this;
    $(this._searchBtn).on("click", WidgetSearchController.searchBtnOnClick);
    this._searchBtn.type = "button";
    this._searchBtn.value = "搜索";

    this._searchHistoryBox = document.createElement("div");
    this._searchBtn.after(this._searchHistoryBox);
    setElementDisplay(this._searchHistoryBox, false);
    this._searchHistoryBox.style.cssFloat = "left";

    this._searchHistory = document.createElement("ul");
    this._searchHistoryBox.appendChild(this._searchHistory);

    this._searchHistoryIndex = 0;

    WidgetSearchController._searchList.push(this);
    return this;
}
// 获取缓存历史记录
WidgetSearchController.getCookie = function (itemKey) {
    var cookieStr = document.cookie;
    var cookieList = cookieStr.split("; ");
    for (var i = 0; i < cookieList.length; i++) {
        var item = cookieList[i].split("=");
        if (item[0] == itemKey) {
            return item[1];
        }
    }
}
// 点击搜索事件
WidgetSearchController.searchBtnOnClick = function () {
    var res = WidgetSearchController.getCookie("searchHistory");
    var list = decodeURI(res).split(',');
    if (list.length > 19) {
        list.pop();
    }
    list = list.join();
    var searchText = this._widgetSearchController._searchText;
    var value = searchText.value;
    if (res !== undefined) {
        value = value + "," + list;
    }
    //去重
    var valNew = [];
    value = value.split(',');
    for (var i = 0; i < value.length; i++) {
        if (valNew.indexOf(value[i]) < 0) {
            valNew.push(value[i]);
        }
    }
    valNew = valNew.join();
    var date = new Date();
    date.setTime(date.getTime() + 10 * 24 * 3600 * 1000);
    document.cookie = 'searchHistory=' + encodeURI(valNew) + ';expires=' + date.toGMTString() + ';path=/';
}
WidgetSearchController.searchTextOnKeyUp = function (event) {
    //键盘事件 key == 13 (回车) key == 38 (向上) key== 40 (向下)
    var controller = this._widgetSearchController;
    var searchHistoryItemListLen = controller._searchHistoryItemList.length;

    var key = event.keyCode;
    if (key == 13) {
        WidgetSearchController.searchBtnOnClick(); //cookie记录
        if (controller._searchHistoryIndex < searchHistoryItemListLen) {
            var item = controller._searchHistoryItemList[controller._searchHistoryIndex];
            var text = item.innerHTML;
            controller._searchText.value = text;
        }
        setElementDisplay(controller._searchHistoryBox, false);
    } else if (key == 38) {
        var item = controller._searchHistoryItemList[controller._searchHistoryIndex];
        item.classList.remove("choose");
        controller._searchHistoryIndex--;
        if (controller._searchHistoryIndex < 0) {
            controller._searchHistoryIndex = searchHistoryItemListLen - 1;
        }
        item = controller._searchHistoryItemList[controller._searchHistoryIndex];
        item.classList.add("choose");
        setElementDisplay(controller._searchHistoryBox, true);
    } else if (key == 40) {
        var item = controller._searchHistoryItemList[controller._searchHistoryIndex];
        item.classList.remove("choose");
        controller._searchHistoryIndex++;
        if (controller._searchHistoryIndex > searchHistoryItemListLen - 1) {
            controller._searchHistoryIndex = 0;
        }
        item = controller._searchHistoryItemList[controller._searchHistoryIndex];
        item.classList.add("choose");
        setElementDisplay(controller._searchHistoryBox, true);
    } else {
        WidgetSearchController.showHistory(controller, this.value);
    }
}
// 搜索框聚焦
WidgetSearchController.searchTextOnFocus = function () {
    WidgetSearchController.showHistory(this._widgetSearchController);
}
// 点击选中搜索词语(后隐藏历史记录)
WidgetSearchController.searchHistoryItemOnClick = function () {
    var searchText = this._widgetSearchController._searchText;
    var searchHistoryBox = this._widgetSearchController._searchHistoryBox;
    var str = this.innerHTML;
    searchText.value = str;
    setElementDisplay(searchHistoryBox, false);
}
// 展示全部记录
WidgetSearchController.showHistory = function (controller, searchValue) {
    $(controller._searchHistory).empty();
    if (controller._searchHistoryItemList) {
        var listLen = controller._searchHistoryItemList.length;
        if (listLen > 0) {
            controller._searchHistoryItemList.splice(0, listLen);
        }
    }
    controller._searchHistoryItemList = new Array();

    var res = decodeURI(WidgetSearchController.getCookie("searchHistory")).split(',');
    if (res[0] === "undefined" || res[0] === "" || res[0] === "null") {
        setElementDisplay(controller._searchHistoryBox, false);
    } else {
        var isFind = true;
        if (searchValue === "" || searchValue === "null") {
            isFind = false;
        }
        var len = 0;
        for (var i in res) {
            var isAdd = false;
            if (isFind) {
                if (res[i].indexOf(searchValue) > -1) {
                    isAdd = true;
                }
            } else {
                isAdd = true;
            }
            if (isAdd) {
                var li = document.createElement("li");
                controller._searchHistory.append(li);
                li._widgetSearchController = controller;
                $(li).on("click", WidgetSearchController.searchHistoryItemOnClick);
                li.innerHTML = res[i];
                controller._searchHistoryItemList.push(li);
                len++;
            }
        }
        controller._searchHistoryIndex = 0;
        if (len > 0) {
            setElementDisplay(controller._searchHistoryBox, true);
        } else {
            setElementDisplay(controller._searchHistoryBox, false);
        }
    }
}
// 搜索框失去焦点
WidgetSearchController.stopPropagation = function (e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}
WidgetSearchController.hideSearchAll = function () {
    for (var i in WidgetSearchController._searchList) {
        WidgetSearchController.hideSearch(WidgetSearchController._searchList[i]);
    }
}
WidgetSearchController.hideSearch = function (search) {
    setElementDisplay(search._searchHistoryBox, false);
}
