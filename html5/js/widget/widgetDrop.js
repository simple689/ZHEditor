var widgetDropController = {
    name: "widgetDropController",

    init: function (d) {
        logController.log(this.name, "->", arguments.callee.name);

        // 拖拽的目标对象document监听drop并防止浏览器打开客户端的图片
        document.ondragover = widgetDropController.documentOndragover;
        document.ondrop = widgetDropController.documentOndrop;

        var dropList = document.getElementsByClassName("widgetDrop");
        var $dropList = $(dropList);
        $dropList.each(function (dropIndex) {
            var $dropItem = $(dropList[dropIndex]);
            $dropItem.context.ondragover = widgetDropController.itemOndragover;
            $dropItem.context.ondragenter = widgetDropController.itemOndragenter;
            $dropItem.context.ondragleave = widgetDropController.itemOndragleaver;
            $dropItem.context.ondrop = widgetDropController.itemOndrop;
        })
    },

    documentOndragover : function (e) {
        e.preventDefault(); // 只有在ondragover中阻止默认行为才能触发ondrop而不是ondragleave
    },
    documentOndrop : function (e) {
        e.preventDefault(); // 阻止ondrop的默认行为（在新窗口中打开拖进的图片）
    },
    itemOndragover : function (e) {
        e.stopPropagation();
        e.preventDefault();
    },
    itemOndragenter : function (e) {
        e.currentTarget.style.borderColor = 'gray';
        e.currentTarget.style.backgroundColor = 'white';
        e.stopPropagation();
        e.preventDefault();
    },
    itemOndragleaver : function (e) {
        e.currentTarget.style.borderColor = 'silver';
        e.currentTarget.style.backgroundColor = 'transparent';
        e.stopPropagation();
        e.preventDefault();
    },
    itemOndrop : function (e) {
        e.currentTarget.style.borderColor = 'silver';
        e.currentTarget.style.backgroundColor = 'transparent';
        e.stopPropagation();
        e.preventDefault();
        widgetDropController.handleFiles(e.dataTransfer.files);
    },

    handleFiles: function (files) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            widgetDropController.readFile(file);
        }
    },

    readFile: function (file) {
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
    }
};
