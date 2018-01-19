var widgetTabController = {
    slideSpeed: 200,

    init: function() {
        utilLogController.logFunc(arguments.callee.toString());
        var eventList = new Array();
        eventList.push(widgetTabController.bindUIAction);
        eventList.push(widgetTabController.hideInactive);

        widgetTabController.titleGroupEvent(eventList);
    },

    titleGroupEvent: function(eventList) {
        utilLogController.logFunc(arguments.callee.toString());
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

        // var i;
        // for (i = 0; i < titleGroupList.length; i++) {
        //     var $titleGroupItem = $(titleGroupList[i]);
        //
        //     var j;
        //     for (j = 0; j < eventList.length; j++) {
        //         var event = eventList[i];
        //         event && event($titleGroupItem);
        //     }
        // }
    },

    bindUIAction: function(titleGroupItem) {
        utilLogController.logFunc(arguments.callee.toString());
        titleGroupItem.on("click", '.widgetTabTitle', function() {
            widgetTabController.switchTab($(this));
        });
    },

    hideInactive: function(titleGroupItem) {
        utilLogController.logFunc(arguments.callee.toString());
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
        utilLogController.logFunc(arguments.callee.toString());
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
        utilLogController.logFunc(arguments.callee.toString());
        var $panes = $context.find('.widgetTabContent');
        // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        $panes.slideUp(widgetTabController.slideSpeed);
        $($panes[i]).slideDown(widgetTabController.slideSpeed);
    }
};

// exe
//========
$(function() {
    utilLogController.logFunc(arguments.callee.toString());
    widgetTabController.init();
});
