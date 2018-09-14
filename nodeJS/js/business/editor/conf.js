module.exports = Conf;

function Conf() {
}

Conf._httpCom = "127.0.0.1";
Conf._httpPort = "6989";

Conf._pathRes = "/res";
Conf._pathResFileBrowser = Conf._pathRes + "/fileBrowser";

Conf._mysql = {};
Conf._mysql._db = "ZHEditor";

Conf._mysqlTable = {};
Conf._mysqlTable._user = "user";

Conf._mysqlUser = {};
Conf._mysqlUser._name = "name";
