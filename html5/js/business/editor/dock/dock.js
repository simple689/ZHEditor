var dock;
var panelTest;
var panelView;
var panelFileEditor;
var panelFileBrowser;

function initDock() {
    dock = DSXDFUtil.createDSXDFUtil();
    dock.addFixedPanel(document.getElementById("panelFixedCenter"), DSXDFUtil.fixedCenter);
    dock.addFixedPanel(document.getElementById("panelFixedTop"), DSXDFUtil.fixedTop);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), DSXDFUtil.fixedBottom);

    panelTest = dock.createDFPanel("测试");
    panelTest.addContentDiv(document.getElementById("panelTest"), 0);

    panelView = dock.createDFPanel("视图");
    panelView.addContentDiv(document.getElementById("panelView"), 0);

    panelFileEditor = dock.createDFPanel("文件编辑");
    panelFileEditor.addContentDiv(document.getElementById("panelFileEditor"), 0);

    panelFileBrowser = dock.createDFPanel("文件浏览器");
    panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"), 0);

    initLayout();
}

function initLayout() {
    panelTest.initLayout(0,0,300,300,DSXDFPanel.dockRight);
    panelFileBrowser.initLayout(0,0,300,300,DSXDFPanel.dockBottom);
    panelView.initLayout(0,0,600,600,DSXDFPanel.dockLeft);
    panelFileEditor.initLayout(0,0,2000,2000,DSXDFPanel.dockLeft);
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
    $('#panelView').load("../panel/panelView.html", function() {
        panelViewController.init();
    });
    $('#panelFileEditor').load("../panel/panelFileEditor.html", function() {
        panelFileEditorController.init();
    });
    $('#panelFileBrowser').load("../panel/panelFileBrowser.html", function() {
        panelFileBrowserController.init();
    });

    console.log("[dock] end");
})
