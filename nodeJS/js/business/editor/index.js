const Conf = require('./conf.js');
const ModuleServer = require('../../module/moduleServer.js');

var moduleServer = new ModuleServer();
moduleServer.create(Conf._httpCom, Conf._httpPort);