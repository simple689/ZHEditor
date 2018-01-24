exports.init = init;
exports.activate = activate;

const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app

let window
const url = require('url')
const path = require('path')

var _menu = require('./ZHMenu')

function init () {
  const screen = electron.screen
  var size = screen.getPrimaryDisplay().workAreaSize;
  // var width = 600;
  // var widthSide = 5;
  // window = new BrowserWindow({width: width + widthSide, height: size.height, x: size.width - width, y : 0, show: false})
  // window = new BrowserWindow({width: 1280, height: 720, show: false})
  window = new BrowserWindow({width: size.width, height: size.height, show: false})

  window.loadURL(url.format({
    // pathname: path.join(__dirname + '/../res/html', 'index.html'),
    pathname: path.join(__dirname + '/../html5/html/editor/dock', 'dock.html'),
    protocol: 'file:',
    slashes: true
  }))
  // window.loadURL('https://github.com');

  // window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })

  _menu.init();
  
  window.show();
}

function activate () {
  if (window === null) {
    init()
  }
}