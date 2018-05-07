function WidgetFileController() {
};
WidgetFileController.prototype.init = function () {
};
WidgetFileController.prototype.readFile = function (file, elementParent, widgetTabController) {
    var elementContent = document.createElement("div");
    elementParent.appendChild(elementContent);

    elementContent.textContent = "新内容";

    if (file.type.match("application/json")) {
        var input = document.createElement("input");
        input.classList.add("obj");

        elementContent.appendChild(input);

        var reader = new FileReader();
        reader.onload = function () {
            console.log(reader.result);
            var jsonStr = reader.result;
            input.value = jsonStr;

            isJson = function (obj) {
                var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
                isjson = !isjson;
                console.log(isjson);
                return isjson;
            }
            if (!isJson(jsonStr)) return;

            var jsonObj = eval('(' + jsonStr + ')');
            console.log(jsonObj);
            for (var j = 0; j < jsonObj.length; j++) {
                alert(jsonObj[j].id);
                alert(jsonObj[j].name);
            }
            for (var o in jsonObj) {
                console.log(o);
                console.log(jsonObj[o]);
                console.log(typeof(jsonObj[o]));
                if (typeof(jsonObj[o]) == "object") {
                    for (var o1 in jsonObj[o]) {
                        console.log(o1);
                        console.log(jsonObj[o][o1]);
                    }
                }
            }
        }
        reader.readAsText(file);
    }
    // if (file.type.match(/image*/)) {
    //     var img = document.createElement("img");
    //     img.classList.add("obj");
    //     img.file = file;
    //
    //     var item = document.getElementById("widgetDrop_root");
    //     item.appendChild(img);
    //
    //     var reader = new FileReader();
    //     reader.onload = function () {
    //         console.log(reader.result);
    //         img.src = reader.result;
    //     }
    //     reader.readAsDataURL(file);
    // }
};
