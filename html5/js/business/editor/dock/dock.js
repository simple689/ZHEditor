// dock
//========
var dock = null;
var dockPanelFileMould = null;
var dockPanelFileLink = null;
// var dockPanelFileEditorMind = null;
var dockPanelFileBrowser = null;
// var dockPanelView = null;
// var dockPanelTest = null;
var dockLayoutKey = "dockLayout";

var panelMenu = null;
var panelToolBar = null;
var panelState = null;
var panelFileEditor = null;
var panelFileMould = null;
var panelFileLink = null;
var panelFileBrowser = null;
// var panelView = null;
// var panelTest = null;
function initWidgetDock() {
    dock = DSXDFUtil.createDSXDFUtil();
    loadDockLayout();
    initDockPanel();
    initDockLayout();
}

function loadDockLayout() {
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

function saveDockLayout() {
    if (dock != null) {
        dock.saveStatesIntoKey(dockLayoutKey);
        // var sessionStorage = window['sessionStorage'];
    }
}

function initDockPanel() {
    dock.addFixedPanel(document.getElementById("panelCenter"), DSXDFUtil.fixedCenter);

    dock.addFixedPanel(document.getElementById("panelFixedTop"), DSXDFUtil.fixedTop);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), DSXDFUtil.fixedBottom);

    dockPanelFileMould = dock.createDFPanel("文件模版", "");
    dockPanelFileMould.addContentDiv(document.getElementById("panelFileMould"));

    dockPanelFileLink = dock.createDFPanel("文件链接", "");
    dockPanelFileLink.addContentDiv(document.getElementById("panelFileLink"));

    dockPanelFileBrowser = dock.createDFPanel("文件浏览器", "");
    dockPanelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"));

    // dockPanelView = dock.createDFPanel("视图", "");
    // dockPanelView.addContentDiv(document.getElementById("panelView"));

    // dockPanelTest = dock.createDFPanel("测试", "");
    // dockPanelTest.addContentDiv(document.getElementById("panelTest"));
}

function initDockLayout() {
    // dockPanelFileEditor.enableNormalHiddenButton(false);
    dockPanelFileMould.initLayout(0, 0, 300, 1, DSXDFPanel.dockLeft);
    dockPanelFileLink.initLayout(0, 0, 300, 1, DSXDFPanel.dockRight);

    // dockPanelView.initLayout(0, 0, 50, 50, DSXDFPanel.dockLeft);
    // dockPanelTest.initLayout(0, 0, 50, 50, DSXDFPanel.dockRight);
    dockPanelFileBrowser.initLayout(0, 0, 1, 200, DSXDFPanel.dockBottom);
    // dockPanelFileEditor.initLayout(0, 0, 6000, 6000, DSXDFPanel.dockLeft);
    // dockPanelFileEditor.setInitialLayoutReference(panelView);
}

function initPanel() {
    panelMenu = new PanelMenu();
    panelToolBar = new PanelToolBar();
    panelState = new PanelState();
    panelFileEditor = new PanelFileEditor();
    panelFileMould = new PanelFileMould();
    panelFileLink = new PanelFileLink();
    panelFileBrowser = new PanelFileBrowser();
    // panelView = new PanelView();
    // panelTest = new PanelTest();
}

function onBeforeUnload() {
    saveDockLayout();
}

function getVisible(panel) {
    var com = panel._$hT._$hu;
    var isVisible = true;
    if (com.style.visibility == "hidden") {
        isVisible = false;
    }
    return isVisible;
}

function changeVisible(panel) {
    var isVisible = !getVisible(panel);
    panel.setVisible(isVisible);
    return isVisible;
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
    // return true;
    return false;
}

function onResizeWindow() {
    WidgetDialog.resizeWindow();
    return true;
}

// exe
//========
$(document).ready(function () {
    console.log("[dock] start");
    WidgetLog.init();
    WidgetHistory.init();

    initPanel();

    $('#panelFixedTop').load("../panel/panelMenu.html", function () {
        panelMenu.init();
        panelToolBar.init();
    });
    $('#panelFixedBottom').load("../panel/panelState.html", function () {
        panelState.init();
    });
    panelFileBrowser.init();
    // panelView.init();
    // $('#panelTest').load("../panel/panelTest.html", function () {
    //     panelTest.init();
    // });
    panelFileMould.init(document.getElementById("panelFileMould"));
    panelFileLink.init(document.getElementById("panelFileLink"));
    panelFileEditor.init(document.getElementById("panelCenter"));

    // blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu
    $(document).bind('click', onClickDocument);
    $(document).bind('contextmenu', onContextMenuDocument);
    window.onresize = onResizeWindow;

    console.log("[dock] end");
})
