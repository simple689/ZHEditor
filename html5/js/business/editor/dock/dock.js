var dock;
var panelTest;
var panelView;
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

    panelFileBrowser = dock.createDFPanel("文件浏览器");
    panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"), 0);

    initLayout();
}

function initLayout() {
    panelTest.initLayout(0,0,60,600,DSXDFPanel.dockLeft);
    panelView.initLayout(0,0,600,600,DSXDFPanel.dockTop);
    panelFileBrowser.initLayout(150,300,400,200,DSXDFPanel.dockBottom);
}

function setVisible(panel, sch) {
    panel.setVisible(sch);
}

// exe
//========
$(document).ready(function(){
    console.log("[dock] start");

    $('#panelView').load('../panel/panelView.html');
    $('#panelTest').load('../panel/panelTest.html');
    $('#panelFileBrowser').load('../panel/panelFileBrowser.html');

    console.log("[dock] end");
})
