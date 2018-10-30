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

const {ipcRenderer} = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
  
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')