var dock;
var panelTest;
// var panelView;
// var panelFileEditor;
var panelFileBrowser;
var dockLayoutKey = "dockLayout";

function initWidgetDock() {
    dock = WidgetDockController.init();
    dock.addFixedPanel(document.getElementById("panelFixedCenter"), EnumPatternPositionType.Center);
    dock.addFixedPanel(document.getElementById("panelFixedTop"), EnumPatternPositionType.Top);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), EnumPatternPositionType.Bottom);
    panelTest = dock.createFloatPanel("测试");
    panelTest.addContentDiv(document.getElementById("panelTest"));

    // panelView = dock.createFloatPanel("视图");
    // panelView.addContentDiv(document.getElementById("panelView"));

    // panelFileEditor = dock.createFloatPanel("文件编辑");
    // panelFileEditor.addContentDiv(document.getElementById("panelFileEditor"));

    panelFileBrowser = dock.createFloatPanel("文件浏览器");
    panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"));

    loadLayout();
}

function loadLayout() {
    var sessionStorage = window['sessionStorage'];
    if (sessionStorage != null) {
        // sessionStorage.setItem(dockLayoutKey, dockLayoutStr);
        var item = sessionStorage.getItem(dockLayoutKey);
        if (item != null) {
            dock.loadLayoutFromKey(dockLayoutKey);
        } else {
            initLayout();
        }
    }
}

function initLayout() {
    panelTest.initLayout(0,0,881,864,EnumPatternPositionType.Right);
    panelFileBrowser.initLayout(0,0,300,300,EnumPatternPositionType.Bottom);
    // panelView.initLayout(0,0,600,600,EnumPatternPositionType.Left);
    // panelFileEditor.initLayout(0,0,2000,2000,EnumPatternPositionType.Left);
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
    $('#panelFileBrowser').load("../panel/panelFileBrowser.html", function() {
        panelFileBrowserController.init();
    });

    console.log("[dock] end");
})
