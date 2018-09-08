const Conf = require('./conf.js');
const ModuleServer = require('../../module/moduleServer.js');

var _moduleServer = new ModuleServer();
_moduleServer.create(Conf._httpCom, Conf._httpPort);