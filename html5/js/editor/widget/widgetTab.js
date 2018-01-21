var widgetTabController = {
    slideSpeed: 200,

    init: function() {
        logController.logFunc(arguments.callee.toString());
        var eventList = new Array();
        eventList.push(widgetTabController.bindUIAction);
        eventList.push(widgetTabController.hideInactive);

        widgetTabController.tabEvent(eventList);
    },

    tabEvent: function(eventList) {
        logController.logFunc(arguments.callee.toString());
        var tabList = document.getElementsByClassName("widgetTab");
        var $tabList = $(tabList);
        $tabList.each(function(i) {
            var $tabItem = $(tabList[i]);

            var childList = $tabItem.context.childNodes;
            var $childList = $(childList);
            $childList.each(function(j) {
                var $childItem = $(childList[j]);
                if ($childItem.context.className == "widgetTabTitleGroup") {
                    logController.log("widgetTabTitleGroup = %d", i);
                    widgetTabController.titleGroupEvent($childItem, eventList);
                } else if ($childItem.context.className == "widgetTabContentGroup") {
                    logController.log("widgetTabContentGroup = %d", i);
                    widgetTabController.titleGroupEvent($childItem, eventList);
                }
            })
        })
    },

    titleGroupEvent: function(eventItem, eventList) {
        logController.logFunc(arguments.callee.toString());
        var childList = eventItem.context.childNodes;
        var $childList = $(childList);
        $childList.each(function(i) {
            var $childItem = $(childList[i]);
            if ($childItem.context.className == "widgetTabTitle") {
                logController.log("widgetTabTitle = %d", i);

                // $eventList.each(function(j) {
                //     var eventItem = eventList[j];
                //     eventItem && eventItem($titleGroupItem);
                // })
            }
        })
    },

    contentGroupEvent: function(eventItem, eventList) {
        logController.logFunc(arguments.callee.toString());
        var titleGroupList = document.getElementsByClassName("widgetTabTitleGroup");
        var $titleGroupList = $(titleGroupList);
        $titleGroupList.each(function(i) {
            var $titleGroupItem = $(titleGroupList[i]);

            var $eventList = $(eventList);
            $eventList.each(function(j) {
                var eventItem = eventList[j];
                eventItem && eventItem($titleGroupItem);
            })
        })
    },

    bindUIAction: function(titleGroupItem) {
        logController.logFunc(arguments.callee.toString());
        titleGroupItem.on("click", '.widgetTabTitle', function() {
            widgetTabController.switchTab($(this));
        });
    },

    hideInactive: function(titleGroupItem) {
        logController.logFunc(arguments.callee.toString());
        var $widgetTab = $('.widgetTab');
        $widgetTab.each(function(i) {
            var
                $widgetTabTitle = $($widgetTab[i]),
                $panes = $widgetTabTitle.find('.widgetTabContent'),
                $activeTab = $widgetTabTitle.find('.widgetTabTitle.isActive');

            $panes.hide();
            $($panes[$activeTab.index()]).show();
        });
    },

    switchTab: function($tab) {
        logController.logFunc(arguments.callee.toString());
        var $context = $tab.closest('.widgetTab');

        if (!$tab.hasClass('isActive')) {
            $tab.siblings().removeClass('isActive');
            $tab.addClass('isActive');

            widgetTabController.showPane($tab.index(), $context);
        }
    },
    // switchTab2: function() {
    //     var tab = document.getElementById("aaa");
    //
    //     var context = document.getElementById("widgetTab");
    //
    //     if (!tab.hasClass('isActive')) {
    //         tab.siblings().removeClass('isActive');
    //         tab.addClass('isActive');
    //
    //         widgetTab.showPane(tab.index(), context);
    //     }
    // },

    showPane: function(i, $context) {
        logController.logFunc(arguments.callee.toString());
        var $panes = $context.find('.widgetTabContent');
        // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        $panes.slideUp(widgetTabController.slideSpeed);
        $($panes[i]).slideDown(widgetTabController.slideSpeed);
    }
};

// exe
//========
$(function() {
    logController.logFunc(arguments.callee.toString());
    widgetTabController.init();
});
