var lastActiveTitleId = "widgetTabContentHome";

function appendWidgetTab() {
    var li = document.createElement("li");
    li.classList.add("widgetTabTitle");
    li.innerHTML="new";
    li.id="new";
    widgetTabTitleGroup_root.appendChild(li);

    var div = document.createElement("div");
    div.classList.add("widgetTabContent");
    div.innerHTML="new";
    widgetTabContentGroup_root.appendChild(div);

    widgetTabController.switchTitle($(li));
}

// exe
//========
$(document).ready(function(){
    console.log("[panelView]");

    appendWidgetTab();
    widgetTabController.init();

    // var input = document.createElement("input");
    // input.classList.add("obj");
    // widgetTabContentHome.appendChild(input);
})
