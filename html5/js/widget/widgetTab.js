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
WidgetTabController._addContentType = {
    string : 0,
    fileContent : 1,
    file : 2
};
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
    this.addHistoryPage();
    this.initRightMenu();
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
    this.addContent(elementTabTitle, "首页内容", WidgetTabController._addContentType.string);
};
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
};
WidgetTabController.prototype.addTab = function (file) {
    var elementTabTitle = this.addTitle(file.name);
    this.addContent(elementTabTitle, file, WidgetTabController._addContentType.file);
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

    elementTabTitle.oncontextmenu = WidgetTabController.tabTitleOnContextMenu;
    return elementTabTitle;
};
WidgetTabController.prototype.addContent = function (elementTabTitle, content, contentType) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);
    elementTabContent.classList.add(WidgetTabController._classWidgetTabContent);
    elementTabContent._widgetTabController = this;

    elementTabTitle._elementTabContent = elementTabContent;

    if (contentType == WidgetTabController._addContentType.string) {
        elementTabContent.textContent = content;
    } else if (contentType == WidgetTabController._addContentType.fileContent) {
        this.addFileContent(content, elementTabTitle);
    } else if (contentType == WidgetTabController._addContentType.file) {
        this.addFile(content, elementTabTitle);
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
    this._widgetTabController._rightMenu.style.display = 'none'; //再次点击，菜单消失
};
WidgetTabController.tabTitleOnContextMenu = function (e) {
    var e = e || window.event;
    this._widgetTabController._rightMenu.style.display = "block"; //显示菜单
    this._widgetTabController._rightMenu.style.left = e.clientX+'px'; //菜单定位
    this._widgetTabController._rightMenu.style.top = '8px'; //菜单定位
    // this._widgetTabController._rightMenu.style.top = e.clientY+'px'; //菜单定位
    return false; //取消右键点击的默认事件
};
WidgetTabController.prototype.addFileContent = function (fileContent, elementTabTitle) {
    this._panel._widgetFileController.readFileContent(fileContent, elementTabTitle);
};
WidgetTabController.prototype.addFile = function (file, elementTabTitle) {
    this._panel._widgetFileController.readFile(file, elementTabTitle);
};
WidgetTabController.prototype.initRightMenu = function () {
    this._rightMenu = document.createElement("div");
    elementParent.appendChild(this._rightMenu);
    this._rightMenu.classList.add("rightMenu");

    var elementUL = document.createElement("ul");
    this._rightMenu.appendChild(elementUL);

    var elementLi = document.createElement("li");
    elementUL.appendChild(elementLi);
    elementLi.innerHTML = "aaa";

    var elementLi_0 = document.createElement("li");
    elementUL.appendChild(elementLi_0);
    elementLi_0.innerHTML = "bbb";

    var elementUL_0 = document.createElement("ul");
    elementLi_0.appendChild(elementUL_0);

    var elementLi_1 = document.createElement("li");
    elementUL_0.appendChild(elementLi_1);
    elementLi_1.innerHTML = "ccc";

    //  var li = document.getElementsByTagName('li');
    //  for(var i=0;i<li.length;i++){
    //      li.onmouseover = function(){
    //          this.classname = "active";
    //      }
    //      li.onmouseout = function(){
    //          this.classname = "";
    //      }
    //  }
};
