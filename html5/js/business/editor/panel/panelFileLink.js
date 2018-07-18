function PanelFileLink() {
    WidgetPanelFileBase.call(this);
}

PanelFileLink.prototype = new WidgetPanelFileBase();
PanelFileLink.prototype.constructor = PanelFileLink;

PanelFileLink.prototype.init = function (elementRoot) {
    WidgetPanelFileBase.prototype.init.apply(this, arguments);

    this._historyItem = WidgetKey._panelFileLink;
    this._widgetTab.init(this._dropElement, this, "../../editor/home/homeFileLink.html", this._historyItem);

    this._menuRightTitle.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldTitle.html");
    this._menuRightContent.createMenuWithHtml(document.body, "../../editor/menu/menuFileMouldContent.html");
}

PanelFileLink.prototype.loadedJson = function (fileReader) {
    var fileName = fileReader._elementTabTitle.innerHTML;
}
