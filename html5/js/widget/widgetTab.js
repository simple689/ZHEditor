function WidgetTab() {
    this._elementTab = null;
}

WidgetTab._classWidgetTab = "widgetTab";
WidgetTab._classWidgetTabTitleGroup = "widgetTabTitleGroup";
WidgetTab._classWidgetTabContentGroup = "widgetTabContentGroup";
WidgetTab._classWidgetTabTitle = "widgetTabTitle";
WidgetTab._classWidgetTabContent = "widgetTabContent";
WidgetTab._classIsActive = "isActive";

WidgetTab._slideSpeed = 200;
WidgetTab._enumAddContentType = {
    string: 0,
    html: 1,
    file: 2,
    fileContent: 3,
    fileJsonObj: 4
}
WidgetTab._enumOnContextMenuType = {
    tabTitle: 0,
    tabContent: 1
}
WidgetTab.prototype.init = function (elementParent, panel, htmlHome, historyItemFile) {
    this._elementTab = WidgetHtml.createElement("figure");
    elementParent.appendChild(this._elementTab);
    WidgetHtml.classAdd(this._elementTab, WidgetTab._classWidgetTab);
    this._elementTab._widgetTab = this;
    this._panel = panel;

    this.initTitleGroup();
    this.initContentGroup();
    this._elementTabList = new Array();
    this.addHomePage(htmlHome);
    if (historyItemFile) {
        this.addHistoryPage(historyItemFile);
    }
}
WidgetTab.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = WidgetHtml.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);
    WidgetHtml.classAdd(this._elementTabTitleGroup, WidgetTab._classWidgetTabTitleGroup);
    this._elementTabTitleGroup._widgetTab = this;
}
WidgetTab.prototype.initContentGroup = function () {
    this._elementTabContentGroup = WidgetHtml.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);
    WidgetHtml.classAdd(this._elementTabContentGroup, WidgetTab._classWidgetTabContentGroup);
    this._elementTabContentGroup._widgetTab = this;
}
WidgetTab.prototype.addHomePage = function (html) {
    var elementTabTitle = this.addTitle("首页");
    this.addContent(elementTabTitle, html, WidgetTab._enumAddContentType.html);
}
WidgetTab.prototype.addHistoryPage = function (historyItemFile) {
    var fileList = WidgetHistory.getFile(historyItemFile);
    if (!fileList) {
        return;
    }
    for (var o in fileList) {
        var key = o;
        if (key == 0) {
            continue;
        }
        var value = fileList[key]
        var elementTabTitle = this.addTitle(value[WidgetKey._fileName]);
        // this.addContent(elementTabTitle, value[WidgetKey._fileContent], WidgetTab._enumAddContentType.fileContent);
        this.addContent(elementTabTitle, value[WidgetKey._fileContent], WidgetTab._enumAddContentType.fileJsonObj);
    }
}
WidgetTab.prototype.addTabWithFile = function (file) {
    var elementTabTitle = this.addTitle(file.name);
    this.addContent(elementTabTitle, file, WidgetTab._enumAddContentType.file);
}
WidgetTab.prototype.addTabWithFileJsonObj = function (title, fileJsonObj) {
    var elementTabTitle = this.addTitle(title);
    this.addContent(elementTabTitle, fileJsonObj, WidgetTab._enumAddContentType.fileJsonObj);
}
WidgetTab.prototype.addTitle = function (title) {
    var elementTabTitle = WidgetHtml.createElement("li");
    this._elementTabTitleGroup.appendChild(elementTabTitle);
    WidgetHtml.classAdd(elementTabTitle, WidgetTab._classWidgetTabTitle);
    elementTabTitle._widgetTab = this;
    elementTabTitle.onclick = WidgetTab.onClickTabTitle;
    elementTabTitle.oncontextmenu = WidgetTab.onContextMenuTabTitle;
    this.setActiveElement(elementTabTitle);

    this._elementTabList.push(elementTabTitle);

    elementTabTitle.innerHTML = title;
    return elementTabTitle;
}
WidgetTab.prototype.closeTitle = function (elementTabTitle) {
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

    WidgetHistory.delFile(elementTabTitle, this._panel._historyItem);
}
WidgetTab.prototype.addContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = WidgetHtml.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    WidgetHtml.classAdd(elementTabContent, WidgetTab._classWidgetTabContent);
    elementTabContent._widgetTab = this;
    elementTabContent.onclick = WidgetTab.onClickTabContent;
    elementTabContent.oncontextmenu = WidgetTab.onContextMenuTabContent;

    elementTabTitle._elementTabContent = elementTabContent;

    this.refreshContent(elementTabTitle, content, contentType);
}
WidgetTab.prototype.refreshContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = elementTabTitle._elementTabContent;
    removeElementChild(elementTabContent);
    if (contentType == WidgetTab._enumAddContentType.string) {
        elementTabContent.innerHTML = content;
    } else if (contentType == WidgetTab._enumAddContentType.html) {
        var elementHtmlRoot = WidgetHtml.createElement("div");
        elementTabContent.appendChild(elementHtmlRoot);
        elementTabTitle._elementHtmlRoot = elementHtmlRoot;
        WidgetHtml.classAdd(elementHtmlRoot, "htmlRoot");
        elementHtmlRoot._elementTabTitle = elementTabTitle;
        if (content) {
            $(elementHtmlRoot).load(content, function () {
                WidgetTab.loadedHtml(this);
            });
        } else {
            WidgetTab.loadedHtml(elementHtmlRoot);
        }
    } else if (contentType == WidgetTab._enumAddContentType.file) {
        this.addFile(content, elementTabTitle);
    } else if (contentType == WidgetTab._enumAddContentType.fileContent || contentType == WidgetTab._enumAddContentType.fileJsonObj) {
        this.addFileContent(content, elementTabTitle, contentType);
    }
}
WidgetTab.loadedHtml = function (elementHtmlRoot) {
    //判断是否为函数
    try {
        elementHtmlRoot[0]._elementTabTitle._widgetTab._panel.loadedHtml(elementHtmlRoot);
    } catch (e) {
    }
}
WidgetTab.prototype.setActiveElement = function (elementActive) {
    this.hideActiveElement();
    this._elementActive = elementActive;
    this.showActiveElement();
}
WidgetTab.prototype.hideActiveElement = function () {
    if (this._elementActive && this._elementActive.classList.contains(WidgetTab._classIsActive)) {
        WidgetHtml.classRemove(this._elementActive, WidgetTab._classIsActive);
        // $(this._elementActive._elementTabContent).hide();
        $(this._elementActive._elementTabContent).slideUp(WidgetTab._slideSpeed);
    }
}
WidgetTab.prototype.showActiveElement = function () {
    WidgetHtml.classAdd(this._elementActive, WidgetTab._classIsActive);
    // $(elementActive._elementTabContent).show();
    $(this._elementActive._elementTabContent).slideDown(WidgetTab._slideSpeed);
}
WidgetTab.onClickTabTitle = function (e) {
    if (!this.classList.contains(WidgetTab._classIsActive)) {
        this._widgetTab.setActiveElement(this);
    }
    WidgetMenu.hideMenuAll();
}
WidgetTab.onClickTabContent = function (e) {
    WidgetMenu.hideMenuAll();
}
WidgetTab.onContextMenuTabTitle = function (e) {
    this._widgetTab._panel.tabOnContextMenu(this, e, WidgetTab._enumOnContextMenuType.tabTitle);
    return false; // 取消右键点击的默认事件
}
WidgetTab.onContextMenuTabContent = function (e) {
    this._widgetTab._panel.tabOnContextMenu(this, e, WidgetTab._enumOnContextMenuType.tabContent);
    return false; // 取消右键点击的默认事件
}
WidgetTab.prototype.addFile = function (file, elementTabTitle) {
    WidgetFile.readFile(file, elementTabTitle);
}
WidgetTab.prototype.addFileContent = function (fileContent, elementTabTitle, contentType) {
    WidgetFile.readFileContent(fileContent, elementTabTitle, contentType);
}
