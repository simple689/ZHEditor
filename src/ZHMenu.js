exports.init = init;

const electron = require('electron')
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

var _menuTemplate = require('./ZHMenuTemplate')

function init () {      
    var menu = Menu.buildFromTemplate(_menuTemplate.getTemplateEmpty());
    // var menu = Menu.buildFromTemplate(_menuTemplate.getTemplate());
    Menu.setApplicationMenu(menu);
}