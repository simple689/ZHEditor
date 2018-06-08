function WidgetSearchController() {
}

WidgetSearchController._searchList = new Array();
WidgetSearchController.prototype.createSearch = function (panel, elementBrother) {
    this._panel = panel;

    this._searchText = document.createElement("input");
    elementBrother.after(this._searchText);
    this._searchText._widgetSearchController = this;
    this._searchText.classList.add("searchText");
    $(this._searchText).on("keyup", WidgetSearchController.onKeyUpSearchText);
    $(this._searchText).on("focus", WidgetSearchController.onFocusSearchText);

    this._searchBtn = document.createElement("input");
    this._searchText.after(this._searchBtn);
    this._searchBtn._widgetSearchController = this;
    this._searchBtn.classList.add("searchBtn");
    $(this._searchBtn).on("click", WidgetSearchController.onClickSearchBtn);
    this._searchBtn.type = "button";
    this._searchBtn.value = "搜索";

    this._searchHistoryBox = document.createElement("div");
    this._searchBtn.after(this._searchHistoryBox);
    this._searchHistoryBox.classList.add("searchHistoryBox");

    this._searchHistory = document.createElement("ul");
    this._searchHistoryBox.appendChild(this._searchHistory);

    this._searchHistoryIndex = 0;

    WidgetSearchController._searchList.push(this);
    return this;
}
// 获取历史记录
WidgetSearchController.getHistory = function (itemKey) {
    var cookieStr = document.cookie;
    var cookieList = cookieStr.split("; ");
    for (var i = 0; i < cookieList.length; i++) {
        var item = cookieList[i].split("=");
        if (item[0] == itemKey) {
            return item[1];
        }
    }
}
// 点击搜索按钮
WidgetSearchController.onClickSearchBtn = function () {
    var res = WidgetSearchController.getHistory("searchHistory");
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
WidgetSearchController.onKeyUpSearchText = function (event) {
    //键盘事件 key == 13 (回车) key == 38 (向上) key== 40 (向下)
    var controller = this._widgetSearchController;
    var searchHistoryItemListLen = controller._searchHistoryItemList.length;

    var key = event.keyCode;
    if (key == 13) {
        WidgetSearchController.onClickSearchBtn(); //cookie记录
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
WidgetSearchController.onFocusSearchText = function () {
    WidgetSearchController.showHistory(this._widgetSearchController, null);
}
// 点击选中搜索词语(后隐藏历史记录)
WidgetSearchController.onClickSearchHistoryItem = function () {
    var searchText = this._widgetSearchController._searchText;
    var searchHistoryBox = this._widgetSearchController._searchHistoryBox;
    var str = this.innerHTML;
    searchText.value = str;
    setElementDisplay(searchHistoryBox, false);
}
WidgetSearchController.onMouseEnterSearchHistoryItem = function () {
    var liThis = this;
    liThis.classList.add("active");
}
WidgetSearchController.onMouseOutSearchHistoryItem = function () {
    var liThis = this;
    liThis.classList.remove("active");
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

    var list = decodeURI(WidgetSearchController.getHistory("searchHistory")).split(',');
    if (list[0] === "undefined" || list[0] === "" || list[0] === "null" || list[0] === null) {
        setElementDisplay(controller._searchHistoryBox, false);
    } else {
        var isFind = true;
        if (searchValue === "" || searchValue === "null" || searchValue === null) {
            isFind = false;
        }
        var len = 0;
        for (var i in list) {
            var isAdd = false;
            if (isFind) {
                if (list[i].indexOf(searchValue) > -1) {
                    isAdd = true;
                }
            } else {
                isAdd = true;
            }
            if (isAdd) {
                var li = document.createElement("li");
                controller._searchHistory.append(li);
                li._widgetSearchController = controller;
                $(li).on("click", WidgetSearchController.onClickSearchHistoryItem);
                $(li).on("mouseenter", WidgetSearchController.onMouseEnterSearchHistoryItem);
                $(li).on("mouseout", WidgetSearchController.onMouseOutSearchHistoryItem);
                li.innerHTML = list[i];
                controller._searchHistoryItemList.push(li);
                len++;
            }
        }
        controller._searchHistoryIndex = 0;
        if (len > 0) {
            controller._searchHistoryBox.style.left = "10px";
            controller._searchHistoryBox.style.top = "10px";
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
