function getOffsetTopToParent(element, parentElement) {
    return element.offsetTop + ((element.offsetParent && element.offsetParent != parentElement) ? arguments.callee(element.offsetParent, parentElement) : 0);
}
function getOffsetLeftToParent(element, parentElement) {
    return element.offsetLeft + ((element.offsetParent && element.offsetParent != parentElement) ? arguments.callee(element.offsetParent, parentElement) : 0);
}
function getParentWithTag(element, parentTag) {
    var parentElement = element.parentNode;
    var tag = parentElement.tagName; //获取标签类型
    if (tag == parentTag) {
        return parentElement;
    } else {
        return arguments.callee(parentElement, parentTag)
    }
}

