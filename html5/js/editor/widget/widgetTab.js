var widgetTabController = {
    name: "widgetTabController",
    slideSpeed: 200,

    init: function() {
        logController.log(this.name, "->", arguments.callee.name);

        var eventList = new Array();
        eventList["bindUIAction"] = widgetTabController.bindUIAction;
        eventList["hideInactive"] = widgetTabController.hideInactive;
        widgetTabController.tabEvent(eventList);
    },

    tabEvent: function(eventList) {
        logController.log(this.name, "->", arguments.callee.name);

        var tabList = document.getElementsByClassName("widgetTab");
        var $tabList = $(tabList);
        $tabList.each(function(tabIndex) {
            var $tabItem = $(tabList[tabIndex]);

            var childList = $tabItem.context.childNodes;
            var $childList = $(childList);
            var ulTitleGroup = null;
            var divContentGroup = null;
            $childList.each(function(childIndex) {
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

    titleGroupEvent: function(ulTitleGroup, divContentGroup, eventList) {
        logController.log(this.name, "->", arguments.callee.name);

        var childList = ulTitleGroup.context.childNodes;
        var $childList = $(childList);
        $childList.each(function(childIndex) {
            var $childItem = $(childList[childIndex]);
            if ($childItem.hasClass("widgetTabTitle")) {
                logController.log("widgetTabTitle = %d", $childItem.index());

                // eventList.each(function(eventIndex) {
                //     logController.log("eventList = %d", eventIndex);
                //     var eventItem = eventList[eventIndex];
                //     eventItem && eventItem($childItem);
                // })
                var event = eventList["bindUIAction"];
                event && event($childItem)
            }
        })
    },

    contentGroupEvent: function(ulTitleGroup, divContentGroup, eventList) {
        logController.log(this.name, "->", arguments.callee.name);

        var childList = divContentGroup.context.childNodes;
        var $childList = $(childList);
        $childList.each(function(childIndex) {
            var $childItem = $(childList[childIndex]);
            if ($childItem.hasClass("widgetTabContent")) {
                logController.log("widgetTabContent = %d", $childItem.index());

                var event = eventList["hideInactive"];
                event && event(ulTitleGroup.context.childNodes[childIndex], $childItem);
            }
        })
    },

    bindUIAction: function(titleItem) {
        logController.log(this.name, "->", arguments.callee.name);

        titleItem.on("click", function() {
            widgetTabController.switchTab($(this));
        });
    },

    hideInactive: function(titleItem, contentItem) {
        logController.log(this.name, "->", arguments.callee.name);

        var $titleItem = $(titleItem);
        if ($titleItem.hasClass("isActive")) {
            contentItem.show();
        } else {
            contentItem.hide();
        }
    },

    switchTab: function($tab) {
        // logController.log(this.name, "->", arguments.callee.name);
        // var $context = $tab.closest('.widgetTab');
        //
        // if (!$tab.hasClass('isActive')) {
        //     $tab.siblings().removeClass('isActive');
        //     $tab.addClass('isActive');
        //
        //     widgetTabController.showPane($tab.index(), $context);
        // }
    },

    showPane: function(i, $context) {
        // logController.log(this.name, "->", arguments.callee.name);
        // var $panes = $context.find('.widgetTabContent');
        // // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        // $panes.slideUp(widgetTabController.slideSpeed);
        // $($panes[i]).slideDown(widgetTabController.slideSpeed);
    }
};

// exe
//========
$(function() {
    logController.log("[widgetTabController]");
    widgetTabController.init();
});
