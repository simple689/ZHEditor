function WidgetTabController() {
    this._elementTab = null;
};
WidgetTabController._classWidgetTab = "widgetTab";
WidgetTabController._classWidgetTabTitleGroup = "widgetTabTitleGroup";
WidgetTabController._classWidgetTabContentGroup = "widgetTabContentGroup";
WidgetTabController._classWidgetTabTitle = "widgetTabTitle";
WidgetTabController._classWidgetTabContent = "widgetTabContent";
WidgetTabController._classIsActive = "isActive";
WidgetTabController._slideSpeed = 200;
WidgetTabController.prototype.init = function (panel, elementParent) {
    this._panel = panel;

    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);
    this._elementTab.classList.add(WidgetTabController._classWidgetTab);
    this._elementTab._widgetTabController = this;

    this.initTitleGroup();
    this.initContentGroup();
    this._elementTabList = new Array();
    this.addHomePage();
};
WidgetTabController.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);
    this._elementTabTitleGroup.classList.add(WidgetTabController._classWidgetTabTitleGroup);
    this._elementTabTitleGroup._widgetTabController = this;
};
WidgetTabController.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);
    this._elementTabContentGroup.classList.add(WidgetTabController._classWidgetTabContentGroup);
    this._elementTabContentGroup._widgetTabController = this;
};
WidgetTabController.prototype.addHomePage = function () {
    var elementTabTitle = this.addTitle("首页");
    this.addContent(elementTabTitle, "首页内容", false);
};
WidgetTabController.prototype.addTab = function (file) {
    var elementTabTitle = this.addTitle(file.name);
    this.addContent(elementTabTitle, file, true);
};
WidgetTabController.prototype.addTitle = function (title) {
    var elementTabTitle = document.createElement("li");
    this._elementTabTitleGroup.appendChild(elementTabTitle);
    elementTabTitle.classList.add(WidgetTabController._classWidgetTabTitle);
    elementTabTitle._widgetTabController = this;

    this._elementTabList.push(elementTabTitle);

    elementTabTitle.onclick = WidgetTabController.tabTitleOnClick;

    this.setActiveElement(elementTabTitle);

    elementTabTitle.textContent = title;
    return elementTabTitle;
};
WidgetTabController.prototype.addContent = function (elementTabTitle, content, isFile) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    elementTabContent.classList.add(WidgetTabController._classWidgetTabContent);
    elementTabContent._widgetTabController = this;

    elementTabTitle._elementTabContent = elementTabContent;

    if (isFile) {
        this.addFile(content, elementTabContent);
    } else {
        elementTabContent.textContent = content;
    }
};
WidgetTabController.prototype.setActiveElement = function (elementActive) {
    this.hideActiveElement();
    this._elementActive = elementActive;
    this.showActiveElement();
};
WidgetTabController.prototype.hideActiveElement = function () {
    if (this._elementActive && this._elementActive.classList.contains(WidgetTabController._classIsActive)) {
        this._elementActive.classList.remove(WidgetTabController._classIsActive);
        // $(this._elementActive._elementTabContent).hide();
        $(this._elementActive._elementTabContent).slideUp(WidgetTabController._slideSpeed);
    }
};
WidgetTabController.prototype.showActiveElement = function () {
    this._elementActive.classList.add(WidgetTabController._classIsActive);
    // $(elementActive._elementTabContent).show();
    $(this._elementActive._elementTabContent).slideDown(WidgetTabController._slideSpeed);
};
WidgetTabController.tabTitleOnClick = function (e) {
    if (!this.classList.contains(WidgetTabController._classIsActive)) {
        this._widgetTabController.setActiveElement(this);
    }
};
WidgetTabController.prototype.addFile = function (file, elementTabContent) {
    this._panel._widgetFileController.readFile(file, elementTabContent, this);
};
