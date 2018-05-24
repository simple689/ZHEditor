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
    string : 0,
    fileContent : 1,
    file : 2
}
WidgetTabController.prototype.init = function (elementParent, panel) {
    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);
    this._elementTab.classList.add(WidgetTabController._classWidgetTab);
    this._elementTab._widgetTabController = this;
    this._panel = panel;

    this.initTitleGroup();
    this.initContentGroup();
    this._elementTabList = new Array();
    this.addHomePage();
    this.addHistoryPage();
    this._menuRightTitle = WidgetMenuController.createMenu(document.documentElement, "../../editor/menu/menuFileEditorTitle.html");
    this._menuRightContent = WidgetMenuController.createMenu(document.documentElement, "../../editor/menu/menuFileEditorContent.html");
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
WidgetTabController.prototype.addHomePage = function () {
    var elementTabTitle = this.addTitle("首页");
    this.addContent(elementTabTitle, "首页内容", WidgetTabController._addContentType.string);
}
WidgetTabController.prototype.addHistoryPage = function () {
    var fileList = WidgetHistoryController.getFile();
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
WidgetTabController.prototype.addContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    elementTabContent.classList.add(WidgetTabController._classWidgetTabContent);
    elementTabContent._widgetTabController = this;
    elementTabContent.onclick = WidgetTabController.tabContentOnClick;
    elementTabContent.oncontextmenu = WidgetTabController.tabContentOnContextMenu;

    elementTabTitle._elementTabContent = elementTabContent;

    if (contentType == WidgetTabController._addContentType.string) {
        elementTabContent.textContent = content;
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
    this._widgetTabController.hideMenu();
}
WidgetTabController.tabContentOnClick = function (e) {
    this._widgetTabController.hideMenu();
}
WidgetTabController.tabTitleOnContextMenu = function (e) {
    this._widgetTabController.hideMenu();
    WidgetMenuController.showMenu(this._widgetTabController._menuRightTitle, e);
    return false; //取消右键点击的默认事件
}
WidgetTabController.tabContentOnContextMenu = function (e) {
    this._widgetTabController.hideMenu();
    WidgetMenuController.showMenu(this._widgetTabController._menuRightContent, e);
    return false; //取消右键点击的默认事件
}
WidgetTabController.prototype.addFileContent = function (fileContent, elementTabTitle) {
    WidgetFileController.readFileContent(fileContent, elementTabTitle);
}
WidgetTabController.prototype.addFile = function (file, elementTabTitle) {
    WidgetFileController.readFile(file, elementTabTitle);
}
WidgetTabController.prototype.hideMenu = function () {
    WidgetMenuController.hideMenu(this._menuRightTitle);
    WidgetMenuController.hideMenu(this._menuRightContent);
}
