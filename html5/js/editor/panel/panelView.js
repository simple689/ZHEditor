var lastActiveTitleId = "widgetTabContentHome";

function appendWidgetTab() {
    var lastActiveLi = document.getElementById(lastActiveTitleId);
    // lastActiveLi.remove("isActive");

    var li = document.createElement("li");
    li.classList.add("widgetTabTitle");
    // li.classList.add("isActive");
    li.innerHTML="new";
    li.id="aaa";
    widgetTabTitleGroup_root.appendChild(li);

    var div = document.createElement("div");
    div.classList.add("widgetTabContent");
    div.innerHTML="new";
    widgetTabTitleGroup_root.appendChild(div);

    // widgetTab.switchTab2();
}

// exe
//========
$(document).ready(function(){
    console.log("[panelView]");

    appendWidgetTab();

    var input = document.createElement("input");
    input.classList.add("obj");
    widgetTabContentHome.appendChild(input);
})
