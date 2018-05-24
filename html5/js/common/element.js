function getOffsetTopToParent(element, parentElement) {
    return element.offsetTop + ((element.offsetParent && element.offsetParent != parentElement) ? arguments.callee(element.offsetParent, parentElement) : 0);
}
function getOffsetLeftToParent(element, parentElement) {
    return element.offsetLeft + ((element.offsetParent && element.offsetParent != parentElement) ? arguments.callee(element.offsetParent, parentElement) : 0);
}
