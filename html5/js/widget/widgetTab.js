function WidgetTabCtrl() {
    this._elementTab = null;
}

WidgetTabCtrl._classWidgetTab = "widgetTab";
WidgetTabCtrl._classWidgetTabTitleGroup = "widgetTabTitleGroup";
WidgetTabCtrl._classWidgetTabContentGroup = "widgetTabContentGroup";
WidgetTabCtrl._classWidgetTabTitle = "widgetTabTitle";
WidgetTabCtrl._classWidgetTabContent = "widgetTabContent";
WidgetTabCtrl._classIsActive = "isActive";
WidgetTabCtrl._slideSpeed = 200;
WidgetTabCtrl._addContentType = {
    string: 0,
    html: 1,
    fileContent: 2,
    file: 3
}
WidgetTabCtrl._onContextMenuType = {
    tabTitle: 0,
    tabContent: 1
}
WidgetTabCtrl.prototype.init = function (elementParent, panel, htmlHome, historyItemFile) {
    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);
    this._elementTab.classList.add(WidgetTabCtrl._classWidgetTab);
    this._elementTab._widgetTabCtrl = this;
    this._panel = panel;

    this.initTitleGroup();
    this.initContentGroup();
    this._elementTabList = new Array();
    this.addHomePage(htmlHome);
    this.addHistoryPage(historyItemFile);
}
WidgetTabCtrl.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);
    this._elementTabTitleGroup.classList.add(WidgetTabCtrl._classWidgetTabTitleGroup);
    this._elementTabTitleGroup._widgetTabCtrl = this;
}
WidgetTabCtrl.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);
    this._elementTabContentGroup.classList.add(WidgetTabCtrl._classWidgetTabContentGroup);
    this._elementTabContentGroup._widgetTabCtrl = this;
}
WidgetTabCtrl.prototype.addHomePage = function (html) {
    var elementTabTitle = this.addTitle("首页");
    this.addContent(elementTabTitle, html, WidgetTabCtrl._addContentType.html);
}
WidgetTabCtrl.prototype.addHistoryPage = function (historyItemFile) {
    var fileList = WidgetHistoryCtrl.getFile(historyItemFile);
    if (!fileList) {
        return;
    }
    for (var o in fileList) {
        var key = o;
        if (key == 0) {
            continue;
        }
        var value = fileList[key]
        var elementTabTitle = this.addTitle(value[WidgetHistoryCtrl._keyFileName]);
        this.addContent(elementTabTitle, value[WidgetHistoryCtrl._keyFileContent], WidgetTabCtrl._addContentType.fileContent);
    }
}
WidgetTabCtrl.prototype.addTab = function (file) {
    var elementTabTitle = this.addTitle(file.name);
    this.addContent(elementTabTitle, file, WidgetTabCtrl._addContentType.file);
}
WidgetTabCtrl.prototype.addTitle = function (title) {
    var elementTabTitle = document.createElement("li");
    this._elementTabTitleGroup.appendChild(elementTabTitle);
    elementTabTitle.classList.add(WidgetTabCtrl._classWidgetTabTitle);
    elementTabTitle._widgetTabCtrl = this;
    elementTabTitle.onclick = WidgetTabCtrl.onClickTabTitle;
    elementTabTitle.oncontextmenu = WidgetTabCtrl.onContextMenuTabTitle;
    this.setActiveElement(elementTabTitle);

    this._elementTabList.push(elementTabTitle);

    elementTabTitle.innerHTML = title;
    return elementTabTitle;
}
WidgetTabCtrl.prototype.closeTitle = function (elementTabTitle) {
    var index = this._elementTabList.indexOf(elementTabTitle);
    var indexActive;
    if (index == (this._elementTabList.length - 1)) { // 最后一位，找前一位
        indexActive = index - 1;
    } else { // 不是最后一位，找后一位
        indexActive = index + 1;
    }
    if (indexActive >= 0) {
        this.setActiveElement(this._elementTabList[indexActive]);
    }
    this._elementTabList.splice(index, 1);
    this._elementTabContentGroup.removeChild(elementTabTitle._elementTabContent);
    this._elementTabTitleGroup.removeChild(elementTabTitle);

    WidgetHistoryCtrl.delFile(elementTabTitle, this._panel._historyItemFile);
}
WidgetTabCtrl.prototype.addContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    elementTabContent.classList.add(WidgetTabCtrl._classWidgetTabContent);
    elementTabContent._widgetTabCtrl = this;
    elementTabContent.onclick = WidgetTabCtrl.onClickTabContent;
    elementTabContent.oncontextmenu = WidgetTabCtrl.onContextMenuTabContent;

    elementTabTitle._elementTabContent = elementTabContent;

    if (contentType == WidgetTabCtrl._addContentType.string) {
        elementTabContent.innerHTML = content;
    } else if (contentType == WidgetTabCtrl._addContentType.html) {
        var elementHtmlRoot = document.createElement("div");
        elementTabTitle._elementTabContent.appendChild(elementHtmlRoot);
        elementTabTitle._elementHtmlRoot = elementHtmlRoot;
        elementHtmlRoot.classList.add("htmlRoot");
        elementHtmlRoot._elementTabTitle = elementTabTitle;
        $(elementHtmlRoot).load(content, function () {
            //判断是否为函数
            try {
                this[0]._elementTabTitle._widgetTabCtrl._panel.loadedHtml(this);
            } catch (e) {
            }
        });
    } else if (contentType == WidgetTabCtrl._addContentType.fileContent) {
        this.addFileContent(content, elementTabTitle);
    } else if (contentType == WidgetTabCtrl._addContentType.file) {
        this.addFile(content, elementTabTitle);
    }
}
WidgetTabCtrl.prototype.setActiveElement = function (elementActive) {
    this.hideActiveElement();
    this._elementActive = elementActive;
    this.showActiveElement();
}
WidgetTabCtrl.prototype.hideActiveElement = function () {
    if (this._elementActive && this._elementActive.classList.contains(WidgetTabCtrl._classIsActive)) {
        this._elementActive.classList.remove(WidgetTabCtrl._classIsActive);
        // $(this._elementActive._elementTabContent).hide();
        $(this._elementActive._elementTabContent).slideUp(WidgetTabCtrl._slideSpeed);
    }
}
WidgetTabCtrl.prototype.showActiveElement = function () {
    this._elementActive.classList.add(WidgetTabCtrl._classIsActive);
    // $(elementActive._elementTabContent).show();
    $(this._elementActive._elementTabContent).slideDown(WidgetTabCtrl._slideSpeed);
}
WidgetTabCtrl.onClickTabTitle = function (e) {
    if (!this.classList.contains(WidgetTabCtrl._classIsActive)) {
        this._widgetTabCtrl.setActiveElement(this);
    }
    WidgetMenuCtrl.hideMenuAll();
}
WidgetTabCtrl.onClickTabContent = function (e) {
    WidgetMenuCtrl.hideMenuAll();
}
WidgetTabCtrl.onContextMenuTabTitle = function (e) {
    this._widgetTabCtrl._panel.tabOnContextMenu(this, e, WidgetTabCtrl._onContextMenuType.tabTitle);
    return false; //取消右键点击的默认事件
}
WidgetTabCtrl.onContextMenuTabContent = function (e) {
    this._widgetTabCtrl._panel.tabOnContextMenu(this, e, WidgetTabCtrl._onContextMenuType.tabContent);
    return false; //取消右键点击的默认事件
}
WidgetTabCtrl.prototype.addFileContent = function (fileContent, elementTabTitle) {
    WidgetFileCtrl.readFileContent(fileContent, elementTabTitle);
}
WidgetTabCtrl.prototype.addFile = function (file, elementTabTitle) {
    WidgetFileCtrl.readFile(file, elementTabTitle);
}
