function WidgetTabController() {
    this._elementTab = null;
}

WidgetTabController._classWidgetTab = "widgetTab";
WidgetTabController._classWidgetTabTitleGroup = "widgetTabTitleGroup";
WidgetTabController._classWidgetTabContentGroup = "widgetTabContentGroup";
WidgetTabController._classWidgetTabTitle = "widgetTabTitle";
WidgetTabController._classWidgetTabContent = "widgetTabContent";
WidgetTabController._classIsActive = "isActive";
WidgetTabController._slideSpeed = 200;
WidgetTabController._addContentType = {
    string: 0,
    html: 1,
    fileContent: 2,
    file: 3
}
WidgetTabController._onContextMenuType = {
    tabTitle: 0,
    tabContent: 1
}
WidgetTabController.prototype.init = function (elementParent, panel, htmlHome, historyItemFile) {
    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);
    this._elementTab.classList.add(WidgetTabController._classWidgetTab);
    this._elementTab._widgetTabController = this;
    this._panel = panel;

    this.initTitleGroup();
    this.initContentGroup();
    this._elementTabList = new Array();
    this.addHomePage(htmlHome);
    this.addHistoryPage(historyItemFile);
}
WidgetTabController.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);
    this._elementTabTitleGroup.classList.add(WidgetTabController._classWidgetTabTitleGroup);
    this._elementTabTitleGroup._widgetTabController = this;
}
WidgetTabController.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);
    this._elementTabContentGroup.classList.add(WidgetTabController._classWidgetTabContentGroup);
    this._elementTabContentGroup._widgetTabController = this;
}
WidgetTabController.prototype.addHomePage = function (html) {
    var elementTabTitle = this.addTitle("首页");
    this.addContent(elementTabTitle, html, WidgetTabController._addContentType.html);
}
WidgetTabController.prototype.addHistoryPage = function (historyItemFile) {
    var fileList = WidgetHistoryController.getFile(historyItemFile);
    if (!fileList) {
        return;
    }
    for (var o in fileList) {
        var key = o;
        if (key == 0) {
            continue;
        }
        var value = fileList[key]
        var elementTabTitle = this.addTitle(value[WidgetHistoryController._keyFileName]);
        this.addContent(elementTabTitle, value[WidgetHistoryController._keyFileContent], WidgetTabController._addContentType.fileContent);
    }
}
WidgetTabController.prototype.addTab = function (file) {
    var elementTabTitle = this.addTitle(file.name);
    this.addContent(elementTabTitle, file, WidgetTabController._addContentType.file);
}
WidgetTabController.prototype.addTitle = function (title) {
    var elementTabTitle = document.createElement("li");
    this._elementTabTitleGroup.appendChild(elementTabTitle);
    elementTabTitle.classList.add(WidgetTabController._classWidgetTabTitle);
    elementTabTitle._widgetTabController = this;
    elementTabTitle.onclick = WidgetTabController.tabTitleOnClick;
    elementTabTitle.oncontextmenu = WidgetTabController.tabTitleOnContextMenu;
    this.setActiveElement(elementTabTitle);

    this._elementTabList.push(elementTabTitle);

    elementTabTitle.textContent = title;
    return elementTabTitle;
}
WidgetTabController.prototype.closeTitle = function (elementTabTitle) {
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

    WidgetHistoryController.delFile(elementTabTitle, this._panel._historyItemFile);
}
WidgetTabController.prototype.addContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    elementTabContent.classList.add(WidgetTabController._classWidgetTabContent);
    elementTabContent._widgetTabController = this;
    elementTabContent.onclick = WidgetTabController.tabContentOnClick;
    elementTabContent.oncontextmenu = WidgetTabController.tabContentOnContextMenu;

    elementTabTitle._elementTabContent = elementTabContent;

    if (contentType == WidgetTabController._addContentType.string) {
        elementTabContent.innerHTML = content;
    } else if (contentType == WidgetTabController._addContentType.html) {
        var elementHtmlRoot = document.createElement("div");
        elementTabTitle._elementTabContent.appendChild(elementHtmlRoot);
        elementTabTitle._elementHtmlRoot = elementHtmlRoot;
        elementHtmlRoot.classList.add("htmlRoot");
        elementHtmlRoot._elementTabTitle = elementTabTitle;
        $(elementHtmlRoot).load(content, function () {
            this._elementTabTitle._widgetTabController._panel.loadedHtml(this);
        });
    } else if (contentType == WidgetTabController._addContentType.fileContent) {
        this.addFileContent(content, elementTabTitle);
    } else if (contentType == WidgetTabController._addContentType.file) {
        this.addFile(content, elementTabTitle);
    }
}
WidgetTabController.prototype.setActiveElement = function (elementActive) {
    this.hideActiveElement();
    this._elementActive = elementActive;
    this.showActiveElement();
}
WidgetTabController.prototype.hideActiveElement = function () {
    if (this._elementActive && this._elementActive.classList.contains(WidgetTabController._classIsActive)) {
        this._elementActive.classList.remove(WidgetTabController._classIsActive);
        // $(this._elementActive._elementTabContent).hide();
        $(this._elementActive._elementTabContent).slideUp(WidgetTabController._slideSpeed);
    }
}
WidgetTabController.prototype.showActiveElement = function () {
    this._elementActive.classList.add(WidgetTabController._classIsActive);
    // $(elementActive._elementTabContent).show();
    $(this._elementActive._elementTabContent).slideDown(WidgetTabController._slideSpeed);
}
WidgetTabController.tabTitleOnClick = function (e) {
    if (!this.classList.contains(WidgetTabController._classIsActive)) {
        this._widgetTabController.setActiveElement(this);
    }
    WidgetMenuController.hideMenuAll();
}
WidgetTabController.tabContentOnClick = function (e) {
    WidgetMenuController.hideMenuAll();
}
WidgetTabController.tabTitleOnContextMenu = function (e) {
    this._widgetTabController._panel.tabOnContextMenu(this, e, WidgetTabController._onContextMenuType.tabTitle);
    return false; //取消右键点击的默认事件
}
WidgetTabController.tabContentOnContextMenu = function (e) {
    this._widgetTabController._panel.tabOnContextMenu(this, e, WidgetTabController._onContextMenuType.tabContent);
    return false; //取消右键点击的默认事件
}
WidgetTabController.prototype.addFileContent = function (fileContent, elementTabTitle) {
    WidgetFileController.readFileContent(fileContent, elementTabTitle);
}
WidgetTabController.prototype.addFile = function (file, elementTabTitle) {
    WidgetFileController.readFile(file, elementTabTitle);
}
