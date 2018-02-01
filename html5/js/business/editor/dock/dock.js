var dock;
var panelTest;
var panelView;
var panelFileEditor;
var panelFileBrowser;
var dockLayoutKey = "dockLayout";

function initWidgetDock() {
    dock = widgetDockController.createWidgetDock();
    dock.addFixedPanel(document.getElementById("panelFixedCenter"), widgetDockController.fixedCenter);
    dock.addFixedPanel(document.getElementById("panelFixedTop"), widgetDockController.fixedTop);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), widgetDockController.fixedBottom);

    panelTest = dock.createFloatPanel("测试");
    panelTest.addElement(document.getElementById("panelTest"));

    // panelView = dock.createFloatPanel("视图");
    // panelView.addElement(document.getElementById("panelView"));
    //
    // panelFileEditor = dock.createFloatPanel("文件编辑");
    // panelFileEditor.addElement(document.getElementById("panelFileEditor"));
    //
    // panelFileBrowser = dock.createFloatPanel("文件浏览器");
    // panelFileBrowser.addElement(document.getElementById("panelFileBrowser"));

    initLayout();
    loadLayout();
}

function initLayout() {
    panelTest.initLayout(0,0,300,300,DSXDFPanel.dockRight);
    // panelFileBrowser.initLayout(0,0,300,300,DSXDFPanel.dockBottom);
    // panelView.initLayout(0,0,600,600,DSXDFPanel.dockLeft);
    // panelFileEditor.initLayout(0,0,2000,2000,DSXDFPanel.dockLeft);
}

function loadLayout() {
    // var dockLayoutStr = "a";
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        // sessionStorage.setItem(dockLayoutKey, dockLayoutStr);
    }
    dock.loadStatesFromKey(dockLayoutKey);
}

function saveLayout() {
    dock.saveStatesIntoKey(dockLayoutKey);
    // var sessionStorage = window['sessionStorage'];
    // alert(sessionStorage.getItem(dockLayoutKey));
}

function setVisible(panel, sch) {
    panel.setVisible(sch);
}

// exe
//========
$(document).ready(function(){
    console.log("[dock] start");

    $('#panelFixedTop').load("../panel/panelMenu.html", function() {
        $('#panelToolBar').load("../panel/panelToolBar.html", function() {
            panelMenuController.init();
            panelToolBarController.init();
        });
    });
    $('#panelFixedBottom').load("../panel/panelState.html", function() {
        panelStateController.init();
    });

    $('#panelTest').load("../panel/panelTest.html", function() {
        panelTestController.init();
    });
    // $('#panelView').load("../panel/panelView.html", function() {
    //     panelViewController.init();
    // });
    // $('#panelFileEditor').load("../panel/panelFileEditor.html", function() {
    //     panelFileEditorController.init();
    // });
    // $('#panelFileBrowser').load("../panel/panelFileBrowser.html", function() {
    //     panelFileBrowserController.init();
    // });

    console.log("[dock] end");
})
