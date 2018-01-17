var widgetTab = {
    s: {
        animLen: 200
    },

    init: function() {
        widgetTab.bindUIActions();
        widgetTab.hideInactive();
    },

    bindUIActions: function() {
        $('.widgetTabTitleGroup').on('click', '.widgetTabTitle', function(){
            widgetTab.switchTab($(this));
        });
    },

    hideInactive: function() {
        var $tabBlocks = $('.widgetTab');

        $tabBlocks.each(function(i) {
            var
                $tabBlock = $($tabBlocks[i]),
                $panes = $tabBlock.find('.widgetTabContent'),
                $activeTab = $tabBlock.find('.widgetTabTitle.isActive');

            $panes.hide();
            $($panes[$activeTab.index()]).show();
        });
    },

    switchTab: function($tab) {
        var $context = $tab.closest('.widgetTab');

        if (!$tab.hasClass('isActive')) {
            $tab.siblings().removeClass('isActive');
            $tab.addClass('isActive');

            widgetTab.showPane($tab.index(), $context);
        }
    },

    showPane: function(i, $context) {
        var $panes = $context.find('.widgetTabContent');
        // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        $panes.slideUp(widgetTab.s.animLen);
        $($panes[i]).slideDown(widgetTab.s.animLen);
    }
};

// exe
//========
$(function() {
    widgetTab.init();
});
