// dock
//========
var dock = null;
var panelTest = null;
var panelView = null;
var panelFileEditor = null;
var panelFileBrowser = null;
var dockLayoutKey = "dockLayout";

var panelFileBrowserController = null;
var panelFileEditorController = null;
var panelMenuController = null;
var panelStateController = null;
var panelTestController = null;
var panelToolBarController = null;
var panelViewController = null;

function initWidgetDock() {
    dock = DSXDFUtil.createDSXDFUtil();
    loadLayout();
    initPanel();
    initLayout();
    initPanelController();
}
function initPanel() {
    dock.addFixedPanel(document.getElementById("panelCenter"), DSXDFUtil.fixedCenter);

    dock.addFixedPanel(document.getElementById("panelFixedTop"), DSXDFUtil.fixedTop);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), DSXDFUtil.fixedBottom);

    panelTest = dock.createDFPanel("测试", "");
    panelTest.addContentDiv(document.getElementById("panelTest"));

    panelView = dock.createDFPanel("视图", "");
    panelView.addContentDiv(document.getElementById("panelView"));

    panelFileEditor = dock.createDFPanel("文件编辑", "");
    panelFileEditor.addContentDiv(document.getElementById("panelFileEditor"));

    panelFileBrowser = dock.createDFPanel("文件浏览器", "");
    panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"));
}
function initLayout() {
    panelFileEditor.enableNormalHiddenButton(false);
    panelView.initLayout(0, 0, 50, 50, DSXDFPanel.dockLeft);
    panelTest.initLayout(0, 0, 50, 50, DSXDFPanel.dockRight);
    panelFileBrowser.initLayout(0, 0, 50, 50, DSXDFPanel.dockBottom);
    panelFileEditor.initLayout(0, 0, 1000, 1000, DSXDFPanel.dockLeft);
    // panelFileEditor.setInitialLayoutReference(panelView);
}
function initPanelController() {
    panelFileBrowserController = new PanelFileBrowserController();
    panelFileEditorController = new PanelFileEditorController();
    panelMenuController = new PanelMenuController();
    panelStateController = new PanelStateController();
    panelTestController = new PanelTestController();
    panelToolBarController = new PanelToolBarController();
    panelViewController = new PanelViewController();
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
        var sessionStorage = window['sessionStorage'];
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
function documentOnClick() {
    WidgetMenuController.hideMenuAll();
    return true;
}

function documentOnContextMenu() {
    WidgetMenuController.hideMenuAll();
    return true;
}

// exe
//========
$(document).ready(function () {
    console.log("[dock] start");
    LogController.init();
    WidgetMenuController.init();

    $('#panelFixedTop').load("../panel/panelMenu.html", function () {
        $('#panelToolBar').load("../panel/panelToolBar.html", function () {
            panelMenuController.init();
            panelToolBarController.init();
        });
    });
    $('#panelFixedBottom').load("../panel/panelState.html", function () {
        panelStateController.init();
    });

    $('#panelTest').load("../panel/panelTest.html", function () {
        panelTestController.init();
    });
    $('#panelView').load("../panel/panelView.html", function() {
        panelViewController.init();
    });
    $('#panelFileEditor').load("../panel/panelFileEditor.html", function() {
        panelFileEditorController.init();
    });
    $('#panelFileBrowser').load("../panel/panelFileBrowser.html", function () {
        panelFileBrowserController.init();
    });

    document.onclick = documentOnClick;
    document.oncontextmenu = documentOnContextMenu;

    console.log("[dock] end");
})
