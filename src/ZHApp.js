exports.init = init;

const electron = require('electron')
const app = electron.app

var _window = require('./ZHWindow')

function init () {
    app.on('ready', _window.init)
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    app.on('activate', _window.activate)
}