// dock
var gDock = null;

var gPanelMenu = null;
var gPanelToolBar = null;
var gPanelState = null;
var gPanelFileBrowser = null;

var gPanelFileEditor = null;
var gPanelFileMould = null;
var gPanelFileLink = null;

function initWidgetDock() {
    gDock = DSXDFUtil.createDSXDFUtil();
    loadDockLayout();
    initDockPanel();
    initDockLayout();
}

function onBeforeUnload() {
    saveDockLayout();
}

function loadDockLayout() {
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        var item = sessionStorage.getItem(confDockLayoutKey);
        if (item != null) {
            gDock.loadStatesFromKey(confDockLayoutKey);
        } else {
            var dockLayoutStr = "";
            sessionStorage.setItem(confDockLayoutKey, dockLayoutStr);
        }
    }
}
function saveDockLayout() {
    if (gDock != null) {
        gDock.saveStatesIntoKey(confDockLayoutKey);
        // todo 发送给服务器
        // var sessionStorage = window['sessionStorage'];
    }
}

function initDockPanel() {
    gDock.addFixedPanel(document.getElementById("panelFixedTop"), DSXDFUtil.fixedTop);
    gDock.addFixedPanel(document.getElementById("panelFixedBottom"), DSXDFUtil.fixedBottom);

    gDock._panelFileBrowser = gDock.createDFPanel("文件浏览器", "");
    gDock._panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"));

    gDock.addFixedPanel(document.getElementById("panelFileEditor"), DSXDFUtil.fixedCenter);

    gDock._panelFileMould = gDock.createDFPanel("文件模版", "");
    gDock._panelFileMould.addContentDiv(document.getElementById("panelFileMould"));

    gDock._panelFileLink = gDock.createDFPanel("文件链接", "");
    gDock._panelFileLink.addContentDiv(document.getElementById("panelFileLink"));
}
function initDockLayout() {
    gDock._panelFileMould.initLayout(0, 0, 300, 1, DSXDFPanel.dockLeft);
    gDock._panelFileMould.enableNormalHiddenButton(false);

    gDock._panelFileLink.initLayout(0, 0, 300, 1, DSXDFPanel.dockRight);
    gDock._panelFileLink.enableNormalHiddenButton(false);

    gDock._panelFileBrowser.initLayout(0, 0, 1, 200, DSXDFPanel.dockBottom);
    gDock._panelFileBrowser.enableNormalHiddenButton(false);

    // gDock._panelFileBrowser.setInitialLayoutReference(panelView);
}

function getDockPanelVisible(panel) {
    var com = panel._$hT._$hu;
    var isVisible = true;
    if (com.style.visibility == "hidden") {
        isVisible = false;
    }
    return isVisible;
}
function changeDockPanelVisible(panel) {
    var isVisible = !getDockPanelVisible(panel);
    panel.setVisible(isVisible);
    return isVisible;
}

function initPanel() {
    gPanelMenu = new PanelMenu();
    gPanelToolBar = new PanelToolBar();
    gPanelState = new PanelState();
    gPanelFileBrowser = new PanelFileBrowser();

    gPanelFileEditor = new PanelFileEditor();
    gPanelFileMould = new PanelFileMould();
    gPanelFileLink = new PanelFileLink();
}

// document
function onClickDocument() {
    WidgetMenu.hideMenuAll();
    // WidgetSearch.hideSearchAll();
    return true;
}

function onContextMenuDocument() {
    WidgetMenu.hideMenuAll();
    return false;
}

function onResizeWindow() {
    WidgetDialog.resizeWindow();
    return true;
}

// exe
$(document).ready(function () {
    console.log("[dock] start");
    WidgetLog.init();
    WidgetHistory.init();

    initPanel();

    $('#panelFixedTop').load("../panel/panelMenu.html", function () {
        gPanelMenu.init();
        gPanelToolBar.init();
    });
    $('#panelFixedBottom').load("../panel/panelState.html", function () {
        gPanelState.init();
    });
    gPanelFileBrowser.init();

    gPanelFileMould.init(document.getElementById("panelFileMould"));
    gPanelFileLink.init(document.getElementById("panelFileLink"));
    gPanelFileEditor.init(document.getElementById("panelFileEditor"));

    // blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu
    $(document).onclick = onClickDocument;
    $(document).oncontextmenu = onContextMenuDocument;
    window.onresize = onResizeWindow;

    console.log("[dock] end");
})
