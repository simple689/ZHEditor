// dock
//========
var dock = null;
// var panelFileEditor = null;
var panelFileTemplate = null;
var panelFileBrowser = null;
var panelView = null;
var panelTest = null;
var dockLayoutKey = "dockLayout";

var PanelMenu = null;
var PanelToolBar = null;
var PanelState = null;
var PanelFileEditor = null;
var PanelFileTemplate = null;
var PanelFileBrowser = null;
var PanelView = null;
var PanelTest = null;

function initWidgetDock() {
    dock = DSXDFUtil.createDSXDFUtil();
    loadLayout();
    initPanel();
    initLayout();
    initPanelCtrl();
}

function initPanel() {
    dock.addFixedPanel(document.getElementById("panelCenter"), DSXDFUtil.fixedCenter);

    dock.addFixedPanel(document.getElementById("panelFixedTop"), DSXDFUtil.fixedTop);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), DSXDFUtil.fixedBottom);

    // panelFileEditor = dock.createDFPanel("文件编辑", "");
    // panelFileEditor.addContentDiv(document.getElementById("panelFileEditor"));

    panelFileTemplate = dock.createDFPanel("文件模版", "");
    panelFileTemplate.addContentDiv(document.getElementById("panelFileTemplate"));

    panelFileBrowser = dock.createDFPanel("文件浏览器", "");
    panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"));

    // panelView = dock.createDFPanel("视图", "");
    // panelView.addContentDiv(document.getElementById("panelView"));

    // panelTest = dock.createDFPanel("测试", "");
    // panelTest.addContentDiv(document.getElementById("panelTest"));
}

function initLayout() {
    // panelFileEditor.enableNormalHiddenButton(false);
    panelFileTemplate.initLayout(0, 0, 500, 1, DSXDFPanel.dockLeft);
    // panelView.initLayout(0, 0, 50, 50, DSXDFPanel.dockLeft);
    // panelTest.initLayout(0, 0, 50, 50, DSXDFPanel.dockRight);
    panelFileBrowser.initLayout(0, 0, 1, 200, DSXDFPanel.dockBottom);
    // panelFileEditor.initLayout(0, 0, 6000, 6000, DSXDFPanel.dockLeft);
    // panelFileEditor.setInitialLayoutReference(panelView);
}

function initPanelCtrl() {
    PanelMenu = new PanelMenu();
    PanelToolBar = new PanelToolBar();
    PanelState = new PanelState();
    PanelFileEditor = new PanelFileEditor();
    PanelFileTemplate = new PanelFileTemplate();
    PanelFileBrowser = new PanelFileBrowser();
    PanelView = new PanelView();
    PanelTest = new PanelTest();
}

function loadLayout() {
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        var item = sessionStorage.getItem(dockLayoutKey);
        if (item != null) {
            dock.loadStatesFromKey(dockLayoutKey);
        } else {
            var dockLayoutStr = "";
            sessionStorage.setItem(dockLayoutKey, dockLayoutStr);
        }
    }
}

function saveLayout() {
    if (dock != null) {
        dock.saveStatesIntoKey(dockLayoutKey);
        // var sessionStorage = window['sessionStorage'];
    }
}

function onBeforeUnload() {
    saveLayout();
}

function setVisible(panel, sch) {
    panel.setVisible(sch);
}

// document
//========
function onClickDocument() {
    WidgetMenu.hideMenuAll();
    // WidgetSearch.hideSearchAll();
    return true;
}

function onContextMenuDocument() {
    WidgetMenu.hideMenuAll();
    return true;
}

// exe
//========
$(document).ready(function () {
    console.log("[dock] start");
    Log.init();
    WidgetHistory.init();

    $('#panelFixedTop').load("../panel/panelMenu.html", function () {
        $('#panelToolBar').load("../panel/panelToolBar.html", function () {
            PanelMenu.init();
            PanelToolBar.init();
        });
    });
    $('#panelFixedBottom').load("../panel/panelState.html", function () {
        PanelState.init();
    });
    $('#panelFileTemplate').load("../panel/panelFileTemplate.html", function () {
        PanelFileTemplate.init();
    });
    $('#panelFileBrowser').load("../panel/panelFileBrowser.html", function () {
        PanelFileBrowser.init();
    });
    $('#panelView').load("../panel/panelView.html", function () {
        PanelView.init();
    });
    $('#panelTest').load("../panel/panelTest.html", function () {
        PanelTest.init();
    });
    // $('#panelFileEditor').load("../panel/panelFileEditor.html", function() {
    //     PanelFileEditor.init();
    // });
    $('#panelCenter').load("../panel/panelFileEditor.html", function () {
        PanelFileEditor.init(PanelFileTemplate);
    });

    // blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu
    $(document).bind('click', onClickDocument);
    $(document).bind('contextmenu', onContextMenuDocument);

    console.log("[dock] end");
})
