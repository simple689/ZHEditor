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
    var elementTabTitle = this.initTitle();
    this.initContentGroup();
    this.initContent(elementTabTitle);
};
WidgetTabController.prototype.initTitleGroup = function () {
    this._elementTabTitleGroup = document.createElement("ul");
    this._elementTab.appendChild(this._elementTabTitleGroup);

    this._elementTabTitleGroup._widgetTabController = this;

    $(this._elementTabTitleGroup).addClass(WidgetTabController._classWidgetTabTitleGroup);

};
WidgetTabController.prototype.initTitle = function () {
    this._elementTabTitleList = new Array();
    return this.addTitle("首页");
};
WidgetTabController.prototype.initContentGroup = function () {
    this._elementTabContentGroup = document.createElement("div");
    this._elementTab.appendChild(this._elementTabContentGroup);

    this._elementTabContentGroup._widgetTabController = this;

    $(this._elementTabContentGroup).addClass(WidgetTabController._classWidgetTabContentGroup);

};
WidgetTabController.prototype.initContent = function (elementTabTitle) {
    this._elementTabContentList = new Array();
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

    this._elementTabTitleList.push(elementTabTitle);

    if (this._elementActive && $(this._elementActive).hasClass(WidgetTabController._classIsActive)) {
        $(this._elementActive).removeClass(WidgetTabController._classIsActive);
        $(this._elementActive._elementContent).hide();
    }
    this._elementActive = elementTabTitle;
    $(elementTabTitle).addClass(WidgetTabController._classIsActive);

    this.bindUIAction(elementTabTitle);

    return elementTabTitle;
};
WidgetTabController.prototype.addContent = function (elementTabTitle, content, isFile) {
    var elementTabContent = document.createElement("div");
    this._elementTabContentGroup.appendChild(elementTabContent);

    elementTabContent._widgetTabController = this;

    $(elementTabContent).addClass(WidgetTabController._classWidgetTabContent);

    if (isFile) {
        this.addFile(content, elementTabContent);
    } else {
        elementTabContent.textContent = content;
    }

    this._elementTabContentList.push(elementTabContent);

    this.hideInactive(elementTabTitle, elementTabContent);
};
WidgetTabController.prototype.addFile = function (file, elementParent) {
    this._panel._widgetFileController.readFile(file, elementParent, this);
};
WidgetTabController.prototype.bindUIAction = function (elementTabTitle) {
    elementTabTitle.onclick = WidgetTabController.switchTitle;
};
WidgetTabController.prototype.hideInactive = function (elementTabTitle, elementTabContent) {
    $(elementTabContent).hide();
    if ($(elementTabTitle).hasClass(WidgetTabController._classIsActive)) {
        $(elementTabContent).show();
    }
};
WidgetTabController.switchTitle = function (e) {
    if (!$(this).hasClass(WidgetTabController._classIsActive)) {
        $(this).siblings().removeClass(WidgetTabController._classIsActive);
        $(this).addClass(WidgetTabController._classIsActive);

        this.showContent(this.index(), this._widgetTabController);
    }
};
WidgetTabController.prototype.showContent = function (index, tabItem) {
    var childList = tabItem.context.childNodes;
    var $childList = $(childList);
    var divContentGroup = null;
    $childList.each(function (childIndex) {
        var $childItem = $(childList[childIndex]);
        if ($childItem.is("div") && $childItem.hasClass(WidgetTabController._classWidgetTabContentGroup)) {
            divContentGroup = $childItem;

            var contentGroupChildList = divContentGroup.context.childNodes;
            var $contentGroupChildList = $(contentGroupChildList);
            $contentGroupChildList.each(function (contentGroupChildIndex) {
                var $contentGroupChildItem = $(contentGroupChildList[contentGroupChildIndex]);

                if ($contentGroupChildItem.hasClass(WidgetTabController._classWidgetTabContent)) {
                    LogController.log("widgetTabContent = %d", $contentGroupChildItem.index());

                    if ($contentGroupChildItem.index() == index) {
                        $contentGroupChildItem.slideDown(this.slideSpeed);
                    } else {
                        $contentGroupChildItem.slideUp(this.slideSpeed);
                    }
                    // eventList.each(function(eventIndex) {
                    //     LogController.log("eventList = %d", eventIndex);
                    //     var eventItem = eventList[eventIndex];
                    //     eventItem && eventItem($childItem);
                    // })
                }
            })
        }
    })
};
