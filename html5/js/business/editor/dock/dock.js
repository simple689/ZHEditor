// dock
//========
var dock = null;
// var panelFileEditor = null;
var panelFileTemplate = null;
var panelFileBrowser = null;
var panelView = null;
var panelTest = null;
var dockLayoutKey = "dockLayout";

var panelMenuController = null;
var panelToolBarController = null;
var panelStateController = null;
var panelFileEditorController = null;
var panelFileTemplateController = null;
var panelFileBrowserController = null;
var panelViewController = null;
var panelTestController = null;

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

function initPanelController() {
    panelMenuController = new PanelMenuController();
    panelToolBarController = new PanelToolBarController();
    panelStateController = new PanelStateController();
    panelFileEditorController = new PanelFileEditorController();
    panelFileTemplateController = new PanelFileTemplateController();
    panelFileBrowserController = new PanelFileBrowserController();
    panelViewController = new PanelViewController();
    panelTestController = new PanelTestController();
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
    WidgetMenuController.hideMenuAll();
    // WidgetSearchController.hideSearchAll();
    return true;
}

function onContextMenuDocument() {
    WidgetMenuController.hideMenuAll();
    return true;
}

// exe
//========
$(document).ready(function () {
    console.log("[dock] start");
    LogController.init();
    WidgetHistoryController.init();

    $('#panelFixedTop').load("../panel/panelMenu.html", function () {
        $('#panelToolBar').load("../panel/panelToolBar.html", function () {
            panelMenuController.init();
            panelToolBarController.init();
        });
    });
    $('#panelFixedBottom').load("../panel/panelState.html", function () {
        panelStateController.init();
    });
    $('#panelFileTemplate').load("../panel/panelFileTemplate.html", function () {
        panelFileTemplateController.init();
    });
    $('#panelFileBrowser').load("../panel/panelFileBrowser.html", function () {
        panelFileBrowserController.init();
    });
    $('#panelView').load("../panel/panelView.html", function () {
        panelViewController.init();
    });
    $('#panelTest').load("../panel/panelTest.html", function () {
        panelTestController.init();
    });
    // $('#panelFileEditor').load("../panel/panelFileEditor.html", function() {
    //     panelFileEditorController.init();
    // });
    $('#panelCenter').load("../panel/panelFileEditor.html", function () {
        panelFileEditorController.init(panelFileTemplateController);
    });

    // blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu
    $(document).bind('click', onClickDocument);
    $(document).bind('contextmenu', onContextMenuDocument);

    console.log("[dock] end");
})
