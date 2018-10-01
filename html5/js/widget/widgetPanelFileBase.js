function WidgetPanelFileBase() {
    WidgetPanelBase.call(this);
}

WidgetPanelFileBase.prototype = new WidgetPanelBase();
WidgetPanelFileBase.prototype.constructor = WidgetPanelFileBase;

WidgetPanelFileBase.prototype.init = function (elementParentID) {
    WidgetPanelBase.prototype.init.apply(this, arguments);

    var elementParent = getElementById(this._elementParentID);

    this._dropElement = WidgetDrop.addDrop(elementParent, this);

    this._historyItem = confPanelFileMould;
    this._widgetTab = new WidgetTab();

    this._menuRightTitle = new WidgetMenu();
    this._menuRightContent = new WidgetMenu();
}
WidgetPanelFileBase.prototype.handleFiles = function (fileList) {
    for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        this._widgetTab.addTabWithFile(file);
    }
}
WidgetPanelFileBase.prototype.tabOnContextMenu = function (ele, e, onContextMenuType) {
    switch (onContextMenuType) {
        case WidgetTab._enumOnContextMenuType.tabTitle : {
            WidgetMenu.showMenu(this._menuRightTitle, e, ele);
            break;
        }
        case WidgetTab._enumOnContextMenuType.tabTitle : {
            WidgetMenu.showMenu(this._menuRightContent, e, ele);
            break;
        }
    }
}
WidgetPanelFileBase.prototype.loadedHtml = function (htmlRoot) {
}
WidgetPanelFileBase.prototype.loadedJson = function (fileReader) {
}
