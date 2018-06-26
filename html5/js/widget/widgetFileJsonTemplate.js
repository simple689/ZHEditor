function WidgetFileJsonTemplate() {
}

WidgetFileJsonTemplate.prototype.init = function (fileJsonCtrl, jsonTemlateName) {
    this._fileJsonCtrl = fileJsonCtrl;
    this._jsonTemlateName = jsonTemlateName;
    this._jsonTemplateObj = WidgetHistory.getFileJsonTemplate(this._jsonTemlateName);
    if (!this._jsonTemplateObj) {
        this.initTemplate();
    }
    WidgetHistory.setFileJsonTemplate(this._jsonTemlateName, this._jsonTemplateObj);
    // Log.log("========================================");
    // Log.log(JSON.stringify(this._jsonTemplateObj, null, 2));
    // Log.log("========================================");
}
WidgetFileJsonTemplate.prototype.initTemplate = function () {
    this._jsonTemplateObj = {};
    this._jsonTemplateObj["ignore"] = {};
    this._jsonTemplateObj["ignore"]["beginList"] = new Array();
    this._jsonTemplateObj["ignore"]["beginList"].push("$");

    this._jsonTemplateObj["file"] = {};
    this.createTemplate(this._fileJsonCtrl._jsonObj, this._jsonTemplateObj, "", this._jsonTemplateObj["file"]);
}
WidgetFileJsonTemplate.prototype.createTemplate = function (jsonObj, jsonTemplateObj, keyParent, jsonObjParent) {
    for (var o in jsonObj) {
        var key = o;

        var isIgnore = false;
        for (var ignoreIndex in jsonTemplateObj["ignore"]["beginList"]) {
            var ignoreValue = jsonTemplateObj["ignore"]["beginList"][ignoreIndex];
            var isStart = key.indexOf(ignoreValue);
            if (isStart == 0) {
                isIgnore = true;
                break;
            }
        }
        if (isIgnore) {
            continue;
        }

        var value = jsonObj[key];
        // Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        if (typeof(value) == "object") {
            var keyChild = keyParent;
            keyChild += "->";
            keyChild += key;
            keyChild += "->";
            jsonObjParent[key] = {};
            this.createTemplate(value, jsonTemplateObj, keyChild, jsonObjParent[key]);
        } else if (typeof(value) == "string") {
            jsonObjParent[key] = {"showTitle": key, "valueType": "string"};
        } else if (typeof(value) == "number") {
            jsonObjParent[key] = {"showTitle": key, "valueType": "number"};
        } else if (typeof(value) == "boolean") {
            jsonObjParent[key] = {"showTitle": key, "valueType": "boolean"};
        } else {
            var strType = typeof(value);
            jsonObjParent[key] = {"showTitle": key, "valueType": strType};
            Log.log("[" + typeof(value) + "]" + keyParent + key + " = " + value);
        }
    }
}
WidgetFileJsonTemplate.prototype.isTemplateIgnore = function (key) {
    for (var i in this._jsonTemplateObj.ignore.beginList) {
        var isStart = key[i].indexOf("$");
        if (isStart == 0) {
            return true;
        }
    }
    return false;
}
