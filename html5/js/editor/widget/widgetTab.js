var widgetTabController = {
    name: "widgetTabController",
    slideSpeed: 200,

    init: function () {
        logController.log(this.name, "->", arguments.callee.name);

        var eventList = new Array();
        eventList["bindUIAction"] = widgetTabController.bindUIAction;
        eventList["hideInactive"] = widgetTabController.hideInactive;
        widgetTabController.tabEvent(eventList);
    },

    tabEvent: function (eventList) {
        logController.log(this.name, "->", arguments.callee.name);

        var tabList = document.getElementsByClassName("widgetTab");
        var $tabList = $(tabList);
        $tabList.each(function (tabIndex) {
            var $tabItem = $(tabList[tabIndex]);

            var childList = $tabItem.context.childNodes;
            var $childList = $(childList);
            var ulTitleGroup = null;
            var divContentGroup = null;
            $childList.each(function (childIndex) {
                var $childItem = $(childList[childIndex]);
                if ($childItem.is("ul") && $childItem.hasClass("widgetTabTitleGroup")) {
                    logController.log("ul.widgetTabTitleGroup = %d", tabIndex);
                    ulTitleGroup = $childItem;
                } else if ($childItem.is("div") && $childItem.hasClass("widgetTabContentGroup")) {
                    logController.log("div.widgetTabContentGroup = %d", tabIndex);
                    divContentGroup = $childItem;
                }
            })
            widgetTabController.titleGroupEvent(ulTitleGroup, divContentGroup, eventList);
            widgetTabController.contentGroupEvent(ulTitleGroup, divContentGroup, eventList);
        })
    },

    titleGroupEvent: function (ulTitleGroup, divContentGroup, eventList) {
        logController.log(this.name, "->", arguments.callee.name);

        var childList = ulTitleGroup.context.childNodes;
        var $childList = $(childList);
        $childList.each(function (childIndex) {
            var $childItem = $(childList[childIndex]);
            if ($childItem.hasClass("widgetTabTitle")) {
                logController.log("widgetTabTitle = %d", $childItem.index());

                var event = eventList["bindUIAction"];
                event && event($childItem)
            }
        })
    },

    contentGroupEvent: function (ulTitleGroup, divContentGroup, eventList) {
        logController.log(this.name, "->", arguments.callee.name);

        var childList = divContentGroup.context.childNodes;
        var $childList = $(childList);
        $childList.each(function (childIndex) {
            var $childItem = $(childList[childIndex]);
            if ($childItem.hasClass("widgetTabContent")) {
                logController.log("widgetTabContent = %d", $childItem.index());

                var event = eventList["hideInactive"];
                event && event(ulTitleGroup.context.childNodes[childIndex], $childItem);
            }
        })
    },

    bindUIAction: function (titleItem) {
        logController.log(this.name, "->", arguments.callee.name);

        titleItem.on("click", function () {
            widgetTabController.switchTitle($(this));
        });
    },

    hideInactive: function (titleItem, contentItem) {
        logController.log(this.name, "->", arguments.callee.name);

        var $titleItem = $(titleItem);
        contentItem.hide();
        if ($titleItem.hasClass("isActive")) {
            contentItem.show();
        }
    },

    switchTitle: function (titleItem) {
        logController.log(this.name, "->", arguments.callee.name);

        var tabItem = titleItem.closest('.widgetTab');
        if (tabItem.length > 0) {
            tabItem = tabItem[0];
        }

        if (!titleItem.hasClass('isActive')) {
            titleItem.siblings().removeClass('isActive');
            titleItem.addClass('isActive');

            widgetTabController.showContent(titleItem.index(), $(tabItem));
        }
    },

    showContent: function (index, tabItem) {
        logController.log(this.name, "->", arguments.callee.name);

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
                        logController.log("widgetTabContent = %d", $contentGroupChildItem.index());

                        if ($contentGroupChildItem.index() == index) {
                            $contentGroupChildItem.slideDown(widgetTabController.slideSpeed);
                        } else {
                            $contentGroupChildItem.slideUp(widgetTabController.slideSpeed);
                        }
                        // eventList.each(function(eventIndex) {
                        //     logController.log("eventList = %d", eventIndex);
                        //     var eventItem = eventList[eventIndex];
                        //     eventItem && eventItem($childItem);
                        // })
                    }
                })
            }
        })
    },
};
