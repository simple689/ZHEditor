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
WidgetTab._addContentType = {
    string: 0,
    html: 1,
    fileContent: 2,
    file: 3
}
WidgetTab._onContextMenuType = {
    tabTitle: 0,
    tabContent: 1
}
WidgetTab.prototype.init = function (elementParent, panel, htmlHome, historyItemFile) {
    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);
    this._elementTab.classList.add(WidgetTab._classWidgetTab);
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
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);
    this._elementTabTitleGroup.classList.add(WidgetTab._classWidgetTabTitleGroup);
    this._elementTabTitleGroup._widgetTab = this;
}
WidgetTab.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);
    this._elementTabContentGroup.classList.add(WidgetTab._classWidgetTabContentGroup);
    this._elementTabContentGroup._widgetTab = this;
}
WidgetTab.prototype.addHomePage = function (html) {
    var elementTabTitle = this.addTitle("首页");
    this.addContent(elementTabTitle, html, WidgetTab._addContentType.html);
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
        this.addContent(elementTabTitle, value[WidgetKey._fileContent], WidgetTab._addContentType.fileContent);
    }
}
WidgetTab.prototype.addTab = function (file) {
    var elementTabTitle = this.addTitle(file.name);
    this.addContent(elementTabTitle, file, WidgetTab._addContentType.file);
}
WidgetTab.prototype.addTitle = function (title) {
    var elementTabTitle = document.createElement("li");
    this._elementTabTitleGroup.appendChild(elementTabTitle);
    elementTabTitle.classList.add(WidgetTab._classWidgetTabTitle);
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

    WidgetHistory.delFile(elementTabTitle, this._panel._historyItemFile);
}
WidgetTab.prototype.addContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    elementTabContent.classList.add(WidgetTab._classWidgetTabContent);
    elementTabContent._widgetTab = this;
    elementTabContent.onclick = WidgetTab.onClickTabContent;
    elementTabContent.oncontextmenu = WidgetTab.onContextMenuTabContent;

    elementTabTitle._elementTabContent = elementTabContent;

    if (contentType == WidgetTab._addContentType.string) {
        elementTabContent.innerHTML = content;
    } else if (contentType == WidgetTab._addContentType.html) {
        var elementHtmlRoot = document.createElement("div");
        elementTabTitle._elementTabContent.appendChild(elementHtmlRoot);
        elementTabTitle._elementHtmlRoot = elementHtmlRoot;
        elementHtmlRoot.classList.add("htmlRoot");
        elementHtmlRoot._elementTabTitle = elementTabTitle;
        $(elementHtmlRoot).load(content, function () {
            //判断是否为函数
            try {
                this[0]._elementTabTitle._widgetTab._panel.loadedHtml(this);
            } catch (e) {
            }
        });
    } else if (contentType == WidgetTab._addContentType.fileContent) {
        this.addFileContent(content, elementTabTitle);
    } else if (contentType == WidgetTab._addContentType.file) {
        this.addFile(content, elementTabTitle);
    }
}
WidgetTab.prototype.setActiveElement = function (elementActive) {
    this.hideActiveElement();
    this._elementActive = elementActive;
    this.showActiveElement();
}
WidgetTab.prototype.hideActiveElement = function () {
    if (this._elementActive && this._elementActive.classList.contains(WidgetTab._classIsActive)) {
        this._elementActive.classList.remove(WidgetTab._classIsActive);
        // $(this._elementActive._elementTabContent).hide();
        $(this._elementActive._elementTabContent).slideUp(WidgetTab._slideSpeed);
    }
}
WidgetTab.prototype.showActiveElement = function () {
    this._elementActive.classList.add(WidgetTab._classIsActive);
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
    this._widgetTab._panel.tabOnContextMenu(this, e, WidgetTab._onContextMenuType.tabTitle);
    return false; //取消右键点击的默认事件
}
WidgetTab.onContextMenuTabContent = function (e) {
    this._widgetTab._panel.tabOnContextMenu(this, e, WidgetTab._onContextMenuType.tabContent);
    return false; //取消右键点击的默认事件
}
WidgetTab.prototype.addFileContent = function (fileContent, elementTabTitle) {
    WidgetFile.readFileContent(fileContent, elementTabTitle);
}
WidgetTab.prototype.addFile = function (file, elementTabTitle) {
    WidgetFile.readFile(file, elementTabTitle);
}
