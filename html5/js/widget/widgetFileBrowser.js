function WidgetFileBrowser() {
    this._menuFoldCtrl = new WidgetMenuFold();
    this._flexCtrl = new WidgetFlex();
    this._nowFolder = "/";
}

WidgetFileBrowser._jsonFileBrowser = null;

WidgetFileBrowser.prototype.create = function (elementParent) {
    // 从服务器获取数据，如果失败，从历史获取数据
    var ajax = new XMLHttpRequest(); // 创建对象
    ajax._widgetFileBrowser = this;
    ajax.onreadystatechange = function (ev) {
        console.log("ajax._widgetFileBrowser : ", ajax._widgetFileBrowser);
        // console.log("ajax : ", ajax.readyState);
        // 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
        // 0: 请求未初始化
        // 1: 服务器连接已建立
        // 2: 请求已接收
        // 3: 请求处理中
        // 4: 请求已完成，且响应已就绪
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var text = ajax.responseText;
            } else if (ajax.status == 404) {
                var text = ajax.responseText;
            }
        }
    }
    var url = confHttpRoot + "";


    ajax.open("GET", url); // 请求
    ajax.send(); // 请求
    // 在上面的例子中，您可能得到的是缓存的结果。
    // 为了避免这种情况，请向 URL 添加一个唯一的 ID：
    // ajax.open("GET","demo_get.asp?t=" + Math.random(),true);
    // ajax.send();
    // 如果您希望通过 GET 方法发送信息，请向 URL 添加信息
    // xmlhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);
    // xmlhttp.send();
    // 以下情况，请使用 POST 请求：
    // 无法使用缓存文件（更新服务器上的文件或数据库）
    // 向服务器发送大量数据（POST 没有数据量限制）
    // 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
    // ajax.open("POST", url); // 请求
    // ajax.send(string); // 请求，string：仅用于 POST 请求
    // POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
    // xmlhttp.open("POST","ajax_test.asp",true);
    // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xmlhttp.send("fname=Bill&lname=Gates");


    //     success: function(str) {    //这里的json就是从后台获取的借口。
    //         // var obj = this.data;
    //         // // 现在就可以愉快的使用发送ajax请求时的参数啦
    //         // alert(obj.widgetFileBrowser);
    //
    //
    //         // console.log(str);
    //         // var jsonD = JSON.parse(str);
    //         // console.log(jsonD);
    //         // for (var i = 0; i < jsonD.length; i++) {
    //             // var oLi = document.createElement('li');
    //             // oLi.innerHTML = "<h4>"+ jsonD[i].title +"</h4><p>"+ jsonD[i].content +"</p>" oUl.appendChild(oLi);
    //         // }
    //     },
    //     error: function (req, err) {
    //         console.log("error : " + err);
    //         // var obj = this.data;
    //         // // 现在就可以愉快的使用发送ajax请求时的参数啦
    //         // alert(obj.widgetFileBrowser);
    //     }
    // });


    WidgetFileBrowser._jsonFileBrowser = WidgetHistory.getFileBrowser();
    // WidgetLog.log(JSON.stringify(jsonObj, null, 2));

    this._divMain = WidgetHtml.addDiv(elementParent);
    this._divMain.classList.add("widgetFileBrowserMain");

    this._divLeft = WidgetHtml.addDiv(this._divMain);
    this._divLeft.classList.add("widgetFileBrowserLeft");

    this._divMiddle = WidgetHtml.addDiv(this._divMain);
    this._divMiddle.classList.add("widgetFileBrowserMiddle");

    this._divRight = WidgetHtml.addDiv(this._divMain);
    this._divRight.classList.add("widgetFileBrowserRight");

    this.init(this._divLeft, this._divMiddle, this._divRight);
}

