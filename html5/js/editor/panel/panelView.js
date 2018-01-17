var lastActiveTitleId = "widgetTabContentHome";

function appendWidgetTab() {
    var lastActiveLi = document.getElementById(lastActiveTitleId);
    // lastActiveLi.remove("isActive");

    var li = document.createElement("li");
    li.classList.add("widgetTabTitle");
    // li.classList.add("isActive");
    li.innerHTML="new";
    widgetTabTitleGroup.appendChild(li);

    var div = document.createElement("div");
    div.classList.add("widgetTabContent");
    div.innerHTML="new";
    widgetTabContentGroup.appendChild(div);
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
