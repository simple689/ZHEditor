var TabBlock = {
    s: {
        animLen: 200
    },

    init: function() {
        TabBlock.bindUIActions();
        TabBlock.hideInactive();
    },

    bindUIActions: function() {
        $('.tabBlock_tabs').on('click', '.tabBlock_tab', function(){
            TabBlock.switchTab($(this));
        });
    },

    hideInactive: function() {
        var $tabBlocks = $('.tabBlock');

        $tabBlocks.each(function(i) {
            var
                $tabBlock = $($tabBlocks[i]),
                $panes = $tabBlock.find('.tabBlock_pane'),
                $activeTab = $tabBlock.find('.tabBlock_tab.is_active');

            $panes.hide();
            $($panes[$activeTab.index()]).show();
        });
    },

    switchTab: function($tab) {
        var $context = $tab.closest('.tabBlock');

        if (!$tab.hasClass('is_active')) {
            $tab.siblings().removeClass('is_active');
            $tab.addClass('is_active');

            TabBlock.showPane($tab.index(), $context);
        }
    },

    showPane: function(i, $context) {
        var $panes = $context.find('.tabBlock_pane');

        // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        $panes.slideUp(TabBlock.s.animLen);
        $($panes[i]).slideDown(TabBlock.s.animLen);
    }
};

$(function() {
    console.log("1");
    TabBlock.init();
});
