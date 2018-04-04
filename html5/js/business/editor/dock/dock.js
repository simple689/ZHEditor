var dock = null;
var panelTest = null;
var panelView = null;
var panelFileEditor = null;
var panelFileBrowser = null;
var dockLayoutKey = "dockLayout";

function initWidgetDock() {
    dock = DSXDFUtil.createDSXDFUtil();
    loadLayout();

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

    initLayout();
}

function onBeforeUnload() {
    saveLayout();
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

function initLayout() {
    panelFileEditor.enableNormalHiddenButton(false);

    panelTest.initLayout(0, 0, 881, 864, DSXDFPanel.dockRight);
    panelFileBrowser.initLayout(0, 0, 300, 300, DSXDFPanel.dockBottom);
    panelView.initLayout(0, 0, 600, 600, DSXDFPanel.dockLeft);
    // panelFileEditor.setInitialLayoutReference(panelView);
    panelFileEditor.initLayout(0, 0, 2000, 2000, DSXDFPanel.dockLeft);
}

function setVisible(panel, sch) {
    panel.setVisible(sch);
}

// exe
//========
$(document).ready(function () {
    console.log("[dock] start");

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

    console.log("[dock] end");
})
