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
WidgetTabController.prototype.init = function (elementParent, panel) {
    this._elementTab = document.createElement("figure");
    elementParent.appendChild(this._elementTab);

    this._panel = panel;
    this._elementTab._widgetTabController = this;

    $(this._elementTab).addClass(WidgetTabController._classWidgetTab);

    this.initTitleGroup();
    this.initContentGroup();
    this._elementTabList = new Array();
    this.addHomePage();
};
WidgetTabController.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);

    this._elementTabTitleGroup._widgetTabController = this;

    $(this._elementTabTitleGroup).addClass(WidgetTabController._classWidgetTabTitleGroup);
};
WidgetTabController.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);

    this._elementTabContentGroup._widgetTabController = this;

    $(this._elementTabContentGroup).addClass(WidgetTabController._classWidgetTabContentGroup);
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

    elementTabTitle._widgetTabController = this;

    $(elementTabTitle).addClass(WidgetTabController._classWidgetTabTitle);

    elementTabTitle.textContent = title;

    this._elementTabList.push(elementTabTitle);

    this.setActiveElement(elementTabTitle);

    elementTabTitle.onclick = WidgetTabController.tabTitleOnClick;

    return elementTabTitle;
};
WidgetTabController.prototype.addContent = function (elementTabTitle, content, isFile) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);

    elementTabContent._widgetTabController = this;

    $(elementTabContent).addClass(WidgetTabController._classWidgetTabContent);

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
    $(elementActive).addClass(WidgetTabController._classIsActive);
    // $(elementActive._elementTabContent).show();
    $(elementActive._elementTabContent).slideDown(WidgetTabController._slideSpeed);
};
WidgetTabController.prototype.hideActiveElement = function () {
    if (this._elementActive && $(this._elementActive).hasClass(WidgetTabController._classIsActive)) {
        $(this._elementActive).removeClass(WidgetTabController._classIsActive);
        // $(this._elementActive._elementTabContent).hide();
        $(this._elementActive._elementTabContent).slideUp(WidgetTabController._slideSpeed);
    }
};
WidgetTabController.tabTitleOnClick = function (e) {
    if (!$(this).hasClass(WidgetTabController._classIsActive)) {
        this._widgetTabController.setActiveElement(this);
    }
};
WidgetTabController.prototype.addFile = function (file, elementParent) {
    this._panel._widgetFileController.readFile(file, elementParent, this);
};
