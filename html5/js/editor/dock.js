var dock;
var panelView;
var panelFileBrowser;

function initDock() {
    dock = DSXDFUtil.createDSXDFUtil();
    dock.addFixedPanel(document.getElementById("panelFixedCenter"), DSXDFUtil.fixedCenter);
    dock.addFixedPanel(document.getElementById("panelFixedTop"), DSXDFUtil.fixedTop);
    dock.addFixedPanel(document.getElementById("panelFixedBottom"), DSXDFUtil.fixedBottom);

    panelView = dock.createDFPanel("视图");
    panelView.addContentDiv(document.getElementById("panelView"), 0);
    panelView.initLayout(0,0,600,600,DSXDFPanel.dockTop);

    panelFileBrowser = dock.createDFPanel("文件浏览器");
    panelFileBrowser.addContentDiv(document.getElementById("panelFileBrowser"), 0);
    panelFileBrowser.initLayout(150,300,400,200,DSXDFPanel.dockBottom);
}

function setVisible(panel, sch) {
    panel.setVisible(sch);
}

// exe
//========
$(document).ready(function(){
    console.log("[editorDock]");

    $('#panelView').load('../panel/panelView.html');
    $('#panelFileBrowser').load('../panel/panelFileBrowser.html');
})
