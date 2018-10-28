(function () {
    var js_module = typeof module === 'object' && module.exports;
    if (js_module) {
        module.exports = Test;
    }
})();

function Test() {
}

function a() {
  console.log('hello a!')
}
console.log('hello world!')

document.body.addEventListener('click', () => {
  console.log('hello vscode!')
  a();
})