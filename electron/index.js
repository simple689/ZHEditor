const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const fs = require('fs')

let win
// webpack
var resPath = "res/"
// var resPath = "res.asar/"
// var asarDir = fs.readdirSync('res.asar')

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 }) // 创建浏览器窗口
  // win.webContents.openDevTools() // 打开开发者工具
  win.loadFile(resPath + 'index.html') // 然后加载应用的 index.html
  win.on('closed', () => { // 当 window 被关闭，这个事件会被触发
    // 取消引用 window 对象，如果你的应用支持多窗口的话
    // 通常会把多个 window 对象存放在一个数组里面
    // 与此同时，你应该删除相应的元素
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数
// 部分 API 在 ready 事件触发后才能使用
app.on('ready', createWindow)

app.on('window-all-closed', () => { // 当全部窗口关闭时退出
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出
  // 否则绝大部分应用及其菜单栏会保持激活
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时
  // 通常在应用程序中重新创建一个窗口
  if (win === null) {
    createWindow()
  }
})

// 主进程代码