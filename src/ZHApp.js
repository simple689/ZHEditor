exports.init = init;

const electron = require('electron')
const app = electron.app

var _window = require('./ZHWindow')

function a () {
}

function init () {
    // app.on('will-finish-launching', a) 不用
    app.on('ready', _window.init)
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    // app.on('before-quit', a)
    // app.on('will-quit', a)
    // app.on('quit', a)
    // app.on('open-file', a)
    // app.on('open-url', a)
    app.on('activate', _window.activate)
    // app.on('browser-window-blur', a)
    // app.on('browser-window-focus', a)
    app.on('browser-window-created', a)
    // app.on('certificate-error', a)
    // app.on('select-client-certificate', a)
    // app.on('login', a)
    // app.on('gpu-process-crashed', a)
}