function WidgetTabController() {
    this._elementTab = null;
};
WidgetTabController.slideSpeed = 200;
WidgetTabController.prototype.init = function (elementParent, panel) {
    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);

    this._panel = panel;
    this._elementTab._widgetTabController = this;

    this._elementTab.className += " ";
    this._elementTab.className += "widgetTab";

    this.initTitleGroup();
    this.initTitle();
    this.initContentGroup();
    this.initContent();

    var eventList = new Array();
    eventList["bindUIAction"] = this.bindUIAction;
    eventList["hideInactive"] = this.hideInactive;
    this.tabEvent(eventList);
};
WidgetTabController.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);

    this._elementTabTitleGroup._widgetTabController = this;

    this._elementTabTitleGroup.className += " ";
    this._elementTabTitleGroup.className += "widgetTabTitleGroup";
};
WidgetTabController.prototype.initTitle = function () {
    this._elementTabTitle = document.createElement("li");
    this._elementTabTitleGroup.appendChild(this._elementTabTitle);

    this._elementTabTitle._widgetTabController = this;

    this._elementTabTitle.className += " ";
    this._elementTabTitle.className += "widgetTabTitle";
    this._elementTabTitle.className += " ";
    this._elementTabTitle.className += "isActive";

    this._elementTabTitle.textContent = "首页";
};
WidgetTabController.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);

    this._elementTabContentGroup._widgetTabController = this;

    this._elementTabContentGroup.className += " ";
    this._elementTabContentGroup.className += "widgetTabContentGroup";
};
WidgetTabController.prototype.initContent = function () {
    this._elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(this._elementTabContent);

    this._elementTabContent._widgetTabController = this;

    this._elementTabContent.className += " ";
    this._elementTabContent.className += "widgetTabContent";

    this._elementTabContent.textContent = "首页内容";
};
WidgetTabController.prototype.tabEvent = function (eventList) {
    // $(this._elementTab).each(function (tabIndex) {
    //     var $tabItem = $(this);
    //
    //     var childList = $tabItem.context.childNodes;
    //     var ulTitleGroup = null;
    //     var divContentGroup = null;
    //     $(childList).each(function (childIndex) {
    //         var $childItem = $(childList[childIndex]);
    //
    //         if ($childItem.is("ul") && $childItem.hasClass("widgetTabTitleGroup")) {
    //             LogController.log("ul.widgetTabTitleGroup = %d", tabIndex);
    //             ulTitleGroup = $childItem;
    //         } else if ($childItem.is("div") && $childItem.hasClass("widgetTabContentGroup")) {
    //             LogController.log("div.widgetTabContentGroup = %d", tabIndex);
    //             divContentGroup = $childItem;
    //         }
    //     })
    //     this.titleGroupEvent(ulTitleGroup, divContentGroup, eventList);
    //     this.contentGroupEvent(ulTitleGroup, divContentGroup, eventList);
    // })
};
WidgetTabController.prototype.titleGroupEvent = function (ulTitleGroup, divContentGroup, eventList) {
    var childList = ulTitleGroup.context.childNodes;
    var $childList = $(childList);
    $childList.each(function (childIndex) {
        var $childItem = $(childList[childIndex]);
        if ($childItem.hasClass("widgetTabTitle")) {
            LogController.log("widgetTabTitle = %d", $childItem.index());

            var event = eventList["bindUIAction"];
            event && event($childItem)
        }
    })
};
WidgetTabController.prototype.contentGroupEvent = function (ulTitleGroup, divContentGroup, eventList) {
    var childList = divContentGroup.context.childNodes;
    var $childList = $(childList);
    $childList.each(function (childIndex) {
        var $childItem = $(childList[childIndex]);
        if ($childItem.hasClass("widgetTabContent")) {
            LogController.log("widgetTabContent = %d", $childItem.index());

            var event = eventList["hideInactive"];
            event && event(ulTitleGroup.context.childNodes[childIndex], $childItem);
        }
    })
};
WidgetTabController.prototype.bindUIAction = function (titleItem) {
    titleItem.on("click", function () {
        this.switchTitle($(this));
    });
};
WidgetTabController.prototype.hideInactive = function (titleItem, contentItem) {
    var $titleItem = $(titleItem);
    contentItem.hide();
    if ($titleItem.hasClass("isActive")) {
        contentItem.show();
    }
};
WidgetTabController.prototype.switchTitle = function (titleItem) {
    var tabItem = titleItem.closest('.widgetTab');
    if (tabItem.length > 0) {
        tabItem = tabItem[0];
    }

    if (!titleItem.hasClass('isActive')) {
        titleItem.siblings().removeClass('isActive');
        titleItem.addClass('isActive');

        this.showContent(titleItem.index(), $(tabItem));
    }
};
WidgetTabController.prototype.showContent = function (index, tabItem) {
    var childList = tabItem.context.childNodes;
    var $childList = $(childList);
    var divContentGroup = null;
    $childList.each(function (childIndex) {
        var $childItem = $(childList[childIndex]);
        if ($childItem.is("div") && $childItem.hasClass("widgetTabContentGroup")) {
            divContentGroup = $childItem;

            var contentGroupChildList = divContentGroup.context.childNodes;
            var $contentGroupChildList = $(contentGroupChildList);
            $contentGroupChildList.each(function (contentGroupChildIndex) {
                var $contentGroupChildItem = $(contentGroupChildList[contentGroupChildIndex]);

                if ($contentGroupChildItem.hasClass("widgetTabContent")) {
                    LogController.log("widgetTabContent = %d", $contentGroupChildItem.index());

                    if ($contentGroupChildItem.index() == index) {
                        $contentGroupChildItem.slideDown(this.slideSpeed);
                    } else {
                        $contentGroupChildItem.slideUp(this.slideSpeed);
                    }
                    // eventList.each(function(eventIndex) {
                    //     LogController.log("eventList = %d", eventIndex);
                    //     var eventItem = eventList[eventIndex];
                    //     eventItem && eventItem($childItem);
                    // })
                }
            })
        }
    })
};
