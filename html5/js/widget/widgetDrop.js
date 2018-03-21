function WidgetDropController() {
};
WidgetDropController.name = "WidgetDropController";

WidgetDropController.prototype.init = function (d) {
    logController.log(this.name, "->", arguments.callee.name);

    // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
    document.ondragover = this.documentOndragover;
    document.ondrop = this.documentOndrop;

    var dropList = document.getElementsByClassName("widgetDrop");
    var $dropList = $(dropList);
    $dropList.each(function (dropIndex) {
        var $dropItem = $(dropList[dropIndex]);
        $dropItem.context.ondragover = this.itemOndragover;
        $dropItem.context.ondragenter = this.itemOndragenter;
        $dropItem.context.ondragleave = this.itemOndragleaver;
        $dropItem.context.ondrop = this.itemOndrop;
    })
};
WidgetDropController.prototype.documentOndragover = function (e) {
    e.preventDefault(); // 只有在ondragover中阻止默认行为才能触发ondrop而不是ondragleave
};
WidgetDropController.prototype.documentOndrop = function (e) {
    e.preventDefault(); // 阻止ondrop的默认行为（在新窗口中打开拖进的图片）
};
WidgetDropController.prototype.itemOndragover = function (e) {
    e.stopPropagation();
    e.preventDefault();
};
WidgetDropController.prototype.itemOndragenter = function (e) {
    e.currentTarget.style.borderColor = 'gray';
    e.currentTarget.style.backgroundColor = 'white';
    e.stopPropagation();
    e.preventDefault();
};
WidgetDropController.prototype.itemOndragleaver = function (e) {
    e.currentTarget.style.borderColor = 'silver';
    e.currentTarget.style.backgroundColor = 'transparent';
    e.stopPropagation();
    e.preventDefault();
};
WidgetDropController.prototype.itemOndrop = function (e) {
    e.currentTarget.style.borderColor = 'silver';
    e.currentTarget.style.backgroundColor = 'transparent';
    e.stopPropagation();
    e.preventDefault();
    this.handleFiles(e.dataTransfer.files);
};
WidgetDropController.prototype.handleFiles = function (files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        this.readFile(file);
    }
};
WidgetDropController.prototype.readFile = function (file) {
    alert("a");
    if (file.type.match(/image*/)) {
        var img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;

        var item = document.getElementById("widgetDrop_root");
        item.appendChild(img);

        var reader = new FileReader();
        reader.onload = function () {
            console.log(reader.result);
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
    } else {
        // <input id="File1" type="file" value="" name ="file"/ >
        var input = document.createElement("input");
        input.classList.add("obj");

        var item = document.getElementById("editBox");
        item.appendChild(input);

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
};