WidgetFileBrowser.prototype.init = function (left, middle, right) {
    middle.onmousedown = function (e) {
        var x = (e || event).clientX;
        middle.left = middle.offsetLeft;
        document.onmousemove = function (e) {
            var iT = middle.left + ((e || event).clientX - x);
            var maxT = document.body.clientWidth;
            iT < 30 && (iT = 30);
            iT > maxT && (iT = maxT);
            middle.style.left = left.style.width = iT + "px";
            return false
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            middle.releaseCapture && middle.releaseCapture()
        };
        middle.setCapture && middle.setCapture();
        return false
    };

    this.initLeft(left);
    this.initRight(right);
};
WidgetFileBrowser.prototype.initLeft = function (left) {
    var jsonObjCtrl = new JsonObjCtrl(this, null, false, "root");
    jsonObjCtrl._keyShow = "全部文件";
    jsonObjCtrl._onContextMenu = WidgetFileJsonMould.onContextMenuRoot;
    var foldItem = this._menuFoldCtrl.createMenuFold(left, jsonObjCtrl);

    this.readFileBrowser(WidgetFileBrowser._jsonFileBrowser, "/", foldItem);
};
WidgetFileBrowser.prototype.initRight = function (right) {
    this._flexCtrl.createFlex(right, '全部文件');
};
WidgetFileBrowser.prototype.readFileBrowser = function (jsonObj, pathParent, elementParent) {
    for (var key in jsonObj) {
        var value = jsonObj[key];
        if (typeof(value) == WidgetKey._object) {
            var pathChild = pathParent;
            var fold = elementParent;
            var type = value[WidgetKey._type];
            var folderList = value[WidgetKey._folderList];
            var isHasChild = false;

            if (type == WidgetKey._folder) {
                pathChild += key;
                pathChild += "/";
                value["path"] = pathChild;

                if (folderList) {
                    for (var i in folderList) {
                        isHasChild = true;
                        var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
                        fold = this._menuFoldCtrl.addFold(elementParent, jsonObjCtrl);
                        break;
                    }
                }

                var jsonObjCtrl = new JsonObjCtrl(this, jsonObj, false, key);
                jsonObjCtrl._keyShow = key;
                jsonObjCtrl._onClick = WidgetFileBrowser.onClickFolderName;

                var element = WidgetHtml.addLabel(fold, jsonObjCtrl);
                element._jsonObj = value;
                element.classList.add("widgetFileBrowserLeftFolderName");
                // element = WidgetHtml.addLabel(fold, this, pathChild, pathChild, WidgetFileBrowser.onClickFolderPath, null);
                // element.classList.add("widgetFileBrowserLeftFolderPath");
                WidgetHtml.addBr(fold);
                if (isHasChild) {
                    fold = this._menuFoldCtrl.addFoldItem(fold);
                }
            }
            if (isHasChild) {
                this.readFileBrowser(folderList, pathChild, fold);
            }
        }
    }
}
WidgetFileBrowser.prototype.refreshFileBrowserLeft = function () {
    removeElementChild(this._divLeft);
    this.initLeft(this._divLeft);

    var jsonObjFolder = WidgetFileBrowser.getJsonObjPath(this._nowFolder);
    this.refreshFileBrowserRight(jsonObjFolder); // 记住当前选中文件夹，刷新
};
WidgetFileBrowser.prototype.refreshFileBrowserRight = function (jsonObj) {
    this._flexCtrl.clearFlexItem();

    if (typeof(jsonObj) == WidgetKey._object) {
        var path = jsonObj["path"];

        var fileList = jsonObj[WidgetKey._fileList];
        for (var o in fileList) {
            var key = o;
            var value = fileList[o];
            if (typeof(value) == WidgetKey._object) {
                var extend = value[WidgetKey._extend];
                var rightContent = document.createElement("div");
                // rightContent.innerHTML = path + key + extend;
                rightContent.innerHTML = key + extend;
                var flexItem = this._flexCtrl.addFlexItem(rightContent);
                flexItem.classList.add("widgetFileBrowserRightContent");
            }
        }
    }
};
WidgetFileBrowser.prototype.refreshFileBrowserRightPath = function (path) {
    this._nowFolder = path;
    var jsonObj = WidgetFileBrowser.getJsonObjPath(path);
    this.refreshFileBrowserRight(jsonObj);
};
// WidgetFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
//     for (var i = 0; i < folderList.length; i++) {
//         var item = folderList[i];
//         if (item.length > 0) {
//             for (var o in jsonObj) {
//                 var key = o;
//                 var value = jsonObj[key];
//                 var keyShow = value[WidgetKey._title];
//                 if (item == keyShow) {
//                     var folderListNew = folderList.slice(i + 1, folderList.length + 1);
//                     var jsonObjNew = value[WidgetKey._folderList];
//                     return WidgetFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
//                 }
//             }
//         }
//         if (i == folderList.length - 1) {
//             return jsonObjOrg;
//         }
//     }
//     return null;
// }

WidgetFileBrowser.getJsonObjPath = function (folder) {
    var folderList = folder.split("/");
    return WidgetFileBrowser.getJsonObjFolder(folderList, WidgetFileBrowser._jsonFileBrowser, WidgetFileBrowser._jsonFileBrowser);
}
WidgetFileBrowser.getJsonObjFolder = function (folderList, jsonObj, jsonObjOrg) {
    for (var i = 0; i < folderList.length; i++) {
        var item = folderList[i];
        if (item.length > 0) {
            var value = jsonObj[item];
            if (value) {
                var folderListNew = folderList.slice(i + 1, folderList.length + 1);
                var jsonObjNew = value[WidgetKey._folderList];
                return WidgetFileBrowser.getJsonObjFolder(folderListNew, jsonObjNew, value);
            }
        }
        if (i == folderList.length - 1) {
            return jsonObjOrg;
        }
    }
    return null;
}
WidgetFileBrowser.onClickFolderName = function () {
    var widgetFileBrowser = this._jsonObjCtrl._exec;
    widgetFileBrowser._nowFolder = this._jsonObj["path"];
    widgetFileBrowser.refreshFileBrowserRight(this._jsonObj);
    if (widgetFileBrowser._nowFolderElement) {
        widgetFileBrowser._nowFolderElement.value = widgetFileBrowser._nowFolder;
    }
}
WidgetFileBrowser.onClickFolderPath = function () {
    var widgetFileBrowser = this._jsonObjCtrl._exec;
    widgetFileBrowser.refreshFileBrowserRight(this._jsonObj);
}
