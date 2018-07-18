function removeFileFolder(str) {
    var strNew = str;
    if (strNew == "\/") {
        return "";
    }
    if (strNew[strNew.length - 1] == "\/") {
        strNew = strNew.substring(0, strNew.length - 1);
    }
    var index = strNew.lastIndexOf("\/");
    strNew = strNew.substring(index + 1, strNew.length);
    return strNew;
}
function removeFileExtend(str) {
    var index = str.lastIndexOf(".");
    var strNew = str.substring(0, index);
    return strNew;
}
function changeFileExtend(str, extend) {
    var strNew = removeFileExtend(str);
    strNew += extend;
    return strNew;
}
function getFileExtend(str) {
    var index = str.lastIndexOf(".");
    var strNew = "";
    if (index != -1) {
        strNew = str.substring(index, str.length);
    }
    return strNew;
}
function getFileTitle(str) {
    var strNew = removeFileFolder(str);
    strNew = removeFileExtend(str);
    return strNew;
}